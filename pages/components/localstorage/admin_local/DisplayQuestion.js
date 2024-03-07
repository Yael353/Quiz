import React, { useState, useEffect } from "react";
import UpdateQuestions from "./UpdateQuestions";

const DisplayQuestions = ({ updateQuestion, deleteQuestion }) => {
  const [storedQuestions, setStoredQuestions] = useState([]);

  useEffect(() => {
    const storedQuestions = JSON.parse(localStorage.getItem("newQuests")) || [];
    setStoredQuestions(storedQuestions);
  }, []);

  return (
    <div className="w-screeen flex flex-col sm:m-8 p-4 sm:shadow-xl">
      <h3 className="font-semibold text-xl">
        Current Game cards: {storedQuestions.length}
      </h3>
      <div className="py-4 flex gap-4 flex-wrap">
        {Array.isArray(storedQuestions) &&
          storedQuestions.map((question) => (
            <div key={question.id}>
              <UpdateQuestions
                id={question.id}
                question={question.question}
                answers={question.answers}
                correctAnswer={question.correctAnswer}
                onUpdate={(updatedQuestion) =>
                  updateQuestion(question.id, updatedQuestion)
                }
                onDelete={() => deleteQuestion(question.id)}
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default DisplayQuestions;
