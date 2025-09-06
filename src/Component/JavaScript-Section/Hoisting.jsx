import React from "react";

const JSHoisting = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow mt-10">
      <h1 className="text-3xl font-bold text-blue-600 mb-4">JavaScript <span className="text-green-600">Hoisting</span></h1>
      
      <p className="text-gray-700 mb-6">
        *Hoisting* is a JavaScript behavior where *variable and function declarations are moved to the top of their scope* during the compilation phase. 
        This means you can use variables and functions before they are declared, but with some important differences depending on how you declare them.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mb-2">Example 1: Hoisting with var</h2>
      <div className="bg-gray-100 p-4 rounded mb-4 overflow-x-auto">
        <code className="text-green-600">
          {`console.log(a); // Output: undefined
var a = 5;
console.log(a); // Output: 5`}
        </code>
      </div>
      <p className="text-gray-700 mb-6">
        Variables declared with <span className="font-semibold">var</span> are hoisted *but initialized with undefined*, so you can access them before declaration, but their value is undefined.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mb-2">Example 2: Hoisting with let and const</h2>
      <div className="bg-gray-100 p-4 rounded mb-4 overflow-x-auto">
        <code className="text-green-600">
          {`console.log(b); // ❌ ReferenceError: Cannot access 'b' before initialization
let b = 10;

console.log(c); // ❌ ReferenceError: Cannot access 'c' before initialization
const c = 15;`}
        </code>
      </div>
      <p className="text-gray-700 mb-6">
        Variables declared with <span className="font-semibold">let</span> or <span className="font-semibold">const</span> are hoisted *but remain in a "temporal dead zone"* until their declaration is evaluated, so you cannot access them before the declaration.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mb-2">Example 3: Hoisting with Functions</h2>
      <div className="bg-gray-100 p-4 rounded mb-4 overflow-x-auto">
        <code className="text-green-600">
          {`// Function declaration
greet(); // Output: Hello!

function greet() {
  console.log("Hello!");
}

// Function expression
sayHi(); // ❌ TypeError: sayHi is not a function
var sayHi = function() {
  console.log("Hi!");
}`}
        </code>
      </div>
      <p className="text-gray-700">
        Function declarations are fully hoisted, so you can call them before they are defined. 
        Function expressions assigned to <span className="font-semibold">var</span> are hoisted as variables with value undefined, so calling them before assignment causes an error.
      </p>
    </div>
  );
};

export default JSHoisting;