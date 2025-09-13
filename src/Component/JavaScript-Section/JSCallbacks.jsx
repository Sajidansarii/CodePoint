import React, { useState } from "react";

const JSCallbacks = () => {
  const [result, setResult] = useState("Click the button to start...");

  // ✅ A function that accepts a callback
  const fetchData = (callback) => {
    setTimeout(() => {
      const success = Math.random() > 0.5; // random success/failure
      if (success) {
        callback(null, " Data fetched successfully!");
      } else {
        callback(" Failed to fetch data!", null);
      }
    }, 2000);
  };

  // ✅ Using a callback function
  const handleFetch = () => {
    setResult("⏳ Fetching data...");
    fetchData((error, data) => {
      if (error) {
        setResult(error);
      } else {
        setResult(data);
      }
    });
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-lg mt-10 space-y-6">
      <h1 className="text-3xl font-medium text-blue-500">
        Callbacks in <span className="text-green-600">JavaScript</span>
      </h1>

      <p className="text-gray-700">
        A <strong>callback</strong> is a function passed as an argument to another function, 
        which is executed after the completion of a task. They are often used in asynchronous programming.
      </p>

      <button
        onClick={handleFetch}
        className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
      >
        Fetch Data with Callback
      </button>

      <div className="p-4 bg-gray-100 rounded-md">
        <p className="font-semibold text-gray-800">{result}</p>
      </div>

      <h2 className="text-2xl font-semibold text-gray-800">Explanation:</h2>
      <ul className="list-disc list-inside space-y-2 text-gray-700">
        <li>
          <strong>fetchData()</strong> simulates an async operation using <code>setTimeout</code>.
        </li>
        <li>
          It takes a <strong>callback function</strong> as an argument.
        </li>
        <li>
          If the operation succeeds → <code>callback(null, data)</code>.
        </li>
        <li>
          If the operation fails → <code>callback(error, null)</code>.
        </li>
        <li>
          The <strong>callback</strong> handles success or error after the async task finishes.
        </li>
      </ul>
    </div>
  );
};

export default JSCallbacks;