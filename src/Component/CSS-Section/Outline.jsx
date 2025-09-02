export default function CssOutline() {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-purple-600 mb-4">CSS Outline</h1>
      <p className="mb-4">
        The <b>outline</b> is a line drawn <b>outside the element’s border</b>. 
        Unlike borders, outlines do not take up space and can be offset.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Example</h2>
      <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto">
        <code>{`button {
  outline: 3px dashed blue;
}`}</code>
      </pre>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Demo</h2>
      <div className="flex gap-6">
        <button className="px-4 py-2 bg-gray-200 border border-black outline outline-2 outline-red-500">
          Solid Outline
        </button>
        <button className="px-4 py-2 bg-gray-200 border border-black  outline-dashed outline-blue-500">
          Dashed Outline
        </button>
        <button className="px-4 py-2 bg-gray-200 border border-black outline outline-4 outline-green-500 outline-offset-4">
          Offset Outline
        </button>
      </div>
    </div>
  );
}