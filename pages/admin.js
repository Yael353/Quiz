import { useState } from 'react';
import React from 'react'
import Link from "next/link"
import { questions, addQuestion, editQuestion, deleteQuestion } from "./data/questions";
import { v4 as uuidv4 } from 'uuid';

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
      addQuestion({ ...newQuestion, id: uuidv4() });
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
    <div className='flex flex-row items-center justify-evenly h-screen'>
      <div>  
       <Link href="/" className='bg-red-700 text-white text-lg border rounded-lg p-2'>Back home</Link>
        <h2 className='pt-4'>Add/Edit Questions</h2>
        <form onSubmit={handleSubmit} className='flex flex-col gap-5'>
          <label>
            Question:
            <input className='focus:outline-none border w-full p-2'
              type="text"
              name="question"
              value={newQuestion.question}
              onChange={handleInputChange}
            />
          </label>
          {newQuestion.answers.map((answer, index) => (
            <label key={index}>
              Answer {index + 1}:
              <input className='focus:outline-none border w-full p-2'
                type="text"
                value={answer}
                onChange={(e) => handleAnswerChange(index, e.target.value)}
              />
            </label>
          ))}
          <br />
          <label>
            Correct Answer:
            <input className='focus:outline-none border w-full p-2'
              type="text"
              name="correctAnswer"
              value={newQuestion.correctAnswer}
              onChange={handleInputChange}
            />
          </label>
          <br />
          <button type="submit" className='bg-indigo-900 text-white p-3 rounded-lg'>Submit</button>
        </form>
      </div>
      <div>
      <h2>Delete Questions</h2>
      <ul className='flex flex-col gap-5 w-fit'>
        {questions.questions.map((question) => (
          <li className='bg-green-300 w-fit text-white pl-2 flex justify-between items-center gap-5' key={question.id}>
            {question.question}{' '}
            <button className='bg-red-400 p-2' onClick={() => handleDelete(question.id)}>Delete</button>
          </li>
        ))}
      </ul>
      </div>
    </div>
  );
}

export default adminPage;