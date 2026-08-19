from pydantic import BaseModel


class Student(BaseModel):

    name: str
    email: str
    branch: str
    year: int
    cgpa: float
    password: str

    skills: int = 0
    projects: int = 0
    internships: int = 0
    certifications: int = 0

    class Config:
        from_attributes = True