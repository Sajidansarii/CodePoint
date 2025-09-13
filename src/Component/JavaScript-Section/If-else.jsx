import React from "react";

const IfElseInJS = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      {/* Title */}
      <h1 className="text-3xl font-medium text-blue-500 mb-4">
        JavaScript if-else Statement
      </h1>

      {/* Introduction */}
      <p className="text-gray-700 mb-4 leading-relaxed">
        The <code>if-else</code> statement is used to execute a block of code
        based on a condition. If the condition evaluates to{" "}
        <span className="font-semibold">true</span>, the <code>if</code> block
        runs. Otherwise, the <code>else</code> block runs. This is one of the
        most common decision-making statements in JavaScript.
      </p>

      {/* Simple if Example */}
      <div className="bg-white shadow-md rounded-2xl p-5 mb-6 border-l-4 border-blue-500">
        <h2 className="text-xl font-semibold text-gray-800 mb-3">Simple if</h2>
        <p className="text-gray-600 mb-3">
          The <code>if</code> statement checks a condition and runs code only if
          it is true.
        </p>
        <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto text-sm">
{`let age = 20;

if (age >= 18) {
  console.log("You are an adult");
}`}</pre>
      </div>

      {/* if-else Example */}
      <div className="bg-white shadow-md rounded-2xl p-5 mb-6 border-l-4 border-green-500">
        <h2 className="text-xl font-semibold text-gray-800 mb-3">if-else</h2>
        <p className="text-gray-600 mb-3">
          If the condition is false, the <code>else</code> block is executed
          instead.
        </p>
        <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto text-sm">
{`let age = 16;

if (age >= 18) {
  console.log("You are an adult");
} else {
  console.log("You are a minor");
}`}</pre>
      </div>

      {/* if-else-if Ladder */}
      <div className="bg-white shadow-md rounded-2xl p-5 border-l-4 border-yellow-500">
        <h2 className="text-xl font-semibold text-gray-800 mb-3">
          if-else-if Ladder
        </h2>
        <p className="text-gray-600 mb-3">
          Multiple conditions can be checked using an{" "}
          <code>if-else-if</code> ladder.
        </p>
        <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto text-sm">
{`let marks = 75;

if (marks >= 90) {
  console.log("Grade: A");
} else if (marks >= 75) {
  console.log("Grade: B");
} else if (marks >= 50) {
  console.log("Grade: C");
} else {
  console.log("Fail");
}`}</pre>
      </div>

      {/* Summary */}
      <div className="mt-6 bg-blue-50 p-4 rounded-xl">
        <h3 className="text-lg font-semibold text-blue-700 mb-2">Summary</h3>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>
            <code>if</code> → Runs code if the condition is true.
          </li>
          <li>
            <code>if-else</code> → Runs one block if true, another if false.
          </li>
          <li>
            <code>if-else-if</code> → Checks multiple conditions in order.
          </li>
          <li>
            Conditions are always checked from top to bottom.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default IfElseInJS;