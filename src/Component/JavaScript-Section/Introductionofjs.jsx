import React from "react";

export default function IntroJavaScript() {
  return (
    <div className="p-4 sm:p-6 md:p-8 max-w-4xl mt-10">
      <div className="max-w-4xl">
        {/* Page Title */}
        
          <h1 className="lg:text-3xl text-2xl font-medium text-blue-500 mb-1">JavaScript Introduction</h1>
          <p className="text-lg">Learn the language of the web step by step </p>

        {/* Introduction Section */}
        <section className="bg-white rounded-2xl mt-5">
          <h2 className="text-2xl font-semibold">What is JavaScript?</h2>
          <p className="leading-relaxed">
            JavaScript (JS) is a powerful programming language that allows you
            to add <span className="font-semibold text-red-400">interactivity</span>, 
            <span className="font-semibold text-red-400"> logic</span>, and{" "}
            <span className="font-semibold text-red-400">dynamic content</span>{" "}
            to websites. It runs directly in the browser and is one of the
            three core web technologies along with{" "}
            <span className="font-semibold">HTML</span> and{" "}
            <span className="font-semibold">CSS</span>.
          </p>
        </section>

        <div className="bg-white rounded-2xl mt-5">
          <h1 className="text-2xl font-semibold mb-4">Why study javascript?</h1>
          <p>Javascript is one the 3 language every web developer must learn:</p>
          <ul className="list-[square] list-inside mt-2 leading-relaxed">
            <li>HTML to define the content of web pages</li>
            <li>CSS to specify the layout of web pages</li>
            <li>Javascript to program the behavior of web pages</li>
          </ul>
        </div>

        <h1 className="text-2xl mt-10 mb-2">JavaScript Can Change HTML Content</h1>
        <p className="leading-relaxed">JavaScript provides multiple HTML methods, including getElementById().</p>
        <p className="leading-relaxed">In this example, an element with the ID demo is found, and its innerHTML is set to "Hello JavaScript".</p>
        <h1 className="text-2xl mt-5 mb-5">Example</h1>
        <pre className="text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mb-5">
          {`document.getElementById("demo").innerHTML = "Hello JavaScript";`}
        </pre>
        <h1 className="text-2xl mb-5 mt-10">Example</h1>
        <pre className="text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mb-5">
          {`document.getElementById('demo').innerHTML = 'Hello JavaScript';`}
        </pre>

        <h1 className="text-2xl">JavaScript Can Change HTML Attribute Values</h1>
        <p>This example shows JavaScript updating the src (source) attribute of an <span className="text-red-400 bg-gray-50 px-1">{'<img>'}</span> tag.</p>

         <h1 className="text-2xl mt-14">JavaScript Can Change HTML Styles (CSS)</h1>       
         <p className="leading-relaxed">Updating the style of an HTML tag is essentially tweaking one of its attributes—so make the change.</p>
         <h1 className="text-2xl mt-10">Example</h1>
         <pre className="text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5">
          {`document.getElementById("demo").style.fontSize = "35px";`}
         </pre>

         <h1 className="text-2xl mt-10">JavaScript Can Hide HTML Elements</h1>
         <p>Changing the display property is an effective way to hide HTML elements.</p>
         <h1 className="text-2xl mt-10">Example</h1>
         <pre className="text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mb-5 mt-5">
          {`document.getElementById("demo").style.display = "none";`}
         </pre>

         <h1 className="text-2xl mt-10">JavaScript Can Show HTML Elements</h1>
         <p>Changing the display property is also how you make hidden HTML elements visible.</p>
         <h1 className="text-2xl mt-10">Example</h1>
         <pre className="text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5 mb-10">
          {`document.getElementById("demo").style.display = "block";`}
         </pre>


        {/* Code Example */}
        <section className="bg-gray-900 text-gray-100 rounded-2xl p-6 shadow-lg">
          <h2 className="text-xl font-semibold text-yellow-400 mb-4">
            Example: Hello World in JavaScript
          </h2>
          <pre className="bg-gray-800 p-4 rounded-lg overflow-x-auto">
            <code>{`// This will show a message in the browser console
console.log("Hello, World!");

// This will show an alert popup on the webpage
alert("Welcome to JavaScript!");`}</code>
          </pre>
        </section>

        {/* Explanation Section */}
        <section className="bg-white shadow-md rounded-2xl p-6 mt-10">
          <h2 className="text-2xl font-semibold mb-4">Explanation</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <code className="bg-gray-100 px-2 py-1 rounded">console.log()</code>{" "}
              is used to print messages in the browser’s developer console. This
              is useful for debugging.
            </li>
            <li>
              <code className="bg-gray-100 px-2 py-1 rounded">alert()</code>{" "}
              displays a popup message to the user.
            </li>
            <li>
              Both statements end with a <span className="font-semibold">semicolon (;)</span>, 
              which indicates the end of a line in JavaScript (optional but recommended).
            </li>
          </ul>
        </section>

        {/* Key Takeaway */}
        <section className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-xl mt-10">
          <p className="text-lg">
            JavaScript makes web pages come alive by adding interactivity and
            logic. It’s the foundation of modern web development.
          </p>
        </section>
      </div>
    </div>
  );
}