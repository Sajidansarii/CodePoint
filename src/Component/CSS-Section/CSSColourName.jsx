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
        CSS mein <code>color names</code> predefined hote hain jaise <b>red</b>, <b>blue</b>, <b>green</b> etc. 
        Inhe directly CSS mein use karke background, text ya border color set kar sakte ho.
      </p>

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
        👉 Upar wale example mein <code>div</code> ka background <b>red</b> hoga aur 
        <code>p</code> element ka text <b>blue</b> dikhega. Yeh sab CSS ke predefined 
        <b>color names</b> ke through kiya gaya hai.
      </p>
    </div>
  );
};

export default CssColorNames;