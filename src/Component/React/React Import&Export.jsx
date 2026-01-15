import React  from "react";

const ImportExport = () => {
    return (
        <div className="max-w-4xl p-6 mt-10">
            <h1 className="lg:text-3xl text-2xl text-blue-500 font-semibold mb-3">React Importing and Exporting Components</h1>
            <p>React applications are built using components, which allow you to divide a large user interface into independent, reusable parts. </p>
            <h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">Types of Exports in React</h2>
            <p>In React, there are two types of exports</p>
            <ul className="list-[square] list-inside mt-5">
                <li>Default Exports and Imports</li>
                <li>Named Exports and Imports</li>
            </ul>

            <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Default Export and Import</h2>
            <p>With a default export, you can export a single value from a file, and the import can be given any identifier you prefer.</p>
            <h2 className="text-2xl text-gray-800 font-semibold mt-5">Example</h2>
            <pre className="text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5">
                <code>
                    {`import React from "react";
import MyComponent from "./components/MyComponent"; 

const App = () => {
    return (
        <div>
            <MyComponent /> {/* Using the imported component */}
        </div>
    );
};

export default App;`}
                </code>
            </pre>

            <p className="mt-5">Default export means a module exports a single primary component or variable, and default import brings that value in from another file with whatever name you want.</p>
           <h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">Named Export and Import</h2>
           <p>Named exports let you export several components or variables from one file, and when you import them you must use the exact names they were exported with.</p>
           <h2 className="text-2xl text-gray-800 font-semibold mt-5">Example</h2>
          <pre className="text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5">
            <code>
                {`import { MyComponent, AnotherComponent } from "./components/component.js";

const App = () => {
    return (
        <div>
            <MyComponent />
            <AnotherComponent />
        </div>
    );
};

export default App;`}
            </code>
          </pre>

          <p className="mt-5">The file exports two components (MyComponent and AnotherComponent) using the export keyword so they can be reused elsewhere. In another file, we import these specific components from components.js by wrapping their exact names in{' {}'}, which is called a named import, and then render them inside the App component.</p>
          
          <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3"> Combining Default and Named Exports</h2>
          <p>It’s possible to export one main thing as the default and also export other related components or functions by name from the same module, giving you flexibility in how you import them.</p>
          <h2 className="text-2xl text-gray-800 font-semibold mt-5">Example</h2>
          <pre className="text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5">
            <code>
                {`import { MyComponent, AnotherComponent } from "./components/component.js";

const App = () => {
    return (
        <div>
            <MyComponent />
            <AnotherComponent />
        </div>
    );
};

export default App;`}
            </code>
          </pre>

          <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Exporting Multiple Components from the Same File</h2>
          <p>React supports exporting many things from one file with named exports, but you’re limited to just one default export per module.</p>
          <h2 className="text-gray-800 text-2xl font-semibold mt-5">Example</h2>
          <pre className="text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5">
            <code>
                {`import React from "react";
import { Header, Footer } from "./components"; 
import MainContent from "./components"; 

const App = () => {
    return (
        <div>
            <Header />
            <MainContent />
            <Footer />
        </div>
    );
};

export default App;`}
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

