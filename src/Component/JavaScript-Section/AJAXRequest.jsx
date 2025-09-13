import React, { useState } from "react";

const JSAJAXRequest = () => {
  const [result, setResult] = useState("Click the button to make an AJAX Request...");

  // ✅ Making an AJAX Request
  const makeRequest = () => {
    const xhr = new XMLHttpRequest();

    // Open a request (GET method)
    xhr.open("GET", "https://jsonplaceholder.typicode.com/todos/1", true);

    // Handle response when loaded
    xhr.onload = () => {
      if (xhr.status === 200) {
        const response = JSON.parse(xhr.responseText);
        setResult( `Title: ${response.title}, Completed: ${response.completed}`);
      } else {
        setResult("❌ Failed to fetch data");
      }
    };

    // Handle error case
    xhr.onerror = () => {
      setResult("⚠ Network error occurred");
    };

    // Send the request
    xhr.send();
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-lg mt-10 space-y-6">
      <h1 className="text-3xl font-medium text-blue-500">
        AJAX <span className="text-green-600">Request</span> in JavaScript
      </h1>

      <p className="text-gray-700">
        An <strong>AJAX Request</strong> is made using{" "}
        <code>XMLHttpRequest</code> to communicate with a server asynchronously,
        without refreshing the page. This is the foundation of AJAX.
      </p>

      <button
        onClick={makeRequest}
        className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
      >
        Make AJAX Request
      </button>

      <div className="p-4 bg-gray-100 rounded-md font-mono text-gray-800 overflow-x-auto">
        {result}
      </div>

      <h2 className="text-2xl font-semibold text-gray-800">Code Example:</h2>
      <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto">
{`// ✅ AJAX Request Example
const xhr = new XMLHttpRequest();

// Initialize request (GET method)
xhr.open("GET", "https://jsonplaceholder.typicode.com/todos/1", true);

// When request loads
xhr.onload = () => {
  if (xhr.status === 200) {
    const response = JSON.parse(xhr.responseText);
    console.log("Title:", response.title, "Completed:", response.completed);
  } else {
    console.error("Error fetching data");
  }
};

// Handle errors
xhr.onerror = () => {
  console.error("Network error");
};

// Send request
xhr.send();`}
      </pre>

      <h2 className="text-2xl font-semibold text-gray-800">Explanation:</h2>
      <ul className="list-disc list-inside space-y-2 text-gray-700">
        <li><code>XMLHttpRequest()</code> → Creates a new AJAX request object.</li>
        <li><code>xhr.open(method, url, async)</code> → Defines request type, URL, and async flag.</li>
        <li><code>xhr.send()</code> → Sends the request to the server.</li>
        <li><code>xhr.onload</code> → Executes when response is received successfully.</li>
        <li><code>xhr.onerror</code> → Executes if the request fails due to network/server issues.</li>
        <li>We use <code>JSON.parse()</code> to convert server’s JSON response into a JavaScript object.</li>
      </ul>
    </div>
  );
};

export default JSAJAXRequest;