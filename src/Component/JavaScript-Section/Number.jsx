import React from "react";

const JSNumber = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow mt-10">
      <h1 className="text-3xl font-medium text-blue-500 mb-4">JavaScript <span className="text-green-600">Numbers</span></h1>
      
      <p className="text-gray-700 mb-6">
        In JavaScript, *numbers* represent both integer and floating-point values. Numbers can be used for *arithmetic operations, comparisons, and mathematical calculations*.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mb-2">Creating Numbers</h2>
      <div className="bg-gray-100 p-4 rounded mb-4 overflow-x-auto">
        <code className="text-green-600">
          {`let integer = 42;
let float = 3.14;

console.log(integer); // Output: 42
console.log(float);   // Output: 3.14`}
        </code>
      </div>

      <h2 className="text-2xl font-semibold text-gray-800 mb-2">Number Operations</h2>
      <div className="bg-gray-100 p-4 rounded mb-4 overflow-x-auto">
        <code className="text-green-600">
          {`let a = 10;
let b = 3;

console.log(a + b); // Output: 13
console.log(a - b); // Output: 7
console.log(a * b); // Output: 30
console.log(a / b); // Output: 3.3333333333333335
console.log(a % b); // Output: 1 (remainder)`}
        </code>
      </div>

      <h2 className="text-2xl font-semibold text-gray-800 mb-2">Number Methods</h2>
      <div className="bg-gray-100 p-4 rounded mb-4 overflow-x-auto">
        <code className="text-green-600">
          {`let num = 3.14159;

console.log(num.toFixed(2));  // Output: 3.14
console.log(Number.isInteger(num)); // Output: false
console.log(Number.parseInt(num));  // Output: 3
console.log(Number.parseFloat("3.5")); // Output: 3.5`}
        </code>
      </div>

      <h2 className="text-2xl font-semibold text-gray-800 mb-2">Special Number Values</h2>
      <div className="bg-gray-100 p-4 rounded mb-4 overflow-x-auto">
        <code className="text-green-600">
          {`console.log(Infinity); // Positive infinity
console.log(-Infinity); // Negative infinity
console.log(NaN);       // Not a Number (invalid number operation)`}
        </code>
      </div>

      <p className="text-gray-700">
        JavaScript numbers are versatile and can be used in *arithmetic operations, rounding, parsing, and checking types*. Special values like Infinity and NaN help handle exceptional cases.
      </p>
    </div>
  );
};

export default JSNumber;