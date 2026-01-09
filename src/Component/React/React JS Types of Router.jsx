import React from "react";

const ReactRouterTypes = () => {
    return(
        <div className="max-w-4xl p-6 mt-10">
            <h1 className="text-3xl text-blue-500 font-semibold mb-3">React JS Types of Router</h1>
            <p>When developing a React application, effective navigation between views is essential. React Router provides a standard approach to routing, enabling seamless transitions without disrupting the Single Page Application (SPA) architecture.</p>
           
           <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">What is React Router?</h2>
           <p>React Router is a declarative, component-driven routing library for React applications, allowing seamless page navigation without full reloads, thereby improving performance and responsiveness.</p>
           <ul className="list-[square] list-inside space-y-1 mt-5">
            <li>Handles routing on the client side in React apps.</li>
            <li>Lets you create nested routes to organize pages better.</li>
            <li>Supports dynamic routes with parameters.</li>
            <li>Allows navigation through code using hooks like <span className="text-red-400 bg-gray-50">useNavigate()</span>.</li>
           </ul>

           <p className="mt-5">Prior to exploring the various router types, ensure that React Router DOM is installed in your React application.</p>
         <pre className="text-green-400 bg-gray-900 p-4 rounded-lg mt-5">
            <code>
                {`npm install react-router-dom`}
            </code>
         </pre>

         <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Types of Routers in React</h2>
         <p>React includes multiple types of routers to handle different navigation scenarios. The main routers you should know are:</p>
        <ul className="list-[square] list-inside space-y-1 mt-5">
            <li>1. Browser Router ({'<BrowserRouter>'})</li>
            <li>2. Hash Router ({'<HashRouter>'})</li>
            <li>3. Memory Router ({'<MemoryRouter>'})</li>
            <li>4. Static Router ({'<StaticRouter>'})</li>
            <li>5. Native Router ({'<NativeRouter>'})</li>
        </ul>

        <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">1. Browser Router</h2>
        <p>BrowserRouter is the most commonly used router when building React applications for web deployment.</p>
       <ul className="list-[square] list-inside space-y-1 mt-5">
        <li>Implements navigation through the HTML5 history API.</li>
        <li>Supports human-friendly URLs free of hash fragments.</li>
        <li>Utilizes pushState, replaceState, and the popState event to synchronize the interface with the current URL.</li>
       </ul>

       <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">When to Use BrowserRouter</h2>
       <p>BrowserRouter is a robust and frequently employed router in React applications, suitable for web projects requiring clean, search-engine-friendly URLs and server-side routing capabilities.</p>
       <ul className="list-[square] list-inside space-y-1 mt-5">
        <li><span className="font-semibold">Hosting on a Web Server with Proper Routing:</span>BrowserRouter performs best when the application is deployed on a <span className="ml-5">web</span> server capable of handling dynamic, server-side routing.</li>
        <li><span className="font-semibold">Improved SEO:</span>Since BrowserRouter produces hash-free URLs, it improves search engine crawling and indexing of <span className="ml-5">your</span> pages.</li>
        <li><span className="font-semibold">Single Page Applications (SPA):</span> BrowserRouter is commonly used in SPAs, where the entire app runs on a single <span className="ml-5">page</span>.</li>
        <li><span className="font-semibold">Handling Multiple Views or Pages:</span> If your app includes multiple views or pages BrowserRouter helps manage these <span className="ml-5">views</span> by linking each one to a specific URL.</li>
       </ul>

       <pre className="text-green-400 bg-gray-900 p-4 rounded-lg mt-5">
        <code>
            {`import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";

const App = () => {
    return (
        <BrowserRouter>
            <div style={{ fontFamily: "Arial, sans-serif" }}>
                {/* Navigation Bar */}
                <nav
                    style={{
                        backgroundColor: "#333",
                        padding: "10px",
                        display: "flex",
                        justifyContent: "center",
                    }}
                >
                    <ul
                        style={{
                            listStyle: "none",
                            display: "flex",
                            gap: "20px",
                            padding: "0",
                            margin: "0",
                        }}
                    >
                        <li>
                            <Link to="/" style={linkStyle}>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/about" style={linkStyle}>
                                About Us
                            </Link>
                        </li>
                        <li>
                            <Link to="/contact" style={linkStyle}>
                                Contact Us
                            </Link>
                        </li>
                    </ul>
                </nav>

                {/* Page Content */}
                <div
                    style={{ display: "flex", justifyContent: "center", padding: "20px" }}
                >
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
};

// Style for navigation links
const linkStyle = {
    textDecoration: "none",
    color: "white",
    fontSize: "18px",
    fontWeight: "bold",
};

export default App;`}
        </code>
       </pre>

       <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">In this code</h2>
       <ul className="list-[square] list-inside space-y-1 mt-5">
        <li><span className="font-semibold">Home.js</span>: React component rendering the home page with a welcome message.</li>
        <li><span className="font-semibold">About.js</span>: Displays an "About Us" section with a link to GeeksforGeeks.</li>
        <li><span className="font-semibold">Contact.js</span>: Renders contact details including the GeeksforGeeks Noida address.</li>
        <li><span className="font-semibold">App.js</span>: Implements routing using BrowserRouter for SEO-friendly URLs (e.g., /about). Defines routes and a navigation <span className="ml-5">menu</span>.</li>
       </ul>

       <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">2. Memory Router</h2>
       <p>MemoryRouter is designed for non-browser environments, such as testing or mobile applications. It maintains navigation history internally without altering the URL, which is ideal for testing and scenarios without a traditional browser.</p>
       <ul className="list-[square] list-inside space-y-1 mt-5">
        <li><span className="font-semibold">No URL Change</span>: Unlike BrowserRouter or HashRouter, MemoryRouter maintains routing state internally without <span className="ml-5">altering</span> the browser’s URL.</li>
        <li><span className="font-semibold">In-memory History</span>: Navigation history is managed in memory rather than in the browser, making it suitable for <span className="ml-5">testing</span> and non-browser applications.</li>
       </ul>

       <h2 className="text-2xl text-gray-800 font-semibold mt-5">When to Use Memory Router</h2>
       <ul className="list-[square] list-inside space-y-1 mt-5">
        <li><span className="font-semibold">Server-Side Rendering (SSR)</span>: For rendering React components on the server where URLs aren’t used.</li>
        <li><span className="font-semibold">Testing</span>: Lets you test routing logic without changing the browser URL.</li>
        <li><span className="font-semibold">React Native</span>: Handles navigation in mobile apps that don’t use URLs.</li>
        <li><span className="font-semibold">Non-Browser Environments</span>: Useful in apps like Electron where no browser URL exists.</li>
       <li><span className="font-semibold">When URL Doesn’t Matter</span>: Manages routes internally when you don’t need URL updates.</li>
       </ul>

       <pre className="text-green-400 bg-gray-900 p-4 rounded-lg mt-5">
        <code>
            {`import React from "react";
import { MemoryRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";

const App = () => {
    return (
        <MemoryRouter>
            <div style={{ fontFamily: "Arial, sans-serif" }}>
                {/* Navigation Bar */}
                <nav
                    style={{
                        backgroundColor: "#333",
                        padding: "10px",
                        display: "flex",
                        justifyContent: "center",
                    }}
                >
                    <ul
                        style={{
                            listStyle: "none",
                            display: "flex",
                            gap: "20px",
                            padding: "0",
                            margin: "0",
                        }}
                    >
                        <li>
                            <Link to="/" style={linkStyle}>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/about" style={linkStyle}>
                                About Us
                            </Link>
                        </li>
                        <li>
                            <Link to="/contact" style={linkStyle}>
                                Contact Us
                            </Link>
                        </li>
                    </ul>
                </nav>

                {/* Page Content */}
                <div
                    style={{ display: "flex", justifyContent: "center", padding: "20px" }}
                >
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </div>
            </div>
        </MemoryRouter>
    );
};

// Style for navigation links
const linkStyle = {
    textDecoration: "none",
    color: "white",
    fontSize: "18px",
    fontWeight: "bold",
};

export default App;`}
        </code>
       </pre>

     <h2 className="text-2xl text-gray-800 font-semibold mt-5">In this code</h2>
     <ul className="list-[square] list-inside space-y-1 mt-5">
        <li><span className="font-semibold">About.js</span>: Presents an "About Us" section including a brief overview of GeeksforGeeks and a navigable link to its <span className="ml-5">website</span>.</li>
        <li><span className="font-semibold">Contact.js</span>: Renders a "Contact Us" section featuring the GeeksforGeeks Noida address with formatted, bold styling.</li>
        <li>When integrated with React Router, these components correspond to the /contact and /about routes.</li>
    </ul>  


    <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">3. Hash Router</h2>
    <p>HashRouter is a type of router in React that leverages the hash portion of the URL (following #) for routing purposes.</p>
    <ul className="list-[square] list-inside space-y-1 mt-5">
        <li>HashRouter uses the # in the URL to indicate routes (e.g., http://example.com/#/home).</li>
        <li>The hash segment is handled entirely on the client and is not transmitted to the server.</li>
        <li>Useful in scenarios where standard URLs and server-side routing are unavailable.</li>
    </ul>

    <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">When to Use Hash Router</h2>
    <p>HashRouter is a lightweight router in React that leverages URL hashes for navigation, particularly suited for environments lacking server-side routing.</p>
    
    <ul className="list-[square] list-inside space-y-1 mt-5">
        <li><span className="font-semibold">Hosting on Static Servers</span>: HashRouter is best suited for deployment on static file servers, such as GitHub Pages, <span className="ml-5">which</span> cannot support dynamic routing.</li>
        <li><span className="font-semibold">Absence of Server-Side Routing</span>: Useful when server-side routing is unavailable or cannot be configured, keeping all <span className="ml-5">routing</span> on the client-side.</li>
        <li><span className="font-semibold">Lightweight Projects</span>: For smaller applications or prototypes not requiring SEO-friendly or clean URLs, HashRouter <span className="ml-5">provides</span> a straightforward routing solution.</li>
    </ul>

    <pre className="text-green-400 bg-gray-900 p-4 rounded-lg mt-5">
        <code>
            {`import React from "react";
import { HashRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";

const App = () => {
    return (
        <HashRouter>
            <div style={{ fontFamily: "Arial, sans-serif" }}>
                {/* Navigation Bar */}
                <nav
                    style={{
                        backgroundColor: "#333",
                        padding: "10px",
                        display: "flex",
                        justifyContent: "center",
                    }}
                >
                    <ul
                        style={{
                            listStyle: "none",
                            display: "flex",
                            gap: "20px",
                            padding: "0",
                            margin: "0",
                        }}
                    >
                        <li>
                            <Link to="/" style={linkStyle}>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/about" style={linkStyle}>
                                About Us
                            </Link>
                        </li>
                        <li>
                            <Link to="/contact" style={linkStyle}>
                                Contact Us
                            </Link>
                        </li>
                    </ul>
                </nav>

                {/* Page Content */}
                <div
                    style={{ display: "flex", justifyContent: "center", padding: "20px" }}
                >
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </div>
            </div>
        </HashRouter>
    );
};

// Style for navigation links
const linkStyle = {
    textDecoration: "none",
    color: "white",
    fontSize: "18px",
    fontWeight: "bold",
};

export default App;`}
        </code>
    </pre>

    <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">In this code</h2>
    <ul className="list-[square] list-inside space-y-1 mt-5">
        <li><span className="font-semibold">Home.js</span>: Renders a basic home page containing a heading and welcome message.</li>
        <li><span className="font-semibold">About.js</span>: Presents an "About Us" section with a brief description of GeeksforGeeks and an interactive link.</li>
        <li><span className="font-semibold">Contact.js</span>: Renders a "Contact Us" section showing the GeeksforGeeks Noida address.</li>
        <li><span className="font-semibold">App.js</span>: Implements navigation using HashRouter. Defines routes and a navigation menu for Home, About, and <span className="ml-5">Contact</span> components.</li>
    </ul>

    <p className="mt-5">Routing is a core concept in React that enables the creation of interactive and dynamic applications. Understanding various routers, such as BrowserRouter and HashRouter, allows developers to select the most suitable solution for their project, ensuring efficient and error-free navigation.</p>

        
        
        </div>
    )
}

export default ReactRouterTypes;