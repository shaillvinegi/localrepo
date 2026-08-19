from pydantic import BaseModel

class Prediction(BaseModel):
    cgpa: float
    skills: int
    projects: int
    internships: int
    certifications: int