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
     <pre className="bg-gray-200 p-4 rounded-lg mt-5 overflow-x-auto max-w-full whitespace-pre-wrap">
  <code>
    for (let key in object) {"{"}
    <br />
    &nbsp;&nbsp;// code to execute using object[key]
    <br />
    {"}"}
  </code>
</pre>

    <p className="mt-2">The <span className="text-red-400">for…in</span> statement loops through all the properties of an object.</p>
    <p className="mt-2">The loop executes the code block once for every property.</p>


      <h2 className="text-2xl font-semibold text-gray-800 mt-10">Example</h2>
    <pre className="bg-gray-200 p-4 rounded-lg mt-5 overflow-x-auto max-w-full whitespace-pre-wrap">
  <code>
    const person = {"{"}
    <br />
    &nbsp;&nbsp;name: "Alice",
    <br />
    &nbsp;&nbsp;age: 25,
    <br />
    &nbsp;&nbsp;city: "New York"
    <br />
    {"}"};
    <br /><br />

    for (let key in person) {"{"}
    <br />
    &nbsp;&nbsp;console.log(key + ":", person[key]);
    <br />
    {"}"}
    <br /><br />

    // Output:
    <br />
    // name: Alice
    <br />
    // age: 25
    <br />
    // city: New York
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