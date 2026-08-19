import joblib
import numpy as np
import os

BASE_DIR = os.path.dirname(os.path.dirname(__file__))

MODEL_PATH = os.path.join(
    BASE_DIR,
    "ML",
    "placement_model.pkl"
)

model = joblib.load(MODEL_PATH)


def predict_placement(data):

    features = np.array([[
        data.cgpa,
        data.skills,
        data.projects,
        data.internships,
        data.certifications
    ]])

    prediction = model.predict(features)[0]

    probability = model.predict_proba(features)[0].max()

    return {
        "prediction": "Placed" if prediction == 1 else "Not Placed",
        "probability": round(probability * 100, 2)
    }