import React from "react";

const CssWebsite = () => {
  return (
    <div className="p-6 max-w-4xl space-y-6 mt-10">
      {/* Heading */}
      <h1 className="text-3xl font-medium mb-6 text-blue-500">
        Build a Website with CSS
      </h1>

      {/* Intro */}
      <p className="mb-6 leading-relaxed">
        By using CSS, we can make our website attractive and responsive. HTML provides the structure, and CSS styles that structure. Here is an example of a simple website layout.
      </p>

      {/* Example Code */}
      <div className="bg-gray-100 p-4 rounded-lg mb-6">
      <pre className="bg-gray-200 p-4 rounded-lg overflow-x-auto max-w-full whitespace-pre-wrap mt-5">
  <code>
    <span className="text-blue-600">&lt;!DOCTYPE html&gt;</span><br />
    <span className="text-blue-600">&lt;html</span> <span className="text-red-500">lang</span>=<span className="text-green-700">"en"</span><span className="text-blue-600">&gt;</span><br /><br />

    <span className="text-blue-600">&lt;head&gt;</span><br />
    <span className="text-blue-600">&lt;meta</span> <span className="text-red-500">charset</span>=<span className="text-green-700">"UTF-8"</span><span className="text-blue-600">&gt;</span><br />
    <span className="text-blue-600">&lt;meta</span> <span className="text-red-500">name</span>=<span className="text-green-700">"viewport"</span> <span className="text-red-500">content</span>=<span className="text-green-700">"width=device-width, initial-scale=1.0"</span><span className="text-blue-600">&gt;</span><br />
    <span className="text-blue-600">&lt;title&gt;</span>My CSS Website<span className="text-blue-600">&lt;/title&gt;</span><br /><br />

    <span className="text-blue-600">&lt;style&gt;</span><br />

    <span className="text-blue-600">body</span> <span>{'{'}</span><br />
    &nbsp;&nbsp;<span className="text-red-500">font-family</span>: <span className="text-green-700">Arial, sans-serif</span>;<br />
    &nbsp;&nbsp;<span className="text-red-500">margin</span>: <span className="text-green-700">0</span>;<br />
    &nbsp;&nbsp;<span className="text-red-500">padding</span>: <span className="text-green-700">0</span>;<br />
    <span>{'}'}</span><br /><br />

    <span className="text-blue-600">header</span> <span>{'{'}</span><br />
    &nbsp;&nbsp;<span className="text-red-500">background</span>: <span className="text-green-700">#1e3a8a</span>;<br />
    &nbsp;&nbsp;<span className="text-red-500">color</span>: <span className="text-green-700">white</span>;<br />
    &nbsp;&nbsp;<span className="text-red-500">text-align</span>: <span className="text-green-700">center</span>;<br />
    &nbsp;&nbsp;<span className="text-red-500">padding</span>: <span className="text-green-700">20px</span>;<br />
    <span>{'}'}</span><br /><br />

    <span className="text-blue-600">nav</span> <span>{'{'}</span><br />
    &nbsp;&nbsp;<span className="text-red-500">background</span>: <span className="text-green-700">#2563eb</span>;<br />
    &nbsp;&nbsp;<span className="text-red-500">padding</span>: <span className="text-green-700">10px</span>;<br />
    &nbsp;&nbsp;<span className="text-red-500">text-align</span>: <span className="text-green-700">center</span>;<br />
    <span>{'}'}</span><br /><br />

    <span className="text-blue-600">nav a</span> <span>{'{'}</span><br />
    &nbsp;&nbsp;<span className="text-red-500">color</span>: <span className="text-green-700">white</span>;<br />
    &nbsp;&nbsp;<span className="text-red-500">margin</span>: <span className="text-green-700">0 15px</span>;<br />
    &nbsp;&nbsp;<span className="text-red-500">text-decoration</span>: <span className="text-green-700">none</span>;<br />
    <span>{'}'}</span><br /><br />

    <span className="text-blue-600">nav a:hover</span> <span>{'{'}</span><br />
    &nbsp;&nbsp;<span className="text-red-500">text-decoration</span>: <span className="text-green-700">underline</span>;<br />
    <span>{'}'}</span><br /><br />

    <span className="text-blue-600">main</span> <span>{'{'}</span><br />
    &nbsp;&nbsp;<span className="text-red-500">padding</span>: <span className="text-green-700">20px</span>;<br />
    <span>{'}'}</span><br /><br />

    <span className="text-blue-600">footer</span> <span>{'{'}</span><br />
    &nbsp;&nbsp;<span className="text-red-500">background</span>: <span className="text-green-700">#1e3a8a</span>;<br />
    &nbsp;&nbsp;<span className="text-red-500">color</span>: <span className="text-green-700">white</span>;<br />
    &nbsp;&nbsp;<span className="text-red-500">text-align</span>: <span className="text-green-700">center</span>;<br />
    &nbsp;&nbsp;<span className="text-red-500">padding</span>: <span className="text-green-700">15px</span>;<br />
    &nbsp;&nbsp;<span className="text-red-500">position</span>: <span className="text-green-700">fixed</span>;<br />
    &nbsp;&nbsp;<span className="text-red-500">bottom</span>: <span className="text-green-700">0</span>;<br />
    &nbsp;&nbsp;<span className="text-red-500">width</span>: <span className="text-green-700">100%</span>;<br />
    <span>{'}'}</span><br />

    <span className="text-blue-600">&lt;/style&gt;</span><br />
    <span className="text-blue-600">&lt;/head&gt;</span><br /><br />

    <span className="text-blue-600">&lt;body&gt;</span><br />

    &nbsp;&nbsp;<span className="text-blue-600">&lt;header&gt;</span><br />
    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-600">&lt;h1&gt;</span>Welcome to My CSS Website<span className="text-blue-600">&lt;/h1&gt;</span><br />
    &nbsp;&nbsp;<span className="text-blue-600">&lt;/header&gt;</span><br /><br />

    &nbsp;&nbsp;<span className="text-blue-600">&lt;nav&gt;</span><br />
    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-600">&lt;a&gt;</span>Home<span className="text-blue-600">&lt;/a&gt;</span><br />
    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-600">&lt;a&gt;</span>About<span className="text-blue-600">&lt;/a&gt;</span><br />
    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-600">&lt;a&gt;</span>Services<span className="text-blue-600">&lt;/a&gt;</span><br />
    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-600">&lt;a&gt;</span>Contact<span className="text-blue-600">&lt;/a&gt;</span><br />
    &nbsp;&nbsp;<span className="text-blue-600">&lt;/nav&gt;</span><br /><br />

    &nbsp;&nbsp;<span className="text-blue-600">&lt;main&gt;</span><br />
    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-600">&lt;h2&gt;</span>About This Website<span className="text-blue-600">&lt;/h2&gt;</span><br />
    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-600">&lt;p&gt;</span>Ye ek simple example hai jisme humne CSS ka use karke ek basic website banayi hai.<span className="text-blue-600">&lt;/p&gt;</span><br />
    &nbsp;&nbsp;<span className="text-blue-600">&lt;/main&gt;</span><br /><br />

    &nbsp;&nbsp;<span className="text-blue-600">&lt;footer&gt;</span><br />
    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-600">&lt;p&gt;</span>© 2025 My CSS Website<span className="text-blue-600">&lt;/p&gt;</span><br />
    &nbsp;&nbsp;<span className="text-blue-600">&lt;/footer&gt;</span><br /><br />

    <span className="text-blue-600">&lt;/body&gt;</span><br />
    <span className="text-blue-600">&lt;/html&gt;</span>
  </code>
</pre></div>

      {/* Explanation */}
      <div className="bg-green-100 p-3">
      <h2 className="text-2xl font-semibold mb-3 text-gray-800">
        Explanation:
      </h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-700">
        <li>
          <code>header</code> → The top section of the website that contains the title.
        </li>
        <li>
          <code>nav</code> → A navigation bar has been created with a hover effect.
        </li>
        <li>
          <code>main</code> → It is the content section of the page.
        </li>
        <li>
          <code>footer</code> → The bottom section is fixed and contains the copyright text.
        </li>
        <li>
         CSS properties like background, color, padding, and text-align are used for styling.
        </li>
      </ul>
      </div>

    </div>
  );
};

export default CssWebsite;