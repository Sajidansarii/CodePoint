export default function CssPadding() {
  return (
    <div className="p-6 max-w-3xl">
      <h1 className="text-3xl font-medium mb-4 text-blue-500">CSS Padding</h1>
      <p className="mb-4">
        The <code>padding</code> property adds space inside an element,
        between the content and the border.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Example</h2>
      <pre className="bg-gray-200  p-4 rounded-lg overflow-x-auto">
        <code>{`div {
  border: 2px solid blue;
  padding: 20px;
}`}</code>
      </pre>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Demo</h2>
      <div className="mt-4">
        <div className="border-2 border-blue-500 p-4 mb-4">
          Padding: <b>20px</b>
        </div>
        <div className="border-2 border-green-500 px-10 py-4 mb-4">
          Padding: <b>top-bottom: 16px, left-right: 40px</b>
        </div>
        <div className="border-2 border-red-500 pt-6 pr-4 pb-2 pl-8">
          Padding: <b>top: 24px, right: 16px, bottom: 8px, left: 32px</b>
        </div>
      </div>
    </div>
  );
}