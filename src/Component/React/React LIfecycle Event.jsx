import React from "react";

const ReactLifeCycle = () => {

    const data = [
        {Features:'State Initialization', ClassComponents:'constructor()', FunctionalComponents:'useState()'},
        {Features:'Lifecycle Methods', ClassComponents:'componentDidMount(), shouldComponentUpdate(), componentDidUpdate(), componentWillUnmount()', FunctionalComponents:'useEffect() handles mounting, updating, and unmounting'},
        {Features:'Handling Updates', ClassComponents:'shouldComponentUpdate(), componentDidUpdate()', FunctionalComponents:'useEffect() with dependency array'},
        {Features:'Cleanup', ClassComponents:'componentWillUnmount()', FunctionalComponents:'Return cleanup function in useEffect()'},
        {Features:'Functionality', ClassComponents:'Component methods tied to lifecycle phases', FunctionalComponents:'Hooks like useState, useEffect, useCallback, useMemo'},
    ];



    return(
        <div className="max-w-4xl p-6 mt-10">
            <h1 className="text-3xl text-blue-500 font-semibold mb-3">React Lifecycle Event</h1>
            <p>The React lifecycle represents the sequence of phases a component experiences during its existence. These phases enable developers to run specific logic when a component is mounted, updated, or unmounted. A solid understanding of the lifecycle improves control over performance and resource management.</p>
            <p className="mt-5">The React component lifecycle is divided into three primary phases.</p>
           <p className="mt-5"><span className="font-bold">Mounting</span>: The component is initialized, rendered, and inserted into the DOM (componentDidMount()).</p>
           <p><span className="font-bold">Updating</span>: Changes in state or props trigger re-rendering and updates (componentDidUpdate()).</p>
           <p><span className="font-bold">Unmounting</span>: Necessary cleanup is completed before the component is destroyed (componentWillUnmount()).</p>
       
          <h2 className="text-2xl text-gray-800 font-semibold mt-10">Lifecycle Component in React</h2>
          <h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">1.Mounting</h2>
          <p>The mounting phase in React describes the process of creating a component and inserting it into the DOM for the first time. During this phase, React initializes the component, sets up any required state, and renders the UI.</p>

         <h2 className="text-xl mt-3">Methods executed during mounting are:</h2>
          <ul className="list-[square] list-inside mt-5">
            <li>constructor</li>
            <li>getDerivedStateFromProps</li>
            <li>render()</li>
            <li>componentDidMount()</li>
          </ul>

         
         <h1 className="text-2xl text-gray-800 font-semibold mt-10 mb-1">constructor</h1>
        <p>This method initializes the state and binds functions, and it is called before the component mounts.</p>
        <h2 className="text-2xl text-gray-800 font-semibold mt-2">Example</h2>
        <pre className="text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5">
            <code>
                {`constructor(props) {
    super(props); // Always call super(props) before using this.props
    this.state = {
        count: 0, // Initial state
    };
    console.log("Constructor called");
}`}
            </code>
        </pre>

         <h1 className="text-2xl text-gray-800 font-semibold mt-10 mb-1">getDerivedStateFromProps</h1>
        <p>This method updates state using props and is executed before every render cycle.</p>
        <h2 className="text-2xl text-gray-800 font-semibold mt-2">Example</h2>
       <pre className="text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5">
        <code>
            {`static getDerivedStateFromProps(props, state) {
    if (props.value !== state.value) {
        return { value: props.value }; // Update state based on new props
    }
    return null; // No changes to state
}`}
        </code>
       </pre>

       
        <h1 className="text-2xl text-gray-800 font-semibold mt-10 mb-1">render()</h1>
       <p>This method renders JSX and applies updates to the DOM.</p>
      <h2 className="text-2xl text-gray-800 font-semibold mt-2">Example</h2>
      <pre className="text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5">
        <code>
            {`render() {
    return (
        <div>
            <h1>Hello, React Lifecycle!</h1>
        </div>
    );
}`}
        </code>
      </pre>
      

        <h1 className="text-2xl text-gray-800 font-semibold mt-10 mb-1">componentDidMount()</h1>
      <p>This function runs once, right after the initial render, when the component is added to the DOM.</p>
      <h2 className="text-2xl text-gray-800 font-semibold mt-2">Example</h2>
      <pre className="text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5">
        <code>
            {`componentDidMount() {
    console.log("Component has been mounted");

    // Example: Fetch data from an API
    fetch("https://api.example.com/data")
        .then(response => response.json())
        .then(data => this.setState({ data }));
}`}
        </code>
      </pre>

      <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">2.Updating</h2>
      <p>The update phase occurs whenever a component's state changes or it receives new props from its parent. During this phase, React re-renders the component and updates the DOM.</p>
      <ul className="list-[square] list-inside mt-5 mb-10">
        <li>getDerivedStateFromProps</li>
        <li>setState() Function</li>
        <li>shouldComponentUpdate()</li>
        <li>getSnapshotBeforeUpdate() Method</li>
        <li>componentDidUpdate()</li>
      </ul>
      
       <h1 className="text-2xl text-gray-800 font-semibold mt-10 mb-1">getDerivedStateFromProps</h1>
      <p>During mounting and updating, <span className="text-red-400 bg-gray-50">getDerivedStateFromProps(props, state)</span> is invoked before <span className="text-red-400 bg-gray-50">render()</span>, allowing the component to update state based on incoming props.</p>
      <h2 className="text-2xl text-gray-800 font-semibold mt-2">Example</h2>
      <pre className="text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5">
        <code>
            {`static getDerivedStateFromProps(props, state) {
    if (props.name !== state.name) {
        return { name: props.name }; // Update state with new props
    }
    return null; // No state change
}`}
        </code>
      </pre>

      <h1 className="text-2xl text-gray-800 font-semibold mt-10 mb-1">setState() Function</h1>
      <p>This function isn’t part of the standard lifecycle and can be executed at any moment to update the state of a component.</p>
      <h2 className="text-2xl text-gray-800 font-semibold mt-2">Example</h2>
     <pre className="text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5">
        <code>
            {`this.setState((prevState, props) => ({
      counter: prevState.count + props.diff
}));`}
        </code>
     </pre>
     
     <h1 className="text-2xl text-gray-800 font-semibold mt-10 mb-1">shouldComponentUpdate()</h1>
     <p>This lifecycle method, <span className="text-red-400 bg-gray-50">shouldComponentUpdate()</span>, checks the current and upcoming props and state to determine whether the component needs to update.</p>
     <h2 className="text-2xl text-gray-800 font-semibold mt-2">Example</h2>
    <pre className="text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5">
        <code>
            {`shouldComponentUpdate(nextProps, nextState)`}
        </code>
    </pre>
    <p className="mt-5">Returning false prevents the invocation of render(), componentWillUpdate(), and componentDidUpdate().</p>
   

      <h1 className="text-2xl text-gray-800 font-semibold mt-10 mb-1">getSnapshotBeforeUpdate() Method</h1>
    <p>This method runs just before the DOM is rendered and allows you to save the component’s state before the update.</p>
    <h2 className="text-2xl text-gray-800 font-semibold mt-2">Example</h2>
    <pre className="text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5">
        <code>
            {`getSnapshotBeforeUpdate(prevProps, prevState)`}
        </code>
    </pre>

    <h1 className="text-2xl text-gray-800 font-semibold mt-10 mb-1">componentDidUpdate()</h1>
    <p>Invoked after the component updates, this function runs once following render() after state or prop modifications.</p>
     <h2 className="text-2xl text-gray-800 font-semibold mt-2">Example</h2>
     <pre className="text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5">
        <code>
            {`componentDidUpdate(prevProps, prevState, snapshot)`}
        </code>
     </pre>

     
      <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">3.Unmounting</h2>
      <p>The unmounting phase is the final stage in a component’s lifecycle, during which the component is detached from the DOM. Only one method belongs to this phase.</p>
      <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-1">componentWillUnmount()</h2>
      <p>This function is called once before the component is unmounted from the DOM, signaling the end of its lifecycle.</p>
      <h2 className="text-2xl text-gray-800 font-semibold mt-5">Example</h2>
     <pre className="text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5">
        <code>
            {`// Filename - src/index.js:
import React from "react";
import ReactDOM from 'react-dom';
class Test extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hello: "World!" };
    }
    componentDidMount() {
        console.log("componentDidMount()");
    }
    changeState() {
        this.setState({ hello: "Geek!" });
    }
    render() {
        return (
            <div>
                <h1>
                    GeeksForGeeks.org, Hello
                    {this.state.hello}
                </h1>
                <h2>
                    <a
                        onClick={this.changeState.bind(
                            this
                        )}
                    >
                        Press Here!
                    </a>
                </h2>
            </div>
        );
    }
    shouldComponentUpdate(nextProps, nextState) {
        console.log("shouldComponentUpdate()");
        return true;
    }
    componentDidUpdate() {
        console.log("componentDidUpdate()");
    }
}
const root = ReactDOM.createRoot(
    document.getElementById("root")
);
root.render(<Test />);`}
        </code>
     </pre>

     <h2 className="mt-10 text-2xl mb-5">In this example</h2>
     <p>The Test class is a React component where the state hello starts as “World!”.When the component appears on the page, <span className="text-red-400 bg-gray-50">componentDidMount()</span> runs and prints a message in the console.The changeState() function changes hello to “Geek!”.Inside <span className="text-red-400 bg-gray-50">render()</span>, the value of hello is shown in an <span className="text-red-400 bg-gray-50">{'<h1>'}</span> tag and a link is provided to change the state.The component re-renders because shouldComponentUpdate() allows it,</p>
   
     <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">React Lifecycle Methods: Class Components vs Functional Components</h2>
     <ul className="list-[square] list-inside mt-5">
        <li>Managing state and side effects in class components requires different lifecycle methods, which can be confusing.</li>
        <li>Functional components use Hooks like <span className="text-red-400 bg-gray-50">useState()</span> and <span className="text-red-400 bg-gray-50">useEffect()</span>, making the code easier to write and understand.</li>
     </ul>
     
     <div className="max-w-full overflow-x-auto">
     <table className="min-w-full border border-gray-300 text-gray-700 text-left text-sm mt-10">
        <thead>
            <tr className="bg-gray-100">
                <th className="px-4 py-2 border-b border-gray-300 text-gray-700 font-bold">Features</th>
                <th className="px-4 py-2 border-b border-gray-300 text-gray-700 font-bold">Class Components</th>
                <th className="px-4 py-2 border-b border-gray-300 text-gray-700 font-bold">Functional Components</th>
            </tr>
        </thead>
        <tbody>
            {data.map((row,index)=>(
                <tr className="cursor-text hover:bg-gray-100">
                    <td className="px-4 py-2 border-b border-gray-200">{row.Features}</td>
                    <td className="px-4 py-2 border-b border-gray-200">{row.ClassComponents}</td>
                    <td className="px-4 py-2 border-b border-gray-200">{row.FunctionalComponents}</td>
                </tr>
            ))}
        </tbody>
     </table> 
     </div>
     
        </div>
    )
}

export default ReactLifeCycle;