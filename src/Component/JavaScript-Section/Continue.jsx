import React from "react";

const JSContinue = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow mt-10">
      <h1 className="text-3xl font-bold text-blue-600 mb-4">JavaScript <span className="text-green-600">continue</span> Statement</h1>
      
      <p className="text-gray-700 mb-6">
        The <span className="font-semibold">continue</span> statement in JavaScript is used to *skip the current iteration of a loop* and continue with the next one. 
        Unlike <span className="font-semibold">break</span>, it does not exit the loop completely—it just moves to the next iteration.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mb-2">Example:</h2>
      <div className="bg-gray-100 p-4 rounded mb-4 overflow-x-auto">
        <code className="text-green-600">
          {`// Using continue in a for loop
for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    continue; // Skip iteration when i equals 3
  }
  console.log(i);
}
// Output: 1 2 4 5

// Using continue in a while loop
let j = 0;
while (j < 5) {
  j++;
  if (j % 2 === 0) {
    continue; // Skip even numbers
  }
  console.log(j);
}
// Output: 1 3 5`}
        </code>
      </div>

      <p className="text-gray-700">
        <span className="font-semibold">Key points about continue:</span>
        <ul className="list-disc list-inside mt-2">
          <li>Skips the current iteration and moves to the next loop cycle.</li>
          <li>Does not terminate the loop (unlike <span className="font-semibold">break</span>).</li>
          <li>Works in <span className="font-semibold">for</span>, <span className="font-semibold">while</span>, and <span className="font-semibold">do...while</span> loops.</li>
        </ul>
      </p>
    </div>
  );
};

export default JSContinue;