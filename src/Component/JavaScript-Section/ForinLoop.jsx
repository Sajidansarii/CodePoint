import React from "react";

const JSForInLoop = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow mt-10">
      <h1 className="text-3xl font-bold text-blue-600 mb-4">JavaScript <span className="text-green-600">For...in Loop</span></h1>
      
      <p className="text-gray-700 mb-6">
        The <span className="font-semibold">for...in loop</span> is used to *iterate over the properties of an object*. 
        It loops through all *enumerable keys* in the object.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mb-2">Syntax:</h2>
      <div className="bg-gray-100 p-4 rounded mb-4 overflow-x-auto">
        <code className="text-green-600">
          {`for (let key in object) {
  // code to execute using object[key]
}`}
        </code>
      </div>

      <h2 className="text-2xl font-semibold text-gray-800 mb-2">Example 1: Iterating Over an Object</h2>
      <div className="bg-gray-100 p-4 rounded mb-4 overflow-x-auto">
        <code className="text-green-600">
          {`const person = {
  name: "Alice",
  age: 25,
  city: "New York"
};

for (let key in person) {
  console.log(key + ":", person[key]);
}
// Output:
// name: Alice
// age: 25
// city: New York`}
        </code>
      </div>

      <p className="text-gray-700 mb-6">
        Here, the loop iterates over all **keys in the person object** and prints both the key and its value.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mb-2">Example 2: Iterating Over an Array (Not Recommended)</h2>
      <div className="bg-gray-100 p-4 rounded mb-4 overflow-x-auto">
        <code className="text-green-600">
          {`const fruits = ["Apple", "Banana", "Cherry"];

for (let index in fruits) {
  console.log(index, fruits[index]);
}
// Output:
// 0 Apple
// 1 Banana
// 2 Cherry`}
        </code>
      </div>

      <p className="text-gray-700">
        Although <span className="font-semibold">for...in</span> can be used with arrays, it is *not recommended* because it iterates over keys and not values. 
        For arrays, <span className="font-semibold">for...of</span> or a regular <span className="font-semibold">for loop</span> is preferred.
      </p>
    </div>
  );
};

export default JSForInLoop;