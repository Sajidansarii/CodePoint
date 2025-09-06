import React from 'react';

const ObjectDemo = () => {
  // 1. Defining a basic object
  const person = {
    name: 'Alice',
    age: 28,
    isStudent: false
  };

  // 2. Accessing properties
  const nameDot = person.name;
  const ageBracket = person['age'];

  // 3. Adding and modifying properties
  person.country = 'Canada';
  person.age = 29;

  // 4. Object with method
  const user = {
    username: 'john_doe',
    greet: function () {
      return `Hello, ${this.username}!`;
    }
  };

  // 5. Nested object
  const company = {
    name: 'TechCorp',
    address: {
      city: 'New York',
      zip: '10001'
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded space-y-6">
      <h1 className="text-3xl font-bold text-green-600">🧱 JavaScript Objects</h1>

      {/* Intro */}
      <section>
        <p className="text-gray-700">
          An <strong>object</strong> in JavaScript is a data structure that allows you to store
          collections of data using <code>key-value</code> pairs.
        </p>
      </section>

      {/* Example 1: Basic Object */}
      <section>
        <h2 className="text-xl font-semibold text-gray-800">1. Defining an Object</h2>
        <pre className="bg-gray-100 p-3 rounded whitespace-pre-wrap mt-2">
{`const person = {
  name: 'Alice',
  age: 28,
  isStudent: false
};`}
        </pre>
        <p className="text-gray-700 mt-2">Output: <code>{JSON.stringify(person)}</code></p>
      </section>

      {/* Example 2: Accessing Properties */}
      <section>
        <h2 className="text-xl font-semibold text-gray-800">2. Accessing Properties</h2>
        <pre className="bg-gray-100 p-3 rounded whitespace-pre-wrap mt-2">
{`Dot Notation: person.name → ${nameDot}
Bracket Notation: person['age'] → ${ageBracket}`}
        </pre>
      </section>

      {/* Example 3: Modifying & Adding */}
      <section>
        <h2 className="text-xl font-semibold text-gray-800">3. Modifying & Adding Properties</h2>
        <pre className="bg-gray-100 p-3 rounded whitespace-pre-wrap mt-2">
{`person.age = 29;
person.country = 'Canada';

Updated Object → ${JSON.stringify(person)}`}
        </pre>
      </section>

      {/* Example 4: Object Methods */}
      <section>
        <h2 className="text-xl font-semibold text-gray-800">4. Object Method</h2>
        <p className="text-gray-600">Objects can contain functions called <strong>methods</strong>.</p>
        <pre className="bg-gray-100 p-3 rounded whitespace-pre-wrap mt-2">
{`const user = {
  username: 'john_doe',
  greet: function () {
    return \`Hello, \${this.username}!\`;
  }
};

user.greet() → ${user.greet()}`}
        </pre>
      </section>

      {/* Example 5: Nested Object */}
      <section>
        <h2 className="text-xl font-semibold text-gray-800">5. Nested Objects</h2>
        <p className="text-gray-600">Objects can have other objects as values.</p>
        <pre className="bg-gray-100 p-3 rounded whitespace-pre-wrap mt-2">
{`const company = {
  name: 'TechCorp',
  address: {
    city: 'New York',
    zip: '10001'
  }
};

Access → company.address.city → ${company.address.city}`}
        </pre>
      </section>

      {/* Summary */}
      <section>
        <h2 className="text-xl font-semibold text-gray-800">📌 Summary</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-1">
          <li>Objects store data in key-value format.</li>
          <li>Use dot or bracket notation to access properties.</li>
          <li>Objects can contain methods (functions inside them).</li>
          <li>They can also store other objects (nested structure).</li>
        </ul>
      </section>
    </div>
  );
};

export default ObjectDemo;
