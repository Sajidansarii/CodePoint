import React from "react";

const CSSFlexResponsive = () => {
  return (
    <div className="p-6 space-y-8">
      {/* Heading */}
      <h1 className="text-3xl font-bold text-indigo-600">CSS Flex Responsive</h1>
      <p className="text-gray-700">
        Flexbox ek powerful layout system hai jo responsive design banane ke liye 
        bahut useful hai. Ye automatically elements ko resize aur wrap kar deta hai 
        different screen sizes ke according.
      </p>

      {/* Example Code */}
      <div>
        <h2 className="text-xl font-semibold text-gray-800">Example: Responsive Flexbox</h2>

        <pre className="bg-gray-900 text-green-400 p-3 rounded mt-2 overflow-x-auto">
{`/* Flex Container */
.container {
  display: flex;
  flex-wrap: wrap;     /* Items wrap karenge */
  gap: 10px;           /* Items ke beech spacing */
}

/* Flex Items */
.item {
  flex: 1 1 200px;     /* Grow, shrink aur min-width */
  background: lightseagreen;
  color: white;
  padding: 20px;
  text-align: center;
  font-weight: bold;
}`}
        </pre>

        {/* Live Demo */}
        <div className="border-2 border-black p-4 flex flex-wrap gap-3 mt-6">
          <div className="bg-green-500 flex-1 min-w-[200px] text-white font-bold p-6 text-center">
            Item 1
          </div>
          <div className="bg-blue-500 flex-1 min-w-[200px] text-white font-bold p-6 text-center">
            Item 2
          </div>
          <div className="bg-red-500 flex-1 min-w-[200px] text-white font-bold p-6 text-center">
            Item 3
          </div>
          <div className="bg-purple-500 flex-1 min-w-[200px] text-white font-bold p-6 text-center">
            Item 4
          </div>
        </div>
      </div>

      {/* Explanation */}
      <div>
        <h2 className="text-xl font-semibold text-gray-800">Explanation</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>
            <code>flex-wrap: wrap;</code> → Jab container me space kam ho jata hai 
            to items automatically next line me ch चले जाते हैं.
          </li>
          <li>
            <code>flex: 1 1 200px;</code> → 
            <ul className="list-disc list-inside ml-6">
              <li><code>1</code> → Grow factor (extra space fill karega)</li>
              <li><code>1</code> → Shrink factor (kam hone par shrink karega)</li>
              <li><code>200px</code> → Minimum base width</li>
            </ul>
          </li>
          <li>
            Is tarah se layout responsive ban jata hai bina media queries likhe.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CSSFlexResponsive;