import React from "react";

const CssColorValues = () => {
  const examples = [
    {
      title: "Color Names",
      code: `h1 { color: red; }`,
      explanation: "Predefined names like red, blue, green, and yellow are used.",
      preview: <h1 className="text-red-500 font-bold">This is Red</h1>,
    },
    {
      title: "HEX Values",
      code: `h1 { color: #ff0000; }`,
      explanation: "Colors are defined in hexadecimal format (#RRGGBB).",
      preview: <h1 style={{ color: "#ff0000" }}>This is HEX (#ff0000)</h1>,
    },
    {
      title: "RGB Values",
      code:  `h1 { color: rgb(255, 0, 0); }`,
      explanation: "RGB stands for Red, Green, and Blue values (0-255).",
      preview: <h1 style={{ color: "rgb(255,0,0)" }}>This is RGB(255,0,0)</h1>,
    },
    {
      title: "RGBA Values",
      code: `h1 { color: rgba(255, 0, 0, 0.5); }`,
      explanation: "In RGBA, A stands for Alpha (opacity), which ranges from 0 to 1.",
      preview: (
        <h1 style={{ color: "rgba(255,0,0,0.5)" }}>
          This is RGBA(255,0,0,0.5)
        </h1>
      ),
    },
    {
      title: "HSL Values",
      code: `h1 { color: hsl(0, 100%, 50%); }`,
      explanation: "HSL defines color in the Hue, Saturation, and Lightness format.",
      preview: <h1 style={{ color: "hsl(0, 100%, 50%)" }}>This is HSL</h1>,
    },
    {
      title: "HSLA Values",
      code: `h1{ color: hsla(0, 100%, 50%, 0.5); }`,
      explanation: "HSLA includes opacity by adding an alpha channel.",
      preview: (
        <h1 style={{ color: "hsla(0, 100%, 50%, 0.5)" }}>This is HSLA</h1>
      ),
    },
    {
      title: "Currentcolor",
      code: `p { color:blue; border: 2px solid currentcolor; }`,
      explanation: "currentcolor uses the element’s text color for the border or background.",
      preview: (
        <p className="text-blue-500 border-2 border-current p-2 inline-block">
          CurrentColor Example
        </p>
      ),
    },
    {
      title: "Transparent",
      code: `div { background-color: transparent; }`,
      explanation: "Transparent means a fully invisible background.",
      preview: (
        <div className="bg-transparent border border-gray-400 p-2">
          Transparent Background
        </div>
      ),
    },
  ];

  return (
    <div className="p-6 max-w-4xl space-y-6 mt-10">
      <h1 className="text-3xl font-medium mb-6 text-blue-500">
       CSS Color Values
      </h1>
      <p className="mb-6 text-gray-700">
        In CSS, multiple formats are available to define colors, such as names, HEX, RGB, RGBA, HSL, HSLA, etc. Below, code and live examples for each are provided.
      </p>

      <p>In CSS, colors can be defined using the following methods:</p>
      <ul className="list-[square]">
        <li>Hexadecimal colors</li>
        <li>Hexadecimal colors with transparency</li>
        <li>RGB colors</li>
        <li>RGBA colors</li>
        <li>HSL colors</li>
        <li>HSLA colors</li>
        <li>Predefined/Cross-browser color names</li>
        <li>With the <span className="text-red-400 bg-gray-50 px-1">currentcolor</span> keyword</li>
      </ul>

      <h1 className="text-2xl mt-6">Hexadecimal Colors</h1>
      <p className="mt-3">A hexadecimal color is written as #RRGGBB, where RR, GG, and BB are hexadecimal values representing the red, green, and blue components of the color. Each value ranges from 00 to FF.</p>
      <p className="mt-3 mb-6">For instance, the color value #0000ff appears as blue because the blue component is at its maximum (ff) while the red and green components are both set to 00.</p>
    
    <h1 className="text-2xl mb-2">Example</h1>
    <p>List various HEX color codes:</p>
   <pre className="bg-gray-200 mt-r5 p-4 rounded-lg overflow-x-auto max-w-full whitespace-pre-wrap">
  <code>
    <span className="text-blue-500">#p1</span> <span>{'{'}</span>
    <span className="text-red-500">background-color</span>
    <span>: </span>
    <span className="text-green-700">#ff0000</span>
    <span>{'}'}</span>
    <span className="text-gray-500"> /* red */</span><br />

    <span className="text-blue-500">#p2</span> <span>{'{'}</span>
    <span className="text-red-500">background-color</span>
    <span>: </span>
    <span className="text-green-700">#00ff00</span>
    <span>{'}'}</span>
    <span className="text-gray-500"> /* green */</span><br />

    <span className="text-blue-500">#p3</span> <span>{'{'}</span>
    <span className="text-red-500">background-color</span>
    <span>: </span>
    <span className="text-green-700">#0000ff</span>
    <span>{'}'}</span>
    <span className="text-gray-500"> /* blue */</span>
  </code>
</pre>

    <h1 className="text-2xl mt-10 mb-2">Hexadecimal Colors With Transparency</h1>
    <p>A hexadecimal color is written as #RRGGBB. To include transparency, add two extra digits representing the alpha value, ranging from 00 to FF.</p>
    <h1 className="text-2xl mt-5">Example</h1>
    <p>Specify various HEX colors including transparency:</p>
   <pre className="bg-gray-200 p-4 rounded-lg mt-5 overflow-x-auto max-w-full whitespace-pre-wrap">
  <code>
    <span className="text-blue-500">#p1a</span> <span>{'{'}</span>
    <span className="text-red-500">background-color</span>
    <span>: </span>
    <span className="text-green-700">#ff000080</span>
    <span>{'}'}</span>
    <span className="text-gray-500"> /* red transparency */</span><br />

    <span className="text-blue-500">#p2a</span> <span>{'{'}</span>
    <span className="text-red-500">background-color</span>
    <span>: </span>
    <span className="text-green-700">#00ff0080</span>
    <span>{'}'}</span>
    <span className="text-gray-500"> /* green transparency */</span><br />

    <span className="text-blue-500">#p3a</span> <span>{'{'}</span>
    <span className="text-red-500">background-color</span>
    <span>: </span>
    <span className="text-green-700">#0000ff80</span>
    <span>{'}'}</span>
    <span className="text-gray-500"> /* blue transparency */</span>
  </code>
</pre>
    <h1 className="text-2xl mt-10">RGB Colors</h1>
    <p className="mt-1 mb-2">An RGB color is defined using the rgb() function, following this syntax:</p>
    <p><span className="text-red-400 bg-gray-50 px-1">rgb(red, green, blue)</span></p>
    <p className="mt-3">Each value for red, green, and blue represents the color’s intensity and can be set as either an integer from 0 to 255 or a percentage from 0% to 100%.</p>
    <p className="mt-3">For example, rgb(0, 0, 255) appears as blue because the blue component is at its maximum value (255), while the red and green components are both set to 0.</p>
    <p className="mt-3">The following values produce the same color: rgb(0, 0, 255) and rgb(0%, 0%, 100%).</p>
    <h1 className="text-2xl mt-4">Example</h1>
    <p>List various RGB color values:</p>
   <pre className="bg-gray-200 p-4 rounded-lg mt-5 overflow-x-auto max-w-full whitespace-pre-wrap">
  <code>
    <span className="text-blue-500">#p1</span> <span>{'{'}</span>
    <span className="text-red-500">background-color</span>
    <span>: </span>
    <span className="text-green-700">rgb(255, 0, 0)</span>
    <span>{'}'}</span>
    <span className="text-gray-500"> /* red */</span><br />

    <span className="text-blue-500">#p2</span> <span>{'{'}</span>
    <span className="text-red-500">background-color</span>
    <span>: </span>
    <span className="text-green-700">rgb(0, 255, 0)</span>
    <span>{'}'}</span>
    <span className="text-gray-500"> /* green */</span><br />

    <span className="text-blue-500">#p3</span> <span>{'{'}</span>
    <span className="text-red-500">background-color</span>
    <span>: </span>
    <span className="text-green-700">rgb(0, 0, 255)</span>
    <span>{'}'}</span>
    <span className="text-gray-500"> /* blue */</span>
  </code>
</pre>

    <h1 className="text-2xl mt-10">RGBA Colors</h1>
    <p className="mt-3">RGBA color values build on RGB by adding an alpha channel, which controls the object's opacity.</p>
    <p className="mt-3">An RGBA color is defined using the rgba() function, following this format:</p>
    <p className="mt-3"><span className="text-red-400 bg-gray-50 px-1 mt-3">rgba(red, green, blue, alpha)</span></p>
    <p className="mt-3">The alpha value ranges from 0.0 (completely transparent) to 1.0 (completely opaque).</p>
    <h1 className="text-2xl mt-5">Example</h1>
    <p className="mt-3">List various RGBA color values with different opacity levels:</p>
   <pre className="bg-gray-200 p-4 rounded-lg mt-5 overflow-x-auto max-w-full whitespace-pre-wrap">
  <code>
    <span className="text-blue-500">#p1</span> <span>{'{'}</span>
    <span className="text-red-500">background-color</span>
    <span>: </span>
    <span className="text-green-700">rgba(255, 0, 0, 0.3)</span>
    <span>{'}'}</span>
    <span className="text-gray-500"> /* red with opacity */</span><br />

    <span className="text-blue-500">#p2</span> <span>{'{'}</span>
    <span className="text-red-500">background-color</span>
    <span>: </span>
    <span className="text-green-700">rgba(0, 255, 0, 0.3)</span>
    <span>{'}'}</span>
    <span className="text-gray-500"> /* green with opacity */</span><br />

    <span className="text-blue-500">#p3</span> <span>{'{'}</span>
    <span className="text-red-500">background-color</span>
    <span>: </span>
    <span className="text-green-700">rgba(0, 0, 255, 0.3)</span>
    <span>{'}'}</span>
    <span className="text-gray-500"> /* blue with opacity */</span>
  </code>
</pre>

    <h1 className="text-2xl mt-10">HSL Colors</h1>
    <p className="mt-3">HSL stands for Hue, Saturation, and Lightness — it describes colors using a cylindrical coordinate system.</p>
    <p className="mt-3">An HSL color is defined using the hsl() function, with the following syntax:</p>
    <p className="mt-3"><span className="text-red-400 bg-gray-50 px-1">hsl(hue, saturation, lightness)</span></p>
    <p className="mt-3">Hue represents a position on the color wheel measured in degrees from 0 to 360, where 0 (or 360) corresponds to red, 120 to green, and 240 to blue. Saturation is given as a percentage, with 0% producing a gray tone and 100% showing the full color. Lightness is also expressed as a percentage, where 0% is black and 100% is white.</p>
    <h1 className="text-2xl mt-5">Example</h1>
    <p className="mt-3 mb-5">List various HSL color values:</p>
   <pre className="bg-gray-200 p-4 rounded-lg overflow-x-auto max-w-full whitespace-pre-wrap">
  <code>
    <span className="text-blue-500">#p1</span> <span>{'{'}</span>
    <span className="text-red-500">background-color</span>
    <span>: </span>
    <span className="text-green-700">hsl(120, 100%, 50%)</span>
    <span>{'}'}</span>
    <span className="text-gray-500"> /* green */</span><br />

    <span className="text-blue-500">#p2</span> <span>{'{'}</span>
    <span className="text-red-500">background-color</span>
    <span>: </span>
    <span className="text-green-700">hsl(120, 100%, 75%)</span>
    <span>{'}'}</span>
    <span className="text-gray-500"> /* light green */</span><br />

    <span className="text-blue-500">#p3</span> <span>{'{'}</span>
    <span className="text-red-500">background-color</span>
    <span>: </span>
    <span className="text-green-700">hsl(120, 100%, 25%)</span>
    <span>{'}'}</span>
    <span className="text-gray-500"> /* dark green */</span><br />

    <span className="text-blue-500">#p4</span> <span>{'{'}</span>
    <span className="text-red-500">background-color</span>
    <span>: </span>
    <span className="text-green-700">hsl(120, 60%, 70%)</span>
    <span>{'}'}</span>
    <span className="text-gray-500"> /* pastel green */</span>
  </code>
</pre>
    <h1 className="text-2xl mt-10">HSLA Colors</h1>
    <p className="mt-3">HSLA color values expand on HSL by including an alpha channel that controls the object's opacity.</p>
    <p className="mt-3">An HSLA color is defined using the hsla() function, following this syntax:</p>
    <p className="mt-3"><span className="text-red-400 bg-gray-50 px-1">hsla(hue, saturation, lightness, alpha)</span></p>
    <p className="mt-3">The alpha value ranges from 0.0 (completely transparent) to 1.0 (completely opaque).</p>
    <h1 className="text-2xl mt-5">Example</h1>
    <p className="mt-3 mb-5">List various HSLA color values with different opacity levels:</p>
    <pre className="bg-gray-200 p-4 rounded-lg overflow-x-auto max-w-full whitespace-pre-wrap">
  <code>
    <span className="text-blue-500">#p1</span> <span>{'{'}</span>
    <span className="text-red-500">background-color</span>
    <span>: </span>
    <span className="text-green-700">hsla(120, 100%, 50%, 0.3)</span>
    <span>{'}'}</span>
    <span className="text-gray-500"> /* green with opacity */</span><br />

    <span className="text-blue-500">#p2</span> <span>{'{'}</span>
    <span className="text-red-500">background-color</span>
    <span>: </span>
    <span className="text-green-700">hsla(120, 100%, 75%, 0.3)</span>
    <span>{'}'}</span>
    <span className="text-gray-500"> /* light green with opacity */</span><br />

    <span className="text-blue-500">#p3</span> <span>{'{'}</span>
    <span className="text-red-500">background-color</span>
    <span>: </span>
    <span className="text-green-700">hsla(120, 100%, 25%, 0.3)</span>
    <span>{'}'}</span>
    <span className="text-gray-500"> /* dark green with opacity */</span><br />

    <span className="text-blue-500">#p4</span> <span>{'{'}</span>
    <span className="text-red-500">background-color</span>
    <span>: </span>
    <span className="text-green-700">hsla(120, 60%, 70%, 0.3)</span>
    <span>{'}'}</span>
    <span className="text-gray-500"> /* pastel green with opacity */</span>
  </code>
</pre>

    <h1 className="text-2xl mt-10">Predefined/Cross-browser Color Names</h1>
    <p className="mt-3">The HTML and CSS color specification includes 140 predefined color names.</p>
    <p className="mt-3">For example: <span className="text-red-400 bg-gray-50 px-1">blue, red, coral, brown,</span> etc:</p>
    <h1 className="text-2xl mt-5">Example</h1>
    <p className="mt-3 mb-5">List various predefined color names:</p>
  <pre className="bg-gray-200 p-4 rounded-lg overflow-x-auto max-w-full whitespace-pre-wrap">
  <code>
    <span className="text-blue-500">#p1</span> <span>{'{'}</span>
    <span className="text-red-500">background-color</span>
    <span>: </span>
    <span className="text-green-700">blue</span>
    <span>{'}'}</span><br />

    <span className="text-blue-500">#p2</span> <span>{'{'}</span>
    <span className="text-red-500">background-color</span>
    <span>: </span>
    <span className="text-green-700">red</span>
    <span>{'}'}</span><br />

    <span className="text-blue-500">#p3</span> <span>{'{'}</span>
    <span className="text-red-500">background-color</span>
    <span>: </span>
    <span className="text-green-700">coral</span>
    <span>{'}'}</span><br />

    <span className="text-blue-500">#p4</span> <span>{'{'}</span>
    <span className="text-red-500">background-color</span>
    <span>: </span>
    <span className="text-green-700">brown</span>
    <span>{'}'}</span>
  </code>
</pre>

    <h1 className="text-2xl mt-10">The currentcolor Keyword</h1>
    <p className="mt-3">The <span className="text-red bg-gray-50 px-1">currentcolor</span> keyword refers to the value of the color property of an element.</p>
    <h1 className="text-2xl mt-3">Example</h1>
    <p className="mb-5 mt-3">The border color of the following {'<div>'} element will appear blue since its text color is set to blue.</p>
   <pre className="bg-gray-200 p-4 rounded-lg overflow-x-auto max-w-full whitespace-pre-wrap">
  <code>
    <span className="text-blue-500">#myDIV</span> <span>{'{'}</span><br />

    <span className="text-red-500">color</span>
    <span>: </span>
    <span className="text-green-700">blue</span>
    <span>;</span>
    <span className="text-gray-500"> /* Blue text color */</span><br />

    <span className="text-red-500">border</span>
    <span>: </span>
    <span className="text-green-700">10px solid currentcolor</span>
    <span>;</span>
    <span className="text-gray-500"> /* Blue border color */</span><br />

    <span>{'}'}</span>
  </code>
</pre>



    </div>
  );
};

export default CssColorValues;