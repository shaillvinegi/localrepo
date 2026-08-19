from fastapi import APIRouter
from pydantic import BaseModel
import joblib

router = APIRouter()


class Prediction(BaseModel):
    cgpa: float
    skills: int
    projects: int
    internships: int
    certifications: int


model = joblib.load("app/ML/placement_model.pkl")


@router.post("/predict-placement")
def predict(data: Prediction):

    features = [[
        data.cgpa,
        data.skills,
        data.projects,
        data.internships,
        data.certifications
    ]]

    prediction = model.predict(features)[0]

    return {
        "placement_prediction": int(prediction)
    }