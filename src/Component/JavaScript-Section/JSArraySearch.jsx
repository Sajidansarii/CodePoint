import React from 'react';

const ArraySearchDemo = () => {
  const fruits = ['apple', 'banana', 'cherry', 'banana', 'date'];
  const users = [
    { id: 1, name: 'Alice', active: false },
    { id: 2, name: 'Bob', active: true },
    { id: 3, name: 'Charlie', active: false }
  ];

  // 1. indexOf(): Get first index of 'banana'
  const bananaIndex = fruits.indexOf('banana'); // 1

  // 2. lastIndexOf(): Get last index of 'banana'
  const lastBananaIndex = fruits.lastIndexOf('banana'); // 3

  // 3. includes(): Check if 'cherry' exists
  const hasCherry = fruits.includes('cherry'); // true

  // 4. find(): Get first user who is active
  const activeUser = users.find(user => user.active); // { id: 2, name: 'Bob', active: true }

  // 5. findIndex(): Get index of first inactive user
  const inactiveUserIndex = users.findIndex(user => !user.active); // 0

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded shadow space-y-6">
      <h1 className="text-3xl font-bold text-indigo-600">🔍 JavaScript Array Search Methods</h1>

      {/* indexOf */}
      <section>
        <h2 className="text-xl font-semibold text-gray-800">1. indexOf()</h2>
        <p className="text-gray-600">Returns the first index of the specified value in an array.</p>
        <pre className="bg-gray-100 p-3 rounded mt-2">
          {`fruits: ${JSON.stringify(fruits)}\nfruits.indexOf("banana") → ${bananaIndex}`}
        </pre>
      </section>

      {/* lastIndexOf */}
      <section>
        <h2 className="text-xl font-semibold text-gray-800">2. lastIndexOf()</h2>
        <p className="text-gray-600">Returns the last index of the specified value in an array.</p>
        <pre className="bg-gray-100 p-3 rounded mt-2">
          {`fruits.lastIndexOf("banana") → ${lastBananaIndex}`}
        </pre>
      </section>

      {/* includes */}
      <section>
        <h2 className="text-xl font-semibold text-gray-800">3. includes()</h2>
        <p className="text-gray-600">Checks if the array includes a certain value.</p>
        <pre className="bg-gray-100 p-3 rounded mt-2">
          {`fruits.includes("cherry") → ${hasCherry}`}
        </pre>
      </section>

      {/* find */}
      <section>
        <h2 className="text-xl font-semibold text-gray-800">4. find()</h2>
        <p className="text-gray-600">Returns the first object in the array that satisfies a condition.</p>
        <pre className="bg-gray-100 p-3 rounded mt-2 whitespace-pre-wrap">
{`users.find(user => user.active) → 
${JSON.stringify(activeUser, null, 2)}`}
        </pre>
      </section>

      {/* findIndex */}
      <section>
        <h2 className="text-xl font-semibold text-gray-800">5. findIndex()</h2>
        <p className="text-gray-600">Returns the index of the first element that matches a condition.</p>
        <pre className="bg-gray-100 p-3 rounded mt-2">
          {`users.findIndex(user => !user.active) → ${inactiveUserIndex}`}
        </pre>
      </section>
    </div>
  );
};

export default ArraySearchDemo;
