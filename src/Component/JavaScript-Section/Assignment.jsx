import React from "react";

const JSAssignmentOperators = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow mt-10">
      <h1 className="text-3xl font-bold text-blue-600 mb-4">JavaScript <span className="text-green-600">Assignment Operators</span></h1>
      
      <p className="text-gray-700 mb-6">
        *Assignment operators* are used to *assign values to variables*. 
        They can also combine *arithmetic operations with assignment*.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mb-2">Common Assignment Operators</h2>
      <ul className="list-disc list-inside text-gray-700 mb-4">
        <li><strong>=</strong> : Assigns a value to a variable</li>
        <li><strong>+=</strong> : Adds and assigns the result to the variable</li>
        <li><strong>-=</strong> : Subtracts and assigns the result to the variable</li>
        <li><strong>*=</strong> : Multiplies and assigns the result to the variable</li>
        <li><strong>/=</strong> : Divides and assigns the result to the variable</li>
        <li><strong>%=</strong> : Modulus and assigns the remainder to the variable</li>
      </ul>

      <h2 className="text-2xl font-semibold text-gray-800 mb-2">Example: Basic Assignment</h2>
      <div className="bg-gray-100 p-4 rounded mb-4 overflow-x-auto">
        <code className="text-green-600">
          {`let x = 10;  // Assign 10 to x
let y = 5;

x += y;  // x = x + y => 15
console.log(x); // Output: 15

x -= y;  // x = x - y => 10
console.log(x); // Output: 10

x *= y;  // x = x * y => 50
console.log(x); // Output: 50

x /= y;  // x = x / y => 10
console.log(x); // Output: 10

x %= y;  // x = x % y => 0
console.log(x); // Output: 0`}
        </code>
      </div>

      <h2 className="text-2xl font-semibold text-gray-800 mb-2">Explanation</h2>
      <p className="text-gray-700 mb-4">
        Assignment operators help *update the value of a variable based on its current value*. 
        For example, <code>x += y</code> is shorthand for <code>x = x + y</code>, making your code more concise and readable.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mb-2">Practical Example</h2>
      <div className="bg-gray-100 p-4 rounded mb-4 overflow-x-auto">
        <code className="text-green-600">
          {`let score = 0;

// Player earns 10 points
score += 10;

// Player loses 3 points
score -= 3;

console.log("Player score:", score); // Output: Player score: 7`}
        </code>
      </div>
    </div>
  );
};

export default JSAssignmentOperators;