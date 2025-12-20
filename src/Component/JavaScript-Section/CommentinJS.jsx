import React from "react";

const JsComments = () => {
  return (
    <div className="p-6 max-w-4xl">
      {/* Title */}
      <h1 className="text-3xl font-medium text-blue-500 mb-4">
        JavaScript Comments
      </h1>

      {/* Introduction */}
      <p className="mb-4 leading-relaxed">
        Comments in JavaScript are used to explain code and make it more
        readable. They are ignored by the JavaScript engine, which means they
        don’t affect how the code runs. Comments are very useful when you want
        to document your code or temporarily disable parts of it.
      </p>

      {/* Single-line Comments */}
      <div className="p-5 mb-6 ">
        <h2 className="text-xl font-semibold text-gray-800 mb-3">
          Single-line Comments
        </h2>
        <p className="text-gray-600 mb-3">
          Single-line comments start with <code>//</code>. Everything after{" "}
          <code>//</code> on that line is ignored.
        </p>
        <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto text-sm">
{`// This is a single-line comment
let x = 10; // You can also add a comment after code
console.log(x);`}
        </pre>
      </div>

      {/* Multi-line Comments */}
      <div className="p-5">
        <h2 className="text-xl font-semibold text-gray-800 mb-3">
          Multi-line Comments
        </h2>
        <p className="text-gray-600 mb-3">
          Multi-line comments start with <code>/*</code> and end with{" "}
          <code>*/</code>. They can span across multiple lines.
        </p>
        <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto text-sm">
{`/* This is a multi-line comment
   It can explain code in detail
   across multiple lines */
let y = 20;
console.log(y);`}
        </pre>
      </div>

      <h1 className="text-2xl mt-5 mb-2">Using Comments to Prevent Execution</h1>
      <p>Using comments to disable code execution is a useful technique for testing and debugging purposes.</p>
      <p className="mt-1">Adding <span className="bg-gray-100">//</span> at the beginning of a line turns it into a comment, so it won’t be executed.</p>
      <p className="mt-1">This example demonstrates how <span className="bg-gray-100">//</span> can be used to disable a specific line of code.</p>
      <h1 className="text-2xl mt-5 mb-3">Example</h1>
      <pre className="text-green-400 bg-gray-900 p-4 rounded-lg">
        {`//document.getElementById("myH").innerHTML = "My First Page";
document.getElementById("myP").innerHTML = "My first paragraph.";`}
      </pre>
      <p>The following example demonstrates how a comment block can be used to prevent the execution of multiple lines of code.</p>

      <h1 className="text-2xl">Example</h1>
      <pre className="text-green-400 bg-gray-900 p-4 rounded-lg">
        {`/*
document.getElementById("myH").innerHTML = "My First Page";
document.getElementById("myP").innerHTML = "My first paragraph.";
*/
`}
      </pre>


















      {/* Summary */}
      <div className="mt-6 bg-blue-50 p-4 rounded-xl">
        <h3 className="text-lg font-semibold text-blue-700 mb-2">Summary</h3>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>
            <code>//</code> → For single-line comments.
          </li>
          <li>
            <code>/* ... */</code> → For multi-line comments.
          </li>
          <li>
            Comments improve readability but are ignored during execution.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default JsComments;