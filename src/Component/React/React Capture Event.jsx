import React from "react";

const ReactCapture = () => {
   return(
    <div className="max-w-4xl p-6 mt-10">
        <h1 className="lg:text-3xl text-2xl text-blue-500 font-semibold mb-3">React onclick Capture Event</h1>
        
        <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">What is onClickCapture Event in ReactJS?</h2>
         <p>The onClickCapture event in React is part of its event system and handles clicks during the capture phase of event propagation. It differs from the standard onClick event in the order it is triggered.</p>
         <ul className="list-[square] list-inside space-y-1 mt-5">
            <li><span className="font-semibold">Capture Phase</span>: The event begins at the root and moves down to the target element.</li>
            <li><span className="font-semibold">Bubbling Phase</span>: The event starts at the target element and moves up to the root.</li>
         </ul>

         <h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">Syntax</h2>
         <pre className="text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5">
            <code>
                {`<button onClickCapture = {function}/>`}
            </code>
         </pre>

         <p className="mt-5">React’s onClick event is handled in the bubbling phase by default, meaning it triggers at the target element. The onClickCapture event, however, is triggered during the capture phase, before the event reaches the target.</p>
      
      <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Using onClickCapture in React</h2>
      <p>Using onClickCapture is straightforward: attach it to a React element just like you would with onClick.</p>
      <pre className="text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5">
        <code>
            {`//App.js

import React from "react";

function App() {
	const onClickCaptureHandler = () => {
		console.log("onClickCapture!");
	};
	return (
		<div className="App">
			<h1> Hey Geek!</h1>
			<label>Please click on the button</label>
			<button onClickCapture={onClickCaptureHandler}>
				click Me!
			</button>
		</div>
	);
}

export default App;`}
        </code>
      </pre>

      <p className="mt-5">The button uses onClickCapture to show event capturing. The App component renders a button, label, and header, and it is exported as the default component.</p>

    <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">When Should You Use onClickCapture?</h2>
    <p>The onClickCapture event is helpful when you want to catch events before they reach the target element. It can be useful in situations like:</p>
   <ul className="list-[square] list-inside space-y-1 mt-5">
    <li><span className="font-semibold">Logging</span>: Log what’s happening with the event before other handlers respond.</li>
    <li><span className="font-semibold">Validation</span>: Make sure the event meets certain conditions before it continues.</li>
    <li><span className="font-semibold">Intercepting events</span>: Catch events for things like tracking clicks or analytics without stopping the usual flow.</li>
   </ul>

   <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Preventing Default Behavior Using onClickCapture</h2>
   <p>You can use <span className="text-red-400">event.preventDefault()</span> and <span className="text-red-400">event.stopPropagation()</span> in onClickCapture just like in onClick to stop the event from continuing.</p>
   <pre className="text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5">
    <code>
        {`import React from "react";

class PreventDefaultComponent extends React.Component {
    handleClickCapture = (event) => {
        event.preventDefault(); 
        event.stopPropagation();
        console.log("Default behavior prevented during the capture phase");
    };

    handleClick = () => {
        console.log("Event triggered during the bubble phase");
    };

    render() {
        return (
            <div onClickCapture={this.handleClickCapture} style={{ padding: "20px" }}>
                <form onSubmit={(e) => e.preventDefault()}>
                    <button
                        type="submit"
                        onClick={this.handleClick}
                        style={{ padding: "10px", backgroundColor: "lightblue" }}
                    >
                        Submit
                    </button>
                </form>
            </div>
        );
    }
}

export default PreventDefaultComponent;`}
    </code>
   </pre>

   <p className="mt-5">onClickCapture handles clicks before they reach the target element. handleClickCapture stops the default form submission and prevents propagation. This prevents handleClick in the bubble phase from running. The button does not submit the form, and the console logs “Default behavior prevented during the capture phase.”</p>
  
  <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">onClickCapture and Event Propagation</h2>
  <p>Event propagation in the DOM has two phases: capture and bubbling. Normally, events bubble up from the target element, but onClickCapture lets you handle the event during the capture phase, before it reaches the target.</p>
  <h2 className="text-2xl text-gray-800 font-semibold mt-5">Breakdown of Event Propagation with onClickCapture:</h2>
 
 <ul className="list-[square] list-inside space-y-1 mt-5">
    <li><span className="font-semibold">Click Event Triggered</span>: The user clicks an element, like a button.</li>
    <li><span className="font-semibold">Capture Phase</span>: The event moves from the root down to the target element.</li>
    <li><span className="font-semibold">onClickCapture Fires</span>: Any onClickCapture handlers on parent elements run during the capture phase.</li>
    <li><span className="font-semibold">Bubble Phase</span>:After reaching the target, the event bubbles back up.</li>
    <li><span className="font-semibold">onClick Fires</span>: The onClick handler on the target element runs during the bubble phase.</li>
 </ul>

 <pre className="text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5">
    <code>
        {`import React from "react";

class EventPropagation extends React.Component {

    handleCapture = (event) => {
        console.log("Captured at parent during the capture phase");
    };


    handleParentClick = (event) => {
        console.log("Clicked on parent (Bubble phase)");
    };

  
    handleChildClick = (event) => {
        console.log("Clicked on child (Bubble phase)");
    };

    render() {
        return (
            <div
                onClickCapture={this.handleCapture} 
                onClick={this.handleParentClick} 
                style={{ padding: "20px", border: "1px solid black" }}
            >
                <div
                    onClick={this.handleChildClick} 
                    style={{ padding: "10px", backgroundColor: "lightblue" }}
                >
                    Click Me (Child)
                </div>
            </div>
        );
    }
}

export default EventPropagation;`}
    </code>
 </pre>

 <p className="mt-5">During a click event, the handleCapture function on the parent div fires first in the capture phase, before the event reaches the child element. Next, the handleChildClick function on the child div triggers in the bubbling phase as the event starts moving upward. Finally, the handleParentClick function on the parent div runs in the bubble phase after the event has bubbled up from the child. This demonstrates the order of event execution in React.</p>


    
    </div>
   )
}

export default ReactCapture;