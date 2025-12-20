import React, { useState } from "react";

const JSGetElementById = () => {
  const data = [
    {Parameter:'id', Description:'Required.\nThe id value of an element.'},
  ];

  const data1 = [
    {Type:'Object', Description:'The element with the specified id.\nnull if the element does not exist.'},
  ];

  return (
    <div className="max-w-4xl p-6 mt-10">
      <h1 className="text-3xl font-medium text-blue-500 mb-3">GetElementById in JavaScript</h1>

      <p>
        The <span className="text-red-400">document.getElementById()</span> method is used to select
        an HTML element by its <span className="text-red-400">id</span>. Once selected, you can
        manipulate its content, styles, or attributes using JavaScript.
      </p>

      <p className="mt-10">Access the element using its id</p>
      <pre className="text-green-400 bg-gray-900 p-4 rounded-lg mt-5">
        <code>
          {`document.getElementById("demo");`}
        </code>
      </pre>


      <p className="mt-10">Select the element and set a new color</p>
      <pre className="text-green-400 bg-gray-900 p-4 rounded-lg mt-5">
        <code>
          {`const myElement = document.getElementById("demo");
myElement.style.color = "red";`}
        </code>
      </pre>


      
      <p className="mt-10">Or alternatively, update its color property</p>
      <pre className="text-green-400 bg-gray-900 p-4 rounded-lg mt-5">
        <code>
          {`document.getElementById("demo").style.color = "red";`}
        </code>
      </pre>

      <p className="mt-10 mb-3">The <span className="text-red-400">getElementById()</span> method returns the element with the given id, or null if no such element exists.</p>
      <p>The <span className="text-red-400">getElementById()</span> method is a frequently used HTML DOM method, commonly used to access or modify elements.</p>
      

      <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Syntax</h2>
      <pre className="text-green-400 bg-gray-900 p-4 rounded-lg mt-5">
        <code>
          {`document.getElementById(elementID)`}
        </code>
      </pre>

      <h1 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Parameters</h1>
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


     <h1 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Return Value</h1>
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
            <td className="px-4 py-2 border-b border-gray-200  whitespace-pre-line">{row.Description}</td>
          </tr>
        ))}
      </tbody>
     </table>

    </div>
  );
};

export default JSGetElementById;