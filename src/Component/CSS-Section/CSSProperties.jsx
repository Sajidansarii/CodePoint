import React from "react";

const cssProperties = [
  {
    name: "color",
    code: `p {
  color: red;
}`,
    explanation: "Text ka color set karta hai. Yaha <p> ka text red ho jayega."
  },
  {
    name: "background-color",
    code: `div {
  background-color: lightblue;
}`,
    explanation: "Background color set karta hai. Yaha <div> ka background light blue hoga."
  },
  {
    name: "font-size",
    code: `h1 {
  font-size: 36px;
}`,
    explanation: "Font size change karta hai. Yaha <h1> ka text 36px ka ho jayega."
  },
  {
    name: "margin",
    code: `p {
  margin: 20px;
}`,
    explanation: "Element ke bahar ki space set karta hai. Yaha <p> ke 4 taraf 20px space milegi."
  },
  {
    name: "padding",
    code: `div {
  padding: 15px;
}`,
    explanation: "Element ke andar ki space set karta hai. Yaha <div> ke andar 15px space hogi."
  },
  {
    name: "border",
    code: `div {
  border: 2px solid black;
}`,
    explanation: "Element ka border define karta hai. Yaha <div> ke around black border hai."
  },
  {
    name: "width / height",
    code: `img {
  width: 200px;
  height: 150px;
}`,
    explanation: "Element ka size fix karta hai. Yaha image 200x150 px ka hoga."
  },
  {
    name: "display",
    code: `span {
  display: block;
}`,
    explanation: "Element ke layout behavior ko change karta hai. Yaha <span> block ban gaya."
  },
  {
    name: "position",
    code: `div {
  position: absolute;
  top: 50px;
  left: 100px;
}`,
    explanation: "Element ko reposition karta hai. Yaha <div> ko 50px top aur 100px left rakha gaya."
  },
  {
    name: "text-align",
    code: `h2 {
  text-align: center;
}`,
    explanation: "Text ko horizontally align karta hai. Yaha <h2> ka text center me hoga."
  },
];

export default function CssProperties() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-medium text-blue-500 mb-6">
        CSS Properties
      </h1>
      <p className="mb-6 text-gray-700">
        CSS properties wo keywords hote hain jo HTML elements ke style define
        karte hain. Har property ke ek ya ek se zyada values hoti hain jo decide
        karti hain element ka look aur layout.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        {cssProperties.map((prop, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-xl p-4 border border-gray-200 hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              {prop.name}
            </h2>
            <pre className="bg-gray-900 text-green-400 text-sm p-3 rounded-md mb-3 overflow-x-auto">
              <code>{prop.code}</code>
            </pre>
            <p className="text-gray-600">{prop.explanation}</p>
          </div>
        ))}
      </div>
    </div>
  );
}