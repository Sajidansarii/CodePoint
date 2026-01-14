import React, { useState } from "react";

const JSAsyncAwait = () => {
  
  return (
    <div className="max-w-4xl p-6 mt-10">
      <h1 className="text-3xl font-medium text-blue-500 mb-3"> Async / Await in JavaScript</h1>

      <p>
        The <span className="text-red-400">async/await</span> syntax in JavaScript provides a cleaner way 
        to work with asynchronous operations. It makes asynchronous code look and 
        behave like synchronous code, improving readability.
      </p>
      
      <h1 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Async Syntax</h1>
      <p>A function declared with <span className="text-red-400">async</span> always returns a Promise.</p>
     <h2 className="text-gray-800 text-2xl font-semibold mt-5">Example</h2>
     <pre className="text-green-400 bg-gray-900 p-4 rounded-lg mt-5">
      <code>
        {`async function myFunction() {
  return "Hello";
}`}
      </code>
     </pre>

     <p className="mt-5">Is the same as:</p>
     
     <pre className="text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5">
      <code>
        {`function myFunction() {
  return Promise.resolve("Hello");
}`}
      </code>
     </pre>

     <p className="mt-5">Here is how to use the Promise:</p>
     <pre className="text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5">
      <code>
        {`myFunction().then(
  function(value) { /* code if successful */ },
  function(error) { /* code if some error */ }
);`}
      </code>
     </pre>

     <h2 className="text-2xl text-gray-800 font-semibold mt-5">Example</h2>
    <pre className="text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5">
      <code>
        {`async function myFunction() {
  return "Hello";
}
myFunction().then(
  function(value) {myDisplayer(value);},
  function(error) {myDisplayer(error);}
);

`}
      </code>
    </pre>

    <p className="mt-5">Simply put, for cases where you anticipate a standard value and not an error.</p>
    <h2 className="text-2xl text-gray-800 font-semibold mt-5">Example</h2>
   <pre className="text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5">
    <code>
      {`async function myFunction() {
  return "Hello";
}
myFunction().then(
  function(value) {myDisplayer(value);}
);`}
    </code>
   </pre>


   <h1 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Await Syntax</h1>
   <p className="mb-3">The <span className="text-red-400">await</span> keyword is only valid inside an <span className="text-red-400">async</span> function.</p>
   <p>Using <span className="text-red-400">await</span> makes the function wait for a promise to resolve before continuing.</p>
   <pre className="text-green-400 bg-gray-900 p-4 rounded-lg mt-5">
    <code>
      {`let value = await promise;`}
    </code>
   </pre>

   <h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">Example</h2>
   <p>Let's go slowly and learn how to use it.</p>
   <pre className="text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5">
    <code>
      {`async function myDisplay() {
  let myPromise = new Promise(function(resolve, reject) {
    resolve("I love You !!");
  });
  document.getElementById("demo").innerHTML = await myPromise;
}

myDisplay();`}
    </code>
   </pre>

   <h1 className="text-2xl text-gray-800 font-semibold mt-10">Example without reject</h1>
  <pre className="text-green-400 overflow-auto bg-gray-900 p-4 rounded-lg mt-5">
    <code>
      {`async function myDisplay() {
  let myPromise = new Promise(function(resolve) {
    resolve("I love You !!");
  });
  document.getElementById("demo").innerHTML = await myPromise;
}

myDisplay();`}
    </code>
  </pre>

  <h1 className="text-2xl text-gray-800 font-semibold mt-5">Waiting for a Timeout</h1>
  <pre className="text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5">
    <code>
      {`async function myDisplay() {
  let myPromise = new Promise(function(resolve) {
    setTimeout(function() {resolve("I love You !!");}, 3000);
  });
  document.getElementById("demo").innerHTML = await myPromise;
}

myDisplay();`}
    </code>
  </pre>

  <h1 className="text-gray-800 text-2xl font-semibold mt-5">Waiting for a File</h1>
  <pre className="text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5">
    <code>
      {`async function getFile() {
  let myPromise = new Promise(function(resolve) {
    let req = new XMLHttpRequest();
    req.open('GET', "mycar.html");
    req.onload = function() {
      if (req.status == 200) {
        resolve(req.response);
      } else {
        resolve("File not Found");
      }
    };
    req.send();
  });
  document.getElementById("demo").innerHTML = await myPromise;
}

getFile();`}
    </code>
  </pre>




    </div>
  );
};

export default JSAsyncAwait;