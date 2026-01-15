import React from "react";

const ReactMouse = () => {
    return(
        <div className="max-w-4xl p-6 mt-10">
            <h1 className="text-3xl text-blue-500 font-semibold mb-3">React Mouse Event</h1>
            <p className="mb-3">The onMouseDown event in React is a native DOM event that fires when a mouse button is pressed on an element. It belongs to a group of mouse events like onClick, onMouseUp, and onMouseEnter.</p>
            <p>The onMouseDown event happens when any mouse button (left, right, or middle) is pressed. It fires before the button is released, making it useful for actions that should start as soon as the user interacts with an element, like dragging, selecting text, or initiating a click action.</p>
           
           <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Syntax</h2>
           <pre className="text-green-400 bg-gray-900 p-4 rounded-lg mt-5">
            <code>
                {`onMouseDown = {handleMouseDown}`}
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
        <pre className="text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5">
            <code>
                {`import React, { useState } from "react";
import "./App.css";
const App = () => {
    const [count, setCount] = useState(0);

    const handleMouseDown = () => {
        setCount(count + 1);
    };

    return (
        <div className="App">
            <h2>Count: {count}</h2>
            <button onMouseDown={handleMouseDown}>Increment on Mouse Down</button>
        </div>
    );
};

export default App;`}
            </code>
        </pre>

        <p className="mt-5">We start with count set to 0 using useState(0). Pressing the button calls handleMouseDown, which adds 1 to count. The current count is displayed in an <span className="text-red-400">{'<h2>'}</span> tag.</p>
        

        <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Accessing the Event Object</h2>
        <p>The onMouseDown event handler gets an event object with details about the mouse interaction, like which button was pressed, the mouse position, and other properties.</p>
        <pre className="text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5">
            <code>
                {`import React from "react";

function AccessMouseDownEvent() {
    const handleMouseDown = (event) => {
        console.log("Mouse Button:", event.button); 
        console.log("Mouse Position: X:", event.clientX, "Y:", event.clientY); 
    };

    return (
        <div>
            <button onMouseDown={handleMouseDown}>Press Me</button>
        </div>
    );
}

export default AccessMouseDownEvent;`}
            </code>
        </pre>

        <ul className="list-[square] space-y-1 mt-5">
            <li><span className="font-semibold">handleMouseDown</span>: Logs the mouse button you clicked and the X and Y position of the mouse.</li>
            <li><span className="font-semibold">Event Handling</span>: Runs automatically when the onMouseDown event occurs on the element.</li>
        </ul>

        <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Preventing Default Behavior</h2>
         <p>In certain situations, it may be necessary to prevent the default actions that occur when a mouse button is pressed. Examples include disabling text selection, blocking right-click context menus, or stopping other standard browser behaviors.</p>
        <pre className="text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5">
            <code>
                {`import React from "react";

function PreventTextSelection() {
    const handleMouseDown = (event) => {
        event.preventDefault(); 
        console.log("Text selection prevented!");
    };

    return (
        <div>
            <p onMouseDown={handleMouseDown}>Click Here</p>
        </div>
    );
}

export default PreventTextSelection;`}
            </code>
        </pre>

       <ul className="list-[square] space-y-1 mt-5">
        <li><span className="font-semibold">handleMouseDown</span>: Uses event.preventDefault() to stop the default text selection.</li>
        <li><span className="font-semibold">console.log</span>: Prints "Text selection prevented!" when the mouse button is pressed.</li>
       </ul>
        
        <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Using onMouseDown for Changing Colors</h2>
        <p>The onMouseDown event can be used to modify component styles and manage state during a mouse interaction.</p>
        <pre className="text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5">
            <code>
                {`import React, { useState } from "react";

function ChangeColorOnMouseDown() {
    const [color, setColor] = useState("lightblue");

    const handleMouseDown = () => {
   
        setColor(color === "lightblue" ? "lightcoral" : "lightblue");
    };

    return (
        <div
            onMouseDown={handleMouseDown}
            style={{
                width: "200px",
                height: "200px",
                backgroundColor: color,
                textAlign: "center",
                lineHeight: "200px",
                fontSize: "18px",
                cursor: "pointer",
            }}
        >
            Click me to change color
        </div>
    );
}

export default ChangeColorOnMouseDown;`}
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