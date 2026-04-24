import React from "react";

const ReactList = () => {
    return (
        <div className="max-w-4xl p-6 mt-10">
            <h1 className="text-3xl text-blue-500 font-semibold  mb-3">React List</h1>
            <p>React lets you render lists by looping through data, with JavaScript’s <span className="text-red-400">map()</span> method being the preferred approach.</p>
            
            <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Example</h2>
            <p>Let’s make a simple list with the <span className="text-red-400">map()</span> method.</p>
            <pre className="bg-gray-100 text-gray-800 p-4 rounded-lg mt-5 overflow-x-auto">
  <code>
    <span className="text-purple-600">function</span>{" "}
    <span className="text-blue-600">MyCars</span>
    <span className="text-gray-800">() {"{"}</span>{"\n\n"}

    {"  "}
    <span className="text-purple-600">const</span>{" "}
    <span className="text-blue-600">cars</span>{" "}
    <span className="text-gray-800">=</span>{" "}
    <span className="text-gray-800">[</span>
    <span className="text-orange-500">'Ford'</span>
    <span className="text-gray-800">, </span>
    <span className="text-orange-500">'BMW'</span>
    <span className="text-gray-800">, </span>
    <span className="text-orange-500">'Audi'</span>
    <span className="text-gray-800">];</span>
    {"\n\n"}

    {"  "}
    <span className="text-purple-600">return</span>{" ("}{"\n"}

    {"    "}
    <span className="text-pink-600">&lt;&gt;</span>{"\n"}

    {"      "}
    <span className="text-pink-600">&lt;h1&gt;</span>
    My Cars:
    <span className="text-pink-600">&lt;/h1&gt;</span>{"\n"}

    {"      "}
    <span className="text-pink-600">&lt;ul&gt;</span>{"\n"}

    {"        "}
    <span className="text-gray-800">{`{cars.map((car) => ()`}</span>
    <span className="text-pink-600">&lt;li&gt;</span>
    I am a {"{"}
    <span className="text-blue-600">car</span>
    {"}"}
    <span className="text-pink-600">&lt;/li&gt;</span>
    <span className="text-gray-800">{`)})}`}</span>{"\n"}

    {"      "}
    <span className="text-pink-600">&lt;/ul&gt;</span>{"\n"}

    {"    "}
    <span className="text-pink-600">&lt;/&gt;</span>{"\n"}

    {"  "}){"\n"}
    <span className="text-gray-800">{"}"}</span>
    {"\n\n"}

    <span className="text-blue-600">createRoot</span>
    <span className="text-gray-800">(</span>
    <span className="text-blue-600">document</span>
    <span className="text-gray-800">.</span>
    <span className="text-yellow-600">getElementById</span>
    <span className="text-gray-800">(</span>
    <span className="text-orange-500">'root'</span>
    <span className="text-gray-800">))</span>
    <span className="text-gray-800">.</span>
    <span className="text-yellow-600">render</span>
    <span className="text-gray-800">(</span>
    {"\n  "}
    <span className="text-pink-600">&lt;MyCars /&gt;</span>
    {"\n"}
    <span className="text-gray-800">);</span>
  </code>
</pre>


             <p className="mt-5">The code will function in React, yet a warning appears since no key is provided for the list elements.</p>
            
            <h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">Keys in React Lists</h2>
            <p>React uses keys to identify elements, allowing individual items to re-render when updated or removed instead of the full list, and each key must be unique among siblings but not globally.</p>
            <h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">Example</h2>
            <p>Here’s the previous example, now using keys.</p>
          <pre className="bg-gray-100 text-gray-800 p-4 rounded-lg mt-5 overflow-x-auto">
  <code>
    <span className="text-purple-600">function</span>{" "}
    <span className="text-blue-600">MyCars</span>
    <span className="text-gray-800">() {"{"}</span>{"\n\n"}

    {"  "}
    <span className="text-purple-600">const</span>{" "}
    <span className="text-blue-600">cars</span>{" "}
    <span className="text-gray-800">= [</span>{"\n"}

    {"    "}
    <span className="text-gray-800">{`{id: 1001, brand: 'Ford'},`}</span>{"\n"}
    {"    "}
    <span className="text-gray-800">{`{id: 1002, brand: 'BMW'},`}</span>{"\n"}
    {"    "}
    <span className="text-gray-800">{`{id: 1003, brand: 'Audi'}`}</span>{"\n"}

    {"  "}
    <span className="text-gray-800">];</span>
    {"\n\n"}

    {"  "}
    <span className="text-purple-600">return</span>{" ("}{"\n"}

    {"    "}
    <span className="text-pink-600">&lt;&gt;</span>{"\n"}

    {"      "}
    <span className="text-pink-600">&lt;h1&gt;</span>
    My Cars:
    <span className="text-pink-600">&lt;/h1&gt;</span>{"\n"}

    {"      "}
    <span className="text-pink-600">&lt;ul&gt;</span>{"\n"}

    {"        "}
    <span className="text-gray-800">{`{cars.map((car) => (`}</span>
    <span className="text-pink-600">&lt;li</span>{" "}
    <span className="text-purple-600">key</span>
    <span className="text-gray-800">=</span>
    <span className="text-blue-600">car.id</span>
    <span className="text-pink-600">&gt;</span>
    I am a {"{"}
    <span className="text-blue-600">car</span>
    <span className="text-gray-800">.</span>
    <span className="text-blue-600">brand</span>
    {"}"}
    <span className="text-pink-600">&lt;/li&gt;</span>
    <span className="text-gray-800">{`)})}`}</span>
    {"\n"}

    {"      "}
    <span className="text-pink-600">&lt;/ul&gt;</span>{"\n"}

    {"    "}
    <span className="text-pink-600">&lt;/&gt;</span>{"\n"}

    {"  "}){"\n"}
    <span className="text-gray-800">{"}"}</span>
    {"\n\n"}

    <span className="text-blue-600">createRoot</span>
    <span className="text-gray-800">(</span>
    <span className="text-blue-600">document</span>
    <span className="text-gray-800">.</span>
    <span className="text-yellow-600">getElementById</span>
    <span className="text-gray-800">(</span>
    <span className="text-orange-500">'root'</span>
    <span className="text-gray-800">))</span>
    <span className="text-gray-800">.</span>
    <span className="text-yellow-600">render</span>
    <span className="text-gray-800">(</span>
    {"\n  "}
    <span className="text-pink-600">&lt;MyCars /&gt;</span>
    {"\n"}
    <span className="text-gray-800">);</span>
  </code>
</pre>

           <h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">Using Array Index as Keys</h2>
           <p>While the array index may serve as a key, this practice is generally discouraged except under particular circumstances.</p>
          <ul className="list-[square] mt-5">
            <li>The list is static (won't change)</li>
            <li>The list will never be reordered or filtered</li>
            <li>The items in the list have no IDs</li>
          </ul>

          <h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">Example</h2>
          <p>You can use the index of an array as a key, but it’s not a good idea for lists that update.</p>
        <pre className="bg-gray-100 text-gray-800 p-4 rounded-lg mt-5 overflow-x-auto">
  <code>
    <span className="text-purple-600">function</span>{" "}
    <span className="text-blue-600">MyCars</span>
    <span className="text-gray-800">() {"{"}</span>{"\n\n"}

    {"  "}
    <span className="text-purple-600">const</span>{" "}
    <span className="text-blue-600">cars</span>{" "}
    <span className="text-gray-800">= [</span>
    <span className="text-orange-500">'Ford'</span>
    <span className="text-gray-800">, </span>
    <span className="text-orange-500">'BMW'</span>
    <span className="text-gray-800">, </span>
    <span className="text-orange-500">'Audi'</span>
    <span className="text-gray-800">];</span>
    {"\n\n"}

    {"  "}
    <span className="text-purple-600">return</span>{" ("}{"\n"}

    {"    "}
    <span className="text-pink-600">&lt;&gt;</span>{"\n"}

    {"      "}
    <span className="text-pink-600">&lt;h1&gt;</span>
    My Cars:
    <span className="text-pink-600">&lt;/h1&gt;</span>{"\n"}

    {"      "}
    <span className="text-pink-600">&lt;ul&gt;</span>{"\n"}

    {"        "}
    <span className="text-gray-800">{`{cars.map((car, index) => (`}</span>
    <span className="text-pink-600">&lt;li</span>{" "}
    <span className="text-purple-600">key</span>
    <span className="text-gray-800">=</span>
    <span className="text-blue-600">index</span>
    <span className="text-pink-600">&gt;</span>
    I am a {"{"}
    <span className="text-blue-600">car</span>
    {"}"}
    <span className="text-pink-600">&lt;/li&gt;</span>
    <span className="text-gray-800">{`)})}`}</span>
    {"\n"}

    {"      "}
    <span className="text-pink-600">&lt;/ul&gt;</span>{"\n"}

    {"    "}
    <span className="text-pink-600">&lt;/&gt;</span>{"\n"}

    {"  "}){"\n"}
    <span className="text-gray-800">{"}"}</span>
    {"\n\n"}

    <span className="text-blue-600">createRoot</span>
    <span className="text-gray-800">(</span>
    <span className="text-blue-600">document</span>
    <span className="text-gray-800">.</span>
    <span className="text-yellow-600">getElementById</span>
    <span className="text-gray-800">(</span>
    <span className="text-orange-500">'root'</span>
    <span className="text-gray-800">))</span>
    <span className="text-gray-800">.</span>
    <span className="text-yellow-600">render</span>
    <span className="text-gray-800">(</span>
    {"\n  "}
    <span className="text-pink-600">&lt;MyCars /&gt;</span>
    {"\n"}
    <span className="text-gray-800">);</span>
  </code>
</pre>

        </div>
    )
}

export default ReactList;