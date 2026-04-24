import React from "react";

const CssMinifyDemo = () => {
  return (
    <div className="p-8 max-w-4xl space-y-6 mt-10 overflow-hidden">
      <h1 className="text-3xl font-medium text-blue-500">
        CSS Minify
      </h1>
      <p>
        When a website takes over 3 seconds to load, approximately 50% of users may leave. This highlights the critical importance of optimizing for speed.
   </p>
   <p>Website performance can suffer due to bloated CSS files, especially in large-scale applications with extensive styling. Minifying CSS helps by eliminating unnecessary characters such as whitespace, newlines, and comments. This results in smaller file sizes and faster rendering times in the browser.</p>
   <p>This tutorial demonstrates multiple approaches to CSS file minification for improved performance.</p>

   <h1 className="text-2xl">Using the Css-minify NPM Package</h1>
   <p>Our first approach utilizes the css-minify package available via NPM. By installing this package, we can automate the CSS minification process within our project.</p>
   <p>Begin by installing the <span className="text-red-400 bg-gray-50 px-2 rounded-md">css-minify</span> package in the root of your project using the following NPM command:</p>

  <pre className="bg-gray-200 p-4 rounded-lg overflow-x-auto max-w-full whitespace-pre-wrap mt-5">
  <code>
    <span className="text-red-500">npm</span> <span className="text-green-700">install css-minify</span>
  </code>
</pre>

   <p>Once you've installed the package, change to your project directory in the terminal and execute the following command to minify a selected CSS file.</p>
  <pre className="bg-gray-200 p-4 rounded-lg overflow-x-auto max-w-full whitespace-pre-wrap mt-5">
  <code>
    <span className="text-red-500">npx</span> 
    <span className="text-green-700">css-minify -f filename</span>
  </code>
</pre>

   <p>Replace the filename in the command with your actual CSS file name to minify it.</p>
   <p>To minify all the CSS files in a specific directory, run the following command in your terminal.</p>
 <pre className="bg-gray-200 p-4 rounded-lg overflow-x-auto max-w-full whitespace-pre-wrap mt-5">
  <code>
    <span className="text-red-500">npx</span> <span className="text-green-700">css-minify -d direName</span>
  </code>
</pre>

     <p>Replace <span className="bg-gray-50 px-2 rounded-md text-red-400">?dirName</span> in the command with the actual name of your directory.</p>
     <p>Let’s walk through the following example to see how CSS minification works.</p>
      <h1 className="text-2xl">Example</h1>
      <p>In the example below, we first added the regular CSS code to the CSS file. Then, we ran the command above to minify it. This process creates the <span className="text-red-400 bg-gray-50 px-2 rounded-md">?css-dist</span> folder and places the filename.min.css file inside, containing the minified CSS.</p>
      <p>The output shows that whitespaces and comments are removed to minimize the CSS file.</p>
     <pre className="bg-gray-200 p-4 rounded-lg overflow-x-auto max-w-full whitespace-pre-wrap mt-5">
  <code>
    <span className="text-blue-600">.element</span> <span>{'{'}</span><br />

    &nbsp;&nbsp;<span className="text-gray-500">/* border for element */</span><br />
    &nbsp;&nbsp;<span className="text-red-500">border</span>: <span className="text-green-700">2px solid blue</span>;<br />

    &nbsp;&nbsp;<span className="text-gray-500">/* text color for element */</span><br />
    &nbsp;&nbsp;<span className="text-red-500">color</span>: <span className="text-green-700">red</span>;<br />

    &nbsp;&nbsp;<span className="text-gray-500">/* adding a gradient to the element as a background */</span><br />
    &nbsp;&nbsp;<span className="text-red-500">background-image</span>: <span className="text-green-700">linear-gradient(45deg, #000, #fff)</span>;<br />
    <span>{'}'}</span><br /><br />

    <span className="text-blue-600">div</span> <span>{'{'}</span><br />

    &nbsp;&nbsp;<span className="text-gray-500">/* padding for div */</span><br />
    &nbsp;&nbsp;<span className="text-red-500">padding</span>: <span className="text-green-700">10px</span>;<br />

    &nbsp;&nbsp;<span className="text-gray-500">/* margin for div */</span><br />
    &nbsp;&nbsp;<span className="text-red-500">margin</span>: <span className="text-green-700">10px</span>;<br />

    &nbsp;&nbsp;<span className="text-gray-500">/* border for div */</span><br />
    &nbsp;&nbsp;<span className="text-red-500">border</span>: <span className="text-green-700">1px solid #000</span>;<br />

    <span>{'}'}</span>
  </code>
</pre>

      <h1 className="text-2xl">Output</h1>
      <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto max-w-full whitespace-pre-wrap">
        <code>
          {`.element{background-image:linear-gradient(45deg,#000,#fff);border:2px solid blue;color:red}div{border:1px solid #000;margin:10px;padding:10px}`}
        </code>
      </pre>
      <h1 className="text-2xl">Example</h1>
      <p>In this example, we showcase CSS minification using features like nested selectors, pseudo selectors, and gradients. The CSS-minify NPM package was used for the minification process.</p>

     <pre className="bg-gray-200 p-4 rounded-lg overflow-x-auto max-w-full whitespace-pre-wrap mt-5">
  <code>
    <span className="text-blue-600">li :nth-child(even)</span> <span>{'{'}</span><br />

    &nbsp;&nbsp;<span className="text-gray-500">/* selecting even elements of the list */</span><br />
    &nbsp;&nbsp;<span className="text-red-500">background-color</span>: <span className="text-green-700">#f2f2f2</span>;<br />
    &nbsp;&nbsp;<span className="text-red-500">color</span>: <span className="text-green-700">green</span>;<br />
    &nbsp;&nbsp;<span className="text-red-500">border-radius</span>: <span className="text-green-700">12px</span>;<br />

    &nbsp;&nbsp;<span className="text-gray-500">/* Applying padding */</span><br />
    &nbsp;&nbsp;<span className="text-red-500">padding</span>: <span className="text-green-700">4px</span>;<br />
    <span>{'}'}</span><br /><br />

    <span className="text-gray-500">/* nested selector */</span><br />
    <span className="text-blue-600">ul li ul</span> <span>{'{'}</span><br />

    &nbsp;&nbsp;<span className="text-red-500">display</span>: <span className="text-green-700">none</span>;<br />
    &nbsp;&nbsp;<span className="text-red-500">text-decoration</span>: <span className="text-green-700">dashed</span>;<br />
    &nbsp;&nbsp;<span className="text-red-500">color</span>: <span className="text-green-700">red</span>;<br />

    &nbsp;&nbsp;<span className="text-gray-500">/* changing the font size */</span><br />
    &nbsp;&nbsp;<span className="text-red-500">font-size</span>: <span className="text-green-700">12px</span>;<br />
    &nbsp;&nbsp;<span className="text-red-500">font-weight</span>: <span className="text-green-700">bold</span>;<br />

    <span>{'}'}</span><br /><br />

    <span className="text-blue-600">div &gt; p</span> <span>{'{'}</span><br />

    &nbsp;&nbsp;<span className="text-red-500">color</span>: <span className="text-green-700">blue</span>;<br />
    &nbsp;&nbsp;<span className="text-red-500">font-size</span>: <span className="text-green-700">12px</span>;<br />
    &nbsp;&nbsp;<span className="text-red-500">font-weight</span>: <span className="text-green-700">bold</span>;<br />

    <span>{'}'}</span>
  </code>
</pre>

      <h1 className="text-2xl">Output</h1>
      <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto max-w-full whitespace-pre-wrap">
        <code>
          {`li :nth-child(2n){background-color:#f2f2f2;border-radius:12px;color:green;padding:4px}ul li ul{color:red;display:none;text-decoration:dashed}div>p,ul li ul{font-size:12px;font-weight:700}div>p{color:blue}`}
        </code>
      </pre>

      <h1 className="text-2xl">Using Online Tools</h1>
      <p>Another option for CSS minification is to use online platforms. Many such tools exist that can convert your regular CSS into a minified format.</p>
      <p>Users are encouraged to use online tools like Toptal and CleanCSS for CSS minification.</p>
      <p>While online tools can be helpful, they aren’t ideal for real-time development, where CSS is frequently updated. Automating the process with an NPM package is a better approach.</p>

      <p>
        ✅ Tips:
        <ul className="list-disc list-inside mt-2">
          <li>Minifying reduces file size and improves page load speed.</li>
          <li>Tools like <a href="https://cssminifier.com" target="_blank" className="text-blue-600 underline">CSS Minifier</a> or <code>npm packages</code> can automate this.</li>
          <li>Always keep a readable version for development and minified for production.</li>
          <li>Tailwind CSS automatically purges unused classes in production, which is similar to minifying.</li>
        </ul>
      </p>
    </div>
  );
};

export default CssMinifyDemo;