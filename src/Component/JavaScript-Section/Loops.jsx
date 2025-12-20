import React from "react";

const JSLoops = () => {
  return (
    <div className="max-w-4xl p-6">
      <h1 className="text-3xl font-medium text-blue-500 mb-4">JavaScript Loops</h1>
      
      <p className="text-gray-700 mb-6">
        <span className="text-red-400">Loops</span> in JavaScript are used to execute a block of code multiple times until a specified condition is met. 
        Loops help reduce repetitive code and make programs more efficient.
      </p>
      <p className="text-gray-700 mb-6">Loops are useful when you need to execute the same code repeatedly, possibly with different values each time.</p>
      <p className="text-gray-700 mb-6">Arrays often present this kind of situation.</p>

      <h1 className="text-2xl mb-5">Instead of writing:</h1>
      <pre className="text-green-400 bg-gray-900 p-4 rounded-lg">
        <code>
          {`
 text += cars[0] + "<br>";
 text += cars[1] + "<br>";
 text += cars[2] + "<br>";
 text += cars[3] + "<br>";
 text += cars[4] + "<br>";
 text += cars[5] + "<br>";
          `}
        </code>
      </pre>

      <h1 className="text-2xl mt-5 mb-5">You make it:</h1>
      <pre className="text-green-400 bg-gray-900 p-4 rounded-lg">
        <code>
          {`
for (let i = 0; i < cars.length; i++) {
  text += cars[i] + "<br>";
}
          `}
        </code>
      </pre>

      <h2 className="text-2xl font-semibold text-gray-800 mb-2 mt-10">For Loop</h2>
      <p className="text-gray-700">The <span className="text-red-400">for</span> statement sets up a loop using three optional expressions.</p>
      <pre className="bg-gray-900 p-4 rounded-lg text-green-400 mt-4">
        <code>
          {`
 for (expr1; expr2; expr) {
  // code block to be executed
}
`}
        </code>
      </pre>
      <p className="mt-5"><span className="font-semibold">exp1</span> executes a single time before the loop’s statements are executed.</p>
      <p className="mt-1">The second expression <span className="font-semibold">exp2</span> specifies the condition for executing the loop.</p>
      <p className="mt-1">The third expression <span className="font-semibold">exp3</span> is executed every time the loop completes an iteration.</p>

      <h1 className="text-2xl mt-5 mb-3">Example</h1>
      <pre className="text-green-400 bg-gray-900 p-4 rounded-lg">
        <code>
          {`
for (let i = 0; i < 5; i++) {
  text += "The number is " + i + "<br>";
}
          `}
        </code>
      </pre>

    

      <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-3">While Loop</h2>
      <p>A <span className="text-red-400">while</span> loop executes a block of code repeatedly as long as the given condition remains true.</p>
      <h1 className="text-2xl mt-5">Syntax</h1>
      <pre className="bg-gray-900 text-green-400 p-4 rounded mt-5 ">
        <code>
          {`
while (condition) {
  // code block to be executed
}
          `}
        </code>
      </pre>
      <h1 className="text-2xl mt-6">Example</h1>
      <p>In this example, the loop’s code will execute repeatedly while the variable i is less than 10.</p>
      <pre className="text-green-400 bg-gray-900 p-4 rounded-lg mt-5">
        <code>
          {`
 while (i < 10) {
  text += "The number is " + i;
  i++;
}
          `}
        </code>
      </pre>

      <h2 className="text-2xl font-semibold text-gray-800 mt-10">Do...While Loop</h2>
      <p className="mt-3"><span className="text-red-400">do…while</span> is a version of the while loop that executes its code block before checking the condition.</p>
     <p className="mt-3">The <span className="text-red-400">do…while loop</span> executes the code block once before checking the condition, then continues repeating the loop as long as the condition remains true.</p>
     <h1 className="text-2xl mt-5">Syntax</h1>
      <pre className="bg-gray-900 text-green-400 p-4 rounded-lg mb-4 mt-5">
        <code>
          {`
 do {
// code block to be executed
}
while (condition);
          `}
        </code>
      </pre>
      
      <h1 className="text-2xl mt-5">Example</h1>
      <pre className="text-green-400 bg-gray-900 p-4 rounded-lg mt-5">
        <code>
          {`
 do {
  text += "The number is " + i;
  i++;
}
while (i < 10);
          `}
        </code>
      </pre>

    

     

      <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-3">Key Points:</h2>
      <ul className="list-disc list-inside text-gray-700">
        <li>Use <span className="font-semibold">for</span> when the number of iterations is known.</li>
        <li>Use <span className="font-semibold">while</span> or <span className="font-semibold">do...while</span> for condition-based loops.</li>
        <li><span className="font-semibold">for...of</span> is best for iterating over iterable objects.</li>
        <li>Loops can be controlled using <span className="font-semibold">break</span> and <span className="font-semibold">continue</span> statements.</li>
      </ul>
    </div>
  );
};

export default JSLoops;