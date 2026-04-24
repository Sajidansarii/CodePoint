import React  from "react";

const ImportExport = () => {
    return (
        <div className="max-w-4xl p-6 mt-10">
            <h1 className="lg:text-3xl text-2xl text-blue-500 font-semibold mb-3">React Importing and Exporting Components</h1>
            <p>React applications are built using components, which allow you to divide a large user interface into independent, reusable parts. </p>
            <h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">Types of Exports in React</h2>
            <p>In React, there are two types of exports</p>
            <ul className="list-[square] mt-5">
                <li>Default Exports and Imports</li>
                <li>Named Exports and Imports</li>
            </ul>

            <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Default Export and Import</h2>
            <p>With a default export, you can export a single value from a file, and the import can be given any identifier you prefer.</p>
            <h2 className="text-2xl text-gray-800 font-semibold mt-5">Example</h2>
           <pre className="bg-gray-200 p-4 rounded-lg mt-5 overflow-x-auto text-sm">
  <code className="font-mono text-gray-900">

    <span className="text-purple-700">import</span>{" "}
    <span className="text-green-700">React</span>{" "}
    <span className="text-purple-700">from</span>{" "}
    <span className="text-yellow-700">"react"</span>;
    {"\n"}

    <span className="text-purple-700">import</span>{" "}
    <span className="text-green-700">MyComponent</span>{" "}
    <span className="text-purple-700">from</span>{" "}
    <span className="text-yellow-700">"./components/MyComponent"</span>;
    {"\n\n"}

    <span className="text-purple-700">const</span>{" "}
    <span className="text-green-700">App</span> = () =&gt; {"{"}
    {"\n"}

    {"  "}
    <span className="text-purple-700">return</span> (
    {"\n"}

    {"    "}
    &lt;<span className="text-red-600">div</span>&gt;
    {"\n"}

    {"      "}
    &lt;<span className="text-green-700">MyComponent</span> /&gt;{" "}
    <span className="text-gray-500">{"/* Using the imported component */"}</span>
    {"\n"}

    {"    "}
    &lt;/<span className="text-red-600">div</span>&gt;
    {"\n"}

    {"  "}
    );
    {"\n"}

    {"}"};
    {"\n\n"}

    <span className="text-purple-700">export</span>{" "}
    <span className="text-purple-700">default</span>{" "}
    <span className="text-green-700">App</span>;

  </code>
</pre>

            <p className="mt-5">Default export means a module exports a single primary component or variable, and default import brings that value in from another file with whatever name you want.</p>
           <h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">Named Export and Import</h2>
           <p>Named exports let you export several components or variables from one file, and when you import them you must use the exact names they were exported with.</p>
           <h2 className="text-2xl text-gray-800 font-semibold mt-5">Example</h2>
         <pre className="bg-gray-200 p-4 rounded-lg mt-5 overflow-x-auto text-sm">
  <code className="font-mono text-gray-900">

    <span className="text-purple-700">import</span>{" "}
    {"{"}{" "}
    <span className="text-green-700">MyComponent</span>,{" "}
    <span className="text-green-700">AnotherComponent</span>{" "}
    {"}"}{" "}
    <span className="text-purple-700">from</span>{" "}
    <span className="text-yellow-700">"./components/component.js"</span>;
    {"\n\n"}

    <span className="text-purple-700">const</span>{" "}
    <span className="text-green-700">App</span> = () =&gt; {"{"}
    {"\n"}

    {"  "}
    <span className="text-purple-700">return</span> (
    {"\n"}

    {"    "}
    &lt;<span className="text-red-600">div</span>&gt;
    {"\n"}

    {"      "}
    &lt;<span className="text-green-700">MyComponent</span> /&gt;
    {"\n"}

    {"      "}
    &lt;<span className="text-green-700">AnotherComponent</span> /&gt;
    {"\n"}

    {"    "}
    &lt;/<span className="text-red-600">div</span>&gt;
    {"\n"}

    {"  "}
    );
    {"\n"}

    {"}"};
    {"\n\n"}

    <span className="text-purple-700">export</span>{" "}
    <span className="text-purple-700">default</span>{" "}
    <span className="text-green-700">App</span>;

  </code>
</pre>

          <p className="mt-5">The file exports two components (MyComponent and AnotherComponent) using the export keyword so they can be reused elsewhere. In another file, we import these specific components from components.js by wrapping their exact names in{' {}'}, which is called a named import, and then render them inside the App component.</p>
          
          <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3"> Combining Default and Named Exports</h2>
          <p>It’s possible to export one main thing as the default and also export other related components or functions by name from the same module, giving you flexibility in how you import them.</p>
          <h2 className="text-2xl text-gray-800 font-semibold mt-5">Example</h2>
         <pre className="bg-gray-200 p-4 rounded-lg mt-5 overflow-x-auto text-sm">
  <code className="font-mono text-gray-900">

    <span className="text-purple-700">import</span>{" "}
    {"{"}{" "}
    <span className="text-green-700">MyComponent</span>,{" "}
    <span className="text-green-700">AnotherComponent</span>{" "}
    {"}"}{" "}
    <span className="text-purple-700">from</span>{" "}
    <span className="text-yellow-700">"./components/component.js"</span>;
    {"\n\n"}

    <span className="text-purple-700">const</span>{" "}
    <span className="text-green-700">App</span> = () =&gt; {"{"}
    {"\n"}

    {"  "}
    <span className="text-purple-700">return</span> (
    {"\n"}

    {"    "}
    &lt;<span className="text-red-600">div</span>&gt;
    {"\n"}

    {"      "}
    &lt;<span className="text-green-700">MyComponent</span> /&gt;
    {"\n"}

    {"      "}
    &lt;<span className="text-green-700">AnotherComponent</span> /&gt;
    {"\n"}

    {"    "}
    &lt;/<span className="text-red-600">div</span>&gt;
    {"\n"}

    {"  "}
    );
    {"\n"}

    {"}"};
    {"\n\n"}

    <span className="text-purple-700">export</span>{" "}
    <span className="text-purple-700">default</span>{" "}
    <span className="text-green-700">App</span>;

  </code>
</pre>

          <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Exporting Multiple Components from the Same File</h2>
          <p>React supports exporting many things from one file with named exports, but you’re limited to just one default export per module.</p>
          <h2 className="text-gray-800 text-2xl font-semibold mt-5">Example</h2>
         <pre className="bg-gray-200 p-4 rounded-lg mt-5 overflow-x-auto text-sm">
  <code className="font-mono text-gray-900">

    <span className="text-purple-700">import</span>{" "}
    <span className="text-green-700">React</span>{" "}
    <span className="text-purple-700">from</span>{" "}
    <span className="text-yellow-700">"react"</span>;
    {"\n"}

    <span className="text-purple-700">import</span>{" "}
    {"{"} <span className="text-green-700">Header</span>,{" "}
    <span className="text-green-700">Footer</span> {"}"}{" "}
    <span className="text-purple-700">from</span>{" "}
    <span className="text-yellow-700">"./components"</span>;
    {"\n"}

    <span className="text-purple-700">import</span>{" "}
    <span className="text-green-700">MainContent</span>{" "}
    <span className="text-purple-700">from</span>{" "}
    <span className="text-yellow-700">"./components"</span>;
    {"\n\n"}

    <span className="text-purple-700">const</span>{" "}
    <span className="text-green-700">App</span> = () =&gt; {"{"}
    {"\n"}

    {"  "}
    <span className="text-purple-700">return</span> (
    {"\n"}

    {"    "}
    &lt;<span className="text-red-600">div</span>&gt;
    {"\n"}

    {"      "}
    &lt;<span className="text-green-700">Header</span> /&gt;
    {"\n"}

    {"      "}
    &lt;<span className="text-green-700">MainContent</span> /&gt;
    {"\n"}

    {"      "}
    &lt;<span className="text-green-700">Footer</span> /&gt;
    {"\n"}

    {"    "}
    &lt;/<span className="text-red-600">div</span>&gt;
    {"\n"}

    {"  "}
    );
    {"\n"}

    {"}"};
    {"\n\n"}

    <span className="text-purple-700">export</span>{" "}
    <span className="text-purple-700">default</span>{" "}
    <span className="text-green-700">App</span>;

  </code>
</pre>

          <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">When to Use Default Export</h2>
         <p className="mb-3">It’s intended for exporting the main functionality or component from a file.</p>
         <p className="mb-3">When you need the freedom to choose any name when importing.</p>
         <p>It’s suited for exporting the primary component or functionality that defines what the file is mainly about.</p>
         
         
         <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">When to Use Named Export</h2>
        <p className="mb-3">This is useful if a file contains more than one component or utility you want to export. </p>
        <p className="mb-3">When you want consistency in import names.</p>
        <p>Useful for utility functions, constants, or multiple related components.</p>
        
        </div>
    )
}

export default ImportExport;

