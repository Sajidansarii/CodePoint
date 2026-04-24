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
    <div className="max-w-4xl p-6 mt-10">
      <h1 className="text-3xl font-medium text-blue-500 mb-3">AJAX Introduction in JavaScript</h1>

      <p>
        <span className="text-red-400">AJAX (Asynchronous JavaScript and XML)</span> is a technique
        used to fetch data from a server asynchronously without reloading the
        entire page. It allows web applications to be faster and more dynamic.
      </p>

      <button
        onClick={fetchData}
        className="px-5 py-2 mt-5 mb-5 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
      >
        Fetch Data with AJAX
      </button>

      <div className="p-4 bg-gray-100 rounded-md font-mono text-gray-800 overflow-x-auto">
        {data}
      </div>

      <h1 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">AJAX Example Explained</h1>
      <h2 className="text-2xl text-gray-800 font-semibold mt-5">HTML Page</h2>
     <pre className="bg-gray-200 p-4 rounded-lg mt-5 overflow-x-auto max-w-full whitespace-pre-wrap">
  <code>
    <span className="text-blue-600">&lt;!DOCTYPE html&gt;</span>
    <br />

    <span className="text-blue-600">&lt;html&gt;</span>
    <br />

    <span className="text-blue-600">&lt;body&gt;</span>
    <br /><br />

    <span className="text-red-500">&lt;div</span>{" "}
    <span className="text-red-500">id</span>=
    <span className="text-green-700">"demo"</span>
    <span className="text-red-500">&gt;</span>
    <br />

    &nbsp;&nbsp;<span className="text-red-500">&lt;h2&gt;</span>
    Let AJAX change this text
    <span className="text-red-500">&lt;/h2&gt;</span>
    <br />

    &nbsp;&nbsp;<span className="text-red-500">&lt;button</span>{" "}
    <span className="text-red-500">type</span>=
    <span className="text-green-700">"button"</span>{" "}
    <span className="text-red-500">onclick</span>=
    <span className="text-green-700">"loadDoc()"</span>
    <span className="text-red-500">&gt;</span>
    Change Content
    <span className="text-red-500">&lt;/button&gt;</span>
    <br />

    <span className="text-red-500">&lt;/div&gt;</span>

    <br /><br />

    <span className="text-blue-600">&lt;/body&gt;</span>
    <br />
    <span className="text-blue-600">&lt;/html&gt;</span>
  </code>
</pre>

      <p className="mt-5 mb-3">The page contains a <span className="text-red-400">{'<div>'}</span> section along with a <span className="text-red-400">{'<button>'}</span>. The <span className="text-red-400">{'<div>'}</span> is meant for presenting server-provided information.</p>
     <p>The <span className="text-red-400">{'<button>'}</span> runs a function on click. The function retrieves information from a web server and displays it.</p>
     

     <h1 className="text-2xl text-gray-800 mt-10 mb-3 font-semibold">Function loadDoc()</h1>
     <pre className="bg-gray-200 p-4 rounded-lg mt-5 overflow-x-auto max-w-full whitespace-pre-wrap">
  <code>
    <span className="text-red-500">function</span> loadDoc() {"{"}
    <br />

    &nbsp;&nbsp;<span className="text-red-500">const</span> xhttp = new XMLHttpRequest();
    <br />

    &nbsp;&nbsp;xhttp.onload = function() {"{"}
    <br />

    &nbsp;&nbsp;&nbsp;&nbsp;document.getElementById(
    <span className="text-green-700">"demo"</span>
    ).innerHTML = this.responseText;
    <br />

    &nbsp;&nbsp;{"}"}
    <br /><br />

    &nbsp;&nbsp;xhttp.open(
    <span className="text-green-700">"GET"</span>,
    <span className="text-green-700">"ajax_info.txt"</span>,
    true
    );
    <br />

    &nbsp;&nbsp;xhttp.send();
    <br />

    {"}"}
  </code>
</pre>

     <h1 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">What is AJAX?</h1>
     <p>The term AJAX means Asynchronous JavaScript and XML. It should not be considered a programming language.</p>
    <p>AJAX just uses a combination of:</p>
    <ul className="list-[square] list-inside mt-5">
      <li>A browser built-in XMLHttpRequest object (to request data from a web server)</li>
      <li>JavaScript and HTML DOM (to display or use the data)</li>
    </ul>

    <p className="mt-5 mb-3">The name AJAX can be misleading. While AJAX applications may use XML to transfer data, it is just as common to use plain text or JSON.</p>
    <p>AJAX enables web pages to update asynchronously by exchanging data with a web server in the background. This allows parts of a page to be refreshed without reloading the entire page.</p>

   <h1 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Modern Browsers (Fetch API)</h1>
   <p className="mb-3">Modern browsers can use the Fetch API as an alternative to the XMLHttpRequest object. The Fetch API allows browsers to send HTTP requests to web servers.</p>
   <p>Fetch simplifies the functionality provided by the XMLHttpRequest object, allowing you to do the same things with less code.</p>
    
    
    
    
    </div>
  );
};

export default JSAJAXIntro;