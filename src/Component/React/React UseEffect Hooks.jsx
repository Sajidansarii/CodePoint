import React from "react";

const UseEffectHooks = () =>{
    return(
        <div className="max-w-4xl p-6 mt-10">
            <h1 className="lg:text-3xl text-2xl text-blue-500 font-semibold mb-3">React UseEfect Hooks</h1>
            <p>The <span className="text-red-400">useEffect</span> hook is a core feature in ReactJS that enables functional components to manage side effects. Prior to hooks, this functionality was limited to class components through lifecycle methods such as componentDidMount, componentDidUpdate, and componentWillUnmount.</p>
            
            <ul className="list-[square] space-y-1 mt-5">
                <li>Fetching API data.</li>
                <li>Registering event listeners or subscriptions.</li>
                <li>Making direct DOM changes when needed.</li>
                <li>Cleaning up resources on component unmount.</li>
            </ul>

            <h2 className="text-2xl text-gray-800 font-semibold mt-5">Syntax</h2>
            <pre className="text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5">
                <code>
                    {`useEffect(() => {
    // Code to run on each render
    return () => {
        // Cleanup function (optional)
    };
}, [dependencies]);`}
                </code>
            </pre>

            <ul className="list-[square] space-y-1 mt-5">
                <li><span className="font-semibold">Effect function</span>: Runs the side effect code.</li>
                <li><span className="font-semibold">Cleanup function</span>: Cleans up subscriptions or timers when needed.</li>
                <li><span className="font-semibold">Dependencies array</span>: Controls when the effect re-runs.</li>
            </ul>

            <h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">How does it work?</h2>
            <p>When a React component renders, React first performs the initial render and updates the DOM. After the browser paints the UI, the useEffect hook executes—never during the render phase. React then checks the dependency array to determine how often the effect should run: without a dependency array, the effect runs after every render; with an empty array <span className="text-red-400 bg-gray-50">[ ]</span>, it runs only once when the component mounts; and with specific dependencies, it runs only when those values change. Before the effect runs again or when the component unmounts, the cleanup function returned by useEffect is executed. If any dependencies have changed, the cleanup runs first, followed by the effect running again.</p>
            

            <p className="mt-10">This article explains how to implement the useEffect Hook in ReactJS.</p>
            <pre className="text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5">
                <code>
                    {`// useEffect is defined here

import { useState, useEffect } from "react";

function HookCounterOne() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = \`You clicked \${count} times\`;
    }, [count]);

    return (
        <div>
            <button onClick={() => setCount((prevCount) => prevCount + 1)}>
                Click {count} times
            </button>
        </div>
    );
}
export default HookCounterOne;`}
                </code>
            </pre>

            <p className="mt-5">useEffect runs a function every time a component renders, allowing React to handle tasks efficiently.It is placed inside the component, so it can easily access state and props.To mimic lifecycle methods in functional components, you can copy and adjust the code snippet as needed.</p>



         <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Controlling side effects in useEffect</h2>
         <p><span className="text-red-400">useEffect</span> will run every time the component renders when no dependencies are passed.</p>
         <pre className="text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5">
            <code>
                {`import React, { useState, useEffect } from "react";
function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("useEffect ran on every render");
  });
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
export default App;`}
            </code>
         </pre>


         <p className="mt-10 mb-3">Providing an empty dependency array ensures that useEffect runs only during the initial render.</p>
        <pre className="text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5">
            <code>
                {`import React, { useEffect } from 'react';
function App() {
  useEffect(() => {
    console.log("This runs only once on the first render!");
    // You can put any initialization logic here
    // e.g., API call, event listener, analytics tracking
  }, []); // Empty array ensures it runs only on mount
  return (
    <div>
      <h1>useEffect with Empty Dependency Array</h1>
      <p>Open the console to see the effect log.</p>
    </div>
  );
}

export default App;`}
            </code>
        </pre>

        <p className="mt-5">Specifying state or props in the dependency array causes useEffect to re-run whenever those dependencies update.</p>
    
    <pre className="text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5">
        <code>
            {`import React, { useEffect, useState } from 'react';
interface AppProps {
  userId: number;
}
function App({ userId }: AppProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(\`Effect ran because count or userId changed!\`);
    console.log(\`Count: \${count}, User ID: \${userId}\`);

    // Example: Fetch data when count or userId changes
    // fetchData(count, userId);

  }, [count, userId]); // Runs whenever count or userId changes

  return (
    <div>
      <h1>useEffect on Specific Value Change</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
    </div>
  );
}
export default App;`}
        </code>
    </pre>

    <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Ways to mimic lifecycle methods using useEffect hook</h2>
     <p className="mb-3">Besides handling side effects, the <span className="text-red-400">useEffect()</span> Hook enables functional components to behave like class-based lifecycle methods.</p>
     <p>Passing an empty dependency array <span className="text-red-400 bg-gray-50">( [ ] )</span>to useEffect makes it run only on the initial mount, just like componentDidMount.</p>
     <pre className="text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5">
        <code>
            {`useEffect(() => {
    console.log("Component mounted (Functional)");
}, []);`}
        </code>
     </pre>

     <p className="mt-5">If you want your code to run whenever a value updates, place that state or prop in the dependency array. This works like componentDidUpdate.</p>
      <pre className="text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5">
        <code>
            {`useEffect(() => {
    console.log("Component updated (Functional)");
}, [value1, value2]);`}
        </code>
      </pre>

      <p className="mt-5">If you want to clean up something when the component goes away, return a function from useEffect. This works like componentWillUnmount.</p>
    <pre className="text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5">
        <code>
            {`useEffect(() => {
    return () => {
        console.log("Component unmounted (Functional)");
    };
}, []);`}
        </code>
    </pre>

    <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Cleaning Up Side Effects</h2>
    <p>By returning a cleanup function, useEffect helps remove side effects. This is particularly helpful for:</p>
     <ul className="list-[square] space-y-1 mt-5">
        <li>Removing event listeners.</li>
        <li>Canceling network requests.</li>
        <li>Clearing timers or intervals.</li>
     </ul>

     <p className="mt-10">For instance, setting a timer in useEffect requires returning a cleanup function to cancel it during unmount or whenever its dependencies change.</p>
    <pre className="text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5">
        <code>
            {`import { useEffect, useState } from "react";

function TimerComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);

    //Cleanup function to clear the interval
    return () => {
      clearInterval(interval);
      console.log("Interval cleared");
    };
  }, []); // Runs only once when the component mounts

  return <h1>Timer: {count} seconds</h1>;
}

export default TimerComponent;`}
        </code>
    </pre>




        </div>
    )
}

export default UseEffectHooks;