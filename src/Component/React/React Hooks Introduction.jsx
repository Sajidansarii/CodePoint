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
          <pre className="bg-gray-200 p-4 rounded-lg mt-5 overflow-x-auto text-sm">
  <code className="font-mono text-gray-900">

    <span className="text-purple-700">const</span>{" "}
    [state, setState] = <span className="text-blue-700">useState</span>(
    initialState
    );

  </code>
</pre>

            <ul className="list-[square] space-y-1 mt-5 ">
                <li><span className="font-bold">state</span>: The current value of the state.</li>
                <li><span className="font-bold">setState</span>: A function used to update the state.</li>
                <li><span className="font-bold">InitialState</span>: The initial value of the state, which can be a primitive type or an <span className="lg:ml-0 ml-5">object/array</span></li>
            </ul>

            <p className="mt-10"><span className="text-red-400 bg-gray-50 px-1">useReducer</span> is an advanced hook for managing complex state in functional components. It’s useful when state has multiple parts or requires complicated updates.</p>
             
             <h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">Syntax</h2>
            <pre className="bg-gray-200 p-4 rounded-lg mt-5 overflow-x-auto text-sm">
  <code className="font-mono text-gray-900">

    <span className="text-purple-700">const</span>{" "}
    [state, dispatch] = <span className="text-blue-700">useReducer</span>(
    reducer, initialState
    );

  </code>
</pre>

             <ul className="list-[square] space-y-1 mt-5">
                <li><span className="font-bold">state</span>: The current state value.</li>
                <li><span className="font-bold">dispatch</span>: A function used to dispatch actions that will update the state.</li>
                <li><span className="font-bold">reducer</span>: A function that defines how the state should change based on the <span className="lg:ml-0 ml-5">dispatched</span> action.</li>
                <li><span className="font-bold">initialState</span>: The initial state value.</li>
             </ul>

             <p className="mt-5">Here’s an example to understand how the state hook works.</p>
            <pre className="bg-gray-200 p-4 rounded-lg mt-5 overflow-x-auto text-sm">
  <code className="font-mono text-gray-900">

    <span className="text-purple-700">import</span>{" "}
    <span className="text-green-700">React</span>, {"{"} useState {"}"}{" "}
    <span className="text-purple-700">from</span>{" "}
    <span className="text-yellow-700">"react"</span>;
    {"\n\n"}

    <span className="text-purple-700">function</span>{" "}
    <span className="text-green-700">App</span>() {"{"}
    {"\n"}

    {"  "}
    <span className="text-purple-700">const</span> [count, setCount] =
    <span className="text-blue-700">useState</span>(0);
    {"\n\n"}

    {"  "}
    <span className="text-purple-700">const</span> increment = () =&gt; setCount(count + 1);
    {"\n"}

    {"  "}
    <span className="text-purple-700">const</span> decrement = () =&gt; setCount(count - 1);
    {"\n\n"}

    {"  "}
    <span className="text-purple-700">return</span> (
    {"\n"}

    {"    "}
    &lt;<span className="text-red-600">div</span>&gt;
    {"\n"}

    {"      "}
    &lt;<span className="text-red-600">h1</span>&gt;
    Count: {"{"}count{"}"}
    &lt;/<span className="text-red-600">h1</span>&gt;
    {"\n"}

    {"      "}
    &lt;<span className="text-red-600">button</span>{" "}
    onClick={"{"}increment{"}"}&gt;
    Increment
    &lt;/<span className="text-red-600">button</span>&gt;
    {"\n"}

    {"      "}
    &lt;<span className="text-red-600">button</span>{" "}
    onClick={"{"}decrement{"}"}&gt;
    Decrement
    &lt;/<span className="text-red-600">button</span>&gt;
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
    <span className="text-green-700">App</span>;

  </code>
</pre>

             <p className="mt-5">The useState hook declares state in functional components. count stores the state, and setCount updates it.</p>
              <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Context Hooks</h2>
              <p>The <span className="text-red-400">useContext</span> hook lets functional components easily get values from the React Context API. This way, you don’t have to pass props through each level of the component tree.</p>
             <pre className="bg-gray-200 p-4 rounded-lg mt-5 overflow-x-auto text-sm">
  <code className="font-mono text-gray-900">

    <span className="text-purple-700">const</span>{" "}
    contextValue = <span className="text-blue-700">useContext</span>(MyContext);

  </code>
</pre>

             <ul className="list-[square] space-y-1 mt-5">
                <li>The <span className="text-red-400">useContext</span> hook accepts a context object, like MyContext, and gives you its current value.</li>
                <li>The value stored in <span className="text-red-400">contextValue</span> comes from the nearest <span className="text-red-400">{'<MyContext.Provider>'}</span> in the component tree, making it easy for the component to access context data without prop drilling.</li>
             </ul>

             <p className="mt-5">Let’s explore the functionality of the context hook using the following example.</p>
          <pre className="bg-gray-200 p-4 rounded-lg mt-5 overflow-x-auto text-sm">
  <code className="font-mono text-gray-900">

    <span className="text-purple-700">import</span>{" "}
    <span className="text-green-700">React</span>, {"{"} createContext, useContext, useState {"}"}{" "}
    <span className="text-purple-700">from</span>{" "}
    <span className="text-yellow-700">"react"</span>;
    {"\n\n"}

    <span className="text-purple-700">const</span>{" "}
    ThemeContext = <span className="text-blue-700">createContext</span>();
    {"\n\n"}

    <span className="text-purple-700">function</span>{" "}
    <span className="text-green-700">App</span>() {"{"}
    {"\n"}

    {"  "}
    <span className="text-purple-700">const</span> [theme, setTheme] =
    <span className="text-blue-700">useState</span>(
    <span className="text-yellow-700">"light"</span>
    );
    {"\n\n"}

    {"  "}
    <span className="text-purple-700">const</span> toggleTheme = () =&gt; {"{"}
    {"\n"}

    {"    "}
    setTheme((prevTheme) =&gt;
    prevTheme === <span className="text-yellow-700">"light"</span>
    ? <span className="text-yellow-700">"dark"</span>
    : <span className="text-yellow-700">"light"</span>);
    {"\n"}

    {"  "}
    {"}"};
    {"\n\n"}

    {"  "}
    <span className="text-purple-700">return</span> (
    {"\n"}

    {"    "}
    &lt;<span className="text-red-600">ThemeContext.Provider</span>{" "}
    value={"{"}theme{"}"}&gt;
    {"\n"}

    {"      "}
    &lt;<span className="text-red-600">div</span>&gt;
    {"\n"}

    {"        "}
    &lt;<span className="text-red-600">h1</span>&gt;
    Current Theme: {"{"}theme{"}"}
    &lt;/<span className="text-red-600">h1</span>&gt;
    {"\n"}

    {"        "}
    &lt;<span className="text-red-600">button</span>{" "}
    onClick={"{"}toggleTheme{"}"}&gt;
    Toggle Theme
    &lt;/<span className="text-red-600">button</span>&gt;
    {"\n"}

    {"        "}
    &lt;<span className="text-green-700">ThemeDisplay</span> /&gt;
    {"\n"}

    {"      "}
    &lt;/<span className="text-red-600">div</span>&gt;
    {"\n"}

    {"    "}
    &lt;/<span className="text-red-600">ThemeContext.Provider</span>&gt;
    {"\n"}

    {"  "}
    );
    {"\n"}

    {"}"}
    {"\n\n"}

    <span className="text-purple-700">function</span>{" "}
    <span className="text-green-700">ThemeDisplay</span>() {"{"}
    {"\n"}

    {"  "}
    <span className="text-purple-700">const</span> theme =
    <span className="text-blue-700">useContext</span>(ThemeContext);
    {"\n\n"}

    {"  "}
    <span className="text-purple-700">return</span> (
    &lt;<span className="text-red-600">h2</span>&gt;
    Theme from Context: {"{"}theme{"}"}
    &lt;/<span className="text-red-600">h2</span>&gt;
    );
    {"\n"}

    {"}"}
    {"\n\n"}

    <span className="text-purple-700">export</span>{" "}
    <span className="text-purple-700">default</span>{" "}
    <span className="text-green-700">App</span>;

  </code>
</pre>

            <p className="mt-5">useContext lets you access context values, so you can share data between components without passing props through every level. The Provider makes the context value available to all child components in the tree.</p>
         

         <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Effect Hooks</h2>
        <p className="mb-3">Effect hooks—including <span className="text-red-400">useEffect</span>, useLayoutEffect, and useInsertionEffect—allow functional components to manage side effects in a modular and efficient manner.</p>
        <p>The useEffect hook in React helps functional components handle side effects. You can use it for tasks like fetching data, updating the DOM, or setting up subscriptions—things that used to be done in class lifecycle methods like componentDidMount or componentDidUpdate.</p>
        <h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">Syntax</h2>
       <pre className="bg-gray-200 p-4 rounded-lg mt-5 overflow-x-auto text-sm">
  <code className="font-mono text-gray-900">

    <span className="text-blue-700">useEffect</span>(() =&gt; {"{"}
    {"\n"}

    {"  "}
    <span className="text-gray-500">// Side effect logic here</span>
    {"\n"}

    {"}"}, [dependencies]);

  </code>
</pre>

        <ul className="list-[square] space-y-1 mt-5">
         <li>The <span className="text-red-400">useEffect</span> hook, written as useEffect <span className="text-red-400">{'(() => { ... }, [dependencies])'}</span>;, triggers side effects after the component’s render phase.</li>
         <li>The effect is triggered based on changes in the specified dependency values.</li>   
        </ul>

          <p className="mt-10">The <span className="text-red-400">useLayoutEffect</span> hook runs before the browser paints, allowing layout measurements and updates for smoother visuals.</p>          
        
        <h2 className="text-2xl text-gray-800 font-semibold mt-5">Syntax</h2>
       <pre className="bg-gray-200 p-4 rounded-lg mt-5 overflow-x-auto text-sm">
  <code className="font-mono text-gray-900">

    <span className="text-blue-700">useLayoutEffect</span>(() =&gt; {"{"}
    {"\n"}

    {"  "}
    <span className="text-gray-500">// Logic to manipulate layout or measure DOM elements</span>
    {"\n"}

    {"}"}, [dependencies]);

  </code>
</pre>


        <p className="mt-5">The <span className="text-red-400">useInsertionEffect</span> hook injects styles before a component renders, useful for SSR and styling libraries.</p>
       
       <h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">Syntax</h2>
    <pre className="bg-gray-200 p-4 rounded-lg mt-5 overflow-x-auto text-sm">
  <code className="font-mono text-gray-900">

    <span className="text-blue-700">useInsertionEffect</span>(() =&gt; {"{"}
    {"\n"}

    {"  "}
    <span className="text-gray-500">// Logic to inject styles or manipulate stylesheets</span>
    {"\n"}

    {"}"}, [dependencies]);

  </code>
</pre>

      <p className="mt-5">Let’s check out an example to see the effect hook in action.</p>
    <pre className="bg-gray-200 p-4 rounded-lg mt-5 overflow-x-auto text-sm">
  <code className="font-mono text-gray-900">

    <span className="text-purple-700">import</span>{" "}
    <span className="text-green-700">React</span>, {"{"} useState, useEffect {"}"}{" "}
    <span className="text-purple-700">from</span>{" "}
    <span className="text-yellow-700">"react"</span>;
    {"\n\n"}

    <span className="text-purple-700">function</span>{" "}
    <span className="text-green-700">App</span>() {"{"}
    {"\n"}

    {"  "}
    <span className="text-purple-700">const</span> [count, setCount] =
    <span className="text-blue-700">useState</span>(0);
    {"\n\n"}

    {"  "}
    <span className="text-blue-700">useEffect</span>(() =&gt; {"{"}
    {"\n"}

    {"    "}
    document.title = "Count: " + count;
    {"\n"}

    {"    "}
    <span className="text-blue-700">console</span>.log(
    "Effect ran. Count is: " + count
    );
    {"\n\n"}

    {"    "}
    <span className="text-purple-700">return</span> () =&gt; {"{"}
    {"\n"}

    {"      "}
    <span className="text-blue-700">console</span>.log(
    "Cleanup for previous effect"
    );
    {"\n"}

    {"      "}
    document.title = "React App";
    {"\n"}

    {"    "}
    {"}"};
    {"\n"}

    {"  "}
    {"}"}, [count]);
    {"\n\n"}

    {"  "}
    <span className="text-purple-700">return</span> (
    {"\n"}

    {"    "}
    &lt;<span className="text-red-600">div</span>&gt;
    {"\n"}

    {"      "}
    &lt;<span className="text-red-600">h1</span>&gt;
    Count: {"{"}count{"}"}
    &lt;/<span className="text-red-600">h1</span>&gt;
    {"\n"}

    {"      "}
    &lt;<span className="text-red-600">button</span>{" "}
    onClick={() => setCount(count + 1)}&gt;
    Increment Count
    &lt;/<span className="text-red-600">button</span>&gt;
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
    <span className="text-green-700">App</span>;

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
    <pre className="bg-gray-200 p-4 rounded-lg mt-5 overflow-x-auto text-sm">
  <code className="font-mono text-gray-900">

    <span className="text-purple-700">const</span>{" "}
    memoizedValue = <span className="text-blue-700">useMemo</span>(() =&gt; computeExpensiveValue(a, b), [a, b]);

  </code>
</pre>

     <p className="mt-5">useCallback is a React hook that remembers a function so it doesn’t get recreated on every render, unless its dependencies change. This is useful when passing functions to child components to avoid unnecessary re-renders.</p>
      
      <h2 className="text-2xl text-gray-800 font-semibold mt-5">Syntax</h2>
    <pre className="bg-gray-200 p-4 rounded-lg mt-5 overflow-x-auto text-sm">
  <code className="font-mono text-gray-900">

    <span className="text-purple-700">const</span>{" "}
    memoizedCallback = <span className="text-blue-700">useCallback</span>(() =&gt; {"{"} doSomething(a, b); {"}"}, [a, b]);

  </code>
</pre>

     <ul className="list-[square] space-y-1 mt-5">
        <li>With useMemo, num * 2 is remembered and only recalculated when num changes, so it doesn’t waste time recalculating every render.</li>
     </ul>

     <p className="mt-5">Here’s an example to understand how the performance hook works.</p>
  
    <pre className="bg-gray-200 p-4 rounded-lg mt-5 overflow-x-auto text-sm">
  <code className="font-mono text-gray-900">

    <span className="text-purple-700">import</span>{" "}
    <span className="text-green-700">React</span>, {"{"} useState, useMemo {"}"}{" "}
    <span className="text-purple-700">from</span>{" "}
    <span className="text-yellow-700">"react"</span>;
    {"\n\n"}

    <span className="text-purple-700">function</span>{" "}
    <span className="text-green-700">App</span>() {"{"}
    {"\n"}

    {"  "}
    <span className="text-purple-700">const</span> [count, setCount] =
    <span className="text-blue-700">useState</span>(0);
    {"\n"}

    {"  "}
    <span className="text-purple-700">const</span> [text, setText] =
    <span className="text-blue-700">useState</span>(
    <span className="text-yellow-700">""</span>
    );
    {"\n\n"}

    {"  "}
    <span className="text-purple-700">const</span> expensiveCalculation =
    <span className="text-blue-700">useMemo</span>(() =&gt; {"{"}
    {"\n"}

    {"    "}
    <span className="text-blue-700">console</span>.log(
    <span className="text-yellow-700">"Expensive calculation..."</span>
    );
    {"\n"}

    {"    "}
    <span className="text-purple-700">return</span> count * 2;
    {"\n"}

    {"  "}
    {"}"}, [count]);
    {"\n\n"}

    {"  "}
    <span className="text-purple-700">return</span> (
    {"\n"}

    {"    "}
    &lt;<span className="text-red-600">div</span>&gt;
    {"\n"}

    {"      "}
    &lt;<span className="text-red-600">h1</span>&gt;
    Count: {"{"}count{"}"}
    &lt;/<span className="text-red-600">h1</span>&gt;
    {"\n"}

    {"      "}
    &lt;<span className="text-red-600">h2</span>&gt;
    Expensive Calculation: {"{"}expensiveCalculation{"}"}
    &lt;/<span className="text-red-600">h2</span>&gt;
    {"\n\n"}

    {"      "}
    &lt;<span className="text-red-600">button</span>{" "}
    onClick={() => setCount(count + 1)}&gt;
    Increment Count
    &lt;/<span className="text-red-600">button</span>&gt;
    {"\n\n"}

    {"      "}
    &lt;<span className="text-red-600">input</span>{" "}
    type=<span className="text-yellow-700">"text"</span>{" "}
    value={"{"}text{"}"}{" "}
    onChange={"{"}(e) =&gt; setText(e.target.value){"}"}{" "}
    placeholder=<span className="text-yellow-700">"Type something"</span> /&gt;
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
    <span className="text-green-700">App</span>;

  </code>
</pre>

     <ul className="list-[square] space-y-1 mt-5">
        <li>The useMemo hook caches the result of expensiveCalculation and recalculates it solely when the count dependency Changes. Changes in text do not trigger a recomputation. console.log demonstrates the memoization in action.</li>
     </ul>

     <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Resource Hooks(useFetch)</h2>
     <p>The <span className="text-red-400">useFetch hook</span> is typically custom-built to retrieve data from an API. It leverages <span className="text-red-400">useEffect</span> to perform the fetch when the component mounts or its dependencies change.</p>
    
    <h2 className="text-2xl text-gray-800 font-semibold mt-5">Syntax</h2>
  <pre className="bg-gray-200 p-4 rounded-lg mt-5 overflow-x-auto text-sm">
  <code className="font-mono text-gray-900">

    <span className="text-purple-700">const</span>{" "}
    {"{"} data, loading, error {"}"} =
    <span className="text-blue-700">useFetch</span>(url);

  </code>
</pre>

    <ul className="list-[square] space-y-1 mt-5">
        <li>The useFetch hook is a custom React hook designed to retrieve data from a specified URL.</li>
        <li>It uses useEffect to fetch data whenever the URL changes and updates the state with the new data.</li>
    </ul>

    <p className="mt-5">Let’s explore the functionality of a resource hook using the following example.</p>
    
  <pre className="bg-gray-200 p-4 rounded-lg mt-5 overflow-x-auto text-sm">
  <code className="font-mono text-gray-900">

    <span className="text-purple-700">import</span>{" "}
    <span className="text-green-700">React</span>, {"{"} useState, useRef {"}"}{" "}
    <span className="text-purple-700">from</span>{" "}
    <span className="text-yellow-700">"react"</span>;
    {"\n\n"}

    <span className="text-purple-700">function</span>{" "}
    <span className="text-green-700">App</span>() {"{"}
    {"\n"}

    {"  "}
    <span className="text-purple-700">const</span> countRef =
    <span className="text-blue-700">useRef</span>(0);
    {"\n"}

    {"  "}
    <span className="text-purple-700">const</span> [forceRender, setForceRender] =
    <span className="text-blue-700">useState</span>(false);
    {"\n\n"}

    {"  "}
    <span className="text-purple-700">const</span> increment = () =&gt; {"{"}
    {"\n"}

    {"    "}
    countRef.current += 1;
    {"\n"}

    {"    "}
    setForceRender(!forceRender);
    {"\n"}

    {"  "}
    {"}"};
    {"\n\n"}

    {"  "}
    <span className="text-purple-700">return</span> (
    {"\n"}

    {"    "}
    &lt;<span className="text-red-600">div</span>&gt;
    {"\n"}

    {"      "}
    &lt;<span className="text-red-600">h1</span>&gt;
    Count: {"{"}countRef.current{"}"}
    &lt;/<span className="text-red-600">h1</span>&gt;
    {"\n\n"}

    {"      "}
    &lt;<span className="text-red-600">button</span>{" "}
    onClick={"{"}increment{"}"}&gt;
    Increment
    &lt;/<span className="text-red-600">button</span>&gt;
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
    <span className="text-green-700">App</span>;

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
  <pre className="bg-gray-200 p-4 rounded-lg mt-5 overflow-x-auto text-sm">
  <code className="font-mono text-gray-900">

    <span className="text-gray-500">// useWidth.js</span>
    {"\n\n"}

    <span className="text-purple-700">import</span>{" "}
    {"{"} useState, useEffect {"}"}{" "}
    <span className="text-purple-700">from</span>{" "}
    <span className="text-yellow-700">"react"</span>;
    {"\n\n"}

    <span className="text-purple-700">function</span>{" "}
    <span className="text-green-700">useWidth</span>() {"{"}
    {"\n"}

    {"  "}
    <span className="text-purple-700">const</span> [width, setWidth] =
    <span className="text-blue-700">useState</span>(
    window.innerWidth
    );
    {"\n\n"}

    {"  "}
    <span className="text-blue-700">useEffect</span>(() =&gt; {"{"}
    {"\n"}

    {"    "}
    <span className="text-purple-700">const</span> handleResize = () =&gt;
    setWidth(window.innerWidth);
    {"\n"}

    {"    "}
    window.addEventListener("resize", handleResize);
    {"\n\n"}

    {"    "}
    <span className="text-purple-700">return</span> () =&gt;
    window.removeEventListener("resize", handleResize);
    {"\n"}

    {"  "}
    {"}"}, []);
    {"\n\n"}

    {"  "}
    <span className="text-purple-700">return</span> width;
    {"\n"}

    {"}"}
    {"\n\n"}

    <span className="text-purple-700">export</span>{" "}
    <span className="text-purple-700">default</span>{" "}
    <span className="text-green-700">useWidth</span>;

  </code>
</pre>


     <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-3">Using a Custom Hook</h2>
   <pre className="bg-gray-200 p-4 rounded-lg mt-5 overflow-x-auto text-sm">
  <code className="font-mono text-gray-900">

    <span className="text-purple-700">import</span>{" "}
    <span className="text-green-700">React</span>{" "}
    <span className="text-purple-700">from</span>{" "}
    <span className="text-yellow-700">"react"</span>;
    {"\n"}

    <span className="text-purple-700">import</span>{" "}
    useWidth{" "}
    <span className="text-purple-700">from</span>{" "}
    <span className="text-yellow-700">"./useWidth"</span>;
    {"\n\n"}

    <span className="text-purple-700">function</span>{" "}
    <span className="text-green-700">App</span>() {"{"}
    {"\n"}

    {"  "}
    <span className="text-purple-700">const</span> width =
    <span className="text-blue-700">useWidth</span>();
    {"\n"}

    {"  "}
    <span className="text-purple-700">return</span> (
    &lt;<span className="text-red-600">h1</span>&gt;
    Window Width: {"{"}width{"}"}px
    &lt;/<span className="text-red-600">h1</span>&gt;
    );
    {"\n"}

    {"}"}
    {"\n\n"}

    <span className="text-purple-700">export</span>{" "}
    <span className="text-purple-700">default</span>{" "}
    <span className="text-green-700">App</span>;

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