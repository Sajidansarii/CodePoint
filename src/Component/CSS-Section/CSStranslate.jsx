import React from "react";

const TranslateDemo = () => {
  const data = [
    {value:'none', Description:'It specifies no translation should be applied.'},
    {value:'x-axis', Description:'It specifies translation along the X-axis. If one value is specified with the translate property, then it specifies translation in the x-axis.'},
    {value:'y-axis', Description:'It specifies translation along the Y-axis. If two values are specified with the translate property, then the first value specifies translation in the x-axis and the second value in the y-axis. To specify translation only the in y-axis, specify the first value as 0px.'},
    {value:'z-axis', Description:'It specifies translation along the Z-axis. If three values are specified with the translate property, then the first, second, and third value specifies translation in the x-axis, y-axis, and z-axis respectively. To specify translation only in the z-axis, specify the first two values as 0px.'},
  ];
  return (
    <div className="p-8  min-h-screen space-y-6">
      <h1 className="text-3xl font-medium text-blue-500">
        CSS Translate Property
      </h1>

      <p>
        The <strong>CSS Translate</strong> property allows you to *move an element* 
        along the X and Y axes without affecting its surrounding elements. 
        It is part of the <strong>transform</strong> property.
      </p>

      <p>
      The translate property functions similarly to the translate() function within the transform property. However, unlike translate(), it does not allow translation along the Z-axis.</p>


      {/* Example 2: Translate Y on hover */}
      <div className="h-24 w-full bg-green-500 text-white flex items-center justify-center rounded transform transition-transform duration-500 hover:translate-y-6">
        Translate Y (Down) on Hover
      </div>

      <h1 className="text-2xl">Syntax</h1>
      <p>Here’s the syntax you use for the CSS translate property:</p>
      <pre className="bg-gray-200 p-4 rounded-lg">
        <code>
          {`translate: x-axis y-axis z-axis | none;`}
        </code>
      </pre>


      <h1 className="text-2xl">Valid options</h1>
      <table className="min-w-full border border-gray-300 rounded-md text-sm text-left mt-10">
        <thead>
          <tr className="bg-gray-100">
            <td className="px-4 py-2 border-b border-gray-300 font-bold text-gray-700">Value</td>
            <td className="px-4 py-2 border-b border-gray-300 font-bold text-gray-700">Description</td>
          </tr>
        </thead>
        <tbody>
           {data.map((row,index)=>(
            <tr className="hover:bg-gray-50">
              <td className="px-4 py-2 border-b border-gray-200">{row.value}</td>
              <td className="px-4 py-2 border-b border-gray-200">{row.Description}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p>Values for the translate property can be defined using either <span className="text-red-400 bg-gray-50 px-2 rounded-md">{'<length>'}</span> or 
      <span className="text-red-400 bg-gray-50 px-2 rounded-md">{'<percentage>'}</span> units.</p>
      
      <h1 className="text-2xl">Applies to</h1>
      <p>Each transformable component</p>
      <h1 className="text-2xl">CSS translate Property with none Value</h1>
      <p>To prevent any movement on any axis, set the translate property to none.</p>
      <h1 className="text-2xl">Example</h1>
      <p>In the example below, translate is set to none, disabling any translation effect on the div box.</p>
      <pre className="bg-gray-200 p-4 rounded-lg">
        <code>
          {`<html>
<head>
    <style>
        .box {
            height: 100px;
            width: 100px;
            display: inline-block;
            padding: 10px;
            border: 1px solid black;
            transition: all 0.3s ease;
        }

        .box:hover {
            background-color: #04af2f;
            translate: none;
        }
    </style>
</head>

<body>
    <div class="box"></div>
</body>
</html>`}
        </code>
      </pre>

      <h1 className="text-2xl">CSS translate on X-Axis</h1>
      <p>A single value in the translate property moves an element horizontally, using either a length or percentage.</p>
      <h1 className="text-2xl">Example</h1>
      <p>This example applies a positive length value to the first box and a negative <span className="bg-gray-50 text-red-400 px-2 rounded-md">percentage</span> to the second using the <span className="bg-gray-50 text-red-400 px-2 rounded-md">translate</span> property. As a result, the first box shifts right, while the second moves left along the X-axis.</p>
      <pre className="bg-gray-200 p-4 rounded-lg">
        <code>
          {`<!DOCTYPE html>
<html lang="en">
<head>
    <style>
        .container {
            height: 100px;
            width: 200px;
            padding: 10px;
            border: 1px solid black;
            margin: auto;
            display: flex;
            justify-content: space-around;
            align-items: center;
            background-color: #f0f0ff;            
        }
        .box {
            height: 80px;
            width: 80px;
            border: 1px solid black;
            display: inline-block;
            transition: all 0.3s ease;
            background-color: white;
        }
        .box1:hover {
            background-color: #04af2f;
            translate: 10px;
        }
        .box2:hover {
            background-color: #031926;
            translate: -10%;
        }
    </style>
</head>
<body>
    <h2>CSS translate Property</h2>
    <p>Translation on x-axis.</p>
    <div class="container">
        <div class="box box1"></div>
        <div class="box box2"></div>
    </div>    
</body>
</html>`}
        </code>
      </pre>

      <h1 className="text-2xl">CSS translate on Y-Axis</h1>
      <p>To move an element along the y-axis, use the <span className="bg-gray-50 px-2 rounded-md text-red-400">translate</span> property with two values, setting the first (x-axis) value to <span className="bg-gray-50">0.</span></p>
      <h1 className="text-2xl">Example</h1>
      <p>In this example, the <span className="text-red-400 bg-gray-50 px-2 rounded-md">translate</span> property is used with a positive length on the first box and a negative percentage on the second. As a result, the first box moves downward, while the second moves upward along the y-axis.</p>

      <pre className="bg-gray-200 p-4 rounded-lg">
        <code>
          {`<!DOCTYPE html>
<html lang="en">
<head>
    <style>
        .container {
            height: 150px;
            width: 200px;
            padding: 10px;
            border: 1px solid black;
            margin: auto;
            display: flex;
            justify-content: space-around;
            align-items: center;
            background-color: #f0f0ff;            
        }
        .box {
            height: 80px;
            width: 80px;
            border: 1px solid black;
            display: inline-block;
            transition: all 0.3s ease;
            background-color: white;
        }
        .box1:hover {
            background-color: #04af2f;
            translate: 0px 15px;
        }
        .box2:hover {
            background-color: #031926;
            translate: 0% -15%;
        }
    </style>
</head>
<body>
    <h2>CSS translate Property</h2>
    <p>Translation on y-axis.</p>
    <div class="container">
        <div class="box box1"></div>
        <div class="box box2"></div>
    </div>    
</body>
</html>`}
        </code>
      </pre>

      <h1 className="text-2xl">CSS <span className="text-red-400 bg-gray-50 px-2 rounded-md">translate</span> on Z-Axis</h1>
      <p>To move an element along the z-axis, use the translate property with three values, setting the x and y values to <span className="bg-gray-50">0.</span></p>
      <h1 className="text-2xl">Example</h1>
      <p>In this example, we applied a positive length value to the first box and a negative one to the second using the <span className="txet-red-400 bg-gray-50 px-2 rounded-md">translate</span> property. This causes the first box to move closer to the viewer, while the second moves farther away.</p>
      <pre className="bg-gray-200 p-4 rounded-lg">
        <code>
          {`<!DOCTYPE html>
<html lang="en">
<head>
    <style>
        .container {
            perspective: 100px;
            height: 150px;
            width: 200px;
            padding: 10px;
            border: 1px solid black;
            margin: auto;
            display: flex;
            justify-content: space-around;
            align-items: center;
            background-color: #f0f0ff;            
        }
        .box {
            height: 80px;
            width: 80px;
            border: 1px solid black;
            display: inline-block;
            transition: all 0.3s ease;
            background-color: white;
        }
        .box1:hover {
            background-color: #04af2f;
            translate: 0 0 15px;
        }
        .box2:hover {
            background-color: #031926;
            translate: 0 0 -10px;
        }
    </style>
</head>
<body>
    <h2>CSS translate Property</h2>
    <p>Translation on z-axis.</p>
    <div class="container">
        <div class="box box1"></div>
        <div class="box box2"></div>
    </div>    
</body>
</html>`}
        </code>
      </pre>

      <h1 className="text-2xl">CSS translate on X and Y Axes</h1>
      <p>To move an element along both the x and y axes, use two values with the translate property.</p>
      <h1 className="text-2xl">Example</h1>
      <p>This example shows how translate uses two values to move the box horizontally and vertically.</p>

      <pre className="bg-gray-200 p-4 rounded-lg">
        <code>
          {`<!DOCTYPE html>
<html lang="en">
<head>
    <style>
        .container {
            height: 150px;
            width: 250px;
            padding: 10px;
            border: 1px solid black;
            margin: auto;
            display: flex;
            justify-content: space-around;
            align-items: center;
            background-color: #f0f0ff;            
        }
        .box {
            height: 80px;
            width: 80px;
            border: 1px solid black;
            display: inline-block;
            transition: all 0.3s ease;
            background-color: white;
        }
        .box1:hover {
            background-color: #04af2f;
            translate: 15px 10px;
        }
        .box2:hover {
            background-color: #031926;
            translate: -15% -15%;
        }
    </style>
</head>
<body>
    <h2>CSS translate Property</h2>
    <p>Translation on both x and y-axis.</p>
    <div class="container">
        <div class="box box1"></div>
        <div class="box box2"></div>
    </div>    
</body>
</html>`}
        </code>
      </pre>
      <h1 className="text-2xl">CSS translate on Y and Z Axes</h1>
      <p>You can <span className="bg-gray-50 px-2 rounded-md text-red-400">translate</span> an element vertically and in depth by providing two values to translate, keeping the x value at 0.</p>
      <h1 className="text-2xl">Example</h1>
      <p></p>

    




















      <p className="text-gray-700">
        ✅ Tips:
        <ul className="list-disc list-inside mt-2">
          <li>Use <code>translate-x-{'{value}'}</code> or <code>translate-y-{'{value}'}</code> in Tailwind for axis-specific movement.</li>
          <li>Combine with <code>transition-transform</code> and <code>duration-500</code> for smooth animation.</li>
          <li>Translate does not affect other elements’ layout, unlike margins.</li>
          <li>Can be combined with <code>rotate</code>, <code>scale</code>, and other transforms.</li>
        </ul>
      </p>
    </div>
  );
};

export default TranslateDemo;