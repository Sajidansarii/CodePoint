import React, { useState } from "react";

const JSAJAXResponse = () => {
  const [response, setResponse] = useState("Click the button to get AJAX Response...");

  // ✅ AJAX Response Example
  const fetchResponse = () => {
    const xhr = new XMLHttpRequest();

    // Open a GET request
    xhr.open("GET", "https://jsonplaceholder.typicode.com/posts/1", true);

    // Handle response
    xhr.onload = () => {
      if (xhr.status === 200) {
        // responseText → contains response body as string
        const data = JSON.parse(xhr.responseText);
        setResponse(`ID: ${data.id}, 📝 Title: ${data.title}`);
      } else {
        setResponse(`Error: ${xhr.status} - ${xhr.statusText}`);
      }
    };

    // Handle network error
    xhr.onerror = () => {
      setResponse("⚠ Network error occurred while fetching response");
    };

    // Send the request
    xhr.send();
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-lg mt-10 space-y-6">
      <h1 className="text-3xl font-medium text-blue-500">
        AJAX <span className="text-green-600">Response</span> in JavaScript
      </h1>

      <p className="text-gray-700">
        An <strong>AJAX Response</strong> is the data returned by the server
        after an AJAX request. We can access it using properties like{" "}
        <code>responseText</code>, <code>status</code>, and{" "}
        <code>statusText</code>.
      </p>

      <button
        onClick={fetchResponse}
        className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
      >
        Get AJAX Response
      </button>

      <div className="p-4 bg-gray-100 rounded-md font-mono text-gray-800 overflow-x-auto">
        {response}
      </div>

      <h2 className="text-2xl font-semibold text-gray-800">Code Example:</h2>
      <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto">
{`// ✅ AJAX Response Example
const xhr = new XMLHttpRequest();
xhr.open("GET", "https://jsonplaceholder.typicode.com/posts/1", true);

xhr.onload = () => {
  if (xhr.status === 200) {
    // Response text
    const data = JSON.parse(xhr.responseText);
    console.log("ID:", data.id, "Title:", data.title);
  } else {
    console.error("Error:", xhr.status, xhr.statusText);
  }
};

xhr.onerror = () => {
  console.error("Network error");
};

xhr.send();`}
      </pre>

      <h2 className="text-2xl font-semibold text-gray-800">Explanation:</h2>
      <ul className="list-disc list-inside space-y-2 text-gray-700">
        <li><code>xhr.responseText</code> → Contains the response body as a string.</li>
        <li><code>JSON.parse()</code> → Converts JSON string into a JavaScript object.</li>
        <li><code>xhr.status</code> → Shows the HTTP status code (e.g., 200 for success).</li>
        <li><code>xhr.statusText</code> → Gives the status message (e.g., "OK").</li>
        <li><code>xhr.onerror</code> → Handles errors like no internet connection.</li>
      </ul>
    </div>
  );
};

export default JSAJAXResponse;