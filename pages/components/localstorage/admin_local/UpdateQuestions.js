import React, { useState, useEffect } from "react";

const UpdateQuestions = ({
  id,
  question,
  answers,
  correctAnswer,
  onUpdate,
  onDelete,
}) => {
  const [editedQuestion, setEditedQuestion] = useState(question || "");
  const [editedAnswers, setEditedAnswers] = useState(answers || []);
  const [editedCorrectAnswer, setEditedCorrectAnswer] = useState(
    correctAnswer || ""
  );
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const handleStorageChange = () => {
      // Update component state based on localStorage changes
      // Trigger a re-render if necessary
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  const handleSaveEdit = () => {
    if (editedQuestion.trim() === "") {
      alert("Please enter a question.");
      return;
    }
    if (editedAnswers.some((answer) => answer.trim() === "")) {
      alert("Please fill in all answer fields.");
      return;
    }
    if (editedCorrectAnswer.trim() === "") {
      alert("Please enter the correct answer.");
      return;
    }
    if (!editedAnswers.includes(editedCorrectAnswer.trim())) {
      alert("The correct answer must match one of the provided answers.");
      return;
    }
    const allAnswers = [...editedAnswers];
    const uniqueAnswers = new Set(allAnswers);
    if (uniqueAnswers.size !== allAnswers.length) {
      alert("Answers must be unique.");
      return;
    }

    const updatedQuestion = {
      id: id,
      question: editedQuestion,
      answers: editedAnswers.filter((answer) => answer.trim() !== ""),
      correctAnswer: editedCorrectAnswer,
    };

    const storedQuestions = JSON.parse(localStorage.getItem("newQuests")) || [];
    const updatedQuestions = storedQuestions.map((quest) =>
      quest.id === id ? updatedQuestion : quest
    );

    localStorage.setItem("newQuests", JSON.stringify(updatedQuestions));

    // Update state with edited values from updatedQuestion object
    setEditedQuestion(updatedQuestion.question);
    setEditedAnswers(updatedQuestion.answers);
    setEditedCorrectAnswer(updatedQuestion.correctAnswer);

    onUpdate(updatedQuestion);
    setIsEditing(false);
  };

  const deleteQuestion = () => {
    const storedQuestions = JSON.parse(localStorage.getItem("newQuests")) || [];
    const updatedQuestions = storedQuestions.filter(
      (question) => question.id !== id
    );
    localStorage.setItem("newQuests", JSON.stringify(updatedQuestions));
    onDelete(id);
  };

  return (
    <div className="relative my-4 w-[300px] mx-auto  sm:w-[420px] h-auto">
      {isEditing ? (
        <>
          <div className="p-4 bg-blue-700 w-full h-[500px] mb-6">
            <div className="mb-4">
              <p className="text-white mb-1">Question: </p>
              <input
                type="text"
                value={editedQuestion}
                onChange={(e) => setEditedQuestion(e.target.value)}
                className="w-full text-xl font-semibold px-2 py-1"
              />
            </div>
            <ul className="flex flex-col gap-2">
              {editedAnswers.map((answer, i) => (
                <li key={i}>
                  <p className="text-white pb-1">Answer: {i + 1}</p>
                  <input
                    type="text"
                    value={answer}
                    onChange={(e) => {
                      const updatedAnswers = [...editedAnswers];
                      updatedAnswers[i] = e.target.value;
                      setEditedAnswers(updatedAnswers);
                    }}
                    className="w-full py-1 px-2"
                  />
                </li>
              ))}
            </ul>
            <div className="flex flex-col sm:flex-row sm:items-center mt-4 ">
              <p className="pr-2 pb-1 text-white">Correct answer:</p>
              <input
                type="text"
                value={editedCorrectAnswer}
                onChange={(e) => setEditedCorrectAnswer(e.target.value)}
                className="px-2 py-1"
              />
            </div>
            <div className="flex justify-center w-full mx-auto gap-2 sm:gap-6 absolute left-0 bottom-2 sm:bottom-4 ">
              <button
                onClick={handleSaveEdit}
                className="bg-green-600 uppercase tracking-wider text-white font-medium px-4 py-1 rounded-md"
              >
                Save
              </button>
              <button
                onClick={() => setIsEditing(false)}
                className="bg-red-600 uppercase tracking-wider text-white font-medium px-4 py-1 rounded-md"
              >
                Cancel
              </button>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="p-4 bg-blue-700 w-full h-[440px]">
            <p className="text-white">Id: {id}</p>
            <h2 className="text-xl font-semibold text-white py-4">
              {question}
            </h2>
            <ul>
              {answers &&
                answers.map((answer, i) => (
                  <li key={i}>
                    <button className="bg-white mb-4 text-slate-700 py-1 font-medium w-full border border-slate-800 rounded-sm">
                      {answer}
                    </button>
                  </li>
                ))}
            </ul>
            <p className="w-full bg-white text-green-600 py-1 px-2 mt-3 font-semibold">
              Correct Answer: {correctAnswer}
            </p>
            <div className="flex justify-center w-full mx-auto gap-2 sm:gap-6 absolute left-0 bottom-2 sm:bottom-4 ">
              <button
                onClick={() => setIsEditing(true)}
                className="bg-[#292054] uppercase tracking-wider text-white font-medium px-4 py-1 rounded-md"
              >
                Edit
              </button>
              <button
                onClick={deleteQuestion}
                className="bg-red-600 uppercase tracking-wider text-white font-medium px-4 py-1 rounded-md"
              >
                Delete
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default UpdateQuestions;
