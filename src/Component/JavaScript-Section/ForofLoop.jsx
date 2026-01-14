import React from "react";

const JSForLoop = () => {
  return (
    <div className="max-w-4xl p-6">
      <h1 className="text-3xl font-medium text-blue-500 mb-4">JavaScript For of Loop</h1>
      
      <p className="text-gray-700 mb-6">
        The <span className="text-red-400">for loop</span> is used to repeat a block of code a specific number of times. 
        It is ideal when you know in advance how many times the loop should run.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mb-2">Syntax:</h2>
      <pre className="bg-gray-900 text-green-400 p-4 rounded-lg mb-5 mt-5">
        <code>
          {`
 for (variable of iterable) {
  // code block to be executed
}
`}
        </code>
      </pre>
      <p className="mt-3">For every loop cycle, the next property’s key is stored in the variable, which can be defined with <span className="text-red-400">const</span>, <span className="text-red-400">let</span>, or <span className="text-red-400">var</span>.</p>
      <p className="mt-3">An iterable is an object whose elements can be iterated over.</p>

      <h1 className="text-2xl text-gray-800 mt-10">Looping over an Array</h1>
      <h2 className="text-2xl mt-5">Example</h2>
      <pre className="text-green-400 bg-gray-900 overflow-x-auto p-4 rounded-lg mt-5">
        <code>
          {`
const fruits = ["Apple", "Banana", "Cherry"] ;
let text = "";
for (let x of fruits) {
  text += x;
}
          `}
        </code>
      </pre>

      <h1 className="text-2xl text-gray-800 mt-10">Looping over a String</h1>
      <h2 className="text-2xl mt-5">Example</h2>
      <pre className="text-green-400 bg-gray-900 p-4 rounded-lg mt-5">
        <code>
          {`
let language = "JavaScript";
let text = "";
for (let x of language) {
text += x;
}
          `}
        </code>
      </pre>





    </div>
  );
};

export default JSForLoop;