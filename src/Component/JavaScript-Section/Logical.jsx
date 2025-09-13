import React from "react";

const JSLogicalOperators = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow mt-10">
      <h1 className="text-3xl font-medium text-blue-500 mb-4">JavaScript <span className="text-green-600">Logical Operators</span></h1>
      
      <p className="text-gray-700 mb-6">
        *Logical operators* are used to combine or invert *Boolean values. They are commonly used in **conditional statements* to make complex decisions.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mb-2">Common Logical Operators</h2>
      <ul className="list-disc list-inside text-gray-700 mb-4">
        <li><strong>&&</strong> : Logical AND – returns true if both operands are true</li>
        <li><strong>||</strong> : Logical OR – returns true if at least one operand is true</li>
        <li><strong>!</strong> : Logical NOT – inverts the Boolean value</li>
      </ul>

      <h2 className="text-2xl font-semibold text-gray-800 mb-2">Example: Logical AND (&&)</h2>
      <div className="bg-gray-100 p-4 rounded mb-4 overflow-x-auto">
        <code className="text-green-600">
          {`let a = true;
let b = false;

console.log(a && b); // Output: false
console.log(a && true); // Output: true`}
        </code>
      </div>

      <h2 className="text-2xl font-semibold text-gray-800 mb-2">Example: Logical OR (||)</h2>
      <div className="bg-gray-100 p-4 rounded mb-4 overflow-x-auto">
        <code className="text-green-600">
          {`let a = true;
let b = false;

console.log(a || b); // Output: true
console.log(false || false); // Output: false`}
        </code>
      </div>

      <h2 className="text-2xl font-semibold text-gray-800 mb-2">Example: Logical NOT (!)</h2>
      <div className="bg-gray-100 p-4 rounded mb-4 overflow-x-auto">
        <code className="text-green-600">
          {`let a = true;

console.log(!a); // Output: false
console.log(!false); // Output: true`}
        </code>
      </div>

      <h2 className="text-2xl font-semibold text-gray-800 mb-2">Practical Example</h2>
      <div className="bg-gray-100 p-4 rounded mb-4 overflow-x-auto">
        <code className="text-green-600">
          {`let isLoggedIn = true;
let hasSubscription = false;

if (isLoggedIn && hasSubscription) {
  console.log("Access granted to premium content");
} else if (isLoggedIn || hasSubscription) {
  console.log("Access granted to limited content");
} else {
  console.log("Access denied");
}

// Output: Access granted to limited content`}
        </code>
      </div>

      <p className="text-gray-700">
        Logical operators help *combine multiple conditions* in JavaScript, making your code more *efficient and readable*.
      </p>
    </div>
  );
};

export default JSLogicalOperators;