import React from "react";

const ReactMouse = () => {
    return(
        <div className="max-w-4xl p-6 mt-10">
            <h1 className="text-3xl text-blue-500 font-semibold mb-3">React Mouse Event</h1>
            <p className="mb-3">The onMouseDown event in React is a native DOM event that fires when a mouse button is pressed on an element. It belongs to a group of mouse events like onClick, onMouseUp, and onMouseEnter.</p>
            <p>The onMouseDown event happens when any mouse button (left, right, or middle) is pressed. It fires before the button is released, making it useful for actions that should start as soon as the user interacts with an element, like dragging, selecting text, or initiating a click action.</p>
           
           <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Syntax</h2>
         <pre className="bg-gray-100 text-gray-800 p-4 rounded-lg mt-5 overflow-x-auto">
  <code>
    <span className="text-purple-600">onMouseDown</span>{" "}
    <span className="text-gray-800">=</span>{" "}
    <span className="text-gray-800">{"{"}</span>
    <span className="text-blue-600">handleMouseDown</span>
    <span className="text-gray-800">{"}"}</span>
  </code>
</pre>


           <ul className="list-[square] space-y-1 mt-5">
            <li><span className="font-semibold">onMouseDown</span>: The React event handler that detects when a mouse button is pressed.</li>
            <li><span className="font-semibold">handleMouseDown</span>: The function that runs when the mouse button is pressed.</li>
           </ul>
         
         <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-5">When Does the onMouseDown Event Get Triggered?</h2>
          <p>The onMouseDown event in React fires as soon as any mouse button (left, middle, or right) is pressed on an element.</p>
         <ul className="list-[square] space-y-1 mt-5">
            <li><span className="font-semibold">Fires on Press</span>: Triggered immediately when a mouse button is pressed.</li>
            <li><span className="font-semibold">Before Release</span>: Happens before the onMouseUp event, capturing the start of interaction.</li>
            <li><span className="font-semibold">Supports All Buttons</span>: Works for left, middle, and right buttons.</li>
            <li><span className="font-semibold">Immediate Actions</span>: Useful for dragging, dropping, or custom button effects.</li>
            <li><span className="font-semibold">Mobile-Friendly</span>: Can be paired with touch events for mobile devices.</li>
         </ul>

         <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Handling the onMouseDown Event</h2>
         <p>The onMouseDown event handler runs custom code when a mouse button is pressed. It can be used for tasks like starting a drag-and-drop, triggering animations, or updating state based on mouse actions.</p>
       <pre className="bg-gray-100 text-gray-800 p-4 rounded-lg mt-5 overflow-x-auto">
  <code>
    <span className="text-purple-600">import</span>{" "}
    React, {"{"} <span className="text-blue-600">useState</span> {"}"}{" "}
    <span className="text-purple-600">from</span>{" "}
    <span className="text-orange-500">"react"</span>;
    {"\n"}

    <span className="text-purple-600">import</span>{" "}
    <span className="text-orange-500">"./App.css"</span>;
    {"\n\n"}

    <span className="text-purple-600">const</span>{" "}
    <span className="text-blue-600">App</span>{" "}
    <span className="text-gray-800">= () =&gt; {"{"}</span>{"\n\n"}

    {"  "}
    <span className="text-purple-600">const</span>{" "}
    <span className="text-gray-800">[</span>
    <span className="text-blue-600">count</span>
    <span className="text-gray-800">, </span>
    <span className="text-blue-600">setCount</span>
    <span className="text-gray-800">] = </span>
    <span className="text-yellow-600">useState</span>
    <span className="text-gray-800">(</span>
    <span className="text-green-600">0</span>
    <span className="text-gray-800">);</span>
    {"\n\n"}

    {"  "}
    <span className="text-purple-600">const</span>{" "}
    <span className="text-yellow-600">handleMouseDown</span>{" "}
    <span className="text-gray-800">= () =&gt; {"{"}</span>{"\n"}
    {"    "}
    <span className="text-yellow-600">setCount</span>
    <span className="text-gray-800">(count + </span>
    <span className="text-green-600">1</span>
    <span className="text-gray-800">);</span>{"\n"}
    {"  "}
    <span className="text-gray-800">{"}"}</span>;
    {"\n\n"}

    {"  "}
    <span className="text-purple-600">return</span>{" ("}{"\n"}

    {"    "}
    <span className="text-pink-600">&lt;div className="App"&gt;</span>{"\n"}

    {"      "}
    <span className="text-pink-600">&lt;h2&gt;</span>
    Count: {"{"}
    <span className="text-blue-600">count</span>
    {"}"}
    <span className="text-pink-600">&lt;/h2&gt;</span>{"\n"}

    {"      "}
    <span className="text-pink-600">&lt;button</span>{" "}
    <span className="text-purple-600">onMouseDown</span>
    <span className="text-gray-800">=</span>
    <span className="text-gray-800">{`{handleMouseDown}`}</span>
    <span className="text-pink-600">&gt;</span>
    Increment on Mouse Down
    <span className="text-pink-600">&lt;/button&gt;</span>{"\n"}

    {"    "}
    <span className="text-pink-600">&lt;/div&gt;</span>{"\n"}

    {"  "}){";"}{"\n"}
    <span className="text-gray-800">{"}"}</span>;
    {"\n\n"}

    <span className="text-purple-600">export default</span>{" "}
    <span className="text-blue-600">App</span>;
  </code>
</pre>


        <p className="mt-5">We start with count set to 0 using useState(0). Pressing the button calls handleMouseDown, which adds 1 to count. The current count is displayed in an <span className="text-red-400">{'<h2>'}</span> tag.</p>
        

        <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Accessing the Event Object</h2>
        <p>The onMouseDown event handler gets an event object with details about the mouse interaction, like which button was pressed, the mouse position, and other properties.</p>
       <pre className="bg-gray-100 text-gray-800 p-4 rounded-lg mt-5 overflow-x-auto">
  <code>
    <span className="text-purple-600">import</span>{" "}
    React{" "}
    <span className="text-purple-600">from</span>{" "}
    <span className="text-orange-500">"react"</span>;
    {"\n\n"}

    <span className="text-purple-600">function</span>{" "}
    <span className="text-blue-600">AccessMouseDownEvent</span>
    <span className="text-gray-800">() {"{"}</span>{"\n\n"}

    {"  "}
    <span className="text-purple-600">const</span>{" "}
    <span className="text-yellow-600">handleMouseDown</span>{" "}
    <span className="text-gray-800">= (event) =&gt; {"{"}</span>{"\n"}

    {"    "}
    <span className="text-yellow-600">console</span>
    <span className="text-gray-800">.</span>
    <span className="text-blue-600">log</span>
    <span className="text-gray-800">(</span>
    <span className="text-orange-500">"Mouse Button:"</span>
    <span className="text-gray-800">, event.</span>
    <span className="text-blue-600">button</span>
    <span className="text-gray-800">);</span>{"\n"}

    {"    "}
    <span className="text-yellow-600">console</span>
    <span className="text-gray-800">.</span>
    <span className="text-blue-600">log</span>
    <span className="text-gray-800">(</span>
    <span className="text-orange-500">"Mouse Position: X:"</span>
    <span className="text-gray-800">, event.</span>
    <span className="text-blue-600">clientX</span>
    <span className="text-gray-800">, </span>
    <span className="text-orange-500">"Y:"</span>
    <span className="text-gray-800">, event.</span>
    <span className="text-blue-600">clientY</span>
    <span className="text-gray-800">);</span>{"\n"}

    {"  "}
    <span className="text-gray-800">{"}"}</span>;
    {"\n\n"}

    {"  "}
    <span className="text-purple-600">return</span>{" ("}{"\n"}

    {"    "}
    <span className="text-pink-600">&lt;div&gt;</span>{"\n"}

    {"      "}
    <span className="text-pink-600">&lt;button</span>{" "}
    <span className="text-purple-600">onMouseDown</span>
    <span className="text-gray-800">=</span>
    <span className="text-gray-800">{`{handleMouseDown}`}</span>
    <span className="text-pink-600">&gt;</span>
    Press Me
    <span className="text-pink-600">&lt;/button&gt;</span>{"\n"}

    {"    "}
    <span className="text-pink-600">&lt;/div&gt;</span>{"\n"}

    {"  "}){";"}{"\n"}
    <span className="text-gray-800">{"}"}</span>
    {"\n\n"}

    <span className="text-purple-600">export default</span>{" "}
    <span className="text-blue-600">AccessMouseDownEvent</span>;
  </code>
</pre>

        <ul className="list-[square] space-y-1 mt-5">
            <li><span className="font-semibold">handleMouseDown</span>: Logs the mouse button you clicked and the X and Y position of the mouse.</li>
            <li><span className="font-semibold">Event Handling</span>: Runs automatically when the onMouseDown event occurs on the element.</li>
        </ul>

        <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Preventing Default Behavior</h2>
         <p>In certain situations, it may be necessary to prevent the default actions that occur when a mouse button is pressed. Examples include disabling text selection, blocking right-click context menus, or stopping other standard browser behaviors.</p>
      <pre className="bg-gray-100 text-gray-800 p-4 rounded-lg mt-5 overflow-x-auto">
  <code>
    <span className="text-purple-600">import</span>{" "}
    React{" "}
    <span className="text-purple-600">from</span>{" "}
    <span className="text-orange-500">"react"</span>;
    {"\n\n"}

    <span className="text-purple-600">function</span>{" "}
    <span className="text-blue-600">PreventTextSelection</span>
    <span className="text-gray-800">() {"{"}</span>{"\n\n"}

    {"  "}
    <span className="text-purple-600">const</span>{" "}
    <span className="text-yellow-600">handleMouseDown</span>{" "}
    <span className="text-gray-800">= (event) =&gt; {"{"}</span>{"\n"}

    {"    "}
    <span className="text-blue-600">event</span>
    <span className="text-gray-800">.</span>
    <span className="text-yellow-600">preventDefault</span>
    <span className="text-gray-800">();</span>{"\n"}

    {"    "}
    <span className="text-yellow-600">console</span>
    <span className="text-gray-800">.</span>
    <span className="text-blue-600">log</span>
    <span className="text-gray-800">(</span>
    <span className="text-orange-500">"Text selection prevented!"</span>
    <span className="text-gray-800">);</span>{"\n"}

    {"  "}
    <span className="text-gray-800">{"}"}</span>;
    {"\n\n"}

    {"  "}
    <span className="text-purple-600">return</span>{" ("}{"\n"}

    {"    "}
    <span className="text-pink-600">&lt;div&gt;</span>{"\n"}

    {"      "}
    <span className="text-pink-600">&lt;p</span>{" "}
    <span className="text-purple-600">onMouseDown</span>
    <span className="text-gray-800">=</span>
    <span className="text-gray-800">{`{handleMouseDown}`}</span>
    <span className="text-pink-600">&gt;</span>
    Click Here
    <span className="text-pink-600">&lt;/p&gt;</span>{"\n"}

    {"    "}
    <span className="text-pink-600">&lt;/div&gt;</span>{"\n"}

    {"  "}){";"}{"\n"}
    <span className="text-gray-800">{"}"}</span>
    {"\n\n"}

    <span className="text-purple-600">export default</span>{" "}
    <span className="text-blue-600">PreventTextSelection</span>;
  </code>
</pre>

       <ul className="list-[square] space-y-1 mt-5">
        <li><span className="font-semibold">handleMouseDown</span>: Uses event.preventDefault() to stop the default text selection.</li>
        <li><span className="font-semibold">console.log</span>: Prints "Text selection prevented!" when the mouse button is pressed.</li>
       </ul>
        
        <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Using onMouseDown for Changing Colors</h2>
        <p>The onMouseDown event can be used to modify component styles and manage state during a mouse interaction.</p>
       <pre className="bg-gray-100 text-gray-800 p-4 rounded-lg mt-5 overflow-x-auto">
  <code>
    <span className="text-purple-600">import</span>{" "}
    React, {"{"} <span className="text-blue-600">useState</span> {"}"}{" "}
    <span className="text-purple-600">from</span>{" "}
    <span className="text-orange-500">"react"</span>;
    {"\n\n"}

    <span className="text-purple-600">function</span>{" "}
    <span className="text-blue-600">ChangeColorOnMouseDown</span>
    <span className="text-gray-800">() {"{"}</span>{"\n\n"}

    {"  "}
    <span className="text-purple-600">const</span>{" "}
    <span className="text-gray-800">[</span>
    <span className="text-blue-600">color</span>
    <span className="text-gray-800">, </span>
    <span className="text-blue-600">setColor</span>
    <span className="text-gray-800">] = </span>
    <span className="text-yellow-600">useState</span>
    <span className="text-gray-800">(</span>
    <span className="text-orange-500">"lightblue"</span>
    <span className="text-gray-800">);</span>
    {"\n\n"}

    {"  "}
    <span className="text-purple-600">const</span>{" "}
    <span className="text-yellow-600">handleMouseDown</span>{" "}
    <span className="text-gray-800">= () =&gt; {"{"}</span>{"\n\n"}

    {"    "}
    <span className="text-gray-500">{`// toggle color`}</span>{"\n"}
    {"    "}
    <span className="text-yellow-600">setColor</span>
    <span className="text-gray-800">(</span>
    <span className="text-blue-600">color</span>{" "}
    <span className="text-gray-800">=== </span>
    <span className="text-orange-500">"lightblue"</span>{" "}
    <span className="text-gray-800">? </span>
    <span className="text-orange-500">"lightcoral"</span>{" "}
    <span className="text-gray-800">: </span>
    <span className="text-orange-500">"lightblue"</span>
    <span className="text-gray-800">);</span>
    {"\n"}

    {"  "}
    <span className="text-gray-800">{"}"}</span>;
    {"\n\n"}

    {"  "}
    <span className="text-purple-600">return</span>{" ("}{"\n"}

    {"    "}
    <span className="text-pink-600">&lt;div</span>{" "}
    <span className="text-purple-600">onMouseDown</span>
    <span className="text-gray-800">=</span>
    <span className="text-gray-800">{`{handleMouseDown}`}</span>{"\n"}
    {"      "}
    <span className="text-purple-600">style</span>
    <span className="text-gray-800">={"{"}</span>{"\n"}

    {"        "}
    <span className="text-red-500">width</span>
    <span className="text-gray-800">: </span>
    <span className="text-orange-500">"200px"</span>
    <span className="text-gray-800">,</span>{"\n"}

    {"        "}
    <span className="text-red-500">height</span>
    <span className="text-gray-800">: </span>
    <span className="text-orange-500">"200px"</span>
    <span className="text-gray-800">,</span>{"\n"}

    {"        "}
    <span className="text-red-500">backgroundColor</span>
    <span className="text-gray-800">: </span>
    <span className="text-blue-600">color</span>
    <span className="text-gray-800">,</span>{"\n"}

    {"        "}
    <span className="text-red-500">textAlign</span>
    <span className="text-gray-800">: </span>
    <span className="text-orange-500">"center"</span>
    <span className="text-gray-800">,</span>{"\n"}

    {"        "}
    <span className="text-red-500">lineHeight</span>
    <span className="text-gray-800">: </span>
    <span className="text-orange-500">"200px"</span>
    <span className="text-gray-800">,</span>{"\n"}

    {"        "}
    <span className="text-red-500">fontSize</span>
    <span className="text-gray-800">: </span>
    <span className="text-orange-500">"18px"</span>
    <span className="text-gray-800">,</span>{"\n"}

    {"        "}
    <span className="text-red-500">cursor</span>
    <span className="text-gray-800">: </span>
    <span className="text-orange-500">"pointer"</span>{"\n"}

    {"      "}
    <span className="text-gray-800">{"}"}</span>
    <span className="text-pink-600">&gt;</span>{"\n"}

    {"      "}
    Click me to change color{"\n"}

    {"    "}
    <span className="text-pink-600">&lt;/div&gt;</span>{"\n"}

    {"  "}){";"}{"\n"}
    <span className="text-gray-800">{"}"}</span>
    {"\n\n"}

    <span className="text-purple-600">export default</span>{" "}
    <span className="text-blue-600">ChangeColorOnMouseDown</span>;
  </code>
</pre>
        <ul className="list-[square] space-y-1 mt-5">
            <li><span className="font-semibold">handleMouseDown</span>: Changes the background color between lightblue and lightcoral whenever the mouse button is pressed.</li>
            <li><span className="font-semibold">State Management</span>: Keeps track of the current background color using state.</li>
        </ul>

        <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Key Features of onMouseDown</h2>
        <p className="mb-3">The onMouseDown event has unique qualities that make it handy in React projects.</p>
        <p>The onMouseDown event in React activates on mouse button press, supports left, right, and middle buttons, and can be combined with touch events for mobile. It follows React’s synthetic event model with bubbling and capturing, and its handler receives an event object containing properties such as event.button and event.clientX/Y.</p>
        
        
        </div>
    )
}

export default ReactMouse;