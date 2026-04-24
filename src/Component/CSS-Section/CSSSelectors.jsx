import { Expand } from "lucide-react";
import React from "react";

const CssSelectors = () => {
  const selectors = [
    {
      selector: "*",
      description: "Universal selector – It targets all elements.",
      example: "* { margin: 0; padding: 0; }"
    },
    {
      selector: "p",
      description: "Type selector – It targets all <p> elements.",
      example: "p { color: blue; }"
    },
    {
      selector: ".highlight",
      description: "Class selector – 'It targets elements with the class 'highlight'.",
      example: ".highlight { background-color: yellow; }"
    },
    {
      selector: "#main",
      description: "ID selector – It targets the element with the ID 'main'.",
      example: "#main { border: 2px solid red; }"
    },
    {
      selector: "h1, h2, p",
      description: "Group selector – Group selector – selects multiple elements at once.",
      example: "h1, h2, p { font-family: Arial; }"
    },
    {
      selector: "div p",
      description: "Descendant selector – Descendant selector – targets the <p> elements inside a div.",
      example: "div p { font-size: 18px; }"
    },
    {
      selector: "a:hover",
      description: "Pseudo-class – Pseudo-class – applies a style when the anchor link is hovered over.",
      example: "a:hover { color: green; }"
    }
  ];

  const data = [
    {Selector:'element', Example:'p', Exampledescription:'Selects all <p> elements'},
    {Selector:'#id', Example:'#firstname', Exampledescription:'Selects the element with id="firstname"'},
    {Selector:'*', Example:'*', Exampledescription:'Selects all elements'},
    {Selector:'.class', Example:'	.intro, p.intro', Exampledescription:'Selects all elements with class="intro"Selects all <p> elements with class="intro"'}
  ];

  const data2 = [
    {Selector:'[attribute]', Example:'[lang]', Exampledescription:'	Selects all elements with a lang attribute'},
    {Selector:'[attribute=value]', Example:'[lang="it"]', Exampledescription:'Selects all elements with lang="it"'},
    {Selector:'[attribute~=value]', Example:'[title~="flower"]', Exampledescription:'Selects all elements with a title attribute containing the word "flower"'},
    {Selector:'[attribute|=value]', Example:'[lang|="en"]', Exampledescription:'Selects all elements with a lang attribute value equal to "en" or starting with "en-"'},
    {Selector:'[attribute^=value]', Example:'[href^="https"]', Exampledescription:'Selects all elements with a href attribute value that begins with "https"'},
    {Selector:'[attribute$=value]', Example:'[href$=".pdf"]', Exampledescription:'Selects all elements with a href attribute value ends with ".pdf"'},
    {Selector:'[attribute$=value]', Example:'[href$=".pdf"]', Exampledescription:'Selects all elements with a href attribute value ends with ".pdf"'},
    {Selector:'[attribute*=value]', Example:'[href*="w3schools"]', Exampledescription:'Selects all elements with a href attribute value containing the substring "w3schools"'},

  ];
  const data3 = [
    {Selector:'&', Example:'&', Exampledescription:'Applies styles for an element within the context of another element'},
  ];

  return (
    <div className="p-6 max-w-4xl space-y-6 mt-10">
      <h2 className="text-3xl text-blue-500 font-medium mb-4">CSS Selectors</h2>
      <p className="mb-2">
        CSS selectors are used to select HTML elements. These selectors determine which elements the CSS styles will be applied to.</p>
        <p>Test how different CSS selectors work with our CSS Selector Tester.</p>
        <h1 className="text-2xl mt-10 mb-2">CSS Simple Selectors</h1>
        <p>Simple selectors allow you to choose elements based on their element name, ID, or class. The universal selector (*) selects every element on the page.</p>

        <table className="min-w-full border mt-10 border-gray-300 text-gray-700 text-sm text-left rounded-md">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2 border-b border-gray-300 text-gray-700 font-bold">Selector</th>
              <th className="px-4 py-2 border-b border-gray-300 text-gray-700 font-bold">Example</th>
              <th className="px-4 py-2 border-b border-gray-300 text-gray-700 font-bold">Example description</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row,index)=>(
              <tr className="cursor-text hover:bg-gray-100">
                <td className="px-4 py-2 border-b border-gray-200">{row.Selector}</td>
                <td className="px-4 py-2 border-b border-gray-200">{row.Example}</td>
                <td className="px-4 py-2 border-b border-gray-200">{row.Exampledescription}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <h1 className="text-2xl mt-10 mb-2">CSS Attribute Selectors</h1>
        <p>HTML elements with a certain attribute can be selected using the attribute selector. </p>
        <div className="w-full overflow-x-scroll">
       <table className="min-w-full mt-10 border border-gray-300 text-gray-700 text-sm text-left rounded-md">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2 border-b border-gray-300 text-gray-700 font-bold">Selector</th>
              <th className="px-4 py-2 border-b border-gray-300 text-gray-700 font-bold">Example</th>
              <th className="px-4 py-2 border-b border-gray-300 text-gray-700 font-bold">Example description</th>
            </tr>
          </thead>
          <tbody>
            {data2.map((row,index)=>(
              <tr className="cursor-text hover:bg-gray-100">
                <td className="px-4 py-2 border-b border-gray-200">{row.Selector}</td>
                <td className="px-4 py-2 border-b border-gray-200">{row.Example}</td>
                <td className="px-4 py-2 border-b border-gray-200">{row.Exampledescription}</td>
              </tr>
            ))}
          </tbody>
        </table>
            </div>

        <h1 className="text-2xl mt-10">CSS Nesting Selector</h1>
        <table className="min-w-full border mt-10 border-gray-300 text-gray-700 text-sm text-left rounded-md">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2 border-b border-gray-300 text-gray-700 font-bold">Selector</th>
              <th className="px-4 py-2 border-b border-gray-300 text-gray-700 font-bold">Example</th>
              <th className="px-4 py-2 border-b border-gray-300 text-gray-700 font-bold">Example description</th>
            </tr>
          </thead>
          <tbody>
            {data3.map((row,index)=>(
              <tr className="cursor-text hover:bg-gray-100">
                <td className="px-4 py-2 border-b border-gray-200">{row.Selector}</td>
                <td className="px-4 py-2 border-b border-gray-200">{row.Example}</td>
                <td className="px-4 py-2 border-b border-gray-200">{row.Exampledescription}</td>
              </tr>
            ))}
          </tbody>
        </table>



      {/* Selectors List */}
      <div className="grid mt-10 md:grid-cols-2 gap-6">
        {selectors.map((item, index) => (
          <div
            key={index}
            className="p-4 border rounded-lg bg-white shadow-sm"
          >
            <h3 className="text-lg font-semibold text-blue-600">
              {item.selector}
            </h3>
            <p className="text-gray-700 mt-1">{item.description}</p>
            <pre className="bg-gray-200 p-4 rounded-lg mt-5 overflow-x-auto max-w-full whitespace-pre-wrap">
              <code>
              {item.example}
              </code>
            </pre>
          </div>
        ))}
      </div>

      {/* Example Usage */}
      <div className="mt-8 bg-gray-100 p-4 rounded-lg">
        <h3 className="text-lg font-semibold mb-2">Example Usage:</h3>
       <pre className="bg-gray-200 p-4 rounded-lg overflow-x-auto max-w-full whitespace-pre-wrap">
  <code>
    <span className="text-blue-600">&lt;div</span> <span className="text-red-500">id</span>=<span className="text-green-700">"main"</span><span className="text-blue-600">&gt;</span><br />

    &nbsp;&nbsp;<span className="text-blue-600">&lt;h1</span> <span className="text-red-500">class</span>=<span className="text-green-700">"highlight"</span><span className="text-blue-600">&gt;</span>
    Hello CSS
    <span className="text-blue-600">&lt;/h1&gt;</span><br />

    &nbsp;&nbsp;<span className="text-blue-600">&lt;p&gt;</span>This is a paragraph.<span className="text-blue-600">&lt;/p&gt;</span><br />

    &nbsp;&nbsp;<span className="text-blue-600">&lt;a</span> <span className="text-red-500">href</span>=<span className="text-green-700">"#"</span><span className="text-blue-600">&gt;</span>
    Hover over me
    <span className="text-blue-600">&lt;/a&gt;</span><br />

    <span className="text-blue-600">&lt;/div&gt;</span>
  </code>
</pre>

       <pre className="bg-gray-200 p-4 rounded-lg overflow-x-auto max-w-full whitespace-pre-wrap mt-5">
  <code>
    <span className="text-blue-600">*</span> <span>{'{'}</span>
    <span className="text-red-500"> margin</span>: <span className="text-green-700">0</span>; 
    <span className="text-red-500"> padding</span>: <span className="text-green-700">0</span>;
    <span>{'}'}</span><br />

    <span className="text-blue-600">p</span> <span>{'{'}</span>
    <span className="text-red-500"> color</span>: <span className="text-green-700">blue</span>;
    <span>{'}'}</span><br />

    <span className="text-blue-600">.highlight</span> <span>{'{'}</span>
    <span className="text-red-500"> background-color</span>: <span className="text-green-700">yellow</span>;
    <span>{'}'}</span><br />

    <span className="text-blue-600">#main</span> <span>{'{'}</span>
    <span className="text-red-500"> border</span>: <span className="text-green-700">2px solid red</span>;
    <span>{'}'}</span><br />

    <span className="text-blue-600">a:hover</span> <span>{'{'}</span>
    <span className="text-red-500"> color</span>: <span className="text-green-700">green</span>;
    <span>{'}'}</span>
  </code>
</pre>
      </div>

      {/* Explanation */}
      <p className="mt-4 text-gray-700">
       In this example, the universal selector resets the margin and padding of all elements, the class selector highlights the background, the ID selector adds a border, and the pseudo-class changes the anchor color on hover.
      </p>
    </div>
  );
};

export default CssSelectors;