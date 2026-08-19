from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.database.database import Base, engine

# Models
from app.models.question import Question

# Routes
from app.routes import student
from app.routes import resume
from app.routes import prediction
from app.routes import resources
from app.routes import questions
from app.routes import code


# ==========================================
# CREATE FASTAPI APP
# ==========================================

app = FastAPI(
    title="AI Powered Student Placement Assistant"
)


# ==========================================
# CREATE DATABASE TABLES
# ==========================================

Base.metadata.create_all(bind=engine)


# ==========================================
# CORS
# ==========================================

app.add_middleware(
    CORSMiddleware,

    allow_origins=["*"],

    allow_credentials=True,

    allow_methods=["*"],

    allow_headers=["*"]
)


# ==========================================
# ROUTES
# ==========================================

app.include_router(student.router)

app.include_router(resume.router)

app.include_router(prediction.router)

app.include_router(resources.router)

app.include_router(questions.router)

app.include_router(code.router)


# ==========================================
# HOME
# ==========================================

@app.get("/")
def home():

    return {
        "message": "AI Placement Assistant Backend Running!"
    }