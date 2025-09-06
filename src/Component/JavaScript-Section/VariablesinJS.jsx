import React from "react";

const JSVariables = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow mt-10">
      <h1 className="text-3xl font-bold text-blue-600 mb-4">JavaScript Variables</h1>
      <p className="text-gray-700 mb-6">
        In JavaScript, variables are used to store data that can be referenced and manipulated later in your code. 
        You can declare variables using <span className="font-semibold">var</span>, <span className="font-semibold">let</span>, or <span className="font-semibold">const</span>.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mb-2">Example:</h2>
      <div className="bg-gray-100 p-4 rounded mb-4 overflow-x-auto">
        <code className="text-green-600">
          {`// Using var
var name = "Sajid";
console.log(name); // Output: Sajid

// Using let
let age = 25;
age = 26;
console.log(age); // Output: 26

// Using const
const country = "India";
console.log(country); // Output: India
// country = "USA"; // ❌ Error: Cannot reassign a const variable`}
        </code>
      </div>

      <p className="text-gray-700">
        <span className="font-semibold">var:</span> Older way to declare variables, function-scoped. <br/>
        <span className="font-semibold">let:</span> Block-scoped variable, can be updated. <br/>
        <span className="font-semibold">const:</span> Block-scoped, cannot be reassigned, ideal for constants.
      </p>
    </div>
  );
};

export default JSVariables;