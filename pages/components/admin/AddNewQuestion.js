import React, { useState} from "react";

const AddNewQuestion = ({ addQuestion }) => {
  const [newQuestion, setNewQuestion] = useState("");
  const [newAnswers, setNewAnswers] = useState(["", "", "", ""]);
  const [correctAns, setCorrectAns] = useState("");

  const handleInputChange = (index, value) => {
    const updatedAnswers = [...newAnswers];
    updatedAnswers[index] = value;
    setNewAnswers(updatedAnswers);
  };
  //generate ID
  const generateUniqueId = () => {
    return Math.random().toString(36).substring(2) + Date.now().toString(36);
  };

  //when save - new question obj
  const handleAddQuestion = () => {
    // Check if the question field is empty
    if (newQuestion.trim() === "") {
      alert("Please enter a question.");
      return;
    }

    // Check if any answer fields are empty
    if (newAnswers.some((answer) => answer.trim() === "")) {
      alert("Please fill in all answer fields.");
      return;
    }

    // Check if the correct answer field is empty
    if (correctAns.trim() === "") {
      alert("Please enter the correct answer.");
      return;
    }

    // Check if the correct answer matches one of the provided answers
    if (!newAnswers.includes(correctAns.trim())) {
      alert("The correct answer must match one of the provided answers.");
      return;
    }

    // Check if any two answers are the same (except for the correct answer)
    const allAnswers = [...newAnswers];
    const uniqueAnswers = new Set(allAnswers);
    if (uniqueAnswers.size !== allAnswers.length) {
      alert("Answers must be unique.");
      return;
    }

    const newQuestionObj = {
        id: generateUniqueId(),
      question: newQuestion,
      answers: newAnswers.filter((answer) => answer.trim() !== ""),
      correctAns: correctAns,
    };
    
    // Call the addQuestion function to update the state
    addQuestion(newQuestionObj);

    // Reset form fields
    setNewQuestion("");
    setNewAnswers(["", "", "", ""]);
    setCorrectAns("");
  };

  return (
    <div className="flex flex-col p-4 w-full justify-center mx-auto max-w-[400px]">
      <h2 className="font-bold text-xl">Add new question:</h2>
      <input
        type="text"
        value={newQuestion}
        onChange={(e) => setNewQuestion(e.target.value)}
        placeholder="Enter question"
        className="border border-gray-400 rounded-md px-2 py-1 my-2"
      />
      <p className="font-semibold text-xl">Add answers:</p>
      {newAnswers.map((answer, index) => (
        <input
          key={index}
          type="text"
          value={answer}
          onChange={(e) => handleInputChange(index, e.target.value)}
          placeholder={`Enter answer ${index + 1}`}
          className="border border-gray-400 rounded-md px-2 py-1 my-2"
        />
      ))}
      <p className="font-semibold text-xl">Correct Answer:</p>
      <input
        type="text"
        value={correctAns}
        onChange={(e) => setCorrectAns(e.target.value)}
        placeholder="Enter correct answer"
        className="border border-gray-400 rounded-md px-2 py-1 my-2"
      />
      <div className="w-full flex justify-end mt-2 mb-10">
        <button
          onClick={handleAddQuestion}
          className="bg-green-600 uppercase tracking-wider text-white font-medium px-4 py-1 rounded-md"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default AddNewQuestion;
