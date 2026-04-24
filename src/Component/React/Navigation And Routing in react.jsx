import React from "react";

const NavigationRouting = () =>{
    return(
        <div className="max-w-4xl p-6 mt-10">
            <h1 className="lg:text-3xl text-2xl text-blue-500 font-semibold mb-3">React Navigation and Routing</h1>
            <p>React <span className="text-red-400 bg-gray-50">routing</span> is a method used to manage <span className="text-red-400 bg-gray-50">navigation</span> in a React application. It allows users to switch between different views, pages, or components without reloading the page, which is a core characteristic of Single Page Applications (SPAs).In this article, we will discuss the fundamental concepts of routing in React. React Router offers a robust and flexible solution for handling navigation in SPAs.</p>
            <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">What is Navigation in React?</h2>
            <p><span className="text-red-400 bg-gray-50">Navigation</span> is the mechanism that allows users to switch between various views or sections in a React application. Most React apps are built as Single Page Applications (SPAs), where the application loads once and navigation is managed on the client side, eliminating the need for full page reloads and enabling seamless transitions between components.</p>
            <h2 className="text-2xl text-gray-800 font-semibold mt-5">Syntax</h2>
         <pre className="bg-gray-200 p-4 rounded-lg mt-5 overflow-x-auto text-sm">
  <code className="font-mono text-gray-900">
    
    <span className="text-gray-600">// Installing</span>{"\n"}
    
    <span className="text-red-600">npm</span>{" "}
    <span className="text-blue-700">i</span>{" "}
    <span className="text-yellow-700">react-router-dom</span>
    
    {"\n\n"}
    
    <span className="text-gray-600">// Importing</span>{"\n"}
    
    <span className="text-purple-700">import</span>{" "}
    {"{ "}
    <span className="text-green-700">BrowserRouter</span>{" "}
    {"} "}
    <span className="text-purple-700">from</span>{" "}
    <span className="text-yellow-700">'react-router-dom'</span>;
    
  </code>
</pre>
            <ul className="list-[square] space-y-1 mt-5">
                <li><span className="font-semibold">Installing</span>: Run npm i react-router-dom to add React Router to your React project.</li>
                <li><span className="font-semibold">Importing</span>: Use import { '{BrowserRouter}' } from 'react-router-dom'; to bring in BrowserRouter and enable routing.</li>
            </ul>


            <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Programmatically Navigate in React</h2>
            <p>Programmatic <span className="text-red-400 bg-gray-50">navigation</span> enables route changes based on specific actions such as button clicks or form submissions. It offers greater control over routing by allowing navigation to occur in response to user-triggered events.</p>
           <h2 className="text-2xl text-gray-800 font-semibold mt-5">Approach</h2>
           <ul className="list-[square]  space-y-1 mt-5">
            <li>Build two simple pages that users can navigate between.</li>
            <li>Add buttons on each page to trigger redirection.</li>
            <li>Import the useNavigate hook from react-router-dom.</li>
            <li>Use the hook inside the button’s onClick event to perform the navigation.</li>
           </ul>

         <pre className="bg-gray-200 p-4 rounded-lg mt-5 overflow-x-auto text-sm">
  <code className="font-mono text-gray-900">

    <span className="text-gray-600">// App.js</span>{"\n\n"}

    <span className="text-purple-700">import</span>{" "}
    {"{ "}
    <span className="text-green-700">BrowserRouter</span>,{" "}
    <span className="text-green-700">Routes</span>,{" "}
    <span className="text-green-700">Route</span>{" "}
    {"} "}
    <span className="text-purple-700">from</span>{" "}
    <span className="text-yellow-700">"react-router-dom"</span>;
    {"\n"}

    <span className="text-purple-700">import</span>{" "}
    <span className="text-yellow-700">"./App.css"</span>;
    {"\n"}

    <span className="text-purple-700">import</span>{" "}
    <span className="text-green-700">AboutUs</span>{" "}
    <span className="text-purple-700">from</span>{" "}
    <span className="text-yellow-700">"./components/AboutUs"</span>;
    {"\n"}

    <span className="text-purple-700">import</span>{" "}
    <span className="text-green-700">ContactUs</span>{" "}
    <span className="text-purple-700">from</span>{" "}
    <span className="text-yellow-700">"./components/CotactUs"</span>;
    {"\n\n"}

    <span className="text-purple-700">function</span>{" "}
    <span className="text-blue-700">App</span>() {"{"}
    {"\n"}
    {"  "}
    <span className="text-purple-700">return</span> (
    {"\n"}
    {"    "}
    &lt;<span className="text-red-600">div</span>{" "}
    <span className="text-blue-700">className</span>=
    <span className="text-yellow-700">"App"</span>&gt;
    {"\n"}

    {"      "}
    &lt;<span className="text-green-700">BrowserRouter</span>&gt;
    {"\n"}

    {"        "}
    &lt;<span className="text-green-700">Routes</span>&gt;
    {"\n"}

    {"          "}
    &lt;<span className="text-green-700">Route</span>{" "}
    <span className="text-blue-700">exact</span>{" "}
    <span className="text-blue-700">path</span>=
    <span className="text-yellow-700">"/"</span>{" "}
    <span className="text-blue-700">element</span>={"{"}
    &lt;<span className="text-green-700">AboutUs</span> /&gt;
    {"}"} /&gt;
    {"\n"}

    {"          "}
    &lt;<span className="text-green-700">Route</span>{" "}
    <span className="text-blue-700">exact</span>{" "}
    <span className="text-blue-700">path</span>=
    <span className="text-yellow-700">"/contactus"</span>{" "}
    <span className="text-blue-700">element</span>={"{"}
    &lt;<span className="text-green-700">ContactUs</span> /&gt;
    {"}"} /&gt;
    {"\n"}

    {"        "}
    &lt;/<span className="text-green-700">Routes</span>&gt;
    {"\n"}

    {"      "}
    &lt;/<span className="text-green-700">BrowserRouter</span>&gt;
    {"\n"}

    {"    "}
    &lt;/<span className="text-red-600">div</span>&gt;
    {"\n"}

    {"  "}
    );
    {"\n"}
    {"}"}
    {"\n\n"}

    <span className="text-purple-700">export</span>{" "}
    <span className="text-purple-700">default</span>{" "}
    <span className="text-blue-700">App</span>;

  </code>
</pre>

           <h2 className="text-2xl text-gray-800 font-semibold mt-5">In this example</h2>
           <ul className="list-[square]  space-y-1 mt-5">
            <li><span className="font-semibold">App.js</span>: Renders the AboutUs component.</li>
            <li><span className="font-semibold">AboutUs.js</span>: Creates a button that links to the Contact Us page.</li>
            <li><span className="font-semibold">ContactUs.js</span>: Contains a button that navigates back to the previous page.</li>
           </ul>

           <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Dynamic Routing with React router</h2>
           <p>When an application contains many pages, adding multiple Link routes can become verbose. To simplify the code and reduce repetition, dynamic routing is used. Dynamic routing enables routes to be created programmatically based on specific conditions.</p>
           <h2 className="text-2xl text-gray-800 font-semibold mt-5">Approach</h2>
           <ul className="list-[square] space-y-1 mt-5">
            <li>Build a page that generates Link components using the map function.</li>
            <li>Create another page that displays data dynamically with the help of useParams.</li>
            <li>Define a dynamic Route that passes an id value as a parameter.</li>
           </ul>
           <pre className="bg-gray-200 p-4 rounded-lg mt-5 overflow-x-auto text-sm">
  <code className="font-mono text-gray-900">
{String.raw`// App.js

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
           <ul className="list-[square] space-y-1 mt-5">
            <li><span className="font-semibold">App.js</span>: Dynamically generates Link components and passes the course name as a parameter.</li>
            <li><span className="font-semibold">CourseDetails.js</span>: Retrieves the course parameter and uses it accordingly.</li>
           </ul>

           <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Handling 404 Errors (Page Not Found)</h2>
           <p>Sometimes, users enter a URL that does not exist on the website, causing the router to fail and display an error. To handle this scenario, a universal Route component is created that redirects users to a “Page Not Found” view whenever an invalid URL is accessed.</p>
           <h2 className="text-2xl text-gray-800 font-semibold mt-5">Approach</h2>
           <ul className="list-[square] space-y-1 mt-5">
            <li>Create three basic pages where navigation will be added.</li>
            <li>Build a Navbar component to navigate between the pages.</li>
            <li>Create a NoPageFound.js file to handle all invalid routes.</li>
            <li>Add a route for paths that are not configured, redirecting them to NoPageFound.js.</li>
            <li>Use the '*' path to catch all non-configured routes.</li>
           </ul>
           <pre className="bg-gray-200 p-4 rounded-lg mt-5 overflow-x-auto text-sm">
  <code className="font-mono text-gray-900">

    <span className="text-gray-500">// App.js</span>{"\n\n"}

    <span className="text-purple-700">import</span>{" "}
    <span className="text-gray-900">logo</span>{" "}
    <span className="text-purple-700">from</span>{" "}
    <span className="text-yellow-700">"./logo.svg"</span>;
    {"\n"}

    <span className="text-purple-700">import</span>{" "}
    {"{ "}
    <span className="text-green-700">BrowserRouter</span>,{" "}
    <span className="text-green-700">Routes</span>,{" "}
    <span className="text-green-700">Route</span>{" "}
    {"} "}
    <span className="text-purple-700">from</span>{" "}
    <span className="text-yellow-700">"react-router-dom"</span>;
    {"\n"}

    <span className="text-purple-700">import</span>{" "}
    <span className="text-yellow-700">"./App.css"</span>;
    {"\n"}

    <span className="text-purple-700">import</span>{" "}
    <span className="text-green-700">NavBar</span>{" "}
    <span className="text-purple-700">from</span>{" "}
    <span className="text-yellow-700">"./components/Navbar"</span>;
    {"\n"}

    <span className="text-purple-700">import</span>{" "}
    <span className="text-green-700">Home</span>{" "}
    <span className="text-purple-700">from</span>{" "}
    <span className="text-yellow-700">"./components/Home"</span>;
    {"\n"}

    <span className="text-purple-700">import</span>{" "}
    <span className="text-green-700">AboutUs</span>{" "}
    <span className="text-purple-700">from</span>{" "}
    <span className="text-yellow-700">"./components/AboutUs"</span>;
    {"\n"}

    <span className="text-purple-700">import</span>{" "}
    <span className="text-green-700">ContactUs</span>{" "}
    <span className="text-purple-700">from</span>{" "}
    <span className="text-yellow-700">"./components/CotactUs"</span>;
    {"\n"}

    <span className="text-purple-700">import</span>{" "}
    <span className="text-green-700">NoPageFound</span>{" "}
    <span className="text-purple-700">from</span>{" "}
    <span className="text-yellow-700">"./components/NoPageFound"</span>;
    {"\n\n"}

    <span className="text-purple-700">function</span>{" "}
    <span className="text-blue-700">App</span>() {"{"}
    {"\n"}
    {"  "}
    <span className="text-purple-700">return</span> (
    {"\n"}
    {"    "}
    &lt;<span className="text-red-600">div</span>{" "}
    <span className="text-blue-700">className</span>=
    <span className="text-yellow-700">"App"</span>&gt;
    {"\n"}

    {"      "}
    &lt;<span className="text-green-700">BrowserRouter</span>&gt;
    {"\n"}

    {"        "}
    &lt;<span className="text-green-700">NavBar</span> /&gt;
    {"\n"}

    {"        "}
    &lt;<span className="text-green-700">Routes</span>&gt;
    {"\n"}

    {"          "}
    &lt;<span className="text-green-700">Route</span>{" "}
    <span className="text-blue-700">exact</span>{" "}
    <span className="text-blue-700">path</span>=
    <span className="text-yellow-700">"/"</span>{" "}
    <span className="text-blue-700">element</span>=
    <span className="text-gray-900">{"{"}</span>
    &lt;<span className="text-green-700">Home</span> /&gt;
    <span className="text-gray-900">{"}"}</span> /&gt;
    {"\n"}

    {"          "}
    &lt;<span className="text-green-700">Route</span>{" "}
    <span className="text-blue-700">exact</span>{" "}
    <span className="text-blue-700">path</span>=
    <span className="text-yellow-700">"/about"</span>{" "}
    <span className="text-blue-700">element</span>=
    <span className="text-gray-900">{"{"}</span>
    &lt;<span className="text-green-700">AboutUs</span> /&gt;
    <span className="text-gray-900">{"}"}</span> /&gt;
    {"\n"}

    {"          "}
    &lt;<span className="text-green-700">Route</span>{" "}
    <span className="text-blue-700">exact</span>{" "}
    <span className="text-blue-700">path</span>=
    <span className="text-yellow-700">"/contact"</span>{" "}
    <span className="text-blue-700">element</span>=
    <span className="text-gray-900">{"{"}</span>
    &lt;<span className="text-green-700">ContactUs</span> /&gt;
    <span className="text-gray-900">{"}"}</span> /&gt;
    {"\n"}

    {"          "}
    &lt;<span className="text-green-700">Route</span>{" "}
    <span className="text-blue-700">path</span>=
    <span className="text-yellow-700">"*"</span>{" "}
    <span className="text-blue-700">element</span>=
    <span className="text-gray-900">{"{"}</span>
    &lt;<span className="text-green-700">NoPageFound</span> /&gt;
    <span className="text-gray-900">{"}"}</span> /&gt;
    {"\n"}

    {"        "}
    &lt;/<span className="text-green-700">Routes</span>&gt;
    {"\n"}

    {"      "}
    &lt;/<span className="text-green-700">BrowserRouter</span>&gt;
    {"\n"}

    {"    "}
    &lt;/<span className="text-red-600">div</span>&gt;
    {"\n"}

    {"  "}
    );
    {"\n"}
    {"}"}
    {"\n\n"}

    <span className="text-purple-700">export</span>{" "}
    <span className="text-purple-700">default</span>{" "}
    <span className="text-blue-700">App</span>;

  </code>
</pre>

           <h2 className="text-2xl text-gray-800 font-semibold mt-5">In this code</h2>
           <ul className="list-[square] space-y-1 mt-5">
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