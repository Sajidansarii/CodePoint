import React from 'react';

const ArrowFunctionDemo = () => {
  return (
    <div className="max-w-4xl p-6">
      <h1 className="text-3xl font-medium text-blue-500"> JavaScript Arrow Functions</h1>
      
      <p>Introduced in ES6, arrow functions provide a shorter syntax, letting you omit the function keyword, return, and curly braces.</p>

      <h1 className='text-2xl text-gray-800 font-semibold mt-10 mb-3'>Before Arrow:</h1>
       <p>A function used to multiply a and b.</p>
       <pre className='text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5'>
          <code>
            {`let myFunction = function(a, b) {return a * b}`}
          </code>
        </pre>

        <h1 className='text-2xl text-gray-800 font-semibold mt-10 mb-3'>With Arrow  </h1>
        <pre className='text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5'>
          <code>
            {`let myFunction = (a, b) => a * b;`}
          </code>
        </pre>

        <h1 className='text-gray-800 text-2xl font-semibold mt-10 mb-3'>Before Arrow:</h1>
        <pre className='text-green-400 bg-gray-900 p-4 rounded-lg mt-5'>
          <code>
            {`let hello = function() {
  return "Hello World!";
}`}
          </code>
        </pre>

        <h1 className='text-2xl text-gray-800 font-semibold mt-10 mb-3'>With Arrow Function:</h1>
        <pre className='text-green-400 bg-gray-900 p-4 rounded-lg mt-5'>
          <code>
            {`let hello = () => {
  return "Hello World!";
}`}
          </code>
        </pre>

        <p className='mt-5'>When a function has a single return statement, you can omit both the braces and the return keyword.</p>

     <h1 className='text-2xl text-gray-800 font-semibold mt-10 mb-3'>Arrow Functions Return Value by Default:</h1>
     <pre className='text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5'>
      <code>
        {`let hello = () => "Hello World!";`}
      </code>
     </pre>

     <h1 className='text-gray-800 text-2xl font-semibold mt-10 mb-3'>Arrow Function Parameters</h1>
     <p>When there are parameters, you place them inside the parentheses.</p>
     <h2 className='text-2xl text-gray-800 font-semibold mt-5'>Example</h2>
    <pre className='text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5'>
      <code>
        {`let hello = (val) => "Hello " + val;`}
      </code>
    </pre>

    <p className='mt-5'>When there’s just one parameter, the parentheses can be omitted.</p>
    
    <h2 className='text-gray-800 text-2xl font-semibold mt-5'>Example</h2>
    <pre className='text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5'>
      <code>
        {`let hello = val => "Hello " + val;`}
      </code>
    </pre>

    <p className='mt-5'>You can remove the <span className='text-red-400'>return</span> keyword and braces only when the function has one statement, which is why some prefer to keep them for clarity.</p>
    <h2 className='text-2xl text-gray-800 font-semibold mt-5'>Example</h2>
    <pre className='text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5'>
      <code>
        {`// This will not work
let myFunction = (x, y) => { x * y } ;

// This will not work
let myFunction = (x, y) => return x * y ;

// Only this will work
let myFunction = (x, y) => { return x * y };`}
      </code>
    </pre>



     
     </div>
  );
};

export default ArrowFunctionDemo;
