import React from "react";

const UseMemoHooks = () => {
    
    return(
        <div className="max-w-4xl p-6 mt-10">
            <h1 className="lg:text-3xl text-2xl text-blue-500 font-semibold mb-3">React UseMemo Hooks</h1>
            <p>The useMemo Hook optimizes performance by memoizing a computation’s result, ensuring it is recalculated only when specified dependencies change.</p>
           
           <h2 className="text-2xl text-gray-800 font-semibold mt-5">Syntax</h2>
           <pre className="bg-gray-100 p-4 rounded-lg mt-5 overflow-x-auto">
  <code className="text-sm">
    <span className="text-blue-600">const</span>{" "}
    <span className="text-black">memoizedValue</span>{" "}
    <span className="text-gray-500">=</span>{" "}
    <span className="text-purple-600">useMemo</span>
    <span className="text-black">(() =&gt; </span>
    <span className="text-yellow-600">computeExpensiveValue</span>
    <span className="text-black">(a, b), [a, b]);</span>
  </code>
</pre>
           <p className="mt-5">The first argument is a callback returning the memoized value. The second argument is a dependency array that dictates when the memoization should be invalidated and recomputed.</p>


         <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Optimizing Expensive Calculations</h2>
         <p>Consider a case where a performance-heavy calculation must be memoized to prevent re-execution on each render.</p>
<pre className="bg-gray-100 p-4 rounded-lg mt-5 overflow-x-auto text-sm">
  <code>
    <span className="text-purple-600">import</span>{" "}
    React,{" "}
    <span className="text-blue-500">{`{ useState, useMemo }`}</span>{" "}
    <span className="text-purple-600">from</span>{" "}
    <span className="text-green-600">"react"</span>;

    <br /><br />

    <span className="text-purple-600">function</span>{" "}
    <span className="text-yellow-600">App</span>() {"{"}
    <br />

    &nbsp;&nbsp;<span className="text-purple-600">const</span>{" "}
    [number, setNumber] ={" "}
    <span className="text-blue-500">useState</span>(0);
    <br />

    &nbsp;&nbsp;<span className="text-purple-600">const</span>{" "}
    squaredNum ={" "}
    <span className="text-blue-500">useMemo</span>(() =&gt; squareNum(number), [number]);
    <br />

    &nbsp;&nbsp;<span className="text-purple-600">const</span>{" "}
    [counter, setCounter] ={" "}
    <span className="text-blue-500">useState</span>(0);
    <br /><br />

    &nbsp;&nbsp;<span className="text-purple-600">const</span>{" "}
    onChangeHandler = (e) =&gt; {"{"}
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;setNumber(e.target.value);
    <br />
    &nbsp;&nbsp;{"}"};
    <br /><br />

    &nbsp;&nbsp;<span className="text-purple-600">const</span>{" "}
    counterHandler = () =&gt; {"{"}
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;setCounter(counter + 1);
    <br />
    &nbsp;&nbsp;{"}"};
    <br /><br />

    &nbsp;&nbsp;<span className="text-purple-600">return</span> (
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;&lt;div className="App"&gt;
    <br />

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;h1&gt;Welcome to Geeksforgeeks&lt;/h1&gt;
    <br /><br />

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;input
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;type="number"
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;placeholder="Enter a number"
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;value={"{"}number{"}"}
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;onChange={"{"}onChangeHandler{"}"}
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/&gt;
    <br /><br />

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div&gt;OUTPUT: {"{"}squaredNum{"}"}&lt;/div&gt;
    <br />

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;button onClick={"{"}counterHandler{"}"}&gt;
    Counter ++
    &lt;/button&gt;
    <br />

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div&gt;Counter : {"{"}counter{"}"}&lt;/div&gt;
    <br />

    &nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;
    <br />
    &nbsp;&nbsp;);
    <br />
    {"}"}

    <br /><br />

    <span className="text-purple-600">function</span>{" "}
    <span className="text-yellow-600">squareNum</span>(number) {"{"}
    <br />
    &nbsp;&nbsp;console.log("Squaring will be done!");
    <br />
    &nbsp;&nbsp;<span className="text-purple-600">return</span>{" "}
    Math.pow(number, 2);
    <br />
    {"}"}

    <br /><br />

    <span className="text-purple-600">export default</span> App;
  </code>
</pre>
         <ul className="list-[square] space-y-1 mt-5">
            <li><span className="text-red-400">useState</span> tracks number from the input <span className="lg:ml-0 ml-5">and</span> counter from button interactions.</li>
            <li>useMemo memoizes squareNum (number) for performance, recalculating <span className="lg:ml-0 ml-5">only</span> on number change.</li>
            <li>Input changes trigger number state updates.</li>
            <li>Button click updates counter.</li>
            <li>Component renders the input field, memoized square, and current counter.</li>
         </ul>


         <h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">Preventing Unnecessary Re-renders</h2>
        <p>Sometimes, giving a child component an object or array as a prop makes it re-render too often. Using useMemo can help keep the value the same and avoid extra renders.</p>
    <pre className="bg-gray-100 p-4 rounded-lg mt-5 overflow-x-auto text-sm">
  <code>
    <span className="text-purple-600">import</span>{" "}
    React,{" "}
    <span className="text-blue-500">{`{ useState, useMemo }`}</span>{" "}
    <span className="text-purple-600">from</span>{" "}
    <span className="text-green-600">"react"</span>;

    <br /><br />

    <span className="text-purple-600">function</span>{" "}
    <span className="text-yellow-600">Child</span>({`{ userInfo }`}) {"{"}
    <br />
    &nbsp;&nbsp;console.log("Child component rendered");
    <br />
    &nbsp;&nbsp;<span className="text-purple-600">return</span>{" "}
    &lt;p&gt;User: {"{userInfo.name}"}&lt;/p&gt;;
    <br />
    {"}"}

    <br /><br />

    <span className="text-purple-600">function</span>{" "}
    <span className="text-yellow-600">Parent</span>() {"{"}
    <br />

    &nbsp;&nbsp;<span className="text-purple-600">const</span>{" "}
    [count, setCount] = <span className="text-blue-500">useState</span>(0);
    <br />

    &nbsp;&nbsp;<span className="text-purple-600">const</span>{" "}
    userInfo = <span className="text-blue-500">useMemo</span>(() =&gt; (
    {"{ name: \"GeeksforGeeks\" }"}
    ), []);
    <br /><br />

    &nbsp;&nbsp;<span className="text-purple-600">return</span> (
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;&lt;div&gt;
    <br />

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;p&gt;Count: {"{count}"}&lt;/p&gt;
    <br />

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Child userInfo={"userInfo"} /&gt;
    <br />

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;button onClick={"() =&gt; setCount(count + 1)"}&gt;
    Increment Count
    &lt;/button&gt;
    <br />

    &nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;
    <br />
    &nbsp;&nbsp;);
    <br />
    {"}"}

    <br /><br />

    <span className="text-purple-600">export default</span> Parent;
  </code>
</pre>

       <ul className="list-[square] space-y-1 mt-5">
        <li>The app imports React, useState, and useMemo for state handling and memoization.</li>
        <li>ChildComponent renders userInfo.name and logs its render activity.</li>
        <li>ChildComponent renders userInfo.name and logs its render activity.</li>
        <li>Clicking the increment button updates the count state, re-rendering the parent component.</li>
        <li>Clicking the increment button updates the count state, re-rendering the parent component.</li>
       </ul>


       <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">When to Use useMemo?</h2>
       <p className="mb-3">When you have computations that take a lot of time, you don’t want them running on every render. useMemo lets you save the result and only recalculate it when needed. This improves performance, especially with big data. It also keeps objects or arrays stable, so child components don’t re-render unnecessarily.</p>
       <p>While useMemo can improve performance, using it too much can add unnecessary complexity and memory overhead. Use it sparingly, only where it provides a benefit.</p>
      
      <h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">Performance Optimization Using useMemo</h2>
      <p className="mb-3">Applying useMemo appropriately can optimize component performance in React applications. Conversely, improper or excessive use may result in unnecessary memory consumption and added complexity. Consider the following guidelines:</p>
      <p>Don’t use useMemo for easy calculations, because it can make your code more complicated without helping. Save it for heavy tasks, like working with big datasets or performing slow calculations. You can also use it to keep objects or arrays stable when giving them to child components so they don’t re-render unnecessarily. Always check your app’s performance first with tools like React DevTools before deciding to use useMemo.</p>
     
     <ul className="list-[square] space-y-1 mt-5">
        <li><span className="font-semibold">Performance Optimization:</span> useMemo avoids recalculating expensive computations.</li>
        <li><span className="font-semibold">Prevent Unnecessary Re-renders</span>: It stabilizes object and array references passed as props.</li>
        <li><span className="font-semibold">Use with Care</span>: Overusing useMemo can make your code more complex.</li>
     </ul>
     
        </div>
    )
}

export default UseMemoHooks; 