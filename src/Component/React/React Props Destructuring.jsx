import React  from "react";

const ReactProDestructuring  = () => {
    return (
        <div className="max-w-4xl p-6 mt-10">
            <h1 className="text-3xl text-blue-500 font-semibold mb-3">React Props Destructuring</h1>
            
            <h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">Destructuring Props</h2>
            <p>Destructuring allows you to pick only the props you need in a component.</p>
            <h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">Example</h2>
            <p>Since the component only requires the color prop, it declares just that in the function parameters.</p>
          <pre className="bg-gray-100 text-gray-800 p-4 rounded-lg mt-5 overflow-x-auto">
  <code>
    <span className="text-purple-600">function</span>{" "}
    <span className="text-blue-600">Car</span>
    <span className="text-gray-800">({"{"} color {"}"}) {"{"}</span>
    {"\n"}
    {"  "}
    <span className="text-purple-600">return</span>{" ("}
    {"\n"}
    {"    "}
    <span className="text-pink-600">&lt;h2&gt;</span>
    My car is {"{"}
    <span className="text-blue-600">color</span>
    {"}"}!
    <span className="text-pink-600">&lt;/h2&gt;</span>
    {"\n"}
    {"  "}){";"}{"\n"}
    <span className="text-gray-800">{"}"}</span>
    {"\n\n"}

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
    <span className="text-orange-500">"red"</span>{" "}
    <span className="text-red-500">year</span>
    <span className="text-gray-800">=</span>
    <span className="text-gray-800">{"{"}1969{"}"}</span>
    <span className="text-pink-600"> /&gt;</span>
    {"\n"}
    <span className="text-gray-800">);</span>
  </code>
</pre>

            <p className="mt-5">By destructuring within the component, you can access just the properties required, even though all props are received.</p>
            <h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">Example</h2>
            <p>All props are passed in, but destructuring ensures only selected properties are accessed inside the component.</p>
           <pre className="bg-gray-100 text-gray-800 p-4 rounded-lg mt-5 overflow-x-auto">
  <code>
    <span className="text-purple-600">function</span>{" "}
    <span className="text-blue-600">Car</span>
    <span className="text-gray-800">(props) {"{"}</span>
    {"\n"}
    {"  "}
    <span className="text-purple-600">const</span>{" "}
    <span className="text-gray-800">{"{"} brand, model {"}"}</span>{" "}
    <span className="text-gray-800">= props;</span>
    {"\n"}
    {"  "}
    <span className="text-purple-600">return</span>{" ("}
    {"\n"}
    {"    "}
    <span className="text-pink-600">&lt;h2&gt;</span>
    I love my {"{"}
    <span className="text-blue-600">brand</span>
    {"}"} {"{"}
    <span className="text-blue-600">model</span>
    {"}"}!
    <span className="text-pink-600">&lt;/h2&gt;</span>
    {"\n"}
    {"  "}){";"}{"\n"}
    <span className="text-gray-800">{"}"}</span>
    {"\n\n"}

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
    <span className="text-orange-500">"red"</span>{" "}
    <span className="text-red-500">year</span>
    <span className="text-gray-800">=</span>
    <span className="text-gray-800">{"{"}1969{"}"}</span>
    <span className="text-pink-600"> /&gt;</span>
    {"\n"}
    <span className="text-gray-800">);</span>
  </code>
</pre>

            <h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">Destructuring ...rest</h2>
            <p className="mb-3">If the number of properties is unknown, you can collect them using the ...rest operator.</p>
            <p>You can extract only the properties you need and store all other props in a separate object.</p>
            <h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">Example</h2>
           <p>The component picks the color and brand props, while the remaining properties, such as {'{ model: "Mustang", year: 1969 }'}, are collected into an object.</p>
         <pre className="bg-gray-100 text-gray-800 p-4 rounded-lg mt-5 overflow-x-auto">
  <code>
    <span className="text-purple-600">function</span>{" "}
    <span className="text-blue-600">Car</span>
    <span className="text-gray-800">({"{"} color, brand, ...rest {"}"}) {"{"}</span>
    {"\n"}
    {"  "}
    <span className="text-purple-600">return</span>{" ("}
    {"\n"}
    {"    "}
    <span className="text-pink-600">&lt;h2&gt;</span>
    My {"{"}
    <span className="text-blue-600">brand</span>
    {"}"} {"{"}
    <span className="text-blue-600">rest.model</span>
    {"}"} is {"{"}
    <span className="text-blue-600">color</span>
    {"}"}!
    <span className="text-pink-600">&lt;/h2&gt;</span>
    {"\n"}
    {"  "}){";"}{"\n"}
    <span className="text-gray-800">{"}"}</span>
    {"\n\n"}

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
    <span className="text-orange-500">"red"</span>{" "}
    <span className="text-red-500">year</span>
    <span className="text-gray-800">=</span>
    <span className="text-gray-800">{"{"}1969{"}"}</span>
    <span className="text-pink-600"> /&gt;</span>
    {"\n"}
    <span className="text-gray-800">);</span>
  </code>
</pre>

           <h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">Default Values</h2>
           <p>Using destructuring, you can assign default values to props so that if a prop isn’t provided, the default will be applied.</p>
           <h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">Example</h2>
           <p>Set the default color value to "blue":</p>
          <pre className="bg-gray-100 text-gray-800 p-4 rounded-lg mt-5 overflow-x-auto">
  <code>
    <span className="text-purple-600">function</span>{" "}
    <span className="text-blue-600">Car</span>
    <span className="text-gray-800">({"{"} color = </span>
    <span className="text-orange-500">"blue"</span>
    <span className="text-gray-800">, brand {"}"}) {"{"}</span>
    {"\n"}
    {"  "}
    <span className="text-purple-600">return</span>{" ("}
    {"\n"}
    {"    "}
    <span className="text-pink-600">&lt;h2&gt;</span>
    My {"{"}
    <span className="text-blue-600">color</span>
    {"}"} {"{"}
    <span className="text-blue-600">brand</span>
    {"}"}!
    <span className="text-pink-600">&lt;/h2&gt;</span>
    {"\n"}
    {"  "}){";"}{"\n"}
    <span className="text-gray-800">{"}"}</span>
    {"\n\n"}

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
        
        
        </div>
    )
}

export default ReactProDestructuring;