import React from "react";

const CssExercises = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      {/* Heading */}
      <h1 className="text-3xl font-medium mb-6 text-blue-500">
        CSS Exercises
      </h1>
      <p className="mb-6">
       The purpose of CSS exercises is to help you strengthen your concepts by practicing. Below are some exercises that include questions, solutions, and explanations.
      </p>

      {/* Exercise 1 */}
      <div className="mb-8 p-4 border rounded-xl shadow-md bg-white">
        <h2 className="text-xl font-semibold mb-2 text-gray-800">
          Exercise 1: Change Background Color
        </h2>
        <p className="mb-3 text-gray-600">
          Question: 
          Create a {'<div>'} with a blue background color and white text.
        </p>

        {/* Solution Code */}
        <div className="bg-gray-100 p-4 rounded-lg mb-4">
          <pre className="text-sm text-gray-800 overflow-x-auto">
{`<style>
  .box {
    background-color: blue;
    color: white;
    padding: 20px;
    text-align: center;
    border-radius: 8px;
  }
</style>

<div class="box">
  Hello! Ye ek CSS Exercise ka solution hai.
</div>`}
          </pre>
        </div>

        {/* Explanation */}
        <h3 className="text-lg font-medium mb-2">Explanation:</h3>
        <ul className="list-disc pl-6 space-y-1 text-gray-700">
          <li><code>background-color: blue;</code> → It makes the div’s background blue.</li>
          <li><code>color: white;</code> → It gives the text a white color.</li>
          <li><code>padding: 20px;</code> → It adds spacing around the content.</li>
          <li><code>text-align: center;</code> → It center-aligns the text..</li>
          <li><code>border-radius: 8px;</code> → It makes the corners slightly rounded.</li>
        </ul>
      </div>

      {/* Exercise 2 */}
      <div className="mb-8 p-4 border rounded-xl shadow-md bg-white">
        <h2 className="text-xl font-semibold mb-2 text-gray-800">
          Exercise 2: Hover Effect on Button
        </h2>
        <p className="mb-3 text-gray-600">
          Question: Create a button that changes its background to <span className="font-semibold">green</span> when hovered over.
        </p>

        {/* Solution Code */}
        <div className="bg-gray-100 p-4 rounded-lg mb-4">
          <pre className="text-sm text-gray-800 overflow-x-auto">
{`<style>
  .btn {
    background-color: blue;
    color: white;
    padding: 10px 20px;
    border: none;
    cursor: pointer;
  }

  .btn:hover {
    background-color: green;
  }
</style>

<button class="btn">Click Me</button>`}
          </pre>
        </div>

        {/* Explanation */}
        <h3 className="text-lg font-medium mb-2">Explanation:</h3>
        <ul className="list-disc pl-6 space-y-1 text-gray-700">
          <li> The<code> .btn</code>  class is for styling the button.</li>
          <li><code>background-color: blue;</code> → By default, the button will be blue..</li>
          <li><code>.btn:hover</code> → When the user hovers, the style will change.</li>
          <li><code>background-color: green;</code> → On hover, the button will turn green.</li>
        </ul>
      </div>
    </div>
  );
};

export default CssExercises;