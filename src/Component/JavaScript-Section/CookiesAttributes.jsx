import React, { useState } from "react";

const JSCookieAttributes = () => {
  const [cookieInfo, setCookieInfo] = useState("Click buttons to see cookie attributes...");

  // ✅ Set a cookie with attributes
  const setCookieWithAttributes = () => {
    document.cookie = "username=Sajid; expires=Fri, 31 Dec 2025 23:59:59 GMT; path=/; Secure; SameSite=Strict";
    setCookieInfo("✅ Cookie 'username' set with attributes: expires, path, Secure, SameSite");
  };

  // ✅ Read cookies
  const getCookies = () => {
    const cookies = document.cookie;
    setCookieInfo(`cookies ? Cookies: ${cookies} : "No cookies found."`);
  };

  // ✅ Delete cookie
  const deleteCookie = () => {
    document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
    setCookieInfo("✅ Cookie 'username' deleted!");
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-lg mt-10 space-y-6">
      <h1 className="text-3xl font-bold text-blue-600">
        Cookies Attributes in <span className="text-green-600">JavaScript</span>
      </h1>

      <p className="text-gray-700">
        Cookies can have various <strong>attributes</strong> that define their behavior and scope:
        <code>expires</code>, <code>path</code>, <code>Secure</code>, <code>SameSite</code>, and more.
      </p>

      <div className="space-x-2 mt-2">
        <button
          onClick={setCookieWithAttributes}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Set Cookie with Attributes
        </button>
        <button
          onClick={getCookies}
          className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
        >
          Get Cookies
        </button>
        <button
          onClick={deleteCookie}
          className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
        >
          Delete Cookie
        </button>
      </div>

      <div className="p-4 bg-gray-100 rounded-md font-semibold text-gray-800 whitespace-pre-line">
        {cookieInfo}
      </div>

      <h2 className="text-2xl font-semibold text-gray-800">Code Example:</h2>
      <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto">
{`// Set a cookie with attributes
document.cookie = "username=Sajid; expires=Fri, 31 Dec 2025 23:59:59 GMT; path=/; Secure; SameSite=Strict";

// Read cookies
console.log(document.cookie);

// Delete cookie
document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";`}
      </pre>

      <h2 className="text-2xl font-semibold text-gray-800">Explanation:</h2>
      <ul className="list-disc list-inside space-y-2 text-gray-700">
        <li>
          <strong>expires:</strong> Sets the expiration date for the cookie. After this date, the cookie is deleted.
        </li>
        <li>
          <strong>path:</strong> Defines the URL path where the cookie is accessible. Default is the current page.
        </li>
        <li>
          <strong>Secure:</strong> Ensures the cookie is only sent over HTTPS connections.
        </li>
        <li>
          <strong>SameSite:</strong> Controls whether the cookie is sent with cross-site requests. Options: <code>Strict</code>, <code>Lax</code>, <code>None</code>.
        </li>
        <li>
          Proper use of cookie attributes improves security and control over cookie behavior.
        </li>
      </ul>
    </div>
  );
};

export default JSCookieAttributes;