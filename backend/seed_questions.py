from app.database.database import SessionLocal
from app.models.question import Question


# ==========================================
# QUESTION BANK
# ==========================================

questions = [

    # ======================================
    # DSA - EASY
    # ======================================

    {
        "title": "Find Maximum Element in an Array",

        "description":
        "Given an array of integers, find and return the maximum element.",

        "domain": "DSA",

        "topic": "Arrays",

        "difficulty": "Easy",

        "question_type": "OBJECTIVE",

        "examples":
        "Input: [3, 7, 2, 9, 1]\nOutput: 9",

        "constraints":
        "1 <= n <= 1000",

        "starter_code": "",

        "test_cases":
        '[{"input":"[3,7,2,9,1]","output":"9"}]'
    },


    # ======================================
    # DSA - EASY
    # ======================================

    {
        "title": "Reverse an Array",

        "description":
        "Given an array of integers, reverse the array without using another array.",

        "domain": "DSA",

        "topic": "Arrays",

        "difficulty": "Easy",

        "question_type": "CODING",

        "examples":
        "Input: [1,2,3,4,5]\nOutput: [5,4,3,2,1]",

        "constraints":
        "1 <= n <= 1000",

        "starter_code":
        "class Solution {\n    public int[] reverse(int[] nums) {\n        // Write your solution here\n    }\n}",

        "test_cases":
        '[{"input":"[1,2,3,4,5]","output":"[5,4,3,2,1]"}]'
    },


    # ======================================
    # DSA - MEDIUM
    # ======================================

    {
        "title": "Two Sum",

        "description":
        "Given an array of integers and a target value, return the indices of two numbers whose sum equals the target.",

        "domain": "DSA",

        "topic": "Arrays",

        "difficulty": "Medium",

        "question_type": "CASE_STUDY",

        "examples":
        "Input: nums = [2,7,11,15], target = 9\nOutput: [0,1]",

        "constraints":
        "2 <= nums.length <= 10^4",

        "starter_code":
        "class Solution {\n    public int[] twoSum(int[] nums, int target) {\n        // Write your solution here\n    }\n}",

        "test_cases":
        '[{"input":"nums=[2,7,11,15], target=9","output":"[0,1]"}]'
    },


    # ======================================
    # DSA - MEDIUM
    # ======================================

    {
        "title": "Copy List with Random Pointer",

        "description":
        "A linked list contains a next pointer and an additional random pointer. The random pointer can point to any node or null. Construct a deep copy of the entire linked list.",

        "domain": "DSA",

        "topic": "Linked List",

        "difficulty": "Medium",

        "question_type": "CASE_STUDY",

        "examples":
        "Input: [[7,null],[13,0],[11,4],[10,2],[1,0]]\nOutput: [[7,null],[13,0],[11,4],[10,2],[1,0]]",

        "constraints":
        "0 <= n <= 1000",

        "starter_code":
        "class Solution {\n    public Node copyRandomList(Node head) {\n        // Write your solution here\n    }\n}",

        "test_cases":
        '[{"input":"[[7,null],[13,0],[11,4],[10,2],[1,0]]","output":"[[7,null],[13,0],[11,4],[10,2],[1,0]]"}]'
    },


    # ======================================
    # DSA - HARD
    # ======================================

    {
        "title": "Longest Increasing Subsequence",

        "description":
        "Given an integer array, return the length of the longest strictly increasing subsequence.",

        "domain": "DSA",

        "topic": "Dynamic Programming",

        "difficulty": "Hard",

        "question_type": "CASE_STUDY",

        "examples":
        "Input: [10,9,2,5,3,7,101,18]\nOutput: 4",

        "constraints":
        "1 <= nums.length <= 2500",

        "starter_code":
        "class Solution {\n    public int lengthOfLIS(int[] nums) {\n        // Write your solution here\n    }\n}",

        "test_cases":
        '[{"input":"[10,9,2,5,3,7,101,18]","output":"4"}]'
    },


    # ======================================
    # DBMS
    # ======================================

    {
        "title": "SQL INNER JOIN",

        "description":
        "Explain how an INNER JOIN works and write a query to retrieve students along with their department names.",

        "domain": "DBMS",

        "topic": "SQL",

        "difficulty": "Easy",

        "question_type": "SUBJECTIVE",

        "examples":
        "Students table contains student_id and department_id. Departments table contains department_id and department_name.",

        "constraints":
        "Use standard SQL.",

        "starter_code": "",

        "test_cases": ""
    },


    # ======================================
    # OOPS
    # ======================================

    {
        "title": "Inheritance in Java",

        "description":
        "Explain inheritance in Java and describe how method overriding works.",

        "domain": "OOPS_JAVA",

        "topic": "Inheritance",

        "difficulty": "Easy",

        "question_type": "SUBJECTIVE",

        "examples":
        "Create a parent class Vehicle and a child class Car.",

        "constraints":
        "Use Java.",

        "starter_code": "",

        "test_cases": ""
    }

]


# ==========================================
# INSERT INTO DATABASE
# ==========================================

def seed_database():

    db = SessionLocal()

    try:

        for question_data in questions:

            question = Question(
                title=question_data["title"],
                description=question_data["description"],
                domain=question_data["domain"],
                topic=question_data["topic"],
                difficulty=question_data["difficulty"],
                question_type=question_data["question_type"],
                examples=question_data["examples"],
                constraints=question_data["constraints"],
                starter_code=question_data["starter_code"],
                test_cases=question_data["test_cases"]
            )

            db.add(question)

        db.commit()

        print(
            f"Successfully added {len(questions)} questions!"
        )

    except Exception as e:

        db.rollback()

        print("Error:", e)

    finally:

        db.close()


# ==========================================
# RUN
# ==========================================

if __name__ == "__main__":

    seed_database()