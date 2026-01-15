import React from "react";

const ReactcomponentUpdate = () => {
    return(
        <div className="max-w-4xl p-6 mt-10">
         <h1 className="text-3xl text-blue-500 font-semibold mb-3">React Component Update Event</h1>
        <p>React lifecycle methods manage component behavior during different phases. componentDidUpdate() executes right after a component’s updates are applied to the DOM, allowing you to perform post-update tasks such as fetching data, calling APIs, or tracking changes.</p>
         
         <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">What is componentDidUpdate()?</h2>
         <p>The <span className="text-red-400 bg-gray-50">componentDidUpdate()</span> method belongs to React’s class component lifecycle and is called right after a component’s updates are applied to the DOM. It is typically used to perform side effects that depend on the latest state or props.</p>
         <ul className="list-[square] space-y-1 mt-5">
            <li>Fetching fresh data whenever a prop is updated</li>
            <li>Making direct changes to the DOM after React finishes rendering</li>
            <li>Logging or debugging whenever the component re-renders</li>
            <li>Initiating additional UI updates or animations following a state change</li>
         </ul>

         <h2 className="text-2xl text-gray-800 font-semibold mt-5">Syntax</h2>
        <pre className="text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5">
            <code>
                {`componentDidUpdate(prevProps, prevState, snapshot) {   /
    / Your code here
 }`}
            </code>
        </pre>

        <ul className="list-[square] space-y-1 mt-5">
            <li><span className="font-semibold">prevProps</span>: The previous props passed to the component before it updated.</li>
            <li><span className="font-semibold">prevState</span>: The component’s state prior to the update.</li>
            <li><span className="font-semibold">snapshot (optional)</span>: Value returned from getSnapshotBeforeUpdate(), typically used only when necessary.</li>
        </ul>


        <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">When is componentDidUpdate() Called?</h2>
        <p className="mb-3">The <span className="text-red-400 bg-gray-50">componentDidUpdate()</span> method is invoked after a component’s updates have been flushed to the DOM. This usually occurs when the component’s props or state change, triggering a re-render. Once React applies these changes, the user sees the updated UI, and the method provides a place to handle side effects that depend on the new DOM or state values.</p>
        <p>It’s worth noting that componentDidUpdate() belongs to the lifecycle of React class components. In modern React development, functional components with hooks, such as useEffect(), are more frequently used and provide similar functionality for handling side effects after updates.</p>

        <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Tracking Scroll Position</h2>
        <p>As the user scrolls, the component keeps track of their position and updates its state. If they scroll past a specific threshold, the component can respond by performing additional actions or showing messages.</p>
        <pre className="text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5">
            <code>
                {`import React, { Component } from "react";

class ScrollTracker extends Component {
    state = { scrollPosition: 0 };

    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.scrollPosition !== prevState.scrollPosition) {
            console.log(\`Scroll position updated: \${this.state.scrollPosition}px\`);
            if (this.state.scrollPosition > 300) {
                console.log("You've scrolled past 300px!");
            }
        }
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
    }

    handleScroll = () => {
        this.setState({ scrollPosition: window.scrollY });
    };

    render() {
        return (
            <div>
                <h1>Scroll down and check the console</h1>
                <p style={{ height: "1500px" }}>Keep scrolling...</p>
            </div>
        );
    }
}

export default ScrollTracker;`}
            </code>
        </pre>

        <h2 className="text-2xl text-gray-800 font-semibold mt-5">In this example</h2>
        <ul className="list-[square] space-y-1 mt-5">
            <li>The code listens to the window’s scroll event and saves the current scroll position in the component state.</li>
            <li>In componentWillUnmount(), the scroll listener is removed to prevent memory leaks and unnecessary updates.</li>
            <li>When the scroll position changes, componentDidUpdate() logs the new position and shows a message if it exceeds 300 pixels.</li>
            <li>The component renders a heading and a long paragraph, encouraging the user to scroll and check the console updates.</li>
        </ul>


        <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">When To Use componentDidUpdate()</h2>
         <p>After Props or State Change Use componentDidUpdate() to perform tasks that depend on changes in props or state. This is useful for side effects such as fetching new data or updating content based on updated props.</p>
         <p>When a component’s userId prop changes, you might need to fetch updated data for that user.</p>
        <pre className="text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5">
            <code>
                {`componentDidUpdate(prevProps) {  
    if (this.props.userId !== prevProps.userId) {
    this.fetchData(this.props.userId); 
   }
}               `}
            </code>
        </pre>

        <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">To Trigger Side Effects</h2>
        <p>After a state or prop update, <span className="text-red-400 bg-gray-50">componentDidUpdate()</span> can be used to handle side effects such as updating external libraries, working with third-party tools, or executing operations that don’t directly affect the UI.</p>
        <p>You can trigger animations each time the component’s state changes.</p>
        <pre className="text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5">
            <code>
                {`componentDidUpdate(prevState) {  
    if (this.state.isVisible !== prevState.isVisible) { 
    this.startAnimation();  
    }
}`}
            </code>
        </pre>

        <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">When You Need to Compare Old and New State or Props</h2>
        <p>Whenever you need to see what’s changed in props or state, <span className="text-red-400 bg-gray-50">componentDidUpdate()</span> provides the previous and current values. This allows you to determine if another state update or side effect should be executed.</p>
        <p>If the filter changes, you’ll usually want to recalculate or get new data—but only when the filter has actually changed.</p>
        <pre className="text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5">
            <code>
                {`componentDidUpdate(prevProps) {  
    if (this.props.filter !== prevProps.filter) { 
    this.calculateResults(); 
    }
}`}
            </code>
        </pre>

        <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">For DOM Manipulation (Post Update)</h2>
        <p>Although direct DOM manipulation is generally discouraged in React, componentDidUpdate() can be used when you need to ensure the component has fully updated before making changes. After the update, you might use it to adjust the scroll position or focus a specific element.</p>
        <pre className="text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5">
            <code>
                {`componentDidUpdate() {  
    if (this.state.scrollToBottom) {  
    window.scrollTo(0, document.body.scrollHeight); 
    }
}`}
            </code>
        </pre>

        <h2 className="text-2xl text-gray-800 font-semibold mt-5">Best Practices for using componentDidMount()</h2>
        <ul className="list-[square] space-y-1 mt-5">
            <li>Use componentDidUpdate() to handle tasks that occur after a component updates, such as fetching data or <span className="ml-5">triggering</span> animations.</li>
            <li>Always compare previous and current props/state to determine if something has changed before performing actions. <span className="ml-5">This</span> prevents unnecessary operations.</li>
            <li>If you need information from before the update (like scroll position), use getSnapshotBeforeUpdate() and then <span className="ml-5">access</span> it inside componentDidUpdate().</li>
        </ul>
      
      <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">When Not to Use componentDidUpdate()?</h2>
      <ul className="list-[square] space-y-1 mt-5">
        <li><span className="font-semibold">No Additional Operations After Updates</span>: If your component doesn’t need to perform side effects such as API calls or DOM changes, there’s no need to use componentDidUpdate().</li>
        <li><span className="font-semibold">Simple Components Without Dependencies</span>: If the component’s rendering depends solely on its props and state, and no external actions are required, componentDidUpdate() isn’t necessary.</li>
      </ul>


      
        </div>
    )
}

export default ReactcomponentUpdate;