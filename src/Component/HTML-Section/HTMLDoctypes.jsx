import React from "react";

const HtmlDoctype = () => {
  return (
    <div className="p-4 sm:p-6 md:p-8 max-w-4xl">
      <h1 className="text-3xl font-semibold mb-3 text-blue-500">HTML &lt;!DOCTYPE&gt;</h1>
      <p className="mb-3">
        The <strong>&lt;!DOCTYPE&gt;</strong> declaration is used to tell the
        web browser what version of HTML the page is written in, so it can be
        displayed correctly.  
        It must be the very first line in your HTML document, before the
        <code> &lt;html&gt; </code> tag.
      </p>

      <h2 className="text-xl font-semibold mt-5 mb-3 text-blue-500">Purpose of DOCTYPE</h2>
      <ul className="list-[square] list-inside mb-3">
        <li>Instructs the browser about the HTML version and rules to follow.</li>
        <li>Ensures consistent rendering across browsers.</li>
        <li>Prevents the browser from switching to "quirks mode".</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2 text-blue-500">HTML5 DOCTYPE</h2>
      <p className="mb-4">
        The DOCTYPE for HTML5 is very simple and does not require a reference
        to a Document Type Definition (DTD).
      </p>
    <pre className="bg-gray-100 p-3 rounded-md overflow-x-auto max-w-full whitespace-pre-wrap mb-3 text-sm">
  <code>
    <span className="text-gray-500">&lt;!DOCTYPE html&gt;</span>
    <br/>

    <span className="text-gray-500">&lt;</span>
    <span className="text-blue-600">html</span>
    <span className="text-gray-500">&gt;</span>
    <br/>

    <span className="text-gray-500">&nbsp;&nbsp;&lt;</span>
    <span className="text-blue-600">head</span>
    <span className="text-gray-500">&gt;</span>
    <br/>

    <span className="text-gray-500">&nbsp;&nbsp;&nbsp;&nbsp;&lt;</span>
    <span className="text-blue-600">meta</span>

    <span className="text-red-500"> charset</span>=
    <span className="text-green-600">"UTF-8"</span>

    <span className="text-gray-500">&gt;</span>
    <br/>

    <span className="text-gray-500">&nbsp;&nbsp;&nbsp;&nbsp;&lt;</span>
    <span className="text-blue-600">title</span>
    <span className="text-gray-500">&gt;</span>
    <span className="text-gray-700">HTML5 DOCTYPE Example</span>
    <span className="text-gray-500">&lt;/</span>
    <span className="text-blue-600">title</span>
    <span className="text-gray-500">&gt;</span>
    <br/>

    <span className="text-gray-500">&nbsp;&nbsp;&lt;/</span>
    <span className="text-blue-600">head</span>
    <span className="text-gray-500">&gt;</span>
    <br/>

    <span className="text-gray-500">&nbsp;&nbsp;&lt;</span>
    <span className="text-blue-600">body</span>
    <span className="text-gray-500">&gt;</span>
    <br/>

    <span className="text-gray-500">&nbsp;&nbsp;&nbsp;&nbsp;&lt;</span>
    <span className="text-blue-600">h1</span>
    <span className="text-gray-500">&gt;</span>
    <span className="text-gray-700">Hello, World!</span>
    <span className="text-gray-500">&lt;/</span>
    <span className="text-blue-600">h1</span>
    <span className="text-gray-500">&gt;</span>
    <br/>

    <span className="text-gray-500">&nbsp;&nbsp;&lt;/</span>
    <span className="text-blue-600">body</span>
    <span className="text-gray-500">&gt;</span>
    <br/>

    <span className="text-gray-500">&lt;/</span>
    <span className="text-blue-600">html</span>
    <span className="text-gray-500">&gt;</span>
  </code>
</pre>

      <h2 className="text-xl font-semibold mt-6 mb-3">Older HTML Versions</h2>
      <p className="mb-3">
        Older versions of HTML used more complex DOCTYPE declarations because
        they referenced a DTD file. Example for HTML 4.01:
      </p>
    <pre className="bg-gray-100 p-3 rounded-md overflow-x-auto max-w-full whitespace-pre-wrap mb-3 text-sm">
  <code>
    <span className="text-gray-500">
      &lt;!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
    </span>
    <br/>
    <span className="text-gray-500">
      "http://www.w3.org/TR/html4/strict.dtd"&gt;
    </span>
  </code>
</pre>

      <h2 className="text-xl font-semibold mt-5 mb-3">Key Points</h2>
      <ul className="list-[square] list-inside mb-3">
        <li>Always put the DOCTYPE at the top of the HTML document.</li>
        <li>HTML5 uses <code>&lt;!DOCTYPE html&gt;</code> (case-insensitive).</li>
        <li>Helps browsers render the page in "standards mode".</li>
      </ul>

      <div className="bg-yellow-100 p-3 rounded-lg">
        <strong>Note:</strong> Omitting DOCTYPE can cause layout differences
        between browsers due to "quirks mode".
      </div>
    </div>
  );
};

export default HtmlDoctype;