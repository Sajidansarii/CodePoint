import React from "react";

const CssSelectors = () => {
  const selectors = [
    {
      selector: "*",
      description: "Universal selector – sabhi elements ko target karta hai.",
      example: "* { margin: 0; padding: 0; }"
    },
    {
      selector: "p",
      description: "Type selector – sabhi <p> elements ko target karta hai.",
      example: "p { color: blue; }"
    },
    {
      selector: ".highlight",
      description: "Class selector – 'highlight' class wale elements ko target karta hai.",
      example: ".highlight { background-color: yellow; }"
    },
    {
      selector: "#main",
      description: "ID selector – 'main' id wale element ko target karta hai.",
      example: "#main { border: 2px solid red; }"
    },
    {
      selector: "h1, h2, p",
      description: "Group selector – multiple elements ek sath select karta hai.",
      example: "h1, h2, p { font-family: Arial; }"
    },
    {
      selector: "div p",
      description: "Descendant selector – div ke andar ke <p> elements ko target karta hai.",
      example: "div p { font-size: 18px; }"
    },
    {
      selector: "a:hover",
      description: "Pseudo-class – jab anchor link pe hover hota hai tab style apply karta hai.",
      example: "a:hover { color: green; }"
    }
  ];

  return (
    <div className="p-6">
      <h2 className="text-3xl text-blue-500 font-medium mb-4">CSS Selectors</h2>
      <p className="mb-6 text-gray-700">
        <b>CSS Selectors</b> ka use HTML elements ko select karne ke liye hota hai. 
        Ye selectors decide karte hain ki kaunse element pe CSS style apply hoga.
      </p>

      {/* Selectors List */}
      <div className="grid md:grid-cols-2 gap-6">
        {selectors.map((item, index) => (
          <div
            key={index}
            className="p-4 border rounded-lg bg-white shadow-sm"
          >
            <h3 className="text-lg font-semibold text-blue-600">
              {item.selector}
            </h3>
            <p className="text-gray-700 mt-1">{item.description}</p>
            <pre className="bg-black text-green-400 p-2 rounded-lg mt-2 text-sm overflow-x-auto">
              {item.example}
            </pre>
          </div>
        ))}
      </div>

      {/* Example Usage */}
      <div className="mt-8 bg-gray-100 p-4 rounded-lg">
        <h3 className="text-lg font-semibold mb-2">Example Usage:</h3>
        <pre className="bg-black text-green-400 p-3 rounded-lg text-sm overflow-x-auto">
{`<div id="main">
  <h1 class="highlight">Hello CSS</h1>
  <p>This is a paragraph.</p>
  <a href="#">Hover over me</a>
</div>`}
        </pre>

        <pre className="bg-black text-green-400 p-3 rounded-lg text-sm mt-3 overflow-x-auto">
{`* { margin: 0; padding: 0; }
p { color: blue; }
.highlight { background-color: yellow; }
#main { border: 2px solid red; }
a:hover { color: green; }`}
        </pre>
      </div>

      {/* Explanation */}
      <p className="mt-4 text-gray-700">
        👉 Is example me <b>universal selector</b> sab elements ka margin aur padding 
        reset karta hai, <b>class selector</b> background highlight karta hai, 
        <b>ID selector</b> border lagata hai aur <b>pseudo-class</b> hover par 
        anchor ka color change karta hai.
      </p>
    </div>
  );
};

export default CssSelectors;