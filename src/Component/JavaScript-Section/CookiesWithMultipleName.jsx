import React, { useState } from "react";

const JSMultipleCookies = () => {
  const [cookieInfo, setCookieInfo] = useState("No cookies set yet.");

  // ✅ Set multiple cookies
  const setMultipleCookies = () => {
    document.cookie = "username=CodePoint; expires=Fri, 31 Dec 2025 23:59:59 GMT; path=/";
    document.cookie = "role=Admin; expires=Fri, 31 Dec 2025 23:59:59 GMT; path=/";
    document.cookie = "theme=Dark; expires=Fri, 31 Dec 2025 23:59:59 GMT; path=/";
    setCookieInfo("✅ Multiple cookies set: username, role, theme");
  };

  // ✅ Get all cookies
  const getCookies = () => {
    const cookies = document.cookie;
    setCookieInfo(`cookies ? Cookies: ${cookies} : "No cookies found."`);
  };

  // ✅ Delete a specific cookie
  const deleteCookie = (name) => {
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`;
    setCookieInfo(Cookie `${name} deleted!`);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-lg mt-10 space-y-6">
      <h1 className="text-3xl font-medium text-blue-500">
        Multiple Cookies in <span className="text-green-600">JavaScript</span>
      </h1>

      <p className="text-gray-700">
        You can set multiple cookies with different names in the browser. Each cookie has its own name, value, and attributes.
      </p>

      <div className="space-x-2 mt-2">
        <button
          onClick={setMultipleCookies}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Set Multiple Cookies
        </button>
        <button
          onClick={getCookies}
          className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
        >
          Get All Cookies
        </button>
        <button
          onClick={() => deleteCookie("role")}
          className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
        >
          Delete 'role' Cookie
        </button>
      </div>

      <div className="p-4 bg-gray-100 rounded-md font-semibold text-gray-800 whitespace-pre-line">
        {cookieInfo}
      </div>

      <h2 className="text-2xl font-semibold text-gray-800">Code Example:</h2>
      <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto">
{`// Set multiple cookies
document.cookie = "username=Sajid; expires=Fri, 31 Dec 2025 23:59:59 GMT; path=/";
document.cookie = "role=Admin; expires=Fri, 31 Dec 2025 23:59:59 GMT; path=/";
document.cookie = "theme=Dark; expires=Fri, 31 Dec 2025 23:59:59 GMT; path=/";

// Read all cookies
console.log(document.cookie);

// Delete a specific cookie
document.cookie = "role=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";`}
      </pre>

      <h2 className="text-2xl font-semibold text-gray-800">Explanation:</h2>
      <ul className="list-disc list-inside space-y-2 text-gray-700">
        <li>
          Each cookie is defined by its <strong>name=value</strong> pair and optional attributes like <code>expires</code> and <code>path</code>.
        </li>
        <li>
          You can store *multiple cookies* by creating separate name=value pairs.
        </li>
        <li>
          Access all cookies using <code>document.cookie</code>; it returns a string with all cookies separated by ;.
        </li>
        <li>
          Delete a specific cookie by *setting its expiration date in the past*.
        </li>
        <li>
          Useful for storing *different types of user data*, like username, role, and preferences.
        </li>
      </ul>
    </div>
  );
};

export default JSMultipleCookies;