import React from "react";

const JSNullishOperator = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow mt-10">
      <h1 className="text-3xl font-bold text-blue-600 mb-4">
        JavaScript <span className="text-green-600">Nullish Coalescing Operator (??)</span>
      </h1>

      <p className="text-gray-700 mb-6">
        The **Nullish Coalescing Operator (??)** returns the *right-hand side value* if the left-hand side is <code>null</code> or <code>undefined</code>. 
        It is useful for providing *default values* when a variable might be null or undefined.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mb-2">Syntax</h2>
      <div className="bg-gray-100 p-4 rounded mb-4 overflow-x-auto">
        <code className="text-green-600">
          {`let result = value ?? defaultValue;`}
        </code>
      </div>

      <h2 className="text-2xl font-semibold text-gray-800 mb-2">Example 1: Basic Usage</h2>
      <div className="bg-gray-100 p-4 rounded mb-4 overflow-x-auto">
        <code className="text-green-600">
          {`let name = null;
let defaultName = "Guest";

let displayName = name ?? defaultName;
console.log(displayName); // Output: Guest`}
        </code>
      </div>

      <h2 className="text-2xl font-semibold text-gray-800 mb-2">Example 2: With Undefined</h2>
      <div className="bg-gray-100 p-4 rounded mb-4 overflow-x-auto">
        <code className="text-green-600">
          {`let age;
let defaultAge = 18;

let userAge = age ?? defaultAge;
console.log(userAge); // Output: 18`}
        </code>
      </div>

      <h2 className="text-2xl font-semibold text-gray-800 mb-2">Example 3: Difference from OR (||) Operator</h2>
      <div className="bg-gray-100 p-4 rounded mb-4 overflow-x-auto">
        <code className="text-green-600">
          {`let score = 0;

console.log(score || 10); // Output: 10  (0 is falsy)
console.log(score ?? 10); // Output: 0   (0 is not null/undefined)`}
        </code>
      </div>

      <p className="text-gray-700">
        The Nullish Coalescing Operator is useful when you want to provide a *default value* only for <code>null</code> or <code>undefined</code>, 
        and not for other falsy values like 0, false, or an empty string.
      </p>
    </div>
  );
};

export default JSNullishOperator;