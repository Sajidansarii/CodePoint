import React from "react";

const CSSFlexResponsive = () => {
  return (
    <div className="p-6 space-y-6">
      {/* Heading */}
      <h1 className="text-3xl font-medium text-blue-500">CSS Flex Responsive</h1>
      <h1 className="text-2xl">Responsive Flexbox</h1>
      <p className="text-gray-700">
       Flexbox is a powerful layout system that is very useful for creating responsive designs. It automatically resizes and wraps elements according to different screen sizes.
      </p>

      {/* Example Code */}
      <div>
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

      <p>You can use a media query to switch the flex-direction from row to column at 800px, creating a two-column layout on larger screens and a single column on smaller ones.</p>

              <h2 className="text-2xl">Example</h2>
        <pre className="bg-gray-900 text-green-400 p-3 rounded mt-2 overflow-x-auto">
{`/* Flex Container */
.container {
  display: flex;
  flex-wrap: wrap;     
  gap: 10px;           
}

/* Flex Items */
.item {
  flex: 1 1 200px;     
  background: lightseagreen;
  color: white;
  padding: 20px;
  text-align: center;
  font-weight: bold;
}`}
        </pre>

        <p>Another approach is to adjust the flex property values (using percentages) on flex items to create different layouts for various screen sizes. Just make sure to set flex-wrap: wrap; on the container for this to work properly.</p>

              <div>
        <div className="border-2 border-black p-4 flex flex-col gap-3 mt-6">
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
      <div className="bg-green-100 p-3">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Explanation</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>
            <code>flex-wrap: wrap;</code> → When there is less space in the container, the items automatically move to the next line.
          </li>
          <li>
            <code>flex: 1 1 200px;</code> → 
            <ul className="list-disc list-inside ml-6">
              <li><code>1</code> → Grow factor (will fill the extra space)</li>
              <li><code>1</code> → Shrink factor (will shrink when space is limited)</li>
              <li><code>200px</code> → Minimum base width</li>
            </ul>
          </li>
          <li>This way, the layout becomes responsive without writing media queries.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CSSFlexResponsive;