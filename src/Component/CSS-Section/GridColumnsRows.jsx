import React from "react";

const CSSGridColumnsRows = () => {
  const data = [
    {Property:'display', Description:'Specifies the display behavior (the type of rendering box) of an element'},
    {Property:'column-gap', Description:'Specifies the gap between the columns'},
    {Property:'gap', Description:'A shorthand property for the row-gap and the column-gap properties'},
    {Property:'row-gap', Description:'Specifies the gap between the grid rows'},
  ];
  return (
    <div className="p-6 space-y-6">
      {/* Heading */}
      <h1 className="text-3xl font-medium text-blue-500">
        CSS Grid: Columns and Rows
      </h1>
      <p>
        In CSS Grid, we can define columns and rows using grid-template-columns and grid-template-rows. This is very powerful for creating web layouts.
      </p>

      {/* Example Code */}
      <div>
        <h2 className="text-2xl">
           Defining Grid Columns 
        </h2>
        <p className="mt-3">Vertical lines in a grid are known as columns.</p>

       

        {/* Live Demo */}
        <div className="border-2 w-80 border-black p-4 grid grid-cols-[100px_100px] justify-center gap-3 mt-6">
          <div className="bg-blue-500 text-white font-bold p-6 text-center">1</div>
          <div className="bg-green-500 text-white font-bold p-6 text-center">2</div>
          <div className="bg-purple-500 text-white font-bold p-6 text-center">3</div>
          <div className="bg-pink-500 text-white font-bold p-6 text-center">4</div>
          <div className="bg-violet-500 text-white font-bold p-6 text-center">5</div>
          <div className="bg-gray-500 text-white font-bold p-6 text-center">6</div>
        </div>

      <h1 className="text-2xl mt-14">Grid Rows</h1>
      <p className="mt-3 mb-5">Horizontal lines in a grid are called rows.</p>
      <div className=" border-2 border-black p-4 grid-rows">
      <div className="bg-red-500 text-white font-bold p-6 text-center mb-5"> 5</div>
     <div className="bg-yellow-500 text-white font-bold p-6 text-center">6</div>
      </div>

      <h1 className="text-2xl mt-10">Grid Gaps</h1>
      <p className="mt-2">The space between columns and rows is called a gap.</p>
      <p>Set grid spacing using any of the following:</p>
      <ul className="list-[square] list-inside mt-2">
        <li><span className="text-red-400 bg-gray-50 px-1">column-gap</span></li>
        <li><span className="text-red-400 bg-gray-50 px-1">row-gap</span></li>
        <li><span className="text-red-400 bg-gray-50 px-1">gap</span></li>
      </ul>

      <h1 className="text-2xl mt-10 mb-2">The CSS column-gap Property</h1>
      <p>column-gap adjusts the gap between columns.</p>
      <h1 className="text-2xl mt-5 mb-3">Example</h1>
      <p>Set a 50px gap between grid columns:</p>
      <pre className="text-green-400 bg-gray-900 rounded-lg p-4 mt-5">
        {`.container {
  display: grid;
  column-gap: 50px;
}`}
      </pre>

      <div className="border-2 border-black p-4 grid grid-cols-[100px_100px_100px] justify-center gap-3 mt-10">
         <div className="bg-blue-500 text-white font-bold p-6 text-center">1</div>
         <div className="bg-blue-500 text-white font-bold p-6 text-center">2</div>
         <div className="bg-blue-500 text-white font-bold p-6 text-center">3</div>
         <div className="bg-blue-500 text-white font-bold p-6 text-center">4</div>
         <div className="bg-blue-500 text-white font-bold p-6 text-center">5</div>
         <div className="bg-blue-500 text-white font-bold p-6 text-center">6</div>
         <div className="bg-blue-500 text-white font-bold p-6 text-center">7</div>
         <div className="bg-blue-500 text-white font-bold p-6 text-center">8</div>
      </div>

      <h1 className="text-2xl mt-10 mb-2">The CSS row-gap Property</h1>
      <p>row-gap sets the space between grid rows.</p>
      <h1 className="text-2xl mt-5 mb-3">Example</h1>
      <p>Set a 50px gap between grid rows.</p>
      <pre className="text-green-400 bg-gray-900 rounded-lg p-4 mt-5">
        {`.container {
  display: grid;
  row-gap: 50px;
}`}
      </pre>

      <div className="border-2 h-96 pb-14 border-black p-4 grid grid-cols-[100px_100px_100px] justify-center gap-y-[20%] mt-10">
         <div className="bg-blue-500  border-2 border-black text-white font-bold p-6 text-center">1</div>
         <div className="bg-blue-500  border-2 border-black text-white font-bold p-6 text-center">2</div>
         <div className="bg-blue-500  border-2 border-black text-white font-bold p-6 text-center">3</div>
         <div className="bg-blue-500  border-2 border-black text-white font-bold p-6 text-center">4</div>
         <div className="bg-blue-500  border-2 border-black text-white font-bold p-6 text-center">5</div>
         <div className="bg-blue-500  border-2 border-black text-white font-bold p-6 text-center">6</div>
         <div className="bg-blue-500  border-2 border-black text-white font-bold p-6 text-center">7</div>
         <div className="bg-blue-500  border-2 border-black text-white font-bold p-6 text-center">8</div>
      </div>

      <h1 className="text-2xl mt-10 mb-2">The CSS gap Property</h1>
      <p>Use gap to set both row and column spacing.</p>
      <h1 className="text-2xl mt-5 mb-3">Example</h1>
      <p>Set row-gap to 50px and column-gap to 100px.</p>
      <pre className="text-green-400 bg-gray-900 rounded-lg p-4 mt-5">
        {`.container {
  display: grid;
  gap: 50px 100px;
}`}
      </pre>
      <div className="border-2 h-96 pb-14 border-black p-4 grid grid-cols-[100px_100px_100px] justify-center gap-[50px_100px] mt-10">
         <div className="bg-blue-500   text-white font-bold p-6 text-center">1</div>
         <div className="bg-blue-500   text-white font-bold p-6 text-center">2</div>
         <div className="bg-blue-500   text-white font-bold p-6 text-center">3</div>
         <div className="bg-blue-500   text-white font-bold p-6 text-center">4</div>
         <div className="bg-blue-500   text-white font-bold p-6 text-center">5</div>
         <div className="bg-blue-500   text-white font-bold p-6 text-center">6</div>
         <div className="bg-blue-500   text-white font-bold p-6 text-center">7</div>
         <div className="bg-blue-500   text-white font-bold p-6 text-center">8</div>
      </div>

      <h1 className="text-2xl mt-10 mb-2">Example</h1>
      <p>Set gap to 50px for both rows and columns.</p>
      <pre className="text-green-400 bg-gray-900 rounded-lg p-4 mt-5">
        {`.container {
  display: grid;
  gap: 50px;
}`}
      </pre>

            <div className="border-2 h-96 pb-14 border-black p-4 grid grid-cols-[100px_100px_100px] justify-center gap-[50px] mt-10">
         <div className="bg-blue-500   text-white font-bold p-6 text-center">1</div>
         <div className="bg-blue-500   text-white font-bold p-6 text-center">2</div>
         <div className="bg-blue-500   text-white font-bold p-6 text-center">3</div>
         <div className="bg-blue-500   text-white font-bold p-6 text-center">4</div>
         <div className="bg-blue-500   text-white font-bold p-6 text-center">5</div>
         <div className="bg-blue-500   text-white font-bold p-6 text-center">6</div>
         <div className="bg-blue-500   text-white font-bold p-6 text-center">7</div>
         <div className="bg-blue-500   text-white font-bold p-6 text-center">8</div>
      </div>

      <h1 className="text-2xl mt-20 mb-5">All CSS Grid Column, Row and Gap Properties</h1>
      <table className="min-w-full border border-gray-300 text-gray-700 text-sm text-left rounded-lg">
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
      <div className="bg-green-100 p-3">
        <h2 className="text-xl font-semibold text-gray-800 mb-5">Explanation</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>
            <code className="font-bold">grid-template-columns: 100px 200px auto;</code> → 
           First column's width is 100px, the second is 200px, and the third is auto (will take up the remaining space).
          </li>
          <li>
            <code className="font-bold">grid-template-rows: 80px 120px;</code> → The first row's height is 80px and the second is 120px.
          </li>
          <li>
            <code className="font-bold">gap: 10px;</code> → Sets the spacing between columns and rows.
          </li>
          <li>
           You can also use the fractional unit (fr) to create a responsive layout.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CSSGridColumnsRows;