import React from "react";

const CssReference = () => {
  const cssReferences = [
    {
      property: "color",
      values: "red | blue | #333 | rgb(255,0,0)",
      description: "Text ka color set karta hai.",
      example: "p { color: red; }"
    },
    {
      property: "background-color",
      values: "transparent | red | #000 | rgb(0,0,0)",
      description: "Element ka background color define karta hai.",
      example: "div { background-color: lightblue; }"
    },
    {
      property: "margin",
      values: "auto | 10px | 5% | 1em",
      description: "Element ke bahar ka space set karta hai.",
      example: "h1 { margin: 20px; }"
    },
    {
      property: "padding",
      values: "10px | 1em | 5% | inherit",
      description: "Element ke andar ka space set karta hai.",
      example: "p { padding: 15px; }"
    },
    {
      property: "border",
      values: "1px solid black | none",
      description: "Element ke border ko style karta hai.",
      example: "div { border: 2px dashed red; }"
    },
    {
      property: "font-size",
      values: "16px | 1em | larger | smaller",
      description: "Text ka size set karta hai.",
      example: "p { font-size: 18px; }"
    }
  ];

  return (
    <div className="p-6">
      <h2 className="text-3xl font-medium text-blue-500 mb-4">CSS Reference</h2>
      <p className="mb-6 text-gray-700">
        <b>CSS Reference</b> ek quick guide hai jisme commonly used CSS 
        properties aur unke values ka summary hota hai. Isse developers ko 
        <b>fast lookup</b> milta hai jab unhe ek property ka syntax ya values 
        yaad nahi ho.
      </p>

      {/* CSS Reference List */}
      <div className="grid md:grid-cols-2 gap-6">
        {cssReferences.map((ref, index) => (
          <div key={index} className="p-4 border rounded-lg bg-white shadow-sm">
            <h3 className="text-lg font-semibold text-blue-600">
              {ref.property}
            </h3>
            <p className="text-sm text-gray-600">
              <b>Values:</b> {ref.values}
            </p>
            <p className="text-gray-700 mt-1">{ref.description}</p>
            <pre className="bg-black text-green-400 p-2 rounded-lg mt-2 text-sm overflow-x-auto">
              {ref.example}
            </pre>
          </div>
        ))}
      </div>

      {/* Example Section */}
      <div className="mt-8 bg-gray-100 p-4 rounded-lg">
        <h3 className="text-lg font-semibold mb-2">Example Usage:</h3>
        <pre className="bg-black text-green-400 p-3 rounded-lg text-sm overflow-x-auto">
{`p {
  color: blue;
  font-size: 18px;
  margin: 20px;
  padding: 10px;
  border: 1px solid black;
  background-color: lightyellow;
}`}
        </pre>
      </div>

      {/* Explanation */}
      <p className="mt-4 text-gray-700">
        👉 Is example me ek paragraph ka <b>blue text</b>, <b>18px font size</b>, 
        <b>margin aur padding</b> diya gaya hai, saath hi ek <b>black border</b> 
        aur <b>lightyellow background</b> set kiya gaya hai. Ye properties 
        CSS ke basic building blocks hain.
      </p>
    </div>
  );
};

export default CssReference;