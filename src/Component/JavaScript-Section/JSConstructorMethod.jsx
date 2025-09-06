import React, { useState } from "react";

const JSConstructorMethod = () => {
  const [output, setOutput] = useState("");

  // ✅ Class with constructor
  class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }

    introduce() {
      return `Hi, I'm ${this.name} and I'm ${this.age} years old.`;
    }
  }

  const handleExample = () => {
    const john = new Person("John", 25);
    const emma = new Person("Emma", 30);

    setOutput(`${john.introduce()}\n${emma.introduce()}`);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-lg mt-10 space-y-6">
      <h1 className="text-3xl font-bold text-blue-600">
        Constructor Method in <span className="text-green-600">JavaScript</span>
      </h1>

      <p className="text-gray-700">
        In JavaScript, the <strong>constructor</strong> method is a special
        method inside a <code className="bg-gray-200 px-1 rounded">class</code>.
        It is automatically called when a new object is created from the class
        using the <code className="bg-gray-200 px-1 rounded">new</code>{" "}
        keyword.
      </p>

      <button
        onClick={handleExample}
        className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
      >
        Run Constructor Example
      </button>

      <div className="p-4 bg-gray-100 rounded-md whitespace-pre-line">
        <p className="font-semibold text-gray-800">{output}</p>
      </div>

      <h2 className="text-2xl font-semibold text-gray-800">Code Example:</h2>
      <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto">
{`class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  introduce() {
    return \Hi, I'm \${this.name} and I'm \${this.age} years old.\;
  }
}

const john = new Person("John", 25);
const emma = new Person("Emma", 30);

console.log(john.introduce()); // Hi, I'm John and I'm 25 years old.
console.log(emma.introduce()); // Hi, I'm Emma and I'm 30 years old.`}
      </pre>

      <h2 className="text-2xl font-semibold text-gray-800">Explanation:</h2>
      <ul className="list-disc list-inside space-y-2 text-gray-700">
        <li>
          The <code>constructor()</code> method is called automatically when
          creating a new object.
        </li>
        <li>
          It initializes object properties (like <code>name</code> and{" "}
          <code>age</code> in this example).
        </li>
        <li>
          You can pass values when calling{" "}
          <code className="bg-gray-200 px-1 rounded">new Person(...)</code> to
          set initial property values.
        </li>
        <li>
          Other methods (like <code>introduce()</code>) can use these properties
          for functionality.
        </li>
      </ul>
    </div>
  );
};

export default JSConstructorMethod;