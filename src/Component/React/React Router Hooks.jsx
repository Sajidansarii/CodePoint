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
           <pre className="text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5">
            <code>
                {`import { useHistory } from "react-router-dom";
// Inside a functional component
export default function SomeComponent(props){
    // The useHistory() hook returns the history
    // object used by React Router
    const history = useHistory();
}`}
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
             <pre className="text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5">
                <code>
                    {`// Filename - LogIn.js

import { useHistory } from "react-router-dom";
import { useState } from "react";

// A function that authenticates the users
function authenticateUser(userName, password) {
    // Some code to authenticate the user
}

// Hooks must be used inside a functional component
export default function Login(props) {
    //Creating a state variable
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    // Accessing the history instance created by React
    const history = useHistory();

    // Handle the user clicks the login button
    const handleClick = () => {
        // Authenticate the user
        authenticateUser(userName, password);

        // When the authentication is done
        // Redirect the user to the \`/profile/\${userName}\` page
        // the below code adds the \`/profile/\${userName}\` page
        // to the history stack.
        history.push(\`/profile/\${userName}\`);
    };

    return (
        <div>
            <input
                type="text"
                value={userName}
                onChange={(e) => {
                    setUserName(e.target.value);
                }}
                required
            />
            <input
                type="text"
                value={password}
                onChange={(e) => {
                    setPassword(e.target.value);
                }}
                required
            />
            <button type="submit" onClick={handleClick}>
                {" "}
                Log In{" "}
            </button>
        </div>
    );
}`}
                </code>
             </pre>

             <p className="mt-10">In the Login component, the handleClick function receives the username and password and calls the authenticateUser function to authenticate the user. After successful authentication, the user is redirected to /profile/John. The useHistory() hook provides access to the history instance created by React Router, and invoking history.push("/profile/John") adds the route to the history stack, triggering navigation to the specified path.</p>
              
              <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">useParams Hook</h2>
              <p>This hook returns an object that contains all parameters defined in the current URL.</p>
             <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Syntax</h2>
            <pre className="text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5">
                <code>
                    {`import { useParams } from "react-router-dom";
// Inside a functional component
export default function SomeComponent(props){
    const params = useParams();
}`}
                </code>
            </pre>

            <p className="mt-5">The URL parameters are defined within the Route’s URL pattern. For instance,</p>
             <pre className="text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5">
                <code>
                    {`<Route path="/profile/:userName" component={Profile} />`}
                </code>
             </pre>

             <p className="mt-5">The colon (:) in the route path /profile/:userName denotes that userName is a route parameter. For instance, in /profile/johndoe, the parameter userName has the value johndoe. The useParams() hook will return:</p>
             <pre className="text-green-400 bg-gray-900 p-4 rounded-lg mt-5">
                <code>
                    {`{
   userName: "johndoe"
}`}
                </code>
             </pre>

             <p className="mt-5">Post-login, the application should redirect the user to /profile/userName, where userName is determined by the user’s input. To achieve this dynamic routing, the App.js file requires a minor update.</p>
            <pre className="text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5">
                <code>
                    {`// Filename - App.js

import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import ContactUs from "./components/ContactUs";
import LogIn from "./components/LogIn";
import AboutUs from "./components/AboutUs";
import Profile from "./components/Profile";

export default function App() {
    return (
        <div className="App">
            <Switch>
                <Route path="/" exact>
                    <Home someProps={{ id: 54545454 }} />
                </Route>
                <Route path="/about">
                    <AboutUs />
                </Route>
                <Route path="/contact-us">
                    <ContactUs />
                </Route>
                <Route path="/log-in">
                    <LogIn />
                </Route>
                {/* userName is now a variable */}
                <Route path="/profile/:userName">
                    <Profile />
                </Route>
            </Switch>
        </div>
    );
}`}
                </code>
            </pre>


            <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">useLocation Hook</h2>
            <p><span className="text-red-400 bg-gray-50">useLocation()</span> returns a location object that reflects the current URL in a React Router application. The object is immutable, and updates automatically when the URL changes. Its search property provides access to the URL’s query string, which can be used for conditional logic or data extraction.</p>
           
           <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Syntax</h2>
          <pre className="text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5">
            <code>
                {`import { useLocation } from "react-router-dom";
// Inside functional component
export default function SomeComponent(props){
    const location = useLocation();
}`}
            </code>
          </pre>

          <p className="mt-5 mb-3">While history.location represents the current location, it is mutable. The location object returned by useLocation() is immutable, making it the recommended approach for accessing the current route in a React component.</p>
          <p>The useLocation() hook is helpful for accessing query parameters in the URL. In the example below, we use useLocation() to get the URL and then parse the query parameters using the URLSearchParams constructor.</p>
          <pre className="text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5">
            <code>
                {`// Filename - Profile.js

import { useLocation } from "react-router-dom";

export default function Profile(props) {
    const location = useLocation();

    // location.search returns a string containing all
    // the query parameters.
    // Suppose the URL is "some-website.com/profile?id=12454812"
    // then location.search contains "?id=12454812"
    // Now you can use the URLSearchParams API so that you can
    // extract the query params and their values
    const searchParams = new URLSearchParams(
        location.search
    );

    return (
        <div>
            {
                // Do something depending on the id value
                searchParams.get("id") // returns "12454812"
            }
        </div>
    );
}`}
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
         <pre className="text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5">
            <code>
                {`import { useRouteMatch } from "react-router-dom";
// Inside functional component
export default function SomeComponent(props) {
    const match = useRouteMatch();
}`}
            </code>
         </pre>

         <p className="mt-5">The useRouterMatch hook is useful for handling nested Routes and Links. In the example below, the Profile page is rendered when the current URL fully matches the specified Route path. If not, an alternate Route is rendered, displaying the User’s followers page when the URL matches "profile/:userName/followers".</p>
        <pre className="text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5">
            <code>
                {`// Filename - Profile.js

import {
    Link,
    Route,
    useParams,
    useRouteMatch,
} from "react-router-dom";

export default function Profile(props) {
    // useParams() returns an object of the parameters
    // defined in the url of the page
    // For example, the path given in the Route component
    // consists of an "userName" parameter
    // in this form ---> "/profile/:userName"
    const { userName } = useParams();
    const match = useRouteMatch();

    return (
        <div>
            {match.isExact ? (
                <div>
                    <h1> Profile of {userName}</h1>

                    <p>
                        {" "}
                        This is the profile page of{" "}
                        {userName}
                    </p>

                    <Link to={\`\${match.url}/followers\`}>
                        Followers
                    </Link>
                </div>
            ) : (
                <Route path={\`\${match.url}/followers\`}>
                    <div>My followers</div>
                </Route>
            )}
        </div>
    );
}`}
            </code>
        </pre>

        <p className="mt-5">Ensure that you are using React version 16.8 or above to utilize these react-router hooks. Additionally, these hooks must be used within functional components.</p>


     <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Why use React Router Hooks</h2>
    <p className="mb-3">By default, when using the component prop ({'<Route component={} />'}), React Router provides three props—match, location, and history—to the rendered component. This means that if you need to access the history or location instances, you can do so through these default props.</p>
    <p>If you pass custom props to your component, the default props are overridden. Consequently, the history object provided by React Router is no longer accessible. Prior to React Router 5, the only way to pass location, match, and history explicitly was by using the render prop ({'<Route render={} />'}).</p>
    <pre className="text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5">
        <code>
            {`// Filename - App.js

import "./styles.css";
import { Route, Switch } from "react-router-dom";
import About from "./components/About";

export default function App() {
    return (
        <div className="App">
            <Switch>
                // In this case, you have to use render //
                instead of component and explicitly // pass
                the props
                <Route
                    path="/about"
                    render={({
                        match,
                        location,
                        history,
                    }) => (
                        <About
                            match={match}
                            location={location}
                            history={history}
                            someProps={{ id: 21254 }}
                        />
                    )}
                />
            </Switch>
        </div>
    );
}`}
        </code>
    </pre>

    <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">React Router 5 Hooks:</h2>
    <p>With React Router 5, passing custom props to a component is straightforward. Although match, location, and history are no longer automatically forwarded, React Router 5 introduces hooks that eliminate the need for prop drilling. You can access the history object via useHistory, the location object via useLocation, and the match object via useRouteMatch without explicitly passing them as props.</p>
    <pre className="text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5">
        <code>
            {`// Filename - App.js

import "./styles.css";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import ContactUs from "./components/ContactUs";
import LogIn from "./components/LogIn";
import AboutUs from "./components/AboutUs";

export default function App() {
    return (
        <div className="App">
            <Switch>
                <Route path="/" exact>
                    <Home someProps={{ id: 54545454 }} />
                </Route>
                <Route path="/about">
                    <AboutUs />
                </Route>
                <Route path="/contact-us">
                    <ContactUs />
                </Route>
                <Route path="/log-in">
                    <LogIn />
                </Route>
            </Switch>
        </div>
    );
}`}
        </code>
    </pre>



        </div>
    )
}

export default ReactRouterHooks; 