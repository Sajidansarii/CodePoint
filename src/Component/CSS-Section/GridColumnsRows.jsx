import React from "react";

const CSSGridColumnsRows = () => {
  return (
    <div className="p-6 space-y-8">
      {/* Heading */}
      <h1 className="text-3xl font-bold text-indigo-600">
        CSS Grid: Columns and Rows
      </h1>
      <p className="text-gray-700">
        CSS Grid me hum <code>grid-template-columns</code> aur{" "}
        <code>grid-template-rows</code> use karke columns aur rows define kar
        sakte hain. Ye web layout banane me bahut powerful hota hai.
      </p>

      {/* Example Code */}
      <div>
        <h2 className="text-xl font-semibold text-gray-800">
          Example: Defining Columns & Rows
        </h2>

        <pre className="bg-gray-900 text-green-400 p-3 rounded mt-2 overflow-x-auto">
{`/* Grid Container */
.container {
  display: grid;
  grid-template-columns: 100px 200px auto; 
  grid-template-rows: 80px 120px;
  gap: 10px;
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
        <div className="border-2 border-black p-4 grid grid-cols-[100px_200px_auto] grid-rows-[80px_120px] gap-3 mt-6">
          <div className="bg-blue-500 text-white font-bold p-6 text-center">
            1
          </div>
          <div className="bg-green-500 text-white font-bold p-6 text-center">
            2
          </div>
          <div className="bg-red-500 text-white font-bold p-6 text-center">
            3
          </div>
          <div className="bg-purple-500 text-white font-bold p-6 text-center">
            4
          </div>
          <div className="bg-pink-500 text-white font-bold p-6 text-center">
            5
          </div>
          <div className="bg-yellow-500 text-white font-bold p-6 text-center">
            6
          </div>
        </div>
      </div>

      {/* Explanation */}
      <div>
        <h2 className="text-xl font-semibold text-gray-800">Explanation</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>
            <code>grid-template-columns: 100px 200px auto;</code> → 
            Pehle column ki width <b>100px</b>, doosre ki <b>200px</b>, aur teesra
            <b> auto</b> (bacha hua space le lega).
          </li>
          <li>
            <code>grid-template-rows: 80px 120px;</code> → 
            Pehli row ki height <b>80px</b> aur doosri ki <b>120px</b>.
          </li>
          <li>
            <code>gap: 10px;</code> → Columns aur Rows ke beech spacing set karta hai.
          </li>
          <li>
            Aap fractional unit (<code>fr</code>) bhi use kar sakte ho responsive layout
            banane ke liye.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CSSGridColumnsRows;