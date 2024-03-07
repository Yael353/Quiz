import React from "react";
import CurrentQuestions from "./components/admin/CurrentQuestions";
import AddNewQuestion from "./components/admin/AddNewQuestion";
import { useQuiz } from "@/store";

function adminPage() {
  const { questions, addQuestion, deleteQuestion, updateQuestion } = useQuiz();

  return (
    <div>
      <div className="bg-slate-50 pt-10">
        {/**Add new questions */}
        <AddNewQuestion addQuestion={addQuestion} />
      </div>
      {/**the current questions from data */}
      <div className=" w-full justify-center mx-auto">
        <CurrentQuestions
          questions={questions}
          updateQuestion={updateQuestion}
          deleteQuestion={deleteQuestion}
        />
      </div>
    </div>
  );
}

export default adminPage;
