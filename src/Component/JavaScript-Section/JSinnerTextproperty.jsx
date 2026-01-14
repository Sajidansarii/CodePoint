import React, { useState } from "react";

const JSInnerText = () => {

  const data =  [
    {Property:'text', Description:'The text content of the element.'},
  ];

  const data1 = [
    {Type:'String', Description:'The text content of the element and all descendants, except for <script> and <style> elements.'},
  ];



 

  return (
    <div className="max-w-4xl p-6 mt-10">
      <h1 className="text-3xl font-medium text-blue-500 mb-3">innerText Property in JavaScript</h1>

      <p>
        The <span className="text-red-400">innerText</span> property allows you to get or set the
        visible text content of an element. Unlike <code>innerHTML</code>, it
        only works with text and ignores HTML tags.
      </p>

       <p className="mt-10 mb-3">Access the visible text inside an element.</p>
       <pre className="text-green-400 bg-gray-900 p-4 rounded-lg mt-5">
        <code>
          {`let text = element.innerText;`}
        </code>
       </pre>

       <p className="mt-5">The <span className="text-red-400">innerText</span> property is used to get or set an element’s text content.</p>
      

      <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-5">Syntax</h2>
     <p>Get the text content of an element or node.</p>
     <pre className="text-green-400 bg-gray-900 p-4 rounded-lg mt-5">
      <code>
        {`element.innerText`}
      </code>
     </pre>

     <p className="mt-5">Update the text content of an element or node.</p>
       <pre className="text-green-400 bg-gray-900 p-4 rounded-lg mt-5">
        <code>
          {`element.innerText = text`}
        </code>
       </pre>

       <h1 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Property Value</h1>
      <table className="min-w-full border border-gray-300 text-gray-700 text-sm text-left mt-5">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2 border-b border-gray-300 text-gray-700 font-bold">Property</th>
            <th className="px-4 py-2 border-b border-gray-300 text-gray-700 font-bold">Description</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row,index)=>(
            <tr className="cursor-text hover:bg-gray-100">
              <td className="px-4 py-2 border-b border-gray-200">{row.Property}</td>
              <td className="px-4 py-2 border-b border-gray-200">{row.Description}</td>
            </tr>
          ))}
        </tbody>
      </table>


      <h1 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Return Value</h1>
      <table className="min-w-full border border-gray-300 text-gray-700 text-sm text-left mt-5">
        <thead>
           <tr className="bg-gray-100">
            <th className="px-4 py-2 border-b border-gray-300 text-gray-700 font-bold">Property</th>
            <th className="px-4 py-2 border-b border-gray-300 text-gray-700 font-bold">Description</th>
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

      <p className="mt-5">Using innerHTML gives you the full content of an element, including its HTML tags and spacing. innerText returns only the text that is visible to the user, skipping hidden text, extra spacing, and HTML tags, except for <span className="text-red-400">{'<script>'}</span> and <span className="text-red-400">{'<style>'}</span> content. textContent provides all text inside the element and its descendants, including hidden text and spacing, but without any HTML tags.</p>
      

      <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Example</h2>
      <pre className="text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5">
        <code>
          {`<p id="myP">   This element has extra spacing     and contains <span>a span element</span>.</p>`}
        </code>
      </pre>


      <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Example</h2>
      <pre className="text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5">
       <code>
        {`let text = document.getElementById("myP").innerText;

let text = document.getElementById("myP").innerHTML;

let text = document.getElementById("demo").textContent;`}
       </code>
      </pre>

      <p className="mt-5">The <span className="text-red-400">innerText</span> property shows only visible text. The <span className="text-red-400">innerHTML</span> property shows the full HTML inside the element, including tags and spacing. The <span className="text-red-400">textContent</span> property shows all text inside the element, including spacing, but strips out any HTML tags.</p>


    </div>
  );
};

export default JSInnerText;