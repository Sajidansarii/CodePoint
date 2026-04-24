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
		<pre className="bg-gray-100 text-gray-800 p-4 rounded-lg mt-5 overflow-x-auto">
  <code>
    <span className="text-pink-600">&lt;Element</span>{" "}
    <span className="text-purple-600">onBlur</span>
    <span className="text-gray-800">=</span>
    <span className="text-gray-800">{`{handleBlur}`}</span>{" "}
    <span className="text-pink-600">/&gt;</span>
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
          <pre className="bg-gray-100 text-gray-800 p-4 rounded-lg mt-5 overflow-x-auto">
  <code>
    <span className="text-purple-600">import</span>{" "}
    React, {"{"} <span className="text-blue-600">useState</span> {"}"}{" "}
    <span className="text-purple-600">from</span>{" "}
    <span className="text-orange-500">"react"</span>;
    {"\n\n"}

    <span className="text-purple-600">function</span>{" "}
    <span className="text-blue-600">App</span>
    <span className="text-gray-800">() {"{"}</span>{"\n\n"}

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
    <span className="text-yellow-600">handleBlur</span>{" "}
    <span className="text-gray-800">= () =&gt; {"{"}</span>{"\n"}
    {"    "}
    <span className="text-yellow-600">console</span>
    <span className="text-gray-800">.</span>
    <span className="text-blue-600">log</span>
    <span className="text-gray-800">(</span>
    <span className="text-orange-500">"Input blurred"</span>
    <span className="text-gray-800">);</span>{"\n"}
    {"  "}
    <span className="text-gray-800">{"}"}</span>;
    {"\n\n"}

    {"  "}
    <span className="text-purple-600">return</span>{" ("}{"\n"}

    {"    "}
    <span className="text-pink-600">&lt;form action=""&gt;</span>{"\n"}

    {"      "}
    <span className="text-pink-600">&lt;label</span>{" "}
    <span className="text-purple-600">htmlFor</span>
    <span className="text-gray-800">=</span>
    <span className="text-orange-500">""</span>
    <span className="text-pink-600">&gt;</span>
    Name:
    <span className="text-pink-600">&lt;/label&gt;</span>{"\n\n"}

    {"      "}
    <span className="text-pink-600">&lt;input</span>{"\n"}

    {"        "}
    <span className="text-purple-600">type</span>
    <span className="text-gray-800">=</span>
    <span className="text-orange-500">"text"</span>{"\n"}

    {"        "}
    <span className="text-purple-600">value</span>
    <span className="text-gray-800">=</span>
    <span className="text-gray-800">{`{value}`}</span>{"\n"}

    {"        "}
    <span className="text-purple-600">placeholder</span>
    <span className="text-gray-800">=</span>
    <span className="text-orange-500">'Write Your Name'</span>{"\n"}

    {"        "}
    <span className="text-purple-600">onChange</span>
    <span className="text-gray-800">=</span>
    <span className="text-gray-800">{`{(e) => setValue(e.target.value)}`}</span>{"\n"}

    {"        "}
    <span className="text-purple-600">onBlur</span>
    <span className="text-gray-800">=</span>
    <span className="text-gray-800">{`{handleBlur}`}</span>{"\n"}

    {"      "}
    <span className="text-pink-600">/&gt;</span>{"\n"}

    {"    "}
    <span className="text-pink-600">&lt;/form&gt;</span>{"\n"}

    {"  "}){";"}{"\n"}
    <span className="text-gray-800">{"}"}</span>
    {"\n\n"}

    <span className="text-purple-600">export default</span>{" "}
    <span className="text-blue-600">App</span>;
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
           <pre className="bg-gray-100 text-gray-800 p-4 rounded-lg mt-5 overflow-x-auto">
  <code>
    <span className="text-purple-600">import</span>{" "}
    React, {"{"} <span className="text-blue-600">useState</span> {"}"}{" "}
    <span className="text-purple-600">from</span>{" "}
    <span className="text-orange-500">"react"</span>;
    {"\n\n"}

    <span className="text-purple-600">function</span>{" "}
    <span className="text-blue-600">PreventDefault</span>
    <span className="text-gray-800">() {"{"}</span>{"\n\n"}

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
    <span className="text-blue-600">message</span>
    <span className="text-gray-800">, </span>
    <span className="text-blue-600">setMessage</span>
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
    <span className="text-blue-600">event</span>
    <span className="text-gray-800">.</span>
    <span className="text-yellow-600">preventDefault</span>
    <span className="text-gray-800">();</span>{"\n\n"}

    {"    "}
    <span className="text-purple-600">if</span>{" "}
    <span className="text-gray-800">(!</span>
    <span className="text-blue-600">value</span>
    <span className="text-gray-800">.</span>
    <span className="text-yellow-600">trim</span>
    <span className="text-gray-800">()) {"{"}</span>{"\n"}
    {"      "}
    <span className="text-yellow-600">setMessage</span>
    <span className="text-gray-800">(</span>
    <span className="text-orange-500">"Please enter something in the input field!"</span>
    <span className="text-gray-800">);</span>{"\n"}
    {"    "}
    <span className="text-gray-800">{"}"} </span>
    <span className="text-purple-600">else</span>{" {"}{"\n"}
    {"      "}
    <span className="text-yellow-600">setMessage</span>
    <span className="text-gray-800">(</span>
    <span className="text-orange-500">`Form submitted successfully with value: `</span>
    <span className="text-gray-800"> + value);</span>{"\n"}
    {"    "}
    <span className="text-gray-800">{"}"}</span>{"\n"}
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
    {"    "}
    <span className="text-yellow-600">setMessage</span>
    <span className="text-gray-800">("");</span>{"\n"}
    {"  "}
    <span className="text-gray-800">{"}"}</span>;
    {"\n\n"}

    {"  "}
    <span className="text-purple-600">return</span>{" ("}{"\n"}

    {"    "}
    <span className="text-pink-600">&lt;div&gt;</span>{"\n"}
    {"      "}
    <span className="text-pink-600">&lt;h2&gt;</span>
    Form with Prevented Default Submission
    <span className="text-pink-600">&lt;/h2&gt;</span>{"\n\n"}

    {"      "}
    <span className="text-pink-600">&lt;form</span>{" "}
    <span className="text-purple-600">onSubmit</span>
    <span className="text-gray-800">=</span>
    <span className="text-gray-800">{`{handleSubmit}`}</span>
    <span className="text-pink-600">&gt;</span>{"\n"}

    {"        "}
    <span className="text-pink-600">&lt;label&gt;</span>{"\n"}

    {"          "}Enter Text:
    {"\n"}

    {"          "}
    <span className="text-pink-600">&lt;input</span>{"\n"}

    {"            "}
    <span className="text-purple-600">type</span>
    <span className="text-gray-800">=</span>
    <span className="text-orange-500">"text"</span>{"\n"}

    {"            "}
    <span className="text-purple-600">value</span>
    <span className="text-gray-800">=</span>
    <span className="text-gray-800">{`{value}`}</span>{"\n"}

    {"            "}
    <span className="text-purple-600">onChange</span>
    <span className="text-gray-800">=</span>
    <span className="text-gray-800">{`{handleChange}`}</span>{"\n"}

    {"            "}
    <span className="text-purple-600">placeholder</span>
    <span className="text-gray-800">=</span>
    <span className="text-orange-500">"Type something"</span>{"\n"}

    {"          "}
    <span className="text-pink-600">/&gt;</span>{"\n"}

    {"        "}
    <span className="text-pink-600">&lt;/label&gt;</span>{"\n"}

    {"        "}
    <span className="text-pink-600">&lt;button</span>{" "}
    <span className="text-purple-600">type</span>
    <span className="text-gray-800">=</span>
    <span className="text-orange-500">"submit"</span>
    <span className="text-pink-600">&gt;</span>
    Submit
    <span className="text-pink-600">&lt;/button&gt;</span>{"\n"}

    {"      "}
    <span className="text-pink-600">&lt;/form&gt;</span>{"\n\n"}

    {"      "}
    <span className="text-gray-500">{`{/* Display the message based on form submission */}`}</span>
    {"\n"}

    {"      "}
    <span className="text-gray-800">{`{message && <p>{message}</p>}`}</span>
    {"\n"}

    {"    "}
    <span className="text-pink-600">&lt;/div&gt;</span>{"\n"}

    {"  "}){";"}{"\n"}
    <span className="text-gray-800">{"}"}</span>
    {"\n\n"}

    <span className="text-purple-600">export default</span>{" "}
    <span className="text-blue-600">PreventDefault</span>;
  </code>
</pre>
        
		<p className="mt-5">This React component stops the form from reloading the page on submission by using event.preventDefault(). It checks the input field when the form is submitted, showing an error message if it’s empty or a success message with the entered value. The input is controlled with state, and the message is cleared as soon as the user starts typing.</p>
			
			<h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Accessing the Event Object</h2>
            <p>In React, the onBlur event handler receives an event object that contains details about the focus change. This object lets you access information like which element lost focus, the previous element, and other related data.</p>
         <pre className="bg-gray-100 text-gray-800 p-4 rounded-lg mt-5 overflow-x-auto">
  <code>
    <span className="text-purple-600">import</span>{" "}
    React, {"{"} <span className="text-blue-600">useState</span> {"}"}{" "}
    <span className="text-purple-600">from</span>{" "}
    <span className="text-orange-500">"react"</span>;
    {"\n\n"}

    <span className="text-purple-600">function</span>{" "}
    <span className="text-blue-600">AccessEvent</span>
    <span className="text-gray-800">() {"{"}</span>{"\n\n"}

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
    <span className="text-yellow-600">handleChange</span>{" "}
    <span className="text-gray-800">= (event) =&gt; {"{"}</span>{"\n"}

    {"    "}
    <span className="text-yellow-600">console</span>
    <span className="text-gray-800">.</span>
    <span className="text-blue-600">log</span>
    <span className="text-gray-800">(</span>
    <span className="text-orange-500">"Event Object:"</span>
    <span className="text-gray-800">, event);</span>{"\n"}

    {"    "}
    <span className="text-yellow-600">console</span>
    <span className="text-gray-800">.</span>
    <span className="text-blue-600">log</span>
    <span className="text-gray-800">(</span>
    <span className="text-orange-500">"Input Value:"</span>
    <span className="text-gray-800">, event.target.value);</span>{"\n"}

    {"    "}
    <span className="text-yellow-600">setValue</span>
    <span className="text-gray-800">(event.target.value);</span>{"\n"}

    {"  "}
    <span className="text-gray-800">{"}"}</span>;
    {"\n\n"}

    {"  "}
    <span className="text-purple-600">return</span>{" ("}{"\n"}

    {"    "}
    <span className="text-pink-600">&lt;div&gt;</span>{"\n"}

    {"      "}
    <span className="text-pink-600">&lt;h2&gt;</span>
    Access Event Object Example
    <span className="text-pink-600">&lt;/h2&gt;</span>{"\n\n"}

    {"      "}
    <span className="text-pink-600">&lt;input</span>{"\n"}

    {"        "}
    <span className="text-purple-600">type</span>
    <span className="text-gray-800">=</span>
    <span className="text-orange-500">"text"</span>{"\n"}

    {"        "}
    <span className="text-purple-600">value</span>
    <span className="text-gray-800">=</span>
    <span className="text-gray-800">{`{value}`}</span>{"\n"}

    {"        "}
    <span className="text-purple-600">onChange</span>
    <span className="text-gray-800">=</span>
    <span className="text-gray-800">{`{handleChange}`}</span>{"\n"}

    {"        "}
    <span className="text-purple-600">placeholder</span>
    <span className="text-gray-800">=</span>
    <span className="text-orange-500">"Type something"</span>{"\n"}

    {"      "}
    <span className="text-pink-600">/&gt;</span>{"\n\n"}

    {"      "}
    <span className="text-pink-600">&lt;p&gt;</span>
    Input Value: {"{"}
    <span className="text-blue-600">value</span>
    {"}"}
    <span className="text-pink-600">&lt;/p&gt;</span>{"\n"}

    {"    "}
    <span className="text-pink-600">&lt;/div&gt;</span>{"\n"}

    {"  "}){";"}{"\n"}
    <span className="text-gray-800">{"}"}</span>
    {"\n\n"}

    <span className="text-purple-600">export default</span>{" "}
    <span className="text-blue-600">AccessEvent</span>;
  </code>
</pre>

			<p className="mt-5">The component captures and logs the event object and input value each time the user types. The handleChange function updates the component state using event.target.value and records the event details. The current value of the input is rendered below the input field.</p>
           
		   <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Using onBlur for Focus Validation</h2>
           <p>One typical application of the onBlur event is focus-based validation. This enables developers to verify user input, such as validating an email address, once the user moves focus away from the input field.</p>
         <pre className="bg-gray-100 text-gray-800 p-4 rounded-lg mt-5 overflow-x-auto">
  <code>
    <span className="text-purple-600">import</span>{" "}
    React, {"{"} <span className="text-blue-600">useState</span> {"}"}{" "}
    <span className="text-purple-600">from</span>{" "}
    <span className="text-orange-500">"react"</span>;
    {"\n\n"}

    <span className="text-purple-600">function</span>{" "}
    <span className="text-blue-600">FocusValidation</span>
    <span className="text-gray-800">() {"{"}</span>{"\n\n"}

    {"  "}
    <span className="text-purple-600">const</span>{" "}
    <span className="text-gray-800">[</span>
    <span className="text-blue-600">email</span>
    <span className="text-gray-800">, </span>
    <span className="text-blue-600">setEmail</span>
    <span className="text-gray-800">] = </span>
    <span className="text-yellow-600">useState</span>
    <span className="text-gray-800">(</span>
    <span className="text-orange-500">""</span>
    <span className="text-gray-800">);</span>
    {"\n"}

    {"  "}
    <span className="text-gray-800">[</span>
    <span className="text-blue-600">error</span>
    <span className="text-gray-800">, </span>
    <span className="text-blue-600">setError</span>
    <span className="text-gray-800">] = </span>
    <span className="text-yellow-600">useState</span>
    <span className="text-gray-800">(</span>
    <span className="text-orange-500">""</span>
    <span className="text-gray-800">);</span>
    {"\n\n"}

    {"  "}
    <span className="text-purple-600">const</span>{" "}
    <span className="text-yellow-600">handleBlur</span>{" "}
    <span className="text-gray-800">= () =&gt; {"{"}</span>{"\n"}

    {"    "}
    <span className="text-purple-600">const</span>{" "}
    <span className="text-blue-600">regex</span>{" "}
    <span className="text-gray-800">= </span>
    <span className="text-orange-500">/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,6}$/</span>;
    {"\n\n"}

    {"    "}
    <span className="text-purple-600">if</span>{" "}
    <span className="text-gray-800">(!</span>
    <span className="text-blue-600">regex</span>
    <span className="text-gray-800">.</span>
    <span className="text-yellow-600">test</span>
    <span className="text-gray-800">(email)) {"{"}</span>{"\n"}

    {"      "}
    <span className="text-yellow-600">setError</span>
    <span className="text-gray-800">(</span>
    <span className="text-orange-500">"Please enter a valid email."</span>
    <span className="text-gray-800">);</span>{"\n"}

    {"    "}
    <span className="text-gray-800">{"}"} </span>
    <span className="text-purple-600">else</span>{" {"}{"\n"}

    {"      "}
    <span className="text-yellow-600">setError</span>
    <span className="text-gray-800">(</span>
    <span className="text-orange-500">""</span>
    <span className="text-gray-800">);</span>{"\n"}

    {"    "}
    <span className="text-gray-800">{"}"}</span>{"\n"}

    {"  "}
    <span className="text-gray-800">{"}"}</span>;
    {"\n\n"}

    {"  "}
    <span className="text-purple-600">const</span>{" "}
    <span className="text-yellow-600">handleChange</span>{" "}
    <span className="text-gray-800">= (event) =&gt; {"{"}</span>{"\n"}
    {"    "}
    <span className="text-yellow-600">setEmail</span>
    <span className="text-gray-800">(event.target.value);</span>{"\n"}
    {"  "}
    <span className="text-gray-800">{"}"}</span>;
    {"\n\n"}

    {"  "}
    <span className="text-purple-600">return</span>{" ("}{"\n"}

    {"    "}
    <span className="text-pink-600">&lt;div&gt;</span>{"\n"}

    {"      "}
    <span className="text-pink-600">&lt;input</span>{"\n"}

    {"        "}
    <span className="text-purple-600">type</span>
    <span className="text-gray-800">=</span>
    <span className="text-orange-500">"email"</span>{"\n"}

    {"        "}
    <span className="text-purple-600">value</span>
    <span className="text-gray-800">=</span>
    <span className="text-gray-800">{`{email}`}</span>{"\n"}

    {"        "}
    <span className="text-purple-600">onChange</span>
    <span className="text-gray-800">=</span>
    <span className="text-gray-800">{`{handleChange}`}</span>{"\n"}

    {"        "}
    <span className="text-purple-600">onBlur</span>
    <span className="text-gray-800">=</span>
    <span className="text-gray-800">{`{handleBlur}`}</span>{"\n"}

    {"      "}
    <span className="text-pink-600">/&gt;</span>{"\n\n"}

    {"      "}
    <span className="text-gray-800">{`{error && <p style={{ color: "red" }}>{error}</p>}`}</span>
    {"\n"}

    {"    "}
    <span className="text-pink-600">&lt;/div&gt;</span>{"\n"}

    {"  "}){";"}{"\n"}
    <span className="text-gray-800">{"}"}</span>
    {"\n\n"}

    <span className="text-purple-600">export default</span>{" "}
    <span className="text-blue-600">FocusValidation</span>;
  </code>
</pre>


		   <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Using onBlur for Toggling Edit Modes</h2>
            <p>The onBlur event can be used to switch a UI component between edit and view modes. When a user finishes editing a field, it automatically returns to display mode.</p>
           <pre className="bg-gray-100 text-gray-800 p-4 rounded-lg mt-5 overflow-x-auto">
  <code>
    <span className="text-purple-600">import</span>{" "}
    React, {"{"} <span className="text-blue-600">useState</span> {"}"}{" "}
    <span className="text-purple-600">from</span>{" "}
    <span className="text-orange-500">"react"</span>;
    {"\n\n"}

    <span className="text-purple-600">function</span>{" "}
    <span className="text-blue-600">ToggleEdit</span>
    <span className="text-gray-800">() {"{"}</span>{"\n\n"}

    {"  "}
    <span className="text-purple-600">const</span>{" "}
    <span className="text-gray-800">[</span>
    <span className="text-blue-600">isEditing</span>
    <span className="text-gray-800">, </span>
    <span className="text-blue-600">setIsEditing</span>
    <span className="text-gray-800">] = </span>
    <span className="text-yellow-600">useState</span>
    <span className="text-gray-800">(</span>
    <span className="text-blue-600">false</span>
    <span className="text-gray-800">);</span>
    {"\n"}

    {"  "}
    <span className="text-purple-600">const</span>{" "}
    <span className="text-gray-800">[</span>
    <span className="text-blue-600">value</span>
    <span className="text-gray-800">, </span>
    <span className="text-blue-600">setValue</span>
    <span className="text-gray-800">] = </span>
    <span className="text-yellow-600">useState</span>
    <span className="text-gray-800">(</span>
    <span className="text-orange-500">"Click to Edit"</span>
    <span className="text-gray-800">);</span>
    {"\n\n"}

    {"  "}
    <span className="text-purple-600">const</span>{" "}
    <span className="text-yellow-600">handleBlur</span>{" "}
    <span className="text-gray-800">= () =&gt; {"{"}</span>{"\n"}
    {"    "}
    <span className="text-yellow-600">setIsEditing</span>
    <span className="text-gray-800">(</span>
    <span className="text-blue-600">false</span>
    <span className="text-gray-800">);</span>{"\n"}
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
    <span className="text-purple-600">return</span>{" ("}{"\n"}

    {"    "}
    <span className="text-pink-600">&lt;div&gt;</span>{"\n"}

    {"      "}
    <span className="text-gray-800">{`{isEditing ? (`}</span>{"\n"}

    {"        "}
    <span className="text-pink-600">&lt;input</span>{"\n"}

    {"          "}
    <span className="text-purple-600">type</span>
    <span className="text-gray-800">=</span>
    <span className="text-orange-500">"text"</span>{"\n"}

    {"          "}
    <span className="text-purple-600">value</span>
    <span className="text-gray-800">=</span>
    <span className="text-gray-800">{`{value}`}</span>{"\n"}

    {"          "}
    <span className="text-purple-600">onChange</span>
    <span className="text-gray-800">=</span>
    <span className="text-gray-800">{`{handleChange}`}</span>{"\n"}

    {"          "}
    <span className="text-purple-600">onBlur</span>
    <span className="text-gray-800">=</span>
    <span className="text-gray-800">{`{handleBlur}`}</span>{"\n"}

    {"        "}
    <span className="text-pink-600">/&gt;</span>{"\n"}

    {"      "}
    <span className="text-gray-800">{`) : (`}</span>{"\n"}

    {"        "}
    <span className="text-pink-600">&lt;p</span>{" "}
    <span className="text-purple-600">onClick</span>
    <span className="text-gray-800">=</span>
    <span className="text-gray-800">{`() => setIsEditing(true)`}</span>
    <span className="text-pink-600">&gt;</span>
    {"{value}"}
    <span className="text-pink-600">&lt;/p&gt;</span>{"\n"}

    {"      "}
    <span className="text-gray-800">{"})"}</span>{"\n"}

    {"    "}
    <span className="text-pink-600">&lt;/div&gt;</span>{"\n"}

    {"  "}){";"}{"\n"}
    <span className="text-gray-800">{"}"}</span>
    {"\n\n"}

    <span className="text-purple-600">export default</span>{" "}
    <span className="text-blue-600">ToggleEdit</span>;
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