import React from "react";

const HtmlGlobalAttributes = () => {
  return (
    <div className="p-4 sm:p-6 md:p-8 max-w-4xl">
      <h1 className="text-2xl font-medium mb-3 text-blue-500">HTML Global Attributes</h1>

      <p className="mb-4">
        Global attributes are attributes that can be used on <strong>any HTML element</strong>. These
        attributes provide additional behavior, identification, or styling capabilities.
      </p>

      <h2 className="text-xl font-semibold mb-3 text-blue-500">Examples of Global Attributes</h2>
      <pre className="bg-gray-100 p-3 rounded-md overflow-x-auto max-w-full whitespace-pre-wrap mb-3 text-sm">
  <code>
    <span className="text-gray-500">&lt;</span>
    <span className="text-blue-600">div</span>

    <span className="text-red-500"> id</span>=
    <span className="text-green-600">"main"</span>

    <span className="text-red-500"> class</span>=
    <span className="text-green-600">"container"</span>

    <span className="text-red-500"> style</span>=
    <span className="text-green-600">"color: red;"</span>

    <span className="text-red-500"> title</span>=
    <span className="text-green-600">"Main container"</span>

    <span className="text-gray-500">&gt;</span>
    <br/>

    <span className="text-gray-700">
      &nbsp;&nbsp;This is a div with global attributes.
    </span>
    <br/>

    <span className="text-gray-500">&lt;/</span>
    <span className="text-blue-600">div</span>
    <span className="text-gray-500">&gt;</span>
  </code>
</pre>

      <h2 className="text-xl font-semibold mb-3">Common Global Attributes</h2>
      <ul className="list-disc ml-6 space-y-1 mb-6">
        <li><strong className="text-blue-500">id</strong> – Unique identifier for the element</li>
        <li><strong className="text-blue-500">class</strong> – Class name(s) for styling with CSS</li>
        <li><strong className="text-blue-500">style</strong> – Inline CSS styling</li>
        <li><strong className="text-blue-500">title</strong> – Tooltip shown on hover</li>
        <li><strong className="text-blue-500">hidden</strong> – Hides the element from the page</li>
        <li><strong className="text-blue-500">tabindex</strong> – Specifies tab order of an element</li>
        <li><strong className="text-blue-500">contenteditable</strong> – Allows editing content in browser</li>
        <li><strong className="text-blue-500">draggable</strong> – Enables dragging of an element</li>
        <li><strong className="text-blue-500">spellcheck</strong> – Enables/disables spell checking</li>
        <li><strong className="text-blue-500">accesskey</strong> – Sets a keyboard shortcut</li>
        <li><strong className="text-blue-500">lang</strong> – Declares the language of element content</li>
        <li><strong className="text-blue-500">translate</strong> – Specifies whether content should be translated</li>
        <li><strong className="text-blue-500">dir</strong> – Text direction (e.g. ltr, rtl)</li>
      </ul>

      <h2 className="text-xl font-semibold mb-2 text-blue-500">Practical Example</h2>
      <pre className="bg-gray-100 p-3 rounded-md overflow-x-auto max-w-full whitespace-pre-wrap mb-3 text-sm">
  <code>
    <span className="text-gray-500">&lt;</span>
    <span className="text-blue-600">p</span>

    <span className="text-red-500"> id</span>=
    <span className="text-green-600">"intro"</span>

    <span className="text-red-500"> class</span>=
    <span className="text-green-600">"highlight"</span>

    <span className="text-red-500"> style</span>=
    <span className="text-green-600">"font-weight: bold;"</span>

    <span className="text-red-500"> title</span>=
    <span className="text-green-600">"Intro paragraph"</span>

    <span className="text-gray-500">&gt;</span>
    <br/>

    <span className="text-gray-700">
      &nbsp;&nbsp;Welcome to CodePoint!
    </span>
    <br/>

    <span className="text-gray-500">&lt;/</span>
    <span className="text-blue-600">p</span>
    <span className="text-gray-500">&gt;</span>
  </code>
</pre>

      <p className="mb-2">
        You can use multiple global attributes together for styling, identification, accessibility, or scripting.
      </p>

      <p className="text-sm leading-relaxed">Note: While global attributes can be added to almost any element, make sure they’re appropriate for the element’s role and purpose.</p>
    </div>
  );
};

export default HtmlGlobalAttributes;