import React, { useState } from "react";

const UpdateQuestion = ({
  id,
  question,
  answers,
  correctAns,
  onUpdate,
  onDelete,
}) => {
  const [editedQuestion, setEditedQuestion] = useState(question);
  const [editedAnswers, setEditedAnswers] = useState(answers || []); // || [] Ensure answers is initialized as an array
  const [editedCorrectAns, setEditedCorrectAns] = useState(correctAns);
  const [isEditing, setIsEditing] = useState(false);

  const handleSaveEdit = () => {
    if (editedQuestion.trim() === "") {
      alert("Please enter a question.");
      return;
    }
    if (editedAnswers.some((answer) => answer.trim() === "")) {
      alert("Please fill in all answer fields.");
      return;
    }
    if (editedCorrectAns.trim() === "") {
      alert("Please enter the correct answer.");
      return;
    }

    if (!editedAnswers.includes(editedCorrectAns.trim())) {
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
      correctAns: editedCorrectAns,
    };
    onUpdate(updatedQuestion);
    setIsEditing(false);
  };

  return (
    <div className="relative my-4 w-full mx-auto max-w-[420px] bg-blue-700 h-auto">
      {isEditing ? (
        <>
          {/*UPDATE */}
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
              {" "}
              <p className="pr-2 pb-1 text-white">Correct answer:</p>
              <input
                type="text"
                value={editedCorrectAns}
                onChange={(e) => setEditedCorrectAns(e.target.value)}
                className=" px-2 py-1"
              />{" "}
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
          {/**Current */}
          <div className="p-4 bg-blue-700 h-[440px]">
            <p className="text-white">Id: {id}</p>
            <h2 className="text-xl font-semibold text-white py-4">
              {question}
            </h2>
            <ul>
              {answers.map((answer, i) => (
                <li key={i}>
                  <button className="bg-white mb-4 text-slate-700 py-1 font-medium w-full border border-slate-800 rounded-sm">
                    {answer}
                  </button>
                </li>
              ))}
            </ul>
            <p className="w-full bg-white text-green-600 py-1 px-2 mt-3 font-semibold">
              Correct Answer: {correctAns}
            </p>
            <div className="flex justify-center w-full mx-auto gap-2 sm:gap-6 absolute left-0 bottom-2 sm:bottom-4 ">
              <button
                onClick={() => setIsEditing(true)}
                className="bg-[#292054] uppercase tracking-wider text-white font-medium px-4 py-1 rounded-md"
              >
                Edit
              </button>
              <button
                onClick={onDelete}
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

export default UpdateQuestion;
