import { useState } from "react";
import { useQuiz } from "@/QuizeContext";

export default function Admin() {
  const { questions, updateQuestions } = useQuiz();
  const [nextId, setNextId] = useState(
    Math.max(...questions.map((question) => question.id)) + 1
  );

  const handleDeleteQuestion = (id) => {
    const updatedQuestions = questions.filter((question) => question.id !== id);

    const updatedQuestionsWithIds = updatedQuestions.map((question, index) => ({
      ...question,
      id: index,
    }));

    updateQuestions(updatedQuestionsWithIds);
  };

  const handleUpdateQuestion = (id, updatedQuestion) => {
    const updatedQuestions = questions.map((question) =>
      question.id === id ? updatedQuestion : question
    );
    updateQuestions(updatedQuestions);
  };

  const handleAddQuestion = () => {
    const newQuestion = {
      id: nextId,
      question: "New Question",
      A: "",
      B: "",
      C: "",
      D: "",
      answer: "",
    };
    updateQuestions([...questions, newQuestion]);
    setNextId(nextId + 1);
  };

  return (
    <div>
      <h1>Admin Panel</h1>
      <ul>
        {questions.map((question) => (
          <li key={question.id}>
            <div>
              <strong>Question:</strong> {question.question}
            </div>
            <div>
              <strong>Options:</strong> A: {question.A}, B: {question.B}, C:{" "}
              {question.C}, D: {question.D}
            </div>
            <div>
              <strong>Answer:</strong> {question.answer}
            </div>
            <button onClick={() => handleDeleteQuestion(question.id)}>
              Delete
            </button>
            <button
              onClick={() => {
                const updatedQuestion = {
                  ...question,
                  question: prompt(
                    "Enter updated question:",
                    question.question
                  ),
                  A: prompt("Enter updated option A:", question.A),
                  B: prompt("Enter updated option B:", question.B),
                  C: prompt("Enter updated option C:", question.C),
                  D: prompt("Enter updated option D:", question.D),
                  answer: prompt("Enter updated answer:", question.answer),
                };

                handleUpdateQuestion(question.id, updatedQuestion);
              }}
            >
              Update
            </button>
          </li>
        ))}
      </ul>
      <button onClick={handleAddQuestion}>Add Question</button>
    </div>
  );
}
