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
       <pre className="text-green-400 bg-gray-900 p-4 rounded-lg mt-5">
        <code>
            {`<BrowserRouter>
    (/* Your routes go here */}
</BrowserRouter>`}
        </code>
       </pre>

       <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">2. Routes and Route</h2>
       <p>Routes act as a container for all route definitions, while Route specifies an individual path and the component that should be rendered.</p>
       <pre className="text-green-400 bg-gray-900 p-4 rounded-lg mt-5">
        <code>
            {`<Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
</Routes>`}
        </code>
       </pre>


       <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">3. Link and NavLink</h2>
       <p>Link enables navigation within the app, whereas NavLink extends it by applying styles when the route is active.</p>
       <pre className="text-green-400 bg-gray-900 p-4 rounded-lg mt-5">
        <code>
            {`<nav>
    <NavLink to="/" activeClassName="active">Home</NavLink>
    <Link to="/about">About</Link>
</nav>`}
        </code>
       </pre>

       <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Create Routes using React Router</h2>
       <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">1: Initialize React Project</h2>
       <p>To create a new React app, run the command below.</p>
       <pre className="text-green-400 bg-gray-900 p-4 rounded-lg mt-5">
        <code>
            {`npm create vite@latest react-router-example
cd react-router-example`}
        </code>
       </pre>

       <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">2: Install React Router</h2>
       <p>Install React Router by executing the following command in your application’s terminal.</p>
       <pre className="text-green-400 bg-gray-900 p-4 rounded-lg mt-5">
        <code>
            {`npm install react-router-dom@6`}
        </code>
       </pre>

       <p className="mt-5">Depenedencies list after installing react router</p>
       <pre className="text-green-400 bg-gray-900 p-4 rounded-lg mt-5">
        <code>
            {`"dependencies": {
    "@testing-library/jest-dom": "^5.17.0",
    "@testing-library/react": "^13.4.0",
    "@testing-library/user-event": "^13.5.0",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-router-dom": "^6.24.1",
    "react-scripts": "5.0.1",
    "web-vitals": "^2.1.4"
}`}
        </code>
       </pre>

       <p className="mt-10">This demonstrates the implementation of fundamental routing in a React application.</p>
       <pre className="text-green-400 bg-gray-900 p-4 rounded-lg mt-5">
        <code>
            {`// src/index.js

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);`}
        </code>
       </pre>

       <h2 className="text-xl text-gray-800 font-semibold mt-5"> 3: Run the application using the following command.</h2>
       <pre className="text-green-400 bg-gray-900 p-4 rounded-lg mt-5">
        <code>
            {`npm run dev`}
        </code>
       </pre>

       <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Uses of React Router</h2>
       <ul className="list-[square] list-inside space-y-1 mt-5">
        <li><span className="font-semibold">Dynamic Routing</span>: Routes can change based on app state or data, allowing complex navigation flows.</li>
        <li><span className="font-semibold">URL Management</span>: It manages URLs, supports deep linking, bookmarks, and preserves browser history.</li>
        <li><span className="font-semibold">Component-Based Approach</span>: Routes are defined using components, making them modular and reusable.</li>
        <li><span className="font-semibold">Nested Routes</span>: You can create nested routes for better organization, which is especially helpful in large apps.</li>
        <li><span className="font-semibold">Navigation and Routing</span>: React Router lets you navigate between different pages or views in a React app without <span className="ml-5">refreshing</span> the page.</li>
       </ul>

       






      
        </div>
    )
}

export default ReactRouter;