import React from "react";

const JSBigInt = () => {
  return (
    <div className="max-w-4xl p-6">
      <h1 className="text-3xl font-medium text-blue-500 mb-4">JavaScript BigInt</h1>
      
      <p className="text-gray-700 mb-6">
        <span className="text-red-400">BigInt</span> is a primitive data type used to represent *integers larger than the Number type can safely handle*. 
        It allows operations on numbers beyond 2^53 - 1 safely.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mb-5">Creating BigInt</h2>
     <pre className="bg-gray-200 p-4 rounded-lg mt-5 overflow-x-auto max-w-full whitespace-pre-wrap">
  <code>
    const bigNumber1 = 123456789012345678901234567890n;
    <br /><br />

    // Using BigInt() function
    <br />
    const bigNumber2 = BigInt("123456789012345678901234567890");
    <br /><br />

    console.log(bigNumber1); // Output: 123456789012345678901234567890n
    <br />
    console.log(bigNumber2); // Output: 123456789012345678901234567890n
  </code>
</pre>

      <h2 className="text-2xl font-semibold text-gray-800 mb-5">BigInt Operations</h2>
     <pre className="bg-gray-200 p-4 rounded-lg mt-5 overflow-x-auto max-w-full whitespace-pre-wrap">
  <code>
    const a = 9007199254740991n;
    <br />
    const b = 12345678901234567890n;
    <br /><br />

    console.log(a + b); // Output: 12345687910533822881n
    <br />
    console.log(b - a); // Output: 12345679896035208599n
    <br />
    console.log(a * 2n); // Output: 18014398509481982n
  </code>
</pre>


      <h2 className="text-2xl font-semibold text-gray-800 mb-5">Important Notes</h2>
      <ul className="list-disc list-inside text-gray-700 mb-4">
        <li>You cannot mix <span className="text-red-400">Number</span> and <span className="text-red-400">BigInt</span> directly in operations.</li>
        <li>Use either the <span className="text-red-400">n suffix</span> or <span className="text-red-400">BigInt()</span> function to create BigInt values.</li>
        <li><span className="text-red-400">BigInt</span> is useful for very large integers, cryptography, and precise calculations beyond safe integer limits.</li>
      </ul>

      <h2 className="text-2xl font-semibold text-gray-800 mb-5">Conditional Check with BigInt</h2>
     <pre className="bg-gray-200 p-4 rounded-lg mt-5 overflow-x-auto max-w-full whitespace-pre-wrap">
  <code>
    const population = 9007199254740993n;
    <br /><br />

    if (population &gt; 9007199254740991n) {"{"}
    <br />
    &nbsp;&nbsp;console.log("Population exceeds safe integer limit!");
    <br />
    {"}"}
    <br /><br />

    // Output: Population exceeds safe integer limit!
  </code>
</pre>
    </div>
  );
};

export default JSBigInt;