import React, { useState } from "react";

const JSCallbacks = () => {

  return (
    <div className="max-w-4xl p-6 mt-10">
      <h1 className="text-3xl font-medium text-blue-500 mb-3">Callbacks in JavaScript</h1>

      <p>
        A <span className="text-red-400">callback</span> is a function passed as an argument to another function, 
        which is executed after the completion of a task. They are often used in asynchronous programming.
      </p>

      <h1 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Function Sequence</h1>
      <p className="mb-3">JavaScript functions run in the order they are invoked, not in the order they are defined.</p>
      <p>The output will show “Hello” initially, followed by “Goodbye,” since the functions are invoked in that order.</p>
      <h2 className="text-gray-800 text-2xl font-semibold mt-5">Example</h2>
      <pre className="bg-gray-200 p-4 rounded-lg mt-5">
        <code>
          {`function myFirst() {
  myDisplayer("Hello");
}

function mySecond() {
  myDisplayer("Goodbye");
}

myFirst();
mySecond();`}
        </code>
      </pre>
      
      <p className="mt-5">This example first displays “Goodbye” and then ends with “Hello” because the functions are called in that order.</p>
      <h2 className="text-gray-800 text-2xl font-semibold mt-5">Example</h2>
      <pre className="bg-gray-200 p-4 rounded-lg mt-5">
        <code>
          {`function myFirst() {
  myDisplayer("Hello");
}

function mySecond() {
  myDisplayer("Goodbye");
}

mySecond();
myFirst();`}
        </code>
      </pre>

      <h1 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Sequence Control</h1>
      <p>Sometimes you need better control over when a function runs, such as calculating a value first and then displaying the result.</p>
      <p>You can run a calculator function <span className="text-red-400">(myCalculator)</span>, store the result, and then call another function <span className="text-red-400">(myDisplayer)</span> to show it.</p>
      <h2 className="text-2xl text-gray-800 font-semibold mt-5">Example</h2>
      <pre className="overflow-x-auto bg-gray-200 p-4 rounded-lg mt-5">
        <code>
          {`function myDisplayer(some) {
  document.getElementById("demo").innerHTML = some;
}

function myCalculator(num1, num2) {
  let sum = num1 + num2;
  return sum;
}

let result = myCalculator(5, 5);
myDisplayer(result);`}
        </code>
      </pre>

      <p className="mt-10">Alternatively, you can call the calculator function <span className="text-red-400">(myCalculator)</span> and have it invoke the display function <span className="text-red-400">(myDisplayer)</span> itself.</p>
      <h2 className="text-2xl text-gray-800 font-semibold mt-5">Example</h2>
      <pre className="overflow-x-auto bg-gray-200 p-4 rounded-lg mt-5">
        <code>
          {`function myDisplayer(some) {
  document.getElementById("demo").innerHTML = some;
}

function myCalculator(num1, num2) {
  let sum = num1 + num2;
  myDisplayer(sum);
}

myCalculator(5, 5);`}
        </code>
      </pre>

      <p className="mt-10">The first approach requires calling two functions to display the result, while the second forces the calculator to display it, so a callback is needed.</p>
     
     <h1 className="text-2xl text-gray-800 font-semibold mt-10 mb-5">JavaScript Callbacks</h1>
     <p>With a callback, <span className="text-red-400">myCalculator</span> can be called along with <span className="text-red-400">myCallback</span>, allowing the callback to run after the calculation finishes.</p>
    <h2 className="text-2xl text-gray-800 font-semibold mt-5">Example</h2>
     <pre className="overflow-x-auto bg-gray-200 p-4 rounded-lg mt-5">
      <code>
        {`function myDisplayer(some) {
  document.getElementById("demo").innerHTML = some;
}

function myCalculator(num1, num2, myCallback) {
  let sum = num1 + num2;
  myCallback(sum);
}

myCalculator(5, 5, myDisplayer);`}
      </code>
     </pre>

     <p className="mt-5 mb-3">The <span className="text-red-400">myDisplayer</span> function in the example is called a callback.</p>
     <p>It is provided to <span className="text-red-400">myCalculator()</span> as an argument.</p>
    <h2 className="text-2xl text-gray-800 font-semibold mt-5">Example</h2>
    <pre className="overflow-x-auto bg-gray-200 p-4 rounded-lg mt-5">
      <code>
        {`// Create an Array
const myNumbers = [4, 1, -20, -7, 5, 9, -6];

// Call removeNeg with a callback
const posNumbers = removeNeg(myNumbers, (x) => x >= 0);

// Display Result
document.getElementById("demo").innerHTML = posNumbers;

// Keep only positive numbers
function removeNeg(numbers, callback) {
  const myArray = [];
  for (const x of numbers) {
    if (callback(x)) {
      myArray.push(x);
    }
  }
  return myArray;
}`}
      </code>
    </pre>

    <p className="mt-5">The function <span className="text-red-400">{'(x) => x >= 0'}</span> in the example acts as a callback and is passed to <span className="text-red-400">removeNeg()</span> as an argument.</p>
    <h1 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">When to Use a Callback?</h1>
   <p>The examples above are simplified to teach callback syntax, so they aren’t very exciting.</p>
    <p>Callbacks are especially useful in asynchronous functions, where one function must wait for another, such as when loading a file.</p>

    </div>
  );
};

export default JSCallbacks;