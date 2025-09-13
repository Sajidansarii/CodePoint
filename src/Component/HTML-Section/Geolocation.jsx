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
    <div className="p-4 max-w-3xl mx-auto">
      <h1 className="text-3xl font-medium text-blue-500 mb-4">HTML Geolocation API</h1>

      {/* Introduction */}
      <p className="text-gray-700 mb-4">
        The <strong>Geolocation API</strong> allows websites to access the user’s location (with permission). This can be useful for location-based services like maps, weather, or nearby search results.
      </p>

      {/* How It Works */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-blue-500 mb-2">How It Works</h2>
        <ul className="list-disc pl-5 text-gray-700 space-y-1">
          <li>Available via <code>navigator.geolocation</code></li>
          <li>Requests user permission to access their location</li>
          <li>Returns latitude, longitude, and more info</li>
        </ul>
      </div>

      {/* Example Code */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-blue-500 mb-2">Basic Example</h2>
        <pre className="bg-gray-100 p-3 rounded text-sm overflow-x-auto mb-2">
          <code>{`navigator.geolocation.getCurrentPosition((position) => {
  console.log("Latitude:", position.coords.latitude);
  console.log("Longitude:", position.coords.longitude);
});`}</code>
        </pre>
        <p className="text-gray-600 text-sm italic">
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
        <h3 className="text-lg font-semibold text-blue-700 mb-2">⚠ Notes</h3>
        <ul className="list-disc pl-5 text-gray-700 space-y-1">
          <li>User permission is required to access location.</li>
          <li>Geolocation may not work on insecure (non-HTTPS) sites.</li>
          <li>May not be accurate on desktop browsers.</li>
        </ul>
      </div>
    </div>
  );
};

export default HTMLGeolocation;