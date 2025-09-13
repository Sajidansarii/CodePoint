import React from "react";

const NumberAsObject = () => {
  /**
   * 🧠 Numbers in JavaScript can be used as both:
   * 1. Primitive values (e.g., const x = 10;)
   * 2. Number objects (e.g., const y = new Number(10);)
   * 
   * JavaScript automatically wraps primitive numbers with the Number object
   * when you access properties or methods like toFixed(), toString(), etc.
   */

  // ✅ Primitive number
  const primitiveNumber = 42;

  // ✅ Number object created using the Number constructor
  const objectNumber = new Number(42);

  // ✅ Type check using typeof
  const typeOfPrimitive = typeof primitiveNumber; // 'number'
  const typeOfObject = typeof objectNumber;       // 'object'

  // ✅ Using number methods (available on both primitive and object types)
  const fixed = primitiveNumber.toFixed(2);       // "42.00" → formats to 2 decimal places
  const exponential = primitiveNumber.toExponential(2); // "4.20e+1"
  const stringValue = objectNumber.toString();    // "42"

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-white rounded-lg shadow">
      <h1 className="text-3xl font-medium text-blue-500 mb-4">
        🔢 Number as an Object in JavaScript
      </h1>

      <p className="text-gray-700 mb-6">
        In JavaScript, numbers are usually primitive values. However, they can behave like
        objects because JavaScript temporarily wraps them with the built-in <code>Number</code>
        object when methods are called.
      </p>

      {/* Displaying the code explanation with examples */}
      <div className="bg-gray-50 rounded-md p-4 font-mono text-sm text-gray-800 space-y-4">

        {/* Primitive number */}
        <div>
          <span className="text-blue-600 font-semibold">// Primitive Number</span><br />
          <code>{`const primitiveNumber = 42;`}</code><br />
          <code>{`typeof primitiveNumber`}</code> → <span className="text-green-700">{typeOfPrimitive}</span>
        </div>

        {/* Number object */}
        <div>
          <span className="text-blue-600 font-semibold">// Number Object</span><br />
          <code>{`const objectNumber = new Number(42);`}</code><br />
          <code>{`typeof objectNumber`}</code> → <span className="text-green-700">{typeOfObject}</span>
        </div>

        {/* toFixed method */}
        <div>
          <span className="text-blue-600 font-semibold">// toFixed(2)</span><br />
          <code>{`primitiveNumber.toFixed(2)`}</code> → <span className="text-green-700">"{fixed}"</span><br />
          <span className="text-gray-500">// Formats the number with 2 decimal places</span>
        </div>

        {/* toExponential method */}
        <div>
          <span className="text-blue-600 font-semibold">// toExponential(2)</span><br />
          <code>{`primitiveNumber.toExponential(2)`}</code> → <span className="text-green-700">"{exponential}"</span><br />
          <span className="text-gray-500">// Converts to exponential notation</span>
        </div>

        {/* toString method */}
        <div>
          <span className="text-blue-600 font-semibold">// toString()</span><br />
          <code>{`objectNumber.toString()`}</code> → <span className="text-green-700">"{stringValue}"</span><br />
          <span className="text-gray-500">// Converts number to string</span>
        </div>
      </div>

      <p className="text-sm text-gray-500 mt-6 italic">
        ⚠️ While you can use <code>new Number()</code>, it's recommended to work with primitive numbers
        in most cases to avoid unexpected behavior during comparisons and type checks.
      </p>
    </div>
  );
};

export default NumberAsObject;
