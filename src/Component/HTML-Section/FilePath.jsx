const HTMLFilePath = () => {
  return (
    <div className="p-4 sm:p-6 md:p-8 max-w-4xl">
      {/* Main Title */}
      <h1 className="text-3xl font-semibold text-blue-500 mb-3">HTML File Paths</h1>

      {/* Introduction */}
      <p className="leading-relaxed mb-3">In HTML, file paths tell the browser where to find files like images, CSS, JavaScript, or other linked resources. A file path can be <strong>absolute</strong> or <strong>relative</strong>.</p>

      {/* Absolute vs Relative */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-3">Absolute vs Relative Paths</h2>
        <ul className="list-[square] list-inside space-y-1 leading-relaxed">
          <li>
            <strong>Absolute path:</strong> Full URL to a file, including domain name.  
            <code className="block bg-gray-900 p-4 text-green-400 mt-1 rounded-lg">{'<img src="https://example.com/images/logo.png" alt="Logo">'}</code>
          </li>
          <li>
            <strong>Relative path:</strong> Location relative to the current HTML file.  
            <code className="block bg-gray-900 text-green-400 p-4 mt-1 rounded-lg">{'<img src="images/logo.png" alt="Logo">'}</code>
          </li>
        </ul>
      </section>

      {/* Types of Relative Paths */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-3">
          Types of Relative Paths
        </h2>
        <ul className="list-[square] list-inside space-y-3 leading-relaxed">
          <li>
            <strong>Same folder:</strong> File is in the same folder as HTML file.  
            <code className="block bg-gray-900 text-green-400 p-4 mt-1 rounded-lg">{'<img src="logo.png" alt="Logo">'}</code>
          </li>
          <li>
            <strong>Subfolder:</strong> File is in a folder inside the current folder.  
            <code className="block bg-gray-900 text-green-400 p-4 mt-1 rounded-lg">{'<img src="images/logo.png" alt="Logo">'}</code>
          </li>
          <li>
            <strong>Parent folder:</strong> Use <code>../</code> to move up one level.  
            <code className="block bg-gray-900 text-green-400 p-4 mt-1 rounded-lg">{'<img src="../logo.png" alt="Logo">'}</code>
          </li>
          <li>
            <strong>Moving up multiple folders:</strong> Add more <code>../</code> as needed.  
            <code className="block bg-gray-900 text-green-400 p-4 mt-1 rounded-lg">{'<img src="../../logo.png" alt="Logo">'}</code>
          </li>
        </ul>
      </section>

      {/* Example Folder Structure */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-3">
          Example Folder Structure
        </h2>
        <pre className="bg-gray-100 p-3 rounded ">
{`project/
│
├── index.html
├── about.html
├── images/
│   └── logo.png
└── css/
    └── style.css`}
        </pre>
        <p className="text-gray-700 mt-3">
          If <code>index.html</code> wants to use <code>logo.png</code>, the path is:  
          <code className="bg-gray-100 p-1 rounded">images/logo.png</code>
        </p>
      </section>

      {/* Best Practices */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-3">
          Best Practices
        </h2>
        <ul className="list-[square] list-inside space-y-1 text-gray-700">
          <li>Use relative paths for files within your own project — they work even if you change the domain.</li>
          <li>Use absolute paths for external resources like CDN links.</li>
          <li>Organize files into folders for better maintainability.</li>
          <li>Always double-check spelling and folder structure — incorrect paths cause broken links/images.</li>
        </ul>
      </section>

      {/* Quick Recap */}
      <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded">
        <h3 className="text-lg font-semibold text-blue-700 mb-3">
          Quick Recap:
        </h3>
        <ul className="list-[square]] list-inside space-y-1 text-gray-700">
          <li><strong>Absolute:</strong> Full URL with domain.</li>
          <li><strong>Relative:</strong> Based on HTML file’s location.</li>
          <li><code>../</code> moves up one folder level.</li>
          <li>Keep folder structure organized for easy path management.</li>
        </ul>
      </div>
    </div>
  );
};

export default HTMLFilePath;