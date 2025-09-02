import React from "react";

const PerformanceExample = () => {
  return (
    <div className="p-6 font-sans">
      <h1 className="text-2xl font-bold mb-4">CSS Performance Example</h1>

      {/* Using Tailwind utility classes (no inline CSS) */}
      <div className="bg-blue-100 p-4 rounded shadow-md">
        <h2 className="text-xl font-semibold text-blue-900">
          Optimized Styling
        </h2>
        <p className="text-gray-700">
          This component uses Tailwind utility classes instead of inline styles.
        </p>
      </div>
    </div>
  );
};

export default PerformanceExample;