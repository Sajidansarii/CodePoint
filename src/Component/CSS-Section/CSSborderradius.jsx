import React from "react";

const CSSBorderRadius = () => {
  const data = [
    {Property:'length', Description:'Defines the shape of the corners. Default value is 0. Read about length units'},
    {Property:'%', Description:'	Defines the shape of the corners in %'},
    {Property:'initial', Description:'	Sets this property to its default value. Read about initial'},
    {Property:'inherit', Description:'Inherits this property from its parent element. Read about inherit'},
  ];

  return (
    <div className="p-6 space-y-6">
      {/* Heading */}
      <h1 className="text-3xl font-medium text-blue-500">CSS Border-Radius</h1>
      <p> Using the CSS border-radius property, we can make the corners of elements        rounded. With its help, we can design circles, ovals, and rounded boxes.
      </p>

      {/* Example */}
      <div>
        <h2 className="text-2xl mb-3">Example: Border-Radius</h2>
        <p className="mb-4">In the examples given below, different border-radius values have been used.</p>

        <pre className="bg-gray-900 text-green-400 p-3 rounded mt-2 overflow-x-auto">
{`/* Simple rounded corners */
div {
  border: 2px solid black;
  border-radius: 15px;
}

/* Circle shape */
div {
  border: 2px solid black;
  border-radius: 50%;
}

/* Elliptical radius */
div {
  border: 2px solid black;
  border-radius: 50px 15px;
}`}
        </pre>

        {/* Live Demo */}
        <div className="grid grid-cols-3 gap-6 text-center mt-6">
          {/* Rounded Box */}
          <div className="w-28 h-28 border-2 border-black flex items-center justify-center rounded-[15px]">
            15px
          </div>

          {/* Circle */}
          <div className="w-28 h-28 border-2 border-black flex items-center justify-center rounded-full">
            Circle
          </div>

          {/* Elliptical */}
          <div
            className="w-28 h-28 mb-10 border-2 border-black flex items-center justify-center"
            style={{ borderRadius: "50px 15px" }}
          >
            Elliptical
          </div>
        </div>
      </div>

      <h1 className="text-2xl">CSS Syntax</h1>
      <p className="border border-gray-500 p-3"> border-radius: 1-4 length|% / 1-4 length|%|initial|inherit;</p>
      <p>The border-radius property accepts up to four values, applied in the order: top-left, top-right, bottom-right, bottom-left.If fewer than four values are provided:</p>
      <ul className="list-[square] list-inside">
        <li>Three values: the fourth (bottom-left) is equal to the second (top-right).</li>
        <li>Two values: the third (bottom-right) equals the first (top-left), and the fourth equals the second.</li>
        <li>One value: all corners are the same.</li>
      </ul>
      <h1 className="text-2xl">Property Values</h1>
      <table className="min-w-full border border-gray-300 text-gray-700 font-bold rounded-md text-sm text-left">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2 border-b border-gray-200 font-bold">Property</th>
            <th className="px-4 py-2 border-b border-gray-200 font-bold">Description</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row,index)=>(
            <tr className="cursor-text hover:bg-gray-100">
              <td className="px-4 py-2 border-b border-gray-200 font-bold">{row.Property}</td>
              <td className="px-4 py-2 border-b border-gray-200 font-bold">{row.Description}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h1 className="text-2xl">Example</h1>
      <p>Create an element with a background color and smooth, rounded corners.</p>
      <pre className="text-green-400 bg-black rounded-lg p-4">
        {`#rcorners1 {
  border-radius: 25px;
  background: #73AD21;
  padding: 20px;
  width: 200px;
  height: 150px;
}`}
      </pre>

      <h1 className="text-2xl">Example</h1>
      <p>Create an element with smooth, curved corners and a visible border.</p>
      <pre className="text-green-400 bg-black rounded-lg p-4">
        {`#rcorners2 {
  border-radius: 25px;
  border: 2px solid #73AD21;
  padding: 20px;
  width: 200px;
  height: 150px;
}
`}
      </pre>

      <h1 className="text-2xl">Example</h1>
      <p>Create an element with a background image and apply corner rounding.</p>
      <pre className="text-green-400 bg-black rounded-lg p-4">
        {`#rcorners3 {
  border-radius: 25px;
  background: url(paper.gif);
  background-position: left top;
  background-repeat: repeat;
  padding: 20px;
  width: 200px;
  height: 150px;
}`}
      </pre>


      {/* Explanation */}
      <div className="bg-green-100 p-3 border">
        <h2 className="text-2xl mb-4">Explanation</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>
            <code>border-radius: 15px;</code> → It will round each corner by 15px.
          </li>
          <li>
            <code>border-radius: 50%;</code> → It will convert the square element into a circle.x
          </li>
          <li>
            <code>border-radius: 50px 15px;</code> → It will set different rounding on each corner (top-left 50px, top-right 15px, etc.).
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CSSBorderRadius;