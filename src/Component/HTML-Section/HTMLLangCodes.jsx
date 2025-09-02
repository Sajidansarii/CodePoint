import React from "react";

const HtmlLangCodes = () => {
  return (
    <div className="p-4 sm:p-6 bg-white rounded-lg shadow-md max-w-4xl">
      <h1 className="text-2xl font-bold mb-4">HTML Language Codes</h1>
      <p className="mb-4">
        HTML <strong>language codes</strong> are used with the{" "}
        <code>lang</code> attribute to declare the language of a document or an
        element.  
        This helps browsers, search engines, and assistive technologies (like
        screen readers) understand the language of the content.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Syntax</h2>
      <pre className="bg-gray-900 text-green-400 p-3 rounded-lg overflow-x-auto mb-4">
        {`<html lang="en"> 
<head>
  <title>Language Example</title>
</head>
<body>
  <p>Hello World!</p>
</body>
</html>`}
      </pre>

      <h2 className="text-xl font-semibold mt-6 mb-2">Common Language Codes</h2>
      <table className="w-full border border-gray-300 mb-4">
        <thead className="bg-gray-200">
          <tr>
            <th className="border p-2 text-left">Code</th>
            <th className="border p-2 text-left">Language</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border p-2">en</td>
            <td className="border p-2">English</td>
          </tr>
          <tr>
            <td className="border p-2">es</td>
            <td className="border p-2">Spanish</td>
          </tr>
          <tr>
            <td className="border p-2">fr</td>
            <td className="border p-2">French</td>
          </tr>
          <tr>
            <td className="border p-2">de</td>
            <td className="border p-2">German</td>
          </tr>
          <tr>
            <td className="border p-2">hi</td>
            <td className="border p-2">Hindi</td>
          </tr>
          <tr>
            <td className="border p-2">zh</td>
            <td className="border p-2">Chinese</td>
          </tr>
          <tr>
            <td className="border p-2">ja</td>
            <td className="border p-2">Japanese</td>
          </tr>
          <tr>
            <td className="border p-2">ar</td>
            <td className="border p-2">Arabic</td>
          </tr>
        </tbody>
      </table>

      <div className="bg-blue-100 p-3 rounded-lg mb-4">
        💡 <strong>Tip</strong>: Use proper language codes to improve SEO and
        accessibility.
      </div>

      <h2 className="text-xl font-semibold mt-6 mb-2">Example with Paragraphs</h2>
      <pre className="bg-gray-900 text-green-400 p-3 rounded-lg overflow-x-auto">
        {`<p lang="en">Hello!</p>
<p lang="fr">Bonjour!</p>
<p lang="es">¡Hola!</p>`}
      </pre>
    </div>
  );
};

export default HtmlLangCodes;