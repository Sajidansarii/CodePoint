import React, { useState } from "react";

const JSScreenBOM = () => {
 
  return (
    <div className="max-w-4xl p-6 mt-10">
      <h1 className="text-3xl font-medium text-blue-500 mb-3">screen Object in BOM (Browser Object Model)</h1>

      <p>
        The <span className="text-red-400">screen</span> object contains information about the user's screen, such as
        its width, height, available space, and color depth. It is part of the Browser Object Model (BOM)
        and helps JavaScript interact with the browser environment.
      </p>

      <h1 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Window Screen</h1>
      <p className="mb-3">The <span className="text-red-400">window.screen</span> object can be accessed without using the <span className="text-red-400">window</span> prefix.</p>
      <p>Properties:</p>
     <ul className="list-[square] list-inside mt-3">
      <li><span className="text-red-400">screen.width</span></li>
      <li><span className="text-red-400">screen.height</span></li>
      <li><span className="text-red-400">screen.availWidth</span></li>
      <li><span className="text-red-400">screen.availHeight</span></li>
      <li><span className="text-red-400">screen.colorDepth</span></li>
      <li><span className="text-red-400">screen.pixelDepth</span></li>
     </ul>

     <h1 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Window Screen Width</h1>
    <p>The screen.width property gives the screen width of the user’s device in pixels.</p>
    <h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">Example</h2>
    <p>Show the screen width in pixels.</p>
    <pre className="text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5">
      <code>
        {`document.getElementById("demo").innerHTML =
"Screen Width: " + screen.width;`}
      </code>
    </pre>
    <p className="mt-3">Output Will be:</p>
    <pre className="text-black bg-gray-200 p-4 mt-5">
      <code>
        {`Screen Width: 1366`}
      </code>
    </pre>

    <h1 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Window Screen Height</h1>
    <p>You can use screen.height to get the screen’s height in pixels.</p>
    <h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">Example</h2>
    <p>Show the screen height in pixels.</p>
    <pre className="text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5">
      <code>
        {`document.getElementById("demo").innerHTML =
"Screen Height: " + screen.height;`}
      </code>
    </pre>
    <p className="mt-3">Output Will be:</p>
    <pre className="text-black bg-gray-200 p-4 mt-5">
      <code>
        {`Screen Height: 768`}
      </code>
    </pre>

    <h1 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Window Screen Available Width</h1>
    <p>The <span className="text-red-400">screen.availWidth</span> property gives the width of the visitor’s screen in pixels, excluding interface elements like the Windows Taskbar.</p>
    <h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">Example</h2>
    <p>Show the screen’s available width in pixels.</p>
    <pre className="text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5">
      <code>
        {`document.getElementById("demo").innerHTML =
"Available Screen Width: " + screen.availWidth;`}
      </code>
    </pre>
     <p className="mt-3">Output Will be:</p>
    <pre className="text-black bg-gray-200 p-4 mt-5">
      <code>
        {`Available Screen Width: 1366`}
      </code>
    </pre>

    <h1 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Window Screen Available Height</h1>
    <p>The <span className="text-red-400">screen.availHeight</span> property gives the height of the visitor’s screen in pixels, excluding interface elements like the Windows Taskbar.</p>
    <h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">Example</h2>
    <p>Show the screen’s available height in pixels.</p>
    <pre className="text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5">
      <code>
        {`document.getElementById("demo").innerHTML =
"Available Screen Height: " + screen.availHeight;`}
      </code>
    </pre>
    <p className="mt-3">Output Will be:</p>
    <pre className="text-black bg-gray-200 p-4 mt-5">
      <code>
        {`Available Screen Height: 728`}
      </code>
    </pre>

    <h1 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Window Screen Color Depth</h1>
    <p className="mb-3">The <span className="text-red-400">screen.colorDepth</span> property gives the number of bits used to represent a single color.</p>
    <p>All modern computers use 24-bit or 32-bit color hardware.</p>
   <ul className="list-[square] list-inside mt-5">
    <li>24 bits =      16,777,216 different "True Colors"</li>
    <li>32 bits = 4,294,967,296 different "Deep Colors"</li>
   </ul>
   <p className="mt-5">Older computers used 16-bit color, providing 65,536 “High Colors,” while very old computers and early cell phones used 8-bit color with 256 “VGA colors.”</p>
   <h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">Example</h2>
   <p>Show the screen’s color depth in bits.</p>
   <pre className="text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5">
    <code>
      {`document.getElementById("demo").innerHTML =
"Screen Color Depth: " + screen.colorDepth;`}
    </code>
   </pre>
    <p className="mt-3">Output Will be:</p>
    <pre className="text-black bg-gray-200 p-4 mt-5">
      <code>
        {`Screen Color Depth: 24`}
      </code>
    </pre>

    <h1 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Window Screen Pixel Depth</h1>
   <p>The <span className="text-red-400">screen.pixelDepth</span> property gives the pixel depth of the screen.</p>
   <h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">Example</h2>
   <p>Show the screen’s pixel depth in bits.</p>
   <pre className="text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5">
    <code>
      {`document.getElementById("demo").innerHTML =
"Screen Pixel Depth: " + screen.pixelDepth;`}
    </code>
   </pre>
    <p className="mt-3">Output Will be:</p>
    <pre className="text-black bg-gray-200 p-4 mt-5">
      <code>
        {`Screen Pixel Depth: 24`}
      </code>
    </pre>

    </div>
  );
};

export default JSScreenBOM;