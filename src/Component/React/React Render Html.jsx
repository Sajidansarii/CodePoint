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
           <pre className="text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5">
            <code>
                {`<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vite + React</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>`}
            </code>
           </pre>

           <p className="mt-5">To better understand the index.html file, let’s remove any unnecessary code.</p>
           <h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">Example</h2>
           <p>The updated index.html file should now be as shown below:</p>
           <pre className="text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5">
            <code>
                {`<!doctype html>
<html lang="en">
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>`}
            </code>
           </pre>

           <p className="mt-5">The file has now been stripped of unnecessary code, allowing us to focus on learning React without distractions.</p>
          

          <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">The createRoot Function</h2>
          <p>The createRoot function, which is built in, resides in the main.jsx file within the src directory and is responsible for creating a React application’s root node.</p>
          <h2 className="text-gray-800 text-2xl font-semibold mt-5 mb-3">Example</h2>
          <p>The default contents of the src/main.jsx file</p>
          <pre className="text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5">
            <code>
                {`import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <App />
    </StrictMode>
  )  `}
            </code>
          </pre>


          <p className="mt-5">The <span className="text-red-400">createRoot()</span> function takes an HTML element as its argument, defining where a React component will be displayed, so to understand it better, let’s remove unnecessary code and create our own “Hello React!” example.</p>
         <h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">Example</h2>
         <p>Your src/main.jsx file should now look like this:</p>
         <pre className="text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5">
            <code>
                {`import { createRoot } from 'react-dom/client'

createRoot(document.getElementById('root')).render(
  <h1>Hello React!</h1>
)  `}
            </code>
         </pre>

         <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">The render Method</h2>
        <p>The render method determines what content is rendered in the HTML container, and this content appears in {'<div id="root">'}.</p>
        <h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">Example</h2>
        <p>Show a paragraph inside the root element.</p>
        <pre className="text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5 ">
            <code>
                {`import { createRoot } from 'react-dom/client'

createRoot(document.getElementById('root')).render(
  <p>Welcome!</p>
) `}
            </code>
        </pre>

        <h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">Show React</h2>
        <p>The tutorial comes with a “Show React” feature that shows the output of the code we discuss.</p>
        <h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">Example</h2>
        <p>The example as shown in the “Show React” tool.</p>
        <pre className="text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5">
            <code>
                {`import { createRoot } from 'react-dom/client'

createRoot(document.getElementById('root')).render(
  <p>Welcome!</p>
) 
`}
            </code>
        </pre>

        <h1 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">The HTML Code</h1>
        <p>The HTML in this tutorial is written using JSX, which lets you include HTML tags directly in JavaScript. Don’t worry if it looks unfamiliar—you’ll learn more about JSX later.</p>
        <h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">Example</h2>
       <p>Create a variable holding HTML content and display it in the root element.</p>
       <pre className="text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5">
        <code>
            {`import { createRoot } from 'react-dom/client'

const myelement = (
  <table>
    <tr>
      <th>Name</th>
    </tr>
    <tr>
      <td>John</td>
    </tr>
    <tr>
      <td>Elsa</td>
    </tr>
  </table>
);

createRoot(document.getElementById('root')).render(
  myelement
)`}
        </code>
       </pre>

       <h1 className="text-2xl text-gray-800 font-semibold mt-5">The Root Node</h1>
       <p>The root node is the HTML element where React displays content; it acts as a container managed by React and does not have to be a {'<div>'} or have the id="root".</p>
       <h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">Example</h2>    
      <p>The root node is not restricted to a specific name. Display your content in the {'<header id="sandy">'} element.</p>
      <pre className="text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5">
        <code>
            {`<!doctype html>
<html lang="en">
  <body>
    <header id="sandy"></header>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>`}
        </code>
      </pre>



        </div>
    )
}

export default ReactRender;