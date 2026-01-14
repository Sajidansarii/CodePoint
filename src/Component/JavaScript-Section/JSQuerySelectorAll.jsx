import React, { useState } from "react";

const JSQuerySelectorAll = () => {
  const data = [
    {Parameter:'CSS selectors', Description:'Required.\nOne or more CSS selectors.\nCSS selectors select HTML elements based on id, classes, types, attributes, values of attributes etc.\nFor a full list, go to our CSS Selectors Reference.\nFor multiple selectors, separate each selector with a comma (See "More Examples").'},
  ];

  const data1 = [
    {Type:'Object', Description:'A NodeList object with the elements that matches the CSS selector(s).\nIf no matches are found, an empty NodeList object is returned.'},
  ];



  return (
    <div className="max-w-4xl p-6 mt-10">
      <h1 className="text-3xl font-medium text-blue-500 mb-3">QuerySelectorAll in JavaScript</h1>

      <p>
        The <span className="text-red-400">document.querySelectorAll()</span> method returns a
        <span className="text-red-400"> NodeList</span> of all elements that match a specified
        <span className="text-red-400"> CSS selector</span>. It allows you to manipulate multiple
        elements at once.
      </p>

      <p className="mt-5 mb-10">Set a new background color for the first "example" element within "myDiv".</p>
      <pre className="text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5">
        <code>
          {`const element = document.getElementById("myDIV");
const list = element.querySelectorAll(".example"); 

list[0].style.backgroundColor = "red";`}
        </code>
      </pre>

      <p className="mt-5">The <span className="text-red-400">querySelectorAll()</span> method returns all child elements that match a given CSS selector or selectors. It returns a NodeList containing the matching elements. If the selector is invalid, querySelectorAll() throws a SYNTAX_ERR exception.</p>
       <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Node List</h2>
       <p>A NodeList is an array-like collection of nodes. You can access each node in the list using its index, which starts at 0. The <span className="text-red-400">length</span> property of a NodeList returns the total number of nodes in the collection.</p>
         
         <h2 className="text-gray-800 text-2xl font-semibold mt-10">Syntax</h2>
         <pre className="text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5">
          <code>
            {`document.querySelectorAll(CSS selectors)`}
          </code>
         </pre>

         <h1 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Parameter</h1>
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
                <td className="px-4 py-2 border-b border-gray-200 whitespace-pre-line">{row.Description}</td>
              </tr>
            ))}
          </tbody>
        </table>


        <h1 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Example</h1>
        <p>Apply a background color to the first paragraph.</p>
        <pre className="text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5">
          <code>
            {`const nodeList= document.querySelectorAll("p");
nodeList[0].style.backgroundColor = "red"; `}
          </code>
        </pre>

        <p className="mt-10 mb-10">Set a background color for the first <span className="text-red-400">{'<p>'}</span> element with class "example".</p>
        <pre className="text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5">
          <code>
            {`const nodeList = document.querySelectorAll("p.example");
nodeList[0].style.backgroundColor = "red"; `}
          </code>
        </pre>

        <p className="mt-10 mb-10">Count of elements with class "example".</p>
        <pre className="text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5">
          <code>
            {`let numb = document.querySelectorAll(".example").length;`}
          </code>
        </pre>



         <p className="mt-10 mb-10">Apply a background color to all elements with class "example".</p>
        <pre className="text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5">
          <code>
            {`const nodeList = document.querySelectorAll(".example");
for (let i = 0; i < nodeList.length; i++) {
  nodeList[i].style.backgroundColor = "red";
}`}
          </code>
        </pre>

        <p className="mt-10 mb-10">Apply a background color to all <span className="text-red-400">{'<p>'}</span> elements.</p>
        <pre className="text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5">
          <code>
            {`let nodeList = document.querySelectorAll("p");
for (let i = 0; i < nodeList.length; i++) {
  nodeList[i].style.backgroundColor = "red";
}`}
          </code>
        </pre>

        <p className="mt-10 mb-10">Set a border for every <span className="text-red-400">{'<a>'}</span> tag with a target attribute.</p>
       <pre className="text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5">
        <code>
          {`const nodeList = document.querySelectorAll("a[target]");
for (let i = 0; i < nodeList.length; i++) {
  nodeList[i].style.border = "10px solid red";
}
`}
        </code>
       </pre>


       <p className="mt-10 mb-10">Set a background color for every paragraph inside a <span className="text-red-400">{'<div>'}</span> element.</p>
      <pre className="text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5">
        <code>
          {`const nodeList = document.querySelectorAll("div > p");
for (let i = 0; i < nodeList.length; i++) {
  nodeList[i].style.backgroundColor = "red";
}`}
        </code>
      </pre>

      <p className="mt-10 mb-10">Set a background color for every <span className="text-red-400">{'<h3>'}</span> and <span className="text-red-400">{'<span>'}</span> tag.</p>
     <pre className="text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5">
      <code>
        {`const nodeList = document.querySelectorAll("h3, span");
for (let i = 0; i < nodeList.length; i++) {
  nodeList[i].style.backgroundColor = "red";
}`}
      </code>
     </pre>



    </div>
  );
};

export default JSQuerySelectorAll;