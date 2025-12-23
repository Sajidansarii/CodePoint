import React from "react";

const ReactVirtual = () => {
    const data = [
        {Feature:'What is it?', RealDOM:'The actual structure of a web page, a tree-like representation of HTML.', VirtualDOM:'A lightweight, in-memory representation of the Real DOM.', ShadowDOM:'A web standard for encapsulating a subtree of DOM elements within a component'},
        {Feature:'Purpose', RealDOM:'Represents the UI, allowing programs to access and modify content.', VirtualDOM:'Optimizes performance by minimizing direct Real DOM manipulations.', ShadowDOM:'Encapsulation of component"s internal structure, styles, and behavior.'},
        {Feature:'Manipulation', RealDOM:'Directly manipulates on-screen elements.', VirtualDOM:'Does not directly manipulate on-screen elements; it"s a diffing mechanism.', ShadowDOM:'Does not directly manipulate on-screen elements; it"s a diffing mechanism.'},
        {Feature:'performance', RealDOM:'Can be slow for frequent updates as it re-renders the entire tree.', VirtualDOM:'Fast updates due to diffing algorithm and batching of changes.', ShadowDOM:'Can enhance performance by isolating styles and behavior, reducing conflicts.'},
        {Feature:'Encapsulation', RealDOM:'No inherent encapsulation; styles and scripts are global', VirtualDOM:'No inherent encapsulation; focuses on update efficiency.', ShadowDOM:'Provides strong encapsulation for styles and JavaScript within a component.'},
        {Feature:'Implementation', RealDOM:'Native to web browsers.', VirtualDOM:'Implemented by JavaScript libraries/frameworks (e.g., React, Vue).', ShadowDOM:'Native web standard implemented by browsers.'},
        {Feature:'Use Case', RealDOM:'Fundamental for all web pages.', VirtualDOM:'Used in modern JavaScript frameworks for efficient UI updates.', ShadowDOM:'Building reusable, self-contained web components with scoped styles.'},
        {Feature:'Direct UI Update', RealDOM:'Yes, direct changes are immediately visible.', VirtualDOM:'No, updates are first applied to the virtual copy, then "patched" to the Real DOM.', ShadowDOM:'No, it"s an isolated part of the DOM, not the primary UI update mechanism.'},
        {Feature:'CSS Scoping', RealDOM:'Global CSS, prone to conflicts.', VirtualDOM:'Global CSS (unless handled by frameworks).', ShadowDOM:'Scoped CSS, styles defined within a Shadow DOM stay within it.'},
    ];


    return(
        <div className="max-w-4xl p-6 mt-10">
            <h1 className="text-3xl text-blue-500 font-semibold mb-3">React Virtual</h1>
            <p>The ReactJS Virtual DOM is an in-memory representation of the Document Object Model that enables efficient updates by modifying only the necessary parts of the actual DOM.</p>
           
           <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">How Does the Virtual DOM Work?</h2>
           <p className="mb-2">During Virtual DOM rendering, React generates a virtual UI representation structured as a tree of JavaScript objects.</p>
           <p className="mb-2">When the state changes, React creates a new Virtual DOM tree to show the updated state.</p>
           <p className="mb-2">Diffing Algorithm: React compares the new Virtual DOM tree with the previous one using its efficient diffing algorithm to identify the minimal set of changes required.</p>
           <p>Updating the Real DOM: React applies only the necessary changes to the real DOM, optimizing rendering performance.</p>
            

            <h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">What is React Fiber?</h2>
            <p>React Fiber is an improved engine that helps React run faster and smoother by splitting work into smaller tasks and handling important updates first.</p>
            
            <h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">Key Features of React’s Virtual DOM</h2>
            <ul className="list-[square] list-inside mt-5 space-y-1">
                <li><span className="font-bold">Efficient Updates</span>: React speeds up rendering by reducing direct changes to the real DOM.</li>
                <li><span className="font-bold">Reconciliation</span>: React smartly updates the UI by comparing changes in the Virtual DOM.</li>
                <li><span className="font-bold">Batching Updates</span>: Multiple state changes are grouped into one render to improve performance.</li>
                <li><span className="font-bold">Cross-Browser Consistency</span>: The Virtual DOM ensures the UI behaves the same across all browsers.</li>
                <li><span className="font-bold">Component-Based Design</span>: The Virtual DOM works smoothly with React components, encouraging reusable and <span className="ml-5">modular</span> code.</li>
            </ul>

            <h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">How React’s Virtual DOM Improves Performance</h2>
            <ul className="list-[square] list-inside mt-5 space-y-1">
                <li><span className="font-bold">Avoids Full DOM Repaints</span>: React changes only what’s needed, not the whole page.</li>
                <li><span className="font-bold">Optimized Rendering</span>: Updates happen at the right time to avoid repeated or wasted rendering.</li>
                <li><span className="font-bold">Reduces JavaScript Execution Time</span>: The Virtual DOM is quicker to work with than the real DOM.</li>
                <li><span className="font-bold">Intelligent Rendering Decisions</span>: React avoids re-rendering components that stay the same.</li>
            </ul>

            <h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">Why React is so Fast?</h2>
           <p>React stays fast by using a Virtual DOM instead of changing the real DOM every time. It figures out what actually needs to change and updates only that, and Fiber helps handle important tasks first so the app feels smooth.</p>
      
         <h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">Frameworks and Libraries Using Virtual DOM</h2>
        <ul className="list-[square] list-inside space-y-1 mt-5">
            <li><span className="font-bold">ReactJS</span>: Introduced the Virtual DOM to make UI updates faster.</li>
            <li><span className="font-bold">Vue.js</span>: Uses the Virtual DOM to easily build reactive user interfaces.</li>
            <li><span className="font-bold">Inferno</span>: A fast and simple library similar to React that relies on the Virtual DOM.</li>
            <li><span className="font-bold">Preact</span>: A compact version of React designed for speed using the Virtual DOM.</li>
        </ul>

        <h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">Is the shadow DOM same as Virtual DOM?</h2>
        <p>No, they are different things. The Virtual DOM is used by libraries like React to make updates faster, while the Shadow DOM is built into browsers to keep a component’s HTML and CSS separate from the rest of the page.</p>
    
    <h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">Real Life Use Cases of Virtual DOM</h2>
    <p>Big websites like Facebook, Instagram, and Netflix use the Virtual DOM to keep their apps fast. It first checks changes in memory and then updates only the necessary parts of the real DOM, making the user experience smoother.</p>
      
      <h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">Real DOM vs Virtual DOM vs Shadow DOM</h2>
        <table className="min-w-4xl border border-gray-300 text-gray-700 font-sm font-left mt-5">
            <thead>
                <tr className="bg-gray-100">
                    <th className="px-4 py-2 border-b border-gray-300 font-semibold text-gray-700">Feature</th>
                    <th className="px-4 py-2 border-b border-gray-300 font-semibold text-gray-700">Real DOM</th>
                    <th className="px-4 py-2 border-b border-gray-300 font-semibold text-gray-700">Virtual DOM</th>
                    <th className="px-4 py-2 border-b border-gray-300 font-semibold text-gray-700">Shadow DOM</th>
                </tr>
            </thead>
            <tbody>
                {data.map((row,index)=>(
                    <tr className="cursor-text hover:bg-gray-100">
                        <td className="px-4 py-2 border-b border-gray-300">{row.Feature}</td>
                        <td className="px-4 py-2 border-b border-gray-300">{row.RealDOM}</td>
                        <td className="px-4 py-2 border-b border-gray-300">{row.VirtualDOM}</td>
                        <td className="px-4 py-2 border-b border-gray-300">{row.ShadowDOM}</td>
                    </tr>
                ))}
            </tbody>
        </table>

        <ul className="list-[square] list-inside mt-5 space-y-1">
            <li>Use the Virtual DOM when you want your app to run fast.</li>
            <li>Shadow DOM helps keep components separate and organized.</li>
            <li>The real DOM is slower, so it’s not the best choice for modern apps.</li>   
        </ul>
      
      
      
      
        </div>
    )
}

export default ReactVirtual;