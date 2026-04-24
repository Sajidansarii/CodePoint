import React, { useContext } from "react";

const UseContextHooks = () => {

    const data = [
        {Feature:'Performance', useContext:'Good (Can cause unnecessary renders)', PropDrilling:'Efficient'},
        {Feature:'Best for', useContext:'Small to medium apps', PropDrilling:'Few component levels'},
        {Feature:'Use Case', useContext:'Global state sharing', PropDrilling:'Passing props manually'},
    ];


    return(
        <div className="max-w-4xl p-6 mt-10">
            <h1 className="lg:text-3xl text-2xl text-blue-500 font-semibold mb-3">React Usecontext Hooks</h1>
            <p>In complex React applications, state management across deeply nested components can become cumbersome. The useContext hook enables efficient state sharing between components, eliminating the need for extensive prop drilling.</p>
            
            <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">What is useContext Hook?</h2>
            <p className="mb-3">The useContext hook lets React components access values from a context. React’s Context API is meant to pass data through the component tree without manually sending props at every level. Introduced in React 16.8, useContext allows functional components to read context values easily.</p>
            <p>It eliminates the need for prop drilling, where data must be manually passed through multiple nested components.</p>
            <ul className="list-[square] space-y-1 mt-5">
                <li>Simplifies access to shared state across components.</li>
                <li>Eliminates prop drilling by removing the need to pass props down many levels.</li>
                <li>Works with React’s Context API to provide global state.</li>
                <li>Perfect for managing themes, authentication, or user preferences.</li>
            </ul>

            <h2 className="text-2xl text-gray-800 font-semibold mt-5">Syntax</h2>
          <pre className="bg-gray-200 text-sm p-4 rounded-lg overflow-x-auto mt-5">
  <code>
    <span className="text-purple-600">const</span>{" "}
    <span className="text-blue-600">contextValue</span>{" "}
    <span className="text-pink-500">=</span>{" "}
    <span className="text-blue-600">useContext</span>
    <span className="text-gray-800">(MyContext)</span>
    <span className="text-pink-500">;</span>
  </code>
</pre>

             <h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">How does it work?</h2>
             <p>The useContext hook facilitates consumption of context values, enabling components to access shared state throughout the component tree without the need for manual prop propagation. Here’s the mechanism:</p>
             <ul className="list-[square] space-y-1 mt-5">
                <li>useContext lets functional components access values from a React Context.</li>
                <li>Create a Context object using React.createContext() to hold shared state.</li>
                <li>Use useContext in any component that needs the value, avoiding prop drilling.</li>
                <li>When the Context value changes, all consuming components re-render automatically.</li>
             </ul>


             <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Creating a Context</h2>
            <p>Before using useContext, you first create a context with React.createContext(). This context holds a value that any child component inside a Context.Provider can access.</p>
           <pre className="bg-gray-200 text-sm p-4 rounded-lg overflow-x-auto mt-5">
  <code>
    <span className="text-purple-600">import</span>{" "}
    <span className="text-gray-800">
      React, {`{ createContext, useContext, useState }`}
    </span>{" "}
    <span className="text-purple-600">from</span>{" "}
    <span className="text-green-600">'react'</span>
    <span className="text-pink-500">;</span>

    {"\n\n"}
    <span className="text-purple-600">const</span>{" "}
    <span className="text-blue-600">MyContext</span>{" "}
    <span className="text-pink-500">=</span>{" "}
    <span className="text-blue-600">createContext</span>
    <span className="text-gray-800">()</span>
    <span className="text-pink-500">;</span>

    {"\n\n"}
    <span className="text-purple-600">function</span>{" "}
    <span className="text-blue-600">App</span>
    <span className="text-gray-800">()</span>
    <span className="text-gray-800">{`{`}</span>

    {"\n"}
    {"  "}
    <span className="text-purple-600">const</span>{" "}
    <span className="text-gray-800">{`[value, setValue]`}</span>{" "}
    <span className="text-pink-500">=</span>{" "}
    <span className="text-blue-600">useState</span>
    <span className="text-gray-800">('Hello, World!')</span>
    <span className="text-pink-500">;</span>

    {"\n\n"}
    {"  "}
    <span className="text-purple-600">return</span>{" "}
    <span className="text-gray-800">(</span>

    {"\n"}
    {"    "}
    <span className="text-blue-600">&lt;MyContext.Provider</span>{" "}
    <span className="text-green-600">value</span>
    <span className="text-pink-500">=</span>
    <span className="text-gray-800">{`{value}`}</span>
    <span className="text-blue-600">&gt;</span>

    {"\n"}
    {"      "}
    <span className="text-blue-600">&lt;ChildComponent /&gt;</span>

    {"\n"}
    {"    "}
    <span className="text-blue-600">&lt;/MyContext.Provider&gt;</span>

    {"\n"}
    {"  "}
    <span className="text-gray-800">)</span>
    <span className="text-pink-500">;</span>

    {"\n"}
    <span className="text-gray-800">{`}`}</span>

    {"\n\n"}
    <span className="text-purple-600">function</span>{" "}
    <span className="text-blue-600">ChildComponent</span>
    <span className="text-gray-800">()</span>
    <span className="text-gray-800">{`{`}</span>

    {"\n"}
    {"  "}
    <span className="text-purple-600">const</span>{" "}
    <span className="text-blue-600">contextValue</span>{" "}
    <span className="text-pink-500">=</span>{" "}
    <span className="text-blue-600">useContext</span>
    <span className="text-gray-800">(MyContext)</span>
    <span className="text-pink-500">;</span>

    {"\n"}
    {"  "}
    <span className="text-purple-600">return</span>{" "}
    <span className="text-gray-800">(</span>
    <span className="text-blue-600">&lt;h1&gt;</span>
    {`{contextValue}`}
    <span className="text-blue-600">&lt;/h1&gt;</span>
    <span className="text-gray-800">)</span>
    <span className="text-pink-500">;</span>

    {"\n"}
    <span className="text-gray-800">{`}`}</span>
  </code>
</pre>


            <p className="mt-5">When you call <span className="text-red-400">createContext()</span>, you get a context object (like MyContext) with a default value. Using MyContext.Provider, you can pass that value to all children inside it. Any component, such as ChildComponent, can use useContext(MyContext) to get the value.</p>
        
        <h2 className="text-3xl text-gray-800 font-semibold mt-10 mb-3">Implementing the useContext Hook</h2>
        <h2 className="text-2xl text-gray-800 font-semibold mb-3">Managing Authentication with useContext</h2>
       <p>You can use useContext to keep track of whether a user is logged in or not and share this state with all components.</p>
     <pre className="bg-gray-200 text-sm p-4 rounded-lg overflow-x-auto mt-5">
  <code>
    <span className="text-purple-600">import</span>{" "}
    <span className="text-gray-800">
      React, {`{ createContext, useContext, useState }`}
    </span>{" "}
    <span className="text-purple-600">from</span>{" "}
    <span className="text-green-600">'react'</span>
    <span className="text-pink-500">;</span>

    {"\n"}
    <span className="text-purple-600">const</span>{" "}
    <span className="text-blue-600">AuthContext</span>{" "}
    <span className="text-pink-500">=</span>{" "}
    <span className="text-blue-600">createContext</span>
    <span className="text-gray-800">()</span>
    <span className="text-pink-500">;</span>

    {"\n\n"}
    <span className="text-purple-600">function</span>{" "}
    <span className="text-blue-600">AuthProvider</span>
    <span className="text-gray-800">{`({ children })`}</span>
    <span className="text-gray-800">{`{`}</span>

    {"\n"}
    {"  "}
    <span className="text-purple-600">const</span>{" "}
    <span className="text-gray-800">{`[isLoggedIn, setIsLoggedIn]`}</span>{" "}
    <span className="text-pink-500">=</span>{" "}
    <span className="text-blue-600">useState</span>
    <span className="text-gray-800">(false)</span>
    <span className="text-pink-500">;</span>

    {"\n\n"}
    {"  "}
    <span className="text-purple-600">return</span>{" "}
    <span className="text-gray-800">(</span>

    {"\n"}
    {"    "}
    <span className="text-blue-600">&lt;AuthContext.Provider</span>{" "}
    <span className="text-green-600">value</span>
    <span className="text-pink-500">=</span>
    <span className="text-gray-800">{`{{ isLoggedIn, setIsLoggedIn }}`}</span>
    <span className="text-blue-600">&gt;</span>

    {"\n"}
    {"      "}
    <span className="text-gray-800">{`{children}`}</span>

    {"\n"}
    {"    "}
    <span className="text-blue-600">&lt;/AuthContext.Provider&gt;</span>

    {"\n"}
    {"  "}
    <span className="text-gray-800">)</span>
    <span className="text-pink-500">;</span>

    {"\n"}
    <span className="text-gray-800">{`}`}</span>

    {"\n\n"}
    <span className="text-purple-600">function</span>{" "}
    <span className="text-blue-600">LoginButton</span>
    <span className="text-gray-800">()</span>
    <span className="text-gray-800">{`{`}</span>

    {"\n"}
    {"  "}
    <span className="text-purple-600">const</span>{" "}
    <span className="text-gray-800">{`{ isLoggedIn, setIsLoggedIn }`}</span>{" "}
    <span className="text-pink-500">=</span>{" "}
    <span className="text-blue-600">useContext</span>
    <span className="text-gray-800">(AuthContext)</span>
    <span className="text-pink-500">;</span>

    {"\n\n"}
    {"  "}
    <span className="text-purple-600">return</span>{" "}
    <span className="text-gray-800">(</span>

    {"\n"}
    {"    "}
    <span className="text-blue-600">&lt;button</span>{" "}
    <span className="text-green-600">onClick</span>
    <span className="text-pink-500">=</span>
    <span className="text-gray-800">{`() => setIsLoggedIn(!isLoggedIn)`}</span>
    <span className="text-blue-600">&gt;</span>

    {"\n"}
    {"      "}
    <span className="text-gray-800">{`{isLoggedIn ? 'Logout' : 'Login'}`}</span>

    {"\n"}
    {"    "}
    <span className="text-blue-600">&lt;/button&gt;</span>

    {"\n"}
    {"  "}
    <span className="text-gray-800">)</span>
    <span className="text-pink-500">;</span>

    {"\n"}
    <span className="text-gray-800">{`}`}</span>

    {"\n\n"}
    <span className="text-purple-600">function</span>{" "}
    <span className="text-blue-600">App</span>
    <span className="text-gray-800">()</span>
    <span className="text-gray-800">{`{`}</span>

    {"\n"}
    {"  "}
    <span className="text-purple-600">return</span>{" "}
    <span className="text-gray-800">(</span>

    {"\n"}
    {"    "}
    <span className="text-blue-600">&lt;AuthProvider&gt;</span>

    {"\n"}
    {"      "}
    <span className="text-blue-600">&lt;LoginButton /&gt;</span>

    {"\n"}
    {"    "}
    <span className="text-blue-600">&lt;/AuthProvider&gt;</span>

    {"\n"}
    {"  "}
    <span className="text-gray-800">)</span>
    <span className="text-pink-500">;</span>

    {"\n"}
    <span className="text-gray-800">{`}`}</span>

    {"\n\n"}
    <span className="text-purple-600">export default</span>{" "}
    <span className="text-blue-600">App</span>
    <span className="text-pink-500">;</span>
  </code>
</pre>

      <p className="mt-5">AuthContext is initialized via createContext(), with AuthProvider handling the isLoggedIn state and supplying it through the context to descendant components. LoginButton consumes isLoggedIn and setIsLoggedIn via useContext to toggle authentication status. The App component renders LoginButton within AuthProvider, supporting dynamic login and logout operations.</p>
      

      <h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">Sharing a Theme Across Components</h2>
      <p>Create a theme context and consume its values in child components using useContext.</p>
   <pre className="bg-gray-200 text-sm p-4 rounded-lg overflow-x-auto mt-5">
  <code>
    <span className="text-purple-600">import</span>{" "}
    <span className="text-gray-800">
      React, {`{ createContext, useContext, useState }`}
    </span>{" "}
    <span className="text-purple-600">from</span>{" "}
    <span className="text-green-600">'react'</span>
    <span className="text-pink-500">;</span>

    {"\n\n"}
    <span className="text-purple-600">const</span>{" "}
    <span className="text-blue-600">ThemeContext</span>{" "}
    <span className="text-pink-500">=</span>{" "}
    <span className="text-blue-600">createContext</span>
    <span className="text-gray-800">()</span>
    <span className="text-pink-500">;</span>

    {"\n\n"}
    <span className="text-purple-600">function</span>{" "}
    <span className="text-blue-600">ThemeProvider</span>
    <span className="text-gray-800">{`({ children })`}</span>
    <span className="text-gray-800">{`{`}</span>

    {"\n"}
    {"  "}
    <span className="text-purple-600">const</span>{" "}
    <span className="text-gray-800">{`[theme, setTheme]`}</span>{" "}
    <span className="text-pink-500">=</span>{" "}
    <span className="text-blue-600">useState</span>
    <span className="text-gray-800">('light')</span>
    <span className="text-pink-500">;</span>

    {"\n\n"}
    {"  "}
    <span className="text-purple-600">const</span>{" "}
    <span className="text-blue-600">toggleTheme</span>{" "}
    <span className="text-pink-500">=</span>{" "}
    <span className="text-gray-800">()</span>{" "}
    <span className="text-pink-500">=&gt;</span>{" "}
    <span className="text-gray-800">{`{`}</span>

    {"\n"}
    {"    "}
    <span className="text-blue-600">setTheme</span>
    <span className="text-gray-800">(prevTheme =&gt; (prevTheme === 'light' ? 'dark' : 'light'))</span>
    <span className="text-pink-500">;</span>

    {"\n"}
    {"  "}
    <span className="text-gray-800">{`}`}</span>
    <span className="text-pink-500">;</span>

    {"\n\n"}
    {"  "}
    <span className="text-purple-600">return</span>{" "}
    <span className="text-gray-800">(</span>

    {"\n"}
    {"    "}
    <span className="text-blue-600">&lt;ThemeContext.Provider</span>{" "}
    <span className="text-green-600">value</span>
    <span className="text-pink-500">=</span>
    <span className="text-gray-800">{`{{ theme, toggleTheme }}`}</span>
    <span className="text-blue-600">&gt;</span>

    {"\n"}
    {"      "}
    <span className="text-gray-800">{`{children}`}</span>

    {"\n"}
    {"    "}
    <span className="text-blue-600">&lt;/ThemeContext.Provider&gt;</span>

    {"\n"}
    {"  "}
    <span className="text-gray-800">)</span>
    <span className="text-pink-500">;</span>

    {"\n"}
    <span className="text-gray-800">{`}`}</span>

    {"\n\n"}
    <span className="text-purple-600">function</span>{" "}
    <span className="text-blue-600">ThemedComponent</span>
    <span className="text-gray-800">()</span>
    <span className="text-gray-800">{`{`}</span>

    {"\n"}
    {"  "}
    <span className="text-purple-600">const</span>{" "}
    <span className="text-gray-800">{`{ theme, toggleTheme }`}</span>{" "}
    <span className="text-pink-500">=</span>{" "}
    <span className="text-blue-600">useContext</span>
    <span className="text-gray-800">(ThemeContext)</span>
    <span className="text-pink-500">;</span>

    {"\n\n"}
    {"  "}
    <span className="text-purple-600">return</span>{" "}
    <span className="text-gray-800">(</span>

    {"\n"}
    {"    "}
    <span className="text-blue-600">&lt;div</span>{" "}
    <span className="text-green-600">style</span>
    <span className="text-pink-500">=</span>
    <span className="text-gray-800">{`{{ background: theme === 'light' ? '#fff' : '#333', color: theme === 'light' ? '#000' : '#fff', padding: '20px', textAlign: 'center' }}`}</span>
    <span className="text-blue-600">&gt;</span>

    {"\n"}
    {"      "}
    <span className="text-blue-600">&lt;p&gt;</span>
    Current Theme: {`{theme}`}
    <span className="text-blue-600">&lt;/p&gt;</span>

    {"\n"}
    {"      "}
    <span className="text-blue-600">&lt;button</span>{" "}
    <span className="text-green-600">onClick</span>
    <span className="text-pink-500">=</span>
    <span className="text-gray-800">{`{toggleTheme}`}</span>
    <span className="text-blue-600">&gt;</span>
    Toggle Theme
    <span className="text-blue-600">&lt;/button&gt;</span>

    {"\n"}
    {"    "}
    <span className="text-blue-600">&lt;/div&gt;</span>

    {"\n"}
    {"  "}
    <span className="text-gray-800">)</span>
    <span className="text-pink-500">;</span>

    {"\n"}
    <span className="text-gray-800">{`}`}</span>

    {"\n\n"}
    <span className="text-purple-600">function</span>{" "}
    <span className="text-blue-600">App</span>
    <span className="text-gray-800">()</span>
    <span className="text-gray-800">{`{`}</span>

    {"\n"}
    {"  "}
    <span className="text-purple-600">return</span>{" "}
    <span className="text-gray-800">(</span>

    {"\n"}
    {"    "}
    <span className="text-blue-600">&lt;ThemeProvider&gt;</span>

    {"\n"}
    {"      "}
    <span className="text-blue-600">&lt;ThemedComponent /&gt;</span>

    {"\n"}
    {"    "}
    <span className="text-blue-600">&lt;/ThemeProvider&gt;</span>

    {"\n"}
    {"  "}
    <span className="text-gray-800">)</span>
    <span className="text-pink-500">;</span>

    {"\n"}
    <span className="text-gray-800">{`}`}</span>

    {"\n\n"}
    <span className="text-purple-600">export default</span>{" "}
    <span className="text-blue-600">App</span>
    <span className="text-pink-500">;</span>
  </code>
</pre>

        <p className="mt-5">First, ThemeContext is made with <span className="text-red-400">createContext()</span>. ThemeProvider keeps track of the current theme and provides a toggleTheme function. ThemedComponent uses useContext(ThemeContext) to get the theme and toggle it. When the button is clicked, it switches between light and dark themes.</p>

       <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">When to Use useContext</h2>
       <p>We need a way to manage global state for themes, authentication, or user preferences. The goal is to avoid prop drilling and allow multiple components to share state easily without relying on a third-party state management library.</p>
       
       <h2 className="text-2xl text-gray-800 font-semibold mt-5">useContext vs Prop Drilling</h2>
       <table className="min-w-full border border-gray-300 text-gray-700 text-sm text-left mt-5">
        <thead>
            <tr className="bg-gray-100">
                <th className="px-4 py-2 border-b border-gray-300 text-gray-700 font-bold">Feature</th>
                <th className="px-4 py-2 border-b border-gray-300 text-gray-700 font-bold">useContext</th>
                <th className="px-4 py-2 border-b border-gray-300 text-gray-700 font-bold">Prop Drilling</th>
            </tr>
        </thead>
        <tbody>
            {data.map((row,index)=>(
                <tr className="cursor-text hover:bg-gray-100">
                    <td className="px-4 py-2 border-b border-gray-300">{row.Feature}</td>
                    <td className="px-4 py-2 border-b border-gray-300">{row.useContext}</td>
                    <td className="px-4 py-2 border-b border-gray-300">{row.PropDrilling}</td>
                </tr>
            ))}
        </tbody>
       </table>

       <h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">Performance Considerations</h2>
      <p>To make your app faster, avoid extra re-renders by using useMemo and useCallback for values and functions. For expensive state setups, use lazy initialization in useState. Always clean up any side effects in useEffect, and try to keep dependencies as small as possible so useEffect doesn’t run more than it needs to.</p>
        </div>
    )
}

export default UseContextHooks;