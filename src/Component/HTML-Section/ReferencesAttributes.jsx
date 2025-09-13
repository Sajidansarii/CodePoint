import React from "react";

const HtmlAttributes = () => {
  return (
    <div className="p-4 md:p-6 max-w-4xl">
      <h1 className="text-2xl md:text-3xl font-medium mb-4 text-blue-500">HTML Attributes</h1>

      <p className="mb-4">
        HTML attributes provide additional information about HTML elements. They are always
        specified in the start tag and usually come in name/value pairs like this:
        <code className="bg-gray-100 px-2 py-1 rounded ml-1">&nbsp;name="value"</code>
      </p>

      <div className="bg-gray-100 p-4 rounded mb-6 overflow-auto text-sm">
        <code>
          {"<a href='https://codepoint.dev'>Visit CodePoint</a>"}
        </code>
      </div>

      <h2 className="text-xl font-semibold mb-2 text-blue-500">Commonly Used HTML Attributes</h2>
      <ul className="list-disc ml-6 mb-6 space-y-1">
        <li><strong className="text-blue-500">href</strong> – Specifies the URL for a link</li>
        <li><strong className="text-blue-500">src</strong> – Specifies the source of an image</li>
        <li><strong className="text-blue-500">alt</strong> – Alternative text for an image</li>
        <li><strong className="text-blue-500">style</strong> – Inline CSS styles</li>
        <li><strong className="text-blue-500">title</strong> – Text shown as tooltip on hover</li>
        <li><strong className="text-blue-500">id</strong> – Unique identifier for an element</li>
        <li><strong className="text-blue-500">class</strong> – Specifies one or more class names</li>
        <li><strong className="text-blue-500">width</strong> and <strong className="text-blue-500">height</strong> – Define size of an image or iframe</li>
        <li><strong className="text-blue-500">value</strong> – Defines value in form elements</li>
        <li><strong className="text-blue-500" >placeholder</strong> – Placeholder text in input fields</li>
        <li><strong className="text-blue-500">readonly</strong> – Makes input fields read-only</li>
        <li><strong className="text-blue-500">required</strong> – Makes input fields required before submission</li>
      </ul>

      <h2 className="text-xl font-semibold mb-2">Example with Multiple Attributes</h2>
      <div className="bg-gray-100 p-4 rounded mb-4 overflow-auto text-sm">
        <code>
          {"<input type='text' placeholder='Enter your name' required />"}
        </code>
      </div>

      <h2 className="text-xl font-semibold mb-2">⚠ Rules for Attributes</h2>
      <ul className="list-disc ml-6 space-y-1">
        <li>Attributes are always added to the opening tag.</li>
        <li>Attribute values should be enclosed in quotes (" ").</li>
        <li>You can use both single and double quotes, but double quotes are preferred.</li>
      </ul>
    </div>
  );
};

export default HtmlAttributes;