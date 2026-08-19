from sqlalchemy import Column, Integer, String, Text

from app.database.database import Base


class Question(Base):

    __tablename__ = "questions"

    id = Column(
        Integer,
        primary_key=True,
        index=True
    )

    title = Column(
        String,
        nullable=False
    )

    description = Column(
        Text,
        nullable=False
    )

    domain = Column(
        String,
        nullable=False
    )

    topic = Column(
        String,
        nullable=True
    )

    difficulty = Column(
        String,
        nullable=False
    )

    question_type = Column(
        String,
        nullable=False
    )

    examples = Column(
        Text,
        nullable=True
    )

    constraints = Column(
        Text,
        nullable=True
    )

    input_format = Column(
        Text,
        nullable=True
    )

    output_format = Column(
        Text,
        nullable=True
    )

    starter_code = Column(
        Text,
        nullable=True
    )

    test_cases = Column(
        Text,
        nullable=True
    )