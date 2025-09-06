import React from "react";

const JSSwitch = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow mt-10">
      <h1 className="text-3xl font-bold text-blue-600 mb-4">JavaScript <span className="text-green-600">Switch Statement</span></h1>
      
      <p className="text-gray-700 mb-6">
        The <span className="font-semibold">switch</span> statement is used to *perform different actions based on different conditions*. 
        It is an alternative to multiple if...else if statements and improves code readability when checking a variable against multiple values.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mb-2">Syntax:</h2>
      <div className="bg-gray-100 p-4 rounded mb-4 overflow-x-auto">
        <code className="text-green-600">
          {`switch(expression) {
  case value1:
    // code to run if expression === value1
    break;
  case value2:
    // code to run if expression === value2
    break;
  default:
    // code to run if no case matches
}`}
        </code>
      </div>

      <h2 className="text-2xl font-semibold text-gray-800 mb-2">Example:</h2>
      <div className="bg-gray-100 p-4 rounded mb-4 overflow-x-auto">
        <code className="text-green-600">
          {`let day = "Tuesday";

switch(day) {
  case "Monday":
    console.log("Start of the week");
    break;
  case "Tuesday":
    console.log("Second day of the week");
    break;
  case "Friday":
    console.log("End of the week");
    break;
  default:
    console.log("Other day");
}

// Output: Second day of the week`}
        </code>
      </div>

      <p className="text-gray-700">
        <span className="font-semibold">Key Points:</span>
        <ul className="list-disc list-inside mt-2">
          <li>The switch statement evaluates the expression and matches it with case values.</li>
          <li>Use break to stop the execution once a case matches; otherwise, it continues to the next case.</li>
          <li>The default case runs if no matching case is found.</li>
          <li>Switch statements improve readability when checking multiple conditions on a single variable.</li>
        </ul>
      </p>
    </div>
  );
};

export default JSSwitch;