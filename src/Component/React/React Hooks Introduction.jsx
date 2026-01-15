import React from "react";

const HooksIntroduction = () => {
    
    const data = [
        {Feature:'State Management', ClassComponents:'this.state and lifecycle methods', ReactHooks:'useState and useEffect'},
        {Feature:'Code Structure', ClassComponents:'Spread across methods, can be complex', ReactHooks:'Smaller, focused functions'},
        {Feature:'Reusability', ClassComponents:'Difficult to reuse logic', ReactHooks:'Easy to create and reuse custom hooks'},
        {Feature:'Learning Curve', ClassComponents:'Familiar to OOP developers', ReactHooks:'Requires different mindset than classes'},
        {Feature:'Error Boundaries', ClassComponents:'Supported', ReactHooks:'Not currently supported'},
        {Feature:'Third-party Libraries', ClassComponents:'Some libraries rely on them', ReactHooks:'May not all be compatible yet'},
    ];

    return(
        <div className="max-w-4xl p-6 mt-10">
            <h1 className="lg:text-3xl text-2xl text-blue-500 font-semibold mb-3">React Hooks Introduction</h1>
            <p>Introduced in React 16.8, Hooks revolutionized React development. They’re used in over 80% of modern React projects to handle state and lifecycle tasks. By removing the need for class components, Hooks simplify code, enhance readability, and enable a functional programming style that makes functional components extremely capable.</p>
             
             <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Types of React Hooks</h2>
             <p>React includes a variety of <span className="text-red-400">hooks</span> that allow developers to handle state, side effects, and additional functionality within functional components. The following are among the most frequently used hooks:</p>
             
             <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">State Hooks</h2>
             <p>State hooks, like <span className="text-red-400">useState</span> and useReducer, let functional components handle state more efficiently and in a modular way. They make managing component-level state easier and cleaner compared to using class components.</p>
             <p>useState is a hook that lets you create state variables in functional components. You can use it to access and update the component’s state.</p>
            <h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">Syntax</h2>
            <pre className="text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5">
                <code>
                    {`const [state, setState] = useState(initialState);`}
                </code>
            </pre>

            <ul className="list-[square] space-y-1 mt-5 ">
                <li><span className="font-bold">state</span>: The current value of the state.</li>
                <li><span className="font-bold">setState</span>: A function used to update the state.</li>
                <li><span className="font-bold">InitialState</span>: The initial value of the state, which can be a primitive type or an <span className="lg:ml-0 ml-5">object/array</span></li>
            </ul>

            <p className="mt-10"><span className="text-red-400 bg-gray-50 px-1">useReducer</span> is an advanced hook for managing complex state in functional components. It’s useful when state has multiple parts or requires complicated updates.</p>
             
             <h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">Syntax</h2>
             <pre className="text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5">
                <code>
                    {`const [state, dispatch] = useReducer(reducer, initialState);`}
                </code>
             </pre>

             <ul className="list-[square] space-y-1 mt-5">
                <li><span className="font-bold">state</span>: The current state value.</li>
                <li><span className="font-bold">dispatch</span>: A function used to dispatch actions that will update the state.</li>
                <li><span className="font-bold">reducer</span>: A function that defines how the state should change based on the <span className="lg:ml-0 ml-5">dispatched</span> action.</li>
                <li><span className="font-bold">initialState</span>: The initial state value.</li>
             </ul>

             <p className="mt-5">Here’s an example to understand how the state hook works.</p>
             <pre className="text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5">
                <code>
                    {`import React, { useState } from "react";

function App() {
    const [count, setCount] = useState(0);
    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);

    return (
        <div>
            <h1>Count: {count}</h1> {/* Display the current count */}
            <button onClick={increment}>Increment</button> {/* Increment the count */}
            <button onClick={decrement}>Decrement</button> {/* Decrement the count */}
        </div>
    );
}

export default App;`}
                </code>
             </pre>

             <p className="mt-5">The useState hook declares state in functional components. count stores the state, and setCount updates it.</p>
              <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Context Hooks</h2>
              <p>The <span className="text-red-400">useContext</span> hook lets functional components easily get values from the React Context API. This way, you don’t have to pass props through each level of the component tree.</p>
              <pre className="text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5">
                <code>
                    {`const contextValue = useContext(MyContext);`}
                </code>
              </pre>

             <ul className="list-[square] space-y-1 mt-5">
                <li>The <span className="text-red-400">useContext</span> hook accepts a context object, like MyContext, and gives you its current value.</li>
                <li>The value stored in <span className="text-red-400">contextValue</span> comes from the nearest <span className="text-red-400">{'<MyContext.Provider>'}</span> in the component tree, making it easy for the component to access context data without prop drilling.</li>
             </ul>

             <p className="mt-5">Let’s explore the functionality of the context hook using the following example.</p>
            <pre className="text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5 mb-3">
                <code>
                    {`import React, { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

function App() {
    const [theme, setTheme] = useState("light");

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    };

    return (
        <ThemeContext.Provider value={theme}>
            <div>
                <h1>Current Theme: {theme}</h1>
                <button onClick={toggleTheme}>Toggle Theme</button>
                <ThemeDisplay />
            </div>
        </ThemeContext.Provider>
    );
}

function ThemeDisplay() {
    const theme = useContext(ThemeContext);

    return <h2>Theme from Context: {theme}</h2>;
}

export default App;`}
                </code>
            </pre>

            <p className="mt-5">useContext lets you access context values, so you can share data between components without passing props through every level. The Provider makes the context value available to all child components in the tree.</p>
         

         <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Effect Hooks</h2>
        <p className="mb-3">Effect hooks—including <span className="text-red-400">useEffect</span>, useLayoutEffect, and useInsertionEffect—allow functional components to manage side effects in a modular and efficient manner.</p>
        <p>The useEffect hook in React helps functional components handle side effects. You can use it for tasks like fetching data, updating the DOM, or setting up subscriptions—things that used to be done in class lifecycle methods like componentDidMount or componentDidUpdate.</p>
        <h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">Syntax</h2>
        <pre className="text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5">
            <code>
                {`useEffect(() => {
    // Side effect logic here
}, [dependencies]);`}
            </code>
        </pre>

        <ul className="list-[square] space-y-1 mt-5">
         <li>The <span className="text-red-400">useEffect</span> hook, written as useEffect <span className="text-red-400">{'(() => { ... }, [dependencies])'}</span>;, triggers side effects after the component’s render phase.</li>
         <li>The effect is triggered based on changes in the specified dependency values.</li>   
        </ul>

          <p className="mt-10">The <span className="text-red-400">useLayoutEffect</span> hook runs before the browser paints, allowing layout measurements and updates for smoother visuals.</p>          
        
        <h2 className="text-2xl text-gray-800 font-semibold mt-5">Syntax</h2>
        <pre className="text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5">
            <code>
                {`useLayoutEffect(() => {
  // Logic to manipulate layout or measure DOM elements
}, [dependencies]);`}
            </code>
        </pre>

        <p className="mt-5">The <span className="text-red-400">useInsertionEffect</span> hook injects styles before a component renders, useful for SSR and styling libraries.</p>
       
       <h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">Syntax</h2>
      <pre className="text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5">
        <code>
            {`useInsertionEffect(() => {
    // Logic to inject styles or manipulate stylesheets
}, [dependencies]);`}
        </code>
      </pre>

      <p className="mt-5">Let’s check out an example to see the effect hook in action.</p>
     <pre className="text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5">
        <code>
            {`import React, { useState, useEffect } from "react";

function App() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = \`Count: \${count}\`;
        console.log(\`Effect ran. Count is: \${count}\`);

        return () => {
            console.log("Cleanup for previous effect");
            document.title = "React App";
        };
    }, [count]);

    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={() => setCount(count + 1)}>Increment Count</button>
        </div>
    );
}

export default App;`}
        </code>
     </pre>

     <ul className="list-[square] space-y-1 mt-5">
        <li>The useEffect hook is used to handle side effects in functional components, including data retrieval, managing subscriptions, or directly manipulating the DOM.</li>
        <li>The cleanup function is used to remove resources, like timers or event listeners, when a component is removed or before the effect runs again.</li>
     </ul>

     <h1 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Performance Hook</h1>
     <p className="mb-5">Performance hooks, such as useMemo and useCallback, help make React apps faster by preventing unnecessary re-renders or repeated calculations.</p>
     <p>The useMemo hook memoizes costly computations, recalculating them only when dependencies change to boost performance.</p>
     <h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">Syntax</h2>
     <pre className="text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5">
        <code>
            {`const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);`}
        </code>
     </pre>

     <p className="mt-5">useCallback is a React hook that remembers a function so it doesn’t get recreated on every render, unless its dependencies change. This is useful when passing functions to child components to avoid unnecessary re-renders.</p>
      
      <h2 className="text-2xl text-gray-800 font-semibold mt-5">Syntax</h2>
     <pre className="text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5">
        <code>
            {`const memoizedCallback = useCallback(() => { doSomething(a, b); }, [a, b]);`}
        </code>
     </pre>

     <ul className="list-[square] space-y-1 mt-5">
        <li>With useMemo, num * 2 is remembered and only recalculated when num changes, so it doesn’t waste time recalculating every render.</li>
     </ul>

     <p className="mt-5">Here’s an example to understand how the performance hook works.</p>
     <pre className="text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5">
        <code>
            {`import React, { useState, useMemo } from "react";

function App() {
    const [count, setCount] = useState(0);
    const [text, setText] = useState("");

    const expensiveCalculation = useMemo(() => {
        console.log("Expensive calculation...");
        return count * 2;
    }, [count]);

    return (
        <div>
            <h1>Count: {count}</h1>
            <h2>Expensive Calculation: {expensiveCalculation}</h2>
            <button onClick={() => setCount(count + 1)}>Increment Count</button>

            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Type something"
            />
        </div>
    );
}

export default App;`}
        </code>
     </pre>

     <ul className="list-[square] space-y-1 mt-5">
        <li>The useMemo hook caches the result of expensiveCalculation and recalculates it solely when the count dependency Changes. Changes in text do not trigger a recomputation. console.log demonstrates the memoization in action.</li>
     </ul>

     <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Resource Hooks(useFetch)</h2>
     <p>The <span className="text-red-400">useFetch hook</span> is typically custom-built to retrieve data from an API. It leverages <span className="text-red-400">useEffect</span> to perform the fetch when the component mounts or its dependencies change.</p>
    
    <h2 className="text-2xl text-gray-800 font-semibold mt-5">Syntax</h2>
    <pre className="text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5">
        <code>
            {`const { data, loading, error } = useFetch(url);`}
        </code>
    </pre>

    <ul className="list-[square] space-y-1 mt-5">
        <li>The useFetch hook is a custom React hook designed to retrieve data from a specified URL.</li>
        <li>It uses useEffect to fetch data whenever the URL changes and updates the state with the new data.</li>
    </ul>

    <p className="mt-5">Let’s explore the functionality of a resource hook using the following example.</p>
    
    <pre className="text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5">
        <code>
            {`import React, { useState, useRef } from "react";

function App() {
    const countRef = useRef(0);
    const [forceRender, setForceRender] = useState(false);

    const increment = () => {
        countRef.current += 1;
        setForceRender(!forceRender);
    };

    return (
        <div>
            <h1>Count: {countRef.current}</h1> {/* Display count value */}
            <button onClick={increment}>Increment</button>
        </div>
    );
}

export default App;`}
        </code>
    </pre>

    <ul className="list-[square] space-y-1 mt-5">
        <li>The mutable countRef holds the count value. The forceRender state via useState triggers component re-renders to reflect updates in the UI. The Increment button updates countRef.</li>
        <li>setForceRender triggers a re-render so the UI updates. The new count is shown in an <span className="text-red-400">{'<h1>'}</span> element, not in a prompt.</li>
    </ul>


    <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Other Hooks</h2>
    <p>React includes additional hooks that are intended for more specialized tasks or particular use cases.</p>
     <ul className="list-[square] space-y-1 mt-5">
        <li><span className="font-bold">useReducer</span>: For complex state management.</li>
        <li><span className="font-bold">useImperativeHandle</span>: Customizes the instance value exposed by useRef.</li>
        <li><span className="font-bold">useLayoutEffect</span>: Like useEffect but fires synchronously after DOM updates.</li>
     </ul>

     <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Custom Hooks</h2>
     <p>Custom Hooks are developer-defined functions that encapsulate reusable logic, allowing behavior to be shared across multiple components while enhancing code clarity.</p>
     <pre className="text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5">
        <code>
            {`//useWidth.js

import { useState, useEffect } from "react";

function useWidth() {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return width;
}

export default useWidth;`}
        </code>
     </pre>


     <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-3">Using a Custom Hook</h2>
    <pre className="text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5">
        <code>
            {`import React from "react";
import useWidth from "./useWidth";

function App() {
    const width = useWidth();
    return <h1>Window Width: {width}px</h1>;
}

export default App;`}
        </code>
    </pre>

    <ul className="list-[square] space-y-1 mt-5">
        <li>The useWidth hook encapsulates the functionality needed to monitor the width of the browser window.</li>
        <li>By reusing logic in multiple components, it minimizes redundancy and keeps the code cleaner.</li>
    </ul>


    <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Difference Between Hooks and Class Components</h2>
    <table className="min-w-full border border-gray-300 text-gray-700 text-sm text-left mt-10">
        <thead>
            <tr className="bg-gray-100">
                <th className="px-4 py-2 border-b border-gray-300 text-gray-700 font-bold">Feature</th>
                <th className="px-4 py-2 border-b border-gray-300 text-gray-700 font-bold">Class Components</th>
                <th className="px-4 py-2 border-b border-gray-300 text-gray-700 font-bold">React Hooks</th>
            </tr>
        </thead>
        <tbody>
            {data.map((row,index)=>(
                <tr className="cursor-text hover:bg-gray-100">
                    <td className="px-4 py-2 border-b border-gray-300">{row.Feature}</td>
                    <td className="px-4 py-2 border-b border-gray-300">{row.ClassComponents}</td>
                    <td className="px-4 py-2 border-b border-gray-300">{row.ReactHooks}</td>
                </tr>
            ))}
        </tbody>
    </table>

        </div>
    )
}

export default HooksIntroduction;