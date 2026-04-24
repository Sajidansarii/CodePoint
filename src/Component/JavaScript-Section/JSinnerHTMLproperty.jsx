import React, { useState } from "react";

const JSInnerHTML = () => {
  const data = [
    {Property:'String', Description:'HTML content.'},
  ];

  const data1 = [
    {Type:'String', Description:'The HTML content of the element.'},
  ]
 

  return (
    <div className="max-w-4xl p-6 mt-10">
      <h1 className="text-3xl font-medium text-blue-500 mb-3">innerHTML Property in JavaScript</h1>

      <p>
        The <span className="text-red-400">innerHTML</span> property allows you to get or set the
        HTML content of an element. You can insert HTML tags and text dynamically.
      </p>

      <p className="mt-10 mb-3">Retrieve the HTML content of the element with id="myP".</p>
      <pre className="overflow-x-auto bg-gray-200 p-4 rounded-lg mt-5">
        <code>
          {`let html = document.getElementById("myP").innerHTML;`}
        </code>
      </pre>

      <p className="mt-5">Change the inner HTML of the element identified by demo.</p>
      <pre className="overflow-x-auto bg-gray-200 p-4 rounded-lg mt-5">
        <code>
          {`document.getElementById("demo").innerHTML = "I have changed!";`}
        </code>
      </pre>

      <p className="mt-5">Get the inner HTML of the <span className="text-red-400">{'<ul>'}</span> element identified by myList.</p>
      <pre className="overflow-x-auto bg-gray-200 p-4 rounded-lg mt-5">
        <code>
          {`let html = document.getElementById("myList").innerHTML;`}
        </code>
      </pre>

      <p className="mt-5">Remove the HTML content of the <span className="text-red-400">{'<p>'}</span> element with id="demo".</p>
      <pre className="bg-gray-200 p-4 rounded-lg mt-5">
        <code>
          {`element.innerHTML = "";`}
        </code>
      </pre>

      <p className="mt-5">The <span className="text-red-400">innerHTML</span> property is used to get or set the HTML content inside an element.</p>
      
    <h2 className="text-2xl text-gray-800 font-semibold mt-10">Syntax</h2>
    <pre className="bg-gray-200 p-4 rounded-lg mt-5">
      <code>
        {`element.innerHTML`}
      </code>
    </pre>

    <p className="mt-5">Set the content of an element using <span className="text-red-400">innerHTML</span>.</p>
    <pre className="bg-gray-200 p-4 rounded-lg mt-5">
      <code>
        {`element.innerHTML = text`}
      </code>
    </pre>

    <h1 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Property Value</h1>
   <table className="min-w-full border border-gray-300 text-gray-700 text-sm text-lef mt-5">
    <thead>
      <tr className="bg-gray-100">
        <th className="px-4 py-2 border-b border-gray-300 text-left text-gray-700 font-bold">Property</th>
        <th className="px-4 py-2 border-b border-gray-300 text-left text-gray-700 font-bold">Description</th>
      </tr>
    </thead>
    <tbody>
      {data.map((row,index)=>(
        <tr className="cursor-text hover:bg-gray-100">
          <td className="px-4 py-2 border-b  border-gray-200">{row.Property}</td>
          <td className="px-4 py-2 border-b  border-gray-200">{row.Description}</td>
        </tr>
      ))}
    </tbody>
   </table>

   <h1 className="text-2xl text-gray-800 font-semibold mt-10">Return Value</h1>
   <table className="min-w-full border border-gray-300 text-gray-700 text-sm text-lef mt-5">
    <thead>
      <tr className="bg-gray-100">
        <th className="px-4 py-2 border-b border-gray-300 text-left text-gray-700 font-bold">Property</th>
        <th className="px-4 py-2 border-b border-gray-300 text-left text-gray-700 font-bold">Description</th>
      </tr>
    </thead>
    <tbody>
      {data1.map((row,index)=>(
        <tr className="cursor-text hover:bg-gray-100">
          <td className="px-4 py-2 border-b border-gray-200">{row.Type}</td>
          <td className="px-4 py-2 border-b border-gray-200">{row.Description}</td>
        </tr>
      ))}
    </tbody>
   </table>

   <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Example</h2>
  <p>Change the inner HTML of two elements.</p>
  <pre className="overflow-x-auto bg-gray-200 p-4 rounded-lg mt-5">
    <code>
      {`let text = "Hello Dolly.";
document.getElementById("myP").innerHTML = text;
document.getElementById("myDIV").innerHTML = text;`}
    </code>
  </pre>


   <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Example</h2>
  <p>Display the same HTML content multiple times.</p>
  <pre className="overflow-x-auto bg-gray-200 p-4 rounded-lg mt-5">
    <code>
      {`element.innerHTML += element.innerHTML;`}
    </code>
  </pre>


  <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Example</h2>
  <p>Update both the HTML content and the URL of a link.</p>
  <pre className="overflow-x-auto bg-gray-200 p-4 rounded-lg mt-5">
    <code>
      {`element.innerHTML = "W3Schools";
element.href = "https://www.w3schools.com";`}
    </code>
  </pre>


  <p className="mt-5">The Differences Between innerHTML, innerText and textContent</p>
  <ul className="list-[square] list-inside mt-5 space-y-1">
    <li><span className="text-red-400">innerHTML</span> gets everything inside an element, including text, spaces, and HTML markup.</li>
    <li><span className="text-red-400">innerText</span> gets only the readable text shown on the page, excluding hidden content and tags.</li>
    <li><span className="text-red-400">textContent</span> gets all text within an element and its descendants, including hidden text, but without HTML tags.</li>
  </ul>

  <h2 className="text-2xl text-gray-800 font-semibold mt-5">Example</h2>
  <pre className="overflow-x-auto bg-gray-200 p-4 rounded-lg mt-5">
    <code>
      {`<p id="myP">   This element has extra spacing     and contains <span>a span element</span>.</p>`}
    </code>
  </pre>

  <h2 className="text-gray-800 text-2xl font-semibold mt-5">Example</h2>
  <pre className="overflow-x-auto bg-gray-200 p-4 rounded-lg mt-5">
    <code>
      {`let text = document.getElementById("myP").innerText;

let text = document.getElementById("myP").innerHTML;

let text = document.getElementById("demo").textContent;`}
    </code>
  </pre>


  <p className="mt-5">The innerText property returns only the visible text of an element, ignoring any HTML tags, so in this case it would return: “This element has extra spacing and contains a span element.” The innerHTML property returns the full HTML content of the element, including tags and spacing, producing: “   This element has extra spacing    and contains <span>a span element</span>.” The textContent property returns all the text content of the element, including extra spacing and hidden text, but without any HTML tags, resulting in: “   This element has extra spacing    and contains a span element.”</p>


    </div>
  );
};

export default JSInnerHTML;