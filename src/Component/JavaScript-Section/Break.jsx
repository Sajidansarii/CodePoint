import React from "react";

const JSBreak = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow mt-10">
      <h1 className="text-3xl font-medium text-blue-500 mb-4">JavaScript <span className="text-green-600">break</span> Statement</h1>
      
      <p className="text-gray-700 mb-6">
        The <span className="font-semibold">break</span> statement in JavaScript is used to *exit a loop or switch statement immediately* before it naturally finishes. 
        This is useful when a certain condition is met, and you want to stop further iterations or checks.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mb-2">Example:</h2>
      <div className="bg-gray-100 p-4 rounded mb-4 overflow-x-auto">
        <code className="text-green-600">
          {`// Using break in a for loop
for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    break; // Exit the loop when i equals 5
  }
  console.log(i);
}
// Output: 1 2 3 4

// Using break in a switch statement
let day = "Wednesday";
switch(day) {
  case "Monday":
    console.log("Start of the week");
    break;
  case "Wednesday":
    console.log("Midweek day");
    break;
  case "Friday":
    console.log("End of the week");
    break;
  default:
    console.log("Other day");
}`}
        </code>
      </div>

      <p className="text-gray-700">
        <span className="font-semibold">Key points about break:</span>
        <ul className="list-disc list-inside mt-2">
          <li>Immediately stops the execution of a loop or switch statement.</li>
          <li>Commonly used to exit a loop based on a condition.</li>
          <li>Works in <span className="font-semibold">for</span>, <span className="font-semibold">while</span>, <span className="font-semibold">do...while</span> loops, and <span className="font-semibold">switch</span> statements.</li>
        </ul>
      </p>
    </div>
  );
};

export default JSBreak;