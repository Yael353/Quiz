import { createContext, useContext, useState } from "react";

const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
  const [questions, setQuestions] = useState([
    {
      id: 0,
      question: "What is the capital of Egypt?",
      A: "Damascus",
      B: "Doha",
      C: "Cairo",
      D: "Alexandria",
      answer: "C",
    },
    {
      id: 1,
      question: "Which planet is known as the Red Planet?",
      A: "Venus",
      B: "Mars",
      C: "Jupiter",
      D: "Saturn",
      answer: "B",
    },
  ]);

  const updateQuestions = (updatedQuestions) => {
    setQuestions(updatedQuestions);
  };

  return (
    <QuizContext.Provider
      value={{
        questions,
        updateQuestions,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};

export const useQuiz = () => {
  return useContext(QuizContext);
};
