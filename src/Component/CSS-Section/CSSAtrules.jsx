import React from "react";

export default function CssAtRules() {
  const atRules = [
    {
      name: "@import",
      desc: "External CSS file import karne ke liye use hota hai.",
      example: `@import url("styles.css");\n\nbody {\n  background: lightblue;\n}`,
    },
    {
      name: "@media",
      desc: "Responsive design ke liye different screen sizes par style apply karta hai.",
      example: `@media (max-width: 600px) {\n  body {\n    background-color: yellow;\n  }\n}`,
    },
    {
      name: "@font-face",
      desc: "Custom fonts load karne ke liye use hota hai.",
      example: `@font-face {\n  font-family: "MyFont";\n  src: url("myfont.woff2") format("woff2");\n}\n\nh1 {\n  font-family: "MyFont", sans-serif;\n}`,
    },
    {
      name: "@keyframes",
      desc: "CSS animations define karne ke liye use hota hai.",
      example: `@keyframes bounce {\n  0%   { transform: translateY(0); }\n  50%  { transform: translateY(-50px); }\n  100% { transform: translateY(0); }\n}\n\ndiv {\n  animation: bounce 2s infinite;\n}`,
    },
    {
      name: "@supports",
      desc: "Check karta hai ki browser ek CSS property support karta hai ya nahi.",
      example: `@supports (display: grid) {\n  div {\n    display: grid;\n  }\n}`,
    },
    {
      name: "@page",
      desc: "Print styles ke liye use hota hai.",
      example: `@page {\n  margin: 2cm;\n}`,
    },
    {
      name: "@charset",
      desc: "CSS file ki character encoding define karta hai.",
      example: `@charset "UTF-8";`,
    },
    {
      name: "@namespace",
      desc: "XML/HTML namespace ke liye CSS likhne me use hota hai.",
      example: `@namespace url(http://www.w3.org/1999/xhtml);,`
    },
  ];

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center text-indigo-600 mb-10">
         CSS @Rules Reference
      </h1>

      <div className="grid gap-6 md:grid-cols-2">
        {atRules.map((rule, index) => (
          <div
            key={index}
            className="border rounded-2xl p-6 shadow-md hover:shadow-xl transition bg-white"
          >
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              {rule.name}
            </h2>
            <p className="text-gray-600 mb-4">{rule.desc}</p>
            <pre className="bg-gray-900 text-green-300 text-sm p-4 rounded-lg overflow-x-auto">
              <code>{rule.example}</code>
            </pre>
          </div>
        ))}
      </div>
    </div>
  );
}