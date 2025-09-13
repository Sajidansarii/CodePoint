import React from "react";

const HttpsMessages = () => {
  return (
    <div className="p-4 sm:p-6 bg-white rounded-lg shadow-md max-w-4xl">
      <h1 className="text-3xl font-medium mb-4 text-blue-500">HTTPS Messages</h1>
      <p className="mb-4">
        <strong>HTTPS</strong> (HyperText Transfer Protocol Secure) works the
        same way as HTTP but adds <strong>encryption</strong> using
        <strong> SSL/TLS</strong> to keep data secure.
      </p>
      <p className="mb-4">
        When a browser communicates with a server over HTTPS, it still uses{" "}
        <strong>request messages</strong> and <strong>response messages</strong>
        , but the data is <strong>encrypted</strong> so others cannot read it.
      </p>

      {/* Request Message */}
      <h2 className="text-xl font-semibold mt-6 mb-2 text-blue-500">1. HTTPS Request Message</h2>
      <p className="mb-2">
        Sent by the <strong>client</strong> (browser) to the server.
      </p>
      <ul className="list-disc ml-6 mb-4">
        <li>Request line → Method, secure URL (<code>https://</code>), and HTTP version.</li>
        <li>Headers → Additional info about the request.</li>
        <li>Body → Data sent to the server (in POST, PUT, etc.).</li>
      </ul>
      <pre className="bg-gray-200  p-3 rounded-lg overflow-x-auto mb-4">
        {`GET /secure-page.html HTTP/1.1
Host: www.example.com
User-Agent: Mozilla/5.0
Accept: text/html`}
      </pre>
      <p className="italic mb-4">In HTTPS, this message is encrypted during transfer.</p>

      {/* Response Message */}
      <h2 className="text-xl font-semibold mt-6 mb-2 text-blue-500">2. HTTPS Response Message</h2>
      <p className="mb-2">
        Sent by the <strong>server</strong> back to the client after processing the request.
      </p>
      <ul className="list-disc ml-6 mb-4">
        <li>Status line → HTTP version, status code, and message.</li>
        <li>Headers → Info about the server and content.</li>
        <li>Body → The encrypted content returned.</li>
      </ul>
      <pre className="bg-gray-200  p-3 rounded-lg overflow-x-auto mb-4">
        {`HTTP/1.1 200 OK
Content-Type: text/html
Content-Length: 150
<html>
<head><title>Secure Example</title></head>
<body>Welcome to the secure page!</body>
</html>`}
      </pre>
      <p className="italic mb-4">Even this response is encrypted in HTTPS.</p>

      {/* Why Secure */}
      <h2 className="text-xl font-semibold mt-6 mb-2">Why HTTPS Messages are Secure</h2>
      <ul className="list-disc ml-6 mb-4">
        <li><strong>Encryption</strong> → Protects data from being read by attackers.</li>
        <li><strong>Authentication</strong> → Verifies the correct website connection.</li>
        <li><strong>Data Integrity</strong> → Ensures the data is not changed in transit.</li>
      </ul>

      <div className="bg-blue-100 p-3 rounded-lg">
        ✅ <strong>Key Point</strong>: The structure of HTTPS messages is the same as HTTP messages, but the data is secured using SSL/TLS.
      </div>
    </div>
  );
};

export default HttpsMessages;