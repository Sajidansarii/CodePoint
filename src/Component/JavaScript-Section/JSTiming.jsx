import React, { useState } from "react";

const JSTimingBOM = () => {

  return (
    <div className="max-w-4xl p-6 mt-10">
      <h1 className="text-3xl font-medium text-blue-500 mb-3">Timing Functions in BOM (Browser Object Model)</h1>

      <p>
        BOM provides timing functions like <span className="text-red-400">setTimeout</span> and <span className="text-red-400">setInterval </span>
         to schedule tasks after a delay or repeatedly at intervals.
      </p>

      <h1 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Timing Events</h1>
      <p className="mb-3">The window object can execute code at set time intervals, which are known as timing events.</p>
      <p>The two main methods in JavaScript are:</p>
      <ul className="list-[square] list-inside mt-5">
        <li><span className="text-red-400">setTimeout(function, milliseconds)</span> Executes a function, after waiting a specified number of milliseconds.</li>
        <li><span className="text-red-400">setInterval(function, milliseconds)</span> Same as setTimeout(), but repeats the execution of the function continuously.</li>
      </ul>

      <h1 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">The setTimeout() Method</h1>
      <pre className="overflow-x-auto bg-gray-200 p-4 rounded-lg mt-5">
        <code>
          {`window.setTimeout(function, milliseconds);`}
        </code>
      </pre>

      <p className="mt-5 mb-3">The <span className="text-red-400">window.setTimeout()</span> method can be used without the window prefix.</p>
      <p>The first parameter defines the function to be executed, while the second sets the time delay in milliseconds.</p>
      <h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">Example</h2>
      <p>Click the button, wait 3 seconds, and an alert saying “Hello” will appear.</p>
      <pre className="overflow-x-auto bg-gray-200 p-4 rounded-lg mt-5">
        <code>
          {`<button onclick="setTimeout(myFunction, 3000)">Try it</button>

<script>
function myFunction() {
  alert('Hello');
}
</script>`}
        </code>
      </pre>


      <h1 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">How to Stop the Execution?</h1>
      <p>The <span className="text-red-400">clearTimeout()</span> method cancels the function scheduled by <span className="text-red-400">setTimeout()</span>.</p>
      <pre className="overflow-x-auto bg-gray-200 p-4 rounded-lg mt-5">
        <code>
          {`window.clearTimeout(timeoutVariable)`}
        </code>
      </pre>
      <p className="mt-5 mb-3">You can call <span className="text-red-400">clearTimeout()</span> directly instead of <span className="text-red-400">window.clearTimeout()</span>.</p>
      <p>The <span className="text-red-400">clearTimeout()</span> method uses the value returned by <span className="text-red-400">setTimeout()</span>.</p>
     <pre className="overflow-x-auto bg-gray-200 p-4 rounded-lg mt-5">
      <code>
        {`myVar = setTimeout(function, milliseconds);
clearTimeout(myVar);`}
      </code>
     </pre>
     <p className="mt-5">If the function hasn’t run yet, you can stop it by calling <span className="text-red-400">clearTimeout()</span>.</p>
     <h2 className="text-gray-800 text-2xl font-semibold mt-5 mb-3">Example</h2>
     <p>The same example as before, but with an added Stop button.</p>
     <pre className="overflow-x-auto bg-gray-200 p-4 rounded-lg mt-5">
      <code>
        {`<button onclick="myVar = setTimeout(myFunction, 3000)">Try it</button>

<button onclick="clearTimeout(myVar)">Stop it</button>`}
      </code>
     </pre>

     <h1 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">The setInterval() Method</h1>
    <p>The <span className="text-red-400">setInterval()</span> method repeatedly runs a function at specified time intervals.</p>
    <pre className="overflow-x-auto bg-gray-200 p-4 rounded-lg mt-5">
      <code>
        {`window.setInterval(function, milliseconds);`}
      </code>
    </pre>
    <p className="mt-5 mb-3">The <span className="text-red-400">window.setInterval()</span> method can be used without the window prefix.</p>
    <p className="mb-3">The first parameter is the function to run, and the second parameter sets the interval duration between executions.</p>
    <p>This example runs a function named myTimer every second, like a digital clock.</p>
     <h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-5">Example</h2>
     <p>Show the current time.</p>
     <pre className="overflow-x-auto bg-gray-200 p-4 rounded-lg mt-10">
      <code>
        {`setInterval(myTimer, 1000);

function myTimer() {
  const d = new Date();
  document.getElementById("demo").innerHTML = d.toLocaleTimeString();
}`}
      </code>
     </pre>

     <h1 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">How to Stop the Execution?</h1>
     <p>The <span className="text-red-400">clearInterval()</span> method cancels a function scheduled by <span className="text-red-400">setInterval()</span>.</p>
     <pre className="overflow-x-auto bg-gray-200 p-4 rounded-lg mt-5">
      <code>
        {`window.clearInterval(timerVariable)`}
      </code>
     </pre>

     <p className="mt-5">The <span className="text-red-400">window.clearInterval()</span> method can be used without the window prefix.</p>
    <p>The <span className="text-red-400">clearInterval()</span> method uses the ID returned by <span className="text-red-400">setInterval()</span>.</p>
     <pre className="overflow-x-auto bg-gray-200 p-4 rounded-lg mt-5">
      <code>
        {`let myVar = setInterval(function, milliseconds);
clearInterval(myVar);`}
      </code>
     </pre>
     <h2 className="text-gray-800 text-2xl font-semibold mt-5 mb-3">Example</h2>
     <p>The same example as above, now with a Stop time button added.</p>
     <pre className="overflow-x-auto bg-gray-200 p-4 rounded-lg mt-5">
      <code>
        {`<p id="demo"></p>

<button onclick="clearInterval(myVar)">Stop time</button>

<script>
let myVar = setInterval(myTimer, 1000);
function myTimer() {
  const d = new Date();
  document.getElementById("demo").innerHTML = d.toLocaleTimeString();
}
</script>`}
      </code>
     </pre>

    </div>
  );
};

export default JSTimingBOM;