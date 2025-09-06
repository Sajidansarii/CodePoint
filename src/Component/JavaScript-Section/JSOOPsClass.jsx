import React, { useState } from "react";

const JSOOPClass = () => {
  const [output, setOutput] = useState("");

  // ✅ OOP Class Example
  class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }

    // Method inside the class
    greet() {
      return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
  }

  // ✅ Create object and call method
  const handleShow = () => {
    const person1 = new Person("Sajid", 25);
    const person2 = new Person("Ayesha", 22);

    setOutput(`${person1.greet()} \n${person2.greet()}`);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-lg mt-10 space-y-6">
      <h1 className="text-3xl font-bold text-blue-600">
        OOP Class in <span className="text-green-600">JavaScript</span>
      </h1>

      <p className="text-gray-700">
        In JavaScript, the <code>class</code> keyword is used to create{" "}
        <strong>objects</strong> with properties and methods. This is the basis
        of <strong>Object-Oriented Programming (OOP)</strong>.
      </p>

      <button
        onClick={handleShow}
        className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
      >
        Show Class Example
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

  greet() {
    return \Hello, my name is \${this.name} and I am \${this.age} years old.\;
  }
}

const person1 = new Person("Sajid", 25);
console.log(person1.greet());`}
      </pre>

      <h2 className="text-2xl font-semibold text-gray-800">Explanation:</h2>
      <ul className="list-disc list-inside space-y-2 text-gray-700">
        <li>
          <code>class Person</code> defines a blueprint for creating objects.
        </li>
        <li>
          The <code>constructor()</code> method initializes object properties.
        </li>
        <li>
          <code>greet()</code> is a method inside the class.
        </li>
        <li>
          <code>new Person()</code> creates a new object from the class.
        </li>
        <li>
          Objects <strong>person1</strong> and <strong>person2</strong> both
          have their own data but share the same structure and methods.
        </li>
      </ul>
    </div>
  );
};

export default JSOOPClass;