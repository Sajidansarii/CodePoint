import React, { useState } from "react";

const JSAJAXXMLFile = () => {
  const [response, setResponse] = useState("Click the button to load XML Data...");

  // ✅ Fetch and parse XML file
  const fetchXML = () => {
    const xhr = new XMLHttpRequest();

    // Open request for XML file
    xhr.open("GET", "https://www.w3schools.com/xml/note.xml", true);

    xhr.onload = () => {
      if (xhr.status === 200) {
        // Response as XML
        const xmlDoc = xhr.responseXML;

        // Extract values from XML using getElementsByTagName
        const to = xmlDoc.getElementsByTagName("to")[0].childNodes[0].nodeValue;
        const from = xmlDoc.getElementsByTagName("from")[0].childNodes[0].nodeValue;
        const heading = xmlDoc.getElementsByTagName("heading")[0].childNodes[0].nodeValue;
        const body = xmlDoc.getElementsByTagName("body")[0].childNodes[0].nodeValue;

        setResponse(` To: ${to}, From: ${from}, Heading: ${heading}, Body: ${body}`);
      } else {
        setResponse(` Error: ${xhr.status} - ${xhr.statusText}`);
      }
    };

    xhr.onerror = () => {
      setResponse("⚠ Network error while fetching XML file");
    };

    xhr.send();
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-lg mt-10 space-y-6">
      <h1 className="text-3xl font-bold text-purple-600">
        AJAX with <span className="text-green-600">XML File</span> in JavaScript
      </h1>

      <p className="text-gray-700">
        AJAX can also be used to fetch and parse <strong>XML files</strong>. The{" "}
        <code>responseXML</code> property returns the data as an XML DOM object, 
        which we can traverse using <code>getElementsByTagName</code>.
      </p>

      <button
        onClick={fetchXML}
        className="px-5 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
      >
        Load XML Data
      </button>

      <div className="p-4 bg-gray-100 rounded-md font-mono text-gray-800 overflow-x-auto">
        {response}
      </div>

      <h2 className="text-2xl font-semibold text-gray-800">Code Example:</h2>
      <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto">
{`const xhr = new XMLHttpRequest();
xhr.open("GET", "note.xml", true);

xhr.onload = () => {
  if (xhr.status === 200) {
    const xmlDoc = xhr.responseXML;
    const to = xmlDoc.getElementsByTagName("to")[0].childNodes[0].nodeValue;
    const from = xmlDoc.getElementsByTagName("from")[0].childNodes[0].nodeValue;
    console.log("To:", to, "From:", from);
  }
};

xhr.send();`}
      </pre>

      <h2 className="text-2xl font-semibold text-gray-800">Explanation:</h2>
      <ul className="list-disc list-inside space-y-2 text-gray-700">
        <li><code>xhr.responseXML</code> → Returns the response as an XML DOM object.</li>
        <li><code>getElementsByTagName()</code> → Selects elements from XML.</li>
        <li><code>childNodes[0].nodeValue</code> → Retrieves the actual text value inside the tag.</li>
        <li>We can parse XML just like traversing the DOM structure in HTML.</li>
      </ul>
    </div>
  );
};

export default JSAJAXXMLFile;