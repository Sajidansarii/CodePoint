import React from "react";

const CssBoxSizing = () => {
  return (
    <div className="p-8 bg-gray-50 min-h-screen space-y-10">
      {/* Title */}
      <h1 className="text-3xl font-bold text-center text-gray-800">
        CSS Box-Sizing
      </h1>

      {/* Intro */}
      <p className="text-gray-700 text-center max-w-3xl mx-auto">
        <strong>box-sizing</strong> property ka use element ki width aur height 
        calculate karne ke tareeke ko control karne ke liye hota hai. 
        Iske do most common values hain:{" "}
        <code>content-box</code> (default) aur <code>border-box</code>.
      </p>

      {/* Example Section */}
      <div className="bg-white p-6 rounded shadow space-y-6">
        <h2 className="text-xl font-semibold">🔹 Box-Sizing Example</h2>
        <p className="text-gray-700">
          Niche ke example me dono boxes ki width 300px set ki gayi hai, 
          lekin result alag hoga.
        </p>

        {/* CSS Code */}
        <pre className="bg-gray-900 text-green-300 p-4 rounded text-sm overflow-x-auto text-left">
{`/* CSS Box-Sizing Example */
.box {
  width: 300px;
  padding: 20px;
  border: 5px solid #4CAF50;
  margin: 10px 0;
}

/* Default - Content Box */
.content-box {
  box-sizing: content-box; /* default */
}

/* Border Box */
.border-box {
  box-sizing: border-box;
}
`}
        </pre>

        {/* Live Demo */}
        <div className="flex flex-col md:flex-row gap-6 justify-center items-start">
          {/* Content Box */}
          <div className="w-[300px] p-5 border-[5px] border-green-600 box-content bg-green-100">
            <p className="text-center text-gray-800">content-box</p>
          </div>

          {/* Border Box */}
          <div className="w-[300px] p-5 border-[5px] border-blue-600 box-border bg-blue-100">
            <p className="text-center text-gray-800">border-box</p>
          </div>
        </div>
      </div>

      {/* Explanation */}
      <div className="bg-white p-6 rounded shadow space-y-4">
        <h2 className="text-xl font-semibold">📝 Explanation</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>
            <strong>content-box (default):</strong> 
            width <code>300px</code> sirf <em>content</em> ke liye hota hai. 
            Border aur padding iske upar add hote hain. 
            Total width = content + padding + border.
          </li>
          <li>
            <strong>border-box:</strong> 
            width <code>300px</code> me content, padding aur border 
            sab include hote hain. Iska matlab element ka total width 
            hamesha 300px hi rahega.
          </li>
          <li>
            <strong>Best Practice:</strong> 
            Modern web development me aksar <code>box-sizing: border-box;</code> 
            use kiya jata hai taaki layouts predictable rahen.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CssBoxSizing;