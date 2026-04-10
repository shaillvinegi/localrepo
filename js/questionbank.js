const questionbank = [

{
  id: 1,
  domain: "DSA",
  type: "MCQ",
  difficulty: "Easy",
  question: "What is the time complexity of binary search?",
  options: ["O(n)", "O(log n)", "O(n log n)", "O(1)"],
  answer: "O(log n)"
},
{
  id: 2,
  domain: "DSA",
  type: "MCQ",
  difficulty: "Easy",
  question: "Which data structure follows FIFO?",
  options: ["Stack", "Queue", "Tree", "Graph"],
  answer: "Queue"
},
{
  id: 3,
  domain: "DSA",
  type: "Objective",
  difficulty: "Easy",
  question: "Define stack.",
  answer: "Stack is a linear data structure that follows LIFO."
},
{
  id: 4,
  domain: "DSA",
  type: "Objective",
  difficulty: "Easy",
  question: "What is recursion?",
  answer: "A function calling itself."
},
{
  id: 5,
  domain: "DSA",
  type: "MCQ",
  difficulty: "Moderate",
  question: "Worst case time complexity of Quick Sort?",
  options: ["O(n)", "O(n log n)", "O(n²)", "O(log n)"],
  answer: "O(n²)"
},
{
  id: 6,
  domain: "DSA",
  type: "Subjective",
  difficulty: "Difficult",
  question: "Explain merge sort."
},
{
  id: 7,
  domain: "DSA",
  type: "MCQ",
  difficulty: "Easy",
  question: "Which data structure is used in BFS?",
  options: ["Stack", "Queue", "Array", "Tree"],
  answer: "Queue"
},
{
  id: 8,
  domain: "DSA",
  type: "Objective",
  difficulty: "Easy",
  question: "What is a linked list?",
  answer: "A collection of nodes linked together."
},
{
  id: 9,
  domain: "DSA",
  type: "MCQ",
  difficulty: "Easy",
  question: "Which is not a linear data structure?",
  options: ["Array", "Linked List", "Stack", "Tree"],
  answer: "Tree"
},
{
  id: 10,
  domain: "DSA",
  type: "Subjective",
  difficulty: "Moderate",
  question: "Difference between array and linked list."
},

/* ===================== OOPS JAVA ===================== */
{
  id: 11,
  domain: "OOPS_JAVA",
  type: "MCQ",
  difficulty: "Moderate",
  question: "Which concept supports method overriding?",
  options: ["Encapsulation", "Inheritance", "Abstraction", "Polymorphism"],
  answer: "Polymorphism"
},
{
  id: 12,
  domain: "OOPS_JAVA",
  type: "Objective",
  difficulty: "Easy",
  question: "Define encapsulation.",
  answer: "Binding data and methods together."
},
{
  id: 13,
  domain: "OOPS_JAVA",
  type: "MCQ",
  difficulty: "Easy",
  question: "Which keyword is used for inheritance in Java?",
  options: ["extends", "implements", "inherit", "super"],
  answer: "extends"
},
{
  id: 14,
  domain: "OOPS_JAVA",
  type: "Subjective",
  difficulty: "Difficult",
  question: "Explain polymorphism with example."
},
{
  id: 15,
  domain: "OOPS_JAVA",
  type: "MCQ",
  difficulty: "Easy",
  question: "What is JVM?",
  options: ["Java Virtual Machine", "Java Variable Method", "Java Visual Model", "None"],
  answer: "Java Virtual Machine"
},
{
  id: 16,
  domain: "OOPS_JAVA",
  type: "Objective",
  difficulty: "Easy",
  question: "What is constructor?",
  answer: "A special method used to initialize objects."
},
{
  id: 17,
  domain: "OOPS_JAVA",
  type: "MCQ",
  difficulty: "Easy",
  question: "Which access modifier has highest visibility?",
  options: ["private", "protected", "default", "public"],
  answer: "public"
},
{
  id: 18,
  domain: "OOPS_JAVA",
  type: "Subjective",
  difficulty: "Difficult",
  question: "Difference between abstract class and interface."
},

/* ===================== OOPS PYTHON ===================== */

{
  id: 19,
  domain: "OOPS_PYTHON",
  type: "MCQ",
  difficulty: "Easy",
  question: "Which keyword defines a class in Python?",
  options: ["class", "def", "struct", "object"],
  answer: "class"
},
{
  id: 20,
  domain: "OOPS_PYTHON",
  type: "Objective",
  difficulty: "Easy",
  question: "What is self in Python?",
  answer: "Reference to current object."
},
{
  id: 21,
  domain: "OOPS_PYTHON",
  type: "MCQ",
  difficulty: "Easy",
  question: "Does Python support multiple inheritance?",
  options: ["Yes", "No"],
  answer: "Yes"
},
{
  id: 22,
  domain: "OOPS_PYTHON",
  type: "Subjective",
  difficulty: "Moderate",
  question: "Explain method overriding in Python."
},
{
  id: 23,
  domain: "OOPS_PYTHON",
  type: "Objective",
  difficulty: "Easy",
  question: "What is __init__ method?",
  answer: "Constructor in Python."
},
{
  id: 24,
  domain: "OOPS_PYTHON",
  type: "MCQ",
  difficulty: "Easy",
  question: "Which datatype is immutable?",
  options: ["List", "Set", "Tuple", "Dictionary"],
  answer: "Tuple"
},

/* ===================== C++ ===================== */

{
  id: 25,
  domain: "CPP",
  type: "MCQ",
  difficulty: "Easy",
  question: "Scope resolution operator in C++?",
  options: ["::", ".", "->", ":"],
  answer: "::"
},
{
  id: 26,
  domain: "CPP",
  type: "Objective",
  difficulty: "Easy",
  question: "What is a pointer?",
  answer: "Variable that stores address."
},
{
  id: 27,
  domain: "CPP",
  type: "MCQ",
  difficulty: "Moderate",
  question: "Runtime polymorphism uses?",
  options: ["Function overloading", "Operator overloading", "Virtual function", "Templates"],
  answer: "Virtual function"
},
{
  id: 28,
  domain: "CPP",
  type: "Subjective",
  difficulty: "Moderate",
  question: "Difference between structure and class."
},
{
  id: 29,
  domain: "CPP",
  type: "MCQ",
  difficulty: "Moderate",
  question: "Which operator cannot be overloaded?",
  options: ["+", "-", "::", "*"],
  answer: "::"
},
{
  id: 30,
  domain: "CPP",
  type: "Objective",
  difficulty: "Easy",
  question: "What is destructor?",
  answer: "Used to destroy objects."
},

/* ===================== DBMS ===================== */

{
  id: 31,
  domain: "DBMS",
  type: "MCQ",
  difficulty: "Easy",
  question: "What does ACID stand for?",
  options: ["Atomicity Consistency Isolation Durability", "Accuracy Control Integrity Data", "None", "All"],
  answer: "Atomicity Consistency Isolation Durability"
},
{
  id: 32,
  domain: "DBMS",
  type: "Objective",
  difficulty: "Easy",
  question: "Define primary key.",
  answer: "Uniquely identifies records."
},
{
  id: 33,
  domain: "DBMS",
  type: "MCQ",
  difficulty: "Moderate",
  question: "Which normal form removes partial dependency?",
  options: ["1NF", "2NF", "3NF", "BCNF"],
  answer: "2NF"
},
{
  id: 34,
  domain: "DBMS",
  type: "Subjective",
  difficulty: "Moderate",
  question: "Difference between DELETE and TRUNCATE."
},
{
  id: 35,
  domain: "DBMS",
  type: "MCQ",
  difficulty: "Easy",
  question: "Foreign key is used to?",
  options: ["Ensure uniqueness", "Link tables", "Sort data", "Delete data"],
  answer: "Link tables"
},
{
  id: 36,
  domain: "DBMS",
  type: "Objective",
  difficulty: "Easy",
  question: "What is normalization?",
  answer: "Process of reducing redundancy."
},
{
  id: 37,
  domain: "DBMS",
  type: "MCQ",
  difficulty: "Easy",
  question: "Command to delete a table?",
  options: ["DELETE", "DROP", "REMOVE", "TRUNCATE"],
  answer: "DROP"
},
{
  id: 38,
  domain: "DBMS",
  type: "Subjective",
  difficulty: "Difficult",
  question: "Explain indexing."
},

/* ===================== MONGODB ===================== */

{
  id: 39,
  domain: "MONGODB",
  type: "MCQ",
  difficulty: "Easy",
  question: "MongoDB is a?",
  options: ["Relational DB", "NoSQL DB", "Hierarchical DB", "Network DB"],
  answer: "NoSQL DB"
},
{
  id: 40,
  domain: "MONGODB",
  type: "Objective",
  difficulty: "Easy",
  question: "What is a collection?",
  answer: "Group of documents."
},
{
  id: 41,
  domain: "MONGODB",
  type: "MCQ",
  difficulty: "Easy",
  question: "MongoDB stores data in?",
  options: ["XML", "JSON", "BSON", "CSV"],
  answer: "BSON"
},
{
  id: 42,
  domain: "MONGODB",
  type: "Subjective",
  difficulty: "Moderate",
  question: "Difference between SQL and MongoDB."
},
{
  id: 43,
  domain: "MONGODB",
  type: "MCQ",
  difficulty: "Easy",
  question: "Insert document command?",
  options: ["insert()", "add()", "create()", "push()"],
  answer: "insert()"
},
{
  id: 44,
  domain: "MONGODB",
  type: "Objective",
  difficulty: "Easy",
  question: "What is _id?",
  answer: "Unique identifier."
},

/* ===================== WEB ===================== */

{
  id: 45,
  domain: "HTML",
  type: "MCQ",
  difficulty: "Easy",
  question: "Which HTML tag is used to create a form?",
  options: ["<input>", "<form>", "<table>", "<section>"],
  answer: "<form>"
},
{
  id: 46,
  domain: "HTML",
  type: "Objective",
  difficulty: "Easy",
  question: "What is the purpose of the <head> tag?",
  answer: "It contains metadata about the document."
},
{
  id: 47,
  domain: "HTML",
  type: "MCQ",
  difficulty: "Easy",
  question: "Which attribute specifies image path?",
  options: ["src", "href", "alt", "path"],
  answer: "src"
},
{
  id: 48,
  domain: "HTML",
  type: "Subjective",
  difficulty: "Moderate",
  question: "Explain semantic HTML and its benefits."
},
{
  id: 49,
  domain: "HTML",
  type: "MCQ",
  difficulty: "Easy",
  question: "Which tag is used for unordered list?",
  options: ["<ul>", "<ol>", "<li>", "<list>"],
  answer: "<ul>"
},
{
  id: 50,
  domain: "HTML",
  type: "Objective",
  difficulty: "Easy",
  question: "What does HTML stand for?",
  answer: "HyperText Markup Language"
},

{
  id: 57,
  domain: "JAVASCRIPT",
  type: "MCQ",
  difficulty: "Easy",
  question: "Which keyword is block scoped?",
  options: ["var", "let", "function", "this"],
  answer: "let"
},
{
  id: 58,
  domain: "JAVASCRIPT",
  type: "Objective",
  difficulty: "Easy",
  question: "What is DOM?",
  answer: "Document Object Model."
},
{
  id: 59,
  domain: "JAVASCRIPT",
  type: "MCQ",
  difficulty: "Easy",
  question: "Which method adds element to array end?",
  options: ["push()", "pop()", "shift()", "unshift()"],
  answer: "push()"
},
{
  id: 60,
  domain: "JAVASCRIPT",
  type: "Subjective",
  difficulty: "Moderate",
  question: "Explain event bubbling."
},
{
  id: 61,
  domain: "JAVASCRIPT",
  type: "MCQ",
  difficulty: "Easy",
  question: "Which operator compares value and type?",
  options: ["==", "=", "===", "!="],
  answer: "==="
},
{
  id: 62,
  domain: "JAVASCRIPT",
  type: "Objective",
  difficulty: "Easy",
  question: "What is localStorage?",
  answer: "Stores data in browser permanently."
},

{
  id: 68,
  domain: "REACT",
  type: "MCQ",
  difficulty: "Easy",
  question: "React is developed by?",
  options: ["Google", "Facebook", "Microsoft", "Amazon"],
  answer: "Facebook"
},
{
  id: 69,
  domain: "REACT",
  type: "Objective",
  difficulty: "Easy",
  question: "What is JSX?",
  answer: "JavaScript XML."
},
{
  id: 70,
  domain: "REACT",
  type: "MCQ",
  difficulty: "Easy",
  question: "Which hook manages state?",
  options: ["useState", "useEffect", "useRef", "useContext"],
  answer: "useState"
},
{
  id: 71,
  domain: "REACT",
  type: "Subjective",
  difficulty: "Moderate",
  question: "Difference between props and state."
},
{
  id: 72,
  domain: "REACT",
  type: "Objective",
  difficulty: "Easy",
  question: "What is virtual DOM?",
  answer: "Lightweight copy of real DOM."
},

{
  id: 73,
  domain: "APTITUDE",
  type: "MCQ",
  difficulty: "Easy",
  question: "20% of 250 = ?",
  options: ["25", "50", "75", "100"],
  answer: "50"
},
{
  id: 74,
  domain: "APTITUDE",
  type: "Objective",
  difficulty: "Easy",
  question: "What is profit?",
  answer: "Selling price minus cost price."
},
{
  id: 75,
  domain: "APTITUDE",
  type: "MCQ",
  difficulty: "Easy",
  question: "Average of 5 numbers is 10. Sum?",
  options: ["25", "50", "100", "10"],
  answer: "50"
},
{
  id: 76,
  domain: "APTITUDE",
  type: "Subjective",
  difficulty: "Moderate",
  question: "Explain permutation."
},
{
  id: 77,
  domain: "APTITUDE",
  type: "MCQ",
  difficulty: "Easy",
  question: "Probability of head in coin toss?",
  options: ["1", "0", "1/2", "2"],
  answer: "1/2"
},

/* ===================== DIFFICULT QUESTIONS ===================== */

{
  id: 78,
  domain: "DSA",
  type: "Subjective",
  difficulty: "Difficult",
  question: "Explain how AVL trees maintain balance and analyze rotation cases."
},
{
  id: 79,
  domain: "DSA",
  type: "MCQ",
  difficulty: "Difficult",
  question: "What is the time complexity of inserting an element in a Red-Black Tree?",
  options: ["O(n)", "O(log n)", "O(n log n)", "O(1)"],
  answer: "O(log n)"
},
{
  id: 80,
  domain: "DSA",
  type: "Subjective",
  difficulty: "Difficult",
  question: "Explain KMP string matching algorithm with example."
},
{
  id: 81,
  domain: "DSA",
  type: "MCQ",
  difficulty: "Difficult",
  question: "Which algorithm is used to detect negative weight cycles?",
  options: ["Dijkstra", "Prim", "Bellman-Ford", "Kruskal"],
  answer: "Bellman-Ford"
},
{
  id: 82,
  domain: "DSA",
  type: "Subjective",
  difficulty: "Difficult",
  question: "Explain dynamic programming with memoization and tabulation."
},

{
  id: 83,
  domain: "OOPS_JAVA",
  type: "Subjective",
  difficulty: "Difficult",
  question: "Explain JVM architecture and class loading mechanism."
},
{
  id: 84,
  domain: "OOPS_JAVA",
  type: "MCQ",
  difficulty: "Difficult",
  question: "Which memory area stores method metadata in Java?",
  options: ["Heap", "Stack", "Method Area", "PC Register"],
  answer: "Method Area"
},
{
  id: 85,
  domain: "OOPS_JAVA",
  type: "Subjective",
  difficulty: "Difficult",
  question: "Explain garbage collection algorithms used in Java."
},

{
  id: 86,
  domain: "OOPS_PYTHON",
  type: "Subjective",
  difficulty: "Difficult",
  question: "Explain Python MRO (Method Resolution Order) with example."
},
{
  id: 87,
  domain: "OOPS_PYTHON",
  type: "MCQ",
  difficulty: "Difficult",
  question: "Which algorithm is used to compute Python MRO?",
  options: ["DFS", "BFS", "C3 Linearization", "Topological Sort"],
  answer: "C3 Linearization"
},

{
  id: 88,
  domain: "CPP",
  type: "Subjective",
  difficulty: "Difficult",
  question: "Explain diamond problem and its solution in C++."
},
{
  id: 89,
  domain: "CPP",
  type: "MCQ",
  difficulty: "Difficult",
  question: "Which keyword resolves ambiguity in multiple inheritance?",
  options: ["virtual", "static", "friend", "const"],
  answer: "virtual"
},

{
  id: 90,
  domain: "DBMS",
  type: "Subjective",
  difficulty: "Difficult",
  question: "Explain transaction states and serializability."
},
{
  id: 91,
  domain: "DBMS",
  type: "MCQ",
  difficulty: "Difficult",
  question: "Which concurrency control protocol avoids cascading rollback?",
  options: ["Timestamp ordering", "Two-phase locking", "Strict 2PL", "Validation"],
  answer: "Strict 2PL"
},
{
  id: 92,
  domain: "DBMS",
  type: "Subjective",
  difficulty: "Difficult",
  question: "Explain indexing techniques like B-tree and Hash indexing."
},

{
  id: 93,
  domain: "MONGODB",
  type: "Subjective",
  difficulty: "Difficult",
  question: "Explain MongoDB aggregation pipeline with stages."
},
{
  id: 94,
  domain: "MONGODB",
  type: "MCQ",
  difficulty: "Difficult",
  question: "Which stage reshapes documents in aggregation pipeline?",
  options: ["$match", "$group", "$project", "$sort"],
  answer: "$project"
},

{
  id: 95,
  domain: "JAVASCRIPT",
  type: "Subjective",
  difficulty: "Difficult",
  question: "Explain closures and lexical environment in JavaScript."
},
{
  id: 96,
  domain: "JAVASCRIPT",
  type: "MCQ",
  difficulty: "Difficult",
  question: "Which object is created during execution context creation?",
  options: ["Scope chain", "Lexical environment", "Prototype", "Event loop"],
  answer: "Lexical environment"
},

{
  id: 97,
  domain: "REACT",
  type: "Subjective",
  difficulty: "Difficult",
  question: "Explain reconciliation algorithm and React Fiber."
},
{
  id: 98,
  domain: "REACT",
  type: "MCQ",
  difficulty: "Difficult",
  question: "Which hook is used for performance optimization?",
  options: ["useEffect", "useMemo", "useState", "useRef"],
  answer: "useMemo"
},

{
  id: 99,
  domain: "OS",
  type: "Subjective",
  difficulty: "Difficult",
  question: "Explain deadlock prevention, avoidance, and detection."
},
{
  id: 100,
  domain: "OS",
  type: "MCQ",
  difficulty: "Difficult",
  question: "Which algorithm is used for deadlock avoidance?",
  options: ["FIFO", "LRU", "Banker's Algorithm", "Round Robin"],
  answer: "Banker's Algorithm"
},

{
  id: 101,
  domain: "NETWORKS",
  type: "Subjective",
  difficulty: "Difficult",
  question: "Explain TCP three-way handshake and congestion control."
},
{
  id: 102,
  domain: "NETWORKS",
  type: "MCQ",
  difficulty: "Difficult",
  question: "Which layer is responsible for flow control?",
  options: ["Application", "Transport", "Network", "Data Link"],
  answer: "Transport"
},

{
  id: 103,
  domain: "APTITUDE",
  type: "Subjective",
  difficulty: "Difficult",
  question: "Explain Bayes’ theorem with real-life application."
},
{
  id: 104,
  domain: "APTITUDE",
  type: "MCQ",
  difficulty: "Difficult",
  question: "If P(A)=0.6 and P(B)=0.5, A and B independent. Find P(A∩B).",
  options: ["0.1", "0.3", "0.5", "1.1"],
  answer: "0.3"
},
{
  id: 105,
  domain: "APTITUDE",
  type: "Subjective",
  difficulty: "Difficult",
  question: "Explain combinations with repetition."
},
{
  id: 106,
  domain: "APTITUDE",
  type: "MCQ",
  difficulty: "Difficult",
  question: "If log₂(x) = 5, find x.",
  options: ["10", "25", "32", "64"],
  answer: "32"
},
{
  id: 107,
  domain: "APTITUDE",
  type: "Subjective",
  difficulty: "Difficult",
  question: "Explain time and work problems using LCM method."
}

];
// ✅ MAKE QUESTION BANK GLOBALLY AVAILABLE
window.questionbank = questionbank; 
