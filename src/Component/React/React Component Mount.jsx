import React from "react";

const ReactComponenetMOunt = () => {
    return(
        <div className="max-w-4xl p-6 mt-10">
        <h1 className="lg:text-3xl text-2xl text-blue-500 font-semibold mb-3">React Component Mount</h1>
        <p>In React, <span className="text-red-400 bg-gray-50">componentDidMount()</span> is a lifecycle method that runs after a component is rendered and added to the DOM. It is called only once, right after the initial render, making it useful for tasks like data fetching, subscriptions, and DOM interactions.</p>
       
       <h2 className="text-2xl text-gray-800 font-semibold mt-5">Syntax</h2>
      <pre className="bg-gray-200 p-4 rounded-lg mt-5 overflow-x-auto text-sm">
  <code className="font-mono text-gray-900">

    <span className="text-blue-700">componentDidMount</span>() {"{"}
    {"\n"}

    {"  "}
    <span className="text-gray-500">// code to be executed</span>
    {"\n"}

    {"}"}

  </code>
</pre>

       <ul className="list-[square] mt-5">
        <li>This method does not accept any parameters.</li>
        <li>It does not return a value.</li>
        <li>React automatically calls it after the first render.</li>
       </ul>


       <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">When is componentDidMount() Called?</h2>
       <p>The <span className="text-red-400 bg-gray-50">componentDidMount()</span> method is invoked immediately following the initial rendering of a component.</p>
       <ul className="list-[square] mt-5">
        <li>After the component is rendered on the screen for the first time.</li>
        <li>After the component is inserted into the DOM.</li>
        <li>Before the browser displays the component’s content.</li>
       </ul>

       <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">How componentDidMount() Works in the Component Lifecycle</h2>
       <p>React components follow a lifecycle, and <span className="text-red-400 bg-gray-50">componentDidMount()</span> is part of the mounting phase. These lifecycle methods run in a defined sequence.</p>
       <ul className="list-[square] space-y-1 mt-5">
        <li><span className="font-semibold">Constructor</span>: Sets the initial state and binds class methods.</li>
        <li><span className="font-semibold">render()</span>: Produces the JSX output.</li>
        <li><span className="font-semibold">componentDidMount()</span>: Triggered after the component mounts and is added to the DOM.</li>
        <li><span className="font-semibold">componentWillUnmount()</span>: Used for cleanup before the component is detached from the DOM.</li>
       </ul>
       
       <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">1. Fetching Data in componentDidMount()</h2>
       <p>Here, the componentDidMount method will be employed to fetch the data.</p>
      <pre className="bg-gray-200 p-4 rounded-lg mt-5 overflow-x-auto text-sm">
  <code className="font-mono text-gray-900">

    <span className="text-purple-700">import</span>{" "}
    <span className="text-green-700">React</span>{" "}
    <span className="text-purple-700">from</span>{" "}
    <span className="text-yellow-700">'react'</span>;
    {"\n\n"}

    <span className="text-purple-700">class</span>{" "}
    <span className="text-green-700">DataFetcher</span>{" "}
    <span className="text-purple-700">extends</span>{" "}
    <span className="text-green-700">React.Component</span> {"{"}
    {"\n\n"}

    {"  "}
    <span className="text-blue-700">constructor</span>(props) {"{"}
    {"\n"}
    {"    "}
    <span className="text-purple-700">super</span>(props);
    {"\n"}
    {"    "}
    this.state = {"{"}
    {"\n"}
    {"      "}
    data: null,
    {"\n"}
    {"      "}
    loading: true,
    {"\n"}
    {"      "}
    error: null
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
    <span className="text-blue-700">fetch</span>(
    <span className="text-yellow-700">'https://jsonplaceholder.typicode.com/posts'</span>)
    {" "}
    <span className="text-gray-500">// Replace with valid API URL</span>
    {"\n"}
    {"      "}.then(response =&gt; {"{"}
    {"\n"}
    {"        "}
    <span className="text-purple-700">if</span> (!response.ok) {"{"}
    {"\n"}
    {"          "}
    <span className="text-purple-700">throw</span>{" "}
    <span className="text-blue-700">new</span>{" "}
    <span className="text-green-700">Error</span>(
    <span className="text-yellow-700">'Network response was not ok'</span>);
    {"\n"}
    {"        "}
    {"}"}
    {"\n"}
    {"        "}
    <span className="text-purple-700">return</span> response.json();
    {"\n"}
    {"      "}")
    {"\n"}
    {"      "}.then(data =&gt; {"{"}
    {"\n"}
    {"        "}
    this.<span className="text-blue-700">setState</span>({"{"}
    data,
    loading: false
    {"}"});
    {"\n"}
    {"      "}")
    {"\n"}
    {"      "}.catch(error =&gt; {"{"}
    {"\n"}
    {"        "}
    console.<span className="text-blue-700">error</span>(
    <span className="text-yellow-700">'There was a problem with the fetch operation:'</span>,
    error);
    {"\n"}
    {"        "}
    this.<span className="text-blue-700">setState</span>({"{"}
    loading: false,
    error: error.message
    {"}"});
    {"\n"}
    {"      "}");
    {"\n"}
    {"  "}
    {"}"}
    {"\n\n"}

    {"  "}
    <span className="text-blue-700">render</span>() {"{"}
    {"\n"}
    {"    "}
    const {"{"} data, loading, error {"}"} = this.state;
    {"\n"}
    {"    "}
    <span className="text-purple-700">return</span> (
    {"\n"}

    {"      "}
    &lt;<span className="text-red-600">div</span>&gt;
    {"\n"}

    {"        "}
    {"{"}loading && &lt;<span className="text-red-600">p</span>&gt;Loading...&lt;/<span className="text-red-600">p</span>&gt;{"}"}
    {"\n"}

    {"        "}
    {"{"}error && &lt;<span className="text-red-600">p</span>&gt;Error: {"{"}error{"}"}&lt;/<span className="text-red-600">p</span>&gt;{"}"}
    {"\n"}

    {"        "}
    {"{"}data && &lt;<span className="text-red-600">pre</span>&gt;{"{"}JSON.stringify(data, null, 2){"}"}&lt;/<span className="text-red-600">pre</span>&gt;{"}"}
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
    <span className="text-green-700">DataFetcher</span>;

  </code>
</pre>
       <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">In this example</h2>
       <ul className="list-[square] mt-5">
        <li>The <span className="text-red-400 bg-gray-50">componentDidMount()</span> method fetches data from an API.</li>
        <li>After fetching, <span className="text-red-400 bg-gray-50">this.setState()</span> updates the component’s state, causing it to re-render.</li>
        <li>Initially, the component shows a "Loading..." message, and once the data arrives, it displays the JSON content.</li>
       </ul>

       <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">2. Name Color Changer Application</h2>
       <p>We’re going to make a name color app that automatically changes the text color when it shows up in the DOM. For this, we’ll rely on <span className="text-red-400 bg-gray-50">componentDidMount()</span>.</p>
    <pre className="bg-gray-200 p-4 rounded-lg mt-5 overflow-x-auto text-sm">
  <code className="font-mono text-gray-900">

    <span className="text-purple-700">import</span>{" "}
    <span className="text-green-700">React</span>{" "}
    <span className="text-purple-700">from</span>{" "}
    <span className="text-yellow-700">"react"</span>;
    {"\n"}

    <span className="text-purple-700">class</span>{" "}
    <span className="text-green-700">App</span>{" "}
    <span className="text-purple-700">extends</span>{" "}
    <span className="text-green-700">React.Component</span> {"{"}
    {"\n\n"}

    {"  "}
    <span className="text-blue-700">constructor</span>(props) {"{"}
    {"\n"}
    {"    "}
    <span className="text-purple-700">super</span>(props);
    {"\n"}
    {"    "}
    this.state = {"{"} color: <span className="text-yellow-700">"lightgreen"</span> {"}"};
    {"\n"}
    {"  "}
    {"}"}
    {"\n\n"}

    {"  "}
    <span className="text-blue-700">componentDidMount</span>() {"{"}
    {"\n"}
    {"    "}
    this.interval = <span className="text-blue-700">setInterval</span>(() =&gt; {"{"}
    {"\n"}
    {"      "}
    this.<span className="text-blue-700">setState</span>({"{"}
    color: this.<span className="text-blue-700">getRandomColor</span>()
    {"}"});
    {"\n"}
    {"    "}
    {"}"}, 2000);
    {"\n"}
    {"  "}
    {"}"}
    {"\n\n"}

    {"  "}
    <span className="text-blue-700">getRandomColor</span> = () =&gt; {"{"}
    {"\n"}
    {"    "}
    const letters = <span className="text-yellow-700">"0123456789ABCDEF"</span>;
    {"\n"}
    {"    "}
    let color = <span className="text-yellow-700">"#"</span>;
    {"\n"}
    {"    "}
    <span className="text-purple-700">for</span> (let i = 0; i &lt; 6; i++) {"{"}
    {"\n"}
    {"      "}
    color += letters[Math.floor(Math.random() * 16)];
    {"\n"}
    {"    "}
    {"}"}
    {"\n"}
    {"    "}
    <span className="text-purple-700">return</span> color;
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
    &lt;<span className="text-red-600">div</span> style={"{"}
    {"{"}
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#282c34"
    {"}"}
    {"}"}&gt;
    {"\n"}

    {"        "}
    &lt;<span className="text-red-600">p</span> style={"{"}
    {"{"}
    color: this.state.color,
    backgroundColor: "#333",
    textAlign: "center",
    padding: "20px",
    borderRadius: "12px",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.5)",
    fontFamily: "Arial, sans-serif",
    fontSize: "1.5rem",
    width: "300px",
    margin: "auto"
    {"}"}
    {"}"}&gt;
    {"\n"}

    {"          "}
    GeeksForGeeks
    {"\n"}

    {"        "}
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
    <span className="text-green-700">App</span>;

  </code>
</pre>

       <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">In this example</h2>
       <ul className="list-[square] mt-5">
        <li>The App component initializes with a color state set to "lightgreen".</li>
        <li>A setInterval calls the getRandomColor method every 2 seconds.</li>
        <li>setState updates the color state with a new random color returned by getRandomColor().</li>
        <li>The getRandomColor function generates a random hexadecimal color.</li>
        <li>The component does not clear the interval on unmount, which could cause a memory leak.</li>
        <li>The text "GeeksForGeeks" is centered and changes color every 2 seconds.</li>
       </ul>
       
       <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">When To Use componentDidMount()?</h2>
       <ul className="list-[square] space-y-1 mt-5">
        <li><span className="font-semibold">Fetching Data</span>: Retrieve data from an API or external source after the component mounts.</li>
        <li><span className="font-semibold">Setting Up Subscriptions</span>: Subscribe to data streams or WebSocket connections.</li>
        <li><span className="font-semibold">Initializing Third-Party Libraries</span>: Integrate third-party libraries or plugins that need DOM access.</li>
        <li><span className="font-semibold">Event Listeners</span>: Add event listeners (like scroll or resize) once the component is mounted.</li>
        <li><span className="font-semibold">DOM Manipulations</span>: Perform DOM measurements or updates after the component renders.</li>
       </ul>

       <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">When Not to Use componentDidMount()?</h2>
       <ul className="list-[square] space-y-1 mt-5">
        <li><span className="font-semibold">No Post-Mount Work</span>: Components that don’t need data fetching, subscriptions, or other post-render operations don’t require componentDidMount().</li>
        <li><span className="font-semibold">Static Components</span>: Purely presentational components or those relying only on props rarely need after-mount setup.</li>
       </ul>
       

     
       
        </div>
    )
}

export default ReactComponenetMOunt;