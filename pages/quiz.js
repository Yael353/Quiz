import React, { useState } from 'react';
import Link from "next/link";
import { questions } from './data/questions';

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
    // Move to the next question
    if (currentQuestion < questions.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer("");
    } else {
      // End of the quiz, you can navigate to the result page or show a summary
      alert(`Quiz completed! Your score: ${score}`);
    }
  };

  return (
    <>
      <Link href="/">Home</Link>
      <h1>{questions.questions[currentQuestion].question}</h1>

      <ul>
        {questions.questions[currentQuestion].answers.map((answer, index) => (
          <li key={index} onClick={() => handleAnswerClick(answer)}>
            {answer}
          </li>
        ))}
      </ul>

      {selectedAnswer && (
        <button onClick={handleNextQuestion}>Next Question</button>
      )}
    </>
  );
}
export default quiz
