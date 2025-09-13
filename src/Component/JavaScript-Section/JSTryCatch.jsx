import React, { useState } from "react";

export default function TryCatchExample() {
  const [result, setResult] = useState("");

  const handleErrorExample = () => {
    try {
      // Example: dividing by zero won't throw in JS, so we'll throw manually
      let a = 10;
      let b = 0;

      if (b === 0) {
        throw new Error("Cannot divide by zero!");
      }

      let c = a / b;
      setResult("Result: " + c);
    } catch (error) {
      // This block runs when an error is thrown
      setResult("Error: " + error.message);
    } finally {
      // This block always executes
      console.log("Execution completed.");
    }
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-3xl font-medium text-blue-500 mb-4">
        JavaScript try...catch Example
      </h1>

      <p className="mb-4 text-gray-700">
        The <code className="bg-gray-100 px-1 rounded">try...catch</code>{" "}
        statement in JavaScript is used to handle errors gracefully. <br />
        - The <b>try</b> block contains the code that may throw an error. <br />
        - The <b>catch</b> block handles the error if it occurs. <br />
        - The optional <b>finally</b> block always executes, whether an error
        occurs or not.
      </p>

      <button
        onClick={handleErrorExample}
        className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition"
      >
        Run Example
      </button>

      {result && (
        <div className="mt-4 p-3 bg-gray-100 rounded-lg border text-gray-800">
          {result}
        </div>
      )}

      <div className="mt-6">
        <h2 className="text-lg font-semibold mb-2">Code Example:</h2>
        <pre className="bg-black text-green-400 p-4 rounded-lg overflow-x-auto text-sm">
{`try {
  // Code that might cause an error
  let a = 10;
  let b = 0;

  if (b === 0) {
    throw new Error("Cannot divide by zero!");
  }

  let c = a / b;
  console.log("Result:", c);
} catch (error) {
  // Handle the error
  console.log("Error:", error.message);
} finally {
  // Always runs
  console.log("Execution completed.");
}`}
        </pre>
      </div>
    </div>
  );
}