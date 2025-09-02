import React from "react";

export default function AnimationShowcase() {
  return (
    <div className="p-10 space-y-10">
      <h1 className="text-3xl font-bold text-center">✨ CSS Animations with Tailwind</h1>

      {/* Built-in Tailwind Animations */}
      <section>
        <h2 className="text-xl font-semibold mb-4">🔹 Built-in Animations</h2>
        <div className="flex space-x-8">
          <div className="w-16 h-16 bg-blue-500 rounded-full animate-bounce flex items-center justify-center text-white text-sm">
            Bounce
          </div>
          <div className="w-16 h-16 bg-green-500 rounded-full animate-spin flex items-center justify-center text-white text-sm">
            Spin
          </div>
          <div className="w-16 h-16 bg-red-500 rounded-full animate-ping"></div>
          <div className="w-16 h-16 bg-yellow-500 rounded-full animate-pulse"></div>
        </div>
      </section>

      {/* Custom Animations */}
      <section>
        <h2 className="text-xl font-semibold mb-4">🔹 Custom Animations</h2>
        <p className="text-gray-600 mb-4">
          Yeh animations Tailwind ke <code>tailwind.config.js</code> me extend karke banaye gaye hain.
        </p>
        <div className="flex space-x-8">
          <div className="w-20 h-20 bg-indigo-500 rounded-lg flex items-center justify-center text-white animate-fadeIn">
            Fade In
          </div>
          <div className="w-20 h-20 bg-pink-500 rounded-lg flex items-center justify-center text-white animate-bounceX">
            BounceX
          </div>
        </div>
      </section>
    </div>
  );
}