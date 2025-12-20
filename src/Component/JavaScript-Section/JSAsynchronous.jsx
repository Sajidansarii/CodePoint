import React, { useState } from "react";

const JSAsynchronous = () => {
  const [message, setMessage] = useState("Click the button to start...");

  // ✅ Simulating asynchronous operation
  const handleAsyncOperation = () => {
    setMessage("⏳ Starting async task...");

    setTimeout(() => {
      setMessage("✅ Async task completed after 2 seconds!");
    }, 2000);

    // This runs immediately (non-blocking)
    console.log("This log runs before async task finishes!");
  };

  return (
    <div className="max-w-4xl p-6 mt-10">
      <h1 className="text-3xl font-medium text-blue-500 mb-3">Asynchronous in JavaScript</h1>

      <p>
        <span className="text-red-400">Asynchronous JavaScript</span> allows tasks to run in the
        background without blocking the main thread. This means JavaScript can
        continue executing other code while waiting for a time-consuming
        operation (like fetching data or waiting for a timer) to finish.
      </p>

      <h1 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Asynchronous JavaScript</h1>
      <p>The purpose of the previous chapter’s examples was to teach <span className="text-red-400">callback</span> function syntax, so they were kept simple.</p>
      <h2 className="text-2xl text-gray-800 font-semibold mt-5">Example</h2>
      <pre className="text-green-400 bg-gray-900 p-4 rounded-lg mt-5">
        <code>
          {`function myDisplayer(something) {
  document.getElementById("demo").innerHTML = something;
}

function myCalculator(num1, num2, myCallback) {
  let sum = num1 + num2;
  myCallback(sum);
}

myCalculator(5, 5, myDisplayer);`}
        </code>
      </pre>

      <p className="mt-5">The function <span className="text-red-400">myDisplayer</span> in the example is supplied to <span className="text-red-400">myCalculator()</span> as an argument.</p>
      
      <h1 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Waiting for a Timeout</h1>
      <p>The <span className="text-red-400">setTimeout()</span> function allows you to specify a <span className="text-red-400">callback</span> to execute once the timeout occurs.</p>
      <h2 className="text-2xl text-gray-800 font-semibold mt-5">Example</h2>
      <pre className="text-green-400 bg-gray-900 p-4 rounded-lg mt-5">
        <code>
          {`setTimeout(myFunction, 3000);

function myFunction() {
  document.getElementById("demo").innerHTML = "I love You !!";
}

`}
        </code>
      </pre>

      <p className="mt-5">The example shows <span className="text-red-400">myFunction</span> being passed to <span className="text-red-400">setTimeout()</span> as a callback function.</p>
      <p className="mt-3 mb-3">The 3000 milliseconds specify the wait time, so <span className="text-red-400">myFunction()</span> runs 3 seconds later.</p>
     <p>You don’t have to pass only a function name—you can provide the full function as an argument.</p>
    
    <h2 className="text-2xl text-gray-800 font-semibold mt-5">Example</h2>
    <pre className="text-green-400 bg-gray-900 p-4 rounded-lg mt-5">
      <code>
        {`setTimeout(function() { myFunction("I love You !!!"); }, 3000);

function myFunction(value) {
  document.getElementById("demo").innerHTML = value;
}`}
      </code>
    </pre>

    <p className="mt-5 mb-3">The example uses <span className="text-red-400">function()</span>{'{ myFunction("I love You !!!"); }'} as a complete callback function, which is supplied to <span className="text-red-400">setTimeout()</span>.</p>
   <p>The number 3000 sets the delay in milliseconds, causing <span className="text-red-400">myFunction()</span> to run 3 seconds later.</p>
   
   <h1 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Waiting for Intervals:</h1>
   <p>The <span className="text-red-400">setInterval()</span> function allows you to specify a callback that executes repeatedly at each interval.</p>
   <h2 className="text-2xl text-gray-800 font-semibold mt-5">Example</h2>
   <pre className="text-green-400 bg-gray-900 p-4 rounded-lg mt-5">
    <code>
      {`setInterval(myFunction, 1000);

function myFunction() {
  let d = new Date();
  document.getElementById("demo").innerHTML=
  d.getHours() + ":" +
  d.getMinutes() + ":" +
  d.getSeconds();
}`}
    </code>
   </pre>

   <p className="mt-5">The example shows <span className="text-red-400">myFunction</span> being used as a callback for <span className="text-red-400">setInterval()</span>, running every second with a 1000-millisecond interval.</p>
  
<h1 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Callback Alternatives</h1>
<p className="mb-3">Asynchronous programming in JavaScript allows long-running tasks to start while other tasks continue running concurrently.</p>
<p className="mb-3">However, asynchronous programs are often challenging to write and debug.</p>
<p>Therefore, instead of callbacks, modern JavaScript handles asynchronous operations with Promises.</p>


</div>
  );
};

export default JSAsynchronous;