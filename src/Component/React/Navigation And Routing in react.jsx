import React from "react";

const NavigationRouting = () =>{
    return(
        <div className="max-w-4xl p-6 mt-10">
            <h1 className="lg:text-3xl text-2xl text-blue-500 font-semibold mb-3">React Navigation and Routing</h1>
            <p>React <span className="text-red-400 bg-gray-50">routing</span> is a method used to manage <span className="text-red-400 bg-gray-50">navigation</span> in a React application. It allows users to switch between different views, pages, or components without reloading the page, which is a core characteristic of Single Page Applications (SPAs).In this article, we will discuss the fundamental concepts of routing in React. React Router offers a robust and flexible solution for handling navigation in SPAs.</p>
            <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">What is Navigation in React?</h2>
            <p><span className="text-red-400 bg-gray-50">Navigation</span> is the mechanism that allows users to switch between various views or sections in a React application. Most React apps are built as Single Page Applications (SPAs), where the application loads once and navigation is managed on the client side, eliminating the need for full page reloads and enabling seamless transitions between components.</p>
            <h2 className="text-2xl text-gray-800 font-semibold mt-5">Syntax</h2>
            <pre className="text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5">
                <code>
                    {`// Installing
npm i react-router-dom
// Importing
import { BrowserRouter } from 'react-router-dom';`}
                </code>
            </pre>

            <ul className="list-[square] list-inside space-y-1 mt-5">
                <li><span className="font-semibold">Installing</span>: Run npm i react-router-dom to add React Router to your React project.</li>
                <li><span className="font-semibold">Importing</span>: Use import { '{BrowserRouter}' } from 'react-router-dom'; to bring in BrowserRouter and enable routing.</li>
            </ul>


            <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Programmatically Navigate in React</h2>
            <p>Programmatic <span className="text-red-400 bg-gray-50">navigation</span> enables route changes based on specific actions such as button clicks or form submissions. It offers greater control over routing by allowing navigation to occur in response to user-triggered events.</p>
           <h2 className="text-2xl text-gray-800 font-semibold mt-5">Approach</h2>
           <ul className="list-[square] list-inside space-y-1 mt-5">
            <li>Build two simple pages that users can navigate between.</li>
            <li>Add buttons on each page to trigger redirection.</li>
            <li>Import the useNavigate hook from react-router-dom.</li>
            <li>Use the hook inside the button’s onClick event to perform the navigation.</li>
           </ul>

           <pre className="text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5">
            <code>
                {`// App.js

import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/CotactUs";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<AboutUs />} />
                    <Route exact path="/contactus" element={<ContactUs />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;`}
            </code>
           </pre>

           <h2 className="text-2xl text-gray-800 font-semibold mt-5">In this example</h2>
           <ul className="list-[square] list-inside space-y-1 mt-5">
            <li><span className="font-semibold">App.js</span>: Renders the AboutUs component.</li>
            <li><span className="font-semibold">AboutUs.js</span>: Creates a button that links to the Contact Us page.</li>
            <li><span className="font-semibold">ContactUs.js</span>: Contains a button that navigates back to the previous page.</li>
           </ul>

           <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Dynamic Routing with React router</h2>
           <p>When an application contains many pages, adding multiple Link routes can become verbose. To simplify the code and reduce repetition, dynamic routing is used. Dynamic routing enables routes to be created programmatically based on specific conditions.</p>
           <h2 className="text-2xl text-gray-800 font-semibold mt-5">Approach</h2>
           <ul className="list-[square] list-inside space-y-1 mt-5">
            <li>Build a page that generates Link components using the map function.</li>
            <li>Create another page that displays data dynamically with the help of useParams.</li>
            <li>Define a dynamic Route that passes an id value as a parameter.</li>
           </ul>
           <pre className="text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5">
            <code>
                {`// App.js

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import CourseDetails from "./components/CourseDetails";

function App() {
    const courses = ["JavaScript", "React", "HTML", "DSA"];
    return (
        <BrowserRouter>
            <h1>Dynamic Routing with React</h1>
            <ul>
                {courses.map((course) => {
                    return (
                        <li key={course}>
                            <Link to={\`courses/\${course}\`}>{course}</Link>
                        </li>
                    );
                })}
            </ul>
            <Routes>
                <Route path="courses/:courseId" element={<CourseDetails />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;`}
            </code>
           </pre>

           <h2 className="text-2xl text-gray-800 font-semibold mt-5">In this code</h2>
           <ul className="list-[square] list-inside space-y-1 mt-5">
            <li><span className="font-semibold">App.js</span>: Dynamically generates Link components and passes the course name as a parameter.</li>
            <li><span className="font-semibold">CourseDetails.js</span>: Retrieves the course parameter and uses it accordingly.</li>
           </ul>

           <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Handling 404 Errors (Page Not Found)</h2>
           <p>Sometimes, users enter a URL that does not exist on the website, causing the router to fail and display an error. To handle this scenario, a universal Route component is created that redirects users to a “Page Not Found” view whenever an invalid URL is accessed.</p>
           <h2 className="text-2xl text-gray-800 font-semibold mt-5">Approach</h2>
           <ul className="list-[square] list-inside space-y-1 mt-5">
            <li>Create three basic pages where navigation will be added.</li>
            <li>Build a Navbar component to navigate between the pages.</li>
            <li>Create a NoPageFound.js file to handle all invalid routes.</li>
            <li>Add a route for paths that are not configured, redirecting them to NoPageFound.js.</li>
            <li>Use the '*' path to catch all non-configured routes.</li>
           </ul>
           <pre className="text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5">
            <code>
                {`// App.js

import logo from "./logo.svg";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/Navbar";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/CotactUs";
import NoPageFound from "./components/NoPageFound";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/about" element={<AboutUs />} />
                    <Route exact path="/contact" element={<ContactUs />} />
                    <Route path="*" element={<NoPageFound />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;`}
            </code>
           </pre>

           <h2 className="text-2xl text-gray-800 font-semibold mt-5">In this code</h2>
           <ul className="list-[square] list-inside space-y-1 mt-5">
            <li><span className="font-semibold">Home.js</span>: Acts as the home page.</li>
            <li><span className="font-semibold">AboutUs.js</span>: Contains the About Us page.</li>
            <li><span className="font-semibold">ContactUs.js</span>: Displays the Contact Us page.</li>
            <li><span className="font-semibold">Navbar.js</span>: Contains the navigation bar to switch between pages.</li>
            <li><span className="font-semibold">App.js</span>: Imports all components and sets up routing for them.</li>
            <li><span className="font-semibold">NoPageFound.js</span>: Displays a page when users enter an invalid URL.</li>
           </ul>

           <p className="mt-10">Mastering navigation and routing in React is crucial for developing responsive, interactive web applications. React Router simplifies the process of navigating between pages or views without page reloads, enabling the creation of seamless single-page applications. By learning to configure basic routes, handle dynamic paths, implement programmatic navigation, and use nested routes, you can build efficient and user-friendly React apps that provide a smooth browsing experience.</p>

        
        </div>
    )
}

export default NavigationRouting;