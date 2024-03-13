import React, { useState, useEffect } from "react";
import DisplayQuestions from "./components/localstorage/admin_local/DisplayQuestion";
import AddNewQuestion from "./components/localstorage/admin_local/AddNewQuestion";

function adminLocal() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const storedQuestions = JSON.parse(localStorage.getItem("newQuests")) || [];
    setQuestions(storedQuestions);
  }, []);

  const addQuestion = (newQuestion) => {
    setQuestions([...questions, newQuestion]);
  };

  console.log(typeof questions);

  const updateQuestion = (updatedQuestion) => {
    const updatedQuestions = questions.map((question) =>
      question.id === updatedQuestion.id ? updatedQuestion : question
    );
    setQuestions(updatedQuestions);
  };

  const deleteQuestion = (id) => {
    const updatedQuestions = questions.filter((question) => question.id !== id);
    setQuestions(updatedQuestions);
  };

  return (
    <div
      className="max-w-screen items-center flex flex-col"
      style={{ height: "calc(100vh - 80px" }}
    >
      <div className="mx-auto">
        <AddNewQuestion addQuestion={addQuestion} />
      </div>
      <div className="w-screen justify-center flex">
        <DisplayQuestions
          questions={questions}
          updateQuestion={updateQuestion}
          deleteQuestion={deleteQuestion}
        />
      </div>
    </div>
  );
}

export default adminLocal;
