import React from "react";

const ReactRedux = () => {
    return(
        <div className="max-w-4xl p-6 mt-10">
            <h1 className="text-3xl text-blue-500 font-semibold mb-3">React Redux</h1>
            <p>React-Redux manages state through a single global store, allowing predictable updates, easier debugging, and maintainable architecture for complex React applications.</p>
           <p className="mt-5 text-xl">Redux works like this:</p>
           <ul className="list-[square] space-y-1 mt-3">
            <li><span className="font-bold">Single Source of Truth</span>: The complete state of the application resides in a single store object.</li>
            <li><span className="font-bold">State is Read-Only</span>: State modifications occur solely through dispatched actions.</li>
            <li><span className="font-bold">Changes via Pure Functions</span>: Reducers, which are pure functions, determine state transitions by receiving the previous state and an action to return the updated state.</li>
           </ul>

           <h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">Core Concepts of React-Redux</h2>
           <p>Efficient use of React-Redux depends on familiarity with its fundamental principles and patterns.</p>
           <h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">Store</h2>
           <p>The <span className="text-red-400">store</span> serves as a centralized repository for the application state and is the sole location where state modifications are permitted.</p>
           
            <h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">Actions</h2>
            <p>In Redux, an <span className="text-red-400">action</span> is a plain JavaScript object with a mandatory type property and an optional payload, representing an intended update to the application state.</p>
          
          <h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">Example</h2>
        <pre className="bg-gray-100 text-gray-800 p-4 rounded-lg mt-5 overflow-x-auto">
  <code>
    <span className="text-purple-600">const</span>{" "}
    <span className="text-blue-600">incrementAction</span>{" "}
    <span className="text-gray-800">= {"{"}</span>
    {"\n"}
    {"  "}type:{" "}
    <span className="text-orange-500">'INCREMENT'</span>,
    {"\n"}
    {"  "}payload:{" "}
    <span className="text-gray-800">1</span>
    {"\n"}
    <span className="text-gray-800">{"}"};</span>
  </code>
</pre>
          <h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">Reducers</h2>
          <p><span className="text-red-400">Reducers</span> are pure functions in Redux that compute new state from the previous state and an action, without modifying the original state.</p>
           <h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">Example</h2>
         <pre className="bg-gray-100 text-gray-800 p-4 rounded-lg mt-5 overflow-x-auto">
  <code>
    <span className="text-purple-600">const</span>{" "}
    <span className="text-blue-600">counterReducer</span>{" "}
    <span className="text-gray-800">= (state = 0, action) =&gt; {"{"}</span>
    {"\n"}
    {"  "}
    <span className="text-purple-600">switch</span>{" "}
    <span className="text-gray-800">(action.type) {"{"}</span>
    {"\n"}
    {"    "}
    <span className="text-purple-600">case</span>{" "}
    <span className="text-orange-500">'INCREMENT'</span>:
    {"\n"}
    {"      "}
    <span className="text-purple-600">return</span>{" "}
    <span className="text-gray-800">state + action.payload;</span>
    {"\n"}
    {"    "}
    <span className="text-purple-600">case</span>{" "}
    <span className="text-orange-500">'DECREMENT'</span>:
    {"\n"}
    {"      "}
    <span className="text-purple-600">return</span>{" "}
    <span className="text-gray-800">state - action.payload;</span>
    {"\n"}
    {"    "}
    <span className="text-purple-600">default</span>:
    {"\n"}
    {"      "}
    <span className="text-purple-600">return</span>{" "}
    <span className="text-gray-800">state;</span>
    {"\n"}
    {"  "}{"}"}{"\n"}
    <span className="text-gray-800">{"}"};</span>
  </code>
</pre>

          <h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">Dispatch</h2>
          <p>In Redux, <span className="text-red-400">dispatch</span> delivers an action to the store, initiating the reducer’s execution to generate a new application state.</p>
           <h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">Example</h2>
         <pre className="bg-gray-100 text-gray-800 p-4 rounded-lg mt-5 overflow-x-auto">
  <code>
    <span className="text-purple-600">store</span>
    <span className="text-gray-800">.dispatch(</span>
    <span className="text-blue-600">incrementAction</span>
    <span className="text-gray-800">);</span>
  </code>
</pre>

         <h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">Selectors</h2>
         <p><span className="text-red-400">Selectors</span> are functions that access and return specific slices of the Redux store state, allowing for organized and maintainable state retrieval.</p>
         <h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">Example</h2>
         <pre className="bg-gray-100 text-gray-800 p-4 rounded-lg mt-5 overflow-x-auto">
  <code>
    <span className="text-purple-600">const</span>{" "}
    <span className="text-blue-600">selectCount</span>{" "}
    <span className="text-gray-800">= (state) =&gt; </span>
    <span className="text-blue-600">state.count</span>
    <span className="text-gray-800">;</span>
  </code>
</pre>

         <h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">Provider</h2>
         <p>The <span className="text-red-400">Provider</span> component supplies the Redux store to all components within the application. It should encompass the entire application to ensure universal access to the store.</p>
       <pre className="bg-gray-100 text-gray-800 p-4 rounded-lg mt-5 overflow-x-auto">
  <code>
    <span className="text-purple-600">import</span>{" "}
    <span className="text-gray-800">{'{ Provider }'}</span>{" "}
    <span className="text-purple-600">from</span>{" "}
    <span className="text-orange-500">'react-redux'</span>;
    {"\n\n"}

    <span className="text-pink-600">&lt;Provider</span>{" "}
    <span className="text-red-500">store</span>
    <span className="text-gray-800">=</span>
    <span className="text-gray-800">{"{"}store{"}"}</span>
    <span className="text-pink-600">&gt;</span>
    {"\n"}
    {"  "}
    <span className="text-pink-600">&lt;App /&gt;</span>
    {"\n"}
    <span className="text-pink-600">&lt;/Provider&gt;</span>;
  </code>
</pre>

         <h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">connect()</h2>
         <p>React-Redux’s <span className="text-red-400">connect()</span> function integrates a React component with the Redux store, providing it with selected state and dispatch methods as props.</p>
        <h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">Example</h2>
        <pre className="bg-gray-100 text-gray-800 p-4 rounded-lg mt-5 overflow-x-auto">
  <code>
    <span className="text-purple-600">import</span>{" "}
    <span className="text-gray-800">{'{ connect }'}</span>{" "}
    <span className="text-purple-600">from</span>{" "}
    <span className="text-orange-500">'react-redux'</span>;
    {"\n\n"}

    <span className="text-purple-600">const</span>{" "}
    <span className="text-blue-600">Counter</span>{" "}
    <span className="text-gray-800">= ({"{"} count, increment {"}"}) =&gt; (</span>
    {"\n"}
    {"  "}
    <span className="text-pink-600">&lt;div&gt;</span>
    {"\n"}
    {"    "}
    <span className="text-pink-600">&lt;h1&gt;</span>
    {"{"}
    <span className="text-blue-600">count</span>
    {"}"}
    <span className="text-pink-600">&lt;/h1&gt;</span>
    {"\n"}
    {"    "}
    <span className="text-pink-600">&lt;button onClick={"{"}increment{"}"}&gt;</span>
    Increment
    <span className="text-pink-600">&lt;/button&gt;</span>
    {"\n"}
    {"  "}
    <span className="text-pink-600">&lt;/div&gt;</span>
    {"\n"}
    );

    {"\n\n"}

    <span className="text-purple-600">const</span>{" "}
    <span className="text-blue-600">mapStateToProps</span>{" "}
    <span className="text-gray-800">= (state) =&gt; ({"{"}</span>
    {"\n"}
    {"  "}count: state.count
    {"\n"}
    <span className="text-gray-800">{"}"});</span>

    {"\n\n"}

    <span className="text-purple-600">const</span>{" "}
    <span className="text-blue-600">mapDispatchToProps</span>{" "}
    <span className="text-gray-800">= (dispatch) =&gt; ({"{"}</span>
    {"\n"}
    {"  "}increment: () =&gt; dispatch({"{"} type: 'INCREMENT', payload: 1 {"}"})
    {"\n"}
    <span className="text-gray-800">{"}"});</span>

    {"\n\n"}

    <span className="text-purple-600">export default</span>{" "}
    <span className="text-blue-600">connect</span>
    <span className="text-gray-800">(mapStateToProps, mapDispatchToProps)(Counter);</span>
  </code>
</pre>


        <h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">React-Redux Working</h2>
       <p>React-Redux binds React components to the Redux store, allowing them to access state and dispatch actions efficiently. Here’s a concise breakdown of the workflow:</p>
       

       <h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">Setting Up the Store</h2>
       <p>Redux’s store maintains the entire app state, created through <span className="text-red-400">createStore()</span> and initialized with a reducer function to compute state updates.</p>
       <h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">Example</h2>
       <pre className="bg-gray-100 text-gray-800 p-4 rounded-lg mt-5 overflow-x-auto">
  <code>
    <span className="text-purple-600">const</span>{" "}
    <span className="text-blue-600">store</span>{" "}
    <span className="text-gray-800">=</span>{" "}
    <span className="text-blue-600">createStore</span>
    <span className="text-gray-800">(counterReducer);</span>
  </code>
</pre>
        <h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">Dispatching Actions</h2>
       <p>In Redux, actions are plain objects containing information about state changes; dispatching an action triggers the store’s reducer to compute the new state.</p>
      <h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">Example</h2>
    <pre className="bg-gray-100 text-gray-800 p-4 rounded-lg mt-5 overflow-x-auto">
  <code>
    <span className="text-purple-600">store</span>
    <span className="text-gray-800">.dispatch({"{"}</span>
    {"\n"}
    {"  "}type:{" "}
    <span className="text-orange-500">'INCREMENT'</span>,
    {"\n"}
    {"  "}payload:{" "}
    <span className="text-gray-800">1</span>
    {"\n"}
    <span className="text-gray-800">{"}"});</span>
  </code>
</pre>

      <h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">Reducers Update the State</h2>
      <p>Reducers are pure functions in Redux that compute the next state from the previous state and a dispatched action without mutating the original state.</p>
      <h2 className="text-2xl text-gray-800 font-semibold mt-5">Example</h2>
    <pre className="bg-gray-100 text-gray-800 p-4 rounded-lg mt-5 overflow-x-auto">
  <code>
    <span className="text-purple-600">const</span>{" "}
    <span className="text-blue-600">counterReducer</span>{" "}
    <span className="text-gray-800">= (state = 0, action) =&gt; {"{"}</span>
    {"\n"}
    {"  "}
    <span className="text-purple-600">switch</span>{" "}
    <span className="text-gray-800">(action.type) {"{"}</span>
    {"\n"}
    {"    "}
    <span className="text-purple-600">case</span>{" "}
    <span className="text-orange-500">'INCREMENT'</span>:
    {" "}
    <span className="text-purple-600">return</span>{" "}
    <span className="text-gray-800">state + action.payload;</span>
    {"\n"}
    {"    "}
    <span className="text-purple-600">default</span>:
    {" "}
    <span className="text-purple-600">return</span>{" "}
    <span className="text-gray-800">state;</span>
    {"\n"}
    {"  "}{"}"}{"\n"}
    <span className="text-gray-800">{"}"};</span>
  </code>
</pre>


      <h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">Connecting Components with connect()</h2>
     <p>React-Redux’s <span className="text-red-400">connect()</span> integrates a React component with the Redux store, supplying selected state and dispatch methods as props.</p>
     <pre className="bg-gray-100 text-gray-800 p-4 rounded-lg mt-5 overflow-x-auto">
  <code>
    <span className="text-purple-600">const</span>{" "}
    <span className="text-blue-600">mapStateToProps</span>{" "}
    <span className="text-gray-800">= (state) =&gt; ({"{"}</span>
    {"\n"}
    {"  "}count: state
    {"\n"}
    <span className="text-gray-800">{"}"});</span>

    {"\n"}
    {"\n"}

    <span className="text-purple-600">const</span>{" "}
    <span className="text-blue-600">mapDispatchToProps</span>{" "}
    <span className="text-gray-800">= (dispatch) =&gt; ({"{"}</span>
    {"\n"}
    {"  "}increment: () =&gt; dispatch({"{"} type: 'INCREMENT', payload: 1 {"}"})
    {"\n"}
    <span className="text-gray-800">{"}"});</span>
  </code>
</pre>

      <h2 className="text-2xl text-gray-800 font-s font-medium mt-5 mb-3">Using Provider to Make Store Accessible</h2>
      <p>The <span className="text-red-400">Provider</span> component connects the Redux store to the React component tree, allowing nested components to access state and dispatch actions.</p>
      <h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">Example</h2>
     <pre className="bg-gray-100 text-gray-800 p-4 rounded-lg mt-5 overflow-x-auto">
  <code>
    <span className="text-pink-600">&lt;Provider</span>{" "}
    <span className="text-red-500">store</span>
    <span className="text-gray-800">=</span>
    <span className="text-gray-800">{"{"}store{"}"}</span>
    <span className="text-pink-600">&gt;</span>
    <span className="text-pink-600">&lt;App /&gt;</span>
    <span className="text-pink-600">&lt;/Provider&gt;</span>
  </code>
</pre>

      <h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">Re-Renders and Reactivity</h2>
       <p>React-Redux selectively re-renders components connected to the store that are impacted by state updates, reducing unnecessary rendering and boosting performance.</p>
       

       <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Implement React-Redux</h2>
       <p>Use create-react-app to bootstrap a new React project as the first step.</p>
      <pre className="bg-gray-100 text-gray-800 p-4 rounded-lg mt-5 overflow-x-auto">
  <code>
    <span className="text-blue-600">npx</span>{" "}
    <span className="text-gray-800">create-react-app react-redux-counter</span>
    {"\n"}
    <span className="text-blue-600">cd</span>{" "}
    <span className="text-gray-800">react-redux-counter</span>
  </code>
</pre>

       <p className="mt-5 mb-3">Next, install redux and react-redux:</p>
     <pre className="bg-gray-100 text-gray-800 p-4 rounded-lg mt-5 overflow-x-auto">
  <code>
    <span className="text-blue-600">npm</span>{" "}
    <span className="text-gray-800">install redux react-redux</span>
  </code>
</pre>

       <p className="mt-5 mb-3">Dependencies</p>
     <pre className="bg-gray-100 text-gray-800 p-4 rounded-lg mt-5 overflow-x-auto">
  <code>
    <span className="text-gray-800">"dependencies": {"{"}</span>
    {"\n"}
    {"  "}@testing-library/jest-dom: {"^5.17.0"},
    {"\n"}
    {"  "}@testing-library/react: {"^13.4.0"},
    {"\n"}
    {"  "}@testing-library/user-event: {"^13.5.0"},
    {"\n"}
    {"  "}react: {"^18.3.1"},
    {"\n"}
    {"  "}react-dom: {"^18.3.1"},
    {"\n"}
    {"  "}react-redux: {"^9.1.2"},
    {"\n"}
    {"  "}react-scripts: {"5.0.1"},
    {"\n"}
    {"  "}redux: {"^5.0.1"},
    {"\n"}
    {"  "}web-vitals: {"^2.1.4"}
    {"\n"}
    <span className="text-gray-800">{"}"}</span>
  </code>
</pre>

       <h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">Define Action Types</h2>
       <p>Action types must be defined as constants to represent the actions that trigger state updates in Redux.</p>
     <pre className="bg-gray-200 text-sm p-4 rounded-lg overflow-x-auto mt-5">
  <code>
    <span className="text-gray-500">// src/redux/actionTypes.js</span>
    {"\n"}
    <span className="text-purple-600">export</span>{" "}
    <span className="text-purple-600">const</span>{" "}
    <span className="text-blue-600">INCREMENT</span>{" "}
    <span className="text-pink-500">=</span>{" "}
    <span className="text-green-600">'INCREMENT'</span>
    <span className="text-pink-500">;</span>
    {"\n"}
    <span className="text-purple-600">export</span>{" "}
    <span className="text-purple-600">const</span>{" "}
    <span className="text-blue-600">DECREMENT</span>{" "}
    <span className="text-pink-500">=</span>{" "}
    <span className="text-green-600">'DECREMENT'</span>
    <span className="text-pink-500">;</span>
  </code>
</pre>

       <h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">Action Creators</h2>
       <p><span className="text-red-400">Action creators</span> are functions that return plain objects representing actions to update the Redux state.</p>
      <pre className="bg-gray-200 text-sm p-4 rounded-lg overflow-x-auto mt-5 mb-3">
  <code>
    <span className="text-gray-500">// src/redux/actions.js</span>
    {"\n"}
    <span className="text-purple-600">import</span>{" "}
    {"{ "}
    <span className="text-blue-600">INCREMENT</span>,{" "}
    <span className="text-blue-600">DECREMENT</span>
    {" }"}{" "}
    <span className="text-purple-600">from</span>{" "}
    <span className="text-green-600">"./actionTypes"</span>
    <span className="text-pink-500">;</span>

    {"\n\n"}

    <span className="text-purple-600">export</span>{" "}
    <span className="text-purple-600">const</span>{" "}
    <span className="text-blue-600">increment</span>{" "}
    <span className="text-pink-500">=</span>{" "}
    <span className="text-gray-800">()</span>{" "}
    <span className="text-pink-500">=&gt;</span>{" "}
    <span className="text-gray-800">({`{`}</span>
    {"\n  "}
    <span className="text-blue-600">type</span>
    <span className="text-pink-500">:</span>{" "}
    <span className="text-blue-600">INCREMENT</span>
    <span className="text-pink-500">,</span>
    {"\n"}
    <span className="text-gray-800">{`}`})</span>
    <span className="text-pink-500">;</span>

    {"\n\n"}

    <span className="text-purple-600">export</span>{" "}
    <span className="text-purple-600">const</span>{" "}
    <span className="text-blue-600">decrement</span>{" "}
    <span className="text-pink-500">=</span>{" "}
    <span className="text-gray-800">()</span>{" "}
    <span className="text-pink-500">=&gt;</span>{" "}
    <span className="text-gray-800">({`{`}</span>
    {"\n  "}
    <span className="text-blue-600">type</span>
    <span className="text-pink-500">:</span>{" "}
    <span className="text-blue-600">DECREMENT</span>
    <span className="text-pink-500">,</span>
    {"\n"}
    <span className="text-gray-800">{`}`})</span>
    <span className="text-pink-500">;</span>
  </code>
</pre>

       <h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">Reducers</h2>
       <p>In Redux, reducers are pure functions that compute the next state from the previous state and a dispatched action without mutating the original state.</p>
     <pre className="bg-gray-200 text-sm p-4 rounded-lg overflow-x-auto mt-5">
  <code>
    <span className="text-gray-500">// src/redux/reducer.js</span>
    {"\n"}
    <span className="text-purple-600">import</span>{" "}
    {"{ "}
    <span className="text-blue-600">INCREMENT</span>,{" "}
    <span className="text-blue-600">DECREMENT</span>
    {" }"}{" "}
    <span className="text-purple-600">from</span>{" "}
    <span className="text-green-600">"./actionTypes"</span>
    <span className="text-pink-500">;</span>

    {"\n\n"}

    <span className="text-purple-600">const</span>{" "}
    <span className="text-blue-600">initialState</span>{" "}
    <span className="text-pink-500">=</span>{" "}
    <span className="text-gray-800">{`{`}</span>
    {"\n  "}
    <span className="text-blue-600">count</span>
    <span className="text-pink-500">:</span>{" "}
    <span className="text-orange-500">0</span>
    <span className="text-gray-800">{`\n}`}</span>
    <span className="text-pink-500">;</span>

    {"\n\n"}

    <span className="text-purple-600">const</span>{" "}
    <span className="text-blue-600">counterReducer</span>{" "}
    <span className="text-pink-500">=</span>{" "}
    <span className="text-gray-800">(state = initialState, action)</span>{" "}
    <span className="text-pink-500">=&gt;</span>{" "}
    <span className="text-gray-800">{`{`}</span>
    {"\n"}
    <span className="text-purple-600">switch</span>{" "}
    <span className="text-gray-800">(action.type)</span>{" "}
    <span className="text-gray-800">{`{`}</span>
    {"\n"}
    <span className="text-purple-600">case</span>{" "}
    <span className="text-blue-600">INCREMENT</span>
    <span className="text-pink-500">:</span>
    {"\n  "}
    <span className="text-purple-600">return</span>{" "}
    <span className="text-gray-800">{`{ ...state, count: state.count + 1 }`}</span>
    <span className="text-pink-500">;</span>

    {"\n\n"}
    <span className="text-purple-600">case</span>{" "}
    <span className="text-blue-600">DECREMENT</span>
    <span className="text-pink-500">:</span>
    {"\n  "}
    <span className="text-purple-600">return</span>{" "}
    <span className="text-gray-800">{`{ ...state, count: state.count - 1 }`}</span>
    <span className="text-pink-500">;</span>

    {"\n\n"}
    <span className="text-purple-600">default</span>
    <span className="text-pink-500">:</span>
    {"\n  "}
    <span className="text-purple-600">return</span>{" "}
    <span className="text-blue-600">state</span>
    <span className="text-pink-500">;</span>
    {"\n"}
    <span className="text-gray-800">{`}`}</span>
    {"\n"}
    <span className="text-gray-800">{`}`}</span>
    <span className="text-pink-500">;</span>

    {"\n\n"}

    <span className="text-purple-600">export</span>{" "}
    <span className="text-purple-600">default</span>{" "}
    <span className="text-blue-600">counterReducer</span>
    <span className="text-pink-500">;</span>
  </code>
</pre>

       <h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">Create the Redux Store</h2>
       <p>Now, use Redux’s createStore function to initialize the store with the root reducer.</p>
       <pre className="bg-gray-200 text-sm p-4 rounded-lg overflow-x-auto mt-5">
  <code>
    <span className="text-gray-500">// src/redux/store.js</span>
    {"\n"}
    <span className="text-purple-600">import</span>{" "}
    {"{ "}
    <span className="text-blue-600">createStore</span>
    {" }"}{" "}
    <span className="text-purple-600">from</span>{" "}
    <span className="text-green-600">'redux'</span>
    <span className="text-pink-500">;</span>

    {"\n"}
    <span className="text-purple-600">import</span>{" "}
    <span className="text-blue-600">counterReducer</span>{" "}
    <span className="text-purple-600">from</span>{" "}
    <span className="text-green-600">'./reducer'</span>
    <span className="text-pink-500">;</span>

    {"\n\n"}

    <span className="text-purple-600">const</span>{" "}
    <span className="text-blue-600">store</span>{" "}
    <span className="text-pink-500">=</span>{" "}
    <span className="text-blue-600">createStore</span>
    <span className="text-gray-800">(counterReducer)</span>
    <span className="text-pink-500">;</span>

    {"\n\n"}

    <span className="text-purple-600">export</span>{" "}
    <span className="text-purple-600">default</span>{" "}
    <span className="text-blue-600">store</span>
    <span className="text-pink-500">;</span>
  </code>
</pre>

       <h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">Wrap the App with the Redux Provider</h2>
       <p>Use the Redux <span className="text-red-400">Provider</span> to wrap the React component tree, enabling any nested component to access the store via React-Redux.</p>
     <pre className="bg-gray-200 text-sm p-4 rounded-lg overflow-x-auto mt-5">
  <code>
    <span className="text-gray-500">/* src/index.css */</span>
    {"\n\n"}
    <span className="text-blue-600">body</span>{" "}
    <span className="text-gray-800">{`{`}</span>
    {"\n  "}
    <span className="text-red-500">font-family</span>
    <span className="text-pink-500">:</span>{" "}
    <span className="text-green-600">Arial, sans-serif</span>
    <span className="text-pink-500">;</span>
    {"\n  "}
    <span className="text-red-500">text-align</span>
    <span className="text-pink-500">:</span>{" "}
    <span className="text-green-600">center</span>
    <span className="text-pink-500">;</span>
    {"\n"}
    <span className="text-gray-800">{`}`}</span>

    {"\n\n"}

    <span className="text-blue-600">button</span>{" "}
    <span className="text-gray-800">{`{`}</span>
    {"\n  "}
    <span className="text-red-500">margin</span>
    <span className="text-pink-500">:</span>{" "}
    <span className="text-green-600">5px</span>
    <span className="text-pink-500">;</span>
    {"\n  "}
    <span className="text-red-500">padding</span>
    <span className="text-pink-500">:</span>{" "}
    <span className="text-green-600">10px</span>
    <span className="text-pink-500">;</span>
    {"\n  "}
    <span className="text-red-500">font-size</span>
    <span className="text-pink-500">:</span>{" "}
    <span className="text-green-600">16px</span>
    <span className="text-pink-500">;</span>
    {"\n"}
    <span className="text-gray-800">{`}`}</span>
  </code>
</pre>

       <p className="mt-5 mb-3">Run the following command to start the application.</p>
     <pre className="bg-gray-200 text-sm p-4 rounded-lg overflow-x-auto mt-5">
  <code>
    <span className="text-purple-600">npm</span>{" "}
    <span className="text-blue-600">start</span>
  </code>
</pre>
        </div>
    )
}

export default ReactRedux;