import React, { useState } from "react";

const JSLocationBOM = () => {
 
  return (
    <div className="max-w-4xl p-6 mt-10">
      <h1 className="text-3xl font-medium text-blue-500 mb-3">Location Object in BOM (Browser Object Model)</h1>

      <p>
        The <span className="text-red-400">window.location</span> object contains information about the current URL of the browser.
        It allows you to read URL components and redirect to other URLs. It is part of the Browser Object Model (BOM).
      </p>

      <h1 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Window Location</h1>
      <p className="mb-3">The <span className="text-red-400">window.location</span> object can be accessed without using the window prefix.</p>
      <p>Some examples:</p>
      <ul className="list-[square] list-inside mt-5">
        <li><span className="text-red-400">window.location.href</span> returns the href (URL) of the current page</li>
        <li><span className="text-red-400">window.location.hostname</span> returns the domain name of the web host</li>
        <li><span className="text-red-400">window.location.pathname</span> returns the path and filename of the current page</li>
        <li><span className="text-red-400">window.location.protocol</span> returns the web protocol used (http: or https:)</li>
        <li><span className="text-red-400">window.location.assign()</span> loads a new document</li>
      </ul>

      <h1 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Window Location Href</h1>
     <p>The <span className="text-red-400">window.location.href</span> property gives the URL of the current page.</p>
     <h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">Example</h2>
     <p>Show the current page’s URL.</p>
     <pre className="overflow-x-auto bg-gray-200 p-4 rounded-lg mt-5">
      <code>
        {`document.getElementById("demo").innerHTML =
"Page location is " + window.location.href;`}
      </code>
     </pre>
      <p className="mt-3">Output Will be:</p>
    <pre className="text-black overflow-x-auto bg-gray-200 p-4 mt-5">
      <code>
        {`Page location is https://www.w3schools.com/Js/js_window_location.asp`}
      </code>
    </pre>

    <h1 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Window Location Hostname</h1>
    <p className="mb-3">The <span className="text-red-400">window.location.hostname</span> property gives the host name of the current page.</p>
    <h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">Example</h2>
    <p>Show the host name.</p>
    <pre className="overflow-x-auto bg-gray-200 p-4 rounded-lg mt-5">
      <code>
        {`document.getElementById("demo").innerHTML =
"Page hostname is " + window.location.hostname;`}
      </code>
    </pre>
    <p className="mt-3">Output Will be:</p>
    <pre className="text-black overflow-x-auto bg-gray-200 p-4 mt-5">
      <code>
        {`Page hostname is www.w3schools.com`}
      </code>
    </pre>

    <h1 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Window Location Pathname</h1>
    <p>The <span className="text-red-400">window.location.pathname</span> property gives the pathname of the current page.</p>
   <h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">Example</h2>
   <p>Show the pathname of the current URL.</p>
   <pre className="overflow-x-auto bg-gray-200 p-4 rounded-lg mt-5">
    <code>
      {`document.getElementById("demo").innerHTML =
"Page path is " + window.location.pathname;`}
    </code>
   </pre>
   <p className="mt-3">Output Will be:</p>
    <pre className="overflow-x-auto bg-gray-200 p-4 rounded-lg mt-5">
      <code>
        {`Page path is /Js/js_window_location.asp`}
      </code>
    </pre>

    <h1 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Window Location Protocol</h1>
   <p>The <span className="text-red-400">window.location.protocol</span> property gives the web protocol of the page.</p>
    <h2 className="text-gray-800 text-2xl font-semibold mt-5 mb-3">Example</h2>
   <p>Show the web protocol.</p>
  <pre className="overflow-x-auto bg-gray-200 p-4 rounded-lg mt-5">
    <code>
      {`document.getElementById("demo").innerHTML =
"Page protocol is " + window.location.protocol;`}
    </code>
  </pre>

   <p className="mt-3">Output Will be:</p>
    <pre className="overflow-x-auto bg-gray-200 p-4 rounded-lg mt-5">
      <code>
        {`Page protocol is https:`}
      </code>
    </pre>

    <h1 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Window Location Port</h1>
    <p>The <span className="text-red-400">window.location.port</span> property returns the port number of the current page’s host.</p>
    <h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">Example</h2>
    <p>Show the host name.</p>
    <pre className="overflow-x-auto bg-gray-200 p-4 rounded-lg mt-5">
      <code>
        {`document.getElementById("demo").innerHTML =
"Port number is " + window.location.port;`}
      </code>
    </pre>
     <p className="mt-3">Output Will be:</p>
    <pre className="overflow-x-auto bg-gray-200 p-4 rounded-lg mt-5">
      <code>
        {`Port number is`}
      </code>
    </pre>

    <h1 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Window Location Assign</h1>
   <p>The <span className="text-red-400">window.location.assign()</span> method redirects the browser to a new document.</p>
    <h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">Example</h2>
    <p>Redirect to a new page.</p>
    <pre className="overflow-x-auto bg-gray-200 p-4 rounded-lg mt-5">
      <code>
        {`<html>
<head>
<script>
function newDoc() {
  window.location.assign("https://www.w3schools.com")
}
</script>
</head>
<body>

<input type="button" value="Load new document" onclick="newDoc()">

</body>
</html>`}
      </code>
    </pre>


    </div>
  );
};

export default JSLocationBOM;