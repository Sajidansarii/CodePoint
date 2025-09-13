import React from "react";

const JSScope = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow mt-10">
      <h1 className="text-3xl font-medium text-blue-500 mb-4">JavaScript <span className="text-green-600">Scopes</span></h1>
      
      <p className="text-gray-700 mb-6">
        In JavaScript, a *scope* determines the accessibility of variables, functions, and objects. 
        There are mainly three types of scopes: *Global Scope, **Function Scope, and **Block Scope*.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mb-2">Example 1: Global Scope</h2>
      <div className="bg-gray-100 p-4 rounded mb-4 overflow-x-auto">
        <code className="text-green-600">
          {`// Global Scope
let globalVar = "I am global";

function showGlobal() {
  console.log(globalVar); // Accessible inside the function
}

showGlobal();
console.log(globalVar); // Accessible outside the function too`}
        </code>
      </div>
      <p className="text-gray-700 mb-6">
        Variables declared outside any function or block have *global scope* and can be accessed anywhere in the code.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mb-2">Example 2: Function Scope</h2>
      <div className="bg-gray-100 p-4 rounded mb-4 overflow-x-auto">
        <code className="text-green-600">
          {`function greet() {
  let message = "Hello!";
  console.log(message); // Accessible inside the function
}

greet();
// console.log(message); // ❌ Error: message is not defined outside the function`}
        </code>
      </div>
      <p className="text-gray-700 mb-6">
        Variables declared inside a function are *function-scoped* and cannot be accessed outside the function.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mb-2">Example 3: Block Scope</h2>
      <div className="bg-gray-100 p-4 rounded mb-4 overflow-x-auto">
        <code className="text-green-600">
          {`if (true) {
  let blockVar = "I am block scoped";
  console.log(blockVar); // Accessible inside the block
}
// console.log(blockVar); // ❌ Error: blockVar is not defined outside the block`}
        </code>
      </div>
      <p className="text-gray-700">
        Variables declared with <span className="font-semibold">let</span> or <span className="font-semibold">const</span> inside a block have *block scope* and cannot be accessed outside that block.
      </p>
    </div>
  );
};

export default JSScope;