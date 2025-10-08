import React from "react";

const Css2DTransforms = () => {
  const data = [
    {Property:'transform', 	Description:'	Applies a 2D or 3D transformation to an element'},
    {Property:'transform-origin', Description:'Allows you to change the position on transformed elements'},
  ];

  const data2 = [
    {Function:'translate()' , Description:'CSS translate() function translates an element along the X and Y axes.'},
    {Funstion:'rotate()', Description:'CSS rotate() function rotates an element around a point in 2D space.'},
    {Function:'scale()', Description:'CSS scale() function scales an element along the X and Y axes.'},
    {Function:'skew()', Description:'CSS skew() function skews an element along the X and Y axes.'},
    {Funstion:'transform()', Description:'CSS transform() function applies a 2D or 3D transformation to an element.'},
  ];
  return (
    <div className="p-8 min-h-screen space-y-6">
      {/* Title */}
      <h1 className="text-3xl font-medium text-blue-500">
        CSS 2D Transforms
      </h1>

      {/* Intro */}
      <p className="max-w-3xl">CSS transform properties enable the alteration of an element’s dimensions and orientation in two-dimensional space. Functions such as translate(), scale(), rotate(), and skew() facilitate positional shifts, scaling, rotation, and skewing along the X and Y axes, allowing for complex visual modifications.
      </p>

      
        <div className="flex ">
          <div className="w-24 h-24 bg-red-500 transform translate-x-12 translate-y-8 
          transition-transform duration-700  hover:translate-y-16 hover:scale-110
           hover:bg-blue-500"></div>
          <div className="w-24 h-24 ml-80 mt-10 bg-teal-500 hover:rotate-180 transition-transform duration-700"></div>
        </div>

        <h1 className="text-2xl">CSS 2D Transforms Functions</h1>
        <p>To transform elements in 2D, you can use the CSS transform property along with these functions:</p>
        <ul className="list-[square] list-inside">
          <li><span className="bg-gray-100 px-2 text-red-400">translate()</span></li>
          <li><span className="bg-gray-100 px-2 text-red-400">rotate()</span></li>
          <li><span className="bg-gray-100 px-2 text-red-400">scale()</span></li>
          <li><span className="bg-gray-100 px-2 text-red-400">scaleX()</span></li>
          <li><span className="bg-gray-100 px-2 text-red-400">scaleY()</span></li>
          <li><span className="bg-gray-100 px-2 text-red-400">skew()</span></li>
          <li><span className="bg-gray-100 px-2 text-red-400">skewX()</span></li>
          <li><span className="bg-gray-100 px-2 text-red-400">skewY()</span></li>
          <li><span className="bg-gray-100 px-2 text-red-400">metrix()</span></li>
        </ul>

      <h1 className="txet-2xl">CSS 2D Translate</h1>
      <p>The translate() function in CSS repositions an element by moving it along both the X (horizontal) and Y (vertical) axes.</p>

      <h1 className="text-2xl">Example</h1>
      <p>In the following example, a box transitions along the X and Y axes when hovered over.</p>
        <pre className="bg-gray-200 p-3 h-80 rounded text-sm overflow-x-auto">
{`<!DOCTYPE html>
<html lang="en">
<head>
    <style>
        body {
            height: 300px;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: #f0f0f0;
            font-family: Arial, sans-serif;
        }

        /* The Box Element */
        .box {
            width: 200px;
            height: 200px;
            background-color: #4CAF50;
            color: white;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 1.5em;
            border-radius: 10px;
            /* Initial 2D Translation */
            transform: translate(50px, 50px);
            transition: transform 0.6s ease;
        }

        /* Hover State with Different 2D Translation */
        .box:hover {
            transform: translate(-50px, -50px);
            background-color: #2ecc71;
            cursor: pointer;
        }
    </style>
</head>

<body>
    <div class="box">
        2D Box
    </div>
</body>

</html>   `}
        </pre>
      

        <h2 className="text-xl font-semibold">CSS 2D rotate</h2>
        <p className="text-gray-700">The rotate() function in CSS applies a rotational transformation to an element around a defined point in two-dimensional space.
        </p>
        <h1 className="text-2xl">Example</h1>
        <p>The example below demonstrates a box that rotates on hover, producing a visually engaging effect.</p>

        <pre className="bg-gray-200 p-3 h-80 rounded text-sm overflow-x-auto">
{`<!DOCTYPE html>
<html lang="en">
<head>
    <style>
        body {
            height: 300px;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: #f0f0f0;
            font-family: Arial, sans-serif;
        }

        /* The Box Element */
        .box {
            width: 200px;
            height: 200px;
            background-color: #4CAF50;
            color: white;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 1.5em;
            border-radius: 10px;
            /* Initial 2D Rotation */
            transform: rotate(15deg);
            transition: transform 0.6s ease;
        }

        /* Hover State with Different 2D Rotation */
        .box:hover {
            transform: rotate(-15deg);
            background-color: #2ecc71;
            cursor: pointer;
        }
    </style>
</head>

<body>
    <div class="box">
        2D Box
    </div>
</body>

</html>   `}
        </pre>


        <h2 className="text-xl font-semibold">CSS 2D Scale</h2>
        <p className="text-gray-700">Using scale() in CSS, you can enlarge or reduce an element’s width and height along the horizontal and vertical axes.
        </p>
        <h1 className="text-2xl">Example</h1>
        <p>When hovered over, the box in this example enlarges and shrinks, giving the appearance of a zoom in/out effect.</p>
        <pre className="bg-gray-200  p-3 h-80 rounded text-sm overflow-x-auto">
{`<!DOCTYPE html>
<html lang="en">
<head>
    <style>
        body {
            height: 300px;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: #f0f0f0;
            font-family: Arial, sans-serif;
        }

        /* The Box Element */
        .box {
            width: 150px;
            height: 150px;
            background-color: #4CAF50;
            color: white;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 1.5em;
            border-radius: 10px;
            /* Initial 2D Scaling */
            transform: scale(1);
            transition: transform 0.6s ease;
        }

        /* Hover State with Different 2D Scaling */
        .box:hover {
            transform: scale(1.5);
            background-color: #2ecc71;
            cursor: pointer;
        }
    </style>
</head>

<body>
    <div class="box">
        2D Box
    </div>
</body>

</html>  `}
        </pre>

        <h2 className="text-xl font-semibold">CSS 2D Skew</h2>
        <p className="text-gray-700">The skew() function in CSS distorts an element by slanting it along the horizontal (X) and vertical (Y) axes.
        </p>
        <h1 className="text-2xl">Example</h1>
        <p>The example below demonstrates a skew transformation applied on hover, resulting in a slanted appearance.</p>

        <pre className="bg-gray-200 p-3 h-80 rounded text-sm overflow-x-auto">
{`<!DOCTYPE html>
<html lang="en">
<head>
    <style>
        body {
            height: 300px;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: #f0f0f0;
            font-family: Arial, sans-serif;
        }

        /* The Box Element */
        .box {
            width: 200px;
            height: 200px;
            background-color: #4CAF50;
            color: white;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 1.5em;
            border-radius: 10px;
            /* Initial 2D Skew */
            transform: skewX(10deg) skewY(10deg);
            transition: transform 0.6s ease;
        }

        /* Hover State with Different 2D Skew */
        .box:hover {
            transform: skewX(-10deg) skewY(-10deg);
            background-color: #2ecc71;
            cursor: pointer;
        }
    </style>
</head>

<body>
    <div class="box">
        2D Box
    </div>
</body>

</html>   `}
        </pre>

        <h1 className="text-2xl">CSS Transform Properties</h1>
        <p>The following table provides an overview of the 2D transform properties used in CSS.</p>

        <table className="min-w-full border border-gray-300 rounded-md text-sm text-left">
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

        <h1 className="text-2xl">CSS 2D Transform Related Functions</h1>
        <p>The following table outlines the different functions available for applying two-dimensional transformations to elements.</p>

        <table className="min-w-full border border-gray-300 rounded-md text-sm text-left">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2 border-b border-gray-300 text-gray-700 font-bold ">Function</th>
              <th className="px-4 py-2 border-b border-gray-300 text-gray-700 font-bold ">Description</th>
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
          <li><strong>translate(x, y)</strong> → Moves the element in the X and Y directions.</li>
          <li><strong>rotate(angle)</strong> → Rotates the element around its center.</li>
          <li><strong>scale(x, y)</strong> → Makes the size bigger or smaller.</li>
          <li><strong>skew(x, y)</strong> → Tilts the element at an angle.</li>
          <li>Multiple transformations can be applied simultaneously:
            <pre className="bg-gray-200  p-2 rounded mt-2 text-sm overflow-x-auto">{`transform: translate(50px, 20px) rotate(30deg) scale(1.2);`}
            </pre>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Css2DTransforms;