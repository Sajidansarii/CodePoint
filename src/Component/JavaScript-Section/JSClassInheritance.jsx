import React from "react";

const JSClassInheritance = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow mt-10">
      <h1 className="text-3xl font-bold text-blue-600 mb-4">
        JavaScript <span className="text-green-600">Class Inheritance</span>
      </h1>

      <p className="text-gray-700 mb-6">
        In JavaScript, *class inheritance* allows a class (child class) to inherit properties and methods from another class (parent class). 
        This is a core concept of *object-oriented programming (OOP)* that helps in *code reuse and organization*.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mb-2">Basic Syntax</h2>
      <div className="bg-gray-100 p-4 rounded mb-4 overflow-x-auto">
        <pre className="text-green-600">
{`class Parent {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log(\Hello, my name is \${this.name}\);
  }
}

class Child extends Parent {
  // Child inherits properties and methods from Parent
}

const child1 = new Child("Alice");
child1.greet(); // Output: Hello, my name is Alice`}
        </pre>
      </div>

      <h2 className="text-2xl font-semibold text-gray-800 mb-2">Overriding Methods</h2>
      <div className="bg-gray-100 p-4 rounded mb-4 overflow-x-auto">
        <pre className="text-green-600">
{`class Parent {
  speak() {
    console.log("Parent speaking");
  }
}

class Child extends Parent {
  speak() {
    console.log("Child speaking");
  }
}

const child1 = new Child();
child1.speak(); // Output: Child speaking`}
        </pre>
      </div>

      <h2 className="text-2xl font-semibold text-gray-800 mb-2">Using super()</h2>
      <div className="bg-gray-100 p-4 rounded mb-4 overflow-x-auto">
        <pre className="text-green-600">
{`class Parent {
  constructor(name) {
    this.name = name;
  }
  greet() {
    console.log(\Hello, I am \${this.name}\);
  }
}

class Child extends Parent {
  constructor(name, age) {
    super(name); // Calls the parent constructor
    this.age = age;
  }

  greet() {
    super.greet(); // Calls the parent method
    console.log(\I am \${this.age} years old\);
  }
}

const child1 = new Child("Alice", 25);
child1.greet();
// Output:
// Hello, I am Alice
// I am 25 years old`}
        </pre>
      </div>

      <p className="text-gray-700">
        Class inheritance allows *extending functionality* of existing classes without rewriting code. 
        Using <code>super()</code>, child classes can call parent constructors or methods to enhance functionality.
      </p>
    </div>
  );
};

export default JSClassInheritance;