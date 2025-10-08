import React from "react";

const ImageShapesTutorial = () => {
  const data = [
    {Function:'clip-path', Description:'Lets you clip an element to a basic shape or to an SVG source'},
    {Function:'shape-outside', Description:'Lets you define a shape for the wrapping of the inline content'},
    {Function:'circle()', Description:'	Defines a circle with a radius and a position'},
    {Function:'ellipse()', Description:'Defines an ellipse with two radii x and y'},
    {Function:'polygon()', Description:'Defines a polygon'},
  ];
  return (
    <div className="p-6 space-y-6">
      {/* Heading */}
      <h1 className="text-3xl font-medium text-blue-500">CSS Image Shapes</h1>
      <p>
        The <code className="bg-gray-200 px-1 rounded">shape-outside</code> property in CSS is used 
        to define custom shapes around which inline content (like text) will wrap.  
        It works only when the element is <b>floated</b> and has a defined size.
      </p>

      {/* Circle Shape */}
      <div>
        <h2 className="text-xl font-semibold text-gray-800">1. Circle Shape</h2>
        <div className="flex">
          <img
            src="https://cloudinary-marketing-res.cloudinary.com/image/upload/w_1300/q_auto/f_auto/hiking_dog_mountain"
            alt="Circle Shape"
            className="float-left mr-4 mb-2"
            style={{
              shapeOutside: "circle(50%)",
              clipPath: "circle(50%)",
              width: "150px",
              height: "150px",
              float: "left"
            }}
          />
          <p className="text-gray-700">
            This text wraps around the circular image.  
            The <code>circle(50%)</code> function makes the wrapping area circular.
          </p>
        </div>
        <pre className="bg-gray-900 text-green-400 p-3 rounded mt-2">
{`img {
  float: left;
  width: 150px;
  height: 150px;
  shape-outside: circle(50%);
  clip-path: circle(50%);
}`}
        </pre>
      </div>

      {/* Ellipse Shape */}
      <div>
        <h2 className="text-xl font-semibold text-gray-800">2. Ellipse Shape</h2>
        <div className="flex">
          <img
            src="https://cloudinary-marketing-res.cloudinary.com/image/upload/w_1300/q_auto/f_auto/hiking_dog_mountain"
            alt="Ellipse Shape"
            className="float-left mr-4 mb-2"
            style={{
              shapeOutside: "ellipse(50% 40%)",
              clipPath: "ellipse(50% 40%)",
              width: "160px",
              height: "120px",
              float: "left"
            }}
          />
          <p className="text-gray-700">
            This text wraps around an elliptical shape.  
            <code>ellipse(50% 40%)</code> creates an ellipse with horizontal and vertical radii.
          </p>
        </div>
        <pre className="bg-gray-900 text-green-400 p-3 rounded mt-2">
{`img {
  float: left;
  width: 160px;
  height: 120px;
  shape-outside: ellipse(50% 40%);
  clip-path: ellipse(50% 40%);
}`}
        </pre>
      </div>

      {/* Polygon Shape */}
      <div>
        <h2 className="text-xl font-semibold text-gray-800">3. Polygon Shape</h2>
        <div className="flex">
          <img
            src="https://cloudinary-marketing-res.cloudinary.com/image/upload/w_1300/q_auto/f_auto/hiking_dog_mountain"
            alt="Polygon Shape"
            className="float-left mr-4 mb-2"
            style={{
              shapeOutside: "polygon(0 0, 100% 0, 100% 100%, 50% 80%, 0 100%)",
              clipPath: "polygon(0 0, 100% 0, 100% 100%, 50% 80%, 0 100%)",
              width: "160px",
              height: "160px",
              float: "left"
            }}
          />
          <p className="text-gray-700">
            This text wraps around a custom polygon shape.  
            <code>polygon()</code> allows you to define multiple points to create complex wrapping areas.
          </p>
        </div>
        <pre className="bg-gray-900 text-green-400 p-3 rounded mt-2">
{`img {
  float: left;
  width: 160px;
  height: 160px;
  shape-outside: polygon(0 0, 100% 0, 100% 100%, 50% 80%, 0 100%);
  clip-path: polygon(0 0, 100% 0, 100% 100%, 50% 80%, 0 100%);
}`}
        </pre>
      </div>
      <h1 className="text-2xl">CSS Properties and Functions</h1>
      <p>Here is a table that lists the CSS properties and functions featured in this chapter:</p>

      <table className="min-w-full border border-gray-300 rounded-lg text-sm text-left">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2 border-b border-gray-300 text-gray-700 font-bold">Function</th>
            <th className="px-4 py-2 border-b border-gray-300 text-gray-700 font-bold">Description</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row,index)=>(
            <tr className="cursor-text hover:bg-gray-100">
              <td className="px-4 py-2 border-b border-gray-200">{row.Function}</td>
              <td className="px-4 py-2 border-b border-gray-200">{row.Description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ImageShapesTutorial;