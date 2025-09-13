import React, { useState } from "react";

const JSFetchAPI = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // ✅ Function to fetch data
  const fetchData = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const result = await response.json();
      setData(result);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-lg mt-10 space-y-6">
      <h1 className="text-3xl font-medium text-blue-500">
        Fetch API in <span className="text-green-600">JavaScript</span>
      </h1>

      <p className="text-gray-700">
        The <strong>Fetch API</strong> provides a modern way to make HTTP requests in 
        JavaScript. It returns a <code>Promise</code> and allows us to fetch resources 
        like JSON, text, or files from a server.
      </p>

      <button
        onClick={fetchData}
        className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
      >
        Fetch Data
      </button>

      <div className="p-4 bg-gray-100 rounded-md font-mono text-gray-800">
        {loading && "⏳ Loading..."}
        {error && <span className="text-red-600">❌ {error}</span>}
        {data && (
          <pre className="whitespace-pre-wrap">
            {JSON.stringify(data, null, 2)}
          </pre>
        )}
      </div>

      <h2 className="text-2xl font-semibold text-gray-800">Code Example:</h2>
      <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto">
{`// ✅ Using Fetch API
fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then(response => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then(data => console.log(data))
  .catch(error => console.error("Error:", error));

// ✅ Using async/await
async function getData() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error:", error);
  }
}`}
      </pre>

      <h2 className="text-2xl font-semibold text-gray-800">Explanation:</h2>
      <ul className="list-disc list-inside space-y-2 text-gray-700">
        <li>
          <code>fetch(url)</code> → Makes a request to the given URL.
        </li>
        <li>
          Returns a <strong>Promise</strong> that resolves to a <code>Response</code> object.
        </li>
        <li>
          Use <code>response.json()</code>, <code>response.text()</code>, etc. 
          to extract data.
        </li>
        <li>
          Works with <code>then/catch</code> or <code>async/await</code>.
        </li>
        <li>
          Commonly used for API calls in modern web applications.
        </li>
      </ul>
    </div>
  );
};

export default JSFetchAPI;