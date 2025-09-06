import React, { useState } from "react";

const JSPromises = () => {
  const [result, setResult] = useState("Click the button to start...");

  // ✅ Function that returns a promise
  const fetchData = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const success = Math.random() > 0.5; // Random success or failure
        if (success) {
          resolve("✅ Data fetched successfully!");
        } else {
          reject("❌ Failed to fetch data!");
        }
      }, 2000); // simulate 2s delay
    });
  };

  // ✅ Using Promise with .then() and .catch()
  const handleFetch = () => {
    setResult("⏳ Loading...");
    fetchData()
      .then((message) => {
        setResult(message);
      })
      .catch((error) => {
        setResult(error);
      });
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-lg mt-10 space-y-6">
      <h1 className="text-3xl font-bold text-blue-600">
        Promises in <span className="text-green-600">JavaScript</span>
      </h1>

      <p className="text-gray-700">
        A <strong>Promise</strong> in JavaScript is an object that represents the eventual 
        completion (or failure) of an asynchronous operation. It can be in one of three states:
      </p>
      <ul className="list-disc list-inside text-gray-700">
        <li><strong>Pending</strong> → The operation is still in progress.</li>
        <li><strong>Fulfilled</strong> → The operation completed successfully (<code>resolve</code>).</li>
        <li><strong>Rejected</strong> → The operation failed (<code>reject</code>).</li>
      </ul>

      <button
        onClick={handleFetch}
        className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
      >
        Fetch Data
      </button>

      <div className="p-4 bg-gray-100 rounded-md">
        <p className="font-semibold text-gray-800">{result}</p>
      </div>

      <h2 className="text-2xl font-semibold text-gray-800">Explanation:</h2>
      <ul className="list-disc list-inside space-y-2 text-gray-700">
        <li>
          <strong>new Promise()</strong> creates a promise that runs an async task.
        </li>
        <li>
          <strong>resolve()</strong> → Moves promise to <em>fulfilled</em> state.
        </li>
        <li>
          <strong>reject()</strong> → Moves promise to <em>rejected</em> state.
        </li>
        <li>
          <strong>.then()</strong> handles success, <strong>.catch()</strong> handles failure.
        </li>
      </ul>
    </div>
  );
};

export default JSPromises;