import React from "react";

const JSWhileLoop = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow mt-10">
      <h1 className="text-3xl font-medium text-blue-500 mb-4">JavaScript <span className="text-green-600">While Loop</span></h1>
      
      <p className="text-gray-700 mb-6">
        The <span className="font-semibold">while loop</span> in JavaScript is used to *repeat a block of code as long as a specified condition is true*. 
        It is commonly used when you *do not know in advance how many times the loop should run*.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mb-2">Syntax:</h2>
      <div className="bg-gray-100 p-4 rounded mb-4 overflow-x-auto">
        <code className="text-green-600">
          {`while (condition) {
  // code to execute as long as condition is true
}`}
        </code>
      </div>

      <h2 className="text-2xl font-semibold text-gray-800 mb-2">Example 1: Counting from 1 to 5</h2>
      <div className="bg-gray-100 p-4 rounded mb-4 overflow-x-auto">
        <code className="text-green-600">
          {`let i = 1;
while (i <= 5) {
  console.log("Iteration number:", i);
  i++;
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
        The loop starts with <code>i = 1</code> and keeps executing the block as long as <code>i &lt;= 5</code>. 
        The variable <code>i</code> is incremented in each iteration to eventually end the loop.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mb-2">Example 2: Looping Through an Array</h2>
      <div className="bg-gray-100 p-4 rounded mb-4 overflow-x-auto">
        <code className="text-green-600">
          {`const fruits = ["Apple", "Banana", "Cherry"];
let index = 0;

while (index < fruits.length) {
  console.log(fruits[index]);
  index++;
}
// Output:
// Apple
// Banana
// Cherry`}
        </code>
      </div>

      <p className="text-gray-700">
        You can use a <span className="font-semibold">while loop</span> to iterate through array elements using an *index variable*. 
        Remember to update the index inside the loop to avoid an infinite loop.
      </p>
    </div>
  );
};

export default JSWhileLoop;