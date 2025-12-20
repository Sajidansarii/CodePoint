import React, { useState } from "react";

const JSAJAXResponse = () => {
  const data = [
    {Method:'responseText', Description:'get the response data as a string'},
    {Method:'responseXML', Description:'get the response data as XML data'},
  ];

  const data1 = [
    {Method:'getResponseHeader()', Description:'Returns specific header information from the server resource'},
    {Method:'getAllResponseHeaders()', Description:'Returns all the header information from the server resource'},
  ];
  
  return (
    <div className="max-w-4xl p-6 mt-10">
      <h1 className="text-3xl font-medium text-blue-500 mb-3">AJAX Response in JavaScript</h1>

      <p>
        An <span className="text-red-400">AJAX Response</span> is the data returned by the server
        after an AJAX request. We can access it using properties like{" "}
        <code>responseText</code>, <code>status</code>, and{" "}
        <code>statusText</code>.
      </p>

      <h1 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Server Response Properties</h1>
      <table className="min-w-full border border-gray-300 text-gray-700 text-sm text-left mt-5">
      <thead>
        <tr className="bg-gray-100">
          <th className="px-4 py-2 border-b border-gray-300 text-gray-700 font-bold">Method</th>
          <th className="px-4 py-2 border-b border-gray-300 text-gray-700 font-bold">Description</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row,index)=>(
          <tr className="cursor-text hover:bg-gray-100">
            <td className="px-4 py-2 border-b border-gray-200">{row.Method}</td>
            <td className="px-4 py-2 border-b border-gray-200 whitespace-pre-line">{row.Description}</td>
          </tr>
        ))}
      </tbody>
     </table>

     <h1 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">The responseText Property</h1>
     <p>The <span className="text-red-400">responseText</span> property provides the server’s response as a JavaScript string, which you can then use as needed.</p>
     <h2 className="text-gray-800 text-2xl font-semibold mt-5">Example</h2>
    <pre className="text-green-400 bg-gray-900 p-4 rounded-lg mt-5">
      <code>
        {`document.getElementById("demo").innerHTML = xhttp.responseText;`}
      </code>
    </pre>

    <h1 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">The responseXML Property</h1>
    <p>The XMLHttpRequest object includes a built-in XML parser, and its <span className="text-red-400">responseXML</span> property returns the server response as an XML DOM object that you can parse.</p>
    <h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-5">Example</h2>
    <p>Request the <span className="text-red-400">cd_catalog.xml</span> file and parse the returned response.</p>
    <pre className="text-green-400 bg-gray-900 p-4 rounded-lg mt-5">
      <code>
        {`const xmlDoc = xhttp.responseXML;
const x = xmlDoc.getElementsByTagName("ARTIST");

let txt = "";
for (let i = 0; i < x.length; i++) {
  txt += x[i].childNodes[0].nodeValue + "<br>";
}
document.getElementById("demo").innerHTML = txt;

xhttp.open("GET", "cd_catalog.xml");
xhttp.send();
`}
      </code>
    </pre>

    <h1 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Server Response Methods</h1>
    <table className="min-w-full border border-gray-300 text-gray-700 text-sm text-left mt-5">
      <thead>
        <tr className="bg-gray-100">
          <th className="px-4 py-2 border-b border-gray-300 text-gray-700 font-bold">Method</th>
          <th className="px-4 py-2 border-b border-gray-300 text-gray-700 font-bold">Description</th>
        </tr>
      </thead>
      <tbody>
        {data1.map((row,index)=>(
          <tr className="cursor-text hover:bg-gray-100">
            <td className="px-4 py-2 border-b border-gray-200">{row.Method}</td>
            <td className="px-4 py-2 border-b border-gray-200 whitespace-pre-line">{row.Description}</td>
          </tr>
        ))}
      </tbody>
     </table>

     <h1 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">The getAllResponseHeaders() Method</h1>
    <p>The <span className="text-red-400">getAllResponseHeaders()</span> method retrieves all header information from the server’s response.</p>
    <h2 className="text-2xl text-gray-800 font-semibold mt-5">Example</h2>
    <pre className="text-green-400 bg-gray-900 p-4 rounded-lg mt-5">
      <code>
        {`const xhttp = new XMLHttpRequest();
xhttp.onload = function() {
    document.getElementById("demo").innerHTML =
    this.getAllResponseHeaders();
}
xhttp.open("GET", "ajax_info.txt");
xhttp.send();`}
      </code>
    </pre>

    <h1 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">The getResponseHeader() Method</h1>
    <p>The <span className="text-red-400">getResponseHeader()</span> method retrieves a specific header from the server’s response.</p>
    <h2 className="text-2xl text-gray-800 font-semibold mt-5">Example</h2>
    <pre className="text-green-400 bg-gray-900 p-4 rounded-lg mt-5">
      <code>
        {`const xhttp = new XMLHttpRequest();
xhttp.onload = function() {
    document.getElementById("demo").innerHTML =
    this.getResponseHeader("Last-Modified");
}
xhttp.open("GET", "ajax_info.txt");
xhttp.send();
`}
      </code>
    </pre>


















    </div>
  );
};

export default JSAJAXResponse;