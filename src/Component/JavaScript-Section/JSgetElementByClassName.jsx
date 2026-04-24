import React, { useState } from "react";

const JSGetElementsByClassName = () => {

  const data = [
    {Parameter:'classname', Description:'Required.\nThe class name of the elements.\nSearch for multiple class names separated by spaces like "test demo".'},
  ];

  const data1 = [
    {Type:'Object.', Description:'An HTMLCollection object.\nA collection of elements with the specified class name.\nThe elements are sorted as they appear in the document.'},
  ];
  
 

  return (
    <div className="max-w-4xl p-6 mt-10">
      <h1 className="text-3xl font-medium text-blue-500 mb-3">GetElementsByClassName in JavaScript</h1>

      <p>
        The <span className="text-red-400">document.getElementsByClassName()</span> method selects
        all HTML elements that have the specified <span className="text-red-400">class</span>. It
        returns an <span className="text-red-400">HTMLCollection</span>, which can be looped over to
        manipulate multiple elements.
      </p>

      <p className="mt-10 mb-3">Select all elements that have the class example</p>
      <pre className="overflow-x-auto bg-gray-200 p-4 rounded-lg mt-5">
        <code>
          {`const collection = document.getElementsByClassName("example");`}
        </code>
      </pre>

      <p className="mt-10">Get all elements that belong to both example and color classes</p>
      <pre className="overflow-x-auto bg-gray-200 p-4 rounded-lg mt-5">
        <code>
          {`const collection = document.getElementsByClassName("example color");`}
        </code>
      </pre>

      <p className="mt-10 mb-3">The <span className="text-red-400">getElementsByClassName()</span> function retrieves all elements that have the specified class name(s).</p>
      <p><span className="text-red-400">getElementsByClassName()</span> returns an HTMLCollection object.</p>
     
     <h2 className="text-2xl text-gray-800 font-semibold mt-10">Syntax</h2>
     <pre className="overflow-x-auto bg-gray-200 p-4 rounded-lg mt-5">
      <code>
        {`document.getElementsByClassName(classname)`}
      </code>
     </pre>

     <h1 className="text-2xl text-gray-800 font-semibold mt-10">Parameter</h1>
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



     <h1 className="text-2xl text-gray-800 font-semibold mt-10">Parameter</h1>
     <table className="min-w-full border border-gray-300 text-gray-700 text-sm text-left mt-5">
      <thead>
        <tr className="bg-gray-100">
          <th className="px-4 py-2 border-b border-gray-300 text-gray-700 font-bold">Type</th>
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


     <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Example</h2>
     <p>Count of elements having the class "example"</p>
     <pre className="overflow-x-auto bg-gray-200 p-4 rounded-lg mt-5">
      <code>
        {`let numb = document.getElementsByClassName("example").length;`}
      </code>
     </pre>


      <p className="mt-10">Set a new background color for every element with class "example"</p>
     <pre className="overflow-x-auto bg-gray-200 p-4 rounded-lg mt-5">
      <code>
        {`const collection = document.getElementsByClassName("example");
for (let i = 0; i < collection.length; i++) {
  collection[i].style.backgroundColor = "red";
}`}
      </code>
     </pre>
    </div>
  );
};

export default JSGetElementsByClassName;