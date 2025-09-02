import React from "react";

const CssColorValues = () => {
  const examples = [
    {
      title: "Color Names",
      code: h1 `{ color: red; }`,
      explanation: "Predefined names jaise red, blue, green, yellow ka use hota hai.",
      preview: <h1 className="text-red-500 font-bold">This is Red</h1>,
    },
    {
      title: "HEX Values",
      code: h1 `{ color: #ff0000; }`,
      explanation: "Colors hexadecimal format me define hote hain (#RRGGBB).",
      preview: <h1 style={{ color: "#ff0000" }}>This is HEX (#ff0000)</h1>,
    },
    {
      title: "RGB Values",
      code: h1 `{ color: rgb(255, 0, 0); }`,
      explanation: "RGB ka matlab hai Red, Green, Blue values (0-255).",
      preview: <h1 style={{ color: "rgb(255,0,0)" }}>This is RGB(255,0,0)</h1>,
    },
    {
      title: "RGBA Values",
      code: h1 `{ color: rgba(255, 0, 0, 0.5); }`,
      explanation: "RGBA me A ka matlab Alpha (opacity) hota hai (0-1).",
      preview: (
        <h1 style={{ color: "rgba(255,0,0,0.5)" }}>
          This is RGBA(255,0,0,0.5)
        </h1>
      ),
    },
    {
      title: "HSL Values",
      code: h1 `{ color: hsl(0, 100%, 50%); }`,
      explanation: "HSL = Hue, Saturation, Lightness format me color define hota hai.",
      preview: <h1 style={{ color: "hsl(0, 100%, 50%)" }}>This is HSL</h1>,
    },
    {
      title: "HSLA Values",
      code: h1 `{ color: hsla(0, 100%, 50%, 0.5); }`,
      explanation: "HSLA me opacity (alpha channel) add hota hai.",
      preview: (
        <h1 style={{ color: "hsla(0, 100%, 50%, 0.5)" }}>This is HSLA</h1>
      ),
    },
    {
      title: "Currentcolor",
      code: p `{ color: blue; border: 2px solid currentcolor; }`,
      explanation: "currentcolor element ke text color ko border/background ke liye use karta hai.",
      preview: (
        <p className="text-blue-500 border-2 border-current p-2 inline-block">
          CurrentColor Example
        </p>
      ),
    },
    {
      title: "Transparent",
      code: div `{ background-color: transparent; }`,
      explanation: "Transparent ka matlab hai fully invisible background.",
      preview: (
        <div className="bg-transparent border border-gray-400 p-2">
          Transparent Background
        </div>
      ),
    },
  ];

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-blue-600">
        🎨 CSS Color Values
      </h1>
      <p className="mb-6 text-gray-700">
        CSS me colors ko define karne ke liye multiple formats available hote
        hain jaise names, HEX, RGB, RGBA, HSL, HSLA, etc. Niche har ek ka code
        aur live example diya gaya hai:
      </p>

      <div className="grid gap-6 md:grid-cols-2">
        {examples.map((ex, index) => (
          <div
            key={index}
            className="p-4 border rounded-lg shadow bg-white space-y-3"
          >
            <h2 className="text-xl font-semibold text-gray-800">{ex.title}</h2>
            <p className="text-gray-600">{ex.explanation}</p>
            <pre className="bg-gray-900 text-green-400 p-3 rounded text-sm overflow-x-auto">
              {ex.code}
            </pre>
            <div className="p-3 border rounded bg-gray-50">{ex.preview}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CssColorValues;