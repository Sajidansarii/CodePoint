export default function CssMargin() {
  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-green-600">CSS Margin</h1>
      <p className="mb-4">
        The <code>margin</code> property controls the space outside an element’s
        border. It separates elements from one another.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Example</h2>
      <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto">
        <code>{`div {
  border: 2px solid blue;
  margin: 20px;
}`}</code>
      </pre>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Demo</h2>
      <div className="mt-4">
        <div className="border-2 border-blue-500 m-4">
          Margin: <b>16px</b>
        </div>
        <div className="border-2 border-green-500 my-6 mx-12">
          Margin: <b>top-bottom: 24px, left-right: 48px</b>
        </div>
        <div className="border-2 border-red-500 mt-8 mr-4 mb-2 ml-10">
          Margin: <b>top: 32px, right: 16px, bottom: 8px, left: 40px</b>
        </div>
        <div className="border-2 border-purple-500 w-1/2 mx-auto text-center">
          Margin: <b>auto (centered)</b>
        </div>
      </div>
    </div>
  );
}