from pydantic import BaseModel

class ResumeScore(BaseModel):
    cgpa: float
    skills: list[str]
    projects: int
    internships: int
    certifications: int