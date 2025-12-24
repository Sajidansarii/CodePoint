import React from "react";

const UseMemoHooks = () => {
    
    return(
        <div className="max-w-4xl p-6 mt-10">
            <h1 className="text-3xl text-blue-500 font-semibold mb-3">React UseMemo Hooks</h1>
            <p>The useMemo Hook optimizes performance by memoizing a computation’s result, ensuring it is recalculated only when specified dependencies change.</p>
           
           <h2 className="text-2xl text-gray-800 font-semibold mt-5">Syntax</h2>
           <pre className="text-green-400 bg-gray-900 p-4 rounded-lg mt-5">
            <code>
                {`const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);`}
            </code>
           </pre>

           <p className="mt-5">The first argument is a callback returning the memoized value. The second argument is a dependency array that dictates when the memoization should be invalidated and recomputed.</p>


         <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Optimizing Expensive Calculations</h2>
         <p>Consider a case where a performance-heavy calculation must be memoized to prevent re-execution on each render.</p>
         <pre className="text-green-400 bg-gray-900 p-4 rounded-lg mt-5">
            <code>
                {`import React, { useState, useMemo } from "react";

function App() {
    const [number, setNumber] = useState(0);
    const squaredNum = useMemo(() => squareNum(number), [number]);
    const [counter, setCounter] = useState(0);
    const onChangeHandler = (e) => {
        setNumber(e.target.value);
    };
    const counterHander = () => {
        setCounter(counter + 1);
    };
    return (
        <div className="App">
            <h1>Welcome to Geeksforgeeks</h1>
            <input
                type="number"
                placeholder="Enter a number"
                value={number}
                onChange={onChangeHandler}
            ></input>

            <div>OUTPUT: {squaredNum}</div>
            <button onClick={counterHander}>Counter ++</button>
            <div>Counter : {counter}</div>
        </div>
    );
}
function squareNum(number) {
    console.log("Squaring will be done!");
    return Math.pow(number, 2);
}
export default App;`}
            </code>
         </pre>

         <ul className="list-[square] list-inside space-y-1 mt-5">
            <li><span className="text-red-400">useState</span> tracks number from the input and counter from button interactions.</li>
            <li>useMemo memoizes squareNum(number) for performance, recalculating only on number change.</li>
            <li>Input changes trigger number state updates.</li>
            <li>Button click updates counter.</li>
            <li>Component renders the input field, memoized square, and current counter.</li>
         </ul>


         <h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">Preventing Unnecessary Re-renders</h2>
        <p>Sometimes, giving a child component an object or array as a prop makes it re-render too often. Using useMemo can help keep the value the same and avoid extra renders.</p>
       <pre className="text-green-400 bg-gray-900 p-4 rounded-lg mt-5">
        <code>
            {`import React, { useState, useMemo } from "react";

function Child({ userInfo }) {
    console.log("Child component rendered");
    return <p>User: {userInfo.name}</p>;
}
function Parent() {
    const [count, setCount] = useState(0);
    const userInfo = useMemo(() => ({ name: "GeeksforGeeks" }), []);
    return (
        <div>
            <p>Count: {count}</p>
            <Child userInfo={userInfo} />
            <button onClick={() => setCount(count + 1)}>Increment Count</button>
        </div>
    );
}
export default Parent;`}
        </code>
       </pre>

       <ul className="list-[square] list-inside space-y-1 mt-5">
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
     
     <ul className="list-[square] list-inside space-y-1 mt-5">
        <li><span className="font-semibold">Performance Optimization:</span> useMemo avoids recalculating expensive computations.</li>
        <li><span className="font-semibold">Prevent Unnecessary Re-renders</span>: It stabilizes object and array references passed as props.</li>
        <li><span className="font-semibold">Use with Care</span>: Overusing useMemo can make your code more complex.</li>
     </ul>
     








        </div>
    )
}

export default UseMemoHooks; 