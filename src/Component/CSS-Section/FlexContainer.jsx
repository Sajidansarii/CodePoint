import React from "react";

const CSSFlexboxContainer = () => {
  return (
    <div className="p-6 max-w-4xl space-y-6 mt-10">
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

      <pre className="bg-gray-200 rounded-lg p-4 overflow-x-auto max-w-full whitespace-pre-wrap">
  <code>
    <span className="text-blue-600">.flex-container</span> <span>{'{'}</span><br />

    &nbsp;&nbsp;<span className="text-red-500">display</span>: <span className="text-green-700">flex</span>;<br />

    <span>{'}'}</span>
  </code>
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
       <pre className="bg-gray-200 p-4 rounded-lg overflow-x-auto max-w-full whitespace-pre-wrap">
  <code>
    <span className="text-blue-600">.flex-container</span> <span>{'{'}</span><br />

    &nbsp;&nbsp;<span className="text-red-500">display</span>: <span className="text-green-700">flex</span>;<br />
    &nbsp;&nbsp;<span className="text-red-500">flex-direction</span>: <span className="text-green-700">row</span>;<br />

    <span>{'}'}</span>
  </code>
</pre>
        
        <div className="border-2 border-black h-20 flex flex-row justify-around items-center mt-6">
          <div className="bg-red-400 px-4 py-2">Item 1</div>
          <div className="bg-red-500 px-4 py-2">Item 2</div>
          <div className="bg-red-600 px-4 py-2">Item 3</div>
        </div>
         
         <h1 className="text-2xl">Example</h1>
        <p>The column value arranges flex items vertically, from top to bottom.</p>
      <pre className="bg-gray-200 rounded-lg p-4 overflow-x-auto max-w-full whitespace-pre-wrap">
  <code>
    <span className="text-blue-600">.flex-container</span> <span>{'{'}</span><br />

    &nbsp;&nbsp;<span className="text-red-500">display</span>: <span className="text-green-700">flex</span>;<br />
    &nbsp;&nbsp;<span className="text-red-500">flex-direction</span>: <span className="text-green-700">column</span>;<br />

    <span>{'}'}</span>
  </code>
</pre>

        <div className="border-2 border-black h-52 flex flex-col justify-around items-center mt-6">
          <div className="bg-red-400 px-4 py-2">Item 1</div>
          <div className="bg-red-500 px-4 py-2">Item 2</div>
          <div className="bg-red-600 px-4 py-2">Item 3</div>
        </div>

        <h1 className="text-2xl">Example</h1>
        <p>The row-reverse value arranges flex items horizontally, but in reverse order—from right to left.</p>
       <pre className="bg-gray-200 rounded-lg p-4 overflow-x-auto max-w-full whitespace-pre-wrap">
  <code>
    <span className="text-blue-600">.flex-container</span> <span>{'{'}</span><br />

    &nbsp;&nbsp;<span className="text-red-500">display</span>: <span className="text-green-700">flex</span>;<br />
    &nbsp;&nbsp;<span className="text-red-500">flex-direction</span>: <span className="text-green-700">row-reverse</span>;<br />

    <span>{'}'}</span>
  </code>
</pre>

       <div className="border-2 border-black h-52 flex flex-row-reverse justify-around items-center mt-6">
          <div className="bg-red-400 px-4 py-2">Item 1</div>
          <div className="bg-red-500 px-4 py-2">Item 2</div>
          <div className="bg-red-600 px-4 py-2">Item 3</div>
        </div>

        <h1 className="text-2xl">Example</h1>
        <p>The column-reverse value arranges flex items vertically, starting from the bottom and moving up.</p>
       <pre className="bg-gray-200 rounded-lg p-4 overflow-x-auto max-w-full whitespace-pre-wrap">
  <code>
    <span className="text-blue-600">.flex-container</span> <span>{'{'}</span><br />

    &nbsp;&nbsp;<span className="text-red-500">display</span>: <span className="text-green-700">flex</span>;<br />
    &nbsp;&nbsp;<span className="text-red-500">flex-direction</span>: <span className="text-green-700">column-reverse</span>;<br />

    <span>{'}'}</span>
  </code>
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
      <pre className="bg-gray-200 rounded-lg p-4 overflow-x-auto max-w-full whitespace-pre-wrap">
  <code>
    <span className="text-blue-600">.flex-container</span> <span>{'{'}</span><br />

    &nbsp;&nbsp;<span className="text-red-500">display</span>: <span className="text-green-700">flex</span>;<br />
    &nbsp;&nbsp;<span className="text-red-500">flex-wrap</span>: <span className="text-green-700">nowrap</span>;<br />

    <span>{'}'}</span>
  </code>
</pre>

        <div className="border-2 p-8 sm:p-4 border-black flex flex-wrap gap-4 justify-center items-center mt-6">
          <div className="bg-red-400 px-4 py-2">Item1</div>
          <div className="bg-red-500 px-4 py-2">Item2</div>
          <div className="bg-red-600 px-4 py-2">Item3</div>
          <div className="bg-red-600 px-4 py-2">Item4</div>
          <div className="bg-red-600 px-4 py-2">Item5</div>
          <div className="bg-red-600 px-4 py-2">Item6</div>
        </div>

        <h1 className="text-2xl">Example</h1>
        <h1>The wrap value allows flex items to move onto a new line when there isn’t enough space.</h1>
      <pre className="bg-gray-200 rounded-lg p-4 overflow-x-auto max-w-full whitespace-pre-wrap">
  <code>
    <span className="text-blue-600">.flex-container</span> <span>{'{'}</span><br />

    &nbsp;&nbsp;<span className="text-red-500">display</span>: <span className="text-green-700">flex</span>;<br />
    &nbsp;&nbsp;<span className="text-red-500">flex-wrap</span>: <span className="text-green-700">wrap</span>;<br />

    <span>{'}'}</span>
  </code>
</pre>
        <div className="border-2 p-8 sm:p-4 border-black flex flex-wrap gap-4 justify-around items-center mt-6">
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
       <pre className="bg-gray-200 rounded-lg p-4 overflow-x-auto max-w-full whitespace-pre-wrap">
  <code>
    <span className="text-blue-600">.flex-container</span> <span>{'{'}</span><br />

    &nbsp;&nbsp;<span className="text-red-500">display</span>: <span className="text-green-700">flex</span>;<br />
    &nbsp;&nbsp;<span className="text-red-500">flex-wrap</span>: <span className="text-green-700">wrap-reverse</span>;<br />

    <span>{'}'}</span>
  </code>
</pre>

        <div className="border-2 p-8 sm:p-4 border-black flex flex-wrap-reverse gap-4 justify-around items-center mt-6">
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

      <pre className="bg-gray-200 p-4 rounded-lg mt-5 overflow-x-auto max-w-full whitespace-pre-wrap">
  <code>
    <span className="text-gray-500">/* Container ko flex banaya */</span><br />

    <span className="text-blue-600">.container</span> <span>{'{'}</span><br />
    &nbsp;&nbsp;<span className="text-red-500">display</span>: <span className="text-green-700">flex</span>; <span className="text-gray-500">/* Flexbox activate */</span><br />
    &nbsp;&nbsp;<span className="text-red-500">flex-direction</span>: <span className="text-green-700">row</span>; <span className="text-gray-500">/* Default: items row me aayenge */</span><br />
    &nbsp;&nbsp;<span className="text-red-500">justify-content</span>: <span className="text-green-700">space-around</span>; <span className="text-gray-500">/* Horizontal space adjust */</span><br />
    &nbsp;&nbsp;<span className="text-red-500">align-items</span>: <span className="text-green-700">center</span>; <span className="text-gray-500">/* Vertical alignment */</span><br />
    &nbsp;&nbsp;<span className="text-red-500">border</span>: <span className="text-green-700">2px solid black</span>;<br />
    &nbsp;&nbsp;<span className="text-red-500">height</span>: <span className="text-green-700">150px</span>;<br />
    <span>{'}'}</span><br /><br />

    <span className="text-blue-600">.item</span> <span>{'{'}</span><br />
    &nbsp;&nbsp;<span className="text-red-500">background</span>: <span className="text-green-700">lightcoral</span>;<br />
    &nbsp;&nbsp;<span className="text-red-500">padding</span>: <span className="text-green-700">20px</span>;<br />
    &nbsp;&nbsp;<span className="text-red-500">color</span>: <span className="text-green-700">white</span>;<br />
    &nbsp;&nbsp;<span className="text-red-500">font-weight</span>: <span className="text-green-700">bold</span>;<br />
    <span>{'}'}</span>
  </code>
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