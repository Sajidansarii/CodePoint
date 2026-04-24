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
       <pre className="bg-gray-100 text-gray-800 p-4 rounded-lg mt-5 overflow-x-auto">
  <code>
    <span className="text-purple-600">function</span>{" "}
    <span className="text-blue-600">Car</span>
    <span className="text-gray-800">() {"{"}</span>{"\n"}
    
    {"  "}
    <span className="text-purple-600">return</span>{" ("}{"\n"}
    
    {"    "}
    <span className="text-pink-600">&lt;h1</span>{" "}
    <span className="text-purple-600">className</span>
    <span className="text-gray-800">=</span>
    <span className="text-orange-500">"myclass"</span>
    <span className="text-pink-600">&gt;</span>
    Hello World
    <span className="text-pink-600">&lt;/h1&gt;</span>{"\n"}
    
    {"  "}){"\n"}
    <span className="text-gray-800">{"}"}</span>
  </code>
</pre>


           <h1 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Expressions as Attributes</h1>
          <p>You can use JavaScript expressions as attribute values, which is helpful for creating dynamic attributes.</p>
         <h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">Example</h2>
         <p>Set attribute values using JavaScript expressions.</p>
        <pre className="bg-gray-100 text-gray-800 p-4 rounded-lg mt-5 overflow-x-auto">
  <code>
    <span className="text-purple-600">function</span>{" "}
    <span className="text-blue-600">Car</span>
    <span className="text-gray-800">() {"{"}</span>{"\n\n"}

    {"  "}
    <span className="text-purple-600">const</span>{" "}
    <span className="text-blue-600">x</span>{" "}
    <span className="text-gray-800">=</span>{" "}
    <span className="text-orange-500">"myclass"</span>;
    {"\n\n"}

    {"  "}
    <span className="text-purple-600">return</span>{" ("}{"\n"}

    {"    "}
    <span className="text-pink-600">&lt;h1</span>{" "}
    <span className="text-purple-600">className</span>
    <span className="text-gray-800">=</span>
    <span className="text-gray-900">{"{x}"}</span>
    <span className="text-pink-600">&gt;</span>
    Hello World
    <span className="text-pink-600">&lt;/h1&gt;</span>{"\n"}

    {"  "}){"\n"}
    <span className="text-gray-800">{"}"}</span>
  </code>
</pre>

         <p className="mt-5">Keep in mind that attribute values using JavaScript expressions should not be wrapped in quotes. If you use quotes, JSX treats them as string literals instead of evaluating the expression.</p>
        
        <h1 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">camelCase Event Attributes</h1>
        <p>JSX event handlers are written in camelCase.</p>
        <h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">Example</h2>
        <p>Use camelCase syntax when naming event attributes in JSX.</p>
      <pre className="bg-gray-100 text-gray-800 p-4 rounded-lg mt-5 overflow-x-auto">
  <code>
    <span className="text-purple-600">function</span>{" "}
    <span className="text-blue-600">Car</span>
    <span className="text-gray-800">() {"{"}</span>{"\n\n"}

    {"  "}
    <span className="text-purple-600">const</span>{" "}
    <span className="text-blue-600">x</span>{" "}
    <span className="text-gray-800">=</span>{" "}
    <span className="text-orange-500">"myclass"</span>;
    {"\n\n"}

    {"  "}
    <span className="text-purple-600">return</span>{" ("}{"\n"}

    {"    "}
    <span className="text-pink-600">&lt;h1</span>{" "}
    <span className="text-purple-600">className</span>
    <span className="text-gray-800">=</span>
    <span className="text-gray-900">{"{x}"}</span>
    <span className="text-pink-600">&gt;</span>
    Hello World
    <span className="text-pink-600">&lt;/h1&gt;</span>{"\n"}

    {"  "}){"\n"}
    <span className="text-gray-800">{"}"}</span>
  </code>
</pre>

        <h1 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Boolean Attributes</h1>
       <p>If you give a JSX attribute no value, it’s treated as true; to make it false, you must pass it as a JavaScript expression.</p>
       <h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">Example</h2>
       <p>In JSX, setting a boolean attribute to true (or just including it) will disable the button, e.g., <button disabled>…</button>.</p>
    <pre className="bg-gray-100 text-gray-800 p-4 rounded-lg mt-5 overflow-x-auto">
  <code>
    <span className="text-pink-600">&lt;button</span>{" "}
    <span className="text-purple-600">onClick</span>
    <span className="text-gray-800">=</span>
    <span className="text-gray-900">{"{myfunc}"}</span>{" "}
    <span className="text-purple-600">disabled</span>
    <span className="text-pink-600">&gt;</span>
    Click me
    <span className="text-pink-600">&lt;/button&gt;</span>
  </code>
</pre>

      <h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">Example</h2>
      <p>If the disabled attribute is set to true in JSX, the button will be disabled just like when the attribute is present with no value.</p>
   <pre className="bg-gray-100 text-gray-800 p-4 rounded-lg mt-5 overflow-x-auto">
  <code>
    <span className="text-pink-600">&lt;button</span>{" "}
    <span className="text-purple-600">onClick</span>
    <span className="text-gray-800">=</span>
    <span className="text-gray-900">{"{myfunc}"}</span>{" "}
    <span className="text-purple-600">disabled</span>
    <span className="text-gray-800">=</span>
    <span className="text-gray-900">{"{true}"}</span>
    <span className="text-pink-600">&gt;</span>
    Click me
    <span className="text-pink-600">&lt;/button&gt;</span>
  </code>
</pre>

      <h2 className="text-gray-800 text-2xl font-semibold mt-5 mb-3">Example</h2>
      <p>If you set the attribute to false in JSX, the button will not be disabled:</p>
     <pre className="bg-gray-100 text-gray-800 p-4 rounded-lg mt-5 overflow-x-auto">
  <code>
    <span className="text-pink-600">&lt;button</span>{" "}
    <span className="text-purple-600">onClick</span>
    <span className="text-gray-800">=</span>
    <span className="text-gray-900">{"{myfunc}"}</span>{" "}
    <span className="text-purple-600">disabled</span>
    <span className="text-gray-800">=</span>
    <span className="text-gray-900">{"{false}"}</span>
    <span className="text-pink-600">&gt;</span>
    Click me
    <span className="text-pink-600">&lt;/button&gt;</span>
  </code>
</pre>

      <h1 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">The style Attribute</h1>
     <p>The style attribute in JSX must be given a JavaScript object where CSS property names are written in camelCase, not a traditional CSS string.</p>
     <h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">Example</h2>
     <p>Apply the style attribute to an element.</p>
     <pre className="bg-gray-100 text-gray-800 p-4 rounded-lg mt-5 overflow-x-auto">
  <code>
    <span className="text-purple-600">function</span>{" "}
    <span className="text-blue-600">Car</span>
    <span className="text-gray-800">() {"{"}</span>{"\n\n"}

    {"  "}
    <span className="text-purple-600">const</span>{" "}
    <span className="text-blue-600">mystyles</span>{" "}
    <span className="text-gray-800">= {"{"}</span>{"\n"}

    {"    "}
    <span className="text-red-500">color</span>
    <span className="text-gray-800">:</span>{" "}
    <span className="text-orange-500">"red"</span>
    <span className="text-gray-800">,</span>{"\n"}

    {"    "}
    <span className="text-red-500">fontSize</span>
    <span className="text-gray-800">:</span>{" "}
    <span className="text-orange-500">"20px"</span>
    <span className="text-gray-800">,</span>{"\n"}

    {"    "}
    <span className="text-red-500">backgroundColor</span>
    <span className="text-gray-800">:</span>{" "}
    <span className="text-orange-500">"lightyellow"</span>
    <span className="text-gray-800">,</span>{"\n"}

    {"  "}
    <span className="text-gray-800">{"}"}</span>;
    {"\n\n"}

    {"  "}
    <span className="text-purple-600">return</span>{" ("}{"\n"}

    {"    "}
    <span className="text-pink-600">&lt;&gt;</span>{"\n"}

    {"      "}
    <span className="text-pink-600">&lt;h1</span>{" "}
    <span className="text-purple-600">style</span>
    <span className="text-gray-800">=</span>
    <span className="text-gray-900">{"{mystyles}"}</span>
    <span className="text-pink-600">&gt;</span>
    My car
    <span className="text-pink-600">&lt;/h1&gt;</span>{"\n"}

    {"    "}
    <span className="text-pink-600">&lt;/&gt;</span>{"\n"}

    {"  "}){"\n"}
    <span className="text-gray-800">{"}"}</span>
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