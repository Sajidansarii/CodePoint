import React from "react";

const JSForInLoop = () => {
  return (
    <div className="max-w-4xl p-6">
      <h1 className="text-3xl font-medium text-blue-500 mb-4">JavaScript For...in Loop</h1>
      
      <p className="text-gray-700 mb-6">
        The <span className="text-red-400">for...in loop</span> is used to *iterate over the properties of an object*. 
        It loops through all *enumerable keys* in the object.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mb-2">Syntax:</h2>
      <pre className="bg-gray-900 overflow-x-auto text-green-400 p-4 rounded-lg mb-4">
        <code>
          {`
 for (let key in object) {
  // code to execute using object[key]
}
`}
        </code>
      </pre>
    <p className="mt-2">The <span className="text-red-400">for…in</span> statement loops through all the properties of an object.</p>
    <p className="mt-2">The loop executes the code block once for every property.</p>


      <h2 className="text-2xl font-semibold text-gray-800 mt-10">Example</h2>
      <pre className="bg-gray-900 overflow-x-auto text-green-400 p-4 rounded-lg mb-4 mt-5">
        <code>
          {`
 const person = {
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
// city: New York
// 
`}
        </code>
      </pre>

      <p className="text-gray-700 mt-10">
        Although <span className="font-semibold">for...in</span> can be used with arrays, it is *not recommended* because it iterates over keys and not values. 
        For arrays, <span className="font-semibold">for...of</span> or a regular <span className="font-semibold">for loop</span> is preferred.
      </p>
    </div>
  );
};

export default JSForInLoop;