import React from "react";

const CssBoxModel = () => {
  return (
    <div className="p-6 space-y-6">
      {/* Title */}
      <h1 className="text-3xl font-medium text-blue-500">CSS Box Model</h1>

      {/* Intro */}
      <p className="text-gray-700">
        CSS Box Model web page ke har element ko ek box ki tarah treat karta hai. 
        Is model me har element 4 parts se bana hota hai:
      </p>

      <ul className="list-disc ml-6 text-gray-700">
        <li><b>Content:</b> Jisme text aur images show hote hain.</li>
        <li><b>Padding:</b> Content ke aas paas ki space.</li>
        <li><b>Border:</b> Padding aur content ke around ek line.</li>
        <li><b>Margin:</b> Border ke bahar ki space jo doosre elements ke beech gap banati hai.</li>
      </ul>

      {/* Diagram */}
      <h2 className="text-2xl font-semibold">1. Box Model Diagram</h2>
      <pre className="bg-gray-900 text-green-400 p-4 rounded-lg text-sm overflow-x-auto">
{` -----------------------
|       Margin          |
|   -----------------   |
|   |     Border     |  |
|   |  -----------   |  |
|   |  | Padding |   |  |
|   |  | Content |   |  |
|   |  -----------   |  |
|   -----------------   |
 ----------------------- `}
      </pre>

      {/* Example Code */}
      <h2 className="text-2xl font-semibold">2. Example Code</h2>
      <pre className="bg-gray-900 text-green-400 p-4 rounded-lg text-sm overflow-x-auto">
{`<style>
  .box {
    width: 200px;
    padding: 20px;
    border: 5px solid blue;
    margin: 30px;
    background-color: lightyellow;
  }
</style>

<div class="box">Hello, I am a box!</div>`}
      </pre>

      {/* Explanation of Code */}
      <p className="text-gray-700">
        Yahaan <code>.box</code> class ke liye styling ki gayi hai:
      </p>
      <ul className="list-disc ml-6 text-gray-700">
        <li><code>width: 200px;</code> → content ki width fix karta hai.</li>
        <li><code>padding: 20px;</code> → content ke andar space deta hai.</li>
        <li><code>border: 5px solid blue;</code> → ek blue border add karta hai.</li>
        <li><code>margin: 30px;</code> → doosre elements ke beech gap deta hai.</li>
        <li><code>background-color: lightyellow;</code> → background color set karta hai.</li>
      </ul>

      {/* Total Size Formula */}
      <h2 className="text-2xl font-semibold">3. Total Size Calculation</h2>
      <p className="text-gray-700">
        Agar kisi element ki <b>width</b> 200px hai aur:
      </p>
      <ul className="list-disc ml-6 text-gray-700">
        <li>Padding = 20px (left + right = 40px)</li>
        <li>Border = 5px (left + right = 10px)</li>
        <li>Margin = 30px (bahar ki space, size me include nahi hoti)</li>
      </ul>
      <p className="text-gray-700">
        To element ka total width hoga:  
        <b>200 + 40 + 10 = 250px</b> (+ margin bahar se add hoti hai).
      </p>

      {/* Conclusion */}
      <h2 className="text-2xl font-semibold">Conclusion</h2>
      <p className="text-gray-700">
        CSS Box Model ko samajhna bahut zaroori hai kyunki iske through aap 
        samajh paate ho ki kisi element ki actual size aur spacing web page me 
        kaise calculate hoti hai.
      </p>
    </div>
  );
};

export default CssBoxModel;