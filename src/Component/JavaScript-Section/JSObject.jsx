import React, { useState } from "react";

const JSOOPObject = () => {
  const [output, setOutput] = useState("");

  // ✅ Class Example
  class Car {
    constructor(brand, model) {
      this.brand = brand;
      this.model = model;
    }

    details() {
      return ` Car: ${this.brand} ${this.model}`;
    }
  }

  // ✅ Creating Objects
  const handleShowObjects = () => {
    const car1 = new Car("Tesla", "Model S");
    const car2 = new Car("BMW", "X5");

    setOutput(`${car1.details()} \n${car2.details()}`);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-lg mt-10 space-y-6">
      <h1 className="text-3xl font-medium text-blue-500">
        Objects in OOP with <span className="text-green-600">JavaScript</span>
      </h1>

      <p className="text-gray-700">
        An <strong>object</strong> in JavaScript is an instance of a{" "}
        <code>class</code>. It holds <strong>properties</strong> (data) and{" "}
        <strong>methods</strong> (functions). Objects are the core of
        Object-Oriented Programming.
      </p>

      <button
        onClick={handleShowObjects}
        className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
      >
        Show Objects Example
      </button>

      <div className="p-4 bg-gray-100 rounded-md whitespace-pre-line">
        <p className="font-semibold text-gray-800">{output}</p>
      </div>

      <h2 className="text-2xl font-semibold text-gray-800">Code Example:</h2>
      <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto">
{`class Car {
  constructor(brand, model) {
    this.brand = brand;
    this.model = model;
  }

  details() {
    return \🚗 Car: \${this.brand} \${this.model}\;
  }
}

// ✅ Creating objects
const car1 = new Car("Tesla", "Model S");
const car2 = new Car("BMW", "X5");

console.log(car1.details()); // 🚗 Car: Tesla Model S
console.log(car2.details()); // 🚗 Car: BMW X5`}
      </pre>

      <h2 className="text-2xl font-semibold text-gray-800">Explanation:</h2>
      <ul className="list-disc list-inside space-y-2 text-gray-700">
        <li>
          <code>class Car</code> is a blueprint for creating objects.
        </li>
        <li>
          <code>new Car("Tesla", "Model S")</code> creates an{" "}
          <strong>object</strong> with its own properties and methods.
        </li>
        <li>
          <code>car1</code> and <code>car2</code> are two different objects
          created from the same class.
        </li>
        <li>
          Each object has its own <strong>state</strong> (brand, model) but
          shares the same <strong>behavior</strong> (details method).
        </li>
      </ul>
    </div>
  );
};

export default JSOOPObject;