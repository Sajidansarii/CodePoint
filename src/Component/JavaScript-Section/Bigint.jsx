import React from "react";

const JSBigInt = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow mt-10">
      <h1 className="text-3xl font-bold text-blue-600 mb-4">JavaScript <span className="text-green-600">BigInt</span></h1>
      
      <p className="text-gray-700 mb-6">
        <span className="font-semibold">BigInt</span> is a primitive data type used to represent *integers larger than the Number type can safely handle*. 
        It allows operations on numbers beyond 2^53 - 1 safely.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mb-2">Creating BigInt</h2>
      <div className="bg-gray-100 p-4 rounded mb-4 overflow-x-auto">
        <code className="text-green-600">
          {`// Using 'n' suffix
const bigNumber1 = 123456789012345678901234567890n;

// Using BigInt() function
const bigNumber2 = BigInt("123456789012345678901234567890");

console.log(bigNumber1); // Output: 123456789012345678901234567890n
console.log(bigNumber2); // Output: 123456789012345678901234567890n`}
        </code>
      </div>

      <h2 className="text-2xl font-semibold text-gray-800 mb-2">BigInt Operations</h2>
      <div className="bg-gray-100 p-4 rounded mb-4 overflow-x-auto">
        <code className="text-green-600">
          {`const a = 9007199254740991n;
const b = 12345678901234567890n;

console.log(a + b); // Output: 12345687910533822881n
console.log(b - a); // Output: 12345679896035208599n
console.log(a * 2n); // Output: 18014398509481982n`}
        </code>
      </div>

      <h2 className="text-2xl font-semibold text-gray-800 mb-2">Important Notes</h2>
      <ul className="list-disc list-inside text-gray-700 mb-4">
        <li>You cannot mix <strong>Number</strong> and <strong>BigInt</strong> directly in operations.</li>
        <li>Use either the <strong>n suffix</strong> or <strong>BigInt()</strong> function to create BigInt values.</li>
        <li>BigInt is useful for very large integers, cryptography, and precise calculations beyond safe integer limits.</li>
      </ul>

      <h2 className="text-2xl font-semibold text-gray-800 mb-2">Example: Conditional Check with BigInt</h2>
      <div className="bg-gray-100 p-4 rounded mb-4 overflow-x-auto">
        <code className="text-green-600">
          {`const population = 9007199254740993n;

if (population > 9007199254740991n) {
  console.log("Population exceeds safe integer limit!");
}
// Output: Population exceeds safe integer limit!`}
        </code>
      </div>
    </div>
  );
};

export default JSBigInt;