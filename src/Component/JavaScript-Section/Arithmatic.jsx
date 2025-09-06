import React from "react";

const JSArithmeticOperators = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow mt-10">
      <h1 className="text-3xl font-bold text-blue-600 mb-4">JavaScript <span className="text-green-600">Arithmetic Operators</span></h1>
      
      <p className="text-gray-700 mb-6">
        *Arithmetic operators* are used to perform *mathematical operations* on numbers in JavaScript. They include addition, subtraction, multiplication, division, modulus, and exponentiation.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mb-2">Common Arithmetic Operators</h2>
      <ul className="list-disc list-inside text-gray-700 mb-4">
        <li><strong>+</strong> : Addition</li>
        <li><strong>-</strong> : Subtraction</li>
        <li><strong>*</strong> : Multiplication</li>
        <li><strong>/</strong> : Division</li>
        <li><strong>%</strong> : Modulus (remainder)</li>
        <li><strong></strong> : Exponentiation</li>
      </ul>

      <h2 className="text-2xl font-semibold text-gray-800 mb-2">Example: Basic Arithmetic Operations</h2>
      <div className="bg-gray-100 p-4 rounded mb-4 overflow-x-auto">
        <code className="text-green-600">
          {`let a = 10;
let b = 3;

console.log(a + b); // Output: 13
console.log(a - b); // Output: 7
console.log(a * b); // Output: 30
console.log(a / b); // Output: 3.3333333333333335
console.log(a % b); // Output: 1
console.log(a ** b); // Output: 1000 (10 to the power of 3)`}
        </code>
      </div>

      <h2 className="text-2xl font-semibold text-gray-800 mb-2">Example: Using Arithmetic in a Function</h2>
      <div className="bg-gray-100 p-4 rounded mb-4 overflow-x-auto">
        <code className="text-green-600">
          {`function calculate(a, b) {
  return {
    sum: a + b,
    difference: a - b,
    product: a * b,
    quotient: a / b,
    remainder: a % b,
    power: a ** b
  };
}

console.log(calculate(5, 2));
// Output:
// {
//   sum: 7,
//   difference: 3,
//   product: 10,
//   quotient: 2.5,
//   remainder: 1,
//   power: 25
// }`}
        </code>
      </div>

      <p className="text-gray-700">
        Arithmetic operators are essential for *calculations, algorithms, and numeric data manipulation* in JavaScript. They can be used directly on variables, literals, or inside functions.
      </p>
    </div>
  );
};

export default JSArithmeticOperators;