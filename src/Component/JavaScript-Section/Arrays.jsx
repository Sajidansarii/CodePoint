import React from "react";

const ArrayExample = () => {
  /**
   * 🧠 What is an Array?
   *
   * An array is a data structure in JavaScript that allows you to store
   * multiple values in a single variable.
   * Each value in the array is called an "element", and arrays maintain
   * the order of their elements.
   */

  // ✅ Example: Creating an array of strings
  const colors = ["Red", "Green", "Blue", "Yellow"];

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white rounded-lg shadow">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">
        🧠 Understanding Arrays in JavaScript
      </h1>

      {/* Explanation of arrays */}
      <p className="text-gray-700 mb-4">
        In JavaScript, an <strong>array</strong> is used to store multiple values
        in a single variable. It's one of the most commonly used data structures.
      </p>

      {/* Code example of an array */}
      <div className="bg-gray-100 rounded-md p-4 mb-4 text-sm font-mono text-gray-800">
        <pre>
{`// This is a simple array of color names
const colors = ["Red", "Green", "Blue", "Yellow"];`}
        </pre>
      </div>

      {/* Display the array elements */}
      <h2 className="text-xl font-semibold text-gray-800 mb-2">🎨 List of Colors</h2>
      <ul className="list-disc list-inside space-y-1 text-gray-700">
        {/* Using .map() to loop through each element of the array */}
        {colors.map((color, index) => (
          <li key={index}>
            {/* color is each element in the array during this iteration */}
            {color}
          </li>
        ))}
      </ul>

      {/* Extra note */}
      <p className="mt-6 text-sm text-gray-500 italic">
        Arrays can hold any type of data — strings, numbers, objects, or even other arrays.
      </p>
    </div>
  );
};

export default ArrayExample;
