import React, { useState } from "react";

const JSAJAXXMLHttp = () => {
  const data = [
    {Method:'new XMLHttpRequest()', Description:'Creates a new XMLHttpRequest object'},
    {Method:'abort()', Description:'Cancels the current request'},
    {Method:'getAllResponseHeaders()', Description:'Returns header information'},
    {Method:'getResponseHeader()', Description:'Returns specific header information'},
    {Method:'open(method, url, async, user, psw)', Description:'Specifies the request\nmethod: the request type GET or POST\nurl: the file location\nasync: true (asynchronous) or false (synchronous)\nuser: optional user name\npsw: optional password'},
    {Method:'send()', Description:'Sends the request to the server\nUsed for GET requests'},
    {Method:'send(string)', Description:'Sends the request to the server.\nUsed for POST requests'},
    {Method:'setRequestHeader()', Description:'Adds a label/value pair to the header to be sent'}
  ];

  const data1 = [
    {Method:'onload', Description:'Defines a function to be called when the request is received (loaded)'},
    {Method:'onreadystatechange', Description:'Defines a function to be called when the readyState property changes'},
    {Method:'readyState', Description:'Holds the status of the XMLHttpRequest.\n0: request not initialized\n1: server connection established\n2: request received\n3: processing request\n4: request finished and response is ready'},
    {Method:'responseText', Description:'Returns the response data as a string'},
    {Method:'responseXML', Description:'Returns the response data as XML data'},
    {Method:'status', Description:'Returns the status-number of a request\n200: "OK"\n403: "Forbidden"\n404: "Not Found"\nFor a complete list go to the Http Messages Reference'},
    {Method:'statusText', Description:'Returns the status-text (e.g. "OK" or "Not Found")'}
  ];

  const data2 = [
    {Method:'onreadystatechange', Description:'Defines a function to be called when the readyState property changes'},
    {Method:'readyState', Description:'Holds the status of the XMLHttpRequest.\n0: request not initialized\n1: server connection established\n2: request received\n3: processing request\n4: request finished and response is ready'},
    {Method:'status', Description:'200: "OK"\n403: "Forbidden"\n404: "Page not found"\nFor a complete list go to the Http Messages Reference'},
    {Method:'statusText', Description:'Returns the status-text (e.g. "OK" or "Not Found")'},
  ];
 
  return (
    <div className="max-w-4xl p-6 mt-10">
      <h1 className="text-3xl font-medium text-blue-500 mb-3">AJAX with XMLHttp Request</h1>

      <p>
        <span className="text-red-400">AJAX (Asynchronous JavaScript and XML)</span> using{" "}
        <code>XMLHttpRequest</code> allows us to request data from a server
        without refreshing the page.
      </p>

      <h1 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">The XMLHttpRequest object is the core of AJAX.</h1>
      <ul className="list-[square] list-inside mt-5 space-y-1">
        <li>Create an XMLHttpRequest object</li>
        <li>Open the XMLHttpRequest object</li>
        <li>Define a callback function</li>
        <li>Send a Request to a server</li>
      </ul>

      <h1 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">The XMLHttpRequest Object</h1>
      <p>The <span className="text-red-400">XMLHttpRequest</span> object is supported by all modern browsers.</p>
      <p>The <span className="text-red-400">XMLHttpRequest</span> object allows data to be exchanged with a web server in the background, making it possible to update sections of a web page without reloading the entire page.</p>
       
       <h1 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Create an XMLHttpRequest Object</h1>
       <p>All current browsers, including Chrome, Firefox, IE, Edge, Safari, and Opera, come with a built-in <span className="text-red-400">XMLHttpRequest</span> object.</p>
       <pre className="text-green-400 bg-gray-900 p-4 rounded-lg mt-5">
        <code>
          {`variable = new XMLHttpRequest();`}
        </code>
       </pre>

       <h1 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Define a Callback Function</h1>
       <p>A callback function is a function provided as an argument to another function. In this context, it should include the code that runs when the response is ready.</p>
        <pre className="text-green-400 bg-gray-900 p-4 rounded-lg mt-5">
          <code>
            {`xhttp.onload = function() {
  // What to do when the response is ready
}
`}
          </code>
        </pre>

        <h1 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Send a Request</h1>
        <p>The <span className="text-red-400">open()</span> and <span className="text-red-400">send()</span> methods of the XMLHttpRequest object are used to send requests to a server.</p>
        <pre className="text-green-400 bg-gray-900 p-4 rounded-lg mt-5">
          <code>
            {`xhttp.open("GET", "ajax_info.txt");
xhttp.send();`}
          </code>
        </pre>
        <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Example</h2>
       <pre className="text-green-400 bg-gray-900 p-4 rounded-lg mt-5">
        <code>
          {`// Create an XMLHttpRequest object
const xhttp = new XMLHttpRequest();

// Define a callback function
xhttp.onload = function() {
  // Here you can use the Data
}

// Send a request
xhttp.open("GET", "ajax_info.txt");
xhttp.send();
`}
        </code>
       </pre>


       <h1 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Access Across Domains</h1>
      <p>For security reasons, modern browsers prevent cross-domain access, so the web page and the XML file it loads must reside on the same server; for example, all W3Schools examples use XML files hosted on the W3Schools domain.</p>
      <p>To use the example above on your own web page, the XML files must be hosted on your server.</p>


    <h1 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">XMLHttpRequest Object Methods</h1>
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

     <h1 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">XMLHttpRequest Object Properties</h1>
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


     <h1 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">The onload Property</h1>
     <p>The XMLHttpRequest object allows you to define a callback that executes once the request gets a response. This callback is placed in the <span className="text-red-400">onload</span> property.</p>
     <h2 className="text-2xl text-gray-800 font-semibold mt-5">Example</h2>
     <pre className="text-green-400 bg-gray-900 p-4 rounded-lg mt-5">
      <code>
        {`xhttp.onload = function() {
  document.getElementById("demo").innerHTML = this.responseText;
}
xhttp.open("GET", "ajax_info.txt");
xhttp.send();`}
      </code>
     </pre>

     <h1 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Multiple Callback Functions</h1>
     <p className="mb-3">If a website has multiple AJAX tasks, you should create a single function to execute the <span className="text-red-400">XMLHttpRequest</span> object and a separate callback function for each task.</p>
     <p>When calling the function, provide both the URL and the function to execute once the response is ready.</p>
     <h2 className="text-2xl text-gray-800 font-semibold mt-5">Example</h2>
     <pre className="text-green-400 bg-gray-900 p-4 rounded-lg mt-5">
      <code>
        {`loadDoc("url-1", myFunction1);

loadDoc("url-2", myFunction2);

function loadDoc(url, cFunction) {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {cFunction(this);}
  xhttp.open("GET", url);
  xhttp.send();
}

function myFunction1(xhttp) {
  // action goes here
}
function myFunction2(xhttp) {
  // action goes here
}`}
      </code>
     </pre>

     <h1 className="text-2xl text-gray-800 font-semibold mt-10 mb-5">The onreadystatechange Property</h1>
     <p>The readyState property indicates the current status of the <span className="text-red-400">XMLHttpRequest</span>. The <span className="text-red-400">onreadystatechange</span> property specifies a callback function that runs whenever readyState changes. The status and statusText properties store the HTTP status code and status message of the <span className="text-red-400">XMLHttpRequest</span>.</p>
     <table className="min-w-full border border-gray-300 text-gray-700 text-sm text-left mt-5">
      <thead>
        <tr className="bg-gray-100">
          <th className="px-4 py-2 border-b border-gray-300 text-gray-700 font-bold">Method</th>
          <th className="px-4 py-2 border-b border-gray-300 text-gray-700 font-bold">Description</th>
        </tr>
      </thead>
      <tbody>
        {data2.map((row,index)=>(
          <tr className="cursor-text hover:bg-gray-100">
            <td className="px-4 py-2 border-b border-gray-200">{row.Method}</td>
            <td className="px-4 py-2 border-b border-gray-200 whitespace-pre-line">{row.Description}</td>
          </tr>
        ))}
      </tbody>
     </table>

     <p className="mt-5">The <span className="text-red-400">onreadystatechange</span> function executes whenever the <span className="text-red-400">readyState</span> changes. When readyState equals 4 and status is 200, the response has been received.</p>
     <h2 className="text-2xl text-gray-800 font-semibold mt-5">Example</h2>
     <pre className="text-green-400 bg-gray-900 p-4 rounded-lg mt-5">
      <code>
        {`function loadDoc() {
  const xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("demo").innerHTML =
      this.responseText;
    }
  };
  xhttp.open("GET", "ajax_info.txt");
  xhttp.send();
}`}
      </code>
     </pre>

     <p className="mt-5">The <span className="text-red-400">onreadystatechange</span> event fires four times (from 1 to 4), once for each change in <span className="text-red-400">readyState</span>.</p>
   









    </div>
  );
};

export default JSAJAXXMLHttp;