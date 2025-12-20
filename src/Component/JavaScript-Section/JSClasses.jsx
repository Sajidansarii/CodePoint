import React from "react";

const JSClasses = () => {
  return (
    <div className="max-w-4xl p-6">
      <h1 className="text-3xl font-medium text-blue-500 mb-4">JavaScript Classes</h1>

      <p className="text-gray-700 mb-6">
        <span className="text-red-400">Classes</span> in JavaScript are blueprints for creating objects. They allow you to define properties and methods in a structured way, making your code more organized and reusable.
      </p>

      <p className="mb-3">Use the keyword <span className="text-red-400">class</span> to create a class.</p>
      <p>Always include a method called <span className="text-red-400">constructor()</span>.</p>
     <h1 className="text-2xl text-gray-800 font-semibold mt-5 ">Syntax</h1>

     <pre className="text-green-400 bg-gray-900 p-4 rounded-lg mt-5">
      <code>
        {`class ClassName {
  constructor() { ... }
}`}
      </code>
     </pre>

     <h1 className="text-2xl text-gray-800 font-semibold mt-5">Example</h1>
     <pre className="text-green-400 bg-gray-900 p-4 rounded-lg mt-5">
      <code>
        {`class Fruit {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
}`}
      </code>
     </pre>

     <p className="mb-3 mt-5">The code shown above defines a class called "Fruit".</p>
     <p>The class has two initial properties: "name" and "year".</p>

     <h1 className="text-2xl text-gray-800 font-semibold mt-10 mb-5">Using a Class</h1>
    <p>Once you have a class, it can be used to create objects.</p>
    <h1 className="text-2xl text-gray-800 font-semibold mt-5">Example</h1>
    <pre className="text-green-400 bg-gray-900 p-4 rounded-lg mt-5 mb-5">
      <code>
        {`const myCar1 = new Car("Mango", 120);
const myCar2 = new Car("Apple", 150);`}
      </code>
    </pre>
    <p>The example above uses the fruit class to create two fruit objects.</p>

    <h1 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">The Constructor Method</h1>
    <p>The <span className="text-red-400">constructor</span> method is a unique type of method.</p>
    <ul className="list-[square] list-inside mt-3 mb-5 space-y-1">
      <li>Always ensure the method is named constructor exactly as shown.</li>
      <li>It runs by itself every time you make a new object.</li>
      <li>It initializes an object’s properties.</li>
    </ul>

    <p>If no constructor method is defined, JavaScript automatically provides a default, empty constructor.</p>
    

    <h1 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Class Methods</h1>
    <p className="mb-3">The syntax for creating class methods is identical to that used for object methods.</p>
    <p className="mb-3">The class keyword is used to declare a <span className="text-red-400">class</span>.</p>
    <p>A <span className="text-red-400">constructor()</span> method must always be defined, after which any number of other methods may be added.</p>
    <h1 className="text-2xl text-gray-800 font-semiboldm mt-5">Syntax</h1>
    <pre className="text-green-400 bg-gray-900 p-4 rounded-lg mt-5">
      <code>
        {`class ClassName {
  constructor() { ... }
  method_1() { ... }
  method_2() { ... }
  method_3() { ... }
}`}
      </code>
    </pre>

    <p className="mt-10">Define a class method called age that returns the age of the Car.</p>
    <h1 className="text-2xl text-gray-800 font-semibold mt-5">Example</h1>
    <pre className="text-green-400 bg-gray-900 p-4 rounded-lg mt-5">
      <code>
        {`class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
  age() {
    const date = new Date();
    return date.getFullYear() - this.year;
  }
}

const myCar = new Car("Ford", 2014);
document.getElementById("demo").innerHTML =
"My car is " + myCar.age() + " years old.";`}
      </code>
    </pre>

    <p className="mt-5">You can pass parameters to class methods.</p>
    <h1 className="text-2xl text-gray-800 font-semibold mt-5 mb-5">Example</h1>
    <pre className="text-green-400 bg-gray-900 p-4 rounded-lg">
      <code>
        {`class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
  age(x) {
    return x - this.year;
  }
}

const date = new Date();
let year = date.getFullYear();

const myCar = new Car("Ford", 2014);
document.getElementById("demo").innerHTML=
"My car is " + myCar.age(year) + " years old.";`}
      </code>
    </pre>

    <h1 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">"use strict"</h1>
    <p>You’ll get an error if you break "strict mode" rules.</p>
    <h1 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">Example</h1>
    <p>In "strict mode" you will get an error if you use a variable without declaring it:</p>
    <pre className="text-green-400 bg-gray-900 p-4 rounded-lg mt-5">
      <code>
        {`class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
  age() {
    // date = new Date();  // This will not work
    const date = new Date(); // This will work
    return date.getFullYear() - this.year;
  }
}`}
      </code>
    </pre>


        <ul className="list-disc list-inside mt-2">
          <li>Create objects with shared properties and methods</li>
          <li>Use inheritance to extend functionality</li>
          <li>Define static methods for class-level operations</li>
        </ul>
    </div>
  );
};

export default JSClasses;