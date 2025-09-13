import React from "react";

const CSSGridContainer = () => {
  return (
    <div className="p-6 space-y-8">
      {/* Heading */}
      <h1 className="text-3xl font-medium text-blue-500">CSS Grid: Container</h1>
      <p className="text-gray-700">
        CSS Grid layout shuru karne ke liye sabse pehle ek{" "}
        <code>Grid Container</code> banana padta hai. Iske liye hum{" "}
        <code>display: grid;</code> property use karte hain. Saare grid items
        isi container ke andar arrange hote hain.
      </p>

      {/* Example Code */}
      <div>
        <h2 className="text-xl font-semibold text-gray-800">
          Example: Creating a Grid Container
        </h2>

        <pre className="bg-gray-900 text-green-400 p-3 rounded mt-2 overflow-x-auto">
{`/* Grid Container */
.container {
  display: grid;
  grid-template-columns: auto auto auto; /* 3 equal columns */
  gap: 10px; /* spacing between items */
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
            <code>display: grid;</code> → Container ko grid layout banata hai.
          </li>
          <li>
            <code>grid-template-columns: auto auto auto;</code> → Teen equal width
            ke columns create karta hai.
          </li>
          <li>
            <code>gap: 10px;</code> → Rows aur columns ke beech space add karta hai.
          </li>
          <li>
            Saare direct child elements automatically grid items ban jaate hain.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CSSGridContainer;