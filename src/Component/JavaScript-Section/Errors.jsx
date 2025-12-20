import React from "react";

const JSErrors = () => {
  const data = [
    {Error:'Unexpected token', Example:'fname = "John);', error:'Invalid or unexpected token )'},
    {Error:'SyntaxError', Example:'Math.round(4.6;', error:'Missing ) after argument list'},
  ];

  const data1 = [
    {Error:'ReferenceError', Example:'fname = foo;', error:'foo is not defined'},
    {Error:'Cannot access before initialization', Example:'let x = y; \n  let y = 5;', error:'Cannot access y before initialization'},
  ];

  const data2 = [
    {Error:'TypeError', Example:'anna();', error:'anna is not a function'},
    {Error:'Cannot read property of undefined/null', Example:'let x = 5;\n let y = x.length', error:'Cannot read properties of undefined (reading "lenght")'},
  ];

  const data3 = [
    {Error:'RangeError', Example:'new Array(-1);', error:'Invalid array length'},
    {Error:'RangeError', Example:'new Date("2025-02-33");', error:'Invalid date'},
  ];
  return (
    <div className="max-w-4xl p-6">
      <h1 className="text-3xl font-medium text-blue-500 mb-4">JavaScript Errors</h1>
      
      <p className="mb-6">
        In JavaScript, an *error* occurs when the code cannot execute properly. Errors can be due to syntax mistakes, runtime issues, or logical problems. 
        JavaScript provides built-in error types and allows developers to handle them using <span className="font-semibold">try...catch</span>.
      </p>

      <h1 className="text-2xl mt-10">How to Handle JavaScript Errors</h1>
      <p className="leading-relaxed mt-3">The <span className="text-red-400 bg-gray-50 px-1">try</span> statement is used to define a block of code that will be tested for exceptions while the program runs.</p>
      <p className="leading-relaxed mt-3">The <span className="text-red-400 bg-gray-50 px-1">catch</span> statement defines a block of code that executes when an error is thrown in the associated try block.</p>
     <p className="leading-relaxed mt-3">The <span className="text-red-400 bg-gray-50 px-1">try</span>  and <span className="text-red-400 bg-gray-50 px-1">catch</span> statements in JavaScript are typically used together to handle errors.</p>
   
   <h1 className="text-2xl mt-5">Example</h1>
   <pre className="text-green-400 bg-gray-900 p-4 rounded-lg mt-5">
    {`try {
  Block of code to try
}
catch(err) {
  Block of code to handle errors
}`}
   </pre>

   <h1 className="text-2xl mt-10">Syntax Errors</h1>
   <p className="mt-3">A syntax error occurs when the code does not conform to the grammatical structure defined by JavaScript.</p>
  <table className="min-w-full border border-gray-300 text-gray-700 text-sm text-left mt-5">
    <thead>
      <tr className="bg-gray-100">
        <th className="px-4 py-2 border-b border-gray-300 text-gray-700 font-bold">Error</th>
        <th className="px-4 py-2 border-b border-gray-300 text-gray-700 font-bold">Example</th>
        <th className="px-4 py-2 border-b border-gray-300 text-gray-700 font-bold">Error</th>
      </tr>
    </thead>
    <tbody>
      {data.map((row,index)=>(
        <tr className="cursor-text hover:bg-gray-100">
          <td className="px-4 py-2 border-b border-gray-200">{row.Error}</td>
          <td className="px-4 py-2 border-b border-gray-200">{row.Example}</td>
          <td className="px-4 py-2 border-b border-gray-200">{row.error}</td>
        </tr>
      ))}
    </tbody>
  </table>

  <h1 className="text-2xl mt-10">Example</h1>
  <p className="leading-relaxed mt-5">Here, we made a mistake by not adding the end quote for the string.</p>
  <pre className="text-green-400 bg-gray-900 p-4 rounded-lg mt-5">
    {`let fName = "John);`}
  </pre>
   <p className="mt-5">The code shown above triggers an "Invalid or unexpected token" error, which halts program execution.</p>
 

   <h1 className="text-2xl mt-5">Reference Errors</h1>
   <p className="leading-relaxed mt-10">A reference error is thrown when the code refers to a variable or function that does not exist in the current scope.</p>
   <table className="min-w-full border border-gray-300 text-gray-700 text-sm text-left mt-5">
    <thead>
      <tr className="bg-gray-100">
        <th className="px-4 py-2 border-b border-gray-300 text-gray-700 font-bold">Error</th>
        <th className="px-4 py-2 border-b border-gray-300 text-gray-700 font-bold">Example</th>
        <th className="px-4 py-2 border-b border-gray-300 text-gray-700 font-bold">Error</th>
      </tr>
    </thead>
    <tbody>
      {data1.map((row,index)=>(
        <tr className="cursor-text hover:bg-gray-100">
          <td className="px-4 py-2 border-b border-gray-200">{row.Error}</td>
          <td className="px-4 py-2 border-b border-gray-200 whitespace-pre-line">{row.Example}</td>
          <td className="px-4 py-2 border-b border-gray-200">{row.error}</td>
        </tr>
      ))}
    </tbody>
   </table>


   <h1 className="text-2xl mt-10">Type Errors</h1>
   <p className="leading-relaxed mt-2">Type errors are triggered when an operation is performed on a value that doesn’t support it, such as calling a non-function or accessing a property on <span className="bg-gray-50 px-1 text-red-400">undefined</span>.</p>

   <table className="min-w-full border border-gray-300 text-gray-700 text-sm text-left mt-5">
    <thead>
      <tr className="bg-gray-100">
        <th className="px-4 py-2 border-b border-gray-300 text-gray-700 font-bold">Error</th>
        <th className="px-4 py-2 border-b border-gray-300 text-gray-700 font-bold">Example</th>
        <th className="px-4 py-2 border-b border-gray-300 text-gray-700 font-bold">Error</th>
      </tr>
    </thead>
    {data2.map((row,index)=>(
      <tr className="cursor-text hover:bg-gray-100">
        <td className="px-4 py-2 border-b border-gray-200">{row.Error}</td>
        <td className="px-4 py-2 border-b border-gray-200 whitespace-pre-line">{row.Example}</td>
        <td className="px-4 py-2 border-b border-gray-200 ">{row.error}</td>
      </tr>
    ))}
   </table>


   <h1 className="text-2xl mt-10">Range Errors</h1>
   <p className="leading-relaxed mt-3">RangeErrors are thrown when a value is of the correct type but falls outside the allowed range.</p>
   <table className="min-w-full border border-gray-300 text-gray-700 text-sm text-left mt-5">
    <thead>
      <tr className="bg-gray-100">
        <th className="px-4 py-2 border-b border-gray-300 text-gray-700 font-bold">Error</th>
        <th className="px-4 py-2 border-b border-gray-300 text-gray-700 font-bold">Example</th>
        <th className="px-4 py-2 border-b border-gray-300 text-gray-700 font-bold">Error</th>
      </tr>
    </thead>
    {data3.map((row,index)=>(
      <tr className="cursor-text hover:bg-gray-100">
        <td className="px-4 py-2 border-b border-gray-200">{row.Error}</td>
        <td className="px-4 py-2 border-b border-gray-200 whitespace-pre-line">{row.Example}</td>
        <td className="px-4 py-2 border-b border-gray-200">{row.error}</td>
      </tr>
    ))}
   </table>

      <p className="mt-10">
        Using <span className="font-semibold">try...catch</span>, you can *handle errors gracefully* without breaking your program.
      </p>
    </div>
  );
};

export default JSErrors;