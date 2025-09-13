import React, { useState } from "react";

const CSSEditor = () => {
  const [cssCode, setCssCode] = useState(`.box {
  width: 200px;
  height: 200px;
  background-color: lightblue;
  border: 2px solid black;
}`);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-medium text-blue-500 mb-4">CSS Editor</h1>
      <p className="mb-6 text-gray-700">
        Write your CSS code in the editor below. The result will be shown live in
        the output box.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* CSS Editor */}
        <div>
          <h2 className="text-xl font-semibold mb-2">Write CSS:</h2>
          <textarea
            value={cssCode}
            onChange={(e) => setCssCode(e.target.value)}
            className="w-full h-64 p-4 font-mono text-sm border rounded-lg bg-gray-900 text-green-400"
          />
        </div>

        {/* Output */}
        <div>
          <h2 className="text-xl font-semibold mb-2">Output:</h2>
          <div className="border p-4 rounded-lg min-h-[300px] flex items-center justify-center">
            <div className="box">Hello CSS!</div>
          </div>
        </div>
      </div>

      {/* CSS apply karne ke liye */}
      <style>{cssCode}</style>
    </div>
  );
};

export default CSSEditor;