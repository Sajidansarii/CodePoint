import React from "react";

const ImportantExample = () => {
  return (
    <div className="p-6 space-y-4 font-sans">
      <h1 className="text-2xl font-bold">CSS !important Example</h1>
      
      <p className="text-blue-600">
        This text is styled with a normal class (blue).
      </p>
      
      <p className="!text-red-600">
        This text uses Tailwind's <code>!important</code> utility (red).
      </p>
      
      <p style={{ color: "green !important" }}>
        This inline style uses <code>!important</code> (green).
      </p>
    </div>
  );
};

export default ImportantExample;