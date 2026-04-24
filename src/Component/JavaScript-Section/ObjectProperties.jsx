import React from "react";

const ObjectProperties = () => {

  return (
    <div className="max-w-4xl mt-10 p-6">
      <h1 className="text-3xl font-medium text-blue-500 mb-4">JavaScript Object Properties</h1>
       <p>JavaScript objects are unordered collections of properties—their most important feature. These properties can be changed, added, removed, or in some cases, are read-only.</p>
      <h1 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">Accessing JavaScript Properties</h1>
      <p>Object properties can be accessed using the following syntax:</p>
    <pre className="bg-gray-200 p-4 rounded-lg mt-5 overflow-x-auto max-w-full whitespace-pre-wrap">
      <code>
        {`// objectName.property
let age = person.age;

//objectName["property"]
let age = person["age"];

//objectName[expression]
let age = person[x];
`}
      </code>
    </pre>

    <h2 className="text-gray-800 text-2xl font-semibold mt-5">Example</h2>
    <pre className="bg-gray-200 p-4 rounded-lg mt-5 overflow-x-auto max-w-full whitespace-pre-wrap">
      <code>
        {`person.firstname + " is " + person.age + " years old.";
      person["firstname"] + " is " + person["age"] + " years old.";
        let x = "firstname";
let y = "age";
person[x] + " is " + person[y] + " years old.";`}
      </code>
    </pre>

    <h1 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Adding New Properties</h1>
    <p>You can create additional properties in an existing object by setting a value.</p>
    <h2 className="text-xl text-gray-800 font-semibold mt-5">Example</h2>
    <pre className="bg-gray-200 p-4 rounded-lg mt-5 overflow-x-auto max-w-full whitespace-pre-wrap">
      <code>
        {`person.nationality = "English";`}
      </code>
    </pre>

    <h1 className="text-gray-800 text-2xl font-semibold mt-10 mb-3">Property Default Values</h1>
    <p>The value given to a property in a constructor function is used as the default for every object it creates.</p>
    <h2 className="text-2xl text-gray-800 font-semibold mt-5">Example</h2>
    <pre className="bg-gray-200 p-4 rounded-lg mt-5 overflow-x-auto max-w-full whitespace-pre-wrap">
      <code>
        {`function Person(first, last, age, eyecolor) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eyecolor;
  this.nationality = "English";
}`}
      </code>
    </pre>

    <h1 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Deleting Properties</h1>
    <p>The <span className="text-red-400">delete</span> keyword removes a property from an object.</p>
   <h2 className="text-2xl text-gray-800 mt-5 font-semibold">Example</h2>
   <pre className="bg-gray-200 p-4 rounded-lg mt-5 overflow-x-auto max-w-full whitespace-pre-wrap">
    <code>
      {`const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};

delete person.age;`}
    </code>
   </pre>

   <p className="mt-5">or delete person["age"];</p>
   <pre className="bg-gray-200 p-4 rounded-lg mt-5 overflow-x-auto max-w-full whitespace-pre-wrap">
    <code>
      {`const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};

delete person["age"];`}
    </code>
   </pre>

   <h1 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Nested Objects</h1>
  <p>An object’s properties can themselves be objects.</p>
  <h2 className="text-2xl text-gray-800 font-semibold mt-5">Example</h2>
  <pre className="bg-gray-200 p-4 rounded-lg mt-5 overflow-x-auto max-w-full whitespace-pre-wrap">
    <code>
      {`myObj = {
  name:"John",
  age:30,
  myCars: {
    car1:"Ford",
    car2:"BMW",
    car3:"Fiat"
  }
}`}
    </code>
  </pre>

  <p className="mt-5">You can access nested objects using the dot notation or the bracket notation:</p>
  <h2 className="text-gray-800 text-2xl font-semibold mt-5">Example</h2>
  <pre className="bg-gray-200 p-4 rounded-lg mt-5 overflow-x-auto max-w-full whitespace-pre-wrap">
    <code>
      {`      myObj.myCars.car2;
      myObj.myCars["car2"];
      myObj["myCars"]["car2"];`}
    </code>
  </pre>
  <pre className="bg-gray-200 p-4 rounded-lg mt-5 overflow-x-auto max-w-full whitespace-pre-wrap">
    <code>
      {`let p1 = "myCars";
let p2 = "car2";
myObj[p1][p2];`}
    </code>
  </pre>


    </div>
  );
};

export default ObjectProperties;
