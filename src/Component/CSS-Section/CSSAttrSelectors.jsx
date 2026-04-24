import React from "react";

const CssAttrSelectors = () => {
  return (
    <div className="p-6 max-w-4xl space-y-6 mt-10">
      <h1 className="text-3xl font-medium mb-4 text-blue-500">CSS Attribute Selectors</h1>
      <p className="mb-4">CSS Attribute Selectors is used to select HTML elements with specific attribute or value for attribute. Attribute selectors are enclosed in square brackets [ ] and can take various forms.
      </p>
      <p>As below you can see how to select an HTML element based on attribute in CSS.</p>

       <pre className="bg-gray-200 p-4 rounded-lg overflow-x-auto max-w-full whitespace-pre-wrap">
  <code>
    <span className="text-blue-500">a[href]</span> <span>{'{'}</span><br />

    <span className="text-red-500">background-color</span>
    <span>: </span>
    <span className="text-green-700">Blue</span>
    <span>;</span><br />

    <span>{'}'}</span>
  </code>
</pre>

        <p className="mt-10">Attribute selector is type of selector in CSS. To know all the selector in CSS</p>
        <p className="text-2xl mt-5 mb-3">CSS [attribute="value"] Selector</p>
        <p>The [attribute="value"] selector is used to select elements with a specific attribute with an exact value.</p>
        <p>The following example selects all {'<a>'} elements with a target="_blank" attribute:</p>

       <pre className="bg-gray-200 p-4 rounded-lg overflow-x-auto max-w-full whitespace-pre-wrap">
  <code>
    <span className="text-blue-500">a[target="_blank"]</span> <span>{'{'}</span><br />

    <span className="text-red-500">background-color</span>
    <span>: </span>
    <span className="text-green-700">red</span>
    <span>;</span><br />

    <span>{'}'}</span>
  </code>
</pre>

     <p className="text-2xl mt-10">example:</p>
      <div className="space-y-3">
        <input type="text" placeholder="Type here" className="border border-green-500 p-2" />
        <input type="password" placeholder="Password" className="border border-red-400 p-2" />
        <a href="https://google.com" className="block text-green-500 underline">
          Secure Link (https)
        </a>
        <a href="http://example.com" className="block text-red-500 underline">
          Insecure Link (http)
        </a>
        <img src="" style={{backgroundImage: "url('https://picsum.photos/400/200')"}} className="w-96 h-16 border border-purple-500"/>
        <img src="" style={{backgroundImage: "url('https://picsum.photos/400/200')"}} className="w-96 h-16 border border-orange-500"/>
      </div>

      CSS
      <pre className="bg-gray-200 p-4 rounded-lg overflow-x-auto max-w-full whitespace-pre-wrap">
  <code>
    <span className="text-blue-500">input[type="text"]</span> <span>{'{'}</span><br />
    &nbsp;&nbsp;<span className="text-red-500">border</span>: <span className="text-green-700">2px solid green</span>;<br />
    <span>{'}'}</span><br /><br />

    <span className="text-blue-500">input[type="password"]</span> <span>{'{'}</span><br />
    &nbsp;&nbsp;<span className="text-red-500">border</span>: <span className="text-green-700">2px solid red</span>;<br />
    <span>{'}'}</span><br /><br />

    <span className="text-blue-500">a[href^="https"]</span> <span>{'{'}</span><br />
    &nbsp;&nbsp;<span className="text-red-500">color</span>: <span className="text-green-700">green</span>;<br />
    <span>{'}'}</span><br /><br />

    <span className="text-blue-500">a[href^="http:"]</span> <span>{'{'}</span><br />
    &nbsp;&nbsp;<span className="text-red-500">color</span>: <span className="text-green-700">red</span>;<br />
    <span>{'}'}</span><br /><br />

    <span className="text-blue-500">img[src$=".png"]</span> <span>{'{'}</span><br />
    &nbsp;&nbsp;<span className="text-red-500">border</span>: <span className="text-green-700">2px solid purple</span>;<br />
    <span>{'}'}</span><br /><br />

    <span className="text-blue-500">img[src$=".jpg"]</span> <span>{'{'}</span><br />
    &nbsp;&nbsp;<span className="text-red-500">border</span>: <span className="text-green-700">2px solid orange</span>;<br />
    <span>{'}'}</span>
  </code>
</pre>

      <p className="text-2xl mt-10">All CSS Attribute Selectors</p>
      <div className=" border">
        <p className="text-xl bg-gray-100">[attribute]</p>
        <p className="text-xl">[attribute=value]</p>
        <p className="text-xl bg-gray-100">[attribute~=value]</p>
        <p className="text-xl">[attribute|=value]</p>
        <p className="text-xl bg-gray-100">[attribute^=value]</p>
        <p className="text-xl">[attribute$=value]</p>
        <p className="text-xl bg-gray-100">[attribute*=value]</p>
      </div>
    </div>
  );
};

export default CssAttrSelectors;