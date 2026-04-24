import React from "react";

const ReactProchild = () => {
    return (
        <div className="max-w-4xl p-6 mt-10">
            <h1 className="text-3xl text-blue-500 font-semibold mb-3">React Props Children</h1>
             <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Props Children</h2>
           <p>React allows you to send whatever is inside a component’s opening and closing tags to another component. The target component can then use props.children to access it.</p>
           <h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">Example</h2>
           <p>Using the Parent component, forward the content placed between the Son and Daughter components’ tags.</p>
        <pre className="bg-gray-100 text-gray-800 p-4 rounded-lg mt-5 overflow-x-auto">
  <code>
    <span className="text-purple-600">function</span>{" "}
    <span className="text-blue-600">Son</span>
    <span className="text-gray-800">(props) {"{"}</span>
    {"\n"}
    {"  "}
    <span className="text-purple-600">return</span>{" ("}
    {"\n"}
    {"    "}
    <span className="text-pink-600">&lt;div</span>{" "}
    <span className="text-purple-600">style</span>
    <span className="text-gray-800">={"{"}</span>
    <span className="text-red-500">background</span>
    <span className="text-gray-800">: </span>
    <span className="text-orange-500">"lightgreen"</span>
    <span className="text-gray-800">{"}"}</span>
    <span className="text-pink-600">&gt;</span>
    {"\n"}
    {"    "}
    <span className="text-pink-600">&lt;h2&gt;</span>Son<span className="text-pink-600">&lt;/h2&gt;</span>
    {"\n"}
    {"    "}
    <span className="text-pink-600">&lt;div&gt;</span>
    {"{"}
    <span className="text-blue-600">props.children</span>
    {"}"}
    <span className="text-pink-600">&lt;/div&gt;</span>
    {"\n"}
    {"  "}
    <span className="text-pink-600">&lt;/div&gt;</span>
    {"\n"}
    {"  "}){";"}{"\n"}
    <span className="text-gray-800">{"}"}</span>
    {"\n\n"}

    <span className="text-purple-600">function</span>{" "}
    <span className="text-blue-600">Daughter</span>
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
    <span className="text-pink-600">&lt;div</span>{" "}
    <span className="text-purple-600">style</span>
    <span className="text-gray-800">={"{"}</span>
    <span className="text-red-500">background</span>
    <span className="text-gray-800">: </span>
    <span className="text-orange-500">"lightblue"</span>
    <span className="text-gray-800">{"}"}</span>
    <span className="text-pink-600">&gt;</span>
    {"\n"}
    {"    "}
    <span className="text-pink-600">&lt;h2&gt;</span>Daughter<span className="text-pink-600">&lt;/h2&gt;</span>
    {"\n"}
    {"    "}
    <span className="text-pink-600">&lt;div&gt;</span>
    {"{"}
    <span className="text-blue-600">props.children</span>
    {"}"}
    <span className="text-pink-600">&lt;/div&gt;</span>
    {"\n"}
    {"  "}
    <span className="text-pink-600">&lt;/div&gt;</span>
    {"\n"}
    {"  "}){";"}{"\n"}
    <span className="text-gray-800">{"}"}</span>
    {"\n\n"}

    <span className="text-purple-600">function</span>{" "}
    <span className="text-blue-600">Parent</span>
    <span className="text-gray-800">() {"{"}</span>
    {"\n"}
    {"  "}
    <span className="text-purple-600">return</span>{" ("}
    {"\n"}
    {"    "}
    <span className="text-pink-600">&lt;div&gt;</span>
    {"\n"}
    {"      "}
    <span className="text-pink-600">&lt;h1&gt;</span>My two Children<span className="text-pink-600">&lt;/h1&gt;</span>
    {"\n\n"}

    {"      "}
    <span className="text-pink-600">&lt;Son&gt;</span>
    {"\n"}
    {"        "}
    <span className="text-pink-600">&lt;p&gt;</span>
    This was written in the Parent component, but displayed as a part of the Son component
    <span className="text-pink-600">&lt;/p&gt;</span>
    {"\n"}
    {"      "}
    <span className="text-pink-600">&lt;/Son&gt;</span>
    {"\n\n"}

    {"      "}
    <span className="text-pink-600">&lt;Daughter&gt;</span>
    {"\n"}
    {"        "}
    <span className="text-pink-600">&lt;p&gt;</span>
    This was written in the Parent component, but displayed as a part of the Daughter component
    <span className="text-pink-600">&lt;/p&gt;</span>
    {"\n"}
    {"      "}
    <span className="text-pink-600">&lt;/Daughter&gt;</span>
    {"\n"}
    {"    "}
    <span className="text-pink-600">&lt;/div&gt;</span>
    {"\n"}
    {"  "}){";"}{"\n"}
    <span className="text-gray-800">{"}"}</span>
    {"\n\n"}

    <span className="text-purple-600">createRoot</span>
    <span className="text-gray-800">(document.getElementById('root')).render(</span>
    {"\n"}
    {"  "}
    <span className="text-pink-600">&lt;Parent /&gt;</span>
    {"\n"}
    <span className="text-gray-800">);</span>
  </code>
</pre>
        </div>
    )
}

export default ReactProchild;