import React from "react";

const CSSIntroduction = () => {
  return (
    <div className="p-4 sm:p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-blue-600 mb-4">CSS Introduction</h1>

      <p className="text-gray-700 mb-4">
        <strong>CSS (Cascading Style Sheets)</strong> is used to style and
        design web pages. It controls the{" "}
        <span className="italic">layout, colors, fonts, and responsiveness</span> 
        of HTML elements. CSS works alongside HTML to improve the user experience 
        and make websites visually appealing.
      </p>

      <h2 className="text-xl font-semibold text-gray-800 mb-2">Why Learn CSS?</h2>
      <ul className="list-disc list-inside text-gray-700 mb-4">
        <li>Create visually attractive web pages</li>
        <li>Separate content (HTML) from design (CSS)</li>
        <li>Make layouts responsive for mobile, tablet, and desktop</li>
        <li>Control animations, transitions, and effects</li>
        <li>Reuse styles across multiple pages</li>
      </ul>

      <h2 className="text-xl font-semibold text-gray-800 mb-2">
        How Does CSS Work?
      </h2>
      <p className="text-gray-700 mb-4">
        CSS works by selecting HTML elements and applying styles to them using
        selectors and properties.
      </p>

      <div className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto mb-6 text-sm">
        <pre>
{`/* Example CSS */
body {
  background-color: #f2f2f2;
  font-family: Arial, sans-serif;
}

h1 {
  color: #2563eb;
  text-align: center;
}

p {
  color: #555;
  font-size: 16px;
  text-align: center;
}`}
        </pre>
      </div>

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