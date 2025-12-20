import React, { useState } from "react";

const JSWindowBOM = () => {

  return (
    <div className="max-w-4xl p-6 mt-10">
      <h1 className="text-3xl font-medium text-blue-500 mb-3">window Object in BOM (Browser Object Model)</h1>

      <p>
        The <span className="text-red-400">window</span> object represents the browser window. It is the top-level object
        in the Browser Object Model and provides methods, properties, and events to interact with
        the browser itself, not just the document (DOM).
      </p>

      <h1 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">The Browser Object Model (BOM)</h1>
      <p>The Browser Object Model (BOM) has no formal standard; however, most modern browsers support similar methods and properties, which are collectively known as the BOM.</p>
    
    <h1 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">The Window Object</h1>
   <p className="mb-3">The window object is supported by all browsers and represents the browser window.</p>
   <p className="mb-3">The window object automatically includes all globally defined JavaScript variables, functions, and objects.</p>
   <p className="mb-3">Global variables are properties of the window object, and global functions are its methods.</p>
   <p>Even the document object from the HTML DOM is a property of the window object.</p> 
  <pre className="text-green-400 bg-gray-900 p-4 rounded-lg mt-5">
    <code>
      {`window.document.getElementById("header");`}
    </code>
  </pre>

  <p className="mt-5">is the same as:</p>
  
  <pre className="text-green-400 bg-gray-900 p-4 rounded-lg mt-5">
    <code>
      {`document.getElementById("header");`}
    </code>
  </pre>

  <h1 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Window Size</h1>
  <p className="mb-3">Two properties are available for measuring the browser window size.</p>
  <p>Both properties return the sizes in pixels:</p>
  <ul className="list-[square] list-inside mt-3">
    <li><span className="text-red-400">window.innerWidth</span> - the inner width of the browser window (in pixels)</li>
    <li><span className="text-red-400">window.innerHeight</span> - the inner height of the browser window (in pixels)</li>
  </ul>
  <h2 className="text-2xl text-gra8 font-semibold mt-5">Example</h2>
  <pre className="text-green-400 bg-gray-900 p-4 rounded-lg mt-5">
    <code>
      {`let w = window.innerWidth;
let h = window.innerHeight;`}
    </code>
  </pre>

  <h1 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Other Window Methods</h1>
  <p>Some other methods:</p>
  <ul className="list-[square] list-inside mt-3">
    <li><span className="text-red-400">window.open()</span> - open a new window</li>
    <li><span className="text-red-400">window.close()</span> - close the current window</li>
    <li><span className="text-red-400">window.moveTo()</span> - move the current window</li>
    <li><span className="text-red-400">window.resizeTo()</span> - resize the current window</li>
  </ul>




















    </div>
  );
};

export default JSWindowBOM;