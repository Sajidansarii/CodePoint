import React from "react";

const JSErrors = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow mt-10">
      <h1 className="text-3xl font-bold text-blue-600 mb-4">JavaScript <span className="text-green-600">Errors</span></h1>
      
      <p className="text-gray-700 mb-6">
        In JavaScript, an *error* occurs when the code cannot execute properly. Errors can be due to syntax mistakes, runtime issues, or logical problems. 
        JavaScript provides built-in error types and allows developers to handle them using <span className="font-semibold">try...catch</span>.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mb-2">Example 1: Syntax Error</h2>
      <div className="bg-gray-100 p-4 rounded mb-4 overflow-x-auto">
        <code className="text-green-600">
          {`// Missing closing parenthesis
console.log("Hello World"; // ❌ SyntaxError: missing ) after argument list`}
        </code>
      </div>
      <p className="text-gray-700 mb-6">
        A *SyntaxError* occurs when there is a mistake in the code structure, like missing parentheses or brackets.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mb-2">Example 2: Runtime Error</h2>
      <div className="bg-gray-100 p-4 rounded mb-4 overflow-x-auto">
        <code className="text-green-600">
          {`let obj;
console.log(obj.name); // ❌ TypeError: Cannot read property 'name' of undefined`}
        </code>
      </div>
      <p className="text-gray-700 mb-6">
        A *Runtime Error* occurs while the code is executing, such as trying to access a property of an undefined variable.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mb-2">Example 3: Handling Errors with try...catch</h2>
      <div className="bg-gray-100 p-4 rounded mb-4 overflow-x-auto">
        <code className="text-green-600">
          {`try {
  let result = riskyOperation(); // may throw an error
} catch (error) {
  console.log("An error occurred:", error.message);
}`}
        </code>
      </div>
      <p className="text-gray-700">
        Using <span className="font-semibold">try...catch</span>, you can *handle errors gracefully* without breaking your program.
      </p>
    </div>
  );
};

export default JSErrors;