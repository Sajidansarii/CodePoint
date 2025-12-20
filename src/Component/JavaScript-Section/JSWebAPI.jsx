import React, { useState } from "react";

const JSWebAPI = () => {

  return (
    <div className="max-w-4xl p-6 mt-10">
      <h1 className="text-3xl font-medium text-blue-500 mb-3">Web APIs in JavaScript</h1>

      <p>
        A <span className="text-red-400">Web API</span> is a set of built-in browser methods that allow 
        interaction with the browser and external services. JavaScript can use 
        these APIs to perform tasks like storing data, fetching data, accessing 
        user location, manipulating DOM, and more.
      </p>

      <h1 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">What is Web API?</h1>
      <p>API stands for Application Programming Interface, enabling software interaction; Web APIs connect apps via the Web; Browser APIs extend browser features; Server APIs expand server functions.</p>
     

     <h1 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Browser APIs</h1>
     <p>Browsers include a collection of native Web APIs to support complex functions and retrieve data; as an example, the Geolocation API returns the location coordinates of the browser.</p>
     <h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">Example</h2>
     <p>Fetch the user’s current position in terms of latitude and longitude.</p>
     <pre className="text-green-400 bg-gray-900 p-4 rounded-lg mt-5">
      <code>
        {`const myElement = document.getElementById("demo");

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    myElement.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  myElement.innerHTML = "Latitude: " + position.coords.latitude +
  "<br>Longitude: " + position.coords.longitude;
}`}
      </code>
     </pre>

     <h1 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Third Party APIs</h1>
     <p>Third-party APIs aren’t included in your browser by default; you need to get the code online to use them.</p>
      <h2 className="text-2xl text-gray-800 font-semibold mt-5">Example</h2>
      <ul className="list-[square] list-inside mt-5">
        <li>YouTube API - Allows you to display videos on a web site.</li>
        <li>Twitter API - Allows you to display Tweets on a web site.</li>
        <li>Facebook API - Allows you to display Facebook info on a web site.</li>
      </ul>

      















    </div>
  );
};

export default JSWebAPI;