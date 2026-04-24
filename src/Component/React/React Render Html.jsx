import React from "react";

const ReactRender = () => {
    return (
        <div className="max-w-4xl p-6 mt-10">
            <h1 className="text-3xl font-medium text-blue-500 mb-3">React Render HTML</h1>
            <p>React aims to display HTML content on a web page by rendering it into a container with the <span className="text-red-400">createRoot()</span> function.</p>
          
          <h2 className="text-gray-800 text-2xl font-semibold mt-10 mb-3">The Container</h2>
          <p className="mb-3">React uses a container to display HTML in the browser, most commonly a {'<div id="root"></div>'} found in <span className="text-red-400">index.html</span>.</p>
          <p>If you followed the steps from the previous chapter, your project should include an index.html file in the root directory.</p>
          <h2 className="text-gray-800 text-2xl font-semibold mt-5 mb-3">Example</h2>
          <p>The initial content of the index.html file</p>
         <pre className="bg-gray-200 text-sm p-4 rounded-lg overflow-x-auto mt-5">
  <code>
    <span className="text-gray-500">&lt;!doctype html&gt;</span>
    {"\n"}
    <span className="text-blue-600">&lt;html</span>{" "}
    <span className="text-green-600">lang</span>
    <span className="text-pink-500">="en"</span>
    <span className="text-blue-600">&gt;</span>
    {"\n  "}
    <span className="text-blue-600">&lt;head&gt;</span>
    {"\n    "}
    <span className="text-blue-600">&lt;meta</span>{" "}
    <span className="text-green-600">charset</span>
    <span className="text-pink-500">="UTF-8"</span>
    <span className="text-blue-600"> /&gt;</span>
    {"\n    "}
    <span className="text-blue-600">&lt;link</span>{" "}
    <span className="text-green-600">rel</span>
    <span className="text-pink-500">="icon"</span>{" "}
    <span className="text-green-600">type</span>
    <span className="text-pink-500">="image/svg+xml"</span>{" "}
    <span className="text-green-600">href</span>
    <span className="text-pink-500">="/vite.svg"</span>
    <span className="text-blue-600"> /&gt;</span>
    {"\n    "}
    <span className="text-blue-600">&lt;meta</span>{" "}
    <span className="text-green-600">name</span>
    <span className="text-pink-500">="viewport"</span>{" "}
    <span className="text-green-600">content</span>
    <span className="text-pink-500">="width=device-width, initial-scale=1.0"</span>
    <span className="text-blue-600"> /&gt;</span>
    {"\n    "}
    <span className="text-blue-600">&lt;title&gt;</span>
    Vite + React
    <span className="text-blue-600">&lt;/title&gt;</span>
    {"\n  "}
    <span className="text-blue-600">&lt;/head&gt;</span>
    {"\n  "}
    <span className="text-blue-600">&lt;body&gt;</span>
    {"\n    "}
    <span className="text-blue-600">&lt;div</span>{" "}
    <span className="text-green-600">id</span>
    <span className="text-pink-500">="root"</span>
    <span className="text-blue-600">&gt;&lt;/div&gt;</span>
    {"\n    "}
    <span className="text-blue-600">&lt;script</span>{" "}
    <span className="text-green-600">type</span>
    <span className="text-pink-500">="module"</span>{" "}
    <span className="text-green-600">src</span>
    <span className="text-pink-500">="/src/main.jsx"</span>
    <span className="text-blue-600">&gt;&lt;/script&gt;</span>
    {"\n  "}
    <span className="text-blue-600">&lt;/body&gt;</span>
    {"\n"}
    <span className="text-blue-600">&lt;/html&gt;</span>
  </code>
</pre>

           <p className="mt-5">To better understand the index.html file, let’s remove any unnecessary code.</p>
           <h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">Example</h2>
           <p>The updated index.html file should now be as shown below:</p>
          <pre className="bg-gray-200 text-sm p-4 rounded-lg overflow-x-auto mt-5">
  <code>
    <span className="text-gray-500">&lt;!doctype html&gt;</span>
    {"\n"}
    <span className="text-blue-600">&lt;html</span>{" "}
    <span className="text-green-600">lang</span>
    <span className="text-pink-500">="en"</span>
    <span className="text-blue-600">&gt;</span>
    {"\n"}
    {"  "}
    <span className="text-blue-600">&lt;body&gt;</span>
    {"\n    "}
    <span className="text-blue-600">&lt;div</span>{" "}
    <span className="text-green-600">id</span>
    <span className="text-pink-500">="root"</span>
    <span className="text-blue-600">&gt;&lt;/div&gt;</span>
    {"\n    "}
    <span className="text-blue-600">&lt;script</span>{" "}
    <span className="text-green-600">type</span>
    <span className="text-pink-500">="module"</span>{" "}
    <span className="text-green-600">src</span>
    <span className="text-pink-500">="/src/main.jsx"</span>
    <span className="text-blue-600">&gt;&lt;/script&gt;</span>
    {"\n  "}
    <span className="text-blue-600">&lt;/body&gt;</span>
    {"\n"}
    <span className="text-blue-600">&lt;/html&gt;</span>
  </code>
</pre>

           <p className="mt-5">The file has now been stripped of unnecessary code, allowing us to focus on learning React without distractions.</p>
          

          <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">The createRoot Function</h2>
          <p>The createRoot function, which is built in, resides in the main.jsx file within the src directory and is responsible for creating a React application’s root node.</p>
          <h2 className="text-gray-800 text-2xl font-semibold mt-5 mb-3">Example</h2>
          <p>The default contents of the src/main.jsx file</p>
        <pre className="bg-gray-200 text-sm p-4 rounded-lg overflow-x-auto mt-5">
  <code>
    <span className="text-purple-600">import</span>{" "}
    <span className="text-gray-800">{`{ StrictMode }`}</span>{" "}
    <span className="text-purple-600">from</span>{" "}
    <span className="text-green-600">'react'</span>
    {"\n"}
    <span className="text-purple-600">import</span>{" "}
    <span className="text-gray-800">{`{ createRoot }`}</span>{" "}
    <span className="text-purple-600">from</span>{" "}
    <span className="text-green-600">'react-dom/client'</span>
    {"\n"}
    <span className="text-purple-600">import</span>{" "}
    <span className="text-green-600">'./index.css'</span>
    {"\n"}
    <span className="text-purple-600">import</span>{" "}
    <span className="text-blue-600">App</span>{" "}
    <span className="text-purple-600">from</span>{" "}
    <span className="text-green-600">'./App.jsx'</span>

    {"\n\n"}

    <span className="text-blue-600">createRoot</span>
    <span className="text-gray-800">(document.getElementById('root'))</span>
    <span className="text-pink-500">.render</span>
    <span className="text-gray-800">(</span>
    {"\n  "}
    <span className="text-blue-600">&lt;StrictMode&gt;</span>
    {"\n    "}
    <span className="text-blue-600">&lt;App /&gt;</span>
    {"\n  "}
    <span className="text-blue-600">&lt;/StrictMode&gt;</span>
    {"\n"}
    <span className="text-gray-800">)</span>
  </code>
</pre>


          <p className="mt-5">The <span className="text-red-400">createRoot()</span> function takes an HTML element as its argument, defining where a React component will be displayed, so to understand it better, let’s remove unnecessary code and create our own “Hello React!” example.</p>
         <h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">Example</h2>
         <p>Your src/main.jsx file should now look like this:</p>
        <pre className="bg-gray-200 text-sm p-4 rounded-lg overflow-x-auto mt-5">
  <code>
    <span className="text-purple-600">import</span>{" "}
    <span className="text-gray-800">{`{ createRoot }`}</span>{" "}
    <span className="text-purple-600">from</span>{" "}
    <span className="text-green-600">'react-dom/client'</span>

    {"\n\n"}

    <span className="text-blue-600">createRoot</span>
    <span className="text-gray-800">(document.getElementById('root'))</span>
    <span className="text-pink-500">.render</span>
    <span className="text-gray-800">(</span>
    {"\n  "}
    <span className="text-blue-600">&lt;h1&gt;</span>
    Hello React!
    <span className="text-blue-600">&lt;/h1&gt;</span>
    {"\n"}
    <span className="text-gray-800">)</span>
  </code>
</pre>

         <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">The render Method</h2>
        <p>The render method determines what content is rendered in the HTML container, and this content appears in {'<div id="root">'}.</p>
        <h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">Example</h2>
        <p>Show a paragraph inside the root element.</p>
       <pre className="bg-gray-200 text-sm p-4 rounded-lg overflow-x-auto mt-5">
  <code>
    <span className="text-purple-600">import</span>{" "}
    <span className="text-gray-800">{`{ createRoot }`}</span>{" "}
    <span className="text-purple-600">from</span>{" "}
    <span className="text-green-600">'react-dom/client'</span>

    {"\n\n"}

    <span className="text-blue-600">createRoot</span>
    <span className="text-gray-800">(document.getElementById('root'))</span>
    <span className="text-pink-500">.render</span>
    <span className="text-gray-800">(</span>
    {"\n  "}
    <span className="text-blue-600">&lt;p&gt;</span>
    Welcome!
    <span className="text-blue-600">&lt;/p&gt;</span>
    {"\n"}
    <span className="text-gray-800">)</span>
  </code>
</pre>

        <h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">Show React</h2>
        <p>The tutorial comes with a “Show React” feature that shows the output of the code we discuss.</p>
        <h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">Example</h2>
        <p>The example as shown in the “Show React” tool.</p>
      <pre className="bg-gray-200 text-sm p-4 rounded-lg overflow-x-auto mt-5">
  <code>
    <span className="text-purple-600">import</span>{" "}
    <span className="text-gray-800">{`{ createRoot }`}</span>{" "}
    <span className="text-purple-600">from</span>{" "}
    <span className="text-green-600">'react-dom/client'</span>

    {"\n\n"}

    <span className="text-blue-600">createRoot</span>
    <span className="text-gray-800">(document.getElementById('root'))</span>
    <span className="text-pink-500">.render</span>
    <span className="text-gray-800">(</span>
    {"\n  "}
    <span className="text-blue-600">&lt;p&gt;</span>
    Welcome!
    <span className="text-blue-600">&lt;/p&gt;</span>
    {"\n"}
    <span className="text-gray-800">)</span>
  </code>
</pre>
        <h1 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">The HTML Code</h1>
        <p>The HTML in this tutorial is written using JSX, which lets you include HTML tags directly in JavaScript. Don’t worry if it looks unfamiliar—you’ll learn more about JSX later.</p>
        <h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">Example</h2>
       <p>Create a variable holding HTML content and display it in the root element.</p>
      <pre className="bg-gray-200 text-sm p-4 rounded-lg overflow-x-auto mt-5">
  <code>
    <span className="text-purple-600">import</span>{" "}
    <span className="text-gray-800">{`{ createRoot }`}</span>{" "}
    <span className="text-purple-600">from</span>{" "}
    <span className="text-green-600">'react-dom/client'</span>

    {"\n\n"}

    <span className="text-purple-600">const</span>{" "}
    <span className="text-blue-600">myelement</span>{" "}
    <span className="text-pink-500">=</span>{" "}
    <span className="text-gray-800">(</span>
    {"\n  "}
    <span className="text-blue-600">&lt;table&gt;</span>
    {"\n    "}
    <span className="text-blue-600">&lt;tr&gt;</span>
    {"\n      "}
    <span className="text-blue-600">&lt;th&gt;</span>
    Name
    <span className="text-blue-600">&lt;/th&gt;</span>
    {"\n    "}
    <span className="text-blue-600">&lt;/tr&gt;</span>
    {"\n    "}
    <span className="text-blue-600">&lt;tr&gt;</span>
    {"\n      "}
    <span className="text-blue-600">&lt;td&gt;</span>
    John
    <span className="text-blue-600">&lt;/td&gt;</span>
    {"\n    "}
    <span className="text-blue-600">&lt;/tr&gt;</span>
    {"\n    "}
    <span className="text-blue-600">&lt;tr&gt;</span>
    {"\n      "}
    <span className="text-blue-600">&lt;td&gt;</span>
    Elsa
    <span className="text-blue-600">&lt;/td&gt;</span>
    {"\n    "}
    <span className="text-blue-600">&lt;/tr&gt;</span>
    {"\n  "}
    <span className="text-blue-600">&lt;/table&gt;</span>
    {"\n"}
    <span className="text-gray-800">)</span>
    <span className="text-pink-500">;</span>

    {"\n\n"}

    <span className="text-blue-600">createRoot</span>
    <span className="text-gray-800">(document.getElementById('root'))</span>
    <span className="text-pink-500">.render</span>
    <span className="text-gray-800">(myelement)</span>
  </code>
</pre>

       <h1 className="text-2xl text-gray-800 font-semibold mt-5">The Root Node</h1>
       <p>The root node is the HTML element where React displays content; it acts as a container managed by React and does not have to be a {'<div>'} or have the id="root".</p>
       <h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">Example</h2>    
      <p>The root node is not restricted to a specific name. Display your content in the {'<header id="sandy">'} element.</p>
    <pre className="bg-gray-200 text-sm p-4 rounded-lg overflow-x-auto mt-5">
  <code>
    <span className="text-gray-500">&lt;!doctype html&gt;</span>
    {"\n"}
    <span className="text-blue-600">&lt;html</span>{" "}
    <span className="text-green-600">lang</span>
    <span className="text-pink-500">="en"</span>
    <span className="text-blue-600">&gt;</span>
    {"\n"}
    {"  "}
    <span className="text-blue-600">&lt;body&gt;</span>
    {"\n    "}
    <span className="text-blue-600">&lt;header</span>{" "}
    <span className="text-green-600">id</span>
    <span className="text-pink-500">="sandy"</span>
    <span className="text-blue-600">&gt;&lt;/header&gt;</span>
    {"\n    "}
    <span className="text-blue-600">&lt;script</span>{" "}
    <span className="text-green-600">type</span>
    <span className="text-pink-500">="module"</span>{" "}
    <span className="text-green-600">src</span>
    <span className="text-pink-500">="/src/main.jsx"</span>
    <span className="text-blue-600">&gt;&lt;/script&gt;</span>
    {"\n  "}
    <span className="text-blue-600">&lt;/body&gt;</span>
    {"\n"}
    <span className="text-blue-600">&lt;/html&gt;</span>
  </code>
</pre>


        </div>
    )
}

export default ReactRender;