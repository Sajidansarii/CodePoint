import React from "react";

const HtmlCharacterSets = () => {
  return (
    <div className="p-4 sm:p-6 md:p-8 max-w-4xl">
      <h1 className="text-3xl font-semibold mb-3 text-blue-500">HTML Character Sets</h1>
      <p className="mb-4">
        A <strong>character set</strong> is a collection of characters that your
        computer can understand and display. In HTML, the character set tells
        the browser how to interpret and display the text on a web page.
      </p>

      <h2 className="text-xl font-semibold mt-5 mb-3 text-blue-500">Common Character Sets</h2>
      <ul className="list-[square] list-inside mb-3">
        <li>
          <strong>UTF-8</strong> – The most widely used character set; supports
          almost all characters from all languages.
        </li>
        <li>
          <strong>ISO-8859-1</strong> – Also known as Latin-1; supports Western
          European languages.
        </li>
        <li>
          <strong>UTF-16</strong> – Used for encoding characters in 2 bytes;
          supports most characters.
        </li>
      </ul>

      <h2 className="text-xl font-semibold mt-5 mb-3 text-blue-500">Declaring a Character Set in HTML</h2>
      <pre className="bg-gray-900  p-4 rounded-lg text-green-400 overflow-x-auto max-w-full whitespace-pre-wrap mb-3">
        {`<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Character Set Example</title>
</head>
<body>
  <p>This page uses UTF-8 encoding.</p>
</body>
</html>`}
      </pre>

      <h2 className="text-xl font-semibold mt-6 mb-2">Why Use UTF-8?</h2>
      <ul className="list-[square] list-inside mb-3">
        <li>Supports characters from almost all written languages.</li>
        <li>Compatible with older character sets like ASCII.</li>
        <li>Recommended for modern websites.</li>
      </ul>

      <div className="bg-blue-900 p-4 rounded-lg text-green-400 overflow-x-auto max-w-full whitespace-pre-wrap mb-3">
        💡 <strong>Tip</strong>: Always include <code>{'<meta charset="UTF-8">'}</code> 
        in the <code>{'<head>'}</code> of your HTML document to avoid character display issues.
      </div>

      <h2 className="text-xl font-semibold mt-6 mb-3">Example of Character Display</h2>
      <pre className="bg-gray-900 p-4 rounded-lg text-green-400 overflow-x-auto max-w-full whitespace-pre-wrap mb-3">
        {`<p>English: Hello</p>
<p>Hindi: नमस्ते</p>
<p>Chinese: 你好</p>
<p>Arabic: مرحبا</p>`}
      </pre>
      
    </div>
  );
};


export default HtmlCharacterSets;