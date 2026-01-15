import React from "react";

const UseRefHooks = () => {
    return(
        <div className="max-w-4xl p-6 mt-10">
         <h1 className="lg:text-3xl text-2xl text-blue-500 font-semibold mb-3">React UseRef Hooks</h1>
        <p>The <span className="text-red-400">useRef Hook</span> is a React Hook that gives you a mutable reference object which stays the same across renders. Changing it won’t cause the component to re-render.</p>
        
        <h2 className="text-2xl text-gray-800 font-semibold mt-5">Syntax</h2>
        <pre className="text-green-400 overflow-x-auto bg-gray-800 p-4 rounded-lg mt-5">
            <code>
                {`const refContainer = useRef(initialValue);`}
            </code>
        </pre>

        <p className="mt-5">The useRef Hook gives an object with a current property set to the initial value. Updating current does not trigger a re-render.</p>
        

        <h2 className="text-2xl text-gray-800 font-semibold mt-10">Implementing the useRef hook</h2>
        <h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">Accessing the DOM using useRef hook.</h2>
        <p>Here, we have a button called ACTION. Clicking the button triggers onClickHandler, which uses useRef to focus the textarea.</p>
        <pre className="text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5">
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
            <li>useRef makes a reference called <span className="lg:ml-0 ml-5">focusPoint</span> so you can work directly with <span className="lg:ml-0 ml-5">the</span> DOM element.</li>
            <li>Pressing the "ACTION" button triggers <span className="lg:ml-0 ml-5">onClickHandler</span>, which fills the textarea <span className="lg:ml-0 ml-5">and</span> focuses on it.</li>
            <li>{'<Fragment>'} (<>...</>) helps wrap multiple <span className="lg:ml-0 ml-5">elements</span> without creating extra HTML <span className="lg:ml-0 ml-5">tags</span>.</li>
        </ul>


        <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Persisting Values Across Renders</h2>
        <p>In addition to DOM manipulation, useRef provides a way to persist values across component renders. A typical use case is retaining the previous state or props.</p>
        <pre className="text-green-400 overflow-x-auto bg-gray-900 p-r rounded-lg mt-5">
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
            <li>count is a state variable for the current <span className="lg:ml-0 ml-5">count</span>.</li>
            <li>prevCountRef is a useRef reference that <span className="lg:ml-0 ml-5">stores</span> the previous count.</li>
            <li>When count changes, useEffect updates <span className="lg:ml-0 ml-5">prevCountRef</span>.current with the previous <span className="lg:ml-0 ml-5">value</span>.</li>
            <li>Clicking the button increments count <span className="lg:ml-0 ml-5">and</span> updates both the current and <span className="lg:ml-0 ml-5">previous</span> counts.</li>
        </ul>

        <h2 className="text-2xl text-gray-800 font-semibold mt-10">Why Use useRef?</h2>
        <ul className="list-[square] list-inside space-y-1 mt-5">
            <li><span className="font-semibold">Direct DOM Manipulation:</span>useRef allows <span className="lg:ml-0 ml-5">you</span> to access and modify DOM elements <span className="lg:ml-0 ml-5">directly</span> without causing a component <span className="lg:ml-0 ml-5">re-render</span> , making it ideal for focus <span className="lg:ml-0 ml-5">control</span>, animations, or other direct DOM <span className="lg:ml-0 ml-5">operations</span>.</li>
            <li><span className="font-semibold">Persisting Values Across Renders:</span>You <span className="lg:ml-0 ml-5">can</span> store values in a ref (like previous <span className="lg:ml-0 ml-5">state</span> or props) that remain consistent <span className="ml-5">across</span> renders. Unlike state, updating <span className="lg:ml-0 ml-5">these</span> values does not trigger <span className="lg:ml-0 ml-5">unnecessary</span> re-renders.</li>
            <li><span className="font-semibold">Optimizing Performance:</span>By preventing <span className="lg:ml-0 ml-5">unnecessary</span> re-renders, useRef improves <span className="lg:ml-0 ml-5">performance</span>, especially when handling <span className="ml-5">timers</span>, DOM references, or other non-UI <span className="lg:ml-0 ml-5">data</span> that doesn’t affect the component’s <span className="lg:ml-0 ml-5">visual</span> output.</li>
        </ul>
  
        </div>
    )
}

export default UseRefHooks;