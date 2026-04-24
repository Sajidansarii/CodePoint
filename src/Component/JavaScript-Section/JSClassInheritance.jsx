import React from "react";

const JSClassInheritance = () => {
  return (
    <div className="max-w-4xl p-6">
      <h1 className="text-3xl font-medium text-blue-500 mb-4">JavaScript Class Inheritance</h1>

      <p className="text-gray-700 mb-6">
        In JavaScript, <span className="text-red-400">class inheritance</span> allows a class (child class) to inherit properties and methods from another class (parent class). 
        This is a core concept of object-oriented programming (OOP) that helps in code reuse and organization.
      </p>

      <h1 className="text-2xl font-semibold text-gray-800 mb-3">Example</h1>
      <h2>Create a class named "Model" which will inherit the methods from the "Car" class:</h2>
      <pre className="bg-gray-200overflow-x-auto p-4 rounded-lg mt-5">
        <code>
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
        </code>
      </pre>
      <p className="mt-5">The <span className="text-red-400">super()</span> method is used to access the parent class.</p>
      <p className="mt-3">Calling <span className="text-red-400">super()</span> inside the constructor invokes the parent’s constructor and allows access to its properties and methods.</p>
      
      <h1 className="text-gray-800 text-2xl font-semibold mt-10 mb-3">Getters and Setters</h1>
       <p><span className="text-red-400">Classes</span> also allow you to use getters and setters.</p>
      <p className="mt-3"><span className="text-red-400">Getters</span> and <span className="text-red-400">setters</span> are useful when you want to change a value before getting or setting it.</p>
      <p className="mt-3">Use the <span className="text-red-400">get</span> and <span className="text-red-400">set</span> keywords to add getters and setters to a class.</p>
      <h1 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Example</h1>
      <p>Add a getter and setter for the carname property.</p>
      <pre className="overflow-x-auto bg-gray-200 p-4 rounded-lg mt-5 mb-5">
        <code>
          {`class Car {
  constructor(brand) {
    this.carname = brand;
  }
  get cnam() {
    return this.carname;
  }
  set cnam(x) {
    this.carname = x;
  }
}

const myCar = new Car("Ford");

document.getElementById("demo").innerHTML = myCar.cna`}
        </code>
        </pre>    

        <p className="mb-3">The getter or setter method cannot share the same name as the property—in this case, carname.</p>
        <p>Many developers place an underscore (_) in front of the property name to distinguish the getter/setter from the real property.</p>
       
       <h1 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Example</h1>
       <p>The underscore character may be employed to differentiate getter/setter methods from the underlying property.</p>
       <pre className=" bg-gray-200 overflow-x-auto p-4 rounded-lg mt-5">
        <code>
          {`class Car {
  constructor(brand) {
    this._carname = brand;
  }
  get carname() {
    return this._carname;
  }
  set carname(x) {
    this._carname = x;
  }
}

const myCar = new Car("Ford");

document.getElementById("demo").innerHTML = myCar.carname;`}
        </code>
       </pre>

       <p className="mt-5">To call a setter, use the same syntax as assigning a property value—just don’t include parentheses.</p>
       <h1 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Example</h1>
       <p>Use a setter to change the carname to "Volvo":</p>
       <pre className="overflow-x-auto bg-gray-200 p-4 rounded-lg mt-5">
        <code>
          {`class Car {
  constructor(brand) {
    this._carname = brand;
  }
  get carname() {
    return this._carname;
  }
  set carname(x) {
    this._carname = x;
  }
}

const myCar = new Car("Ford");
myCar.carname = "Volvo";
document.getElementById("demo").innerHTML = myCar.carname;`}
        </code>
       </pre>

       <h1 className="text-2xl text-gray-800 font-semibold mt-10 mb-5">Hoisting</h1>
       <p>In contrast to functions and various other JavaScript declarations, class declarations are not subject to hoisting.</p>
       <p>You must declare the class first, then use it.</p>
       <h1 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Example</h1>
       <pre className="overflow-x-auto bg-gray-200 p-4 rounded-lg mt-5">
        <code>
          {`//You cannot use the class yet.
//myCar = new Car("Ford") will raise an error.

class Car {
  constructor(brand) {
    this.carname = brand;
  }
}

//Now you can use the class:
const myCar = new Car("Ford")`}
        </code>
       </pre>
     
      <p className="text-gray-700 mt-10">
        Class inheritance allows extending functionality of existing classes without rewriting code. 
        Using <code>super()</code>, child classes can call parent constructors or methods to enhance functionality.
      </p>
    </div>
  );
};

export default JSClassInheritance;