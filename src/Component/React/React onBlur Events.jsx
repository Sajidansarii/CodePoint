import React from "react";

const ReactonBlur = () => {
    return(
        <div className="max-w-4xl p-6 mt-10">
            <h1 className="text-3xl text-blue-500 font-semibold mb-3">React onBlur Event</h1>
            <p className="mb-3">Managing user interactions effectively is essential when developing dynamic React applications. One widely used event for handling focus changes is the onBlur event, which triggers when an element such as an input or button loses focus.</p>
            <p>In this article, we will examine the onBlur event in React, its purpose, functionality, and typical use cases.</p>
            
			<h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">What is onBlur Event?</h2>
            <p>The onBlur event in React is a synthetic event that fires when an element loses focus. It is commonly applied to form elements, including inputs, text areas, and buttons, to handle cases where users shift their focus by clicking outside the element or navigating through the page using the keyboard.</p>
            
			<h2 className="text-2xl text-gray-800 font-semibold mt-5">Syntax</h2>
			<pre className="text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5">
				<code>
					{`<Element onBlur={handleBlur} />`}
				</code>
			</pre>

			<ul className="list-[square] space-y-1 mt-5">
				<li><span className="font-semibold">{'<Element>'}</span>: The React component or HTML element (such as an input or textarea) whose focus change you want to monitor.</li>
				<li><span className="font-semibold">handleBlur</span>: The function that runs when the element loses focus. This function is defined inside your component.</li>
			</ul>

			<h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">When Does the onBlur Event Get Triggered?</h2>
            <p>The onBlur event is triggered when an element loses focus. This typically happens in the following situations:</p>
            <ul className="list-[square] space-y-1 mt-5">
				<li>Clicking anywhere outside the element</li>
				<li>Navigating to another element using the Tab key</li>
				<li>Focusing on a different interactive element, such as a link or button</li>
			</ul>

			<h1 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">Handling the onBlur Event</h1>
            <p>In React, the onBlur event fires when an element loses focus. Developers commonly use this event to execute tasks after user interaction with an input field, including form validation, interface updates, and data persistence.</p>
            <pre className="text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5">
				<code>
					{`import React, { useState } from 'react';

function App() {
    const [value, setValue] = useState('');

    const handleBlur = () => {
        console.log('Input blurred');
    };

    return (
        <form action="">
            <label htmlFor="">Name:</label>
            <input
                type="text"
                value={value}
                placeholder='Write Your Name'
                onChange={
                    (e) => 
                    setValue(e.target.value)}
                onBlur={handleBlur}
            />
        </form>
    );
}

export default App;`}
				</code>
			</pre>

			<ul className="list-[square] space-y-1 mt-5">
				<li>A React component that uses the useState hook to manage a controlled input field.</li>
				<li>The value state stores the current value of the input.</li>
				<li>The onChange event updates the value state as the user types.</li>
				<li>The onBlur event calls the handleBlur function and logs "Input blurred" when the input loses focus.</li>
			</ul>

			<h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Preventing Default Behavior</h2>
             <p>There are cases where preventing default behaviors triggered by the onBlur event is necessary, such as avoiding unexpected focus or UI updates. In React, the onSubmit event is commonly used in forms to block the browser’s default submission behavior. Using <span className="text-red-400">event.preventDefault()</span> ensures the page does not reload, allowing form submission to be handled programmatically.</p>
            <pre className="text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5">
				<code>
					{`import React, { useState } from "react";

function PreventDefault() {
    const [value, setValue] = useState("");
    const [message, setMessage] = useState("");
    
    const handleSubmit = (event) => {
        event.preventDefault();
        if (!value.trim()) {
            setMessage("Please enter something in the input field!");
        } else {
            setMessage(\`Form submitted successfully with value: \${value}\`);
        }
    };

    const handleChange = (event) => {
        setValue(event.target.value);
        setMessage(""); 
    };

    return (
        <div>
            <h2>Form with Prevented Default Submission</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Enter Text:
                    <input
                        type="text"
                        value={value}
                        onChange={handleChange}
                        placeholder="Type something"
                    />
                </label>
                <button type="submit">Submit</button>
            </form>

            {/* Display the message based on form submission */}
            {message && <p>{message}</p>}
        </div>
    );
}

export default PreventDefault;`}
				</code>
			</pre>
        
		<p className="mt-5">This React component stops the form from reloading the page on submission by using event.preventDefault(). It checks the input field when the form is submitted, showing an error message if it’s empty or a success message with the entered value. The input is controlled with state, and the message is cleared as soon as the user starts typing.</p>
			
			<h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Accessing the Event Object</h2>
            <p>In React, the onBlur event handler receives an event object that contains details about the focus change. This object lets you access information like which element lost focus, the previous element, and other related data.</p>
            <pre className="text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5">
				<code>
					{`import React, { useState } from "react";

function AccessEvent() {
    const [value, setValue] = useState("");

    const handleChange = (event) => {
        console.log("Event Object:", event); 
        console.log("Input Value:", event.target.value); 
        setValue(event.target.value); 
    };

    return (
        <div>
            <h2>Access Event Object Example</h2>
            <input
                type="text"
                value={value}
                onChange={handleChange} 
                placeholder="Type something"
            />
            <p>Input Value: {value}</p>
        </div>
    );
}

export default AccessEvent;`}
				</code>
			</pre>

			<p className="mt-5">The component captures and logs the event object and input value each time the user types. The handleChange function updates the component state using event.target.value and records the event details. The current value of the input is rendered below the input field.</p>
           
		   <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Using onBlur for Focus Validation</h2>
           <p>One typical application of the onBlur event is focus-based validation. This enables developers to verify user input, such as validating an email address, once the user moves focus away from the input field.</p>
           <pre className="text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5">
			<code>
				{`import React, { useState } from "react";

function FocusValidation() {
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");

    const handleBlur = () => {
        const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!regex.test(email)) {
            setError("Please enter a valid email.");
        } else {
            setError("");
        }
    };

    const handleChange = (event) => {
        setEmail(event.target.value);
    };

    return (
        <div>
            <input
                type="email"
                value={email}
                onChange={handleChange}
                onBlur={handleBlur}
            />
            {error && <p style={{ color: "red" }}>{error}</p>}
        </div>
    );
}

export default FocusValidation;`}
			</code>
		   </pre>

		   <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Using onBlur for Toggling Edit Modes</h2>
            <p>The onBlur event can be used to switch a UI component between edit and view modes. When a user finishes editing a field, it automatically returns to display mode.</p>
            <pre className="text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5">
				<code>
					{`import React, { useState } from "react";

function ToggleEdit() {
    const [isEditing, setIsEditing] = useState(false);
    const [value, setValue] = useState("Click to Edit");

    const handleBlur = () => {
        setIsEditing(false); 
    };

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <div>
            {isEditing ? (
                <input
                    type="text"
                    value={value}
                    onChange={handleChange}
                    onBlur={handleBlur} 
                />
            ) : (
                <p onClick={() => setIsEditing(true)}>{value}</p> 
            )}
        </div>
    );
}

export default ToggleEdit;`}
				</code>
			</pre>
         
		 <ul className="list-[square] space-y-1 mt-5 mb-3">
			<li><span className="font-semibold">Edit Mode</span>: If the user clicks the text, it becomes an input box so they can change the text. The onBlur event automatically exits edit mode when they click away.</li>
			<li><span className="font-semibold">Display Mode</span>: The text shows as a paragraph. Clicking it lets the user edit it.</li>
		 </ul>


		 <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Common Use Cases for React onBlur Event</h2>
         <p>The <span className="text-red-400">onBlur</span> event in React offers a versatile way to handle user interactions and enhance the user interface. Some of the most common use cases include:</p>
         <ul className="list-[square] space-y-1 mt-5">
			<li><span className="font-semibold">Form Validation</span>: Validate the input when the user leaves a field, such as checking if an email is correct.</li>
			<li><span className="font-semibold">Auto-Saving</span>: Save data automatically when the user finishes editing a field.</li>
			<li><span className="font-semibold">UI Updates</span>: Update the interface, like showing error messages or changing field styles.</li>
			<li><span className="font-semibold">Focus Management</span>: Move the focus to the next input or step automatically.</li>
			<li><span className="font-semibold">Hide UI Elements</span>: Close tooltips, dropdowns, or popups when focus is lost.</li>
			<li><span className="font-semibold">Closing Modals</span>: Close modals or popups when the user clicks outside or changes focus.</li>
		 </ul>
        
        </div>
    )
}

export default ReactonBlur;