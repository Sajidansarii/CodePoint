import React from "react";

const JSClassStatic = () => {
  return (
    <div className="max-w-4xl p-6">
      <h1 className="text-3xl font-medium text-blue-500 mb-4">
        JavaScript Static Methods & Properties
      </h1>

      <p className="text-gray-700 mb-6">
        <span className="text-red-400">Static</span> methods and properties belong to the class itself, not to instances (objects) of the class. 
        They are used for utility functions, constants, or methods that don’t depend on instance data.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mb-2">Static Method </h2>
      <pre className="bg-gray-900 text-green-400 p-4 rounded-lg mt-5 mb-5">
        <code>
{`
class Calculator {
  static add(a, b) {
    return a + b;
    }
    
    static multiply(a, b) {
        return a * b;
        }
        }
        
        // Call static methods using the class name
        console.log(Calculator.add(5, 3));       // Output: 8
        console.log(Calculator.multiply(4, 2));  // Output: 8
        `}
        </code>
      </pre>

      <p className="mt-5">If you need to access the myCar object inside a static method, you can pass it in as a parameter.</p>

      <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-5">Static Property Example</h2>
      <pre className="bg-gray-900 text-green-400 p-4 rounded-lg mb-5">
        <code>
{`class Circle {
  static pi = 3.14159;

  static area(radius) {
    return Circle.pi * radius * radius;
  }
}

console.log(Circle.pi);           // Output: 3.14159
console.log(Circle.area(5));      // Output: 78.53975`}
        </code>
      </pre>

      <ul className="list-disc list-inside text-gray-700 mb-4 mt-10">
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