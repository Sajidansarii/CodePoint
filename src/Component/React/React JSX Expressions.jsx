import React from "react";

const ReactExpressons = () => {
    return (
        <div className="max-w-4xl p-6 mt-10">
            <h1 className="text-3xl text-blue-500 font-semibold mb-3">React JSX Expressions</h1>
            <p>One of JSX’s strongest features is that you can insert JavaScript expressions right inside your markup.</p>
            
            <h2 className="text-2xl text-ellipsis font-semibold mt-10 mb-3">Expressions</h2>
            <p>You can put any valid JavaScript expression inside JSX by wrapping it in curly braces {'{ }'}, and React will evaluate it and render the result in the DOM.</p>
             
             <h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">Example</h2>
            <p>Evaluate 218 times 1.36.</p>
            <pre className="bg-gray-100 text-gray-800 p-4 rounded-lg mt-5 overflow-x-auto">
  <code>
    <span className="text-purple-600">function</span>{" "}
    <span className="text-blue-600">Car</span>
    <span className="text-gray-800">() {"{"}</span>{"\n\n"}

    {"  "}
    <span className="text-purple-600">return</span>{" ("}{"\n"}

    {"    "}
    <span className="text-pink-600">&lt;&gt;</span>{"\n"}

    {"      "}
    <span className="text-pink-600">&lt;h1&gt;</span>
    My car
    <span className="text-pink-600">&lt;/h1&gt;</span>{"\n"}

    {"      "}
    <span className="text-pink-600">&lt;p&gt;</span>
    It has {"{"}
    <span className="text-green-600">218 * 1.36</span>
    {"}"} horsepower
    <span className="text-pink-600">&lt;/p&gt;</span>{"\n"}

    {"    "}
    <span className="text-pink-600">&lt;/&gt;</span>{"\n"}

    {"  "}){"\n"}
    <span className="text-gray-800">{"}"}</span>
  </code>
</pre>

            <h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">Variables</h2>
            <p>Variables count as valid JavaScript expressions, and you insert them into JSX by wrapping them in {'{ }'}.</p>
            <h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">Example</h2>
            <p>Use a variable inside JSX:</p>
           <pre className="bg-gray-100 text-gray-800 p-4 rounded-lg mt-5 overflow-x-auto">
  <code>
    <span className="text-purple-600">function</span>{" "}
    <span className="text-blue-600">Car</span>
    <span className="text-gray-800">() {"{"}</span>{"\n\n"}

    {"  "}
    <span className="text-purple-600">const</span>{" "}
    <span className="text-blue-600">hp</span>{" "}
    <span className="text-gray-800">=</span>{" "}
    <span className="text-green-600">218 * 1.36</span>;
    {"\n\n"}

    {"  "}
    <span className="text-purple-600">return</span>{" ("}{"\n"}

    {"    "}
    <span className="text-pink-600">&lt;&gt;</span>{"\n"}

    {"      "}
    <span className="text-pink-600">&lt;h1&gt;</span>
    My car
    <span className="text-pink-600">&lt;/h1&gt;</span>{"\n"}

    {"      "}
    <span className="text-pink-600">&lt;p&gt;</span>
    It has {"{"}
    <span className="text-blue-600">hp</span>
    {"}"} horsepower
    <span className="text-pink-600">&lt;/p&gt;</span>{"\n"}

    {"    "}
    <span className="text-pink-600">&lt;/&gt;</span>{"\n"}

    {"  "}){"\n"}
    <span className="text-gray-800">{"}"}</span>
  </code>
</pre>

            <h1 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Function Calls</h1>
             <p>You can call functions inside JSX by putting the call in curly braces {'{ }'}, because function calls are valid JavaScript expressions.</p>
            <h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">Example</h2>
            <p>Call a JavaScript function inside your JSX code by wrapping it in {'{ }'}. </p>
          <pre className="bg-gray-100 text-gray-800 p-4 rounded-lg mt-5 overflow-x-auto">
  <code>
    <span className="text-purple-600">function</span>{" "}
    <span className="text-blue-600">kwtohp</span>
    <span className="text-gray-800">(kw) {"{"}</span>{"\n"}
    {"  "}
    <span className="text-purple-600">return</span>{" "}
    <span className="text-blue-600">kw</span>{" "}
    <span className="text-gray-800">*</span>{" "}
    <span className="text-green-600">1.36</span>;
    {"\n"}
    <span className="text-gray-800">{"}"}</span>
    {"\n\n"}

    <span className="text-purple-600">function</span>{" "}
    <span className="text-blue-600">Car</span>
    <span className="text-gray-800">() {"{"}</span>{"\n\n"}

    {"  "}
    <span className="text-purple-600">return</span>{" ("}{"\n"}

    {"    "}
    <span className="text-pink-600">&lt;&gt;</span>{"\n"}

    {"      "}
    <span className="text-pink-600">&lt;h1&gt;</span>
    My car
    <span className="text-pink-600">&lt;/h1&gt;</span>{"\n"}

    {"      "}
    <span className="text-pink-600">&lt;p&gt;</span>
    It has {"{"}
    <span className="text-blue-600">kwtohp</span>
    <span className="text-gray-800">(</span>
    <span className="text-green-600">218</span>
    <span className="text-gray-800">)</span>
    {"}"} horsepower
    <span className="text-pink-600">&lt;/p&gt;</span>{"\n"}

    {"    "}
    <span className="text-pink-600">&lt;/&gt;</span>{"\n"}

    {"  "}){"\n"}
    <span className="text-gray-800">{"}"}</span>
  </code>
</pre>

            <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Object Properties</h2>
           <p>Access properties of an object inside JSX by using dot notation {'(e.g., {user.name})'}.</p>
          <h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">Example</h2>
         <p>Access an object’s property inside JSX by referencing it within curly braces.</p>
        <pre className="bg-gray-100 text-gray-800 p-4 rounded-lg mt-5 overflow-x-auto">
  <code>
    <span className="text-purple-600">function</span>{" "}
    <span className="text-blue-600">Car</span>
    <span className="text-gray-800">() {"{"}</span>{"\n\n"}

    {"  "}
    <span className="text-purple-600">const</span>{" "}
    <span className="text-blue-600">myobj</span>{" "}
    <span className="text-gray-800">= {"{"}</span>{"\n"}

    {"    "}
    <span className="text-red-500">name</span>
    <span className="text-gray-800">:</span>{" "}
    <span className="text-orange-500">"Fiat"</span>
    <span className="text-gray-800">,</span>{"\n"}

    {"    "}
    <span className="text-red-500">model</span>
    <span className="text-gray-800">:</span>{" "}
    <span className="text-orange-500">"500"</span>
    <span className="text-gray-800">,</span>{"\n"}

    {"    "}
    <span className="text-red-500">color</span>
    <span className="text-gray-800">:</span>{" "}
    <span className="text-orange-500">"white"</span>
    <span className="text-gray-800">{"}"}</span>;
    {"\n\n"}

    {"  "}
    <span className="text-purple-600">return</span>{" ("}{"\n"}

    {"    "}
    <span className="text-pink-600">&lt;&gt;</span>{"\n"}

    {"      "}
    <span className="text-pink-600">&lt;h1&gt;</span>
    My car is a {"{"}
    <span className="text-blue-600">myobj</span>
    <span className="text-gray-800">.</span>
    <span className="text-blue-600">color</span>{" "}
    {" "}
    {"{"}
    <span className="text-blue-600">myobj</span>
    <span className="text-gray-800">.</span>
    <span className="text-blue-600">name</span>
    {"} "}
    {"{"}
    <span className="text-blue-600">myobj</span>
    <span className="text-gray-800">.</span>
    <span className="text-blue-600">model</span>
    {"}"}
    <span className="text-pink-600">&lt;/h1&gt;</span>{"\n"}

    {"    "}
    <span className="text-pink-600">&lt;/&gt;</span>{"\n"}

    {"  "}){"\n"}
    <span className="text-gray-800">{"}"}</span>
  </code>
</pre>
  </div>
    )
}

export default ReactExpressons;