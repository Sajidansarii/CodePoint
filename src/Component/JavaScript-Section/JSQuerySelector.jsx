import React, { useState } from "react";

const JSQuerySelector = () => {
  const data = [
    {Parameter:'CSS', Description:'Required.'},
    {Parameter:'selectors', Description:'One or more CSS selectors.\nCSS selectors select HTML elements based on id, classes, types, attributes, values of attributes etc.\nFor a full list, go to our CSS Selectors Reference.\nFor multiple selectors, separate each selector with a comma (See "More Examples").'},
  ];

  const data1 = [
    {Type:'Object', Description:'A NodeList with the first element that matches the CSS selector(s).\nIf no matches are found, null is returned.'}
  ];



  return (
    <div className="max-w-4xl p-6 mt-10">
      <h1 className="text-3xl font-medium text-blue-500 mb-3">QuerySelector in JavaScript</h1>

      <p>
        The <span className="text-red-400">document.querySelector()</span> method returns the first
        HTML element that matches a specified <strong>CSS selector</strong>. It is
        more flexible than methods like <code>getElementById</code> or
        <code>getElementsByClassName</code>.
      </p>

      <p className="mt-10 mb-3">Access the first <span className="text-red-400">{'<p>'}</span> element.</p>
      <pre className="text-green-400 bg-gray-900 p-4 rounded-lg mt-5">
        <code>
          {`document.querySelector("p");`}
        </code>
      </pre>

      <p className="mt-10 mb-3">Get the first element assigned the class "example".</p>
      <pre className="text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5">
        <code>
          {`document.querySelector(".example");`}
        </code>
      </pre>

      <p className="mt-10 mb-3">The <span className="text-red-400">querySelector()</span> method retrieves the first element that matches a CSS selector.</p>
      <p className="mb-3">To get all matching elements, use <span className="text-red-400">querySelectorAll()</span> instead of <span className="text-red-400">querySelector()</span>.</p>
      <p>Using an invalid CSS selector with <span className="text-red-400">querySelector()</span> or <span className="text-red-400">querySelectorAll()</span> results in a SYNTAX_ERR exception.</p>
     

     <h1 className="text-2xl text-gray-800 font-semibold mt-10 mb-5">The Difference Between an HTMLCollection and a NodeList</h1>
    <p className="mb-5">A <span className="text-red-400">NodeList</span> and an HTMLCollection are quite similar, as both are array-like collections of nodes (elements) extracted from a document. You can access the nodes using their index numbers, starting at 0, and both have a length property that returns the number of items in the collection.</p>
    <p className="mb-5">The main difference lies in what they contain and how they behave. An HTMLCollection contains document elements and its items can be accessed by name, id, or index. It is always a live collection, meaning if you add an element to the DOM, the collection updates automatically.</p>
    <p> A NodeList, on the other hand, can include element nodes, attribute nodes, and text nodes. Its items can only be accessed by their index, and it is usually a static collection. This means that if you add a new element to the DOM, the NodeList will not automatically update.</p>
    
    <p className="mt-10 mb-3">The <span className="text-red-400">getElementsByClassName()</span> and <span className="text-red-400">getElementsByTagName()</span> methods provide a live, updating HTMLCollection.</p>
    <p className="mb-3">The <span className="text-red-400">querySelectorAll()</span> method returns a static NodeList.</p>
    <p>The <span className="text-red-400">childNodes</span> attribute provides a live NodeList.</p>
    

    <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Syntax</h2>
    <pre className="text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5">
      <code>
        {`document.querySelector(CSS selectors)`}
      </code>
    </pre>

    
    <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Parameter</h2>
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
            <td className="px-4 py-2 border-b border-gray-300">{row.Parameter}</td>
            <td className="px-4 py-2 border-b border-gray-300 whitespace-pre-line">{row.Description}</td>
          </tr>
        ))}
      </tbody>
    </table>



    <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Return Value</h2>
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
            <td className="px-4 py-2 border-b border-gray-300">{row.Type}</td>
            <td className="px-4 py-2 border-b border-gray-300 whitespace-pre-line">{row.Description}</td>
          </tr>
        ))}
      </tbody>
    </table>

    <h1 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Example</h1>
    <p>Retrieve the first <span className="text-red-400">{'<p>'}</span> tag with the class example.</p>
   <pre className="text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5">
    <code>
      {`document.querySelector("p.example");`}
    </code>
   </pre>

   <p className="mt-10 mb-5">Modify the text of the element with the id "demo".</p>
   <pre className="text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5">
    <code>
      {`document.querySelector("#demo").innerHTML = "Hello World!";`}
    </code>
   </pre>


    <p className="mt-10 mb-5">Select the first <span className="text-red-400">{'<p>'}</span> element that is inside a <span className="text-red-400">{'<div>'}</span> element.</p>
   <pre className="text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5">
    <code>
      {`document.querySelector("div > p");`}
    </code>
   </pre>

 

  <p className="mt-10 mb-5">Select the first <span className="text-red-400">{'<a>'}</span> element that contains a target attribute.</p>
   <pre className="text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5">
    <code>
      {`document.querySelector("a[target]");`}
    </code>
   </pre>
 


  <p className="mt-10 mb-5">Select the first <span className="text-red-400">{'<h3>'}</span> element or the first <span className="text-red-400">{'<h4>'}</span> element.</p>
   <pre className="text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5">
    <code>
      {`<h3>A h3 element</h3>
<h4>A h4 element</h4>
document.querySelector("h3, h4").style.backgroundColor = "red";`}
    </code>
   </pre>
 


  <p className="mt-10 mb-5">Select the first <span className="text-red-400">{'<h3>'}</span> element or the first <span className="text-red-400">{'<h4>'}</span> element.</p>
   <pre className="text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5">
    <code>
      {`<h4>A h4 element</h4>
<h3>A h3 element</h3>
document.querySelector("h3, h4").style.backgroundColor = "red";`}
    </code>
   </pre>

    </div>
  );
};

export default JSQuerySelector;