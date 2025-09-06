import React, { useState } from 'react';

const AnonymousFunctionDemo = () => {
  const [message, setMessage] = useState('');

  // Example: Anonymous function in setTimeout
  const runTimeoutExample = () => {
    setMessage('Waiting 2 seconds...');
    setTimeout(function () {
      setMessage('⏰ Timeout triggered using anonymous function!');
    }, 2000);
  };

  // Example: Anonymous function in array method
  const numbers = [1, 2, 3, 4, 5];
  const doubled = numbers.map(function (num) {
    return num * 2;
  });

  // Example: Anonymous function as event handler
  const handleClick = function () {
    alert('👋 This is an anonymous function used as a click handler!');
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded space-y-6">
      <h1 className="text-3xl font-bold text-pink-600">🙈 JavaScript Anonymous Functions</h1>

      {/* Introduction */}
      <section>
        <p className="text-gray-700">
          Anonymous functions are functions without a name. They are usually used as arguments to
          other functions, especially in callbacks, event handlers, and inline operations.
        </p>
      </section>

      {/* Example 1: setTimeout */}
      <section>
        <h2 className="text-xl font-semibold text-gray-800">1. In setTimeout()</h2>
        <p className="text-gray-600">
          Used when you want to delay execution without needing a reusable function.
        </p>
        <button
          onClick={runTimeoutExample}
          className="bg-pink-600 text-white px-4 py-2 rounded hover:bg-pink-700 transition"
        >
          Run setTimeout Example
        </button>
        <p className="mt-2 text-green-700 font-semibold">{message}</p>
        <pre className="bg-gray-100 p-3 rounded mt-2 whitespace-pre-wrap">
{`setTimeout(function () {
  console.log("Hello from anonymous function");
}, 2000);`}
        </pre>
      </section>

      {/* Example 2: map() with anonymous function */}
      <section>
        <h2 className="text-xl font-semibold text-gray-800">2. In Array Methods</h2>
        <p className="text-gray-600">
          Anonymous functions are often used with methods like <code>map</code>, <code>filter</code>,
          and <code>forEach</code>.
        </p>
        <pre className="bg-gray-100 p-3 rounded mt-2 whitespace-pre-wrap">
{`const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(function (num) {
  return num * 2;
});

Result → ${JSON.stringify(doubled)}`}
        </pre>
      </section>

      {/* Example 3: Event Handler */}
      <section>
        <h2 className="text-xl font-semibold text-gray-800">3. As Event Handlers</h2>
        <p className="text-gray-600">
          You can pass anonymous functions directly to event handlers.
        </p>
        <button
          onClick={handleClick}
          className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700 transition"
        >
          Click Me
        </button>
        <pre className="bg-gray-100 p-3 rounded mt-2 whitespace-pre-wrap">
{`<button onClick={function () {
  alert("Anonymous function triggered!");
}}>
  Click Me
</button>`}
        </pre>
      </section>

      {/* Summary */}
      <section>
        <h2 className="text-xl font-semibold text-gray-800">📌 Summary</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-1">
          <li>Anonymous functions have no name identifier.</li>
          <li>Used commonly in callbacks and one-time operations.</li>
          <li>They can be written as regular or arrow functions.</li>
          <li>Prefer arrow functions for cleaner syntax in many cases.</li>
        </ul>
      </section>
    </div>
  );
};

export default AnonymousFunctionDemo;
