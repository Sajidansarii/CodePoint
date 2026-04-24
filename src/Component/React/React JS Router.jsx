import React from "react";

const ReactRouter = () => {
    return(
        <div className="max-w-4xl p-6 mt-10">
        <h1 className="text-3xl text-blue-500 font-semibold mb-3">React Router</h1>
        <p><span className="text-red-400 bg-gray-50">React Router</span> is a React-specific routing library that handles client-side navigation by mapping URL paths to corresponding React components.</p>
        
        <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-1">Types of React Routers</h2>
        <p>React provides three different types of routers.</p>
        <ul className="list-[square] list-inside space-y-1 mt-5">
            <li><span className="font-semibold">BrowserRouter</span>: Implements routing using the HTML5 History API, enabling dynamic URL updates with synchronized <span className=" ml-5">browser</span> history.</li>
            <li><span className="font-semibold">HashRouter</span>: Handles routing via URL hash fragments and functions without server-side URL rewriting.</li>
            <li><span className="font-semibold">MemoryRouter</span>: Maintains routing history in memory, suitable for non-DOM environments and test scenarios.</li>
        </ul>

        <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Features of React Router</h2>
        <ul className="list-[square] list-inside space-y-1 mt-5">
            <li><span className="font-semibold">Nested Routes</span>: It allows routes to be nested, making it easier to build and organize complex routing structures.</li>
            <li><span className="font-semibold">Route Parameters</span>: Supports dynamic routes using parameters to match different URL patterns.</li>
            <li><span className="font-semibold">Improved TypeScript Support</span>: Better TypeScript integration helps create type-safe applications with fewer errors.</li>
            <li><span className="font-semibold">Programmatic Navigation</span>: The useNavigate hook lets developers navigate between routes based on user actions or <span className="ml-5">conditions</span>.</li>
            <li><span className="font-semibold">Declarative Routing</span>: React Router v6 uses Routes and Route components to define routes in a clear and readable <span className="ml-5">way</span>.</li>
        </ul>


        <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-1">Components of React Router</h2>
        <p>These are the primary React Router components.</p>
        
        <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">1. BrowserRouter and HashRouter</h2>
        <p>BrowserRouter synchronizes the UI with the URL through the HTML5 History API, while HashRouter uses window.location.hash for routing.</p>
      <pre className="bg-gray-100 p-4 rounded-lg mt-5 overflow-x-auto text-gray-800">
  <code>
    <span className="text-pink-600">&lt;BrowserRouter&gt;</span>{"\n"}
    {"    "}
    <span className="text-gray-500">{/* Your routes go here */}</span>{"\n"}
    <span className="text-pink-600">&lt;/BrowserRouter&gt;</span>
  </code>
</pre>

       <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">2. Routes and Route</h2>
       <p>Routes act as a container for all route definitions, while Route specifies an individual path and the component that should be rendered.</p>
     <pre className="bg-gray-100 text-gray-800 p-4 rounded-lg mt-5 overflow-x-auto">
  <code>
    <span className="text-pink-600">&lt;Routes&gt;</span>{"\n"}
    {"  "}
    <span className="text-pink-600">&lt;Route</span>{" "}
    <span className="text-purple-600">path</span>
    <span className="text-gray-800">=</span>
    <span className="text-orange-500">"/"</span>{" "}
    <span className="text-purple-600">element</span>
    <span className="text-gray-800">=</span>
    <span className="text-pink-600">{`<Home />`}</span>
    <span className="text-pink-600"> /&gt;</span>{"\n"}
    
    {"  "}
    <span className="text-pink-600">&lt;Route</span>{" "}
    <span className="text-purple-600">path</span>
    <span className="text-gray-800">=</span>
    <span className="text-orange-500">"/about"</span>{" "}
    <span className="text-purple-600">element</span>
    <span className="text-gray-800">=</span>
    <span className="text-pink-600">{`<About />`}</span>
    <span className="text-pink-600"> /&gt;</span>{"\n"}
    
    <span className="text-pink-600">&lt;/Routes&gt;</span>
  </code>
</pre>


       <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">3. Link and NavLink</h2>
       <p>Link enables navigation within the app, whereas NavLink extends it by applying styles when the route is active.</p>
     <pre className="bg-gray-100 text-gray-800 p-4 rounded-lg mt-5 overflow-x-auto">
  <code>
    <span className="text-pink-600">&lt;nav&gt;</span>{"\n"}
    {"  "}
    <span className="text-pink-600">&lt;NavLink</span>{" "}
    <span className="text-purple-600">to</span>
    <span className="text-gray-800">=</span>
    <span className="text-orange-500">"/"</span>{" "}
    <span className="text-purple-600">activeClassName</span>
    <span className="text-gray-800">=</span>
    <span className="text-orange-500">"active"</span>
    <span className="text-pink-600">&gt;</span>
    <span className="text-gray-800">Home</span>
    <span className="text-pink-600">&lt;/NavLink&gt;</span>{"\n"}

    {"  "}
    <span className="text-pink-600">&lt;Link</span>{" "}
    <span className="text-purple-600">to</span>
    <span className="text-gray-800">=</span>
    <span className="text-orange-500">"/about"</span>
    <span className="text-pink-600">&gt;</span>
    <span className="text-gray-800">About</span>
    <span className="text-pink-600">&lt;/Link&gt;</span>{"\n"}

    <span className="text-pink-600">&lt;/nav&gt;</span>
  </code>
</pre>

       <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Create Routes using React Router</h2>
       <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">1: Initialize React Project</h2>
       <p>To create a new React app, run the command below.</p>
     <pre className="bg-gray-100 text-gray-800 p-4 rounded-lg mt-5 overflow-x-auto">
  <code>
    <span className="text-green-600">npm</span>{" "}
    <span className="text-blue-600">create vite@latest</span>{" "}
    <span className="text-gray-900">react-router-example</span>{"\n"}
    <span className="text-green-600">cd</span>{" "}
    <span className="text-gray-900">react-router-example</span>
  </code>
</pre>

       <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">2: Install React Router</h2>
       <p>Install React Router by executing the following command in your application’s terminal.</p>
    <pre className="bg-gray-100 text-gray-800 p-4 rounded-lg mt-5 overflow-x-auto">
  <code>
    <span className="text-green-600">npm</span>{" "}
    <span className="text-blue-600">install</span>{" "}
    <span className="text-purple-600">react-router-dom@6</span>
  </code>
</pre>

       <p className="mt-5">Depenedencies list after installing react router</p>
   <pre className="bg-gray-100 text-gray-800 p-4 rounded-lg mt-5 overflow-x-auto">
  <code>
    <span className="text-pink-600">"dependencies"</span>
    <span className="text-gray-800">: {"{"}</span>{"\n"}
    
    {"  "}
    <span className="text-orange-600">"@testing-library/jest-dom"</span>
    <span className="text-gray-800">: </span>
    <span className="text-green-600">"^5.17.0"</span>
    <span className="text-gray-800">,</span>{"\n"}

    {"  "}
    <span className="text-orange-600">"@testing-library/react"</span>
    <span className="text-gray-800">: </span>
    <span className="text-green-600">"^13.4.0"</span>
    <span className="text-gray-800">,</span>{"\n"}

    {"  "}
    <span className="text-orange-600">"@testing-library/user-event"</span>
    <span className="text-gray-800">: </span>
    <span className="text-green-600">"^13.5.0"</span>
    <span className="text-gray-800">,</span>{"\n"}

    {"  "}
    <span className="text-orange-600">"react"</span>
    <span className="text-gray-800">: </span>
    <span className="text-green-600">"^18.3.1"</span>
    <span className="text-gray-800">,</span>{"\n"}

    {"  "}
    <span className="text-orange-600">"react-dom"</span>
    <span className="text-gray-800">: </span>
    <span className="text-green-600">"^18.3.1"</span>
    <span className="text-gray-800">,</span>{"\n"}

    {"  "}
    <span className="text-orange-600">"react-router-dom"</span>
    <span className="text-gray-800">: </span>
    <span className="text-green-600">"^6.24.1"</span>
    <span className="text-gray-800">,</span>{"\n"}

    {"  "}
    <span className="text-orange-600">"react-scripts"</span>
    <span className="text-gray-800">: </span>
    <span className="text-green-600">"5.0.1"</span>
    <span className="text-gray-800">,</span>{"\n"}

    {"  "}
    <span className="text-orange-600">"web-vitals"</span>
    <span className="text-gray-800">: </span>
    <span className="text-green-600">"^2.1.4"</span>{"\n"}

    <span className="text-gray-800">{"}"}</span>
  </code>
</pre>

       <p className="mt-10">This demonstrates the implementation of fundamental routing in a React application.</p>
      <pre className="bg-gray-100 text-gray-800 p-4 rounded-lg mt-5 overflow-x-auto">
  <code>
    <span className="text-gray-500">// src/index.js</span>{"\n\n"}

    <span className="text-purple-600">import</span>{" "}
    <span className="text-gray-900">React</span>{" "}
    <span className="text-purple-600">from</span>{" "}
    <span className="text-orange-500">"react"</span>;
    {"\n"}

    <span className="text-purple-600">import</span>{" "}
    <span className="text-gray-900">ReactDOM</span>{" "}
    <span className="text-purple-600">from</span>{" "}
    <span className="text-orange-500">"react-dom/client"</span>;
    {"\n"}

    <span className="text-purple-600">import</span>{" "}
    <span className="text-orange-500">"./index.css"</span>;
    {"\n"}

    <span className="text-purple-600">import</span>{" "}
    <span className="text-gray-900">App</span>{" "}
    <span className="text-purple-600">from</span>{" "}
    <span className="text-orange-500">"./App"</span>;
    {"\n\n"}

    <span className="text-purple-600">const</span>{" "}
    <span className="text-blue-600">root</span>{" "}
    <span className="text-gray-800">=</span>{" "}
    <span className="text-gray-900">ReactDOM</span>
    <span className="text-gray-800">.</span>
    <span className="text-yellow-600">createRoot</span>
    <span className="text-gray-800">(</span>
    <span className="text-gray-900">document</span>
    <span className="text-gray-800">.</span>
    <span className="text-yellow-600">getElementById</span>
    <span className="text-gray-800">(</span>
    <span className="text-orange-500">"root"</span>
    <span className="text-gray-800">));</span>
    {"\n"}

    <span className="text-blue-600">root</span>
    <span className="text-gray-800">.</span>
    <span className="text-yellow-600">render</span>
    <span className="text-gray-800">(</span>
    {"\n"}
    {"  "}
    <span className="text-pink-600">&lt;React.StrictMode&gt;</span>
    {"\n"}
    {"    "}
    <span className="text-pink-600">&lt;App /&gt;</span>
    {"\n"}
    {"  "}
    <span className="text-pink-600">&lt;/React.StrictMode&gt;</span>
    {"\n"}
    <span className="text-gray-800">);</span>
  </code>
</pre>

       <h2 className="text-xl text-gray-800 font-semibold mt-5"> 3: Run the application using the following command.</h2>
     <pre className="bg-gray-100 text-gray-800 p-4 rounded-lg mt-5 overflow-x-auto">
  <code>
    <span className="text-green-600">npm</span>{" "}
    <span className="text-blue-600">run</span>{" "}
    <span className="text-purple-600">dev</span>
  </code>
</pre>

       <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Uses of React Router</h2>
       <ul className="list-[square] space-y-1 mt-5">
        <li><span className="font-semibold">Dynamic Routing</span>: Routes can change based on app state or data, allowing complex navigation flows.</li>
        <li><span className="font-semibold">URL Management</span>: It manages URLs, supports deep linking, bookmarks, and preserves browser history.</li>
        <li><span className="font-semibold">Component-Based Approach</span>: Routes are defined using components, making them modular and reusable.</li>
        <li><span className="font-semibold">Nested Routes</span>: You can create nested routes for better organization, which is especially helpful in large apps.</li>
        <li><span className="font-semibold">Navigation and Routing</span>: React Router lets you navigate between different pages or views in a React app without refreshing the page.</li>
       </ul>

        </div>
    )
}

export default ReactRouter;