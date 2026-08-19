from app.schemas.prediction import Prediction
from app.services.predict import predict_placement
from fastapi import APIRouter, UploadFile, File
import shutil
import os

from app.services.parser import extract_text, extract_skills
from app.schemas.resume_score import ResumeScore
from app.services.resume_score import calculate_resume_score

router = APIRouter()

UPLOAD_FOLDER = "uploads"


@router.post("/upload-resume")
def upload_resume(file: UploadFile = File(...)):

    file_path = os.path.join(
        UPLOAD_FOLDER,
        file.filename
    )

    with open(file_path, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)

    text = extract_text(file_path)
    skills = extract_skills(text)

    return {
        "message": "Resume uploaded successfully!",
        "filename": file.filename,
        "text": text,
        "skills": skills
    }

@router.post("/resume-score")
def resume_score(data: ResumeScore):

    result = calculate_resume_score(
        data.cgpa,
        data.skills,
        data.projects,
        data.internships,
        data.certifications
    )

    return result

@router.post("/predict-placement")
def predict(data: Prediction):

    result = predict_placement(data)

    return result