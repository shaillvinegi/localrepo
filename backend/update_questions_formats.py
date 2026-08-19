import sqlite3

connection = sqlite3.connect("placement.db")
cursor = connection.cursor()

# Copy List with Random Pointer
cursor.execute("""
UPDATE questions
SET
    input_format = ?,
    output_format = ?
WHERE title = 'Copy List with Random Pointer'
""", (
    """The linked list is represented as an array of [val, random_index] pairs.
val is the node value.
random_index is the index of the node that the random pointer points to,
or null if the random pointer does not point to any node.""",

    """Return the head of the deep-copied linked list.
The copied list must contain completely new nodes.
No pointer in the copied list should point to a node from the original list."""
))


# Reverse an Array
cursor.execute("""
UPDATE questions
SET
    input_format = ?,
    output_format = ?
WHERE title = 'Reverse an Array'
""", (
    """An integer array nums containing n elements.""",

    """Return the array with all elements in reverse order."""
))


connection.commit()

print("Question input/output formats updated successfully!")

# Verify
cursor.execute("""
SELECT id, title, input_format, output_format
FROM questions
WHERE question_type = 'CODING'
""")

for row in cursor.fetchall():
    print("\nID:", row[0])
    print("Title:", row[1])
    print("Input:", row[2])
    print("Output:", row[3])

connection.close()