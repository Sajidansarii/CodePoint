import React from "react";

const JSBoolean = () => {
  return (
    <div className="max-w-4xl p-6">
      <h1 className="text-3xl font-medium text-blue-500 mb-4">JavaScript Boolean</h1>
      
      <p className="text-gray-700 mb-6">
        A <span className="text-red-400">Boolean</span> in JavaScript is a *primitive data type* that represents one of two values: <span className="font-semibold">true</span> or <span className="font-semibold">false</span>. 
        Booleans are commonly used in conditional statements and logical operations.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mb-2">Creating Boolean Values</h2>
      <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto mb-5 mt-5">
        <code>
          {`
let isLoggedIn = true;
let hasPermission = false;

console.log(isLoggedIn);   // Output: true
console.log(hasPermission); // Output: false
`}
        </code>
      </pre>

      <h2 className="text-2xl font-semibold text-gray-800 mb-2">Using Boolean in Conditions</h2>
      <pre className="bg-gray-900 text-green-400 p-4 rounded-lg mb-5 mt-5">
        <code>
          {`
let isLoggedIn = true;

if (isLoggedIn) {
  console.log("Welcome back!");
} else {
  console.log("Please log in");
}

// Output: Welcome back!
`}
        </code>
      </pre>

      <h2 className="text-2xl font-semibold text-gray-800 mb-5">Boolean Conversion</h2>
      <pre className="bg-gray-900 text-green-400 p-4 overflow-x-auto rounded-lg mb-5 mt-5">
        <code>
          {`
console.log(Boolean(1)); // Output: true
console.log(Boolean(0)); // Output: false
console.log(Boolean("Hello")); // Output: true
console.log(Boolean("")); // Output: false

`}
        </code>
      </pre>

      <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-2">Logical Operations</h2>
      <div className="bg-gray-900 text-green-400 p-4 rounded-lg mb-5 mt-5">
        <code>
          {`
let a = true;
let b = false;

console.log(a && b); // Output: false (AND)
console.log(a || b); // Output: true  (OR)
console.log(!a);     // Output: false (NOT)
`}
        </code>
      </div>

      <p className="text-gray-700">
        Booleans are fundamental for *decision-making* in JavaScript. They can be explicitly set or derived from expressions, and are essential for *control flow* and *logical operations*.
      </p>
    </div>
  );
};

export default JSBoolean;