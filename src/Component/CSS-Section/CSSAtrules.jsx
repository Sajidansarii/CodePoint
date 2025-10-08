import { Dessert } from "lucide-react";
import React from "react";

export default function CssAtRules() {
  const atRules = [
    {
      name: "@import",
      desc: "It is used to import an external CSS file.",
      example: `@import url("styles.css");\n\nbody {\n  background: lightblue;\n}`,
    },
    {
      name: "@media",
      desc: "It applies styles on different screen sizes for responsive design.",
      example: `@media (max-width: 600px) {\n  body {\n    background-color: yellow;\n  }\n}`,
    },
    {
      name: "@font-face",
      desc: "It is used to load custom fonts.",
      example: `@font-face {\n  font-family: "MyFont";\n  src: url("myfont.woff2") format("woff2");\n}\n\nh1 {\n  font-family: "MyFont", sans-serif;\n}`,
    },
    {
      name: "@keyframes",
      desc: "It is used to define CSS animations.",
      example: `@keyframes bounce {\n  0%   { transform: translateY(0); }\n  50%  { transform: translateY(-50px); }\n  100% { transform: translateY(0); }\n}\n\ndiv {\n  animation: bounce 2s infinite;\n}`,
    },
    {
      name: "@supports",
      desc: "It checks whether the browser supports a CSS property or not.",
      example: `@supports (display: grid) {\n  div {\n    display: grid;\n  }\n}`,
    },
    {
      name: "@page",
      desc: "It is used for print styles.",
      example: `@page {\n  margin: 2cm;\n}`,
    },
    {
      name: "@charset",
      desc: "It defines the character encoding of the CSS file.",
      example: `@charset "UTF-8";`,
    },
    {
      name: "@namespace",
      desc: "It is used to write CSS for XML/HTML namespaces.",
      example: `@namespace url(http://www.w3.org/1999/xhtml);,`
    },
  ];

  const data = [
    {At_rule:'@charset', Description:'Specifies the character encoding used in the style sheet'},
    {At_rule:'@container', Description:"Define styles for elements in container, depending on the container's size or style"},
    {At_rule:'@counter-style', Description:'Lets you define your own counter styles'},
    {At_rule:'@font-face', Description:'Specifies a custom font with which to display text'},
    {At_rule:'@font-palette-values', Description:'Allows you to customize the default values of a font-palette'},
    {At_rule:'@import', Description:'Allows you to import a style sheet into another style sheet'},
    {At_rule:'@keyframes', Description:'Controls the steps in an animation by defining styles for points along the animation sequence'},
    {At_rule:'@layer', Description:'Used to control how the CSS cascade layers evaluates the order of styles'},
    {At_rule:'@media', Description:'Applies parts of a style sheet based on the result of one or more media queries'},
    {At_rule:'@namespace', Description:'Defines an XML namespace to be used in the style sheet'},
    {At_rule:'@page', Description:'Customizes the dimension, orientation, and margins of printed pages'},
    {At_rule:'@property', Description:'Allows you to define custom CSS properties directly in the stylesheet without having to run any JavaScript. This at-rule has data type checking and constraining, sets default values, and defines whether the property can inherit values or not'},
    {At_rule:'@scope', Description:'Allows you to select elements in specific DOM subtrees and target elements precisely without writing overly-specific selectors'},
    {At_rule:'@starting-style', Description:"Defines an element's starting styles before the element gets its first style update"},
    {At_rule:'@supports', Description:'Used to test whether a browser supports a CSS feature'},

  ];

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-medium text-blue-500 mb-10">CSS At-rules Reference
      </h1>
      <p>CSS at-rules are special instructions that tell the CSS how to operate. They always start with an @ symbol followed by a specific rule name.</p>
      <p className="mt-3">The following table lists the various at-rules used in CSS:</p>
      <table className="min-w-full border border-gray-300 text-gray-700 text-sm text-left rounded-md mt-10 mb-10">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2 border-b border-gray-300 font-bold">At-rule</th>
            <th className="px-4 py-2 border-b border-gray-300 font-bold">Description</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row,index)=>(
            <tr className="cursor-text hover:bg-gray-100">
              <td className="px-4 py-2 border-b border-gray-200">{row.At_rule}</td>
              <td className="px-4 py-2 border-b border-gray-200">{row.Description}</td>
            </tr>
          ))}
        </tbody>
      </table>

       <h1 className="text-2xl mb-5">Examples</h1>
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