def calculate_resume_score(
    cgpa,
    skills,
    projects,
    internships,
    certifications
):

    score = 0

    strengths = []
    improvements = []

    # CGPA
    if cgpa >= 9:
        score += 25
        strengths.append("Excellent CGPA")

    elif cgpa >= 8:
        score += 20
        strengths.append("Good CGPA")

    elif cgpa >= 7:
        score += 15

    else:
        improvements.append("Improve academic performance")

    # Skills
    score += min(len(skills) * 5, 25)

    if len(skills) >= 5:
        strengths.append("Strong technical skills")
    else:
        improvements.append("Learn more technical skills")

    # Projects
    score += min(projects * 5, 20)

    if projects >= 3:
        strengths.append("Good project experience")
    else:
        improvements.append("Build more projects")

    # Internships
    score += min(internships * 10, 20)

    if internships == 0:
        improvements.append("Gain internship experience")

    # Certifications
    score += min(certifications * 2, 10)

    if certifications == 0:
        improvements.append("Add certifications")

    return {
        "resume_score": score,
        "strengths": strengths,
        "improvements": improvements
    }