const totalMarks = 100;
const difficultyDistribution = [
  { difficulty: "Easy", percentage: 20 },
  { difficulty: "Medium", percentage: 50 },
  { difficulty: "Hard", percentage: 30 },
];

const questionStore = [
  {
    question: "What is the speed of light",
    subject: "Physics",
    topic: "Waves",
    difficulty: "Easy",
    marks: 5,
  },
  {
    question: "Is water colorless,odorless and tasteless?",
    subject: "Chemistry",
    topic: "water",
    difficulty: "Easy",
    marks: 5,
  },
  {
    question: "What is the capital of France?",
    subject: "Geography",
    topic: "Countries",
    difficulty: "Medium",
    marks: 10,
  },
  {
    question: "Name one of the seven wonders located in India?",
    subject: "Geography",
    topic: "Countries",
    difficulty: "Medium",
    marks: 10,
  },
  {
    question: "Who is the author of Harry potter?",
    subject: "Literature",
    topic: "Shakespeare",
    difficulty: "Hard",
    marks: 15,
  },
  {
    question: "What is the formula for calculating the area of a circle?",
    subject: "Mathematics",
    topic: "Geometry",
    difficulty: "Easy",
    marks: 5,
  },
  {
    question: "Where was Adolf Hitler born?",
    subject: "History",
    topic: "World war",
    difficulty: "Hard",
    marks: 15,
  },
  {
    question: "Who wrote 'Romeo and Juliet'?",
    subject: "Literature",
    topic: "Shakespeare",
    difficulty: "Hard",
    marks: 15,
  },
  {
    question: "Which planet is known as the Red Planet?",
    subject: "Astronomy",
    topic: "Planets",
    difficulty: "Medium",
    marks: 10,
  },
  {
    question: "What is the chemical symbol for gold?",
    subject: "Chemistry",
    topic: "Elements",
    difficulty: "Easy",
    marks: 5,
  },
  {
    question: "Who painted the Mona Lisa?",
    subject: "Art",
    topic: "Paintings",
    difficulty: "Medium",
    marks: 10,
  },
  {
    question: "What is the main function of the mitochondria?",
    subject: "Biology",
    topic: "Cells",
    difficulty: "Hard",
    marks: 15,
  },
  {
    question: "Which programming language is often used for web development?",
    subject: "Computer Science",
    topic: "Programming",
    difficulty: "Easy",
    marks: 5,
  },
  {
    question: "What is the largest mammal in the world?",
    subject: "Zoology",
    topic: "Mammals",
    difficulty: "Medium",
    marks: 10,
  },
];

module.exports = { questionStore, totalMarks, difficultyDistribution };
