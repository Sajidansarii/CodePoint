import React from "react";

const CssUnitsDemo = () => {
  const data = [
    {Unit:'cm' , Description:'centimeters'},
    {Unit:'mm' , Description:'millimeters'},
    {Unit:'in' , Description:'inches (1in = 96px = 2.54cm)'},
    {Unit:'px' , Description:'pixels (1px = 1/96th of 1in)'},
    {Unit:'pt' , Description:'points (1pt = 1/72 of 1in)'},
    {Unit:'pc' , Description:'picas (1pc = 12 pt)'},
  ];

  const data2 = [
    {Unit:'em', Description:'Relative to the font-size of the element (2em means 2 times the size of the current font)'},
    {Unit:'ex', Description:'Relative to the x-height of the current font (rarely used)'},
    {Unit:'ch', Description:'Relative to the width of the "0" (zero)'},
    {Unit:'rem', Description:'Relative to font-size of the root element'},
    {Unit:'vw', Description:'Relative to 1% of the width of the viewport'},
    {Unit:'vh', Description:'Relative to 1% of the height of the viewport'},
    {Unit:'vmin', Description:`Relative to 1% of viewport's smaller dimension`},
    {Unit:'vmax', Description:`Relative to 1% of viewport's larger dimension`},
    {Unit:'%', Description:'Relative to the parent element'},
  ];
  return (
    <div className="p-8 min-h-screen space-y-6">
      {/* Page Header */}
      <h1 className="text-3xl font-medium text-blue-500">
        CSS Units
      </h1>

      <p className="text-gray-700">
        CSS Units define length, size, and spacing in your webpage. 
        They can be <strong>absolute</strong> or <strong>relative</strong>.
      </p>
      <p>There are multiple units in CSS used to define lengths.</p>
      <p>Several CSS properties accept length values, including <strong>width</strong>,<strong> margin</strong>, <strong>padding</strong>, and <strong>font-size</strong> etc.</p>
      <p>Length values are made up of a numeric value followed by a unit, for example, 10px or 2em.</p>
      <h1 className="text-2xl">Example</h1>
      {/* Section 1: Absolute Units */}
      <div className="bg-white p-4 rounded shadow space-y-2">
        <h2 className="font-bold">1. Absolute Units</h2>
        <p className="text-gray-700">
          Absolute units have a fixed size, regardless of other elements or screen size.
        </p>

        {/* Code Example */}
        <pre className="bg-gray-100 p-2 rounded overflow-x-auto text-sm">
{`/* Absolute Units Example */
.box-absolute {
  width: 200px;    
  height: 100px;
  margin: 10mm;    
  padding: 1in;    
  border: 1pt solid #3b82f6; 
}`}
        </pre>

        <p className="text-gray-700 mt-1">
          ✅ Explanation:
          <ul className="list-disc list-inside">
            <li><code>px</code> = pixels, commonly used for screen.</li>
            <li><code>mm</code> = millimeters, mostly print media.</li>
            <li><code>in</code> = inches, mostly print media.</li>
            <li><code>pt</code> = points, often used in typography.</li>
          </ul>
        </p>
      </div>

      {/* Section 2: Relative Units */}
      <div className="bg-white p-4 rounded shadow space-y-2">
        <h2 className="font-bold">2. Relative Units</h2>
        <p className="text-gray-700">
          Relative units change size based on parent element, viewport, or font size.
        </p>

        {/* Code Example */}
        <pre className="bg-gray-100 p-2 rounded overflow-x-auto text-sm">
{`/* Relative Units Example */
.box-relative {
  width: 50%;      
  height: 10rem;   
  margin: 2em;     
  font-size: 2vw;  
  line-height: 1.5ch; 
}`}
        </pre>

        <p className="text-gray-700 mt-1">
          ✅ Explanation:
          <ul className="list-disc list-inside">
            <li><code>%</code> = percentage of parent element.</li>
            <li><code>em</code> = relative to parent font size.</li>
            <li><code>rem</code> = relative to root font size.</li>
            <li><code>vw / vh</code> = relative to viewport width / height.</li>
            <li><code>ch</code> = width of character "0" in current font.</li>
          </ul>
        </p>
      </div>
      <h1 className="text-2xl">Absolute Lengths</h1>
      <p>Absolute length units have fixed sizes, so lengths using them will always appear at the specified dimensions.</p>
      <p>Absolute length units aren’t recommended for screens since their sizes vary; however, they work well for specific outputs like print layouts.</p>

      <table className="min-w-full border border-gray-300 rounded-md text-sm text-left mt-10">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2 border-b border-gray-300 font-bold text-gray-700">Unit</th>
            <th className="px-4 py-2 border-b border-gray-300 font-bold text-gray-700">Description</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row,index)=>(
            <tr className="hover:bg-gray-100 cursor-text">
              <td className="px-4 py-2 border-b border-gray-200">{row.Unit}</td>
              <td className="px-4 py-2 border-b border-gray-200">{row.Description}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p>Pixels (px) in CSS are relative units. On standard displays, 1px corresponds to a single hardware pixel, whereas on high-DPI devices, the same CSS pixel may represent multiple device pixels to maintain visual consistency.</p>

      <h1 className="text-2xl">Relative Lengths</h1>
      <p>Relative units are based on other length values and are better suited for responsive design across different media types.</p>

      <table className="min-w-full border border-gray-300 rounded-md text-sm text-left mt-10">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2 border-b border-gray-300 text-gray-700 font-bold">Unit</th>
            <th className="px-4 py-2 border-b border-gray-300 text-gray-700 font-bold">Description</th>
          </tr>
        </thead>
        <tbody>
          {data2.map((row,index)=>(
            <tr className="hover:bg-gray-100 cursor-text">
              <td className="px-4 py-2 border-b border-gray-200">{row.Unit}</td>
              <td className="px-4 py-2 border-b border-gray-200">{row.Description}</td>
            </tr>
          ))}
        </tbody>
      </table>





























      {/* Tips */}
      <p className="text-gray-700">
        ✅ Tips:
        <ul className="list-disc list-inside mt-2">
          <li>Use absolute units for fixed size elements like borders.</li>
          <li>Use relative units for responsive designs.</li>
          <li>Combining <code>em</code>, <code>rem</code>, and <code>vw/vh</code> helps in fluid layouts.</li>
        </ul>
      </p>
    </div>
  );
};

export default CssUnitsDemo;