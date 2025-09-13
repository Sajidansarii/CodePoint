import React from "react";

const WebFontsTutorial = () => {
  return (
    <div className="p-6 space-y-8">
      {/* Heading */}
      <h1 className="text-3xl font-medium text-blue-500">CSS Web Fonts</h1>
      <p className="text-gray-700">
        Web fonts allow you to use custom fonts on your website instead of 
        relying only on system fonts like Arial or Times New Roman. 
        The most popular way to use web fonts is through{" "}
        <span className="font-semibold">Google Fonts</span>.
      </p>

      {/* Example 1 */}
      <div>
        <h2 className="text-xl font-semibold text-gray-800">1. Importing Google Fonts</h2>
        <p className="text-gray-700">
          First, go to <a href="https://fonts.google.com" className="text-blue-600 underline">Google Fonts</a>, 
          choose a font, and copy the <code>&lt;link&gt;</code> tag into the{" "}
          <code>&lt;head&gt;</code> of your HTML file.
        </p>
        <pre className="bg-gray-900 text-green-400 p-3 rounded mt-2">
{`<!-- Add this inside your <head> -->
<link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet">`}
        </pre>
      </div>

      {/* Example 2 */}
      <div>
        <h2 className="text-xl font-semibold text-gray-800">2. Using Web Fonts in CSS</h2>
        <p className="text-gray-700">
          After importing, you can apply the font to any element using{" "}
          <code>font-family</code>.
        </p>
        <pre className="bg-gray-900 text-green-400 p-3 rounded mt-2">
{`body {
  font-family: 'Roboto', sans-serif;
}

h1 {
  font-family: 'Times New Roman', serif;
}`}
        </pre>

        <div className="border p-4 bg-gray-100 text-center space-y-2">
          <p style={{ fontFamily: "Roboto, sans-serif" }} className="text-lg">
            This text uses Google Font "Roboto".
          </p>
          <p style={{ fontFamily: "Times New Roman, serif" }} className="text-lg">
            This text uses "Times New Roman".
          </p>
        </div>
      </div>

      {/* Example 3 */}
      <div>
        <h2 className="text-xl font-semibold text-gray-800">3. Fallback Fonts</h2>
        <p className="text-gray-700">
          Always provide a fallback font in case the custom font doesn't load. 
          Example: <code>'Roboto', sans-serif</code> — if Roboto fails, 
          browser will use any available sans-serif font.
        </p>
        <pre className="bg-gray-900 text-green-400 p-3 rounded mt-2">
{`p {
  font-family: 'Roboto', sans-serif;
}`}
        </pre>
      </div>
    </div>
  );
};

export default WebFontsTutorial;