//questions

export let questions = {
  questions: [
    {
      id: 1,
      question: "What is the capital of Egypt?",
      answers: ["Damascus", "Doha", "Cairo", "Alexandria"],
      correctAnswer: "Cairo",
    },
    {
      id: 2,
      question: "Which planet is known as the Red Planet?",
      answers: ["Venus", "Mars", "Jupiter", "Saturn"],
      correctAnswer: "Mars",
    },
    {
      id: 3,
      question: "Who wrote the play 'Hamlet'?",
      answers: [
        "William Shakespeare",
        "Jane Austen",
        "Leo Tolstoy",
        "Charles Dickens",
      ],
      correctAnswer: "William Shakespeare",
    },
    {
      id: 4,
      question: "What is the chemical symbol for water?",
      answers: ["Wa", "H2O", "H2O2", "W"],
      correctAnswer: "H2O",
    },
    {
      id: 5,
      question: "Which country is known as the 'Land of the Rising Sun'?",
      answers: ["China", "Japan", "South Korea", "Vietnam"],
      correctAnswer: "Japan",
    },
    {
      id: 6,
      question: "Who painted the Mona Lisa?",
      answers: [
        "Vincent van Gogh",
        "Leonardo da Vinci",
        "Pablo Picasso",
        "Michelangelo",
      ],
      correctAnswer: "Leonardo da Vinci",
    },
    {
      id: 7,
      question: "What is the tallest mountain in the world?",
      answers: ["Mount Everest", "K2", "Kangchenjunga", "Lhotse"],
      correctAnswer: "Mount Everest",
    },
    {
      id: 8,
      question: "Which element has the chemical symbol 'Fe'?",
      answers: ["Iron", "Gold", "Silver", "Copper"],
      correctAnswer: "Iron",
    },
    {
      id: 9,
      question: "Who was the first person to step on the Moon?",
      answers: ["Neil Armstrong", "Buzz Aldrin", "Yuri Gagarin", "John Glenn"],
      correctAnswer: "Neil Armstrong",
    },
    {
      id: 10,
      question: "What is the largest mammal in the world?",
      answers: ["African Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
      correctAnswer: "Blue Whale",
    },
  ],
};

export const addQuestion = (newQuestion) => {
  questions.questions.push(newQuestion);
};

export const editQuestion = (questionId, updateQuestion) => {
  questions.questions = questions.questions.map((question) =>
  question.id === questionId ? { ...question, ...updateQuestion}: question);
};

export const deleteQuestion = (questionId) => {
  questions.questions = questions.questions.filter((question) => question.id !== questionId);
};

