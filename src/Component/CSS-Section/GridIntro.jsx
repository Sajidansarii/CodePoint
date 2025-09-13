import React from "react";

const CSSGridIntro = () => {
  return (
    <div className="p-6 space-y-8">
      {/* Heading */}
      <h1 className="text-3xl font-medium text-blue-500">CSS Grid Introduction</h1>
      <p className="text-gray-700">
        CSS Grid ek powerful 2D layout system hai jo rows aur columns dono ke 
        sath kaam karta hai. Ye web page layout banane ke liye Flexbox se zyada 
        control deta hai.
      </p>

      {/* Example Code */}
      <div>
        <h2 className="text-xl font-semibold text-gray-800">Example: Simple Grid</h2>

        <pre className="bg-gray-900 text-green-400 p-3 rounded mt-2 overflow-x-auto">
{`/* Grid Container */
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3 equal columns */
  gap: 10px;  /* space between items */
}

/* Grid Items */
.item {
  background: steelblue;
  color: white;
  padding: 20px;
  text-align: center;
  font-weight: bold;
}`}
        </pre>

        {/* Live Demo */}
        <div className="border-2 border-black p-4 grid grid-cols-3 gap-3 mt-6">
          <div className="bg-blue-500 text-white font-bold p-6 text-center">1</div>
          <div className="bg-green-500 text-white font-bold p-6 text-center">2</div>
          <div className="bg-red-500 text-white font-bold p-6 text-center">3</div>
          <div className="bg-purple-500 text-white font-bold p-6 text-center">4</div>
          <div className="bg-pink-500 text-white font-bold p-6 text-center">5</div>
          <div className="bg-yellow-500 text-white font-bold p-6 text-center">6</div>
        </div>
      </div>

      {/* Explanation */}
      <div>
        <h2 className="text-xl font-semibold text-gray-800">Explanation</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li><code>display: grid;</code> → Container ko grid bana deta hai.</li>
          <li>
            <code>grid-template-columns: repeat(3, 1fr);</code> → 
            3 equal columns banata hai. 
            <code>1fr</code> ka matlab hai available space ka ek equal part.
          </li>
          <li>
            <code>gap: 10px;</code> → Grid items ke beech me spacing add karta hai.
          </li>
          <li>
            Grid 2D hota hai: Rows aur Columns dono ko handle kar sakta hai, 
            jabki Flexbox mostly ek direction (row/column) me kaam karta hai.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CSSGridIntro;