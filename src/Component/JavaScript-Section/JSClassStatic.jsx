import React from "react";

const JSClassStatic = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow mt-10">
      <h1 className="text-3xl font-bold text-blue-600 mb-4">
        JavaScript <span className="text-green-600">Static Methods & Properties</span>
      </h1>

      <p className="text-gray-700 mb-6">
        *Static methods and properties* belong to the *class itself*, not to instances (objects) of the class. 
        They are used for utility functions, constants, or methods that don’t depend on instance data.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mb-2">Static Method Example</h2>
      <div className="bg-gray-100 p-4 rounded mb-4 overflow-x-auto">
        <pre className="text-green-600">
            <code>

{`class Calculator {
  static add(a, b) {
    return a + b;
    }
    
    static multiply(a, b) {
        return a * b;
        }
        }
        
        // Call static methods using the class name
        console.log(Calculator.add(5, 3));       // Output: 8
        console.log(Calculator.multiply(4, 2));  // Output: 8`}
        </code>
        </pre>
      </div>

      <h2 className="text-2xl font-semibold text-gray-800 mb-2">Static Property Example</h2>
      <div className="bg-gray-100 p-4 rounded mb-4 overflow-x-auto">
        <pre className="text-green-600">
{`class Circle {
  static pi = 3.14159;

  static area(radius) {
    return Circle.pi * radius * radius;
  }
}

console.log(Circle.pi);           // Output: 3.14159
console.log(Circle.area(5));      // Output: 78.53975`}
        </pre>
      </div>

      <h2 className="text-2xl font-semibold text-gray-800 mb-2">Key Points</h2>
      <ul className="list-disc list-inside text-gray-700 mb-4">
        <li>Static methods/properties are *accessed via the class*, not instances.</li>
        <li>They are commonly used for *utility functions, constants, or helper methods*.</li>
        <li>Trying to access static members from an instance will return <code>undefined</code>.</li>
      </ul>

      <p className="text-gray-700">
        Static members help organize code and make it easy to provide *class-level functionality* without creating unnecessary instances.
      </p>
    </div>
  );
};

export default JSClassStatic;