import React from "react";

const JSNull = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow mt-10">
      <h1 className="text-3xl font-bold text-blue-600 mb-4">JavaScript <span className="text-green-600">Null</span></h1>
      
      <p className="text-gray-700 mb-6">
        In JavaScript, <span className="font-semibold">null</span> is a *primitive value* that represents *the intentional absence of any object value*. 
        It is often used to indicate that a variable should have no value.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mb-2">Example 1: Assigning Null</h2>
      <div className="bg-gray-100 p-4 rounded mb-4 overflow-x-auto">
        <code className="text-green-600">
          {`let user = null;
console.log(user); // Output: null`}
        </code>
      </div>

      <h2 className="text-2xl font-semibold text-gray-800 mb-2">Example 2: Using Null in Conditional Checks</h2>
      <div className="bg-gray-100 p-4 rounded mb-4 overflow-x-auto">
        <code className="text-green-600">
          {`let selectedItem = null;

if (selectedItem === null) {
  console.log("No item selected");
} else {
  console.log("Item selected:", selectedItem);
}

// Output: No item selected`}
        </code>
      </div>

      <h2 className="text-2xl font-semibold text-gray-800 mb-2">Null vs Undefined</h2>
      <div className="bg-gray-100 p-4 rounded mb-4 overflow-x-auto">
        <code className="text-green-600">
          {`let a;
let b = null;

console.log(a); // Output: undefined (variable declared but not assigned)
console.log(b); // Output: null (explicitly assigned no value)`}
        </code>
      </div>

      <p className="text-gray-700">
        <span className="font-semibold">Key Points:</span>
        <ul className="list-disc list-inside mt-2">
          <li><strong>null</strong> is an *explicit assignment of "no value"*.</li>
          <li><strong>undefined</strong> means a variable has been *declared but not assigned* a value.</li>
          <li>Use <strong>null</strong> to *initialize variables or reset values* intentionally.</li>
        </ul>
      </p>
    </div>
  );
};

export default JSNull;