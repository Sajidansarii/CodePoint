export default function CssSyntax() {
  return (
    <div className="p-6 max-w-4xl">
      <h1 className="text-3xl font-medium text-blue-500 mb-4">CSS Syntax</h1>
      <p>In this tutorial you will learn how to define CSS rules in your stylesheet.</p>
      <h2 className="text-2xl text-blue-500 mt-5 mb-5">Understanding CSS Syntax</h2>
      <p>A CSS stylesheet consists of a set of rules that are interpreted by the web browser and then applied to the corresponding elements such as paragraphs, headings, etc. in the document</p>
      <p className="mb-4">
        A CSS rule consists of a <b>selector</b> and a <b>declaration block</b>. 
        Each declaration has a <b>property</b> and a <b>value</b>.
      </p>
      <p>Whereas, the declarations within the block determines how the elements are formatted on a webpage. Each declaration consists of a property and a value separated by a colon (:) and ending with a semicolon (;), and the declaration groups are surrounded by curly braces {}.</p>
      <p>The property is the style attribute you want to change; they could be font, color, background, etc. Each property has a value, for example color property can have value either blue or #0000FF etc.</p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Basic Syntax</h2>
      <pre className="bg-gray-200 p-4 rounded-lg overflow-x-auto">
        <code>{`selector {
  property: value;
}`}</code>
      </pre>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Example</h2>
      <pre className="bg-gray-200 p-4 rounded-lg overflow-x-auto">
        <code>{`h1 {
  color: blue;
  font-size: 24px;
}`}</code>
      </pre>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Demo</h2>
      <h1 className="text-blue-600 text-2xl mb-4">This is a styled H1</h1>
      <p className="text-green-600 text-center font-bold">
        This is a styled paragraph.
      </p>
      <p>To make the CSS more readable, you can put one declaration on each line, like this:</p>
      <p>In the example above h1 is a selector, color and text-align are the CSS properties, and the given blue and center are the corresponding values of these properties.</p>
    </div>
  );
}