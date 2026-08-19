from fastapi import APIRouter

router = APIRouter()

resources = [
    {
        "id": 1,
        "title": "Striver A2Z DSA Sheet",
        "category": "DSA",
        "difficulty": "Intermediate",
        "duration": "8 Weeks",
        "rating": 4.9,
        "link": "https://takeuforward.org/interviews/strivers-sde-sheet-top-coding-interview-problems/"
    },
    {
        "id": 2,
        "title": "AWS Cloud Practitioner",
        "category": "Cloud",
        "difficulty": "Beginner",
        "duration": "6 Weeks",
        "rating": 4.8,
        "link": "https://aws.amazon.com/certification/certified-cloud-practitioner/"
    },
    {
        "id": 3,
        "title": "Docker for Beginners",
        "category": "DevOps",
        "difficulty": "Beginner",
        "duration": "5 Weeks",
        "rating": 4.7,
        "link": "https://www.docker.com/101-tutorial/"
    }
]

@router.get("/resources")
def get_resources():
    return resources