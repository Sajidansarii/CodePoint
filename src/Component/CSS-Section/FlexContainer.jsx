import React from "react";

const CSSFlexboxContainer = () => {
  return (
    <div className="p-6 space-y-8">
      {/* Heading */}
      <h1 className="text-3xl font-medium text-blue-500">CSS Flexbox Container</h1>
      <p className="text-gray-700">
        Flexbox use karne ke liye pehle <strong>container</strong> ko define karna padta hai. 
        Jo element <code>display: flex;</code> leta hai, use <strong>flex container</strong> kehte hain, 
        aur uske andar ke elements ko <strong>flex items</strong> kehte hain.
      </p>

      {/* Example Code */}
      <div>
        <h2 className="text-xl font-semibold text-gray-800">Example: Flex Container</h2>

        <pre className="bg-gray-900 text-green-400 p-3 rounded mt-2 overflow-x-auto">
{`/* Container ko flex banaya */
.container {
  display: flex;        /* Flexbox activate */
  flex-direction: row;  /* Default: items row me aayenge */
  justify-content: space-around; /* Horizontal space adjust */
  align-items: center;  /* Vertical alignment */
  border: 2px solid black;
  height: 150px;
}

.item {
  background: lightcoral;
  padding: 20px;
  color: white;
  font-weight: bold;
}`}
        </pre>

        {/* Live Demo */}
        <div className="border-2 border-black h-40 flex flex-row justify-around items-center mt-6">
          <div className="bg-red-400 px-4 py-2">Item 1</div>
          <div className="bg-red-500 px-4 py-2">Item 2</div>
          <div className="bg-red-600 px-4 py-2">Item 3</div>
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
            <code>flex-direction</code> → Items ka direction set karta hai (row, column, row-reverse, column-reverse).
          </li>
          <li>
            <code>justify-content</code> → Items ko horizontal axis par align karta hai.
          </li>
          <li>
            <code>align-items</code> → Items ko vertical axis par align karta hai.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CSSFlexboxContainer;