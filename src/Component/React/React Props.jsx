import React from "react";

const ReactProps = () => {
    return (
        <div className="max-w-4xl p-6 mt-10">
            <h1 className="text-3xl text-blue-500 font-semibold mb-3">React Props</h1>
            <p>Props are values supplied to React components and are sent using HTML-like attributes.</p>
            
           <h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">Example</h2>
           <p>Include a brand prop when rendering the Car component.</p>
         <pre className="bg-gray-100 text-gray-800 p-4 rounded-lg mt-5 overflow-x-auto">
  <code>
    <span className="text-purple-600">createRoot</span>
    <span className="text-gray-800">(document.getElementById('root')).render(</span>
    {"\n"}
    {"  "}
    <span className="text-pink-600">&lt;Car</span>{" "}
    <span className="text-red-500">brand</span>
    <span className="text-gray-800">=</span>
    <span className="text-orange-500">"Ford"</span>
    <span className="text-pink-600"> /&gt;</span>
    {"\n"}
    <span className="text-gray-800">);</span>
  </code>
</pre>

           <p className="mt-5">The component gets the argument through a props <span className="text-red-400">object</span>.</p>
          <h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">Example</h2>
         <p>Access the <span className="text-red-400">brand</span> prop inside the <span className="text-red-400">Car</span> component.</p>
        <pre className="bg-gray-100 text-gray-800 p-4 rounded-lg mt-5 overflow-x-auto">
  <code>
    <span className="text-purple-600">function</span>{" "}
    <span className="text-blue-600">Car</span>
    <span className="text-gray-800">(props) {"{"}</span>
    {"\n"}
    {"  "}
    <span className="text-purple-600">return</span>{" ("}
    {"\n"}
    {"    "}
    <span className="text-pink-600">&lt;h2&gt;</span>
    I am a {"{"}
    <span className="text-blue-600">props.brand</span>
    {"}"}!
    <span className="text-pink-600">&lt;/h2&gt;</span>
    {"\n"}
    {"  "}){";"}{"\n"}
    <span className="text-gray-800">{"}"}</span>
  </code>
</pre>

         <p className="mt-5">The object is usually called props, but you can name it whatever you like.</p>
         <h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">Example</h2>
        <p>You can name the props object <span className="text-red-400">myobj</span> instead of <span className="text-red-400">props</span>.</p>
       <pre className="bg-gray-100 text-gray-800 p-4 rounded-lg mt-5 overflow-x-auto">
  <code>
    <span className="text-purple-600">function</span>{" "}
    <span className="text-blue-600">Car</span>
    <span className="text-gray-800">(myobj) {"{"}</span>
    {"\n"}
    {"  "}
    <span className="text-purple-600">return</span>{" ("}
    {"\n"}
    {"    "}
    <span className="text-pink-600">&lt;h2&gt;</span>
    I am a {"{"}
    <span className="text-blue-600">myobj.brand</span>
    {"}"}!
    <span className="text-pink-600">&lt;/h2&gt;</span>
    {"\n"}
    {"  "}){";"}{"\n"}
    <span className="text-gray-800">{"}"}</span>
  </code>
</pre>


        <h1 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Pass Multiple Properties</h1>
        <p>Each attribute becomes a property of the object received by the Car component.</p>
        <h1 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">Example</h1>
        <p>Provide multiple attributes to the <span className="text-red-400">Car</span> component.</p>
        <pre className="bg-gray-100 text-gray-800 p-4 rounded-lg mt-5 overflow-x-auto">
  <code>
    <span className="text-purple-600">createRoot</span>
    <span className="text-gray-800">(document.getElementById('root')).render(</span>
    {"\n"}
    {"  "}
    <span className="text-pink-600">&lt;Car</span>{" "}
    <span className="text-red-500">brand</span>
    <span className="text-gray-800">=</span>
    <span className="text-orange-500">"Ford"</span>{" "}
    <span className="text-red-500">model</span>
    <span className="text-gray-800">=</span>
    <span className="text-orange-500">"Mustang"</span>{" "}
    <span className="text-red-500">color</span>
    <span className="text-gray-800">=</span>
    <span className="text-orange-500">"red"</span>
    <span className="text-pink-600"> /&gt;</span>
    {"\n"}
    <span className="text-gray-800">);</span>
  </code>
</pre>

        <p className="mt-5">The Car component gets all its attributes through the <span className="text-red-400">props</span> object.</p>
        <h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">Example</h2>
        <p>Access and utilize the props inside the Car component.</p>
      <pre className="bg-gray-100 text-gray-800 p-4 rounded-lg mt-5 overflow-x-auto">
  <code>
    <span className="text-purple-600">function</span>{" "}
    <span className="text-blue-600">Car</span>
    <span className="text-gray-800">(props) {"{"}</span>
    {"\n"}
    {"  "}
    <span className="text-purple-600">return</span>{" ("}
    {"\n"}
    {"    "}
    <span className="text-pink-600">&lt;h2&gt;</span>
    I am a {"{"}
    <span className="text-blue-600">props.color</span>
    {"}"} {"{"}
    <span className="text-blue-600">props.brand</span>
    {"}"} {"{"}
    <span className="text-blue-600">props.model</span>
    {"}"}!
    <span className="text-pink-600">&lt;/h2&gt;</span>
    {"\n"}
    {"  "}){";"}{"\n"}
    <span className="text-gray-800">{"}"}</span>
  </code>
</pre>


        <h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">Different Data Types</h2>
        <p>You can pass strings as quoted values, while numbers, objects, and variables must be wrapped in curly braces.</p>
        <h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">Example</h2>
        <p>Wrap numbers in curly braces so React treats them as numeric values.</p>
       <pre className="bg-gray-100 text-gray-800 p-4 rounded-lg mt-5 overflow-x-auto">
  <code>
    <span className="text-purple-600">createRoot</span>
    <span className="text-gray-800">(document.getElementById('root')).render(</span>
    {"\n"}
    {"  "}
    <span className="text-pink-600">&lt;Car</span>{" "}
    <span className="text-red-500">year</span>
    <span className="text-gray-800">=</span>
    <span className="text-gray-800">{"{"}1969{"}"}</span>
    <span className="text-pink-600"> /&gt;</span>
    {"\n"}
    <span className="text-gray-800">);</span>
  </code>
</pre>

        <h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">Example</h2>
        <p>Wrap variables in curly braces when sending them as props.</p>
       <pre className="bg-gray-100 text-gray-800 p-4 rounded-lg mt-5 overflow-x-auto">
  <code>
    <span className="text-purple-600">let</span>{" "}
    <span className="text-blue-600">x</span>{" "}
    <span className="text-gray-800">=</span>{" "}
    <span className="text-orange-500">"Ford"</span>;
    {"\n\n"}

    <span className="text-purple-600">createRoot</span>
    <span className="text-gray-800">(document.getElementById('root')).render(</span>
    {"\n"}
    {"  "}
    <span className="text-pink-600">&lt;Car</span>{" "}
    <span className="text-red-500">brand</span>
    <span className="text-gray-800">=</span>
    <span className="text-gray-800">{"{"}
    <span className="text-blue-600">x</span>
    {"}"}</span>
    <span className="text-pink-600"> /&gt;</span>
    {"\n"}
    <span className="text-gray-800">);</span>
  </code>
</pre>

        <h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">Example</h2>
        <p>Wrap objects and arrays in {'{}'} to pass them as props in React.</p>
      <pre className="bg-gray-100 text-gray-800 p-4 rounded-lg mt-5 overflow-x-auto">
  <code>
    <span className="text-purple-600">let</span>{" "}
    <span className="text-blue-600">x</span>{" "}
    <span className="text-gray-800">=</span>{" "}
    <span className="text-gray-800">[1964, 1965, 1966];</span>
    {"\n"}
    <span className="text-purple-600">let</span>{" "}
    <span className="text-blue-600">y</span>{" "}
    <span className="text-gray-800">=</span>{" "}
    <span className="text-gray-800">{"{"}name: "Ford", model: "Mustang"{"}"};</span>
    {"\n\n"}

    <span className="text-purple-600">createRoot</span>
    <span className="text-gray-800">(document.getElementById('root')).render(</span>
    {"\n"}
    {"  "}
    <span className="text-pink-600">&lt;Car</span>{" "}
    <span className="text-red-500">years</span>
    <span className="text-gray-800">=</span>
    <span className="text-gray-800">{"{"}
    <span className="text-blue-600">x</span>
    {"}"}</span>{" "}
    <span className="text-red-500">carinfo</span>
    <span className="text-gray-800">=</span>
    <span className="text-gray-800">{"{"}
    <span className="text-blue-600">y</span>
    {"}"}</span>
    <span className="text-pink-600"> /&gt;</span>
    {"\n"}
    <span className="text-gray-800">);</span>
  </code>
</pre>

        <h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">Object Props</h2>
       <p>React components recognize objects as objects, allowing property access via dot notation.</p>
       <h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">Example</h2>
       <p>Access an object’s properties using the . <span className="text-red-400">operator</span>.</p>
      <pre className="bg-gray-100 text-gray-800 p-4 rounded-lg mt-5 overflow-x-auto">
  <code>
    <span className="text-purple-600">function</span>{" "}
    <span className="text-blue-600">Car</span>
    <span className="text-gray-800">(props) {"{"}</span>
    {"\n"}
    {"  "}
    <span className="text-purple-600">return</span>{" ("}
    {"\n"}
    {"    "}
    <span className="text-pink-600">&lt;&gt;</span>
    {"\n"}
    {"      "}
    <span className="text-pink-600">&lt;h2&gt;</span>
    My {"{"}
    <span className="text-blue-600">props.carinfo.name</span>
    {"}"} {"{"}
    <span className="text-blue-600">props.carinfo.model</span>
    {"}"}!
    <span className="text-pink-600">&lt;/h2&gt;</span>
    {"\n"}

    {"      "}
    <span className="text-pink-600">&lt;p&gt;</span>
    It is {"{"}
    <span className="text-blue-600">props.carinfo.color</span>
    {"}"} and it is from {"{"}
    <span className="text-blue-600">props.carinfo.year</span>
    {"}"}!
    <span className="text-pink-600">&lt;/p&gt;</span>
    {"\n"}

    {"    "}
    <span className="text-pink-600">&lt;/&gt;</span>
    {"\n"}
    {"  "}){";"}{"\n"}
    <span className="text-gray-800">{"}"}</span>
    {"\n\n"}

    <span className="text-purple-600">const</span>{" "}
    <span className="text-blue-600">carInfo</span>{" "}
    <span className="text-gray-800">= {"{"}</span>
    {"\n"}
    {"  "}name: "Ford",
    {"\n"}
    {"  "}model: "Mustang",
    {"\n"}
    {"  "}color: "red",
    {"\n"}
    {"  "}year: 1969
    {"\n"}
    <span className="text-gray-800">{"}"};</span>
    {"\n\n"}

    <span className="text-purple-600">createRoot</span>
    <span className="text-gray-800">(document.getElementById('root')).render(</span>
    {"\n"}
    {"  "}
    <span className="text-pink-600">&lt;Car</span>{" "}
    <span className="text-red-500">carinfo</span>
    <span className="text-gray-800">=</span>
    <span className="text-gray-800">{"{"}
    <span className="text-blue-600">carInfo</span>
    {"}"}</span>
    <span className="text-pink-600"> /&gt;</span>
    {"\n"}
    <span className="text-gray-800">);</span>
  </code>
</pre>

       <h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">Array Props</h2>
       <p>Array values passed as props can be retrieved via indices.</p>
       <h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">Example</h2>
       <p>Access elements of an array using their index numbers.</p>
      <pre className="bg-gray-100 text-gray-800 p-4 rounded-lg mt-5 overflow-x-auto">
  <code>
    <span className="text-purple-600">function</span>{" "}
    <span className="text-blue-600">Car</span>
    <span className="text-gray-800">(props) {"{"}</span>
    {"\n"}
    {"  "}
    <span className="text-purple-600">return</span>{" ("}
    {"\n"}
    {"    "}
    <span className="text-pink-600">&lt;h2&gt;</span>
    My car is a {"{"}
    <span className="text-blue-600">props.carinfo[0]</span>
    {"}"} {"{"}
    <span className="text-blue-600">props.carinfo[1]</span>
    {"}"}!
    <span className="text-pink-600">&lt;/h2&gt;</span>
    {"\n"}
    {"  "}){";"}{"\n"}
    <span className="text-gray-800">{"}"}</span>
    {"\n\n"}

    <span className="text-purple-600">const</span>{" "}
    <span className="text-blue-600">carInfo</span>{" "}
    <span className="text-gray-800">= ["Ford", "Mustang"];</span>
    {"\n\n"}

    <span className="text-purple-600">createRoot</span>
    <span className="text-gray-800">(document.getElementById('root')).render(</span>
    {"\n"}
    {"  "}
    <span className="text-pink-600">&lt;Car</span>{" "}
    <span className="text-red-500">carinfo</span>
    <span className="text-gray-800">=</span>
    <span className="text-gray-800">{"{"}
    <span className="text-blue-600">carInfo</span>
    {"}"}</span>
    <span className="text-pink-600"> /&gt;</span>
    {"\n"}
    <span className="text-gray-800">);</span>
  </code>
</pre>

       <h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">Pass Props from Component to Component</h2>
       <p>You can send data between components using attributes as parameters.</p>
       <h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">Example</h2>
       <p>Pass the brand prop from the Garage component to Car.</p>
       <pre className="bg-gray-100 text-gray-800 p-4 rounded-lg mt-5 overflow-x-auto">
  <code>
    <span className="text-purple-600">function</span>{" "}
    <span className="text-blue-600">Car</span>
    <span className="text-gray-800">(props) {"{"}</span>
    {"\n"}
    {"  "}
    <span className="text-purple-600">return</span>{" ("}
    {"\n"}
    {"    "}
    <span className="text-pink-600">&lt;h2&gt;</span>
    I am a {"{"}
    <span className="text-blue-600">props.brand</span>
    {"}"}!
    <span className="text-pink-600">&lt;/h2&gt;</span>
    {"\n"}
    {"  "}){";"}{"\n"}
    <span className="text-gray-800">{"}"}</span>
    {"\n\n"}

    <span className="text-purple-600">function</span>{" "}
    <span className="text-blue-600">Garage</span>
    <span className="text-gray-800">() {"{"}</span>
    {"\n"}
    {"  "}
    <span className="text-purple-600">return</span>{" ("}
    {"\n"}
    {"    "}
    <span className="text-pink-600">&lt;&gt;</span>
    {"\n"}
    {"      "}
    <span className="text-pink-600">&lt;h1&gt;</span>
    Who lives in my garage?
    <span className="text-pink-600">&lt;/h1&gt;</span>
    {"\n"}
    {"      "}
    <span className="text-pink-600">&lt;Car</span>{" "}
    <span className="text-red-500">brand</span>
    <span className="text-gray-800">=</span>
    <span className="text-orange-500">"Ford"</span>
    <span className="text-pink-600"> /&gt;</span>
    {"\n"}
    {"    "}
    <span className="text-pink-600">&lt;/&gt;</span>
    {"\n"}
    {"  "}){";"}{"\n"}
    <span className="text-gray-800">{"}"}</span>
    {"\n\n"}

    <span className="text-purple-600">createRoot</span>
    <span className="text-gray-800">(document.getElementById('root')).render(</span>
    {"\n"}
    {"  "}
    <span className="text-pink-600">&lt;Garage /&gt;</span>
    {"\n"}
    <span className="text-gray-800">);</span>
  </code>
</pre>
        </div>
    )
}

export default ReactProps;