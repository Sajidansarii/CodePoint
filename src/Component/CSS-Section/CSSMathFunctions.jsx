import React from "react";

const MathFunctions = () => {
  const data = [
    {propertie: 'min()', value:'Determines the minimum value from a given set of values.'},
    {propertie:'max()', value:'Determines the maximum value from a given list of values.'},
    {propertie: 'clamp()', value:'Calculates the central of a minimum, central, and maximum values.'},
  ];

  const data2= [
    {propertie: 'round()', value:'Calculates a rounded number based on a rounding strategy.'},
  ];
  const data3 = [
    {propertie:'sin()', value:'Calculates the trigonometric sine of a number.'},
    {propertie:'cos()', value:'Calculates the trigonometric cosine of a number'},
    {propertie:'tan()', value:'Calculates the trigonometric tangent of a number.'},
    {propertie:'asin()', value:'Calculates the trigonometric inverse sine of a number.'},
    {propertie:'acos()', value:'Calculates the trigonometric inverse cosine of a number.'},
    {propertie:'atan()', value:'Calculates the trigonometric inverse tangent of a number.'},
    {propertie:'atan2()', value:'Calculates the trigonometric inverse tangent of two-numbers in a plane.'},
  ];
  return (
    <div className="p-6 space-y-6 font-sans">
      <h1 className="text-3xl font-medium text-blue-500">CSS Math Functions</h1>
      <p>CSS math functions let you do calculations within your stylesheets, making it easier to adjust values like lengths, angles, colors, and other units directly in CSS.</p>
      <div className="bg-gray-200 rounded-lg p-4">
        <pre>
          {`div{
    width: calc(100% - 40px); 
    /* 100% width minus 40px for padding */
    
    width: max(200px, 50%);
    /* Set width to the maximum value between 
    200px and 50% of the viewport width */
}`}
        </pre>
      </div>

      <h1 className="text-2xl">Types of Mathematical Functions in CSS</h1>
      <p>CSS offers several math functions that you can use to perform calculations. These include:</p>

      <ul className="list-[square] list-inside">
      <li>Basic Arithmetic Functions: These include the calc() function, which allows you to perform mathematical operations like    <pre>  addition, subtraction, multiplication, and division directly on CSS values.</pre></li>
      <li>Comparison Functions: These include min(), max(), and clamp(), which allow you to compare values and set limits directly in <pre>  your CSS.</pre></li>
      <li>Stepped Value Functions: These include the round() function, which rounds numbers according to a specified rounding <pre>  method directly in your CSS.</pre></li>
      <li>Trigonometric Functions: Functions like sin(), cos(), and tan() allow you to use sine, cosine, and tangent calculations directly <pre>   within your CSS.</pre></li>
      </ul>

      <h1 className="text-2xl">The calc Function</h1>
      <p>The calc() function is a fundamental CSS arithmetic tool that lets you perform calculations—such as addition, subtraction, multiplication, and division—directly on numerical values to dynamically adjust property values.</p>
      <h1 className="text-2xl">Example</h1>
      <p>Here’s an example showing how to use the calc() function in CSS:</p>
      <div className="bg-gray-200 rounded-lg p-4">
        <pre>
          {` .box {
                /* 100% width minus 40px for padding */
            width: calc(100% - 40px); 

                /* 100% of viewport height minus 20px for padding */
            height: calc(100% - 20px); 

            background-color: lightblue;
            padding: 20px;
            box-sizing: border-box;
        }
    </style>
</head>

<body>
    <div class="container">
        <div class="box">
            This box uses the CSS calc() function to dynamically 
            calculate its width and height.
        </div>
    </div>
</body>
`}
        </pre>
      </div>

      <h1 className="text-2xl">The max Function</h1>
      <p>The max() function in CSS lets you select the largest value from a list of inputs. It’s useful for comparing values and applying styles based on the highest number.</p>
      <h1 className="text-2xl">Example</h1>
      <p>Here’s an example that shows how to use the max() function in CSS:</p>
      <div className="bg-gray-200 rounded-lg p-4">
        <pre>
          {`<!DOCTYPE html>
<html lang="en">

<head>
    <style>
        .container {
            width: 80%;
            margin: 0 auto;
            border: 1px solid #000;
            padding: 20px;
        }

        .box {
                /* Set the width to the maximum value between 
                   200px and 50% of the viewport width */
            width: max(200px, 50%);
            background-color: lightblue;
            padding: 20px;
            box-sizing: border-box;
        }
    </style>
</head>

<body>
    <div class="container">
        <div class="box">
            This box uses the CSS max() function to set its width 
            to the maximum value between 200px and 50% of the 
            viewport width.
        </div>
    </div>
</body>

</html>`}
        </pre>
      </div>

      <h1 className="text-2xl">The min Function</h1>
      <p>The min() function in CSS selects the smallest value from a list of values. It helps you compare values and apply styles based on the minimum number.</p>
      <h1 className="text-2xl">Example</h1>
      <p>Here’s an example demonstrating how to use the min() function in CSS:</p>
      <div className="bg-gray-200 rounded-lg p-4">
        <pre>
          {`<!DOCTYPE html>
<html lang="en">

<head>
    <style>
        .container {
            width: 80%;
            margin: 0 auto;
            border: 1px solid #000;
            padding: 20px;
        }

        .box {
                /* Set the width to the minimum value between 
                   200px and 50% of the viewport width */
            width: min(200px, 50%);
            background-color: lightblue;
            padding: 20px;
            box-sizing: border-box;
        }
    </style>
</head>

<body>
    <div class="container">
        <div class="box">
            This box uses the CSS min() function to set its width 
            to the minimum value between 200px and 50% of the 
            viewport width.
        </div>
    </div>
</body>

</html>`}
        </pre>
      </div>
      <h1 className="text-2xl">Comparison Functions</h1>
      <p>CSS comparison functions simplify evaluating values, enabling conditional styling directly within your stylesheets based on those comparisons.</p>
      <p>The following table lists the CSS comparison functions:</p>

      <table className="min-w-full border border-gray-300 rounded-md text-sm text-left mt-10">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2 border-b border-gray-300 font-bold text-gray-700">Function</th>
            <th className="px-4 py-2 border-b border-gray-300 font-bold text-gray-700">Description</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row,index)=>(
            <tr className="hover:bg-gray-50">
              <td className="px-4 py-2 border-b border-gray-200">{row.propertie}</td>
              <td className="px-4 py-2 border-b border-gray-200">{row.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <h1 className="text-2xl">Stepped Value Functions</h1>
      <p>Stepped value functions give precise control in CSS by allowing exact adjustments and defined steps in property values.</p>
      <p>The following table shows the stepped value functions in CSS:</p>

      <table className="min-w-full border border-gray-300 rounded-md text-sm text-left mt-10">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2 border-b border-gray-300 font-bold text-gray-700">function</th>
            <th className="px-4 py-2 border-b border-gray-300 font-bold text-gray-700">Description</th>
          </tr>
        </thead>
        <tbody>
          {data2.map((row,index)=>(
            <tr className="hover:bg-gray-50">
              <td className="px-4 py-2 border-b border-gray-200">{row.propertie}</td>
              <td className="px-4 py-2 border-b border-gray-200">{row.value}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h1 className="text-2xl">Trigonometric Functions</h1>
      <p>CSS trigonometric functions enable advanced design effects by incorporating mathematical operations like sine, cosine, and tangent directly into your stylesheets.</p>
      <p>The following table lists the CSS trigonometric functions:</p>

      <table className="min-w-full border border-gray-300 rounded-md text-sm text-left mt-10">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2 border-b border-gray-300 font-bold text-gray-700">Function</th>
            <th className="px-4 py-2 border-b border-gray-300 font-bold text-gray-700">Description</th>
          </tr>
        </thead>
        <tbody>
          {data3.map((row,index)=>(
            <tr className="hover:bg-gray-50">
              <td className="px-4 py-2 border-b border-gray-200">{row.propertie}</td>
              <td className="px-4 py-2 border-b border-gray-200">{row.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
      

      <div className="bg-blue-200 p-4 w-[calc(100%-100px)]">
        <p><b>calc()</b>: Width = 100% - 100px</p>
      </div>

      <div className="bg-green-200 p-4 text-[min(5vw,20px)]">
        <p><b>min()</b>: Font size = smaller of 5vw or 20px</p>
      </div>

      <div className="bg-yellow-200 p-4 w-[max(300px,50%)]">
        <p><b>max()</b>: Width = larger of 300px or 50%</p>
      </div>

      <div className="bg-pink-200 p-4 text-[clamp(16px,2vw,32px)]">
        <p><b>clamp()</b>: Font size scales between 16px → 32px</p>
      </div>
    </div>
  );
};

export default MathFunctions;