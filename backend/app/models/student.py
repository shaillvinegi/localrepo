from sqlalchemy import Column, Integer, String, Float

from app.database.database import Base


class Student(Base):

    __tablename__ = "students"

    id = Column(Integer, primary_key=True, index=True)

    name = Column(String, nullable=False)

    email = Column(String, unique=True, nullable=False)

    branch = Column(String, nullable=False)

    year = Column(Integer, nullable=False)

    cgpa = Column(Float, nullable=False)

    password = Column(String, nullable=False)

    # NEW FIELDS

    skills = Column(Integer, default=0)

    projects = Column(Integer, default=0)

    internships = Column(Integer, default=0)

    certifications = Column(Integer, default=0)