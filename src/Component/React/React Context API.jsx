import React from "react";

const ReactContext = () => {
    return(
        <div className="max-w-4xl p-6 mt-10">
            <h1 className="text-3xl text-blue-500 font-semibold mb-3">React Context API</h1>
           <p>The <span className="text-red-400">Context API</span> in React lets you share data between components without having to manually pass props at each level. It creates a global data state that every component can access.</p>
           
           <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">What is Context API?</h2>
            <p>The <span className="text-red-400">Context API</span> allows you to use global variables anywhere in your application without prop drilling. It’s especially helpful for sharing state across deeply nested components. It’s lightweight and simple to use — you just call React.createContext() to create a context. There’s no need for extra dependencies or libraries like Redux for state management.</p>
            
        <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Why is Context API used?</h2>
        <p><span className="text-red-400">Prop drilling</span> occurs when props must be passed down through many nested components before they reach the target component, which can clutter the code and reduce performance. The React Context API fixes this by creating a shared set of values that any component can consume without forwarding props manually. Because it’s built into React, it’s easier to use than external state libraries like Redux.</p>
         
         <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Why is Context API used?</h2>
        <p>The <span className="text-red-400">Context API</span> in React eliminates prop drilling — a situation where you must pass data through many component levels to reach the one that needs it. By creating a shared context, data can be accessed directly by any component without involving intermediate ones, which simplifies the code. Because it’s built into React and doesn’t require extra setup, it’s generally easier to use than Redux for simpler state needs.</p>
         
         <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Working</h2>
         <p>Working with <span className="text-red-400">Context API</span> begins by creating a context with <span className="text-red-400">React.createContext()</span>. The resulting context has a Provider that wraps parts of your app and provides shared values, and a Consumer that lets child components access those values.</p>
        <ul className="list-[square] list-inside mt-5">
            <li><span className="font-bold">Provider</span>: This is used to provide the context to components.</li>
            <li><span className="font-bold">Consumer</span>: This is used to consume the context value in child components.</li>
        </ul>

        <h1 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Benefits of Context API over React Redux</h1>
        <ul className="list-[square] list-inside space-y-1 mt-5">
            <li>Redux tends to be more verbose, requiring multiple files and boilerplate to support a new feature, whereas Context <span className="ml-5">API</span> lets you make similar changes with much less setup.</li>
            <li>React enforces one-way data binding where state moves down through components, and Context maintains this <span className="ml-5">pattern</span> Redux, by introducing actions and a central store, shifts how data updates propagate, making the flow more <span className="ml-5">complex</span> compared to simple one-way binding.</li>
            <li>Context lets you create multiple independent contexts to manage different bits of data, whereas Redux keeps all <span className="ml-5">state</span> in a single global store.</li>
        </ul>

        <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Implement Context API in React</h2>
         <p>Run the following command to set up a React project:</p>
         <pre className="text-green-400 bg-gray-900 p-4 rounded-lg mt-5">
            <code>
                {`npx create-react-app context-api-demo`}
            </code>
         </pre>

         <p className="mt-5 mb-3">Once the project folder is created, navigate into it using this command:</p>
         <pre className="text-green-400 bg-gray-900 p-4 rounded-lg mt-5">
            <code>
                {`cd context-api-demo`}
            </code>
         </pre>
          <p className="mt-5">Create a <span className="text-red-400">Context.js</span> file to initialize your context, and a WelcomePage.js file where the context will be consumed. </p>
          
          <h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">Approach</h2>
          <p>We’ll leverage the Context API to render the user’s name and identification on the screen.</p>
          <p className="mt-5">First, create a file called Context.js in the src directory and define your UserContext there, making sure to extract the Provider and Consumer. Then build a simple component that shows the user’s name and ID from the context. Finally, wrap your {'<App/>'} component with the context provider in index.js, passing the name and ID as the provider’s values — otherwise nothing will display.</p>
           <p className="mt-5">Add the following code into each corresponding file:</p>
           <ul className="list-[square] list-inside space-y-1 mt-5">
            <li><span className="text-red-400">Context.js</span>: We create the consumer and provider in this file</li>
            <li><span className="text-red-400">WelocomePage.js</span>: The consumer consumes the value in this file</li>
            <li><span className="text-red-400">Index.js</span>: The provider is given to the application in this file</li>
            <li><span className="text-red-400">App.js</span>: The components are imported in this file and then rendered on the webpage</li>
           </ul>

           <pre className="text-green-400 bg-gray-900 p-4 rounded-lg mt-5">
            <code>
                {`// App.js
import React from 'react';
import WelcomePage from './WelcomePage';
import UserProvider from './Context';

const App = () => {
  return (
    <UserProvider>
      <WelcomePage />
    </UserProvider>
  );
};

export default App;`}
            </code>
           </pre>


           <p className="mt-5">Use the command below in your project’s root directory to run the application.</p>
           <pre className="text-green-400 bg-gray-900 p-4 rounded-lg mt-5">
            <code>
                {`npm start`}
            </code>
           </pre>

           












        
        </div>

    )
}

export default ReactContext;