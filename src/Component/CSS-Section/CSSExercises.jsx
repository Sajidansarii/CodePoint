import React from "react";

const CssExercises = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      {/* Heading */}
      <h1 className="text-3xl font-medium mb-6 text-blue-500">
        CSS Exercises
      </h1>
      <p className="mb-6 text-gray-700">
        CSS Exercises ka purpose hai ki aap practice karke apne concepts ko
        strong karein. Niche kuch exercises diye gaye hain jisme question, 
        solution aur explanation included hai.
      </p>

      {/* Exercise 1 */}
      <div className="mb-8 p-4 border rounded-xl shadow-md bg-white">
        <h2 className="text-xl font-semibold mb-2 text-gray-800">
          Exercise 1: Change Background Color
        </h2>
        <p className="mb-3 text-gray-600">
          Question: Ek <code>&lt;div&gt;</code> banao jiska background color
          <span className="font-semibold"> blue </span> ho aur text white ho.
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
          <li><code>background-color: blue;</code> → div ka background blue banata hai.</li>
          <li><code>color: white;</code> → text ko white color deta hai.</li>
          <li><code>padding: 20px;</code> → content ke charo taraf gap add karta hai.</li>
          <li><code>text-align: center;</code> → text ko center align karta hai.</li>
          <li><code>border-radius: 8px;</code> → corners ko thoda round banata hai.</li>
        </ul>
      </div>

      {/* Exercise 2 */}
      <div className="mb-8 p-4 border rounded-xl shadow-md bg-white">
        <h2 className="text-xl font-semibold mb-2 text-gray-800">
          Exercise 2: Hover Effect on Button
        </h2>
        <p className="mb-3 text-gray-600">
          Question: Ek button banao jo hover hone par background 
          <span className="font-semibold"> green </span> ho jaye.
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
          <li><code>.btn</code> class button ke styling ke liye hai.</li>
          <li><code>background-color: blue;</code> → by default button blue hoga.</li>
          <li><code>.btn:hover</code> → jab user hover karega tab style change hoga.</li>
          <li><code>background-color: green;</code> → hover pe button green ho jayega.</li>
        </ul>
      </div>
    </div>
  );
};

export default CssExercises;