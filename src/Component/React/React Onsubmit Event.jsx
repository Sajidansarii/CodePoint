import React from "react";

const ReactOnSubmit = () => {
    return(
        <div className="max-w-4xl p-6 mt-10">
            <h1 className="text-3xl text-blue-500 font-semibold mb-3">React onSubmit Event</h1>
             <p>The <span className="text-red-400">onSubmit</span> event in React triggers when a form is submitted. It provides a way to run custom code, validate the form, prevent the default submission, and perform actions like sending form data to a backend server.</p>
             <h2 className="text-2xl text-gray-800 font-semibold mt-5">Syntax</h2>
          <pre className="bg-gray-100 text-gray-800 p-4 rounded-lg mt-5 overflow-x-auto">
  <code>
    <span className="text-pink-600">&lt;form</span>{" "}
    <span className="text-purple-600">onSubmit</span>
    <span className="text-gray-800">=</span>
    <span className="text-blue-600">{`{handleSubmit}`}</span>{" "}
    <span className="text-pink-600">&gt;</span>
    {"\n"}
    {"  "}
    <span className="text-pink-600">&lt;input</span>{" "}
    <span className="text-purple-600">type</span>
    <span className="text-gray-800">=</span>
    <span className="text-orange-500">"text"</span>
    <span className="text-pink-600"> /&gt;</span>
    {"\n"}
    <span className="text-pink-600">&lt;/form&gt;</span>
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
        <pre className="bg-gray-100 text-gray-800 p-4 rounded-lg mt-5 overflow-x-auto">
  <code>
    <span className="text-gray-500">// Filename - App.js</span>
    {"\n\n"}

    <span className="text-purple-600">import</span>{" "}
    React, {"{"} <span className="text-blue-600">useState</span> {"}"}{" "}
    <span className="text-purple-600">from</span>{" "}
    <span className="text-orange-500">"react"</span>;
    {"\n\n"}

    <span className="text-purple-600">function</span>{" "}
    <span className="text-blue-600">App</span>
    <span className="text-gray-800">() {"{"}</span>
    {"\n\n"}

    {"  "}
    <span className="text-purple-600">const</span>{" "}
    <span className="text-gray-800">[</span>
    <span className="text-blue-600">value</span>
    <span className="text-gray-800">, </span>
    <span className="text-blue-600">setValue</span>
    <span className="text-gray-800">] = </span>
    <span className="text-yellow-600">useState</span>
    <span className="text-gray-800">(</span>
    <span className="text-orange-500">""</span>
    <span className="text-gray-800">);</span>
    {"\n"}

    {"  "}
    <span className="text-gray-800">[</span>
    <span className="text-blue-600">result</span>
    <span className="text-gray-800">, </span>
    <span className="text-blue-600">setResult</span>
    <span className="text-gray-800">] = </span>
    <span className="text-yellow-600">useState</span>
    <span className="text-gray-800">(</span>
    <span className="text-orange-500">""</span>
    <span className="text-gray-800">);</span>
    {"\n\n"}

    {"  "}
    <span className="text-purple-600">function</span>{" "}
    <span className="text-yellow-600">handleSubmit</span>
    <span className="text-gray-800">(e) {"{"}</span>{"\n"}

    {"    "}
    <span className="text-yellow-600">e.preventDefault</span>
    <span className="text-gray-800">();</span>{"\n"}

    {"    "}
    <span className="text-yellow-600">setResult</span>
    <span className="text-gray-800">(</span>
    <span className="text-orange-500">
      "Form has been submitted with Input: "
    </span>{" "}
    <span className="text-gray-800">+ value);</span>
    {"\n"}

    {"  "}
    <span className="text-gray-800">{"}"}</span>
    {"\n\n"}

    {"  "}
    <span className="text-purple-600">function</span>{" "}
    <span className="text-yellow-600">handleChange</span>
    <span className="text-gray-800">(e) {"{"}</span>{"\n"}

    {"    "}
    <span className="text-yellow-600">setValue</span>
    <span className="text-gray-800">(e.target.value);</span>{"\n"}
    {"    "}
    <span className="text-yellow-600">setResult</span>
    <span className="text-gray-800">(</span>
    <span className="text-orange-500">""</span>
    <span className="text-gray-800">);</span>{"\n"}

    {"  "}
    <span className="text-gray-800">{"}"}</span>
    {"\n\n"}

    {"  "}
    <span className="text-purple-600">return</span>{" ("}
    {"\n"}

    {"    "}
    <span className="text-pink-600">&lt;div</span>{" "}
    <span className="text-purple-600">style</span>
    <span className="text-gray-800">={"{"}</span>
    <span className="text-red-500">textAlign</span>
    <span className="text-gray-800">: </span>
    <span className="text-orange-500">"center"</span>
    <span className="text-gray-800">, </span>
    <span className="text-red-500">margin</span>
    <span className="text-gray-800">: </span>
    <span className="text-orange-500">"auto"</span>
    <span className="text-gray-800">{"}"}</span>
    <span className="text-pink-600">&gt;</span>
    {"\n\n"}

    {"      "}
    <span className="text-pink-600">&lt;h1</span>{" "}
    <span className="text-purple-600">style</span>
    <span className="text-gray-800">={"{"}</span>
    <span className="text-red-500">color</span>
    <span className="text-gray-800">: </span>
    <span className="text-orange-500">"green"</span>
    <span className="text-gray-800">{"}"}</span>
    <span className="text-pink-600">&gt;</span>
    GeeksforGeeks
    <span className="text-pink-600">&lt;/h1&gt;</span>
    {"\n"}

    {"      "}
    <span className="text-pink-600">&lt;h3&gt;</span>
    Example for React onSubmit Event Handler
    <span className="text-pink-600">&lt;/h3&gt;</span>
    {"\n\n"}

    {"      "}
    <span className="text-pink-600">&lt;form</span>{" "}
    <span className="text-purple-600">onSubmit</span>
    <span className="text-gray-800">=</span>
    <span className="text-gray-800">{`{handleSubmit}`}</span>
    <span className="text-pink-600">&gt;</span>
    {"\n"}

    {"        "}
    <span className="text-pink-600">&lt;label&gt;</span>
    Add input here:
    <span className="text-pink-600">&lt;/label&gt;</span>
    {"\n"}

    {"        "}
    <span className="text-pink-600">&lt;input</span>{" "}
    <span className="text-purple-600">value</span>
    <span className="text-gray-800">=</span>
    <span className="text-gray-800">{`{value}`}</span>{" "}
    <span className="text-purple-600">onInput</span>
    <span className="text-gray-800">=</span>
    <span className="text-gray-800">{`{handleChange}`}</span>{" "}
    <span className="text-purple-600">required</span>
    <span className="text-pink-600"> /&gt;</span>
    {"\n\n"}

    {"        "}
    <span className="text-pink-600">&lt;button</span>{" "}
    <span className="text-purple-600">type</span>
    <span className="text-gray-800">=</span>
    <span className="text-orange-500">"submit"</span>
    <span className="text-pink-600">&gt;</span>
    Submit
    <span className="text-pink-600">&lt;/button&gt;</span>
    {"\n"}

    {"      "}
    <span className="text-pink-600">&lt;/form&gt;</span>
    {"\n\n"}

    {"      "}
    <span className="text-pink-600">&lt;div&gt;</span>
    {"\n"}

    {"        "}
    <span className="text-pink-600">&lt;h4&gt;</span>
    {"{"}
    <span className="text-blue-600">result</span>
    {"}"}
    <span className="text-pink-600">&lt;/h4&gt;</span>
    {"\n"}

    {"      "}
    <span className="text-pink-600">&lt;/div&gt;</span>
    {"\n\n"}

    {"    "}
    <span className="text-pink-600">&lt;/div&gt;</span>
    {"\n"}

    {"  "}){";"}{"\n"}
    <span className="text-gray-800">{"}"}</span>
    {"\n\n"}

    <span className="text-purple-600">export default</span>{" "}
    <span className="text-blue-600">App</span>;
  </code>
</pre>

            <p className="mt-5">The app uses React state (value and result) to handle the form input and show the result. handleSubmit sets result to the current input when the form is submitted. handleChange updates value and clears result whenever the input changes. The form contains a labeled input and a submit button.</p>
           
           <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Accessing the Event Object</h2>
           <p>React provides the event object to the onSubmit handler, allowing you to retrieve form data, call <span className="text-red-400">event.preventDefault()</span>, and efficiently handle other event-related operations.</p>
            <p className="mt-5">Let’s see how this works with an example.</p>      
          <pre className="bg-gray-100 text-gray-800 p-4 rounded-lg mt-5 overflow-x-auto">
  <code>
    <span className="text-purple-600">import</span>{" "}
    React, {"{"} <span className="text-blue-600">useState</span> {"}"}{" "}
    <span className="text-purple-600">from</span>{" "}
    <span className="text-orange-500">"react"</span>;
    {"\n\n"}

    <span className="text-purple-600">function</span>{" "}
    <span className="text-blue-600">AccessEvent</span>
    <span className="text-gray-800">() {"{"}</span>
    {"\n\n"}

    {"  "}
    <span className="text-purple-600">const</span>{" "}
    <span className="text-gray-800">[</span>
    <span className="text-blue-600">value</span>
    <span className="text-gray-800">, </span>
    <span className="text-blue-600">setValue</span>
    <span className="text-gray-800">] = </span>
    <span className="text-yellow-600">useState</span>
    <span className="text-gray-800">(</span>
    <span className="text-orange-500">""</span>
    <span className="text-gray-800">);</span>
    {"\n\n"}

    {"  "}
    <span className="text-purple-600">const</span>{" "}
    <span className="text-yellow-600">handleSubmit</span>{" "}
    <span className="text-gray-800">= (event) =&gt; {"{"}</span>{"\n"}
    {"    "}
    <span className="text-yellow-600">console.log</span>
    <span className="text-gray-800">(</span>
    <span className="text-orange-500">"Event object:"</span>
    <span className="text-gray-800">, event);</span>{"\n"}
    {"    "}
    <span className="text-yellow-600">alert</span>
    <span className="text-gray-800">(</span>
    <span className="text-orange-500">`Form submitted with value: `</span>{" "}
    <span className="text-gray-800">+ value);</span>{"\n"}
    {"  "}
    <span className="text-gray-800">{"}"}</span>;
    {"\n\n"}

    {"  "}
    <span className="text-purple-600">const</span>{" "}
    <span className="text-yellow-600">handleChange</span>{" "}
    <span className="text-gray-800">= (event) =&gt; {"{"}</span>{"\n"}
    {"    "}
    <span className="text-yellow-600">setValue</span>
    <span className="text-gray-800">(event.target.value);</span>{"\n"}
    {"  "}
    <span className="text-gray-800">{"}"}</span>;
    {"\n\n"}

    {"  "}
    <span className="text-purple-600">return</span>{" ("}
    {"\n"}

    {"    "}
    <span className="text-pink-600">&lt;div&gt;</span>
    {"\n"}

    {"      "}
    <span className="text-pink-600">&lt;form</span>{" "}
    <span className="text-purple-600">onSubmit</span>
    <span className="text-gray-800">=</span>
    <span className="text-gray-800">{`{handleSubmit}`}</span>
    <span className="text-pink-600">&gt;</span>
    {"\n"}

    {"        "}
    <span className="text-pink-600">&lt;label&gt;</span>
    Enter Text:
    <span className="text-pink-600">&lt;/label&gt;</span>
    {"\n"}

    {"        "}
    <span className="text-pink-600">&lt;input</span>{" "}
    <span className="text-purple-600">type</span>
    <span className="text-gray-800">=</span>
    <span className="text-orange-500">"text"</span>{" "}
    <span className="text-purple-600">value</span>
    <span className="text-gray-800">=</span>
    <span className="text-gray-800">{`{value}`}</span>{" "}
    <span className="text-purple-600">onChange</span>
    <span className="text-gray-800">=</span>
    <span className="text-gray-800">{`{handleChange}`}</span>
    <span className="text-pink-600"> /&gt;</span>
    {"\n\n"}

    {"        "}
    <span className="text-pink-600">&lt;button</span>{" "}
    <span className="text-purple-600">type</span>
    <span className="text-gray-800">=</span>
    <span className="text-orange-500">"submit"</span>
    <span className="text-pink-600">&gt;</span>
    Submit
    <span className="text-pink-600">&lt;/button&gt;</span>
    {"\n"}

    {"      "}
    <span className="text-pink-600">&lt;/form&gt;</span>
    {"\n"}

    {"    "}
    <span className="text-pink-600">&lt;/div&gt;</span>
    {"\n"}

    {"  "}){";"}{"\n"}
    <span className="text-gray-800">{"}"}</span>
    {"\n\n"}

    <span className="text-purple-600">export default</span>{" "}
    <span className="text-blue-600">AccessEvent</span>;
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
           <pre className="bg-gray-100 text-gray-800 p-4 rounded-lg mt-5 overflow-x-auto">
  <code>
    <span className="text-purple-600">import</span>{" "}
    React, {"{"} <span className="text-blue-600">useState</span> {"}"}{" "}
    <span className="text-purple-600">from</span>{" "}
    <span className="text-orange-500">"react"</span>;
    {"\n\n"}

    <span className="text-purple-600">function</span>{" "}
    <span className="text-blue-600">PreventForm</span>
    <span className="text-gray-800">() {"{"}</span>
    {"\n\n"}

    {"  "}
    <span className="text-purple-600">const</span>{" "}
    <span className="text-gray-800">[</span>
    <span className="text-blue-600">value</span>
    <span className="text-gray-800">, </span>
    <span className="text-blue-600">setValue</span>
    <span className="text-gray-800">] = </span>
    <span className="text-yellow-600">useState</span>
    <span className="text-gray-800">(</span>
    <span className="text-orange-500">""</span>
    <span className="text-gray-800">);</span>
    {"\n"}

    {"  "}
    <span className="text-gray-800">[</span>
    <span className="text-blue-600">result</span>
    <span className="text-gray-800">, </span>
    <span className="text-blue-600">setResult</span>
    <span className="text-gray-800">] = </span>
    <span className="text-yellow-600">useState</span>
    <span className="text-gray-800">(</span>
    <span className="text-orange-500">""</span>
    <span className="text-gray-800">);</span>
    {"\n\n"}

    {"  "}
    <span className="text-purple-600">const</span>{" "}
    <span className="text-yellow-600">handleSubmit</span>{" "}
    <span className="text-gray-800">= (event) =&gt; {"{"}</span>{"\n"}
    {"    "}
    <span className="text-yellow-600">event.preventDefault</span>
    <span className="text-gray-800">();</span>
    {"\n\n"}

    {"    "}
    <span className="text-purple-600">if</span>{" "}
    <span className="text-gray-800">(!value.trim()) {"{"}</span>
    {"\n"}
    {"      "}
    <span className="text-yellow-600">alert</span>
    <span className="text-gray-800">(</span>
    <span className="text-orange-500">"Input cannot be empty!"</span>
    <span className="text-gray-800">);</span>
    {"\n"}
    {"    "}
    <span className="text-gray-800">{"}"} </span>
    <span className="text-purple-600">else</span>{" {"}
    {"\n"}
    {"      "}
    <span className="text-yellow-600">setResult</span>
    <span className="text-gray-800">(value);</span>
    {"\n"}
    {"      "}
    <span className="text-yellow-600">alert</span>
    <span className="text-gray-800">(</span>
    <span className="text-orange-500">"Form submitted successfully!"</span>
    <span className="text-gray-800">);</span>
    {"\n"}
    {"    "}
    <span className="text-gray-800">{"}"}</span>
    {"\n"}

    {"  "}
    <span className="text-gray-800">{"}"}</span>;
    {"\n\n"}

    {"  "}
    <span className="text-purple-600">const</span>{" "}
    <span className="text-yellow-600">handleChange</span>{" "}
    <span className="text-gray-800">= (event) =&gt; {"{"}</span>
    {"\n"}
    {"    "}
    <span className="text-yellow-600">setValue</span>
    <span className="text-gray-800">(event.target.value);</span>
    {"\n"}
    {"    "}
    <span className="text-yellow-600">setResult</span>
    <span className="text-gray-800">(</span>
    <span className="text-orange-500">""</span>
    <span className="text-gray-800">);</span>
    {"\n"}
    {"  "}
    <span className="text-gray-800">{"}"}</span>;
    {"\n\n"}

    {"  "}
    <span className="text-purple-600">return</span>{" ("}
    {"\n"}

    {"    "}
    <span className="text-pink-600">&lt;div&gt;</span>
    {"\n"}

    {"      "}
    <span className="text-pink-600">&lt;form</span>{" "}
    <span className="text-purple-600">onSubmit</span>
    <span className="text-gray-800">=</span>
    <span className="text-gray-800">{`{handleSubmit}`}</span>
    <span className="text-pink-600">&gt;</span>
    {"\n"}

    {"        "}
    <span className="text-pink-600">&lt;label&gt;</span>
    Enter Text:
    <span className="text-pink-600">&lt;/label&gt;</span>
    {"\n"}

    {"        "}
    <span className="text-pink-600">&lt;input</span>{" "}
    <span className="text-purple-600">type</span>
    <span className="text-gray-800">=</span>
    <span className="text-orange-500">"text"</span>{" "}
    <span className="text-purple-600">value</span>
    <span className="text-gray-800">=</span>
    <span className="text-gray-800">{`{value}`}</span>{" "}
    <span className="text-purple-600">onChange</span>
    <span className="text-gray-800">=</span>
    <span className="text-gray-800">{`{handleChange}`}</span>
    <span className="text-pink-600"> /&gt;</span>
    {"\n\n"}

    {"        "}
    <span className="text-pink-600">&lt;button</span>{" "}
    <span className="text-purple-600">type</span>
    <span className="text-gray-800">=</span>
    <span className="text-orange-500">"submit"</span>
    <span className="text-pink-600">&gt;</span>
    Submit
    <span className="text-pink-600">&lt;/button&gt;</span>
    {"\n"}

    {"      "}
    <span className="text-pink-600">&lt;/form&gt;</span>
    {"\n\n"}

    {"      "}
    <span className="text-pink-600">&lt;p&gt;</span>
    Result: {"{"}
    <span className="text-blue-600">result</span>
    {"}"}
    <span className="text-pink-600">&lt;/p&gt;</span>
    {"\n"}

    {"    "}
    <span className="text-pink-600">&lt;/div&gt;</span>
    {"\n"}

    {"  "}){";"}{"\n"}
    <span className="text-gray-800">{"}"}</span>
    {"\n\n"}

    <span className="text-purple-600">export default</span>{" "}
    <span className="text-blue-600">PreventForm</span>;
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