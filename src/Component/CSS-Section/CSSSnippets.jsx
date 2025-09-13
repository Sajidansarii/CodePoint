import React, { useState } from "react";
import { Copy } from "lucide-react"; // icon ke liye

const CssSnippets = () => {
  const snippets = [
    {
      title: "Center a Div Horizontally & Vertically",
      code: `.center-box {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}`,
      explanation: "Ye snippet ek element ko screen ke bilkul center me rakh deta hai."
    },
    {
      title: "Text Ellipsis (…) when Overflow",
      code: `.ellipsis-text {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 200px;
}`,
      explanation: "Jab text zyada lamba ho jata hai to wo ... ke sath truncate ho jata hai."
    },
    {
      title: "Smooth Scroll Behavior",
      code: `html {
  scroll-behavior: smooth;
}`,
      explanation: "Ye snippet links ko click karne par smooth scrolling enable karta hai."
    },
    {
      title: "Gradient Background",
      code: `.gradient-bg {
  background: linear-gradient(to right, #4facfe, #00f2fe);
}`,
      explanation: "Ek stylish gradient background banata hai."
    },
    {
      title: "Image Hover Zoom Effect",
      code: `.image-zoom {
  transition: transform 0.3s ease;
}
.image-zoom:hover {
  transform: scale(1.1);
}`,
      explanation: "Hover karne par image thoda zoom ho jati hai."
    },
  ];

  const [copied, setCopied] = useState(null);

  const handleCopy = (code, index) => {
    navigator.clipboard.writeText(code);
    setCopied(index);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-medium text-blue-500 mb-4">CSS Snippets</h1>
      <p className="mb-8 text-gray-700">
        CSS snippets chhote aur useful code blocks hote hain jo tum apne daily development me use kar sakte ho.
      </p>

      <div className="space-y-6">
        {snippets.map((snippet, index) => (
          <div
            key={index}
            className="p-5 border rounded-2xl shadow-sm bg-white relative"
          >
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              {snippet.title}
            </h2>

            <pre className="bg-gray-900 text-green-400 p-4 rounded-lg text-sm overflow-x-auto">
              <code>{snippet.code}</code>
            </pre>

            <button
              onClick={() => handleCopy(snippet.code, index)}
              className="absolute top-5 right-5 flex items-center gap-1 px-3 py-1 text-xs bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              <Copy size={14} />
              {copied === index ? "Copied!" : "Copy"}
            </button>

            <p className="mt-3 text-gray-600">{snippet.explanation}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CssSnippets;