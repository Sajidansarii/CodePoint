import React from "react";

const ReactComponenetUnmount = () => {
    return(
        <div className="max-w-4xl p-6 mt-10">
         <h1 className="lg:text-3xl text-2xl text-blue-500 font-semibold mb-3">React Componenet Unmount Event</h1>
        <p>In React, lifecycle methods let you control how components behave at different stages. One key method for cleanup is <span className="text-red-400 bg-gray-50">componentWillUnmount()</span>, which is called right before a component is removed from the DOM. This makes it crucial for freeing resources and preventing memory leaks.</p>
       
       <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">What is componentWillUnmount()?</h2>
       <p>The <span className="text-red-400 bg-gray-50">componentWillUnmount()</span> method is part of the React class component lifecycle and executes right before a component is removed. It should be used for cleaning up side effects, including:</p>
       <ul className="list-[square] space-y-1 mt-5">
        <li>Cancelling API calls or network requests</li>
        <li>Removing event listeners</li>
        <li>Clearing timers set with setInterval() or setTimeout()</li>
        <li>Terminating subscriptions, such as WebSocket connections</li>
       </ul>

       <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Syntax</h2>
     <pre className="bg-gray-200 p-4 rounded-lg mt-5 overflow-x-auto text-sm">
  <code className="font-mono text-gray-900">

    <span className="text-purple-700">componentWillUnmount</span>() {"{"}
    {"\n"}

    {"  "}
    <span className="text-gray-500">// Cleanup code goes here</span>
    {"\n"}

    {"}"}

  </code>
</pre>

       <p className="mt-5">React automatically invokes the <span className="text-red-400 bg-gray-50">componentWillUnmount()</span> method before a component is unmounted, and this method does not receive any arguments.</p>
       
       <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">When is componentWillUnmount() Called?</h2>
       <p>The componentWillUnmount() method is called just before a class component is removed from the DOM. This usually occurs when a component is no longer needed, such as when a condition for rendering changes or when navigating away from a page. It’s important to note that this method is only available for class components. In modern React applications, functional components are more commonly used, where the same cleanup tasks are handled using a cleanup function inside useEffect().</p>
       

       <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">1. Mouse Tracking with Cleanup using componentWillUnmount()</h2>
       <p>Here, we’ll use componentDidMount() to start tracking the mouse and componentWillUnmount() to clean up when the component is removed.</p>
      <pre className="bg-gray-200 p-4 rounded-lg mt-5 overflow-x-auto text-sm">
  <code className="font-mono text-gray-900">

    <span className="text-purple-700">import</span>{" "}
    <span className="text-green-700">React</span>{" "}
    <span className="text-purple-700">from</span>{" "}
    <span className="text-yellow-700">'react'</span>;
    {"\n\n"}

    <span className="text-purple-700">class</span>{" "}
    <span className="text-blue-700">App</span>{" "}
    <span className="text-purple-700">extends</span>{" "}
    <span className="text-green-700">React.Component</span> {"{"}
    {"\n\n"}

    {"  "}
    <span className="text-blue-700">constructor</span>() {"{"}
    {"\n"}
    {"    "}
    <span className="text-purple-700">super</span>();
    {"\n"}
    {"    "}
    <span className="text-blue-700">this.state</span> = {"{"}
    {"\n"}
    {"      "}
    showUser: <span className="text-yellow-700">true</span>
    {"\n"}
    {"    "}
    {"}"};
    {"\n"}
    {"  "}
    {"}"}
    {"\n\n"}

    {"  "}
    <span className="text-blue-700">render</span>() {"{"}
    {"\n"}
    {"    "}
    <span className="text-purple-700">return</span> (
    {"\n"}

    {"      "}
    &lt;<span className="text-red-600">div</span>&gt;
    {"\n"}

    {"        "}
    &lt;<span className="text-red-600">h1</span>&gt;Mouse Tracking&lt;/<span className="text-red-600">h1</span>&gt;
    {"\n"}

    {"        "}
    &lt;<span className="text-red-600">button</span>{" "}
    <span className="text-blue-700">onClick</span>=
    <span className="text-gray-900">{"{"}</span>
    () =&gt; this.setState({"{"} showUser: false {"}"})
    <span className="text-gray-900">{"}"}</span>&gt;
    Hide User
    &lt;/<span className="text-red-600">button</span>&gt;
    {"\n"}

    {"        "}
    {"{"}
    this.state.showUser ? &lt;<span className="text-green-700">User</span> /&gt; : null
    {"}"}
    {"\n"}

    {"      "}
    &lt;/<span className="text-red-600">div</span>&gt;
    {"\n"}

    {"    "}
    );
    {"\n"}
    {"  "}
    {"}"}
    {"\n"}
    {"}"}
    {"\n\n"}

    <span className="text-purple-700">class</span>{" "}
    <span className="text-blue-700">User</span>{" "}
    <span className="text-purple-700">extends</span>{" "}
    <span className="text-green-700">React.Component</span> {"{"}
    {"\n\n"}

    {"  "}
    <span className="text-blue-700">constructor</span>() {"{"}
    {"\n"}
    {"    "}
    <span className="text-purple-700">super</span>();
    {"\n"}
    {"    "}
    <span className="text-blue-700">this.state</span> = {"{"}
    {"\n"}
    {"      "}
    mousePosition: {"{"} x: 0, y: 0 {"}"}
    {"\n"}
    {"    "}
    {"}"};
    {"\n"}
    {"  "}
    {"}"}
    {"\n\n"}

    {"  "}
    <span className="text-blue-700">componentDidMount</span>() {"{"}
    {"\n"}
    {"    "}
    window.<span className="text-blue-700">addEventListener</span>(
    <span className="text-yellow-700">'mousemove'</span>,
    this.trackMouse
    );
    {"\n"}
    {"  "}
    {"}"}
    {"\n\n"}

    {"  "}
    <span className="text-blue-700">componentWillUnmount</span>() {"{"}
    {"\n"}
    {"    "}
    window.<span className="text-blue-700">removeEventListener</span>(
    <span className="text-yellow-700">'mousemove'</span>,
    this.trackMouse
    );
    {"\n"}
    {"    "}
    alert(
    <span className="text-yellow-700">'User component removed and mouse tracking stopped!'</span>
    );
    {"\n"}
    {"  "}
    {"}"}
    {"\n\n"}

    {"  "}
    <span className="text-blue-700">trackMouse</span> = (event) =&gt; {"{"}
    {"\n"}
    {"    "}
    this.setState({"{"}
    mousePosition: {"{"}
    x: event.clientX,
    y: event.clientY
    {"}"}
    {"}"});
    {"\n"}
    {"  "}
    {"}"};
    {"\n\n"}

    {"  "}
    <span className="text-blue-700">render</span>() {"{"}
    {"\n"}
    {"    "}
    <span className="text-purple-700">return</span> (
    {"\n"}

    {"      "}
    &lt;<span className="text-red-600">div</span>&gt;
    {"\n"}

    {"        "}
    &lt;<span className="text-red-600">h3</span>&gt;User: Rahul&lt;/<span className="text-red-600">h3</span>&gt;
    {"\n"}

    {"        "}
    &lt;<span className="text-red-600">h4</span>&gt;Mouse Position&lt;/<span className="text-red-600">h4</span>&gt;
    {"\n"}

    {"        "}
    &lt;<span className="text-red-600">p</span>&gt;
    X: {"{"}this.state.mousePosition.x{"}"}, Y: {"{"}this.state.mousePosition.y{"}"}
    &lt;/<span className="text-red-600">p</span>&gt;
    {"\n"}

    {"      "}
    &lt;/<span className="text-red-600">div</span>&gt;
    {"\n"}

    {"    "}
    );
    {"\n"}
    {"  "}
    {"}"}
    {"\n"}
    {"}"}
    {"\n\n"}

    <span className="text-purple-700">export</span>{" "}
    <span className="text-purple-700">default</span>{" "}
    <span className="text-blue-700">App</span>;

  </code>
</pre>
       <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">In this example</h2>
       <ul className="list-[square] space-y-1 mt-5">
        <li>The App component controls the visibility of the User component using the showUser state.</li>
        <li>Clicking the "Hide User" button sets showUser to false, which hides the User component.</li>
        <li>While visible, the User component displays the current mouse position (X and Y coordinates) in real time.</li>
        <li>When the User component mounts, it starts listening for mouse movements and updates the X and Y coordinates in the state.</li>
        <li>When the User component is removed, the componentWillUnmount() method cleans up by stopping the mouse tracking and removing the event listener.</li>
       </ul>

       <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">2. Component Cleanup with componentWillUnmount()</h2>
       <p>To properly clean up the component, we make use of the componentWillUnmount() lifecycle method.</p>
      <pre className="bg-gray-200 p-4 rounded-lg mt-5 overflow-x-auto text-sm">
  <code className="font-mono text-gray-900">

    <span className="text-purple-700">import</span>{" "}
    React, {"{"} <span className="text-green-700">Component</span> {"}"}{" "}
    <span className="text-purple-700">from</span>{" "}
    <span className="text-yellow-700">"react"</span>;
    {"\n\n"}

    <span className="text-purple-700">class</span>{" "}
    <span className="text-blue-700">MyComponent</span>{" "}
    <span className="text-purple-700">extends</span>{" "}
    <span className="text-green-700">Component</span> {"{"}
    {"\n\n"}

    {"  "}
    <span className="text-blue-700">componentWillUnmount</span>() {"{"}
    {"\n"}
    {"    "}
    console.<span className="text-blue-700">log</span>(
    <span className="text-yellow-700">
      "Component is about to be removed from the DOM."
    </span>);
    {"\n"}
    {"  "}
    {"}"}
    {"\n\n"}

    {"  "}
    <span className="text-blue-700">render</span>() {"{"}
    {"\n"}
    {"    "}
    <span className="text-purple-700">return</span>{" "}
    &lt;<span className="text-red-600">h1</span>&gt;
    Hello, I am a Component!
    &lt;/<span className="text-red-600">h1</span>&gt;;
    {"\n"}
    {"  "}
    {"}"}
    {"\n"}
    {"}"}
    {"\n\n"}

    <span className="text-purple-700">class</span>{" "}
    <span className="text-blue-700">App</span>{" "}
    <span className="text-purple-700">extends</span>{" "}
    <span className="text-green-700">Component</span> {"{"}
    {"\n\n"}

    {"  "}
    state = {"{"} show: true {"}"};
    {"\n\n"}

    {"  "}
    <span className="text-blue-700">toggleComponent</span> = () =&gt; {"{"}
    {"\n"}
    {"    "}
    this.setState({"{"} show: !this.state.show {"}"});
    {"\n"}
    {"  "}
    {"}"};
    {"\n\n"}

    {"  "}
    <span className="text-blue-700">render</span>() {"{"}
    {"\n"}
    {"    "}
    <span className="text-purple-700">return</span> (
    {"\n"}

    {"      "}
    &lt;<span className="text-red-600">div</span>&gt;
    {"\n"}

    {"        "}
    &lt;<span className="text-red-600">button</span>{" "}
    <span className="text-blue-700">onClick</span>=
    <span className="text-gray-900">{"{"}</span>
    this.toggleComponent
    <span className="text-gray-900">{"}"}</span>&gt;
    {"\n"}

    {"          "}
    {"{"}this.state.show ? "Unmount Component" : "Mount Component"{"}"}
    {"\n"}

    {"        "}
    &lt;/<span className="text-red-600">button</span>&gt;
    {"\n"}

    {"        "}
    {"{"}this.state.show && &lt;<span className="text-green-700">MyComponent</span> /&gt;{"}"}
    {"\n"}

    {"      "}
    &lt;/<span className="text-red-600">div</span>&gt;
    {"\n"}

    {"    "}
    );
    {"\n"}
    {"  "}
    {"}"}
    {"\n"}
    {"}"}
    {"\n\n"}

    <span className="text-purple-700">export</span>{" "}
    <span className="text-purple-700">default</span>{" "}
    <span className="text-blue-700">App</span>;

  </code>
</pre>

       <h2 className="text-2xl text-gray-800 font-semibold mt-5">In this example</h2>
       <ul className="list-[square] space-y-1 mt-5">
        <li>The message "Hello, I am a Component!" appears initially.</li>
        <li>Press the "Unmount Component" button.</li>
        <li>MyComponent is removed, and the console logs a message.</li>
       </ul>

      <pre className="bg-gray-200 p-4 rounded-lg mt-5 overflow-x-auto text-sm">
  <code className="font-mono text-gray-900">

    <span className="text-yellow-700">
      "Component is about to be removed from the DOM."
    </span>

  </code>
</pre>

       <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">When to Use componentWillUnmount()?</h2>
       <h2 className="text-2xl text-gray-800 font-semibold mb-3">Remove Event Listeners</h2>
       <p>If you attached an event listener via window.addEventListener or document.addEventListener, this is where you should clean it up.</p>
      <pre className="bg-gray-200 p-4 rounded-lg mt-5 overflow-x-auto text-sm">
  <code className="font-mono text-gray-900">

    <span className="text-blue-700">componentWillUnmount</span>() {"{"}
    {"\n"}

    {"  "}
    window.<span className="text-blue-700">removeEventListener</span>(
    <span className="text-yellow-700">'resize'</span>,
    this.<span className="text-blue-700">handleResize</span>);
    {"\n"}

    {"}"}

  </code>
</pre>

       <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Clear Timers or Intervals</h2>
       <p>Whenever you use setInterval or setTimeout, clear them here to stop extra executions.</p>
       <pre className="bg-gray-200 p-4 rounded-lg mt-5 overflow-x-auto text-sm">
  <code className="font-mono text-gray-900">

    <span className="text-blue-700">componentWillUnmount</span>() {"{"}
    {"\n"}

    {"  "}
    <span className="text-blue-700">clearInterval</span>(
    this.<span className="text-blue-700">timer</span>);
    {"\n"}

    {"}"}

  </code>
</pre>

       <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Canceling network requests</h2>
       <p>When your component makes API calls, make sure to cancel any ongoing requests if the component unmounts before completion. This prevents updates to an unmounted component.</p>
       <pre className="bg-gray-200 p-4 rounded-lg mt-5 overflow-x-auto text-sm">
  <code className="font-mono text-gray-900">

    <span className="text-blue-700">componentWillUnmount</span>() {"{"}
    {"\n"}

    {"  "}
    this.<span className="text-blue-700">controller</span>.<span className="text-blue-700">abort</span>();
    {" "}
    <span className="text-gray-500">// Cancel fetch request</span>
    {"\n"}

    {"}"}

  </code>
</pre>

        <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Stopping Animations</h2>
        <p>Stop any ongoing animations or transitions in componentWillUnmount() to avoid running them on an unmounted component.</p>
      <pre className="bg-gray-200 p-4 rounded-lg mt-5 overflow-x-auto text-sm">
  <code className="font-mono text-gray-900">

    <span className="text-blue-700">componentWillUnmount</span>() {"{"}
    {"\n"}

    {"  "}
    this.<span className="text-blue-700">animation</span>.<span className="text-blue-700">stop</span>();
    {"\n"}

    {"}"}

  </code>
</pre>
       <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Unsubscribe from External Services</h2>
       <p>This applies to libraries such as Redux, Firebase, or WebSocket connections.</p>
      <pre className="bg-gray-200 p-4 rounded-lg mt-5 overflow-x-auto text-sm">
  <code className="font-mono text-gray-900">

    <span className="text-blue-700">componentWillUnmount</span>() {"{"}
    {"\n"}

    {"  "}
    this.<span className="text-blue-700">unsubscribe</span>();
    {"\n"}

    {"}"}

  </code>
</pre>
       <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">When Not to Use componentWillUnmount()?</h2>
       <ul className="list-[square] space-y-1 mt-5">
        <li><span className="font-semibold">Stateless Components</span>: No resource management? No componentWillUnmount() needed.</li>
        <li><span className="font-semibold">Static Components</span>: Display-only components typically don’t need cleanup.</li>
       </ul>
       

       
       
        </div>
    )
}

export default ReactComponenetUnmount;