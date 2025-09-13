import React, { useState } from "react";

// ✅ Step 1: Create a Custom Error class
class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
  }
}

const JSCustomError = () => {
  const [input, setInput] = useState("");
  const [message, setMessage] = useState("");

  // ✅ Step 2: Function that may throw custom error
  const validateInput = () => {
    try {
      if (input.trim() === "") {
        throw new ValidationError(" Input cannot be empty!");
      }
      if (input.length < 3) {
        throw new ValidationError("⚠ Input must be at least 3 characters long!");
      }
      setMessage(` Valid Input: ${input}`);
    } catch (error) {
      if (error instanceof ValidationError) {
        setMessage(`${error.name}: ${error.message}`);
      } else {
        setMessage("⚠ Unknown Error occurred!");
      }
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-lg mt-10 space-y-6">
      <h1 className="text-3xl font-medium text-blue-500">
        Custom Errors in <span className="text-green-600">JavaScript</span>
      </h1>

      <p className="text-gray-700">
        In JavaScript, you can create <strong>custom error classes</strong> using 
        the <code>class</code> keyword and extend the built-in <code>Error</code> object.
        This helps in handling specific error cases more clearly.
      </p>

      <div className="flex items-center gap-4">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter text..."
          className="px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-400"
        />
        <button
          onClick={validateInput}
          className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Validate
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
          <strong>Custom Class:</strong> <code>ValidationError</code> extends the built-in <code>Error</code>.
        </li>
        <li>
          <strong>Throw Error:</strong> Use <code>throw new ValidationError("Message")</code> to raise a custom error.
        </li>
        <li>
          <strong>Catch Error:</strong> Inside <code>try...catch</code>, check if error is an instance of your custom class.
        </li>
        <li>
          This makes error handling more *descriptive* and *organized*.
        </li>
      </ul>
    </div>
  );
};

export default JSCustomError;