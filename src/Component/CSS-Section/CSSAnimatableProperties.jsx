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
      "This property defines which @keyframes will be used. Here, an animation is provided that slides the element from left to right.",
  },
  {
    name: "animation-duration",
    code: `.box {
  animation-name: slide;
  animation-duration: 3s;
}`,
    explanation:
      "This property defines how long the animation will take to complete. Here, the slide will complete in 3 seconds.",
  },
  {
    name: "animation-timing-function",
    code: `.box {
  animation: slide 3s ease-in-out;
}`,
    explanation:
      "This property defines the speed curve of the animation. Here, ease-in-out is used, which makes the animation start and end smoothly.",
  },
  {
    name: "animation-delay",
    code: `.box {
  animation: slide 3s ease-in 2s;
}`,
    explanation:
      "This property defines when the animation will start. Here, the animation will start after a 2-second delay.",
  },
  {
    name: "animation-iteration-count",
    code: `.box {
  animation: slide 3s linear infinite;
}`,
    explanation:
      "This property defines how many times the animation will run. If set to infinite, the animation will keep repeating forever.",
  },
  {
    name: "animation-direction",
    code: `.box {
  animation: slide 3s linear alternate infinite;
}`,
    explanation:
      "This property defines the direction in which the animation will run. 'Alternate' means it runs forward once and then backward the next time.",
  },
  {
    name: "animation-fill-mode",
    code: `.box {
  animation: slide 3s forwards;
}`,
    explanation:
      "This property defines the state of the element after the animation is complete. 'Forwards' means the last keyframe will be applied.",
  },
  {
    name: "animation-play-state",
    code: `.box {
  animation: slide 3s infinite;
  animation-play-state: paused;
}`,
    explanation:
      "This property is used to pause or play the animation.",
  },
];

const data  = [
  {Property:'aspect-ratio'},
  {Property:'background'},
  {Property:'background-color'},
  {Property:'background-position'},
  {Property:'background-position-x'},
  {Property:'background-position-y'},
  {Property:'background-size'},
  {Property:'block-size'},
  {Property:'border'},
  {Property:'border-bottom'},
  {Property:'border-bottom-color'},
  {Property:'border-end-end-radius'},
  {Property:'border-end-start-radius'},
  {Property:'border-block'},
  {Property:'border-block-color'},
  {Property:'border-block-end-color'},
  {Property:'border-block-end-width'},
  {Property:'border-block-start-color'},
  {Property:'border-block-start-width'},
  {Property:'border-block-width'},
  {Property:'border-bottom-left-radius'},
  {Property:'border-bottom-right-radius'},
  {Property:'border-inline'},
  {Property:'border-inline-color'},
  {Property:'border-inline-end-color'},
  {Property:'border-inline-end-width'},
  {Property:'border-inline-start-color'},
  {Property:'border-inline-start-width'},
  {Property:'border-inline-width'},
  {Property:'border-start-end-radius'},
  {Property:'border-start-start-radius'},
  {Property:'border-bottom-width'},
  {Property:'border-color'},
  {Property:'border-left'},
  {Property:'border-left-color'},
  {Property:'border-left-width'},
  {Property:'border-right'},
  {Property:'border-right-color'},
  {Property:'border-right-width'},
  {Property:'border-spacing'},
  {Property:'border-top'},
  {Property:'border-top-color'},
  {Property:'border-top-left-radius'},
  {Property:'border-top-right-radius'},
  {Property:'border-top-width'},
  {Property:'bottom'},
  {Property:'box-shadow'},
  {Property:'clip'},
  {Property:'color'},
  {Property:'column-count'},
  {Property:'column-gap'},
  {Property:'column-rule'},
  {Property:'column-rule-color'},
  {Property:'column-rule-width'},
  {Property:'column-width'},
  {Property:'columns'},
  {Property:'filter'},
  {Property:'flex'},
  {Property:'flex-basis'},
  {Property:'flex-grow'},
  {Property:'flex-shrink'},
  {Property:'font'},
  {Property:'font-size'},
  {Property:'font-size-adjust'},
  {Property:'font-stretch'},
  {Property:'font-weight'},
  {Property:'grid'},
  {Property:'grid-area'},
  {Property:'grid-auto-columns'},
  {Property:'grid-auto-flow'},
  {Property:'grid-auto-rows'},
  {Property:'grid-column'},
  {Property:'grid-column-end'},
  {Property:'grid-column-gap'},
  {Property:'grid-column-start'},
  {Property:'grid-gap'},
  {Property:'grid-row'},
  {Property:'grid-row-end'},
  {Property:'grid-row-gap'},
  {Property:'grid-row-start'},
  {Property:'grid-template'},
  {Property:'grid-template-areas'},
  {Property:'grid-template-columns'},
  {Property:'grid-template-rows'},
  {Property:'height'},
  {Property:'inline-size'},
  {Property:'inset'},
  {Property:'inset-block'},
  {Property:'inset-block-end'},
  {Property:'inset-block-start'},
  {Property:'inset-inline'},
  {Property:'inset-inline-end'},
  {Property:'inset-inline-start'},
  {Property:'left'},
  {Property:'letter-spacing'},
  {Property:'line-height'},
  {Property:'margin'},
  {Property:'margin-block'},
  {Property:'margin-block-end'},
  {Property:'margin-block-start'},
  {Property:'margin-bottom'},
  {Property:'margin-inline'},
  {Property:'margin-inline-end'},
  {Property:'margin-inline-start'},
  {Property:'margin-left'},
  {Property:'margin-right'},
  {Property:'margin-top'},
  {Property:'max-height'},
  {Property:'max-width'},
  {Property:'max-block-size'},
  {Property:'max-inline-size'},
  {Property:'min-block-size'},
  {Property:'min-inline-size'},
  {Property:'min-height'},
  {Property:'min-width'},
  {Property:'object-position'},
  {Property:'offset-anchor'},
  {Property:'offset-distance'},
  {Property:'offset-path'},
  {Property:'offset-rotate'},
  {Property:'opacity'},
  {Property:'order'},
  {Property:'outline'},
  {Property:'outline-color'},
  {Property:'outline-offset'},
  {Property:'outline-width'},
  {Property:'padding'},
  {Property:'padding-block'},
  {Property:'padding-block-end'},
  {Property:'padding-block-start'},
  {Property:'padding-bottom'},
  {Property:'padding-inline'},
  {Property:'padding-inline-end'},
  {Property:'padding-inline-start'},
  {Property:'padding-left'},
  {Property:'padding-right'},
  {Property:'padding-top'},
  {Property:'perspective'},
  {Property:'perspective-origin'},
  {Property:'right'},
  {Property:'rotate'},
  {Property:'scale'},
  {Property:'text-decoration-color'},
  {Property:'text-indent'},
  {Property:'text-shadow'},
  {Property:'top'},
  {Property:'transform'},
  {Property:'transform-origin'},
  {Property:'translate'},
  {Property:'vertical-align'},
  {Property:'visibility'},
  {Property:'width'},
  {Property:'word-spacing'},
  {Property:'z-index'},
];

export default function CssAnimationProperties() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-medium text-blue-500 mb-6">
        CSS Animation Properties
      </h1>
      <p className="mb-6 text-gray-700">
        CSS animations are used to add smooth transitions and movement to elements. Below, important animation properties are explained:
      </p>

      <h1 className="text-2xl mb-2">Definition and Usage</h1>
      <p className="mb-3">Certain CSS properties can be animated, allowing them to be used in transitions and animations.</p>
      <p>Animatable properties can transition smoothly from one value to another, such as size, numbers, percentages, and colors.</p>
      <h1 className="text-2xl mt-10">Example</h1>
      <p>Animate a smooth change in background-color, going from red to blue.</p>
      <pre className="bg-gray-900 p-4 rounded-lg mt-4">
        <code>
          <span className="text-red-700">@keyframes mymove</span>{" "}
          <span className="text-gray-400">{"{"}</span><br/>{"   "}
          <span className="text-red-700">from</span>{" "}
          <span className="text-gray-400">{"{"}</span>
          <span className="text-red-400">background-color</span>
          <span className="text-gray-400">:</span>{" "}
          <span className="text-blue-400">red</span>
          <span className="text-gray-400">;</span>
          <span className="text-gray-400">{"}"}</span><br/>
          <span className="txet-gray-400">{"}"}</span>{"  "}
          <span className="text-red-700">to</span>{" "}
          <span className="text-gray-400">{"{"}</span>
          <span className="text-red-400">background-color</span>
          <span className="text-gray-400">:</span>{" "}
          <span className="text-blue-400">blue</span>
          <span className="text-gray-400">;</span>
          <span className="text-gray-400">{"}"}</span><br/>
          <span className="text-gray-400">{"}"}</span>
        </code>
      </pre>
       
       <h1 className="text-2xl mt-10">Animatable Properties</h1>
       <p className="mt-3 mb-6">You can animate these properties using CSS:</p>

      <table className="min-w-full border border-gray-300 text-gray-700 text-sm text-left rounded-md">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2 border-b border-gray-300 text-gray-700">Property</th>
          </tr>
        </thead>
        <tbody>
        {data.map((row,index)=>(
          <tr className="cursor-text hover:bg-gray-100">
            <td className="px-4 py-2 border-b border-gray-200">{row.Property}</td>
          </tr>
        ))}
        </tbody>
      </table>








      <div className="grid md:grid-cols-2 gap-6 mt-10">
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
            <p>{prop.explanation}</p>
          </div>
        ))}
      </div>

      {/* Example Demo */}
      <h2 className="text-2xl font-bold text-gray-800 mt-10 mb-10">
        Live Demo
      </h2>
      <div className="flex gap-6">
        <div className="w-16 h-16 bg-blue-500 rounded-lg animate-bounce"></div>
        <div className="w-16 h-16 bg-red-500 rounded-lg animate-ping"></div>
        <div className="w-16 h-16 bg-green-500 rounded-lg animate-pulse"></div>
        <div className="w-16 h-16 bg-yellow-500 rounded-lg animate-spin"></div>
      </div>
      <p className="text-sm text-gray-600 mt-2">
       These are Tailwind's built-in animation utilities: bounce, ping, pulse, spin.
      </p>
    </div>
  );
}