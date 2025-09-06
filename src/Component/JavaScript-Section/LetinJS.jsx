import React from "react";

const JSLet = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow mt-10">
      <h1 className="text-3xl font-bold text-blue-600 mb-4">JavaScript <span className="text-green-600">let</span> Keyword</h1>
      
      <p className="text-gray-700 mb-6">
        In JavaScript, <span className="font-semibold">let</span> is used to declare a variable that is *block-scoped*, meaning it is accessible only within the block, statement, or expression where it is defined. 
        Unlike <span className="font-semibold">var</span>, it cannot be redeclared in the same scope.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mb-2">Example:</h2>
      <div className="bg-gray-100 p-4 rounded mb-4 overflow-x-auto">
        <code className="text-green-600">
          {`// Declaring a let variable
let age = 25;
console.log(age); // Output: 25

// Updating the value
age = 26;
console.log(age); // Output: 26

// Block scope example
if (true) {
  let city = "New York";
  console.log(city); // Output: New York
}
// console.log(city); // ❌ Error: city is not defined outside the block`}
        </code>
      </div>

      <p className="text-gray-700">
        <span className="font-semibold">Key points about let:</span>
        <ul className="list-disc list-inside mt-2">
          <li>Block-scoped, accessible only within the block it is declared.</li>
          <li>Can be updated but cannot be redeclared in the same scope.</li>
          <li>Preferred over <span className="font-semibold">var</span> for modern JavaScript due to safer scoping rules.</li>
        </ul>
      </p>
    </div>
  );
};

export default JSLet;