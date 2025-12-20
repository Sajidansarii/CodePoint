import React, { useState } from 'react';

const ArrayMethodsDemo = () => {
 
  const data = [
    {Property:'length', Description:'Returns the number of elements in an array.'},
    {Property:'toString()', Description:'Converts the array into a comma-separated string.'},
    {Property:'at()', Description:'Returns the element at the specified index (supports negative indexing).'},
    {Property:'join()', Description:'Joins all array elements into a string using a custom separator.'},
    {Property:'pop()', Description:'Removes and returns the last element of the array.'},
    {Property:'push()', Description:'Adds one or more elements to the end of the array and returns the new length.'},
    {Property:'shift()', Description:'Removes and returns the first element of the array.'},
    {Property:'unshift()', Description:'Adds one or more elements to the beginning of the array and returns the new length.'},
    {Property:'isArray()', Description:'Checks whether a given value is an array (true or false).'},
    {Property:'delete (operator)', Description:'Removes an element at a specific index but does NOT adjust array length (leaves empty).'},
    {Property:'concat()', Description:'Merges two or more arrays and returns a new array.'},
    {Property:'copyWithin()', Description:'Copies part of the array to another position within the same array.'},
    {Property:'flat()', Description:'Flattens nested arrays into a single array.'},
    {Property:'slice()', Description:'Returns a portion of the array without modifying the original array.'},
    {Property:'splice()', Description:'Adds, removes, or replaces elements in an array (modifies original array).'},
    {Property:'toSpliced() (new in ES2023)', Description:'Like splice(), but returns a new array instead of modifying the original.'}
  ]


  return (
    <div className="max-w-4xl p-6">   
      <h1 className="text-3xl font-medium text-blue-500">JavaScript Array Methods</h1>

      <h2 className='text-2xl text-gray-800 font-semibold mt-5'>Array Methods</h2>
      <table className='min-w-full border border-gray-300 text-gray-700 text-sm text-left mt-5'>
        <thead>
          <tr className='bg-gray-100'>
            <th className='px-4 py-2 border-b border-gray-300 text-gray-700 font-bold'>Property</th>
            <th className='px-4 py-2 border-b border-gray-300 text-gray-700 font-bold'>Description</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row,index)=>(
            <tr className='cursor-text hover:bg-gray-100'>
              <td className='px-4 py-2 border-b border-gray-200'>{row.Property}</td>
              <td className='px-4 py-2 border-b border-gray-200'>{row.Description}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h1 className='text-gray-800 text-2xl font-semibold mt-10 mb-3'>JavaScript Array length</h1>
     <p>The <span className='text-red-400'>length</span> property returns the length (size) of an array:</p>
     <h2 className='text-gray-800 text-2xl font-semibold mt-5'>Example</h2>
     <pre className='text-green-400 bg-gray-900 p-4 rounded-lg mt-5 mb-5'>
      <code>
        {`const fruits = ["Banana", "Orange", "Apple", "Mango"];
 let size = fruits.length;`}
      </code>
     </pre>
     <p>The <span className='text-red-400'>length</span> property may be used not only to retrieve an array’s size but also to adjust it.</p>
    <h2 className='text-gray-800 text-2xl font-semibold mt-5'>Example</h2>
       <pre className='text-green-400 bg-gray-900 p-4 rounded-lg mt-5'>
        <code>
          {`const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.length = 2;`}
        </code>
       </pre>

       <h1 className='text-gray-800 text-2xl font-semibold mt-10 mb-3'>JavaScript Array toString()</h1>
       <p>The <span className='text-red-400'>toString()</span> method converts an array into a comma-separated string.</p>
       <h2 className='text-gray-800 text-2xl font-semibold mt-5'>Example</h2>
       <pre className='text-green-400 bg-gray-900 p-4 rounded-lg mt-5'>
        <code>
          {`const fruits = ["Banana", "Orange", "Apple", "Mango"];
let myList = fruits.toString();
`}
        </code>
       </pre>

       <h1 className='text-gray-800 text-2xl font-semibold mt-10 mb-3'>JavaScript Array at()</h1>
       <p>In ES2022, JavaScript got a new array method known as <span className='text-red-400'>at()</span>.</p>
       <h2 className='text-gray-800 text-2xl font-semibold mt-5 mb-3'>Example</h2>
       <p>Use the <span className='text-red-400'>at()</span> method to access the third item in the fruits array.</p>
       <pre className='text-green-400 bg-gray-900 p-4 rounded-lg mt-5 mb-5'>
        <code>
          {`const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fruit = fruits.at(2);`}
        </code>
       </pre>

       <p>Use square brackets to access the third item in the fruits array.</p>
       <pre className='text-green-400 bg-gray-900 p-4 rounded-lg mt-10'>
        <code>
          {`const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fruit = fruits[2];`}
        </code>
       </pre>

       <p className='mt-3 mb-3'>The <span className='text-red-400'>at()</span> method retrieves the array element located at the given index.</p>
       <p>The <span className='text-red-400'>at()</span> method retrieves the same array element as using bracket notation <span className='text-red-400'>[ ]</span>.</p>
    
      <h1 className='text-2xl text-gray-800 font-semibold mt-10 mb-3'>JavaScript Array join()</h1>
      <p>The <span className='text-red-400'>join()</span> method combines all elements of an array into a single string.</p>
      <p className='mt-3'>It works like <span className='text-red-400'>toString()</span>, but allows you to choose a separator.</p>
     <h2 className='text-2xl text-gray-800 font-semibold mt-5'>Example</h2>
     <pre className='text-green-400 bg-gray-900 p-4 rounded-lg mt-5'>
      <code>
        {`const fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits.join(" * ");`}
      </code>
     </pre>

     <h1 className='text-2xl text-gray-800 font-semibold mt-10 mb-3'>Popping and Pushing</h1>
     <p className='mb-3'>Arrays allow you to easily take out elements and insert new ones—this is known as popping and pushing.</p>
     <p>Popping items out of an array, or pushing items into an array.</p>

     <h1 className='text-2xl text-gray-800 font-semibold mt-10 mb-3'>JavaScript Array pop()</h1>
     <p>Using <span className='text-red-400'>pop()</span> removes the last item from an array.</p>
     <h2 className='text-2xl text-gray-800 font-semibold mt-5' >Example</h2>
    <pre className='text-green-400 bg-gray-900 p-4 rounded-lg mt-5 mb-3'>
      <code>
        {`const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.pop();`}
      </code>
    </pre>
    
    <p>When you use <span className='text-red-400'>pop()</span>, it returns the element that was taken out</p>
     <h2 className='text-2xl text-gray-800 font-semibold mt-5'>Example</h2>
     <pre className='text-green-400 bg-gray-900 p-4 rounded-lg mt-5'>
      <code>
        {`const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fruit = fruits.pop();`}
      </code>
     </pre>


     <h1 className='text-2xl text-gray-800 font-semibold mt-10 mb-3'>JavaScript Array push()</h1>
    <p>The <span className='text-red-400'>push()</span> method adds a new element to an array (at the end):</p>
    <h2 className='text-2xl text-gray-800 font-semibold mt-5'>Example</h2>
    <pre className='text-green-400 bg-gray-900 p-4 rounded-lg mt-5 mb-3'>
      <code>
        {`const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Kiwi");`}
      </code>
    </pre>

    <p>The <span className='text-red-400'>push()</span> method gives the updated length of the array.</p>
    <h2 className='text-2xl text-gray-800 font-semibold mt-5'>Example</h2>
    <pre className='text-green-400 bg-gray-900 p-4 rounded-lg mt-5'>
      <code>
        {`const fruits = ["Banana", "Orange", "Apple", "Mango"];
let length = fruits.push("Kiwi");`}
      </code>
    </pre>

    <h1 className='text-2xl text-gray-800 font-semibold mt-10 mb-3'>JavaScript Array shift()</h1>
    <p>The <span className='text-red-400'>shift()</span> method deletes the first element of an array and moves all remaining elements down one index.</p>
    <h2 className='text-2xl text-gray-800 font-semibold mt-5'>Example</h2>
    <pre className='text-green-400 bg-gray-900 p-4 rounded-lg mt-5'>
      <code>
        {`const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.shift();`}
      </code>
    </pre>

    <h1 className='text-2xl text-gray-800 font-semibold mt-10 mb-3'>JavaScript Array unshift()</h1>
    <p>The <span className='text-red-400'>unshift()</span> method inserts a new element at the start of an array and moves existing elements to higher indexes.</p>
    <h2 className='text-2xl text-gray-800 font-semibold mt-5'>Example</h2>
    <pre className='text-green-400 bg-gray-900 p-4 rounded-lg mt-5'>
      <code>
        {`const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.unshift("Lemon");`}
      </code>
    </pre>

    <h1 className='text-2xl text-gray-800 font-semibold mt-10 mb-3'>Changing Elements</h1>
    <p>You can access array elements by their index number.</p>
    <h2 className='text-2xl text-gray-800 font-semibold mt-5'>Example</h2>
    <pre className='text-green-400 bg-gray-900 p-4 rounded-lg mt-5'>
      <code>
        {`const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits[0] = "Kiwi";
`}
      </code>
    </pre>

    <h1 className='text-2xl text-gray-800 font-semibold mt-10 mb-3'>JavaScript Array length</h1>
   <p>The <span className='text-red-400'>length</span> property offers a simple way to add a new element to an array.</p>
   <h2 className='text-2xl text-gray-800 font-semibold mt-5'>Example</h2>
   <pre className='text-green-400 bg-gray-900 p-4 rounded-lg mt-5'>
    <code>
      {`const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits[fruits.length] = "Kiwi";`}
    </code>
   </pre>

   <h1 className='text-2xl text-gray-800 font-semibold mt-10 mb-3'>Array.isArray()</h1>
   <p>ECMAScript 5 (JavaScript 2009) introduced the <span className='text-red-400'>Array.isArray()</span> method.</p>
   <h2 className='text-2xl text-gray-800 font-semibold mt-5'>Example</h2>
   <pre className='text-green-400 bg-gray-900 p-4 rounded-lg mt-5'>
    <code>
      {`Array.isArray(fruits);`}
    </code>
   </pre>

   <h1 className='text-2xl text-gray-800 font-semibold mt-10 mb-3'>JavaScript Array delete()</h1>
  <p>Using <span className='text-red-400'>delete</span> creates empty slots in the array. It’s better to use <span className='text-red-400'>pop()</span> or <span className='text-red-400'>shift()</span>.</p>
  <h2 className='text-2xl text-gray-800 font-semibold mt-5'>Example</h2>
  <pre className='text-green-400 bg-gray-900 p-4 rounded-lg mt-5'>
    <code>
      {`const fruits = ["Banana", "Orange", "Apple", "Mango"];
delete fruits[0];`}
    </code>
  </pre>

  <h1 className='text-2xl text-gray-800 font-semibold mt-10 mb-3'>JavaScript Array concat()</h1>
  <p>Using <span className='text-red-400'>concat()</span>, you can combine multiple arrays into a new one.</p>
  <h2 className='text-2xl text-gray-800 font-semibold mt-5'>Example</h2>
  <pre className='text-green-400 bg-gray-900 p-4 rounded-lg mt-5'>
    <code>
      {`const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];

const myChildren = myGirls.concat(myBoys);`}
    </code>
  </pre>

  <p className='mt-5'>The <span className='text-red-400'>concat()</span> method doesn’t modify the original arrays; it always returns a new one. It can accept multiple array arguments.</p>
  <h2 className='text-2xl text-gray-800 font-semibold mt-5'>Example</h2>
   <pre className='text-green-400 bg-gray-900 p-4 rounde-lg mt-5'>
    <code>
      {`const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const arr3 = ["Robin", "Morgan"];
const myChildren = arr1.concat(arr2, arr3);`}
    </code>
   </pre>

   <h1 className='text-2xl text-gray-800 font-semibold mt-10 mb-3'>Array copyWithin()</h1>
   <p>The <span className='text-red-400'>copyWithin()</span> method duplicates elements of an array to a different position within the same array.</p>
   <h2 className='text-2xl text-gray-800 font-semibold mt-5'>Example</h2>
   <pre className='text-green-400 bg-gray-900 p-4 rounded-lg mt-5'>
    <code>
      {`const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.copyWithin(2, 0);`}
    </code>
   </pre>

   <h1 className='text-2xl text-gray-800 font-semibold mt-10 mb-3'>JavaScript Array flat()</h1>
    <p>The <span className='text-red-400'>flat()</span> method returns a new array with sub-array elements merged to a specified depth.</p>
    <h2 className='text-2xl text-gray-800 mt-5 font-semibold'>Example</h2>
    <pre className='text-green-400 bg-gray-900 p-4 rounded-lg mt-5'>
      <code>
        {`const myArr = [[1,2],[3,4],[5,6]];
const newArr = myArr.flat();`}
      </code>
    </pre>


    <h1 className='text-2xl text-gray-800 font-semibold mt-10 mb-3'>JavaScript Array flatMap()</h1>
    <p>ES2019 introduced the <span className='text-red-400'>flatMap()</span> method to JavaScript. It first maps each element of an array and then flattens the result into a new array.</p>
    <h2 className='text-2xl text-gray-800 font-semibold mt-5'>Example</h2>
    <pre className='text-green-400 bg-gray-900 p-4 rounded-lg mt-5'>
      <code>
        {`const myArr = [1, 2, 3, 4, 5, 6];
const newArr = myArr.flatMap(x => [x, x * 10]);`}
      </code>
    </pre>

    <h1 className='text-2xl text-gray-800 font-semibold mt-10 mb-3'>JavaScript Array splice()</h1>
    <p>The <span className='text-red-400'>splice()</span> method allows you to insert new elements into an array.</p>
    <h2 className='text-2xl text-gray-800 font-semibold mt-5'>Example</h2>
    <pre className='text-green-400 bg-gray-900 p-4 rounded-lg mt-5'>
      <code>
        {`const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 0, "Lemon", "Kiwi");`}
      </code>
    </pre>

    <h1 className='text-2xl text-gray-800 font-semibold mt-10 mb-3'>Using splice() to Remove Elements</h1>
    <p>Using <span className='text-red-400'>splice()</span> correctly, you can remove elements while keeping the array continuous.</p>
     <h2 className='text-2xl text-gray-800 mt-5 font-semibold'>Example</h2>
      <pre className='text-green-400 bg-gray-900 p-4 rounded-lg mt-5 mb-5'>
        <code>
          {`const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(0, 1);`}
        </code>
      </pre>

      <p>The first argument (0) tells <span className='text-red-400'>splice()</span> where to insert new elements, and the second argument (1) tells it how many to remove.</p>


    <h1 className='text-2xl text-gray-800 font-semibold mt-10 mb-3'>JavaScript Array toSpliced()</h1>
   <p>ES2023 introduced the toSpliced() method, allowing arrays to be spliced without modifying the original array. Unlike <span className='text-red-400'>splice()</span>, toSpliced() returns a new array while leaving the original intact.</p>
    <h2 className='text-2xl text-gray-800 font-semibold mt-5'>Example</h2>
    <pre className='text-green-400 bg-gray-900 p-4 rounded-lg mt-5'>
      <code>
        {`const months = ["Jan", "Feb", "Mar", "Apr"];
const spliced = months.toSpliced(0, 1);`}
      </code>
    </pre>

    <h1 className='text-2xl text-gray-800 font-semibold mt-10 mb-3'>JavaScript Array slice()</h1>
    <p>Using <span className='text-red-400'>slice()</span>, you can create a new array by taking a part of an existing array.</p>
    <h2 className='text-2xl text-gray-800 mt-5 font-semibold'>Example</h2>
    <pre className='text-green-400 bg-gray-900 p-4 rounded-lg mt-5'>
      <code>
        {`const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(1);`}
      </code>
    </pre>




      </div>
  );
};

export default ArrayMethodsDemo;
