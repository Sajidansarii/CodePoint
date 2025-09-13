import React from "react";

const htmlTags = [
  { tag: "<a>", description: "Defines a hyperlink" },
  { tag: "<abbr>", description: "Defines an abbreviation" },
  { tag: "<address>", description: "Defines contact information" },
  { tag: "<article>", description: "Defines independent content" },
  { tag: "<aside>", description: "Defines content aside from the main" },
  { tag: "<audio>", description: "Embeds audio content" },
  { tag: "<b>", description: "Bold text" },
  { tag: "<blockquote>", description: "Quoted section" },
  { tag: "<body>", description: "Body of the document" },
  { tag: "<br>", description: "Line break" },
  { tag: "<button>", description: "Clickable button" },
  { tag: "<canvas>", description: "Used to draw graphics via scripting" },
  { tag: "<caption>", description: "Table caption" },
  { tag: "<code>", description: "Defines computer code" },
  { tag: "<div>", description: "Generic container" },
  { tag: "<em>", description: "Emphasized text" },
  { tag: "<form>", description: "HTML form for user input" },
  { tag: "<h1>–<h6>", description: "Headings from largest to smallest" },
  { tag: "<head>", description: "Document metadata" },
  { tag: "<header>", description: "Page or section header" },
  { tag: "<hr>", description: "Horizontal line (thematic break)" },
  { tag: "<html>", description: "Root element" },
  { tag: "<i>", description: "Italic text" },
  { tag: "<iframe>", description: "Inline frame" },
  { tag: "<img>", description: "Image" },
  { tag: "<input>", description: "Input field" },
  { tag: "<label>", description: "Label for form elements" },
  { tag: "<li>", description: "List item" },
  { tag: "<link>", description: "Defines relationship with external resource" },
  { tag: "<main>", description: "Main content" },
  { tag: "<meta>", description: "Meta information" },
  { tag: "<nav>", description: "Navigation links" },
  { tag: "<ol>", description: "Ordered list" },
  { tag: "<option>", description: "Option in a drop-down" },
  { tag: "<p>", description: "Paragraph" },
  { tag: "<pre>", description: "Preformatted text" },
  { tag: "<script>", description: "Embeds JavaScript" },
  { tag: "<section>", description: "Section of content" },
  { tag: "<span>", description: "Inline container" },
  { tag: "<strong>", description: "Important text" },
  { tag: "<style>", description: "Internal CSS" },
  { tag: "<table>", description: "Table" },
  { tag: "<td>", description: "Table cell" },
  { tag: "<textarea>", description: "Multiline text input" },
  { tag: "<th>", description: "Table header cell" },
  { tag: "<title>", description: "Document title" },
  { tag: "<tr>", description: "Table row" },
  { tag: "<ul>", description: "Unordered list" },
  { tag: "<video>", description: "Embeds video" },
];

const HtmlTagList = () => {
  return (
    <div className="max-w-4xl px-4 py-8">
      <h2 className="text-3xl font-medium mb-4  text-blue-500">HTML Tag Reference</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm border border-gray-200 rounded-md">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="p-3 border-b">Tag</th>
              <th className="p-3 border-b">Description</th>
            </tr>
          </thead>
          <tbody>
            {htmlTags.map((tag, index) => (
              <tr
                key={index}
                className={`border-b hover:bg-gray-50 ${
                  index % 2 === 0 ? "bg-white" : "bg-gray-50"
                }`}
              >
                <td className="p-3 font-mono text-blue-600">{tag.tag}</td>
                <td className="p-3">{tag.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HtmlTagList;