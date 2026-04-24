const HTMLBasics = () => {
  return (
    <div className="p-4 sm:p-6 md:p-8 max-w-4xl">
      {/* Title */}
      <h1 className="text-3xl font-medium text-blue-500 mb-3">HTML Basics</h1>

      {/* Introduction */}
      <p className="text-gray-800 mb-3">
        HTML, or <span className="text-red-400 bg-gray-50">HyperText Markup Language</span>, is the backbone of every
        website. It defines the <strong>structure</strong> of a web page using
        elements called <strong>tags</strong>. Learning HTML basics is the first step
        in web development.
      </p>

      {/* Section: HTML Elements */}
      <h2 className="text-2xl font-semibold text-blue-500 mt-5 mb-3">Basic HTML Elements</h2>
      <p className="text-gray-800 mb-3">
        HTML is made up of elements wrapped in <strong>tags</strong>. A basic HTML page
        usually includes:
      </p>
      <ul className="list-[square] list-inside space-y-1 text-gray-800 mb-3">
        <li>
          <code>&lt;!DOCTYPE html&gt;</code> - Declares HTML5 document type.
        </li>
        <li>
          <code>&lt;html&gt;</code> - The root element of the page.
        </li>
        <li>
          <code>&lt;head&gt;</code> - Contains metadata like the title.
        </li>
        <li>
          <code>&lt;body&gt;</code> - Holds the content visible on the page.
        </li>
      </ul>

      {/* Code Example */}
      <h2 className="text-2xl font-semibold text-blue-500 mt-5 mb-5">Example</h2>
      <pre className="bg-gray-200 p-4 rounded-lg overflow-x-auto max-w-full whitespace-pre-wrap">
       <code>
        <span className="text-gray-30">&lt;</span>
        <span className="text-gray-500">!DOCTYPE</span>
        <span className="text-blue-500"> html</span>
        <span className="text-gray-30">&gt;</span><br></br>
        <span className="text-gray-30">&lt;</span>
        <span className="text-blue-500">html</span>
        <span className="text-gray-30">&gt;</span><br></br>
        <span className="text-gray-30">&lt;</span>
        <span className="text-blue-500">head</span>
        <span className="text-gray-30">&gt;</span><br></br>
        <span className="text-gray-30">&lt;</span>
        <span className="text-blue-500">title</span>
        <span className="text-gray-30">&gt;</span>
        <span className="My First Page">My First Page</span>
        <span className="text-gray-30">&lt;/</span>
        <span className="text-blue-500">title</span>
        <span className="text-gray-30">&gt;</span><br></br>
        <span className="text-gray-30">&lt;/</span>
        <span className="text-blue-500">head</span>
        <span className="text-gray-30">&gt;</span><br></br>
        <span className="text-gray-30">&lt;</span>
        <span className="text-blue-500">body</span>
        <span className="text-gray-30">&gt;</span><br></br>
        <span className="text-gray-30">&lt;</span>
        <span className="text-blue-500">h1</span>
        <span className="text-gray-30">&gt;</span>
        <span className="">Hello, World</span>
        <span className="text-gray-30">&lt;/</span>
        <span className="text-blue-500">h1</span>
        <span className="text-gray-30">&gt;</span><br></br>
        <span className="text-gray-30">&lt;</span>
        <span className="text-blue-500">p</span>
        <span className="text-gray-30">&gt;</span>
        <span className="">This Is My first HTML Page.</span>
        <span className="text-gray-30">&lt;/</span>
        <span className="text-blue-500">p</span>
        <span className="text-gray-30">&gt;</span><br></br>
        <span className="text-gray-30">&lt;/</span>
        <span className="text-blue-500">body</span>
        <span className="text-gray-30">&gt;</span><br></br>
        <span className="text-gray-30">&lt;/</span>
        <span className="text-blue-500">html</span>
        <span className="text-gray-30">&gt;</span>
       
       </code>
      </pre>

      {/* Explanation */}
      <h2 className="text-2xl font-semibold text-blue-500 mt-6 mb-3">Explanation:</h2>
      <ul className="list-[square] list-inside space-y-1 text-gray-800 mb-3">
        <li><code>&lt;!DOCTYPE html&gt;</code> → Ensures browser uses HTML5.</li>
        <li><code>&lt;html&gt;</code> → Wraps all content.</li>
        <li><code>&lt;head&gt;</code> → Stores title and meta info.</li>
        <li><code>&lt;body&gt;</code> → Displays all visible page elements.</li>
      </ul>

      {/* Why Learn HTML */}
      <h2 className="text-2xl font-semibold text-blue-500 mt-5 mb-3">
        Why Learn HTML Basics?
      </h2>
      <ul className="list-[square] list-inside space-y-1 text-gray-800">
        <li>It is the foundation of all websites.</li>
        <li>It is simple and beginner-friendly.</li>
        <li>Works with CSS and JavaScript for styling and interactivity.</li>
      </ul>

      {/* Recap */}
      <div className="mt-6 p-4 bg-blue-50 rounded-md border border-blue-200">
        <h3 className="text-lg font-semibold text-blue-700 mb-3">Quick Recap:</h3>
        <ul className="list-[square] list-inside space-y-1 text-gray-800">
          <li>HTML stands for HyperText Markup Language.</li>
          <li>Basic structure includes: <code>&lt;html&gt;</code>, <code>&lt;head&gt;</code>, and <code>&lt;body&gt;</code>.</li>
          <li>HTML is used to create the structure of web pages.</li>
        </ul>
      </div>
    </div>
  );
};

export default HTMLBasics;