import React, { useState } from "react";

const JSFormsAPI = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
  });
  const [output, setOutput] = useState("Fill the form and submit to see results...");

  // ✅ Handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // ✅ Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    // Access form using Forms API
    const form = e.target;
    const username = form.elements["username"].value;
    const email = form.elements["email"].value;

    setOutput(`Username: ${username} |  Email: ${email}`);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-lg mt-10 space-y-6">
      <h1 className="text-3xl font-bold text-blue-600">
        Forms API in <span className="text-green-600">JavaScript</span>
      </h1>

      <p className="text-gray-700">
        The <strong>Forms API</strong> in JavaScript allows developers to interact with 
        HTML forms and their elements. You can access inputs, read values, validate, 
        and handle form submissions easily.
      </p>

      {/* ✅ Example Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-medium text-gray-800">Username:</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className="w-full border rounded-lg p-2 mt-1"
            placeholder="Enter username"
            required
          />
        </div>
        <div>
          <label className="block font-medium text-gray-800">Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border rounded-lg p-2 mt-1"
            placeholder="Enter email"
            required
          />
        </div>
        <button
          type="submit"
          className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Submit Form
        </button>
      </form>

      <div className="p-4 bg-gray-100 rounded-md font-semibold text-gray-800">
        {output}
      </div>

      <h2 className="text-2xl font-semibold text-gray-800">Code Example:</h2>
      <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto">
{`// Access form elements using Forms API
const form = document.forms["myForm"]; 
const username = form.elements["username"].value;
const email = form.elements["email"].value;

// Example
console.log(username, email);`}
      </pre>

      <h2 className="text-2xl font-semibold text-gray-800">Explanation:</h2>
      <ul className="list-disc list-inside space-y-2 text-gray-700">
        <li>
          Forms can be accessed using <code>document.forms</code> collection.
        </li>
        <li>
          Each form has <code>elements[]</code> which contains all input fields, buttons, etc.
        </li>
        <li>
          You can get/set values of inputs using <code>form.elements["name"].value</code>.
        </li>
        <li>
          Useful for form validation, auto-filling, and handling submissions dynamically.
        </li>
      </ul>
    </div>
  );
};

export default JSFormsAPI;