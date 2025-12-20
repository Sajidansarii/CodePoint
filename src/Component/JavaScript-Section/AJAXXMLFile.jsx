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
    <div className="max-w-4xl p-6 mt-10">
      <h1 className="text-3xl font-medium text-blue-500 mb-3">AJAX with XML File in JavaScript</h1>

      <p>
        AJAX can also be used to fetch and parse <span className="text-red-400">XML files</span>. The{" "}
        <code>responseXML</code> property returns the data as an XML DOM object, 
        which we can traverse using <code>getElementsByTagName</code>.
      </p>

      <h1 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">AJAX XML</h1>
      <p className="mb-3">The <span className="text-red-400">loadDoc()</span> function is executed when the user selects the "Get CD info" button above.</p>
      <p className="mb-3">The <span className="text-red-400">loadDoc()</span> function creates an XMLHttpRequest object, assigns a function to run when the server response is ready, and sends the request to the server.</p>
      <p>When the response arrives, the code builds an HTML table, retrieves nodes from the XML file, and updates the "demo" element with the populated table.</p>
      <h2 className="text-2xl text-gray-800 font-semibold mt-5">Example</h2>
      <pre className="text-green-400 bg-gray-900 p-4 rounded-lg mt-5">
        <code>
          {`function loadDoc() {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {myFunction(this);}
  xhttp.open("GET", "cd_catalog.xml");
  xhttp.send();
}
function myFunction(xml) {
  const xmlDoc = xml.responseXML;
  const x = xmlDoc.getElementsByTagName("CD");
  let table="<tr><th>Artist</th><th>Title</th></tr>";
  for (let i = 0; i <x.length; i++) {
    table += "<tr><td>" +
    x[i].getElementsByTagName("ARTIST")[0].childNodes[0].nodeValue +
    "</td><td>" +
    x[i].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue +
    "</td></tr>";
  }
  document.getElementById("demo").innerHTML = table;
}`}
        </code>
      </pre>



























    </div>
  );
};

export default JSAJAXXMLFile;