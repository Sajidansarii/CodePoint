import React from "react";

const HowToAddCSS = () => {
  return (
    <div className="p-4 sm:p-6 max-w-4xl space-y-6 mt-10">
      <h1 className="text-3xl font-medium text-blue-500 mb-4">How to Add CSS</h1>

      <p className="mb-4">
        CSS can be added to HTML in <strong>three different ways</strong>. Each
        method has its own use case depending on the project size and structure.
      </p>

      {/* Inline CSS */}
      <h2 className="text-xl font-semibold text-gray-800 mb-2">1. Inline CSS</h2>
      <p className="mb-2">
        Inline CSS is used to apply a unique style directly to a single element.
        It is written inside the <code>style</code> attribute of an HTML tag.
      </p>

     <pre className="bg-gray-200 p-4 rounded-lg mb-5 overflow-x-auto max-w-full whitespace-pre-wrap">
  <code>
    <span className="text-blue-600">&lt;h1</span> <span className="text-red-500">style</span>=<span className="text-green-700">"color: blue; text-align: center;"</span><span className="text-blue-600">&gt;</span><br />
    &nbsp;&nbsp;This is an inline styled heading<br />
    <span className="text-blue-600">&lt;/h1&gt;</span>
  </code>
</pre>

      {/* Internal CSS */}
      <h2 className="text-xl font-semibold text-gray-800 mb-2">2. Internal CSS</h2>
      <p className="mb-2">
        Internal CSS is used to style a single HTML page. It is written inside
        the <code>&lt;style&gt;</code> tag within the <code>&lt;head&gt;</code> section.
      </p>

      <pre className="bg-gray-200 p-4 rounded-lg mb-5 overflow-x-auto max-w-full whitespace-pre-wrap">
  <code>
    <span className="text-blue-600">&lt;!DOCTYPE html&gt;</span><br />
    <span className="text-blue-600">&lt;html&gt;</span><br />

    <span className="text-blue-600">&lt;head&gt;</span><br />
    &nbsp;&nbsp;<span className="text-blue-600">&lt;style&gt;</span><br />

    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-600">body</span> <span>{'{'}</span><br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-500">background-color</span>: <span className="text-green-700">lightyellow</span>;<br />
    &nbsp;&nbsp;&nbsp;&nbsp;<span>{'}'}</span><br />

    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-600">h1</span> <span>{'{'}</span><br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-500">color</span>: <span className="text-green-700">green</span>;<br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-500">text-align</span>: <span className="text-green-700">center</span>;<br />
    &nbsp;&nbsp;&nbsp;&nbsp;<span>{'}'}</span><br />

    &nbsp;&nbsp;<span className="text-blue-600">&lt;/style&gt;</span><br />
    <span className="text-blue-600">&lt;/head&gt;</span><br />

    <span className="text-blue-600">&lt;body&gt;</span><br />
    &nbsp;&nbsp;<span className="text-blue-600">&lt;h1&gt;</span>Internal CSS Example<span className="text-blue-600">&lt;/h1&gt;</span><br />
    <span className="text-blue-600">&lt;/body&gt;</span><br />

    <span className="text-blue-600">&lt;/html&gt;</span>
  </code>
</pre>

      {/* External CSS */}
      <h2 className="text-xl font-semibold text-gray-800 mb-2">3. External CSS</h2>
      <p className="text-gray-700 mb-2">
        External CSS is used to style multiple pages by linking an external
        <code>.css</code> file to your HTML document. This is the most common
        and recommended method for large projects.
      </p>

     <pre className="bg-gray-200 p-4 rounded-lg mb-5 overflow-x-auto max-w-full whitespace-pre-wrap">
  <code>
    <span className="text-gray-500">/* style.css */</span><br />

    <span className="text-blue-600">body</span> <span>{'{'}</span><br />
    &nbsp;&nbsp;<span className="text-red-500">font-family</span>: <span className="text-green-700">Arial, sans-serif</span>;<br />
    &nbsp;&nbsp;<span className="text-red-500">background-color</span>: <span className="text-green-700">#f4f4f4</span>;<br />
    <span>{'}'}</span><br /><br />

    <span className="text-blue-600">h1</span> <span>{'{'}</span><br />
    &nbsp;&nbsp;<span className="text-red-500">color</span>: <span className="text-green-700">navy</span>;<br />
    &nbsp;&nbsp;<span className="text-red-500">text-align</span>: <span className="text-green-700">center</span>;<br />
    <span>{'}'}</span>
  </code>
</pre>

     <pre className="bg-gray-200 p-4 rounded-lg mb-5 overflow-x-auto max-w-full whitespace-pre-wrap">
  <code>
    <span className="text-gray-500">&lt;!-- index.html --&gt;</span><br />
    <span className="text-blue-600">&lt;!DOCTYPE html&gt;</span><br />
    <span className="text-blue-600">&lt;html&gt;</span><br />

    <span className="text-blue-600">&lt;head&gt;</span><br />
    &nbsp;&nbsp;<span className="text-blue-600">&lt;link</span> <span className="text-red-500">rel</span>=<span className="text-green-700">"stylesheet"</span> <span className="text-red-500">href</span>=<span className="text-green-700">"style.css"</span><span className="text-blue-600">&gt;</span><br />
    <span className="text-blue-600">&lt;/head&gt;</span><br />

    <span className="text-blue-600">&lt;body&gt;</span><br />
    &nbsp;&nbsp;<span className="text-blue-600">&lt;h1&gt;</span>External CSS Example<span className="text-blue-600">&lt;/h1&gt;</span><br />
    <span className="text-blue-600">&lt;/body&gt;</span><br />

    <span className="text-blue-600">&lt;/html&gt;</span>
  </code>
</pre>

      {/* Summary */}
      <h2 className="text-xl font-semibold text-gray-800 mb-2">Summary</h2>
      <ul className="list-disc list-inside text-gray-700 mb-4">
        <li>
          <strong>Inline CSS:</strong> Styles one element, quick but not reusable.
        </li>
        <li>
          <strong>Internal CSS:</strong> Styles a single page, written in{" "}
          <code>&lt;style&gt;</code>.
        </li>
        <li>
          <strong>External CSS:</strong> Best practice, reusable across multiple pages.
        </li>
      </ul>

      <p className="text-gray-700">
         For professional projects, always prefer{" "}
        <strong>External CSS</strong> to keep your code clean and maintainable.
      </p>
    </div>
  );
};

export default HowToAddCSS;