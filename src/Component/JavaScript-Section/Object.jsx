import React from 'react';

const ObjectDemo = () => {
  const data = [ 
    {Types:'string', Example:'"Hello"'},
    {Types:'number', Example:'3.14'},
    {Types:'boolean', Example:'true'},
    {Types:'bigint', Example:'12345678901234'},
    {Types:'null', Example:'null'},
    {Types:'undefined', Example:'undefined'},
    {Types:'symbol', Example:'symbol'}
  ]

  return (
    <div className="max-w-4xl p-6">
      <h1 className="text-3xl font-medium text-blue-500 mb-3">JavaScript Objects</h1>
 
        <p>
          An <span className='text-red-400'>object</span> in JavaScript is a data structure that allows you to store
          collections of data using <code>key-value</code> pairs.
        </p>

        <p>Objects are variables that can hold many values in the form of property–value pairs and are commonly used to represent real-world things such as houses, vehicles, people, and animals.</p>
       
       <h1 className='text-2xl text-gray-800 font-semibold mt-10 mb-3'>JavaScript Objects</h1>
      <p>This code stores multiple values—Fiat, 500, and white—inside an object called car.</p>
     <h2 className='text-2xl text-gray-800 mt-5 font-semibold'>Example</h2>
      <pre className='text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5'>
        <code>
          {`const car = {type:"Fiat", model:"500", color:"white"};`}
        </code>
      </pre>

      <h1 className='text-2xl text-gray-800 font-semibold mt-10 mb-3'>How to Create a JavaScript Object</h1>
      <p>An <span className='text-red-400'>object literal</span> is a short and simple method for creating an object, written as key–value pairs inside { }.</p>
      <pre className='text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5 mb-5'>
        <code>
          {`{firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"}`}
        </code>
      </pre>

      <p>Object properties are defined as key–value pairs.</p>
      <h2 className='text-gray-800 text-2xl font-semibold mt-5'>Example</h2>
      <pre className='text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5'>
        <code>
          {`// Create an Object
const person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};`}
        </code>
      </pre>

      <p className='mt-5'>You can create an empty object first and add its properties later.</p>
      <pre className='text-green-400 p-4 rounded-lg bg-gray-900 mt-5'>
        <code>
          {`// Create an Object
const person = {};

// Add Properties
person.firstName = "John";
person.lastName = "Doe";
person.age = 50;
person.eyeColor = "blue";
`}
        </code>
      </pre>

      <h1 className='text-2xl text-gray-800 font-semibold mt-10 mb-3'>Using the new Keyword</h1>
      <p>A new JavaScript object can be created with the <span className='text-red-400'>new Object()</span> constructor.</p>
      <h2 className='text-gray-800 text-2xl font-semibold mt-5'>Example</h2>
      <pre className='text-green-400 bg-gray-900 p-4 rounded-lg mt-5'>
        <code>
          {`// Create an Object
const person = new Object({
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
});`}
        </code>
      </pre>
      

      <h1 className='text-2xl text-gray-800 font-semibold mt-10 mb-3'>Object Properties</h1>
      <p><span className='text-red-400'>Object</span> properties can be accessed in two different ways.</p>
      <h2 className='text-2xl text-gray-800 font-semibold mt-5'>Example</h2>
      <pre className='text-green-400 bg-gray-900 p-4 rounded-lg mt-5'>
        <code>
          {`objectName.propertyName
objectName["propertyName"]
`}
        </code>
      </pre>

      <h2 className='text-2xl text-gray-800 mt-5 font-semibold'>Example</h2>
     <pre className='text-green-400 bg-gray-900 p-4 rounded-lg mt-5'>
      <code>
        {`person.lastName;
person["lastName"];`}
      </code>
     </pre>

     <h1 className='text-gray-800 text-2xl font-semibold mt-10 mb-3'>JavaScript Object Methods</h1>
    <p>Actions performed by an object are called methods, which are function definitions kept as property values.</p>
      <h2 className='text-2xl text-gray-800 font-semibold mt-5'>Example</h2>
      <pre className='text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5'>
        <code>
          {`const person = {
  firstName: "John",
  lastName : "Doe",
  id       : 5566,
  fullName : function() {
    return this.firstName + " " + this.lastName;
  }
};`}
        </code>
      </pre>

      <p className='mt-5'>In the example above, this points to the person object.</p>
      <p>The expression this.lastName accesses the person object’s lastName property.</p>
      

      <h1 className='text-2xl text-gray-800 mt-10 mb-3 font-semibold'>How to Display JavaScript Objects?</h1>
      <p>When you display a JavaScript object, it shows <span className='text-red-400'>[object Object]</span>.</p>
      <h2 className='text-2xl text-gray-800 font-semibold mt-5'>Example</h2>
      <pre className='text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5'>
        <code>
          {`// Create an Object
const person = {
  name: "John",
  age: 30,
  city: "New York"
};

let text = person;`}
        </code>
      </pre>

      <h1 className='text-2xl text-gray-800 font-semibold mt-10 mb-3'>Displaying Object Properties</h1>
      <p>You can define object properties using string values.</p>
      <h2 className='text-2xl text-gray-800 mt-5 font-semibold'>Example</h2>
      <pre className='text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5'>
        <code>
          {`// Create an Object
const person = {
  name: "John",
  age: 30,
  city: "New York"
};

// Add Properties
let text = person.name + "," + person.age + "," + person.city;`}
        </code>
      </pre>

      <h1 className='text-2xl text-gray-800 font-semibold mt-10 mb-3'>Object Constructor Functions</h1>
      <p className='mb-3'>To create many objects with the same structure, an object constructor function is used.</p>
      <p>It’s good practice to start constructor function names with an uppercase letter.</p>
     <h2 className='text-gray-800 text-2xl font-semibold mt-5'>Example</h2>
     <pre className='text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5'>
      <code>
        {`function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
}`}
      </code>
     </pre>

     <p className='mt-10'>Using <span className='text-red-400'>new Person()</span>, we can generate many new Person instances.</p>
    <h2 className='text-2xl text-gray-800 font-semibold mt-5'>Example</h2>
    <pre className='text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5'>
      <code>
        {`const myFather = new Person("John", "Doe", 50, "blue");
const myMother = new Person("Sally", "Rally", 48, "green");
const mySister = new Person("Anna", "Rally", 18, "green");

const mySelf = new Person("Johnny", "Rally", 22, "green");`}
      </code>
    </pre>

    <h1 className='text-2xl text-gray-800 mt-10 font-semibold mb-3'>In JavaScript, objects are the most important feature.</h1>
    <p>Understanding objects means understanding JavaScript.</p>
    <ul className='list-[square] list-inside'>
      <li>Objects are objects</li>
      <li>Maths are objects</li>
      <li>Functions are objects</li>
      <li>Dates are objects</li>
      <li>Arrays are objects</li>
      <li>Maps are objects</li>
      <li>Sets are objects</li>
    </ul>



    <h1 className='text-2xl text-gray-800 font-semibold mt-10 mb-3'>JavaScript Primitives</h1>
    <p className='mb-3'>A primitive data type can hold only a single simple value.</p>
    <p>There are 7 primitive types in JavaScript.</p>
    <table className='min-w-full border border-gray-300 text-gray-700 text-sm text-left mt-10'>
      <thead>
        <tr className='bg-gray-100'>
          <th className='px-4 py-2 border-b border-gray-300 text-gray-700 font-bold'>Type</th>
          <th className='px-4 py-2 border-b border-gray-300 text-gray-700 font-bold'>Example</th>
        </tr>
      </thead>
      {data.map((row,index)=>(
        <tr className='cursor-text hover:bg-gray-100'>
          <td className='px-4 py-2 border-b border-gray-200'>{row.Types}</td>
          <td className='px-4 py-2 border-b border-gray-200'>{row.Example}</td>
        </tr>
      ))}
    </table>

      </div>
  );
};

export default ObjectDemo;
