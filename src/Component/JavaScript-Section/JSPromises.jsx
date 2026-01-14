import React, { useState } from "react";

const JSPromises = () => {
 const data = [ 
  {When:'Success', Call:'myResolve(result value)'},
  {When:'Success', Call:'myReject(error object)'}
 ]

 const data2 = [
  {myPromisestate:'"pending"', myPromiseresult:'undefined'},
  {myPromisestate:'"fulfilled"', myPromiseresult:'a result value'},
  {myPromisestate:'"rejected"', myPromiseresult:'an error object'},
 ]

  return (
    <div className="max-w-4xl p-6 mt-10">
      <h1 className="text-3xl font-medium text-blue-500 mb-3">Promises in JavaScript</h1>

      <p> 
        A <span className="text-red-400">Promise</span> in JavaScript is an object that represents the eventual 
        completion (or failure) of an asynchronous operation. It can be in one of three states:
      </p>

      <h1 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">JavaScript Promise Object</h1>
      <p>A Promise holds both the code that generates a value and the code that uses it.</p>
      <h2 className="text-2xl text-gray-800 font-semibold mt-5">Syntax</h2>
      <pre className="text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5">
        <code>
          {`let myPromise = new Promise(function(myResolve, myReject) {
// "Producing Code" (May take some time)

  myResolve(); // when successful
  myReject();  // when error
});

// "Consuming Code" (Must wait for a fulfilled Promise)
myPromise.then(
  function(value) { /* code if successful */ },
  function(error) { /* code if some error */ }
);`}
        </code>
      </pre>

      <p className="mt-10">Once the producing code gets the result, it must invoke one of the two callbacks.</p>
     <table className="min-w-full border border-gray-300 text-gray-700 text-sm text-left mt-5">
      <thead>
        <tr className="bg-gray-100">
          <th className="px-4 py-2 border-b border-gray-300 text-gray-700 font-bold">When</th>
          <th className="px-4 py-2 border-b border-gray-300 text-gray-700 font-bold">Call</th>
        </tr>
      </thead>
      {data.map((row,index)=>(
        <tr className="cursor-text hover:bg-gray-100">
          <td className="px-4 py-2 border-b border-gray-200">{row.When}</td>
          <td className="px-4 py-2 border-b border-gray-200">{row.Call}</td>
        </tr>
      ))}
     </table>

     <h1 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Promise Object Properties</h1>
   <p>In JavaScript, a Promise object can be:</p>
   <ul className="list-[square] list-inside mt-3">
    <li>Pending</li>
    <li>Rejected</li>
    <li>Fulfilled</li>
   </ul>

   <p className="mt-10 mb-3">The Promise object has two main properties: <span className="text-red-400">state</span> and <span className="text-red-400">result</span>.</p>
  <p>A Promise object can be pending, fulfilled, or rejected, with its result being undefined during pending, a value when fulfilled, and an error object when rejected.</p>
  <table className="min-w-full border border-gray-300 text-gray-700 text-sm text-left mt-5">
    <thead>
      <tr className="bg-gray-100">
        <th className="px-4 py-2 border-b border-gray-300 text-gray-700 font-bold">myPromise.state</th>
        <th className="px-4 py-2 border-b border-gray-300 text-gray-700 font-bold">myPromise.result</th>
      </tr>
    </thead>
    {data2.map((row,index)=>(
      <tr className="cursor-text hover:bg-gray-100">
        <td className="px-4 py-2 border-b border-gray-200">{row.myPromisestate}</td>
        <td className="px-4 py-2 border-b border-gray-200">{row.myPromiseresult}</td>
      </tr>
    ))}
  </table>

  <h1 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Promise How To</h1>
  <p>Here is how to use a Promise:</p>
  <pre className="text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5">
    <code>
      {`myPromise.then(
  function(value) { /* code if successful */ },
  function(error) { /* code if some error */ }
);`}
    </code>
  </pre>

  <p className="mt-5"><span className="text-red-400">Promise.then()</span> accepts two arguments: a callback for success and one for failure. Both are optional, so you can provide just one if needed.</p>
  <h2 className="text-2xl text-gray-800 font-semibold mt-5">Example</h2>
  <pre className="text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5">
    <code>
      {`function myDisplayer(some) {
  document.getElementById("demo").innerHTML = some;
}

let myPromise = new Promise(function(myResolve, myReject) {
  let x = 0;

// The producing code (this may take some time)

  if (x == 0) {
    myResolve("OK");
  } else {
    myReject("Error");
  }
});

myPromise.then(
  function(value) {myDisplayer(value);},
  function(error) {myDisplayer(error);}
);`}
    </code>
  </pre>

  <h1 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">JavaScript Promise Examples</h1>
  <p>Using the callback examples from the previous chapter, we can explain how promises function.</p>
  <ul className="list-[square] list-inside mt-5">
    <li>Waiting for a Timeout</li>
    <li>Waiting for a File</li>
  </ul>

  <h1 className="text-2xl text-gray-800 font-semibold mt-10 mb-5">Waiting for a Timeout</h1>
  <h2 className="text-2xl text-gray-800 font-semibold mt-5">Example Using Callback</h2>
  <pre className="text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5">
    <code>
      {`setTimeout(function() { myFunction("I love You !!!"); }, 3000);

function myFunction(value) {
  document.getElementById("demo").innerHTML = value;
}

`}
    </code>
  </pre>

  <h1 className="text-2xl text-gray-800 font-semibold mt-10 mb-5">Example Using Promise</h1>
  <pre className="text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5">
    <code>
      {`let myPromise = new Promise(function(myResolve, myReject) {
  setTimeout(function() { myResolve("I love You !!"); }, 3000);
});

myPromise.then(function(value) {
  document.getElementById("demo").innerHTML = value;
});`}
    </code>
  </pre>

  <h1 className="text-2xl text-gray-800 font-semibold mt-10 mb-5">Waiting for a file</h1>
  <p className="text-2xl text-gray-800 font-semibold mt-5">Example using Callback</p>
   <pre className="text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5">
    <code>
      {`function getFile(myCallback) {
  let req = new XMLHttpRequest();
  req.open('GET', "mycar.html");
  req.onload = function() {
    if (req.status == 200) {
      myCallback(req.responseText);
    } else {
      myCallback("Error: " + req.status);
    }
  }
  req.send();
}

getFile(myDisplayer);`}
    </code>
   </pre>

   <p className="text-2xl text-gray-800 font-semibold mt-5">Example using Promise</p>
   <pre className="text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5">
    <code>
      {`let myPromise = new Promise(function(myResolve, myReject) {
  let req = new XMLHttpRequest();
  req.open('GET', "mycar.html");
  req.onload = function() {
    if (req.status == 200) {
      myResolve(req.response);
    } else {
      myReject("File not Found");
    }
  };
  req.send();
});

myPromise.then(
  function(value) {myDisplayer(value);},
  function(error) {myDisplayer(error);}
);`}
    </code>
   </pre>

   <h1 className="text-2xl text-gray-800 font-semibold mt-10 mb-5">JavaScript Promise.allSettled()</h1>
   <p>The <span className="text-red-400">Promise.allSettled()</span> method takes an array of promises and returns a single Promise.</p>
  <h2 className="text-gray-800 text-2xl font-semibold mt-5">Example</h2>
   <pre className="text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5">
    <code>
      {`// Create a Promise
const myPromise1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 200, "King");
});

// Create another Promise
const myPromise2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "Queen");
});

// Settle All
Promise.allSettled([myPromise1, myPromise2]).then((results) =>
  results.forEach((x) => myDisplay(x.status)),
);`}
    </code>
   </pre>


   <h1 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">JavaScript Promise.withResolvers()</h1>
  <p className="mb-3">The static method <span className="text-red-400">Promise.withResolvers()</span> streamlines the creation and management of Promises.</p>
  <p className="mb-3">Using <span className="text-red-400">Promise.withResolvers()</span>, you can conveniently get the resolve and reject functions of a Promise without being inside the executor function.</p>
  <p>Rather than using the usual <span className="text-red-400">new Promise((resolve, reject) {'=> { ... }'})</span> constructor, Promise.withResolvers() returns an object that includes:</p>
  <pre className="text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5">
    <code>
      {`<p id="demo">Waiting...</p>

<script>
const {promise, resolve, reject} = Promise.withResolvers();

// You can now use 'resolve' and 'reject' anywhere
// in your code to control the state of 'promise'.

// Simulate async work
setTimeout(() => {
  const success = Math.random() > 0.5;
  if (success) {
    resolve("Operation successful!");
  } else {
    reject("Operation failed!");
  }
}, 1000);

// Update the UI when the promise finishes
promise
  .then((message) => {
    document.getElementById("demo").innerHTML = message;
  })
  .catch((error) => {
    document.getElementById("demo").innerHTML = error;;
});
</script>`}
    </code>
  </pre>

  <h1 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Example Explained</h1>
  <ul className="list-[square] list-inside mt-5">
    <li>The {'<p id="demo">'} initially shows "Waiting..."</li>
    <li>After 1 second, the promise resolves or rejects</li>
    <li>The result is written into "demo"</li>
  </ul>

  <p className="mt-5">The code for simulating asynchronous work can be simplified as follows:</p>
  <pre className="text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5">
    <code>
      {`// Simulate async work
setTimeout(() => {
  Math.random() > 0.5
  ? resolve("Operation successful!")
  : reject("Operation failed!");
}, 1000);`}
    </code>
  </pre>

  <p className="mt-5">The <span className="text-red-400">then/catch</span> code can be written more simply as:</p>
  <pre className="text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5">
    <code>
      {`// Set text in then/catch, update DOM in finally
promise
  .then((message) => text = message)
  .catch((error) => text = error)
  .finally(() => {
    document.getElementById("demo").innerHTML = text;
});`}
    </code>
  </pre>

  <h1 className="text-gray-800 text-2xl font-semibold mt-10 mb-3">Example Explained</h1>
  <ul className="list-[square] list-inside">
    <li>.then() or .catch() set the text variable</li>
    <li>.finally() always runs last, no matter success or failure</li>
    <li>The DOM is updated exactly once, cleanly and reliably</li>
  </ul>

  <p className="mt-5">Using <span className="text-red-400">async/await</span> provides the clearest and simplest code.</p>
  <pre className="text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5">
    <code>
      {`// Use async/await to handle the promise
(async () => {
  try {
    text = await promise; // Wait for resolve
  } catch (err) {
    text = err; // Handle reject
  }
  // Update the UI after promise finishes
  document.getElementById("demo").innerHTML = text;
})();`}
    </code>
  </pre>

  <h1 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">Example Explained</h1>
  <ul className="list-[square] list-inside">
    <li>The UI updates in one place (no duplicated innerHTML calls)</li>
    <li>The DOM is updated after the promise resolves or rejects</li>
    <li>async/await makes asynchronous code look synchronous</li>
  </ul>
  
    </div>
  );
};

export default JSPromises;