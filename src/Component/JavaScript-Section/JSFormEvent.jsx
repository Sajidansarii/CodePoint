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

  const data = [
    {Event:'onsubmit', Description:'Triggered when a form is submitted. It"s often used for form validation before data is sent to the server.'},
    {Event:'onreset', Description:'Triggered when the form is reset, allowing you to perform actions when the user resets the form.'},
    {Event:'onchange', Description:'Triggered when the value of a form element (input, select, textarea) changes. Commonly used for user input validation or dynamic updates.'},
    {Event:'oninput', Description:'Triggered immediately when the value of an input element changes, allowing for real-time handling of user input.'},
    {Event:'onfocus', Description:'Triggered when an element receives focus, such as when a user clicks or tabs into an input field. Useful for providing feedback or enhancing the user experience.'},
    {Event:'onblur', Description:'Triggered when an element loses focus, such as when a user clicks outside an input field or tabs away. Useful for validation or updates triggered by loss of focus.'},
  ]

  return (
    <div className="max-w-4xl p-6 space-y-6">
      <h1 className="text-3xl font-medium text-blue-500">JavaScript Form Events</h1>

      <p className="text-gray-700 mb-4">
        <span className="text-red-400">Form events</span> let you handle user input and form submissions. Common events include <code>onChange</code> for input fields and <code>onSubmit</code> for forms.
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

      <h1 className="text-2xl text-gray-800 font-semibold mt-10">Form Events</h1>
      <p><span className="text-red-400">Form events</span> happen whenever a user types, clicks, or changes something in a form. They help you validate input, submit forms, or reset them. In the DOM, these events bubble from the element up to its parent.</p>

      <h1 className="text-2xl text-gray-800 font-semibold mt-10">List of Common Form Events</h1>
      <table className="min-w-full border border-gray-300 text-gray-700 text-sm text-left mt-10">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2 border-b border-gray-300 text-gray-700 font-bold">Form Event</th>
            <th className="px-4 py-2 border-b border-gray-300 text-gray-700 font-bold">Description</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row,index)=>(
            <tr className="cursor-text- hover:bg-gray-100">
              <td className="px-4 py-2 border-b border-2">{row.Event}</td>
              <td className="px-4 py-2 border-b border-2">{row.Description}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h1 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">The onchange Event</h1>
      <p>This example shows how the onchange event works. When the user selects a different option from the {'<select>'} dropdown, the handleChange function updates an {'<h2>'} element with the chosen country.</p>
     <h2 className="text-2xl text-gray-800 font-semibold mt-5">Example</h2>
     <pre className="bg-gray-200 overflow-x-auto p-4 rounded-lg mt-5">
      <code>
        {`   function handleChange() {
         var selectedCountry = document.getElementById('country').value;
         document.getElementById("txt").textContent=
		 "Selected country: "+selectedCountry;
     }`}
      </code>
     </pre>

     <h1 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">The onsubmit Event</h1>
     <p>The onsubmit event runs when the form is submitted. The form requires both username and password. If validateForm confirms they’re filled, a success message appears.</p>
     <h2 className="text-2xl text-gray-800 font-semibold mt-5">Example</h2>
     <pre className="overflow-x-auto bg-gray-200 p-4 rounded-lg mt-5">
      <code>
        {`  
  function validateForm() {
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;
  // Perform validation
  if (username === "" || password === "") {
     alert("Please fill in all fields");
     return false; // Prevent form submission
  }
  alert("Form submitted! Username is:"+username+",Password is:"+password);      
 return true; // Allow form submission
      }`}
      </code>
     </pre>



     <h1 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">The onreset event</h1>
    <p>This example shows how the onreset event works. When the user clicks the Reset button, the resetForm function clears the form and displays a confirmation alert.</p>
     <h2 className="text-2xl text-gray-800 font-semibold mt-5">Example</h2>
     <pre className="overflow-x-auto bg-gray-200 p-4 rounded-lg mt-5">
      <code>
        {`function resetForm() {
         // Perform actions when the form is reset
         alert("Form has been reset!");
      }`}
      </code>
     </pre>


     <h1 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">The oninput Event</h1>
     <p>The oninput event fires while the user types. Each keystroke triggers handleInput, which logs the current search text.</p>
     <h2 className="text-2xl text-gray-800 font-semibold mt-5">Example</h2>
     <pre className="overflow-x-auto bg-gray-200 p-4 rounded-lg mt-5">
      <code>
        {` var messageElement = document.getElementById('message');
      function handleInput() {
         // Perform actions as the user types
         var searchInput = document.getElementById('search').value;
         messageElement.innerHTML+="Search input: " + searchInput+'<br>';
      } `}
      </code>
     </pre>

     <h1 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">onfocus and onblur Events</h1>
     <p>Focusing on the input triggers handleFocus and logs a message. Leaving the input triggers handleBlur, which logs another message.</p>
     <h2 className="text-2xl text-gray-800 font-semibold mt-5">Example</h2>
     <pre className="overflow-x-auto bg-gray-200 p-4 rounded-lg mt-5">
      <code>
        {`const output = document.getElementById('output');
      function handleFocus() {
         // Perform actions when the input gets focus
         output.innerHTML += "Input has focus" + "<br>";
      }
      function handleBlur() {
         // Perform actions when the input loses focus
         output.innerHTML += "Input lost focus" + "<br>";
      }`}
      </code>
     </pre>


    </div>
  );
};

export default JSFormEvents;