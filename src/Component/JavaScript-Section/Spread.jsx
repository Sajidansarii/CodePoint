import React from "react";

const JSSpread = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow mt-10">
      <h1 className="text-3xl font-medium text-blue-500 mb-4">JavaScript <span className="text-green-600">Spread Operator</span></h1>
      
      <p className="text-gray-700 mb-6">
        The *spread operator (...)* allows you to *expand iterable objects* like arrays or strings into individual elements. 
        It is commonly used to *copy arrays, merge arrays, or pass multiple arguments* in functions.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mb-2">Example 1: Copying an Array</h2>
      <div className="bg-gray-100 p-4 rounded mb-4 overflow-x-auto">
        <code className="text-green-600">
          {`const originalArray = [1, 2, 3];
const copyArray = [...originalArray];

console.log(copyArray); // Output: [1, 2, 3]`}
        </code>
      </div>
      <p className="text-gray-700 mb-6">
        Using the spread operator, we create a *shallow copy* of the array. Changes to copyArray won’t affect originalArray.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mb-2">Example 2: Merging Arrays</h2>
      <div className="bg-gray-100 p-4 rounded mb-4 overflow-x-auto">
        <code className="text-green-600">
          {`const arr1 = [1, 2];
const arr2 = [3, 4];
const merged = [...arr1, ...arr2];

console.log(merged); // Output: [1, 2, 3, 4]`}
        </code>
      </div>
      <p className="text-gray-700 mb-6">
        The spread operator helps merge multiple arrays into a single array without modifying the original arrays.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mb-2">Example 3: Passing Arguments</h2>
      <div className="bg-gray-100 p-4 rounded mb-4 overflow-x-auto">
        <code className="text-green-600">
          {`function sum(a, b, c) {
  return a + b + c;
}

const numbers = [1, 2, 3];
console.log(sum(...numbers)); // Output: 6`}
        </code>
      </div>
      <p className="text-gray-700">
        You can use the spread operator to *pass elements of an array as individual function arguments*.
      </p>
    </div>
  );
};

export default JSSpread;