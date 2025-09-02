import React from "react";
import { jsx } from "react/jsx-runtime";

const HttpsMethods = () => {
  return (
    <div className="p-4 md:p-8 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      {/* Heading */}
      <h1 className="text-3xl font-bold mb-4">HTTPS Methods</h1>
      <p className="mb-4">
        <strong>HTTPS</strong> (HyperText Transfer Protocol Secure) is the secure
        version of HTTP. It uses encryption (SSL/TLS) to protect data between the
        client (browser) and the server. HTTPS supports several <b>methods</b> to
        perform specific actions on resources.
      </p>

      {/* Common Methods */}
      <h2 className="text-2xl font-semibold mt-6 mb-2">Common HTTPS Methods</h2>

      {/* GET */}
      <h3 className="text-xl font-semibold mt-4">1. GET</h3>
      <ul className="list-disc ml-6 mb-4">
        <li>Used to request data from the server.</li>
        <li>Data is sent in the URL (query parameters).</li>
        <li>Should not change data on the server.</li>
        <li>Can be cached by browsers.</li>
      </ul>
      <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto mb-6">
{`GET /products HTTP/1.1
Host: example.com`}
      </pre>

      {/* POST */}
      <h3 className="text-xl font-semibold mt-4">2. POST</h3>
      <ul className="list-disc ml-6 mb-4">
        <li>Used to send data to the server to create or process something.</li>
        <li>Data is sent in the request body.</li>
        <li>Often used for forms and file uploads.</li>
      </ul>
      <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto mb-6">
{`POST /products HTTP/1.1
Host: example.com
Content-Type: application/json

{
  "name": "Laptop",
  "price": 75000
}`}
      </pre>

      {/* PUT */}
      <h3 className="text-xl font-semibold mt-4">3. PUT</h3>
      <ul className="list-disc ml-6 mb-4">
        <li>Replaces an existing resource with new data.</li>
        <li>Updates the entire resource.</li>
      </ul>
      <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto mb-6">
{`PUT /products/1 HTTP/1.1
Host: example.com
Content-Type: application/json

{
  "name": "Laptop Pro",
  "price": 90000
}`}
      </pre>

      {/* PATCH */}
      <h3 className="text-xl font-semibold mt-4">4. PATCH</h3>
      <ul className="list-disc ml-6 mb-4">
        <li>Partially updates a resource.</li>
        <li>More efficient for small changes than PUT.</li>
      </ul>
      <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto mb-6">
{`PATCH /products/1 HTTP/1.1
Host: example.com
Content-Type: application/json

{
  "price": 88000
}`}
      </pre>

      {/* DELETE */}
      <h3 className="text-xl font-semibold mt-4">5. DELETE</h3>
      <ul className="list-disc ml-6 mb-4">
        <li>Removes a resource from the server.</li>
      </ul>
      <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto mb-6">
{`DELETE /products/1 HTTP/1.1
Host: example.com`}
      </pre>

      {/* Summary Table */}
      <h2 className="text-2xl font-semibold mt-8 mb-4">Summary Table</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300 dark:border-gray-700">
          <thead>
            <tr className="bg-gray-200 dark:bg-gray-700">
              <th className="border px-4 py-2">Method</th>
              <th className="border px-4 py-2">Purpose</th>
              <th className="border px-4 py-2">Data in Body?</th>
              <th className="border px-4 py-2">Safe?</th>
              <th className="border px-4 py-2">Idempotent?</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-2">GET</td>
              <td className="border px-4 py-2">Read data</td>
              <td className="border px-4 py-2">❌</td>
              <td className="border px-4 py-2">✅</td>
              <td className="border px-4 py-2">✅</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">POST</td>
              <td className="border px-4 py-2">Create / Process</td>
              <td className="border px-4 py-2">✅</td>
              <td className="border px-4 py-2">❌</td>
              <td className="border px-4 py-2">❌</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">PUT</td>
              <td className="border px-4 py-2">Replace</td>
              <td className="border px-4 py-2">✅</td>
              <td className="border px-4 py-2">❌</td>
              <td className="border px-4 py-2">✅</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">PATCH</td>
              <td className="border px-4 py-2">Partial update</td>
              <td className="border px-4 py-2">✅</td>
              <td className="border px-4 py-2">❌</td>
              <td className="border px-4 py-2">❌</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">DELETE</td>
              <td className="border px-4 py-2">Remove</td>
              <td className="border px-4 py-2">❌</td>
              <td className="border px-4 py-2">❌</td>
              <td className="border px-4 py-2">✅</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Note */}
      <div className="mt-6 p-4 bg-yellow-100 dark:bg-yellow-900 rounded">
        <strong>Note:</strong> Always use HTTPS instead of HTTP for secure
        communication, especially for forms, login pages, and sensitive data.
      </div>
    </div>
  );
};

export default HttpsMethods;

