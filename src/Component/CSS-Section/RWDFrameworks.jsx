import React from "react";

const CssRWDFrameworks = () => {
  return (
    <div className="p-6 max-w-4xl space-y-6 mt-10">
      {/* Title */}
      <h1 className="text-3xl font-medium text-blue-500">
        Responsive Web Design - Frameworks
      </h1>

      {/* Intro */}
      <p>
        Responsive Web Design (RWD) frameworks are pre-built CSS and JavaScript libraries that make creating responsive layouts simple and fast. They include ready-made grid systems, responsive classes, and UI components that automatically adjust for every screen size.
      </p>

      {/* Why Frameworks */}
      <h2 className="text-2xl font-semibold">Why Use RWD Frameworks?</h2>
      <ul className="list-disc list-inside space-y-2">
        <li>Fast and efficient development. </li>
        <li>Cross-browser compatibility is ensured.</li>
        <li>Responsive layouts are created easily.</li>
        <li>They follow mobile-first design principles.</li>
      </ul>

      {/* Popular Frameworks */}
      <h2 className="text-2xl font-semibold">Popular RWD Frameworks</h2>
      <div className="space-y-4 text-gray-700">
        <p>
          <strong>1. Bootstrap:</strong> It is the most popular framework that provides a grid system and responsive components.
        </p>
        <p>
          <strong>2. Foundation:</strong> A mobile-first responsive framework that focuses on accessibility.
        </p>
        <p>
          <strong>3. Tailwind CSS:</strong> A utility-first CSS framework that provides breakpoints and classes for creating responsive designs.
        </p>
        <p>
          <strong>4. Bulma:</strong> A lightweight and modern CSS framework built on Flexbox.
        </p>
      </div>

      <p>Using a responsive style sheet is an excellent method for building a responsive design.</p>
      <p>Makes it simple to create good-looking sites that work well on any display size.</p>

      <div className="flex flex-row border border-1 border-gray-500 p-4 gap-3">
      
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem id quas sit ex sequi sunt voluptatibus qui quisquam. Sequi, minus?</p>

        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia commodi earum, cum amet optio suscipit et itaque? Voluptates, expedita eligendi?</p>

        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores laborum tempore corrupti assumenda reprehenderit nulla rerum distinctio quibusdam enim nesciunt?</p>

      </div>

      {/* Example 1: Bootstrap */}
      <h2 className="text-2xl font-semibold">Example: Bootstrap Grid</h2>
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
    Bootstrap Example
    <span className="text-blue-600">&lt;/title&gt;</span>
    <br />

    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-600">&lt;meta</span>{" "}
    <span className="text-red-500">name</span>=
    <span className="text-green-700">"viewport"</span>{" "}
    <span className="text-red-500">content</span>=
    <span className="text-green-700">"width=device-width, initial-scale=1.0"</span>
    <span className="text-blue-600"> /&gt;</span>
    <br />

    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-gray-500">&lt;!-- Bootstrap CDN --&gt;</span>
    <br />

    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-600">&lt;link</span>{" "}
    <span className="text-red-500">rel</span>=
    <span className="text-green-700">"stylesheet"</span>{" "}
    <span className="text-red-500">href</span>=
    <span className="text-green-700">"https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"</span>
    <span className="text-blue-600"> /&gt;</span>
    <br />

    &nbsp;&nbsp;<span className="text-blue-600">&lt;/head&gt;</span>
    <br />

    &nbsp;&nbsp;<span className="text-blue-600">&lt;body&gt;</span>
    <br />

    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-600">&lt;div</span>{" "}
    <span className="text-red-500">class</span>=
    <span className="text-green-700">"container"</span>
    <span className="text-blue-600">&gt;</span>
    <br />

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-600">&lt;div</span>{" "}
    <span className="text-red-500">class</span>=
    <span className="text-green-700">"row"</span>
    <span className="text-blue-600">&gt;</span>
    <br />

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-600">&lt;div</span>{" "}
    <span className="text-red-500">class</span>=
    <span className="text-green-700">"col-md-6 bg-primary text-white"</span>
    <span className="text-blue-600">&gt;</span>
    Column 1
    <span className="text-blue-600">&lt;/div&gt;</span>
    <br />

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-600">&lt;div</span>{" "}
    <span className="text-red-500">class</span>=
    <span className="text-green-700">"col-md-6 bg-success text-white"</span>
    <span className="text-blue-600">&gt;</span>
    Column 2
    <span className="text-blue-600">&lt;/div&gt;</span>
    <br />

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-600">&lt;/div&gt;</span>
    <br />

    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-600">&lt;/div&gt;</span>
    <br />

    &nbsp;&nbsp;<span className="text-blue-600">&lt;/body&gt;</span>
    <br />

    <span className="text-blue-600">&lt;/html&gt;</span>
  </code>
</pre>

      <p className="text-gray-700">
      Here, col-md-6 means that on medium screens and above, each column will take up half the width of the screen. On smaller screens, they will automatically stack.
      </p>

      {/* Example 2: Tailwind */}
      <h2 className="text-2xl font-semibold">Example: Tailwind CSS Grid</h2>
    <pre className="bg-gray-200 p-4 rounded-lg mt-5 overflow-x-auto max-w-full whitespace-pre-wrap">
  <code>
    <span className="text-blue-600">&lt;div</span>{" "}
    <span className="text-red-500">class</span>=
    <span className="text-green-700">"grid grid-cols-1 md:grid-cols-2 gap-4"</span>
    <span className="text-blue-600">&gt;</span>
    <br />

    &nbsp;&nbsp;<span className="text-blue-600">&lt;div</span>{" "}
    <span className="text-red-500">class</span>=
    <span className="text-green-700">"bg-blue-500 text-white p-4"</span>
    <span className="text-blue-600">&gt;</span>
    Column 1
    <span className="text-blue-600">&lt;/div&gt;</span>
    <br />

    &nbsp;&nbsp;<span className="text-blue-600">&lt;div</span>{" "}
    <span className="text-red-500">class</span>=
    <span className="text-green-700">"bg-green-500 text-white p-4"</span>
    <span className="text-blue-600">&gt;</span>
    Column 2
    <span className="text-blue-600">&lt;/div&gt;</span>
    <br />

    <span className="text-blue-600">&lt;/div&gt;</span>
  </code>
</pre>

      <p className="text-gray-700">
       In Tailwind, grid-cols-1 creates a single column on small screens, and md:grid-cols-2 breaks it into two columns on medium screens.</p>
    </div>
  );
};

export default CssRWDFrameworks;