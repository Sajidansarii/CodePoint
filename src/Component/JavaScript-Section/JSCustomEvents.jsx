import React, { useEffect } from "react";

const JSCustomEvents = () => {
  useEffect(() => {
    // Example: Listening to a custom event
    const handleCustomEvent = (event) => {
      alert(`Custom event received with message: ${event.detail.message}`);
    };

    // Add event listener
    window.addEventListener("myCustomEvent", handleCustomEvent);

    // Cleanup
    return () => {
      window.removeEventListener("myCustomEvent", handleCustomEvent);
    };
  }, []);

  // Trigger custom event
  const triggerCustomEvent = () => {
    const event = new CustomEvent("myCustomEvent", {
      detail: { message: "Hello from Custom Event!" },
    });
    window.dispatchEvent(event);
  };

  const data = [ 
    {Concept:'Custom Event', Description:'The CustomEvent constructor lets you create your own events, enabling different parts of an application to communicate. These events appear as instances of CustomEvent.'},
    {Concept:'CustomEvent Constructor', Description:'The built-in JavaScript constructor creates custom events using two parameters: a string for the event type and an optional settings object, which can include a detail field for extra data.'},
    {Concept:'dispatchEvent Method', Description:'It’s a DOM method that sends out a custom event and triggers all listeners on that element.'},
    {Concept:'addEventListener Method', Description:'It’s a DOM method used to attach a function to an event. When the event happens on the element, the function is called.'},
    {Concept:'Event Types', Description:'Strings that identify the type of event. Custom events can have any user-defined string as their type.'},
    {Concept:'Event Handling', Description:'Handling events is an active process that involves creating listeners for specific custom events and defining what should happen when they occur.'},
    {Concept:'Pub/Sub Pattern', Description:'This pattern lets parts of your system talk to each other without direct links. Custom events make it easy to set up a publish/subscribe setup so sections can react to events they subscribe to.'},
    {Concept:'detail Property', Description:'An optional property in the event’s config object that lets you send extra data with a custom event.'}
  ]

  return (
    <div className="max-w-4xl p-6">
      <h1 className="text-3xl font-medium text-blue-500 mb-4">JavaScript Custom Events</h1>

      <p className="text-gray-700 mb-6">
        <span className="text-red-400">Custom Events</span> allow you to create your own events in JavaScript, 
        making it possible to communicate between different parts of your application 
        without directly calling functions.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mb-2">Triggering a Custom Event</h2>
      <div className="bg-gray-100 p-4 rounded mb-4">
        <button
          type="button"
          onClick={triggerCustomEvent}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Trigger Custom Event
        </button>
      </div>

      <p className="mt-10 mb-5">JavaScript custom events let you make your own events and react to them. They help different parts of your code talk to each other—one part can notify others when something happens, making your program work better.</p>
     <p>People often use custom events together with the Event and CustomEvent interfaces. Here’s a breakdown of what they do.</p>
     
     <table className="min-w-full border border-gray-300 text-gray-700 text-sm text-left mt-10">
      <thead>
        <tr className="bg-gray-300">
          <th className="px-4 py-2 border-b border-gray-300 text-gray-700 font-bold">Concept</th>
          <th className="px-4 py-2 border-b border-gray-300 text-gray-700 font-bold">Description</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row,index)=>(
      <tr className="cursor-text hover:bg-gray-100">
        <td className="px-4 py-2 border-b border-gray-200">{row.Concept}</td>
        <td className="px-4 py-2 border-b border-gray-200">{row.Description}</td>
      </tr>
     ))}
      </tbody>
     </table>

     <h1 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">Custom Event</h1>
     <p>In this example, a custom event called myCustomEvent is created, and a button is displayed. We use addEventListener to listen for button events. Clicking the button dispatches the custom event and shows the alert "Custom event triggered!"</p>
     <h2 className="text-2xl text-gray-800 font-semibold mt-5">Example</h2>
    <pre className="text-green-400 bg-gray-900 p-4 rounded-lg mt-5">
      <code>
        {`
        const customEvent = new Event('myCustomEvent');
		// Adds an event listener to the button.
		document.getElementById('triggerBtn').addEventListener('click', 
		function() {
			// Dispatches custom event on button click.
			document.dispatchEvent(customEvent);
		});
		// Add listener for the custom event.
		document.addEventListener('myCustomEvent', function() {
			alert('Custom event triggered!');
		});`}
      </code>
    </pre>

    <h1 className="text-2xl text-gray-800 font-semibold mt-10 mb-3 ">Event with Data</h1>
    <p>We create a CustomEvent called myCustomEventWithData that carries a message via detail. Clicking the button triggers the event and shows the alert.</p>
   <h2 className="text-2xl text-gray-800 font-semibold mt-5">Example</h2>
   <pre className="text-green-400 bg-gray-900 p-4 rounded-lg mt-10">
    <code>
      {`
      const eventData = { message: 'Hello from custom event!' };
		const customEvent = new CustomEvent('myCustomEventWithData', 
		{ detail: eventData });
		document.getElementById('triggerBtn').addEventListener('click', 
		function() {       
			document.dispatchEvent(customEvent);
		});
		document.addEventListener('myCustomEventWithData', 
		function(event) {
			alert('Custom event triggered with data: ' + event.detail.message);
		});`}
    </code>
   </pre>

   <h1 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Condition-based Event Dispatching</h1>
   <p>The example dispatches TutorialEvent or TutorialEvent2 depending on v. The listener reacts to the chosen event.</p>
   <h2 className="text-2xl text-gray-800 font-semibold mt-5">Example</h2>
   <pre className="text-green-400 bg-gray-900 p-4 rounded-lg mt-5">
    <code>
      {`var v='tutorialspoint';
		const event = new Event("TutorialEvent");
		const event2 = new Event("TutorialEvent2");
	 
		document.addEventListener('TutorialEvent', ()=>{
			alert("Welcome to Tutorialspoint Event")
		});
		document.addEventListener('TutorialEvent2', ()=>{
			alert("Welcome to Event 2")
		});
	 
		if(v == 'tutorialspoint'){
			document.dispatchEvent(event);
		}
		else{
			document.dispatchEvent(event2);
		}`}
    </code>
   </pre>





    </div>
  );
};

export default JSCustomEvents;