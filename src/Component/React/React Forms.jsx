import React from "react";

const ReactForms = () => {
    return (
        <div className="max-w-4xl p-6 mt-10">
        <h1 className="text-3xl text-blue-500 font-semibold mb-3">React Forms</h1>
        <p>React, like HTML, relies on forms to handle user interaction.</p>
        
        <h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">Adding Forms in React</h2>
        <p>A form is added in React the same way as other elements.</p>
        <h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">Example</h2>
        <p>Add a form where users can type in their name.</p>
        <pre className="text-green-400 bg-gray-900 p-4 rounded-lg mt-5">
            <code>
                {`function MyForm() {
  return (
    <form>
      <label>Enter your name:
        <input type="text" />
      </label>
    </form>
  )
}

createRoot(document.getElementById('root')).render(
  <MyForm />
);`}
            </code>
        </pre>

        <p className="mt-5">By default, the form will submit and refresh the page, but this is usually not the desired behavior in React. Instead, we prevent the default action and allow React to handle the form.</p>
        
        <h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">HTML Forms vs. React Forms</h2>
        <p>In React, form elements such as <span className="text-red-400">{'<input>'}</span>, <span className="text-red-400">{'<textarea>'}</span>, and <span className="text-red-400">{'<select>'}</span> behave differently than they do in plain HTML. In standard HTML, form elements manage their own values based on user input. In React, however, form values are stored in the component’s state and updated using <span className="text-red-400">setState()</span>. This approach allows React to control form data, creating what are called controlled components.</p>
        

        <h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">Controlled Components</h2>
        <p>In a controlled component, the React component manages all form data. The input value is controlled by React state, and any changes are handled through event handlers that update that state. Since the data is managed by the component, it is stored entirely in state. Using the useState Hook allows each input value to be tracked, providing a single source of truth for the application.</p>
        <h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">Example</h2>
        <p>Control the input with React’s useState Hook.</p>
        <pre className="text-green-400 bg-gray-900 p-4 rounded-lg mt-5">
            <code>
                {`import { useState } from 'react';
import { createRoot } from 'react-dom/client';

function MyForm() {
  const [name, setName] = useState("");

  function handleChange(e) {
    setName(e.target.value);
  }

  return (
    <form>
      <label>Enter your name:
        <input
          type="text" 
          value={name}
          onChange={handleChange}
        />
      </label>
      <p>Current value: {name}</p>
    </form>
  )
}

createRoot(document.getElementById('root')).render(
  <MyForm />
);`}
            </code>
        </pre>

  <p className="mt-5 mb-3">Import the <span className="text-red-400">useState</span> Hook from React:</p>
  <pre className="text-green-400 bg-gray-900 p-4 rounded-lg mt-5">
    <code>
        {`import { useState } from 'react';`}
    </code>
  </pre>

  <p className="mt-5 mb-3">Use state to keep track of the input and provide a function for changes.</p>
  <pre className="text-green-400 bg-gray-900 p-4 rounded-lg mt-5">
    <code>
        {`const [name, setName] = useState("");`}
    </code>
  </pre>


  <p className="mt-5 mb-3">Define a function to manage input changes.</p>
  <pre className="text-green-400 bg-gray-900 p-4 rounded-lg mt-5">
    <code>
        {`function handleChange(e) {
  setName(e.target.value);
}`}
    </code>
  </pre>

  <p className="mt-5 mb-3">Use the state variable as the input value and attach the change handler to onChange.</p>
  <pre className="text-green-400 bg-gray-900 p-4 rounded-lg mt-5">
    <code>
        {`<input
  type="text" 
  value={name}
  onChange={handleChange}
/>`}
    </code>
  </pre>

  <p className="mt-5 mb-3">Render the value so users can see it updating.</p>
  <pre className="text-green-400 bg-gray-900 p-4 rounded-lg mt-5">
    <code>
        {`<p>Current value: {name}</p>`}
    </code>
  </pre>


  <h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">Initial Values</h2>
  <p>Set an initial value for the input by providing a default in <span className="text-red-400">useState</span>.</p>      
  <h2 className="text-gray-800 text-2xl font-semibold mt-5 mb-3">Example</h2>      
  <p>Use initial value for name:</p>      
   <pre className="text-green-400 bg-gray-900 p-4 rounded-lg mt-5">
    <code>
        {`function MyForm() {
  const [name, setName] = useState("John");
        }`}
    </code>
    </pre>     
        
        
        
        
        
        
        
        
        
        </div>
    )
}

export default ReactForms;