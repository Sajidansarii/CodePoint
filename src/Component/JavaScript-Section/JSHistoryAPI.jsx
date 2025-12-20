import React, { useState } from "react";

const JSHistoryAPI = () => {
  const data = [
    {Property:'length', Description:'Returns the number of URLs in the history list'},
  ];

  const data1 = [
    {Method:'back()', Description:'Loads the previous URL in the history list'},
    {Method:'forward()', Description:'Loads the next URL in the history list'},
    {Method:'go()', Description:'Loads a specific URL from the history list'}
  ]

  return (
    <div className="max-w-4xl p-6 mt-10">
      <h1 className="text-3xl font-medium text-blue-500 mb-3">History API in JavaScript</h1>

      <p>
        The <span className="text-red-400">History API</span> allows manipulation of the browser session history. 
        You can navigate back and forward, and change the URL without reloading the page.
      </p>
    
    <h1 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">The History back() Method</h1>
    <p>The <span className="text-red-400">back()</span> method navigates to the previous URL in the window.history list, just like clicking the browser’s back arrow.</p>
    <h2 className="text-2xl text-gray-800 font-semibold mt-5">Example</h2>
    <pre className="text-green-400 bg-gray-900 p-4 rounded-lg mt-5">
      <code>
        {`<button onclick="myFunction()">Go Back</button>

<script>
function myFunction() {
  window.history.back();
}
</script>`}
      </code>
    </pre>

  <h1 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">The History go() Method</h1>
  <p>The <span className="text-red-400">go()</span> method navigates to a particular URL in the browser’s history.</p>
  <h2 className="text-2xl text-gray-800 font-semibold mt-5">Example</h2>
  <pre className="text-green-400 bg-gray-900 p-4 rounded-lg mt-5">
    <code>
      {`<button onclick="myFunction()">Go Back 2 Pages</button>

<script>
function myFunction() {
  window.history.go(-2);
}
</script>`}
    </code>
  </pre>

  <h1 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">History Object Properties</h1>
  <table className="min-w-full boredr border-gray-300 text-gray-700 text-sm text-left mt-5">
    <thead>
      <tr className="bg-gray-200">
        <th className="px-4 py-2 border-b border-gray-300 text-gray-700 font-bold">Property</th>
        <th className="px-4 py-2 border-b border-gray-300 text-gray-700 font-bold">Description</th>
      </tr>
    </thead>
    {data.map((row,index)=>(
      <tr className="cursor-text hover:bg-gray-100">
        <td className="px-4 py-2 border-b border-gray-200">{row.Property}</td>
        <td className="px-4 py-2 border-b border-gray-200">{row.Description}</td>
      </tr>
    ))}
  </table>

  <h1 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">History Object Methods</h1>
  <table className="min-w-full border border-gray-300 text-gray-700 text-sm text-left mt-5">
    <thead>
      <tr className="bg-gray-100">
        <th className="px-4 py-2 border-b border-gray-300 text-gray-700 font-bold">Method</th>
        <th className="px-4 py-2 border-b border-gray-300 text-gray-700 font-bold">Description</th>
        </tr>       
    </thead>
    {data1.map((row,index)=>(
      <tr className="cursor-text hover:bg-gray-100">
        <td className="px-4 py-2 border-b border-gray-200">{row.Method}</td>
        <td className="px-4 py-2 border-b border-gray-200">{row.Description}</td>
      </tr>
    ))}
  </table>


















    </div>
  );
};

export default JSHistoryAPI;