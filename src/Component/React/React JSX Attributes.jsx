import React from "react";

const ReactAttributes = () => {
    return (
        <div className="max-w-4xl p-6 mt-10">
            <h1 className="text-3xl text-blue-500 font-semibold mb-3">React JSX Attributes</h1>
            <p>JSX lets you add attributes to HTML elements, but there are some key differences.</p>
             <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">class = className</h2>
             <p>The class attribute is commonly used in HTML, but since JSX is rendered as JavaScript and class is a reserved word, it cannot be used. JSX solves this by using className instead, which is automatically converted into class when rendered.</p>
            <h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">Example</h2>
            <p>Always use className in JSX instead of the HTML class attribute.</p>
           <pre className="text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5">
            <code>
                {`function Car() {
  return (
    <h1 className="myclass">Hello World</h1>
  );
}`}
            </code>
           </pre>


           <h1 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Expressions as Attributes</h1>
          <p>You can use JavaScript expressions as attribute values, which is helpful for creating dynamic attributes.</p>
         <h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">Example</h2>
         <p>Set attribute values using JavaScript expressions.</p>
         <pre className="text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5">
            <code>
                {`function Car() {
  const x = "myclass";
  return (
    <h1 className={x}>Hello World</h1>
  );
}`}
            </code>
         </pre>

         <p className="mt-5">Keep in mind that attribute values using JavaScript expressions should not be wrapped in quotes. If you use quotes, JSX treats them as string literals instead of evaluating the expression.</p>
        
        <h1 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">camelCase Event Attributes</h1>
        <p>JSX event handlers are written in camelCase.</p>
        <h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">Example</h2>
        <p>Use camelCase syntax when naming event attributes in JSX.</p>
        <pre className="text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5">
            <code>
                {`function Car() {
  const myfunc = () => {
    alert('Hello World');
  };
  return (
    <button onClick={myfunc}>Click me</button>
  );
}`}
            </code>
        </pre>

        <h1 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Boolean Attributes</h1>
       <p>If you give a JSX attribute no value, it’s treated as true; to make it false, you must pass it as a JavaScript expression.</p>
       <h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">Example</h2>
       <p>In JSX, setting a boolean attribute to true (or just including it) will disable the button, e.g., <button disabled>…</button>.</p>
      <pre className="text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5">
        <code>
            {`<button onClick={myfunc} disabled>Click me</button>`}
        </code>
      </pre>

      <h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">Example</h2>
      <p>If the disabled attribute is set to true in JSX, the button will be disabled just like when the attribute is present with no value.</p>
      <pre className="text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5">
        <code>
            {`<button onClick={myfunc} disabled={true}>Click me</button>`}
        </code>
      </pre>

      <h2 className="text-gray-800 text-2xl font-semibold mt-5 mb-3">Example</h2>
      <p>If you set the attribute to false in JSX, the button will not be disabled:</p>
      <pre className="text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5">
        <code>
            {`<button onClick={myfunc} disabled={false}>Click me</button>`}
        </code>
      </pre>

      <h1 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">The style Attribute</h1>
     <p>The style attribute in JSX must be given a JavaScript object where CSS property names are written in camelCase, not a traditional CSS string.</p>
     <h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">Example</h2>
     <p>Apply the style attribute to an element.</p>
     <pre className="text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5">
        <code>
            {`function Car() {
  const mystyles = {
    color: "red",
    fontSize: "20px",
    backgroundColor: "lightyellow",
  };

  return (
    <>
      <h1 style={mystyles}>My car</h1>
    </>
  );
}`}
        </code>
     </pre>

     <p className="mt-5 mb-3">Take note of two points in the example above.</p>
     <p className="mb-3">The style definitions are kept inside a JavaScript object.</p>
     <p>JSX requires CSS properties to be written in camelCase, so fontSize replaces font‑size.</p>
     
     <p className="mt-5">This highlights a key difference between HTML and JSX.</p>
        
  </div>

    )
}

export default ReactAttributes;