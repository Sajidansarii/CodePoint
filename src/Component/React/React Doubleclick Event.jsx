import React from "react";

const ReactDoubleClick = () => {
    return(
        <div className="max-w-4xl p-6 mt-10">
            <h1 className="text-3xl text-blue-500 font-semibold mb-3">React DoubleClick Event</h1>
            <p className="mb-3">The <span className="text-red-400">onDoubleClick</span> event in React activates when the user double-clicks an element with the left mouse button. It is included in the set of mouse-related events React provides, such as onClick, onMouseDown, and onMouseUp.</p>
            <p>The onDoubleClick event is triggered when a user rapidly clicks a mouse button twice on the same element. It usually occurs within approximately 300 milliseconds and is ideal for differentiating between single clicks (onClick) and double clicks (onDoubleClick).</p>
           
           <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Syntax</h2>
          <pre className="bg-gray-200 p-4 rounded-lg mt-5 overflow-x-auto text-sm">
  <code className="font-mono text-gray-900">

    &lt;<span className="text-red-600">Element</span>{" "}
    <span className="text-blue-700">onDoubleClick</span>=
    {"{"}<span className="text-purple-700">onDoubleClickHandler</span>{"}"} /&gt;

  </code>
</pre>

           <ul className="list-[square] space-y-1 mt-5">
            <li><span className="text-red-400">{'<Element>'}</span>: The React component or HTML element (e.g., {'<button>'}, {'<div>'}) where you want to detect double-clicks.</li>
            <li>onDoubleClickHandler: The function that runs when the onDoubleClick event occurs.</li>
           </ul>

           <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Handling the onDoubleClick Event</h2>
           <p>The onDoubleClick event in React lets you run actions or change the UI when an element is double-clicked. You can update state, trigger animations, or log messages.</p>
          <pre className="bg-gray-200 p-4 rounded-lg mt-5 overflow-x-auto text-sm">
  <code className="font-mono text-gray-900">

    <span className="text-purple-700">import</span>{" "}
    <span className="text-green-700">React</span>, {"{"} useState {"}"}{" "}
    <span className="text-purple-700">from</span>{" "}
    <span className="text-yellow-700">"react"</span>;
    {"\n"}

    <span className="text-purple-700">import</span>{" "}
    <span className="text-yellow-700">"./App.css"</span>;
    {"\n\n"}

    <span className="text-purple-700">function</span>{" "}
    <span className="text-green-700">App</span>() {"{"}
    {"\n"}

    {"  "}
    <span className="text-purple-700">const</span> onDoubleClickHandler = () =&gt; {"{"}
    {"\n"}

    {"    "}
    <span className="text-blue-700">console</span>.<span className="text-blue-700">log</span>(
    <span className="text-yellow-700">"You have Clicked Twice"</span>
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
    &lt;<span className="text-red-600">h1</span>&gt;
    Hey Geek!
    &lt;/<span className="text-red-600">h1</span>&gt;
    {"\n"}

    {"      "}
    &lt;<span className="text-red-600">button</span>{" "}
    onDoubleClick={"{"}onDoubleClickHandler{"}"}&gt;
    Double Click Me!
    &lt;/<span className="text-red-600">button</span>&gt;
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
    <span className="text-green-700">App</span>;

  </code>
</pre>

            <p className="mt-5">The component renders a button that triggers the onDoubleClickHandler function when double-clicked. This function logs the message "You have Clicked Twice" to the console.</p>
          
          <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Accessing the Event Object</h2>
          <p>The onDoubleClick event handler gets an event object with details about the event, including the mouse position, target element, and other properties.</p>
         <pre className="bg-gray-200 p-4 rounded-lg mt-5 overflow-x-auto text-sm">
  <code className="font-mono text-gray-900">

    <span className="text-purple-700">import</span>{" "}
    <span className="text-green-700">React</span>, {"{"} useState {"}"}{" "}
    <span className="text-purple-700">from</span>{" "}
    <span className="text-yellow-700">"react"</span>;
    {"\n\n"}

    <span className="text-purple-700">function</span>{" "}
    <span className="text-green-700">AccessEventObjectComponent</span>() {"{"}
    {"\n"}

    {"  "}
    <span className="text-purple-700">const</span> [num, setNum] =
    <span className="text-blue-700">useState</span>(0);
    {"\n\n"}

    {"  "}
    <span className="text-purple-700">const</span> handleDoubleClick = (event) =&gt; {"{"}
    {"\n"}

    {"    "}
    <span className="text-blue-700">console</span>.<span className="text-blue-700">log</span>(
    <span className="text-yellow-700">"Event Object:"</span>, event);
    {"\n"}

    {"    "}
    <span className="text-blue-700">console</span>.<span className="text-blue-700">log</span>(
    <span className="text-yellow-700">"Mouse X Position:"</span>, event.clientX);
    {"\n"}

    {"    "}
    setNum(num + 1);
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
    &lt;<span className="text-red-600">p</span>&gt;
    Double-click the button to see the event details and increment the value
    &lt;/<span className="text-red-600">p</span>&gt;
    {"\n"}

    {"      "}
    &lt;<span className="text-red-600">button</span>{" "}
    onDoubleClick={"{"}handleDoubleClick{"}"}&gt;
    Double-Click Me
    &lt;/<span className="text-red-600">button</span>&gt;
    {"\n"}

    {"      "}
    &lt;<span className="text-red-600">p</span>&gt;
    Current Value: {"{"}num{"}"}
    &lt;/<span className="text-red-600">p</span>&gt;
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
    <span className="text-green-700">AccessEventObjectComponent</span>;

  </code>
</pre>


          <p className="mt-5">The handleDoubleClick function logs the event object and the mouse’s X position (event.clientX) when the button is double-clicked. It also increases the num value.</p>
           
           <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Preventing Default Behavior</h2>
           <p>Using <span className="text-red-400">event.preventDefault()</span> in React allows you to cancel the default behavior of events, such as submitting a form, following a link, or selecting text, giving you complete control over how the event is processed.</p>
          <pre className="bg-gray-200 p-4 rounded-lg mt-5 overflow-x-auto text-sm">
  <code className="font-mono text-gray-900">

    <span className="text-purple-700">import</span>{" "}
    <span className="text-green-700">React</span>{" "}
    <span className="text-purple-700">from</span>{" "}
    <span className="text-yellow-700">"react"</span>;
    {"\n\n"}

    <span className="text-purple-700">function</span>{" "}
    <span className="text-green-700">PreventDefaultComponent</span>() {"{"}
    {"\n"}

    {"  "}
    <span className="text-purple-700">const</span> handleDoubleClick = (event) =&gt; {"{"}
    {"\n"}

    {"    "}
    event.<span className="text-blue-700">preventDefault</span>();
    {"\n"}

    {"    "}
    <span className="text-blue-700">console</span>.<span className="text-blue-700">log</span>(
    <span className="text-yellow-700">"Text selection prevented!"</span>
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
    &lt;<span className="text-red-600">p</span>{" "}
    onDoubleClick={"{"}handleDoubleClick{"}"}&gt;
    Click Me
    &lt;/<span className="text-red-600">p</span>&gt;
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
    <span className="text-green-700">PreventDefaultComponent</span>;

  </code>
</pre>

           <ul className="list-[square] space-y-1 mt-5">
           <li><span className="font-semibold">handleDoubleClick</span>: Runs when the paragraph is double-clicked and uses <span className="text-red-400">event.preventDefault()</span> to stop text from being selected.</li>
           <li><span className="font-semibold">console.log</span>: Prints "Text selection prevented!" to the console to show that the default action was blocked.</li>
           <li><span className="font-semibold">Effect</span>: Normally, double-clicking selects text, but here it doesn’t because of <span className="font-semibold">preventDefault()</span>.</li>
           </ul>

           <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Using onDoubleClick for Custom Feature</h2>
           <p>The onDoubleClick event in React lets you run custom code when a user double-clicks an element. You can use it to toggle UI states, update content, or perform actions that should happen only on a double-click.</p>
         <pre className="bg-gray-200 p-4 rounded-lg mt-5 overflow-x-auto text-sm">
  <code className="font-mono text-gray-900">

    <span className="text-purple-700">import</span>{" "}
    <span className="text-green-700">React</span>, {"{"} useState {"}"}{" "}
    <span className="text-purple-700">from</span>{" "}
    <span className="text-yellow-700">"react"</span>;
    {"\n\n"}

    <span className="text-purple-700">function</span>{" "}
    <span className="text-green-700">ToggleModeComponent</span>() {"{"}
    {"\n"}

    {"  "}
    <span className="text-purple-700">const</span> [isEditing, setIsEditing] =
    <span className="text-blue-700">useState</span>(false);
    {"\n\n"}

    {"  "}
    <span className="text-purple-700">const</span> handleDoubleClick = () =&gt; {"{"}
    {"\n"}

    {"    "}
    setIsEditing(!isEditing);
    {"\n"}

    {"  "}
    {"}"};
    {"\n\n"}

    {"  "}
    <span className="text-purple-700">const</span> paragraphStyle = {"{"}
    {"\n"}

    {"    "}cursor: pointer,
    {"\n"}

    {"    "}padding: 10px,
    {"\n"}

    {"    "}border: 1px solid #ccc,
    {"\n"}

    {"    "}borderRadius: 5px,
    {"\n"}

    {"    "}textAlign: center,
    {"\n"}

    {"    "}fontSize: 18px,
    {"\n"}

    {"    "}backgroundColor: isEditing ? "#e0f7fa" : "#f1f1f1"
    {"\n"}

    {"  "}
    {"}"};
    {"\n\n"}

    {"  "}
    <span className="text-purple-700">const</span> modeTextStyle = {"{"}
    {"\n"}

    {"    "}fontWeight: bold,
    {"\n"}

    {"    "}color: isEditing ? "#00796b" : "#212121"
    {"\n"}

    {"  "}
    {"}"};
    {"\n\n"}

    {"  "}
    <span className="text-purple-700">return</span> (
    {"\n"}

    {"    "}
    &lt;<span className="text-red-600">div</span>{" "}
    style={"{"}margin: 20px, textAlign: center{"}"}&gt;
    {"\n"}

    {"      "}
    &lt;<span className="text-red-600">p</span>{" "}
    onDoubleClick={"{"}handleDoubleClick{"}"}&gt;
    {"\n"}

    {"        "}
    &lt;<span className="text-red-600">span</span>&gt;
    {"{"}isEditing ? "Edit Mode" : "View Mode"{"}"}
    &lt;/<span className="text-red-600">span</span>&gt;
    {"\n"}

    {"      "}
    &lt;/<span className="text-red-600">p</span>&gt;
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
    <span className="text-green-700">ToggleModeComponent</span>;

  </code>
</pre>

           <p className="mt-5">The component toggles between "Edit Mode" and "View Mode" on a double-click event. The isEditing state manages the current mode, and the paragraph’s background and text color change depending on the mode. It is styled with a pointer cursor to show it’s interactive.</p>
        
        <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Key features of the onDoubleClick event</h2>
        <ul className="list-[square] space-y-1 mt-5">
            <li><span className="font-semibold">Triggered on Double-Click</span>: Fires when a user double-clicks an element.</li>
            <li><span className="font-semibold">Event Handler</span>: Runs a function when the event happens.</li>
            <li><span className="font-semibold">Prevent Default Behavior</span>: Use <span className="text-red-400">event.preventDefault()</span> to stop default browser actions.</li>
            <li><span className="font-semibold">Custom Action</span>: Ideal for toggling states, updating UI, or performing specific tasks on double-click.</li>
            <li><span className="font-semibold">Cross-Browser Compatibility</span>: React’s synthetic event system ensures consistent behavior across browsers.</li>
        </ul>

       
        </div>
    )
}

export default ReactDoubleClick;