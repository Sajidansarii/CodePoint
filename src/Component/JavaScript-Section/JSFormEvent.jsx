import React, { useState } from "react";

const JSFormEvents = () => {
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [submittedData, setSubmittedData] = useState(null);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload
    setSubmittedData(formData);
    setFormData({ name: "", email: "" });
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow mt-10 space-y-6">
      <h1 className="text-3xl font-bold text-blue-600">
        JavaScript <span className="text-green-600">Form Events</span>
      </h1>

      <p className="text-gray-700 mb-4">
        *Form events* let you handle user input and form submissions. Common events include <code>onChange</code> for input fields and <code>onSubmit</code> for forms.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800">Example: Form Handling</h2>
      <form
        onSubmit={handleSubmit}
        className="bg-gray-100 p-6 rounded space-y-4"
      >
        <div>
          <label className="block mb-1 font-medium text-gray-700">
            Name:
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Enter your name"
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-medium text-gray-700">
            Email:
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Enter your email"
            required
          />
        </div>

        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Submit
        </button>
      </form>

      {submittedData && (
        <div className="bg-green-100 p-4 rounded">
          <h3 className="text-lg font-semibold text-green-700">Submitted Data:</h3>
          <p className="text-gray-700">Name: {submittedData.name}</p>
          <p className="text-gray-700">Email: {submittedData.email}</p>
        </div>
      )}

      <h2 className="text-2xl font-semibold text-gray-800">Explanation</h2>
      <p className="text-gray-700 mb-2">
        - <code>onChange</code>: Triggered when the user types in the input. It updates the component state.
      </p>
      <p className="text-gray-700 mb-2">
        - <code>onSubmit</code>: Triggered when the form is submitted. We use <code>e.preventDefault()</code> to stop the page from reloading.
      </p>
      <p className="text-gray-700">
        This approach allows you to handle *user input dynamically* and display submitted data without refreshing the page.
      </p>
    </div>
  );
};

export default JSFormEvents;