import React, { useState } from "react";

const JSTimingBOM = () => {
  const [output, setOutput] = useState("Click the buttons to see timing functions in action...");

  const handleTimeout = () => {
    setOutput("Waiting 2 seconds...");
    setTimeout(() => {
      setOutput("✅ 2 seconds passed! This is setTimeout in action.");
    }, 2000);
  };

  const handleInterval = () => {
    let count = 0;
    const intervalId = setInterval(() => {
      count += 1;
      setOutput(Interval `count: ${count}`);
      if (count === 5) {
        clearInterval(intervalId);
        setOutput("✅ Interval stopped after 5 counts (setInterval + clearInterval).");
      }
    }, 1000);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-lg mt-10 space-y-6">
      <h1 className="text-3xl font-medium text-blue-500">
        Timing Functions in <span className="text-green-600">BOM (Browser Object Model)</span>
      </h1>

      <p className="text-gray-700">
        BOM provides timing functions like <strong>setTimeout</strong> and <strong>setInterval</strong>
        to schedule tasks after a delay or repeatedly at intervals.
      </p>

      <div className="space-x-2 mt-2">
        <button
          onClick={handleTimeout}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          setTimeout Example
        </button>
        <button
          onClick={handleInterval}
          className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
        >
          setInterval Example
        </button>
      </div>

      <div className="p-4 bg-gray-100 rounded-md font-semibold text-gray-800">
        {output}
      </div>

      <h2 className="text-2xl font-semibold text-gray-800">Code Example:</h2>
      <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto">
{`// Execute function once after 2 seconds
setTimeout(() => {
  console.log("2 seconds passed!");
}, 2000);

// Execute function repeatedly every 1 second
let count = 0;
const intervalId = setInterval(() => {
  count++;
  console.log("Interval count:", count);
  if (count === 5) clearInterval(intervalId); // stop after 5 counts
}, 1000);`}
      </pre>

      <h2 className="text-2xl font-semibold text-gray-800">Explanation:</h2>
      <ul className="list-disc list-inside space-y-2 text-gray-700">
        <li>
          <strong>setTimeout(function, delay):</strong> Executes a function once after a specified delay in milliseconds.
        </li>
        <li>
          <strong>setInterval(function, delay):</strong> Executes a function repeatedly at every delay interval.
        </li>
        <li>
          <strong>clearInterval(intervalId):</strong> Stops a setInterval from continuing.
        </li>
        <li>
          Timing functions are part of the <strong>window</strong> object in BOM and allow scheduling tasks.
        </li>
      </ul>
    </div>
  );
};

export default JSTimingBOM;