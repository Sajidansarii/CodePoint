import React from "react";

const CSSGridContainer = () => {
  const data = [
    {Property:'align-content', Description:' Vertically aligns the whole grid inside the container (when total grid size is smaller than container)'},
    {Property:'align-items', Description:'	Aligns content in a grid item along the column axis'},
    {Property:'display', Description:'Specifies the display behavior (the type of rendering box) of an element'},
    {Property:'column-gap', Description:'	Specifies the gap between the columns'},
    {Property:'gap', Description:'A shorthand property for the row-gap and the column-gap properties'},
    {Property:'grid', Description:'A shorthand property for the grid-template-rows, grid-template-columns, grid-template-areas, grid-auto-rows, grid-auto-columns, and the grid-auto-flow properties'},
    {Property:'grid-auto-columns', Description:'Specifies a default column size'},
    {Property:'grid-auto-flow', Description:'Specifies how auto-placed items are inserted in the grid'},
    {Property:'grid-auto-rows', Description:'Specifies a default row size'},
    {Property:'grid-template', Description:'A shorthand property for the grid-template-rows, grid-template-columns and grid-areas properties'},
    {Property:'grid-template-areas', Description:'Specifies how to display columns and rows, using named grid items'},
    {Property:'grid-template-columns', Description:'Specifies the size of the columns, and how many columns in a grid layout'},
    {Property:'grid-template-rows', Description:'Specifies the size of the rows in a grid layout'},
    {Property:'justify-content', Description:'Horizontally aligns the whole grid inside the container (when total grid size is smaller than container)'},
    {Property:'place-content', Description:'A shorthand property for the align-content and the justify-content properties'},
    {Property:'row-gap', Description:'Specifies the gap between the grid rows'},
  ];
  return (
    <div className="p-6 space-y-6">
      {/* Heading */}
      <h1 className="text-3xl font-medium text-blue-500">CSS Grid: Container</h1>
      <p className="text-gray-700">
        To start with a CSS Grid layout, the first step is to create a Grid Container. For this, we use the display: grid; property. All the grid items are arranged inside this container.
      </p>

      {/* Example Code */}
      <div>
        <h2 className="text-2xl mb-4">
           Creating a Grid Container
        </h2>
        <p>A grid container organizes one or more grid items in a two-dimensional structure of rows and columns. Its direct children are automatically considered grid items.</p>
        <p className="mt-2">Set <span className="text-red-400 bg-gray-50 px-1">display</span>: <span className="text-red-400 bg-gray-50 px-1">grid</span> or <span className="text-red-400 bg-gray-50 px-1">inline-grid</span> to make an element a grid container.</p>

        <h1 className="text-2xl mt-10 mb-4">CSS Grid Tracks</h1>
        <p>Grid structure is defined using <span className="text-red-400 bg-gray-50 px-1">grid-template-rows</span> and <span className="text-red-400 bg-gray-50 px-1">grid-template-columns</span>, or by applying the shorthand grid or grid-template.</p>
        <p>These properties define grid tracks—the spaces between two grid lines.</p>

        <h1 className="text-2xl mt-10 mb-4">CSS grid-template-columns Property</h1>
        <p><span className="text-red-400 bg-gray-50 px-1">grid-template-columns</span> sets how many columns there are and their widths.</p>
         <p>Each space-separated value sets a column’s width.</p>
         <p className="mt-2">To create 4 columns, set their widths—or use auto for equal widths.</p>
         <h1 className="text-2xl mt-10 mb-2">Example</h1>
         <p className="mb-2">Set <span className="text-red-400 bg-gray-50 px-1">grid-template-columns</span> to make 4 equal columns.</p>
        <pre className="text-green-400 bg-gray-900 p-4 rounded-lg">
          {`.grid-container {
  display: grid;
  grid-template-columns: auto auto auto auto;
}`}
        </pre>

        <div className="border-2 border-black p-4 grid grid-cols-4 gap-3 mt-6">
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
        <div className="bg-green-800 text-white font-bold p-6 text-center">
            7
          </div>
         <div className="bg-orange-500 text-white font-bold p-6 text-center">
            8
          </div>
        </div>

        <p className="mt-5 mb-5"><span className="text-red-400 bg-gray-50 px-1">grid-template-columns</span> lets you set exact widths or mix fixed and auto sizes.</p>
        <h1 className="text-2xl mb-2">Example</h1>
        <p className="mb-5">Set columns 1, 2, and 4 to fixed widths; keep column 3 as auto.</p>
        <pre className="text-green-400 bg-gray-900 p-4 rounded-lg">
          {`.grid-container {
  display: grid;
  grid-template-columns: 80px 200px auto 40px;
}`}
        </pre>

        <div className="border-2 border-black p-4 grid grid-cols-[80px_200px_auto_40px] gap-3 mt-6">
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
        <div className="bg-green-800 text-white font-bold p-6 text-center">
            7
          </div>
         <div className="bg-orange-500 text-white font-bold p-6 text-center">
            8
          </div>
        </div>

        <h1 className="text-2xl mt-10 mb-2">Cell Sizing with the fr Unit</h1>
        <p className="mb-3"><span className="text-red-400 bg-gray-50 px-1">fr</span> is a CSS unit used in grids, just like <span className="text-red-400 bg-gray-50 px-1">px</span> or <span className="text-red-400 bg-gray-50 px-1">%</span>.</p>
        <p className="mb-3"><span className="text-red-400 bg-gray-50 px-1">fr</span> stands for “fraction” and splits space automatically.</p>
         <p className="mb-5"><span className="text-red-400 bg-gray-50 px-1">1fr</span> is one unit of space, 2fr is double that.</p>
        <h1 className="text-2xl mt-5 mb-4">Example</h1>
        <p>Columns share the width equally—25% each.</p>
        <pre className="text-green-400 bg-gray-900 p-4 rounded-lg mt-5">
          {`.grid-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
}`}
        </pre>

        <div className="border-2 border-black p-4 grid grid-cols-4 gap-3 mt-6">
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
        <div className="bg-green-800 text-white font-bold p-6 text-center">
            7
          </div>
         <div className="bg-orange-500 text-white font-bold p-6 text-center">
            8
          </div>
        </div>

        <h1 className="text-2xl mt-10 mb-3">Example</h1>
        <p>Column 2 takes up double the space.</p>
        <pre className="text-green-400 bg-gray-900 p-4 rounded-lg mt-5">
          {`.grid-container {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr 1fr;
}`}
        </pre>

        <div className="border-2 border-black p-4 grid grid-cols-[1fr_2fr_1fr_1fr] gap-3 mt-6">
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
        <div className="bg-green-800 text-white font-bold p-6 text-center">
            7
          </div>
         <div className="bg-orange-500 text-white font-bold p-6 text-center">
            8
          </div>
        </div>

        <h1 className="text-2xl mt-10 mb-3"> CSS place-content Property</h1>
        <p>Use <span className="text-red-400 bg-gray-50 px-1">place-content</span> to control alignment in both directions — <span className="text-red-400 bg-gray-50 px-1">vertical</span> and <span className="text-red-400 bg-gray-50 px-1">horizontal</span>.</p>
        <p className="mt-3">When two values are specified for place-content, they are assigned to <span className="text-red-400 bg-gray-50 px-1">align-content</span> (first) and <span className="text-red-400 bg-gray-50 px-1">justify-content</span> (second), respectively.</p>
        <p className="mt-4"><span className="text-red-400 bg-gray-50 px-1">place-content: start center;</span> - the <span className="text-red-400 bg-gray-50 px-1">align-content</span> value is 'start' and <span className="text-red-400 bg-gray-50 px-1">justify-content</span> value is 'center'</p>
        <p>With one value, <span className="text-red-400 bg-gray-50 px-1">place-content</span> assigns it to both <span className="text-red-400 bg-gray-50 px-1">align-content</span> and <span className="text-tred-400 bg-gray-50 px-1">justify-content</span>.</p>
       <p><span className="text-red-400 bg-gray-50 px-1">place-content: end;</span> sets both <span className="text-red-400 bg-gray-50 px-1">place-content: end;</span> and <span className="text-red-400 bg-gray-50 px-1">justify-content</span> to end.</p>
        <h1 className="text-2xl mt-10">Example</h1>
        <p className="mt-3">center places grid items in the middle of the container both vertically and horizontally.</p>
        <pre className="text-green-400 bg-gray-900 p-4 rounded-lg mt-6">
          {`.grid-container {
  display: grid;
  height: 400px;
  place-content: center;
}`}
        </pre>

        <div className="border-2 justify-self-center border-black p-4 grid grid-cols-3 h-[400px] gap-2 mt-6 place-content-center ">
          <div className="bg-blue-500  text-white font-bold p-6 text-center">
            1
          </div>
          <div className="bg-green-500  text-white font-bold p-6 text-center">
            2
          </div>
          <div className="bg-red-500  text-white font-bold p-6 text-center">
            3
          </div>
          <div className="bg-purple-500  text-white font-bold p-6 text-center">
            4
          </div>
          <div className="bg-pink-500  text-white font-bold p-6 text-center">
            5
          </div>
          <div className="bg-yellow-500  text-white font-bold p-6 text-center">
            6
          </div>
        <div className="bg-green-800  text-white font-bold p-6 text-center">
            7
          </div>
         <div className="bg-orange-500 text-white font-bold p-6 text-center">
            8
          </div>
        </div>
       

       <h1 className="text-2xl mt-10">Example</h1>
       <p className="mt-3">end aligns content to the bottom vertically, while space-between spreads items evenly across the row with equal gaps between them.</p>
       <pre className="text-green-400 bg-gray-900 p-4 rounded-lg mt-5">
        {`.grid-container {
  display: grid;
  height: 400px;
  place-content: end space-between;
}`}
       </pre>

       
        <div className="border-2 border-black h-[400px] p-4 grid grid-cols-3 place-content-end 
        place-items-between gap-3 mt-6">
          <div className="bg-blue-500 w-20 text-white font-bold p-6 text-center">
            1
          </div>
          <div className="bg-green-500 w-20 text-white font-bold p-6 text-center">
            2
          </div>
          <div className="bg-red-500 w-20 text-white font-bold p-6 text-center">
            3
          </div>
          <div className="bg-purple-500 w-20 text-white font-bold p-6 text-center">
            4
          </div>
          <div className="bg-pink-500 w-20 text-white font-bold p-6 text-center">
            5
          </div>
          <div className="bg-yellow-500 w-20 text-white font-bold p-6 text-center">
            6
          </div>
        <div className="bg-green-800 w-20 text-white font-bold p-6 text-center">
            7
          </div>
         <div className="bg-orange-500 w-20 text-white font-bold p-6 text-center">
            8
          </div>
        </div>

        <table className="min-w-full border border-gray-300 text-gray-700 text-sm text-left rounded-md mt-6">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2 border-b border-gray-300 text-gray-700 font-bold">Property</th>
              <th className="px-4 py-2 border-b border-gray-300 text-gray-700 font-bold">Description</th>
            </tr>
          </thead>
          {data.map((row,index)=>(
            <tr className="cursor-text hover:bg-gray-100">
              <td className="px-4 py-2 border-b border-gray-200">{row.Property}</td>
              <td className="px-4 py-2 border-b border-gray-200">{row.Description}</td>
            </tr>
          ))}
        </table>
      </div>

      {/* Explanation */}
      <div>
        <h2 className="text-xl font-semibold text-gray-800">Explanation</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>
            <strong>display: grid;</strong> → Container creates a grid layout.
          </li>
          <li>
            <strong>grid-template-columns: auto auto auto;</strong> → It creates three equal-width columns.
          </li>
          <li>
            <strong>gap: 10px;</strong> → It adds space between the rows and columns.
          </li>
          <li>All direct child elements automatically become grid items. </li>
        </ul>
      </div>
    </div>
  );
};

export default CSSGridContainer;