import React from "react";

const ReactRouterdom = () => {
    return(
        <div className="max-w-4xl p-6 mt-10">
         <h1 className="lg:text-3xl text-2xl text-blue-500 font-semibold mb-3">What is react-router-dom?</h1>
        <p className="mb-3">React Router DOM is an npm package that provides dynamic routing for React applications. It supports client- and server-side routing, enabling seamless page navigation without full reloads.</p>
        <p>React Router DOM is an npm package that provides dynamic routing for React applications. It supports client- and server-side routing, enabling seamless page navigation without full reloads.</p>
        
        <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Why Use React Router DOM?</h2>
        <p>React Router DOM allows React applications to navigate between pages without refreshing the browser. It simplifies page transitions and helps structure the app with well-defined routes. Here are some advantages of using React Router DOM:</p>
        <ul className="list-[square] space-y-1 mt-5">
            <li><span className="font-semibold">Dynamic Routing</span>: Routes can include parameters, allowing content to change based on user input.</li>
            <li><span className="font-semibold">Nested Routes</span>: Routes can be nested inside other routes, making complex layouts easier to manage.</li>
            <li><span className="font-semibold">URL-Based Component Rendering</span>: Each URL corresponds to a component, which is loaded automatically when the URL is accessed.</li>
            <li><span className="font-semibold">Navigation Without Page Reloads</span>: React Router DOM lets users move between pages without refreshing the browser.</li>
        </ul>

        <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Components of React Router DOM</h2>
        <p>These components enable route definition, navigation handling, and dynamic content management in React applications.</p>
       
       <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">BrowserRouter ({'<BrowserRouter>'})</h2>
        <p>BrowserRouter enables routing in a React application by wrapping the entire app and rendering the appropriate components based on URL changes.</p>
      <pre className="bg-gray-200 text-sm p-4 rounded-lg overflow-x-auto mt-5">
  <code>
    <span className="text-purple-600">import</span>{" "}
    <span className="text-gray-800">{`{ BrowserRouter }`}</span>{" "}
    <span className="text-purple-600">from</span>{" "}
    <span className="text-green-600">"react-router-dom"</span>
    <span className="text-pink-500">;</span>

    {"\n\n"}

    <span className="text-blue-600">&lt;BrowserRouter&gt;</span>
    {"\n  "}
    <span className="text-blue-600">&lt;App /&gt;</span>
    {"\n"}
    <span className="text-blue-600">&lt;/BrowserRouter&gt;</span>
    <span className="text-pink-500">;</span>
  </code>
</pre>

        <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Routes ({'<Routes>'})</h2>
        <p>Routes serves as a container for all {'<Route>'} components and ensures that only one matching route is rendered at a time.</p>
      <pre className="bg-gray-200 text-sm p-4 rounded-lg overflow-x-auto mt-5">
  <code>
    <span className="text-blue-600">&lt;Routes&gt;</span>
    {"\n"}
    {"  "}
    <span className="text-blue-600">&lt;Route</span>{" "}
    <span className="text-green-600">path</span>
    <span className="text-pink-500">="/"</span>{" "}
    <span className="text-green-600">element</span>
    <span className="text-pink-500">=</span>
    <span className="text-gray-800">{`{<Home />}`}</span>
    <span className="text-blue-600"> /&gt;</span>
    {"\n"}
    {"  "}
    <span className="text-blue-600">&lt;Route</span>{" "}
    <span className="text-green-600">path</span>
    <span className="text-pink-500">="/about"</span>{" "}
    <span className="text-green-600">element</span>
    <span className="text-pink-500">=</span>
    <span className="text-gray-800">{`{<About />}`}</span>
    <span className="text-blue-600"> /&gt;</span>
    {"\n"}
    <span className="text-blue-600">&lt;/Routes&gt;</span>
    <span className="text-pink-500">;</span>
  </code>
</pre>

        <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Route ({'<Route>'})</h2>
        <p>Route specifies a path and links it to a React component. When the URL matches this path, the component is rendered.</p>
     <pre className="bg-gray-200 text-sm p-4 rounded-lg overflow-x-auto mt-5">
  <code>
    <span className="text-blue-600">&lt;Route</span>{" "}
    <span className="text-green-600">path</span>
    <span className="text-pink-500">="/contact"</span>{" "}
    <span className="text-green-600">element</span>
    <span className="text-pink-500">=</span>
    <span className="text-gray-800">{`{<Contact />}`}</span>
    <span className="text-blue-600"> /&gt;</span>
  </code>
</pre>


        <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Link ({'<Link>'})</h2>
        <p>It is used to navigate between pages without reloading the browser. Unlike {'<a>'}, it prevents full-page reloads and improves performance.</p>
     <pre className="bg-gray-200 text-sm p-4 rounded-lg overflow-x-auto mt-5">
  <code>
    <span className="text-blue-600">&lt;Link</span>{" "}
    <span className="text-green-600">to</span>
    <span className="text-pink-500">="/about"</span>
    <span className="text-blue-600">&gt;</span>
    About Us
    {" "}
    <span className="text-blue-600">&lt;/Link&gt;</span>
  </code>
</pre>

        <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">NavLink ({'<NavLink>'})</h2>
        <p>It works similarly to {'<Link>'} but adds active styling when the current route is active, making it useful for highlighting the selected page in navigation menus.</p>
       <pre className="bg-gray-200 text-sm p-4 rounded-lg overflow-x-auto mt-5">
  <code>
    <span className="text-blue-600">&lt;NavLink</span>{" "}
    <span className="text-green-600">to</span>
    <span className="text-pink-500">="/home"</span>{" "}
    <span className="text-green-600">className</span>
    <span className="text-pink-500">="nav-link"</span>
    <span className="text-blue-600">&gt;</span>
    Home
    {" "}
    <span className="text-blue-600">&lt;/NavLink&gt;</span>
  </code>
</pre>

       <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">useParams (useParams())</h2>
       <p>useParams retrieves dynamic parameters from the URL, making it easier to fetch user-specific or product-specific data based on the route.</p>
     <pre className="bg-gray-200 text-sm p-4 rounded-lg overflow-x-auto mt-5">
  <code>
    <span className="text-purple-600">import</span>{" "}
    <span className="text-gray-800">{`{ useParams }`}</span>{" "}
    <span className="text-purple-600">from</span>{" "}
    <span className="text-green-600">"react-router-dom"</span>
    <span className="text-pink-500">;</span>

    {"\n"}
    <span className="text-purple-600">function</span>{" "}
    <span className="text-blue-600">UserProfile</span>
    <span className="text-gray-800">()</span>{" "}
    <span className="text-gray-800">{`{`}</span>

    {"\n  "}
    <span className="text-purple-600">let</span>{" "}
    <span className="text-gray-800">{`{ id }`}</span>{" "}
    <span className="text-pink-500">=</span>{" "}
    <span className="text-blue-600">useParams</span>
    <span className="text-gray-800">()</span>
    <span className="text-pink-500">;</span>

    {"\n  "}
    <span className="text-purple-600">return</span>{" "}
    <span className="text-gray-800">{`<h1>User ID: {id}</h1>`}</span>
    <span className="text-pink-500">;</span>

    {"\n"}
    <span className="text-gray-800">{`}`}</span>
  </code>
</pre>

      <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">useNavigate (useNavigate())</h2>
      <p>useNavigate enables programmatic navigation between routes and is commonly used to redirect users after actions like form submissions.</p>
    <pre className="bg-gray-200 text-sm p-4 rounded-lg overflow-x-auto mt-5">
  <code>
    <span className="text-purple-600">import</span>{" "}
    <span className="text-gray-800">{`{ useNavigate }`}</span>{" "}
    <span className="text-purple-600">from</span>{" "}
    <span className="text-green-600">"react-router-dom"</span>
    <span className="text-pink-500">;</span>

    {"\n"}
    <span className="text-purple-600">function</span>{" "}
    <span className="text-blue-600">Home</span>
    <span className="text-gray-800">()</span>{" "}
    <span className="text-gray-800">{`{`}</span>

    {"\n  "}
    <span className="text-purple-600">const</span>{" "}
    <span className="text-blue-600">navigate</span>{" "}
    <span className="text-pink-500">=</span>{" "}
    <span className="text-blue-600">useNavigate</span>
    <span className="text-gray-800">()</span>
    <span className="text-pink-500">;</span>

    {"\n  "}
    <span className="text-purple-600">return</span>{" "}
    <span className="text-gray-800">{`<button onClick={() => navigate("/about")}>Go to About</button>`}</span>
    <span className="text-pink-500">;</span>

    {"\n"}
    <span className="text-gray-800">{`}`}</span>
  </code>
</pre>

       <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">How React Router DOM Works</h2>
       <p className="mb-3">React Router DOM enables seamless navigation across a React application by defining multiple routes and facilitating page transitions without triggering a full page reload. The following outlines the overall structure for implementing this:</p>
       <p>The application is enclosed within {'<BrowserRouter>'}, which provides the foundation for routing throughout the React app.</p>
     <pre className="bg-gray-200 text-sm p-4 rounded-lg overflow-x-auto mt-5">
  <code>
    <span className="text-purple-600">import</span>{" "}
    <span className="text-gray-800">{`{ BrowserRouter }`}</span>{" "}
    <span className="text-purple-600">from</span>{" "}
    <span className="text-green-600">"react-router-dom"</span>
    <span className="text-pink-500">;</span>

    {"\n\n"}

    <span className="text-purple-600">function</span>{" "}
    <span className="text-blue-600">App</span>
    <span className="text-gray-800">()</span>{" "}
    <span className="text-gray-800">{`{`}</span>

    {"\n  "}
    <span className="text-purple-600">return</span>{" "}
    <span className="text-gray-800">(</span>
    {"\n    "}
    <span className="text-blue-600">&lt;BrowserRouter&gt;</span>
    {"\n      "}
    <span className="text-blue-600">&lt;Routes&gt;</span>
    <span className="text-gray-500">{`{/* Define your routes here */}`}</span>
    <span className="text-blue-600">&lt;/Routes&gt;</span>
    {"\n    "}
    <span className="text-blue-600">&lt;/BrowserRouter&gt;</span>
    {"\n  "}
    <span className="text-gray-800">)</span>
    <span className="text-pink-500">;</span>

    {"\n"}
    <span className="text-gray-800">{`}`}</span>
  </code>
</pre>

       <p className="mt-10"><span className="font-semibold">Defining Routes</span>:Each page or component is mapped to a specific path using {'<Routes>'} and {'<Route>'}, ensuring the appropriate content renders upon visiting the corresponding URL.</p>
      <pre className="bg-gray-200 text-sm p-4 rounded-lg overflow-x-auto mt-5">
  <code>
    <span className="text-blue-600">&lt;Routes&gt;</span>
    {"\n"}
    {"  "}
    <span className="text-blue-600">&lt;Route</span>{" "}
    <span className="text-green-600">path</span>
    <span className="text-pink-500">="/"</span>{" "}
    <span className="text-green-600">element</span>
    <span className="text-pink-500">=</span>
    <span className="text-gray-800">{`{<Home />}`}</span>
    <span className="text-blue-600"> /&gt;</span>

    {"\n"}
    {"  "}
    <span className="text-blue-600">&lt;Route</span>{" "}
    <span className="text-green-600">path</span>
    <span className="text-pink-500">="/about"</span>{" "}
    <span className="text-green-600">element</span>
    <span className="text-pink-500">=</span>
    <span className="text-gray-800">{`{<About />}`}</span>
    <span className="text-blue-600"> /&gt;</span>

    {"\n"}
    <span className="text-blue-600">&lt;/Routes&gt;</span>
    <span className="text-pink-500">;</span>
  </code>
</pre>

       <p className="mt-10"><span className="font-semibold">Navigating Between Pages:</span>React replaces the standard {'<a>'} element with {'<Link>'} or {'<NavLink>'} to enable navigation that doesn’t trigger a full page reload.</p>
      <pre className="bg-gray-200 text-sm p-4 rounded-lg overflow-x-auto mt-5">
  <code>
    <span className="text-purple-600">import</span>{" "}
    <span className="text-gray-800">{`{ Link }`}</span>{" "}
    <span className="text-purple-600">from</span>{" "}
    <span className="text-green-600">"react-router-dom"</span>
    <span className="text-pink-500">;</span>

    {"\n\n"}

    <span className="text-purple-600">function</span>{" "}
    <span className="text-blue-600">Navbar</span>
    <span className="text-gray-800">()</span>{" "}
    <span className="text-gray-800">{`{`}</span>

    {"\n  "}
    <span className="text-purple-600">return</span>{" "}
    <span className="text-gray-800">(</span>
    {"\n    "}
    <span className="text-blue-600">&lt;nav&gt;</span>
    {"\n      "}
    <span className="text-blue-600">&lt;Link</span>{" "}
    <span className="text-green-600">to</span>
    <span className="text-pink-500">="/"</span>
    <span className="text-blue-600">&gt;</span>
    Home
    <span className="text-blue-600">&lt;/Link&gt;</span>

    {"\n      "}
    <span className="text-blue-600">&lt;Link</span>{" "}
    <span className="text-green-600">to</span>
    <span className="text-pink-500">="/about"</span>
    <span className="text-blue-600">&gt;</span>
    About
    <span className="text-blue-600">&lt;/Link&gt;</span>

    {"\n    "}
    <span className="text-blue-600">&lt;/nav&gt;</span>
    {"\n  "}
    <span className="text-gray-800">)</span>
    <span className="text-pink-500">;</span>

    {"\n"}
    <span className="text-gray-800">{`}`}</span>
  </code>
</pre>

       <p className="mt-10"><span className="font-semibold">Rendering Components Dynamically:</span>When a user navigates to a URL, React Router looks for the correct route and shows the page or component tied to it.</p>
       <pre className="bg-gray-200 text-sm p-4 rounded-lg overflow-x-auto mt-5">
  <code>
    <span className="text-purple-600">function</span>{" "}
    <span className="text-blue-600">Home</span>
    <span className="text-gray-800">()</span>{" "}
    <span className="text-gray-800">{`{`}</span>

    {"\n  "}
    <span className="text-purple-600">return</span>{" "}
    <span className="text-gray-800">{`<h1>Welcome to Home Page</h1>`}</span>
    <span className="text-pink-500">;</span>

    {"\n"}
    <span className="text-gray-800">{`}`}</span>

    {"\n\n"}

    <span className="text-purple-600">function</span>{" "}
    <span className="text-blue-600">About</span>
    <span className="text-gray-800">()</span>{" "}
    <span className="text-gray-800">{`{`}</span>

    {"\n  "}
    <span className="text-purple-600">return</span>{" "}
    <span className="text-gray-800">{`<h1>About Us</h1>`}</span>
    <span className="text-pink-500">;</span>

    {"\n"}
    <span className="text-gray-800">{`}`}</span>
  </code>
</pre>

       <p className="mt-10"><span className="font-semibold">Using Nested Routes:</span>Nested routes allow structuring routes within routes, simplifying layout management for complex applications.</p>
      <pre className="bg-gray-200 text-sm p-4 rounded-lg overflow-x-auto mt-5">
  <code>
    <span className="text-blue-600">&lt;Routes&gt;</span>
    {"\n"}
    {"  "}
    <span className="text-blue-600">&lt;Route</span>{" "}
    <span className="text-green-600">path</span>
    <span className="text-pink-500">="/dashboard"</span>{" "}
    <span className="text-green-600">element</span>
    <span className="text-pink-500">=</span>
    <span className="text-gray-800">{`{<Dashboard />}`}</span>
    <span className="text-blue-600">&gt;</span>

    {"\n"}
    {"    "}
    <span className="text-blue-600">&lt;Route</span>{" "}
    <span className="text-green-600">path</span>
    <span className="text-pink-500">="settings"</span>{" "}
    <span className="text-green-600">element</span>
    <span className="text-pink-500">=</span>
    <span className="text-gray-800">{`{<Settings />}`}</span>
    <span className="text-blue-600"> /&gt;</span>

    {"\n"}
    {"    "}
    <span className="text-blue-600">&lt;Route</span>{" "}
    <span className="text-green-600">path</span>
    <span className="text-pink-500">="profile"</span>{" "}
    <span className="text-green-600">element</span>
    <span className="text-pink-500">=</span>
    <span className="text-gray-800">{`{<Profile />}`}</span>
    <span className="text-blue-600"> /&gt;</span>

    {"\n"}
    {"  "}
    <span className="text-blue-600">&lt;/Route&gt;</span>

    {"\n"}
    <span className="text-blue-600">&lt;/Routes&gt;</span>
    <span className="text-pink-500">;</span>
  </code>
</pre>

       <p className="mt-10"><span className="font-semibold">Handling Dynamic Routes:</span>Certain routes accept parameters, enabling dynamic content based on user input. The useParams hook is used to access these parameter values.</p>
   <pre className="bg-gray-200 text-sm p-4 rounded-lg overflow-x-auto mt-5">
  <code>
    <span className="text-blue-600">&lt;Route</span>{" "}
    <span className="text-green-600">path</span>
    <span className="text-pink-500">="/user/:id"</span>{" "}
    <span className="text-green-600">element</span>
    <span className="text-pink-500">=</span>
    <span className="text-gray-800">{`{<UserProfile />}`}</span>
    <span className="text-blue-600"> /&gt;</span>
  </code>
</pre>
       <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Implement React-router-dom</h2>
      <p>Here’s how to use React Router DOM to add navigation in a React app.</p>
      
      <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">1. Install React Router DOM</h2>
      <p>
  Before implementing React Router DOM, install it in your React project with the following command:
</p>

<pre className="bg-gray-200 text-sm p-4 rounded-lg overflow-x-auto mt-5">
  <code>
    <span className="text-purple-600">npm</span>{" "}
    <span className="text-blue-600">install</span>{" "}
    <span className="text-green-600">react-router-dom</span>
  </code>
</pre>

     <p className="mt-10">Updated dependencies:</p>
    <pre className="bg-gray-200 text-sm p-4 rounded-lg overflow-x-auto mt-5">
  <code>
    <span className="text-gray-500">"dependencies"</span>
    <span className="text-pink-500">:</span>{" "}
    <span className="text-gray-800">{`{`}</span>
    {"\n"}
    {"  "}
    <span className="text-green-600">"react"</span>
    <span className="text-pink-500">:</span>{" "}
    <span className="text-orange-500">"^18.2.0"</span>
    <span className="text-pink-500">,</span>
    {"\n"}
    {"  "}
    <span className="text-green-600">"react-dom"</span>
    <span className="text-pink-500">:</span>{" "}
    <span className="text-orange-500">"^18.2.0"</span>
    <span className="text-pink-500">,</span>
    {"\n"}
    {"  "}
    <span className="text-green-600">"react-router-dom"</span>
    <span className="text-pink-500">:</span>{" "}
    <span className="text-orange-500">"^6.22.3"</span>
    <span className="text-pink-500">,</span>
    {"\n"}
    {"  "}
    <span className="text-green-600">"react-scripts"</span>
    <span className="text-pink-500">:</span>{" "}
    <span className="text-orange-500">"5.0.1"</span>
    {"\n"}
    <span className="text-gray-800">{`}`}</span>
  </code>
</pre>

     <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">2. Import Required Components</h2>
    <p>Import the required components into App.js</p>
   <pre className="bg-gray-200 text-sm p-4 rounded-lg overflow-x-auto mt-5">
  <code>
    <span className="text-purple-600">import</span>{" "}
    <span className="text-blue-600">React</span>{" "}
    <span className="text-purple-600">from</span>{" "}
    <span className="text-green-600">"react"</span>
    <span className="text-pink-500">;</span>

    {"\n"}
    <span className="text-purple-600">import</span>{" "}
    <span className="text-gray-800">{`{ BrowserRouter as Router, Routes, Route, Link }`}</span>{" "}
    <span className="text-purple-600">from</span>{" "}
    <span className="text-green-600">"react-router-dom"</span>
    <span className="text-pink-500">;</span>

    {"\n"}
    <span className="text-purple-600">import</span>{" "}
    <span className="text-green-600">"./App.css"</span>
    <span className="text-pink-500">;</span>
  </code>
</pre>

    <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">3. Create Components for Different Pages</h2>
    <p>Define components to represent the different pages so users can navigate through them.</p>
    <pre className="bg-gray-200 text-sm p-4 rounded-lg overflow-x-auto mt-5">
  <code>
    <span className="text-purple-600">const</span>{" "}
    <span className="text-blue-600">Home</span>{" "}
    <span className="text-pink-500">=</span>{" "}
    <span className="text-gray-800">()</span>{" "}
    <span className="text-pink-500">=&gt;</span>{" "}
    <span className="text-gray-800">{`<h1>GeeksforGeeks</h1>`}</span>
    <span className="text-pink-500">;</span>

    {"\n"}
    <span className="text-purple-600">const</span>{" "}
    <span className="text-blue-600">About</span>{" "}
    <span className="text-pink-500">=</span>{" "}
    <span className="text-gray-800">()</span>{" "}
    <span className="text-pink-500">=&gt;</span>{" "}
    <span className="text-gray-800">{`<h1>Geeks Learning</h1>`}</span>
    <span className="text-pink-500">;</span>

    {"\n"}
    <span className="text-purple-600">const</span>{" "}
    <span className="text-blue-600">Contact</span>{" "}
    <span className="text-pink-500">=</span>{" "}
    <span className="text-gray-800">()</span>{" "}
    <span className="text-pink-500">=&gt;</span>{" "}
    <span className="text-gray-800">{`<h1>Geeks Contact page</h1>`}</span>
    <span className="text-pink-500">;</span>
  </code>
</pre>
    <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">4. Set Up Router and Define Routes</h2>
    <p>Think of {'<Router>'} as the engine and {'<Routes>'} as the roadmap: wrap your app in {'<Router>'} and define paths with {'<Routes>'}.</p>
  <pre className="bg-gray-200 text-sm p-4 rounded-lg overflow-x-auto mt-5">
  <code>
    <span className="text-purple-600">function</span>{" "}
    <span className="text-blue-600">App</span>
    <span className="text-gray-800">()</span>{" "}
    <span className="text-gray-800">{`{`}</span>

    {"\n  "}
    <span className="text-purple-600">return</span>{" "}
    <span className="text-gray-800">(</span>

    {"\n    "}
    <span className="text-blue-600">&lt;Router&gt;</span>

    {"\n      "}
    <span className="text-blue-600">&lt;nav</span>{" "}
    <span className="text-green-600">className</span>
    <span className="text-pink-500">="navbar"</span>
    <span className="text-blue-600">&gt;</span>

    {"\n        "}
    <span className="text-blue-600">&lt;ul</span>{" "}
    <span className="text-green-600">className</span>
    <span className="text-pink-500">="nav-list"</span>
    <span className="text-blue-600">&gt;</span>

    {"\n          "}
    <span className="text-blue-600">&lt;li</span>{" "}
    <span className="text-green-600">className</span>
    <span className="text-pink-500">="nav-item"</span>
    <span className="text-blue-600">&gt;</span>
    <span className="text-blue-600">&lt;Link</span>{" "}
    <span className="text-green-600">to</span>
    <span className="text-pink-500">="/"</span>
    <span className="text-blue-600">&gt;</span>
    Home
    <span className="text-blue-600">&lt;/Link&gt;</span>
    <span className="text-blue-600">&lt;/li&gt;</span>

    {"\n          "}
    <span className="text-blue-600">&lt;li</span>{" "}
    <span className="text-green-600">className</span>
    <span className="text-pink-500">="nav-item"</span>
    <span className="text-blue-600">&gt;</span>
    <span className="text-blue-600">&lt;Link</span>{" "}
    <span className="text-green-600">to</span>
    <span className="text-pink-500">="/about"</span>
    <span className="text-blue-600">&gt;</span>
    About
    <span className="text-blue-600">&lt;/Link&gt;</span>
    <span className="text-blue-600">&lt;/li&gt;</span>

    {"\n          "}
    <span className="text-blue-600">&lt;li</span>{" "}
    <span className="text-green-600">className</span>
    <span className="text-pink-500">="nav-item"</span>
    <span className="text-blue-600">&gt;</span>
    <span className="text-blue-600">&lt;Link</span>{" "}
    <span className="text-green-600">to</span>
    <span className="text-pink-500">="/contact"</span>
    <span className="text-blue-600">&gt;</span>
    Contact
    <span className="text-blue-600">&lt;/Link&gt;</span>
    <span className="text-blue-600">&lt;/li&gt;</span>

    {"\n        "}
    <span className="text-blue-600">&lt;/ul&gt;</span>

    {"\n      "}
    <span className="text-blue-600">&lt;/nav&gt;</span>

    {"\n\n"}
    {"      "}
    <span className="text-blue-600">&lt;div</span>{" "}
    <span className="text-green-600">className</span>
    <span className="text-pink-500">="content"</span>
    <span className="text-blue-600">&gt;</span>

    {"\n        "}
    <span className="text-blue-600">&lt;Routes&gt;</span>

    {"\n          "}
    <span className="text-blue-600">&lt;Route</span>{" "}
    <span className="text-green-600">path</span>
    <span className="text-pink-500">="/"</span>{" "}
    <span className="text-green-600">element</span>
    <span className="text-pink-500">=</span>
    <span className="text-gray-800">{`{<Home />}`}</span>
    <span className="text-blue-600"> /&gt;</span>

    {"\n          "}
    <span className="text-blue-600">&lt;Route</span>{" "}
    <span className="text-green-600">path</span>
    <span className="text-pink-500">="/about"</span>{" "}
    <span className="text-green-600">element</span>
    <span className="text-pink-500">=</span>
    <span className="text-gray-800">{`{<About />}`}</span>
    <span className="text-blue-600"> /&gt;</span>

    {"\n          "}
    <span className="text-blue-600">&lt;Route</span>{" "}
    <span className="text-green-600">path</span>
    <span className="text-pink-500">="/contact"</span>{" "}
    <span className="text-green-600">element</span>
    <span className="text-pink-500">=</span>
    <span className="text-gray-800">{`{<Contact />}`}</span>
    <span className="text-blue-600"> /&gt;</span>

    {"\n        "}
    <span className="text-blue-600">&lt;/Routes&gt;</span>

    {"\n      "}
    <span className="text-blue-600">&lt;/div&gt;</span>

    {"\n    "}
    <span className="text-blue-600">&lt;/Router&gt;</span>

    {"\n  "}
    <span className="text-gray-800">)</span>
    <span className="text-pink-500">;</span>

    {"\n"}
    <span className="text-purple-600">export default</span>{" "}
    <span className="text-blue-600">App</span>
    <span className="text-pink-500">;</span>
  </code>
</pre>

    <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">5. Navigation Using {'<Link>'}</h2>
    <p>Replace {'<a>'} tags with {'<Link>'} to enable client-side navigation without triggering a full page refresh.</p>
    <pre className="bg-gray-200 text-sm p-4 rounded-lg overflow-x-auto mt-5">
  <code>
    <span className="text-blue-600">&lt;Link</span>{" "}
    <span className="text-green-600">to</span>
    <span className="text-pink-500">="/"</span>
    <span className="text-blue-600">&gt;</span>
    Home
    <span className="text-blue-600">&lt;/Link&gt;</span>

    {"\n"}
    <span className="text-blue-600">&lt;Link</span>{" "}
    <span className="text-green-600">to</span>
    <span className="text-pink-500">="/about"</span>
    <span className="text-blue-600">&gt;</span>
    About
    <span className="text-blue-600">&lt;/Link&gt;</span>

    {"\n"}
    <span className="text-blue-600">&lt;Link</span>{" "}
    <span className="text-green-600">to</span>
    <span className="text-pink-500">="/contact"</span>
    <span className="text-blue-600">&gt;</span>
    Contact
    <span className="text-blue-600">&lt;/Link&gt;</span>
  </code>
</pre>

    <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">In this code</h2>
    <ul className="list-[square] space-y-1">
        <li>Home.js: A simple component that shows a heading “GeeksforGeeks” and appears at /.</li>
        <li>About.js: Displays “Geeks Learning” and is shown when visiting /about.</li>
        <li>Contact.js: Shows “Geeks Contact Page” at /contact.</li>
        <li>App.js: The main file where routing is configured using {'<BrowserRouter>'}. It sets up routes with {'<Routes>'} and {'<Route>'} and includes navigation links using {'<Link>'}.</li>
    </ul>

    <p className="mt-5">React Router DOM provides seamless page transitions in React applications without triggering full reloads. It supports dynamic and nested routing, allowing developers to structure applications efficiently. Its navigation components facilitate smooth management of multiple views.</p>

        </div>
    )
}

export default ReactRouterdom;