import React, { useState } from "react";

const JSAsynchronous = () => {
  const [message, setMessage] = useState("Click the button to start...");

  // ✅ Simulating asynchronous operation
  const handleAsyncOperation = () => {
    setMessage("⏳ Starting async task...");

    setTimeout(() => {
      setMessage("✅ Async task completed after 2 seconds!");
    }, 2000);

    // This runs immediately (non-blocking)
    console.log("This log runs before async task finishes!");
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-lg mt-10 space-y-6">
      <h1 className="text-3xl font-bold text-blue-600">
        Asynchronous in <span className="text-green-600">JavaScript</span>
      </h1>

      <p className="text-gray-700">
        <strong>Asynchronous JavaScript</strong> allows tasks to run in the
        background without blocking the main thread. This means JavaScript can
        continue executing other code while waiting for a time-consuming
        operation (like fetching data or waiting for a timer) to finish.
      </p>

      <button
        onClick={handleAsyncOperation}
        className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
      >
        Run Async Task
      </button>

      <div className="p-4 bg-gray-100 rounded-md">
        <p className="font-semibold text-gray-800">{message}</p>
      </div>

      <h2 className="text-2xl font-semibold text-gray-800">Code Example:</h2>
      <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto">
{`console.log("Start");

setTimeout(() => {
  console.log("Async task finished!");
}, 2000);

console.log("End");`}
      </pre>

      <h2 className="text-2xl font-semibold text-gray-800">Explanation:</h2>
      <ul className="list-disc list-inside space-y-2 text-gray-700">
        <li>
          <code>console.log("Start")</code> runs immediately.
        </li>
        <li>
          <code>setTimeout</code> schedules a task to run after 2 seconds.
        </li>
        <li>
          <code>console.log("End")</code> executes before the async task
          completes.
        </li>
        <li>
          After 2 seconds, <code>"Async task finished!"</code> is printed.
        </li>
      </ul>
    </div>
  );
};

export default JSAsynchronous;