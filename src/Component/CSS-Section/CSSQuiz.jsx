import React, { useState } from "react";

const CssQuiz = () => {
  const questions = [
    {
      question: "What is the full form of CSS?",
      options: [
        "Creative Style Sheets",
        "Cascading Style Sheets",
        "Colorful Style Sheets",
        "Computer Style Sheets",
      ],
      answer: "Cascading Style Sheets",
    },
    {
      question: "Which property is used in CSS to change the text color?",
      options: ["background-color", "color", "text-style", "font-color"],
      answer: "color",
    },
    {
      question: "Which property is useful in CSS to center align an element?",
      options: ["align", "text-align", "justify", "position"],
      answer: "text-align",
    },
  ];  

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswer = (option) => {
    if (option === questions[currentQuestion].answer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white shadow-md rounded-xl mt-10">
      <h2 className="text-3xl font-medium mb-4 text-blue-500">
        CSS Quiz
      </h2>

      {showScore ? (
        <div className="text-center">
          <h3 className="text-lg font-semibold">
            Aapka Score: {score} / {questions.length}
          </h3>
          <p className="text-gray-600 mt-2">
            {score === questions.length
              ? "🔥 Bahut badiya! Aapne sab sahi kiya."
              : "👍 Accha effort! Abhi aur practice karein."}
          </p>
        </div>
      ) : (
        <div>
          <h3 className="text-lg font-semibold mb-4">
            {questions[currentQuestion].question}
          </h3>
          <div className="space-y-2">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(option)}
                className="w-full p-2 text-left bg-gray-100 hover:bg-indigo-100 rounded-md border border-gray-300"
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CssQuiz;