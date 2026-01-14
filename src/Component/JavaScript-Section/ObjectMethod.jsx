import React from "react";

const ObjectMethod = () => {
  
  return (
    <div className="max-w-4xl mt-10 p-6">
      <h1 className="text-3xl font-medium text-blue-500 mb-4">JavaScript Object Methods</h1>
     <p>Object methods are actions an object can perform and are defined as functions stored in its properties.</p>
      
      <h1 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Accessing Object Methods</h1>
      <p>You can call an object method using this syntax:</p>
      <pre className="text-green-400  bg-gray-900 p-4 rounded-lg mt-5">
        <code>
          {`objectName.methodName()`}
        </code>
      </pre>

      <p className="mt-5">If you use ( ) with <span className="text-red-400">fullName</span>, it runs like a function.</p>
      <h2 className="text-2xl text-gray-800 font-semibold mt-5">Example</h2>
      <pre className="text-green-400 bg-gray-900 p-4 rounded-lg mt-5">
        <code>
          {`name = person.fullName();`}
        </code>
      </pre>

      <p className="mt-5">Accessing <span className="text-red-400">fullName</span> without ( ) returns the function itself, not its result.</p>
      <h2 className="text-2xl text-gray-800 font-semibold mt-5">Example</h2>
       <pre className="text-green-400 bg-gray-800 p-4 rounded-lg mt-5">
        <code>
          {`name = person.fullName;`}
        </code>
       </pre>

       <h1 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Adding a Method to an Object</h1>
      <p>You can easily add a new method to an object.</p>
     <h2 className="text-gray-800 text-2xl font-semibold mt-5">Example</h2>
      <pre className="text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5">
        <code>
          {`person.name = function () {
  return this.firstName + " " + this.lastName;
};
`}
        </code>
      </pre>

      <h1 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Using JavaScript Methods</h1>
      <p>This example demonstrates using JavaScript’s <span className="text-red-400">toUpperCase( )</span> method to convert text to uppercase.</p>
      <h2 className="text-2xl text-gray-800 mt-5 font-semibold">Example</h2>
      <pre className="text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5">
        <code>
          {`person.name = function () {
  return (this.firstName + " " + this.lastName).toUpperCase();
};`}
        </code>
      </pre>
      
      </div>
  );
};

export default ObjectMethod;
