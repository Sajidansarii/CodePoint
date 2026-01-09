import React from "react";

const NavlinkRouter = () => {

    const data = [
        {Feature:'Purpose', Link:'Used for navigation between pages', NavLink:'Used for navigation with an active state styling'},
        {Feature:'Active Styling', Link:'No built-in active class', NavLink:'Adds a special class to the active link'},
        {Feature:'Used For', Link:'Normal links in the app', NavLink:'Navigation menus, tabs, or sidebars'},
        {Feature:'Example', Link:'<Link to="/home">Home</Link>', NavLink:'<NavLink to="/home" className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink>'},
    ];


    return(
        <div className="max-w-4xl p-6 mt-10">
        <h1 className="text-3xl text-blue-500 font-semibold mb-3">Link And Navlink Component</h1>
        <p>When developing a React application, managing navigation efficiently is crucial. React Router offers Link and NavLink components that facilitate page transitions. Unlike standard {'<a>'} tags, these components prevent full-page reloads, resulting in faster and smoother user experiences.</p>
        
        <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">What is a Link Component?</h2>
        <p>Within React applications, the Link component enables page navigation without triggering a full-page reload. Serving as a replacement for the standard {'<a>'} element, it enhances performance and provides a straightforward navigation mechanism.</p>
        <h2 className="text-2xl text-gray-800 font-semibold mt-5">Syntax</h2>
        <pre className="text-green-400 bg-gray-900 p-4 rounded-lg mt-5">
            <code>
                {`<Link to="/path">Text</Link>`}
            </code>
        </pre>

        <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Features of Link</h2>
         <ul className="list-[square] list-inside space-y-1 mt-5">
            <li><span className="font-semibold">No Page Reload</span>: Link lets you move between pages without refreshing the whole page.</li>
            <li><span className="font-semibold">Destination URL</span>: Use the to prop to set where the link goes.</li>
            <li><span className="font-semibold">Dynamic Navigation</span>: Supports passing dynamic values for routes.</li>
         </ul>

         <pre className="text-green-400 bg-gray-900 p-4 rounded-lg mt-5">
            <code>
                {`import React from "react";
import { Link, Route, Routes } from "react-router-dom";

function Home() {
    return <h1>Home Page</h1>;
}

function About() {
    return <h1>About Page</h1>;
}

function App() {
    return (
        <div>
            <nav>
                {/* Link works but does NOT add an active class */}
                <Link to="/">Home</Link> | <Link to="/about">About</Link>
            </nav>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </div>
    );
}

export default App;`}
            </code>
         </pre>

         <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">In this example</h2>
        <ul className="list-[square] list-inside space-y-1 mt-5">
            <li>Routes wraps Route elements that define the application's routing paths.</li>
            <li>Unlike NavLink, Link does not render any active styling by default.</li>
            <li>The Link component from react-router-dom provides client-side navigation between the Home ("/") and About <span className="ml-5">("/about")</span> pages, preventing full-page reloads.</li>
            <li>Clicking a link updates the browser URL and renders the associated component, but the active state is not visually <span className="ml-5">indicated</span>.</li>
        </ul>
        
        <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">What is NavLink Component?</h2>
        <ul className="list-[square] list-inside space-y-1 mt-5">
            <li>NavLink is like Link but adds an “active” class to show which page is currently selected.</li>
            <li>It’s great for highlighting the active menu item in a navbar.</li>
            <li>Use it to indicate the active route.</li>
        </ul>

        <h2 className="text-2xl text-gray-800 font-semibold mt-5">Syntax</h2>
        <pre className="text-green-400 bg-gray-900 p-4 rounded-lg mt-5">
            <code>
                {`<NavLink to="/path" activeClassName="active">Text</NavLink>`}
            </code>
        </pre>


        <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Features of NavLink</h2>
        <ul className="list-[square] list-inside space-y-1 mt-5">
            <li><span className="font-semibold">Applies Active Class</span>: NavLink automatically assigns an active class to links that match the current route.</li>
            <li><span className="font-semibold">Supports Custom Styling</span>: Developers can define styles for both active and inactive link states.</li>
            <li><span className="font-semibold">Exact Matching Option</span>: By default, NavLink allows partial route matches; setting exact ensures precise path <span className="ml-5">matching</span>.</li>
        </ul>

        <pre className="text-green-400 bg-gray-900 p-4 rounded-lg mt-5">
             <code>
                {`import React from "react";
import { NavLink, Route, Routes } from "react-router-dom";

function Home() {
    return <h1>Home Page</h1>;
}

function About() {
    return <h1>About Page</h1>;
}

function Navbar() {
    return (
        <nav>
            {/* Using inline styles for active link */}
            <NavLink
                to="/"
                style={({ isActive }) => ({
                    color: isActive ? "red" : "black",
                    fontWeight: isActive ? "bold" : "normal",
                    textDecoration: "none",
                    marginRight: "15px",
                })}
            >
                Home
            </NavLink>

            <NavLink
                to="/about"
                style={({ isActive }) => ({
                    color: isActive ? "red" : "black",
                    fontWeight: isActive ? "bold" : "normal",
                    textDecoration: "none",
                })}
            >
                About
            </NavLink>
        </nav>
    );
}

function App() {
    return (
        <div>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </div>
    );
}

export default App;`}
             </code>
        </pre>

        <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">In this example</h2>
        <ul className="list-[square] list-inside space-y-1 mt-5">
            <li>NavLink is used instead of Link to apply dynamic styling to the active route.</li>
            <li>Active links receive red text and bold font, while inactive links remain black and normal.</li>
            <li>The navigation bar is encapsulated in a Navbar component for modularity.</li>
            <li>Selecting Home or About updates the URL and renders the respective component, with the active link automatically <span className="ml-5">styled</span>.</li>
        </ul>

        <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Handling External Links</h2>
        <p>Both Link and NavLink handle client-side routing within the React app and are not suitable for external URLs. Use the standard {'<a>'} element for linking externally.</p>
        <pre className="text-green-400 bg-gray-900 p-4 rounded-lg mt-5">
            <code>
                {`<a href="https://example.com/" target="_blank" rel="noopener noreferrer">
    External Link
</a>`}
            </code>
        </pre>

        <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Combining useNavigate with Link</h2>
        <p>React Router offers the useNavigate hook for programmatic route changes. When navigation must occur based on user interactions—such as post-form submission—useNavigate should be used in place of the Link component.</p>
        <pre className="text-green-400 bg-gray-900 p-4 rounded-lg mt-5">
            <code>
                {`import { useNavigate } from "react-router-dom";
function Home() {
    const navigate = useNavigate();
    return (
        <button onClick={() => navigate("/dashboard")}>
            Go to Dashboard
        </button>
    );
}`}
            </code>
        </pre>

        <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Link vs NavLink in React Router Dom</h2>
        <p>Link and NavLink components in React Router provide client-side navigation without page reloads. NavLink applies an "active" class to indicate the current route, whereas Link does not. Employ NavLink for navigation menus and Link for standard routing.</p>
        <table className="min-w-full border border-gray-300 text-gray-700 text-sm text-left mt-10">
            <thead>
                <tr className="bg-gray-100">
                    <th className="py-4 px-2 border-b border-gray-300 text-gray-700 font-semibold">Feature</th>
                    <th className="py-4 px-2 border-b border-gray-300 text-gray-700 font-semibold">Link</th>
                    <th className="py-4 px-2 border-b border-gray-300 text-gray-700 font-semibold">NavLink</th>
                </tr>
            </thead>
            <tbody>
                {data.map((row,index)=>(
                    <tr className="cursor-text hover:bg-gray-100">
                        <td className="px-4 py-2 border-b border-gray-200">{row.Feature}</td>
                        <td className="px-4 py-2 border-b border-gray-200">{row.Link}</td>
                        <td className="px-4 py-2 border-b border-gray-200">{row.NavLink}</td>
                    </tr>
                ))}
            </tbody>
        </table>
        
        
        
        
        </div>
    )
}

export default NavlinkRouter;