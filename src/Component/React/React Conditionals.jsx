import React from "react";

const Conditional = () => {
    return (
        <div className="max-w-4xl p-6 mt-10">
            <h1 className="text-3xl text-blue-500 font-semibold mb-3">React Conditional</h1>
            <p>React allows you to render components conditionally.You can do this using several different approaches.</p>
            
            <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3"><span className="text-red-400">if</span> Statement</h2>
            <p>A JavaScript if condition can be used to determine which component is displayed.</p>
            <h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">Example</h2>
           <p>We will use the two components shown below.</p>
        <pre className="bg-gray-200 p-4 rounded-lg mt-5 overflow-x-auto text-sm">
  <code className="font-mono text-gray-900">

    <span className="text-purple-700">function</span>{" "}
    <span className="text-green-700">MissedGoal</span>() {"{"}
    {"\n"}
    {"  "}
    <span className="text-purple-700">return</span>{" "}
    &lt;<span className="text-red-600">h1</span>&gt;MISSED!&lt;/<span className="text-red-600">h1</span>&gt;;
    {"\n"}
    {"}"}
    {"\n\n"}

    <span className="text-purple-700">function</span>{" "}
    <span className="text-green-700">MadeGoal</span>() {"{"}
    {"\n"}
    {"  "}
    <span className="text-purple-700">return</span>{" "}
    &lt;<span className="text-red-600">h1</span>&gt;Goal!&lt;/<span className="text-red-600">h1</span>&gt;;
    {"\n"}
    {"}"}

  </code>
</pre>

          <h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">Example</h2>
          <p>Next, we will create a component that selects which component to render depending on a condition.</p>
        <pre className="bg-gray-200 p-4 rounded-lg mt-5 overflow-x-auto text-sm">
  <code className="font-mono text-gray-900">

    <span className="text-purple-700">function</span>{" "}
    <span className="text-green-700">Goal</span>(props) {"{"}
    {"\n"}

    {"  "}
    <span className="text-purple-700">const</span>{" "}
    isGoal = props.isGoal;
    {"\n"}

    {"  "}
    <span className="text-purple-700">if</span> (isGoal) {"{"}
    {"\n"}

    {"    "}
    <span className="text-purple-700">return</span>{" "}
    &lt;<span className="text-green-700">MadeGoal</span> /&gt;;
    {"\n"}

    {"  "}
    {"}"}
    {"\n"}

    {"  "}
    <span className="text-purple-700">return</span>{" "}
    &lt;<span className="text-green-700">MissedGoal</span> /&gt;;
    {"\n"}

    {"}"}
    {"\n\n"}

    <span className="text-blue-700">createRoot</span>(
    document.getElementById(<span className="text-yellow-700">'root'</span>)
    ).<span className="text-blue-700">render</span>(
    {"\n"}

    {"  "}
    &lt;<span className="text-green-700">Goal</span>{" "}
    isGoal={"{"}false{"}"} /&gt;
    {"\n"}

    );

  </code>
</pre>


          <p className="mt-5">Set the isGoal attribute to true and observe the result.</p>
           <h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">Example</h2>
          <pre className="bg-gray-200 p-4 rounded-lg mt-5 overflow-x-auto text-sm">
  <code className="font-mono text-gray-900">

    <span className="text-blue-700">createRoot</span>(
    document.getElementById(<span className="text-yellow-700">'root'</span>)
    ).<span className="text-blue-700">render</span>(
    {"\n"}

    {"  "}
    &lt;<span className="text-green-700">Goal</span>{" "}
    isGoal={"{"}true{"}"} /&gt;
    {"\n"}

    );

  </code>
</pre>

           <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Logical && Operator</h2>
           <p className="mb-3">You can also use the && operator to conditionally render components in React.</p>
           <p>The heading in the example will render only when the <span className="text-red-400">props.brand</span> property has a value.</p>
            
            <h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">Example</h2>
            <p>With the && operator, the right side will render only if the left side evaluates to true.</p>
          <pre className="bg-gray-200 p-4 rounded-lg mt-5 overflow-x-auto text-sm">
  <code className="font-mono text-gray-900">

    <span className="text-purple-700">function</span>{" "}
    <span className="text-green-700">Car</span>(props) {"{"}
    {"\n"}

    {"  "}
    <span className="text-purple-700">return</span> (
    {"\n"}

    {"    "}
    &lt;&gt;
    {"\n"}

    {"      "}
    {"{"}props.brand && (
    &lt;<span className="text-red-600">h1</span>&gt;
    My car is a {"{"}props.brand{"}"}!
    &lt;/<span className="text-red-600">h1</span>&gt;
    ){"}"}
    {"\n"}

    {"    "}
    &lt;/&gt;
    {"\n"}

    {"  "}
    );
    {"\n"}

    {"}"}
    {"\n\n"}

    <span className="text-blue-700">createRoot</span>(
    document.getElementById(<span className="text-yellow-700">'root'</span>)
    ).<span className="text-blue-700">render</span>(
    {"\n"}

    {"  "}
    &lt;<span className="text-green-700">Car</span>{" "}
    brand={<span className="text-yellow-700">"Ford"</span>} /&gt;
    {"\n"}

    );

  </code>
</pre>


            <p className="mt-5">If props.brand evaluates to true, the expression following && will be rendered.Try emptying the brand property to see the change.</p>
            <h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">Example</h2>
          <pre className="bg-gray-200 p-4 rounded-lg mt-5 overflow-x-auto text-sm">
  <code className="font-mono text-gray-900">

    <span className="text-blue-700">createRoot</span>(
    document.getElementById(<span className="text-yellow-700">'root'</span>)
    ).<span className="text-blue-700">render</span>(
    {"\n"}

    {"  "}
    &lt;<span className="text-green-700">Car</span> /&gt;
    {"\n"}

    );

  </code>
</pre>

            <h2 className="text-gray-800 text-2xl font-semibold mt-5 mb-3">Ternary Operator</h2>
            <p>Conditional rendering can be achieved through the use of a ternary{' (? :)'} operator.</p>
          <pre className="bg-gray-200 p-4 rounded-lg mt-5 overflow-x-auto text-sm">
  <code className="font-mono text-gray-900">

    <span className="text-purple-700">condition</span>{" "}
    ?{" "}
    <span className="text-green-700">true</span>{" "}
    :{" "}
    <span className="text-red-600">false</span>

  </code>
</pre>
            <p className="mt-5">Now, we’re going back to the goal example.</p>
           
           <h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">Example</h2>
           <p>Show the <span className="text-red-400">MadeGoal</span> component if <span className="text-red-400">isGoal</span> is true; otherwise, show the <span className="text-red-400">MissedGoal</span> component.</p>
        <pre className="bg-gray-200 p-4 rounded-lg mt-5 overflow-x-auto text-sm">
  <code className="font-mono text-gray-900">

    <span className="text-purple-700">function</span>{" "}
    <span className="text-green-700">Goal</span>(props) {"{"}
    {"\n"}

    {"  "}
    <span className="text-purple-700">const</span>{" "}
    isGoal = props.isGoal;
    {"\n"}

    {"  "}
    <span className="text-purple-700">return</span> (
    {"\n"}

    {"    "}
    &lt;&gt;
    {"\n"}

    {"      "}
    {"{"}isGoal ? (
    &lt;<span className="text-green-700">MadeGoal</span> /&gt;
    ) : (
    &lt;<span className="text-green-700">MissedGoal</span> /&gt;
    ){"}"}
    {"\n"}

    {"    "}
    &lt;/&gt;
    {"\n"}

    {"  "}
    );
    {"\n"}

    {"}"}
    {"\n\n"}

    <span className="text-blue-700">createRoot</span>(
    document.getElementById(<span className="text-yellow-700">'root'</span>)
    ).<span className="text-blue-700">render</span>(
    {"\n"}

    {"  "}
    &lt;<span className="text-green-700">Goal</span>{" "}
    isGoal={"{"}false{"}"} /&gt;
    {"\n"}

    );

  </code>
</pre>


        </div>
    )
}

export default Conditional;