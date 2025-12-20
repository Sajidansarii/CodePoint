import React, { useState } from 'react';

const AnonymousFunctionDemo = () => {

  return (
    <div className="max-w-4xl p-6">
      <h1 className="text-3xl font-medium text-blue-500 mb-3"> JavaScript Anonymous Functions</h1>

        <p className='mb-3'>
          Anonymous functions are functions without a name. They are usually used as arguments to
          other functions, especially in callbacks, event handlers, and inline operations.
        </p>

        <p>JavaScript, like other modern languages, allows anonymous functions, which are functions without names. Unlike regular functions that have identifiers, anonymous ones are nameless and ideal for short, simple code. This article explains their meaning, syntax, usage, pros, and cons.</p>

       <h1 className='text-2xl text-gray-800 font-semibold mt-10'>Syntax</h1>
       <pre className='text-green-400 bg-gray-900 p-4 rounded-lg mt-5'>
        <code>
          {`const EnumType = {
   variable = function () {
   function body
};
// to call the function variable()`}
        </code>
       </pre>

       <p className='mt-10'>As shown, the function has no name and is assigned directly to a variable, which can then be used as the function itself. You can also copy it to another variable. Let’s look at an example.</p>
      <h2 className='text-2xl text-gray-800 font-semibold mt-5'>Example</h2>
      <pre className='text-green-400 bg-gray-900 p-4 rounded-lg mt-5'>
        <code>
          {`var content = ''
      var error = ''
      var opDiv = document.querySelector('#output')
      var opErrDiv = document.querySelector('#opError')
      
      // actual javascript code
      try {
         function normalFunction() {
            content += "Output from a normal function." + '<br>'
         }
         var f = function () {
            content += "Output from an anonymous function." + '<br>'
         };
         f()
         normalFunction();
      
         // assign f to some new variable
         f1 = f
         f1()
      }
      catch (err) {
         error += err
      }
      finally {
      
         // display on output console
         opDiv.innerHTML = content
         opErrDiv.innerHTML = error
      }`}
        </code>
      </pre>

      <h1 className='text-2xl text-gray-800 font-semibold mt-10 mb-3'>Passing function as an argument</h1>
       <p>Sometimes we pass a function itself—not its returned value—as a parameter to another function. Here’s an example where a line is printed after a 2-second (2000 ms) delay.</p>
       <h2 className='text-2xl text-gray-800 font-semibold mt-5'>Example</h2>
       <pre className='text-green-400 bg-gray-900 p-4 rounded-lg mt-5'>
        <code>
          {`var content = ''
      var error = ''
      var opDiv = document.querySelector('#output')
      var opErrDiv = document.querySelector('#opError')
   
      // actual javascript code
      try {
         setTimeout(
            function () {
               content += "Output is coming after 2 seconds (2000 milliseconds)" + '<br>'
               opDiv.innerHTML = content
            },
            2000
         );
      }
      catch (err) {
         error += err
      }
      finally {
   
         // display on output console
         opDiv.innerHTML = content
         opErrDiv.innerHTML = error
      }`}
        </code>
       </pre>

       <p className='mt-5'>The example uses setTimeout(), a function that takes another function and a delay value, then runs the passed function after 2 seconds.</p>
 
     <h1 className='text-2xl text-gray-800 font-semibold mt-10 mb-3'>Immediate execution of functions</h1>      
    <p>In situations where a function needs to be defined and executed instantly, anonymous functions are very useful. Here’s the syntax:</p>
    <h2 className='text-2xl text-gray-800  font-semibold mt-5'>Syntax</h2>
   <pre className='text-green-400 bg-gray-900 p-4 rounded-lg mt-5'>
    <code>
      {`(
   function (){
      //function body
   }
)();`}
    </code>
   </pre>

   <h2 className='text-2xl text-gray-800 mt-10 mb-3 font-semibold'>Example</h2>
   <pre className='text-green-400 bg-gray-900 p-4 rounded-lg mt-5'>
    <code>
      {`  var content = ''
      var error = ''
      var opDiv = document.querySelector('#output')
      var opErrDiv = document.querySelector('#opError')

      // actual javascript code
      try {
         (
            function () {
               content += "Execute immediately after declare this function" + '<br>'
            }
         )();
      }
      catch (err) {
         error += err
      }
      finally {
      
         // display on output console
         opDiv.innerHTML = content
         opErrDiv.innerHTML = error
      }`}
    </code>
   </pre>

   <h2 className='mt-10 mb-3 text-gray-800 text-2xl font-semibold'>Advantages and Disadvantages of Anonymous Functions</h2>
   <p className='mb-3'>Anonymous functions are useful because they can be written inline and can access all local variables, making the code simpler. Since they have no name, they don’t interfere with any namespace—global or local.</p>
  <p>Anonymous functions aren’t always ideal. For example, with addEventListener(type, function), you can’t remove the event handler later because the function has no reference. Another downside is that each anonymous function creates a new instance. In situations where a regular function works the same, using an anonymous one offers no benefit. This becomes a performance issue if the function is created repeatedly inside a loop.</p>
  









    </div>
  );
};

export default AnonymousFunctionDemo;
