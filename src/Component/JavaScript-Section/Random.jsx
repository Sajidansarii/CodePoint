import React from "react";

const JSRandom = () => {
  return (
    <div className="max-w-4xl p-6">
      <h1 className="text-3xl font-medium text-blue-500 mb-4">JavaScript Random Numbers</h1>
      
      <p className="mb-6">
        In JavaScript, random numbers are generated using the <span className="font-semibold">Math.random()</span> method. 
        It returns a *decimal number between 0 (inclusive) and 1 (exclusive)*. You can manipulate this value to generate numbers in a specific range.
      </p>

      <h1 className="text-2xl mt-10">Math.random()</h1>
      <p className="leading-relaxed mt-5"><span className="text-red-400 bg-gray-50 px-1">The Math.random()</span> method generates a pseudo-random floating-point number in the range [0, 1), where 0 is inclusive and 1 is exclusive.</p>
      <h1 className="text-2xl mt-5">Example</h1>
      <pre className="text-green-400 bg-gray-900 p-4 rounded-lg mt-5">
        {`// Returns a random number:
Math.random();`}
      </pre>


      <h1 className="text-2xl mt-10">JavaScript Random Integers</h1>
    <p className="leading-relaxed mt-5 mb-2"> By using <span className="text-red-400 bg-gray-50 px-1">Math.random()</span> in combination with <span className="text-red-400 bg-gray-50 px-1">Math.floor()</span>, you can generate random integers within a specified range.</p>
    <p>JavaScript doesn’t support a separate integer type. Whole numbers are just numbers without any decimal part.</p>
    <h1 className="text-2xl mt-5">Example</h1>
    <pre className="text-green-400 bg-gray-900 p-4 rounded-lg mt-5">
      {`// Returns a random integer from 0 to 9:
Math.floor(Math.random() * 10);`}
    </pre>

    <h1 className="text-2xl mt-10">Example</h1>
    <pre className="text-green-400 bg-gray-900 p-4 rounded-lg mt-5">
      {`// Returns a random integer from 0 to 10:
Math.floor(Math.random() * 11);`}
    </pre>

        <h1 className="text-2xl mt-10">Example</h1>
    <pre className="text-green-400 bg-gray-900 p-4 rounded-lg mt-5">
      {`// Returns a random integer from 0 to 99:
Math.floor(Math.random() * 100);`}
    </pre>

        <h1 className="text-2xl mt-10">Example</h1>
    <pre className="text-green-400 bg-gray-900 p-4 rounded-lg mt-5">
      {`// Returns a random integer from 0 to 100:
Math.floor(Math.random() * 101);`}
    </pre>

     <h1 className="text-2xl mt-10">Example</h1>
    <pre className="text-green-400 bg-gray-900 p-4 rounded-lg mt-5">
      {`// Returns a random integer from 1 to 10:
Math.floor(Math.random() * 10) + 1;`}
    </pre>

     <h1 className="text-2xl mt-10">Example</h1>
    <pre className="text-green-400 bg-gray-900 p-4 rounded-lg mt-5">
      {`// Returns a random integer from 1 to 100:
Math.floor(Math.random() * 100) + 1;`}
    </pre>

    <h1 className="text-2xl mt-10">A Proper Random Function</h1>
    <p className="leading-relaxed mt-3">Based on the previous examples, defining a dedicated random integer function can improve consistency and reusability.</p>
    <p className="leading-relaxed mt-3">This JavaScript function returns a random number between min (inclusive) and max (exclusive).</p>
    <h1 className="text-2xl mt-5">Example</h1>
    <pre className="text-green-400 bg-gray-900 p-4 rounded-lg mt-5">
      {`function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}`}
    </pre>

    <p className="leading-relaxed mt-10">In JavaScript, this function returns a random number where both min and max are part of the possible results.</p>
    <h1 className="text-2xl">Example</h1>
    <pre className="text-green-400 bg-gray-900 p-4 rounded-lg mt-5">
      {`function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}`}
    </pre>


      <div className="mt-10">
        <p className="font-semibold text-xl">Key points:</p>
        <ul className="list-disc list-inside leading-relaxed mt-2">
          <li><span className="text-red-400 bg-gray-50 px-1">Math.random()</span> generates a decimal number between 0 (inclusive) and 1 (exclusive).</li>
          <li>Use <span className="text-red-400 bg-gray-50 px-1">Math.floor()</span> or <span className="text-red-400 bg-gray-50 px-1">Math.ceil()</span> to convert to integers.</li>
          <li>To get a number in a specific range, multiply by the range and add the minimum value.</li>
        </ul>
      </div>
    </div>
  );
};

export default JSRandom;