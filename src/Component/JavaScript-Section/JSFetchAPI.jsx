import React, { useState } from "react";

const JSFetchAPI = () => {
  
  return (
    <div className="max-w-4xl p-6 mt-10">
      <h1 className="text-3xl font-medium text-blue-500 mb-3"> Fetch API in JavaScript</h1>

      <p>
        The <span className="text-red-400">Fetch API</span> provides a modern way to make HTTP requests in 
        JavaScript. It returns a <code>Promise</code> and allows us to fetch resources 
        like JSON, text, or files from a server.
      </p>

      <h1 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">A Fetch API Example</h1>
    <p>The example below retrieves a file and shows its contents.</p>
      <h2 className="text-2xl text-gray-800 font-semibold mt-5">Example</h2>
      <pre className="bg-gray-200 p-4 rounded-lg mt-5">
        <code>
          {`fetch(file)
.then(x => x.text())
.then(y => myDisplay(y));`}
        </code>
      </pre>

      <p className="mt-5">As Fetch relies on asynchronous functions, the example above might be simpler to follow when shown this way:</p>
      <h2 className="text-2xl text-gray-800 font-semibold mt-5">Example</h2>
      <pre className="bg-gray-200 p-4 rounded-lg mt-5">
        <code>
          {`async function getText(file) {
  let x = await fetch(file);
  let y = await x.text();
  myDisplay(y);
}`}
        </code>
      </pre>

      <p className="mt-5">Even better, replace x and y with more descriptive names.</p>
      <h2 className="text-2xl text-gray-800 font-semibold mt-5">Example</h2>
      <pre className="bg-gray-200 p-4 rounded-lg mt-5">
        <code>
          {`async function getText(file) {
  let myObject = await fetch(file);
  let myText = await myObject.text();
  myDisplay(myText);
}`}
        </code>
      </pre>
      </div>
  );
};

export default JSFetchAPI;