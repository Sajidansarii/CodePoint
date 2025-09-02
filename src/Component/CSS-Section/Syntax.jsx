export default function CssSyntax() {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-green-600 mb-4">CSS Syntax</h1>
      <p className="mb-4">
        A CSS rule consists of a <b>selector</b> and a <b>declaration block</b>. 
        Each declaration has a <b>property</b> and a <b>value</b>.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Basic Syntax</h2>
      <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto">
        <code>{`selector {
  property: value;
}`}</code>
      </pre>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Example</h2>
      <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto">
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
    </div>
  );
}