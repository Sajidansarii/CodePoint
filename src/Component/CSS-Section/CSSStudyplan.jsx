import React, { useState } from "react";

const CssStudyPlan = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const topics = [
    {
      title: "1. Basics of CSS (Week 1–2)",
      content: [
        "What is CSS?",
        "CSS Syntax",
        "Types of CSS (Inline, Internal, External)",
        "CSS Colors (HEX, RGB, HSL)",
        "CSS Selectors (basic, universal, grouping)",
        "CSS Comments",
      ],
    },
    {
      title: "2. Text and Fonts (Week 2–3)",
      content: [
        "Text color, alignment, decoration",
        "Font family, font size, font style",
        "Line height, letter spacing",
        "Web fonts (Google Fonts, @font-face)",
      ],
    },
    {
      title: "3. CSS Box Model (Week 3)",
      content: [
        "Content, Padding, Border, Margin",
        "Box-sizing property",
        "Outline vs Border",
      ],
    },
    {
      title: "4. Backgrounds and Borders (Week 3–4)",
      content: [
        "Background color, image, repeat, position, size",
        "Border styles, radius (rounded corners)",
        "Border-image",
      ],
    },
    {
      title: "5. CSS Layouts (Week 4–5)",
      content: [
        "Display (inline, block, inline-block, none)",
        "Position (static, relative, absolute, fixed, sticky)",
        "Float & Clear",
        "Overflow",
      ],
    },
    {
      title: "6. Flexbox (Week 5–6)",
      content: [
        "Flex container properties",
        "Flex items properties",
        "Justify-content, align-items, align-self",
        "Responsive layouts with flexbox",
      ],
    },
    {
      title: "7. Grid Layout (Week 6–7)",
      content: [
        "Grid container",
        "Rows & columns",
        "Grid gaps",
        "Grid template areas",
        "Responsive grid",
      ],
    },
    {
      title: "8. CSS Transforms & Animations (Week 7–8)",
      content: [
        "2D Transforms (rotate, scale, skew, translate)",
        "3D Transforms",
        "CSS Transitions",
        "CSS Animations with @keyframes",
      ],
    },
    {
      title: "9. Responsive Web Design (Week 8–9)",
      content: [
        "Viewport meta tag",
        "Media queries",
        "Responsive images & videos",
        "CSS frameworks (Bootstrap, Tailwind)",
      ],
    },
    {
      title: "10. Advanced CSS (Week 10)",
      content: [
        "CSS Variables",
        "CSS Functions (calc, var, min, max)",
        "CSS Filters (blur, grayscale, brightness)",
        "CSS Shapes & Masking",
        "CSS Clip-path",
      ],
    },
    {
      title: "11. Projects & Practice (Week 11–12)",
      content: [
        "Build a personal portfolio website",
        "Create a responsive navigation menu",
        "Make a CSS card design with hover effects",
        "Landing page with animations",
        "Mini project: Responsive Grid Gallery",
      ],
    },
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-medium text-blue-500 mb-6">
        📘 CSS Study Plan
      </h1>
      <div className="space-y-4">
        {topics.map((topic, index) => (
          <div
            key={index}
            className="border rounded-lg shadow-sm overflow-hidden"
          >
            <button
              onClick={() => toggleAccordion(index)}
              className="w-full flex justify-between items-center p-4 bg-blue-50 hover:bg-blue-100 transition"
            >
              <span className="font-semibold text-lg">{topic.title}</span>
              <span className="text-xl">
                {openIndex === index ? "−" : "+"}
              </span>
            </button>
            {openIndex === index && (
              <div className="p-4 bg-white border-t">
                <ul className="list-disc pl-6 space-y-1 text-gray-700">
                  {topic.content.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CssStudyPlan;