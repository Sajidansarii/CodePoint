import React from "react";

const JSNumber = () => {
  return (
    <div className="max-w-4xl p-6">
      <h1 className="text-3xl font-medium text-blue-500 mb-4">JavaScript Numbers</h1>
      
      <p className="text-gray-700 mb-6">
        In JavaScript, <span className="text-red-400">numbers</span> represent both integer and floating-point values. Numbers can be used for *arithmetic operations, comparisons, and mathematical calculations*.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mb-5">Creating Numbers</h2>
      <pre className="bg-gray-900 text-green-400 p-4 overflow-x-auto rounded-lg mb-5">
        <code>
          {`
let integer = 42;
let float = 3.14;

console.log(integer); // Output: 42
console.log(float);   // Output: 3.14`}
        </code>
      </pre>

      <h2 className="text-2xl font-semibold text-gray-800 mb-5">Number Operations</h2>
      <pre className="bg-gray-900 text-green-400 p-4 overflow-x-auto rounded-lg mb-5">
        <code>
          {`
let a = 10;
let b = 3;

console.log(a + b); // Output: 13
console.log(a - b); // Output: 7
console.log(a * b); // Output: 30
console.log(a / b); // Output: 3.3333333333333335
console.log(a % b); // Output: 1 (remainder)
`}
        </code>
      </pre>

      <h2 className="text-2xl font-semibold text-gray-800 mb-5">Number Methods</h2>
      <pre className="bg-gray-900 text-green-400 p-4 overflow-x-auto rounded-lg mb-5">
        <code>
          {`
let num = 3.14159;

console.log(num.toFixed(2));                // Output: 3.14
console.log(Number.isInteger(num));        // Output: false
console.log(Number.parseInt(num));         // Output: 3
console.log(Number.parseFloat("3.5"));    // Output: 3.5
`}
        </code>
      </pre>

      <h2 className="text-2xl font-semibold text-gray-800 mb-5">Special Number Values</h2>
      <pre className="bg-gray-900 text-green-400 overflow-x-auto p-4 rounded-lg mb-5">
        <code>
          {`
console.log(Infinity);    // Positive infinity
console.log(-Infinity);   // Negative infinity
console.log(NaN);         // Not a Number (invalid number operation)`}
        </code>
      </pre>

      <p className="text-gray-700">
        JavaScript numbers are versatile and can be used in *arithmetic operations, rounding, parsing, and checking types*. Special values like Infinity and NaN help handle exceptional cases.
      </p>
    </div>
  );
};

export default JSNumber;