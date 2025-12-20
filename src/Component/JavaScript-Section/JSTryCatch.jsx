import React, { useState } from "react";

export default function TryCatchExample() {
  const [result, setResult] = useState("");

  const handleErrorExample = () => {
    try {
      // Example: dividing by zero won't throw in JS, so we'll throw manually
      let a = 10;
      let b = 0;

      if (b === 0) {
        throw new Error("Cannot divide by zero!");
      }

      let c = a / b;
      setResult("Result: " + c);
    } catch (error) {
      // This block runs when an error is thrown
      setResult("Error: " + error.message);
    } finally {
      // This block always executes
      console.log("Execution completed.");
    }
  };

  return (
    <div className="p-6 max-w-4xl">
      <h1 className="text-3xl font-medium text-blue-500 mb-5">JavaScript try...catch</h1>

        <p className="mb-1">The <span className="text-red-400">try...catch</span>{" "} statement in JavaScript is used to handle errors gracefully.</p>
        <p className="mb-1">The <span className="text-red-400">try</span> block contains the code that may throw an error.</p>
        <p>The <span className="text-red-400">catch</span> block handles the error if it occurs.</p>
        <p>The optional <span className="text-red-400">finally</span> block always executes, whether an error occurs or not.</p>

      <button
        onClick={handleErrorExample}
        className="px-4 py-2 bg-blue-500 text-white mt-10 rounded-lg shadow hover:bg-blue-600 transition"
      >
        Run Example
      </button>

      {result && (
        <div className="mt-4 p-3 bg-gray-100 rounded-lg border text-gray-800">
          {result}
        </div>
      )}


      <h1 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">The Try Block</h1>
      <p className="mb-3">The <span className="text-red-400">try</span> block holds the code that could potentially cause an error.</p>
      <p>If no error occurs, the catch block is skipped.</p>
      <h2 className="text-gray-800 text-2xl font-semibold mt-5">Syntax</h2>
      <pre className="text-green-400 bg-gray-900 p-4 rounded-lg mt-5">
        <code>
          {`try {
  // Code that may cause an error
} catch (error) {
  // Code to handle the error
}`}
        </code>
      </pre>

      <h1 className="text-gray-800 text-2xl font-semibold mt-10 mb-3">The Catch Block</h1>
      <p className="mb-3">The <span className="text-red-400">catch</span> block runs only when an error happens inside the try block.</p>
      <p>The error object contains information about what caused the problem.</p>
      
      <h2 className="text-2xl textg-gray-900 font-semibold mt-5">Syntax</h2>
      <pre className="text-green-400 bg-gray-900 p-4 rounded-lg mt-5">
        <code>
          {`try {
  // Code that may cause an error
} catch (error) {
  // Code to handle the error
}`}
        </code>
      </pre>

      <h1 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">The Finally Block (Optional)</h1>
     <p className="mb-3">The <span className="text-red-400">finally</span> block runs after the <span className="text-red-400">try</span> and <span className="text-red-400">catch</span> blocks, regardless of whether an error occurs.</p>
     <p>It is often used to perform cleanup operations, such as closing files or stopping loaders.</p>
     <h2 className="text-2xl text-gray-800 font-semibold mt-5">Syntax</h2>
     <pre className="text-green-400 bg-gray-900 p-4 rounded-lg mt-5">
      <code>
        {`try {
  // Code that may cause an error
} catch (error) {
  // Code to handle the error
} finally {
  // Code that always runs, no matter what
}`}
      </code>
     </pre>

    <h1 className="text-2xl text-gray-800 font-semibold mt-10 mb-2">The throw Statement</h1>
    <p className="mb-2">The <span className="text-red-400">throw</span> statement lets you define your own custom error.</p>
    <p className="mb-2">Technically, it is possible to throw an error as an exception.</p>
    <p>JavaScript allows exceptions to be thrown as <span className="text-red-400">strings</span>, <span className="text-red-400">numbers</span>, <span className="text-red-400">booleans</span>, or objects.</p>
   
   <pre className="text-green-400 bg-gray-900 p-4 rounded-lg mt-5">
    <code>
      {`throw "Too big";    // throw a text
throw 500;          // throw a number`}
    </code>
   </pre>

   <p className="mt-5">Using <span className="text-red-400">throw</span> with <span className="text-red-400">try</span> and <span className="text-red-400">catch</span> allows you to manage program flow and create custom error messages.</p>

   <h1 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Input Validation Example</h1>   
   <p>This example checks the input and throws an exception <span className="text-red-400">(err)</span> if the value is incorrect.</p>
   <p>The <span className="text-red-400">catch</span> statement catches the exception <span className="text-red-400">(err)</span> and displays a custom error message.</p>
   <pre className="text-green-400 bg-gray-900 p-4 roun rounded-lg mt-5">
    <code>
      {`<!DOCTYPE html>
<html>
<body>

<p>Please input a number between 5 and 10:</p>

<input id="demo" type="text">
<button type="button" onclick="myFunction()">Test Input</button>
<p id="p01"></p>

<script>
function myFunction() {
  const message = document.getElementById("p01");
  message.innerHTML = "";
  let x = document.getElementById("demo").value;
  try {
    if(x.trim() == "") throw "empty";
    if(isNaN(x)) throw "not a number";
    x = Number(x);
    if(x < 5) throw "too low";
    if(x > 10) throw "too high";
  } catch(err) {
    message.innerHTML = "Input is " + err;
  }
}
</script>

</body>
</html>`}
    </code>
   </pre>

   <h1 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">HTML Validation</h1>
  <p>Modern browsers frequently combine JavaScript with built-in HTML validation, relying on validation rules set in HTML attributes.</p>
  <pre className="text-green-400 bg-gray-900 p-4 rounded-lg mt-5">
    <code>
      {`<input id="demo" type="number" min="5" max="10" step="1">`}
    </code>
  </pre>

  <h1 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Finally Example</h1>
  <p>Using <span className="text-red-400">finally</span>, you can execute code after the try and catch blocks, regardless of whether an error occurred.</p>
  <h2 className="text-gray-800 text-2xl font-semibold mt-5">Syntax</h2>
  <pre className="text-green-400 bg-gray-900 p-4 rounded-lg mt-5">
    <code>
      {`try {
  Block of code to try
} catch(err) {
  Block of code to handle errors
} finally {
  Block of code to be executed regardless of the try / catch result
}`}
    </code>
  </pre>

  <h2 className="text-2xl text-gray-800 font-semibold mt-5">Example</h2>
  <pre className="text-green-400 bg-gray-900 p-4 rounded-lg mt-5">
    <code>
      {`function myFunction() {
  const message = document.getElementById("p01");
  message.innerHTML = "";
  let x = document.getElementById("demo").value;
  try {
    if(x.trim() == "") throw "is empty";
    if(isNaN(x)) throw "is not a number";
    x = Number(x);
    if(x > 10) throw "is too high";
    if(x < 5) throw "is too low";
  } catch(err) {
    message.innerHTML = "Error: " + err + ".";
  } finally {
    document.getElementById("demo").value = "";
  }
}`}
    </code>
  </pre>



















    </div>
  );
}