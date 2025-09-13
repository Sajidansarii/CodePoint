import React, { useState } from "react";

const JSPrototype = () => {
  const [output, setOutput] = useState("");

  // ✅ Constructor Function Example
  function Person(name) {
    this.name = name;
  }

  // ✅ Adding method using prototype
  Person.prototype.greet = function () {
    return `Hello, my name is ${this.name}`;
  };

  // ✅ Demo function
  const handlePrototypeExample = () => {
    const john = new Person("John");
    const emma = new Person("Emma");

    setOutput(`${john.greet()}\n${emma.greet()}`);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-lg mt-10 space-y-6">
      <h1 className="text-3xl font-medium text-blue-500">
        Prototype in <span className="text-green-600">JavaScript</span>
      </h1>

      <p className="text-gray-700">
        In JavaScript, every function has a <strong>prototype object</strong>.
        Objects created from that function (using{" "}
        <code className="bg-gray-200 px-1 rounded">new</code>) inherit methods
        and properties from the function’s prototype. This is the foundation of{" "}
        <strong>Object-Oriented Programming (OOP)</strong> in JavaScript.
      </p>

      <button
        onClick={handlePrototypeExample}
        className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
      >
        Show Prototype Example
      </button>

      <div className="p-4 bg-gray-100 rounded-md whitespace-pre-line">
        <p className="font-semibold text-gray-800">{output}</p>
      </div>

      <h2 className="text-2xl font-semibold text-gray-800">Code Example:</h2>
      <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto">
{`// ✅ Constructor function
function Person(name) {
  this.name = name;
}

// ✅ Adding method using prototype
Person.prototype.greet = function () {
  return \Hello, my name is \${this.name}\;
};

// ✅ Create objects
const john = new Person("John");
const emma = new Person("Emma");

console.log(john.greet()); // Hello, my name is John
console.log(emma.greet()); // Hello, my name is Emma`}
      </pre>

      <h2 className="text-2xl font-semibold text-gray-800">Explanation:</h2>
      <ul className="list-disc list-inside space-y-2 text-gray-700">
        <li>
          A <strong>constructor function</strong> (<code>Person</code>) creates
          new objects.
        </li>
        <li>
          The <code>prototype</code> property lets us define shared methods
          (e.g., <code>greet()</code>).
        </li>
        <li>
          All objects created with <code>new Person()</code> share the same{" "}
          <code>prototype</code>, saving memory.
        </li>
        <li>
          This is the foundation of inheritance in{" "}
          <strong>JavaScript OOP</strong>.
        </li>
      </ul>
    </div>
  );
};

export default JSPrototype;