import React from "react";

function QuizCard({
  question,
  answers,
  onAnswerClick,
  chosenAnswer,
  correctAnswer,
}) {
  const handleAnswerClick = (answer) => {
    if (!chosenAnswer) {
      onAnswerClick(answer);
      console.log("user answer", answer, "correct answer:", correctAnswer);
    }
  };

  return (
    <div className="p-4 bg-blue-700">
      <h2 id="question" className="text-xl font-semibold text-white py-4">
        {question}
      </h2>
      <ul className="">
        {answers &&
          answers.map((answer, index) => (
            <li key={index}>
              <button
                onClick={() => handleAnswerClick(answer)}
                className={`bg-white mb-4 text-slate-700 py-1 font-medium w-full border border-slate-800 rounded-sm ${
                  chosenAnswer === answer
                    ? chosenAnswer === correctAnswer
                      ? "bg-green-500  " //border-green-500 text-green-500
                      : "bg-red-500 text-[#fff]" //border-red-500 text-red-500
                    : "" // Default styling for unselected answers
                }`}
              >
                {answer}
              </button>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default QuizCard;
