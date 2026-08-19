import fitz

from app.services.skills import SKILLS


def extract_text(pdf_path):

    document = fitz.open(pdf_path)

    text = ""

    for page in document:
        text += page.get_text()

    document.close()

    return text


def extract_skills(text):

    found_skills = []

    text = text.lower()

    for skill in SKILLS:

        if skill.lower() in text:
            found_skills.append(skill)

    return list(set(found_skills))