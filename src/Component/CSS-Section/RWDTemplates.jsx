import React from "react";

const CssRWDTemplates = () => {
  return (
    <div className="p-6 max-w-4xl space-y-6 mt-10">
      {/* Title */}
      <h1 className="text-3xl font-medium text-blue-500">
        Responsive Web Design - Templates
      </h1>

      {/* Intro */}
      <p>
       Responsive Web Design (RWD) templates are pre-built website layouts that automatically adjust to any screen size. These templates provide you with a ready-made design, so you don’t need to build the layout from scratch—just customize the content and styling.
      </p>

      {/* Why Templates */}
      <h2 className="text-2xl font-semibold">Why Use RWD Templates?</h2>
      <ul className="list-disc list-inside space-y-2 text-gray-700">
        <li>Time-saving: Pre-built layouts are already responsive.</li>
        <li>Cross-device compatibility is ensured.</li>
        <li>Easy customization options are available.</li>
        <li>Beginner-friendly development.</li>
      </ul>

      {/* Example 1: Basic Responsive Template */}
      <h2 className="text-2xl font-semibold">Basic Responsive Template</h2>
    <pre className="bg-gray-200 p-4 rounded-lg mt-5 overflow-x-auto max-w-full whitespace-pre-wrap">
  <code>
    <span className="text-blue-600">&lt;!DOCTYPE html&gt;</span>
    <br />

    <span className="text-blue-600">&lt;html</span>{" "}
    <span className="text-red-500">lang</span>=
    <span className="text-green-700">"en"</span>
    <span className="text-blue-600">&gt;</span>
    <br />

    &nbsp;&nbsp;<span className="text-blue-600">&lt;head&gt;</span>
    <br />

    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-600">&lt;meta</span>{" "}
    <span className="text-red-500">charset</span>=
    <span className="text-green-700">"UTF-8"</span>
    <span className="text-blue-600"> /&gt;</span>
    <br />

    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-600">&lt;title&gt;</span>
    Responsive Template
    <span className="text-blue-600">&lt;/title&gt;</span>
    <br />

    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-600">&lt;meta</span>{" "}
    <span className="text-red-500">name</span>=
    <span className="text-green-700">"viewport"</span>{" "}
    <span className="text-red-500">content</span>=
    <span className="text-green-700">"width=device-width, initial-scale=1.0"</span>
    <span className="text-blue-600"> /&gt;</span>
    <br />

    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-600">&lt;style&gt;</span>
    <br />

    &nbsp;&nbsp;<span className="text-red-500">body</span> {"{"}
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-500">font-family</span>:{" "}
    <span className="text-green-700">Arial, sans-serif</span>;
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-500">margin</span>:{" "}
    <span className="text-green-700">0</span>;
    <br />
    &nbsp;&nbsp;{"}"}

    <br /><br />

    &nbsp;&nbsp;<span className="text-red-500">header, footer</span> {"{"}
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-500">background</span>:{" "}
    <span className="text-green-700">#1e40af</span>;
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-500">color</span>:{" "}
    <span className="text-green-700">white</span>;
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-500">text-align</span>:{" "}
    <span className="text-green-700">center</span>;
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-500">padding</span>:{" "}
    <span className="text-green-700">15px</span>;
    <br />
    &nbsp;&nbsp;{"}"}

    <br /><br />

    &nbsp;&nbsp;<span className="text-red-500">.container</span> {"{"}
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-500">display</span>:{" "}
    <span className="text-green-700">flex</span>;
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-500">flex-wrap</span>:{" "}
    <span className="text-green-700">wrap</span>;
    <br />
    &nbsp;&nbsp;{"}"}

    <br /><br />

    &nbsp;&nbsp;<span className="text-red-500">.sidebar, .content</span> {"{"}
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-500">padding</span>:{" "}
    <span className="text-green-700">20px</span>;
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-500">flex</span>:{" "}
    <span className="text-green-700">1</span>;
    <br />
    &nbsp;&nbsp;{"}"}

    <br /><br />

    &nbsp;&nbsp;<span className="text-red-500">.sidebar</span> {"{"}
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-500">background</span>:{" "}
    <span className="text-green-700">#f3f4f6</span>;
    <br />
    &nbsp;&nbsp;{"}"}

    <br /><br />

    &nbsp;&nbsp;<span className="text-red-500">.content</span> {"{"}
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-500">background</span>:{" "}
    <span className="text-green-700">#e0f2fe</span>;
    <br />
    &nbsp;&nbsp;{"}"}

    <br /><br />

    &nbsp;&nbsp;<span className="text-red-500">@media (max-width: 768px)</span>{" {"}
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-500">.container</span> {"{"}
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-500">flex-direction</span>:{" "}
    <span className="text-green-700">column</span>;
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;{"}"}
    <br />
    &nbsp;&nbsp;{"}"}

    <br /><br />

    &nbsp;&nbsp;<span className="text-blue-600">&lt;/style&gt;</span>
    <br />

    &nbsp;&nbsp;<span className="text-blue-600">&lt;/head&gt;</span>
    <br />

    &nbsp;&nbsp;<span className="text-blue-600">&lt;body&gt;</span>
    <br />

    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-600">&lt;header&gt;</span>
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;h1&gt;My Responsive Template&lt;/h1&gt;
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-600">&lt;/header&gt;</span>

    <br /><br />

    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-600">&lt;div</span>{" "}
    <span className="text-red-500">class</span>=
    <span className="text-green-700">"container"</span>
    <span className="text-blue-600">&gt;</span>
    <br />

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-600">&lt;div</span>{" "}
    <span className="text-red-500">class</span>=
    <span className="text-green-700">"sidebar"</span>
    <span className="text-blue-600">&gt;</span>Sidebar<span className="text-blue-600">&lt;/div&gt;</span>
    <br />

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-600">&lt;div</span>{" "}
    <span className="text-red-500">class</span>=
    <span className="text-green-700">"content"</span>
    <span className="text-blue-600">&gt;</span>Main Content<span className="text-blue-600">&lt;/div&gt;</span>
    <br />

    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-600">&lt;/div&gt;</span>

    <br /><br />

    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-600">&lt;footer&gt;</span>
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;p&gt;Footer&lt;/p&gt;
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-600">&lt;/footer&gt;</span>

    <br />

    &nbsp;&nbsp;<span className="text-blue-600">&lt;/body&gt;</span>
    <br />

    <span className="text-blue-600">&lt;/html&gt;</span>
  </code>
</pre>
      <p>This template uses Flexbox, where the sidebar and content appear side by side on desktop screens. However, due to the <span className="text-red-400 bg-gray-50 px-1">@media-query</span>, they stack on top of each other on small screens.</p>

      {/* Example 2: Tailwind Responsive Template */}
      <h2 className="text-2xl font-semibold">Example: Tailwind CSS Template</h2>
     <pre className="bg-gray-200 p-4 rounded-lg mt-5 overflow-x-auto max-w-full whitespace-pre-wrap">
  <code>
    <span className="text-red-500">&lt;div</span>{" "}
    <span className="text-red-500">class</span>=
    <span className="text-green-700">"flex flex-col min-h-screen"</span>
    <span className="text-red-500">&gt;</span>
    <br />

    &nbsp;&nbsp;<span className="text-red-500">&lt;header</span>{" "}
    <span className="text-red-500">class</span>=
    <span className="text-green-700">"bg-blue-700 text-white p-4 text-center"</span>
    <span className="text-red-500">&gt;</span>
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;Header
    <br />
    &nbsp;&nbsp;<span className="text-red-500">&lt;/header&gt;</span>

    <br /><br />

    &nbsp;&nbsp;<span className="text-red-500">&lt;main</span>{" "}
    <span className="text-red-500">class</span>=
    <span className="text-green-700">"flex flex-1 flex-col md:flex-row"</span>
    <span className="text-red-500">&gt;</span>
    <br />

    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-500">&lt;aside</span>{" "}
    <span className="text-red-500">class</span>=
    <span className="text-green-700">"bg-gray-200 p-4 md:w-1/4"</span>
    <span className="text-red-500">&gt;</span>
    Sidebar
    <span className="text-red-500">&lt;/aside&gt;</span>
    <br />

    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-500">&lt;section</span>{" "}
    <span className="text-red-500">class</span>=
    <span className="text-green-700">"bg-blue-100 p-4 flex-1"</span>
    <span className="text-red-500">&gt;</span>
    Main Content
    <span className="text-red-500">&lt;/section&gt;</span>

    <br />
    &nbsp;&nbsp;<span className="text-red-500">&lt;/main&gt;</span>

    <br /><br />

    &nbsp;&nbsp;<span className="text-red-500">&lt;footer</span>{" "}
    <span className="text-red-500">class</span>=
    <span className="text-green-700">"bg-blue-700 text-white p-4 text-center"</span>
    <span className="text-red-500">&gt;</span>
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;Footer
    <br />
    &nbsp;&nbsp;<span className="text-red-500">&lt;/footer&gt;</span>

    <br />

    <span className="text-red-500">&lt;/div&gt;</span>
  </code>
</pre>

      
      <p>In Tailwind, using responsive classes like md:flex-row and md:w-1/4, a single template automatically adjusts across different screen sizes.</p>

      {/* Conclusion */}
      <h2 className="text-2xl font-semibold">Conclusion</h2>
     <p>
      RWD templates are useful for both beginners and professionals because they provide a pre-built structure. By simply replacing the content, a complete responsive website can be created.
     </p>
    </div>
  );
};

export default CssRWDTemplates;