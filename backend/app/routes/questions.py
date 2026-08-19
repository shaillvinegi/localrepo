from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.database.database import SessionLocal
from app.models.question import Question
from app.schemas.question import QuestionCreate, QuestionResponse


router = APIRouter()


# ==========================================
# DATABASE CONNECTION
# ==========================================

def get_db():

    db = SessionLocal()

    try:
        yield db

    finally:
        db.close()


# ==========================================
# CREATE QUESTION
# ==========================================

@router.post(
    "/questions",
    response_model=QuestionResponse
)
def create_question(
    question: QuestionCreate,
    db: Session = Depends(get_db)
):

    new_question = Question(
        title=question.title,
        description=question.description,
        domain=question.domain,
        topic=question.topic,
        difficulty=question.difficulty,
        question_type=question.question_type,
        examples=question.examples,
        constraints=question.constraints,
        starter_code=question.starter_code,
        test_cases=question.test_cases
    )

    db.add(new_question)
    db.commit()
    db.refresh(new_question)

    return new_question


# ==========================================
# GET QUESTIONS WITH FILTERS
# ==========================================

@router.get("/questions")
def get_questions(
    domain: str | None = None,
    difficulty: str | None = None,
    topic: str | None = None,
    question_type: str | None = None,
    limit: int | None = None,
    db: Session = Depends(get_db)
):

    query = db.query(Question)

    # Domain filter
    if domain:
        query = query.filter(
            Question.domain == domain
        )

    # Difficulty filter
    if difficulty:
        query = query.filter(
            Question.difficulty == difficulty
        )

    # Topic filter
    if topic:
        query = query.filter(
            Question.topic == topic
        )

    # Question type filter
    if question_type:
        query = query.filter(
            Question.question_type == question_type
        )

    # Limit number of questions
    if limit:
        query = query.limit(limit)

    return query.all()


# ==========================================
# GET QUESTION BY ID
# ==========================================

@router.get(
    "/questions/{question_id}",
    response_model=QuestionResponse
)
def get_question(
    question_id: int,
    db: Session = Depends(get_db)
):

    question = db.query(Question).filter(
        Question.id == question_id
    ).first()

    if question is None:

        raise HTTPException(
            status_code=404,
            detail="Question not found"
        )

    return question