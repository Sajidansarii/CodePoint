import React from 'react';

const ArraySortDemo = () => {
  const data = [
    {Property:'Array.sort()', Description:'Sorts the elements of an array in place and returns the sorted array, optionally using a compare function for custom sorting.'},
    {Property:'Array.reverse()', Description:'Reverses the order of elements in an array in place, so the first element becomes last and the last becomes first.'},
    {Property:'Array.toSorted()', Description:'Returns a new array with elements sorted, leaving the original array unchanged, optionally using a compare function.'},  
    {Property:'Array.toReversed()', Description:'Returns a new array with elements in reverse order, without modifying the original array.'},
    {Property:'Sorting Objects / Numeric Sort', Description:'Sorts numbers or objects in an array using a compare function to define the sorting criteria.'},
    {Property:'Random Sort', Description:'Reorders the elements of an array in a random order, often done using arr.sort(() => Math.random() - 0.5).'},
    {Property:'Math.min()', Description:'Returns the smallest number from a set of values or an array using the spread operator.'},
    {Property:'Math.max()', Description:'Returns the largest number from a set of values or an array using the spread operator.'},
    {Property:'Homemade Min()', Description:'A custom function that iterates through an array to find and return the smallest element.'},
    {Property:'Homemade Max()', Description:'A custom function that iterates through an array to find and return the largest element.'},
  ]
    return (
    <div className="max-w-4xl p-6">
      <h1 className="text-3xl font-medium text-blue-500">JavaScript Array Sort Methods</h1>
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

      <h1 className='text-gray-800 text-2xl font-semibold mt-10 mb-3'>Sorting an Array</h1>
     <p>The <span className='text-red-400'>sort()</span> method arranges the elements of an array in alphabetical order.</p>
     <h2 className='text-2xl text-gray-800 font-semibold mt-5'>Example</h2>
       <pre className='text-green-400 bg-gray-900 p-4 rounded-lg mt-5'>
        <code>
          {`const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();`}
        </code>
       </pre>

       <h1 className='text-gray-800 text-2xl font-semibold mt-10 mb-3'>Reversing an Array</h1>
       <p>The <span className='text-red-400'>reverse()</span> method flips the order of elements in an array.</p>
      <h2 className='text-2xl text-gray-800 font-semibold mt-5'>Example</h2>
      <pre className='text-green-400 bg-gray-900 p-4 rounded-lg mt-5'>
        <code>
          {`const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.reverse();`}
        </code>
      </pre>

      <p className='mt-5'>Using <span className='text-red-400'>sort()</span> and <span className='text-red-400'>reverse()</span> together will order the array in descending sequence.</p>
      <h2 className='text-2xl text-gray-800 font-semibold mt-5'>Example</h2>
     <pre className='text-green-400 bg-gray-900 p-4 rounded-lg mt-5'>
      <code>
        {`const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();
fruits.reverse();`}
      </code>
     </pre>

     <h1 className='text-2xl text-gray-800 font-semibold mt-10 mb-3'>JavaScript Array toSorted() Method</h1>
     <p className='mb-3'>ES2023 introduced <span className='text-red-400'>toSorted()</span> as a safe sorting method that leaves the original array unchanged.</p>
     <p>The key difference is that <span className='text-red-400'>toSorted()</span> returns a new sorted array without touching the original, while <span className='text-red-400'>sort()</span> modifies the array in place.</p>
     <h2 className='text-2xl text-gray-800 font-semibold mt-5'>Example</h2>
     <pre className='text-green-400 bg-gray-900 p-4 rounded-lg mt-5'>
      <code>
        {`const months = ["Jan", "Feb", "Mar", "Apr"];
const sorted = months.toSorted();
`}
      </code>
     </pre>

     <h1 className='text-2xl text-gray-800 font-semibold mt-10 mb-3'>JavaScript Array toReversed() Method</h1>
     <p className='mb-3'>The <span className='text-red-400'>toReversed()</span> method, added in ES2023, creates a reversed copy of an array while leaving the original untouched.</p>
     <p>The key difference is that <span className='text-red-400'>toReversed()</span> returns a new reversed array without touching the original, while <span className='text-red-400'>reverse()</span> modifies the original array.</p>
     <h2 className='text-2xl text-gray-800 font-semibold mt-5'>Example</h2>
    <pre className='text-green-400 bg-gray-900 p-4 rounded-lg mt-5'>
      <code>
        {`const months = ["Jan", "Feb", "Mar", "Apr"];
const reversed = months.toReversed();`}
      </code>
    </pre>

    <h1 className='text-2xl text-gray-800 font-semibold mt-10 mb-3'>Numeric Sort</h1>
    <p>By default, <span className='text-red-400'>sort()</span> treats all values as strings. This is fine for text (e.g., “Apple” comes before “Banana”), but it causes problems when sorting numbers. For example, "25" is considered greater than "100" because "2" is greater than "1" in string comparison. As a result, sorting numbers with <span className='text-red-400'>sort()</span> gives incorrect output. To fix this, you need to provide a compare function.</p>
   <h2 className='text-2xl text-gray-800 font-semibold mt-5'>Example</h2>
   <pre className='text-green-400 bg-gray-900 p-4 rounded-lg mt-5 mb-5'>
    <code>
      {`const points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return a - b});`}
    </code>
   </pre>

   <p>Use the same trick to sort an array descending:</p>
   <h2 className='text-2xl text-gray-800 font-semibold mt-5'>Example</h2>
    <pre className='text-green-400 bg-gray-900 p-4 rounded-lg mt-5'>
      <code>
        {`const points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return b - a});`}
      </code>
    </pre>

    <h1 className='text-2xl text-gray-800 font-semibold mt-10 mb-3'>Sorting an Array in Random Order</h1>
    <p>With the sort function described earlier, you can arrange a numeric array randomly.</p>
     <h2 className='text-2xl text-gray-800 font-semibold mt-5'>Example</h2>
     <pre className='text-green-400 bg-gray-900 p-4 rounded-lg mt-5'>
      <code>
        {`const points = [40, 100, 1, 5, 25, 10];
points.sort(function(){return 0.5 - Math.random()});
`}
      </code>
     </pre>

     <h1 className='text-2xl text-gray-800 font-semibold mt-10 mb-3'>The Fisher Yates Method</h1>
     <p>The example using points.<span className='text-red-400'>sort()</span> isn’t fully accurate because it gives some numbers a higher chance of appearing in certain positions. A better solution is the Fisher–Yates shuffle, a method dating back to 1938. Here’s how you can write it in JavaScript:</p>
     <h2 className='text-2xl text-gray-800 font-semibold mt-5'>Example</h2>
    <pre className='text-green-400 bg-gray-900 p-4 rounded-lg mt-5'>
      <code>
        {`const points = [40, 100, 1, 5, 25, 10];
for (let i = points.length -1; i > 0; i--) {
  let j = Math.floor(Math.random() * (i+1));
  let k = points[i];
  points[i] = points[j];
  points[j] = k;
}
`}
      </code>
    </pre>

    <h1 className='text-2xl text-gray-800 font-semibold mt-10 mb-3'>Find Min or Max with sort()</h1>
    <p>Sorting the array allows you to use indexes to find both the highest and lowest items.</p>
    <p className='mt-3'>Sort Ascending:</p>
    <h2 className='text-2xl text-gray-800 font-semibold mt-5'>Example</h2>
    <pre className='text-green-400 bg-gray-900 p-4 rounded-lg mt-5'>
      <code>
        {`const points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return a - b});
// now points[0] contains the lowest value
// and points[points.length-1] contains the highest value`}
      </code>
    </pre>

    <p className='mt-10'>Sort Descending:</p>
    <pre className='text-green-400 bg-gray-900 p-4 rounded-lg mt-5'>
      <code>
        {`const points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return b - a});
// now points[0] contains the highest value
// and points[points.length-1] contains the lowest value`}
      </code>
    </pre>

    <h1 className='text-2xl text-gray-800 font-semibold mt-10 mb-3'>Using Math.min() on an Array</h1>
   <p>Using <span className='text-red-400'>Math.min.apply</span>, you’re able to get the lowest element from an array.</p>
   <h2 className='text-gray-800 text-2xl font-semibold mt-5'>Example</h2>
    <pre className='text-green-400 bg-gray-900 p-4 rounded-lg mt-5'>
      <code>
        {`function myArrayMin(arr) {
  return Math.min.apply(null, arr);
}`}
      </code>
    </pre>
    <p className='mt-5'>Math.min.apply(null, [1, 2, 3]) is equivalent to Math.min(1, 2, 3).</p>


<h1 className='text-2xl text-gray-800 font-semibold mt-10 mb-3'>JavaScript Array Minimum Method</h1>
<p className='mt-3'>JavaScript doesn’t provide a native function to get the smallest value in an array.</p>
<p className='mt-2'>The quickest way to get the smallest number is by creating your own function.</p>
<p className='mt-2'>This function loops through an array comparing each value with the lowest value found:</p>

<h1 className='text-2xl text-gray-800 font-semibold mt-5'>Example</h1>
<pre className='text-green-400 bg-gray-900 p-4 rounded-lg mt-5'>
  <code>
    {`function myArrayMin(arr) {
  let len = arr.length;
  let min = Infinity;
  while (len--) {
    if (arr[len] < min) {
      min = arr[len];
    }
  }
  return min;
}`}
  </code>
</pre>

<h1 className='text-2xl text-gray-800 font-semibold mt-10 mb-3'>JavaScript Array Maximum Method</h1>
<p className='mb-3'>JavaScript does not offer a native function to retrieve the maximum value from an array.</p>
<p>This function loops through an array comparing each value with the highest value found:</p>
<h2 className='text-2xl text-gray-800 font-semibold mt-5'>Example</h2>
<pre className='text-green-400 bg-gray-900 p-4 rounded-lg mt-5'>
  <code>
    {`function myArrayMax(arr) {
  let len = arr.length;
  let max = -Infinity;
  while (len--) {
    if (arr[len] > max) {
      max = arr[len];
    }
  }
  return max;
}`}
  </code>
</pre>

<h1 className='text-2xl text-gray-800 font-semibold mt-10 mb-3'>Sorting Object Arrays</h1>
<p>Arrays in JavaScript frequently hold objects.</p>
<h2 className='text-2xl text-gray-800 font-semibold mt-5'>Example</h2>
<pre className='text-green-400 bg-gray-900 p-4 rounded-lg mt-5'>
  <code>
    {`const cars = [
  {type:"Volvo", year:2016},
  {type:"Saab", year:2001},
  {type:"BMW", year:2010}
];`}
  </code>
</pre>

<p className='mt-3'>The <span className='text-red-400'>sort()</span> method can sort an array, even when its objects have properties of varying data types.</p>
<p className='mt-3'>The way to solve this is by creating a compare function that checks the property values.</p>

<h2 className='text-2xl text-gray-800 font-semibold mt-5'>Example</h2>
<pre className='text-green-400 bg-gray-900 p-4 rounded-lg mt-5'>
  <code>
    {`cars.sort(function(a, b){return a.year - b.year});`}
  </code>
</pre>

<p className='mt-5'>Comparing string properties is a little more complex:</p>
<h2 className='text-2xl text-gray-800 font-semibold mt-5'>Example</h2>
<pre className='text-green-400 bg-gray-900 p-4 rounded-lg mt-5'>
  <code>
    {`cars.sort(function(a, b){
  let x = a.type.toLowerCase();
  let y = b.type.toLowerCase();
  if (x < y) {return -1;}
  if (x > y) {return 1;}
  return 0;
});`}
  </code>
</pre>

<h1 className='text-2xl text-gray-800 font-semibold mt-10 mb-3'>Stable Array sort()</h1>
<p>Prior to 2019, the specification permitted unstable sorting methods like QuickSort.</p>
<p>Since ES2019, browsers are required to use stable sorting, meaning elements with equal values retain their original order.</p>
<h2 className='text-2xl text-gray-800 font-semibold mt-5'>Example</h2>
<pre className='text-green-400 bg-gray-900 p-4 rounded-lg mt-5'>
  <code>
    {`const myArr = [
  {name:"X00",price:100 },
  {name:"X01",price:100 },
  {name:"X02",price:100 },
  {name:"X03",price:100 },
  {name:"X04",price:110 },
  {name:"X05",price:110 },
  {name:"X06",price:110 },
  {name:"X07",price:110 }
];`}
  </code>
</pre>

<p className='mt-10 mb-10'>In the example above, when sorting on price, the result is not allowed to come out with the names in an other relative position like this:</p>
<pre className='text-green-400 bg-gray-900 p-4 rounded-lg mt-5'>
  <code>{`X01 100
X03 100
X00 100
X02 100
X05 110
X04 110
X06 110
X07 110`}</code>
</pre>





    </div>
  );
};

export default ArraySortDemo;
