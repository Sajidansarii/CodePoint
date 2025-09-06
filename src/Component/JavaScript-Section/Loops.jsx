import React from "react";

const JSLoops = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow mt-10">
      <h1 className="text-3xl font-bold text-blue-600 mb-4">JavaScript <span className="text-green-600">Loops</span></h1>
      
      <p className="text-gray-700 mb-6">
        Loops in JavaScript are used to *execute a block of code multiple times* until a specified condition is met. 
        Loops help reduce repetitive code and make programs more efficient.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mb-2">1. For Loop</h2>
      <div className="bg-gray-100 p-4 rounded mb-4 overflow-x-auto">
        <code className="text-green-600">
          {`for (let i = 1; i <= 5; i++) {
  console.log(i);
}
// Output: 1 2 3 4 5`}
        </code>
      </div>
      <p className="text-gray-700 mb-6">
        The <span className="font-semibold">for loop</span> is used when you know *how many times you want to repeat* a block of code.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mb-2">2. While Loop</h2>
      <div className="bg-gray-100 p-4 rounded mb-4 overflow-x-auto">
        <code className="text-green-600">
          {`let i = 1;
while (i <= 5) {
  console.log(i);
  i++;
}
// Output: 1 2 3 4 5`}
        </code>
      </div>
      <p className="text-gray-700 mb-6">
        The <span className="font-semibold">while loop</span> repeats a block of code *as long as a condition is true*.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mb-2">3. Do...While Loop</h2>
      <div className="bg-gray-100 p-4 rounded mb-4 overflow-x-auto">
        <code className="text-green-600">
          {`let i = 1;
do {
  console.log(i);
  i++;
} while (i <= 5);
// Output: 1 2 3 4 5`}
        </code>
      </div>
      <p className="text-gray-700 mb-6">
        The <span className="font-semibold">do...while loop</span> executes the block of code *once before checking the condition*, ensuring the loop runs at least once.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mb-2">4. For...of Loop</h2>
      <div className="bg-gray-100 p-4 rounded mb-4 overflow-x-auto">
        <code className="text-green-600">
          {`const fruits = ["Apple", "Banana", "Cherry"];
for (const fruit of fruits) {
  console.log(fruit);
}
// Output: Apple Banana Cherry`}
        </code>
      </div>
      <p className="text-gray-700 mb-6">
        The <span className="font-semibold">for...of loop</span> is used to iterate over *iterable objects* like arrays, strings, maps, or sets.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mb-2">Key Points:</h2>
      <ul className="list-disc list-inside text-gray-700">
        <li>Use <span className="font-semibold">for</span> when the number of iterations is known.</li>
        <li>Use <span className="font-semibold">while</span> or <span className="font-semibold">do...while</span> for condition-based loops.</li>
        <li><span className="font-semibold">for...of</span> is best for iterating over iterable objects.</li>
        <li>Loops can be controlled using <span className="font-semibold">break</span> and <span className="font-semibold">continue</span> statements.</li>
      </ul>
    </div>
  );
};

export default JSLoops;