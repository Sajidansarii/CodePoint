import React from "react";

const JSClasses = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow mt-10">
      <h1 className="text-3xl font-bold text-blue-600 mb-4">
        JavaScript <span className="text-green-600">Classes</span>
      </h1>

      <p className="text-gray-700 mb-6">
        Classes in JavaScript are *blueprints for creating objects. They allow you to define **properties* and *methods* in a structured way, making your code more organized and reusable.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mb-2">Basic Class Example</h2>
      <div className="bg-gray-100 p-4 rounded mb-4 overflow-x-auto">
        <pre className="text-green-600">
{`class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(\Hello, my name is \${this.name} and I am \${this.age} years old.\);
  }
}

const person1 = new Person("Alice", 25);
person1.greet(); 
// Output: Hello, my name is Alice and I am 25 years old.`}
        </pre>
      </div>

      <h2 className="text-2xl font-semibold text-gray-800 mb-2">Class with Methods</h2>
      <div className="bg-gray-100 p-4 rounded mb-4 overflow-x-auto">
        <pre className="text-green-600">
            <code>
{`class Car {
  constructor(brand, model) {
    this.brand = brand;
    this.model = model;
  }
  
  displayInfo() {
    return ${this.brand} 
           ${this.model};
    }
  }

const myCar = new Car("Toyota", "Corolla");
console.log(myCar.displayInfo()); 
// Output: Toyota Corolla`}
</code>
        </pre>
      </div>

      <h2 className="text-2xl font-semibold text-gray-800 mb-2">Inheritance Example</h2>
      <div className="bg-gray-100 p-4 rounded mb-4 overflow-x-auto">
        {/* <pre className="text-green-600">
{`class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(\\${this.name} makes a sound\);
  }
}

class Dog extends Animal {
  speak() {
    console.log(\\${this.name} barks\);
  }
}

const dog1 = new Dog("Buddy");
dog1.speak(); 
// Output: Buddy barks`}
        </pre> */}
      </div>

      <h2 className="text-2xl font-semibold text-gray-800 mb-2">Static Methods Example</h2>
      <div className="bg-gray-100 p-4 rounded mb-4 overflow-x-auto">
        <pre className="text-green-600">
{`class Calculator {
  static add(a, b) {
    return a + b;
  }
}

console.log(Calculator.add(5, 3)); 
// Output: 8`}
        </pre>
      </div>

      <p className="text-gray-700">
        *Summary:* Classes in JavaScript allow you to:
        <ul className="list-disc list-inside mt-2">
          <li>Create objects with shared properties and methods</li>
          <li>Use inheritance to extend functionality</li>
          <li>Define static methods for class-level operations</li>
        </ul>
      </p>
    </div>
  );
};

export default JSClasses;