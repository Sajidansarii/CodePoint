import React from "react";

const JSVar = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow mt-10">
      <h1 className="text-3xl font-bold text-blue-600 mb-4">JavaScript <span className="text-green-600">var</span> Keyword</h1>
      
      <p className="text-gray-700 mb-6">
        In JavaScript, <span className="font-semibold">var</span> is used to declare a variable. 
        Variables declared with <span className="font-semibold">var</span> are *function-scoped*, meaning they are accessible within the function they are declared in. 
        If declared outside a function, they become *global*.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mb-2">Example:</h2>
      <div className="bg-gray-100 p-4 rounded mb-4 overflow-x-auto">
        <code className="text-green-600">
          {`// Declaring a var variable
var message = "Hello, CodePoint!";
console.log(message); // Output: Hello, CodePoint!

// Reassigning var
message = "Welcome!";
console.log(message); // Output: Welcome!

// Function scope example
function greet() {
  var greeting = "Hi!";
  console.log(greeting); // Output: Hi!
}
// console.log(greeting); // ❌ Error: greeting is not defined outside the function`}
        </code>
      </div>

      <p className="text-gray-700">
        <span className="font-semibold">Key points about var:</span>
        <ul className="list-disc list-inside mt-2">
          <li>Function-scoped, not block-scoped.</li>
          <li>Can be redeclared and updated.</li>
          <li>Less preferred in modern JavaScript due to scoping issues; <span className="font-semibold">let</span> and <span className="font-semibold">const</span> are recommended.</li>
        </ul>
      </p>
    </div>
  );
};

export default JSVar;