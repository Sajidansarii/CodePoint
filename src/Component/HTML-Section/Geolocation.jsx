const HTMLGeolocation = () => {
  const getLocation = () => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          alert(
            `Latitude: ${position.coords.latitude}\nLongitude: ${position.coords.longitude}`
          );
        },
        (error) => {
            `alert(Error: ${error.message});`
        }
      );
    } else {
      alert('Geolocation is not supported by this browser.');
    }
  };

  return (
    <div className="p-4 sm:p-6 md:p-8 max-w-4xl">
      <h1 className="text-3xl font-semibold text-blue-500 mb-3">HTML Geolocation API</h1>

      {/* Introduction */}
      <p className="leading-relaxed mb-3">
        The <strong>Geolocation API</strong> allows websites to access the user’s location (with permission). This can be useful for location-based services like maps, weather, or nearby search results.
      </p>

      {/* How It Works */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-blue-500 mb-3">How It Works</h2>
        <ul className="list-[square] list-inside leading-relaxed space-y-1">
          <li>Available via <code>navigator.geolocation</code></li>
          <li>Requests user permission to access their location</li>
          <li>Returns latitude, longitude, and more info</li>
        </ul>
      </div>

      {/* Example Code */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-blue-500 mb-3">Basic Example</h2>
        <pre className="bg-gray-100 p-3 rounded-md overflow-x-auto max-w-full whitespace-pre-wrap mb-3 text-sm">
  <code>
    <span className="text-purple-600">navigator</span>.
    <span className="text-blue-600">geolocation</span>.
    <span className="text-yellow-600">getCurrentPosition</span>
    <span className="text-gray-500">(</span>
    <span className="text-gray-500">(</span>
    <span className="text-orange-600">position</span>
    <span className="text-gray-500">)</span>
    <span className="text-gray-500"> =&gt; </span>
    <span className="text-gray-500">{`{`}</span>
    <br/>

    <span className="text-gray-500">&nbsp;&nbsp;</span>
    <span className="text-purple-600">console</span>.
    <span className="text-blue-600">log</span>
    <span className="text-gray-500">(</span>
    <span className="text-green-600">"Latitude:"</span>
    <span className="text-gray-500">, </span>
    <span className="text-orange-600">position</span>.
    <span className="text-blue-600">coords</span>.
    <span className="text-blue-600">latitude</span>
    <span className="text-gray-500">);</span>
    <br/>

    <span className="text-gray-500">&nbsp;&nbsp;</span>
    <span className="text-purple-600">console</span>.
    <span className="text-blue-600">log</span>
    <span className="text-gray-500">(</span>
    <span className="text-green-600">"Longitude:"</span>
    <span className="text-gray-500">, </span>
    <span className="text-orange-600">position</span>.
    <span className="text-blue-600">coords</span>.
    <span className="text-blue-600">longitude</span>
    <span className="text-gray-500">);</span>
    <br/>

    <span className="text-gray-500">{`}`}</span>
    <span className="text-gray-500">)</span>;
  </code>
</pre>
        <p className="leading-relaxed text-sm italic">
          This code gets the user's current location and logs it to the console.
        </p>
      </div>

      {/* Interactive Button */}
      <div className="mb-6">
        <button
          onClick={getLocation}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          Get My Location
        </button>
      </div>

      {/* Notes */}
      <div className="p-4 bg-blue-50 border border-blue-200 rounded">
        <h3 className="text-lg font-semibold text-blue-700 mb-3">⚠ Notes</h3>
        <ul className="list-[square] list-inside leading-relaxed space-y-1">
          <li>User permission is required to access location.</li>
          <li>Geolocation may not work on insecure (non-HTTPS) sites.</li>
          <li>May not be accurate on desktop browsers.</li>
        </ul>
      </div>
    </div>
  );
};

export default HTMLGeolocation;