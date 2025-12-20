import React from "react";

const JSSpread = () => {
  return (
    <div className="max-w-4xl p-6">
      <h1 className="text-3xl font-medium text-blue-500 mb-4">JavaScript Spread Operator</h1>
      
      <p className="mb-6">
        The <span className="text-red-400">spread operator (...)</span> allows you to expand iterable objects like arrays or strings into individual elements. 
        It is commonly used to copy arrays, merge arrays, or pass multiple arguments in functions.
      </p>

      <h1 className="text-xl mt-10">Example</h1>
      <p className="leading-relaxed mt-3">Arrays can be joined together using the spread (...) operator.</p>
      <pre className="text-green-400 bg-gray-900 p-4 rounded-lg mt-5">
        {`const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [...arr1, ...arr2];`}
      </pre>

      <h1 className="text-2xl mt-10">Definition</h1>
      <p className="leading-relaxed mt-3">Using the spread operator (...), you can unpack an iterable into separate values.</p>

      <h1 className="text-2xl mt-5">Example</h1>
      <p className="leading-relaxed mt-3">The spread operator (...) can be used to pass array elements as individual arguments to a function.</p>
      <pre className="text-green-400 bg-gray-900 p-4 rounded-lg mt-5">
        {`const numbers = [23,55,21,87,56];
let minValue = Math.min(...numbers);
let maxValue = Math.max(...numbers);`}
      </pre>

      <h1 className="text-2xl mt-10">Example</h1>
      <p className="leading-relaxed mt-3">You can use the spread syntax (...) to create a shallow copy of an array.</p>
      <pre className="text-green-400 bg-gray-900 p-4 rounded-lg mt-5">
        {`const arr1 = [1, 2, 3];
const arr2 = [...arr1];`}
      </pre>

      <h1 className="text-2xl mt-10">Browser Support</h1>
      <p className="leading-relaxed mt-3">... is an ECMAScript6 (ES6 2015) feature.</p>
      <p className="leading-relaxed mt-3">JavaScript 2015 is supported in all browsers since June 2017:</p>
     
         </div>
  );
};

export default JSSpread;