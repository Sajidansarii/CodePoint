import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const syllabusData = [
  {
    title: "CSS Basics",
    topics: [
      "Introduction to CSS",
      "CSS Syntax",
      "CSS Selectors (basic, group, universal)",
      "CSS Colors (RGB, HEX, HSL)",
      "CSS Comments",
    ],
  },
  {
    title: "CSS Text & Fonts",
    topics: [
      "Text Color, Alignment, Decoration",
      "Font Family, Font Size, Font Style",
      "Line Height, Letter Spacing",
      "Web Fonts (Google Fonts)",
    ],
  },
  {
    title: "CSS Box Model",
    topics: [
      "Content, Padding, Border, Margin",
      "Box-Sizing Property",
      "Outline vs Border",
    ],
  },
  {
    title: "CSS Flexbox",
    topics: [
      "Flex Container Properties",
      "Flex Items Properties",
      "Alignment & Justify Content",
      "Flex Responsive Layout",
    ],
  },
  {
    title: "CSS Grid",
    topics: [
      "Grid Container",
      "Grid Rows & Columns",
      "Grid Gap",
      "Grid Template Areas",
      "Grid Responsive Layout",
    ],
  },
  {
    title: "CSS Transitions & Animations",
    topics: [
      "CSS Transition Property",
      "CSS 2D Transform (rotate, scale, skew)",
      "CSS 3D Transform",
      "Keyframes Animation",
      "Animation Timing Functions",
    ],
  },
  {
    title: "CSS Responsive Web Design (RWD)",
    topics: [
      "Viewport & Media Queries",
      "Responsive Grid & Flexbox",
      "Responsive Images & Videos",
      "CSS Frameworks (Bootstrap, Tailwind, Foundation)",
      "Responsive Templates",
    ],
  },
  {
    title: "CSS Projects",
    topics: [
      "Build a Personal Website Layout",
      "Create a Navigation Menu",
      "Responsive Portfolio Grid",
      "Animated Landing Page",
    ],
  },
];

export default function CssSyllabus() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleSection = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-medium mb-6 text-blue-500">
        📘 CSS Syllabus
      </h1>

      <div className="space-y-4">
        {syllabusData.map((section, index) => (
          <div
            key={index}
            className="border border-gray-300 rounded-xl shadow-sm bg-white"
          >
            <button
              onClick={() => toggleSection(index)}
              className="w-full flex justify-between items-center px-4 py-3 text-left text-lg font-medium text-gray-800 hover:bg-gray-100 rounded-xl transition"
            >
              <span>{section.title}</span>
              {openIndex === index ? (
                <ChevronUp className="w-5 h-5" />
              ) : (
                <ChevronDown className="w-5 h-5" />
              )}
            </button>

            {openIndex === index && (
              <ul className="px-6 pb-4 space-y-2 text-gray-700 list-disc">
                {section.topics.map((topic, i) => (
                  <li key={i}>{topic}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}