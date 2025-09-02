export default function CssText() {
  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold text-indigo-600 mb-4">CSS Text</h1>
      <p className="mb-4">
        CSS provides a variety of <b>text properties</b> that let you control 
        alignment, decoration, spacing, capitalization, and more.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Example</h2>
      <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto">
        <code>{`p {
  color: blue;
  text-align: center;
  text-decoration: underline;
  text-transform: capitalize;
  letter-spacing: 2px;
  word-spacing: 10px;
  line-height: 1.8;
}`}</code>
      </pre>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Demo</h2>
      <div className="space-y-4">
        <p className="text-blue-600 text-center underline capitalize tracking-wider">
          this is an example of styled text
        </p>
        <p className="text-red-500 line-through text-right">
          This text is right aligned and struck-through
        </p>
        <p className="text-green-600 uppercase whitespace-nowrap">
          this text is uppercase and nowrap
        </p>
      </div>
    </div>
  );
}