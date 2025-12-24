import React, { useContext } from "react";

const UseContextHooks = () => {

    const data = [
        {Feature:'Performance', useContext:'Good (Can cause unnecessary renders)', PropDrilling:'Efficient'},
        {Feature:'Best for', useContext:'Small to medium apps', PropDrilling:'Few component levels'},
        {Feature:'Use Case', useContext:'Global state sharing', PropDrilling:'Passing props manually'},
    ];


    return(
        <div className="max-w-4xl p-6 mt-10">
            <h1 className="text-3xl text-blue-500 font-semibold mb-3">React Usecontext Hooks</h1>
            <p>In complex React applications, state management across deeply nested components can become cumbersome. The useContext hook enables efficient state sharing between components, eliminating the need for extensive prop drilling.</p>
            
            <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">What is useContext Hook?</h2>
            <p className="mb-3">The useContext hook lets React components access values from a context. React’s Context API is meant to pass data through the component tree without manually sending props at every level. Introduced in React 16.8, useContext allows functional components to read context values easily.</p>
            <p>It eliminates the need for prop drilling, where data must be manually passed through multiple nested components.</p>
            <ul className="list-[square] list-inside space-y-1 mt-5">
                <li>Simplifies access to shared state across components.</li>
                <li>Eliminates prop drilling by removing the need to pass props down many levels.</li>
                <li>Works with React’s Context API to provide global state.</li>
                <li>Perfect for managing themes, authentication, or user preferences.</li>
            </ul>

            <h2 className="text-2xl text-gray-800 font-semibold mt-5">Syntax</h2>
             <pre className="text-green-400 bg-gray-900 p-4 rounded-lg mt-5">
                <code>
                    {`const contextValue = useContext(MyContext);`}
                </code>
             </pre>

             <h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">How does it work?</h2>
             <p>The useContext hook facilitates consumption of context values, enabling components to access shared state throughout the component tree without the need for manual prop propagation. Here’s the mechanism:</p>
             <ul className="list-[square] list-inside space-y-1 mt-5">
                <li>useContext lets functional components access values from a React Context.</li>
                <li>Create a Context object using React.createContext() to hold shared state.</li>
                <li>Use useContext in any component that needs the value, avoiding prop drilling.</li>
                <li>When the Context value changes, all consuming components re-render automatically.</li>
             </ul>


             <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Creating a Context</h2>
            <p>Before using useContext, you first create a context with React.createContext(). This context holds a value that any child component inside a Context.Provider can access.</p>
            <pre className="text-green-400 bg-gray-900 p-4 rounded-lg mt-5">
                <code>
                    {`import React, { createContext, useContext, useState } from 'react';

const MyContext = createContext();

function App() {
    const [value, setValue] = useState('Hello, World!');

    return (
        <MyContext.Provider value={value}>
            <ChildComponent />
        </MyContext.Provider>
    );
}

function ChildComponent() {
    const contextValue = useContext(MyContext);
    return <h1>{contextValue}</h1>;
}`}
                </code>
            </pre>

            <p className="mt-5">When you call <span className="text-red-400">createContext()</span>, you get a context object (like MyContext) with a default value. Using MyContext.Provider, you can pass that value to all children inside it. Any component, such as ChildComponent, can use useContext(MyContext) to get the value.</p>
        
        <h2 className="text-3xl text-gray-800 font-semibold mt-10 mb-3">Implementing the useContext Hook</h2>
        <h2 className="text-2xl text-gray-800 font-semibold mb-3">Managing Authentication with useContext</h2>
       <p>You can use useContext to keep track of whether a user is logged in or not and share this state with all components.</p>
      <pre className="text-green-400 bg-gray-900 p-4 rounded-lg mt-5">
        <code>
            {`import React, { createContext, useContext, useState } from 'react';
const AuthContext = createContext();
function AuthProvider({ children }) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    return (
        <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
            {children}
        </AuthContext.Provider>
    );
}
function LoginButton() {
    const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);
    return (
        <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
            {isLoggedIn ? 'Logout' : 'Login'}
        </button>
    );
}
function App() {
    return (
        <AuthProvider>
            <LoginButton />
        </AuthProvider>
    );
}
export default App;`}
        </code>
      </pre>

      <p className="mt-5">AuthContext is initialized via createContext(), with AuthProvider handling the isLoggedIn state and supplying it through the context to descendant components. LoginButton consumes isLoggedIn and setIsLoggedIn via useContext to toggle authentication status. The App component renders LoginButton within AuthProvider, supporting dynamic login and logout operations.</p>
      

      <h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">Sharing a Theme Across Components</h2>
      <p>Create a theme context and consume its values in child components using useContext.</p>
       <pre className="text-green-400 bg-gray-900 p-4 rounded-lg mt-5">
        <code>
            {`import React, { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();
function ThemeProvider({ children }) {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}
function ThemedComponent() {
    const { theme, toggleTheme } = useContext(ThemeContext);
    return (
        <div style={{ background: theme === 'light' ? '#fff' : '#333', 
            color: theme === 'light' ? '#000' : '#fff', padding: '20px', textAlign: 'center' }}>
            <p>Current Theme: {theme}</p>
            <button onClick={toggleTheme}>Toggle Theme</button>
        </div>
    );
}
function App() {
    return (
        <ThemeProvider>
            <ThemedComponent />
        </ThemeProvider>
    );
}

export default App;`}
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