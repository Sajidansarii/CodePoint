import React from 'react';

const ArrayIterationDemo = () => {
  const numbers = [1, 2, 3, 4, 5];
  const students = [
    { name: 'Alice', passed: true },
    { name: 'Bob', passed: false },
    { name: 'Charlie', passed: true },
  ];

  // 1. forEach(): side effects
  const forEachOutput = [];
  numbers.forEach(num => {
    forEachOutput.push(`Number: ${num}`);
  });

  // 2. map(): transform values
  const squaredNumbers = numbers.map(num => num * num);

  // 3. filter(): condition-based selection
  const evenNumbers = numbers.filter(num => num % 2 === 0);

  // 4. reduce(): accumulation
  const sum = numbers.reduce((acc, curr) => acc + curr, 0);

  // 5. some(): check if any failed
  const anyFailed = students.some(student => !student.passed);

  // 6. every(): check if all passed
  const allPassed = students.every(student => student.passed);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow rounded space-y-6">
      <h1 className="text-3xl font-bold text-purple-600"> JavaScript Array Iteration Methods</h1>

      {/* forEach */}
      <section>
        <h2 className="text-xl font-semibold text-gray-800">1. forEach()</h2>
        <p className="text-gray-600">Executes a function on each array item (no return value).</p>
        <pre className="bg-gray-100 p-3 rounded mt-2">
          {forEachOutput.map((line, i) => <div key={i}>{line}</div>)}
        </pre>
      </section>

      {/* map */}
      <section>
        <h2 className="text-xl font-semibold text-gray-800">2. map()</h2>
        <p className="text-gray-600">Returns a new array by applying a function to each element.</p>
        <pre className="bg-gray-100 p-3 rounded mt-2">
          {`numbers.map(num => num * num) → ${JSON.stringify(squaredNumbers)}`}
        </pre>
      </section>

      {/* filter */}
      <section>
        <h2 className="text-xl font-semibold text-gray-800">3. filter()</h2>
        <p className="text-gray-600">Returns a new array of elements that satisfy a condition.</p>
        <pre className="bg-gray-100 p-3 rounded mt-2">
          {`numbers.filter(num => num % 2 === 0) → ${JSON.stringify(evenNumbers)}`}
        </pre>
      </section>

      {/* reduce */}
      <section>
        <h2 className="text-xl font-semibold text-gray-800">4. reduce()</h2>
        <p className="text-gray-600">Reduces the array to a single value (like a sum).</p>
        <pre className="bg-gray-100 p-3 rounded mt-2">
          {`numbers.reduce((acc, curr) => acc + curr, 0) → ${sum}`}
        </pre>
      </section>

      {/* some */}
      <section>
        <h2 className="text-xl font-semibold text-gray-800">5. some()</h2>
        <p className="text-gray-600">Returns true if <strong>at least one</strong> element passes a condition.</p>
        <pre className="bg-gray-100 p-3 rounded mt-2">
          {`students.some(s => !s.passed) → ${anyFailed}`}
        </pre>
      </section>

      {/* every */}
      <section>
        <h2 className="text-xl font-semibold text-gray-800">6. every()</h2>
        <p className="text-gray-600">Returns true if <strong>all</strong> elements pass a condition.</p>
        <pre className="bg-gray-100 p-3 rounded mt-2">
          {`students.every(s => s.passed) → ${allPassed}`}
        </pre>
      </section>
    </div>
  );
};

export default ArrayIterationDemo;
