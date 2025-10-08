import React from "react";

const CssMinifyDemo = () => {
  return (
    <div className="p-8 min-h-screen space-y-6 overflow-hidden">
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

   <pre className="bg-gray-200 p-4 rounded-lg">
    <code>
      {`npm install css-minify`}
    </code>
   </pre>

   <p>Once you've installed the package, change to your project directory in the terminal and execute the following command to minify a selected CSS file.</p>
   <pre className="bg-gray-200 p-4 rounded-lg">
    <code>
      {`npx css-minify -f filename`}
    </code>
   </pre>
   <p>Replace the filename in the command with your actual CSS file name to minify it.</p>
   <p>To minify all the CSS files in a specific directory, run the following command in your terminal.</p>
   <pre className="bg-gray-200 p-4 rounded-lg">
    <code>
      {`npx css-minify -d direName`}
    </code>
   </pre>
     <p>Replace <span className="bg-gray-50 px-2 rounded-md text-red-400">?dirName</span> in the command with the actual name of your directory.</p>
     <p>Let’s walk through the following example to see how CSS minification works.</p>
      <h1 className="text-2xl">Example</h1>
      <p>In the example below, we first added the regular CSS code to the CSS file. Then, we ran the command above to minify it. This process creates the <span className="text-red-400 bg-gray-50 px-2 rounded-md">?css-dist</span> folder and places the filename.min.css file inside, containing the minified CSS.</p>
      <p>The output shows that whitespaces and comments are removed to minimize the CSS file.</p>
      <pre className="bg-gray-200 p-4 rounded-lg">
        <code>
          {`.element {
   /* border for element */
   border: 2px solid blue;
   /* text color for element */
   color: red;
   /* adding a gradient to the element as a background */
   background-image: linear-gradient(45deg, #000, #fff);
}
div {
   /* padding for div */
   padding: 10px;
   /* margin for div */
   margin: 10px;
   /* border for div */
   border: 1px solid #000;
}`}
        </code>
      </pre>
      <h1 className="text-2xl">Output</h1>
      <pre className="bg-gray-200 w-[900px] p-4 rounded-lg overflow-y-hidden">
        <code>
          {`.element{background-image:linear-gradient(45deg,#000,#fff);border:2px solid blue;color:red}div{border:1px solid #000;margin:10px;padding:10px}`}
        </code>
      </pre>
      <h1 className="text-2xl">Example</h1>
      <p>In this example, we showcase CSS minification using features like nested selectors, pseudo selectors, and gradients. The CSS-minify NPM package was used for the minification process.</p>

      <pre className="bg-gray-200 p-4 rounded-lg">
        <code>
          {`li :nth-child(even) {
   /* selecting even elements of the list */
   background-color: #f2f2f2;
   color: green;
   border-radius: 12px;
   /* Applying padding */
   padding: 4px;
}
/* nested selector */
ul li ul {
   display: none;
   text-decoration: dashed;
   color: red;
   /* changing the font size */
   font-size: 12px;
   font-weight: bold;
}
div > p {
   color: blue;
   font-size: 12px;
   font-weight: bold;
}`}
        </code>
      </pre>
      <h1 className="text-2xl">Output</h1>
      <pre className="bg-gray-200 overflow-auto w-[900px] p-4 rounded-lg">
        <code>
          {`li :nth-child(2n){background-color:#f2f2f2;border-radius:12px;color:green;padding:4px}ul li ul{color:red;display:none;text-decoration:dashed}div>p,ul li ul{font-size:12px;font-weight:700}div>p{color:blue}`}
        </code>
      </pre>

      <h1 className="text-2xl">Using Online Tools</h1>
      <p>Another option for CSS minification is to use online platforms. Many such tools exist that can convert your regular CSS into a minified format.</p>
      <p>Users are encouraged to use online tools like Toptal and CleanCSS for CSS minification.</p>
      <p>While online tools can be helpful, they aren’t ideal for real-time development, where CSS is frequently updated. Automating the process with an NPM package is a better approach.</p>









      <p className="text-gray-700">
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