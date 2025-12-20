import React from 'react';

const DefaultParameterDemo = () => {

  return (
    <div className="max-w-3xl p-6">
      <h1 className="text-3xl font-medium text-blue-500 mb-5"> JavaScript Default Parameters</h1>

        <p>
          <span className='text-red-400'>Default parameters</span> let you define fallback values for function arguments. If a value is
          not passed when the function is called, the default is used.
        </p>

        <h1 className='text-2xl text-gray-800 font-semibold mt-10 mb-3'></h1>
        <p className='mb-3'>Default parameters in JavaScript allow you to assign a default value to a function parameter. This feature was introduced in ES6. You can initialize parameters with these default values, so if a function is called without an argument or with an undefined value, the function will use the default value.</p>
       <p className='mb-3'>In JavaScript, a function parameter without a value is automatically set to undefined. While this is allowed, it can sometimes produce unexpected results.</p>
       <p>Before ES6, we had to manually check inside the function whether a parameter was undefined and then assign it a proper value.</p>
       <p className='mt-5'>Let’s take a look at an example to see how this works.</p>
       <pre className='text-green-400 bg-gray-900 p-4 rounded-lg mt-5'>
        <code>
          {`function sum(p, q) {
    return p + q;
}
sum(10, 20); // 30
sum(10); // NaN
sum(); // NaN`}
        </code>
       </pre>

       <ul className='list-inside list-[square] bg-gray-300 rounded mt-10 p-5'>
        <li>sum(10, 20) returns 30, which is the total of the two arguments, both of which are provided.</li>
        <li>sum() gives NaN since both parameters are missing and initialized as undefined.</li>
        <li>sum(10) gives NaN because the second parameter is not provided. Since q is undefined,the <span className='ml-5'>calculation</span> cannot be performed.</li>
       </ul>

       <p className='mt-5'>Calling a function with missing arguments returns NaN, but using default parameter values prevents this issue.</p>

       <h1 className='text-2xl text-gray-800 font-semibold mt-10 mb-3'>Default Parameters Syntax</h1>
        <p>JavaScript functions can have default parameters, and the syntax looks like this.</p>
        <pre className='text-green-400 bg-gray-900 p-4 rounded-lg mt-5'>
          <code>
            {`function functName(param1 = defaultValue1, param2 = DefaultValue2, ..) {
    // Use parameters here
}`}
          </code>
        </pre>

        <p className='mt-5'>In this example, param1 is initialized with defaultValue1, and param2 with defaultValue2 if no arguments are passed.</p>
     
     <h1 className='text-2xl text-gray-800 font-semibold mt-10 mb-3'>Example (Default parameters)</h1>
    <p>In the code below, p and q default to 30 and 40 respectively, so when any argument is missing, the output shows the sum of these default values.</p>
    <pre className='text-green-400 bg-gray-900 p-4 rounded-lg mt-5'>
      <code>
        {`let output = document.getElementById("output");
      function sum(p = 30, q = 40) {
         return p + q;
      }
      output.innerHTML += "sum(10, 20)  ->  " + sum(10, 20) + "<br>"; // 10 + 20 = 30
      output.innerHTML += "sum(10)  ->  " + sum(10) + "<br>"; // 10 + 40 = 50
      output.innerHTML += "sum()  ->  " + sum() + "<br>"; // 30 + 40 = 70
`}
      </code>
    </pre>

    <h1 className='text-2xl text-gray-800 font-semibold mt-5'>Output</h1>
    <ul className='bg-gray-300 p-5 rounded-lg list-inside list-none mt-5'>
    <li>sum(10, 20) {`->`} 30</li>
    <li>sum(10) {'->'} 50</li>
    <li>sum() {'->'} 70</li>
    </ul>

    <h1 className='text-2xl text-gray-800 font-semibold mt-10 mb-3'>Passing an expression as a default parameter value</h1>
    <p>You can assign an expression as a default value in a JavaScript function, and it can utilize values from preceding parameters.</p>
    <h2 className='text-2xl text-gray-800 font-semibold mt-5'>Example</h2>
    <pre className='text-green-400 bg-gray-900 p-4 rounded-lg mt-5'>
      <code>
        {`let output = document.getElementById("output");
      function sum(p = 2, q = p * 2, r = p * q * 2) {
         return p + q + r;
      }
      output.innerHTML += "sum(5, 10, 15)  ->  " + sum(5, 10, 15) + "<br>"; 
      // 5 + 10 + 15 = 30
      output.innerHTML += "sum(5, 10)  ->  " + sum(5, 10) + "<br>"; 
      // 5 + 10 + (5 * 10 * 2) = 115
      output.innerHTML += "sum()  ->  " + sum() + "<br>"; 
      // 2 + 4 + 16 = 22`}
      </code>
    </pre>

     <h1 className='text-2xl text-gray-800 font-semibold mt-5'>Output</h1>
    <ul className='bg-gray-300 p-5 rounded-lg list-inside list-none mt-5'>
    <li>sum(5, 10, 15) {'->'} 30</li>
    <li>sum(5, 10) {'->'} 115</li>
    <li>sum() {'->'} 22</li>
    </ul>

    <h1 className='text-2xl text-gray-800 font-semibold mt-10 mb-3'>Passing Undefined Argument</h1>
    <p>When a function receives undefined as an argument, it applies the default values to maintain error-free execution. </p>
    <h2 className='text-2xl text-gray-800 font-semibold mt-5'>Example</h2>
    <pre className='text-green-400 bg-gray-900 p-4 rounded-lg mt-5'>
      <code>
        {`let output = document.getElementById("output");
      function sum(p = 24, q = 26) {
         return p + q;
      }

      output.innerHTML += "sum(5, undefined)  ->  " +sum(5, undefined)+"<br>"; 
      // 5 + 26 = 31 
      output.innerHTML += "sum(undefined)  ->  " + sum(undefined) + "<br>"; 
      // 24 + 26 = 50`}
      </code>
    </pre>

     <h1 className='text-2xl text-gray-800 font-semibold mt-5'>Output</h1>
    <ul className='bg-gray-300 p-5 rounded-lg list-inside list-none mt-5'>
    <li>sum(5, undefined) {'->'} 31</li>
    <li>sum(undefined) {'->'} 50</li>
    </ul>


    <h1 className='text-2xl text-gray-800 mt-10 mb-3 font-semibold'>Function expression as a default parameter</h1>
   <p>A function expression can serve as a default parameter in JavaScript. Here, the <span className='text-red-400'>getNum()</span> function returns 5 and is set as q’s default. If the second argument isn’t provided, q uses the return value of <span className='text-red-400'>getNum()</span>.</p>
   <h2 className='text-gray-800 text-2xl font-semibold mt-5'>Example</h2>
    <pre className='text-green-400 bg-gray-900 p-4 rounded-lg mt-5'>
      <code>
        {`let output = document.getElementById("output");
      function getNum() {
         return 5;
      }
      function mul(p = 5, q = getNum()) {
         return p * q;
      }

      output.innerHTML += "mul(10)  -> " + mul(10) + "<br/>";
      output.innerHTML += "mul() -> " + mul() + "<br/>";`}
      </code>
    </pre>

    <h1 className='text-2xl text-gray-800 font-semibold mt-5'>Output</h1>
    <ul className='bg-gray-300 p-5 rounded-lg list-inside list-none mt-5'>
    <li>mul(10) {'->'} 50</li>
    <li>mul() {'->'} 25</li>
    </ul>

    <h1 className='text-2xl text-gray-800 font-semibold mt-10 mb-3'>Function Optional Parameters</h1>
    <p>Default parameters in functions are also known as optional parameters because the function works without errors even if no argument is provided for them. Required parameters should come first, followed by optional ones at the end.</p>
    <h2 className='text-gray-800 text-2xl font-semibold mt-5'>Example</h2>
    <pre className='text-green-400 bg-gray-900 p-4 rounded-lg mt-5'>
      <code>
        {`function sum(p, q=10){
   return p+q;
}`}
      </code>
    </pre>

    <p className='mt-5'>In the JavaScript snippet above, the optional parameter q is placed at the end of the parameter list.</p>
    <h2 className='text-gray-800 text-2xl font-semibold mt-5 mb-3'>Example</h2>
    <p>In the code below, the first parameter must be provided, and the second parameter is optional.</p>
    <pre className='text-green-400 bg-gray-900 p-4 rounded-lg mt-5'>
      <code>
        {` let output = document.getElementById("output");
      function func(p, q=10) {
         return p + q;
      }
      output.innerHTML += "func(10, 20) -> " + func(10, 20);`}
      </code>
    </pre>

    <h1 className='text-2xl text-gray-800 font-semibold mt-5'>Output</h1>
    <ul className='bg-gray-300 p-5 rounded-lg list-inside list-none mt-5'>
    <li>func(10, 20) {'->'} 30</li>
    </ul>

    <p className='mt-5'>Placing the optional parameter at the start can cause errors when the function is called with undefined.</p>
    <pre className='text-green-400 bg-gray-900 p-4 rounded-lg mt-5'>
      <code>
        {`function sum(p=10, q){
   return p+q;
}
sum(,10) // Error
sum(10) // NaN`}
      </code>
    </pre>

    <p className='mt-5'>So, if you pass only a single argument, it replaces the default value of the first parameter, and the second parameter remains undefined.</p>
    
    
    
    
    
    
    
    
    
    </div>
  );
};

export default DefaultParameterDemo;
