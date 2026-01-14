import React, { useState } from "react";

const JSStorageAPI = () => {
  const data = [
    {Method:'key(n)', Description:'Returns the name of the nth key in the storage'},
    {Method:'length', Description:'Returns the number of data items stored in the Storage object'},
    {Method:'getItem(keyname)', Description:'Returns the value of the specified key name'},
    {Method:'setItem(keyname, value)', Description:'Adds a key to the storage, or updates a key value (if it already exists)'},
    {Method:'removeItem(keyname)', Description:'Removes that key from the storage'},
    {Method:'clear()', Description:'Empty all key out of the storage'}
  ];

  const data1 = [
    {Property:'window.localStorage', Description:'Allows to save key/value pairs in a web browser. Stores the data with no expiration date'},
    {Property:'window.sessionStorage', Description:'Allows to save key/value pairs in a web browser. Stores the data for one session'},
  ]
  

  return (
    <div className="max-w-4xl p-6 mt-10">
      <h1 className="text-3xl font-medium text-blue-500 mb-3">Web Storage API in JavaScript</h1>

      <p>
        The <span className="text-red-400">Storage API</span> provides two main objects: 
        <code>localStorage</code> and <code>sessionStorage</code>. 
        They allow storing data in the browser with different lifetimes.
      </p>

      <h2 className="text-2xl text-gray-800 font-semibold mt-5">Example</h2>
      <pre className="text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5">
        <code>
          {`localStorage.setItem("name", "John Doe");
localStorage.getItem("name");`}
        </code>
      </pre>

      <h1 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">The localStorage Object</h1>
      <p className="mb-3">The localStorage object gives a website access to local storage, enabling you to store, retrieve, update, and remove data items for that site.</p>
      <p>Data stored in localStorage has no expiration and remains even after the browser is closed, lasting for days, weeks, or even years.</p>
      

      <h1 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">The setItem() Method</h1>
     <p>The <span className="text-red-400">localStorage.setItem()</span> method saves a data item in local storage, requiring a key and a value as parameters.</p>
     <h2 className="text-2xl text-gray-800 font-semibold mt-5">Example</h2>
     <pre className="text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5">
      <code>
        {`localStorage.setItem("name", "John Doe");`}
      </code>
     </pre>

     <h1 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">The getItem() Method</h1>
     <p>The <span className="text-red-400">localStorage.getItem()</span> method fetches a data item from local storage using its name.</p>
    <h2 className="text-2xl text-gray-800 font-semibold mt-5">Example</h2>
    <pre className="text-green-400 bg-gray-900 p-4 rounded-lg mt-5">
      <code>
        {`localStorage.getItem("name");`}
      </code>
    </pre>

    <h1 className="text-gray-800 text-2xl font-semibold mt-10 mb-3">The sessionStorage Object</h1>
   <p>The <span className="text-red-400">sessionStorage</span> object works like <span className="text-red-400">localStorage</span>, but it only keeps data for a single session and deletes it when the browser is closed.</p>
  <h2 className="text-2xl text-gray-800 font-semibold mt-5">Example</h2>
  <pre className="text-green-400 bg-gray-900 p-4 rounded-lg mt-5">
    <code>
      {`sessionStorage.getItem("name");`}
    </code>
  </pre>

  <h1 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">The setItem() Method</h1>
  <p>Using <span className="text-red-400">sessionStorage.setItem()</span>, you can store a value in the browser for the current session by providing a name and value.</p>
  <h2 className="text-2xl text-gray-800 font-semibold mt-5">Example</h2>
   <pre className="text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5">
    <code>
      {`sessionStorage.setItem("name", "John Doe");`}
    </code>
   </pre>


   <h1 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">The getItem() Method</h1>
  <p>The <span className="text-red-400">sessionStorage.getItem()</span> method fetches a data item from session storage using its key.</p>
  <h2 className="text-2xl text-gray-800 font-semibold mt-5">Example</h2>
  <pre className="text-green-400 bg-gray-900 p-4 rounded-lg mt-5">
    <code>
      {`sessionStorage.getItem("name");`}
    </code>
  </pre>

  <h1 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Storage Object Properties and Methods</h1>
  <table className="min-w-full border border-gray-300 text-gray-700 text-sm text-left mt-5">
    <thead>
      <tr className="bg-gray-100">
        <th className="px-4 py-2 border-b border-gray-300 text-gray-700 font-bold">Method</th>
        <th className="px-4 py-2 border-b border-gray-300 text-gray-700 font-bold">Description</th>
      </tr>
    </thead>
    <tbody>
      {data.map((row,index)=>(
        <tr className="cursor-text hover:bg-gray-100">
          <td className="px-4 py-2 border-b border-gray-200">{row.Method}</td>
          <td className="px-4 py-2 border-b border-gray-200">{row.Description}</td>
        </tr>
      ))}
    </tbody>
  </table>

  <h1 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Related Pages for Web Storage API</h1>
  <table className="min-w-full border border-gray-300 text-gray-700 text-sm text-left mt-5">
    <thead>
      <tr className="bg-gray-100">
        <th className="px-4 py-2 border-b border-gray-300 text-gray-700 font-bold">Method</th>
        <th className="px-4 py-2 border-b border-gray-300 text-gray-700 font-bold">Description</th>
      </tr>
    </thead>
    <tbody>
      {data1.map((row,index)=>(
        <tr className="cursor-text hover:bg-gray-100">
          <td className="px-4 py-2 border-b border-gray-200">{row.Property}</td>
          <td className="px-4 py-2 border-b border-gray-200">{row.Description}</td>
        </tr>
      ))}
    </tbody>
  </table>




    </div>
  );
};

export default JSStorageAPI;