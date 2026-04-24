import React from "react";

const CSSTemplates = () => {
  return (
    <div className="p-6 max-w-4xl space-y-6 mt-10">
      <h1 className="text-3xl font-medium mb-4 text-blue-500">CSS Templates</h1>
      <p className="mb-4">
        CSS Templates are pre-designed layouts that you can use to quickly build
        web pages. They provide a starting point for your project with a ready
        structure like header, navigation, content, and footer sections.
      </p>

      <h2 className="text-2xl mb-2">Simple Page Template</h2>
      <pre className="bg-gray-200 p-4 rounded-lg overflow-x-auto max-w-full whitespace-pre-wrap mb-5">
  <code>
    <span className="text-blue-600">&lt;!DOCTYPE html&gt;</span><br />
    <span className="text-blue-600">&lt;html&gt;</span><br />
    <span className="text-blue-600">&lt;head&gt;</span><br />

    &nbsp;&nbsp;<span className="text-blue-600">&lt;style&gt;</span><br />

    &nbsp;&nbsp;<span className="text-blue-600">body</span> <span>{'{'}</span><br />
    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-500">margin</span>: <span className="text-green-700">0</span>;<br />
    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-500">font-family</span>: <span className="text-green-700">Arial, sans-serif</span>;<br />
    &nbsp;&nbsp;<span>{'}'}</span><br /><br />

    &nbsp;&nbsp;<span className="text-blue-600">header</span> <span>{'{'}</span><br />
    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-500">background</span>: <span className="text-green-700">#4CAF50</span>;<br />
    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-500">color</span>: <span className="text-green-700">white</span>;<br />
    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-500">padding</span>: <span className="text-green-700">15px</span>;<br />
    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-500">text-align</span>: <span className="text-green-700">center</span>;<br />
    &nbsp;&nbsp;<span>{'}'}</span><br /><br />

    &nbsp;&nbsp;<span className="text-blue-600">nav</span> <span>{'{'}</span><br />
    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-500">float</span>: <span className="text-green-700">left</span>;<br />
    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-500">width</span>: <span className="text-green-700">20%</span>;<br />
    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-500">height</span>: <span className="text-green-700">300px</span>;<br />
    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-500">background</span>: <span className="text-green-700">#f1f1f1</span>;<br />
    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-500">padding</span>: <span className="text-green-700">20px</span>;<br />
    &nbsp;&nbsp;<span>{'}'}</span><br /><br />

    &nbsp;&nbsp;<span className="text-blue-600">section</span> <span>{'{'}</span><br />
    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-500">float</span>: <span className="text-green-700">left</span>;<br />
    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-500">width</span>: <span className="text-green-700">80%</span>;<br />
    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-500">height</span>: <span className="text-green-700">300px</span>;<br />
    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-500">padding</span>: <span className="text-green-700">20px</span>;<br />
    &nbsp;&nbsp;<span>{'}'}</span><br /><br />

    &nbsp;&nbsp;<span className="text-blue-600">footer</span> <span>{'{'}</span><br />
    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-500">clear</span>: <span className="text-green-700">both</span>;<br />
    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-500">background</span>: <span className="text-green-700">#ddd</span>;<br />
    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-500">text-align</span>: <span className="text-green-700">center</span>;<br />
    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-500">padding</span>: <span className="text-green-700">10px</span>;<br />
    &nbsp;&nbsp;<span>{'}'}</span><br />

    &nbsp;&nbsp;<span className="text-blue-600">&lt;/style&gt;</span><br />
    <span className="text-blue-600">&lt;/head&gt;</span><br /><br />

    <span className="text-blue-600">&lt;body&gt;</span><br /><br />

    &nbsp;&nbsp;<span className="text-blue-600">&lt;header&gt;</span><br />
    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-600">&lt;h2&gt;</span>My Website<span className="text-blue-600">&lt;/h2&gt;</span><br />
    &nbsp;&nbsp;<span className="text-blue-600">&lt;/header&gt;</span><br /><br />

    &nbsp;&nbsp;<span className="text-blue-600">&lt;nav&gt;</span><br />
    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-600">&lt;p&gt;</span>Navigation Links<span className="text-blue-600">&lt;/p&gt;</span><br />
    &nbsp;&nbsp;<span className="text-blue-600">&lt;/nav&gt;</span><br /><br />

    &nbsp;&nbsp;<span className="text-blue-600">&lt;section&gt;</span><br />
    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-600">&lt;h2&gt;</span>Main Content<span className="text-blue-600">&lt;/h2&gt;</span><br />
    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-600">&lt;p&gt;</span>This is a simple template example.<span className="text-blue-600">&lt;/p&gt;</span><br />
    &nbsp;&nbsp;<span className="text-blue-600">&lt;/section&gt;</span><br /><br />

    &nbsp;&nbsp;<span className="text-blue-600">&lt;footer&gt;</span><br />
    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-600">&lt;p&gt;</span>Footer Information<span className="text-blue-600">&lt;/p&gt;</span><br />
    &nbsp;&nbsp;<span className="text-blue-600">&lt;/footer&gt;</span><br /><br />

    <span className="text-blue-600">&lt;/body&gt;</span><br />
    <span className="text-blue-600">&lt;/html&gt;</span>
  </code>
</pre>
<div className="bg-green-100 p-3">
      <h2 className="text-2xl font-semibold mb-2">Explanation:</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <strong>Header:</strong> Top section of the page containing the title
          or logo.
        </li>
        <li>
          <strong>Navigation:</strong> Sidebar or menu to navigate to different
          pages.
        </li>
        <li>
          <strong>Section:</strong> Main content area where the main text or
          data is shown.
        </li>
        <li>
          <strong>Footer:</strong> Bottom section for additional info like
          copyright or links.
        </li>
      </ul>
</div>
    </div>
  );
};

export default CSSTemplates;