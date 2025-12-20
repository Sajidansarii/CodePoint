import React, { useState } from "react";

const JSDOMEvents = () => {
  const [text, setText] = useState("Hover over me!");
  const [inputValue, setInputValue] = useState("");

  // Click event handler
  const handleClick = () => {
    alert("Button clicked!");
  };

  // Mouseover event handler
  const handleMouseOver = () => {
    setText("Mouse is over the text!");
  };

  const handleMouseOut = () => {
    setText("Hover over me!");
  };

  // Input change handler
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const data = [ 
    {Event:'abort', OccursWhen:'The loading of a media is aborted'},
    {Event:'afterprint', OccursWhen:'A page has started printing'},
    {Event:'animationend', OccursWhen:'A CSS animation has completed'},
    {Event:'animationiteration	', OccursWhen:'A CSS animation is repeated'},
    {Event:'animationstart', OccursWhen:'A CSS animation has started'},
    {Event:'beforeprint', OccursWhen:'A page is about to be printed'},
    {Event:'beforeunload', OccursWhen:'Before a document is about to be unloaded'},
    {Event:'blur', OccursWhen:'An element loses focus'},
    {Event:'canplay', OccursWhen:'The browser can start playing a media (has buffered enough to begin)'},
    {Event:'canplaythrough', OccursWhen:'The browser can play through a media without stopping for buffering'},
    {Event:'change', OccursWhen:'The content of a form element has changed'},
    {Event:'click', OccursWhen:'An element is clicked on'},
    {Event:'contextmenu', OccursWhen:'An element is right-clicked to open a context menu'},
    {Event:'copy', OccursWhen:'The content of an element is copied'},
    {Event:'cut', OccursWhen:'The content of an element is cut'},
    {Event:'dblclick', OccursWhen:'An element is double-clicked'},
    {Event:'drag', OccursWhen:'An element is being dragged'},
    {Event:'dragend', OccursWhen:'Dragging of an element has ended'},
    {Event:'dragenter', OccursWhen:'A dragged element enters the drop target'},
    {Event:'dragleave', OccursWhen:'A dragged element leaves the drop target'},
    {Event:'dragover', OccursWhen:'A dragged element is over the drop target'},
    {Event:'dragstart', OccursWhen:'Dragging of an element has started'},
    {Event:'drop', OccursWhen:'A dragged element is dropped on the target'},
    {Event:'durationchange', OccursWhen:'The duration of a media is changed'},
    {Event:'ended', OccursWhen:'A media has reach the end ("thanks for listening")'},
    {Event:'error', OccursWhen:'An error has occurred while loading a file'},
    {Event:'focus', OccursWhen:'An element gets focus'},
    {Event:'focusin', OccursWhen:'An element is about to get focus'},
    {Event:'focusout', OccursWhen:'An element is about to lose focus'},
    {Event:'fullscreenchange', OccursWhen:'An element is displayed in fullscreen mode'},
    {Event:'fullscreenerror', OccursWhen:'An element can not be displayed in fullscreen mode'},
    {Event:'hashchange', OccursWhen:'There has been changes to the anchor part of a URL'},
    {Event:'input', OccursWhen:'An element gets user input'},
    {Event:'invalid', OccursWhen:'An element is invalid'},
    {Event:'keydown', OccursWhen:'A key is down'},
    {Event:'keypress', OccursWhen:'A key is pressed'},
    {Event:'keyup', OccursWhen:'A key is released'},
    {Event:'load', OccursWhen:'An object has loaded'},
    {Event:'loadeddata', OccursWhen:'Media data is loaded'},
    {Event:'loadedmetadata', OccursWhen:'Meta data (like dimensions and duration) are loaded'},
    {Event:'loadstart', OccursWhen:'The browser starts looking for the specified media'},
    {Event:'message', OccursWhen:'A message is received through the event source'},
    {Event:'mousedown', OccursWhen:'The mouse button is pressed over an element'},
    {Event:'mouseenter', OccursWhen:'The pointer is moved onto an element'},
    {Event:'mouseleave', OccursWhen:'The pointer is moved out of an element'},
    {Event:'mousemove', OccursWhen:'The pointer is moved over an element'},
    {Event:'mouseover', OccursWhen:'The pointer is moved onto an element'},
    {Event:'mouseout', OccursWhen:'The pointer is moved out of an element'},
    {Event:'mouseup', OccursWhen:'A user releases a mouse button over an element'},
    {Event:'mousewheel', OccursWhen:'Deprecated. Use the wheel event instead'},
    {Event:'offline', OccursWhen:'The browser starts working offline'},
    {Event:'online', OccursWhen:'The browser starts working online'},
    {Event:'open', OccursWhen:'A connection with the event source is opened'},
    {Event:'pagehide', OccursWhen:'User navigates away from a webpage'},
    {Event:'pageshow', OccursWhen:'User navigates to a webpage'},
    {Event:'paste', OccursWhen:'Some content is pasted in an element'},
    {Event:'pause', OccursWhen:'A media is paused'},
    {Event:'play', OccursWhen:'The media has started or is no longer paused'},
    {Event:'playing', OccursWhen:'The media is playing after being paused or buffered'},
    {Event:'popstate', OccursWhen:"The window's history changes"},
    {Event:'progress', OccursWhen:'The browser is downloading media data'},
    {Event:'ratechange', OccursWhen:'The playing speed of a media is changed'},
    {Event:'resize', OccursWhen:'The document view is resized'},
    {Event:'reset', OccursWhen:'A form is reset'},
    {Event:'scroll', OccursWhen:'A scrollbar is being scrolled'},
    {Event:'search', OccursWhen:'Something is written in a search field'},
    {Event:'seeked', OccursWhen:'Skipping to a media position is finished'},
    {Event:'seeking', OccursWhen:'Skipping to a media position is started'},
    {Event:'select', OccursWhen:'User selects some text'},
    {Event:'show', OccursWhen:'A <menu> element is shown as a context menu'},
    {Event:'stalled', OccursWhen:'The browser is trying to get unavailable media data'},
    {Event:'storage', OccursWhen:'A Web Storage area is updated'},
    {Event:'submit', OccursWhen:'A form is submitted'},
    {Event:'suspend', OccursWhen:'The browser is intentionally not getting media data'},
    {Event:'timeupdate', OccursWhen:'The playing position has changed (the user moves to a different point in the media)'},
    {Event:'toggle', OccursWhen:'The user opens or closes the <details> element'},
    {Event:'touchcancel', OccursWhen:'The touch is interrupted'},
    {Event:'touchend', OccursWhen:'A finger is removed from a touch screen'},
    {Event:'touchmove', OccursWhen:'A finger is dragged across the screen'},
    {Event:'touchstart', OccursWhen:'A finger is placed on a touch screen'},
    {Event:'transitionend', OccursWhen:'A CSS transition has completed'},
    {Event:'unload', OccursWhen:'A page has unloaded'},
    {Event:'volumechange', OccursWhen:'The volume of a media is changed (includes muting)'},
    {Event:'waiting', OccursWhen:'A media is paused but is expected to resume (e.g. buffering)'},
    {Event:'wheel', OccursWhen:'The mouse wheel rolls up or down over an element'}
  ]

  return (
    <div className="max-w-4xl p-6">
      <h1 className="text-3xl font-medium text-blue-500 mb-4">JavaScript DOM Events</h1>

      <p className="text-gray-700 mb-6">
        <span className="text-red-400">DOM events</span> allow your web page to respond to user actions like clicks, mouse movements, typing, or page load. 
        React uses camelCase event handlers like <code>onClick</code> and <code>onMouseOver</code>.
      </p>

      {/* Click Event */}
      <h2 className="text-2xl font-semibold text-gray-800 mb-2">Click Event</h2>
      <div className="bg-gray-100 p-4 rounded mb-4">
        <button
          type="button"
          onClick={handleClick}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Click Me
        </button>
      </div>

      {/* Mouseover Event */}
      <h2 className="text-2xl font-semibold text-gray-800 mb-2">Mouseover Event</h2>
      <div className="bg-gray-100 p-4 rounded mb-4">
        <p
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
          className="text-gray-800 cursor-pointer"
        >
          {text}
        </p>
      </div>

      {/* Input Change Event */}
      <h2 className="text-2xl font-semibold text-gray-800 mb-2">Input Change Event</h2>
      <div className="bg-gray-100 p-4 rounded mb-4">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          className="border border-gray-300 p-2 rounded w-full"
          placeholder="Type something..."
        />
        <p className="mt-2 text-gray-700">You typed: {inputValue}</p>
      </div>

      <table className="min-w-full border-b border-gray-300 text-gray-700 text-sm text-left mt-10">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2 border-b border-gray-300 text-gray-700 font-bold">Events</th>
            <th className="px-4 py-2 border-b border-gray-300 text-gray-700 font-bold">Occurs When</th>
          </tr>
        </thead>
        {data.map((row,index)=>(
          <tr className="cursor-text hover:bg-gray-100">
            <td className="px-4 py-2 border-b border-gray-200">{row.Event}</td>
            <td className="px-4 py-2 border-b border-gray-200">{row.OccursWhen}</td>
          </tr>
        ))}
      </table>

      
    </div>
  );
};

export default JSDOMEvents;