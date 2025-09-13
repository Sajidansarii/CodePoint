import React from "react";

const JSForLoop = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow mt-10">
      <h1 className="text-3xl font-medium text-blue-500 mb-4">JavaScript <span className="text-green-600">For Loop</span></h1>
      
      <p className="text-gray-700 mb-6">
        The <span className="font-semibold">for loop</span> in JavaScript is used to *repeat a block of code a specific number of times*. 
        It is commonly used when you know in advance *how many iterations* are needed.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mb-2">Syntax:</h2>
      <div className="bg-gray-100 p-4 rounded mb-4 overflow-x-auto">
        <code className="text-green-600">
          {`for (initialization; condition; increment/decrement) {
  // code to execute in each iteration
}`}
        </code>
      </div>

      <h2 className="text-2xl font-semibold text-gray-800 mb-2">Example:</h2>
      <div className="bg-gray-100 p-4 rounded mb-4 overflow-x-auto">
        <code className="text-green-600">
          {`for (let i = 1; i <= 5; i++) {
  console.log("Iteration number:", i);
}
// Output:
// Iteration number: 1
// Iteration number: 2
// Iteration number: 3
// Iteration number: 4
// Iteration number: 5`}
        </code>
      </div>

      <p className="text-gray-700 mb-6">
        Here, the loop starts with <code>i = 1</code>, checks the condition <code>i {'<'} = 5</code>, executes the code block, and then increments <code>i</code> by 1. 
        This continues until the condition becomes false.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mb-2">Example 2: Looping Through an Array</h2>
      <div className="bg-gray-100 p-4 rounded mb-4 overflow-x-auto">
        <code className="text-green-600">
          {`const fruits = ["Apple", "Banana", "Cherry"];

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
// Output:
// Apple
// Banana
// Cherry`}
        </code>
      </div>

      <p className="text-gray-700">
        You can use a <span className="font-semibold">for loop</span> to iterate through array elements using an *index*. 
        Loops are essential for automating repetitive tasks in JavaScript.
      </p>
    </div>
  );
};

export default JSForLoop;