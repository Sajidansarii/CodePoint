import React from "react";

const ReactRouterHooks = () => {
    return(
        <div className="max-w-4xl p-6 mt-10">
        <h1 className="text-3xl text-blue-500 font-semibold mb-3">React-Router Hooks</h1>
        <p>React-Router is a popular React library that is heavily used for client-side routing and offers single-page routing. It provides various Component APIs( like Route, Link, Switch, etc.) that you can use in your React application to render different components based on the URL pathnames on a single page.</p>
         
         <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">What are React Router Hooks?</h2>
          <p>React Router hooks are predefined functions that allow functional components to interact with the router, enabling control over navigation, location data, and URL parameters. These hooks are part of the React Router library for routing in React applications.</p>
                      
          <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Hooks Of React Router 5:</h2>
          <p>The following are four React Router hooks provided in React Router v5 for use in React applications:</p>  
          <ul className="list-[square] space-y-1 mt-5">
            <li>useHistory</li>
            <li>useParams</li>
            <li>useLocation</li>
            <li>useRouteMatch</li>
         </ul>


           <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">useHistory Hook:</h2>
           <p>This hook is one of the most popular features of React Router. It provides access to the history instance, enabling programmatic navigation between routes. The history instance follows a stack-based structure that stores the sequence of visited routes.</p>

           <h2 className="text-2xl text-gray-800 font-semibold mt-10">Syntax</h2>
        <pre className="bg-gray-200 text-sm p-4 rounded-lg overflow-x-auto mt-5">
  <code>
    <span className="text-purple-600">import</span>{" "}
    <span className="text-gray-800">{`{ useHistory }`}</span>{" "}
    <span className="text-purple-600">from</span>{" "}
    <span className="text-green-600">"react-router-dom"</span>
    <span className="text-pink-500">;</span>

    {"\n"}
    <span className="text-gray-500">// Inside a functional component</span>

    {"\n"}
    <span className="text-purple-600">export default function</span>{" "}
    <span className="text-blue-600">SomeComponent</span>
    <span className="text-gray-800">(props)</span>
    <span className="text-gray-800">{`{`}</span>

    {"\n"}
    {"  "}
    <span className="text-gray-500">// The useHistory() hook returns the history</span>
    {"\n"}
    {"  "}
    <span className="text-gray-500">// object used by React Router</span>

    {"\n\n"}
    {"  "}
    <span className="text-purple-600">const</span>{" "}
    <span className="text-blue-600">history</span>{" "}
    <span className="text-pink-500">=</span>{" "}
    <span className="text-blue-600">useHistory</span>
    <span className="text-gray-800">()</span>
    <span className="text-pink-500">;</span>

    {"\n"}
    <span className="text-gray-800">{`}`}</span>
  </code>
</pre>

           <p className="mt-5">The history object returned by the <span className="text-red-400 bg-gray-50">useHistory()</span> hook contains multiple methods and properties.</p>
             <h2 className="text-2xl text-gray-800 font-semibold mt-5">Properties:</h2>
             
             <ul className="list-[square] space-y-1 mt-5">
                <li><span className="font-semibold">length</span>: Provides a numeric value representing the total number of entries in the history stack.</li>
                <li><span className="font-semibold">action</span>: Indicates the current navigation type as a string (PUSH, REPLACE, or POP).</li>
                <li><span className="font-semibold">location</span>: An object that represents the active location and includes:   </li>
             </ul>

             <ul className="list-none ml-10 space-y-1 mt-2">
                <li><span className="font-semibold">pathname</span>: The URL path as a string</li>
                <li><span className="font-semibold">search</span>: The URL’s query string</li>
                <li><span className="font-semibold">hash</span>: The URL hash fragment</li>
                <li><span className="font-semibold">state</span>: Location-specific state passed via navigation methods such as push(path, state) (supported only in browser and memory history)</li>
             </ul>

             <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Methods:</h2>
             <ul className="list-[square] space-y-1 mt-5">
                <li><span className="font-semibold">push(path, [state])</span>: Inserts a new entry into the history stack and navigates to the specified path.</li>
                <li><span className="font-semibold">replace(path, [state])</span>: Substitutes the current history entry with a new one.</li>
                <li><span className="font-semibold">go(n)</span>: Navigates through the history stack by moving n entries forward or backward.</li>
                <li><span className="font-semibold">goBack()</span>: Navigates to the previous history entry (go(-1)).</li>
                <li><span className="font-semibold">goForward()</span>: Navigates to the next history entry (go(1)).</li>
                <li><span className="font-semibold">block(prompt)</span>: Intercepts navigation attempts and executes a callback, commonly used for exit confirmations.</li>
             </ul>

             <p className="mt-5">Consider a LogIn component defined in LogIn.js that renders a login interface with two input fields for username and password. Upon clicking the login button, the application authenticates the user and navigates them to their profile page.</p>
           <pre className="bg-gray-200 text-sm p-4 rounded-lg overflow-x-auto mt-5">
  <code>
    <span className="text-gray-500">// Filename - LogIn.js</span>

    {"\n\n"}
    <span className="text-purple-600">import</span>{" "}
    <span className="text-gray-800">{`{ useHistory }`}</span>{" "}
    <span className="text-purple-600">from</span>{" "}
    <span className="text-green-600">"react-router-dom"</span>
    <span className="text-pink-500">;</span>

    {"\n"}
    <span className="text-purple-600">import</span>{" "}
    <span className="text-gray-800">{`{ useState }`}</span>{" "}
    <span className="text-purple-600">from</span>{" "}
    <span className="text-green-600">"react"</span>
    <span className="text-pink-500">;</span>

    {"\n\n"}
    <span className="text-gray-500">// A function that authenticates the users</span>

    {"\n"}
    <span className="text-purple-600">function</span>{" "}
    <span className="text-blue-600">authenticateUser</span>
    <span className="text-gray-800">(userName, password)</span>
    <span className="text-gray-800">{`{`}</span>
    {"\n  "}
    <span className="text-gray-500">// Some code to authenticate the user</span>
    {"\n"}
    <span className="text-gray-800">{`}`}</span>

    {"\n\n"}
    <span className="text-gray-500">// Hooks must be used inside a functional component</span>

    {"\n"}
    <span className="text-purple-600">export default function</span>{" "}
    <span className="text-blue-600">Login</span>
    <span className="text-gray-800">(props)</span>
    <span className="text-gray-800">{`{`}</span>

    {"\n"}
    {"  "}
    <span className="text-gray-500">// Creating a state variable</span>

    {"\n"}
    {"  "}
    <span className="text-purple-600">const</span>{" "}
    <span className="text-gray-800">{`[userName, setUserName]`}</span>{" "}
    <span className="text-pink-500">=</span>{" "}
    <span className="text-blue-600">useState</span>
    <span className="text-gray-800">("")</span>
    <span className="text-pink-500">;</span>

    {"\n"}
    {"  "}
    <span className="text-purple-600">const</span>{" "}
    <span className="text-gray-800">{`[password, setPassword]`}</span>{" "}
    <span className="text-pink-500">=</span>{" "}
    <span className="text-blue-600">useState</span>
    <span className="text-gray-800">("")</span>
    <span className="text-pink-500">;</span>

    {"\n\n"}
    {"  "}
    <span className="text-gray-500">// Accessing the history instance created by React</span>

    {"\n"}
    {"  "}
    <span className="text-purple-600">const</span>{" "}
    <span className="text-blue-600">history</span>{" "}
    <span className="text-pink-500">=</span>{" "}
    <span className="text-blue-600">useHistory</span>
    <span className="text-gray-800">()</span>
    <span className="text-pink-500">;</span>

    {"\n\n"}
    {"  "}
    <span className="text-purple-600">const</span>{" "}
    <span className="text-blue-600">handleClick</span>{" "}
    <span className="text-pink-500">=</span>{" "}
    <span className="text-gray-800">()</span>{" "}
    <span className="text-gray-800">{`{`}</span>

    {"\n"}
    {"    "}
    <span className="text-blue-600">authenticateUser</span>
    <span className="text-gray-800">(userName, password)</span>
    <span className="text-pink-500">;</span>

    {"\n\n"}
    {"    "}
    <span className="text-gray-500">// Redirect to profile page</span>

    {"\n"}
    {"    "}
    <span className="text-blue-600">history.push</span>
    <span className="text-gray-800">(`</span>
    <span className="text-green-600">/profile/${"{userName}"}</span>
    <span className="text-gray-800">`)</span>
    <span className="text-pink-500">;</span>

    {"\n"}
    {"  "}
    <span className="text-gray-800">{`}`}</span>
    <span className="text-pink-500">;</span>

    {"\n\n"}
    {"  "}
    <span className="text-purple-600">return</span>{" "}
    <span className="text-gray-800">(</span>
    {"\n"}
    {"    "}
    <span className="text-blue-600">&lt;div&gt;</span>

    {"\n"}
    {"      "}
    <span className="text-blue-600">&lt;input</span>{" "}
    <span className="text-green-600">type</span>
    <span className="text-pink-500">="text"</span>{" "}
    <span className="text-green-600">value</span>
    <span className="text-pink-500">=</span>
    <span className="text-gray-800">{`{userName}`}</span>{" "}
    <span className="text-green-600">onChange</span>
    <span className="text-pink-500">=</span>
    <span className="text-gray-800">{`{(e) => setUserName(e.target.value)}`}</span>
    <span className="text-green-600"> required</span>
    <span className="text-blue-600"> /&gt;</span>

    {"\n"}
    {"      "}
    <span className="text-blue-600">&lt;input</span>{" "}
    <span className="text-green-600">type</span>
    <span className="text-pink-500">="text"</span>{" "}
    <span className="text-green-600">value</span>
    <span className="text-pink-500">=</span>
    <span className="text-gray-800">{`{password}`}</span>{" "}
    <span className="text-green-600">onChange</span>
    <span className="text-pink-500">=</span>
    <span className="text-gray-800">{`{(e) => setPassword(e.target.value)}`}</span>
    <span className="text-green-600"> required</span>
    <span className="text-blue-600"> /&gt;</span>

    {"\n"}
    {"      "}
    <span className="text-blue-600">&lt;button</span>{" "}
    <span className="text-green-600">type</span>
    <span className="text-pink-500">="submit"</span>{" "}
    <span className="text-green-600">onClick</span>
    <span className="text-pink-500">=</span>
    <span className="text-gray-800">{`{handleClick}`}</span>
    <span className="text-blue-600">&gt;</span>
    {" Log In "}
    <span className="text-blue-600">&lt;/button&gt;</span>

    {"\n"}
    {"    "}
    <span className="text-blue-600">&lt;/div&gt;</span>

    {"\n"}
    {"  "}
    <span className="text-gray-800">)</span>
    <span className="text-pink-500">;</span>

    {"\n"}
    <span className="text-gray-800">{`}`}</span>
  </code>
</pre>

             <p className="mt-10">In the Login component, the handleClick function receives the username and password and calls the authenticateUser function to authenticate the user. After successful authentication, the user is redirected to /profile/John. The useHistory() hook provides access to the history instance created by React Router, and invoking history.push("/profile/John") adds the route to the history stack, triggering navigation to the specified path.</p>
              
              <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">useParams Hook</h2>
              <p>This hook returns an object that contains all parameters defined in the current URL.</p>
             <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Syntax</h2>
           <pre className="bg-gray-200 text-sm p-4 rounded-lg overflow-x-auto mt-5">
  <code>
    <span className="text-purple-600">import</span>{" "}
    <span className="text-gray-800">{`{ useParams }`}</span>{" "}
    <span className="text-purple-600">from</span>{" "}
    <span className="text-green-600">"react-router-dom"</span>
    <span className="text-pink-500">;</span>

    {"\n"}
    <span className="text-gray-500">// Inside a functional component</span>

    {"\n"}
    <span className="text-purple-600">export default function</span>{" "}
    <span className="text-blue-600">SomeComponent</span>
    <span className="text-gray-800">(props)</span>
    <span className="text-gray-800">{`{`}</span>

    {"\n"}
    {"  "}
    <span className="text-purple-600">const</span>{" "}
    <span className="text-blue-600">params</span>{" "}
    <span className="text-pink-500">=</span>{" "}
    <span className="text-blue-600">useParams</span>
    <span className="text-gray-800">()</span>
    <span className="text-pink-500">;</span>

    {"\n"}
    <span className="text-gray-800">{`}`}</span>
  </code>
</pre>

            <p className="mt-5">The URL parameters are defined within the Route’s URL pattern. For instance,</p>
           <pre className="bg-gray-200 text-sm p-4 rounded-lg overflow-x-auto mt-5">
  <code>
    <span className="text-blue-600">&lt;Route</span>{" "}
    <span className="text-green-600">path</span>
    <span className="text-pink-500">="/profile/:userName"</span>{" "}
    <span className="text-green-600">component</span>
    <span className="text-pink-500">=</span>
    <span className="text-gray-800">{`{Profile}`}</span>
    <span className="text-blue-600"> /&gt;</span>
  </code>
</pre>

             <p className="mt-5">The colon (:) in the route path /profile/:userName denotes that userName is a route parameter. For instance, in /profile/johndoe, the parameter userName has the value johndoe. The useParams() hook will return:</p>
           <pre className="bg-gray-200 text-sm p-4 rounded-lg overflow-x-auto mt-5">
  <code>
    <span className="text-gray-800">{`{`}</span>
    {"\n"}
    {"  "}
    <span className="text-green-600">userName</span>
    <span className="text-pink-500">:</span>{" "}
    <span className="text-orange-500">"johndoe"</span>
    {"\n"}
    <span className="text-gray-800">{`}`}</span>
  </code>
</pre>

             <p className="mt-5">Post-login, the application should redirect the user to /profile/userName, where userName is determined by the user’s input. To achieve this dynamic routing, the App.js file requires a minor update.</p>
           <pre className="bg-gray-200 text-sm p-4 rounded-lg overflow-x-auto mt-5">
  <code>
    <span className="text-gray-500">// Filename - App.js</span>

    {"\n\n"}
    <span className="text-purple-600">import</span>{" "}
    <span className="text-gray-800">{`{ Route, Switch }`}</span>{" "}
    <span className="text-purple-600">from</span>{" "}
    <span className="text-green-600">"react-router-dom"</span>
    <span className="text-pink-500">;</span>

    {"\n"}
    <span className="text-purple-600">import</span>{" "}
    <span className="text-blue-600">Home</span>{" "}
    <span className="text-purple-600">from</span>{" "}
    <span className="text-green-600">"./components/Home"</span>
    <span className="text-pink-500">;</span>

    {"\n"}
    <span className="text-purple-600">import</span>{" "}
    <span className="text-blue-600">ContactUs</span>{" "}
    <span className="text-purple-600">from</span>{" "}
    <span className="text-green-600">"./components/ContactUs"</span>
    <span className="text-pink-500">;</span>

    {"\n"}
    <span className="text-purple-600">import</span>{" "}
    <span className="text-blue-600">LogIn</span>{" "}
    <span className="text-purple-600">from</span>{" "}
    <span className="text-green-600">"./components/LogIn"</span>
    <span className="text-pink-500">;</span>

    {"\n"}
    <span className="text-purple-600">import</span>{" "}
    <span className="text-blue-600">AboutUs</span>{" "}
    <span className="text-purple-600">from</span>{" "}
    <span className="text-green-600">"./components/AboutUs"</span>
    <span className="text-pink-500">;</span>

    {"\n"}
    <span className="text-purple-600">import</span>{" "}
    <span className="text-blue-600">Profile</span>{" "}
    <span className="text-purple-600">from</span>{" "}
    <span className="text-green-600">"./components/Profile"</span>
    <span className="text-pink-500">;</span>

    {"\n\n"}
    <span className="text-purple-600">export default function</span>{" "}
    <span className="text-blue-600">App</span>
    <span className="text-gray-800">()</span>
    <span className="text-gray-800">{`{`}</span>

    {"\n"}
    {"  "}
    <span className="text-purple-600">return</span>{" "}
    <span className="text-gray-800">(</span>

    {"\n"}
    {"    "}
    <span className="text-blue-600">&lt;div</span>{" "}
    <span className="text-green-600">className</span>
    <span className="text-pink-500">="App"</span>
    <span className="text-blue-600">&gt;</span>

    {"\n"}
    {"      "}
    <span className="text-blue-600">&lt;Switch&gt;</span>

    {"\n"}
    {"        "}
    <span className="text-blue-600">&lt;Route</span>{" "}
    <span className="text-green-600">path</span>
    <span className="text-pink-500">="/"</span>{" "}
    <span className="text-green-600">exact</span>
    <span className="text-blue-600">&gt;</span>
    {"\n"}
    {"          "}
    <span className="text-blue-600">&lt;Home</span>{" "}
    <span className="text-green-600">someProps</span>
    <span className="text-pink-500">=</span>
    <span className="text-gray-800">{`{{ id: 54545454 }}`}</span>
    <span className="text-blue-600"> /&gt;</span>
    {"\n"}
    {"        "}
    <span className="text-blue-600">&lt;/Route&gt;</span>

    {"\n\n"}
    {"        "}
    <span className="text-blue-600">&lt;Route</span>{" "}
    <span className="text-green-600">path</span>
    <span className="text-pink-500">="/about"</span>
    <span className="text-blue-600">&gt;</span>
    {"\n"}
    {"          "}
    <span className="text-blue-600">&lt;AboutUs /&gt;</span>
    {"\n"}
    {"        "}
    <span className="text-blue-600">&lt;/Route&gt;</span>

    {"\n\n"}
    {"        "}
    <span className="text-blue-600">&lt;Route</span>{" "}
    <span className="text-green-600">path</span>
    <span className="text-pink-500">="/contact-us"</span>
    <span className="text-blue-600">&gt;</span>
    {"\n"}
    {"          "}
    <span className="text-blue-600">&lt;ContactUs /&gt;</span>
    {"\n"}
    {"        "}
    <span className="text-blue-600">&lt;/Route&gt;</span>

    {"\n\n"}
    {"        "}
    <span className="text-blue-600">&lt;Route</span>{" "}
    <span className="text-green-600">path</span>
    <span className="text-pink-500">="/log-in"</span>
    <span className="text-blue-600">&gt;</span>
    {"\n"}
    {"          "}
    <span className="text-blue-600">&lt;LogIn /&gt;</span>
    {"\n"}
    {"        "}
    <span className="text-blue-600">&lt;/Route&gt;</span>

    {"\n\n"}
    {"        "}
    <span className="text-gray-500">{`{/* userName is now a variable */}`}</span>

    {"\n"}
    {"        "}
    <span className="text-blue-600">&lt;Route</span>{" "}
    <span className="text-green-600">path</span>
    <span className="text-pink-500">="/profile/:userName"</span>
    <span className="text-blue-600">&gt;</span>
    {"\n"}
    {"          "}
    <span className="text-blue-600">&lt;Profile /&gt;</span>
    {"\n"}
    {"        "}
    <span className="text-blue-600">&lt;/Route&gt;</span>

    {"\n"}
    {"      "}
    <span className="text-blue-600">&lt;/Switch&gt;</span>

    {"\n"}
    {"    "}
    <span className="text-blue-600">&lt;/div&gt;</span>

    {"\n"}
    {"  "}
    <span className="text-gray-800">)</span>
    <span className="text-pink-500">;</span>

    {"\n"}
    <span className="text-gray-800">{`}`}</span>
  </code>
</pre>


            <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">useLocation Hook</h2>
            <p><span className="text-red-400 bg-gray-50">useLocation()</span> returns a location object that reflects the current URL in a React Router application. The object is immutable, and updates automatically when the URL changes. Its search property provides access to the URL’s query string, which can be used for conditional logic or data extraction.</p>
           
           <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Syntax</h2>
         <pre className="bg-gray-200 text-sm p-4 rounded-lg overflow-x-auto mt-5">
  <code>
    <span className="text-purple-600">import</span>{" "}
    <span className="text-gray-800">{`{ useLocation }`}</span>{" "}
    <span className="text-purple-600">from</span>{" "}
    <span className="text-green-600">"react-router-dom"</span>
    <span className="text-pink-500">;</span>

    {"\n"}
    <span className="text-gray-500">// Inside functional component</span>

    {"\n"}
    <span className="text-purple-600">export default function</span>{" "}
    <span className="text-blue-600">SomeComponent</span>
    <span className="text-gray-800">(props)</span>
    <span className="text-gray-800">{`{`}</span>

    {"\n"}
    {"  "}
    <span className="text-purple-600">const</span>{" "}
    <span className="text-blue-600">location</span>{" "}
    <span className="text-pink-500">=</span>{" "}
    <span className="text-blue-600">useLocation</span>
    <span className="text-gray-800">()</span>
    <span className="text-pink-500">;</span>

    {"\n"}
    <span className="text-gray-800">{`}`}</span>
  </code>
</pre>

          <p className="mt-5 mb-3">While history.location represents the current location, it is mutable. The location object returned by useLocation() is immutable, making it the recommended approach for accessing the current route in a React component.</p>
          <p>The useLocation() hook is helpful for accessing query parameters in the URL. In the example below, we use useLocation() to get the URL and then parse the query parameters using the URLSearchParams constructor.</p>
         <pre className="bg-gray-200 text-sm p-4 rounded-lg overflow-x-auto mt-5">
  <code>
    <span className="text-gray-500">// Filename - Profile.js</span>

    {"\n\n"}
    <span className="text-purple-600">import</span>{" "}
    <span className="text-gray-800">{`{ useLocation }`}</span>{" "}
    <span className="text-purple-600">from</span>{" "}
    <span className="text-green-600">"react-router-dom"</span>;

    {"\n\n"}
    <span className="text-purple-600">export default function</span>{" "}
    <span className="text-blue-600">Profile</span>(props) {"{"}

    {"\n  "}
    <span className="text-purple-600">const</span>{" "}
    location = <span className="text-blue-600">useLocation</span>();

    {"\n\n"}
    <span className="text-purple-600">const</span>{" "}
    searchParams = <span className="text-purple-600">new</span>{" "}
    URLSearchParams(location.search);

    {"\n\n"}
    <span className="text-purple-600">return</span> (
    {"\n  "}
    &lt;div&gt;
    {"\n    "}
    searchParams.get("id") {/* returns "12454812" */}
    {"\n  "}&lt;/div&gt;
    {"\n  "}
    );

    {"\n"}
    {"}"}
  </code>
</pre>

          <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">useRouteMatch Hook</h2>
          <p>Returns a match object that includes all details about how the current URL corresponds to the Route path.</p>
          <h2 className="text-2xl text-gray-800 font-semibold mt-5">Properties:</h2>
          <ul className="list-[square] space-y-1 mt-5">
            <li><span className="font-semibold">params</span>: An object holding the dynamic segment of the URL.</li>
            <li><span className="font-semibold">path</span>: A string representing the Route path pattern.</li>
            <li><span className="font-semibold">isExact</span>: A boolean that indicates whether the entire URL exactly matches the given Route path.</li>
            <li><span className="font-semibold">URL</span>: A string containing the matched part of the URL, useful for nested {'<Link />'} or {'<Route />'} components.</li>
          </ul>

          <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Syntax</h2>
       <pre className="bg-gray-200 text-sm p-4 rounded-lg overflow-x-auto mt-5">
  <code>
    <span className="text-purple-600">import</span>{" "}
    <span className="text-gray-800">{`{ useRouteMatch }`}</span>{" "}
    <span className="text-purple-600">from</span>{" "}
    <span className="text-green-600">"react-router-dom"</span>
    <span className="text-pink-500">;</span>

    {"\n"}
    <span className="text-gray-500">// Inside functional component</span>

    {"\n"}
    <span className="text-purple-600">export default function</span>{" "}
    <span className="text-blue-600">SomeComponent</span>
    <span className="text-gray-800">(props)</span>
    <span className="text-gray-800">{`{`}</span>

    {"\n"}
    {"  "}
    <span className="text-purple-600">const</span>{" "}
    <span className="text-blue-600">match</span>{" "}
    <span className="text-pink-500">=</span>{" "}
    <span className="text-blue-600">useRouteMatch</span>
    <span className="text-gray-800">()</span>
    <span className="text-pink-500">;</span>

    {"\n"}
    <span className="text-gray-800">{`}`}</span>
  </code>
</pre>

         <p className="mt-5">The useRouterMatch hook is useful for handling nested Routes and Links. In the example below, the Profile page is rendered when the current URL fully matches the specified Route path. If not, an alternate Route is rendered, displaying the User’s followers page when the URL matches "profile/:userName/followers".</p>
      <pre className="bg-gray-200 text-sm p-4 rounded-lg overflow-x-auto mt-5">
  <code>
    <span className="text-gray-500">// Filename - Profile.js</span>

    {"\n\n"}
    <span className="text-purple-600">import</span>{" "}
    <span className="text-gray-800">{`{ Link, Route, useParams, useMatch }`}</span>{" "}
    <span className="text-purple-600">from</span>{" "}
    <span className="text-green-600">"react-router-dom"</span>
    <span className="text-pink-500">;</span>

    {"\n\n"}
    <span className="text-purple-600">export default function</span>{" "}
    <span className="text-blue-600">Profile</span>
    <span className="text-gray-800">(props)</span>
    <span className="text-gray-800">{`{`}</span>

    {"\n"}
    {"  "}
    <span className="text-purple-600">const</span>{" "}
    <span className="text-gray-800">{`{ userName }`}</span>{" "}
    <span className="text-pink-500">=</span>{" "}
    <span className="text-blue-600">useParams</span>
    <span className="text-gray-800">()</span>
    <span className="text-pink-500">;</span>

    {"\n"}
    {"  "}
    <span className="text-purple-600">const</span>{" "}
    <span className="text-blue-600">match</span>{" "}
    <span className="text-pink-500">=</span>{" "}
    <span className="text-blue-600">useMatch</span>
    <span className="text-gray-800">("/profile/:userName")</span>
    <span className="text-pink-500">;</span>

    {"\n\n"}
    {"  "}
    <span className="text-purple-600">return</span>{" "}
    <span className="text-gray-800">(</span>

    {"\n"}
    {"    "}
    <span className="text-blue-600">&lt;div&gt;</span>

    {"\n"}
    {"      "}
    <span className="text-gray-800">{`{match ? (`}</span>

    {"\n"}
    {"        "}
    <span className="text-blue-600">&lt;div&gt;</span>

    {"\n"}
    {"          "}
    <span className="text-blue-600">&lt;h1&gt;</span>
    Profile of {`{userName}`}
    <span className="text-blue-600">&lt;/h1&gt;</span>

    {"\n\n"}
    {"          "}
    <span className="text-blue-600">&lt;p&gt;</span>
    This is the profile page of {`{userName}`}
    <span className="text-blue-600">&lt;/p&gt;</span>

    {"\n\n"}
    {"          "}
    <span className="text-blue-600">&lt;Link</span>{" "}
    <span className="text-green-600">to</span>
    <span className="text-pink-500">=</span>
    <span className="text-gray-800">{`"followers"`}</span>
    <span className="text-blue-600">&gt;</span>
    Followers
    <span className="text-blue-600">&lt;/Link&gt;</span>

    {"\n"}
    {"        "}
    <span className="text-blue-600">&lt;/div&gt;</span>

    {"\n"}
    {"      "}
    <span className="text-gray-800">) : (</span>

    {"\n"}
    {"        "}
    <span className="text-blue-600">&lt;Route</span>{" "}
    <span className="text-green-600">path</span>
    <span className="text-pink-500">="followers"</span>{" "}
    <span className="text-green-600">element</span>
    <span className="text-pink-500">=</span>
    <span className="text-gray-800">{`{<div>My followers</div>}`}</span>
    <span className="text-blue-600"> /&gt;</span>

    {"\n"}
    {"      "}
    <span className="text-gray-800">)&rbrac;</span>

    {"\n"}
    {"    "}
    <span className="text-blue-600">&lt;/div&gt;</span>

    {"\n"}
    {"  "}
    <span className="text-gray-800">)</span>
    <span className="text-pink-500">;</span>

    {"\n"}
    <span className="text-gray-800">{`}`}</span>
  </code>
</pre>

        <p className="mt-5">Ensure that you are using React version 16.8 or above to utilize these react-router hooks. Additionally, these hooks must be used within functional components.</p>


     <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Why use React Router Hooks</h2>
    <p className="mb-3">By default, when using the component prop ({'<Route component={} />'}), React Router provides three props—match, location, and history—to the rendered component. This means that if you need to access the history or location instances, you can do so through these default props.</p>
    <p>If you pass custom props to your component, the default props are overridden. Consequently, the history object provided by React Router is no longer accessible. Prior to React Router 5, the only way to pass location, match, and history explicitly was by using the render prop ({'<Route render={} />'}).</p>
   <pre className="bg-gray-200 text-sm p-4 rounded-lg overflow-x-auto mt-5">
  <code>
    <span className="text-gray-500">// Filename - App.js</span>

    {"\n\n"}
    <span className="text-purple-600">import</span>{" "}
    <span className="text-green-600">"./styles.css"</span>
    <span className="text-pink-500">;</span>

    {"\n"}
    <span className="text-purple-600">import</span>{" "}
    <span className="text-gray-800">{`{ Route, Switch }`}</span>{" "}
    <span className="text-purple-600">from</span>{" "}
    <span className="text-green-600">"react-router-dom"</span>
    <span className="text-pink-500">;</span>

    {"\n"}
    <span className="text-purple-600">import</span>{" "}
    <span className="text-blue-600">About</span>{" "}
    <span className="text-purple-600">from</span>{" "}
    <span className="text-green-600">"./components/About"</span>
    <span className="text-pink-500">;</span>

    {"\n\n"}
    <span className="text-purple-600">export default function</span>{" "}
    <span className="text-blue-600">App</span>
    <span className="text-gray-800">()</span>
    <span className="text-gray-800">{`{`}</span>

    {"\n"}
    {"  "}
    <span className="text-purple-600">return</span>{" "}
    <span className="text-gray-800">(</span>

    {"\n"}
    {"    "}
    <span className="text-blue-600">&lt;div</span>{" "}
    <span className="text-green-600">className</span>
    <span className="text-pink-500">="App"</span>
    <span className="text-blue-600">&gt;</span>

    {"\n"}
    {"      "}
    <span className="text-blue-600">&lt;Switch&gt;</span>

    {"\n\n"}
    {"      "}
    <span className="text-gray-500">
      // In this case, you have to use render instead of component
    </span>

    {"\n"}
    {"      "}
    <span className="text-gray-500">
      // and explicitly pass the props
    </span>

    {"\n\n"}
    {"      "}
    <span className="text-blue-600">&lt;Route</span>{" "}
    <span className="text-green-600">path</span>
    <span className="text-pink-500">="/about"</span>{" "}
    <span className="text-green-600">render</span>
    <span className="text-pink-500">=</span>
    <span className="text-gray-800">{`{({ match, location, history }) => (`}</span>

    {"\n"}
    {"        "}
    <span className="text-blue-600">&lt;About</span>{" "}
    <span className="text-green-600">match</span>
    <span className="text-pink-500">=</span>
    <span className="text-gray-800">{`{match}`}</span>{" "}
    <span className="text-green-600">location</span>
    <span className="text-pink-500">=</span>
    <span className="text-gray-800">{`{location}`}</span>{" "}
    <span className="text-green-600">history</span>
    <span className="text-pink-500">=</span>
    <span className="text-gray-800">{`{history}`}</span>{" "}
    <span className="text-green-600">someProps</span>
    <span className="text-pink-500">=</span>
    <span className="text-gray-800">{`{{ id: 21254 }}`}</span>
    <span className="text-blue-600"> /&gt;</span>

    {"\n"}
    {"      "}
    <span className="text-gray-800">{`)}`}</span>

    {"\n"}
    {"      "}
    <span className="text-blue-600">/&gt;</span>

    {"\n\n"}
    {"      "}
    <span className="text-blue-600">&lt;/Switch&gt;</span>

    {"\n"}
    {"    "}
    <span className="text-blue-600">&lt;/div&gt;</span>

    {"\n"}
    {"  "}
    <span className="text-gray-800">)</span>
    <span className="text-pink-500">;</span>

    {"\n"}
    <span className="text-gray-800">{`}`}</span>
  </code>
</pre>

    <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">React Router 5 Hooks:</h2>
    <p>With React Router 5, passing custom props to a component is straightforward. Although match, location, and history are no longer automatically forwarded, React Router 5 introduces hooks that eliminate the need for prop drilling. You can access the history object via useHistory, the location object via useLocation, and the match object via useRouteMatch without explicitly passing them as props.</p>
    <pre className="bg-gray-200 text-sm p-4 rounded-lg overflow-x-auto mt-5">
  <code>
    <span className="text-gray-500">// Filename - App.js</span>

    {"\n\n"}
    <span className="text-purple-600">import</span>{" "}
    <span className="text-green-600">"./styles.css"</span>
    <span className="text-pink-500">;</span>

    {"\n"}
    <span className="text-purple-600">import</span>{" "}
    <span className="text-gray-800">{`{ Route, Switch }`}</span>{" "}
    <span className="text-purple-600">from</span>{" "}
    <span className="text-green-600">"react-router-dom"</span>
    <span className="text-pink-500">;</span>

    {"\n"}
    <span className="text-purple-600">import</span>{" "}
    <span className="text-blue-600">Home</span>{" "}
    <span className="text-purple-600">from</span>{" "}
    <span className="text-green-600">"./components/Home"</span>
    <span className="text-pink-500">;</span>

    {"\n"}
    <span className="text-purple-600">import</span>{" "}
    <span className="text-blue-600">ContactUs</span>{" "}
    <span className="text-purple-600">from</span>{" "}
    <span className="text-green-600">"./components/ContactUs"</span>
    <span className="text-pink-500">;</span>

    {"\n"}
    <span className="text-purple-600">import</span>{" "}
    <span className="text-blue-600">LogIn</span>{" "}
    <span className="text-purple-600">from</span>{" "}
    <span className="text-green-600">"./components/LogIn"</span>
    <span className="text-pink-500">;</span>

    {"\n"}
    <span className="text-purple-600">import</span>{" "}
    <span className="text-blue-600">AboutUs</span>{" "}
    <span className="text-purple-600">from</span>{" "}
    <span className="text-green-600">"./components/AboutUs"</span>
    <span className="text-pink-500">;</span>

    {"\n\n"}
    <span className="text-purple-600">export default function</span>{" "}
    <span className="text-blue-600">App</span>
    <span className="text-gray-800">()</span>
    <span className="text-gray-800">{`{`}</span>

    {"\n"}
    {"  "}
    <span className="text-purple-600">return</span>{" "}
    <span className="text-gray-800">(</span>

    {"\n"}
    {"    "}
    <span className="text-blue-600">&lt;div</span>{" "}
    <span className="text-green-600">className</span>
    <span className="text-pink-500">="App"</span>
    <span className="text-blue-600">&gt;</span>

    {"\n"}
    {"      "}
    <span className="text-blue-600">&lt;Switch&gt;</span>

    {"\n"}
    {"        "}
    <span className="text-blue-600">&lt;Route</span>{" "}
    <span className="text-green-600">path</span>
    <span className="text-pink-500">="/"</span>{" "}
    <span className="text-green-600">exact</span>
    <span className="text-blue-600">&gt;</span>

    {"\n"}
    {"          "}
    <span className="text-blue-600">&lt;Home</span>{" "}
    <span className="text-green-600">someProps</span>
    <span className="text-pink-500">=</span>
    <span className="text-gray-800">{`{{ id: 54545454 }}`}</span>
    <span className="text-blue-600"> /&gt;</span>

    {"\n"}
    {"        "}
    <span className="text-blue-600">&lt;/Route&gt;</span>

    {"\n\n"}
    {"        "}
    <span className="text-blue-600">&lt;Route</span>{" "}
    <span className="text-green-600">path</span>
    <span className="text-pink-500">="/about"</span>
    <span className="text-blue-600">&gt;</span>
    {"\n"}
    {"          "}
    <span className="text-blue-600">&lt;AboutUs /&gt;</span>
    {"\n"}
    {"        "}
    <span className="text-blue-600">&lt;/Route&gt;</span>

    {"\n\n"}
    {"        "}
    <span className="text-blue-600">&lt;Route</span>{" "}
    <span className="text-green-600">path</span>
    <span className="text-pink-500">="/contact-us"</span>
    <span className="text-blue-600">&gt;</span>
    {"\n"}
    {"          "}
    <span className="text-blue-600">&lt;ContactUs /&gt;</span>
    {"\n"}
    {"        "}
    <span className="text-blue-600">&lt;/Route&gt;</span>

    {"\n\n"}
    {"        "}
    <span className="text-blue-600">&lt;Route</span>{" "}
    <span className="text-green-600">path</span>
    <span className="text-pink-500">="/log-in"</span>
    <span className="text-blue-600">&gt;</span>
    {"\n"}
    {"          "}
    <span className="text-blue-600">&lt;LogIn /&gt;</span>
    {"\n"}
    {"        "}
    <span className="text-blue-600">&lt;/Route&gt;</span>

    {"\n"}
    {"      "}
    <span className="text-blue-600">&lt;/Switch&gt;</span>

    {"\n"}
    {"    "}
    <span className="text-blue-600">&lt;/div&gt;</span>

    {"\n"}
    {"  "}
    <span className="text-gray-800">)</span>
    <span className="text-pink-500">;</span>

    {"\n"}
    <span className="text-gray-800">{`}`}</span>
  </code>
</pre>
        </div>
    )
}

export default ReactRouterHooks; 