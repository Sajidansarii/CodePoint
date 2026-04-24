const HTMLWebAPIs = () => {
  return (
    <div className="p-4 sm:p-6 md:p-8 max-w-4xl">
      <h1 className="text-3xl font-semibold text-blue-500 mb-3">HTML Web APIs</h1>

      <p className="leading-relaxed mb-3">
        Web APIs (Application Programming Interfaces) are built-in browser features that allow developers to interact with the browser, user devices, or the web page. They enhance HTML by enabling dynamic content, user interaction, and system-level functionality.
      </p>

      {/* Features */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-3">Why Use Web APIs?</h2>
        <ul className="list-[square] list-inside leading-relaxed space-y-2">
          <li>Access browser or device features like camera, location, and storage.</li>
          <li>Update web content dynamically using JavaScript.</li>
          <li>Interact with the web server or fetch data using APIs like <code>fetch()</code>.</li>
        </ul>
      </div>

      {/* Popular Web APIs */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-3">Commonly Used Web APIs</h2>
        <ul className="list-[square] list-inside leading-relaxed space-y-2">
          <li><strong>DOM API:</strong> Interact with and update HTML elements dynamically.</li>
          <li><strong>Geolocation API:</strong> Get user’s current location.</li>
          <li><strong>Fetch API:</strong> Send/receive data from a web server asynchronously.</li>
          <li><strong>Storage API:</strong> Use <code>localStorage</code> or <code>sessionStorage</code> to store data in the browser.</li>
          <li><strong>Canvas API:</strong> Draw graphics, animations, or games inside the browser.</li>
          <li><strong>Media API:</strong> Access the user’s camera and microphone.</li>
          <li><strong>Notification API:</strong> Send desktop or browser notifications.</li>
        </ul>
      </div>

      {/* Example - Geolocation */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-3">Example: Geolocation API</h2>
        <p className="leading-relaxed mb-3">Get the user’s current location:</p>
       <pre className="bg-gray-100 p-3 rounded-md overflow-x-auto max-w-full whitespace-pre-wrap mb-3 text-sm">
  <code>
    <span className="text-purple-600">navigator</span>.
    <span className="text-blue-600">geolocation</span>.
    <span className="text-blue-600">getCurrentPosition</span>
    <span className="text-gray-500">(</span>
    <span className="text-yellow-600">(position) =&gt;</span>
    <span className="text-gray-500"> {'{'} </span>
    <br/>

    &nbsp;&nbsp;<span className="text-blue-600">console</span>.
    <span className="text-blue-600">log</span>
    <span className="text-gray-500">(</span>
    <span className="text-green-600">"Latitude:"</span>, 
    position.coords.latitude
    <span className="text-gray-500">);</span>
    <br/>

    &nbsp;&nbsp;<span className="text-blue-600">console</span>.
    <span className="text-blue-600">log</span>
    <span className="text-gray-500">(</span>
    <span className="text-green-600">"Longitude:"</span>, 
    position.coords.longitude
    <span className="text-gray-500">);</span>
    <br/>

    <span className="text-gray-500">{'}'}</span>
    <span className="text-gray-500">);</span>
  </code>
</pre>
      </div>

      {/* Example - Fetch API */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-3">Example: Fetch API</h2>
        <p className="leading-relaxed mb-3">Get JSON data from a server:</p>
       <pre className="bg-gray-100 p-3 rounded-md overflow-x-auto max-w-full whitespace-pre-wrap mb-3 text-sm">
  <code>
    <span className="text-purple-600">fetch</span>
    <span className="text-gray-500">(</span>
    <span className="text-green-600">"https://jsonplaceholder.typicode.com/posts/1"</span>
    <span className="text-gray-500">)</span>
    <br/>

    &nbsp;&nbsp;.<span className="text-blue-600">then</span>
    <span className="text-gray-500">(</span>
    response =&gt; response.<span className="text-blue-600">json</span>()
    <span className="text-gray-500">)</span>
    <br/>

    &nbsp;&nbsp;.<span className="text-blue-600">then</span>
    <span className="text-gray-500">(</span>
    data =&gt; <span className="text-blue-600">console</span>.<span className="text-blue-600">log</span>(data)
    <span className="text-gray-500">);</span>
  </code>
</pre>
      </div>

      {/* Best Practices */}
      <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded">
        <h3 className="text-lg font-semibold text-blue-700 mb-3">Best Practices</h3>
        <ul className="list-[square] list-inside leading-relaxed space-y-1">
          <li>Always check if the browser supports the API using <code>if ('API' in window)</code>.</li>
          <li>Handle errors like permissions or unsupported features gracefully.</li>
          <li>Do not request unnecessary user permissions.</li>
        </ul>
      </div>
    </div>
  );
};

export default HTMLWebAPIs;