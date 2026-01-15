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
        <pre className="text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5">
            <code>
                {`<element onEvent={handlerFunction} />`}
            </code>
        </pre>

        <ul className="list-[square] space-y-1 mt-5">
            <li><span className="font-semibold">element</span>: The JSX tag where the user interaction takes place.</li>
            <li><span className="font-semibold">onEvent</span>: The name of the event written in camelCase.</li>
            <li><span className="font-semibold">handlerFunction</span>: The function that responds to the event action.</li>
        </ul>
        
        <p className="mt-5">Now, let’s understand this with an example.</p>
        <pre className="text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5">
            <code>
                {`/*App.css*/

.App {
    text-align: center;
    margin-top: 50px;
    font-family: Arial, sans-serif;
}

h1 {
    color: #4CAF50;
    font-size: 2.5rem;
    margin-bottom: 20px;
}

h2 {
    font-size: 1.5rem;
    color: #333;
}

.input-field {
    padding: 10px;
    font-size: 16px;
    width: 250px;
    margin: 20px 0;
    border: 2px solid #ddd;
    border-radius: 5px;
    outline: none;
    transition: border 0.3s ease;
}

.input-field:focus {
    border-color: #4CAF50;
}

.save-button {
    padding: 10px 20px;
    font-size: 16px;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.save-button:hover {
    background-color: #45a049;
}

.save-button:active {
    background-color: #388e3c;
}`}
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
       <pre className="text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5">
        <code>
            {`import React, { Component } from 'react';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: 'Hello, welcome to React!',
        };

        this.handleClick = this.handleClick.bind(this);
    }

  
    handleClick() {
      
        this.setState({
            message: 'You clicked the button!',
        });
    }

    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                {/* Add event handler to the button */}
                <button onClick={this.handleClick}>Click Me</button>
            </div>
        );
    }
}

export default App;`}
        </code>
       </pre>

       <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Reading Props in Event Handlers</h2>
      <p>React event handlers frequently rely on props received from parent components to carry out actions based on that data.</p>
     <pre className="text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5">
        <code>
            {`body {
    margin: 0;
    padding: 0;
    display: flex;
    align-items: flex-start;
    height: 100vh;
    background-color: #f0f0f0;
}

.parent-container {
    text-align: center;
}

.child-container {
    display: inline-block;
    margin-top: 20px;
    padding: 20px;
    background-color: #fff;
    border: 1px solid #ddd;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

button {
    padding: 10px 20px;
    background-color: #007BFF;
    color: white;
    border: none;
    cursor: pointer;
    font-size: 16px;
}

button:hover {
    background-color: #0056b3;
}`}
        </code>
     </pre>

     <h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">Passing Event Handlers as Props</h2>
     <p>You can pass event handler functions to child components as props so that the child can send information back to the parent when something happens.</p>
    <pre className="text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5">
        <code>
            {`import React, { Component } from 'react';
import Child from './Child';

class Parent extends Component {

    handleClick = () => {
        alert("Button clicked in Child component!");
    };

    render() {
        const containerStyle = {
            display: "flex",
            justifyContent: "center",  
            alignItems: "flex-start",   
            height: "100vh",            
            margin: "0",            
        };

        return (
            <div style={containerStyle}>
                <div>
                    <h1>Parent Component</h1>
                    {/* Passing the event handler as a prop to the Child component */}
                    <Child onClickHandler={this.handleClick} />
                </div>
            </div>
        );
    }
}

export default Parent;`}
        </code>
    </pre>


    <h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">Naming Event Handler Props</h2>
     <p>React developers often name event handler props according to the event, making the code easier to understand.</p>
    <pre className="text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5">
        <code>
            {`import React from "react";

function Button({ onClickHandler }) {
    return <button onClick={onClickHandler}>Click Me</button>;
}

function Parent() {
    const handleClick = () => {
        alert("Button clicked!");
    };

    return <Button onClickHandler={handleClick} />;
}

export default Parent;`}
        </code>
    </pre>


    <h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">Event Propagation in React</h2>
    <p>Event propagation in React refers to the process where an event triggered on a target element flows upward to its ancestor elements in the DOM. React uses the bubbling phase by default, meaning events move from the target element to its parents unless explicitly stopped.</p>
    <pre className="text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5">
        <code>
            {`import React from "react";

function Child() {
    const handleClick = (event) => {
        event.stopPropagation(); 
        alert("Child button clicked");
    };

    return <button onClick={handleClick}>Child Button</button>;
}

function Parent() {
    const handleClick = () => {
        alert("Parent div clicked");
    };

    return (
        <div
            onClick={handleClick}
            style={{ padding: "50px", backgroundColor: "lightgray" }}
        >
            <Child />
        </div>
    );
}

export default Parent;`}
        </code>
    </pre>


    <h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">Preventing Default Behavior in React Events</h2>
     <p>The <span className="text-red-400">event.preventDefault()</span> method in React is used to prevent the default action associated with an event. It allows developers to implement custom handling rather than relying on the browser’s built-in behavior.</p>
   <pre className="text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5">
    <code>
        {`import React, { useState } from "react";

function SimpleForm() {
    const [name, setName] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(\`Form submitted with name: \${name}\`);
    };

    return (
        <div style={styles.container}>
            <form onSubmit={handleSubmit} style={styles.form}>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name"
                    style={styles.input}
                />
                <button type="submit" style={styles.button}>
                    Submit
                </button>
            </form>
        </div>
    );
}

const styles = {
    container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start", // Align items at the top
        height: "100vh", // Full viewport height
        backgroundColor: "#f0f0f0",
        paddingTop: "50px", // Added padding to center it towards top
    },
    form: {
        textAlign: "center",
        padding: "20px",
        backgroundColor: "white",
        borderRadius: "5px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    },
    input: {
        padding: "10px",
        fontSize: "16px",
        marginBottom: "10px",
        borderRadius: "4px",
        border: "1px solid #ccc",
        width: "200px",
    },
    button: {
        padding: "10px 20px",
        fontSize: "16px",
        borderRadius: "4px",
        border: "1px solid #ccc",
        backgroundColor: "#4CAF50",
        color: "white",
        cursor: "pointer",
        marginTop: "20px", 
    },
};

export default SimpleForm;`}
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