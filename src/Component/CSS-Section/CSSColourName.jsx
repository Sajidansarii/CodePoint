import React from "react";

const CssColorNames = () => {
  const colors = [
    { name: "Red", class: "bg-red-500 text-white" },
    { name: "Green", class: "bg-green-500 text-white" },
    { name: "Blue", class: "bg-blue-500 text-white" },
    { name: "Yellow", class: "bg-yellow-400 text-white" },
    { name: "Orange", class: "bg-orange-500 text-white" },
    { name: "Purple", class: "bg-purple-500 text-white" },
    { name: "Pink", class: "bg-pink-400 text-white" },
    { name: "Black", class: "bg-black text-white" },
    { name: "White", class: "bg-white text-black border" }, 
    { name: "Gray", class: "bg-gray-500 text-white" },
  ];

  return (
    <div className="p-6">
      <h2 className="text-3xl font-medium text-blue-500 mb-4"> CSS Color Names</h2>
      <p className="mb-6 text-gray-700">
       In CSS, color names are predefined, like red, blue, green, etc. You can use them directly in CSS to set the background, text, or border color.</p>
       <p className="mb-6">All modern browsers recognize 140 standard color names. You can click on any color name or its hex code to see how it looks as a background color with various text color combinations.</p>

       <p className="mb-6">To explore CSS colors in detail, check out our comprehensive colors tutorial.</p>

      {/* Color boxes */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
        {colors.map((color, index) => (
          <div
            key={index}
            className={`h-20 w-full flex items-center justify-center  font-semibold rounded shadow ${color.class}`}
          >
            {color.name}
          </div>
        ))}
      </div>

      {/* Example Code Block */}
      <div className="mt-8 bg-gray-100 p-4 rounded-lg">
        <h3 className="text-lg font-semibold mb-2">Example:</h3>
        <pre className="bg-black text-green-400 p-3 rounded-lg text-sm overflow-x-auto">
{`div {
  background-color: red;
}

p {
  color: blue;
}`}
        </pre>
      </div>

      {/* Explanation */}
      <p className="mt-4 text-gray-700">
         In the above example, the background of the div will be red, and the text of the p element will appear blue. This is done using CSS's predefined color names.
      </p>
    </div>
  );
};

export default CssColorNames;