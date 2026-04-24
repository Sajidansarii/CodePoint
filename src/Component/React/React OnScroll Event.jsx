import React from "react";

const ReactOnScroll = () => {
    return(
        <div className="max-w-4xl p-6 mt-10">
         <h1 className="text-3xl text-blue-500 font-semibold mb-3">React onScroll Event</h1>
         <p>The onScroll event in React allows you to monitor scrolling within a specific element and respond to it. It fires whenever the scroll position changes and is commonly used for infinite scrolling, lazy loading, parallax effects, or updating the UI dynamically.</p>
        
         <h2 className="text-2xl text-gray-800 font-semibold mt-5">Syntax</h2>
        <pre className="bg-gray-100 text-gray-800 p-4 rounded-lg mt-5 overflow-x-auto">
  <code>
    <span className="text-pink-600">&lt;element</span>{" "}
    <span className="text-purple-600">onScroll</span>
    <span className="text-gray-800">=</span>
    <span className="text-blue-600">{`{function}`}</span>
    <span className="text-pink-600">&gt;&lt;/element&gt;</span>
  </code>
</pre>

         <ul className="list-[square] space-y-1 mt-5">
            <li><span className="font-semibold">Parameter</span>: The onScroll event handler takes a function that defines what should happen when the scroll position changes.</li>
            <li><span className="font-semibold">Return Type</span>: The function doesn’t return anything; it simply performs actions in response to scrolling.</li>
         </ul>

         <h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">Example</h2>
        <pre className="bg-gray-100 text-gray-800 p-4 rounded-lg mt-5 overflow-x-auto">
  <code>
    <span className="text-gray-500">// App.js</span>
    {"\n\n"}

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
    <span className="text-blue-600">scrollPosition</span>
    <span className="text-gray-800">, </span>
    <span className="text-blue-600">setScrollPosition</span>
    <span className="text-gray-800">] = </span>
    <span className="text-yellow-600">useState</span>
    <span className="text-gray-800">(</span>
    <span className="text-green-600">0</span>
    <span className="text-gray-800">);</span>
    {"\n\n"}

    {"  "}
    <span className="text-purple-600">const</span>{" "}
    <span className="text-yellow-600">handleScroll</span>{" "}
    <span className="text-gray-800">= (e) =&gt; {"{"}</span>{"\n"}

    {"    "}
    <span className="text-purple-600">const</span>{" "}
    <span className="text-gray-800">{"{"} scrollTop, scrollHeight, clientHeight {"}"}</span>{" "}
    <span className="text-gray-800">= e.target;</span>{"\n\n"}

    {"    "}
    <span className="text-purple-600">const</span>{" "}
    <span className="text-blue-600">position</span>{" "}
    <span className="text-gray-800">= </span>
    <span className="text-yellow-600">Math.ceil</span>
    <span className="text-gray-800">(</span>
    <span className="text-gray-800">(scrollTop / (scrollHeight - clientHeight)) * 100</span>
    <span className="text-gray-800">);</span>
    {"\n\n"}

    {"    "}
    <span className="text-yellow-600">setScrollPosition</span>
    <span className="text-gray-800">(position);</span>
    {"\n"}

    {"  "}
    <span className="text-gray-800">{"}"}</span>;
    {"\n\n"}

    {"  "}
    <span className="text-purple-600">return</span>{" ("}{"\n"}

    {"    "}
    <span className="text-pink-600">&lt;div</span>{"\n"}

    {"      "}
    <span className="text-purple-600">className</span>
    <span className="text-gray-800">=</span>
    <span className="text-orange-500">"scrollable-element"</span>{"\n"}

    {"      "}
    <span className="text-purple-600">style</span>
    <span className="text-gray-800">={"{"}</span>{"\n"}

    {"        "}
    <span className="text-red-500">height</span>
    <span className="text-gray-800">: </span>
    <span className="text-orange-500">"300px"</span>
    <span className="text-gray-800">,</span>{"\n"}

    {"        "}
    <span className="text-red-500">overflowY</span>
    <span className="text-gray-800">: </span>
    <span className="text-orange-500">"scroll"</span>
    <span className="text-gray-800">,</span>{"\n"}

    {"        "}
    <span className="text-red-500">border</span>
    <span className="text-gray-800">: </span>
    <span className="text-orange-500">"1px solid #ccc"</span>
    <span className="text-gray-800">,</span>{"\n"}

    {"      "}
    <span className="text-gray-800">{"}"}</span>{"\n"}

    {"      "}
    <span className="text-purple-600">onScroll</span>
    <span className="text-gray-800">=</span>
    <span className="text-gray-800">{`{handleScroll}`}</span>
    {"\n"}

    {"    "}
    <span className="text-pink-600">&gt;</span>{"\n\n"}

    {"      "}
    <span className="text-pink-600">&lt;h1</span>{" "}
    <span className="text-purple-600">style</span>
    <span className="text-gray-800">={"{"}</span>
    <span className="text-red-500">position</span>
    <span className="text-gray-800">: </span>
    <span className="text-orange-500">"fixed"</span>
    <span className="text-gray-800">, </span>
    <span className="text-red-500">color</span>
    <span className="text-gray-800">: </span>
    <span className="text-orange-500">"red"</span>
    <span className="text-gray-800">{"}"}</span>
    <span className="text-pink-600">&gt;</span>
    {"\n"}

    {"        "}
    Scroll Position: {"{"}
    <span className="text-blue-600">scrollPosition</span>
    {"}"}px
    {"\n"}

    {"      "}
    <span className="text-pink-600">&lt;/h1&gt;</span>{"\n\n"}

    {"      "}
    <span className="text-pink-600">&lt;p&gt;</span>
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum soluta animi harum, similique, sit perspiciatis, numquam repudiandae quisquam iure at dignissimos amet temporibus labore distinctio sequi. Adipisci ullam facilis molestias cum ipsa quae repellendus architecto placeat, fugit nihil dolore, nobis odit dignissimos quas minima! Corrupti architecto voluptatem amet excepturi repudiandae.
    <span className="text-pink-600">&lt;/p&gt;</span>{"\n"}

    {"    "}
    <span className="text-pink-600">&lt;/div&gt;</span>{"\n"}

    {"  "}){";"}{"\n"}
    <span className="text-gray-800">{"}"}</span>
    {"\n\n"}

    <span className="text-purple-600">export default</span>{" "}
    <span className="text-blue-600">App</span>;
  </code>
</pre>

         <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Example</h2>
        <pre className="bg-gray-100 text-gray-800 p-4 rounded-lg mt-5 overflow-x-auto">
  <code>
    <span className="text-gray-500">// App.js</span>
    {"\n\n"}

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
    <span className="text-blue-600">backgroundColor</span>
    <span className="text-gray-800">, </span>
    <span className="text-blue-600">setBackgroundColor</span>
    <span className="text-gray-800">] = </span>
    <span className="text-yellow-600">useState</span>
    <span className="text-gray-800">(</span>
    <span className="text-orange-500">"white"</span>
    <span className="text-gray-800">);</span>
    {"\n\n"}

    {"  "}
    <span className="text-purple-600">const</span>{" "}
    <span className="text-yellow-600">handleScroll</span>{" "}
    <span className="text-gray-800">= (event) =&gt; {"{"}</span>{"\n"}

    {"    "}
    <span className="text-purple-600">const</span>{" "}
    <span className="text-gray-800">{"{"} scrollTop, scrollHeight, clientHeight {"}"}</span>{" "}
    <span className="text-gray-800">= event.target;</span>{"\n\n"}

    {"    "}
    <span className="text-purple-600">const</span>{" "}
    <span className="text-blue-600">scrollRatio</span>{" "}
    <span className="text-gray-800">= scrollTop / (scrollHeight - clientHeight);</span>
    {"\n\n"}

    {"    "}
    <span className="text-purple-600">if</span>{" "}
    <span className="text-gray-800">(scrollRatio &gt; </span>
    <span className="text-green-600">0.5</span>
    <span className="text-gray-800">) {"{"}</span>{"\n"}
    {"      "}
    <span className="text-yellow-600">setBackgroundColor</span>
    <span className="text-gray-800">(</span>
    <span className="text-orange-500">"lightblue"</span>
    <span className="text-gray-800">);</span>{"\n"}
    {"    "}
    <span className="text-gray-800">{"}"} </span>
    <span className="text-purple-600">else</span>{" {"}{"\n"}
    {"      "}
    <span className="text-yellow-600">setBackgroundColor</span>
    <span className="text-gray-800">(</span>
    <span className="text-orange-500">"white"</span>
    <span className="text-gray-800">);</span>{"\n"}
    {"    "}
    <span className="text-gray-800">{"}"}</span>{"\n"}

    {"  "}
    <span className="text-gray-800">{"}"}</span>;
    {"\n\n"}

    {"  "}
    <span className="text-purple-600">return</span>{" ("}{"\n"}

    {"    "}
    <span className="text-pink-600">&lt;div</span>{"\n"}

    {"      "}
    <span className="text-purple-600">className</span>
    <span className="text-gray-800">=</span>
    <span className="text-orange-500">"scrollable-section"</span>{"\n"}

    {"      "}
    <span className="text-purple-600">style</span>
    <span className="text-gray-800">={"{"}</span>{"\n"}

    {"        "}
    <span className="text-red-500">height</span>
    <span className="text-gray-800">: </span>
    <span className="text-orange-500">"300px"</span>
    <span className="text-gray-800">,</span>{"\n"}

    {"        "}
    <span className="text-red-500">overflowY</span>
    <span className="text-gray-800">: </span>
    <span className="text-orange-500">"scroll"</span>
    <span className="text-gray-800">,</span>{"\n"}

    {"        "}
    <span className="text-red-500">border</span>
    <span className="text-gray-800">: </span>
    <span className="text-orange-500">"1px solid #ccc"</span>
    <span className="text-gray-800">,</span>{"\n"}

    {"        "}
    <span className="text-red-500">backgroundColor</span>
    <span className="text-gray-800">: </span>
    <span className="text-blue-600">backgroundColor</span>
    <span className="text-gray-800">,</span>{"\n"}

    {"        "}
    <span className="text-red-500">transition</span>
    <span className="text-gray-800">: </span>
    <span className="text-orange-500">"background-color 0.5s ease"</span>
    <span className="text-gray-800">,</span>{"\n"}

    {"      "}
    <span className="text-gray-800">{"}"}</span>{"\n"}

    {"      "}
    <span className="text-purple-600">onScroll</span>
    <span className="text-gray-800">=</span>
    <span className="text-gray-800">{`{handleScroll}`}</span>
    {"\n"}

    {"    "}
    <span className="text-pink-600">&gt;</span>{"\n\n"}

    {"      "}
    <span className="text-pink-600">&lt;p</span>{" "}
    <span className="text-purple-600">style</span>
    <span className="text-gray-800">={"{"}</span>
    <span className="text-red-500">paddingTop</span>
    <span className="text-gray-800">: </span>
    <span className="text-orange-500">"200px"</span>
    <span className="text-gray-800">, </span>
    <span className="text-red-500">textAlign</span>
    <span className="text-gray-800">: </span>
    <span className="text-orange-500">"center"</span>
    <span className="text-gray-800">{"}"}</span>
    <span className="text-pink-600">&gt;</span>
    Scrollable Section
    <span className="text-pink-600">&lt;/p&gt;</span>{"\n\n"}

    {"      "}
    <span className="text-pink-600">&lt;p</span>{" "}
    <span className="text-purple-600">style</span>
    <span className="text-gray-800">={"{"}</span>
    <span className="text-red-500">paddingTop</span>
    <span className="text-gray-800">: </span>
    <span className="text-orange-500">"500px"</span>
    <span className="text-gray-800">, </span>
    <span className="text-red-500">textAlign</span>
    <span className="text-gray-800">: </span>
    <span className="text-orange-500">"center"</span>
    <span className="text-gray-800">{"}"}</span>
    <span className="text-pink-600">&gt;</span>
    Keep scrolling...
    <span className="text-pink-600">&lt;/p&gt;</span>{"\n\n"}

    {"      "}
    <span className="text-pink-600">&lt;p</span>{" "}
    <span className="text-purple-600">style</span>
    <span className="text-gray-800">={"{"}</span>
    <span className="text-red-500">paddingTop</span>
    <span className="text-gray-800">: </span>
    <span className="text-orange-500">"800px"</span>
    <span className="text-gray-800">, </span>
    <span className="text-red-500">textAlign</span>
    <span className="text-gray-800">: </span>
    <span className="text-orange-500">"center"</span>
    <span className="text-gray-800">{"}"}</span>
    <span className="text-pink-600">&gt;</span>
    Background Changes on Scroll
    <span className="text-pink-600">&lt;/p&gt;</span>{"\n"}

    {"    "}
    <span className="text-pink-600">&lt;/div&gt;</span>{"\n"}

    {"  "}){";"}{"\n"}
    <span className="text-gray-800">{"}"}</span>
    {"\n\n"}

    <span className="text-purple-600">export default</span>{" "}
    <span className="text-blue-600">App</span>;
  </code>
</pre>
       
        
        
        
        </div>
    )
}

export default ReactOnScroll;