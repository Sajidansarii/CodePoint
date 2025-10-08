import React from "react";

const CSSFlexboxIntro = () => {
  return (
    <div className="p-6 space-y-6">
      {/* Heading */}
      <h1 className="text-3xl font-medium text-blue-500">CSS Flexbox (Introduction)</h1>
      <p>Flexbox is a CSS layout module that is used to easily align and distribute        elements. It is especially useful for responsive design.
      </p>

      <div>
      <h1 className="text-2xl mt-10 mb-3">What is CSS Flexbox?</h1>
      <p className="mb-1">The term Flexbox refers to the Flexible Box Layout module.</p>
      <p className="mb-1">Flexbox helps in positioning items in either rows or columns.</p>
      <p>Flexbox allows you to build flexible, responsive layout structures without using floats or positioning.</p>

      <h1 className="text-2xl mt-10 mb-3">Diffrence between Flex and Grid</h1>
      <p>Flexbox in CSS is meant for arranging items in a single direction—rows or columns.<br/>
         The Grid Layout in CSS is intended for layouts organized in both rows and columns.
      </p>

      <h1 className="text-2xl mt-10 mb-3">CSS Flexible Box Layout Module</h1>
      <p>Before Flexbox, layouts were managed using four different modes.</p>
      <ul className="list-[square] list-inside">
        <li>Block, for sections in a webpage</li>
        <li>Inline, for text</li>
        <li>Table, for two-dimensional table data</li>
        <li>Positioned, for explicit position of an element</li>
      </ul>
      <p className="mt-5">CSS Flexbox works in all the latest browsers.</p>

      <h1 className="text-2xl mt-16">Understanding CSS Flexbox Elements</h1>
      <p className="mt-2">A flexbox is always made up of:</p>
      <ul className="list-[square] list-inside">
        <li>a Flex Container - the parent (container) {'<div>'} element</li>
        <li>Flex Items - the items inside the container {'<div>'}</li>
      </ul>


      {/* Example Code */}
        <h2 className="text-2xl mb-3 mt-10 ">Example: Basic Flexbox</h2>
        <p className="mb-5  ">
         By using Flexbox, we can align elements both horizontally and vertically.
        </p>

        <pre className="bg-gray-900 text-green-400 p-3 rounded mt-2 overflow-x-auto">
{`/*We make the container a flex container. */
.container {
  display: flex;
  justify-content: center; /* It will center the items horizontally*/
  align-items: center;    /* It will center the items vertically*/
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
        <h2 className="text-2xl mt-10 mb-5">Explanation</h2>
        <ul className="list-[square] list-inside bg-green-100 p-3 border space-y-2">
          <li>
            <code>display: flex;</code> → It turns the container into a flexbox.
          </li>
          <li>
            <code>justify-content</code> → It aligns the items horizontally (start, center, end, space-between, space-around).
          </li>
          <li>
            <code>align-items</code> → It aligns the items vertically (start, center, end, stretch).
          </li>
          <li>
            Flexbox is perfect for responsive layouts because it adjusts automatically.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CSSFlexboxIntro;