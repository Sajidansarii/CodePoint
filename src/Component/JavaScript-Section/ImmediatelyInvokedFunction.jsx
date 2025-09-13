import React from 'react';

const IIFEDemo = () => {
  // Example 1: Basic IIFE
  const result1 = (function () {
    return '✅ IIFE executed immediately!';
  })();

  // Example 2: IIFE with parameters
  const result2 = (function (a, b) {
    return `✅ Sum using IIFE: ${a + b}`;
  })(5, 7);

  // Example 3: IIFE for private scope
  const result3 = (() => {
    const secret = '🔐 Hidden value inside IIFE';
    return `Secret is safe and returned: ${secret}`;
  })();

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded space-y-6">
      <h1 className="text-3xl font-medium text-blue-500">Immediately Invoked Function Expression (IIFE)</h1>

      {/* Introduction */}
      <section>
        <p className="text-gray-700">
          An <strong>IIFE</strong> is a JavaScript function that runs as soon as it's defined. It's often used to
          isolate variables and avoid polluting the global scope.
        </p>
      </section>

      {/* Example 1 */}
      <section>
        <h2 className="text-xl font-semibold text-gray-800">1. Basic IIFE</h2>
        <p className="text-gray-600">
          This IIFE runs immediately and returns a string.
        </p>
        <pre className="bg-gray-100 p-3 rounded whitespace-pre-wrap mt-2">
{`(function () {
  return "✅ IIFE executed immediately!";
})(); 

Output → ${result1}`}
        </pre>
      </section>

      {/* Example 2 */}
      <section>
        <h2 className="text-xl font-semibold text-gray-800">2. IIFE with Parameters</h2>
        <p className="text-gray-600">
          You can pass arguments into an IIFE just like a regular function.
        </p>
        <pre className="bg-gray-100 p-3 rounded whitespace-pre-wrap mt-2">
{`(function (a, b) {
  return a + b;
})(5, 7); 

Output → ${result2}`}
        </pre>
      </section>

      {/* Example 3 */}
      <section>
        <h2 className="text-xl font-semibold text-gray-800">3. Private Scope with IIFE</h2>
        <p className="text-gray-600">
          IIFEs are commonly used to protect variables from leaking into the global scope.
        </p>
        <pre className="bg-gray-100 p-3 rounded whitespace-pre-wrap mt-2">
{`(() => {
  const secret = "🔐 Hidden value";
  return secret;
})(); 

Output → ${result3}`}
        </pre>
      </section>

      {/* Summary */}
      <section>
        <h2 className="text-xl font-semibold text-gray-800">📌 Summary</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-1">
          <li>IIFEs run immediately after being defined.</li>
          <li>Useful for isolating variables and protecting scope.</li>
          <li>Can accept parameters and return values.</li>
          <li>Supports both traditional and arrow function syntax.</li>
        </ul>
      </section>
    </div>
  );
};

export default IIFEDemo;
