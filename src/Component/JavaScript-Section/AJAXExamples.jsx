import React, { useState } from "react";

const JSAJAXExamples = () => {
  const [data, setData] = useState("Click a button to load an AJAX example...");

  // ✅ Example 1: Load text file
  const loadTextFile = () => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://www.w3schools.com/js/ajax_info.txt", true);
    xhr.onload = () => {
      if (xhr.status === 200) setData(xhr.responseText);
    };
    xhr.send();
  };

  // ✅ Example 2: Load server response (PHP/ASP)
  const loadServer = () => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://www.w3schools.com/js/demo_ajax.asp", true);
    xhr.onload = () => {
      if (xhr.status === 200) setData(xhr.responseText);
    };
    xhr.send();
  };

  // ✅ Example 3: Load JSON Data
  const loadJSON = () => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://jsonplaceholder.typicode.com/users/1", true);
    xhr.onload = () => {
      if (xhr.status === 200) {
        const user = JSON.parse(xhr.responseText);
        setData(`Name: ${user.name}, Email: ${user.email}`);
      }
    };
    xhr.send();
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-lg mt-10 space-y-6">
      <h1 className="text-3xl font-medium text-blue-500">
        AJAX <span className="text-green-600">Examples</span> in JavaScript
      </h1>

      <p className="text-gray-700">
        AJAX lets web applications communicate with the server without reloading
        the page. Below are some <strong>examples</strong> of how AJAX can be used
        in real projects.
      </p>

      <div className="flex flex-wrap gap-4">
        <button
          onClick={loadTextFile}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Load Text File
        </button>
        <button
          onClick={loadServer}
          className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
        >
          Load ASP/PHP Response
        </button>
        <button
          onClick={loadJSON}
          className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
        >
          Load JSON Data
        </button>
      </div>

      <div className="p-4 bg-gray-100 rounded-md font-mono text-gray-800 overflow-x-auto">
        {data}
      </div>

      <h2 className="text-2xl font-semibold text-gray-800">JavaScript Examples:</h2>
      <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto">
{`// Example 1: Load text file
xhr.open("GET", "ajax_info.txt", true);

// Example 2: Load server response (PHP/ASP)
xhr.open("GET", "server.asp", true);

// Example 3: Load JSON data
xhr.open("GET", "https://jsonplaceholder.typicode.com/users/1", true);`}
      </pre>

      <h2 className="text-2xl font-semibold text-gray-800">Explanation:</h2>
      <ul className="list-disc list-inside space-y-2 text-gray-700">
        <li>
          <strong>Load Text File:</strong> Fetches plain text content from the server.
        </li>
        <li>
          <strong>Load Server Response:</strong> Communicates with backend scripts like 
          <code> PHP</code> or <code>ASP</code>.
        </li>
        <li>
          <strong>Load JSON Data:</strong> Fetches structured data (like user info) 
          from a REST API.
        </li>
      </ul>
    </div>
  );
};

export default JSAJAXExamples;