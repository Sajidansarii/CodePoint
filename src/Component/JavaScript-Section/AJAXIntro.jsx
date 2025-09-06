import React, { useState } from "react";

const JSAJAXIntro = () => {
  const [data, setData] = useState("Click the button to fetch data...");

  // ✅ AJAX Example using XMLHttpRequest
  const fetchData = () => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://jsonplaceholder.typicode.com/posts/1", true);

    xhr.onload = () => {
      if (xhr.status === 200) {
        setData(xhr.responseText);
      } else {
        setData("❌ Error fetching data");
      }
    };

    xhr.onerror = () => {
      setData("⚠ Request failed");
    };

    xhr.send();
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-lg mt-10 space-y-6">
      <h1 className="text-3xl font-bold text-blue-600">
        AJAX Introduction in <span className="text-green-600">JavaScript</span>
      </h1>

      <p className="text-gray-700">
        <strong>AJAX (Asynchronous JavaScript and XML)</strong> is a technique
        used to fetch data from a server asynchronously without reloading the
        entire page. It allows web applications to be faster and more dynamic.
      </p>

      <button
        onClick={fetchData}
        className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
      >
        Fetch Data with AJAX
      </button>

      <div className="p-4 bg-gray-100 rounded-md font-mono text-gray-800 overflow-x-auto">
        {data}
      </div>

      <h2 className="text-2xl font-semibold text-gray-800">Code Example:</h2>
      <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto">
{`// ✅ Creating an AJAX request
const xhr = new XMLHttpRequest();
xhr.open("GET", "https://jsonplaceholder.typicode.com/posts/1", true);

xhr.onload = () => {
  if (xhr.status === 200) {
    console.log(xhr.responseText);
  } else {
    console.error("Error fetching data");
  }
};

xhr.onerror = () => {
  console.error("Request failed");
};

xhr.send();`}
      </pre>

      <h2 className="text-2xl font-semibold text-gray-800">Explanation:</h2>
      <ul className="list-disc list-inside space-y-2 text-gray-700">
        <li>
          <code>XMLHttpRequest()</code> is used to create an AJAX request.
        </li>
        <li>
          <code>xhr.open(method, url, async)</code> initializes the request.
        </li>
        <li>
          <code>xhr.send()</code> sends the request to the server.
        </li>
        <li>
          <code>onload</code> → Runs when the request completes successfully.
        </li>
        <li>
          <code>onerror</code> → Runs when there is a network or server error.
        </li>
        <li>
          AJAX allows data fetching <strong>without reloading the page</strong>.
        </li>
      </ul>
    </div>
  );
};

export default JSAJAXIntro;