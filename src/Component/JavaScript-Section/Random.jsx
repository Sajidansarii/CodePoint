import React from "react";

const JSRandom = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow mt-10">
      <h1 className="text-3xl font-bold text-blue-600 mb-4">JavaScript <span className="text-green-600">Random Numbers</span></h1>
      
      <p className="text-gray-700 mb-6">
        In JavaScript, random numbers are generated using the <span className="font-semibold">Math.random()</span> method. 
        It returns a *decimal number between 0 (inclusive) and 1 (exclusive)*. You can manipulate this value to generate numbers in a specific range.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mb-2">Example 1: Random Decimal Number</h2>
      <div className="bg-gray-100 p-4 rounded mb-4 overflow-x-auto">
        <code className="text-green-600">
          {`// Generate a random decimal number between 0 and 1
let randomDecimal = Math.random();
console.log(randomDecimal); // Output: 0.123456789 (varies each time)`}
        </code>
      </div>

      <h2 className="text-2xl font-semibold text-gray-800 mb-2">Example 2: Random Integer in a Range</h2>
      <div className="bg-gray-100 p-4 rounded mb-4 overflow-x-auto">
        <code className="text-green-600">
          {`// Generate a random integer between min and max
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(getRandomInt(1, 10)); // Output: random integer between 1 and 10`}
        </code>
      </div>

      <p className="text-gray-700">
        <span className="font-semibold">Key points:</span>
        <ul className="list-disc list-inside mt-2">
          <li><span className="font-semibold">Math.random()</span> generates a decimal number between 0 (inclusive) and 1 (exclusive).</li>
          <li>Use <span className="font-semibold">Math.floor()</span> or <span className="font-semibold">Math.ceil()</span> to convert to integers.</li>
          <li>To get a number in a specific range, multiply by the range and add the minimum value.</li>
        </ul>
      </p>
    </div>
  );
};

export default JSRandom;