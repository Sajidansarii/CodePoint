import React, { useState } from "react";

const JSDeleteCookies = () => {
  const [cookieInfo, setCookieInfo] = useState("No cookies deleted yet.");

  // ✅ Set a cookie for demonstration
  const setCookie = () => {
    document.cookie = "username=Sajid; expires=Fri, 31 Dec 2025 23:59:59 GMT; path=/";
    setCookieInfo("✅ Cookie 'username' has been set!");
  };

  // ✅ Delete the cookie
  const deleteCookie = () => {
    // Set the cookie expiration date to a past date
    document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
    setCookieInfo("✅ Cookie 'username' has been deleted!");
  };

  // ✅ Read cookies
  const getCookies = () => {
    const cookies = document.cookie;
    setCookieInfo(`cookies ? Cookies: ${cookies} : "No cookies found."`);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-lg mt-10 space-y-6">
      <h1 className="text-3xl font-bold text-blue-600">
        Deleting Cookies in <span className="text-green-600">JavaScript</span>
      </h1>

      <p className="text-gray-700">
        Cookies can be deleted by setting their expiration date to a past date. This effectively removes the cookie from the browser.
      </p>

      <div className="space-x-2 mt-2">
        <button
          onClick={setCookie}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Set Cookie
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
{`// Set a cookie
document.cookie = "username=Sajid; expires=Fri, 31 Dec 2025 23:59:59 GMT; path=/";

// Delete a cookie
document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";

// Read cookies
console.log(document.cookie);`}
      </pre>

      <h2 className="text-2xl font-semibold text-gray-800">Explanation:</h2>
      <ul className="list-disc list-inside space-y-2 text-gray-700">
        <li>
          <strong>Delete a cookie:</strong> Set its expiration date to a past date using <code>expires</code>.
        </li>
        <li>
          The <strong>path</strong> must match the path of the cookie you want to delete.
        </li>
        <li>
          Deleting a cookie removes it from the browser and it will no longer be sent in HTTP requests.
        </li>
        <li>
          You can verify deletion by checking <code>document.cookie</code>.
        </li>
        <li>
          Useful for clearing user sessions, preferences, or sensitive data.
        </li>
      </ul>
    </div>
  );
};

export default JSDeleteCookies;