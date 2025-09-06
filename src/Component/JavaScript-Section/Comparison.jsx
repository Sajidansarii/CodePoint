import React from "react";

const JSComparisonOperators = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow mt-10">
      <h1 className="text-3xl font-bold text-blue-600 mb-4">JavaScript <span className="text-green-600">Comparison Operators</span></h1>
      
      <p className="text-gray-700 mb-6">
        *Comparison operators* are used to *compare two values* and return a Boolean result (true or false). 
        They are commonly used in *conditional statements*.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mb-2">Common Comparison Operators</h2>
      <ul className="list-disc list-inside text-gray-700 mb-4">
        <li><strong>==</strong> : Equal to (compares value only)</li>
        <li><strong>===</strong> : Strict equal (compares value and type)</li>
        <li><strong>!=</strong> : Not equal (compares value only)</li>
        <li><strong>!==</strong> : Strict not equal (compares value and type)</li>
        <li><strong>&gt;</strong> : Greater than</li>
        <li><strong>&lt;</strong> : Less than</li>
        <li><strong>&gt;=</strong> : Greater than or equal to</li>
        <li><strong>&lt;=</strong> : Less than or equal to</li>
      </ul>

      <h2 className="text-2xl font-semibold text-gray-800 mb-2">Example: Equality Operators</h2>
      <div className="bg-gray-100 p-4 rounded mb-4 overflow-x-auto">
        <code className="text-green-600">
          {`let a = 5;
let b = "5";

console.log(a == b);  // Output: true (value is equal)
console.log(a === b); // Output: false (value and type must match)
console.log(a != b);  // Output: false
console.log(a !== b); // Output: true`}
        </code>
      </div>

      <h2 className="text-2xl font-semibold text-gray-800 mb-2">Example: Relational Operators</h2>
      <div className="bg-gray-100 p-4 rounded mb-4 overflow-x-auto">
        <code className="text-green-600">
          {`let x = 10;
let y = 20;

console.log(x > y);  // Output: false
console.log(x < y);  // Output: true
console.log(x >= 10); // Output: true
console.log(y <= 20); // Output: true`}
        </code>
      </div>

      <h2 className="text-2xl font-semibold text-gray-800 mb-2">Practical Example</h2>
      <div className="bg-gray-100 p-4 rounded mb-4 overflow-x-auto">
        <code className="text-green-600">
          {`let age = 18;

if (age >= 18) {
  console.log("You are eligible to vote");
} else {
  console.log("You are not eligible to vote");
}

// Output: You are eligible to vote`}
        </code>
      </div>

      <p className="text-gray-700">
        Comparison operators are essential for *making decisions* in JavaScript, especially inside *if statements, loops, and conditional expressions*.
      </p>
    </div>
  );
};

export default JSComparisonOperators;