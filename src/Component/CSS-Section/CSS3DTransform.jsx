import React from "react";

const Css3DAnimation = () => {
  const data = [
    {Property:'transform', Description:'Applies a 2D or 3D transformation to an element'},
    {Property:'transform-origin', Description:'Allows you to change the position on transformed elements'},
    {Property:'transform-style', Description:'Specifies how nested elements are rendered in 3D space',},
    {Property:'perspective', Description:'Specifies the perspective on how 3D elements are viewed'},
    {Property:'perspective-origin', Description:'Specifies the bottom position of 3D elements'},
    {Property:'backface-visibility', Description:'Defines whether or not an element should be visible when not facing the screen'},
  ];

  const data2 = [
    {Function:'matrix3d()', Description:'Defines a 3D transformation, using a 4x4 matrix of 16 values'},
    {Function:'translate3d()', Description:'Defines a 3D translation'},
    {Function:'translateZ()', Description:'Defines a 3D translation, using only the value for the Z-axis'},
    {Function:'scale3d()', Description:'Defines a 3D scale transformation'},
    {Function:'scaleZ()', Description:'Defines a 3D scale transformation by giving a value for the Z-axis'},
    {Function:'rotate3d()', Description:'Defines a 3D rotation'},
    {Function:'rotateX()', Description:'Defines a 3D rotation along the X-axis'},
    {Function:'rotateY()', Description:'Defines a 3D rotation along the Y-axis'},
    {Function:'rotateZ()', Description:'Defines a 3D rotation along the Z-axis'},
    {Function:'perspective()', Description:'Defines a perspective view for a 3D transformed element'},
  ];
  return (
    <div className="p-8 min-h-screen space-y-6">
      <h1 className="text-3xl font-medium text-blue-500">
        CSS 3D Animation
      </h1>

      <p>
       CSS's transform property enables geometric transformations such as rotation, scaling, translation, and skewing. These can be applied in both two-dimensional and three-dimensional contexts.
      </p>
      <p>Hover your mouse over each item below to compare how 2D and 3D transformations affect element behavior in CSS.</p>

      
      <div className="bg-white p-6 rounded space-y-4">
        <div className="flex justify-center mt-6">
          <div className="scene">
            <div className="cube animate-[spin_6s_linear_infinite]">
              <div className="face front bg-blue-500/70 flex items-center justify-center text-white font-bold">
                Front
              </div>
              <div className="face back bg-red-500/70 flex items-center justify-center text-white font-bold">
                Back
              </div>
              <div className="face right bg-green-500/70 flex items-center justify-center text-white font-bold">
                Right
              </div>
              <div className="face left bg-yellow-500/70 flex items-center justify-center text-white font-bold">
                Left
              </div>
              <div className="face top bg-purple-500/70 flex items-center justify-center text-white font-bold">
                Top
              </div>
              <div className="face bottom bg-pink-500/70 flex items-center justify-center text-white font-bold">
                Bottom
              </div>
            </div>
          </div>
        </div>
      </div>
      <h1 className="text-2xl">CSS 3D Transforms Functions</h1>
      <p>Use the following 3D transformation functions with the CSS transform property to create depth and perspective effects:</p>
      <ul className="list-[square] list-inside">
        <li><span className="text-red-400 bg-gray-100 px-1">rotateX()</span></li>
        <li><span className="text-red-400 bg-gray-100 px-1">rotateY()</span></li>
        <li><span className="text-red-400 bg-gray-100 px-1">rotateZ()</span></li>
      </ul>

      <h1 className="text-2xl">The CSS rotateX() Function</h1>
      <p>The rotateX() function rotates an element around its X-axis at a given degree:</p>
      <h1 className="text-2xl">Example</h1>
      <pre className="bg-gray-300 rounded-lg p-4">
        {`#myDiv {
  transform: rotateX(150deg);
}`}
      </pre>
      <h1 className="text-2xl">The CSS rotateY() Function</h1>
      <p>The CSS rotateY() function applies a 3D rotation to an element around the Y-axis, which runs vertically through the element.</p>
      <h1 className="text-2xl">Example</h1>
      <pre className="bg-gray-300 rounded-lg p-4">
        {`#myDiv {
  transform: rotateY(150deg);
}`}
      </pre>

      <h1 className="text-2xl">The CSS rotateZ() Function</h1>
      <p>The CSS rotateZ() function applies a rotation around the Z-axis, which is perpendicular to the screen, creating a flat, 2D spin.</p>
      <h1 className="text-2xl">Example</h1>
      <pre className="bg-gray-300 rounded-lg p-4">
        {`#myDiv {
  transform: rotateZ(90deg);
}
`}
      </pre>

      <h1 className="text-2xl">CSS Transform Properties</h1>
      <p>Here's a table of all available 3D transform properties in CSS:</p>
      <table className="min-w-full border border-gray-300 rounded-md text-sm text-left">
        <thead>
          <tr className="bg-gray-100">
            <th className="font-bold text-gray-700 border-b border-gray-300 px-4 py-2">Property</th>
            <th className="font-bold text-gray-700 border-b border-gray-300 px-4 py-2">Description</th>
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

      <h1 className="text-2xl">CSS 3D Transform Functions</h1>
      <table className="min-w-full  border border-gray-300 rounded-md text-left text-sm">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2  border-b border-gray-300 text-gray-700 font-bold">Function</th>
            <th className="px-4 py-2  border-b border-gray-300 text-gray-700 font-bold">Description</th>
          </tr>
        </thead>
        <tbody>
          {data2.map((row,index)=>(
           <tr className="cursor-text hover:bg-gray-100">
            <td className="px-4 py-2 border-b border-gray-200">{row.Function}</td>
            <td className="px-4 py-2 border-b border-gray-200">{row.Description}</td>
          </tr>
          ))}
        </tbody>
      </table>





      {/* Explanation */}
      <div className="bg-white p-6 rounded shadow">
        <h2 className="text-xl font-semibold">📝 Explanation</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2 text-left">
          <li>
            <strong>perspective</strong> → It creates an illusion of depth.
          </li>
          <li>
            <strong>transform-style: preserve-3d</strong> → It pushes the element inward or outward from the center of the cube.
          </li>
          <li>
            <strong>translateZ()</strong> → It displaces the element along the axis, toward or away from the cube's center.
          </li>
          <li>
            <strong>@keyframes spin</strong> → It continuously rotates the cube.
          </li>
          <li>
            <strong>animation: spin 6s infinite linear;</strong> → It makes the cube rotate smoothly and infinitely.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Css3DAnimation;