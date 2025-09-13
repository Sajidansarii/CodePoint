import React from "react";

const PerformanceExample = () => {
  return (
    <div className="p-6 font-sans">
      <h1 className="text-3xl font-medium text-blue-500 mb-4">CSS Performance Optimization</h1>
      <h1 className="text-2xl mb-2">Optimizing CSS</h1>
      <p className="mb-2">Optimizing your CSS helps your website load faster and perform more efficiently, ultimately improving the overall user experience.</p>
      <p>Here are some tips for optimizing CSS; it's too important to overlook.</p>
      <h1 className="text-2xl mt-10">Use Simple Selectors</h1>
      <p>Simple selectors are faster for browsers to process. Avoid overly complex ones to reduce CSS parsing time.</p>
      <h1 className="text-2xl mt-5 mb-2">Example</h1>
      <div className="bg-gray-200 rounded-lg p-4">
        <pre>
          {`.button:hover {
  background-color: blue;
}`}
        </pre>
      </div>
      <h1 className="text-2xl mt-10">Avoid Universal Selector for Styling</h1>
      <p>Avoid the universal selector (*) when not strictly necessary. The universal selector (*) affects every element and can slow down page rendering.</p>
      <h1 className="text-2xl mt-5">Example</h1>
      <div className="bg-gray-200 rounded-lg p-4 mt-2">
        <pre>
          {`* {
  margin: 0;
  padding: 0;
  font-size: 16px;
}`}
        </pre>
      </div>
      <h1 className="text-2xl mt-10">Avoid Inline Styles</h1>
      <p>Inline styles add unnecessary weight to your HTML and reduce maintainability—avoid them when you can.</p>
      <div className="bg-gray-200 rounded-lg p-4 mt-5">
        <pre>
          {`<div style="color: red; font-size: 18px;">Hello</div>
<p style="color: blue; font-size: 16px;">Test</p>`}
        </pre>
      </div>
      
      <h1 className="text-2xl mt-5 mb-3">Avoid @import</h1>
      <p>Avoid using <span className="bg-gray-200 px-1 rounded-md">@import</span> to load external CSS files, as it can delay stylesheet loading and negatively affect performance.</p>
      <p>Add external CSS with the {'<link>'} tag in the head section, so it loads before the page is rendered.</p>
      <h1 className="text-2xl mt-3">Example</h1>
      <div className="bg-gray-200 rounded-lg p-4 mt-3">
        <pre>
          {`<link rel="stylesheet" href="style.css">`}
        </pre>
      </div>

      <h1 className="text-2xl mt-10 mb-2">Use Shorthand Properties</h1>
      <p>Leveraging shorthand properties reduces stylesheet size and improves parsing performance during rendering.</p>
      <div className="bg-gray-200 rounded-lg p-4 mt-5">
        <pre>
          {`/* Long version */
margin-top: 10px;
margin-right: 20px;
margin-bottom: 10px;
margin-left: 20px;

/* Shorthand version */
margin: 10px 20px;`}
        </pre>
      </div>

      <h1 className="text-2xl mt-10">Cut Down Unnecessary Animations</h1>
      <p>Animations consume processing resources. Minimize or remove non-essential animations to maintain smooth performance.</p>
      <h1 className="text-2xl mt-5 mb-2">Use Properties that Not Cause Repaint of Animations</h1>
      <p>Animation efficiency varies based on the CSS properties being animated.</p>
      <p>Animations on properties like width, height, left, and top trigger layout recalculations, negatively impacting rendering performance.</p>
      <p>Use animation properties such as transform, opacity, and filter to avoid repaint triggers and enhance rendering efficiency.</p>

      <h1 className="text-2xl mt-10">Combine and Minify CSS</h1>
      <p>Consolidate stylesheets into a single file and minify by eliminating whitespace and comments to optimize file size <br /> and loading speed.</p>
      <p className="mt-4">To help with this, you can use tools such as:</p>
      <ul className="list-[square] list-inside mt-5">
        <li>CSS Minifier</li>
        <li>PostCSS</li>
        <li>Online compressors</li>
      </ul>

      <h1 className="text-2xl mt-5">Cache Your CSS</h1>
      <p>Configure your server to assign long cache lifetimes to CSS files, reducing redundant network requests and improving performance.</p>
      <h1 className="text-2xl mt-5">Summary</h1>
      <ul className="list-[square] list-inside">
        <li>Keep selectors short and simple</li>
        <li>Avoid layout-thrashing operations</li>
        <li>Use efficient animation techniques</li>
        <li>Use external, minified, and cached stylesheets</li>
      </ul>
    </div>
  );
};

export default PerformanceExample;