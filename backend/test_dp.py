from app.database.database import Base, engine
from app.models.student import Student

print("Registered tables:", Base.metadata.tables.keys())

Base.metadata.create_all(bind=engine)

print("Database created!")