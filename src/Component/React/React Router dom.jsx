import React from "react";

const ReactRouterdom = () => {
    return(
        <div className="max-w-4xl p-6 mt-10">
         <h1 className="lg:text-3xl text-2xl text-blue-500 font-semibold mb-3">What is react-router-dom?</h1>
        <p className="mb-3">React Router DOM is an npm package that provides dynamic routing for React applications. It supports client- and server-side routing, enabling seamless page navigation without full reloads.</p>
        <p>React Router DOM is an npm package that provides dynamic routing for React applications. It supports client- and server-side routing, enabling seamless page navigation without full reloads.</p>
        
        <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Why Use React Router DOM?</h2>
        <p>React Router DOM allows React applications to navigate between pages without refreshing the browser. It simplifies page transitions and helps structure the app with well-defined routes. Here are some advantages of using React Router DOM:</p>
        <ul className="list-[square] list-inside space-y-1 mt-5">
            <li><span className="font-semibold">Dynamic Routing</span>: Routes can include parameters, allowing content to change based on user input.</li>
            <li><span className="font-semibold">Nested Routes</span>: Routes can be nested inside other routes, making complex layouts easier to manage.</li>
            <li><span className="font-semibold">URL-Based Component Rendering</span>: Each URL corresponds to a component, which is loaded automatically when the <span className="ml-5">URL</span> is accessed.</li>
            <li><span className="font-semibold">Navigation Without Page Reloads</span>: React Router DOM lets users move between pages without refreshing the <span className="ml-5">browser</span>.</li>
        </ul>

        <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Components of React Router DOM</h2>
        <p>These components enable route definition, navigation handling, and dynamic content management in React applications.</p>
       
       <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">BrowserRouter ({'<BrowserRouter>'})</h2>
        <p>BrowserRouter enables routing in a React application by wrapping the entire app and rendering the appropriate components based on URL changes.</p>
        <pre className="text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5">
            <code>
                {`import { BrowserRouter } from "react-router-dom";
<BrowserRouter>
    <App />
</BrowserRouter>;`}
            </code>
        </pre>

        <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Routes ({'<Routes>'})</h2>
        <p>Routes serves as a container for all {'<Route>'} components and ensures that only one matching route is rendered at a time.</p>
        <pre className="text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5">
            <code>
                {`<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
</Routes>;`}
            </code>
        </pre>

        <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Route ({'<Route>'})</h2>
        <p>Route specifies a path and links it to a React component. When the URL matches this path, the component is rendered.</p>
       <pre className="text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5">
        <code>
            {`<Route path="/contact" element={<Contact />} />`}
        </code>
       </pre>



        <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Link ({'<Link>'})</h2>
        <p>It is used to navigate between pages without reloading the browser. Unlike {'<a>'}, it prevents full-page reloads and improves performance.</p>
        <pre className="text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5">
            <code>
                {`<Link to="/about">About Us</Link>`}
            </code>
        </pre>

        <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">NavLink ({'<NavLink>'})</h2>
        <p>It works similarly to {'<Link>'} but adds active styling when the current route is active, making it useful for highlighting the selected page in navigation menus.</p>
        <pre className="text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5">
            <code>
                {`<NavLink to="/home" className="nav-link">Home</NavLink>`}
            </code>
        </pre>
     

       <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">useParams (useParams())</h2>
       <p>useParams retrieves dynamic parameters from the URL, making it easier to fetch user-specific or product-specific data based on the route.</p>
      <pre className="text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5">
        <code>
            {`import { useParams } from "react-router-dom";
function UserProfile() {
    let { id } = useParams();
    return <h1>User ID: {id}</h1>;
}`}
        </code>
      </pre>

      <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">useNavigate (useNavigate())</h2>
      <p>useNavigate enables programmatic navigation between routes and is commonly used to redirect users after actions like form submissions.</p>
       <pre className="text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5">
        <code>
            {`import { useNavigate } from "react-router-dom";
function Home() {
    const navigate = useNavigate();
    return <button onClick={() => navigate("/about")}>Go to About</button>;
}`}
        </code>
       </pre>

       <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">How React Router DOM Works</h2>
       <p className="mb-3">React Router DOM enables seamless navigation across a React application by defining multiple routes and facilitating page transitions without triggering a full page reload. The following outlines the overall structure for implementing this:</p>
       <p>The application is enclosed within {'<BrowserRouter>'}, which provides the foundation for routing throughout the React app.</p>
       <pre className="text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5">
        <code>
            {`import { BrowserRouter } from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <Routes>{/* Define your routes here */}</Routes>
        </BrowserRouter>
    );
}`}
        </code>
       </pre>

       <p className="mt-10"><span className="font-semibold">Defining Routes</span>:Each page or component is mapped to a specific path using {'<Routes>'} and {'<Route>'}, ensuring the appropriate content renders upon visiting the corresponding URL.</p>
       <pre className="text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5">
        <code>
            {`<Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
</Routes>;`}
        </code>
       </pre>

       <p className="mt-10"><span className="font-semibold">Navigating Between Pages:</span>React replaces the standard {'<a>'} element with {'<Link>'} or {'<NavLink>'} to enable navigation that doesn’t trigger a full page reload.</p>
       <pre className="text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5">
        <code>
            {`import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
        </nav>
    );
}`}
        </code>
       </pre>

       <p className="mt-10"><span className="font-semibold">Rendering Components Dynamically:</span>When a user navigates to a URL, React Router looks for the correct route and shows the page or component tied to it.</p>
       <pre className="text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5">
        <code>
            {`function Home() {
    return <h1>Welcome to Home Page</h1>;
}

function About() {
    return <h1>About Us</h1>;
}`}
        </code>
       </pre>

       <p className="mt-10"><span className="font-semibold">Using Nested Routes:</span>Nested routes allow structuring routes within routes, simplifying layout management for complex applications.</p>
       <pre className="text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5">
        <code>
            {`<Routes>
    <Route path="/dashboard" element={<Dashboard />}>
        <Route path="settings" element={<Settings />} />
        <Route path="profile" element={<Profile />} />
    </Route>
</Routes>;`}
        </code>
       </pre>

       <p className="mt-10"><span className="font-semibold">Handling Dynamic Routes:</span>Certain routes accept parameters, enabling dynamic content based on user input. The useParams hook is used to access these parameter values.</p>
       <pre className="text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5">
        <code>
            {`<Route path="/user/:id" element={<UserProfile />} />`}
        </code>
       </pre>

       <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Implement React-router-dom</h2>
      <p>Here’s how to use React Router DOM to add navigation in a React app.</p>
      
      <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">1. Install React Router DOM</h2>
      <p>Before implementing React Router DOM, install it in your React project with the following command:</p>
     <pre className="text-green-400 bg-gray-900 p-4 rounded-lg mt-5">
        <code>
            {`npm install react-router-dom`}
        </code>
     </pre>

     <p className="mt-10">Updated dependencies:</p>
     <pre className="text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5">
        <code>
            {`"dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.22.3",
    "react-scripts": "5.0.1"
}`}
        </code>
     </pre>

     <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">2. Import Required Components</h2>
    <p>Import the required components into App.js</p>
    <pre className="text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5">
        <code>
            {`import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";`}
        </code>
    </pre>

    <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">3. Create Components for Different Pages</h2>
    <p>Define components to represent the different pages so users can navigate through them.</p>
    <pre className="text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5">
        <code>
            {`const Home = () => <h1>GeeksforGeeks</h1>;
const About = () => <h1>Geeks Learning</h1>;
const Contact = () => <h1>Geeks Contact page</h1>;`}
        </code>
    </pre>

    <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">4. Set Up Router and Define Routes</h2>
    <p>Think of {'<Router>'} as the engine and {'<Routes>'} as the roadmap: wrap your app in {'<Router>'} and define paths with {'<Routes>'}.</p>
    <pre className="text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5">
        <code>
            {`function App() {
    return (
        <Router>
            <nav className="navbar">
                <ul className="nav-list">
                    <li className="nav-item">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/about">About</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>

            <div className="content">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;`}
        </code>
    </pre>

    <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">5. Navigation Using {'<Link>'}</h2>
    <p>Replace {'<a>'} tags with {'<Link>'} to enable client-side navigation without triggering a full page refresh.</p>
    <pre className="text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5">
        <code>
            {`<Link to="/">Home</Link>
<Link to="/about">About</Link>
<Link to="/contact">Contact</Link>`}
        </code>
    </pre>

    <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">In this code</h2>
    <ul className="list-[square] list-inside space-y-1">
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