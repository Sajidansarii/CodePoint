import React from 'react';

const ArrowFunctionDemo = () => {
  return (
    <div className="max-w-4xl p-6">
      <h1 className="text-3xl font-medium text-blue-500"> JavaScript Arrow Functions</h1>
      
      <p>Introduced in ES6, arrow functions provide a shorter syntax, letting you omit the function keyword, return, and curly braces.</p>

      <h1 className='text-2xl text-gray-800 font-semibold mt-10 mb-3'>Before Arrow:</h1>
       <p>A function used to multiply a and b.</p>
      <pre className="bg-gray-200 p-4 rounded-lg mt-5 overflow-x-auto max-w-full whitespace-pre-wrap">
  <code>
    let myFunction = function(a, b) {"{"}
    <br />

    &nbsp;&nbsp;return a * b;
    <br />

    {"}"}
  </code>
</pre>

        <h1 className='text-2xl text-gray-800 font-semibold mt-10 mb-3'>With Arrow  </h1>
      <pre className="bg-gray-200 p-4 rounded-lg mt-5 overflow-x-auto max-w-full whitespace-pre-wrap">
  <code>
    let myFunction = (a, b) =&gt; a * b;
  </code>
</pre>

        <h1 className='text-gray-800 text-2xl font-semibold mt-10 mb-3'>Before Arrow:</h1>
       <pre className="bg-gray-200 p-4 rounded-lg mt-5 overflow-x-auto max-w-full whitespace-pre-wrap">
  <code>
    let hello = function() {"{"}
    <br />

    &nbsp;&nbsp;return "Hello World!";
    <br />

    {"}"}
  </code>
</pre>

        <h1 className='text-2xl text-gray-800 font-semibold mt-10 mb-3'>With Arrow Function:</h1>
       <pre className="bg-gray-200 p-4 rounded-lg mt-5 overflow-x-auto max-w-full whitespace-pre-wrap">
  <code>
    let hello = () =&gt; {"{"}
    <br />

    &nbsp;&nbsp;return "Hello World!";
    <br />

    {"}"}
  </code>
</pre>

        <p className='mt-5'>When a function has a single return statement, you can omit both the braces and the return keyword.</p>

     <h1 className='text-2xl text-gray-800 font-semibold mt-10 mb-3'>Arrow Functions Return Value by Default:</h1>
   <pre className="bg-gray-200 p-4 rounded-lg mt-5 overflow-x-auto max-w-full whitespace-pre-wrap">
  <code>
    let hello = () =&gt; "Hello World!";
  </code>
</pre>

     <h1 className='text-gray-800 text-2xl font-semibold mt-10 mb-3'>Arrow Function Parameters</h1>
     <p>When there are parameters, you place them inside the parentheses.</p>
     <h2 className='text-2xl text-gray-800 font-semibold mt-5'>Example</h2>
   <pre className="bg-gray-200 p-4 rounded-lg mt-5 overflow-x-auto max-w-full whitespace-pre-wrap">
  <code>
    let hello = (val) =&gt; "Hello " + val;
  </code>
</pre>

    <p className='mt-5'>When there’s just one parameter, the parentheses can be omitted.</p>
    
    <h2 className='text-gray-800 text-2xl font-semibold mt-5'>Example</h2>
   <pre className="bg-gray-200 p-4 rounded-lg mt-5 overflow-x-auto max-w-full whitespace-pre-wrap">
  <code>
    let hello = val =&gt; "Hello " + val;
  </code>
</pre>

    <p className='mt-5'>You can remove the <span className='text-red-400'>return</span> keyword and braces only when the function has one statement, which is why some prefer to keep them for clarity.</p>
    <h2 className='text-2xl text-gray-800 font-semibold mt-5'>Example</h2>
    <pre className="bg-gray-200 p-4 rounded-lg mt-5 overflow-x-auto max-w-full whitespace-pre-wrap">
  <code>
    // This will not work
    <br />
    let myFunction = (x, y) =&gt; {"{"} x * y {"}"} ;
    <br /><br />

    // This will not work
    <br />
    let myFunction = (x, y) =&gt; return x * y ;
    <br /><br />

    // Only this will work
    <br />
    let myFunction = (x, y) =&gt; {"{"} return x * y {"}"};
  </code>
</pre>

     
     </div>
  );
};

export default ArrowFunctionDemo;
