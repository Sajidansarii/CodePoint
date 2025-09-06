import React, { useState } from "react";

const JSAbstraction = () => {
  const [output, setOutput] = useState("");

  //  Abstract-like class (cannot enforce abstract in JS, but conceptually)
  class Vehicle {
    constructor(name) {
      if (this.constructor === Vehicle) {
        throw new Error("Cannot instantiate abstract class Vehicle directly");
      }
      this.name = name;
    }

    startEngine() {
      throw new Error("Method 'startEngine()' must be implemented");
    }
  }

  //  Subclass implements the abstract method
  class Car extends Vehicle {
    startEngine() {
      return `${this.name} engine started `;
    }
  }

  class Bike extends Vehicle {
    startEngine() {
      return `${this.name} engine started`;
    }
  }

  const handleExample = () => {
    const car = new Car("Honda Civic");
    const bike = new Bike("Yamaha R15");

    setOutput(`${car.startEngine()}\n${bike.startEngine()}`);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-lg mt-10 space-y-6">
      <h1 className="text-3xl font-bold text-blue-600">
        Abstraction in <span className="text-green-600">JavaScript OOP</span>
      </h1>

      <p className="text-gray-700">
        <strong>Abstraction</strong> is the concept of hiding unnecessary
        details from the user and exposing only the essential functionality.
        In JavaScript, we can achieve this by using classes and methods, sometimes
        combined with <code className="bg-gray-200 px-1 rounded">private fields</code>.
      </p>

      <button
        onClick={handleExample}
        className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
      >
        Run Abstraction Example
      </button>

      <div className="p-4 bg-gray-100 rounded-md whitespace-pre-line">
        <p className="font-semibold text-gray-800">{output}</p>
      </div>

      <h2 className="text-2xl font-semibold text-gray-800">Code Example:</h2>
      <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto">
        <code>
{`class Vehicle {
  constructor(name) {
    if (this.constructor === Vehicle) {
      throw new Error("Cannot instantiate abstract class Vehicle directly");
    }
    this.name = name;
  }

  startEngine() {
    throw new Error("Method 'startEngine()' must be implemented");
  }
}

class Car extends Vehicle {
  startEngine() {
    return this.name + engine started ;
  }
}

class Bike extends Vehicle {
  startEngine() {
    return this.name + engine started;
  }
}

const car = new Car("Honda Civic");
const bike = new Bike("Yamaha R15");

console.log(car.startEngine()); // Honda Civic engine started
console.log(bike.startEngine()); // Yamaha R15 engine started`}
</code>
</pre>

      <h2 className="text-2xl font-semibold text-gray-800">Explanation:</h2>
      <ul className="list-disc list-inside space-y-2 text-gray-700">
        <li>
          <strong>Vehicle</strong> acts like an abstract class (cannot be
          instantiated directly).
        </li>
        <li>
          The <code>startEngine()</code> method is defined but not implemented
          in the abstract class.
        </li>
        <li>
          Subclasses <strong>Car</strong> and <strong>Bike</strong> implement
          the abstract method, exposing only essential behavior to the user.
        </li>
        <li>
          Users don’t need to know the internal details of how each engine
          starts, only that they can call <code>startEngine()</code>.
        </li>
      </ul>
    </div>
  );
};

export default JSAbstraction;