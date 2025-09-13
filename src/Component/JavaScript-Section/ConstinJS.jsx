import React from "react";

const JSConst = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow mt-10">
      <h1 className="text-3xl font-medium text-blue-500 mb-4">JavaScript <span className="text-green-600">const</span> Keyword</h1>
      
      <p className="text-gray-700 mb-6">
        In JavaScript, <span className="font-semibold">const</span> is used to declare variables that are *block-scoped* and *cannot be reassigned* after their initial value is set. 
        This makes <span className="font-semibold">const</span> ideal for defining constants or values that should not change.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mb-2">Example:</h2>
      <div className="bg-gray-100 p-4 rounded mb-4 overflow-x-auto">
        <code className="text-green-600">
          {`// Declaring a const variable
const country = "India";
console.log(country); // Output: India

// Trying to reassign
// country = "USA"; // ❌ Error: Assignment to constant variable

// Block scope example
if (true) {
  const city = "New York";
  console.log(city); // Output: New York
}
// console.log(city); // ❌ Error: city is not defined outside the block`}
        </code>
      </div>

      <p className="text-gray-700">
        <span className="font-semibold">Key points about const:</span>
        <ul className="list-disc list-inside mt-2">
          <li>Block-scoped, accessible only within the block it is declared.</li>
          <li>Cannot be reassigned after initial declaration.</li>
          <li>Perfect for constants and values that should remain unchanged.</li>
          <li>Cannot be redeclared in the same scope, like <span className="font-semibold">let</span>.</li>
        </ul>
      </p>
    </div>
  );
};

export default JSConst;