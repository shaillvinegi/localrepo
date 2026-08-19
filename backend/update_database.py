import sqlite3

connection = sqlite3.connect("placement.db")

cursor = connection.cursor()

cursor.execute("""
ALTER TABLE questions
ADD COLUMN input_format TEXT
""")

cursor.execute("""
ALTER TABLE questions
ADD COLUMN output_format TEXT
""")

connection.commit()

connection.close()

print("Database updated successfully!")