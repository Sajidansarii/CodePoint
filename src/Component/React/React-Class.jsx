import React from "react";


const ReactClass = () => {
    return (
        <div className="max-w-4xl p-6 mt-10">
        <h1 className="text-3xl text-blue-500 font-semibold mb-3">React Calss</h1>
        <p>Before React 16.8, class components were the only way to manage state and lifecycle methods in a React component, and function components were considered stateless. With the introduction of Hooks in React 16.8, function components can now use state and lifecycle features too, making them almost equivalent to class components. As a result, you’ll rarely need class components in modern React, though they are still supported and not planned for removal. This section provides an overview of how to use class components in React.</p>
         
         <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">React Components</h2>
         <p>React components are reusable, self‑contained pieces of code that behave like functions and return HTML through a render method. There are two kinds—Class components and Function components—and this section focuses on how to create and use Class components.</p>
    

    <h2 className="text-2xl text-gray-800 font-semiboldm mt-10 mb-3">Create a Class Component</h2>
    <p>In React, class components must be named with a capital first letter to work correctly in JSX. The component class must include extends React.Component so it inherits the functionality provided by React, and it must implement a <span className="text-red-400">render()</span> method that returns the UI’s HTML structure.</p>
    <h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">Example</h2>
     <p>Create a class-based component named Car.</p>
  <pre className="bg-gray-100 p-4 rounded-lg mt-5 overflow-x-auto text-sm">
  <code>
    <span className="text-purple-600">class</span>{" "}
    <span className="text-yellow-600">Car</span>{" "}
    <span className="text-purple-600">extends</span>{" "}
    <span className="text-blue-500">React.Component</span> {"{"}
    <br />

    &nbsp;&nbsp;<span className="text-yellow-600">render</span>() {"{"}
    <br />

    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-600">return</span>{" "}
    &lt;h2&gt;Hi, I am a Car!&lt;/h2&gt;;
    <br />

    &nbsp;&nbsp;{"}"}
    <br />
    {"}"}
  </code>
</pre>

    <p className="mt-5">With the Car component defined, you use it in your application’s JSX by writing {'<Car />'}, similar to how you would write an HTML element.</p>
     
     <h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">Example</h2>
     <p>Render the Car component into the DOM element with the id <span className="text-red-400">"root"</span>. </p>
   <pre className="bg-gray-100 p-4 rounded-lg mt-5 overflow-x-auto text-sm">
  <code>
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

    <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Component Constructor</h2>
    <p>When defining a class component in React, the <span className="text-red-400">constructor()</span> method (if present) runs before anything else and is where you set up your component’s initial state object to hold its properties. To use this.props and other inherited functionality from React.Component, you start the constructor with super(props), which calls the parent constructor. The <span className="text-red-400">render()</span> method then returns the HTML that should be displayed, and you’ll explore state in more detail later in this tutorial.</p>
    <h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">Example</h2>
    <p>Create a constructor function for Car and assign a color field inside the component’s state object.</p>
     <pre className="bg-gray-100 p-4 rounded-lg mt-5 overflow-x-auto text-sm">
  <code>
    <span className="text-purple-600">class</span>{" "}
    <span className="text-yellow-600">Car</span>{" "}
    <span className="text-purple-600">extends</span>{" "}
    <span className="text-blue-500">React.Component</span> {"{"}
    <br />

    &nbsp;&nbsp;<span className="text-purple-600">constructor</span>() {"{"}
    <br />

    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-600">super</span>();
    <br />

    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-600">this</span>.state = {"{"}
    color: <span className="text-green-600">"red"</span>
    {"}"};
    <br />

    &nbsp;&nbsp;{"}"}
    <br /><br />

    &nbsp;&nbsp;<span className="text-yellow-600">render</span>() {"{"}
    <br />

    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-600">return</span>{" "}
    &lt;h2&gt;I am a Car!&lt;/h2&gt;;
    <br />

    &nbsp;&nbsp;{"}"}
    <br />

    {"}"}
  </code>
</pre>

     <p className="mt-5">Access the color value from this.state within the <span className="text-red-400">render()</span> method and use it in the returned element.</p>
    <h2 className="text-2xl text-gray-800 font-semibold mt-5">Example</h2>
   <pre className="bg-gray-100 p-4 rounded-lg mt-5 overflow-x-auto text-sm">
  <code>
    <span className="text-purple-600">class</span>{" "}
    <span className="text-yellow-600">Car</span>{" "}
    <span className="text-purple-600">extends</span>{" "}
    <span className="text-blue-500">React.Component</span> {"{"}
    <br />

    &nbsp;&nbsp;<span className="text-purple-600">constructor</span>() {"{"}
    <br />

    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-600">super</span>();
    <br />

    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-600">this</span>.state = {"{"}
    color: <span className="text-green-600">"red"</span>
    {"}"};
    <br />

    &nbsp;&nbsp;{"}"}
    <br /><br />

    &nbsp;&nbsp;<span className="text-yellow-600">render</span>() {"{"}
    <br />

    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-600">return</span>{" "}
    &lt;h2&gt;I am a {"{"}this.state.color{"}"} Car!&lt;/h2&gt;;
    <br />

    &nbsp;&nbsp;{"}"}
    <br />

    {"}"}
  </code>
</pre>

    <h1 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Props</h1>
    <p>Another way of handling component properties is by using props.Props are like function arguments, and you send them into the component as attributes.You will learn more about props in the next chapter.</p>
    <h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">Example</h2>
    <p>Give the Car component a color prop when rendering it, and access that value inside the render (or return) to display the color.</p>
   <pre className="bg-gray-100 p-4 rounded-lg mt-5 overflow-x-auto text-sm">
  <code>
    <span className="text-purple-600">class</span>{" "}
    <span className="text-yellow-600">Car</span>{" "}
    <span className="text-purple-600">extends</span>{" "}
    <span className="text-blue-500">React.Component</span> {"{"}
    <br />

    &nbsp;&nbsp;<span className="text-yellow-600">render</span>() {"{"}
    <br />

    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-600">return</span>{" "}
    &lt;h2&gt;I am a {"{"}this.props.color{"}"} Car!&lt;/h2&gt;;
    <br />

    &nbsp;&nbsp;{"}"}
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

    <h2 className="text-2xl text-gray-800 font-semibold mt-5">Props in the Constructor</h2>
    <p>When you define a constructor in a React class component, you should accept props as an argument and pass them to the parent class by calling super(props), so that the component is properly initialized with its props.</p>
    <h2 className="text-2xl text-gray-800 font-semibold mt-5">Example</h2>
   <pre className="bg-gray-100 p-4 rounded-lg mt-5 overflow-x-auto text-sm">
  <code>
    <span className="text-purple-600">class</span>{" "}
    <span className="text-yellow-600">Car</span>{" "}
    <span className="text-purple-600">extends</span>{" "}
    <span className="text-blue-500">React.Component</span> {"{"}
    <br />

    &nbsp;&nbsp;<span className="text-purple-600">constructor</span>(props) {"{"}
    <br />

    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-600">super</span>(props);
    <br />

    &nbsp;&nbsp;{"}"}
    <br /><br />

    &nbsp;&nbsp;<span className="text-yellow-600">render</span>() {"{"}
    <br />

    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-600">return</span>{" "}
    &lt;h2&gt;I am a {"{"}this.props.model{"}"}!&lt;/h2&gt;;
    <br />

    &nbsp;&nbsp;{"}"}
    <br />
    {"}"}

    <br /><br />

    <span className="text-blue-500">createRoot</span>
    <span className="text-black">(document.getElementById('root'))</span>
    <span className="text-blue-500">.render</span>
    <span className="text-black">(</span>
    <br />

    &nbsp;&nbsp;&lt;<span className="text-yellow-600">Car</span>{" "}
    <span className="text-purple-600">model</span>=
    <span className="text-green-600">"Mustang"</span> /&gt;
    <br />

    <span className="text-black">);</span>
  </code>
</pre>


    <h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">Components in Components</h2>
    <p>One component can be nested inside another component’s output.</p>
    <h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">Example</h2>
    <p>Nest the Car component inside the Garage component.</p>
   <pre className="bg-gray-100 p-4 rounded-lg mt-5 overflow-x-auto text-sm">
  <code>
    <span className="text-purple-600">class</span>{" "}
    <span className="text-yellow-600">Car</span>{" "}
    <span className="text-purple-600">extends</span>{" "}
    <span className="text-blue-500">React.Component</span> {"{"}
    <br />

    &nbsp;&nbsp;<span className="text-yellow-600">render</span>() {"{"}
    <br />

    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-600">return</span>{" "}
    &lt;h2&gt;I am a Car!&lt;/h2&gt;;
    <br />

    &nbsp;&nbsp;{"}"}
    <br />
    {"}"}

    <br /><br />

    <span className="text-purple-600">class</span>{" "}
    <span className="text-yellow-600">Garage</span>{" "}
    <span className="text-purple-600">extends</span>{" "}
    <span className="text-blue-500">React.Component</span> {"{"}
    <br />

    &nbsp;&nbsp;<span className="text-yellow-600">render</span>() {"{"}
    <br />

    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-600">return</span> (
    <br />

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div&gt;
    <br />

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;h1&gt;Who lives in my Garage?&lt;/h1&gt;
    <br />

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Car /&gt;
    <br />

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;
    <br />

    &nbsp;&nbsp;&nbsp;&nbsp;);
    <br />

    &nbsp;&nbsp;{"}"}
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


    <h1 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Components in Files</h1>
    <p>Since React is designed for code reuse, it’s a good idea to keep some components in separate files.Create a .jsx file for the component and include your code inside.</p>
    <h2 className="text-gray-800 text-2xl font-semibold mt-5 mb-3">Example</h2>
    <p>We created a new file and named it <span className="text-red-400">Vehicle.jsx</span>.</p>
   <pre className="bg-gray-100 p-4 rounded-lg mt-5 overflow-x-auto text-sm">
  <code>
    <span className="text-purple-600">import</span>{" "}
    React{" "}
    <span className="text-purple-600">from</span>{" "}
    <span className="text-green-600">'react'</span>;

    <br /><br />

    <span className="text-purple-600">class</span>{" "}
    <span className="text-yellow-600">Car</span>{" "}
    <span className="text-purple-600">extends</span>{" "}
    <span className="text-blue-500">React.Component</span> {"{"}
    <br />

    &nbsp;&nbsp;<span className="text-yellow-600">render</span>() {"{"}
    <br />

    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-600">return</span>{" "}
    &lt;h2&gt;Hi, I am a Car!&lt;/h2&gt;;
    <br />

    &nbsp;&nbsp;{"}"}
    <br />
    {"}"}

    <br /><br />

    <span className="text-purple-600">export default</span>{" "}
    <span className="text-yellow-600">Car</span>;
  </code>
</pre>

    <p className="mt-5">Import the <span className="text-red-400">Vehicle.jsx</span> file in your application to make the Car component available.</p>
    
    <h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">Example</h2>
    <p>After importing <span className="text-red-400">Vehicle.jsx</span> into the app, we can use the Car component just like it was defined here.</p>
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

    <h1 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">React Class Component State</h1>
   <p>Class components in React come with a state object that holds the component’s data. Changes to the state trigger a re-render. You may have encountered state in the constructor before.</p>
    <h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">Creating the state Object</h2>
    <p>The constructor is where the state object gets initialized.</p>
    <h2 className="text-2xl text-gray-800 font-semibold mt-5">Example</h2>
  <pre className="bg-gray-100 p-4 rounded-lg mt-5 overflow-x-auto text-sm">
  <code>
    <span className="text-purple-600">class</span>{" "}
    <span className="text-yellow-600">Car</span>{" "}
    <span className="text-purple-600">extends</span>{" "}
    <span className="text-blue-500">React.Component</span> {"{"}
    <br />

    &nbsp;&nbsp;<span className="text-purple-600">constructor</span>(props) {"{"}
    <br />

    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-600">super</span>(props);
    <br />

    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-600">this</span>.state = {"{"}
    brand: <span className="text-green-600">"Ford"</span>
    {"}"};
    <br />

    &nbsp;&nbsp;{"}"}
    <br /><br />

    &nbsp;&nbsp;<span className="text-yellow-600">render</span>() {"{"}
    <br />

    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-600">return</span> (
    <br />

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div&gt;
    <br />

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;h1&gt;My Car&lt;/h1&gt;
    <br />

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;
    <br />

    &nbsp;&nbsp;&nbsp;&nbsp;);
    <br />

    &nbsp;&nbsp;{"}"}
    <br />
    {"}"}
  </code>
</pre>

    <p className="mt-5">The state object is able to hold multiple properties.</p>
   
   <h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">Example</h2>
   <p>Define every property your component will use.</p>
 <pre className="bg-gray-100 p-4 rounded-lg mt-5 overflow-x-auto text-sm">
  <code>
    <span className="text-purple-600">class</span>{" "}
    <span className="text-yellow-600">Car</span>{" "}
    <span className="text-purple-600">extends</span>{" "}
    <span className="text-blue-500">React.Component</span> {"{"}
    <br />

    &nbsp;&nbsp;<span className="text-purple-600">constructor</span>(props) {"{"}
    <br />

    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-600">super</span>(props);
    <br />

    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-600">this</span>.state = {"{"}
    <br />

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;brand: <span className="text-green-600">"Ford"</span>,
    <br />

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;model: <span className="text-green-600">"Mustang"</span>,
    <br />

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;color: <span className="text-green-600">"red"</span>,
    <br />

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;year: <span className="text-green-600">1964</span>
    <br />

    &nbsp;&nbsp;&nbsp;&nbsp;{"}"};
    <br />

    &nbsp;&nbsp;{"}"}
    <br /><br />

    &nbsp;&nbsp;<span className="text-yellow-600">render</span>() {"{"}
    <br />

    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-600">return</span> (
    <br />

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div&gt;
    <br />

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;h1&gt;My Car&lt;/h1&gt;
    <br />

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;
    <br />

    &nbsp;&nbsp;&nbsp;&nbsp;);
    <br />

    &nbsp;&nbsp;{"}"}
    <br />
    {"}"}
  </code>
</pre>

   <h2 className="text-2xl text-gray-800 font-semibold mt-5">Using the state Object</h2>
   <p>Access the state object anywhere in the component with <span className="text-red-400">this.state.propertyName</span>.</p>
   <h2 className="text-2xl text-gray-800 font-semibold mt-5">Example</h2>
   <p>Access the state object inside the <span className="text-red-400">render()</span> method.</p>
 <pre className="bg-gray-100 p-4 rounded-lg mt-5 overflow-x-auto text-sm">
  <code>
    <span className="text-purple-600">class</span>{" "}
    <span className="text-yellow-600">Car</span>{" "}
    <span className="text-purple-600">extends</span>{" "}
    <span className="text-blue-500">React.Component</span> {"{"}
    <br />

    &nbsp;&nbsp;<span className="text-purple-600">constructor</span>(props) {"{"}
    <br />

    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-600">super</span>(props);
    <br />

    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-600">this</span>.state = {"{"}
    <br />

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;brand: <span className="text-green-600">"Ford"</span>,
    <br />

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;model: <span className="text-green-600">"Mustang"</span>,
    <br />

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;color: <span className="text-green-600">"red"</span>,
    <br />

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;year: <span className="text-green-600">1964</span>
    <br />

    &nbsp;&nbsp;&nbsp;&nbsp;{"}"};
    <br />

    &nbsp;&nbsp;{"}"}
    <br /><br />

    &nbsp;&nbsp;<span className="text-yellow-600">render</span>() {"{"}
    <br />

    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-600">return</span> (
    <br />

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div&gt;
    <br />

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;h1&gt;My {"{"}this.state.brand{"}"}&lt;/h1&gt;
    <br />

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;p&gt;
    <br />

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;It is a {"{"}this.state.color{"}"}
    {"{"}this.state.model{"}"} from {"{"}this.state.year{"}"}.
    <br />

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/p&gt;
    <br />

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;
    <br />

    &nbsp;&nbsp;&nbsp;&nbsp;);
    <br />

    &nbsp;&nbsp;{"}"}
    <br />
    {"}"}
  </code>
</pre>

   <h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">Changing the state Object</h2>
   <p>To update a value in the state object, use <span className="text-red-400">this.setState()</span>. When the state changes, the component automatically re-renders, updating the output to reflect the new value(s).</p>
   <h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">Example</h2>
   <p>Add a button that, when clicked, modifies the color property.</p>
  <pre className="bg-gray-100 p-4 rounded-lg mt-5 overflow-x-auto text-sm">
  <code>
    <span className="text-purple-600">class</span>{" "}
    <span className="text-yellow-600">Car</span>{" "}
    <span className="text-purple-600">extends</span>{" "}
    <span className="text-blue-500">React.Component</span> {"{"}
    <br />

    &nbsp;&nbsp;<span className="text-purple-600">constructor</span>(props) {"{"}
    <br />

    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-600">super</span>(props);
    <br />

    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-600">this</span>.state = {"{"}
    <br />

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;brand: <span className="text-green-600">"Ford"</span>,
    <br />

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;model: <span className="text-green-600">"Mustang"</span>,
    <br />

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;color: <span className="text-green-600">"red"</span>,
    <br />

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;year: <span className="text-green-600">1964</span>
    <br />

    &nbsp;&nbsp;&nbsp;&nbsp;{"}"};
    <br />

    &nbsp;&nbsp;{"}"}
    <br /><br />

    &nbsp;&nbsp;<span className="text-purple-600">changeColor</span> = () =&gt; {"{"}
    <br />

    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-600">this</span>.setState({"{"}
    color: <span className="text-green-600">"blue"</span>
    {"}"});
    <br />

    &nbsp;&nbsp;{"}"}
    <br /><br />

    &nbsp;&nbsp;<span className="text-yellow-600">render</span>() {"{"}
    <br />

    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-600">return</span> (
    <br />

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div&gt;
    <br />

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;h1&gt;My {"{"}this.state.brand{"}"}&lt;/h1&gt;
    <br />

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;p&gt;
    <br />

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;It is a {"{"}this.state.color{"}"}
    {"{"}this.state.model{"}"} from {"{"}this.state.year{"}"}.
    <br />

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/p&gt;
    <br />

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;button type="button" onClick={"{"}this.changeColor{"}"}&gt;
    Change color
    &lt;/button&gt;
    <br />

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;
    <br />

    &nbsp;&nbsp;&nbsp;&nbsp;);
    <br />

    &nbsp;&nbsp;{"}"}
    <br />
    {"}"}
  </code>
</pre>

   <h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">Lifecycle of Components</h2>
   <p>Every React component has a lifecycle that you can observe and control through its three main phases: Mounting, Updating, and Unmounting.</p>
   <h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">Mounting</h2>
   <p>Mounting refers to inserting elements into the DOM. React triggers four built-in methods in sequence when a component mounts.</p>
   <ul className="list-[square] mt-5">
    <li>constructor()</li>
    <li>getDerivedStateFromProps()</li>
    <li>render()</li>
    <li>componentDidMount()</li>
   </ul>

   <p>The <span className="text-red-400">render()</span> method is mandatory and always executes, while the other methods are optional and run only if defined.</p>
  
  <h2 className="text-2xl text-gray-800 font-semibold mt-5">constructor</h2>
  <p>The <span className="text-red-400">constructor()</span> method runs first when a component is created and is the proper place to initialize state and other values. It receives props as arguments, and you should always call super(props) at the start to invoke the parent class constructor and inherit methods from React.Component.</p>
  <h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">Example</h2>
  <p>React calls the <span className="text-red-400">constructor</span> method each time a component is created.</p>
 <pre className="bg-gray-100 p-4 rounded-lg mt-5 overflow-x-auto text-sm">
  <code>
    <span className="text-purple-600">class</span>{" "}
    <span className="text-yellow-600">Header</span>{" "}
    <span className="text-purple-600">extends</span>{" "}
    <span className="text-blue-500">React.Component</span> {"{"}
    <br />

    &nbsp;&nbsp;<span className="text-purple-600">constructor</span>(props) {"{"}
    <br />

    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-600">super</span>(props);
    <br />

    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-600">this</span>.state = {"{"}
    favoritecolor: <span className="text-green-600">"red"</span>
    {"}"};
    <br />

    &nbsp;&nbsp;{"}"}
    <br /><br />

    &nbsp;&nbsp;<span className="text-yellow-600">render</span>() {"{"}
    <br />

    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-600">return</span> (
    <br />

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;h1&gt;My Favorite Color is {"{"}this.state.favoritecolor{"}"}&lt;/h1&gt;
    <br />

    &nbsp;&nbsp;&nbsp;&nbsp;);
    <br />

    &nbsp;&nbsp;{"}"}
    <br />
    {"}"}

    <br /><br />

    <span className="text-blue-500">createRoot</span>
    <span className="text-black">(document.getElementById('root'))</span>
    <span className="text-blue-500">.render</span>
    <span className="text-black">(</span>
    <br />

    &nbsp;&nbsp;&lt;<span className="text-yellow-600">Header</span> /&gt;
    <br />

    <span className="text-black">);</span>
  </code>
</pre>

  <h1 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">etDerivedStateFromProps</h1>
  <p>The <span className="text-red-400">getDerivedStateFromProps()</span> method runs just before rendering elements to the DOM. It’s used to update the state based on the initial props. The method receives the current state as an argument and returns an object with changes to the state. For example, a component may start with favoriteColor set to "red", but <span className="text-red-400">getDerivedStateFromProps()</span> updates it according to the favcol prop.</p>
  <h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">Example</h2>
  <p>The getDerivedStateFromProps method is invoked just prior to <span className="text-red-400">render()</span>.</p>
  <pre className="bg-gray-100 p-4 rounded-lg mt-5 overflow-x-auto text-sm">
  <code>
    <span className="text-purple-600">class</span>{" "}
    <span className="text-yellow-600">Header</span>{" "}
    <span className="text-purple-600">extends</span>{" "}
    <span className="text-blue-500">React.Component</span> {"{"}
    <br />

    &nbsp;&nbsp;<span className="text-purple-600">constructor</span>(props) {"{"}
    <br />

    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-600">super</span>(props);
    <br />

    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-600">this</span>.state = {"{"}
    favoritecolor: <span className="text-green-600">"red"</span>
    {"}"};
    <br />

    &nbsp;&nbsp;{"}"}
    <br /><br />

    &nbsp;&nbsp;<span className="text-purple-600">static</span>{" "}
    <span className="text-yellow-600">getDerivedStateFromProps</span>(props, state) {"{"}
    <br />

    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-600">return</span> {"{"}
    favoritecolor: props.favcol
    {"}"};
    <br />

    &nbsp;&nbsp;{"}"}
    <br /><br />

    &nbsp;&nbsp;<span className="text-yellow-600">render</span>() {"{"}
    <br />

    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-600">return</span> (
    <br />

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;h1&gt;
    My Favorite Color is {"{"}this.state.favoritecolor{"}"}
    &lt;/h1&gt;
    <br />

    &nbsp;&nbsp;&nbsp;&nbsp;);
    <br />

    &nbsp;&nbsp;{"}"}
    <br />
    {"}"}

    <br /><br />

    <span className="text-blue-500">createRoot</span>
    <span className="text-black">(document.getElementById('root'))</span>
    <span className="text-blue-500">.render</span>
    <span className="text-black">(</span>
    <br />

    &nbsp;&nbsp;&lt;<span className="text-yellow-600">Header</span>{" "}
    <span className="text-purple-600">favcol</span>=
    <span className="text-green-600">"yellow"</span> /&gt;
    <br />

    <span className="text-black">);</span>
  </code>
</pre>


  <h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">render</h2>
  <p>The <span className="text-red-400">render()</span> method is mandatory and responsible for outputting HTML to the DOM.</p>
  <h2 className="text-2xl text-gray-800 font-semibold mt-5">Example</h2>
  <p>A basic component that has a straightforward <span className="text-red-400">render()</span> method.</p>
 <pre className="bg-gray-100 p-4 rounded-lg mt-5 overflow-x-auto text-sm">
  <code>
    <span className="text-purple-600">class</span>{" "}
    <span className="text-yellow-600">Header</span>{" "}
    <span className="text-purple-600">extends</span>{" "}
    <span className="text-blue-500">React.Component</span> {"{"}
    <br />

    &nbsp;&nbsp;<span className="text-yellow-600">render</span>() {"{"}
    <br />

    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-600">return</span> (
    <br />

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;h1&gt;
    This is the content of the Header component
    &lt;/h1&gt;
    <br />

    &nbsp;&nbsp;&nbsp;&nbsp;);
    <br />

    &nbsp;&nbsp;{"}"}
    <br />
    {"}"}

    <br /><br />

    <span className="text-blue-500">createRoot</span>
    <span className="text-black">(document.getElementById('root'))</span>
    <span className="text-blue-500">.render</span>
    <span className="text-black">(</span>
    <br />

    &nbsp;&nbsp;&lt;<span className="text-yellow-600">Header</span> /&gt;
    <br />

    <span className="text-black">);</span>
  </code>
</pre>

  <h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">componentDidMount</h2>
  <p>The <span className="text-red-400">componentDidMount()</span> method is called after a component has been rendered. This is the right place to run code that depends on the component being present in the DOM.</p>
  <h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">Example</h2>
  <p>Initially, my favorite color is red, but after a moment, it changes to yellow.</p>
  <pre className="bg-gray-100 p-4 rounded-lg mt-5 overflow-x-auto text-sm">
  <code>
    <span className="text-purple-600">class</span>{" "}
    <span className="text-yellow-600">Header</span>{" "}
    <span className="text-purple-600">extends</span>{" "}
    <span className="text-blue-500">React.Component</span> {"{"}
    <br />

    &nbsp;&nbsp;<span className="text-purple-600">constructor</span>(props) {"{"}
    <br />

    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-600">super</span>(props);
    <br />

    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-600">this</span>.state = {"{"}
    favoritecolor: <span className="text-green-600">"red"</span>
    {"}"};
    <br />

    &nbsp;&nbsp;{"}"}
    <br /><br />

    &nbsp;&nbsp;<span className="text-yellow-600">componentDidMount</span>() {"{"}
    <br />

    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-500">setTimeout</span>(() =&gt; {"{"}
    <br />

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-600">this</span>.setState({"{"}
    favoritecolor: <span className="text-green-600">"yellow"</span>
    {"}"});
    <br />

    &nbsp;&nbsp;&nbsp;&nbsp;{"}"}, 1000);
    <br />

    &nbsp;&nbsp;{"}"}
    <br /><br />

    &nbsp;&nbsp;<span className="text-yellow-600">render</span>() {"{"}
    <br />

    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-600">return</span> (
    <br />

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;h1&gt;
    My Favorite Color is {"{"}this.state.favoritecolor{"}"}
    &lt;/h1&gt;
    <br />

    &nbsp;&nbsp;&nbsp;&nbsp;);
    <br />

    &nbsp;&nbsp;{"}"}
    <br />
    {"}"}

    <br /><br />

    <span className="text-blue-500">createRoot</span>
    <span className="text-black">(document.getElementById('root'))</span>
    <span className="text-blue-500">.render</span>
    <span className="text-black">(</span>
    <br />

    &nbsp;&nbsp;&lt;<span className="text-yellow-600">Header</span> /&gt;
    <br />

    <span className="text-black">);</span>
  </code>
</pre>

  <h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">Updating</h2>
  <p>The update phase occurs whenever a component’s state or props are modified.</p>
  <p>When a component updates, React calls five built-in methods in a specific order:</p>
  <ul className="list-[square] mt-5">
    <li>getDerivedStateFromProps()</li>
    <li>shouldComponentUpdate()</li>
    <li>render()</li>
    <li>getSnapshotBeforeUpdate()</li>
    <li>componentDidUpdate()</li>
  </ul>

  <p className="mt-5">The <span className="text-red-400">render()</span> method is mandatory and always executes, while the other methods are optional and only run if implemented.</p>
 
 <h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">getDerivedStateFromProps</h2>
 <p>During updates, the <span className="text-red-400">getDerivedStateFromProps()</span> method is called first. This method remains the proper place to update the state based on props. For example, even if a button changes the favorite color to blue, getDerivedStateFromProps() updates the state using the favcol prop, so the favorite color is still rendered as yellow.</p>
<h2 className="text-2xl text-gray-800 font-semibold mt-5">Example</h2>
<p>When a component updates, <span className="text-red-400">getDerivedStateFromProps()</span> is invoked.</p>
<pre className="bg-gray-100 p-4 rounded-lg mt-5 overflow-x-auto text-sm">
  <code>
    <span className="text-purple-600">class</span>{" "}
    <span className="text-yellow-600">Header</span>{" "}
    <span className="text-purple-600">extends</span>{" "}
    <span className="text-blue-500">React.Component</span> {"{"}
    <br />

    &nbsp;&nbsp;<span className="text-purple-600">constructor</span>(props) {"{"}
    <br />

    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-600">super</span>(props);
    <br />

    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-600">this</span>.state = {"{"}
    favoritecolor: <span className="text-green-600">"red"</span>
    {"}"};
    <br />

    &nbsp;&nbsp;{"}"}
    <br /><br />

    &nbsp;&nbsp;<span className="text-purple-600">static</span>{" "}
    <span className="text-yellow-600">getDerivedStateFromProps</span>(props, state) {"{"}
    <br />

    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-600">return</span> {"{"}
    favoritecolor: props.favcol
    {"}"};
    <br />

    &nbsp;&nbsp;{"}"}
    <br /><br />

    &nbsp;&nbsp;<span className="text-yellow-600">changeColor</span> = () =&gt; {"{"}
    <br />

    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-600">this</span>.setState({"{"}
    favoritecolor: <span className="text-green-600">"blue"</span>
    {"}"});
    <br />

    &nbsp;&nbsp;{"}"}
    <br /><br />

    &nbsp;&nbsp;<span className="text-yellow-600">render</span>() {"{"}
    <br />

    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-600">return</span> (
    <br />

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div&gt;
    <br />

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;h1&gt;
    My Favorite Color is {"{"}this.state.favoritecolor{"}"}
    &lt;/h1&gt;
    <br />

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;button type="button" onClick={"{"}this.changeColor{"}"}&gt;
    Change color
    &lt;/button&gt;
    <br />

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;
    <br />

    &nbsp;&nbsp;&nbsp;&nbsp;);
    <br />

    &nbsp;&nbsp;{"}"}
    <br />
    {"}"}

    <br /><br />

    <span className="text-blue-500">createRoot</span>
    <span className="text-black">(document.getElementById('root'))</span>
    <span className="text-blue-500">.render</span>
    <span className="text-black">(</span>
    <br />

    &nbsp;&nbsp;&lt;<span className="text-yellow-600">Header</span>{" "}
    <span className="text-purple-600">favcol</span>=
    <span className="text-green-600">"yellow"</span> /&gt;
    <br />

    <span className="text-black">);</span>
  </code>
</pre>

<h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">shouldComponentUpdate</h2>
<p>The <span className="text-red-400">shouldComponentUpdate()</span> method returns a Boolean value that determines whether React should proceed with rendering. By default, it returns true. In the example below, returning false prevents the component from re-rendering.</p>
<h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">Example</h2>
<p>Prevent the component from re-rendering on any update.</p>
<pre className="bg-gray-100 p-4 rounded-lg mt-5 mb-3 overflow-x-auto text-sm">
  <code>
    <span className="text-purple-600">class</span>{" "}
    <span className="text-yellow-600">Header</span>{" "}
    <span className="text-purple-600">extends</span>{" "}
    <span className="text-blue-500">React.Component</span> {"{"}
    <br />

    &nbsp;&nbsp;<span className="text-purple-600">constructor</span>(props) {"{"}
    <br />

    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-600">super</span>(props);
    <br />

    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-600">this</span>.state = {"{"}
    favoritecolor: <span className="text-green-600">"red"</span>
    {"}"};
    <br />

    &nbsp;&nbsp;{"}"}
    <br /><br />

    &nbsp;&nbsp;<span className="text-yellow-600">shouldComponentUpdate</span>() {"{"}
    <br />

    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-600">return</span>{" "}
    <span className="text-green-600">false</span>;
    <br />

    &nbsp;&nbsp;{"}"}
    <br /><br />

    &nbsp;&nbsp;<span className="text-yellow-600">changeColor</span> = () =&gt; {"{"}
    <br />

    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-600">this</span>.setState({"{"}
    favoritecolor: <span className="text-green-600">"blue"</span>
    {"}"});
    <br />

    &nbsp;&nbsp;{"}"}
    <br /><br />

    &nbsp;&nbsp;<span className="text-yellow-600">render</span>() {"{"}
    <br />

    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-600">return</span> (
    <br />

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div&gt;
    <br />

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;h1&gt;
    My Favorite Color is {"{"}this.state.favoritecolor{"}"}
    &lt;/h1&gt;
    <br />

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;button type="button" onClick={"{"}this.changeColor{"}"}&gt;
    Change color
    &lt;/button&gt;
    <br />

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;
    <br />

    &nbsp;&nbsp;&nbsp;&nbsp;);
    <br />

    &nbsp;&nbsp;{"}"}
    <br />
    {"}"}

    <br /><br />

    <span className="text-blue-500">createRoot</span>
    <span className="text-black">(document.getElementById('root'))</span>
    <span className="text-blue-500">.render</span>
    <span className="text-black">(</span>
    <br />

    &nbsp;&nbsp;&lt;<span className="text-yellow-600">Header</span> /&gt;
    <br />

    <span className="text-black">);</span>
  </code>
</pre>

    
    </div>
    
    )
}

export default ReactClass;