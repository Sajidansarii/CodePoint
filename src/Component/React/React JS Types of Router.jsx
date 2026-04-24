import React from "react";

const ReactRouterTypes = () => {
    return(
        <div className="max-w-4xl p-6 mt-10">
            <h1 className="text-3xl text-blue-500 font-semibold mb-3">React JS Types of Router</h1>
            <p>When developing a React application, effective navigation between views is essential. React Router provides a standard approach to routing, enabling seamless transitions without disrupting the Single Page Application (SPA) architecture.</p>
           
           <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">What is React Router?</h2>
           <p>React Router is a declarative, component-driven routing library for React applications, allowing seamless page navigation without full reloads, thereby improving performance and responsiveness.</p>
           <ul className="list-[square] space-y-1 mt-5">
            <li>Handles routing on the client side in React apps.</li>
            <li>Lets you create nested routes to organize pages better.</li>
            <li>Supports dynamic routes with parameters.</li>
            <li>Allows navigation through code using hooks like <span className="text-red-400 bg-gray-50">useNavigate()</span>.</li>
           </ul>

           <p className="mt-5">Prior to exploring the various router types, ensure that React Router DOM is installed in your React application.</p>
       <pre className="bg-gray-100 text-gray-800 p-4 rounded-lg mt-5 overflow-x-auto">
  <code>
    <span className="text-green-600">npm</span>{" "}
    <span className="text-blue-600">install</span>{" "}
    <span className="text-purple-600">react-router-dom</span>
  </code>
</pre>

         <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Types of Routers in React</h2>
         <p>React includes multiple types of routers to handle different navigation scenarios. The main routers you should know are:</p>
        <ul className="list-[square] space-y-1 mt-5">
            <li>1. Browser Router ({'<BrowserRouter>'})</li>
            <li>2. Hash Router ({'<HashRouter>'})</li>
            <li>3. Memory Router ({'<MemoryRouter>'})</li>
            <li>4. Static Router ({'<StaticRouter>'})</li>
            <li>5. Native Router ({'<NativeRouter>'})</li>
        </ul>

        <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">1. Browser Router</h2>
        <p>BrowserRouter is the most commonly used router when building React applications for web deployment.</p>
       <ul className="list-[square] space-y-1 mt-5">
        <li>Implements navigation through the HTML5 history API.</li>
        <li>Supports human-friendly URLs free of hash fragments.</li>
        <li>Utilizes pushState, replaceState, and the popState event to synchronize the interface with the current URL.</li>
       </ul>

       <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">When to Use BrowserRouter</h2>
       <p>BrowserRouter is a robust and frequently employed router in React applications, suitable for web projects requiring clean, search-engine-friendly URLs and server-side routing capabilities.</p>
       <ul className="list-[square] space-y-1 mt-5">
        <li><span className="font-semibold">Hosting on a Web Server with Proper Routing:</span>BrowserRouter performs best when the application is deployed on a web server capable of handling dynamic, server-side routing.</li>
        <li><span className="font-semibold">Improved SEO:</span>Since BrowserRouter produces hash-free URLs, it improves search engine crawling and indexing of your pages.</li>
        <li><span className="font-semibold">Single Page Applications (SPA):</span> BrowserRouter is commonly used in SPAs, where the entire app runs on a single page.</li>
        <li><span className="font-semibold">Handling Multiple Views or Pages:</span> If your app includes multiple views or pages BrowserRouter helps manage these views by linking each one to a specific URL.</li>
       </ul>

     <pre className="bg-gray-100 text-gray-800 p-4 rounded-lg mt-5 overflow-x-auto">
  <code>
    <span className="text-purple-600">import</span>{" "}
    <span className="text-gray-900">React</span>{" "}
    <span className="text-purple-600">from</span>{" "}
    <span className="text-orange-500">"react"</span>;
    {"\n"}
    
    <span className="text-purple-600">import</span>{" "}
    <span className="text-gray-900">{`{ BrowserRouter, Routes, Route, Link }`}</span>{" "}
    <span className="text-purple-600">from</span>{" "}
    <span className="text-orange-500">"react-router-dom"</span>;
    {"\n"}
    
    <span className="text-purple-600">import</span>{" "}
    <span className="text-gray-900">Home</span>{" "}
    <span className="text-purple-600">from</span>{" "}
    <span className="text-orange-500">"./components/Home"</span>;
    {"\n"}
    
    <span className="text-purple-600">import</span>{" "}
    <span className="text-gray-900">About</span>{" "}
    <span className="text-purple-600">from</span>{" "}
    <span className="text-orange-500">"./components/About"</span>;
    {"\n"}
    
    <span className="text-purple-600">import</span>{" "}
    <span className="text-gray-900">Contact</span>{" "}
    <span className="text-purple-600">from</span>{" "}
    <span className="text-orange-500">"./components/Contact"</span>;
    {"\n\n"}

    <span className="text-purple-600">const</span>{" "}
    <span className="text-blue-600">App</span>{" "}
    <span className="text-gray-800">= () =&gt; {"{"}</span>{"\n"}
    
    {"  "}
    <span className="text-purple-600">return</span>{" ("}{"\n"}
    
    {"    "}
    <span className="text-pink-600">&lt;BrowserRouter&gt;</span>{"\n"}
    
    {"      "}
    <span className="text-pink-600">&lt;div</span>{" "}
    <span className="text-purple-600">style</span>
    <span className="text-gray-800">=</span>
    <span className="text-gray-900">{`{{ fontFamily: "Arial, sans-serif" }}`}</span>
    <span className="text-pink-600">&gt;</span>{"\n\n"}

    {"        "}
    <span className="text-gray-500">{/* Navigation Bar */}</span>{"\n"}

    {"        "}
    <span className="text-pink-600">&lt;nav</span>{" "}
    <span className="text-purple-600">style</span>
    <span className="text-gray-800">=</span>
    <span className="text-gray-900">{`{{ backgroundColor: "#333", padding: "10px", display: "flex", justifyContent: "center" }}`}</span>
    <span className="text-pink-600">&gt;</span>{"\n"}

    {"          "}
    <span className="text-pink-600">&lt;ul</span>{" "}
    <span className="text-purple-600">style</span>
    <span className="text-gray-800">=</span>
    <span className="text-gray-900">{`{{ listStyle: "none", display: "flex", gap: "20px", padding: 0, margin: 0 }}`}</span>
    <span className="text-pink-600">&gt;</span>{"\n\n"}

    {"            "}
    <span className="text-pink-600">&lt;li&gt;</span>{"\n"}
    {"              "}
    <span className="text-pink-600">&lt;Link</span>{" "}
    <span className="text-purple-600">to</span>
    <span className="text-gray-800">=</span>
    <span className="text-orange-500">"/"</span>{" "}
    <span className="text-purple-600">style</span>
    <span className="text-gray-800">=</span>
    <span className="text-gray-900">{"{linkStyle}"}</span>
    <span className="text-pink-600">&gt;</span>
    Home
    <span className="text-pink-600">&lt;/Link&gt;</span>{"\n"}
    {"            "}
    <span className="text-pink-600">&lt;/li&gt;</span>{"\n\n"}

    {"            "}
    <span className="text-pink-600">&lt;li&gt;</span>{"\n"}
    {"              "}
    <span className="text-pink-600">&lt;Link</span>{" "}
    <span className="text-purple-600">to</span>
    <span className="text-gray-800">=</span>
    <span className="text-orange-500">"/about"</span>{" "}
    <span className="text-purple-600">style</span>
    <span className="text-gray-800">=</span>
    <span className="text-gray-900">{"{linkStyle}"}</span>
    <span className="text-pink-600">&gt;</span>
    About Us
    <span className="text-pink-600">&lt;/Link&gt;</span>{"\n"}
    {"            "}
    <span className="text-pink-600">&lt;/li&gt;</span>{"\n\n"}

    {"            "}
    <span className="text-pink-600">&lt;li&gt;</span>{"\n"}
    {"              "}
    <span className="text-pink-600">&lt;Link</span>{" "}
    <span className="text-purple-600">to</span>
    <span className="text-gray-800">=</span>
    <span className="text-orange-500">"/contact"</span>{" "}
    <span className="text-purple-600">style</span>
    <span className="text-gray-800">=</span>
    <span className="text-gray-900">{"{linkStyle}"}</span>
    <span className="text-pink-600">&gt;</span>
    Contact Us
    <span className="text-pink-600">&lt;/Link&gt;</span>{"\n"}
    {"            "}
    <span className="text-pink-600">&lt;/li&gt;</span>{"\n\n"}

    {"          "}
    <span className="text-pink-600">&lt;/ul&gt;</span>{"\n"}
    {"        "}
    <span className="text-pink-600">&lt;/nav&gt;</span>{"\n\n"}

    {"        "}
    <span className="text-gray-500">{/* Page Content */}</span>{"\n"}
    {"        "}
    <span className="text-pink-600">&lt;div</span>{" "}
    <span className="text-purple-600">style</span>
    <span className="text-gray-800">=</span>
    <span className="text-gray-900">{`{{ display: "flex", justifyContent: "center", padding: "20px" }}`}</span>
    <span className="text-pink-600">&gt;</span>{"\n"}
    
    {"          "}
    <span className="text-pink-600">&lt;Routes&gt;</span>{"\n"}
    {"            "}
    <span className="text-pink-600">&lt;Route</span>{" "}
    <span className="text-purple-600">path</span>
    <span className="text-gray-800">=</span>
    <span className="text-orange-500">"/"</span>{" "}
    <span className="text-purple-600">element</span>
    <span className="text-gray-800">=</span>
    <span className="text-pink-600">{`<Home />`}</span>
    <span className="text-pink-600"> /&gt;</span>{"\n"}
    
    {"            "}
    <span className="text-pink-600">&lt;Route</span>{" "}
    <span className="text-purple-600">path</span>
    <span className="text-gray-800">=</span>
    <span className="text-orange-500">"/about"</span>{" "}
    <span className="text-purple-600">element</span>
    <span className="text-gray-800">=</span>
    <span className="text-pink-600">{`<About />`}</span>
    <span className="text-pink-600"> /&gt;</span>{"\n"}
    
    {"            "}
    <span className="text-pink-600">&lt;Route</span>{" "}
    <span className="text-purple-600">path</span>
    <span className="text-gray-800">=</span>
    <span className="text-orange-500">"/contact"</span>{" "}
    <span className="text-purple-600">element</span>
    <span className="text-gray-800">=</span>
    <span className="text-pink-600">{`<Contact />`}</span>
    <span className="text-pink-600"> /&gt;</span>{"\n"}
    
    {"          "}
    <span className="text-pink-600">&lt;/Routes&gt;</span>{"\n"}
    {"        "}
    <span className="text-pink-600">&lt;/div&gt;</span>{"\n\n"}

    {"      "}
    <span className="text-pink-600">&lt;/div&gt;</span>{"\n"}
    {"    "}
    <span className="text-pink-600">&lt;/BrowserRouter&gt;</span>{"\n"}
    {"  "}){"\n"}
    <span className="text-gray-800">{"}"}</span>;
    {"\n\n"}

    <span className="text-purple-600">const</span>{" "}
    <span className="text-blue-600">linkStyle</span>{" "}
    <span className="text-gray-800">=</span>{" "}
    <span className="text-gray-900">{`{ textDecoration: "none", color: "white", fontSize: "18px", fontWeight: "bold" }`}</span>;
    {"\n\n"}

    <span className="text-purple-600">export</span>{" "}
    <span className="text-purple-600">default</span>{" "}
    <span className="text-blue-600">App</span>;
  </code>
</pre>

       <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">In this code</h2>
       <ul className="list-[square] space-y-1 mt-5">
        <li><span className="font-semibold">Home.js</span>: React component rendering the home page with a welcome message.</li>
        <li><span className="font-semibold">About.js</span>: Displays an "About Us" section with a link to GeeksforGeeks.</li>
        <li><span className="font-semibold">Contact.js</span>: Renders contact details including the GeeksforGeeks Noida address.</li>
        <li><span className="font-semibold">App.js</span>: Implements routing using BrowserRouter for SEO-friendly URLs (e.g., /about). Defines routes and a navigation menu.</li>
       </ul>

       <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">2. Memory Router</h2>
       <p>MemoryRouter is designed for non-browser environments, such as testing or mobile applications. It maintains navigation history internally without altering the URL, which is ideal for testing and scenarios without a traditional browser.</p>
       <ul className="list-[square] space-y-1 mt-5">
        <li><span className="font-semibold">No URL Change</span>: Unlike BrowserRouter or HashRouter, MemoryRouter maintains routing state internally without altering the browser’s URL.</li>
        <li><span className="font-semibold">In-memory History</span>: Navigation history is managed in memory rather than in the browser, making it suitable for testing and non-browser applications.</li>
       </ul>

       <h2 className="text-2xl text-gray-800 font-semibold mt-5">When to Use Memory Router</h2>
       <ul className="list-[square] space-y-1 mt-5">
        <li><span className="font-semibold">Server-Side Rendering (SSR)</span>: For rendering React components on the server where URLs aren’t used.</li>
        <li><span className="font-semibold">Testing</span>: Lets you test routing logic without changing the browser URL.</li>
        <li><span className="font-semibold">React Native</span>: Handles navigation in mobile apps that don’t use URLs.</li>
        <li><span className="font-semibold">Non-Browser Environments</span>: Useful in apps like Electron where no browser URL exists.</li>
       <li><span className="font-semibold">When URL Doesn’t Matter</span>: Manages routes internally when you don’t need URL updates.</li>
       </ul>

     <pre className="bg-gray-100 text-gray-800 p-4 rounded-lg mt-5 overflow-x-auto">
  <code>
    <span className="text-purple-600">import</span>{" "}
    <span className="text-gray-900">React</span>{" "}
    <span className="text-purple-600">from</span>{" "}
    <span className="text-orange-500">"react"</span>;
    {"\n"}

    <span className="text-purple-600">import</span>{" "}
    <span className="text-gray-900">{`{ MemoryRouter, Routes, Route, Link }`}</span>{" "}
    <span className="text-purple-600">from</span>{" "}
    <span className="text-orange-500">"react-router-dom"</span>;
    {"\n"}

    <span className="text-purple-600">import</span>{" "}
    <span className="text-gray-900">Home</span>{" "}
    <span className="text-purple-600">from</span>{" "}
    <span className="text-orange-500">"./components/Home"</span>;
    {"\n"}

    <span className="text-purple-600">import</span>{" "}
    <span className="text-gray-900">About</span>{" "}
    <span className="text-purple-600">from</span>{" "}
    <span className="text-orange-500">"./components/About"</span>;
    {"\n"}

    <span className="text-purple-600">import</span>{" "}
    <span className="text-gray-900">Contact</span>{" "}
    <span className="text-purple-600">from</span>{" "}
    <span className="text-orange-500">"./components/Contact"</span>;
    {"\n\n"}

    <span className="text-purple-600">const</span>{" "}
    <span className="text-blue-600">App</span>{" "}
    <span className="text-gray-800">= () =&gt; {"{"}</span>{"\n"}
    
    {"  "}
    <span className="text-purple-600">return</span>{" ("}{"\n"}
    
    {"    "}
    <span className="text-pink-600">&lt;MemoryRouter&gt;</span>{"\n"}
    
    {"      "}
    <span className="text-pink-600">&lt;div</span>{" "}
    <span className="text-purple-600">style</span>
    <span className="text-gray-800">=</span>
    <span className="text-gray-900">{`{{ fontFamily: "Arial, sans-serif" }}`}</span>
    <span className="text-pink-600">&gt;</span>{"\n\n"}

    {"        "}
    <span className="text-gray-500">{/* Navigation Bar */}</span>{"\n"}

    {"        "}
    <span className="text-pink-600">&lt;nav</span>{" "}
    <span className="text-purple-600">style</span>
    <span className="text-gray-800">=</span>
    <span className="text-gray-900">{`{{ backgroundColor: "#333", padding: "10px", display: "flex", justifyContent: "center" }}`}</span>
    <span className="text-pink-600">&gt;</span>{"\n"}

    {"          "}
    <span className="text-pink-600">&lt;ul</span>{" "}
    <span className="text-purple-600">style</span>
    <span className="text-gray-800">=</span>
    <span className="text-gray-900">{`{{ listStyle: "none", display: "flex", gap: "20px", padding: 0, margin: 0 }}`}</span>
    <span className="text-pink-600">&gt;</span>{"\n\n"}

    {"            "}
    <span className="text-pink-600">&lt;li&gt;</span>{"\n"}
    {"              "}
    <span className="text-pink-600">&lt;Link</span>{" "}
    <span className="text-purple-600">to</span>
    <span className="text-gray-800">=</span>
    <span className="text-orange-500">"/"</span>{" "}
    <span className="text-purple-600">style</span>
    <span className="text-gray-800">=</span>
    <span className="text-gray-900">{"{linkStyle}"}</span>
    <span className="text-pink-600">&gt;</span>
    Home
    <span className="text-pink-600">&lt;/Link&gt;</span>{"\n"}
    {"            "}
    <span className="text-pink-600">&lt;/li&gt;</span>{"\n\n"}

    {"            "}
    <span className="text-pink-600">&lt;li&gt;</span>{"\n"}
    {"              "}
    <span className="text-pink-600">&lt;Link</span>{" "}
    <span className="text-purple-600">to</span>
    <span className="text-gray-800">=</span>
    <span className="text-orange-500">"/about"</span>{" "}
    <span className="text-purple-600">style</span>
    <span className="text-gray-800">=</span>
    <span className="text-gray-900">{"{linkStyle}"}</span>
    <span className="text-pink-600">&gt;</span>
    About Us
    <span className="text-pink-600">&lt;/Link&gt;</span>{"\n"}
    {"            "}
    <span className="text-pink-600">&lt;/li&gt;</span>{"\n\n"}

    {"            "}
    <span className="text-pink-600">&lt;li&gt;</span>{"\n"}
    {"              "}
    <span className="text-pink-600">&lt;Link</span>{" "}
    <span className="text-purple-600">to</span>
    <span className="text-gray-800">=</span>
    <span className="text-orange-500">"/contact"</span>{" "}
    <span className="text-purple-600">style</span>
    <span className="text-gray-800">=</span>
    <span className="text-gray-900">{"{linkStyle}"}</span>
    <span className="text-pink-600">&gt;</span>
    Contact Us
    <span className="text-pink-600">&lt;/Link&gt;</span>{"\n"}
    {"            "}
    <span className="text-pink-600">&lt;/li&gt;</span>{"\n\n"}

    {"          "}
    <span className="text-pink-600">&lt;/ul&gt;</span>{"\n"}
    {"        "}
    <span className="text-pink-600">&lt;/nav&gt;</span>{"\n\n"}

    {"        "}
    <span className="text-gray-500">{/* Page Content */}</span>{"\n"}
    {"        "}
    <span className="text-pink-600">&lt;div</span>{" "}
    <span className="text-purple-600">style</span>
    <span className="text-gray-800">=</span>
    <span className="text-gray-900">{`{{ display: "flex", justifyContent: "center", padding: "20px" }}`}</span>
    <span className="text-pink-600">&gt;</span>{"\n"}
    
    {"          "}
    <span className="text-pink-600">&lt;Routes&gt;</span>{"\n"}
    {"            "}
    <span className="text-pink-600">&lt;Route</span>{" "}
    <span className="text-purple-600">path</span>
    <span className="text-gray-800">=</span>
    <span className="text-orange-500">"/"</span>{" "}
    <span className="text-purple-600">element</span>
    <span className="text-gray-800">=</span>
    <span className="text-pink-600">{`<Home />`}</span>
    <span className="text-pink-600"> /&gt;</span>{"\n"}
    
    {"            "}
    <span className="text-pink-600">&lt;Route</span>{" "}
    <span className="text-purple-600">path</span>
    <span className="text-gray-800">=</span>
    <span className="text-orange-500">"/about"</span>{" "}
    <span className="text-purple-600">element</span>
    <span className="text-gray-800">=</span>
    <span className="text-pink-600">{`<About />`}</span>
    <span className="text-pink-600"> /&gt;</span>{"\n"}
    
    {"            "}
    <span className="text-pink-600">&lt;Route</span>{" "}
    <span className="text-purple-600">path</span>
    <span className="text-gray-800">=</span>
    <span className="text-orange-500">"/contact"</span>{" "}
    <span className="text-purple-600">element</span>
    <span className="text-gray-800">=</span>
    <span className="text-pink-600">{`<Contact />`}</span>
    <span className="text-pink-600"> /&gt;</span>{"\n"}
    
    {"          "}
    <span className="text-pink-600">&lt;/Routes&gt;</span>{"\n"}
    {"        "}
    <span className="text-pink-600">&lt;/div&gt;</span>{"\n\n"}

    {"      "}
    <span className="text-pink-600">&lt;/div&gt;</span>{"\n"}
    {"    "}
    <span className="text-pink-600">&lt;/MemoryRouter&gt;</span>{"\n"}
    {"  "}){"\n"}
    <span className="text-gray-800">{"}"}</span>;
    {"\n\n"}

    <span className="text-purple-600">const</span>{" "}
    <span className="text-blue-600">linkStyle</span>{" "}
    <span className="text-gray-800">=</span>{" "}
    <span className="text-gray-900">{`{ textDecoration: "none", color: "white", fontSize: "18px", fontWeight: "bold" }`}</span>;
    {"\n\n"}

    <span className="text-purple-600">export</span>{" "}
    <span className="text-purple-600">default</span>{" "}
    <span className="text-blue-600">App</span>;
  </code>
</pre>

     <h2 className="text-2xl text-gray-800 font-semibold mt-5">In this code</h2>
     <ul className="list-[square] space-y-1 mt-5">
        <li><span className="font-semibold">About.js</span>: Presents an "About Us" section including a brief overview of GeeksforGeeks and a navigable link to its website.</li>
        <li><span className="font-semibold">Contact.js</span>: Renders a "Contact Us" section featuring the GeeksforGeeks Noida address with formatted, bold styling.</li>
        <li>When integrated with React Router, these components correspond to the /contact and /about routes.</li>
    </ul>  


    <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">3. Hash Router</h2>
    <p>HashRouter is a type of router in React that leverages the hash portion of the URL (following #) for routing purposes.</p>
    <ul className="list-[square] space-y-1 mt-5">
        <li>HashRouter uses the # in the URL to indicate routes (e.g., http://example.com/#/home).</li>
        <li>The hash segment is handled entirely on the client and is not transmitted to the server.</li>
        <li>Useful in scenarios where standard URLs and server-side routing are unavailable.</li>
    </ul>

    <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">When to Use Hash Router</h2>
    <p>HashRouter is a lightweight router in React that leverages URL hashes for navigation, particularly suited for environments lacking server-side routing.</p>
    
    <ul className="list-[square] space-y-1 mt-5">
        <li><span className="font-semibold">Hosting on Static Servers</span>: HashRouter is best suited for deployment on static file servers, such as GitHub Pages, which cannot support dynamic routing.</li>
        <li><span className="font-semibold">Absence of Server-Side Routing</span>: Useful when server-side routing is unavailable or cannot be configured, keeping all routing on the client-side.</li>
        <li><span className="font-semibold">Lightweight Projects</span>: For smaller applications or prototypes not requiring SEO-friendly or clean URLs, HashRouter provides a straightforward routing solution.</li>
    </ul>

   <pre className="bg-gray-100 text-gray-800 p-4 rounded-lg mt-5 overflow-x-auto">
  <code>
    <span className="text-purple-600">import</span>{" "}
    <span className="text-gray-900">React</span>{" "}
    <span className="text-purple-600">from</span>{" "}
    <span className="text-orange-500">"react"</span>;
    {"\n"}

    <span className="text-purple-600">import</span>{" "}
    <span className="text-gray-900">{`{ HashRouter, Routes, Route, Link }`}</span>{" "}
    <span className="text-purple-600">from</span>{" "}
    <span className="text-orange-500">"react-router-dom"</span>;
    {"\n"}

    <span className="text-purple-600">import</span>{" "}
    <span className="text-gray-900">Home</span>{" "}
    <span className="text-purple-600">from</span>{" "}
    <span className="text-orange-500">"./components/Home"</span>;
    {"\n"}

    <span className="text-purple-600">import</span>{" "}
    <span className="text-gray-900">About</span>{" "}
    <span className="text-purple-600">from</span>{" "}
    <span className="text-orange-500">"./components/About"</span>;
    {"\n"}

    <span className="text-purple-600">import</span>{" "}
    <span className="text-gray-900">Contact</span>{" "}
    <span className="text-purple-600">from</span>{" "}
    <span className="text-orange-500">"./components/Contact"</span>;
    {"\n\n"}

    <span className="text-purple-600">const</span>{" "}
    <span className="text-blue-600">App</span>{" "}
    <span className="text-gray-800">= () =&gt; {"{"}</span>{"\n"}
    
    {"  "}
    <span className="text-purple-600">return</span>{" ("}{"\n"}
    
    {"    "}
    <span className="text-pink-600">&lt;HashRouter&gt;</span>{"\n"}
    
    {"      "}
    <span className="text-pink-600">&lt;div</span>{" "}
    <span className="text-purple-600">style</span>
    <span className="text-gray-800">=</span>
    <span className="text-gray-900">{`{{ fontFamily: "Arial, sans-serif" }}`}</span>
    <span className="text-pink-600">&gt;</span>{"\n\n"}

    {"        "}
    <span className="text-gray-500">{/* Navigation Bar */}</span>{"\n"}

    {"        "}
    <span className="text-pink-600">&lt;nav</span>{" "}
    <span className="text-purple-600">style</span>
    <span className="text-gray-800">=</span>
    <span className="text-gray-900">{`{{ backgroundColor: "#333", padding: "10px", display: "flex", justifyContent: "center" }}`}</span>
    <span className="text-pink-600">&gt;</span>{"\n"}

    {"          "}
    <span className="text-pink-600">&lt;ul</span>{" "}
    <span className="text-purple-600">style</span>
    <span className="text-gray-800">=</span>
    <span className="text-gray-900">{`{{ listStyle: "none", display: "flex", gap: "20px", padding: 0, margin: 0 }}`}</span>
    <span className="text-pink-600">&gt;</span>{"\n\n"}

    {"            "}
    <span className="text-pink-600">&lt;li&gt;</span>{"\n"}
    {"              "}
    <span className="text-pink-600">&lt;Link</span>{" "}
    <span className="text-purple-600">to</span>
    <span className="text-gray-800">=</span>
    <span className="text-orange-500">"/"</span>{" "}
    <span className="text-purple-600">style</span>
    <span className="text-gray-800">=</span>
    <span className="text-gray-900">{"{linkStyle}"}</span>
    <span className="text-pink-600">&gt;</span>
    Home
    <span className="text-pink-600">&lt;/Link&gt;</span>{"\n"}
    {"            "}
    <span className="text-pink-600">&lt;/li&gt;</span>{"\n\n"}

    {"            "}
    <span className="text-pink-600">&lt;li&gt;</span>{"\n"}
    {"              "}
    <span className="text-pink-600">&lt;Link</span>{" "}
    <span className="text-purple-600">to</span>
    <span className="text-gray-800">=</span>
    <span className="text-orange-500">"/about"</span>{" "}
    <span className="text-purple-600">style</span>
    <span className="text-gray-800">=</span>
    <span className="text-gray-900">{"{linkStyle}"}</span>
    <span className="text-pink-600">&gt;</span>
    About Us
    <span className="text-pink-600">&lt;/Link&gt;</span>{"\n"}
    {"            "}
    <span className="text-pink-600">&lt;/li&gt;</span>{"\n\n"}

    {"            "}
    <span className="text-pink-600">&lt;li&gt;</span>{"\n"}
    {"              "}
    <span className="text-pink-600">&lt;Link</span>{" "}
    <span className="text-purple-600">to</span>
    <span className="text-gray-800">=</span>
    <span className="text-orange-500">"/contact"</span>{" "}
    <span className="text-purple-600">style</span>
    <span className="text-gray-800">=</span>
    <span className="text-gray-900">{"{linkStyle}"}</span>
    <span className="text-pink-600">&gt;</span>
    Contact Us
    <span className="text-pink-600">&lt;/Link&gt;</span>{"\n"}
    {"            "}
    <span className="text-pink-600">&lt;/li&gt;</span>{"\n\n"}

    {"          "}
    <span className="text-pink-600">&lt;/ul&gt;</span>{"\n"}
    {"        "}
    <span className="text-pink-600">&lt;/nav&gt;</span>{"\n\n"}

    {"        "}
    <span className="text-gray-500">{/* Page Content */}</span>{"\n"}
    {"        "}
    <span className="text-pink-600">&lt;div</span>{" "}
    <span className="text-purple-600">style</span>
    <span className="text-gray-800">=</span>
    <span className="text-gray-900">{`{{ display: "flex", justifyContent: "center", padding: "20px" }}`}</span>
    <span className="text-pink-600">&gt;</span>{"\n"}
    
    {"          "}
    <span className="text-pink-600">&lt;Routes&gt;</span>{"\n"}
    {"            "}
    <span className="text-pink-600">&lt;Route</span>{" "}
    <span className="text-purple-600">path</span>
    <span className="text-gray-800">=</span>
    <span className="text-orange-500">"/"</span>{" "}
    <span className="text-purple-600">element</span>
    <span className="text-gray-800">=</span>
    <span className="text-pink-600">{`<Home />`}</span>
    <span className="text-pink-600"> /&gt;</span>{"\n"}
    
    {"            "}
    <span className="text-pink-600">&lt;Route</span>{" "}
    <span className="text-purple-600">path</span>
    <span className="text-gray-800">=</span>
    <span className="text-orange-500">"/about"</span>{" "}
    <span className="text-purple-600">element</span>
    <span className="text-gray-800">=</span>
    <span className="text-pink-600">{`<About />`}</span>
    <span className="text-pink-600"> /&gt;</span>{"\n"}
    
    {"            "}
    <span className="text-pink-600">&lt;Route</span>{" "}
    <span className="text-purple-600">path</span>
    <span className="text-gray-800">=</span>
    <span className="text-orange-500">"/contact"</span>{" "}
    <span className="text-purple-600">element</span>
    <span className="text-gray-800">=</span>
    <span className="text-pink-600">{`<Contact />`}</span>
    <span className="text-pink-600"> /&gt;</span>{"\n"}
    
    {"          "}
    <span className="text-pink-600">&lt;/Routes&gt;</span>{"\n"}
    {"        "}
    <span className="text-pink-600">&lt;/div&gt;</span>{"\n\n"}

    {"      "}
    <span className="text-pink-600">&lt;/div&gt;</span>{"\n"}
    {"    "}
    <span className="text-pink-600">&lt;/HashRouter&gt;</span>{"\n"}
    {"  "}){"\n"}
    <span className="text-gray-800">{"}"}</span>;
    {"\n\n"}

    <span className="text-purple-600">const</span>{" "}
    <span className="text-blue-600">linkStyle</span>{" "}
    <span className="text-gray-800">=</span>{" "}
    <span className="text-gray-900">{`{ textDecoration: "none", color: "white", fontSize: "18px", fontWeight: "bold" }`}</span>;
    {"\n\n"}

    <span className="text-purple-600">export</span>{" "}
    <span className="text-purple-600">default</span>{" "}
    <span className="text-blue-600">App</span>;
  </code>
</pre>
    <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">In this code</h2>
    <ul className="list-[square] space-y-1 mt-5">
        <li><span className="font-semibold">Home.js</span>: Renders a basic home page containing a heading and welcome message.</li>
        <li><span className="font-semibold">About.js</span>: Presents an "About Us" section with a brief description of GeeksforGeeks and an interactive link.</li>
        <li><span className="font-semibold">Contact.js</span>: Renders a "Contact Us" section showing the GeeksforGeeks Noida address.</li>
        <li><span className="font-semibold">App.js</span>: Implements navigation using HashRouter. Defines routes and a navigation menu for Home, About, and Contact components.</li>
    </ul>

    <p className="mt-5">Routing is a core concept in React that enables the creation of interactive and dynamic applications. Understanding various routers, such as BrowserRouter and HashRouter, allows developers to select the most suitable solution for their project, ensuring efficient and error-free navigation.</p>

        </div>
    )
}

export default ReactRouterTypes;