import React from "react";

const JSMath = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow mt-10">
      <h1 className="text-3xl font-bold text-blue-600 mb-4">JavaScript <span className="text-green-600">Math</span> Object</h1>
      
      <p className="text-gray-700 mb-6">
        The JavaScript <span className="font-semibold">Math</span> object provides *properties and methods* for performing mathematical tasks such as rounding numbers, generating random numbers, finding minimum or maximum values, and more. 
        Note that <span className="font-semibold">Math</span> is not a constructor, so you cannot create instances of it.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mb-2">Example 1: Rounding Numbers</h2>
      <div className="bg-gray-100 p-4 rounded mb-4 overflow-x-auto">
        <code className="text-green-600">
          {`let num = 4.7;

console.log(Math.round(num));  // Output: 5
console.log(Math.floor(num));  // Output: 4
console.log(Math.ceil(num));   // Output: 5`}
        </code>
      </div>
      <p className="text-gray-700 mb-6">
        Here, <span className="font-semibold">Math.round()</span> rounds to the nearest integer, <span className="font-semibold">Math.floor()</span> rounds down, and <span className="font-semibold">Math.ceil()</span> rounds up.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mb-2">Example 2: Random Numbers</h2>
      <div className="bg-gray-100 p-4 rounded mb-4 overflow-x-auto">
        <code className="text-green-600">
          {`// Generate a random number between 0 and 1
console.log(Math.random());

// Generate a random integer between 1 and 10
let randomNum = Math.floor(Math.random() * 10) + 1;
console.log(randomNum);`}
        </code>
      </div>
      <p className="text-gray-700">
        <span className="font-semibold">Math.random()</span> generates a decimal number between 0 (inclusive) and 1 (exclusive). 
        You can scale and round it to get random integers in a desired range.
      </p>
    </div>
  );
};

export default JSMath;