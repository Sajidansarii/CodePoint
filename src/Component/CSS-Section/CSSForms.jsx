import React from "react";

const CssForms = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-medium mb-4 text-blue-500">CSS Forms</h1>
      <p className="mb-4">
        Forms are styled with CSS to make them more readable and user-friendly.
      </p>

      <form className="space-y-4 bg-gray-200 shadow-md rounded-lg p-6 max-w-lg">
        <div>
          <label htmlFor="name" className="block font-medium text-gray-700">
            Name:
          </label>
          <input
            type="text"
            id="name"
            placeholder="Enter your name"
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="email" className="block font-medium text-gray-700">
            Email:
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        <div>
          <label htmlFor="message" className="block font-medium text-gray-700">
            Message:
          </label>
          <textarea
            id="message"
            placeholder="Type here..."
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-800"
        >
          Submit
        </button>
      </form>

      <h2 className="text-3xl mt-10 mb-5">Styling Form Input Fields</h2>
      <p className="mb-2">With CSS, you can style most of the different input types, like text fields, password fields, checkboxes, radio buttons, and file inputs. You can also style input labels and form buttons.</p>
      <p>Some commonly used CSS properties for styling input fields, are:</p>
      <ul className="list-disc mt-10 ml-5">
        <li className="text-red-500 underline">width</li>
        <li className="text-red-500 underline">padding</li>
        <li className="text-red-500 underline">margin</li>
        <li className="text-red-500 underline"> border</li>
        <li className="text-red-500 underline">border-radius</li>
        <li className="text-red-500 underline">background-color</li>
        <li className="text-red-500 underline">color</li>
        <li className="text-red-500 underline">font-size</li>
      </ul>

    </div>
  );
};

export default CssForms;