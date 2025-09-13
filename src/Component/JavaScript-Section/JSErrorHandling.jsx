import React, { useState } from "react";

const JSErrorObjects = () => {
  const [error, setError] = useState("");

  const triggerReferenceError = () => {
    try {
      // Using an undefined variable
      console.log(myUndefinedVar);
    } catch (err) {
      setError(`${err.name}: ${err.message}`);
    }
  };

  const triggerTypeError = () => {
    try {
      // Trying to call a number like a function
      const num = 42;
      num();
    } catch (err) {
      setError(`${err.name}: ${err.message}`);
    }
  };

  const triggerRangeError = () => {
    try {
      // Invalid array length
      const arr = new Array(-5);
    } catch (err) {
      setError(`${err.name}: ${err.message}`);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow mt-10 space-y-6">
      <h1 className="text-3xl font-medium text-blue-500">
        JavaScript <span className="text-green-600">Built-in Error Objects</span>
      </h1>

      <p className="text-gray-700 mb-4">
        JavaScript provides several built-in error types such as 
        <code> ReferenceError</code>, <code>TypeError</code>, and <code>RangeError</code>.
        These help identify what kind of mistake happened in the code.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800">Examples:</h2>
      <div className="flex flex-wrap gap-4">
        <button
          onClick={triggerReferenceError}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Trigger ReferenceError
        </button>

        <button
          onClick={triggerTypeError}
          className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600"
        >
          Trigger TypeError
        </button>

        <button
          onClick={triggerRangeError}
          className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600"
        >
          Trigger RangeError
        </button>
      </div>

      {error && (
        <div className="bg-gray-100 p-4 rounded mt-4">
          <p className="text-red-600 font-semibold">⚠ Error: {error}</p>
        </div>
      )}

      <h2 className="text-2xl font-semibold text-gray-800">Explanation</h2>
      <ul className="list-disc list-inside text-gray-700 space-y-2">
        <li>
          <strong>ReferenceError:</strong> Occurs when trying to use a variable that has not been declared.
        </li>
        <li>
          <strong>TypeError:</strong> Occurs when a value is used in an invalid way, like calling a non-function.
        </li>
        <li>
          <strong>RangeError:</strong> Occurs when a value is outside the allowed range, like negative array lengths.
        </li>
      </ul>

      <p className="text-gray-700">
        Handling these specific errors helps in debugging and writing safer, more reliable applications.
      </p>
    </div>
  );
};

export default JSErrorObjects;