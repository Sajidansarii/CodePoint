import React  from "react";

const Reactcomponent = () => {
    return (
        <div className="max-w-4xl p-6 mt-10">
        <h1 className="text-3xl text-blue-500 font-semibold mb-3">React Components</h1>
        <p className="mb-3">React components are self‑contained units (either functions or classes) that help build the interface; they accept props as input and return UI elements.</p>
        <p>React applications are built from components, which are self‑contained, reusable units written as functions or classes that take inputs (props) and return the UI elements to display; there are two types (Class and Function components), but we’ll concentrate on function components here.</p>
        
        <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Create Your First Component</h2>
        <p>When defining a React component, its name must begin with an uppercase letter so that JSX recognizes it as a custom component rather than a built‑in HTML element, and the component returns JSX (which looks like HTML) describing what should be displayed in the UI.</p>
        <h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">Example</h2> 
        <p>Define a function component named Car. </p>
      <pre className="bg-gray-100 p-4 rounded-lg mt-5 overflow-x-auto text-sm">
  <code>
    <span className="text-purple-600">function</span>{" "}
    <span className="text-yellow-600">Car</span>() {"{"}
    <br />

    &nbsp;&nbsp;<span className="text-purple-600">return</span> (
    <br />

    &nbsp;&nbsp;&nbsp;&nbsp;&lt;h2&gt;Hi, I am a Car!&lt;/h2&gt;
    <br />

    &nbsp;&nbsp;);
    <br />

    {"}"}
  </code>
</pre>

       <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Rendering a Component</h2>
       <p>Now your React app includes a component named Car that returns an <span className="text-red-400">{'<h2>'}</span> element. To render it in your app, you reference it like a normal HTML tag using <span className="text-red-400">{'<Car/>'}</span>.</p>
       <h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">Example</h2>
       <p>Render the Car component inside the element with the id "root". </p>
     <pre className="bg-gray-100 p-4 rounded-lg mt-5 overflow-x-auto text-sm">
  <code>
    <span className="text-blue-500">createRoot</span>
    <span className="text-black">(document.getElementById('root'))</span>
    <span className="text-blue-500">.render</span>
    <span className="text-black">(</span>
    <br />

    &nbsp;&nbsp;&lt;<span className="text-yellow-600">Car</span> /&gt;
    <br />

    <span className="text-black">)</span>
  </code>
</pre>

       <h2 className="text-2xl text-gray-800 font-semibold mt-5">Props</h2>
       <p>Props (properties) let you send values into a React component, and you pass them the same way you set HTML attributes on an element.</p>
       <h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">Example</h2>
      <p>Specify a color attribute when rendering Car, and then use that prop in the component to affect the rendered content or style.</p>
      <pre className="bg-gray-100 p-4 rounded-lg mt-5 overflow-x-auto text-sm">
  <code>
    <span className="text-purple-600">function</span>{" "}
    <span className="text-yellow-600">Car</span>(props) {"{"}
    <br />

    &nbsp;&nbsp;<span className="text-purple-600">return</span> (
    <br />

    &nbsp;&nbsp;&nbsp;&nbsp;&lt;h2&gt;I am a {"{"}props.color{"}"} Car!&lt;/h2&gt;
    <br />

    &nbsp;&nbsp;);
    <br />

    {"}"}

    <br /><br />

    <span className="text-blue-500">createRoot</span>
    <span className="text-black">(document.getElementById('root'))</span>
    <span className="text-blue-500">.render</span>
    <span className="text-black">(</span>
    <br />

    &nbsp;&nbsp;&lt;<span className="text-yellow-600">Car</span>{" "}
    <span className="text-purple-600">color</span>=
    <span className="text-green-600">"red"</span> /&gt;
    <br />

    <span className="text-black">);</span>
  </code>
</pre>


      <h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">Components in Components</h2>
      <p>Components in React can render other components within them.</p>
      <h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">Example</h2>
     <p>Include the Car component within the JSX of the Garage component.</p>
    <pre className="bg-gray-100 p-4 rounded-lg mt-5 overflow-x-auto text-sm">
  <code>
    <span className="text-purple-600">function</span>{" "}
    <span className="text-yellow-600">Car</span>() {"{"}
    <br />

    &nbsp;&nbsp;<span className="text-purple-600">return</span> (
    <br />

    &nbsp;&nbsp;&nbsp;&nbsp;&lt;h2&gt;I am a Car!&lt;/h2&gt;
    <br />

    &nbsp;&nbsp;);
    <br />

    {"}"}

    <br /><br />

    <span className="text-purple-600">function</span>{" "}
    <span className="text-yellow-600">Garage</span>() {"{"}
    <br />

    &nbsp;&nbsp;<span className="text-purple-600">return</span> (
    <br />

    &nbsp;&nbsp;&nbsp;&nbsp;&lt;&gt;
    <br />

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;h1&gt;Who lives in my Garage?&lt;/h1&gt;
    <br />

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Car /&gt;
    <br />

    &nbsp;&nbsp;&nbsp;&nbsp;&lt;/&gt;
    <br />

    &nbsp;&nbsp;);
    <br />

    {"}"}

    <br /><br />

    <span className="text-blue-500">createRoot</span>
    <span className="text-black">(document.getElementById('root'))</span>
    <span className="text-blue-500">.render</span>
    <span className="text-black">(</span>
    <br />

    &nbsp;&nbsp;&lt;<span className="text-yellow-600">Garage</span> /&gt;
    <br />

    <span className="text-black">);</span>
  </code>
</pre>


     <h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">Rendering a Component Twice</h2>
    <p>You can render the same component more than once in your UI.</p>
    <h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">Example</h2>
    <p>Place two instances of the Car component inside the Garage component’s JSX.</p>
    <pre className="bg-gray-100 p-4 rounded-lg mt-5 overflow-x-auto text-sm">
  <code>
    <span className="text-purple-600">function</span>{" "}
    <span className="text-yellow-600">Car</span>() {"{"}
    <br />

    &nbsp;&nbsp;<span className="text-purple-600">return</span> (
    <br />

    &nbsp;&nbsp;&nbsp;&nbsp;&lt;h2&gt;I am a Car!&lt;/h2&gt;
    <br />

    &nbsp;&nbsp;);
    <br />

    {"}"}

    <br /><br />

    <span className="text-purple-600">function</span>{" "}
    <span className="text-yellow-600">Garage</span>() {"{"}
    <br />

    &nbsp;&nbsp;<span className="text-purple-600">return</span> (
    <br />

    &nbsp;&nbsp;&nbsp;&nbsp;&lt;&gt;
    <br />

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;h1&gt;Who lives in my Garage?&lt;/h1&gt;
    <br />

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Car /&gt;
    <br />

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Car /&gt;
    <br />

    &nbsp;&nbsp;&nbsp;&nbsp;&lt;/&gt;
    <br />

    &nbsp;&nbsp;);
    <br />

    {"}"}

    <br /><br />

    <span className="text-blue-500">createRoot</span>
    <span className="text-black">(document.getElementById('root'))</span>
    <span className="text-blue-500">.render</span>
    <span className="text-black">(</span>
    <br />

    &nbsp;&nbsp;&lt;<span className="text-yellow-600">Garage</span> /&gt;
    <br />

    <span className="text-black">);</span>
  </code>
</pre>

    <p className="mt-5">The previous example might seem trivial, but if we make the Car component dynamic by passing data (props) into it, it becomes much more useful.</p>
    <h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">Example</h2>
    <p>Display two instances of the Car component, passing different attributes so each car appears uniquely.</p>
    <pre className="bg-gray-100 p-4 rounded-lg mt-5 overflow-x-auto text-sm">
  <code>
    <span className="text-purple-600">function</span>{" "}
    <span className="text-yellow-600">Car</span>(props) {"{"}
    <br />

    &nbsp;&nbsp;<span className="text-purple-600">return</span> (
    <br />

    &nbsp;&nbsp;&nbsp;&nbsp;&lt;h2&gt;I am a {"{"}props.brand{"}"}!&lt;/h2&gt;
    <br />

    &nbsp;&nbsp;);
    <br />

    {"}"}

    <br /><br />

    <span className="text-purple-600">function</span>{" "}
    <span className="text-yellow-600">Garage</span>() {"{"}
    <br />

    &nbsp;&nbsp;<span className="text-purple-600">return</span> (
    <br />

    &nbsp;&nbsp;&nbsp;&nbsp;&lt;&gt;
    <br />

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;h1&gt;Who lives in my Garage?&lt;/h1&gt;
    <br />

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Car brand="Ford" /&gt;
    <br />

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Car brand="BMW" /&gt;
    <br />

    &nbsp;&nbsp;&nbsp;&nbsp;&lt;/&gt;
    <br />

    &nbsp;&nbsp;);
    <br />

    {"}"}

    <br /><br />

    <span className="text-blue-500">createRoot</span>
    <span className="text-black">(document.getElementById('root'))</span>
    <span className="text-blue-500">.render</span>
    <span className="text-black">(</span>
    <br />

    &nbsp;&nbsp;&lt;<span className="text-yellow-600">Garage</span> /&gt;
    <br />

    <span className="text-black">);</span>
  </code>
</pre>


    <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Components in Files</h2>
    <p>React lets you organize components in their own files to improve readability and reuse; just add a .jsx file inside the src folder and move the component code into it.</p>
    <h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">Example</h2>
    <p>This is our newly created file, called <span className="text-red-400">Vehicle.jsx</span>.</p>
   <pre className="bg-gray-100 p-4 rounded-lg mt-5 overflow-x-auto text-sm">
  <code>
    <span className="text-purple-600">function</span>{" "}
    <span className="text-yellow-600">Car</span>() {"{"}
    <br />

    &nbsp;&nbsp;<span className="text-purple-600">return</span> (
    <br />

    &nbsp;&nbsp;&nbsp;&nbsp;&lt;h2&gt;Hi, I am a Car!&lt;/h2&gt;
    <br />

    &nbsp;&nbsp;);
    <br />

    {"}"}

    <br /><br />

    <span className="text-purple-600">export default</span>{" "}
    <span className="text-yellow-600">Car</span>;
  </code>
</pre>

    <p className="mt-5">You must import the Car component by bringing in the Vehicle.jsx file before you can render it in your React application.</p>
    <h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">Example</h2>
   <p>After importing the Vehicle.jsx file into your app, you can use the Car component just like any component defined in the same file.</p>
  <pre className="bg-gray-100 p-4 rounded-lg mt-5 overflow-x-auto text-sm">
  <code>
    <span className="text-purple-600">import</span>{" "}
    {"{ createRoot }"}{" "}
    <span className="text-purple-600">from</span>{" "}
    <span className="text-green-600">'react-dom/client'</span>;

    <br />

    <span className="text-purple-600">import</span>{" "}
    <span className="text-yellow-600">Car</span>{" "}
    <span className="text-purple-600">from</span>{" "}
    <span className="text-green-600">'./Vehicle.jsx'</span>;

    <br /><br />

    <span className="text-blue-500">createRoot</span>
    <span className="text-black">(document.getElementById('root'))</span>
    <span className="text-blue-500">.render</span>
    <span className="text-black">(</span>
    <br />

    &nbsp;&nbsp;&lt;<span className="text-yellow-600">Car</span> /&gt;
    <br />

    <span className="text-black">);</span>
  </code>
</pre>

    </div>

    
    )
}

export default  Reactcomponent;