import React from "react";

const JSReturn = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow mt-10">
      <h1 className="text-3xl font-medium text-blue-500 mb-4">JavaScript <span className="text-green-600">Return Statement</span></h1>
      
      <p className="text-gray-700 mb-6">
        The <span className="font-semibold">return</span> statement is used in a function to *stop execution* and *return a value* to the caller. 
        Once a return statement is executed, the function exits immediately.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mb-2">Syntax:</h2>
      <div className="bg-gray-100 p-4 rounded mb-4 overflow-x-auto">
        <code className="text-green-600">
          {`function functionName(parameters) {
  // code to execute
  return value;
}`}
        </code>
      </div>

      <h2 className="text-2xl font-semibold text-gray-800 mb-2">Example 1: Returning a Value</h2>
      <div className="bg-gray-100 p-4 rounded mb-4 overflow-x-auto">
        <code className="text-green-600">
          {`function add(a, b) {
  return a + b;
}

const result = add(5, 3);
console.log(result); // Output: 8`}
        </code>
      </div>

      <p className="text-gray-700 mb-6">
        Here, the function <code>add</code> returns the sum of <code>a</code> and <code>b</code>. 
        The returned value is stored in the variable <code>result</code>.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mb-2">Example 2: Exiting a Function Early</h2>
      <div className="bg-gray-100 p-4 rounded mb-4 overflow-x-auto">
        <code className="text-green-600">
          {`function checkNumber(num) {
  if (num <= 0) {
    return "Number is zero or negative";
  }
  return "Number is positive";
}

console.log(checkNumber(-5)); // Output: Number is zero or negative
console.log(checkNumber(10)); // Output: Number is positive`}
        </code>
      </div>

      <p className="text-gray-700">
        The <span className="font-semibold">return</span> statement can also be used to *exit a function early* when a certain condition is met.
      </p>
    </div>
  );
};

export default JSReturn;