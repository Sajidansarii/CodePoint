import React from 'react';

const ArraySearchDemo = () => {
  const data = [ 
    {Property:'indexOf()', Description:'Returns the first index of a specified element in an array.'},
    {Property:'lastIndexOf()', Description:'Returns the last index of a specified element in an array.'},
    {Property:'includes()', Description:'Checks if an array contains a certain element.'},
    {Property:'find()', Description:'Returns the first element in an array that matches a condition.'},
    {Property:'findIndex()', Description:'Returns the index of the first element that matches a condition.'},
    {Property:'findLast()', Description:'Returns the last element in an array that matches a condition.'},
    {Property:'findLastIndex()', Description:'Returns the index of the last element that matches a condition.'}
  ];

  return (
    <div className="max-w-4xl p-6">
      <h1 className="text-3xl font-medium text-blue-500">JavaScript Array Search Methods</h1>
      <h2 className='text-2xl text-gray-800 font-semibold mt-10'>Array Search Methods</h2>
      <table className='min-w-full border border-gray-300 text-gray-700 text-sm txet-left mt-5'>
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

      <h1 className='text-2xl text-gray-800 font-semibold mt-10 mb-3'>JavaScript Array indexOf()</h1>
      <p>The <span className='text-red-400'>indexOf()</span> method looks through an array to find a specific element and returns its index.</p>
      <h2 className='text-2xl text-gray-800 font-semibold mt-5 mb-3'>Example</h2>
      <p>Search an array for the item "Apple":</p>
      <pre className='text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5'>
        <code>
          {`const fruits = ["Apple", "Orange", "Apple", "Mango"];
let position = fruits.indexOf("Apple") + 1;`}
        </code>
      </pre>

      <h1 className='text-2xl text-gray-800 font-semibold mt-5'>Syntax</h1>
       <pre className='text-green-400 bg-gray-900 p-4 rounded-lg mt-5 mb-3'>
        <code>
          {`array.indexOf(item, start)`}
        </code>
       </pre>

       <p>The <span className='text-red-400'>Array.indexOf()</span> method returns -1 when the element isn’t in the array, and if it appears multiple times, it gives the index of its first occurrence.</p>


     <h1 className='text-2xl text-gray-800 font-semibold mt-10 mb-3'>JavaScript Array LastIndexOf()</h1>
    <p><span className='text-red-400'>Array.lastIndexOf()</span> works like <span className='text-red-400'>Array.indexOf()</span>, but it returns the index of the element’s last occurrence.</p>
    <h2 className='text-2xl text-gray-800 font-semibold mt-5 mb-3'>Example</h2>
    <p>Search an array for the item "Apple":</p>
    <pre className='text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5'>
      <code>
        {`const fruits = ["Apple", "Orange", "Apple", "Mango"];
let position = fruits.lastIndexOf("Apple") + 1;`}
      </code>
    </pre>

    <h1 className='text-2xl text-gray-900 font-semibold mt-5'>Syntax</h1>
    <pre className='text-green-400 bg-gray-900 p-4 rounded-lg mt-5'>
      <code>
        {`array.lastIndexOf(item, start)`}
      </code>
    </pre>


    <h1 className='text-2xl text-gray-900 font-semibold mt-10 mb-3'>JavaScript Array includes()</h1>
   <p>Arrays gained the <span className='text-red-400'>includes()</span> method in ECMAScript 2016, letting us check whether an element exists in an array—including NaN, which indexOf cannot detect.</p>
   <h2 className='text-2xl text-gray-800 font-semibold mt-5 mb-3'>Example</h2>
   <pre className='text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5'>
    <code>
      {`const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.includes("Mango"); // is true`}
    </code>
   </pre>

   <h1 className='text-2xl text-gray-800 font-semibold mt-5'>Syntax</h1>
   <pre className='text-green-400 bg-gray-900 p-4 rounded-lg mt-5'>
    <code>
      {`array.includes(search-item)`}
    </code>
   </pre>

   <h1 className='text-2xl text-gray-800 font-semibold mt-10 mb-3'>JavaScript Array find()</h1>
   <p>The <span className='text-red-400'>find()</span> method returns the first element in an array that satisfies a provided test function.</p>
   <p className='mt-3'>In this example, we find the first array item that is larger than 18.</p>
   <h2 className='text-gray-800 text-2xl font-semibold mt-5'>Example</h2>
   <pre className='text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5 mb-5'>
    <code>
      {`const numbers = [4, 9, 16, 25, 29];
let first = numbers.find(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}`}
    </code>
   </pre>

   <p>Keep in mind that the function receives three arguments: the element’s value, its index, and the array.</p>
   
   <h1 className='text-2xl text-gray-800 font-semibold mt-10 mb-3'>JavaScript Array findIndex()</h1>
   <p>The <span className='text-red-400'>findIndex()</span> method gives the index of the first element in an array that meets a test function’s condition.</p>
   <h2 className='text-gray-800 text-2xl font-semibold mt-5'>Example</h2>
   <pre className='text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5'>
    <code>
      {`const numbers = [4, 9, 16, 25, 29];
let first = numbers.findIndex(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}`}
    </code>
   </pre>

   <h1 className='text-2xl text-gray-800 font-semibold mt-10 mb-3'>JavaScript Array findLast() Method</h1>
   <p>ES2023 added <span className='text-red-400'>findLast()</span>, allowing you to start from the array’s end and retrieve the first element that satisfies a test.</p>
   <h2 className='text-gray-800 text-2xl font-semibold mt-5'>Example</h2>
   <pre className='text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5'>
    <code>
      {`const temp = [27, 28, 30, 40, 42, 35, 30];
let high = temp.findLast(x => x > 40);`}
    </code>
   </pre>

   <h1 className='text-2xl text-gray-800 font-semibold mt-10 mb-3'>JavaScript Array findLastIndex() Method</h1>
   <p>The <span className='text-red-400'>findLastIndex()</span> method returns the index of the last array element that passes a given test.</p>
   <h2 className='text-2xl text-gray-800 font-semibold mt-5'>Examplr</h2>
   <pre className='text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5'>
    <code>
      {`const temp = [27, 28, 30, 40, 42, 35, 30];
let pos = temp.findLastIndex(x => x > 40);`}
    </code>
   </pre>

    </div>
  );
};

export default ArraySearchDemo;
