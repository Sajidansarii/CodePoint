import React, { useState } from "react";

const JSStaticMethod = () => {
  const [output, setOutput] = useState("");

  // ✅ Class with a static method
  class Calculator {
    static add(a, b) {
      return a + b;
    }

    static multiply(a, b) {
      return a * b;
    }
  }

  const handleExample = () => {
    // Using static methods directly with class name (no object needed)
    const sum = Calculator.add(5, 10);
    const product = Calculator.multiply(4, 6);

    setOutput(`Sum: ${sum}\nProduct: ${product}`);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-lg mt-10 space-y-6">
      <h1 className="text-3xl font-medium text-blue-500">
        Static Methods in <span className="text-green-600">JavaScript</span>
      </h1>

      <p className="text-gray-700">
        A <strong>static method</strong> is defined in a class using the{" "}
        <code className="bg-gray-200 px-1 rounded">static</code> keyword. Unlike
        regular methods, <strong>static methods belong to the class itself</strong> 
        and are <strong>not accessible by class instances</strong>.
      </p>

      <button
        onClick={handleExample}
        className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
      >
        Run Static Method Example
      </button>

      <div className="p-4 bg-gray-100 rounded-md whitespace-pre-line">
        <p className="font-semibold text-gray-800">{output}</p>
      </div>

      <h2 className="text-2xl font-semibold text-gray-800">Code Example:</h2>
      <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto">
{`class Calculator {
  static add(a, b) {
    return a + b;
  }

  static multiply(a, b) {
    return a * b;
  }
}

// ✅ Call static methods using class name
console.log(Calculator.add(5, 10));     // 15
console.log(Calculator.multiply(4, 6)); // 24

// ❌ Not allowed: instance cannot call static methods
const calc = new Calculator();
console.log(calc.add(5, 10)); // Error`}
      </pre>

      <h2 className="text-2xl font-semibold text-gray-800">Explanation:</h2>
      <ul className="list-disc list-inside space-y-2 text-gray-700">
        <li>
          Static methods are defined with the{" "}
          <code className="bg-gray-200 px-1 rounded">static</code> keyword.
        </li>
        <li>
          They are called on the <strong>class itself</strong>, not on objects
          created from the class.
        </li>
        <li>
          Useful for utility functions (e.g., math operations, conversions).
        </li>
        <li>
          Attempting to call a static method on an object instance will throw an
          error.
        </li>
      </ul>
    </div>
  );
};

export default JSStaticMethod;