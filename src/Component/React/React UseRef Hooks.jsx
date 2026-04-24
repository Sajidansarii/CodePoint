import React from "react";

const UseRefHooks = () => {
    return(
        <div className="max-w-4xl p-6 mt-10">
         <h1 className="lg:text-3xl text-2xl text-blue-500 font-semibold mb-3">React UseRef Hooks</h1>
        <p>The <span className="text-red-400">useRef Hook</span> is a React Hook that gives you a mutable reference object which stays the same across renders. Changing it won’t cause the component to re-render.</p>
        
        <h2 className="text-2xl text-gray-800 font-semibold mt-5">Syntax</h2>
      <pre className="bg-gray-100 p-4 rounded-lg mt-5 overflow-x-auto text-sm">
  <code>
    <span className="text-purple-600">const</span>{" "}
    <span className="text-black">refContainer</span>{" "}
    <span className="text-gray-500">=</span>{" "}
    <span className="text-blue-500">useRef</span>
    <span className="text-black">(initialValue);</span>
  </code>
</pre>

        <p className="mt-5">The useRef Hook gives an object with a current property set to the initial value. Updating current does not trigger a re-render.</p>
        

        <h2 className="text-2xl text-gray-800 font-semibold mt-10">Implementing the useRef hook</h2>
        <h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">Accessing the DOM using useRef hook.</h2>
        <p>Here, we have a button called ACTION. Clicking the button triggers onClickHandler, which uses useRef to focus the textarea.</p>
       <pre className="bg-gray-100 p-4 rounded-lg mt-5 overflow-x-auto text-sm">
  <code>
    <span className="text-purple-600">import</span>{" "}
    React,{" "}
    <span className="text-blue-500">{`{ Fragment, useRef }`}</span>{" "}
    <span className="text-purple-600">from</span>{" "}
    <span className="text-green-600">'react'</span>;

    <br /><br />

    <span className="text-purple-600">function</span>{" "}
    <span className="text-yellow-600">App</span>() {"{"}
    <br />

    &nbsp;&nbsp;<span className="text-purple-600">const</span>{" "}
    focusPoint = <span className="text-blue-500">useRef</span>(null);
    <br />

    &nbsp;&nbsp;<span className="text-purple-600">const</span>{" "}
    onClickHandler = () =&gt; {"{"}
    <br />

    &nbsp;&nbsp;&nbsp;&nbsp;focusPoint.current.value = "The quick brown fox jumps over the lazy dog";
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;focusPoint.current.focus();
    <br />

    &nbsp;&nbsp;{"}"};
    <br /><br />

    &nbsp;&nbsp;<span className="text-purple-600">return</span> (
    <br />

    &nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className="text-red-500">Fragment</span>&gt;
    <br />

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div&gt;
    <br />

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;button onClick={"{"}onClickHandler{"}"}&gt;
    ACTION
    &lt;/button&gt;
    <br />

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;
    <br /><br />

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;label&gt;
    Click on the action button to focus and populate the text.
    &lt;/label&gt;
    <br />

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;br /&gt;
    <br />

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;textarea ref={"{"}focusPoint{"}"} /&gt;
    <br />

    &nbsp;&nbsp;&nbsp;&nbsp;&lt;/Fragment&gt;
    <br />

    &nbsp;&nbsp;);
    <br />
    {"}"}
    <br /><br />

    <span className="text-purple-600">export default</span> App;
  </code>
</pre>

        <ul className="list-[square] space-y-1 mt-5">
            <li>useRef makes a reference called focusPoint so you can work directly with <span className="lg:ml-0 ml-5">the</span> DOM element.</li>
            <li>Pressing the "ACTION" button triggers onClickHandler, which fills the textarea <span className="lg:ml-0 ml-5">and</span> focuses on it.</li>
            <li>{'<Fragment>'} (<>...</>) helps wrap multiple elements without creating extra HTML <span className="lg:ml-0 ml-5">tags</span>.</li>
        </ul>


        <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Persisting Values Across Renders</h2>
        <p>In addition to DOM manipulation, useRef provides a way to persist values across component renders. A typical use case is retaining the previous state or props.</p>
      <pre className="bg-gray-100 p-4 rounded-lg mt-5 overflow-x-auto text-sm">
  <code>
    <span className="text-purple-600">import</span>{" "}
    React,{" "}
    <span className="text-blue-500">{`{ useState, useRef, useEffect }`}</span>{" "}
    <span className="text-purple-600">from</span>{" "}
    <span className="text-green-600">"react"</span>;

    <br /><br />

    <span className="text-purple-600">function</span>{" "}
    <span className="text-yellow-600">PreviousValue</span>() {"{"}
    <br />

    &nbsp;&nbsp;<span className="text-purple-600">const</span>{" "}
    [count, setCount] ={" "}
    <span className="text-blue-500">useState</span>(0);
    <br />

    &nbsp;&nbsp;<span className="text-purple-600">const</span>{" "}
    prevCountRef = <span className="text-blue-500">useRef</span>();
    <br /><br />

    &nbsp;&nbsp;<span className="text-blue-500">useEffect</span>(() =&gt; {"{"}
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;prevCountRef.current = count;
    <br />
    &nbsp;&nbsp;{"}"}, [count]);
    <br /><br />

    &nbsp;&nbsp;<span className="text-purple-600">return</span> (
    <br />

    &nbsp;&nbsp;&nbsp;&nbsp;&lt;div&gt;
    <br />

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;p&gt;Current count: {"{"}count{"}"}&lt;/p&gt;
    <br />

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;p&gt;Previous count: {"{"}prevCountRef.current{"}"}&lt;/p&gt;
    <br />

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;button onClick={"{"}() =&gt; setCount(count + 1){"}"}&gt;
    Increment
    &lt;/button&gt;
    <br />

    &nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;
    <br />
    &nbsp;&nbsp;);
    <br />
    {"}"}
    <br /><br />

    <span className="text-purple-600">export default</span> PreviousValue;
  </code>
</pre>

        <ul className="list-[square] space-y-1 mt-5">
            <li>count is a state variable for the current count.</li>
            <li>prevCountRef is a useRef reference that stores the previous count.</li>
            <li>When count changes, useEffect updates prevCountRef.current with the previous value.</li>
            <li>Clicking the button increments count and updates both the current and previous counts.</li>
        </ul>

        <h2 className="text-2xl text-gray-800 font-semibold mt-10">Why Use useRef?</h2>
        <ul className="list-[square] space-y-1 mt-5">
            <li><span className="font-semibold">Direct DOM Manipulation:</span>useRef allows you to access and modify DOM elements directly without causing a component re-render , making it ideal for focus control, animations, or other direct DOM operations.</li>
            <li><span className="font-semibold">Persisting Values Across Renders:</span>You can store values in a ref (like previous state or props) that remain consistent across renders. Unlike state, updating these values does not trigger unnecessary re-renders.</li>
            <li><span className="font-semibold">Optimizing Performance:</span>By preventing unnecessary re-renders, useRef improves performance, especially when handling timers, DOM references, or other non-UI data that doesn’t affect the component’s visual output.</li>
        </ul>
  
        </div>
    )
}

export default UseRefHooks;