import React from "react";

const CSSIntroduction = () => {
  return (
    <div className="p-4 sm:p-6 md:p-8 max-w-4xl">
      <h1 className="text-3xl font-medium text-blue-500 mb-3">CSS Introduction</h1>

      <p className="mb-4">
        <strong>CSS (Cascading Style Sheets)</strong> is used to style and
        design web pages. It controls the{" "}
        <span className="italic">layout, colors, fonts, and responsiveness</span> 
        of HTML elements. CSS works alongside HTML to improve the user experience 
        and make websites visually appealing.
      </p>

      <h2 className="text-xl font-semibold mb-2">Why Learn CSS?</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Create visually attractive web pages</li>
        <li>Separate content (HTML) from design (CSS)</li>
        <li>Make layouts responsive for mobile, tablet, and desktop</li>
        <li>Control animations, transitions, and effects</li>
        <li>Reuse styles across multiple pages</li>
      </ul>

      <h2 className="text-xl font-semibold mb-2">
        How Does CSS Work?
      </h2>
      <p className="mb-4">
        CSS works by selecting HTML elements and applying styles to them using
        selectors and properties.
      </p>

     <pre className="bg-gray-200 p-4 rounded-lg overflow-x-auto max-w-full whitespace-pre-wrap mb-5">
  <code>
    <span className="text-gray-500">/* Example CSS */</span><br /><br />

    <span className="text-blue-500">body</span> <span>{'{'}</span><br />
    &nbsp;&nbsp;<span className="text-red-500">background-color</span>: <span className="text-green-700">#f2f2f2</span>;<br />
    &nbsp;&nbsp;<span className="text-red-500">font-family</span>: <span className="text-green-700">Arial, sans-serif</span>;<br />
    <span>{'}'}</span><br /><br />

    <span className="text-blue-500">h1</span> <span>{'{'}</span><br />
    &nbsp;&nbsp;<span className="text-red-500">color</span>: <span className="text-green-700">#2563eb</span>;<br />
    &nbsp;&nbsp;<span className="text-red-500">text-align</span>: <span className="text-green-700">center</span>;<br />
    <span>{'}'}</span><br /><br />

    <span className="text-blue-500">p</span> <span>{'{'}</span><br />
    &nbsp;&nbsp;<span className="text-red-500">color</span>: <span className="text-green-700">#555</span>;<br />
    &nbsp;&nbsp;<span className="text-red-500">font-size</span>: <span className="text-green-700">16px</span>;<br />
    &nbsp;&nbsp;<span className="text-red-500">text-align</span>: <span className="text-green-700">center</span>;<br />
    <span>{'}'}</span>
  </code>
</pre>

      <h2 className="text-xl font-semibold text-gray-800 mb-2">
        Three Ways to Add CSS
      </h2>
      <ul className="list-disc list-inside text-gray-700">
        <li>
          <strong>Inline CSS</strong> – style directly inside the HTML element
        </li>
        <li>
          <strong>Internal CSS</strong> – style inside a
          {" <style>"} tag in the HTML file
        </li>
        <li>
          <strong>External CSS</strong> – link a separate .css file
        </li>
      </ul>
    </div>
  );
};

export default CSSIntroduction;