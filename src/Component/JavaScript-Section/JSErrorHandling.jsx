import React, { useState } from "react";

const JSErrorObjects = () => {
  const [error, setError] = useState("");

  const triggerReferenceError = () => {
    try {
      // Using an undefined variable
      console.log(myUndefinedVar);
    } catch (err) {
      setError(`${err.name}: ${err.message}`);
    }
  };

  const triggerTypeError = () => {
    try {
      // Trying to call a number like a function
      const num = 42;
      num();
    } catch (err) {
      setError(`${err.name}: ${err.message}`);
    }
  };

  const triggerRangeError = () => {
    try {
      // Invalid array length
      const arr = new Array(-5);
    } catch (err) {
      setError(`${err.name}: ${err.message}`);
    }
  };

  const data = [
    {ErrorType:'ReferenceError', Example:'fname = foo;', Error:'foo is not defined'},
    {ErrorType:'ReferenceError',
       Example:`let x = y ;\nlet y = 5 ;`,
        Error:'Cannot access y before initialization'}
  ]

  const data1 = [
    { Error:'TypeError', 
      Example:'Anna(5);',
      ErrorMessage:'Anna is not a function'},

    { Error:'Type Error',
      Example:'let num = 1 ;\nnum.toUpperCase() ;', 
      ErrorMessage:'num.toUpperCase is not a function'}
  ]

  const data2  =[
    {ErrorType:'RangeError', Example:'new Array(-1);', ErrorMessage:'Invalid array length'},
    {ErrorType:'RangeError', Example:'num.toPrecision(500);', ErrorMessage:'toPrecision() argument must be between 1 and 100'}
  ]

  const data3  = [
    {ErrorType:'URIError', Example:'decodeURI("%%%");', ErrorMessage:'URI malformed'}
  ]

  const data4 = [
    {ErrorType:'SyntaxError', Example:'fname = "John);', Message:'Invalid or unexpected token )'},
    {ErrorType:'SyntaxError', Example:'Math.round(4.6;', Message:'Missing ) after argument list'}

  ]

  return (
    <div className="max-w-4xl p-6 mt-10">
      <h1 className="text-3xl font-medium text-blue-500">JavaScript Built-in Error Objects</h1>

      <p className="mt-5 mb-4">
        JavaScript provides several built-in error types such as 
        <code> ReferenceError</code>, <code>TypeError</code>, and <code>RangeError</code>.
        These help identify what kind of mistake happened in the code.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mb-5">Example</h2>
      <div className="flex flex-wrap gap-4">
        <button
          onClick={triggerReferenceError}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Trigger ReferenceError
        </button>

        <button
          onClick={triggerTypeError}
          className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600"
        >
          Trigger TypeError
        </button>

        <button
          onClick={triggerRangeError}
          className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600"
        >
          Trigger RangeError
        </button>
      </div>

      {error && (
        <div className="bg-gray-100 p-4 rounded mt-4">
          <p className="text-red-600 font-semibold">⚠ Error: {error}</p>
        </div>
      )}

      <h1 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">How to Handle JavaScript Errors</h1>
     <p className="mb-3">The <span className="text-red-400">try</span> statement lets you specify a block of code to check for errors during execution.</p>
    <p className="mb-3">The <span className="text-red-400">catch</span> statement defines code that runs if an error occurs in the try block.</p>
    <p>In JavaScript, <span className="text-red-400">try</span> and <span className="text-red-400">catch</span> statements are always used together.</p>
     <pre className="text-green-400 bg-gray-900 p-4 rounded-lg mt-5">
      <code>
        {`try {
  Block of code to try
} catch(err) {
  Block of code to handle errors
}`}
      </code>
     </pre>

     <h1 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Reference Errors</h1>
     <p>A <span className="text-red-400">ReferenceError</span> happens when you try to use a variable that hasn’t been declared.</p>
     <table className="min-w-full border border-gray-300 text-gray-700 text-sm text-left mt-5">
      <thead>
        <tr className="bg-gray-100">
          <th className="px-4 py-2 border-b border-gray-300 text-gray-700 font-bold">Error Type</th>
          <th className="px-4 py-2 border-b border-gray-300 text-gray-700 font-bold">Example</th>
          <th className="px-4 py-2 border-b border-gray-300 text-gray-700 font-bold">Error</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row,index)=>(
          <tr className="cursor-text hover:bg-gray-100">
            <td className="px-4 py-2 border-b border-gray-200">{row.ErrorType}</td>
            <td className="px-4 py-2 border-b border-gray-200 whitespace-pre-line">{row.Example}</td>
            <td className="px-4 py-2 border-b border-gray-200">{row.Error}</td>
          </tr>
        ))}
      </tbody>
     </table>

     <h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">Example</h2>
     <p>A variable that does not exist cannot be used.</p>
     <pre className="text-green-400 bg-gray-900 p-4 rounded-lg mt-5">
      <code>
        {`let x = 5;

try {
  x = y + 1;
} catch(err) {
  let text = err.name;
}`}
      </code>
     </pre>

     <p className="mt-5">Cannot access a variable before initialization:</p>
    <pre className="text-green-400 bg-gray-900 p-4 rounded-lg mt-5">
      <code>
        {`try {
  let x = y;
  let y = 5;
} catch(err) {
  let text = err.name;
}`}
      </code>
    </pre>

    <h1 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">JavaScript Type Errors</h1>
   <p>A <span className="text-red-400">TypeError</span> occurs when a value has an incorrect type or an invalid operation is performed on it.</p>
    <div className="max-w-full overflow-x-auto">
   <table className="min-w-full border border-gray-300 text-gray-700 text-sm text-left mt-5">
    <thead>
      <tr className="bg-gray-100">
        <th className="px-4 py-2 border-b border-gray-300 text-gray-700 font-bold">Error</th>
        <th className="px-4 py-2 border-b border-gray-300 text-gray-700 font-bold">Example</th>
        <th className="px-4 py-2 border-b border-gray-300 text-gray-700 font-bold">Error Message</th>
      </tr>
    </thead>
    <tbody>
      {data1.map((row,index)=>(
        <tr className="cursor-text hover:bg-gray-100">
      <td className="px-4 py-2 border-b border-gray-200">{row.Error}</td>
      <td className="px-4 py-2 border-b border-gray-200 whitespace-pre-line">{row.Example}</td>
      <td className="px-4 py-2 border-b border-gray-200">{row.ErrorMessage}</td>
        </tr>
      ))}
    </tbody>
   </table>
   </div>

   <h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">Example</h2>
   <p>Anna() is not a function:</p>
   <pre className="text-green-400 bg-gray-900 p-4 rounded-lg mt-5">
    <code>
      {`try {
  Anna(5);
} catch(err) {
  let text = err.name;
}
`}
    </code>
   </pre>

   <p className="mt-5">You cannot convert a number to upper case:</p>
   <pre className="text-green-400 bg-gray-900 p-4 rounded-lg mt-5">
    <code>
      {`let num = 1;
try {
  num.toUpperCase();
} catch(err) {
  let text = err.name;
}
`}
    </code>
   </pre>

   <h1 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">JavaScript Range Errors</h1>
   <p>A <span className="text-red-400">RangeError</span> happens when a value exceeds its allowed limits.</p>
    <div className="max-w-full overflow-x-auto">
   <table className="min-w-full border border-gray-300 text-gray-700 text-sm text-left mt-5">
    <thead>
      <tr className="bg-gray-100">
        <th className="px-4 py-2 border-gray-300 text-gray-700 font-bold">Error Type</th>
        <th className="px-4 py-2 border-gray-300 text-gray-700 font-bold">Example</th>
        <th className="px-4 py-2 border-gray-300 text-gray-700 font-bold">Error Message</th>
      </tr>
    </thead>
    <tbody>
      {data2.map((row,index)=>(
        <tr className="cursor-text hover:bg-gray-100">
          <td className="px-4 py-2 border-b border-gray-200">{row.ErrorType}</td>
          <td className="px-4 py-2 border-b border-gray-200">{row.Example}</td>
          <td className="px-4 py-2 border-b border-gray-200">{row.ErrorMessage}</td>
        </tr>
      ))}
    </tbody>
   </table>
   </div>

   <h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">Example</h2>
   <p>You cannot set the number of array elements to -1:</p>
   <pre className="text-green-400 bg-gray-900 p-4 rounded-lg mt-5">
    <code>
      {`try {
new Array(-1);
} catch(err) {
  let text = err.name;
}`}
    </code>
   </pre>

   <p className="mt-5">You cannot set the number of significant digits of a number to 500:</p>
  <pre className="text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5">
    <code>
      {`let num = 1;

try {
  num.toPrecision(500);   // A number cannot have 500 significant digits
} catch(err) {
  let text = err.name;
}`}
    </code>
  </pre>

  <h1 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">JavaScript URI Errors</h1>
  <p>A <span className="text-red-400">URIError</span> occurs when invalid characters are used in a URI function.</p>
   <div className="max-w-full overflow-x-auto">
  <table className=" min-w-full border border-gray-300 text-gray-700 text-sm txet-left mt-5">
    <thead>
      <tr className="bg-gray-100">
        <th className="px-4 py-2 border-b border-gray-300 text-gray-700 font-bold">Error Type</th>
        <th className="px-4 py-2 border-b border-gray-300 text-gray-700 font-bold">Example</th>
        <th className="px-4 py-2 border-b border-gray-300 text-gray-700 font-bold">Error Message</th>
      </tr>
    </thead>
    <tbody>
      {data3.map((row,index)=>(
        <tr className="cursor-text hover:bg-gray-100">
          <td className="px-4 py-2 border-gray-200">{row.ErrorType}</td>
          <td className="px-4 py-2 border-gray-200">{row.Example}</td>
          <td className="px-4 py-2 border-gray-200">{row.ErrorMessage}</td>
        </tr>
      ))}
    </tbody>
  </table>
  </div>

  <h2 className="text-2xl text-gray-800 font-semibold mt-5">Example</h2>
   <pre className="text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5">
    <code>
      {`try {
  decodeURI("%%%");   // You cannot URI decode percent signs
} catch(err) {
  document.getElementById("demo").innerHTML = err.name;
}`}
    </code>
   </pre>

   <h1 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">JavaScript Syntax Errors</h1>
   <p>A <span className="text-red-400">Syntax Error</span> occurs when JavaScript code breaks its grammatical rules.</p>
   <div className="max-w-full overflow-x-auto">
   <table className="w-full border border-gray-300 text-gray-700 text-sm text-left mt-5">
    <thead>
      <tr className="bg-gray-100">
        <th className="px-4 py-2 border-b border-gray-300 text-gray-700 font-bold">Error</th>
        <th className="px-4 py-2 border-b border-gray-300 text-gray-700 font-bold">Example</th>
        <th className="px-4 py-2 border-b border-gray-300 text-gray-700 font-bold">Error</th>
      </tr>
    </thead>
    <tbody>
     {data4.map((row,index)=>(
      <tr className="cursor-text hover:bg-gray-100">
        <td className="px-4 py-2 border-b border-gray-200">{row.ErrorType}</td>
        <td className="px-4 py-2 border-b border-gray-200">{row.Example}</td>
        <td className="px-4 py-2 border-b border-gray-200">{row.Message}</td>
      </tr>
     ))}
    </tbody>
   </table>
   </div>

   <h2 className="text-gray-800 text-2xl font-semibold mt-5 mb-3">Example</h2>
   <p>This example shows an error caused by not properly closing the string.</p>
   <pre className="text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5">
    <code>
      {`// This line cannot be parsed by JavaScript
let fName = "John);

// Execution stops here`}
    </code>
   </pre>

   <p className="mt-5">The statement above will cause an “Invalid or unexpected token” error, and the program will stop running.</p>


   <h1 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Syntax Errors are Not Catchable</h1>
   <h2 className="text-2xl text-gray-800 font-semibold mt-5">Example</h2>
   <p>The code shown below is expected to produce an error, but it doesn’t.</p>
   <pre className="text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5">
    <code>
      {`try {
  let x = Math.round(4.6;)
} catch(err) {
  let text = err.name + " " + err.description;
}
`}
    </code>
   </pre>

   <h2 className="text-2xl text-gray-800 mt-5 font-semibold">Syntax Issue</h2>
   <pre className="text-green-400 bg-gray-900 p-4 rounded-lg mt-5">
    <code>
      {`Math.round(4.6;)`}
    </code>
   </pre>
   <p className="mt-5">The line above is not valid JavaScript syntax because there is an extra semicolon inside the parentheses. The correct syntax is:</p>
  
  <pre className="text-green-400 bg-gray-900 p-4 rounded-lg mt-5">
    <code>
      {`Math.round(4.6);`}
    </code>
  </pre>

  <p className="mt-5">The key point is the browser’s handling of syntax errors. The JavaScript engine detects and throws a SyntaxError before execution begins. Since this happens before the try...catch block, the try block is never entered and the script does not run at all (no let text = update).</p>


    </div>
  );
};

export default JSErrorObjects;