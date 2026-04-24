import React from "react";

const ReactLifeCycle = () => {

    const data = [
        {Features:'State Initialization', ClassComponents:'constructor()', FunctionalComponents:'useState()'},
        {Features:'Lifecycle Methods', ClassComponents:'componentDidMount(), shouldComponentUpdate(), componentDidUpdate(), componentWillUnmount()', FunctionalComponents:'useEffect() handles mounting, updating, and unmounting'},
        {Features:'Handling Updates', ClassComponents:'shouldComponentUpdate(), componentDidUpdate()', FunctionalComponents:'useEffect() with dependency array'},
        {Features:'Cleanup', ClassComponents:'componentWillUnmount()', FunctionalComponents:'Return cleanup function in useEffect()'},
        {Features:'Functionality', ClassComponents:'Component methods tied to lifecycle phases', FunctionalComponents:'Hooks like useState, useEffect, useCallback, useMemo'},
    ];



    return(
        <div className="max-w-4xl p-6 mt-10">
            <h1 className="text-3xl text-blue-500 font-semibold mb-3">React Lifecycle Event</h1>
            <p>The React lifecycle represents the sequence of phases a component experiences during its existence. These phases enable developers to run specific logic when a component is mounted, updated, or unmounted. A solid understanding of the lifecycle improves control over performance and resource management.</p>
            <p className="mt-5">The React component lifecycle is divided into three primary phases.</p>
           <p className="mt-5"><span className="font-bold">Mounting</span>: The component is initialized, rendered, and inserted into the DOM (componentDidMount()).</p>
           <p><span className="font-bold">Updating</span>: Changes in state or props trigger re-rendering and updates (componentDidUpdate()).</p>
           <p><span className="font-bold">Unmounting</span>: Necessary cleanup is completed before the component is destroyed (componentWillUnmount()).</p>
       
          <h2 className="text-2xl text-gray-800 font-semibold mt-10">Lifecycle Component in React</h2>
          <h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">1.Mounting</h2>
          <p>The mounting phase in React describes the process of creating a component and inserting it into the DOM for the first time. During this phase, React initializes the component, sets up any required state, and renders the UI.</p>

         <h2 className="text-xl mt-3">Methods executed during mounting are:</h2>
          <ul className="list-[square] mt-5">
            <li>constructor</li>
            <li>getDerivedStateFromProps</li>
            <li>render()</li>
            <li>componentDidMount()</li>
          </ul>

         
         <h1 className="text-2xl text-gray-800 font-semibold mt-10 mb-1">constructor</h1>
        <p>This method initializes the state and binds functions, and it is called before the component mounts.</p>
        <h2 className="text-2xl text-gray-800 font-semibold mt-2">Example</h2>
     <pre className="bg-gray-100 text-gray-800 p-4 rounded-lg mt-5 overflow-x-auto">
  <code>
    <span className="text-purple-600">constructor</span>
    <span className="text-gray-800">(props) {"{"}</span>{"\n"}

    {"  "}
    <span className="text-purple-600">super</span>
    <span className="text-gray-800">(props);</span>{" "}
    <span className="text-gray-500">// Always call super(props) before using this.props</span>{"\n\n"}

    {"  "}
    <span className="text-blue-600">this</span>
    <span className="text-gray-800">.</span>
    <span className="text-blue-600">state</span>{" "}
    <span className="text-gray-800">= {"{"}</span>{"\n"}

    {"    "}
    <span className="text-red-500">count</span>
    <span className="text-gray-800">:</span>{" "}
    <span className="text-green-600">0</span>
    <span className="text-gray-800">,</span>{" "}
    <span className="text-gray-500">// Initial state</span>{"\n"}


    <span className="text-gray-800">{"}"}</span>
    {"\n\n"}

    {"  "}
    <span className="text-yellow-600">console</span>
    <span className="text-gray-800">.</span>
    <span className="text-blue-600">log</span>
    <span className="text-gray-800">(</span>
    <span className="text-orange-500">"Constructor called"</span>
    <span className="text-gray-800">);</span>
    {"\n"}

    <span className="text-gray-800">{"}"}</span>
  </code>
</pre>

         <h1 className="text-2xl text-gray-800 font-semibold mt-10 mb-1">getDerivedStateFromProps</h1>
        <p>This method updates state using props and is executed before every render cycle.</p>
        <h2 className="text-2xl text-gray-800 font-semibold mt-2">Example</h2>
     <pre className="bg-gray-100 text-gray-800 p-4 rounded-lg mt-5 overflow-x-auto">
  <code>
    <span className="text-purple-600">static</span>{" "}
    <span className="text-yellow-600">getDerivedStateFromProps</span>
    <span className="text-gray-800">(</span>
    <span className="text-blue-600">props</span>
    <span className="text-gray-800">, </span>
    <span className="text-blue-600">state</span>
    <span className="text-gray-800">) {"{"}</span>{"\n\n"}

    {"  "}
    <span className="text-purple-600">if</span>{" "}
    <span className="text-gray-800">(</span>
    <span className="text-blue-600">props</span>
    <span className="text-gray-800">.</span>
    <span className="text-blue-600">value</span>{" "}
    <span className="text-gray-800">!==</span>{" "}
    <span className="text-blue-600">state</span>
    <span className="text-gray-800">.</span>
    <span className="text-blue-600">value</span>
    <span className="text-gray-800">) {"{"}</span>{"\n"}

    {"    "}
    <span className="text-purple-600">return</span>{" "}
    <span className="text-gray-800">{"{"}</span>{" "}
    <span className="text-red-500">value</span>
    <span className="text-gray-800">:</span>{" "}
    <span className="text-blue-600">props</span>
    <span className="text-gray-800">.</span>
    <span className="text-blue-600">value</span>
    {"}"};{" "}
    <span className="text-gray-500">// Update state based on new props</span>{"\n"}

    {"  "}
    <span className="text-gray-800">{"}"}</span>{"\n\n"}

    {"  "}
    <span className="text-purple-600">return</span>{" "}
    <span className="text-purple-600">null</span>;
    {" "}
    <span className="text-gray-500">// No changes to state</span>{"\n"}

    <span className="text-gray-800">{"}"}</span>
  </code>
</pre>
       
        <h1 className="text-2xl text-gray-800 font-semibold mt-10 mb-1">render()</h1>
       <p>This method renders JSX and applies updates to the DOM.</p>
      <h2 className="text-2xl text-gray-800 font-semibold mt-2">Example</h2>
    <pre className="bg-gray-100 text-gray-800 p-4 rounded-lg mt-5 overflow-x-auto">
  <code>
    <span className="text-yellow-600">render</span>
    <span className="text-gray-800">() {"{"}</span>{"\n\n"}

    {"  "}
    <span className="text-purple-600">return</span>{" ("}{"\n"}

    {"    "}
    <span className="text-pink-600">&lt;div&gt;</span>{"\n"}

    {"      "}
    <span className="text-pink-600">&lt;h1&gt;</span>
    Hello, React Lifecycle!
    <span className="text-pink-600">&lt;/h1&gt;</span>{"\n"}

    {"    "}
    <span className="text-pink-600">&lt;/div&gt;</span>{"\n"}

    {"  "}){"\n"}

    <span className="text-gray-800">{"}"}</span>
  </code>
</pre>

        <h1 className="text-2xl text-gray-800 font-semibold mt-10 mb-1">componentDidMount()</h1>
      <p>This function runs once, right after the initial render, when the component is added to the DOM.</p>
      <h2 className="text-2xl text-gray-800 font-semibold mt-2">Example</h2>
     <pre className="bg-gray-100 text-gray-800 p-4 rounded-lg mt-5 overflow-x-auto">
  <code>
    <span className="text-yellow-600">componentDidMount</span>
    <span className="text-gray-800">() {"{"}</span>{"\n\n"}

    {"  "}
    <span className="text-yellow-600">console</span>
    <span className="text-gray-800">.</span>
    <span className="text-blue-600">log</span>
    <span className="text-gray-800">(</span>
    <span className="text-orange-500">"Component has been mounted"</span>
    <span className="text-gray-800">);</span>
    {"\n\n"}

    {"  "}
    <span className="text-gray-500">// Example: Fetch data from an API</span>
    {"\n\n"}

    {"  "}
    <span className="text-blue-600">fetch</span>
    <span className="text-gray-800">(</span>
    <span className="text-orange-500">"https://api.example.com/data"</span>
    <span className="text-gray-800">)</span>
    {"\n"}
    {"    "}
    <span className="text-gray-800">.</span>
    <span className="text-yellow-600">then</span>
    <span className="text-gray-800">(response =&gt; response.</span>
    <span className="text-yellow-600">json</span>
    <span className="text-gray-800">())</span>
    {"\n"}
    {"    "}
    <span className="text-gray-800">.</span>
    <span className="text-yellow-600">then</span>
    <span className="text-gray-800">(data =&gt; </span>
    <span className="text-blue-600">this</span>
    <span className="text-gray-800">.</span>
    <span className="text-yellow-600">setState</span>
    <span className="text-gray-800">({"{ data }"}));</span>
    {"\n\n"}

    <span className="text-gray-800">{"}"}</span>
  </code>
</pre>

      <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">2.Updating</h2>
      <p>The update phase occurs whenever a component's state changes or it receives new props from its parent. During this phase, React re-renders the component and updates the DOM.</p>
      <ul className="list-[square] mt-5 mb-10">
        <li>getDerivedStateFromProps</li>
        <li>setState() Function</li>
        <li>shouldComponentUpdate()</li>
        <li>getSnapshotBeforeUpdate() Method</li>
        <li>componentDidUpdate()</li>
      </ul>
      
       <h1 className="text-2xl text-gray-800 font-semibold mt-10 mb-1">getDerivedStateFromProps</h1>
      <p>During mounting and updating, <span className="text-red-400 bg-gray-50">getDerivedStateFromProps(props, state)</span> is invoked before <span className="text-red-400 bg-gray-50">render()</span>, allowing the component to update state based on incoming props.</p>
      <h2 className="text-2xl text-gray-800 font-semibold mt-2">Example</h2>
     <pre className="bg-gray-100 text-gray-800 p-4 rounded-lg mt-5 overflow-x-auto">
  <code>
    <span className="text-purple-600">static</span>{" "}
    <span className="text-yellow-600">getDerivedStateFromProps</span>
    <span className="text-gray-800">(</span>
    <span className="text-blue-600">props</span>
    <span className="text-gray-800">, </span>
    <span className="text-blue-600">state</span>
    <span className="text-gray-800">) {"{"}</span>{"\n\n"}

    {"  "}
    <span className="text-purple-600">if</span>{" "}
    <span className="text-gray-800">(</span>
    <span className="text-blue-600">props</span>
    <span className="text-gray-800">.</span>
    <span className="text-blue-600">name</span>{" "}
    <span className="text-gray-800">!==</span>{" "}
    <span className="text-blue-600">state</span>
    <span className="text-gray-800">.</span>
    <span className="text-blue-600">name</span>
    <span className="text-gray-800">) {"{"}</span>{"\n"}

    {"    "}
    <span className="text-purple-600">return</span>{" "}
    <span className="text-gray-800">{"{"}</span>{" "}
    <span className="text-red-500">name</span>
    <span className="text-gray-800">:</span>{" "}
    <span className="text-blue-600">props</span>
    <span className="text-gray-800">.</span>
    <span className="text-blue-600">name</span>
    {"}"};{" "}
    <span className="text-gray-500">// Update state with new props</span>{"\n"}

    {"  "}
    <span className="text-gray-800">{"}"}</span>{"\n\n"}

    {"  "}
    <span className="text-purple-600">return</span>{" "}
    <span className="text-purple-600">null</span>;
    {" "}
    <span className="text-gray-500">// No state change</span>{"\n"}

    <span className="text-gray-800">{"}"}</span>
  </code>
</pre>

      <h1 className="text-2xl text-gray-800 font-semibold mt-10 mb-1">setState() Function</h1>
      <p>This function isn’t part of the standard lifecycle and can be executed at any moment to update the state of a component.</p>
      <h2 className="text-2xl text-gray-800 font-semibold mt-2">Example</h2>
    <pre className="bg-gray-100 text-gray-800 p-4 rounded-lg mt-5 overflow-x-auto">
  <code>
    <span className="text-blue-600">this</span>
    <span className="text-gray-800">.</span>
    <span className="text-yellow-600">setState</span>
    <span className="text-gray-800">((</span>
    <span className="text-blue-600">prevState</span>
    <span className="text-gray-800">, </span>
    <span className="text-blue-600">props</span>
    <span className="text-gray-800">) =&gt; ({"{"}</span>{"\n"}

    {"  "}
    <span className="text-red-500">counter</span>
    <span className="text-gray-800">:</span>{" "}
    <span className="text-blue-600">prevState</span>
    <span className="text-gray-800">.</span>
    <span className="text-blue-600">count</span>{" "}
    <span className="text-gray-800">+</span>{" "}
    <span className="text-blue-600">props</span>
    <span className="text-gray-800">.</span>
    <span className="text-blue-600">diff</span>
    {"\n"}
    <span className="text-gray-800">{"}"});</span>
  </code>
</pre>
     
     <h1 className="text-2xl text-gray-800 font-semibold mt-10 mb-1">shouldComponentUpdate()</h1>
     <p>This lifecycle method, <span className="text-red-400 bg-gray-50">shouldComponentUpdate()</span>, checks the current and upcoming props and state to determine whether the component needs to update.</p>
     <h2 className="text-2xl text-gray-800 font-semibold mt-2">Example</h2>
  <pre className="bg-gray-100 text-gray-800 p-4 rounded-lg mt-5 overflow-x-auto">
  <code>
    <span className="text-yellow-600">shouldComponentUpdate</span>
    <span className="text-gray-800">(</span>
    <span className="text-blue-600">nextProps</span>
    <span className="text-gray-800">, </span>
    <span className="text-blue-600">nextState</span>
    <span className="text-gray-800">)</span>
  </code>
</pre>
    <p className="mt-5">Returning false prevents the invocation of render(), componentWillUpdate(), and componentDidUpdate().</p>
   

      <h1 className="text-2xl text-gray-800 font-semibold mt-10 mb-1">getSnapshotBeforeUpdate() Method</h1>
    <p>This method runs just before the DOM is rendered and allows you to save the component’s state before the update.</p>
    <h2 className="text-2xl text-gray-800 font-semibold mt-2">Example</h2>
   <pre className="bg-gray-100 text-gray-800 p-4 rounded-lg mt-5 overflow-x-auto">
  <code>
    <span className="text-yellow-600">getSnapshotBeforeUpdate</span>
    <span className="text-gray-800">(</span>
    <span className="text-blue-600">prevProps</span>
    <span className="text-gray-800">, </span>
    <span className="text-blue-600">prevState</span>
    <span className="text-gray-800">)</span>
  </code>
</pre>

    <h1 className="text-2xl text-gray-800 font-semibold mt-10 mb-1">componentDidUpdate()</h1>
    <p>Invoked after the component updates, this function runs once following render() after state or prop modifications.</p>
     <h2 className="text-2xl text-gray-800 font-semibold mt-2">Example</h2>
   <pre className="bg-gray-100 text-gray-800 p-4 rounded-lg mt-5 overflow-x-auto">
  <code>
    <span className="text-yellow-600">componentDidUpdate</span>
    <span className="text-gray-800">(</span>
    <span className="text-blue-600">prevProps</span>
    <span className="text-gray-800">, </span>
    <span className="text-blue-600">prevState</span>
    <span className="text-gray-800">, </span>
    <span className="text-blue-600">snapshot</span>
    <span className="text-gray-800">)</span>
  </code>
</pre>

     
      <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">3.Unmounting</h2>
      <p>The unmounting phase is the final stage in a component’s lifecycle, during which the component is detached from the DOM. Only one method belongs to this phase.</p>
      <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-1">componentWillUnmount()</h2>
      <p>This function is called once before the component is unmounted from the DOM, signaling the end of its lifecycle.</p>
      <h2 className="text-2xl text-gray-800 font-semibold mt-5">Example</h2>
    <pre className="bg-gray-100 text-gray-800 p-4 rounded-lg mt-5 overflow-x-auto">
  <code>
    <span className="text-gray-500">// Filename - src/index.js:</span>{"\n"}

    <span className="text-purple-600">import</span>{" "}
    <span className="text-gray-900">React</span>{" "}
    <span className="text-purple-600">from</span>{" "}
    <span className="text-orange-500">"react"</span>;
    {"\n"}

    <span className="text-purple-600">import</span>{" "}
    <span className="text-gray-900">ReactDOM</span>{" "}
    <span className="text-purple-600">from</span>{" "}
    <span className="text-orange-500">"react-dom"</span>;
    {"\n\n"}

    <span className="text-purple-600">class</span>{" "}
    <span className="text-blue-600">Test</span>{" "}
    <span className="text-purple-600">extends</span>{" "}
    <span className="text-blue-600">React.Component</span>{" "}
    <span className="text-gray-800">{"{"}</span>{"\n\n"}

    {"  "}
    <span className="text-purple-600">constructor</span>
    <span className="text-gray-800">(props) {"{"}</span>{"\n"}
    {"    "}
    <span className="text-purple-600">super</span>
    <span className="text-gray-800">(props);</span>{"\n"}
    {"    "}
    <span className="text-blue-600">this</span>
    <span className="text-gray-800">.</span>
    <span className="text-blue-600">state</span>{" "}
    <span className="text-gray-800">= {"{ hello: "}</span>
    <span className="text-orange-500">"World!"</span>
    <span className="text-gray-800">{" }"};</span>{"\n"}
    {"  "}
    <span className="text-gray-800">{"}"}</span>
    {"\n\n"}

    {"  "}
    <span className="text-yellow-600">componentDidMount</span>
    <span className="text-gray-800">() {"{"}</span>{"\n"}
    {"    "}
    <span className="text-yellow-600">console</span>
    <span className="text-gray-800">.</span>
    <span className="text-blue-600">log</span>
    <span className="text-gray-800">(</span>
    <span className="text-orange-500">"componentDidMount()"</span>
    <span className="text-gray-800">);</span>{"\n"}
    {"  "}
    <span className="text-gray-800">{"}"}</span>
    {"\n\n"}

    {"  "}
    <span className="text-blue-600">changeState</span>
    <span className="text-gray-800">() {"{"}</span>{"\n"}
    {"    "}
    <span className="text-blue-600">this</span>
    <span className="text-gray-800">.</span>
    <span className="text-yellow-600">setState</span>
    <span className="text-gray-800">({"{ hello: "}</span>
    <span className="text-orange-500">"Geek!"</span>
    <span className="text-gray-800">{" }"});</span>{"\n"}
    {"  "}
    <span className="text-gray-800">{"}"}</span>
    {"\n\n"}

    {"  "}
    <span className="text-yellow-600">render</span>
    <span className="text-gray-800">() {"{"}</span>{"\n"}
    {"    "}
    <span className="text-purple-600">return</span>{" ("}{"\n"}
    {"      "}
    <span className="text-pink-600">&lt;div&gt;</span>{"\n"}

    {"        "}
    <span className="text-pink-600">&lt;h1&gt;</span>
    GeeksForGeeks.org, Hello {"{"}
    <span className="text-blue-600">this</span>
    <span className="text-gray-800">.</span>
    <span className="text-blue-600">state</span>
    <span className="text-gray-800">.</span>
    <span className="text-blue-600">hello</span>
    {"}"}
    <span className="text-pink-600">&lt;/h1&gt;</span>{"\n"}

    {"        "}
    <span className="text-pink-600">&lt;h2&gt;</span>{"\n"}
    {"          "}
    <span className="text-pink-600">&lt;a</span>{" "}
    <span className="text-purple-600">onClick</span>
    <span className="text-gray-800">=</span>
    <span className="text-gray-900">{`{this.changeState.bind(this)}`}</span>
    <span className="text-pink-600">&gt;</span>
    Press Here!
    <span className="text-pink-600">&lt;/a&gt;</span>{"\n"}
    {"        "}
    <span className="text-pink-600">&lt;/h2&gt;</span>{"\n"}

    {"      "}
    <span className="text-pink-600">&lt;/div&gt;</span>{"\n"}
    {"    "}){";"}{"\n"}
    {"  "}
    <span className="text-gray-800">{"}"}</span>
    {"\n\n"}

    {"  "}
    <span className="text-yellow-600">shouldComponentUpdate</span>
    <span className="text-gray-800">(nextProps, nextState) {"{"}</span>{"\n"}
    {"    "}
    <span className="text-yellow-600">console</span>
    <span className="text-gray-800">.</span>
    <span className="text-blue-600">log</span>
    <span className="text-gray-800">(</span>
    <span className="text-orange-500">"shouldComponentUpdate()"</span>
    <span className="text-gray-800">);</span>{"\n"}
    {"    "}
    <span className="text-purple-600">return</span>{" "}
    <span className="text-green-600">true</span>;
    {"\n"}
    {"  "}
    <span className="text-gray-800">{"}"}</span>
    {"\n\n"}

    {"  "}
    <span className="text-yellow-600">componentDidUpdate</span>
    <span className="text-gray-800">() {"{"}</span>{"\n"}
    {"    "}
    <span className="text-yellow-600">console</span>
    <span className="text-gray-800">.</span>
    <span className="text-blue-600">log</span>
    <span className="text-gray-800">(</span>
    <span className="text-orange-500">"componentDidUpdate()"</span>
    <span className="text-gray-800">);</span>{"\n"}
    {"  "}
    <span className="text-gray-800">{"}"}</span>
    {"\n"}

    <span className="text-gray-800">{"}"}</span>
    {"\n\n"}

    <span className="text-purple-600">const</span>{" "}
    <span className="text-blue-600">root</span>{" "}
    <span className="text-gray-800">=</span>{" "}
    <span className="text-blue-600">ReactDOM</span>
    <span className="text-gray-800">.</span>
    <span className="text-yellow-600">createRoot</span>
    <span className="text-gray-800">(</span>
    <span className="text-blue-600">document</span>
    <span className="text-gray-800">.</span>
    <span className="text-yellow-600">getElementById</span>
    <span className="text-gray-800">(</span>
    <span className="text-orange-500">"root"</span>
    <span className="text-gray-800">));</span>{"\n"}

    <span className="text-blue-600">root</span>
    <span className="text-gray-800">.</span>
    <span className="text-yellow-600">render</span>
    <span className="text-gray-800">(</span>
    <span className="text-pink-600">&lt;Test /&gt;</span>
    <span className="text-gray-800">);</span>
  </code>
</pre>

     <h2 className="mt-10 text-2xl mb-5">In this example</h2>
     <p>The Test class is a React component where the state hello starts as “World!”.When the component appears on the page, <span className="text-red-400 bg-gray-50">componentDidMount()</span> runs and prints a message in the console.The changeState() function changes hello to “Geek!”.Inside <span className="text-red-400 bg-gray-50">render()</span>, the value of hello is shown in an <span className="text-red-400 bg-gray-50">{'<h1>'}</span> tag and a link is provided to change the state.The component re-renders because shouldComponentUpdate() allows it,</p>
   
     <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">React Lifecycle Methods: Class Components vs Functional Components</h2>
     <ul className="list-[square] mt-5">
        <li>Managing state and side effects in class components requires different lifecycle methods, which can be confusing.</li>
        <li>Functional components use Hooks like <span className="text-red-400 bg-gray-50">useState()</span> and <span className="text-red-400 bg-gray-50">useEffect()</span>, making the code easier to write and understand.</li>
     </ul>
     
     <div className="max-w-full overflow-x-auto">
     <table className="min-w-full border border-gray-300 text-gray-700 text-left text-sm mt-10">
        <thead>
            <tr className="bg-gray-100">
                <th className="px-4 py-2 border-b border-gray-300 text-gray-700 font-bold">Features</th>
                <th className="px-4 py-2 border-b border-gray-300 text-gray-700 font-bold">Class Components</th>
                <th className="px-4 py-2 border-b border-gray-300 text-gray-700 font-bold">Functional Components</th>
            </tr>
        </thead>
        <tbody>
            {data.map((row,index)=>(
                <tr className="cursor-text hover:bg-gray-100">
                    <td className="px-4 py-2 border-b border-gray-200">{row.Features}</td>
                    <td className="px-4 py-2 border-b border-gray-200">{row.ClassComponents}</td>
                    <td className="px-4 py-2 border-b border-gray-200">{row.FunctionalComponents}</td>
                </tr>
            ))}
        </tbody>
     </table> 
     </div>
     
        </div>
    )
}

export default ReactLifeCycle;