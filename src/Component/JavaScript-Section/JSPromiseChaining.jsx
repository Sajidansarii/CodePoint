import React, { useState } from "react";

const JSPromiseChaining = () => {
  const [result, setResult] = useState("Click the button to start...");

  // ✅ A function that returns a promise with some delay
  const asyncTask = (value, delay) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(value);
      }, delay);
    });
  };

  // ✅ Demonstrating Promise Chaining
  const handleChaining = () => {
    setResult("⏳ Starting Promise chain...");

    asyncTask(2, 1000) // first task
      .then((num) => {
        setResult(`Step 1: Got number ${num}`);
        return asyncTask(num * 2, 1000); // chain with new value
      })
      .then((num) => {
        setResult(`Step 2: Doubled to ${num}`);
        return asyncTask(num + 5, 1000); // chain with another calculation
      })
      .then((num) => {
        setResult(`Step 3: Added 5 → ${num}`);
        return asyncTask(num * 3, 1000);
      })
      .then((num) => {
        setResult(`Step 4: Final Result = ${num}`);
      })
      .catch((error) => {
        setResult(`Error: ${error}`);
      });
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-lg mt-10 space-y-6">
      <h1 className="text-3xl font-bold text-blue-600">
        Promise <span className="text-green-600">Chaining</span> in JavaScript
      </h1>

      <p className="text-gray-700">
        <strong>Promise chaining</strong> allows you to run multiple asynchronous tasks in sequence. 
        Each <code>.then()</code> receives the result of the previous one and passes it to the next.
      </p>

      <button
        onClick={handleChaining}
        className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
      >
        Start Chaining
      </button>

      <div className="p-4 bg-gray-100 rounded-md">
        <p className="font-semibold text-gray-800">{result}</p>
      </div>

      <h2 className="text-2xl font-semibold text-gray-800">Explanation:</h2>
      <ul className="list-disc list-inside space-y-2 text-gray-700">
        <li>
          <strong>asyncTask()</strong> simulates an async operation with <code>setTimeout</code>.
        </li>
        <li>
          First promise returns <code>2</code>.
        </li>
        <li>
          The next <code>.then()</code> doubles it → <code>4</code>.
        </li>
        <li>
          Next step adds 5 → <code>9</code>.
        </li>
        <li>
          Finally multiplies by 3 → <code>27</code>.
        </li>
        <li>
          Each <code>.then()</code> receives the result of the previous step.
        </li>
      </ul>
    </div>
  );
};

export default JSPromiseChaining;