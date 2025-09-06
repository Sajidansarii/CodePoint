import React, { useState } from "react";

const JSAJAXDatabase = () => {
  const [result, setResult] = useState("Click the button to fetch users from database...");

  // ✅ AJAX request to fetch data from a database via backend
  const fetchDatabase = () => {
    const xhr = new XMLHttpRequest();

    // Example PHP file that connects to a database and returns data as JSON
    xhr.open("GET", "https://www.w3schools.com/js/demo_ajax_database.php", true);

    xhr.onload = () => {
      if (xhr.status === 200) {
        setResult(xhr.responseText); // Server response (user data from DB)
      } else {
        setResult(` Error: ${xhr.status} - ${xhr.statusText}`);
      }
    };

    xhr.onerror = () => {
      setResult("⚠ Network error while contacting server");
    };

    xhr.send();
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-lg mt-10 space-y-6">
      <h1 className="text-3xl font-bold text-blue-600">
        AJAX with <span className="text-green-600">Database</span> in JavaScript
      </h1>

      <p className="text-gray-700">
        AJAX allows JavaScript to send a request to the server, where a backend script 
        (like <strong>PHP</strong> or <strong>ASP</strong>) communicates with a 
        <strong> database</strong> (like MySQL) and sends the result back without reloading 
        the page.
      </p>

      <button
        onClick={fetchDatabase}
        className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
      >
        Fetch Data from Database
      </button>

      <div className="p-4 bg-gray-100 rounded-md font-mono text-gray-800 overflow-x-auto">
        {result}
      </div>

      <h2 className="text-2xl font-semibold text-gray-800">JavaScript (AJAX) Code:</h2>
      <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto">
{`const xhr = new XMLHttpRequest();
xhr.open("GET", "getData.php", true);

xhr.onload = () => {
  if (xhr.status === 200) {
    console.log(xhr.responseText); // Data from DB
  }
};

xhr.send();`}
      </pre>

      <h2 className="text-2xl font-semibold text-gray-800">Backend (PHP - getData.php):</h2>
      <pre className="bg-gray-900 text-yellow-300 p-4 rounded-lg overflow-x-auto">
{`<?php
  // Connect to MySQL
  $conn = mysqli_connect("localhost", "root", "", "testdb");

  if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
  }

  // Query users table
  $sql = "SELECT name, email FROM users";
  $result = mysqli_query($conn, $sql);

  // Fetch data
  $data = [];
  while ($row = mysqli_fetch_assoc($result)) {
    $data[] = $row;
  }

  echo json_encode($data);
?>`}
      </pre>

      <h2 className="text-2xl font-semibold text-gray-800">Explanation:</h2>
      <ul className="list-disc list-inside space-y-2 text-gray-700">
        <li>JavaScript uses <code>XMLHttpRequest</code> to send a request.</li>
        <li>Server-side script (<code>PHP</code>) connects to the database.</li>
        <li>The query result is sent back as a response (usually JSON).</li>
        <li>JavaScript displays the data dynamically without refreshing the page.</li>
      </ul>
    </div>
  );
};

export default JSAJAXDatabase;