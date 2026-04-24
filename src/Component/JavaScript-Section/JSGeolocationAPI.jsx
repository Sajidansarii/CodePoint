import React, { useState } from "react";

const JSGeolocationAPI = () => {
  const data = [
    {Property:'coords.latitude', Description:'The latitude as a decimal number (always returned)'},
    {Property:'coords.longitude', Description:'The longitude as a decimal number (always returned)'},
    {Property:'coords.accuracy', Description:'The accuracy of position (always returned)'},
    {Property:'coords.altitude', Description:'The altitude in meters above the mean sea level (returned if available)'},
    {Property:'coords.altitudeAccuracy', Description:'The altitude accuracy of position (returned if available)'},
    {Property:'coords.heading', Description:'The heading as degrees clockwise from North (returned if available)'},
    {Property:'coords.speed', Description:'The speed in meters per second (returned if available)'},
    {Property:'timestamp', Description:'The date/time of the response (returned if available)'}
  ]
 
  return (
    <div className="max-w-4xl p-6 mt-10">
      <h1 className="text-3xl font-medium text-blue-500 mb-3">Geolocation API in JavaScript</h1>

      <p >
        The <span className="text-red-400">Geolocation API</span> allows web applications to access the
        geographical location (latitude & longitude) of a device. 
        It is commonly used in mapping apps, weather apps, and navigation systems.
      </p>

      <h1 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Locate the User's Position</h1>
      <p>The HTML Geolocation API allows you to determine a user’s geographic location. Because this may affect privacy, access is only granted after the user gives permission.</p>
     

     <h1 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Using the Geolocation API</h1>
    <p className="mb-3">The <span className="text-red-400">getCurrentPosition()</span> method retrieves the user’s current location.</p>
    <p>The following example outputs the latitude and longitude of the user’s location.</p>
    <h1 className="text-2xl text-gray-800 font-semibold mt-5">Example</h1>
    <pre className="overflow-x-auto bg-gray-200 p-4 rounded-lg mt-5">
      <code>
        {`<script>
const x = document.getElementById("demo");
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  x.innerHTML = "Latitude: " + position.coords.latitude +
  "<br>Longitude: " + position.coords.longitude;
}
</script>`}
      </code>
    </pre>

    <ul className="list-[square] list-inside mt-5 space-y-1">
      <li>Check if Geolocation is supported</li>
      <li>If supported, run the getCurrentPosition() method. If not, display a message to the user</li>
      <li>The showPosition() function outputs the Latitude and Longitude</li>
      <li>If the getCurrentPosition() method is successful, it returns a coordinates object to the function specified in the <span className="ml-5">parameter</span> (showPosition)</li>
    </ul>

    <p className="mt-5">The example above is a very simple Geolocation script and does not include any error handling.</p>
   

   <h1 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Handling Errors and Rejections</h1>
  <p>The second parameter of the <span className="text-red-400">getCurrentPosition()</span> method is responsible for error handling and defines a function that runs if the user’s location cannot be retrieved.</p>
  <h2 className="text-gray-800 text-2xl font-semibold mt-5">Example</h2>
  <pre className="overflow-x-auto bg-gray-200 p-4 rounded-lg mt-5">
    <code>
      {`function showError(error) {
  switch(error.code) {
    case error.PERMISSION_DENIED:
      x.innerHTML = "User denied the request for Geolocation."
      break;
    case error.POSITION_UNAVAILABLE:
      x.innerHTML = "Location information is unavailable."
      break;
    case error.TIMEOUT:
      x.innerHTML = "The request to get user location timed out."
      break;
    case error.UNKNOWN_ERROR:
      x.innerHTML = "An unknown error occurred."
      break;
  }
}`}
    </code>
  </pre>

  <h1 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Displaying the Result in a Map</h1>
  <p>To show the result on a map, you need access to a mapping service such as Google Maps. In the example below, the returned latitude and longitude are used to display the location on a Google Map using a static image.</p>
  <h2 className="text-2xl text-gray-800 font-semibold mt-5">Example</h2>
  <pre className="overflow-x-auto bg-gray-200 p-4 rounded-lg mt-5">
    <code>
      {`function showPosition(position) {
  let latlon = position.coords.latitude + "," + position.coords.longitude;

  let img_url = "https://maps.googleapis.com/maps/api/staticmap?center=
  "+latlon+"&zoom=14&size=400x300&sensor=false&key=YOUR_KEY";

  document.getElementById("mapholder").innerHTML = "<img src='"+img_url+"'>";
}`}
    </code>
  </pre>

  <h1 className="text-gray-800 text-2xl font-semibold mt-10 mb-3">Location-specific Information</h1>
  <p>This page has shown how to display a user’s location on a map. Geolocation can also be very helpful for providing location-specific information, such as:</p>
  <ul className="list-[square] list-inside mt-5">
    <li>Up-to-date local information</li>
    <li>Turn-by-turn navigation (GPS)</li>
    <li>Showing Points-of-interest near the user</li>
  </ul>

  <h1 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">The getCurrentPosition() Method - Return Data</h1>
  <p>The getCurrentPosition() method returns an object when successful. The latitude, longitude, and accuracy properties are always included, while other properties are returned if they are available.</p>
  <table className="min-w-full border border-gray-300 text-gray-700 text-sm text-left mt-5">
    <thead>
      <tr className="bg-gray-100">
        <th className="px-4 py-2 border-b border-gray-300 text-gray-700 font-bold">Property</th>
        <th className="px-4 py-2 border-b border-gray-300 text-gray-700 font-bold">Description</th>
      </tr>
    </thead>
    <tbody>
      {data.map((row,index)=>(
        <tr className="cursor-text hover:bg-gray-100">
          <td className="px-4 py-2 border-b border-gray-200">{row.Property}</td>
          <td className="px-4 py-2 border-b border-gray-200">{row.Description}</td>
        </tr>
      ))}
    </tbody>
  </table>

  <h1 className="text-gray-800 text-2xl font-semibold mt-10 mb-3">Geolocation Object - Other interesting Methods</h1>
  <p>The Geolocation object includes several other useful methods.</p>
  <ul className="list-[square] list-inside mt-5">
    <li><span className="text-red-400">watchPosition()</span> - Returns the current position of the user and continues to return updated position as the user moves (like the GPS in a car).</li>
    <li><span className="text-red-400">clearWatch()</span> - Stops the <span className="text-red-400">watchPosition()</span> method.</li>
  </ul>

  <p className="mt-5">The example below demonstrates the <span className="text-red-400">watchPosition()</span> method. Testing it requires an accurate GPS device, such as a smartphone.</p>
  <h2 className="text-2xl text-gray-800 font-semibold mt-5">Example</h2>
  <pre className="overflow-x-auto bg-gray-200 p-4 rounded-lg mt-5">
    <code>
      {`<script>
const x = document.getElementById("demo");
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.watchPosition(showPosition);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}
function showPosition(position) {
  x.innerHTML = "Latitude: " + position.coords.latitude +
  "<br>Longitude: " + position.coords.longitude;
}
</script>`}
    </code>
  </pre>

    </div>
  );
};

export default JSGeolocationAPI;