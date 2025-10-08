import React from "react";

const CssTable = () => {
  return (
    <div className="p-6 space-y-6">
      {/* Title */}
      <h1 className="text-3xl font-medium text-blue-500">CSS Tables</h1>

      {/* Intro */}
      <p>
      Tables are used to organize data in the form of rows and columns. Tables can be easily styled and customized using CSS, such as borders, spacing, background colors, and hover effects.
      </p>

      <h1 className="text-2xl">CSS Table Borders</h1>
      <p>Using CSS, the <span className="text-red-400 bg-gray-50 px-1">border</span> property can be applied to tables to determine how thick, styled, and colored the borders should be.</p>
      <p>Instead of setting each <span className="text-red-400 bg-gray-50 px-1">border</span> property individually, the border shorthand lets you set them all at once.</p>

      <ul className="list-[square] list-inside">
        <li><span className="text-red-400 bg-gray-50 px-1">border-width</span>- sets the width of the border</li>
        <li><span className="text-red-400 bg-gray-50 px-1">border-style</span>- sets the style of the border (required)</li>
        <li><span className="text-red-400 bg-gray-50 px-1">border-color</span>- sets the color of the border</li>
      </ul>
      <p>Below is an example that applies a solid 1-pixel border to {'<table>'}, {'<th>'}, and {'<td>'} elements.</p>
      <pre className="text-green-400 bg-gray-900 p-4 rounded-lg">
        {`table, th, td {
  border: 1px solid;
}`}
      </pre>

      <table className="border border-1 border-black">
        <thead>
          <tr>
            <th className="border border-1 border-black">Fistname</th>
            <th className="border border-1 border-black">Lastname</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-1 border-black">Robert</td>
            <td className="border border-1 border-black">Williams</td>
          </tr>
        </tbody>
      </table>


      <h1 className="text-2xl">CSS Table Border Color</h1>
      <p>The following example sets a 1px solid green border on the {'<table>'}, {'<th>'}, and {'<td>'} elements.</p>
       <pre className="text-green-400 bg-gray-900 p-4 rounded-lg">
        {`table, th, td {
  border: 1px solid green;
}`}
       </pre>

       
      <table className="border border-1 border-green-600">
        <thead>
          <tr>
            <th className="border border-1 border-green-600">Fistname</th>
            <th className="border border-1 border-green-600">Lastname</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-1 border-green-600">Robert</td>
            <td className="border border-1 border-green-600">Williams</td>
          </tr>
        </tbody>
      </table>

      <h1 className="text-2xl">CSS Collapse Table Borders</h1>
      <p>You can use the border-collapse property to decide if table borders will collapse into one or stay distinct, like in standard HTML.</p>
      <p>The possible values for this property are:</p>
      <ul className="list-[square] list-inside">
        <li><span className="text-red-400 bg-gray-50 px-1">separate</span>- Default value. Borders are separated; each cell will display its own borders</li>
        <li><span className="text-red-400 bg-gray-50 px-1">collapse </span>- Borders are collapsed into a single border when possible</li>
      </ul>
      <p>The following table demonstrates collapsed borders:</p>
      <h1 className="text-2xl">Example</h1>
      <p>By setting the <span className="text-red-400 bg-gray-50 px-1">border-collapse</span> property:</p>
      <pre className="text-green-400 bg-gray-900 p-4 rounded-lg">
        {`table {
  border-collapse: collapse;
}`}
      </pre>
      <table className="border border-1 border-black">
        <thead>
          <tr>
            <th className="border border-1 border-black">Fistname</th>
            <th className="border border-1 border-black">Lastname</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-1 border-black">Robert</td>
            <td className="border border-1 border-black">Williams</td>
          </tr>
        </tbody>
      </table>

      <h1 className="text-2xl">CSS Table Padding</h1>
      <p>o manage the gap between content and borders within a table, apply padding to the {'<td>'} and {'<th>'} elements.</p>
     <h1 className="text-2xl">Example</h1>
     <pre className="text-green-400 bg-gray-900 p-4 rounded-lg">
      {`th, td {
  padding:6px;
}`}
     </pre>

     <table className="border border-1 border-black">
        <thead>
          <tr>
            <th className="border border-1 border-black  p-6">Fistname</th>
            <th className="border border-1 border-black  p-6">Lastname</th>
            <th className="border border-1 border-black  p-6">profession</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-1 border-black  p-6">Robert</td>
            <td className="border border-1 border-black  p-6">Williams</td>
            <td className="border border-1 border-black  p-6">Technician</td>
          </tr>
          <tr>
            <td className="border border-1 border-black  p-6">Lucas</td>
            <td className="border border-1 border-black  p-6">Devid</td>
            <td className="border border-1 border-black  p-6">Doctor</td>
          </tr>
        </tbody>
      </table>

<h1 className="text-2xl">CSS Border Spacing</h1>
<p>The border-spacing property specifies how much space appears between the borders of adjacent table cells.</p>
<p>This property applies only when the border-collapse property is set to "separate".</p>
<p>The table below uses a border-spacing of 15 pixels:</p>
<h1 className="text-2xl">Example</h1>
<p>Applying the border-spacing property:</p>
<pre className="text-green-400 bg-gray-900 p-4 rounded-lg">
  {`table {
  border-collapse: separate;
  border-spacing: 15px;
}`}
</pre>

<table className="border border-1 border-black border-separate [border-spacing:15px]">
        <thead>
          <tr>
            <th className="border border-1 border-black">Fistname</th>
            <th className="border border-1 border-black">Lastname</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-1 border-black">Robert</td>
            <td className="border border-1 border-black">Williams</td>
          </tr>
        </tbody>
      </table>

      <h1 className="text-2xl">CSS Outside Table Borders</h1>
      <p>To add a border only around the table and not inside, apply the border property solely to the {'<table>'} element.</p>
       <h1 className="text-2xl">Example</h1>
       <pre className="text-green-400 bg-gray-900 p-4 rounded-lg">
        {`table {
  border: 1px solid;
}`}
       </pre>

       <table className="border border-1 border-black">
        <thead>
          <tr>
            <th className="border border-1 border-black">Fistname</th>
            <th className="border border-1 border-black">Lastname</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-1 border-black">Robert</td>
            <td className="border border-1 border-black">Williams</td>
          </tr>
        </tbody>
      </table>













      {/* Conclusion */}
      <h2 className="text-2xl font-semibold">Conclusion</h2>
      <p className="text-gray-700">
        CSS can be used to make tables visually attractive and easy to read. You can give your data tables a professional look by using hover effects, zebra stripes, and custom borders.
      </p>
    </div>
  );
};

export default CssTable;