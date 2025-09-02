import React from "react";

const animationProperties = [
  {
    name: "animation-name",
    code: `@keyframes slide {
  from { transform: translateX(0); }
  to { transform: translateX(100px); }
}

.box {
  animation-name: slide;
}`,
    explanation:
      "Ye property define karti hai konsa @keyframes use hoga. Yaha element ko left se right slide karne wala animation diya gaya hai.",
  },
  {
    name: "animation-duration",
    code: `.box {
  animation-name: slide;
  animation-duration: 3s;
}`,
    explanation:
      "Ye property define karti hai animation kitne time me complete hoga. Yaha 3 second me slide complete hoga.",
  },
  {
    name: "animation-timing-function",
    code: `.box {
  animation: slide 3s ease-in-out;
}`,
    explanation:
      "Ye property animation ke speed curve ko define karti hai. Yaha ease-in-out use kiya gaya hai jo smoothly start aur end hoga.",
  },
  {
    name: "animation-delay",
    code: `.box {
  animation: slide 3s ease-in 2s;
}`,
    explanation:
      "Ye property define karti hai animation kab start hoga. Yaha 2s delay ke baad animation start hoga.",
  },
  {
    name: "animation-iteration-count",
    code: `.box {
  animation: slide 3s linear infinite;
}`,
    explanation:
      "Ye property define karti hai animation kitni baar chalega. Infinite dene se animation hamesha repeat hota rahega.",
  },
  {
    name: "animation-direction",
    code: `.box {
  animation: slide 3s linear alternate infinite;
}`,
    explanation:
      "Ye property define karti hai animation kis direction me chale. 'alternate' ka matlab ek baar forward aur ek baar backward.",
  },
  {
    name: "animation-fill-mode",
    code: `.box {
  animation: slide 3s forwards;
}`,
    explanation:
      "Ye property define karti hai ki animation complete hone ke baad element kis state me rahega. 'forwards' ka matlab last keyframe apply hoga.",
  },
  {
    name: "animation-play-state",
    code: `.box {
  animation: slide 3s infinite;
  animation-play-state: paused;
}`,
    explanation:
      "Ye property animation ko pause ya play karne ke liye use hoti hai.",
  },
];

export default function CssAnimationProperties() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-purple-600 mb-6">
        🎬 CSS Animation Properties
      </h1>
      <p className="mb-6 text-gray-700">
        CSS animations elements me smooth transitions aur movement add karne ke
        liye use hote hain. Niche important animation properties explain ki
        gayi hain:
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        {animationProperties.map((prop, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-xl p-4 border border-gray-200 hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              {prop.name}
            </h2>
            <pre className="bg-gray-900 text-green-400 text-sm p-3 rounded-md mb-3 overflow-x-auto">
              <code>{prop.code}</code>
            </pre>
            <p className="text-gray-600">{prop.explanation}</p>
          </div>
        ))}
      </div>

      {/* Example Demo */}
      <h2 className="text-2xl font-bold text-gray-800 mt-10 mb-4">
        🎥 Live Demo
      </h2>
      <div className="flex gap-6">
        <div className="w-16 h-16 bg-blue-500 rounded-lg animate-bounce"></div>
        <div className="w-16 h-16 bg-red-500 rounded-lg animate-ping"></div>
        <div className="w-16 h-16 bg-green-500 rounded-lg animate-pulse"></div>
        <div className="w-16 h-16 bg-yellow-500 rounded-lg animate-spin"></div>
      </div>
      <p className="text-sm text-gray-600 mt-2">
        Ye Tailwind ke built-in animation utilities hain: bounce, ping, pulse,
        spin.
      </p>
    </div>
  );
}