import React from "react";

const ReactDoubleClick = () => {
    return(
        <div className="max-w-4xl p-6 mt-10">
            <h1 className="text-3xl text-blue-500 font-semibold mb-3">React DoubleClick Event</h1>
            <p className="mb-3">The <span className="text-red-400">onDoubleClick</span> event in React activates when the user double-clicks an element with the left mouse button. It is included in the set of mouse-related events React provides, such as onClick, onMouseDown, and onMouseUp.</p>
            <p>The onDoubleClick event is triggered when a user rapidly clicks a mouse button twice on the same element. It usually occurs within approximately 300 milliseconds and is ideal for differentiating between single clicks (onClick) and double clicks (onDoubleClick).</p>
           
           <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Syntax</h2>
           <pre className="text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5">
            <code>
                {`<Element onDoubleClick={onDoubleClickHandler} />`}
            </code>
           </pre>

           <ul className="list-[square] space-y-1 mt-5">
            <li><span className="text-red-400">{'<Element>'}</span>: The React component or HTML element (e.g., {'<button>'}, {'<div>'}) where you want to detect double-clicks.</li>
            <li>onDoubleClickHandler: The function that runs when the onDoubleClick event occurs.</li>
           </ul>

           <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Handling the onDoubleClick Event</h2>
           <p>The onDoubleClick event in React lets you run actions or change the UI when an element is double-clicked. You can update state, trigger animations, or log messages.</p>
            <pre className="text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5">
                <code>
                    {`import React, { useState } from "react";
import "./App.css";

function App() {
    const onDoubleClickHandler = () => {
        console.log("You have Clicked Twice");
    };
    return (
        <div className="App">
            <h1> Hey Geek!</h1>
            <button onDoubleClick={onDoubleClickHandler}>
                Double Click Me!
            </button>
        </div>
    );
}

export default App;`}
                </code>
            </pre>

            <p className="mt-5">The component renders a button that triggers the onDoubleClickHandler function when double-clicked. This function logs the message "You have Clicked Twice" to the console.</p>
          
          <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Accessing the Event Object</h2>
          <p>The onDoubleClick event handler gets an event object with details about the event, including the mouse position, target element, and other properties.</p>
          <pre className="text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5">
            <code>
                {`import React, { useState } from "react";

function AccessEventObjectComponent() {
    const [num, setNum] = useState(0);

    const handleDoubleClick = (event) => {
        console.log("Event Object:", event); 
        console.log("Mouse X Position:", event.clientX); 
        setNum(num + 1);
    };

    return (
        <div>
            <p>
                Double-click the button to see the event details and increment the value
            </p>
            <button onDoubleClick={handleDoubleClick}>Double-Click Me</button>
            <p>Current Value: {num}</p>
        </div>
    );
}

export default AccessEventObjectComponent;`}
            </code>
          </pre>

          <p className="mt-5">The handleDoubleClick function logs the event object and the mouse’s X position (event.clientX) when the button is double-clicked. It also increases the num value.</p>
           
           <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Preventing Default Behavior</h2>
           <p>Using <span className="text-red-400">event.preventDefault()</span> in React allows you to cancel the default behavior of events, such as submitting a form, following a link, or selecting text, giving you complete control over how the event is processed.</p>
           <pre className="text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5">
            <code>
                {`import React from "react";

function PreventDefaultComponent() {
    const handleDoubleClick = (event) => {
        event.preventDefault();
        console.log("Text selection prevented!");
    };

    return (
        <div>
            <p onDoubleClick={handleDoubleClick}>Click Me</p>
        </div>
    );
}

export default PreventDefaultComponent;`}
            </code>
           </pre>

           <ul className="list-[square] space-y-1 mt-5">
           <li><span className="font-semibold">handleDoubleClick</span>: Runs when the paragraph is double-clicked and uses <span className="text-red-400">event.preventDefault()</span> to stop text from being selected.</li>
           <li><span className="font-semibold">console.log</span>: Prints "Text selection prevented!" to the console to show that the default action was blocked.</li>
           <li><span className="font-semibold">Effect</span>: Normally, double-clicking selects text, but here it doesn’t because of <span className="font-semibold">preventDefault()</span>.</li>
           </ul>

           <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Using onDoubleClick for Custom Feature</h2>
           <p>The onDoubleClick event in React lets you run custom code when a user double-clicks an element. You can use it to toggle UI states, update content, or perform actions that should happen only on a double-click.</p>
           <pre className="text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5">
            <code>
                {`import React, { useState } from "react";

function ToggleModeComponent() {
    const [isEditing, setIsEditing] = useState(false);

    const handleDoubleClick = () => {
        setIsEditing(!isEditing); 
    };

    const paragraphStyle = {
        cursor: "pointer",
        padding: "10px",
        border: "1px solid #ccc",
        borderRadius: "5px",
        textAlign: "center",
        fontSize: "18px",
        backgroundColor: isEditing ? "#e0f7fa" : "#f1f1f1", 
    };

    const modeTextStyle = {
        fontWeight: "bold",
        color: isEditing ? "#00796b" : "#212121", 
    };

    return (
        <div style={{ margin: "20px", textAlign: "center" }}>
            <p onDoubleClick={handleDoubleClick} style={paragraphStyle}>
                <span style={modeTextStyle}>
                    {isEditing ? "Edit Mode" : "View Mode"}
                </span>
            </p>
        </div>
    );
}

export default ToggleModeComponent;`}
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