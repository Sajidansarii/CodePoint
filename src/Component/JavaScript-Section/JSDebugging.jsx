import React, { useState } from "react";

const JSDebugging = () => {
  const [number, setNumber] = useState(0);
  const [result, setResult] = useState("");

  const debugExample = () => {
    console.log("👉 Debugging started...");

    // Step 1: Log the current number
    console.log("Current number:", number);

    // Step 2: Add a debugger statement (opens dev tools if running in browser)
    debugger;

    // Step 3: Check if number is even or odd
    if (number % 2 === 0) {
      console.warn("⚠ Number is even");
      setResult(`${number} is Even`);
    } else {
      console.error("Number is odd");
      setResult(`${number} is Odd`);
    }

    console.log("👉 Debugging finished...");
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-lg mt-10 space-y-6">
      <h1 className="text-3xl font-bold text-blue-600">
        Debugging in <span className="text-green-600">JavaScript</span>
      </h1>

      <p className="text-gray-700">
        Debugging is the process of finding and fixing errors in code.
        JavaScript provides tools like <code>console.log()</code>, 
        <code>console.warn()</code>, <code>console.error()</code>, and the 
        <code>debugger</code> keyword to help developers understand what’s happening.
      </p>

      <div className="flex items-center gap-4">
        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(Number(e.target.value))}
          className="px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-400"
        />
        <button
          onClick={debugExample}
          className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Debug Number
        </button>
      </div>

      {result && (
        <div className="p-4 bg-gray-100 rounded-md">
          <p className="font-semibold text-gray-800">{result}</p>
        </div>
      )}

      <h2 className="text-2xl font-semibold text-gray-800">Explanation:</h2>
      <ul className="list-disc list-inside space-y-2 text-gray-700">
        <li>
          <strong>console.log()</strong> → Prints normal debugging information.
        </li>
        <li>
          <strong>console.warn()</strong> → Highlights potential warnings in yellow.
        </li>
        <li>
          <strong>console.error()</strong> → Shows errors in red.
        </li>
        <li>
          <strong>debugger</strong> → Pauses execution in browser DevTools so you 
          can inspect variables and step through code.
        </li>
      </ul>
    </div>
  );
};

export default JSDebugging;