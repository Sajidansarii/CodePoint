import React, { useState } from "react";

const JSAJAXPHP = () => {
  const [response, setResponse] = useState("Click the button to fetch data from PHP...");

  // ✅ Fetch data from PHP using AJAX
  const fetchPHP = () => {
    const xhr = new XMLHttpRequest();

    // Assume you have a PHP file "server.php" returning some data
    xhr.open("GET", "https://www.w3schools.com/js/demo_ajax_php.txt", true);

    xhr.onload = () => {
      if (xhr.status === 200) {
        setResponse(xhr.responseText); // Response from PHP server
      } else {
        setResponse(`Error: ${xhr.status} - ${xhr.statusText}`);
      }
    };

    xhr.onerror = () => {
      setResponse("⚠ Network error while contacting PHP server");
    };

    xhr.send();
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-lg mt-10 space-y-6">
      <h1 className="text-3xl font-bold text-blue-600">
        AJAX with <span className="text-green-600">PHP</span> in JavaScript
      </h1>

      <p className="text-gray-700">
        AJAX can communicate with a <strong>PHP backend</strong> to fetch or send data
        without refreshing the entire page. The PHP script processes the request and
        sends back a response.
      </p>

      <button
        onClick={fetchPHP}
        className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
      >
        Fetch Data from PHP
      </button>

      <div className="p-4 bg-gray-100 rounded-md font-mono text-gray-800 overflow-x-auto">
        {response}
      </div>

      <h2 className="text-2xl font-semibold text-gray-800">Code Example (JavaScript):</h2>
      <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto">
{`const xhr = new XMLHttpRequest();
xhr.open("GET", "server.php", true);

xhr.onload = () => {
  if (xhr.status === 200) {
    console.log(xhr.responseText); // Response from PHP
  }
};

xhr.send();`}
      </pre>

      <h2 className="text-2xl font-semibold text-gray-800">Code Example (server.php):</h2>
      <pre className="bg-gray-900 text-yellow-300 p-4 rounded-lg overflow-x-auto">
{`<?php
  // server.php
  echo "Hello from PHP! This response came via AJAX.";
?>`}
      </pre>

      <h2 className="text-2xl font-semibold text-gray-800">Explanation:</h2>
      <ul className="list-disc list-inside space-y-2 text-gray-700">
        <li><strong>JavaScript (AJAX)</strong> sends a request to <code>server.php</code>.</li>
        <li><strong>PHP</strong> executes on the server and generates a response.</li>
        <li><strong>xhr.responseText</strong> contains the returned message from PHP.</li>
        <li>No page reload occurs; only the response area updates dynamically.</li>
      </ul>
    </div>
  );
};

export default JSAJAXPHP;