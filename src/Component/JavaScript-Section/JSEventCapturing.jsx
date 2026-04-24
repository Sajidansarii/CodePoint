import React from "react";

const JSEventCapturing = () => {
  // Event handlers
  const parentHandler = () => {
    alert("Parent div clicked (capturing)!");
  };

  const childHandler = () => {
    alert("Child div clicked (capturing)!");
  };

  const data = [  
    {Aspect:'Propagation', Description:'Automatic propagation that precedes the target and bubbling phases. The event flows down the hierarchy, triggering capturing phase handlers on each ancestor.'},
    {Aspect:'Preventing Default', Description:'Use event.preventDefault() during the capturing phase to prevent the default behavior of the event before it reaches the target.'},
    {Aspect:'Stopping Propagation', Description:'Use event.stopPropagation() in the capturing phase to stop further propagation of the event, preventing it from reaching the target or triggering bubbling phase handlers.'}
  ];

  return (
    <div className="max-w-4xl p-6">
      <h1 className="text-3xl font-medium text-blue-500 mb-4">JavaScript Event Capturing</h1>

      <p className="text-gray-700 mb-6">
        <span className="text-red-400">Event capturing</span> is the process where the event is first captured by the *outermost element* and then propagated down to the target element. 
        This is the opposite of event bubbling.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mb-2">Example: Event Capturing</h2>
      <div className="bg-gray-100 p-6 rounded mt-10">
        <div
          onClickCapture={parentHandler} // Capturing on parent
          className="p-8 bg-blue-200 mb-4"
        >
          Parent Div
          <div
            onClickCapture={childHandler} // Capturing on child
            className="p-6 bg-blue-400 mt-4 text-white cursor-pointer"
          >
            Child Div
          </div>
        </div>
      </div>

      <p className="mt-10">Let us see some important aspects of event capturing.</p>
      <table className="min-w-full border border-gray-300 text-gray-700 text-sm text-left mt-10">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2 border-b border-gray-300 text-gray-700 font-bold">Aspect</th>
            <th className="px-4 py-2 border-b border-gray-300 text-gray-700 font-bold">Description</th>
          </tr>
        </thead>
        {data.map((row,index)=>(
          <tr className="cursor-text hover:bg-gray-100">
            <td className="px-4 py-2 border-b border-gray-300">{row.Aspect}</td>
            <td className="px-4 py-2 border-b border-gray-300">{row.Description}</td>
          </tr>
        ))}
      </table>

      <h1 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Event Capturing</h1>
      <p>This example has a container div with a button inside. Two capturing-phase listeners are added (true in addEventListener). Clicking the button logs “Container clicked” and “Button clicked,” showing the capturing phase from root to target.</p>
      <h2 className="text-2xl text-gray-800 font-semibold mt-5">Example</h2>
      <pre className="overflow-x-auto bg-gray-200 p-4 rounded-lg mt-5">
        <code>
          {`
   const output = document.getElementById('output');
   document.getElementById('container').addEventListener('click', function(event) {
	  output.innerHTML += 'Capturing phase - Container clicked' + "<br>";
		}, true);

		document.getElementById('myButton').addEventListener('click', function(event) {
			output.innerHTML += 'Capturing phase - Button clicked' + "<br>";
		}, true);`}
        </code>
      </pre>

      <h1 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Preventing Default Behaviour</h1>
      <p>A link with id link has a capturing listener. Clicking it logs Link clicked and prevents navigation using <span className="text-red-400">event.preventDefault()</span>.</p>
      <h2 className="text-2xl text-gray-800 font-semibold mt-5">Example</h2>
      <pre className="overflow-x-auto bg-gray-200 p-4 rounded-lg mt-5">
        <code>
          {`
  document.getElementById('link').addEventListener('click', function(event) {
  alert('Capturing phase - Link clicked');
 event.preventDefault(); // Prevent the default behavior (e.g., navigating to a new page)
		}, true);
    `}
        </code>
      </pre>

      <h1 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Capturing and Stopping Propagation</h1>
      <p>The parent div’s capturing listener uses event.stopPropagation(). Clicking the button logs “Parent clicked” but prevents child capturing listeners from running.</p>
      <h2 className="text-2xl text-gray-800 font-semibold mt-5">Example</h2>
      <pre className="overflow-x-auto bg-gray-200 p-4 rounded-lg mt-5">
        <code>
          {`
   const output = document.getElementById('output');
	document.getElementById('parent').addEventListener('click', function(event) {
	output.innerHTML += 'Capturing phase - Parent clicked' + "<br>";
			// Stop further propagation to the child element
			event.stopPropagation();
		}, true);
		document.getElementById('child').addEventListener('click', function(event) {
			output.innerHTML += 'Capturing phase - Child clicked' + "<br>";
		}, true);`}
        </code>
      </pre>

    </div>
  );
};

export default JSEventCapturing;