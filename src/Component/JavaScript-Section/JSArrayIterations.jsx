import React from 'react';

const ArrayIterationDemo = () => {
  const data = [
    {Property:'forEach()', Description:'Runs a function once for each array element.'},
    {Property:'map()', Description:'Creates a new array by transforming each element.'},
    {Property:'flatMap()', Description:'Maps each element and flattens the result one level.'},
    {Property:'filter()', Description:'Returns only the elements that pass a test.'},
    {Property:'reduce()', Description:'Reduces the array to a single accumulated value.'},
    {Property:'reduceRight()', Description:'Reduces the array from right to left into one value.'},
    {Property:'every()', Description:'Checks if all elements satisfy a condition.'},
    {Property:'some()', Description:'Checks if at least one element satisfies a condition.'},
    {Property:'from()', Description:'Creates a new array from an iterable or array-like object.'},
    {Property:'keys()', Description:'Returns an iterator of the array’s index keys.'},
    {Property:'entries()', Description:'Returns an iterator of [index, value] pairs.'},
    {Property:'with()', Description:'Creates a new array with one element replaced at a specific index.'},
    {Property:'Spread (...)', Description:'Expands an array into individual elements.'},
    {Property:'Rest (...)', Description:'Collects remaining elements into an array (in parameters or destructuring).'}
  ]
  
  return (
    <div className="max-w-4xl p-6">
      <h1 className="text-3xl font-medium text-blue-500 mb-5"> JavaScript Array Iteration Methods</h1>
      <p>Array iteration methods operate on every array item.</p>
     <table className='min-w-full border border-gray-300 text-gray-700 text-sm text-left mt-5'>
      <thead>
        <tr className='bg-gray-100'>
          <th className='px-4 py-2 border-b border-gray-300 text-gray-700 font-bold'>Property</th>
          <th className='px-4 py-2 border-b border-gray-300 text-gray-700 font-bold'>Description</th>
        </tr>
      </thead>
      {data.map((row,index)=>(
        <tr className='cursor-text hover:bg-gray-100'>
          <td className='px-4 py-2 border-b border-gray-200'>{row.Property}</td>
          <td className='px-4 py-2 border-b border-gray-200'>{row.Description}</td>
        </tr>
      ))}
     </table>
     
     <h1 className='text-2xl text-gray-800 font-semibold mt-10 mb-3'>JavaScript Array forEach()</h1>
    <p>The <span className='text-red-400'>forEach()</span> function executes a callback for every element in an array.</p>
     <h2 className='text-2xl text-gray-800 font-semibold mt-5'>Example</h2>
     <pre className='text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5'>
      <code>
        {`const numbers = [45, 4, 9, 16, 25];
let txt = "";
numbers.forEach(myFunction);

function myFunction(value, index, array) {
  txt += value + "<br>";
}`}
      </code>
     </pre>

     <p className='mt-5'>The earlier example makes use of the value parameter alone. Here’s an alternative way to write it:</p>
     <h2 className='text-2xl text-gray-800 font-semibold mt-5'>Example</h2>
     <pre className='text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5'>
      <code>
        {`const numbers = [45, 4, 9, 16, 25];
let txt = "";
numbers.forEach(myFunction);

function myFunction(value) {
  txt += value + "<br>";
}`}
      </code>
     </pre>

     <h1 className='text-2xl text-gray-800 font-semibold mt-10 mb-3'>JavaScript Array map()</h1>
     <p>The <span className='text-red-400'>map()</span> function generates a new array by applying a function to every element.</p>
     <p className='mt-3'>The <span className='text-red-400'>map()</span> method creates a new array without changing the original one and skips elements that have no values.</p>
     <p className='mt-3'>In this example, each value in the array is multiplied by 2.</p>
   <h2 className='text-gray-800 text-2xl font-semibold mt-5'>Example</h2>
     <pre className='text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5'>
      <code>
        {`const numbers1 = [45, 4, 9, 16, 25];
const numbers2 = numbers1.map(myFunction);

function myFunction(value, index, array) {
  return value * 2;
}`}
      </code>
     </pre>

     <p className='mt-5'>If a callback function only needs the value parameter, the index and array parameters can be left out.</p>
     <h2 className='text-gray-800 text-2xl font-semibold mt-5'>Example</h2>
     <pre className='text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5'>
      <code>
        {`const numbers1 = [45, 4, 9, 16, 25];
const numbers2 = numbers1.map(myFunction);

function myFunction(value) {
  return value * 2;
}`}
      </code>
     </pre>

     <h1 className='text-gray-800 text-2xl font-semibold mt-10 mb-3'>JavaScript Array flatMap()</h1>
      <p>The <span className='text-red-400'>flatMap()</span> method, added in ES2019, first applies a function to each array element and then creates a flattened array.</p>
      <h2 className='text-gray-800 text-2xl font-semibold mt-5'>Example</h2>
     <pre className='text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5'>
      <code>
        {`const myArr = [1, 2, 3, 4, 5, 6];
const newArr = myArr.flatMap((x) => x * 2);`}
      </code>
     </pre>

     <h1 className='text-gray-800 text-2xl font-semibold mt-10 mb-3'>JavaScript Array filter()</h1>
    <p className='mb-3'>This example creates a new array from elements with a value larger than 18:</p>
     <p>The <span className='text-red-400'>filter()</span> method returns a new array containing only the elements that pass a specified test.</p>
     <h2 className='text-2xl text-gray-800 font-semibold mt-5'>Example</h2>
     <pre className='text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5'>
      <code>
        {`const numbers = [45, 4, 9, 16, 25];
const over18 = numbers.filter(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}
`}
      </code>
     </pre>

     <p className='mt-5'>In the example, the callback only uses the value parameter, so the index and array parameters are not needed.</p>
     <h2 className='text-gray-800 text-2xl font-semibold mt-5'>Example</h2>
     <pre className='text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5'>
      <code>
        {`const numbers = [45, 4, 9, 16, 25];
const over18 = numbers.filter(myFunction);

function myFunction(value) {
  return value > 18;
}
`}
      </code>
     </pre>

     <h1 className='text-gray-800 text-2xl font-semibold mt-10 mb-3'>JavaScript Array reduce()</h1>
     <p className='mb-3'>The <span className='text-red-400'>reduce()</span> method processes each element in an array from left to right, applying a function to produce a single value.</p>
     <p>This example finds the sum of all numbers in an array:</p>
     <h2 className='text-2xl text-gray-800 font-semibold mt-5'>Example</h2>
     <pre className='text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5'>
      <code>
        {`const numbers = [45, 4, 9, 16, 25];
let sum = numbers.reduce(myFunction);

function myFunction(total, value, index, array) {
  return total + value;
}`}
      </code>
     </pre>

     <p className='mt-5'>Since the callback ignores the index and array, the example can be rewritten like this:</p>
     <h2 className='text-2xl text-gray-800 font-semibold mt-5'>Example</h2>
     <pre className='text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5'>
      <code>
        {`const numbers = [45, 4, 9, 16, 25];
let sum = numbers.reduce(myFunction);

function myFunction(total, value) {
  return total + value;
}
`}
      </code>
     </pre>

     <p className='mt-5'>The <span className='text-red-400'>reduce()</span> method allows you to provide an initial value.</p>
     <h2 className='text-2xl text-gray-800 font-semibold mt-5'>Example</h2>
     <pre className='text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5'>
      <code>
        {`const numbers = [45, 4, 9, 16, 25];
let sum = numbers.reduce(myFunction, 100);

function myFunction(total, value) {
  return total + value;
}`}
      </code>
     </pre>

     <h1 className='text-gray-800 text-2xl font-semibold mt-10 mb-3'>JavaScript Array reduceRight()</h1>
     <p className='mb-3'>The <span className='text-red-400'>reduceRight()</span> method applies a function to each array element to produce a single result.</p>
     <p className='mb-3'>The <span className='text-red-400'>reduceRight()</span> method processes array elements from right to left. (See also reduce().)</p>
    <p>This example finds the sum of all numbers in an array:</p>
    <h2 className='text-2xl text-gray-800 font-semibold mt-5'>Example</h2>
    <pre className='text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5'>
      <code>
        {`const numbers = [45, 4, 9, 16, 25];
let sum = numbers.reduceRight(myFunction);

function myFunction(total, value, index, array) {
  return total + value;
}`}
      </code>
    </pre>

    <p className='mt-5'>The example above can be rewritten because it only relies on the value parameter.</p>
    <h2 className='text-2xl text-gray-800 font-semibold mt-5'>Example</h2>
    <pre className='text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5'>
      <code>
        {`const numbers = [45, 4, 9, 16, 25];
let sum = numbers.reduceRight(myFunction);

function myFunction(total, value) {
  return total + value;
}`}
      </code>
    </pre>

    <h1 className='text-2xl text-gray-800 font-semibold mt-10 mb-3'>JavaScript Array every()</h1>
    <p className='mb-3'>The <span className='text-red-400'>every()</span> method tests whether all elements in an array meet a certain condition.</p>
    <p>The example checks if every array value exceeds 18.</p>
    <h2 className='text-2xl text-gray-800 font-semibold mt-5'>Example</h2>
    <pre className='text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5'>
      <code>
        {`const numbers = [45, 4, 9, 16, 25];
let allOver18 = numbers.every(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}`}
      </code>
    </pre>

  <p className='mt-5'>If a callback function only uses the value parameter, the other parameters can be left out.</p>
  <h2 className='text-gray-800 text-2xl font-semibold mt-5'>Example</h2>
  <pre className='text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5'>
    <code>
      {`const numbers = [45, 4, 9, 16, 25];
let allOver18 = numbers.every(myFunction);

function myFunction(value) {
  return value > 18;
}`}
    </code>
  </pre>

  <h1 className='text-2xl text-gray-800 font-semibold mt-10 mb-3'>JavaScript Array some()</h1>
  <p>The <span className='text-red-400'>some()</span> method tests whether at least one element in an array passes a certain condition.</p>
  <h2 className='text-2xl text-gray-800 font-semibold mt-5'>Example</h2>
   <pre className='text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5'>
    <code>
      {`const numbers = [45, 4, 9, 16, 25];
let someOver18 = numbers.some(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}
`}
    </code>
   </pre>

   <h1 className='text-gray-800 text-2xl font-semibold mt-10 mb-3'>JavaScript Array.from()</h1>
   <p>The <span className='text-red-400'>Array.from()</span> method creates a new Array object from:</p>
   <h2 className='text-gray-800 text-2xl font-semibold mt-5 mb-3'>Example</h2>
   <p>Create an Array from a String:</p>
   <pre className='text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5'>
    <code>
      {`let text = "ABCDEFG";
Array.from(text);`}
    </code>
   </pre>

   <p className='mt-5'><span className='text-red-400'>Array.from()</span> accepts an optional parameter that lets you run a function on every element of the new array.</p>
  <h2 className='text-2xl text-gray-800 font-semibold mt-5 mb-3'>Example</h2>
  <p>Create an Array from an Array:</p>
   <pre className='text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5'>
    <code>
      {`const myNumbers = [1,2,3,4];
const myArr = Array.from(myNumbers, (x) => x * 2);`}
    </code>
   </pre>

   <h1 className='text-2xl text-gray-800 font-semibold mt-10 mb-3'>JavaScript Array keys()</h1>
   <p>The <span className='text-red-400'>Array.keys()</span> method creates an Array Iterator containing the keys of the array.</p>
  <h2 className='text-2xl text-gray-800 font-semibold mt-5 mb-3'>Example</h2>
  <p>Create an Array Iterator object, containing the keys of the array:</p>
  <pre className='text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5'>
    <code>
      {`const fruits = ["Banana", "Orange", "Apple", "Mango"];
const keys = fruits.keys();

for (let x of keys) {
  text += x + "<br>";
}`}
    </code>
  </pre>

  <h1 className='text-2xl text-gray-800 font-semibold mt-10 mb-3'>JavaScript Array entries()</h1>
  <h2 className='text-gray-800 text-2xl font-semibold mt-5 mb-3'>Example</h2>
  <p>Create an Array Iterator, and then iterate over the key/value pairs:</p>
  <pre className='text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5'>
    <code>
      {`const fruits = ["Banana", "Orange", "Apple", "Mango"];
const f = fruits.entries();

for (let x of f) {
  document.getElementById("demo").innerHTML += x;
}`}
    </code>
  </pre>

  <h1 className='text-2xl text-gray-800 font-semibold mt-10 mb-3'>JavaScript Array with() Method</h1>
  <p>The <span className='text-red-400'>Array.with()</span> method, introduced in ES2023, allows you to update elements safely without altering the original array.</p>
   <h2 className='text-gray-800 text-2xl font-semibold mt-5'>Example</h2>
   <pre className='text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5'>
    <code>
      {`const months = ["Januar", "Februar", "Mar", "April"];
const myMonths = months.with(2, "March");`}
    </code>
   </pre>

   <h1 className='text-2xl text-gray-800 font-semibold mt-10 mb-3'>JavaScript Array Spread (...)</h1>
  <p>Using the spread operator <span className='text-red-400'>(...)</span>, an array is expanded into separate elements and can be combined with other arrays.</p>
  <pre className='text-green-400 bg-gray-900 p-4 rounded-lg mt-5'>
    <code>
      {`const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const arr3 = [...arr1, ...arr2];`}
    </code>
  </pre>

  <p className='mt-5'>In this example, the spread operator ... turns arr1 and arr2 into single elements, which are then used to build arr3.</p>
  <pre className='text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5'>
    <code>
      {`const q1 = ["Jan", "Feb", "Mar"];
const q2 = ["Apr", "May", "Jun"];
const q3 = ["Jul", "Aug", "Sep"];
const q4 = ["Oct", "Nov", "Des"];

const year = [...q1, ...q2, ...q3, ...q4];`}
    </code>
  </pre>

  <p className='mt-5'>The spread operator <span className='text-red-400'>(...)</span> can be used to copy an array:</p>
  <h2 className='text-gray-800 text-2xl font-semibold mt-5'>Example</h2>
  <pre className='text-green-400 bg-gray-900 p-4 rounded-lg mt-5'>
    <code>
      {`const arr1 = [1, 2, 3];
const arr2 = [...arr1];`}
    </code>
  </pre>

  <p className='mt-5'>Using ..., you can expand an array to provide multiple arguments to a function.</p>
  <h2 className='text-2xl text-gray-800 font-semibold mt-5'>Example</h2>
  <pre className='text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5'>
    <code>
      {`const numbers = [23,55,21,87,56];
let minValue = Math.min(...numbers);
let maxValue = Math.max(...numbers);`}
    </code>
  </pre>

  <h1 className='text-2xl text-gray-800 font-semibold mt-10 mb-3'>JavaScript Array Rest (...)</h1>
  <p>The rest operator <span className='text-red-400'>(...)</span> lets you extract elements from an array and gather the remaining items.</p>
  <h2 className='text-2xl text-gray-800 font-semibold mt-5'>Example</h2>
   <pre className='text-green-400 bg-gray-900 p-4 rounded-lg mt-5'>
    <code>
      {`let a, rest;
const arr1 = [1,2,3,4,5,6,7,8];

[a, ...rest] = arr1;`}
    </code>
   </pre>

   <h2 className='text-2xl text-gray-800 font-semibold mt-5'>Example</h2>
   <pre className='text-green-400 bg-gray-900 p-4 rounded-lg mt-5'>
    <code>
      {`let a, b, rest;
const arr1 = [1,2,3,4,5,6,7,8];

[a, b, ...rest] = arr1;`}
    </code>
   </pre>











     
     </div>
  );
};

export default ArrayIterationDemo;
