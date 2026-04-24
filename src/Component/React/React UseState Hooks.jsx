import React from "react";

const UseStateHooks = () => {
    return(
        <div className="max-w-4xl p-6 mt-10">
            <h1 className="lg:text-3xl text-2xl text-blue-500 font-semibold mb-3">React UseState Hooks</h1>
            <p>The <span className="text-red-400">useState hook</span> lets you add state to functional components. It’s simpler than useReducer for basic updates. To use it, you need to import it into your component.</p>
            
            <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Syntax</h2>
           <pre className="bg-gray-100 p-4 rounded-lg mt-5 overflow-x-auto text-sm">
  <code>
    <span className="text-purple-600">const</span>{" "}
    [state, setState] ={" "}
    <span className="text-blue-500">useState</span>(initialState);
  </code>
</pre>

            <ul className="list-[square] space-y-1 mt-5">
                <li><span className="font-bold">State</span> refers to the current value of a variable in a component that determines how it behaves or renders.</li>
                <li><span className="font-bold">setState</span> is the function used to change the value of the state.</li>
                <li><span className="font-bold">initialState</span> represents the default value assigned to the state when a component mounts.</li>
            </ul>

            <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">How Does useState() Work?</h2>
            <p className="mb-3">The <span className="text-red-400">useState()</span> hook lets you add state to React functional components. It works like this:</p>
             <p>Using useState(initialValue) creates a state variable for your component and provides an associated function to update that state whenever needed.I can also make 5–10 more creative, simplified, or note-friendly versions for easier studying or tutorials. Do you want me to do that?</p>
           <pre className="bg-gray-100 p-4 rounded-lg mt-5 overflow-x-auto text-sm">
  <code>
    <span className="text-purple-600">const</span>{" "}
    [count, setCount] ={" "}
    <span className="text-blue-500">useState</span>(0);
  </code>
</pre>
            <p className="mt-5 mb-3">React keeps the state value even when the component re-renders. Every render uses the latest count value.</p>
             <p>When the setCount(newValue) function is called, React updates the state and re-renders the component to reflect the new state.</p>
        <pre className="bg-gray-100 p-4 rounded-lg mt-5 overflow-x-auto text-sm">
  <code>
    <span className="text-red-500">&lt;button</span>{" "}
    <span className="text-purple-600">onClick</span>=
    <span className="text-black">{"{"}</span>
    <span className="text-blue-500">()</span>{" "}
    <span className="text-gray-500">=&gt;</span>{" "}
    <span className="text-yellow-600">setCount</span>
    <span className="text-black">(count + 1)</span>
    <span className="text-black">{"}"}</span>
    <span className="text-red-500">&gt;</span>
    Increment
    <span className="text-red-500">&lt;/button&gt;</span>
  </code>
</pre>

           <p className="mt-5">React re-renders only the component using useState, so the UI updates automatically when the state changes.</p>
          
          <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Implementing the useState hook</h2>
          <p>Here’s how to implement the useState hook:</p>
          
          <h2 className="text-2xl text-gra8 font-semibold mt-5 mb-3">Counter using useState</h2>
          <p>A common example of useState usage is managing a counter’s state, providing functions to increment or decrement its value.</p>
       <pre className="bg-gray-100 p-4 rounded-lg mt-5 overflow-x-auto text-sm">
  <code>
    <span className="text-purple-600">import</span>{" "}
    {"{ useState }"}{" "}
    <span className="text-purple-600">from</span>{" "}
    <span className="text-green-600">'react'</span>;

    <br /><br />

    <span className="text-purple-600">export default function</span>{" "}
    <span className="text-yellow-600">Counter</span>() {"{"}
    <br />

    &nbsp;&nbsp;<span className="text-purple-600">const</span>{" "}
    [count, setCount] ={" "}
    <span className="text-blue-500">useState</span>(0);
    <br /><br />

    &nbsp;&nbsp;<span className="text-purple-600">function</span>{" "}
    handleClick() {"{"}
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;setCount(count + 1);
    <br />
    &nbsp;&nbsp;{"}"}
    <br /><br />

    &nbsp;&nbsp;<span className="text-purple-600">return</span> (
    <br />

    &nbsp;&nbsp;&nbsp;&nbsp;&lt;button onClick={"{"}handleClick{"}"}&gt;
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Click {"{"}count{"}"} me
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;&lt;/button&gt;
    <br />

    &nbsp;&nbsp;);
    <br />
    {"}"}
  </code>
</pre>

         <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Managing Form Input State</h2>
         <p>The useState hook is useful for dynamically managing the values of form input fields.</p>
       <pre className="bg-gray-100 p-4 rounded-lg mt-5 overflow-x-auto text-sm">
  <code>
    <span className="text-purple-600">import</span>{" "}
    React,{" "}
    <span className="text-blue-500">{`{ useState }`}</span>{" "}
    <span className="text-purple-600">from</span>{" "}
    <span className="text-green-600">'react'</span>;

    <br /><br />

    <span className="text-purple-600">function</span>{" "}
    <span className="text-yellow-600">Form</span>() {"{"}
    <br />

    &nbsp;&nbsp;<span className="text-purple-600">const</span>{" "}
    [name, setName] = <span className="text-blue-500">useState</span>('');
    <br />

    &nbsp;&nbsp;<span className="text-purple-600">const</span>{" "}
    [age, setAge] = <span className="text-blue-500">useState</span>('');
    <br />

    &nbsp;&nbsp;<span className="text-purple-600">const</span>{" "}
    [submitted, setSubmitted] = <span className="text-blue-500">useState</span>(false);
    <br /><br />

    &nbsp;&nbsp;<span className="text-purple-600">const</span>{" "}
    handleSubmit = () =&gt; {"{"}
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;setSubmitted(true);
    <br />
    &nbsp;&nbsp;{"}"};
    <br /><br />

    &nbsp;&nbsp;<span className="text-purple-600">return</span> (
    <br />

    &nbsp;&nbsp;&nbsp;&nbsp;&lt;div&gt;
    <br />

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;input
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;type="text"
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;value={"{"}name{"}"}
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;onChange={"{"}(e) =&gt; setName(e.target.value){"}"}
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;placeholder="Enter your name"
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/&gt;
    <br /><br />

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;input
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;type="number"
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;value={"{"}age{"}"}
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;onChange={"{"}(e) =&gt; setAge(e.target.value){"}"}
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;placeholder="Enter your age"
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/&gt;
    <br /><br />

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;button onClick={"{"}handleSubmit{"}"}&gt;
    Submit
    &lt;/button&gt;
    <br /><br />

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"{"}submitted && &lt;p&gt;Form Submitted!&lt;/p&gt;{"}"}
    <br />

    &nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;
    <br />
    &nbsp;&nbsp;);
    <br />
    {"}"}
    <br /><br />

    <span className="text-purple-600">export default</span> Form;
  </code>
</pre>

         <ul className="list-[square] space-y-1 mt-5">
            <li>onChange={(e) => setAge(e.target.value)}: Updates age as the user types.</li>
            <li>onChange={(e) => setName(e.target.value)}: Updates name as the user types.</li>
            <li>useState(''): Starts name and age with empty strings.</li>
            <li>setSubmitted(true): Marks the form as submitted.</li>
         </ul>

         <p className="mt-5">The useState hook is well-suited for straightforward state management tasks, including toggling booleans, updating counters, and handling form inputs.</p>
        <pre className="bg-gray-100 p-4 rounded-lg mt-5 overflow-x-auto text-sm">
  <code>
    <span className="text-purple-600">const</span>{" "}
    [count, setCount] ={" "}
    <span className="text-blue-500">useState</span>(0);
  </code>
</pre>

         <p className="mt-5">When your new state depends on the previous state, use a function to update it to make sure the value is correct.</p>
       <pre className="bg-gray-100 p-4 rounded-lg mt-5 overflow-x-auto text-sm">
  <code>
    <span className="text-yellow-600">setCount</span>
    <span className="text-black">(</span>
    <span className="text-blue-500">prevCount</span>{" "}
    <span className="text-gray-500">=&gt;</span>{" "}
    <span className="text-blue-500">prevCount</span>{" "}
    <span className="text-gray-500">+</span>{" "}
    <span className="text-green-600">1</span>
    <span className="text-black">);</span>
  </code>
</pre>

         <p className="mt-5 mb-3">React state updates are asynchronous. Calling setState does not instantly change the state; instead, updates are batched to improve efficiency.</p>
        <p className="mb-3">When using useState, state objects are replaced rather than merged. To retain previous values, you must explicitly spread the existing state.</p>
       <p>useState can store any type of data, like objects, arrays, or functions, not just simple values.For expensive initializations, you can pass a function so the state is computed only once.</p>
     <pre className="bg-gray-100 p-4 rounded-lg mt-5 overflow-x-auto text-sm">
  <code>
    <span className="text-purple-600">const</span>{" "}
    [count, setCount] ={" "}
    <span className="text-blue-500">useState</span>
    <span className="text-black">(() =&gt; computeInitialValue());</span>
  </code>
</pre>

      <p className="mt-5">React will not trigger a re-render if the state is updated with a value that is equal to the current state, helping prevent unnecessary updates.</p>
     <pre className="bg-gray-100 p-4 rounded-lg mt-5 overflow-x-auto text-sm">
  <code>
    <span className="text-purple-600">const</span>{" "}
    [value, setValue] ={" "}
    <span className="text-blue-500">useState</span>(10);
    <br />
    <span className="text-yellow-600">setValue</span>(10);
    <span className="text-gray-500">{" "}// No re-render happens</span>
  </code>
</pre>

       <h2 className="text-2xl text-gray-800 font-semibold mt-5">When to Use useState</h2>
       <ul className="list-[square] space-y-1 mt-5">
        <li>A straightforward state management solution is sufficient.</li>
        <li>The component maintains state that evolves over time.</li>
        <li>The state updates are simple and don’t involve intricate dependencies.</li>
       </ul>

      
        </div>
    )
}

export default UseStateHooks;