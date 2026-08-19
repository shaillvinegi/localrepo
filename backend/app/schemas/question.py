from pydantic import BaseModel


class QuestionBase(BaseModel):

    title: str

    description: str

    domain: str

    topic: str

    difficulty: str

    question_type: str

    examples: str | None = None

    constraints: str | None = None

    starter_code: str | None = None

    test_cases: str | None = None


class QuestionCreate(QuestionBase):
    pass


class QuestionResponse(QuestionBase):

    id: int

    class Config:
        from_attributes = True