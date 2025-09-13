import React, { useState } from 'react';

const ArrayMethodsDemo = () => {
  const [numbers] = useState([1, 2, 3, 4, 5]);
  const [students] = useState([
    { name: 'Alice', grade: 85 },
    { name: 'Bob', grade: 58 },
    { name: 'Charlie', grade: 92 },
  ]);

  // 1. map(): Transform each element
  const doubled = numbers.map(num => num * 2);

  // 2. filter(): Select elements based on condition
  const passingStudents = students.filter(student => student.grade >= 60);

  // 3. reduce(): Reduce to a single value (sum)
  const total = numbers.reduce((acc, curr) => acc + curr, 0);

  // 4. forEach(): Perform side-effect on each element
  const logs = [];
  numbers.forEach(num => logs.push(`Number: ${num}`));

  // 5. find(): Find the first match
  const firstFailing = students.find(student => student.grade < 60);

  // 6. some(): Check if *any* item matches
  const hasFailing = students.some(student => student.grade < 60);

  // 7. every(): Check if *all* items match
  const allPassed = students.every(student => student.grade >= 60);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded shadow space-y-6">
      <h1 className="text-3xl font-medium text-blue-500">JavaScript Array Methods (React + Tailwind)</h1>

      {/* MAP */}
      <section>
        <h2 className="text-xl font-semibold text-gray-800">1. map()</h2>
        <p className="text-gray-600">Doubles each number in the array.</p>
        <pre className="bg-gray-100 p-3 rounded mt-2">
          {`[1, 2, 3, 4, 5].map(num => num * 2) → ${JSON.stringify(doubled)}`}
        </pre>
      </section>

      {/* FILTER */}
      <section>
        <h2 className="text-xl font-semibold text-gray-800">2. filter()</h2>
        <p className="text-gray-600">Selects students with grade ≥ 60.</p>
        <pre className="bg-gray-100 p-3 rounded mt-2">
          {`students.filter(s => s.grade >= 60) → ${JSON.stringify(passingStudents, null, 2)}`}
        </pre>
      </section>

      {/* REDUCE */}
      <section>
        <h2 className="text-xl font-semibold text-gray-800">3. reduce()</h2>
        <p className="text-gray-600">Sums up all numbers in the array.</p>
        <pre className="bg-gray-100 p-3 rounded mt-2">
          {`[1, 2, 3, 4, 5].reduce((acc, curr) => acc + curr, 0) → ${total}`}
        </pre>
      </section>

      {/* FOREACH */}
      <section>
        <h2 className="text-xl font-semibold text-gray-800">4. forEach()</h2>
        <p className="text-gray-600">Logs each number (side effect).</p>
        <pre className="bg-gray-100 p-3 rounded mt-2">
          {logs.map((log, i) => (
            <div key={i}>{log}</div>
          ))}
        </pre>
      </section>

      {/* FIND */}
      <section>
        <h2 className="text-xl font-semibold text-gray-800">5. find()</h2>
        <p className="text-gray-600">Finds the first student who failed.</p>
        <pre className="bg-gray-100 p-3 rounded mt-2">
          {`students.find(s => s.grade < 60) → ${JSON.stringify(firstFailing, null, 2)}`}
        </pre>
      </section>

      {/* SOME */}
      <section>
        <h2 className="text-xl font-semibold text-gray-800">6. some()</h2>
        <p className="text-gray-600">Checks if any student failed.</p>
        <pre className="bg-gray-100 p-3 rounded mt-2">
          {`students.some(s => s.grade < 60) → ${hasFailing}`}
        </pre>
      </section>

      {/* EVERY */}
      <section>
        <h2 className="text-xl font-semibold text-gray-800">7. every()</h2>
        <p className="text-gray-600">Checks if all students passed.</p>
        <pre className="bg-gray-100 p-3 rounded mt-2">
          {`students.every(s => s.grade >= 60) → ${allPassed}`}
        </pre>
      </section>
    </div>
  );
};

export default ArrayMethodsDemo;
