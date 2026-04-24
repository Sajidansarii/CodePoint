import React from "react";

const CssRWD = () => {
  return (
    <div className="p-6 max-w-4xl space-y-6 mt-10">
      {/* Title */}
      <h1 className="text-3xl font-medium text-blue-500">CSS RWD (Responsive Web Design)-</h1>

      {/* Introduction */}
      <p>
        RWD means <strong>Responsive Web Design</strong>. It means that a website automatically adjusts to every screen size (desktop, tablet, mobile) without the need to create a separate website. The main goal of responsive design is to provide the best user experience.</p>
        <p>Responsive web design isn’t a software or a script like JavaScript—it's a design technique used to make websites flexible across all screen sizes and devices.</p>

      {/* Features */}
      <h2 className="text-2xl font-semibold">Key Features of RWD:</h2>
      <ul className="list-disc list-inside space-y-2">
        <li><span className="text-red-400 bg-gray-50 px-1">Flexible Layouts</span> – % And use relative units instead of pixels.</li>
        <li><span className="text-red-400 bg-gray-50 px-1">Media Queries</span> –   CSS is applied according to the screen size.</li>
        <li><span className="text-red-400 bg-gray-50 px-1">Responsive Images</span> – Images shrink according to the screen size.</li>
      </ul>

      <h1 className="text-2xl">Designing For The Best Experience For All Users</h1>
       <p>Web pages are accessed on a variety of devices, including desktops, tablets, and smartphones. No matter which device is used, your website should be visually appealing and user-friendly.</p>
       <p>Instead of cutting out information for smaller devices, websites should adapt their content to display properly on all screen sizes.</p>
       <div className="min-w-full h-96 bg-[url('/public/size.jpg')] bg-cover bg-center"></div>

      {/* Code Example */}
      <h2 className="text-2xl font-semibold">Example Code:</h2>
    <pre className="bg-gray-200 p-4 rounded-lg overflow-x-auto max-w-full whitespace-pre-wrap">
  <code>
    <span className="text-blue-600">&lt;!DOCTYPE html&gt;</span><br />
    <span className="text-blue-600">&lt;html&gt;</span><br />
    <span className="text-blue-600">&lt;head&gt;</span><br />

    &nbsp;&nbsp;<span className="text-blue-600">&lt;title&gt;</span>Responsive Web Design<span className="text-blue-600">&lt;/title&gt;</span><br />

    &nbsp;&nbsp;<span className="text-blue-600">&lt;style&gt;</span><br />

    &nbsp;&nbsp;<span className="text-blue-600">.container</span> <span>{'{'}</span><br />
    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-500">display</span>: <span className="text-green-700">flex</span>;<br />
    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-500">gap</span>: <span className="text-green-700">10px</span>;<br />
    &nbsp;&nbsp;<span>{'}'}</span><br /><br />

    &nbsp;&nbsp;<span className="text-blue-600">.box</span> <span>{'{'}</span><br />
    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-500">flex</span>: <span className="text-green-700">1</span>;<br />
    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-500">padding</span>: <span className="text-green-700">20px</span>;<br />
    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-500">color</span>: <span className="text-green-700">white</span>;<br />
    &nbsp;&nbsp;<span>{'}'}</span><br /><br />

    &nbsp;&nbsp;<span className="text-blue-600">.box1</span> <span>{'{'}</span> <span className="text-red-500">background</span>: <span className="text-green-700">red</span>; <span>{'}'}</span><br />
    &nbsp;&nbsp;<span className="text-blue-600">.box2</span> <span>{'{'}</span> <span className="text-red-500">background</span>: <span className="text-green-700">green</span>; <span>{'}'}</span><br />
    &nbsp;&nbsp;<span className="text-blue-600">.box3</span> <span>{'{'}</span> <span className="text-red-500">background</span>: <span className="text-green-700">blue</span>; <span>{'}'}</span><br /><br />

    &nbsp;&nbsp;<span className="text-gray-500">/* Media Query for small screens */</span><br />
    &nbsp;&nbsp;<span className="text-blue-600">@media (max-width: 600px)</span> <span>{'{'}</span><br />
    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-600">.container</span> <span>{'{'}</span><br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-500">flex-direction</span>: <span className="text-green-700">column</span>;<br />
    &nbsp;&nbsp;&nbsp;&nbsp;<span>{'}'}</span><br />
    &nbsp;&nbsp;<span>{'}'}</span><br />

    &nbsp;&nbsp;<span className="text-blue-600">&lt;/style&gt;</span><br />
    <span className="text-blue-600">&lt;/head&gt;</span><br />

    <span className="text-blue-600">&lt;body&gt;</span><br /><br />

    &nbsp;&nbsp;<span className="text-blue-600">&lt;h1&gt;</span>Responsive Web Design Example<span className="text-blue-600">&lt;/h1&gt;</span><br />

    &nbsp;&nbsp;<span className="text-blue-600">&lt;div class="container"&gt;</span><br />
    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-600">&lt;div class="box box1"&gt;</span>Box 1<span className="text-blue-600">&lt;/div&gt;</span><br />
    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-600">&lt;div class="box box2"&gt;</span>Box 2<span className="text-blue-600">&lt;/div&gt;</span><br />
    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-600">&lt;div class="box box3"&gt;</span>Box 3<span className="text-blue-600">&lt;/div&gt;</span><br />
    &nbsp;&nbsp;<span className="text-blue-600">&lt;/div&gt;</span><br /><br />

    <span className="text-blue-600">&lt;/body&gt;</span><br />
    <span className="text-blue-600">&lt;/html&gt;</span>
  </code>
</pre>

      {/* Explanation */}
      <h2 className="text-2xl font-semibold">Explanation:</h2>
      <ul className="list-disc list-inside space-y-2 text-gray-700">
        <li>
          Normal desktop screen par boxes <strong>row</strong> me dikhte hain.
        </li>
        <li>
          Agar screen width <strong>600px se kam</strong> ho jaye to media query apply hoti hai aur
          boxes <strong>column</strong> me stack ho jate hain.
        </li>
        <li>
          Is tarah website automatically adjust hoti hai — yehi hota hai{" "}
          <strong>Responsive Web Design (RWD)</strong>.
        </li>
      </ul>
    </div>
  );
};

export default CssRWD;