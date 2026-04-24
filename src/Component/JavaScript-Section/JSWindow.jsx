import React, { useEffect, useState } from "react";

const JSWindowDocumentEvents = () => {
  const [scrollY, setScrollY] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    // Scroll event
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    // Resize event
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };


    // Add event listeners
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    // Cleanup listeners on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const data = [
    {EventName:'load', Description:'Triggered when the entire web page, including all its resources, has finished loading.'},
    {EventName:'unload', Description:'Fired when the user is leaving the page or closing the browser window or tab.'},
    {EventName:'resize', Description:'Activated when the size of the browser window is changed.'},
    {EventName:'scroll', Description:'Fired when the user scrolls the page.'}
  ]

  const data1 = [
    {EventName:'DOMContentLoaded', Description:'Triggered when the HTML document has been completely loaded and parsed, without waiting for external resources like images.'},
    {EventName:'click', Description:'Fired when the user clicks on an element.'},
    {EventName:'submit', Description:'Triggered when a form is submitted.'},
    {EventName:'keydown/keyup/keypress', Description:'These events are triggered when a key is pressed, released, or both, respectively.'},
    {EventName:'change', Description:'Fired when the value of an input element changes, such as with text inputs or dropdowns.'}
  ]

  return (
    <div className="max-w-4xl p-6">
      <h1 className="text-3xl font-medium text-blue-500 mb-4">JavaScript Window & Document Events</h1>

      <p className="text-gray-700 mt-6">
        JavaScript allows you to respond to events on the global objects <code>window</code> and <code>document</code>. 
        Common events include <span className="text-red-400">scroll</span>, <span className="text-red-400">resize</span>, and <span className="text-red-400">keyboard events</span>.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-5">Example:</h2>
      <div className="bg-gray-100 p-4 rounded space-y-4">
        <p className="text-gray-700">Current vertical scroll: <strong>{scrollY}px</strong></p>
        <p className="text-gray-700">Window width: <strong>{windowWidth}px</strong></p>
      </div>

      <h1 className="text-2xl text-gray-800 font-semibold mt-10">Window Events</h1>
      <p>Window events occur at the browser level and are tied to the window object, which represents the browser window. They’re used to manage global behaviors and the window’s overall state.</p>
      <table className="min-w-full border border-gray-300 text-gray-700 text-sm text-left mt-10">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2 border-b border-gray-300 text-gray-700 font-semibold">Event Name</th>
            <th className="px-4 py-2 border-b border-gray-300 text-gray-700 font-semibold">Description</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row,index)=>(
            <tr className="cursor-text hover:bg-gray-100">
              <td className="px-4 py-2 border-b border-gray-200">{row.EventName}</td>
              <td className="px-4 py-2 border-b border-gray-200">{row.Description}</td>
            </tr>
          ))}
        </tbody>
      </table>
      
      
      
      <h1 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Demonstrating Window Events</h1>
      <p>This example listens for load, resize, and scroll events on the window. On load, it alerts the user. Resizing triggers another alert showing the new window size, and scrolling also produces an alert.</p>
      <h2 className="text-2xl text-gray-800 font-semibold mt-5">Example</h2>
      <pre className="overflow-x-auto bg-gray-200 p-5 rounded-lg mt-5">
        <code>
          {` window.addEventListener('load', function() {
         var initialSizeInfo = 'Initial window size: ' + window.innerWidth + ' x ' + window.
         innerHeight;
         document.getElementById('resizeInfo').innerText = initialSizeInfo;
  
         alert('The page has finished loading!');
      });

      window.addEventListener('resize', function() {
         var newSizeInfo = 'New window size: ' + window.innerWidth + ' x ' + window.
         innerHeight;
         document.getElementById('resizeInfo').innerText = newSizeInfo;
         alert("Page has been resized");
      });

      window.addEventListener('scroll', function() {
         alert('You have scrolled on this page.');
      },{once:true});
`}
        </code>
      </pre>

      <h1 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Document Events</h1>
      <p>Document events occur within the page and use the document object to access and manipulate HTML elements.</p>
      <table className="min-w-full border border-gray-300 text-gray-700 text-sm text-left mt-10">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2 border-b border-gray-300 text-gray-700 font-semibold">Event Name</th>
            <th className="px-4 py-2 border-b border-gray-300 text-gray-700 font-semibold">Description</th>
          </tr>
        </thead>
        <tbody>
          {data1.map((row,index)=>(
            <tr className="cursor-text hover:bg-gray-100">
              <td className="px-4 py-2 border-b border-gray-200">{row.EventName}</td>
              <td className="px-4 py-2 border-b border-gray-200">{row.Description}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h1 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Demonstrating Document Events</h1>
      <p>The script listens for DOM content load, clicks, form submissions, and key presses. It logs when the DOM is ready, alerts clicked element tags, alerts on form submit, and shows each key pressed.</p>
      <h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">Example</h2>
      <pre className="overflow-x-auto bg-gray-200 p-4 rounded-lg mt-5">
        <code>
          {` document.addEventListener('DOMContentLoaded', function() {
         alert('DOM content has been fully loaded!');
      });

      document.addEventListener('click', function(event) {
         alert('Element clicked! Tag Name: ' + event.target.tagName);
      },{once:true});

      document.addEventListener('submit', function() {
         alert('Form submitted!');
      });

      document.addEventListener('keydown', function(event) {
         alert('Key pressed: ' + event.key);
      },{once:true});
`}
        </code>
      </pre>
    
    </div>
  );
};

export default JSWindowDocumentEvents;