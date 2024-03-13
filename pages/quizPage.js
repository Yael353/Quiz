import React, { useState } from "react";
import Link from "next/link";
import { quiz } from "./data/questions";

function quizPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [score, setScore] = useState(0);

  const handleAnswerClick = (answer) => {
    setSelectedAnswer(answer);

    // Check if the answer is correct
    if (answer === quiz.questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
  };
  let totalQuestions = quiz.questions.length;
  const handleNextQuestion = () => {
    // Move to the next question
    if (currentQuestion < quiz.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer("");
    } else {
      // End of the quiz, you can navigate to the result page or show a summary
      alert(`Quiz completed! Your score: ${score} / ${totalQuestions}`);
    }
  };

  return (
    <>
      <div className="flex mx-2 flex-col h-screen justify-center items-center gap-20">
        {/* <Link href="/" className='bg-red-700 text-white text-lg border rounded-lg p-2'>Home</Link>*/}
        <h1 className="text-2xl lg:text-5xl text-center sm:max-w-[80%] mx-auto justify-center items-center">
          {quiz.questions[currentQuestion].question}
        </h1>

        <ul className="grid grid-cols-2 sm:grid-cols-4 items-center gap-6 sm:gap-10">
          {quiz.questions[currentQuestion].answers.map((answer, index) => (
            <li
              className={`border font-semibold border-slate-300 rounded-lg text-center p-3 sm:p-5 cursor-pointer transition duration-300 ${
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
export default quizPage;
