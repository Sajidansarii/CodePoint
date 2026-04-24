import React from "react";

const JSNull = () => {
  return (
    <div className="max-w-4xl p-6">
      <h1 className="text-3xl font-medium text-blue-500 mb-4">JavaScript Null</h1>
      
      <p className="text-gray-700 mb-6">
        In JavaScript, <span className="text-red-400">null</span> is a primitive value that represents the intentional absence of any object value. 
        It is often used to indicate that a variable should have no value.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mb-5">Assigning Null</h2>
      <pre className="bg-gray-200 p-4 rounded-lg mt-5 overflow-x-auto max-w-full whitespace-pre-wrap">
        <code>
          {`
let user = null;
console.log(user);   // Output: null`}
        </code>
      </pre>

      <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-5">Using Null in Conditional Checks</h2>
      <pre className="bg-gray-200 p-4 rounded-lg mt-5 overflow-x-auto max-w-full whitespace-pre-wrap">
        <code>
          {`
let selectedItem = null;

if (selectedItem === null) {
  console.log("No item selected");
} else {
  console.log("Item selected:", selectedItem);
}

// Output: No item selected
`}
        </code>
      </pre>

      <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-5">Null vs Undefined</h2>
      <pre className="bg-gray-200 p-4 rounded-lg mt-5 overflow-x-auto max-w-full whitespace-pre-wrap">
        <code>
          {`
let a;
let b = null;

console.log(a); // Output: undefined (variable declared but not assigned)
console.log(b); // Output: null (explicitly assigned no value)
`}
        </code>
      </pre>
    </div>
  );
};

export default JSNull;