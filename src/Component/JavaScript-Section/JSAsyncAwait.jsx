import React, { useState } from "react";

const JSAsyncAwait = () => {
  const [data, setData] = useState("Click the button to fetch data...");

  // ✅ Async function using async/await
  const fetchData = async () => {
    setData("⏳ Fetching data...");

    try {
      // Using fetch to call a public API
      const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
      const result = await response.json();

      setData(`Title: ${result.title}`);
    } catch (error) {
      setData(`Error: ${error.message}`);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-lg mt-10 space-y-6">
      <h1 className="text-3xl font-bold text-blue-600">
        Async / Await in <span className="text-green-600">JavaScript</span>
      </h1>

      <p className="text-gray-700">
        The <strong>async/await</strong> syntax in JavaScript provides a cleaner way 
        to work with asynchronous operations. It makes asynchronous code look and 
        behave like synchronous code, improving readability.
      </p>

      <button
        onClick={fetchData}
        className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
      >
        Fetch Data with Async/Await
      </button>

      <div className="p-4 bg-gray-100 rounded-md">
        <p className="font-semibold text-gray-800">{data}</p>
      </div>

      <h2 className="text-2xl font-semibold text-gray-800">Code Example:</h2>
      <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto">
{`async function fetchData() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.error("Error:", error);
  }
}

fetchData();`}
      </pre>

      <h2 className="text-2xl font-semibold text-gray-800">Explanation:</h2>
      <ul className="list-disc list-inside space-y-2 text-gray-700">
        <li>
          Functions declared with <code>async</code> always return a{" "}
          <strong>Promise</strong>.
        </li>
        <li>
          The <code>await</code> keyword pauses the function execution until the
          Promise is resolved or rejected.
        </li>
        <li>
          This makes the code easier to read compared to <code>.then()</code> chaining.
        </li>
        <li>
          Errors are handled using <code>try...catch</code>.
        </li>
      </ul>
    </div>
  );
};

export default JSAsyncAwait;