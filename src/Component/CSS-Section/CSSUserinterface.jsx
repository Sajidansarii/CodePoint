import React from "react";

const CssUserInterface = () => {
  const data = [
    {Sr:'1', value:'appearance', Description:'Used to allow the user to make elements as user interface elements.'},
    {Sr:'2', value:'box-sizing', Description:'Allows to users to fix elements on area in clear way.'},
    {Sr:'3', value:'icon', Description:'Used to provide the icon on area.'},
    {Sr:'4', value:'resize', Description:'Used to resize elements which are on area.'},
    {Sr:'5', value:'outline-offset', Description:'Used to draw the behind the outline.'},
    {Sr:'6', value:'nav-down', Description:'Used to move down when you have pressed on down arrow button in keypad.'},
    {Sr:'7', value:'nav-left', Description:'Used to move left when you have pressed on left arrow button in keypad.'},
    {Sr:'8', value:'nav-right', Description:'Used to move right when you have pressed on right arrow button in keypad.'},
    {Sr:'9', value:'nav-up', Description:'Used to move up when you have pressed on up arrow button in keypad.'},
  ];
  return (
    <div className="p-8 min-h-screen space-y-6">
      <h1 className="text-3xl font-medium text-blue-500">CSS User Interface (UI) </h1>

      <p>
        CSS <strong>User Interface (UI)</strong> Properties are used to improve the interaction of elements. With them, we can control the cursor, resize behavior, and focus outlines.
      </p>
      <p>Some of the common properties which are using in css3 User interface.</p>
      <table className="min-w-full border border-gray-300 text-gray-700 rounded-md text-sm text-left">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2 font-bold text-gray-700 border-b border-gray-300">Sr.No</th>
            <th className="px-4 py-2 font-bold text-gray-700 border-b border-gray-300">Value</th>
            <th className="px-4 py-2 font-bold text-gray-700 border-b border-gray-300">Description</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row,index)=>(
            <tr className="cursor-text hover:bg-gray-100">
              <td className="px-4 py-2 border-b border-gray-200">{row.Sr}</td>
              <td className="px-4 py-2 border-b border-gray-200">{row.value}</td>
              <td className="px-4 py-2 border-b border-gray-200">{row.Description}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="bg-white p-6 rounded space-y-4">
        <h2 className="text-xl font-semibold">Resize Property</h2>
        <p>
          <code>resize</code> The property allows the user to drag and resize the element. It is mostly used with<span className="text-red-400 bg-gray-100 px-1">{'<textarea>'}</span>.
        </p>
        <pre className="bg-gray-900 text-green-300 p-3 rounded text-sm overflow-x-auto text-left">
{`textarea {
  resize: both;     
  overflow: auto;
}`}
        </pre>
        <textarea
          className="border border-gray-400 p-2 w-full h-24 resize"
          placeholder="Try resizing me..."
        ></textarea>
      </div>

      {/* 3. Outline-offset */}
      <div className="bg-white p-6 rounded space-y-4">
        <h2 className="text-xl font-semibold">Outline-offset Property</h2>
        <p>
          <code>outline-offset</code> The property creates space between the element’s outline and its border.
        </p>
        <pre className="bg-gray-900 text-green-300 p-3 rounded text-sm overflow-x-auto text-left">
{`input:focus {
  outline: 2px solid blue;
  outline-offset: 5px;
}`}
        </pre>
        <input
          type="text"
          placeholder="Click to focus"
          className="border border-gray-400 p-2 focus:outline focus:outline-blue-500 focus:outline-offset-4"
        />
      </div>

      {/* 4. Nav-index */}
      <div className="bg-white p-6 rounded space-y-4">
        <h2 className="text-xl font-semibold">Nav-index Property</h2>
        <p>
          <code>nav-index</code> The property sets the navigation order (using the Tab key). It is not supported in modern browsers but is still important to understand.
        </p>
        <pre className="bg-gray-900 text-green-300 p-3 rounded text-sm overflow-x-auto text-left">
{`a {
  nav-index: 1;
}`}
        </pre>
        <p>
           Note: This property is deprecated and does not work in modern browsers.
        </p>
      </div>
    </div>
  );
};

export default CssUserInterface;