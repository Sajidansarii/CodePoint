import React from "react";

const ReactFormsubmit = () => {
    return (
        <div className="max-w-4xl p-6 mt-10">
            <h1 className="text-3xl text-blue-500 font-semibold mb-3">React Submit Form</h1>
           
           <h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">Submitting Forms</h2>
           <p>Handle the form submission by assigning a function to the onSubmit <span className="text-red-400">attribute</span>.</p>
           <h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">Example</h2>
           <p>Include a submit button and attach a handler to the form’s <span className="text-red-400">onSubmit</span>.</p>
           <pre className="text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5">
            <code>
                {`import { useState } from 'react';
import { createRoot } from 'react-dom/client';

function MyForm() {
  const [name, setName] = useState("");

  function handleChange(e) {
    setName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    alert(name);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Enter your name:
        <input
          type="text" 
          value={name}
          onChange={handleChange}
        />
      </label>
      <input type="submit" />
    </form>
  )
}

createRoot(document.getElementById('root')).render(
  <MyForm />
);`}
            </code>
           </pre>
        
        
        
        </div>
    )
}

export default ReactFormsubmit;