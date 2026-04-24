import React from "react";

const HtmlLangCodes = () => {
  return (
    <div className="p-4 sm:p-6 md:p-8 max-w-4xl">
      <h1 className="text-3xl font-semibold mb-3 text-blue-500">HTML Language Codes</h1>
      <p className="mb-4">
        HTML <strong>language codes</strong> are used with the{" "}
        <code>lang</code> attribute to declare the language of a document or an
        element.  
        This helps browsers, search engines, and assistive technologies (like
        screen readers) understand the language of the content.
      </p>

      <h2 className="text-2xl font-semibold mt-5 mb-3 text-blue-500">Syntax</h2>
    <pre className="bg-gray-100 p-3 rounded-md overflow-x-auto max-w-full whitespace-pre-wrap mb-4 text-sm">
  <code>
    <span className="text-gray-500">&lt;</span>
    <span className="text-blue-600">html</span>

    <span className="text-red-500"> lang</span>=
    <span className="text-green-600">"en"</span>

    <span className="text-gray-500">&gt;</span>
    <br/>

    <span className="text-gray-500">&lt;</span>
    <span className="text-blue-600">head</span>
    <span className="text-gray-500">&gt;</span>
    <br/>

    <span className="text-gray-500">&nbsp;&nbsp;&lt;</span>
    <span className="text-blue-600">title</span>
    <span className="text-gray-500">&gt;</span>
    <span className="text-gray-700">Language Example</span>
    <span className="text-gray-500">&lt;/</span>
    <span className="text-blue-600">title</span>
    <span className="text-gray-500">&gt;</span>
    <br/>

    <span className="text-gray-500">&lt;/</span>
    <span className="text-blue-600">head</span>
    <span className="text-gray-500">&gt;</span>
    <br/>

    <span className="text-gray-500">&lt;</span>
    <span className="text-blue-600">body</span>
    <span className="text-gray-500">&gt;</span>
    <br/>

    <span className="text-gray-500">&nbsp;&nbsp;&lt;</span>
    <span className="text-blue-600">p</span>
    <span className="text-gray-500">&gt;</span>
    <span className="text-gray-700">Hello World!</span>
    <span className="text-gray-500">&lt;/</span>
    <span className="text-blue-600">p</span>
    <span className="text-gray-500">&gt;</span>
    <br/>

    <span className="text-gray-500">&lt;/</span>
    <span className="text-blue-600">body</span>
    <span className="text-gray-500">&gt;</span>
    <br/>

    <span className="text-gray-500">&lt;/</span>
    <span className="text-blue-600">html</span>
    <span className="text-gray-500">&gt;</span>
  </code>
</pre>

      <h2 className="text-2xl font-semibold mt-5 mb-3">Common Language Codes</h2>
      <table className="w-full border border-gray-300 mb-3">
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

      <div className="bg-blue-100 p-3 rounded-lg mb-3">
         <strong>Tip</strong>: Use proper language codes to improve SEO and
        accessibility.
      </div>

      <h2 className="text-2xl font-semibold mt-5 mb-3">Example with Paragraphs</h2>
     <pre className="bg-gray-100 p-3 rounded-md overflow-x-auto max-w-full whitespace-pre-wrap text-sm">
  <code>
    <span className="text-gray-500">&lt;</span>
    <span className="text-blue-600">p</span>

    <span className="text-red-500"> lang</span>=
    <span className="text-green-600">"en"</span>

    <span className="text-gray-500">&gt;</span>
    <span className="text-gray-700">Hello!</span>
    <span className="text-gray-500">&lt;/</span>
    <span className="text-blue-600">p</span>
    <span className="text-gray-500">&gt;</span>
    <br/>

    <span className="text-gray-500">&lt;</span>
    <span className="text-blue-600">p</span>

    <span className="text-red-500"> lang</span>=
    <span className="text-green-600">"fr"</span>

    <span className="text-gray-500">&gt;</span>
    <span className="text-gray-700">Bonjour!</span>
    <span className="text-gray-500">&lt;/</span>
    <span className="text-blue-600">p</span>
    <span className="text-gray-500">&gt;</span>
    <br/>

    <span className="text-gray-500">&lt;</span>
    <span className="text-blue-600">p</span>

    <span className="text-red-500"> lang</span>=
    <span className="text-green-600">"es"</span>

    <span className="text-gray-500">&gt;</span>
    <span className="text-gray-700">¡Hola!</span>
    <span className="text-gray-500">&lt;/</span>
    <span className="text-blue-600">p</span>
    <span className="text-gray-500">&gt;</span>
  </code>
</pre>
    </div>
  );
};

export default HtmlLangCodes;