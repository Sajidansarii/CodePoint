import React from "react";

const WebFontsTutorial = () => {
  return (
    <div className="p-6 max-w-4xl space-y-6 mt-10">
      {/* Heading */}
      <h1 className="text-3xl font-medium text-blue-500">CSS Web Fonts</h1>
      <p>
        Web fonts allow you to use custom fonts on your website instead of 
        relying only on system fonts like Arial or Times New Roman. 
        The most popular way to use web fonts is through{" "}
        <span className="font-semibold">Google Fonts</span>.
      </p>
     <p>Google Fonts gives users access to a large, free collection of over 1,000 font families for use in websites and design projects.</p>

      {/* Example 1 */}
      <div>
     <h1 className="text-2xl mt-10 mb-5">How To Use Google Fonts</h1>
     <p className="mb-2">To use a Google Font, add its stylesheet link to your HTML {'<head>'}, and apply the font in your CSS.</p>
        <p>
          First, go to <a href="https://fonts.google.com" className="text-blue-600 underline">Google Fonts</a>, 
          choose a font, and copy the <code>&lt;link&gt;</code> tag into the{" "}
          <code>&lt;head&gt;</code> of your HTML file.
        </p>
        <h1 className="text-2xl mt-5">Example</h1>
        <p>In this example, we’ll use the 'Sofia' font from Google Fonts.</p>
      <pre className="bg-gray-200 p-4 rounded-lg mt-5 overflow-x-auto max-w-full whitespace-pre-wrap">
  <code>
    <span className="text-gray-500">&lt;!-- Add this inside your &lt;head&gt; --&gt;</span><br />

    <span className="text-blue-600">&lt;link</span> <span className="text-red-500">href</span>=<span className="text-green-700">"https://fonts.googleapis.com/css2?family=Roboto&display=swap"</span> <span className="text-red-500">rel</span>=<span className="text-green-700">"stylesheet"</span><span className="text-blue-600">&gt;</span>
  </code>
</pre>
      </div>

      {/* Example 2 */}
      <div>
        <h2 className="text-xl font-semibold text-gray-800">2. Using Web Fonts in CSS</h2>
        <p className="text-gray-700">
          After importing, you can apply the font to any element using{" "}
          <code>font-family</code>.
        </p>
       <pre className="bg-gray-200 p-4 rounded-lg overflow-x-auto max-w-full whitespace-pre-wrap mt-5">
  <code>
    <span className="text-blue-600">body</span> <span>{'{'}</span><br />

    &nbsp;&nbsp;<span className="text-red-500">font-family</span>: <span className="text-green-700">'Roboto', sans-serif</span>;<br />

    <span>{'}'}</span><br /><br />

    <span className="text-blue-600">h1</span> <span>{'{'}</span><br />

    &nbsp;&nbsp;<span className="text-red-500">font-family</span>: <span className="text-green-700">'Times New Roman', serif</span>;<br />

    <span>{'}'}</span>
  </code>
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
       <pre className="bg-gray-200 p-4 rounded-lg overflow-x-auto max-w-full whitespace-pre-wrap mt-5">
  <code>
    <span className="text-blue-600">p</span> <span>{'{'}</span><br />

    &nbsp;&nbsp;<span className="text-red-500">font-family</span>: <span className="text-green-700">'Roboto', sans-serif</span>;<br />

    <span>{'}'}</span>
  </code>
</pre>
      </div>
    </div>
  );
};

export default WebFontsTutorial;