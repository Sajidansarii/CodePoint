import React from "react";

const JSSwitch = () => {
  return (
    <div className="max-w-4xl p-6">
      <h1 className="text-3xl font-medium text-blue-500 mb-4">JavaScript Switch Statement</h1>
      
      <p className="text-gray-700 mb-1">
        The <span className="text-red-400">switch</span> statement is used to perform different actions based on different conditions. 
        It is an alternative to multiple if...else if statements and improves code readability when checking a variable against multiple values.
      </p>
      <p className="text-gray-700 mb-5">
        The switch structure executes one or more code segments according to the value of an expression.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mb-2">Syntax:</h2>
      
      <pre className="text-green-400 bg-gray-900 mt-5 rounded-lg">
     <code>
      {`
      switch(expression) {
     case x:
    // code block
    break;
    case y:
      // code block
      break;
      default:
        // code block
        }
        `}
     </code>
        </pre>

      <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-5">Example:</h2>
      <pre className="bg-gray-900 text-green-400 p-4 overflow-x-auto rounded-lg mb-4">
        <code>
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
}

// Output: Second day of the week`}
        </code>
      </pre>

      <h1 className="text-2xl text-gray-800 font-semibold mt-5">The break Keyword</h1>
      <p className="text-gray-700 mt-3">Once JavaScript hits the <span className="text-red-400">break</span> statement, it stops executing the switch and jumps out.</p>
      <p className="text-gray-700 mt-3">When this occurs, the switch block stops executing and skips the rest of its statements. The final case doesn’t need a <span className="text-red-400">break</span> because the switch concludes at that point anyway.</p>
     
     <h1 className="text-2xl text-gray-700 font-semibold mt-5 mb-5">The default Keyword</h1>
     <p className="text-gray-700">The <span className="text-red-400">default</span> keyword provides the code to execute if all cases fail to match.</p>
     <p className="text-gray-700">Using <span className="text-red-400">default</span> is optional; however, it can act as a fallback that runs if none of the cases apply.</p>
     
     <pre className="text-green-400 bg-gray-900 p-4 overflow-x-auto rounded-lg mt-5">
      <code>
        {`
        let day = "Tuesday";

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

// Output: Second day of the week
        `}
      </code>
     </pre>

     <h1 className="text-2xl font-semibold text-gray-700 mt-10 mb-5">Strict Comparison</h1>
     <p className="text-gray-700"><span className="text-red-400">Switch</span> relies on ===, meaning it uses strict matching for its cases.</p>
    <p className="text-gray-700">The comparison requires both values to be of the same type.</p>
    <p className="text-gray-700">For a <span className="font-semibold">strict</span> comparison to return true, both operands must be the same type.</p>

    <h1 className="text-2xl mt-5">Example</h1>
    <pre className="text-green-400 bg-gray-900 rounded-lg p-4 mt-3">
      <code>
        {`
        let x = "0";
switch (x) {
  case 0:
    text = "Off";
    break;
  case 1:
    text = "On";
    break;
  default:
    text = "No value found";
}

        `}
      </code>
    </pre>

      <p className="text-gray-700 mt-10">
        <span className="font-semibold text-2xl">Key Points:</span>
        <ul className="list-disc list-inside mt-2">
          <li>The <span className="text-red-400">switch</span> statement evaluates the expression and matches it with case values.</li>
          <li>Use <span className="text-red-400">break</span> to stop the execution once a case matches; otherwise, it continues to the next case.</li>
          <li>The <span className="text-red-400">default</span> case runs if no matching case is found.</li>
          <li><span className="text-red-400">Switch</span> statements improve readability when checking multiple conditions on a single variable.</li>
        </ul>
      </p>
    </div>
  );
};

export default JSSwitch;