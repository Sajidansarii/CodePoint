import React, { useState } from "react";

const JSAJAXXMLHttp = () => {
  const [data, setData] = useState("Click the button to fetch data...");

  // ✅ AJAX with XMLHttpRequest
  const fetchData = () => {
    const xhr = new XMLHttpRequest();

    // Open a GET request
    xhr.open("GET", "https://jsonplaceholder.typicode.com/users/1", true);

    // What happens when response loads
    xhr.onload = () => {
      if (xhr.status === 200) {
        const response = JSON.parse(xhr.responseText);
        setData(` Name: ${response.name},  Email: ${response.email}`);
      } else {
        setData("❌ Error fetching data");
      }
    };

    // Error handling
    xhr.onerror = () => {
      setData("⚠ Network error occurred");
    };

    // Send the request
    xhr.send();
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-lg mt-10 space-y-6">
      <h1 className="text-3xl font-medium text-blue-500">
        AJAX with <span className="text-green-600">XMLHttpRequest</span>
      </h1>

      <p className="text-gray-700">
        <strong>AJAX (Asynchronous JavaScript and XML)</strong> using{" "}
        <code>XMLHttpRequest</code> allows us to request data from a server
        without refreshing the page.
      </p>

      <button
        onClick={fetchData}
        className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
      >
        Fetch User Data
      </button>

      <div className="p-4 bg-gray-100 rounded-md font-mono text-gray-800 overflow-x-auto">
        {data}
      </div>

      <h2 className="text-2xl font-semibold text-gray-800">Code Example:</h2>
      <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto">
{`// ✅ AJAX with XMLHttpRequest
const xhr = new XMLHttpRequest();

// Initialize a GET request
xhr.open("GET", "https://jsonplaceholder.typicode.com/users/1", true);

// Define what happens when response is loaded
xhr.onload = () => {
  if (xhr.status === 200) {
    const response = JSON.parse(xhr.responseText);
    console.log("User:", response.name, "Email:", response.email);
  } else {
    console.error("Error fetching data");
  }
};

// Define what happens on error
xhr.onerror = () => {
  console.error("Network error");
};

// Send request
xhr.send();`}
      </pre>

      <h2 className="text-2xl font-semibold text-gray-800">Explanation:</h2>
      <ul className="list-disc list-inside space-y-2 text-gray-700">
        <li>
          <code>XMLHttpRequest()</code> → Creates an AJAX request object.
        </li>
        <li>
          <code>xhr.open(method, url, async)</code> → Initializes the request.
        </li>
        <li>
          <code>xhr.send()</code> → Sends the request to the server.
        </li>
        <li>
          <code>onload</code> → Executes when the request is completed.
        </li>
        <li>
          <code>onerror</code> → Handles errors like network failure.
        </li>
        <li>
          We used <code>JSON.parse()</code> to convert JSON response into a
          JavaScript object.
        </li>
      </ul>
    </div>
  );
};

export default JSAJAXXMLHttp;