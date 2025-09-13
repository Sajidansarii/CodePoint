import React from "react";

const JSConditionalOperator = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow mt-10">
      <h1 className="text-3xl font-medium text-blue-500 mb-4">JavaScript <span className="text-green-600">Conditional (Ternary) Operator</span></h1>
      
      <p className="text-gray-700 mb-6">
        The *conditional operator* (also called the *ternary operator) is a **shorthand for the if-else statement*. 
        It evaluates a condition and returns a value based on whether the condition is true or false.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mb-2">Syntax</h2>
      <div className="bg-gray-100 p-4 rounded mb-4 overflow-x-auto">
        <code className="text-green-600">
          {`condition ? valueIfTrue : valueIfFalse`}
        </code>
      </div>

      <h2 className="text-2xl font-semibold text-gray-800 mb-2">Example 1: Basic Usage</h2>
      <div className="bg-gray-100 p-4 rounded mb-4 overflow-x-auto">
        <code className="text-green-600">
          {`let age = 20;
let status = (age >= 18) ? "Adult" : "Minor";

console.log(status); // Output: Adult`}
        </code>
      </div>

      <h2 className="text-2xl font-semibold text-gray-800 mb-2">Example 2: Using in a Function</h2>
      <div className="bg-gray-100 p-4 rounded mb-4 overflow-x-auto">
        <code className="text-green-600">
          {`function checkAccess(isLoggedIn) {
  return isLoggedIn ? "Access granted" : "Access denied";
}

console.log(checkAccess(true));  // Output: Access granted
console.log(checkAccess(false)); // Output: Access denied`}
        </code>
      </div>

      <h2 className="text-2xl font-semibold text-gray-800 mb-2">Example 3: Nested Ternary</h2>
      <div className="bg-gray-100 p-4 rounded mb-4 overflow-x-auto">
        <code className="text-green-600">
          {`let score = 85;
let grade = (score >= 90) ? "A" :
            (score >= 75) ? "B" :
            (score >= 50) ? "C" : "F";

console.log(grade); // Output: B`}
        </code>
      </div>

      <p className="text-gray-700">
        The conditional operator is *compact and readable* for simple conditional assignments. 
        However, for very complex logic, regular *if-else statements* are easier to understand.
      </p>
    </div>
  );
};

export default JSConditionalOperator;