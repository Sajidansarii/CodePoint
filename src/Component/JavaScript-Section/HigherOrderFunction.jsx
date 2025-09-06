import React from 'react';

const HigherOrderFunctionDemo = () => {
  // Example 1: HOF that takes a function as a parameter
  const repeatAction = (action, times) => {
    let results = [];
    for (let i = 0; i < times; i++) {
      results.push(action(i));
    }
    return results;
  };

  const sayHello = (index) => `Hello ${index + 1}`;

  const greetings = repeatAction(sayHello, 3);

  // Example 2: HOF that returns another function
  const multiplier = (factor) => {
    return function (number) {
      return number * factor;
    };
  };

  const double = multiplier(2); // returns a function that doubles a number
  const triple = multiplier(3); // returns a function that triples a number

  // Example 3: Using built-in HOFs like map and filter
  const numbers = [1, 2, 3, 4, 5];
  const squares = numbers.map(n => n * n);
  const evenNumbers = numbers.filter(n => n % 2 === 0);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow rounded space-y-6">
      <h1 className="text-3xl font-bold text-blue-600">🧠 Higher-Order Functions in JavaScript</h1>

      {/* Introduction */}
      <section>
        <p className="text-gray-700">
          A <strong>higher-order function</strong> is a function that takes another function as a parameter,
          or returns a function, or both.
        </p>
      </section>

      {/* Example 1 */}
      <section>
        <h2 className="text-xl font-semibold text-gray-800">1. Passing a Function as an Argument</h2>
        <p className="text-gray-600">
          This HOF runs another function <code>n</code> times and collects the results.
        </p>
        <pre className="bg-gray-100 p-3 rounded whitespace-pre-wrap mt-2">
{`const repeatAction = (action, times) => {
  let results = [];
  for (let i = 0; i < times; i++) {
    results.push(action(i));
  }
  return results;
};

repeatAction(sayHello, 3) → ${JSON.stringify(greetings)}`}
        </pre>
      </section>

      {/* Example 2 */}
      <section>
        <h2 className="text-xl font-semibold text-gray-800">2. Returning a Function</h2>
        <p className="text-gray-600">
          This HOF returns a new function that multiplies any input by a fixed factor.
        </p>
        <pre className="bg-gray-100 p-3 rounded whitespace-pre-wrap mt-2">
{`const multiplier = (factor) => {
  return function(number) {
    return number * factor;
  };
};

const double = multiplier(2);
double(5) → ${double(5)}
triple(4) → ${triple(4)}`}
        </pre>
      </section>

      {/* Example 3 */}
      <section>
        <h2 className="text-xl font-semibold text-gray-800">3. Using Built-in HOFs: map & filter</h2>
        <p className="text-gray-600">
          Array methods like <code>map</code> and <code>filter</code> are common examples of higher-order functions.
        </p>
        <pre className="bg-gray-100 p-3 rounded whitespace-pre-wrap mt-2">
{`const numbers = [1, 2, 3, 4, 5];

numbers.map(n => n * n) → ${JSON.stringify(squares)}
numbers.filter(n => n % 2 === 0) → ${JSON.stringify(evenNumbers)}`}
        </pre>
      </section>

      {/* Summary */}
      <section>
        <h2 className="text-xl font-semibold text-gray-800"> Summary</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-1">
          <li>HOFs accept functions as arguments or return functions.</li>
          <li>They enable abstraction, code reuse, and cleaner logic.</li>
          <li>Examples include custom logic, event handling, and array methods.</li>
        </ul>
      </section>
    </div>
  );
};

export default HigherOrderFunctionDemo;
