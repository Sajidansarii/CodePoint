import React from "react";

const CSSFlexboxContainer = () => {
  return (
    <div className="p-6 space-y-6">
      {/* Heading */}
      <h1 className="text-3xl font-medium text-blue-500">CSS Flexbox Container</h1>
      <p>
        To use Flexbox, you first need to define the container. The element that takes display: flex; is called the flex container, and the elements inside it are called flex items.
      </p>
     <h1 className="text-2xl">CSS Flex Container</h1>
     <p>As previously noted, this is a flex container (shown in red) with three items laid out using Flexbox.</p>
     <p>The red area represents a flex container, just like we covered earlier, and it includes three flex items.</p>
     
     {/* Live Demo */}
          <h1 className="text-2xl">Example</h1>
        <div className="border-2 border-black h-40 flex flex-row justify-around items-center mt-6">
          <div className="bg-red-400 px-4 py-2">Item 1</div>
          <div className="bg-red-500 px-4 py-2">Item 2</div>
          <div className="bg-red-600 px-4 py-2">Item 3</div>
        </div>

        <pre className="text-green-400 bg-gray-900 rounded-lg p-4">
          {`.flex-container {
  display: flex;
}`}
        </pre>

        <h1 className="text-2xl">CSS flex-direction Property</h1>
        <p>The <span className="text-red-400 bg-gray-50 px-1">flex-direction</span> setting determines how flex items are arranged—horizontally or vertically—in the flex container.</p>
        <p>Here are the valid values you can use with this property:</p>
        <ul className="list-[square] list-inside">
          <li><span className="text-red-400 bg-gray-50">row</span></li>
          <li> <span className="text-red-400 bg-gray-50">column</span></li>
          <li> <span className="text-red-400 bg-gray-50">row-reverse</span></li>
          <li> <span className="text-red-400 bg-gray-50">column-reverse</span></li>
        </ul>

        <h1 className="text-2xl">Example</h1>
        <p>Flex items are arranged left to right in a horizontal line when using the default row value.</p>
        <pre className="text-green-400 bg-gray-900 p-4 rounded-lg">
          {`.flex-container {
  display: flex;
  flex-direction: row;
}`}
        </pre>
        
        <div className="border-2 border-black h-20 flex flex-row justify-around items-center mt-6">
          <div className="bg-red-400 px-4 py-2">Item 1</div>
          <div className="bg-red-500 px-4 py-2">Item 2</div>
          <div className="bg-red-600 px-4 py-2">Item 3</div>
        </div>
         
         <h1 className="text-2xl">Example</h1>
        <p>The column value arranges flex items vertically, from top to bottom.</p>
        <pre className="bg-gray-900 text-green-400 rounded-lg p-4">
          {`.flex-container {
  display: flex;
  flex-direction: column;
}`}
        </pre>
        <div className="border-2 border-black h-52 flex flex-col justify-around items-center mt-6">
          <div className="bg-red-400 px-4 py-2">Item 1</div>
          <div className="bg-red-500 px-4 py-2">Item 2</div>
          <div className="bg-red-600 px-4 py-2">Item 3</div>
        </div>

        <h1 className="text-2xl">Example</h1>
        <p>The row-reverse value arranges flex items horizontally, but in reverse order—from right to left.</p>
        <pre className="text-green-400 bg-gray-900 rounded-lg p-4">
          {`.flex-container {
  display: flex;
  flex-direction: row-reverse;
}`}
        </pre>

       <div className="border-2 border-black h-52 flex flex-row-reverse justify-around items-center mt-6">
          <div className="bg-red-400 px-4 py-2">Item 1</div>
          <div className="bg-red-500 px-4 py-2">Item 2</div>
          <div className="bg-red-600 px-4 py-2">Item 3</div>
        </div>

        <h1 className="text-2xl">Example</h1>
        <p>The column-reverse value arranges flex items vertically, starting from the bottom and moving up.</p>
        <pre className="text-green-400 bg-gray-900 rounded-lg p-4">
          {`.flex-container {
  display: flex;
  flex-direction: column-reverse;
}`}
        </pre>

        <div className="border-2 border-black h-52 flex flex-col-reverse justify-around items-center mt-6">
          <div className="bg-red-400 px-4 py-2">Item1</div>
          <div className="bg-red-500 px-4 py-2">Item2</div>
          <div className="bg-red-600 px-4 py-2">Item3</div>
        </div>

        <h1 className="text-2xl">CSS flex-wrap Property</h1>
        <p>The flex-wrap setting tells the browser whether to keep items on one line or allow them to wrap when needed.</p>
        <p>This property accepts the following values:</p>
        <ul className="list-[square] list-inside">
          <li><span className="text-red-400 bg-gray-50 px-1">nowrap</span></li>
          <li><span className="text-red-400 bg-gray-50 px-1">wrap</span></li>
          <li><span className="text-red-400 bg-gray-50 px-1">wrap-reverse</span></li>
        </ul>

        <h1 className="text-2xl">Example</h1>
        <p>The nowrap value prevents flex items from wrapping; they will stay on a single line. This is the default behavior.</p>
        <pre className="text-green-400 bg-gray-900 rounded-lg p-4">
          {`.flex-container {
  display: flex;
  flex-wrap: nowrap;
}`}
        </pre>

        <div className="border-2 border-black h-20 flex flex-nowrap justify-around items-center mt-6">
          <div className="bg-red-400 px-4 py-2">Item1</div>
          <div className="bg-red-500 px-4 py-2">Item2</div>
          <div className="bg-red-600 px-4 py-2">Item3</div>
          <div className="bg-red-600 px-4 py-2">Item4</div>
          <div className="bg-red-600 px-4 py-2">Item5</div>
          <div className="bg-red-600 px-4 py-2">Item6</div>
        </div>

        <h1 className="text-2xl">Example</h1>
        <h1>The wrap value allows flex items to move onto a new line when there isn’t enough space.</h1>
        <pre className="text-green-400 bg-gray-900 rounded-lg p-4">
          {`.flex-container {
  display: flex;
  flex-wrap: wrap;
}`}
        </pre>

        <div className="border-2 border-black h-40 w-2/3  flex flex-wrap justify-around items-center mt-6">
          <div className="bg-red-400 px-4 py-2">Item1</div>
          <div className="bg-red-500 px-4 py-2">Item2</div>
          <div className="bg-red-600 px-4 py-2">Item3</div>
          <div className="bg-red-600 px-4 py-2">Item4</div>
          <div className="bg-red-600 px-4 py-2">Item5</div>
          <div className="bg-red-600 px-4 py-2">Item6</div>
          <div className="bg-red-600 px-4 py-2">Item7</div>
          <div className="bg-red-600 px-4 py-2">Item8</div>
          <div className="bg-red-600 px-4 py-2">Item9</div>
          <div className="bg-red-600 px-4 py-2">Item10</div>
          <div className="bg-red-600 px-4 py-2">Item11</div>
          <div className="bg-red-600 px-4 py-2">Item12</div>
          <div className="bg-red-600 px-4 py-2">Item13</div>
        </div>

        <h1 className="text-2xl">Example</h1>
        <p>The wrap-reverse value lets flex items wrap onto multiple lines when needed, but in the opposite direction.</p>
        <pre className="text-green-400 bg-gray-900 rounded-lg p-4">
          {`.flex-container {
  display: flex;
  flex-wrap: wrap-reverse;
}`}
        </pre>

        <div className="border-2 border-black h-40 w-2/3  flex flex-wrap-reverse justify-around items-center mt-6">
          <div className="bg-red-400 px-4 py-2">Item1</div>
          <div className="bg-red-500 px-4 py-2">Item2</div>
          <div className="bg-red-600 px-4 py-2">Item3</div>
          <div className="bg-red-600 px-4 py-2">Item4</div>
          <div className="bg-red-600 px-4 py-2">Item5</div>
          <div className="bg-red-600 px-4 py-2">Item6</div>
          <div className="bg-red-600 px-4 py-2">Item7</div>
          <div className="bg-red-600 px-4 py-2">Item8</div>
          <div className="bg-red-600 px-4 py-2">Item9</div>
          <div className="bg-red-600 px-4 py-2">Item10</div>
          <div className="bg-red-600 px-4 py-2">Item11</div>
          <div className="bg-red-600 px-4 py-2">Item12</div>
          <div className="bg-red-600 px-4 py-2">Item13</div>
        </div>




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