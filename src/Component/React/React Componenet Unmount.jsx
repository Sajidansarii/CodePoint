import React from "react";

const ReactComponenetUnmount = () => {
    return(
        <div className="max-w-4xl p-6 mt-10">
         <h1 className="lg:text-3xl text-2xl text-blue-500 font-semibold mb-3">React Componenet Unmount Event</h1>
        <p>In React, lifecycle methods let you control how components behave at different stages. One key method for cleanup is <span className="text-red-400 bg-gray-50">componentWillUnmount()</span>, which is called right before a component is removed from the DOM. This makes it crucial for freeing resources and preventing memory leaks.</p>
       
       <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">What is componentWillUnmount()?</h2>
       <p>The <span className="text-red-400 bg-gray-50">componentWillUnmount()</span> method is part of the React class component lifecycle and executes right before a component is removed. It should be used for cleaning up side effects, including:</p>
       <ul className="list-[square] space-y-1 mt-5">
        <li>Cancelling API calls or network requests</li>
        <li>Removing event listeners</li>
        <li>Clearing timers set with setInterval() or setTimeout()</li>
        <li>Terminating subscriptions, such as WebSocket connections</li>
       </ul>

       <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Syntax</h2>
       <pre className="text-green-400 bg-gray-900 p-4 rounded-lg mt-5">
        <code>
            {`componentWillUnmount() {
    // Cleanup code goes here
}`}
        </code>
       </pre>

       <p className="mt-5">React automatically invokes the <span className="text-red-400 bg-gray-50">componentWillUnmount()</span> method before a component is unmounted, and this method does not receive any arguments.</p>
       
       <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">When is componentWillUnmount() Called?</h2>
       <p>The componentWillUnmount() method is called just before a class component is removed from the DOM. This usually occurs when a component is no longer needed, such as when a condition for rendering changes or when navigating away from a page. It’s important to note that this method is only available for class components. In modern React applications, functional components are more commonly used, where the same cleanup tasks are handled using a cleanup function inside useEffect().</p>
       

       <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">1. Mouse Tracking with Cleanup using componentWillUnmount()</h2>
       <p>Here, we’ll use componentDidMount() to start tracking the mouse and componentWillUnmount() to clean up when the component is removed.</p>
       <pre className="text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5">
        <code>
            {`import React from 'react';

class App extends React.Component {
   constructor() {
      super();
      this.state = {
         showUser: true,
      };
   }

   render() {
      return (
         <div>
            <h1>Mouse Tracking</h1>
            <button onClick={() => this.setState({ showUser: false })}>
               Hide User
            </button>
            {this.state.showUser ? <User /> : null}
         </div>
      );
   }
}

class User extends React.Component {
   constructor() {
      super();
      this.state = {
         mousePosition: { x: 0, y: 0 },
      };
   }

   componentDidMount() {
      window.addEventListener('mousemove', this.trackMouse);
   }

   componentWillUnmount() {
      window.removeEventListener('mousemove', this.trackMouse);
      alert('User component removed and mouse tracking stopped!');
   }

   trackMouse = (event) => {
      this.setState({
         mousePosition: { x: event.clientX, y: event.clientY },
      });
   };

   render() {
      return (
         <div>
            <h3>User: Rahul</h3>
            <h4>Mouse Position</h4>
            <p>X: {this.state.mousePosition.x}, Y: {this.state.mousePosition.y}</p>
         </div>
      );
   }
}

export default App;`}
        </code>
       </pre>

       <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">In this example</h2>
       <ul className="list-[square] space-y-1 mt-5">
        <li>The App component controls the visibility of the User component using the showUser state.</li>
        <li>Clicking the "Hide User" button sets showUser to false, which hides the User component.</li>
        <li>While visible, the User component displays the current mouse position (X and Y coordinates) in real time.</li>
        <li>When the User component mounts, it starts listening for mouse movements and updates the X and Y coordinates in the state.</li>
        <li>When the User component is removed, the componentWillUnmount() method cleans up by stopping the mouse tracking and removing the event listener.</li>
       </ul>

       <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">2. Component Cleanup with componentWillUnmount()</h2>
       <p>To properly clean up the component, we make use of the componentWillUnmount() lifecycle method.</p>
       <pre className="text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5">
        <code>
            {`import React, { Component } from "react";

class MyComponent extends Component {
    componentWillUnmount() {
        console.log("Component is about to be removed from the DOM.");
    }

    render() {
        return <h1>Hello, I am a Component!</h1>;
    }
}

class App extends Component {
    state = { show: true };

    toggleComponent = () => {
        this.setState({ show: !this.state.show });
    };

    render() {
        return (
            <div>
                <button onClick={this.toggleComponent}>
                    {this.state.show ? "Unmount Component" : "Mount Component"}
                </button>
                {this.state.show && <MyComponent />}
            </div>
        );
    }
}

export default App;`}
        </code>
       </pre>

       <h2 className="text-2xl text-gray-800 font-semibold mt-5">In this example</h2>
       <ul className="list-[square] space-y-1 mt-5">
        <li>The message "Hello, I am a Component!" appears initially.</li>
        <li>Press the "Unmount Component" button.</li>
        <li>MyComponent is removed, and the console logs a message.</li>
       </ul>

       <pre className="text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5">
        <code>
            {`Component is about to be removed from the DOM.`}
        </code>
       </pre>

       <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">When to Use componentWillUnmount()?</h2>
       <h2 className="text-2xl text-gray-800 font-semibold mb-3">Remove Event Listeners</h2>
       <p>If you attached an event listener via window.addEventListener or document.addEventListener, this is where you should clean it up.</p>
       <pre className="text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5">
        <code>
            {`componentWillUnmount() {  
    window.removeEventListener('resize', this.handleResize);
}`}
        </code>
       </pre>

       <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Clear Timers or Intervals</h2>
       <p>Whenever you use setInterval or setTimeout, clear them here to stop extra executions.</p>
       <pre className="text-green-400 bg-gray-900 p-4 rounded-lg mt-5">
        <code>
            {`componentWillUnmount() {  
    clearInterval(this.timer);
}`}
        </code>
       </pre>

       <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Canceling network requests</h2>
       <p>When your component makes API calls, make sure to cancel any ongoing requests if the component unmounts before completion. This prevents updates to an unmounted component.</p>
        <pre className="text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5">
            <code>
                {`componentWillUnmount() {  
    this.controller.abort();  // Cancel fetch request
}`}
            </code>
        </pre>

        <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Stopping Animations</h2>
        <p>Stop any ongoing animations or transitions in componentWillUnmount() to avoid running them on an unmounted component.</p>
       <pre className="text-green-400 bg-gray-900 p-4 rounded-lg mt-5">
        <code>
            {`componentWillUnmount() {  
    this.animation.stop();
}`}
        </code>
       </pre>

       <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Unsubscribe from External Services</h2>
       <p>This applies to libraries such as Redux, Firebase, or WebSocket connections.</p>
       <pre className="text-green-400 bg-gray-900 p-4 rounded-lg mt-5">
        <code>
            {`componentWillUnmount() {  
    this.unsubscribe();
}`}
        </code>
       </pre>

       <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">When Not to Use componentWillUnmount()?</h2>
       <ul className="list-[square] space-y-1 mt-5">
        <li><span className="font-semibold">Stateless Components</span>: No resource management? No componentWillUnmount() needed.</li>
        <li><span className="font-semibold">Static Components</span>: Display-only components typically don’t need cleanup.</li>
       </ul>
       

       
       
        </div>
    )
}

export default ReactComponenetUnmount;