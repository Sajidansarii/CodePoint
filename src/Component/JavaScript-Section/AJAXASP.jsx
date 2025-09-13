import React, { useState } from "react";

const JSAJAXASP = () => {
  const [response, setResponse] = useState("Click the button to fetch data from ASP...");

  // ✅ Fetch data from an ASP file using AJAX
  const fetchASP = () => {
    const xhr = new XMLHttpRequest();

    // Example ASP file (W3Schools demo URL used for practice)
    xhr.open("GET", "https://www.w3schools.com/js/demo_ajax.asp", true);

    xhr.onload = () => {
      if (xhr.status === 200) {
        setResponse(xhr.responseText); // Response from ASP server
      } else {
        setResponse(` Error: ${xhr.status} - ${xhr.statusText}`);
      }
    };

    xhr.onerror = () => {
      setResponse("⚠ Network error while contacting ASP server");
    };

    xhr.send();
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-lg mt-10 space-y-6">
      <h1 className="text-3xl font-medium text-blue-500">
        AJAX with <span className="text-green-600">ASP</span> in JavaScript
      </h1>

      <p className="text-gray-700">
        AJAX can be used with <strong>ASP</strong> just like PHP. The JavaScript code
        sends a request to an ASP file, which processes it on the server and returns a
        response without reloading the page.
      </p>

      <button
        onClick={fetchASP}
        className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
      >
        Fetch Data from ASP
      </button>

      <div className="p-4 bg-gray-100 rounded-md font-mono text-gray-800 overflow-x-auto">
        {response}
      </div>

      <h2 className="text-2xl font-semibold text-gray-800">JavaScript Code:</h2>
      <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto">
{`const xhr = new XMLHttpRequest();
xhr.open("GET", "server.asp", true);

xhr.onload = () => {
  if (xhr.status === 200) {
    console.log(xhr.responseText); // Response from ASP
  }
};

xhr.send();`}
      </pre>

      <h2 className="text-2xl font-semibold text-gray-800">ASP Code (server.asp):</h2>
      <pre className="bg-gray-900 text-yellow-300 p-4 rounded-lg overflow-x-auto">
{`<%
  ' server.asp
  Response.Write("Hello from ASP! This response came via AJAX.")
%>`}
      </pre>

      <h2 className="text-2xl font-semibold text-gray-800">Explanation:</h2>
      <ul className="list-disc list-inside space-y-2 text-gray-700">
        <li><strong>JavaScript (AJAX)</strong> sends a request to <code>server.asp</code>.</li>
        <li><strong>ASP</strong> runs on the server and generates a response.</li>
        <li><code>xhr.responseText</code> contains the text returned by ASP.</li>
        <li>The page does not reload — only the response area updates dynamically.</li>
      </ul>
    </div>
  );
};

export default JSAJAXASP;