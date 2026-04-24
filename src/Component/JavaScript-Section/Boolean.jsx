import React from "react";

const JSBoolean = () => {
  return (
    <div className="max-w-4xl p-6">
      <h1 className="text-3xl font-medium text-blue-500 mb-4">JavaScript Boolean</h1>
      
      <p className="text-gray-700 mb-6">
        A <span className="text-red-400">Boolean</span> in JavaScript is a *primitive data type* that represents one of two values: <span className="font-semibold">true</span> or <span className="font-semibold">false</span>. 
        Booleans are commonly used in conditional statements and logical operations.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mb-2">Creating Boolean Values</h2>
     <pre className="bg-gray-200 p-4 rounded-lg mt-5 overflow-x-auto max-w-full whitespace-pre-wrap">
  <code>
    let isLoggedIn = true;
    <br />
    let hasPermission = false;
    <br /><br />

    console.log(isLoggedIn); &nbsp;&nbsp;// Output: true
    <br />
    console.log(hasPermission); &nbsp;&nbsp;// Output: false
  </code>
</pre>

      <h2 className="text-2xl font-semibold text-gray-800 mb-2">Using Boolean in Conditions</h2>
     <pre className="bg-gray-200 p-4 rounded-lg mt-5 overflow-x-auto max-w-full whitespace-pre-wrap">
  <code>
    let isLoggedIn = true;
    <br /><br />

    if (isLoggedIn) {"{"}
    <br />
    &nbsp;&nbsp;console.log("Welcome back!");
    <br />
    {"}"} else {"{"}
    <br />
    &nbsp;&nbsp;console.log("Please log in");
    <br />
    {"}"}
    <br /><br />

    // Output: Welcome back!
  </code>
</pre>


      <h2 className="text-2xl font-semibold text-gray-800 mb-5">Boolean Conversion</h2>
    <pre className="bg-gray-200 p-4 rounded-lg mt-5 overflow-x-auto max-w-full whitespace-pre-wrap">
  <code>
    console.log(Boolean(1)); // Output: true
    <br />
    console.log(Boolean(0)); // Output: false
    <br />
    console.log(Boolean("Hello")); // Output: true
    <br />
    console.log(Boolean("")); // Output: false
  </code>
</pre>

      <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-2">Logical Operations</h2>
     <pre className="bg-gray-200 p-4 rounded-lg mt-5 overflow-x-auto max-w-full whitespace-pre-wrap">
  <code>
    let a = true;
    <br />
    let b = false;
    <br /><br />

    console.log(a &amp;&amp; b); // Output: false (AND)
    <br />
    console.log(a || b); // Output: true  (OR)
    <br />
    console.log(!a);     // Output: false (NOT)
  </code>
</pre>

      <p className="text-gray-700">
        Booleans are fundamental for *decision-making* in JavaScript. They can be explicitly set or derived from expressions, and are essential for *control flow* and *logical operations*.
      </p>
    </div>
  );
};

export default JSBoolean;