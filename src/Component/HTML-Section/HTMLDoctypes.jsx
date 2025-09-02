import React from "react";

const HtmlDoctype = () => {
  return (
    <div className="p-4 sm:p-6 bg-white rounded-lg shadow-md max-w-4xl">
      <h1 className="text-2xl font-bold mb-4">HTML &lt;!DOCTYPE&gt;</h1>
      <p className="mb-4">
        The <strong>&lt;!DOCTYPE&gt;</strong> declaration is used to tell the
        web browser what version of HTML the page is written in, so it can be
        displayed correctly.  
        It must be the very first line in your HTML document, before the
        <code> &lt;html&gt; </code> tag.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Purpose of DOCTYPE</h2>
      <ul className="list-disc ml-6 mb-4">
        <li>Instructs the browser about the HTML version and rules to follow.</li>
        <li>Ensures consistent rendering across browsers.</li>
        <li>Prevents the browser from switching to "quirks mode".</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">HTML5 DOCTYPE</h2>
      <p className="mb-4">
        The DOCTYPE for HTML5 is very simple and does not require a reference
        to a Document Type Definition (DTD).
      </p>
      <pre className="bg-gray-900 text-green-400 p-3 rounded-lg overflow-x-auto mb-4">
        {`<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>HTML5 DOCTYPE Example</title>
</head>
<body>
  <h1>Hello, World!</h1>
</body>
</html>`}
      </pre>

      <h2 className="text-xl font-semibold mt-6 mb-2">Older HTML Versions</h2>
      <p className="mb-4">
        Older versions of HTML used more complex DOCTYPE declarations because
        they referenced a DTD file. Example for HTML 4.01:
      </p>
      <pre className="bg-gray-900 text-green-400 p-3 rounded-lg overflow-x-auto mb-4">
        {`<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
"http://www.w3.org/TR/html4/strict.dtd">`}
      </pre>

      <h2 className="text-xl font-semibold mt-6 mb-2">Key Points</h2>
      <ul className="list-disc ml-6 mb-4">
        <li>Always put the DOCTYPE at the top of the HTML document.</li>
        <li>HTML5 uses <code>&lt;!DOCTYPE html&gt;</code> (case-insensitive).</li>
        <li>Helps browsers render the page in "standards mode".</li>
      </ul>

      <div className="bg-yellow-100 p-3 rounded-lg">
        ⚡ <strong>Note:</strong> Omitting DOCTYPE can cause layout differences
        between browsers due to "quirks mode".
      </div>
    </div>
  );
};

export default HtmlDoctype;