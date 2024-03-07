import React, { useState } from "react";

const AddNewQuestion = () => {
  const [newQuestion, setNewQuestion] = useState("");
  const [newAnswers, setNewAnswers] = useState(["", "", "", ""]);
  const [correctAnswer, setCorrectAnswer] = useState("");

  const handleInputChange = (i, value) => {
    const updatedAnswers = [...newAnswers];
    updatedAnswers[i] = value;
    setNewAnswers(updatedAnswers);
  };

  //generate ID
  const generateUniqueId = () => {
    return Math.random().toString(36).substring(2) + Date.now().toString(36);
  };

  //when save - newquestobj
  const handleAddQuestion = () => {
    // Check if question field is empty
    if (newQuestion.trim() === "") {
      alert("Please enter a question.");
      return;
    }

    // Check if any answer fields are empty
    if (newAnswers.some((answer) => answer.trim() === "")) {
      alert("Please fill in all answer fields.");
      return;
    }

    // Check if correct answer field is empty
    if (correctAnswer.trim() === "") {
      alert("Please enter the correct answer.");
      return;
    }

    // Check if correct answer matches one answers
    if (!newAnswers.includes(correctAnswer.trim())) {
      alert("The correct answer must match one of the provided answers.");
      return;
    }

    const allAnswers = [...newAnswers];
    const uniqueAnswers = new Set(allAnswers);
    if (uniqueAnswers.size !== allAnswers.length) {
      alert("Answers must be unique.");
      return;
    }

    //create new quest/ans
    const newQuestObj = {
      id: generateUniqueId(),
      question: newQuestion,
      answers: newAnswers.filter((answer) => answer.trim() !== ""),
      correctAnswer: correctAnswer,
    };

    //get current questions from localStorage
    const storedQuestions = JSON.parse(localStorage.getItem("newQuests")) || [];
    console.log("stored before", storedQuestions);

    // Make sure storedQuestions is an array
    const storedQuestionsArray = Array.isArray(storedQuestions)
      ? storedQuestions
      : [];
      
    //add the new Question
    const updatedQuestions = [...storedQuestionsArray, newQuestObj];

    // Save added questions to localStorage
    localStorage.setItem("newQuests", JSON.stringify(updatedQuestions));

    console.log("localstorage push", updatedQuestions);
    // console.log("get stored after adding", storedQuestions)
    console.log("New question added");

    // Reset form fields
    setNewQuestion("");
    setNewAnswers(["", "", "", ""]);
    setCorrectAnswer("");
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
      {newAnswers.map((answer, i) => (
        <input
          key={i}
          type="text"
          value={answer}
          onChange={(e) => handleInputChange(i, e.target.value)}
          placeholder={`Enter answer ${i + 1}`}
          className="border border-gray-400 rounded-md px-2 py-1 my-2"
        />
      ))}
      <p className="font-semibold text-xl">Correct Answer:</p>
      <input
        type="text"
        value={correctAnswer}
        onChange={(e) => setCorrectAnswer(e.target.value)}
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
