import React from "react";

const HttpsMessages = () => {
  return (
    <div className="p-4 sm:p-6 md:p-8 max-w-4xl">
      <h1 className="text-3xl font-semibold mb-4 text-blue-500">HTTPS Messages</h1>
      <p className="mb-3">
        <strong>HTTPS</strong> (HyperText Transfer Protocol Secure) works the
        same way as HTTP but adds <strong>encryption</strong> using
        <strong> SSL/TLS</strong> to keep data secure.
      </p>
      <p className="mb-3">
        When a browser communicates with a server over HTTPS, it still uses{" "}
        <strong>request messages</strong> and <strong>response messages</strong>
        , but the data is <strong>encrypted</strong> so others cannot read it.
      </p>

      {/* Request Message */}
      <h2 className="text-2xl font-semibold mt-5 mb-3 text-blue-500">1. HTTPS Request Message</h2>
      <p className="mb-2">
        Sent by the <strong>client</strong> (browser) to the server.
      </p>
      <ul className="list-[square] list-inside mb-3">
        <li>Request line → Method, secure URL (<code>https://</code>), and HTTP version.</li>
        <li>Headers → Additional info about the request.</li>
        <li>Body → Data sent to the server (in POST, PUT, etc.).</li>
      </ul>
    <pre className="bg-gray-100 p-3 rounded-md overflow-x-auto max-w-full whitespace-pre-wrap mb-3 text-sm">
  <code>
    <span className="text-purple-600">GET</span>
    <span className="text-blue-600"> /secure-page.html</span>
    <span className="text-gray-500"> HTTP/1.1</span>
    <br/>

    <span className="text-red-500">Host</span>:
    <span className="text-green-600"> www.example.com</span>
    <br/>

    <span className="text-red-500">User-Agent</span>:
    <span className="text-green-600"> Mozilla/5.0</span>
    <br/>

    <span className="text-red-500">Accept</span>:
    <span className="text-green-600"> text/html</span>
  </code>
</pre>
      <p className="italic mb-3">In HTTPS, this message is encrypted during transfer.</p>

      {/* Response Message */}
      <h2 className="text-2xl font-semibold mt-5 mb-3 text-blue-500">2. HTTPS Response Message</h2>
      <p className="mb-2">
        Sent by the <strong>server</strong> back to the client after processing the request.
      </p>
      <ul className="list-[square] list-inside mb-3">
        <li>Status line → HTTP version, status code, and message.</li>
        <li>Headers → Info about the server and content.</li>
        <li>Body → The encrypted content returned.</li>
      </ul>
    <pre className="bg-gray-100 p-3 rounded-md overflow-x-auto max-w-full whitespace-pre-wrap mb-3 text-sm">
  <code>
    <span className="text-gray-500">HTTP/1.1</span>
    <span className="text-purple-600"> 200 OK</span>
    <br/>

    <span className="text-red-500">Content-Type</span>:
    <span className="text-green-600"> text/html</span>
    <br/>

    <span className="text-red-500">Content-Length</span>:
    <span className="text-green-600"> 150</span>
    <br/>

    {/* HTML starts */}
    <span className="text-gray-500">&lt;</span>
    <span className="text-blue-600">html</span>
    <span className="text-gray-500">&gt;</span>
    <br/>

    <span className="text-gray-500">&lt;</span>
    <span className="text-blue-600">head</span>
    <span className="text-gray-500">&gt;</span>

    <span className="text-gray-500">&lt;</span>
    <span className="text-blue-600">title</span>
    <span className="text-gray-500">&gt;</span>
    <span className="text-gray-700">Secure Example</span>
    <span className="text-gray-500">&lt;/</span>
    <span className="text-blue-600">title</span>
    <span className="text-gray-500">&gt;</span>

    <span className="text-gray-500">&lt;/</span>
    <span className="text-blue-600">head</span>
    <span className="text-gray-500">&gt;</span>
    <br/>

    <span className="text-gray-500">&lt;</span>
    <span className="text-blue-600">body</span>
    <span className="text-gray-500">&gt;</span>
    <span className="text-gray-700">Welcome to the secure page!</span>
    <span className="text-gray-500">&lt;/</span>
    <span className="text-blue-600">body</span>
    <span className="text-gray-500">&gt;</span>
    <br/>

    <span className="text-gray-500">&lt;/</span>
    <span className="text-blue-600">html</span>
    <span className="text-gray-500">&gt;</span>
  </code>
</pre>
      <p className="italic mb-4">Even this response is encrypted in HTTPS.</p>

      {/* Why Secure */}
      <h2 className="text-2xl font-semibold mt-5 mb-3">Why HTTPS Messages are Secure</h2>
      <ul className="list-[square] list-inside mb-3">
        <li><strong>Encryption</strong> → Protects data from being read by attackers.</li>
        <li><strong>Authentication</strong> → Verifies the correct website connection.</li>
        <li><strong>Data Integrity</strong> → Ensures the data is not changed in transit.</li>
      </ul>

      <div className="bg-blue-100 p-3 rounded-lg">
         <strong>Key Point</strong>: The structure of HTTPS messages is the same as HTTP messages, but the data is secured using SSL/TLS.
      </div>
    </div>
  );
};

export default HttpsMessages;