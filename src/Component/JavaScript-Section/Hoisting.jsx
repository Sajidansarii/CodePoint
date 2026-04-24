import React from "react";

const JSHoisting = () => {
  return (
    <div className="max-w-4xl p-6">
      <h1 className="text-3xl font-medium text-blue-500 mb-4">JavaScript Hoisting</h1>
      <p className="mb-6">
        <span className="text-red-400">Hoisting</span> is a JavaScript behavior where *variable and function declarations are moved to the top of their scope* during the compilation phase. 
        This means you can use variables and functions before they are declared, but with some important differences depending on how you declare them.
      </p>
      <h1 className="text-2xl mt-10">JavaScript Declarations are Hoisted</h1>
      <p>You can use a variable before its actual declaration line.</p>
      <h1 className="text-2xl mt-5">Example1</h1>
    <pre className="bg-gray-200 p-4 rounded-lg mt-10 overflow-x-auto max-w-full whitespace-pre-wrap">
  <code>
    x = 5; // Assign 5 to x
    <br /><br />

    elem = document.getElementById("demo"); // Find an element
    <br />
    elem.innerHTML = x; // Display x in the element
    <br /><br />

    var x; // Declare x
  </code>
</pre>

      <h1 className="text-2xl mt-5">Example 2</h1>
     <pre className="bg-gray-200 p-4 rounded-lg mt-10 overflow-x-auto max-w-full whitespace-pre-wrap">
  <code>
    var x; // Declare x
    <br />
    x = 5; // Assign 5 to x
    <br /><br />

    elem = document.getElementById("demo"); // Find an element
    <br />
    elem.innerHTML = x; // Display x in the element
  </code>
</pre>

      <p className="mt-5 mb-10">In JavaScript, hoisting means that variable and function declarations are moved to the top of their scope before the code runs.</p>

      <h1 className="text-2xl mt-10">The let and const Keywords</h1>
      <p className="leading-relaxed mt-3"><span className="text-red-400 bg-gray-50 px-1">let</span> and <span className="text-red-400 bg-gray-50 px-1">const</span> variables are hoisted, but they aren’t given a value until the code reaches their line.</p>
      <p className="leading-relaxed mt-3">A variable declared with <span className="text-red-400 bg-gray-50 px-1">let</span> can't be used until the line of code where it's defined. Trying to use it earlier results in a ReferenceError."</p>
      <p className="leading-relaxed mt-3">From the start of the block to the point where it's declared, the variable is in a temporal dead zone and cannot be accessed.</p>
     <h1 className="text-2xl mt-10">Example</h1>
     <p className="mt-3">This will throw a ReferenceError.</p>
    <pre className="bg-gray-200 p-4 rounded-lg mt-5 overflow-x-auto max-w-full whitespace-pre-wrap">
  <code>
    cityName = "Mumbai";
    <br />
    let cityName;
  </code>
</pre>

     <p className="leading-relaxed mt-5">Trying to use a <span className="text-red-400 bg-gray-50 px-1">const</span> variable before it's declared causes a syntax error, preventing the code from running.</p>
    <h1 className="text-2xl mt-10">Example</h1>
    <p>This causes the program to halt before running.</p>
   <pre className="bg-gray-200 p-4 rounded-lg mt-5 overflow-x-auto max-w-full whitespace-pre-wrap">
  <code>
    cityName = "Volvo";
    <br />
    const cityName;
  </code>
</pre>

    <h1 className="text-2xl mt-10">JavaScript Initializations are Not Hoisted</h1>
    <p className="leading-relaxed mt-3">Variable declarations are moved to the top during hoisting, but their initializations are not.</p>
    <h1 className="text-2xl mt-5">Example</h1>
  <pre className="bg-gray-200 p-4 rounded-lg mt-5 overflow-x-auto max-w-full whitespace-pre-wrap">
  <code>
    var x = 5; // Initialize x
    <br />
    var y = 7; // Initialize y
    <br /><br />

    elem = document.getElementById("demo"); // Find an element
    <br />
    elem.innerHTML = x + " " + y; // Display x and y
  </code>
</pre>

    <h1 className="text-2xl mt-5">Example</h1>
  <pre className="bg-gray-200 p-4 rounded-lg mt-5 mb-10 overflow-x-auto max-w-full whitespace-pre-wrap">
  <code>
    var x = 5; // Initialize x
    <br /><br />

    elem = document.getElementById("demo"); // Find an element
    <br />
    elem.innerHTML = x + " " + y; // Display x and y
    <br /><br />

    var y = 7; // Initialize y
  </code>
</pre>

    <p className="leading-relaxed mt-3">That's because only the declaration <span className="bg-gray-50">(var y)</span> is hoisted — the assignment <span className="bg-gray-50">(= 7)</span> stays where it is.</p>
    <p className="leading-relaxed mt-3">Hoisting causes <span className="bg-gray-50"> y </span> to be declared ahead of time, but without its initialization, so it holds undefined initially.</p>
    <h1 className="text-2xl mt-5">Example</h1>
  <pre className="bg-gray-200 p-4 rounded-lg mt-5 overflow-x-auto max-w-full whitespace-pre-wrap">
  <code>
    var x = 5; // Initialize x
    <br />
    var y; // Declare y
    <br /><br />

    elem = document.getElementById("demo"); // Find an element
    <br />
    elem.innerHTML = x + " " + y; // Display x and y
    <br /><br />

    y = 7; // Assign 7 to y
  </code>
</pre>

    </div>
  );
};

export default JSHoisting;