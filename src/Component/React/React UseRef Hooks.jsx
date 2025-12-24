import React from "react";

const UseRefHooks = () => {
    return(
        <div className="max-w-4xl p-6 mt-10">
         <h1 className="text-3xl text-blue-500 font-semibold mb-3">React UseRef Hooks</h1>
        <p>The <span className="text-red-400">useRef Hook</span> is a React Hook that gives you a mutable reference object which stays the same across renders. Changing it won’t cause the component to re-render.</p>
        
        <h2 className="text-2xl text-gray-800 font-semibold mt-5">Syntax</h2>
        <pre className="text-green-400 bg-gray-800 p-4 rounded-lg mt-5">
            <code>
                {`const refContainer = useRef(initialValue);`}
            </code>
        </pre>

        <p className="mt-5">The useRef Hook gives an object with a current property set to the initial value. Updating current does not trigger a re-render.</p>
        

        <h2 className="text-2xl text-gray-800 font-semibold mt-10">Implementing the useRef hook</h2>
        <h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">Accessing the DOM using useRef hook.</h2>
        <p>Here, we have a button called ACTION. Clicking the button triggers onClickHandler, which uses useRef to focus the textarea.</p>
        <pre className="text-green-400 bg-gray-900 p-4 rounded-lg mt-5">
            <code>
                {`import React, { Fragment, useRef } from 'react';

function App() {
    const focusPoint = useRef(null);
    const onClickHandler = () => {
        focusPoint.current.value =
            "The quick brown fox jumps over the lazy dog";
        focusPoint.current.focus();
    };
    return (
        <Fragment>
            <div>
                <button onClick={onClickHandler}>
                    ACTION
                </button>
            </div>
            <label>
                Click on the action button to
                focus and populate the text.
            </label><br />
            <textarea ref={focusPoint} />
        </Fragment>
    );
};
export default App;`}
            </code>
        </pre>

        <ul className="list-[square] list-inside space-y-1 mt-5">
            <li>useRef makes a reference called focusPoint so you can work directly with the DOM element.</li>
            <li>Pressing the "ACTION" button triggers onClickHandler, which fills the textarea and focuses on it.</li>
            <li>{'<Fragment>'} (<>...</>) helps wrap multiple elements without creating extra HTML tags.</li>
        </ul>


        <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Persisting Values Across Renders</h2>
        <p>In addition to DOM manipulation, useRef provides a way to persist values across component renders. A typical use case is retaining the previous state or props.</p>
        <pre className="text-green-400 bg-gray-900 p-r rounded-lg mt-5">
            <code>
                {`import React, { useState, useRef, useEffect } from "react";
function PreviousValue() {
    const [count, setCount] = useState(0);
    const prevCountRef = useRef();

    useEffect(() => {
        prevCountRef.current = count;
    }, [count]);

    return (
        <div>
            <p>Current count: {count}</p>
            <p>Previous count: {prevCountRef.current}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
}
export default PreviousValue;`}
            </code>
        </pre>

        <ul className="list-[square] list-inside space-y-1 mt-5">
            <li>count is a state variable for the current count.</li>
            <li>prevCountRef is a useRef reference that stores the previous count.</li>
            <li>When count changes, useEffect updates prevCountRef.current with the previous value.</li>
            <li>Clicking the button increments count and updates both the current and previous counts.</li>
        </ul>

        <h2 className="text-2xl text-gray-800 font-semibold mt-10">Why Use useRef?</h2>
        <ul className="list-[square] list-inside space-y-1 mt-5">
            <li><span className="font-semibold">Direct DOM Manipulation:</span>useRef allows you to access and modify DOM elements directly without causing a <span className="ml-5">component</span> re-render, making it ideal for focus control, animations, or other direct DOM operations.</li>
            <li><span className="font-semibold">Persisting Values Across Renders:</span>You can store values in a ref (like previous state or props) that remain consistent <span className="ml-5">across</span> renders. Unlike state, updating these values does not trigger unnecessary re-renders.</li>
            <li><span className="font-semibold">Optimizing Performance:</span>By preventing unnecessary re-renders, useRef improves performance, especially when <span className="ml-5">handling</span> timers, DOM references, or other non-UI data that doesn’t affect the component’s visual output.</li>
        </ul>


        
        
        
        
        
        </div>
    )
}

export default UseRefHooks;