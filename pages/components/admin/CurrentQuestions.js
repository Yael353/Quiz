import React from "react";
import UpdateQuestion from "./UpdatedQuestion";

const CurrentQuestions = ({ questions, updateQuestion, deleteQuestion }) => {
  return (
    <div className="flex flex-col sm:m-8 p-4 sm:shadow-xl">
      <h3 className="font-semibold text-xl">
        Current Game cards: {questions.length}
      </h3>
      <div className="py-4 flex gap-4 flex-wrap">
        {questions.map((question) => (
          <UpdateQuestion
            key={question.id}
            id={question.id}
            question={question.question}
            answers={question.answers}
            correctAns={question.correctAns}
            onUpdate={(updatedQuestion) =>
              updateQuestion(question.id, updatedQuestion)
            }
            onDelete={() => deleteQuestion(question.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default CurrentQuestions;
