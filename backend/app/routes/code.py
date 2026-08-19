from fastapi import APIRouter, HTTPException
from pydantic import BaseModel

from app.database.database import SessionLocal
from app.models.question import Question

from app.code_runner.wrapper import (
    create_array_wrapper,
    create_linked_list_wrapper
)

from app.code_runner.executor import run_java_code


router = APIRouter(
    prefix="/code",
    tags=["Code Execution"]
)


class CodeRunRequest(BaseModel):
    code: str
    question_id: int


@router.post("/run")
def run_code(request: CodeRunRequest):

    db = SessionLocal()

    try:

        question = (
            db.query(Question)
            .filter(Question.id == request.question_id)
            .first()
        )

        if not question:
            raise HTTPException(
                status_code=404,
                detail="Question not found"
            )

        import json

        try:
            test_cases = json.loads(
                question.test_cases
            )
        except Exception:
            raise HTTPException(
                status_code=500,
                detail="Invalid test cases in database"
            )

        if not test_cases:
            raise HTTPException(
                status_code=400,
                detail="No test cases available"
            )

        if question.topic == "Arrays":
            wrapper_function = create_array_wrapper

        elif question.topic == "Linked List":
            wrapper_function = create_linked_list_wrapper

        else:
            raise HTTPException(
                status_code=400,
                detail=(
                    f"Code execution for "
                    f"{question.topic} questions "
                    f"is not supported yet."
                )
            )

        all_results = []

        for index, test_case in enumerate(test_cases):

            try:

                wrapped_code = wrapper_function(
                    request.code,
                    test_case
                )

                result = run_java_code(
                    wrapped_code,
                    [test_case]
                )

                if result.get("results"):

                    test_result = result["results"][0]

                    test_result["test_case"] = index + 1

                    all_results.append(
                        test_result
                    )

                else:

                    all_results.append({
                        "test_case": index + 1,
                        "passed": False,
                        "input": test_case.get(
                            "input",
                            ""
                        ),
                        "expected": test_case.get(
                            "output",
                            ""
                        ),
                        "actual": "",
                        "error": result.get(
                            "compile_error",
                            "Execution failed"
                        )
                    })

            except Exception as e:

                all_results.append({
                    "test_case": index + 1,
                    "passed": False,
                    "input": test_case.get(
                        "input",
                        ""
                    ),
                    "expected": test_case.get(
                        "output",
                        ""
                    ),
                    "actual": "",
                    "error": str(e)
                })

        passed_count = sum(
            1
            for result in all_results
            if result["passed"]
        )

        total_count = len(all_results)

        return {
            "success": True,
            "compile_error": None,
            "passed": passed_count,
            "total": total_count,
            "results": all_results
        }

    finally:

        db.close()