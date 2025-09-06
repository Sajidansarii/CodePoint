import React from "react";

const JSBoolean = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow mt-10">
      <h1 className="text-3xl font-bold text-blue-600 mb-4">JavaScript <span className="text-green-600">Boolean</span></h1>
      
      <p className="text-gray-700 mb-6">
        A *Boolean* in JavaScript is a *primitive data type* that represents one of two values: <span className="font-semibold">true</span> or <span className="font-semibold">false</span>. 
        Booleans are commonly used in *conditional statements* and *logical operations*.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mb-2">Creating Boolean Values</h2>
      <div className="bg-gray-100 p-4 rounded mb-4 overflow-x-auto">
        <code className="text-green-600">
          {`let isLoggedIn = true;
let hasPermission = false;

console.log(isLoggedIn);   // Output: true
console.log(hasPermission); // Output: false`}
        </code>
      </div>

      <h2 className="text-2xl font-semibold text-gray-800 mb-2">Using Boolean in Conditions</h2>
      <div className="bg-gray-100 p-4 rounded mb-4 overflow-x-auto">
        <code className="text-green-600">
          {`let isLoggedIn = true;

if (isLoggedIn) {
  console.log("Welcome back!");
} else {
  console.log("Please log in");
}

// Output: Welcome back!`}
        </code>
      </div>

      <h2 className="text-2xl font-semibold text-gray-800 mb-2">Boolean Conversion</h2>
      <div className="bg-gray-100 p-4 rounded mb-4 overflow-x-auto">
        <code className="text-green-600">
          {`console.log(Boolean(1)); // Output: true
console.log(Boolean(0)); // Output: false
console.log(Boolean("Hello")); // Output: true
console.log(Boolean("")); // Output: false`}
        </code>
      </div>

      <h2 className="text-2xl font-semibold text-gray-800 mb-2">Logical Operations</h2>
      <div className="bg-gray-100 p-4 rounded mb-4 overflow-x-auto">
        <code className="text-green-600">
          {`let a = true;
let b = false;

console.log(a && b); // Output: false (AND)
console.log(a || b); // Output: true  (OR)
console.log(!a);     // Output: false (NOT)`}
        </code>
      </div>

      <p className="text-gray-700">
        Booleans are fundamental for *decision-making* in JavaScript. They can be explicitly set or derived from expressions, and are essential for *control flow* and *logical operations*.
      </p>
    </div>
  );
};

export default JSBoolean;