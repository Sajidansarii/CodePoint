import React from "react";

const ReactDOM = () => {

    const data = [
        {ReactEvent:'onClick', Description:'This event is used to detect mouse clicks in the user interface.'},
        {ReactEvent:'onChange', Description:'This event is used to detect a change in the input field in the user interface.'},
        {ReactEvent:'onSubmit', Description:'This event fires on the submission of a form in the user interface and is also used to prevent the default behavior of the form.'},
        {ReactEvent:'onKeyDown', Description:'This event occurs when the user press any key from the keyboard.'},
        {ReactEvent:'onKeyUp', Description:'This event occurs when the user releases any key from the keyboard.'},
        {ReactEvent:'onMouseEnter', Description:'This event occurs when the ouse enters the boundary of the element'},
    ];

    const data1 = [
        {Feature:'Nature', HTMLDOM:'Represents the structure of the HTML document.', ReactDOM:'Represents the virtual representation of the UI.'},
        {Feature:'Updates', HTMLDOM:'Updates the actual DOM directly after every change.', ReactDOM:'Updates the virtual DOM first, then selectively updates the real DOM.'},
        {Feature:'Performance', HTMLDOM:'Can lead to performance issues with frequent direct updates', ReactDOM:'Optimized performance using a virtual DOM and efficient reconciliation.'},
        {Feature:'Event Handling', HTMLDOM:'Requires a full re-render of the page or element.', ReactDOM:'Events are attached to the virtual DOM and handled by React’s synthetic event system.'},
        {Feature:'Data Binding', HTMLDOM:'Events are directly attached to DOM elements.', ReactDOM:'React uses state and props to manage and bind data between components.'},
        {Feature:'DOM Representation', HTMLDOM:'The DOM is a tree structure where each element is a node.', ReactDOM:"React DOM uses a virtual DOM, a lightweight copy of the real DOM for efficient updates."},
    ];




    return(
        <div className="max-w-4xl p-6 mt-10">
            <h1 className="text-3xl text-blue-500 font-semibold mb-3">React Events</h1>
            <p>React events are actions performed by users, such as clicking buttons or typing in input fields. React makes it easy to handle these actions by using event handlers like <span className="text-red-400">onClick</span>, <span className="text-red-400">onChange</span>, and <span className="text-red-400">onSubmit</span>.</p>
         
         <h2 className="text-2xl text-gray-800 font-semibold mt-5">Syntax</h2>
       <pre className="bg-gray-200 p-4 rounded-lg mt-5 overflow-x-auto text-sm">
  <code className="font-mono text-gray-900">

    &lt;<span className="text-red-600">element</span>{" "}
    <span className="text-blue-700">onEvent</span>=
    {"{"}<span className="text-purple-700">handlerFunction</span>{"}"} /&gt;

  </code>
</pre>


        <ul className="list-[square] space-y-1 mt-5">
            <li><span className="font-semibold">element</span>: The JSX tag where the user interaction takes place.</li>
            <li><span className="font-semibold">onEvent</span>: The name of the event written in camelCase.</li>
            <li><span className="font-semibold">handlerFunction</span>: The function that responds to the event action.</li>
        </ul>
        
        <p className="mt-5">Now, let’s understand this with an example.</p>
      <pre className="bg-gray-200 p-4 rounded-lg mt-5 overflow-x-auto text-sm">
  <code className="font-mono text-gray-900">

    <span className="text-gray-500">/*App.css*/</span>
    {"\n\n"}

    <span className="text-red-600">.App</span> {"{"}
    {"\n"}
    {"  "}text-align: center;
    {"\n"}
    {"  "}margin-top: 50px;
    {"\n"}
    {"  "}font-family: Arial, sans-serif;
    {"\n"}
    {"}"}
    {"\n\n"}

    <span className="text-red-600">h1</span> {"{"}
    {"\n"}
    {"  "}color: #4CAF50;
    {"\n"}
    {"  "}font-size: 2.5rem;
    {"\n"}
    {"  "}margin-bottom: 20px;
    {"\n"}
    {"}"}
    {"\n\n"}

    <span className="text-red-600">h2</span> {"{"}
    {"\n"}
    {"  "}font-size: 1.5rem;
    {"\n"}
    {"  "}color: #333;
    {"\n"}
    {"}"}
    {"\n\n"}

    <span className="text-red-600">.input-field</span> {"{"}
    {"\n"}
    {"  "}padding: 10px;
    {"\n"}
    {"  "}font-size: 16px;
    {"\n"}
    {"  "}width: 250px;
    {"\n"}
    {"  "}margin: 20px 0;
    {"\n"}
    {"  "}border: 2px solid #ddd;
    {"\n"}
    {"  "}border-radius: 5px;
    {"\n"}
    {"  "}outline: none;
    {"\n"}
    {"  "}transition: border 0.3s ease;
    {"\n"}
    {"}"}
    {"\n\n"}

    <span className="text-red-600">.input-field:focus</span> {"{"}
    {"\n"}
    {"  "}border-color: #4CAF50;
    {"\n"}
    {"}"}
    {"\n\n"}

    <span className="text-red-600">.save-button</span> {"{"}
    {"\n"}
    {"  "}padding: 10px 20px;
    {"\n"}
    {"  "}font-size: 16px;
    {"\n"}
    {"  "}background-color: #4CAF50;
    {"\n"}
    {"  "}color: white;
    {"\n"}
    {"  "}border: none;
    {"\n"}
    {"  "}border-radius: 5px;
    {"\n"}
    {"  "}cursor: pointer;
    {"\n"}
    {"  "}transition: background-color 0.3s ease;
    {"\n"}
    {"}"}
    {"\n\n"}

    <span className="text-red-600">.save-button:hover</span> {"{"}
    {"\n"}
    {"  "}background-color: #45a049;
    {"\n"}
    {"}"}
    {"\n\n"}

    <span className="text-red-600">.save-button:active</span> {"{"}
    {"\n"}
    {"  "}background-color: #388e3c;
    {"\n"}
    {"}"}

  </code>
</pre>

        <p className="mt-5">The component uses useState to manage the input value and the saved name. The input is updated on typing, saved on button click, and conditionally displayed based on whether a name exists.</p>
        
        <h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">Commonly Used React Event Handlers</h2>
        <p>React offers several built-in event handlers to manage different user interactions.</p>
        <table className="min-w-full border border-gray-300 text-sm text-left mt-5">
            <thead>
                <tr className="bg-gray-100">
                    <th className="px-4 py-2 border-b border-gray-300 text-gray-700 font-bold">React Event</th>
                    <th className="px-4 py-2 border-b border-gray-300 text-gray-700 font-bold">Description</th>
                </tr>
            </thead>
            <tbody>
                {data.map((row,index)=>(
                    <tr className="cursor-text hover:bg-gray-100">
                        <td className="px-4 py-2 border-b border-gray-300">{row.ReactEvent}</td>
                        <td className="px-4 py-2 border-b border-gray-300">{row.Description}</td>
                    </tr>
                ))}
            </tbody>
        </table>

        <h2 className="text-3xl text-gray-800 font-semibold mt-10 mb-3">Handling Events in React</h2>
        <h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">Adding Event Handlers</h2>
        <p>React allows event handlers to be added directly to JSX elements. These event names use camelCase naming, which is different from standard HTML event naming (for example, onClick rather than onclick).</p>
      <pre className="bg-gray-200 p-4 rounded-lg mt-5 overflow-x-auto text-sm">
  <code className="font-mono text-gray-900">

    <span className="text-purple-700">import</span>{" "}
    <span className="text-green-700">React</span>, {"{"} Component {"}"}{" "}
    <span className="text-purple-700">from</span>{" "}
    <span className="text-yellow-700">'react'</span>;
    {"\n\n"}

    <span className="text-purple-700">class</span>{" "}
    <span className="text-green-700">App</span>{" "}
    <span className="text-purple-700">extends</span>{" "}
    <span className="text-green-700">Component</span> {"{"}
    {"\n"}

    {"  "}
    <span className="text-purple-700">constructor</span>(props) {"{"}
    {"\n"}

    {"    "}
    <span className="text-blue-700">super</span>(props);
    {"\n"}

    {"    "}
    this.state = {"{"}
    message: <span className="text-yellow-700">'Hello, welcome to React!'</span>
    {"}"};
    {"\n\n"}

    {"    "}
    this.<span className="text-blue-700">handleClick</span> =
    this.handleClick.<span className="text-blue-700">bind</span>(this);
    {"\n"}

    {"  "}
    {"}"}
    {"\n\n"}

    {"  "}
    <span className="text-blue-700">handleClick</span>() {"{"}
    {"\n"}

    {"    "}
    this.<span className="text-blue-700">setState</span>({"{"}
    message: <span className="text-yellow-700">'You clicked the button!'</span>
    {"}"});
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
    &lt;<span className="text-red-600">h1</span>&gt;
    {"{"}this.state.message{"}"}
    &lt;/<span className="text-red-600">h1</span>&gt;
    {"\n"}

    {"        "}
    &lt;<span className="text-red-600">button</span>{" "}
    onClick={"{"}this.handleClick{"}"}&gt;
    Click Me
    &lt;/<span className="text-red-600">button</span>&gt;
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

       <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Reading Props in Event Handlers</h2>
      <p>React event handlers frequently rely on props received from parent components to carry out actions based on that data.</p>
    <pre className="bg-gray-200 p-4 rounded-lg mt-5 overflow-x-auto text-sm">
  <code className="font-mono text-gray-900">

    <span className="text-red-600">body</span> {"{"}
    {"\n"}
    {"  "}margin: 0;
    {"\n"}
    {"  "}padding: 0;
    {"\n"}
    {"  "}display: flex;
    {"\n"}
    {"  "}align-items: flex-start;
    {"\n"}
    {"  "}height: 100vh;
    {"\n"}
    {"  "}background-color: #f0f0f0;
    {"\n"}
    {"}"}
    {"\n\n"}

    <span className="text-red-600">.parent-container</span> {"{"}
    {"\n"}
    {"  "}text-align: center;
    {"\n"}
    {"}"}
    {"\n\n"}

    <span className="text-red-600">.child-container</span> {"{"}
    {"\n"}
    {"  "}display: inline-block;
    {"\n"}
    {"  "}margin-top: 20px;
    {"\n"}
    {"  "}padding: 20px;
    {"\n"}
    {"  "}background-color: #fff;
    {"\n"}
    {"  "}border: 1px solid #ddd;
    {"\n"}
    {"  "}box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    {"\n"}
    {"}"}
    {"\n\n"}

    <span className="text-red-600">button</span> {"{"}
    {"\n"}
    {"  "}padding: 10px 20px;
    {"\n"}
    {"  "}background-color: #007BFF;
    {"\n"}
    {"  "}color: white;
    {"\n"}
    {"  "}border: none;
    {"\n"}
    {"  "}cursor: pointer;
    {"\n"}
    {"  "}font-size: 16px;
    {"\n"}
    {"}"}
    {"\n\n"}

    <span className="text-red-600">button:hover</span> {"{"}
    {"\n"}
    {"  "}background-color: #0056b3;
    {"\n"}
    {"}"}

  </code>
</pre>

     <h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">Passing Event Handlers as Props</h2>
     <p>You can pass event handler functions to child components as props so that the child can send information back to the parent when something happens.</p>
   <pre className="bg-gray-200 p-4 rounded-lg mt-5 overflow-x-auto text-sm">
  <code className="font-mono text-gray-900">

    <span className="text-purple-700">import</span>{" "}
    <span className="text-green-700">React</span>, {"{"} Component {"}"}{" "}
    <span className="text-purple-700">from</span>{" "}
    <span className="text-yellow-700">'react'</span>;
    {"\n"}

    <span className="text-purple-700">import</span>{" "}
    <span className="text-green-700">Child</span>{" "}
    <span className="text-purple-700">from</span>{" "}
    <span className="text-yellow-700">'./Child'</span>;
    {"\n\n"}

    <span className="text-purple-700">class</span>{" "}
    <span className="text-green-700">Parent</span>{" "}
    <span className="text-purple-700">extends</span>{" "}
    <span className="text-green-700">Component</span> {"{"}
    {"\n\n"}

    {"  "}
    <span className="text-blue-700">handleClick</span> = () =&gt; {"{"}
    {"\n"}

    {"    "}
    <span className="text-purple-700">alert</span>(
    <span className="text-yellow-700">"Button clicked in Child component!"</span>
    );
    {"\n"}

    {"  "}
    {"}"}
    {"\n\n"}

    {"  "}
    <span className="text-blue-700">render</span>() {"{"}
    {"\n"}

    {"    "}
    <span className="text-purple-700">const</span> containerStyle = {"{"}
    {"\n"}

    {"      "}display: flex,
    {"\n"}

    {"      "}justify-content: center,
    {"\n"}

    {"      "}align-items: flex-start,
    {"\n"}

    {"      "}height: 100vh,
    {"\n"}

    {"      "}margin: 0
    {"\n"}

    {"    "}
    {"}"};
    {"\n\n"}

    {"    "}
    <span className="text-purple-700">return</span> (
    {"\n"}

    {"      "}
    &lt;<span className="text-red-600">div</span>{" "}
    style={"{"}containerStyle{"}"}&gt;
    {"\n"}

    {"        "}
    &lt;<span className="text-red-600">div</span>&gt;
    {"\n"}

    {"          "}
    &lt;<span className="text-red-600">h1</span>&gt;
    Parent Component
    &lt;/<span className="text-red-600">h1</span>&gt;
    {"\n"}

    {"          "}
    &lt;<span className="text-green-700">Child</span>{" "}
    onClickHandler={"{"}this.handleClick{"}"} /&gt;
    {"\n"}

    {"        "}
    &lt;/<span className="text-red-600">div</span>&gt;
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
    <span className="text-green-700">Parent</span>;

  </code>
</pre>


    <h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">Naming Event Handler Props</h2>
     <p>React developers often name event handler props according to the event, making the code easier to understand.</p>
   <pre className="bg-gray-200 p-4 rounded-lg mt-5 overflow-x-auto text-sm">
  <code className="font-mono text-gray-900">

    <span className="text-purple-700">import</span>{" "}
    <span className="text-green-700">React</span>{" "}
    <span className="text-purple-700">from</span>{" "}
    <span className="text-yellow-700">"react"</span>;
    {"\n\n"}

    <span className="text-purple-700">function</span>{" "}
    <span className="text-green-700">Button</span>({"{ onClickHandler }"}) {"{"}
    {"\n"}

    {"  "}
    <span className="text-purple-700">return</span>{" "}
    &lt;<span className="text-red-600">button</span>{" "}
    onClick={"{"}onClickHandler{"}"}&gt;
    Click Me
    &lt;/<span className="text-red-600">button</span>&gt;;
    {"\n"}

    {"}"}
    {"\n\n"}

    <span className="text-purple-700">function</span>{" "}
    <span className="text-green-700">Parent</span>() {"{"}
    {"\n"}

    {"  "}
    <span className="text-purple-700">const</span> handleClick = () =&gt; {"{"}
    {"\n"}

    {"    "}
    <span className="text-purple-700">alert</span>(
    <span className="text-yellow-700">"Button clicked!"</span>
    );
    {"\n"}

    {"  "}
    {"}"};
    {"\n\n"}

    {"  "}
    <span className="text-purple-700">return</span>{" "}
    &lt;<span className="text-green-700">Button</span>{" "}
    onClickHandler={"{"}handleClick{"}"} /&gt;;
    {"\n"}

    {"}"}
    {"\n\n"}

    <span className="text-purple-700">export</span>{" "}
    <span className="text-purple-700">default</span>{" "}
    <span className="text-green-700">Parent</span>;

  </code>
</pre>

    <h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">Event Propagation in React</h2>
    <p>Event propagation in React refers to the process where an event triggered on a target element flows upward to its ancestor elements in the DOM. React uses the bubbling phase by default, meaning events move from the target element to its parents unless explicitly stopped.</p>
   <pre className="bg-gray-200 p-4 rounded-lg mt-5 overflow-x-auto text-sm">
  <code className="font-mono text-gray-900">

    <span className="text-purple-700">import</span>{" "}
    <span className="text-green-700">React</span>{" "}
    <span className="text-purple-700">from</span>{" "}
    <span className="text-yellow-700">"react"</span>;
    {"\n\n"}

    <span className="text-purple-700">function</span>{" "}
    <span className="text-green-700">Child</span>() {"{"}
    {"\n"}

    {"  "}
    <span className="text-purple-700">const</span> handleClick = (event) =&gt; {"{"}
    {"\n"}

    {"    "}
    event.<span className="text-blue-700">stopPropagation</span>();
    {"\n"}

    {"    "}
    <span className="text-purple-700">alert</span>(
    <span className="text-yellow-700">"Child button clicked"</span>
    );
    {"\n"}

    {"  "}
    {"}"};
    {"\n\n"}

    {"  "}
    <span className="text-purple-700">return</span>{" "}
    &lt;<span className="text-red-600">button</span>{" "}
    onClick={"{"}handleClick{"}"}&gt;
    Child Button
    &lt;/<span className="text-red-600">button</span>&gt;;
    {"\n"}

    {"}"}
    {"\n\n"}

    <span className="text-purple-700">function</span>{" "}
    <span className="text-green-700">Parent</span>() {"{"}
    {"\n"}

    {"  "}
    <span className="text-purple-700">const</span> handleClick = () =&gt; {"{"}
    {"\n"}

    {"    "}
    <span className="text-purple-700">alert</span>(
    <span className="text-yellow-700">"Parent div clicked"</span>
    );
    {"\n"}

    {"  "}
    {"}"};
    {"\n\n"}

    {"  "}
    <span className="text-purple-700">return</span> (
    {"\n"}

    {"    "}
    &lt;<span className="text-red-600">div</span>{" "}
    onClick={"{"}handleClick{"}"} style={"{"}
    padding: 50px, backgroundColor: lightgray
    {"}"}&gt;
    {"\n"}

    {"      "}
    &lt;<span className="text-green-700">Child</span> /&gt;
    {"\n"}

    {"    "}
    &lt;/<span className="text-red-600">div</span>&gt;
    {"\n"}

    {"  "}
    );
    {"\n"}

    {"}"}
    {"\n\n"}

    <span className="text-purple-700">export</span>{" "}
    <span className="text-purple-700">default</span>{" "}
    <span className="text-green-700">Parent</span>;

  </code>
</pre>


    <h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">Preventing Default Behavior in React Events</h2>
     <p>The <span className="text-red-400">event.preventDefault()</span> method in React is used to prevent the default action associated with an event. It allows developers to implement custom handling rather than relying on the browser’s built-in behavior.</p>
  <pre className="bg-gray-200 p-4 rounded-lg mt-5 overflow-x-auto text-sm">
  <code className="font-mono text-gray-900">

    <span className="text-purple-700">import</span>{" "}
    <span className="text-green-700">React</span>, {"{"} useState {"}"}{" "}
    <span className="text-purple-700">from</span>{" "}
    <span className="text-yellow-700">"react"</span>;
    {"\n\n"}

    <span className="text-purple-700">function</span>{" "}
    <span className="text-green-700">SimpleForm</span>() {"{"}
    {"\n"}

    {"  "}
    <span className="text-purple-700">const</span> [name, setName] =
    <span className="text-blue-700">useState</span>(
    <span className="text-yellow-700">""</span>
    );
    {"\n\n"}

    {"  "}
    <span className="text-purple-700">const</span> handleSubmit = (event) =&gt; {"{"}
    {"\n"}

    {"    "}
    event.<span className="text-blue-700">preventDefault</span>();
    {"\n"}

    {"    "}
    <span className="text-purple-700">alert</span>(
    <span className="text-yellow-700">`Form submitted with name: ${"{name}"}`</span>
    );
    {"\n"}

    {"  "}
    {"}"};
    {"\n\n"}

    {"  "}
    <span className="text-purple-700">return</span> (
    {"\n"}

    {"    "}
    &lt;<span className="text-red-600">div</span>&gt;
    {"\n"}

    {"      "}
    &lt;<span className="text-red-600">form</span>{" "}
    onSubmit={"{"}handleSubmit{"}"}&gt;
    {"\n"}

    {"        "}
    &lt;<span className="text-red-600">input</span>{" "}
    type=<span className="text-yellow-700">"text"</span>{" "}
    value={"{"}name{"}"} /&gt;
    {"\n"}

    {"        "}
    &lt;<span className="text-red-600">button</span>{" "}
    type=<span className="text-yellow-700">"submit"</span>&gt;
    Submit
    &lt;/<span className="text-red-600">button</span>&gt;
    {"\n"}

    {"      "}
    &lt;/<span className="text-red-600">form</span>&gt;
    {"\n"}

    {"    "}
    &lt;/<span className="text-red-600">div</span>&gt;
    {"\n"}

    {"  "}
    );
    {"\n"}

    {"}"}
    {"\n\n"}

    <span className="text-purple-700">export</span>{" "}
    <span className="text-purple-700">default</span>{" "}
    <span className="text-green-700">SimpleForm</span>;

  </code>
</pre>

   <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-5">Difference Between HTML DOM and React DOM</h2>
    <div className="max-w-full overflow-x-auto">
   <table className="min-w-full border border-gray-300 text-gray-700 text-sm text-left mt-5">
    <thead>
        <tr className="bg-gray-100">
            <th className="px-4 py-2 border-b border-gray-300 text-gray-700 font-bold">Feature</th>
            <th className="px-4 py-2 border-b border-gray-300 text-gray-700 font-bold">HTML DOM</th>
            <th className="px-4 py-2 border-b border-gray-300 text-gray-700 font-bold">React DOM</th>
        </tr>
    </thead>
    <tbody>
        {data1.map((row,index)=>(
            <tr className="cursor-text hover:bg-gray-100">
                <td className="px-4 py-2 border-b border-gray-300">{row.Feature}</td>
                <td className="px-4 py-2 border-b border-gray-300">{row.HTMLDOM}</td>
                <td className="px-4 py-2 border-b border-gray-300">{row.ReactDOM}</td>
            </tr>
        ))}
    </tbody>
   </table>
   </div>
        
        </div>
    )
}

export default ReactDOM;