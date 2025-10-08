 import React from "react";
const CSSGridIntro = () => {
  const data = [
    {Property:'align-content', Description:'Vertically aligns the whole grid inside the container (when total grid size is smaller than container)'},
    {Property:'align-items', Description:'Aligns content in a grid item along the column axis'},
    {Property:'align-self', Description:'Aligns the content for a specific grid item along the column axis'},
    {Property:'display', Description:'Specifies the display behavior (the type of rendering box) of an element'},
    {Property:'column-gap', Description:'Specifies the gap between the columns'},
    {Property:'gap' , Description:'A shorthand property for the row-gap and the column-gap properties'},
    {Property:'grid', Description :'A shorthand property for the grid-template-rows, grid-template-columns, grid-template-areas, grid-auto-rows, grid-auto-columns, and the grid-auto-flow properties'},
    {Property:'grid-area', Description:'Either specifies a name for the grid item, or this property is a shorthand property for the grid-row-start, grid-column-start, grid-row-end, and grid-column-end properties'},
    {Property:'grid-auto-columns', Description:'Specifies a default column size'},
    {Property:'grid-auto-flow', Description:'Specifies how auto-placed items are inserted in the grid'},
    {Property:'grid-auto-rows', Description:'Specifies a default row size'},
    {Property:'grid-column', Description:'A shorthand property for the grid-column-start and the grid-column-end properties'},
    {Property:'grid-column-end', Description:'	Specifies where to end the grid item'},
    {Property:'grid-column-start', Description:'Specifies where to start the grid item'},
    {Property:'grid-row', Description:'A shorthand property for the grid-row-start and the grid-row-end properties'},
    {Property:'grid-row-end', Description:'Specifies where to end the grid item'},
    {Property:'grid-row-start', Description:'Specifies where to start the grid item'},
    {Property:'grid-template', Description:'A shorthand property for the grid-template-rows, grid-template-columns and grid-areas properties'},
    {Property:'grid-template-areas', Description:'Specifies how to display columns and rows, using named grid items'},
    {Property:'grid-template-columns', Description:'Specifies the size of the columns, and how many columns in a grid layout'},
    {Property:'grid-template-rows', Description:'Specifies the size of the rows in a grid layout'},
    {Property:'justify-content', Description:'Horizontally aligns the whole grid inside the container (when total grid size is smaller than container)'},
    {Property:'justify-self', Description:'Aligns the content for a specific grid item along the row axis'},
    {Property:'place-self', Description:'A shorthand property for the align-self and the justify-self properties'},
    {Property:'place-content', Description:'A shorthand property for the align-content and the justify-content properties'},
    {Property:'row-gap', Description:'Specifies the gap between the grid rows'},
    
  ];
  return (
    <div className="p-6 space-y-6">
      {/* Heading */}
      <h1 className="text-3xl font-medium text-blue-500">CSS Grid Introduction</h1>
      <p className="text-gray-700">CSS Grid is a powerful 2D layout system that works with both rows and columns. It provides more control than Flexbox for creating web page layouts.
      </p>
      <h1 className="text-2xl">CSS Grid Layout</h1>
      <p>CSS Grid Layout offers a two-dimensional layout system that lets developers easily arrange content in rows and columns, enabling responsive designs without traditional float or position techniques.</p>
      <p>Modern browsers provide full support for CSS grid layout features.</p>
      <h1 className="text-2xl">Grid vs. Flexbox</h1>
      <p>When working with two-dimensional page structures, CSS Grid is the most effective layout tool.</p>
     <p>Flexbox provides a one-dimensional layout model, allowing content to flow in either a row or a column.</p>

     <h1 className="text-2xl">CSS Grid Components</h1>
     <p>The basic components of a grid are:</p>
     <ul className="list-[square] list-inside">
      <li> <strong>Grid Container</strong> - the parent (container) {'<div>'} element</li>
      <li><strong>Grid Items</strong> - the items inside the container {'<div>'}</li>
     </ul>


     <h1 className="text-2xl">Grid Container and Grid Items</h1>
     <p>A grid layout has a parent container and one or more grid items inside it.</p>
     <p>All immediate children inside a grid container become grid items by default.</p>
     <h1 className="text-2xl">Example</h1>
     <pre className="text-green-400 bg-black rounded-lg p-4">
      {`<div class="container">
  <div>1</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
  <div>5</div>
  <div>6</div>
  <div>7</div>
  <div>8</div>
</div>`}
     </pre>

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
      

      <h1 className="text-2xl">Display Grid Property</h1>
     <p>A {'<div>'} becomes a grid container when display: grid or inline-grid is used.</p>
     <h1 className="text-2xl">Example</h1>
     <pre className="text-green-400 bg-black rounded-lg p-4">
      {`.container {
  display: grid;
}`}
     </pre>

     
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

        <h1 className="text-2xl">Example</h1>
        <pre className="text-green-400 bg-black rounded-lg p-4">
          {`.container {
  display: inline-grid;
}`}
        </pre>

              <div className="border-2 border-black p-4 inline-grid grid-cols-3 gap-3 mt-6">
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

        <h1 className="text-2xl">All CSS Grid Properties</h1>
        <table className="min-w-full border border-gray-300 text-gray-700 text-left text-sm rounded-md">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2 border-b border-gray-300 text-gray-700 font-bold">Property</th>
              <th className="px-4 py-2 border-b border-gray-300 text-gray-700 font-bold">Description</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row,index)=>(
              <tr className="cursor-text hover:bg-gray-100">
                <td className="px-4 py-2 border-b border-gray-200">{row.Property}</td>
                <td className="px-4 py-2 border-b border-gray-200">{row.Description}</td>
              </tr>
            ))}
          </tbody>
        </table>






















      {/* Explanation */}
      <div className="bg-green-100 p-3 border rounded">
        <h2 className="text-xl font-semibold text-gray-800 mb-5">Explanation</h2>
        <ul className="list-[square] list-inside text-gray-700 space-y-2">
          <li><code className="font-bold">display:grid;</code> → It turns the container into a grid.</li>
          <li>
            <code className="font-bold">grid-template-columns: repeat(3, 1fr);</code> → It creates 3 equal columns. 1fr means one equal part of the available <span className="ml-6">space</span>.         </li>
          <li>
            <code className="font-bold">gap: 10px;</code> → It adds spacing between the grid items.
          </li>
          <li>
            Grid is 2D: It can handle both rows and columns, whereas Flexbox mostly works in one direction (either row or column).
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CSSGridIntro;