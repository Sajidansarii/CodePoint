import React from 'react';

const Function = () => {
  return (
    <div className="max-w-4xl p-6">
      <h1 className="text-3xl font-medium text-blue-500">JavaScript Functions</h1>

      <h1 className='text-2xl text-gray-800 font-semibold mt-10 mb-3'>What are Functions?</h1>
      <p className='mb-3'>Functions serve as essential building blocks in every programming language.</p>
      <p className='mb-3'>A function is a block of code that can be reused and is intended to perform a particular operation.</p>
      <p>Functions run only when they are called or invoked.</p>

      <h2 className='text-2xl text-gray-800 font-semibold mt-5 mb-3'>Example</h2>
     <p>A function that calculates the product of two numbers.</p>
     <pre className='text-green-400 bg-gray-900 p-4 rounded-lg mt-5'>
      <code>
        {`function myFunction(p1, p2) {
  return p1 * p2;
}`}
      </code>
     </pre>

     <h1 className='text-gray-800 text-2xl font-semibold mt-10 mb-3'>JavaScript Function Syntax</h1>
    <pre className='text-green-400 bg-gray-900 p-4 rounded-lg mt-5'>
      <code>
        {`function name( p1, p2, ... ) {
  // code to be executed
}`}
      </code>
    </pre>

    <p className='mt-5'>Functions are created using the function keyword.</p>
     <ul className='list-none bg-gray-300 p-5 rounded-lg mt-5'>
      <li>followed by the function name</li>
      <li>followed by parentheses ( )</li>
      <li>followed by brackets { }</li>
     </ul>

     <p className='mt-5 mb-3'>The name of a function follows the same rules as variable names, while optional parameters go inside parentheses <span className='text-red-400'>(p1, p2, ...)</span>.</p>
      <p>The code to run is placed within curly braces {}, and functions can optionally return a value to the caller.</p>
      

      <h1 className='text-2xl text-gray-800 font-semibold mt-10 mb-3'>Why Functions?</h1>
      <p>Functions help organize code more efficiently, allow reuse, and let you run the same code with different arguments to get different results.</p>
      
      <p className='text-2xl text-gray-800 font-semibold mt-10 mb-3'>Function Invocation ()</p>
      <p>The code within a function runs when the function is called or invoked.</p>
       <ul className='list-none p-5 rounded-lg'>
        <li>When it is invoked (called) from JavaScript code</li>
        <li>When an event occurs (a user clicks a button)</li>
        <li>Automatically (self invoked)</li>
       </ul>
       <p className='font-bold'>The () operator invokes a the function.</p>


     <h2 className='text-gray-800 text-2xl font-semibold mt-10 mb-3'>Example</h2>
     <p>toCelsius() invokes the toCelsius function:</p>
     <pre className='text-green-400 bg-gray-900 p-4 rounded-lg mt-5'>
      <code>
        {`// Convert Fahrenheit to Celsius:
function toCelsius(fahrenheit) {
  return (5/9) * (fahrenheit-32);
}

// Call the toCelcius() function
let value = toCelsius(77);`}
      </code>
     </pre>

     <p className='mt-5'>Accessing a function with incorrect parameters can return an incorrect answer:</p>
     
     <h2 className='text-2xl text-gray-800 font-semibold mt-5'>Example</h2>
     <pre className='text-green-400 bg-gray-900 p-4 rounded-lg mt-5'>
      <code>
        {`function toCelsius(fahrenheit) {
  return (5/9) * (fahrenheit-32);
}

let value = toCelsius();`}
      </code>
     </pre>
     <p className='mt-5'>If you access a function without parentheses, you get the function object rather than its output.</p>
     
     <h2 className='text-gray-800 text-2xl font-semibold mt-10 mb-3'>Example</h2>
     <pre className='text-green-400 bg-gray-900 p-4 rounded-lg mt-5'>
      <code>
        {`function toCelsius(fahrenheit) {
  return (5/9) * (fahrenheit-32);
}

let value = toCelsius;`}
      </code>
     </pre>

     <h1 className='text-2xl text-gray-800 font-semibold mt-10 mb-3'>Local Variables</h1>
     <p className='mb-3'>Variables defined inside a JavaScript function are local to that function.</p>
     <p>Local variables are accessible only inside the function where they are defined.</p>

     <h2 className='text-2xl text-gray-800 font-semibold mt-5'>Example</h2>
     <pre className='text-green-400 bg-gray-900 p-4 rounded-lg mt-5'>
      <code>
        {`// code here can NOT use carName

function myFunction() {
  let carName = "Volvo";
  // code here CAN use carName
}

// code here can NOT use carName`}
      </code>
     </pre>

     <p className='mt-3 mb-3'>Because local variables exist only within their functions, the same variable name can be used in multiple functions.</p>
      <p>Local variables are created at the start of a function and removed when the function finishes.</p>


    <h1 className='text-2xl text-gray-800 font-semibold mt-10 mb-3'>Parameters vs. Arguments</h1>
    <p className='mb-3'>In JavaScript, parameters and arguments are two different concepts.</p>
    <p>Parameters are the identifiers listed when defining a function, while arguments are the actual values passed to the function.</p>
   
   <h2 className='text-gray-800 text-2xl font-semibold mt-5 mb-3'>Example</h2>
   <p>"name" and "age" are parameters:</p>
    <pre className='text-green-400 bg-gray-900 p-4 rounded-lg mt-5'>
      <code>
        {`function greet(name, age) {
  return \`Hello \${name}! You are \${age} years old.\`;
}`}
      </code>
    </pre>
    <p className='mt-5'>"John" and 21 are arguments:</p>
    <pre className='text-green-400 bg-gray-900 p-4 rounded-lg mt-5'>
      <code>
        {`greet("John", 21);`}
      </code>
    </pre>

    <h1 className='text-2xl text-gray-800 mt-10 mb-3 font-semibold'>Functions Used as Variables</h1>
   <p>Functions can act like variables and be used in formulas, assignments, and calculations.</p>
   <h2 className='text-2xl text-gray-800 font-semibold mt-5 mc-3'>Example</h2>
    <p>Instead of using a variable to store the return value of a function:</p>
    <pre className='text-green-400 bg-gray-900 p-4 rounded-lg mt-5'>
      <code>
        {`let x = toCelsius(77);
let text = "The temperature is " + x + " Celsius";`}
      </code>
    </pre>

    <p className='mt-5'>You can use the function directly, as a variable value:</p>
    <pre className='text-green-400 bg-gray-900 p-4 rounded-lg mt-5'>
      <code>
        {`let text = "The temperature is " + toCelsius(77) + " Celsius";`}
      </code>
    </pre>

    


   
    </div>
  );
};

export default Function;
