import React, { useState } from "react";

const JSWorkerAPI = () => {
  

  return (
    <div className="max-w-4xl p-6 mt-10">
      <h1 className="text-3xl font-medium text-blue-500 mb-3">Worker API in JavaScript</h1>

      <p>
        The <span className="text-red-400">Worker API</span> allows running JavaScript in the background 
        on a separate thread, without blocking the main browser UI. 
        It is useful for heavy computations or background tasks.
      </p>

      <h1 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">What is a Web Worker?</h1>
      <p className="mb-3">While a script runs in an HTML page, the page remains unresponsive until the script completes.</p>
      <p>A web worker is a JavaScript file that runs in the background separately from other scripts, allowing the page to stay responsive while tasks continue.</p>
      
     <h1 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Web Workers Example</h1>
    <p>The following example shows how to create a web worker that performs number counting in the background.</p>
   
    <h1 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Check Web Worker Support</h1>
    <p>Check browser compatibility for web workers before creating one.</p>
    <h2 className="text-gray-800 text-2xl font-semibold mt-5">Example</h2>
    <pre className="overflow-x-auto bg-gray-200 p-4 rounded-lg mt-5">
      <code>
        {`if (typeof(Worker) !== "undefined") {
  // Yes! Web worker support!
  // Some code.....
} else {
  // Sorry! No Web Worker support..
}`}
      </code>
    </pre>

    <h1 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Create a Web Worker File</h1>
    <p>The web worker is created in an external JavaScript file, which includes a script for counting and is named <span className="text-red-400">demo_workers.js</span>.</p>
    <pre className="bg-gray-200 p-4 rounded-lg mt-5">
      <code>
        {`let i = 0;

function timedCount() {
  i ++;
 postMessage(i);
 setTimeout("timedCount()",500);
}

timedCount();`}
      </code>
    </pre>

    <p className="mt-5 mb-3">The key part of the code is the <span className="text-red-400">postMessage()</span> method, which sends a message back to the HTML page.</p>
   <p>Web workers are usually not meant for simple scripts but are used for more CPU-intensive tasks.</p>


<h1 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Create a Web Worker Object</h1>
<p>After creating the web worker file, it must be invoked from an HTML page; the code below checks if a worker already exists and creates one if it doesn’t, running the script in <span className="text-red-400">demo_workers.js</span>.</p>
<pre className="overflow-x-auto bg-gray-200 p-4 rounded-lg mt-5">
  <code>
    {`if (typeof(w) == "undefined") {
  w = new Worker("demo_workers.js");
}`}
  </code>
</pre>

<p className="mt-5 mb-5">After that, we can exchange messages with the web worker.</p>
<p>Attach an onmessage event listener to the web worker.</p>
<pre className="overflow-x-auto bg-gray-200 p-4 rounded-lg mt-5">
  <code>
    {`w.onmessage = function(event){
  document.getElementById("result").innerHTML = event.data;
};`}
  </code>
</pre>

<p className="mt-5">The code inside the event listener executes whenever the web worker posts a message, with the data accessible <span className="text-red-400">via event.data</span>.</p>


<h1 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Terminate a Web Worker</h1>
<p>Once a web worker is created, it keeps listening for messages even after the external script finishes. To stop it and free resources, use the <span className="text-red-400">terminate()</span> method.</p>
<pre className="bg-gray-200 p-4 rounded-lg mt-5">
  <code>
    {`w.terminate();`}
  </code>
</pre>

<h1 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Reuse the Web Worker</h1>
<p>Once a web worker is terminated, setting the variable to undefined makes it possible to run the code again.</p>
<pre className="bg-gray-200 p-4 rounded-lg mt-5">
  <code>
    {`w = undefined;`}
  </code>
</pre>

<h1 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Full Web Worker Example Code</h1>
<p>We’ve already reviewed the Worker code in the .js file; the following is the corresponding HTML page code.</p>
<h2 className="text-2xl text-gray-800 font-semibold mt-5">Example</h2>
<pre className="overflow-x-auto bg-gray-200 p-4 rounded-lg mt-5">
  <code>
    {`<!DOCTYPE html>
<html>
<body>

<p>Count numbers: <output id="result"></output></p>
<button onclick="startWorker()">Start Worker</button>
<button onclick="stopWorker()">Stop Worker</button>

<script>
let w;

function startWorker() {
  if (typeof(w) == "undefined") {
    w = new Worker("demo_workers.js");
  }
  w.onmessage = function(event) {
    document.getElementById("result").innerHTML = event.data;
  };
}

function stopWorker() {
  w.terminate();
  w = undefined;
}
</script>

</body>
</html>`}
  </code>
</pre>

<h1 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Web Workers and the DOM</h1>
<p>Because web workers run in external files, they cannot access the following JavaScript objects:</p>
<ul className="list-[square] list-inside mt-5">
  <li>The window object</li>
  <li>The document object</li>
  <li>The parent object</li>
</ul>

       
    </div>
  );
};

export default JSWorkerAPI;