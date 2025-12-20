import React, { useState } from "react";

const JSGetElementsByTagName = () => {
  const data = [
    {Parameter:'tagname', Description:'Required.\nThe tagname of the elements.'},
  ];

  const data1 = [
    {Type:'Object', Description:'An HTMLCollection object.\nA collection of elements with a specified tag name.\nThe elements are sorted as they appear in the document.'},
  ];


  

  return (
    <div className="max-w-4xl p-6 mt-10">
      <h1 className="text-3xl font-medium text-blue-500 mb-3">GetElementsByTagName in JavaScript</h1>

      <p>
        The <span className="text-red-400">document.getElementsByTagName()</span> method selects all
        HTML elements with the specified <span className="text-red-400">tag name</span>. It returns an
        <span className="text-red-400"> HTMLCollection</span>, which can be looped over to manipulate
        multiple elements.
      </p>

      <p className="mt-10 mb-5">Select all elements that have the li tag</p>
      <pre className="text-green-400 bg-gray-900 p-4 rounded-lg mt-5">
        <code>
          {`const collection = document.getElementsByTagName("li");`}
        </code>
      </pre>

       <p className="mt-10 mb-5">Retrieve all elements in the document</p>
      <pre className="text-green-400 bg-gray-900 p-4 rounded-lg mt-5">
        <code>
          {`const collection = document.getElementsByTagName("*");`}
        </code>
      </pre>


      <p className="mt-10 mb-5">Update the inner HTML of the first paragraph in the document</p>
      <pre className="text-green-400 bg-gray-900 p-4 rounded-lg mt-5">
        <code>
          {`document.getElementsByTagName("p")[0].innerHTML = "Hello World!";`}
        </code>
      </pre>

      <p className="mt-10 mb-5">The <span className="text-red-400">getElementsByTagName()</span> function retrieves all elements that match a given tag name.</p>
      <p className="mb-5">The <span className="text-red-400">getElementsByTagName()</span> function gives back an HTMLCollection.</p>
      <p>The <span className="text-red-400">getElementsByTagName()</span> property can only be read, not written to.</p>

   <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-5">Syntax</h2>
  <pre className="text-green-400 bg-gray-900 p-4 rounded-lg mt-10">
    <code>
      {`document.getElementsByTagName(tagname)`}
    </code>
  </pre>

  <h1 className="text-2xl text-gray-800 font-semibold mt-10 mb-5">Parameter</h1>
  <table className="min-w-full border border-gray-300 text-gray-700 text-sm text-left mt-5">
    <thead>
      <tr className="bg-gray-100">
        <th className="px-4 py-2 border-b border-gray-300 text-gray-700 font-bold">Parameter</th>
        <th className="px-4 py-2 border-b border-gray-300 text-gray-700 font-bold">Description</th>
      </tr>
    </thead>
    <tbody>
      {data.map((row,index)=>(
        <tr className="cursor-text hover:bg-gray-100">
          <td className="px-4 py-2 border-b border-gray-200">{row.Parameter}</td>
          <td className="px-4 py-2 border-b border-gray-200 whitespace-pre-line">{row.Description}</td>
        </tr>
      ))}
    </tbody>
  </table>



   <h1 className="text-2xl text-gray-800 font-semibold mt-10 mb-5">Return Value</h1>
  <table className="min-w-full border border-gray-300 text-gray-700 text-sm text-left mt-5">
    <thead>
      <tr className="bg-gray-100">
        <th className="px-4 py-2 border-b border-gray-300 text-gray-700 font-bold">Parameter</th>
        <th className="px-4 py-2 border-b border-gray-300 text-gray-700 font-bold">Description</th>
      </tr>
    </thead>
    <tbody>
      {data1.map((row,index)=>(
        <tr className="cursor-text hover:bg-gray-100">
          <td className="px-4 py-2 border-b border-gray-200">{row.Type}</td>
          <td className="px-4 py-2 border-b border-gray-200 whitespace-pre-line">{row.Description}</td>
        </tr>
      ))}
    </tbody>
  </table>

  <h1 className="text-2xl text-gray-800 font-semibold mt-10 mb-5">Example</h1>
  <p>The total count of <span className="text-red-400">{'<li>'}</span> elements in the document</p>
  <pre className="text-green-400 bg-gray-900 p-4 rounded-lg mt-5">
    <code>
      {`let numb = document.getElementsByTagName("li").length;`}
    </code>
  </pre>

  <p className="mt-10">Set a new background color for every <span className="text-red-400">{'<p>'}</span> element</p>
  <pre className="text-green-400 bg-gray-900 p-4 rounded-lg mt-5">
    <code>
      {`const collection = document.getElementsByTagName("P");
for (let i = 0; i < collection.length; i++) {
  collection[i].style.backgroundColor = "red";
}`}
    </code>
  </pre>







    </div>
  );
};

export default JSGetElementsByTagName;