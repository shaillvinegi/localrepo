from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.database.database import SessionLocal
from app.models.student import Student
from app.schemas.student import Student as StudentSchema
from app.schemas.login import Login

router = APIRouter()


# Database Connection
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


# ===========================
# REGISTER STUDENT
# ===========================
@router.post("/register")
def register(student: StudentSchema, db: Session = Depends(get_db)):

    # Check if email already exists
    existing_student = db.query(Student).filter(
        Student.email == student.email
    ).first()

    if existing_student:
        return {
            "message": "Email already registered!"
        }

    # Create new student
    new_student = Student(
        name=student.name,
        email=student.email,
        branch=student.branch,
        year=student.year,
        cgpa=student.cgpa,
        password=student.password,
        skills=student.skills,
    projects=student.projects,
    internships=student.internships,
    certifications=student.certifications
    )

    # Save into database
    db.add(new_student)
    db.commit()
    db.refresh(new_student)

    return {
        "message": "Student Registered Successfully!"
    }


# ===========================
# LOGIN
# ===========================
@router.post("/login")
def login(user: Login, db: Session = Depends(get_db)):

    student = db.query(Student).filter(
        Student.email == user.email
    ).first()

    if not student:
        return {
            "message": "Email not found!"
        }

    if student.password != user.password:
        return {
            "message": "Incorrect password!"
        }

    return {
        "message": "Login Successful!",
        "student": {
            "id": student.id,
            "name": student.name,
            "email": student.email,
            "branch": student.branch,
            "year": student.year,
            "cgpa": student.cgpa
        }
    }


# ===========================
# GET ALL STUDENTS
# ===========================
@router.get("/students")
def get_students(db: Session = Depends(get_db)):
    students = db.query(Student).all()
    return students


# ===========================
# GET STUDENT BY ID
# ===========================
@router.get("/students/{student_id}")
def get_student(student_id: int, db: Session = Depends(get_db)):

    student = db.query(Student).filter(
        Student.id == student_id
    ).first()

    if student is None:
        return {
            "message": "Student not found!"
        }

    return student

# ===========================
# UPDATE STUDENT
# ===========================
@router.put("/students/{student_id}")
def update_student(
    student_id: int,
    updated_student: StudentSchema,
    db: Session = Depends(get_db)
):

    student = db.query(Student).filter(
        Student.id == student_id
    ).first()

    if student is None:
        return {
            "message": "Student not found!"
        }

    student.name = updated_student.name
    student.email = updated_student.email
    student.branch = updated_student.branch
    student.year = updated_student.year
    student.cgpa = updated_student.cgpa
    student.password = updated_student.password

    student.skills = updated_student.skills
    student.projects = updated_student.projects
    student.internships = updated_student.internships
    student.certifications = updated_student.certifications    
    

    db.commit()
    db.refresh(student)

    return {
        "message": "Student Updated Successfully!",
        "student": student
    }

    # ===========================
# DELETE STUDENT
# ===========================
@router.delete("/students/{student_id}")
def delete_student(student_id: int, db: Session = Depends(get_db)):

    student = db.query(Student).filter(
        Student.id == student_id
    ).first()

    if student is None:
        return {
            "message": "Student not found!"
        }

    db.delete(student)
    db.commit()

    return {
        "message": "Student Deleted Successfully!"
    }