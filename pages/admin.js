import { useState } from 'react';
import React from 'react'
import Link from "next/link"
import { questions, addQuestion, editQuestion, deleteQuestion } from "./data/questions";

function adminPage () {

  const [newQuestion, setNewQuestion] = useState({
    id: null,
    question: "",
    answers: ["", "", "", ""],
    correctAnswer: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewQuestion((prevQuestion) => ({
      ...prevQuestion,
      [name]: value,
    }));
  };

  const handleAnswerChange = (index, value) => {
    setNewQuestion((prevQuestion) => {
      const updatedAnswers = [...prevQuestion.answers];
      updatedAnswers[index] = value;
      return {
        ...prevQuestion,
        answers: updatedAnswers,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newQuestion.id){
      editQuestion(newQuestion.id, newQuestion);
    }else{
      addQuestion({ ...newQuestion, id: Date.now() });
    }
    setNewQuestion({
      id: null,
      question: "",
      answers: ["", "", "", ""],
      correctAnswer: "",
    });
  }; 

  const handleDelete = (questionId) => {
      deleteQuestion(questionId);
  };

  return (
    <div>
      <Link href="/">Back home</Link>

      <h2>Add/Edit Questions</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Question:
          <input
            type="text"
            name="question"
            value={newQuestion.question}
            onChange={handleInputChange}
          />
        </label>
        <br />
        {newQuestion.answers.map((answer, index) => (
          <label key={index}>
            Answer {index + 1}:
            <input
              type="text"
              value={answer}
              onChange={(e) => handleAnswerChange(index, e.target.value)}
            />
          </label>
        ))}
        <br />
        <label>
          Correct Answer:
          <input
            type="text"
            name="correctAnswer"
            value={newQuestion.correctAnswer}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>

      <h2>Delete Questions</h2>
      <ul>
        {questions.questions.map((question) => (
          <li key={question.id}>
            {question.question}{' '}
            <button onClick={() => handleDelete(question.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default adminPage;