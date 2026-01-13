const HowHTMLWorks = () => {
  return (
    <div className="p-4 sm:p-6 md:p-8 max-w-4xl">
      <h1 className="text-3xl  font-semibold text-blue-500 mb-3">How HTML Works in a Browser</h1>

      <p className="text-gray-700 mb-3">
        When you open a website in a browser like Chrome or Firefox, you're
        seeing the result of HTML working behind the scenes. HTML is the
        backbone of every web page, and the browser is responsible for reading
        and displaying it.
      </p>

      <h2 className="text-xl  text-blue-500 font-semibold mt-5 mb-3">
        Step-by-Step Process
      </h2>
      <ol className="list-decimal list-inside text-gray-700 space-y-2mmb-3">
        <li>
          <strong>Request:</strong> You type a URL or click a link, and the
          browser sends a request to a server.
        </li>
        <li>
          <strong>Response:</strong> The server responds with an HTML file.
        </li>
        <li>
          <strong>Parsing:</strong> The browser reads the HTML and builds a
          structure in memory called the <strong>DOM</strong> (Document Object
          Model).
        </li>
        <li>
          <strong>Loading Resources:</strong> It then fetches other files like
          CSS, images, and JavaScript if linked.
        </li>
        <li>
          <strong>Rendering:</strong> The browser uses the HTML and styles to
          visually display the page to the user.
        </li>
      </ol>

      <h2 className="text-xl sm:text-2xl text-blue-500 font-semibold mt-6 mb-3">
        What is the DOM?
      </h2>
      <p className="text-gray-700 mb-3">
        The DOM (Document Object Model) is a tree-like structure the browser
        creates from the HTML. It allows JavaScript to read and change the
        content, structure, and styles of a page dynamically.
      </p>

      <h2 className="text-xl sm:text-2xl text-blue-500 font-semibold mt-6 mb-5">Example</h2>
      <div className="bg-gray-900 text-green-400 overflow-x-auto max-w-full whitespace-pre-wrap p-4 rounded-lg text-sm sm:text-base overflow-auto mb-4">
        <pre>
{`<!DOCTYPE html>
<html>
  <head>
    <title>My Page</title>
  </head>
  <body>
    <h1>Hello, world!</h1>
    <p>This is my website.</p>
  </body>
</html>`}
        </pre>
      </div>

      <p className="text-gray-700 mb-3">
        The browser doesn’t show the tags like <code>&lt;h1&gt;</code> or{" "}
        <code>&lt;p&gt;</code> — it shows their content: a heading and a
        paragraph.
      </p>

      <h2 className="text-2xl  text-blue-500 font-semibold mt-6 mb-3">
        Summary
      </h2>
      <ul className="list-[square] list-inside text-gray-700 space-y-1">
        <li>Browser requests an HTML file from the server</li>
        <li>It reads and parses the file</li>
        <li>Creates the DOM structure</li>
        <li>Loads styles and scripts</li>
        <li>Renders the final web page</li>
      </ul>
    </div>
  );
};

export default HowHTMLWorks;