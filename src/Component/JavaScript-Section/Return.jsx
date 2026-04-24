import React from "react";

const JSReturn = () => {
  return (
    <div className="max-w-4xl p-6">
      <h1 className="text-3xl font-medium text-blue-500 mb-4">JavaScript Return Statement</h1>  
      <p className="text-gray-700 mb-6">
        The <span className="text-red-400">return</span> statement is used in a function to stop execution and return a value to the caller. 
        Once a return statement is executed, the function exits immediately.
      </p>
      <h2 className="text-2xl font-semibold text-gray-700 mb-5">Syntax</h2>

      <pre className="bg-gray-200 p-4 rounded-lg mt-5 overflow-x-auto max-w-full whitespace-pre-wrap">
        <code>
          {`
return value;
`}
        </code>
      </pre>

      <h2 className="text-2xl font-semibold text-gray-800 mt-10">Example</h2>
      <h3 className="text-xl text-gray-800 mt-4">Return the value of PI</h3>
      <pre className="bg-gray-200 p-4 rounded-lg mt-5 overflow-x-auto max-w-full whitespace-pre-wrap">
        <code>
          {`
 function myFunction() {
  return Math.PI;
}
`}
        </code>
      </pre>

      

      <h2 className="text-2xl font-semibold text-gray-800 mt-10">Example</h2>
      <h3 className="text-xl text-gray-800 mt-4">Exiting a Function Early</h3>
      <pre className="bg-gray-200 p-4 rounded-lg mt-5 overflow-x-auto max-w-full whitespace-pre-wrap">
        <code>
          {`
 function checkNumber(num) {
  if (num <= 0) {
    return "Number is zero or negative";
  }
  return "Number is positive";
}

console.log(checkNumber(-5)); // Output: Number is zero or negative
console.log(checkNumber(10)); // Output: Number is positive
// 
`}
        </code>
      </pre>

      
    </div>
  );
};

export default JSReturn;