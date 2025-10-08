import React from "react";

export default function CssBootcamp() {
  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-medium text-center text-blue-600 mb-6">
         CSS Bootcamp
      </h1>
      <p className="text-center text-gray-700 mb-8">
        A 4-Week Intensive Bootcamp to Master CSS from Basics to Advanced 
      </p>

      {/* Week 1 */}
      <div className="bg-white shadow-md rounded-2xl p-6 mb-6 border-l-4 border-blue-500">
        <h2 className="text-xl font-semibold mb-2"> Week 1: CSS Fundamentals</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-1">
          <li>Introduction to CSS</li>
          <li>CSS Syntax & Selectors</li>
          <li>Colors, Backgrounds, Borders</li>
          <li>CSS Units (px, %, em, rem, vh, vw)</li>
          <li>CSS Box Model</li>
          <li>Display & Visibility</li>
        </ul>
        <p className="mt-3 text-sm text-gray-600">
           <b>Mini Task:</b> Make a simple colored card with border, padding, and margin.
        </p>
      </div>

      {/* Week 2 */}
      <div className="bg-white shadow-md rounded-2xl p-6 mb-6 border-l-4 border-green-500">
        <h2 className="text-xl font-semibold mb-2"> Week 2: Typography & Layout</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-1">
          <li>Fonts & Google Fonts</li>
          <li>Text Styling (color, alignment, transform)</li>
          <li>CSS Positioning (static, relative, absolute, fixed, sticky)</li>
          <li>Flexbox Basics (container + items)</li>
          <li>CSS Grid Basics</li>
        </ul>
        <p className="mt-3 text-sm text-gray-600">
           <b>Mini Task:</b> Create a responsive navbar using Flexbox.
        </p>
      </div>

      {/* Week 3 */}
      <div className="bg-white shadow-md rounded-2xl p-6 mb-6 border-l-4 border-yellow-500">
        <h2 className="text-xl font-semibold mb-2">Week 3: Styling & Effects</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-1">
          <li>CSS Pseudo-classes & Pseudo-elements</li>
          <li>Hover & Active States</li>
          <li>CSS Transforms (2D, 3D)</li>
          <li>CSS Transitions & Animations</li>
          <li>CSS Shadows & Filters</li>
        </ul>
        <p className="mt-3 text-sm text-gray-600">
           <b>Mini Task:</b> Create an animated button with hover effect.
        </p>
      </div>

      {/* Week 4 */}
      <div className="bg-white shadow-md rounded-2xl p-6 mb-6 border-l-4 border-red-500">
        <h2 className="text-xl font-semibold mb-2">Week 4: Advanced CSS & Responsive Design</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-1">
          <li>Media Queries</li>
          <li>Responsive Images & Videos</li>
          <li>CSS Variables (custom properties)</li>
          <li>CSS Functions (calc, var, min, max)</li>
          <li>Advanced CSS Grid</li>
          <li>CSS Frameworks (Tailwind, Bootstrap basics)</li>
        </ul>
        <p className="mt-3 text-sm text-gray-600">
           <b>Mini Project:</b> Build a responsive portfolio page.
        </p>
      </div>

      {/* Final Project */}
      <div className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white shadow-md rounded-2xl p-6">
        <h2 className="text-xl font-semibold mb-2"> Final Project (Capstone)</h2>
        <p className="mb-2"> Create a Landing Page using only CSS:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Navbar</li>
          <li>Hero Section</li>
          <li>Services / Cards</li>
          <li>Responsive Grid Layout</li>
          <li>Animation Effects</li>
        </ul>
      </div>
    </div>
  );
}