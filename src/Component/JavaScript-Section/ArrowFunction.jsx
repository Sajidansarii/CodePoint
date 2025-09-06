import React from 'react';

const ArrowFunctionDemo = () => {
  // 1. Basic arrow function
  const greet = (name) => `Hello, ${name}!`;

  // 2. Arrow function with implicit return
  const square = (n) => n * n;

  // 3. Arrow function without parameters
  const getTime = () => new Date().toLocaleTimeString();

  // 4. Arrow function with multiple parameters
  const add = (a, b) => a + b;

  // 5. Arrow function returning object
  const getUser = () => ({ name: "Alice", age: 25 });

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded space-y-6">
      <h1 className="text-3xl font-bold text-teal-600"> JavaScript Arrow Functions</h1>

      {/* Introduction */}
      <section>
        <p className="text-gray-700">
          Arrow functions are a concise way to write functions using the <code>=&gt;</code> syntax.
          They are especially useful for short, anonymous functions.
        </p>
      </section>

      {/* Example 1 */}
      <section>
        <h2 className="text-xl font-semibold text-gray-800">1. Basic Arrow Function</h2>
        <p className="text-gray-600">A simple function that greets a user.</p>
        <pre className="bg-gray-100 p-3 rounded mt-2 whitespace-pre-wrap">
{`const greet = (name) => \`Hello, \${name}!\`;

greet("John") → ${greet("John")}`}
        </pre>
      </section>

      {/* Example 2 */}
      <section>
        <h2 className="text-xl font-semibold text-gray-800">2. Implicit Return</h2>
        <p className="text-gray-600">When there's only one expression, you can omit the return keyword and braces.</p>
        <pre className="bg-gray-100 p-3 rounded mt-2 whitespace-pre-wrap">
{`const square = (n) => n * n;

square(5) → ${square(5)}`}
        </pre>
      </section>

      {/* Example 3 */}
      <section>
        <h2 className="text-xl font-semibold text-gray-800">3. No Parameters</h2>
        <p className="text-gray-600">Use empty parentheses when there are no parameters.</p>
        <pre className="bg-gray-100 p-3 rounded mt-2 whitespace-pre-wrap">
{`const getTime = () => new Date().toLocaleTimeString();

getTime() → ${getTime()}`}
        </pre>
      </section>

      {/* Example 4 */}
      <section>
        <h2 className="text-xl font-semibold text-gray-800">4. Multiple Parameters</h2>
        <p className="text-gray-600">Use regular parentheses when there are two or more parameters.</p>
        <pre className="bg-gray-100 p-3 rounded mt-2 whitespace-pre-wrap">
{`const add = (a, b) => a + b;

add(4, 6) → ${add(4, 6)}`}
        </pre>
      </section>

      {/* Example 5 */}
      <section>
        <h2 className="text-xl font-semibold text-gray-800">5. Returning Objects</h2>
        <p className="text-gray-600">Wrap object in parentheses to avoid ambiguity with function body.</p>
        <pre className="bg-gray-100 p-3 rounded mt-2 whitespace-pre-wrap">
{`const getUser = () => ({ name: "Alice", age: 25 });

getUser() → ${JSON.stringify(getUser())}`}
        </pre>
      </section>

      {/* Summary */}
      <section>
        <h2 className="text-xl font-semibold text-gray-800">📝 Summary</h2>
        <ul className="list-disc pl-6 text-gray-700">
          <li>Arrow functions provide a concise syntax for writing functions.</li>
          <li>No `function` keyword or curly braces needed (for one-liners).</li>
          <li>Automatically bind <code>this</code> — no need to manually bind in class methods.</li>
          <li>Use parentheses when returning an object or using multiple parameters.</li>
        </ul>
      </section>
    </div>
  );
};

export default ArrowFunctionDemo;
