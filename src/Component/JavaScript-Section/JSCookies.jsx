import React, { useState } from "react";

const JSCookies = () => {
  const [cookieInfo, setCookieInfo] = useState("No cookies set yet.");

  // ✅ Set a cookie
  const setCookie = () => {
    document.cookie = "username=Sajid; expires=Fri, 31 Dec 2025 23:59:59 GMT; path=/";
    setCookieInfo("✅ Cookie 'username' has been set!");
  };

  // ✅ Get cookies
  const getCookie = () => {
    const cookies = document.cookie;
    setCookieInfo(`cookies ? Cookies: ${cookies} : No cookies found.`);
  };

  // ✅ Delete a cookie
  const deleteCookie = () => {
    document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
    setCookieInfo("✅ Cookie 'username' has been deleted!");
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-lg mt-10 space-y-6">
      <h1 className="text-3xl font-bold text-blue-600">
        Cookies in <span className="text-green-600">JavaScript</span>
      </h1>

      <p className="text-gray-700">
        Cookies are small pieces of data stored in the browser. They are used to store user preferences,
        session information, and other data that needs to persist across page reloads.
      </p>

      <div className="space-x-2 mt-2">
        <button
          onClick={setCookie}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Set Cookie
        </button>
        <button
          onClick={getCookie}
          className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
        >
          Get Cookie
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
{`// Set a cookie
document.cookie = "username=Sajid; expires=Fri, 31 Dec 2025 23:59:59 GMT; path=/";

// Get all cookies
console.log(document.cookie);

// Delete a cookie
document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";`}
      </pre>

      <h2 className="text-2xl font-semibold text-gray-800">Explanation:</h2>
      <ul className="list-disc list-inside space-y-2 text-gray-700">
        <li>
          <strong>document.cookie:</strong> Used to create, read, or delete cookies.
        </li>
        <li>
          To <strong>set a cookie</strong>, specify the name, value, expiration date, and path.
        </li>
        <li>
          To <strong>read cookies</strong>, simply access <code>document.cookie</code>.
        </li>
        <li>
          To <strong>delete a cookie</strong>, set its expiration date in the past.
        </li>
        <li>
          Cookies are part of the browser environment and useful for *sessions, preferences, and tracking*.
        </li>
      </ul>
    </div>
  );
};

export default JSCookies;