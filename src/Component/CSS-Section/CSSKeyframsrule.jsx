import React from "react";

export default function KeyframesDemo() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-50 to-indigo-100 p-4 space-y-8">
      <h1 className="text-3xl sm:text-3xl font-medium text-blue-500">
        CSS @keyframes with Tailwind
      </h1>

      {/* Slide In Card */}
      <div className="w-full max-w-sm p-6 bg-white shadow-lg rounded-xl animate-slideIn">
        <h2 className="text-lg font-semibold text-gray-800 mb-2">
          Slide In Animation
        </h2>
        <p className="text-gray-600 text-sm sm:text-base">
          This card slides in from the left using a custom keyframe animation.
        </p>
      </div>

      {/* Fade In Out Button */}
      <button className="px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg shadow-md animate-fadeInOut">
        Blinking Button
      </button>
    </div>
  );
}