import React from "react";

const HtmlUrlEncode = () => {
  return (
    <div className="p-4 sm:p-6 bg-white rounded-lg shadow-md max-w-4xl">
      <h1 className="text-2xl font-bold mb-4">HTML URL Encoding</h1>
      <p className="mb-4">
        <strong>URL Encoding</strong> (also known as <strong>Percent Encoding</strong>) 
        is the process of converting characters into a format that can be transmitted 
        over the internet. URLs can only be sent over the Internet using the 
        <strong> ASCII</strong> character set, so characters outside this range must be encoded.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Why URL Encoding is Needed?</h2>
      <ul className="list-disc ml-6 mb-4">
        <li>Spaces in URLs are replaced with <code>%20</code>.</li>
        <li>Special characters like <code>?</code>, <code>=</code>, <code>&</code> are encoded.</li>
        <li>Ensures that data is transmitted correctly between browsers and servers.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">Syntax</h2>
      <pre className="bg-gray-900 text-green-400 p-3 rounded-lg overflow-x-auto mb-4">
        {'encodeURIComponent("Hello World!") // "Hello%20World%21"'}
      </pre>

      <h2 className="text-xl font-semibold mt-6 mb-2">Common Encoded Characters</h2>
      <table className="w-full border border-gray-300 mb-4">
        <thead className="bg-gray-200">
          <tr>
            <th className="border p-2 text-left">Character</th>
            <th className="border p-2 text-left">Encoded Value</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border p-2">Space</td>
            <td className="border p-2">%20</td>
          </tr>
          <tr>
            <td className="border p-2">!</td>
            <td className="border p-2">%21</td>
          </tr>
          <tr>
            <td className="border p-2">#</td>
            <td className="border p-2">%23</td>
          </tr>
          <tr>
            <td className="border p-2">$</td>
            <td className="border p-2">%24</td>
          </tr>
          <tr>
            <td className="border p-2">&amp;</td>
            <td className="border p-2">%26</td>
          </tr>
          <tr>
            <td className="border p-2">+</td>
            <td className="border p-2">%2B</td>
          </tr>
          <tr>
            <td className="border p-2">/</td>
            <td className="border p-2">%2F</td>
          </tr>
          <tr>
            <td className="border p-2">?</td>
            <td className="border p-2">%3F</td>
          </tr>
        </tbody>
      </table>

      <div className="bg-blue-100 p-3 rounded-lg mb-4">
        💡 <strong>Tip</strong>: Use <code>encodeURIComponent()</code> for encoding 
        query parameters and <code>encodeURI()</code> for encoding full URLs.
      </div>

      <h2 className="text-xl font-semibold mt-6 mb-2">Example</h2>
      <pre className="bg-gray-900 text-green-400 p-3 rounded-lg overflow-x-auto">
        {`const text = "I love HTML & CSS!";
const encoded = encodeURIComponent(text);
console.log(encoded); // "I%20love%20HTML%20%26%20CSS%21"`}
      </pre>
    </div>
  );
};

export default HtmlUrlEncode;