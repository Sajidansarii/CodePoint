import React from "react";

const UseStateHooks = () => {
    return(
        <div className="max-w-4xl p-6 mt-10">
            <h1 className="lg:text-3xl text-2xl text-blue-500 font-semibold mb-3">React UseState Hooks</h1>
            <p>The <span className="text-red-400">useState hook</span> lets you add state to functional components. It’s simpler than useReducer for basic updates. To use it, you need to import it into your component.</p>
            
            <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Syntax</h2>
            <pre className="text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5">
                <code>
                    {`const [state, setState] = useState(initialState)`}
                </code>
            </pre>

            <ul className="list-[square] list-inside space-y-1 mt-5">
                <li><span className="font-bold">State</span> refers to the current value of a variable in a component that determines how it behaves or renders.</li>
                <li><span className="font-bold">setState</span> is the function used to change the value of the state.</li>
                <li><span className="font-bold">initialState</span> represents the default value assigned to the state when a component mounts.</li>
            </ul>

            <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">How Does useState() Work?</h2>
            <p className="mb-3">The <span className="text-red-400">useState()</span> hook lets you add state to React functional components. It works like this:</p>
             <p>Using useState(initialValue) creates a state variable for your component and provides an associated function to update that state whenever needed.I can also make 5–10 more creative, simplified, or note-friendly versions for easier studying or tutorials. Do you want me to do that?</p>
            <pre className="text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5">
                <code>
                    {`const [count, setCount] = useState(0);`}
                </code>
            </pre>

            <p className="mt-5 mb-3">React keeps the state value even when the component re-renders. Every render uses the latest count value.</p>
             <p>When the setCount(newValue) function is called, React updates the state and re-renders the component to reflect the new state.</p>
           <pre className="text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5">
            <code>
                {`<button onClick={() => setCount(count + 1)}>Increment</button>`}
            </code>
           </pre>

           <p className="mt-5">React re-renders only the component using useState, so the UI updates automatically when the state changes.</p>
          
          <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Implementing the useState hook</h2>
          <p>Here’s how to implement the useState hook:</p>
          
          <h2 className="text-2xl text-gra8 font-semibold mt-5 mb-3">Counter using useState</h2>
          <p>A common example of useState usage is managing a counter’s state, providing functions to increment or decrement its value.</p>
         <pre className="text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5">
            <code>
                {`import { useState } from 'react';
export default function Counter() {
    const [count, setCount] = useState(0);

    function handleClick() {
        setCount(count + 1);
    }
    return (
        <button onClick={handleClick}>
            Click {count} me
        </button>
    );
}`}
            </code>
         </pre>

         <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Managing Form Input State</h2>
         <p>The useState hook is useful for dynamically managing the values of form input fields.</p>
         <pre className="text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5">
            <code>
                {`import React, { useState } from 'react';

function Form() {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = () => {
        setSubmitted(true);
    };

    return (
        <div>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
            />
            <input
                type="number"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                placeholder="Enter your age"
            />
            <button onClick={handleSubmit}>Submit</button>
            {submitted && <p>Form Submitted!</p>}
        </div>
    );
}

export default Form;`}
            </code>
         </pre>
         <ul className="list-[square] list-inside space-y-1 mt-5">
            <li>onChange={(e) => setAge(e.target.value)}: Updates age as the user <span className="lg:ml-0 ml-5">types</span>.</li>
            <li>onChange={(e) => setName(e.target.value)}: Updates name as the user <span className="lg:ml-0 ml-5">types</span>.</li>
            <li>useState(''): Starts name and age with <span className="lg:ml-5 ml-5">empty</span> strings.</li>
            <li>setSubmitted(true): Marks the form as <span className="lg:ml-0 ml-5">submitted</span>.</li>
         </ul>

         <p className="mt-5">The useState hook is well-suited for straightforward state management tasks, including toggling booleans, updating counters, and handling form inputs.</p>
         <pre className="text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5">
            <code>
                {`const [count, setCount] = useState(0);`}
            </code>
         </pre>

         <p className="mt-5">When your new state depends on the previous state, use a function to update it to make sure the value is correct.</p>
         <pre className="text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5">
            <code>
                {`setCount(prevCount => prevCount + 1);`}
            </code>
         </pre>

         <p className="mt-5 mb-3">React state updates are asynchronous. Calling setState does not instantly change the state; instead, updates are batched to improve efficiency.</p>
        <p className="mb-3">When using useState, state objects are replaced rather than merged. To retain previous values, you must explicitly spread the existing state.</p>
       <p>useState can store any type of data, like objects, arrays, or functions, not just simple values.For expensive initializations, you can pass a function so the state is computed only once.</p>
      <pre className="text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5">
        <code>
            {`const [count, setCount] = useState(() => computeInitialValue());`}
        </code>
      </pre>

      <p className="mt-5">React will not trigger a re-render if the state is updated with a value that is equal to the current state, helping prevent unnecessary updates.</p>
       <pre className="text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5">
        <code>
            {`const [value, setValue] = useState(10);
setValue(10); // No re-render happens`}
        </code>
       </pre>

       <h2 className="text-2xl text-gray-800 font-semibold mt-5">When to Use useState</h2>
       <ul className="list-[square] list-inside space-y-1 mt-5">
        <li>A straightforward state management <span className="lg:ml-0 ml-5">solution</span> is sufficient.</li>
        <li>The component maintains state that <span className="lg:ml-0 ml-5">evolves</span> over time.</li>
        <li>The state updates are simple and don’t <span className="lg:ml-0 ml-5">involve</span> intricate dependencies.</li>
       </ul>

      
        </div>
    )
}

export default UseStateHooks;