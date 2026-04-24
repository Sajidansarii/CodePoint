import React from "react";

const ReactForms = () => {
    return (
        <div className="max-w-4xl p-6 mt-10">
        <h1 className="text-3xl text-blue-500 font-semibold mb-3">React Forms</h1>
        <p>React, like HTML, relies on forms to handle user interaction.</p>
        
        <h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">Adding Forms in React</h2>
        <p>A form is added in React the same way as other elements.</p>
        <h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">Example</h2>
        <p>Add a form where users can type in their name.</p>
       <pre className="bg-gray-200 p-4 rounded-lg mt-5 overflow-x-auto text-sm">
  <code className="font-mono text-gray-900">

    <span className="text-purple-700">function</span>{" "}
    <span className="text-green-700">MyForm</span>() {"{"}
    {"\n"}

    {"  "}
    <span className="text-purple-700">return</span> (
    {"\n"}

    {"    "}
    &lt;<span className="text-red-600">form</span>&gt;
    {"\n"}

    {"      "}
    &lt;<span className="text-red-600">label</span>&gt;
    Enter your name:
    {"\n"}

    {"        "}
    &lt;<span className="text-red-600">input</span>{" "}
    type=<span className="text-yellow-700">"text"</span> /&gt;
    {"\n"}

    {"      "}
    &lt;/<span className="text-red-600">label</span>&gt;
    {"\n"}

    {"    "}
    &lt;/<span className="text-red-600">form</span>&gt;
    {"\n"}

    {"  "}
    );
    {"\n"}

    {"}"}
    {"\n\n"}

    <span className="text-blue-700">createRoot</span>(
    document.getElementById(
    <span className="text-yellow-700">'root'</span>)
    ).render(
    &lt;<span className="text-green-700">MyForm</span> /&gt;
    );

  </code>
</pre>

        <p className="mt-5">By default, the form will submit and refresh the page, but this is usually not the desired behavior in React. Instead, we prevent the default action and allow React to handle the form.</p>
        
        <h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">HTML Forms vs. React Forms</h2>
        <p>In React, form elements such as <span className="text-red-400">{'<input>'}</span>, <span className="text-red-400">{'<textarea>'}</span>, and <span className="text-red-400">{'<select>'}</span> behave differently than they do in plain HTML. In standard HTML, form elements manage their own values based on user input. In React, however, form values are stored in the component’s state and updated using <span className="text-red-400">setState()</span>. This approach allows React to control form data, creating what are called controlled components.</p>
        

        <h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">Controlled Components</h2>
        <p>In a controlled component, the React component manages all form data. The input value is controlled by React state, and any changes are handled through event handlers that update that state. Since the data is managed by the component, it is stored entirely in state. Using the useState Hook allows each input value to be tracked, providing a single source of truth for the application.</p>
        <h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">Example</h2>
        <p>Control the input with React’s useState Hook.</p>
      <pre className="bg-gray-200 p-4 rounded-lg mt-5 overflow-x-auto text-sm">
  <code className="font-mono text-gray-900">

    <span className="text-purple-700">import</span>{" "}
    {"{"} useState {"}"}{" "}
    <span className="text-purple-700">from</span>{" "}
    <span className="text-yellow-700">'react'</span>;
    {"\n"}

    <span className="text-purple-700">import</span>{" "}
    {"{"} createRoot {"}"}{" "}
    <span className="text-purple-700">from</span>{" "}
    <span className="text-yellow-700">'react-dom/client'</span>;
    {"\n\n"}

    <span className="text-purple-700">function</span>{" "}
    <span className="text-green-700">MyForm</span>() {"{"}
    {"\n"}

    {"  "}
    <span className="text-purple-700">const</span> [name, setName] =
    <span className="text-blue-700">useState</span>(
    <span className="text-yellow-700">""</span>
    );
    {"\n\n"}

    {"  "}
    <span className="text-purple-700">function</span> handleChange(e) {"{"}
    {"\n"}

    {"    "}
    setName(e.target.value);
    {"\n"}

    {"  "}
    {"}"}
    {"\n\n"}

    {"  "}
    <span className="text-purple-700">return</span> (
    {"\n"}

    {"    "}
    &lt;<span className="text-red-600">form</span>&gt;
    {"\n"}

    {"      "}
    &lt;<span className="text-red-600">label</span>&gt;
    Enter your name:
    {"\n"}

    {"        "}
    &lt;<span className="text-red-600">input</span>{" "}
    type=<span className="text-yellow-700">"text"</span>{" "}
    value={"{"}name{"}"} onChange={"{"}handleChange{"}"} /&gt;
    {"\n"}

    {"      "}
    &lt;/<span className="text-red-600">label</span>&gt;
    {"\n"}

    {"      "}
    &lt;<span className="text-red-600">p</span>&gt;
    Current value: {"{"}name{"}"}
    &lt;/<span className="text-red-600">p</span>&gt;
    {"\n"}

    {"    "}
    &lt;/<span className="text-red-600">form</span>&gt;
    {"\n"}

    {"  "}
    );
    {"\n"}

    {"}"}
    {"\n\n"}

    <span className="text-blue-700">createRoot</span>(
    document.getElementById(
    <span className="text-yellow-700">'root'</span>)
    ).render(
    &lt;<span className="text-green-700">MyForm</span> /&gt;
    );

  </code>
</pre>

  <p className="mt-5 mb-3">Import the <span className="text-red-400">useState</span> Hook from React:</p>
 <pre className="bg-gray-200 p-4 rounded-lg mt-5 overflow-x-auto text-sm">
  <code className="font-mono text-gray-900">

    <span className="text-purple-700">import</span>{" "}
    {"{"} useState {"}"}{" "}
    <span className="text-purple-700">from</span>{" "}
    <span className="text-yellow-700">'react'</span>;

  </code>
</pre>

  <p className="mt-5 mb-3">Use state to keep track of the input and provide a function for changes.</p>
 <pre className="bg-gray-200 p-4 rounded-lg mt-5 overflow-x-auto text-sm">
  <code className="font-mono text-gray-900">

    <span className="text-purple-700">const</span>{" "}
    [name, setName] = <span className="text-blue-700">useState</span>(
    <span className="text-yellow-700">""</span>
    );

  </code>
</pre>


  <p className="mt-5 mb-3">Define a function to manage input changes.</p>
  <pre className="bg-gray-200 p-4 rounded-lg mt-5 overflow-x-auto text-sm">
  <code className="font-mono text-gray-900">

    <span className="text-purple-700">function</span>{" "}
    handleChange(e) {"{"}
    {"\n"}

    {"  "}
    setName(e.target.value);
    {"\n"}

    {"}"}

  </code>
</pre>

  <p className="mt-5 mb-3">Use the state variable as the input value and attach the change handler to onChange.</p>
 <pre className="bg-gray-200 p-4 rounded-lg mt-5 overflow-x-auto text-sm">
  <code className="font-mono text-gray-900">

    &lt;<span className="text-red-600">input</span>{" "}
    type=<span className="text-yellow-700">"text"</span>{" "}
    value={"{"}name{"}"}{" "}
    onChange={"{"}<span className="text-blue-700">handleChange</span>{"}"}{" "}
    /&gt;

  </code>
</pre>

  <p className="mt-5 mb-3">Render the value so users can see it updating.</p>
 <pre className="bg-gray-200 p-4 rounded-lg mt-5 overflow-x-auto text-sm">
  <code className="font-mono text-gray-900">

    &lt;<span className="text-red-600">p</span>&gt;
    Current value: {"{"}name{"}"}
    &lt;/<span className="text-red-600">p</span>&gt;

  </code>
</pre>

  <h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">Initial Values</h2>
  <p>Set an initial value for the input by providing a default in <span className="text-red-400">useState</span>.</p>      
  <h2 className="text-gray-800 text-2xl font-semibold mt-5 mb-3">Example</h2>      
  <p>Use initial value for name:</p>      
  <pre className="bg-gray-200 p-4 rounded-lg mt-5 overflow-x-auto text-sm">
  <code className="font-mono text-gray-900">

    <span className="text-purple-700">function</span>{" "}
    <span className="text-green-700">MyForm</span>() {"{"}
    {"\n"}

    {"  "}
    <span className="text-purple-700">const</span> [name, setName] =
    <span className="text-blue-700">useState</span>(
    <span className="text-yellow-700">"John"</span>
    );
    {"\n"}

    {"}"}

  </code>
</pre>  
  
        </div>
    )
}

export default ReactForms;