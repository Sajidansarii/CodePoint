import React from "react";

const HTMLItems = () => {
  const data = [
    {Property:'align-self', Description:'Aligns the content for a specific grid item along the column axis'},
    {Property:'grid-area', Description:'A shorthand property for the grid-row-start, grid-column-start, grid-row-end and the grid-column-end properties'},
    {Property:'grid-column', Description:'	A shorthand property for the grid-column-start and the grid-column-end properties'},
    {Property:'grid-column-end', Description:'Specifies where to end the grid item'},
    {Property:'grid-column-start', Description:'Specifies where to start the grid item'},
    {Property:'grid-row', Description:'A shorthand property for the grid-row-start and the grid-row-end properties'},
    {Property:'grid-row-end', Description:'Specifies where to end the grid item'},
    {Property:'grid-row-start', Description:'Specifies where to start the grid item'},
    {Property:'justify-self', Description:'Aligns the content for a specific grid item along the row axis'},
    {Property:'place-self', Description:'A shorthand property for the align-self and the justify-self properties'}
  ];
  return (
    <div className="p-6">
      {/* Heading */}
      <h1 className="text-3xl font-medium text-blue-500 mb-3">HTML Elements (Items)</h1>
      <p>
Elements (or items) in HTML are the building blocks of a webpage. Each element defines a specific purpose — such as a heading, paragraph, image, or link.
      </p>

      <h1 className="text-2xl mt-10 mb-2">CSS Grid Items</h1>
      <p>Grid items are the elements placed inside a grid container.</p>
      <p>By default, each grid cell holds one item, but items can be styled to span multiple columns or rows.</p>
      <h1 className="text-2xl mt-10 mb-2">CSS grid-column-start and grid-column-end</h1>
      <p>Specifies the column line where a grid item starts on the horizontal axis.</p>
       <p>Specifies the ending column line for placing a grid item along the horizontal axis.</p>
       <h1 className="text-2xl mt-6 mb-2">Example</h1>
       <p>The first grid item starts at column line 1 and ends at column line 3.</p>
     <pre className="text-green-400 bg-gray-900 p-4 rounded-lg mt-7">
      {`.item1 {
  grid-column-start: 1;
  grid-column-end: 3;
}`}
     </pre>

     <div className="border-2 border-black p-4 mt-10 grid grid-cols-3 gap-3">
      <div className="bg-blue-500 text-white font-bold col-start-1 col-end-3 p-6 text-center">1</div>
      <div className="bg-blue-500 text-white font-bold p-6 text-center">2</div>
      <div className="bg-blue-500 text-white font-bold p-6 text-center">3</div>
      <div className="bg-blue-500 text-white font-bold p-6 text-center">4</div>
      <div className="bg-blue-500 text-white font-bold p-6 text-center">5</div>
      <div className="bg-blue-500 text-white font-bold p-6 text-center">6</div>
      <div className="bg-blue-500 text-white font-bold p-6 text-center">7</div>
      <div className="bg-blue-500 text-white font-bold p-6 text-center">8</div>
      </div>

      <h1 className="text-2xl mt-10 mb-2">CSS grid-column Property</h1>
      <p>A shorthand that sets both <span className="text-red-400 bg-gray-50 px-1">grid-column-start</span> and <span className="text-red-400 bg-gray-50 px-1">grid-column-start</span>.</p>
      <p>Grid items can be placed by line numbers or by using span to specify column span.</p>
      <h1 className="text-2xl mt-7 mb-2">Example</h1>
      <p>First grid item starts at line 1 and spans 2 columns.</p>
      <pre className="text-green-400 bg-gray-900 p-4 rounded-lg mt-5">
        {`.item1 {
  grid-column: 1 / span 2;
}`}
      </pre>

      <div className="border-2 border-black p-4 mt-10 grid grid-cols-3 gap-3">
      <div className="bg-blue-500 text-white font-bold col-start-1 col-span-2 p-6 text-center">1</div>
      <div className="bg-blue-500 text-white font-bold p-6 text-center">2</div>
      <div className="bg-blue-500 text-white font-bold p-6 text-center">3</div>
      <div className="bg-blue-500 text-white font-bold p-6 text-center">4</div>
      <div className="bg-blue-500 text-white font-bold p-6 text-center">5</div>
      <div className="bg-blue-500 text-white font-bold p-6 text-center">6</div>
      <div className="bg-blue-500 text-white font-bold p-6 text-center">7</div>
      <div className="bg-blue-500 text-white font-bold p-6 text-center">8</div>
      </div>

      <h1 className="text-2xl mt-10 mb-2">Example</h1>
      <p>item1 starts at column 1 and spans across 3 columns.</p>
      <pre className="text-green-400 bg-gray-900 p-4 rounded-lg mt-6">
        {`.item1 {
  grid-column: 1 / 4;
}`}
      </pre>
     <div className="border-2 border-black p-4 mt-10 grid grid-cols-3 gap-3">
      <div className="bg-blue-500 text-white font-bold col-start-1 col-end-4 p-6 text-center">1</div>
      <div className="bg-blue-500 text-white font-bold p-6 text-center">2</div>
      <div className="bg-blue-500 text-white font-bold p-6 text-center">3</div>
      <div className="bg-blue-500 text-white font-bold p-6 text-center">4</div>
      <div className="bg-blue-500 text-white font-bold p-6 text-center">5</div>
      <div className="bg-blue-500 text-white font-bold p-6 text-center">6</div>
      <div className="bg-blue-500 text-white font-bold p-6 text-center">7</div>
      <div className="bg-blue-500 text-white font-bold p-6 text-center">8</div>
      </div>

      <h1 className="text-2xl mt-5 mb-2">Example</h1>
      <p>item2 starts at column 2 and spans 2 columns.</p>
      <pre className="text-green-400 bg-gray-900 p-4 rounded-lg mt-5">
        {`.item2 {
  grid-column: 2 / span 2;
}`}
      </pre>
      
     <div className="border-2 border-black p-4 mt-10 grid grid-cols-3 gap-3">
      <div className="bg-blue-500 text-white font-bold p-6 text-center">1</div>
      <div className="bg-blue-500 text-white font-bold col-start-2 col-span-2 col-spa p-6 text-center">2</div>
      <div className="bg-blue-500 text-white font-bold p-6 text-center">3</div>
      <div className="bg-blue-500 text-white font-bold p-6 text-center">4</div>
      <div className="bg-blue-500 text-white font-bold p-6 text-center">5</div>
      <div className="bg-blue-500 text-white font-bold p-6 text-center">6</div>
      <div className="bg-blue-500 text-white font-bold p-6 text-center">7</div>
      <div className="bg-blue-500 text-white font-bold p-6 text-center">8</div>
      </div>


   <h1 className="text-2xl mt-10 mb-2">CSS grid-row-start and grid-row-end</h1>
   <p>It defines where a grid item begins vertically.</p>
   <p>It defines where a grid item ends vertically.</p>
   <h1 className="text-2xl mt-5 mb-2">Example</h1>
   <p>The first item spans rows from line 1 to 3.</p>
   <pre className="text-green-400 bg-gray-900 p-4 rounded-lg mt-5">
    {`.item1 {
  grid-row-start: 1;
  grid-row-end: 3;
}`}
   </pre>

     <div className="border-2 border-black p-4 mt-10 grid grid-cols-3 gap-3">
      <div className="bg-blue-500 text-white font-bold row-start-1 row-end-3 p-6 text-center">1</div>
      <div className="bg-blue-500 text-white font-bold p-6 text-center">2</div>
      <div className="bg-blue-500 text-white font-bold p-6 text-center">3</div>
      <div className="bg-blue-500 text-white font-bold p-6 text-center">4</div>
      <div className="bg-blue-500 text-white font-bold p-6 text-center">5</div>
      <div className="bg-blue-500 text-white font-bold p-6 text-center">6</div>
      <div className="bg-blue-500 text-white font-bold p-6 text-center">7</div>
      <div className="bg-blue-500 text-white font-bold p-6 text-center">8</div>
      </div>

      <h1 className="text-2xl mt-10 mb-2">CSS grid-row Property</h1>
      <p>A shorthand that combines <span className="text-red-400 bg-gray-50 px-1">grid-row-start</span> and <span className="text-red-400 bg-gray-50 px-1">grid-row-end</span>.</p>
      <p>Use line numbers or the span keyword to control how many rows an item covers.</p>
      <h1 className="text-2xl mt-5 mb-2">Example</h1>
      <p>The first grid item spans 2 rows starting from line 1.</p>
      <pre className="text-green-400 bg-gray-900 p-4 rounded-lg mt-5">
        {`.item1 {
  grid-row: 1 / span 2;
}`}
      </pre>

      <div className="border-2 border-black p-4 mt-10 grid grid-cols-3 gap-3">
      <div className="bg-blue-500 text-white font-bold row-start-1 row-span-2 p-6 text-center">1</div>
      <div className="bg-blue-500 text-white font-bold p-6 text-center">2</div>
      <div className="bg-blue-500 text-white font-bold p-6 text-center">3</div>
      <div className="bg-blue-500 text-white font-bold p-6 text-center">4</div>
      <div className="bg-blue-500 text-white font-bold p-6 text-center">5</div>
      <div className="bg-blue-500 text-white font-bold p-6 text-center">6</div>
      <div className="bg-blue-500 text-white font-bold p-6 text-center">7</div>
      <div className="bg-blue-500 text-white font-bold p-6 text-center">8</div>
      </div>

      <h1 className="text-2xl mt-5 mb-2">Example</h1>
      <p>item1 starts on row-line 1 and stops at line 4 (not inclusive).</p>
      <pre className="text-green-400 bg-gray-900 p-4 rounded-lg mt-5">
        {`.item1 {
  grid-row: 1 / 4;
}`}
      </pre>

      <div className="border-2 border-black p-4 mt-10 grid grid-cols-3 gap-3">
      <div className="bg-blue-500 text-white font-bold row-start-1 row-span-3 p-6 text-center">1</div>
      <div className="bg-blue-500 text-white font-bold p-6 text-center">2</div>
      <div className="bg-blue-500 text-white font-bold p-6 text-center">3</div>
      <div className="bg-blue-500 text-white font-bold p-6 text-center">4</div>
      <div className="bg-blue-500 text-white font-bold p-6 text-center">5</div>
      <div className="bg-blue-500 text-white font-bold p-6 text-center">6</div>
      <div className="bg-blue-500 text-white font-bold p-6 text-center">7</div>
      <div className="bg-blue-500 text-white font-bold p-6 text-center">8</div>
      </div>
     

     <h1 className="text-2xl mt-20 mb-5">All CSS Grid Item Properties</h1>
     <table className="min-w-full border border-gray-300 text-gray-700 text-left text-sm rounded-md">
      <thead>
        <tr className="bg-gray-100">
          <th className="px-4 py-2 border-b border-gray-300 text-gray-700 font-bold">Property</th>
          <th className="px-4 py-2 border-b border-gray-300 text-gray-700 font-bold">Description</th>
        </tr>
      </thead>
      {data.map((row,index)=>(
        <tr className="cursor-text hover:bg-gray-100">
          <td className="px-4 py-2 border border-gray-200">{row.Property}</td>
          <td className="px-4 py-2 border border-gray-200">{row.Description}</td>
        </tr>
      ))}
      
     </table>
     
      {/* Explanation */}
      <div className="mt-32 bg-green-100 p-3">
        <h2 className="text-xl font-semibold text-gray-800 mb-3">Explanation</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li><strong>&lt;h1&gt;...&lt;/h1&gt;</strong> → It Creates a heading.</li>
          <li><strong>&lt;p&gt;...&lt;/p&gt;</strong> → It Creates paragaraph for text.</li>
          <li><strong>&lt;a&gt;...&lt;/a&gt;</strong> → It Creates a hyperlink..</li>
          <li><strong>&lt;img&gt;</strong> → It displays the image.</li>
          <li><strong>&lt;ul&gt; &lt;li&gt;</strong> → It shows the items of the list.</li>
        </ul>
      </div>
    </div>
  );
};

export default HTMLItems;