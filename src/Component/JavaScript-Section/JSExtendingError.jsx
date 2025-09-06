import React, { useState } from "react";

// ✅ Step 1: Create a Custom Error class by extending Error
class AuthenticationError extends Error {
  constructor(message, code) {
    super(message);
    this.name = "AuthenticationError"; // Custom error name
    this.code = code; // Custom property
  }
}

const JSExtendingError = () => {
  const [username, setUsername] = useState("");
  const [message, setMessage] = useState("");

  // ✅ Step 2: Function that may throw extended error
  const loginHandler = () => {
    try {
      if (username.trim() === "") {
        throw new AuthenticationError("❌ Username cannot be empty!", 400);
      }
      if (username !== "admin") {
        throw new AuthenticationError("🚫 Invalid username!", 401);
      }
      setMessage(` Welcome, ${username}!`);
    } catch (error) {
      if (error instanceof AuthenticationError) {
        setMessage(`${error.name} (Code: ${error.code}): ${error.message}`);
      } else {
        setMessage("⚠ Unknown error occurred!");
      }
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-lg mt-10 space-y-6">
      <h1 className="text-3xl font-bold text-blue-600">
        Extending <span className="text-green-600">Error</span> in JavaScript
      </h1>

      <p className="text-gray-700">
        In JavaScript, you can create <strong>custom error classes</strong> by 
        <code>extending</code> the built-in <code>Error</code> object. 
        This allows you to add custom properties like error codes or types.
      </p>

      <div className="flex items-center gap-4">
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter username..."
          className="px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-400"
        />
        <button
          onClick={loginHandler}
          className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Login
        </button>
      </div>

      {message && (
        <div className="p-4 bg-gray-100 rounded-md">
          <p className="font-semibold text-gray-800">{message}</p>
        </div>
      )}

      <h2 className="text-2xl font-semibold text-gray-800">Explanation:</h2>
      <ul className="list-disc list-inside space-y-2 text-gray-700">
        <li>
          <strong>class AuthenticationError extends Error</strong> → Creates a new custom error type.
        </li>
        <li>
          <strong>super(message)</strong> → Calls the parent <code>Error</code> constructor.
        </li>
        <li>
          <strong>this.name</strong> → Sets a custom error name.
        </li>
        <li>
          <strong>this.code</strong> → Adds an extra property (error code).
        </li>
        <li>
          Inside <code>try...catch</code>, we check if the error is an instance of our custom class.
        </li>
      </ul>
    </div>
  );
};

export default JSExtendingError;