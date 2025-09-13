import React from "react";

const CssAuralProperties = () => {
  const auralProps = [
    {
      property: "speak",
      value: "none | normal | spell-out",
      description: "Control karta hai text ko read kare ya skip kare.",
      example: "p { speak: normal; }"
    },
    {
      property: "speak-as",
      value: "normal | spell-out | digits | literal-punctuation",
      description: "Text ko kis tarike se pronounce karna hai decide karta hai.",
      example: "abbr { speak-as: spell-out; }"
    },
    {
      property: "voice-family",
      value: "male | female | child",
      description: "Voice type select karta hai (like screen reader voice).",
      example: "body { voice-family: female; }"
    },
    {
      property: "pitch",
      value: "x-low | low | medium | high | x-high",
      description: "Voice ki pitch (awaaz ki unchai) set karta hai.",
      example: "h1 { pitch: x-high; }"
    },
    {
      property: "volume",
      value: "silent | x-soft | soft | medium | loud | x-loud",
      description: "Speech ka volume control karta hai.",
      example: "p { volume: loud; }"
    }
  ];

  return (
    <div className="p-6">
      <h2 className="text-3xl font-medium mb-4 text-blue-500">CSS Aural Properties</h2>
      <p className="mb-6 text-gray-700">
        <b>CSS Aural Properties</b> un users ke liye design ki gayi hain jo 
        <b> screen readers</b> use karte hain. Ye properties text ko 
        <i> kaise sunaaya jaye</i> usko control karti hain — jaise voice pitch, 
        volume, pronunciation, etc.
      </p>

      {/* Property List */}
      <div className="space-y-4">
        {auralProps.map((prop, index) => (
          <div key={index} className="p-4 border rounded-lg bg-white shadow-sm">
            <h3 className="text-lg font-semibold">{prop.property}</h3>
            <p className="text-sm text-gray-600">
              <b>Values:</b> {prop.value}
            </p>
            <p className="text-gray-700 mt-1">{prop.description}</p>
            <pre className="bg-black text-green-400 p-2 rounded-lg mt-2 text-sm overflow-x-auto">
              {prop.example}
            </pre>
          </div>
        ))}
      </div>

      {/* Example Section */}
      <div className="mt-8 bg-gray-100 p-4 rounded-lg">
        <h3 className="text-lg font-semibold mb-2">Example Usage:</h3>
        <pre className="bg-black text-green-400 p-3 rounded-lg text-sm overflow-x-auto">
{`@media speech {
  p {
    speak: normal;
    volume: loud;
    pitch: medium;
    voice-family: female;
  }
}`}
        </pre>
      </div>

      {/* Explanation */}
      <p className="mt-4 text-gray-700">
        👉 Is example me agar device <b>speech mode</b> support karta hai (like screen reader), 
        to paragraph text ko <b>normal</b> way me read kiya jayega, <b>loud volume</b> aur 
        <b>medium pitch</b> ke sath, aur <b>female voice</b> ka use hoga.  
        Ye accessibility ke liye kaafi useful hai.
      </p>
    </div>
  );
};

export default CssAuralProperties;