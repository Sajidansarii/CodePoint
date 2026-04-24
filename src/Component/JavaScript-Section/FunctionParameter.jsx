import React from 'react';

const FunctionParametersDemo = () => {
  

  return (
    <div className="max-w-4xl p-6">
      <h1 className="text-3xl font-medium text-blue-500 mb-5">JavaScript Function Parameters</h1>
      <p>JavaScript <span className='text-red-400'>functions</span> don’t validate the values of their arguments.</p>
      

        <h1 className="text-2xl font-semibold text-gray-800 mt-10 mb-3">Function Parameters and Arguments</h1>
        <p>In the previous section, you learned that functions can accept parameters.</p>
      <pre className="bg-gray-200 p-4 rounded-lg mt-5 overflow-x-auto max-w-full whitespace-pre-wrap">
  <code>
    function functionName(parameter1, parameter2, parameter3) {"{"}
    <br />
    &nbsp;&nbsp;// code to be executed
    <br />
    {"}"}
  </code>
</pre>

        <p className='mt-5'>Parameters are the placeholders in a function definition, and arguments are the real values provided when the function is called.</p>



        <h1 className="text-2xl font-semibold text-gray-800 mt-10 mb-3">Parameter Rules</h1>
       <p className='mb-3'>JavaScript functions do not require specifying the type of their parameters.</p>
       <p className='mb-3'>JavaScript functions do not check the types of the arguments passed to them.</p>
       <p>Functions in JavaScript accept any number of arguments without checking.</p>
       
       <h1 className='text-2xl font-semibold text-gray-800 mt-10 mb-3'>Default Parameters</h1>
      <p className='mb-3'>When a function is called with fewer arguments than declared, the missing ones are assigned undefined.</p>
      <p>While this may be acceptable in certain situations, it’s usually better to set a default value for the parameter.</p>
      <h2 className='text-2xl text-gray-800 font-semibold mt-5'>Example</h2>
     <pre className="bg-gray-200 p-4 rounded-lg mt-5 overflow-x-auto max-w-full whitespace-pre-wrap">
  <code>
    function myFunction(x, y) {"{"}
    <br />
    &nbsp;&nbsp;if (y === undefined) {"{"}
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;y = 2;
    <br />
    &nbsp;&nbsp;{"}"}
    <br />
    {"}"}
  </code>
</pre>

      <h1 className='text-2xl text-gray-800 font-semibold mt-10 mb-3'>Default Parameter Values</h1>
     <p>In ES6, you can assign default values to function parameters.</p>
     <h2 className='text-2xl text-gray-800 font-semibold mt-5'>Example</h2>
  <pre className="bg-gray-200 p-4 rounded-lg mt-5 overflow-x-auto max-w-full whitespace-pre-wrap">
  <code>
    function myFunction(x, y = 10) {"{"}
    <br />
    &nbsp;&nbsp;return x + y;
    <br />
    {"}"}
    <br />
    myFunction(5);
  </code>
</pre>

     <h1 className='text-2xl text-gray-800 font-semibold mt-10 mb-3'>Function Rest Parameter</h1>
     <p>The rest parameter <span className='text-red-400'>(...)</span> lets a function handle any number of arguments as an array.</p>
     <h2 className='text-2xl text-gray-800 font-semibold mt-5'>Example</h2>
    <pre className="bg-gray-200 p-4 rounded-lg mt-5 overflow-x-auto max-w-full whitespace-pre-wrap">
  <code>
    function sum(...args) {"{"}
    <br />
    &nbsp;&nbsp;let sum = 0;
    <br />
    &nbsp;&nbsp;for (let arg of args) sum += arg;
    <br />
    &nbsp;&nbsp;return sum;
    <br />
    {"}"}
    <br /><br />

    let x = sum(4, 9, 16, 25, 29, 100, 66, 77);
  </code>
</pre>

     <h1 className='text-2xl text-gray-800 font-semibold mt-10 mb-3'>The Arguments Object</h1>
    <p className='mb-3'>JavaScript functions include a built-in object called <span className='text-red-400'>arguments</span>.</p>
     <p className='mb-3'>The <span className='text-red-400'>arguments</span> object holds an array of all arguments passed to the function when it was called.</p>
    <p>Using this method, a function can easily determine the highest value in an array of numbers.</p>
    <h2 className='text-gray-800 text-2xl font-semibold mt-5'>Example</h2>
   <pre className="bg-gray-200 p-4 rounded-lg mt-5 overflow-x-auto max-w-full whitespace-pre-wrap">
  <code>
    x = findMax(1, 123, 500, 115, 44, 88);
    <br /><br />

    function findMax() {"{"}
    <br />
    &nbsp;&nbsp;let max = -Infinity;
    <br />
    &nbsp;&nbsp;for (let i = 0; i &lt; arguments.length; i++) {"{"}
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;if (arguments[i] &gt; max) {"{"}
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;max = arguments[i];
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;{"}"}
    <br />
    &nbsp;&nbsp;{"}"}
    <br />
    &nbsp;&nbsp;return max;
    <br />
    {"}"}
  </code>
</pre>

    <p className='mt-5'>You can also make a function to calculate the total of all input values.</p>
    <h2 className='text-gray-800 text-2xl font-semibold mt-5'>Example</h2>
  <pre className="bg-gray-200 p-4 rounded-lg mt-5 overflow-x-auto max-w-full whitespace-pre-wrap">
  <code>
    x = sumAll(1, 123, 500, 115, 44, 88);
    <br /><br />

    function sumAll() {"{"}
    <br />
    &nbsp;&nbsp;let sum = 0;
    <br />
    &nbsp;&nbsp;for (let i = 0; i &lt; arguments.length; i++) {"{"}
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;sum += arguments[i];
    <br />
    &nbsp;&nbsp;{"}"}
    <br />
    &nbsp;&nbsp;return sum;
    <br />
    {"}"}
  </code>
</pre>

    <h1 className='text-gray-800 text-2xl font-semibold mt-10 mb-3'>Arguments are Passed by Value</h1>
    <p className='mb-3'>The arguments of a function are its parameters, and JavaScript passes them by value, so the function cannot access the original variable locations.</p>
    <p>If a function modifies an argument, the parameter’s original value remains unchanged.</p>
     

     <h1 className='text-gray-800 text-2xl font-semibold mt-10 mb-3'>Objects are Passed by Reference</h1>
    <p className='mb-3'>In JavaScript, object references are values, so objects behave as if they are passed by reference.</p>
    <p>Changing an object’s property within a function will change the object itself.</p>
    </div>
  );
};

export default FunctionParametersDemo;
