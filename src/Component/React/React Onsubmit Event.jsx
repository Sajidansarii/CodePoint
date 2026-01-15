import React from "react";

const ReactOnSubmit = () => {
    return(
        <div className="max-w-4xl p-6 mt-10">
            <h1 className="text-3xl text-blue-500 font-semibold mb-3">React onSubmit Event</h1>
             <p>The <span className="text-red-400">onSubmit</span> event in React triggers when a form is submitted. It provides a way to run custom code, validate the form, prevent the default submission, and perform actions like sending form data to a backend server.</p>
             <h2 className="text-2xl text-gray-800 font-semibold mt-5">Syntax</h2>
            <pre className="text-green-400 bg-gray-900 p-4 rounded-lg mt-5">
                <code>
                    {`<form onSubmit={handleSubmit} >
    <input type="text">
</form>`}
                </code>
            </pre>

             <ul className="list-[square] list-inside space-y-1 mt-5">
                <li><span className="font-semibold">onSubmit={'handleSubmit'}</span>: The form’s <span className="lg:ml-0 ml-5">onSubmit</span> event invokes the <span className="lg:ml-0 ml-5">handleSubmit</span> callback.</li>
                <li><span className="font-semibold">handleSubmit</span>: Defines programmatic <span className="lg:ml-0 ml-5">behavior</span> like validation, state updates, or <span className="lg:ml-0 ml-5">asynchronous</span> requests when the form <span className="ml-5">is</span> submitted.</li>
            </ul>

            <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">When Does the onSubmit Event Get Triggered?</h2>
            <ul className="list-[square] list-inside space-y-1 mt-5">
                <li>The user clicks the form’s submit button.</li>
                <li>The user presses Enter while an input <span className="lg:ml-0 ml-5">field</span> in the form is focused.</li>
                <li>The form is submitted programmatically <span className="lg:ml-0 ml-5">using</span> JavaScript.</li>
            </ul>  

            <p className="mt-5">Let’s see how this works with an example.</p>
            <pre className="text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5">
                 <code>
                    {`// Filename - App.js

import React, { useState } from "react";
function App() {
    const [value, setValue] = useState("");
    const [result, setResult] = useState("");
    function handleSubmit(e) {
        e.preventDefault();
        setResult(
            "Form has been submitted with with Input: " +
                value
        );
    }

    function handleChange(e) {
        setValue(e.target.value);
        setResult("");
    }
    return (
        <div
            style={{ textAlign: "center", margin: "auto" }}
        >
            <h1 style={{ color: "Green" }}>
                GeeksforGeeks
            </h1>
            <h3>
                Exemple for React onSubmit Event Handler
            </h3>
            <form onSubmit={handleSubmit}>
                <label>Add input here: </label>
                <input
                    value={value}
                    onInput={handleChange}
                    required
                />
                <br />
                <br />
                <button type="submit">Submit</button>
            </form>
            <br />
            <div>
                <h4>{result}</h4>
            </div>
        </div>
    );
}

export default App;`}
                </code> 
            </pre>

            <p className="mt-5">The app uses React state (value and result) to handle the form input and show the result. handleSubmit sets result to the current input when the form is submitted. handleChange updates value and clears result whenever the input changes. The form contains a labeled input and a submit button.</p>
           
           <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Accessing the Event Object</h2>
           <p>React provides the event object to the onSubmit handler, allowing you to retrieve form data, call <span className="text-red-400">event.preventDefault()</span>, and efficiently handle other event-related operations.</p>
            <p className="mt-5">Let’s see how this works with an example.</p>      
            <pre className="text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5">
                <code>
                    {`import React, { useState } from "react";

function AccessEvent() {
    const [value, setValue] = useState("");
    const handleSubmit = (event) => {
        console.log("Event object:", event);
        alert(\`Form submitted with value: \${value}\`);
    };

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Enter Text:
                    <input type="text" value={value} onChange={handleChange} />
                </label>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default AccessEvent;`}
                </code>
            </pre>
           
           <ul className="list-[square] list-inside space-y-1 mt-5">
            <li><span className="font-semibold">State Management</span>: value holds the text <span className="lg:m l-0 ml-5">typed</span> in the input.</li>
             <li><span className="font-semibold">handleSubmit</span>: Logs the event and <span className="lg:ml-0 ml-5">shows</span> an alert with the input when the <span className="lg:ml-0 ml-5">form</span> is submitted.</li>
             <li><span className="font-semibold">handleChange</span>: Updates value as the <span className="lg:ml-0 ml-5">user</span> types.</li>
           </ul> 

           <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Preventing Default Form Submission</h2>
           <p>By default, form submission in React causes the page to reload, which is usually undesirable in single-page applications (SPA). Calling <span className="text-red-400">event.preventDefault()</span> prevents this behavior, allowing the form to be handled programmatically.</p>
            
            <p className="mt-5">Let’s see how this works with an example</p>
            <pre className="text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5">
                <code>
                    {`import React, { useState } from "react";

function PreventForm() {
    const [value, setValue] = useState("");
    const [result, setResult] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!value.trim()) {
            alert("Input cannot be empty!");
        } else {
            setResult(value);
            alert("Form submitted successfully!");
        }
    };

    const handleChange = (event) => {
        setValue(event.target.value);
        setResult(""); 
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Enter Text:
                    <input type="text" value={value} onChange={handleChange} />
                </label>
                <button type="submit">Submit</button>
            </form>
            <p>Result: {result}</p>
        </div>
    );
}

export default PreventForm;`}
                </code>
            </pre>

            <ul className="list-[square] space-y-1 mt-5">
                <li><span className="font-semibold">State Management</span>:value holds the input text, and result stores the output after form submission.</li>
                <li><span className="text-red-400">handleSubmit</span>: Uses <span className="text-red-400">event.preventDefault()</span> to stop the page from reloading. If the input is empty, it shows an alert; otherwise, it sets result to the input value and displays a success message.</li>
                <li><span className="text-red-400">handleChange</span>: Updates value as the user types and clears result whenever the input changes.</li>
            </ul>


            <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Use Cases for onSubmit</h2>
             <ul className="list-[square] space-y-1 mt-5">
                <li><span className="font-semibold">Form Validation</span>: Ensure all required fields are filled and data is valid before submitting.</li>
                <li><span className="font-semibold">Submitting Data</span>: Send the form data to a server or API when submitted.</li>
                <li><span className="font-semibold">Prevent Page Reload</span>: Stop the default browser behavior and handle submission with JavaScript.</li>
                <li><span className="font-semibold">Displaying Confirmation</span>: Show a success message or update the UI after submission.</li>
                <li><span className="font-semibold">Resetting Fields</span>: Clear or reset the form fields after submission.</li>
             </ul>

        </div>
    )
}

export default ReactOnSubmit;