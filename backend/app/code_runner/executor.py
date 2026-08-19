import subprocess
import tempfile
import os
import re


def normalize_output(output: str) -> str:
    """
    Normalizes program output so formatting differences
    such as spaces do not cause a correct answer to fail.
    """

    if output is None:
        return ""

    output = output.strip()

    # Remove Java environment messages
    lines = output.splitlines()

    clean_lines = []

    for line in lines:

        if line.startswith("Picked up JAVA_TOOL_OPTIONS:"):
            continue

        clean_lines.append(line)

    output = "\n".join(clean_lines)

    # Remove whitespace
    output = re.sub(r"\s+", "", output)

    return output


def run_java_code(code: str, test_cases: list):

    results = []

    with tempfile.TemporaryDirectory() as temp_dir:

        java_file = os.path.join(
            temp_dir,
            "Main.java"
        )

        # ==========================================
        # WRITE JAVA FILE
        # ==========================================

        with open(
            java_file,
            "w",
            encoding="utf-8"
        ) as file:

            file.write(code)


        # ==========================================
        # COMPILE
        # ==========================================

        compile_process = subprocess.run(
            ["javac", java_file],
            capture_output=True,
            text=True,
            timeout=10
        )


        if compile_process.returncode != 0:

            return {
                "success": False,
                "compile_error": compile_process.stderr,
                "passed": 0,
                "total": len(test_cases),
                "results": []
            }


        # ==========================================
        # RUN TEST CASES
        # ==========================================

        for index, test_case in enumerate(test_cases):

            input_data = test_case.get(
                "input",
                ""
            )

            expected_output = test_case.get(
                "output",
                ""
            )


            try:

                run_process = subprocess.run(
                    [
                        "java",
                        "-cp",
                        temp_dir,
                        "Main"
                    ],

                    input=input_data,

                    capture_output=True,

                    text=True,

                    timeout=5
                )


                actual_output = (
                    run_process.stdout
                )


                # ==================================
                # NORMALIZE OUTPUT
                # ==================================

                normalized_actual = normalize_output(
                    actual_output
                )

                normalized_expected = normalize_output(
                    expected_output
                )


                passed = (
                    run_process.returncode == 0
                    and
                    normalized_actual ==
                    normalized_expected
                )


                results.append({

                    "test_case": index + 1,

                    "passed": passed,

                    "input": input_data,

                    "expected": expected_output,

                    "actual": actual_output.strip(),

                    "error": run_process.stderr.strip()

                })


            except subprocess.TimeoutExpired:

                results.append({

                    "test_case": index + 1,

                    "passed": False,

                    "input": input_data,

                    "expected": expected_output,

                    "actual": "",

                    "error": "Time Limit Exceeded"

                })


        # ==========================================
        # FINAL RESULT
        # ==========================================

        passed_count = sum(
            1
            for result in results
            if result["passed"]
        )


        return {

            "success": True,

            "compile_error": None,

            "passed": passed_count,

            "total": len(results),

            "results": results

        }