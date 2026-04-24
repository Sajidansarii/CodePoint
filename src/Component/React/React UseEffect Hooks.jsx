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
          <pre className="bg-gray-200 text-sm p-4 rounded-lg overflow-x-auto mt-5">
  <code>
    <span className="text-blue-600">useEffect</span>
    <span className="text-gray-800">(</span>
    <span className="text-gray-800">()</span>{" "}
    <span className="text-pink-500">=&gt;</span>{" "}
    <span className="text-gray-800">{`{`}</span>

    {"\n"}
    {"  "}
    <span className="text-gray-500">// Code to run on each render</span>

    {"\n\n"}
    {"  "}
    <span className="text-purple-600">return</span>{" "}
    <span className="text-gray-800">()</span>{" "}
    <span className="text-pink-500">=&gt;</span>{" "}
    <span className="text-gray-800">{`{`}</span>

    {"\n"}
    {"    "}
    <span className="text-gray-500">// Cleanup function (optional)</span>

    {"\n"}
    {"  "}
    <span className="text-gray-800">{`}`}</span>
    <span className="text-pink-500">;</span>

    {"\n"}
    <span className="text-gray-800">{`}`}</span>
    <span className="text-pink-500">,</span>{" "}
    <span className="text-gray-800">[dependencies]</span>
    <span className="text-pink-500">)</span>
    <span className="text-pink-500">;</span>
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
          <pre className="bg-gray-200 text-sm p-4 rounded-lg overflow-x-auto mt-5">
  <code>
    <span className="text-gray-500">// useEffect is defined here</span>

    {"\n\n"}
    <span className="text-purple-600">import</span>{" "}
    <span className="text-gray-800">{`{ useState, useEffect }`}</span>{" "}
    <span className="text-purple-600">from</span>{" "}
    <span className="text-green-600">"react"</span>;

    {"\n\n"}
    <span className="text-purple-600">function</span>{" "}
    <span className="text-blue-600">HookCounterOne</span>() {"{"}

    {"\n  "}
    <span className="text-purple-600">const</span>{" "}
    <span className="text-gray-800">{`[count, setCount]`}</span>{" "}
    <span className="text-pink-500">=</span>{" "}
    <span className="text-blue-600">useState</span>(0);

    {"\n\n"}
    {"  "}
    <span className="text-blue-600">useEffect</span>(() =&gt; {"{"}

    {"\n    "}
    <span className="text-blue-600">document.title</span>{" "}
    <span className="text-pink-500">=</span>{" "}
    <span className="text-green-600">"You clicked count times"</span>;

    {"\n  "}
    {"}, [count]);"}

    {"\n\n"}
    {"  "}
    <span className="text-purple-600">return</span> (
    {"\n    "}
    &lt;div&gt;
    {"\n      "}
    &lt;button onClick={() => setCount(prev => prev + 1)}&gt;
    {"\n        "}Click {"{count}"} times
    {"\n      "}&lt;/button&gt;
    {"\n    "}&lt;/div&gt;
    {"\n  "}
    );

    {"\n"}
    {"}"}

    {"\n\n"}
    <span className="text-purple-600">export default</span>{" "}
    <span className="text-blue-600">HookCounterOne</span>;
  </code>
</pre>

            <p className="mt-5">useEffect runs a function every time a component renders, allowing React to handle tasks efficiently.It is placed inside the component, so it can easily access state and props.To mimic lifecycle methods in functional components, you can copy and adjust the code snippet as needed.</p>



         <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Controlling side effects in useEffect</h2>
         <p><span className="text-red-400">useEffect</span> will run every time the component renders when no dependencies are passed.</p>
       <pre className="bg-gray-200 text-sm p-4 rounded-lg overflow-x-auto mt-5">
  <code>
    <span className="text-purple-600">import</span>{" "}
    <span className="text-gray-800">
      React, {`{ useState, useEffect }`}
    </span>{" "}
    <span className="text-purple-600">from</span>{" "}
    <span className="text-green-600">"react"</span>
    <span className="text-pink-500">;</span>

    {"\n\n"}
    <span className="text-purple-600">function</span>{" "}
    <span className="text-blue-600">App</span>
    <span className="text-gray-800">()</span>
    <span className="text-gray-800">{`{`}</span>

    {"\n"}
    {"  "}
    <span className="text-purple-600">const</span>{" "}
    <span className="text-gray-800">{`[count, setCount]`}</span>{" "}
    <span className="text-pink-500">=</span>{" "}
    <span className="text-blue-600">useState</span>
    <span className="text-gray-800">(0)</span>
    <span className="text-pink-500">;</span>

    {"\n\n"}
    {"  "}
    <span className="text-blue-600">useEffect</span>
    <span className="text-gray-800">(() =&gt; {`{`}</span>

    {"\n"}
    {"    "}
    <span className="text-blue-600">console.log</span>
    <span className="text-gray-800">("useEffect ran on every render")</span>
    <span className="text-pink-500">;</span>

    {"\n"}
    {"  "}
    <span className="text-gray-800">{`})`}</span>
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
    <span className="text-blue-600">&lt;h1&gt;</span>
    Count: {`{count}`}
    <span className="text-blue-600">&lt;/h1&gt;</span>

    {"\n\n"}
    {"      "}
    <span className="text-blue-600">&lt;button</span>{" "}
    <span className="text-green-600">onClick</span>
    <span className="text-pink-500">=</span>
    <span className="text-gray-800">{`() => setCount(count + 1)`}</span>
    <span className="text-blue-600">&gt;</span>

    {"\n"}
    {"        "}
    Increment

    {"\n"}
    {"      "}
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

    {"\n\n"}
    <span className="text-purple-600">export default</span>{" "}
    <span className="text-blue-600">App</span>
    <span className="text-pink-500">;</span>
  </code>
</pre>

         <p className="mt-10 mb-3">Providing an empty dependency array ensures that useEffect runs only during the initial render.</p>
      <pre className="bg-gray-200 text-sm p-4 rounded-lg overflow-x-auto mt-5">
  <code>
    <span className="text-purple-600">import</span>{" "}
    <span className="text-gray-800">React, {`{ useEffect }`}</span>{" "}
    <span className="text-purple-600">from</span>{" "}
    <span className="text-green-600">'react'</span>
    <span className="text-pink-500">;</span>

    {"\n\n"}
    <span className="text-purple-600">function</span>{" "}
    <span className="text-blue-600">App</span>
    <span className="text-gray-800">()</span>
    <span className="text-gray-800">{`{`}</span>

    {"\n"}
    {"  "}
    <span className="text-blue-600">useEffect</span>
    <span className="text-gray-800">(() =&gt; {`{`}</span>

    {"\n"}
    {"    "}
    <span className="text-blue-600">console.log</span>
    <span className="text-gray-800">("This runs only once on the first render!")</span>
    <span className="text-pink-500">;</span>

    {"\n"}
    {"    "}
    <span className="text-gray-500">
      // You can put any initialization logic here
    </span>

    {"\n"}
    {"    "}
    <span className="text-gray-500">// e.g., API call, event listener, analytics tracking</span>

    {"\n"}
    {"  "}
    <span className="text-gray-800">{`}, [])`}</span>
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
    <span className="text-blue-600">&lt;h1&gt;</span>
    useEffect with Empty Dependency Array
    <span className="text-blue-600">&lt;/h1&gt;</span>

    {"\n"}
    {"      "}
    <span className="text-blue-600">&lt;p&gt;</span>
    Open the console to see the effect log.
    <span className="text-blue-600">&lt;/p&gt;</span>

    {"\n"}
    {"    "}
    <span className="text-blue-600">&lt;/div&gt;</span>

    {"\n"}
    {"  "}
    <span className="text-gray-800">)</span>
    <span className="text-pink-500">;</span>

    {"\n"}
    <span className="text-gray-800">{`}`}</span>

    {"\n\n"}
    <span className="text-purple-600">export default</span>{" "}
    <span className="text-blue-600">App</span>
    <span className="text-pink-500">;</span>
  </code>
</pre>

        <p className="mt-5">Specifying state or props in the dependency array causes useEffect to re-run whenever those dependencies update.</p>
    
  <pre className="bg-gray-200 text-sm p-4 rounded-lg overflow-x-auto mt-5">
  <code>
    <span className="text-purple-600">import</span>{" "}
    <span className="text-gray-800">
      React, {`{ useEffect, useState }`}
    </span>{" "}
    <span className="text-purple-600">from</span>{" "}
    <span className="text-green-600">'react'</span>
    <span className="text-pink-500">;</span>

    {"\n\n"}
    <span className="text-purple-600">interface</span>{" "}
    <span className="text-blue-600">AppProps</span>{" "}
    <span className="text-gray-800">{`{`}</span>

    {"\n"}
    {"  "}
    <span className="text-blue-600">userId</span>
    <span className="text-pink-500">:</span>{" "}
    <span className="text-yellow-600">number</span>
    <span className="text-pink-500">;</span>

    {"\n"}
    <span className="text-gray-800">{`}`}</span>

    {"\n\n"}
    <span className="text-purple-600">function</span>{" "}
    <span className="text-blue-600">App</span>
    <span className="text-gray-800">{`({ userId }: AppProps)`}</span>
    <span className="text-gray-800">{`{`}</span>

    {"\n"}
    {"  "}
    <span className="text-purple-600">const</span>{" "}
    <span className="text-gray-800">{`[count, setCount]`}</span>{" "}
    <span className="text-pink-500">=</span>{" "}
    <span className="text-blue-600">useState</span>
    <span className="text-gray-800">(0)</span>
    <span className="text-pink-500">;</span>

    {"\n\n"}
    {"  "}
    <span className="text-blue-600">useEffect</span>
    <span className="text-gray-800">(() =&gt; {`{`}</span>

    {"\n"}
    {"    "}
    <span className="text-blue-600">console.log</span>
    <span className="text-gray-800">
      ("Effect ran because count or userId changed!")
    </span>
    <span className="text-pink-500">;</span>

    {"\n"}
    {"    "}
    <span className="text-blue-600">console.log</span>
    <span className="text-gray-800">
      (`Count: ${`count`}, User ID: ${`userId`}`)
    </span>
    <span className="text-pink-500">;</span>

    {"\n\n"}
    {"    "}
    <span className="text-gray-500">
      // Example: Fetch data when count or userId changes
    </span>

    {"\n"}
    {"    "}
    <span className="text-gray-500">// fetchData(count, userId);</span>

    {"\n"}
    {"  "}
    <span className="text-gray-800">{`}, [count, userId])`}</span>
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
    <span className="text-blue-600">&lt;h1&gt;</span>
    useEffect on Specific Value Change
    <span className="text-blue-600">&lt;/h1&gt;</span>

    {"\n\n"}
    {"      "}
    <span className="text-blue-600">&lt;p&gt;</span>
    Count: {`{count}`}
    <span className="text-blue-600">&lt;/p&gt;</span>

    {"\n\n"}
    {"      "}
    <span className="text-blue-600">&lt;button</span>{" "}
    <span className="text-green-600">onClick</span>
    <span className="text-pink-500">=</span>
    <span className="text-gray-800">{`() => setCount(count + 1)`}</span>
    <span className="text-blue-600">&gt;</span>

    {"\n"}
    {"        "}
    Increment Count

    {"\n"}
    {"      "}
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

    {"\n\n"}
    <span className="text-purple-600">export default</span>{" "}
    <span className="text-blue-600">App</span>
    <span className="text-pink-500">;</span>
  </code>
</pre>

    <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Ways to mimic lifecycle methods using useEffect hook</h2>
     <p className="mb-3">Besides handling side effects, the <span className="text-red-400">useEffect()</span> Hook enables functional components to behave like class-based lifecycle methods.</p>
     <p>Passing an empty dependency array <span className="text-red-400 bg-gray-50">( [ ] )</span>to useEffect makes it run only on the initial mount, just like componentDidMount.</p>
   <pre className="bg-gray-200 text-sm p-4 rounded-lg overflow-x-auto mt-5">
  <code>
    <span className="text-blue-600">useEffect</span>
    <span className="text-gray-800">(() =&gt; {`{`}</span>

    {"\n"}
    {"  "}
    <span className="text-blue-600">console.log</span>
    <span className="text-gray-800">("Component mounted (Functional)")</span>
    <span className="text-pink-500">;</span>

    {"\n"}
    <span className="text-gray-800">{`}, [])`}</span>
    <span className="text-pink-500">;</span>
  </code>
</pre>

     <p className="mt-5">If you want your code to run whenever a value updates, place that state or prop in the dependency array. This works like componentDidUpdate.</p>
     <pre className="bg-gray-200 text-sm p-4 rounded-lg overflow-x-auto mt-5">
  <code>
    <span className="text-blue-600">useEffect</span>
    <span className="text-gray-800">(() =&gt; {`{`}</span>

    {"\n"}
    {"  "}
    <span className="text-blue-600">console.log</span>
    <span className="text-gray-800">("Component updated (Functional)")</span>
    <span className="text-pink-500">;</span>

    {"\n"}
    <span className="text-gray-800">{`}, [value1, value2])`}</span>
    <span className="text-pink-500">;</span>
  </code>
</pre> 

      <p className="mt-5">If you want to clean up something when the component goes away, return a function from useEffect. This works like componentWillUnmount.</p>
   <pre className="bg-gray-200 text-sm p-4 rounded-lg overflow-x-auto mt-5">
  <code>
    <span className="text-blue-600">useEffect</span>
    <span className="text-gray-800">(() = {`{`}</span>

    {"\n"}
    {"  "}
    <span className="text-purple-600">return</span>{" "}
    <span className="text-gray-800">()</span>{" "}
    <span className="text-pink-500">=&gt;</span>{" "}
    <span className="text-gray-800">{`{`}</span>

    {"\n"}
    {"    "}
    <span className="text-blue-600">console.log</span>
    <span className="text-gray-800">("Component unmounted (Functional)")</span>
    <span className="text-pink-500">;</span>

    {"\n"}
    {"  "}
    <span className="text-gray-800">{`}`}</span>
    <span className="text-pink-500">;</span>

    {"\n"}
    <span className="text-gray-800">{`}, [])`}</span>
    <span className="text-pink-500">;</span>
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
   <pre className="bg-gray-200 text-sm p-4 rounded-lg overflow-x-auto mt-5">
  <code>
    <span className="text-purple-600">import</span>{" "}
    <span className="text-gray-800">{`{ useEffect, useState }`}</span>{" "}
    <span className="text-purple-600">from</span>{" "}
    <span className="text-green-600">"react"</span>
    <span className="text-pink-500">;</span>

    {"\n\n"}
    <span className="text-purple-600">function</span>{" "}
    <span className="text-blue-600">TimerComponent</span>
    <span className="text-gray-800">()</span>
    <span className="text-gray-800">{`{`}</span>

    {"\n"}
    {"  "}
    <span className="text-purple-600">const</span>{" "}
    <span className="text-gray-800">{`[count, setCount]`}</span>{" "}
    <span className="text-pink-500">=</span>{" "}
    <span className="text-blue-600">useState</span>
    <span className="text-gray-800">(0)</span>
    <span className="text-pink-500">;</span>

    {"\n\n"}
    {"  "}
    <span className="text-blue-600">useEffect</span>
    <span className="text-gray-800">(() =&gt; {`{`}</span>

    {"\n"}
    {"    "}
    <span className="text-purple-600">const</span>{" "}
    <span className="text-blue-600">interval</span>{" "}
    <span className="text-pink-500">=</span>{" "}
    <span className="text-blue-600">setInterval</span>
    <span className="text-gray-800">(() =&gt; {`{`}</span>

    {"\n"}
    {"      "}
    <span className="text-blue-600">setCount</span>
    <span className="text-gray-800">(prev =&gt; prev + 1)</span>
    <span className="text-pink-500">;</span>

    {"\n"}
    {"    "}
    <span className="text-gray-800">{`}, 1000)`}</span>
    <span className="text-pink-500">;</span>

    {"\n\n"}
    {"    "}
    <span className="text-gray-500">// Cleanup function to clear the interval</span>

    {"\n"}
    {"    "}
    <span className="text-purple-600">return</span>{" "}
    <span className="text-gray-800">()</span>{" "}
    <span className="text-pink-500">=&gt;</span>{" "}
    <span className="text-gray-800">{`{`}</span>

    {"\n"}
    {"      "}
    <span className="text-blue-600">clearInterval</span>
    <span className="text-gray-800">(interval)</span>
    <span className="text-pink-500">;</span>

    {"\n"}
    {"      "}
    <span className="text-blue-600">console.log</span>
    <span className="text-gray-800">("Interval cleared")</span>
    <span className="text-pink-500">;</span>

    {"\n"}
    {"    "}
    <span className="text-gray-800">{`}`}</span>
    <span className="text-pink-500">;</span>

    {"\n"}
    {"  "}
    <span className="text-gray-800">{`}, [])`}</span>
    <span className="text-pink-500">;</span>

    {"\n\n"}
    {"  "}
    <span className="text-purple-600">return</span>{" "}
    <span className="text-gray-800">(</span>

    {"\n"}
    {"    "}
    <span className="text-blue-600">&lt;h1&gt;</span>
    Timer: {`{count}`} seconds
    <span className="text-blue-600">&lt;/h1&gt;</span>

    {"\n"}
    {"  "}
    <span className="text-gray-800">)</span>
    <span className="text-pink-500">;</span>

    {"\n"}
    <span className="text-gray-800">{`}`}</span>

    {"\n\n"}
    <span className="text-purple-600">export default</span>{" "}
    <span className="text-blue-600">TimerComponent</span>
    <span className="text-pink-500">;</span>
  </code>
</pre>
        </div>
    )
}

export default UseEffectHooks;