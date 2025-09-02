import React from "react";

const CSSFlexboxIntro = () => {
  return (
    <div className="p-6 space-y-8">
      {/* Heading */}
      <h1 className="text-3xl font-bold text-indigo-600">CSS Flexbox (Introduction)</h1>
      <p className="text-gray-700">
        <strong>Flexbox</strong> ek CSS layout module hai jo elements ko easily{" "}
        <strong>align aur distribute</strong> karne ke liye use hota hai. Yeh specially responsive 
        design ke liye bahut useful hai.
      </p>

      {/* Example Code */}
      <div>
        <h2 className="text-xl font-semibold text-gray-800">Example: Basic Flexbox</h2>
        <p className="text-gray-700">
          Flexbox ka use karke hum elements ko horizontally aur vertically align kar sakte hain.
        </p>

        <pre className="bg-gray-900 text-green-400 p-3 rounded mt-2 overflow-x-auto">
{`/* Container ko flex banate hain */
.container {
  display: flex;
  justify-content: center; /* items ko horizontally center karega */
  align-items: center;    /* items ko vertically center karega */
  height: 200px;
  border: 2px solid black;
}

.item {
  background: lightblue;
  padding: 20px;
  margin: 10px;
}`}
        </pre>

        {/* Live Demo */}
        <div className="border-2 border-black h-40 flex justify-center items-center mt-6">
          <div className="bg-blue-300 px-4 py-2 m-2">Item 1</div>
          <div className="bg-blue-400 px-4 py-2 m-2">Item 2</div>
          <div className="bg-blue-500 px-4 py-2 m-2">Item 3</div>
        </div>
      </div>

      {/* Explanation */}
      <div>
        <h2 className="text-xl font-semibold text-gray-800">Explanation</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>
            <code>display: flex;</code> → Container ko flexbox bana deta hai.
          </li>
          <li>
            <code>justify-content</code> → Items ko horizontally align karta hai (start, center, end, space-between, space-around).
          </li>
          <li>
            <code>align-items</code> → Items ko vertically align karta hai (start, center, end, stretch).
          </li>
          <li>
            Flexbox responsive layouts ke liye perfect hai kyunki yeh automatically adjust hota hai.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CSSFlexboxIntro;