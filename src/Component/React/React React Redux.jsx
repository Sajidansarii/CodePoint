import React from "react";

const ReactRedux = () => {
    return(
        <div className="max-w-4xl p-6 mt-10">
            <h1 className="text-3xl text-blue-500 font-semibold mb-3">React Redux</h1>
            <p>React-Redux manages state through a single global store, allowing predictable updates, easier debugging, and maintainable architecture for complex React applications.</p>
           <p className="mt-5 text-xl">Redux works like this:</p>
           <ul className="list-[square] list-inside space-y-1 mt-3">
            <li><span className="font-bold">Single Source of Truth</span>: The complete state of the application resides in a single store object.</li>
            <li><span className="font-bold">State is Read-Only</span>: State modifications occur solely through dispatched actions.</li>
            <li><span className="font-bold">Changes via Pure Functions</span>: Reducers, which are pure functions, determine state transitions by receiving the <span className="ml-5">previous</span> state and an action to return the updated state.</li>
           </ul>

           <h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">Core Concepts of React-Redux</h2>
           <p>Efficient use of React-Redux depends on familiarity with its fundamental principles and patterns.</p>
           <h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">Store</h2>
           <p>The <span className="text-red-400">store</span> serves as a centralized repository for the application state and is the sole location where state modifications are permitted.</p>
           
            <h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">Actions</h2>
            <p>In Redux, an <span className="text-red-400">action</span> is a plain JavaScript object with a mandatory type property and an optional payload, representing an intended update to the application state.</p>
          
          <h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">Example</h2>
          <pre className="text-green-400 bg-gray-900 p-4 rounded-lg mt-5">
            <code>
                {`const incrementAction = {
    type: 'INCREMENT',
    payload: 1
};`}
            </code>
          </pre>

          <h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">Reducers</h2>
          <p><span className="text-red-400">Reducers</span> are pure functions in Redux that compute new state from the previous state and an action, without modifying the original state.</p>
           <h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">Example</h2>
          <pre className="text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5">
            <code>
                {`const counterReducer = (state = 0, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return state + action.payload;
        case 'DECREMENT':
            return state - action.payload;
        default:
            return state;
    }
};`}
            </code>
          </pre>

          <h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">Dispatch</h2>
          <p>In Redux, <span className="text-red-400">dispatch</span> delivers an action to the store, initiating the reducer’s execution to generate a new application state.</p>
           <h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">Example</h2>
          <pre className="text-green-400 bg-gray-900 p-4 rounded-lg mt-5">
            <code>
                {`store.dispatch(incrementAction);`}
            </code>
         </pre>

         <h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">Selectors</h2>
         <p><span className="text-red-400">Selectors</span> are functions that access and return specific slices of the Redux store state, allowing for organized and maintainable state retrieval.</p>
         <h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">Example</h2>
         <pre className="text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5">
            <code>
                {`const selectCount = (state) => state.count;`}
            </code>
         </pre>

         <h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">Provider</h2>
         <p>The <span className="text-red-400">Provider</span> component supplies the Redux store to all components within the application. It should encompass the entire application to ensure universal access to the store.</p>
         <pre className="text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5">
            <code>
                {`import { Provider } from 'react-redux';

<Provider store={store}>
    <App />
</Provider>;`}
            </code>
         </pre>

         <h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">connect()</h2>
         <p>React-Redux’s <span className="text-red-400">connect()</span> function integrates a React component with the Redux store, providing it with selected state and dispatch methods as props.</p>
        <h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">Example</h2>
        <pre className="text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5">
            <code>
                {`import { connect } from 'react-redux';

const Counter = ({ count, increment }) => (
    <div>
        <h1>{count}</h1>
        <button onClick={increment}>Increment</button>
    </div>
);

const mapStateToProps = (state) => ({
    count: state.count
});

const mapDispatchToProps = (dispatch) => ({
    increment: () => dispatch({ type: 'INCREMENT', payload: 1 })
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);`}
            </code>
        </pre>


        <h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">React-Redux Working</h2>
       <p>React-Redux binds React components to the Redux store, allowing them to access state and dispatch actions efficiently. Here’s a concise breakdown of the workflow:</p>
       

       <h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">Setting Up the Store</h2>
       <p>Redux’s store maintains the entire app state, created through <span className="text-red-400">createStore()</span> and initialized with a reducer function to compute state updates.</p>
       <h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">Example</h2>
        <pre className="text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5">
            <code>
                {`const store = createStore(counterReducer);`}
            </code>
        </pre>

        <h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">Dispatching Actions</h2>
       <p>In Redux, actions are plain objects containing information about state changes; dispatching an action triggers the store’s reducer to compute the new state.</p>
      <h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">Example</h2>
      <pre className="text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5">
        <code>
            {`store.dispatch({ type: 'INCREMENT', payload: 1 });`}
        </code>
      </pre>

      <h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">Reducers Update the State</h2>
      <p>Reducers are pure functions in Redux that compute the next state from the previous state and a dispatched action without mutating the original state.</p>
      <h2 className="text-2xl text-gray-800 font-semibold mt-5">Example</h2>
      <pre className="text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5">
        <code>
            {`const counterReducer = (state = 0, action) => {
    switch (action.type) {
        case 'INCREMENT': return state + action.payload;
        default: return state;
    }
};`}
        </code>
      </pre>


      <h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">Connecting Components with connect()</h2>
     <p>React-Redux’s <span className="text-red-400">connect()</span> integrates a React component with the Redux store, supplying selected state and dispatch methods as props.</p>
      <pre className="text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5">
        <code>
            {`const mapStateToProps = (state) => ({ count: state });
const mapDispatchToProps = (dispatch) => ({
    increment: () => dispatch({ type: 'INCREMENT', payload: 1 })
});`}
        </code>
      </pre>

      <h2 className="text-2xl text-gray-800 font-s font-medium mt-5 mb-3">Using Provider to Make Store Accessible</h2>
      <p>The <span className="text-red-400">Provider</span> component connects the Redux store to the React component tree, allowing nested components to access state and dispatch actions.</p>
      <h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">Example</h2>
      <pre className="text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5">
        <code>
            {`<Provider store={store}><App /></Provider>`}
        </code>
      </pre>

      <h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">Re-Renders and Reactivity</h2>
       <p>React-Redux selectively re-renders components connected to the store that are impacted by state updates, reducing unnecessary rendering and boosting performance.</p>
       

       <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Implement React-Redux</h2>
       <p>Use create-react-app to bootstrap a new React project as the first step.</p>
       <pre className="text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5">
        <code>
            {`npx create-react-app react-redux-countercd react-redux-counter`}
        </code>
       </pre>

       <p className="mt-5 mb-3">Next, install redux and react-redux:</p>
       <pre className="text-green-400 bg-gray-900 p-4 rounded-lg mt-5">
        <code>
            {`npm install redux react-redux`}
        </code>
       </pre>

       <p className="mt-5 mb-3">Dependencies</p>
       <pre className="text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5">
        <code>
            {`"dependencies": {
    "@testing-library/jest-dom": "^5.17.0",
    "@testing-library/react": "^13.4.0",
    "@testing-library/user-event": "^13.5.0",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-redux": "^9.1.2",
    "react-scripts": "5.0.1",
    "redux": "^5.0.1",
    "web-vitals": "^2.1.4"
}`}
        </code>
       </pre>

       <h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">Define Action Types</h2>
       <p>Action types must be defined as constants to represent the actions that trigger state updates in Redux.</p>
       <pre className="text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5">
        <code>
            {`// src/redux/actionTypes.js
export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';`}
        </code>
       </pre>

       <h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">Action Creators</h2>
       <p><span className="text-red-400">Action creators</span> are functions that return plain objects representing actions to update the Redux state.</p>
       <pre className="text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5 mb-3">
        <code>
            {`// src/redux/actions.js
import { INCREMENT, DECREMENT } from "./actionTypes";

export const increment = () => ({
    type: INCREMENT,
});

export const decrement = () => ({
    type: DECREMENT,
});`}
        </code>
       </pre>

       <h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">Reducers</h2>
       <p>In Redux, reducers are pure functions that compute the next state from the previous state and a dispatched action without mutating the original state.</p>
       <pre className="text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5">
        <code>
            {`// src/redux/reducer.js
import { INCREMENT, DECREMENT } from "./actionTypes";

const initialState = {
    count: 0,
};

const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT:
            return { ...state, count: state.count + 1 };
        case DECREMENT:
            return { ...state, count: state.count - 1 };
        default:
            return state;
    }
};

export default counterReducer;`}
        </code>
       </pre>

       <h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">Create the Redux Store</h2>
       <p>Now, use Redux’s createStore function to initialize the store with the root reducer.</p>
       <pre className="text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5">
        <code>
            {`// src/redux/store.js
import { createStore } from 'redux';
import counterReducer from './reducer';

const store = createStore(counterReducer);

export default store;`}
        </code>
       </pre>

       <h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">Wrap the App with the Redux Provider</h2>
       <p>Use the Redux <span className="text-red-400">Provider</span> to wrap the React component tree, enabling any nested component to access the store via React-Redux.</p>
       <pre className="text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5">
        <code>
            {`/* src/index.css */

body {
    font-family: Arial, sans-serif;
    text-align: center;
}

button {
    margin: 5px;
    padding: 10px;
    font-size: 16px;
}`}
        </code>
       </pre>

       <p className="mt-5 mb-3">Run the following command to start the application.</p>
       <pre className="text-green-400 bg-gray-900 p-4 rounded-lg mt-5">
        <code>
            {`npm start`}
        </code>
       </pre>

      
      
        </div>
    )
}

export default ReactRedux;