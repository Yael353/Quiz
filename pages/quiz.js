import React, { useState } from "react";
import Link from "next/link";
import { questions } from "./data/questions";

function quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [score, setScore] = useState(0);

  const handleAnswerClick = (answer) => {
    setSelectedAnswer(answer);

    // Check if the answer is correct
    if (answer === questions.questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
    let totalquestions = questions.questions.length;
    // Move to the next question
    if (currentQuestion < questions.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer("");
    } else {
      // End of the quiz, you can navigate to the result page or show a summary
      alert(`Quiz completed! Your score: ${score} / ${totalquestions}`);
    }
  };

  return (
    <>
      <div className="flex flex-col h-screen justify-center items-center gap-20">
        <Link
          href="/"
          className="bg-red-700 text-white text-lg border rounded-lg p-2"
        >
          Home
        </Link>
        <h1 className="text-5xl">
          {questions.questions[currentQuestion].question}
        </h1>

        <ul className="flex items-center text-center gap-10">
          {questions.questions[currentQuestion].answers.map((answer, index) => (
            <li
              className={`border rounded-lg p-5 cursor-pointer transition duration-300 ${
                selectedAnswer === answer
                  ? "bg-purple-600 text-white"
                  : "bg-white text-black"
              }`}
              key={index}
              onClick={() => handleAnswerClick(answer)}
            >
              {answer}
            </li>
          ))}
        </ul>

        {selectedAnswer && (
          <button
            className="bg-indigo-900 text-white p-3 rounded-lg"
            onClick={handleNextQuestion}
          >
            Next Question
          </button>
        )}
      </div>
    </>
  );
}
export default quiz;
