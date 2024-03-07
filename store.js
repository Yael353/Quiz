import React, { createContext, useContext, useState, useEffect } from "react";
import { quiz } from "./pages/data/questions";

const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
  const [questions, setQuestions] = useState([]);


  useEffect(() => {
    setQuestions(quiz.questions);
  }, []);
  // Load questions from quiz initially if no questions stored in localStorage

 
  //create
  const addQuestion = (newQuestion) => {
    const updatedQuestions = [...questions, newQuestion];
    setQuestions(updatedQuestions); // Update state
   // localStorage.setItem("questions", JSON.stringify(updatedQuestions)); // Update localStorage
    console.log("New question added");
  }
 
  
  const updateQuestion = (id, updatedQuestion) => {
    setQuestions((prevQuestions) => {
      const updatedQuestions = prevQuestions.map((question) =>
        question.id === id ? { ...question, ...updatedQuestion } : question
      );
     // localStorage.setItem("questions", JSON.stringify(updatedQuestions)); // Update localStorage
      return updatedQuestions; // Update state
    });
  };

  //delete
  const deleteQuestion = (id) => {
    const updatedQuestions = questions.filter((question) => question.id !== id);
    setQuestions(updatedQuestions);
    console.log("Question with id:", id, "deleted");
  };

  return (
    <QuizContext.Provider
      value={{ questions, addQuestion, deleteQuestion, updateQuestion }}
    >
      {children}
    </QuizContext.Provider>
  );
};

export const useQuiz = () => {
  return useContext(QuizContext);
};
