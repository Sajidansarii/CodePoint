import React from 'react';

const ArraySortDemo = () => {
  const fruits = ['banana', 'apple', 'cherry', 'date'];
  const numbers = [23, 4, 100, 56, 9];
  const users = [
    { id: 1, name: 'Alice', age: 25 },
    { id: 2, name: 'Bob', age: 20 },
    { id: 3, name: 'Charlie', age: 30 }
  ];

  // 1. Default sort() (lexicographical)
  const sortedFruits = [...fruits].sort();

  // 2. sort() for numbers (ascending)
  const sortedNumbersAsc = [...numbers].sort((a, b) => a - b);

  // 3. sort() for numbers (descending)
  const sortedNumbersDesc = [...numbers].sort((a, b) => b - a);

  // 4. reverse() - reverses array order
  const reversedFruits = [...sortedFruits].reverse();

  // 5. sort() objects by age (ascending)
  const sortedUsersByAge = [...users].sort((a, b) => a.age - b.age);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow rounded space-y-6">
      <h1 className="text-3xl font-bold text-green-600">JavaScript Array Sort Methods</h1>

      {/* 1. Default sort() */}
      <section>
        <h2 className="text-xl font-semibold text-gray-800">1. sort() – Lexicographic (Default)</h2>
        <p className="text-gray-600">Sorts strings alphabetically (default behavior).</p>
        <pre className="bg-gray-100 p-3 rounded mt-2">
          {`Original: ${JSON.stringify(fruits)}\nSorted: ${JSON.stringify(sortedFruits)}`}
        </pre>
      </section>

      {/* 2. sort() numbers ascending */}
      <section>
        <h2 className="text-xl font-semibold text-gray-800">2. sort() – Numbers Ascending</h2>
        <p className="text-gray-600">Uses a compare function to sort numbers properly.</p>
        <pre className="bg-gray-100 p-3 rounded mt-2">
          {`[23, 4, 100, 56, 9].sort((a, b) => a - b)\n→ ${JSON.stringify(sortedNumbersAsc)}`}
        </pre>
      </section>

      {/* 3. sort() numbers descending */}
      <section>
        <h2 className="text-xl font-semibold text-gray-800">3. sort() – Numbers Descending</h2>
        <p className="text-gray-600">Descending order using compare function.</p>
        <pre className="bg-gray-100 p-3 rounded mt-2">
          {`[23, 4, 100, 56, 9].sort((a, b) => b - a)\n→ ${JSON.stringify(sortedNumbersDesc)}`}
        </pre>
      </section>

      {/* 4. reverse() */}
      <section>
        <h2 className="text-xl font-semibold text-gray-800">4. reverse()</h2>
        <p className="text-gray-600">Reverses the array in place.</p>
        <pre className="bg-gray-100 p-3 rounded mt-2">
          {`Sorted: ${JSON.stringify(sortedFruits)}\nReversed: ${JSON.stringify(reversedFruits)}`}
        </pre>
      </section>

      {/* 5. sort() objects by age */}
      <section>
        <h2 className="text-xl font-semibold text-gray-800">5. sort() – Objects by Age</h2>
        <p className="text-gray-600">Sorts an array of objects based on the <code>age</code> property.</p>
        <pre className="bg-gray-100 p-3 rounded mt-2 whitespace-pre-wrap">
          {`users.sort((a, b) => a.age - b.age) →
${JSON.stringify(sortedUsersByAge, null, 2)}`}
        </pre>
      </section>
    </div>
  );
};

export default ArraySortDemo;
