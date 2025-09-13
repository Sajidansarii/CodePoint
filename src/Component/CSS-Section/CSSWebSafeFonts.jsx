import React from "react";

const CssWebSafeFonts = () => {
  const fonts = [
    { name: "Arial", class: "font-sans", style: { fontFamily: "Arial, sans-serif" } },
    { name: "Verdana", class: "font-sans", style: { fontFamily: "Verdana, sans-serif" } },
    { name: "Times New Roman", class: "font-serif", style: { fontFamily: "'Times New Roman', serif" } },
    { name: "Georgia", class: "font-serif", style: { fontFamily: "Georgia, serif" } },
    { name: "Courier New", class: "font-mono", style: { fontFamily: "'Courier New', monospace" } },
    { name: "Tahoma", class: "font-sans", style: { fontFamily: "Tahoma, sans-serif" } },
    { name: "Trebuchet MS", class: "font-sans", style: { fontFamily: "'Trebuchet MS', sans-serif" } },
  ];

  return (
    <div className="p-6">
      <h2 className="text-3xl font-medium mb-4">CSS Web Safe Fonts</h2>
      <p className="mb-6 text-gray-700">
        <b>Web Safe Fonts</b> wo fonts hote hain jo har operating system aur browser me by default available hote hain. 
        Isse ensure hota hai ki website ka text har user ko same dikhe.  
        Common web safe fonts: <b>Arial, Verdana, Times New Roman, Georgia, Courier New</b> etc.
      </p>

      {/* Font Preview Boxes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {fonts.map((font, index) => (
          <div
            key={index}
            style={font.style}
            className="p-4 border rounded-lg shadow-sm bg-white"
          >
            <p className="text-lg">This is {font.name} font</p>
            <p className="text-sm text-gray-500">Font-family: {font.style.fontFamily}</p>
          </div>
        ))}
      </div>

      {/* Example Code */}
      <div className="mt-8 bg-gray-100 p-4 rounded-lg">
        <h3 className="text-lg font-semibold mb-2">Example:</h3>
        <pre className="bg-black text-green-400 p-3 rounded-lg text-sm overflow-x-auto">
{`p {
  font-family: Arial, sans-serif;
}

h1 {
  font-family: 'Times New Roman', serif;
}`}
        </pre>
      </div>

      {/* Explanation */}
      <p className="mt-4 text-gray-700">
        👉 Upar wale example me <code>&lt;p&gt;</code> tag ke liye <b>Arial</b> font 
        use kiya gaya hai aur fallback ke liye <b>sans-serif</b> diya gaya hai.  
        Agar primary font available na ho to browser fallback font use karega.
      </p>
    </div>
  );
};

export default CssWebSafeFonts;