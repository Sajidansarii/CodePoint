export default function CssHeightWidth() {
  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-green-600">CSS Height and Width</h1>
      <p className="mb-4">
        The <code>height</code> and <code>width</code> properties define how tall and wide an element is.
        You can use values like <b>px</b>, <b>%</b>, <b>vh</b>, <b>vw</b>, or <b>auto</b>.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Example</h2>
      <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto">
        <code>{`div {
  height: 200px;
  width: 300px;
  border: 2px solid blue;
}`}</code>
      </pre>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Demo</h2>
      <div className="mt-4 space-y-4">
        <div className="border-2 border-blue-500 h-24 w-48 flex items-center justify-center">
          200px × 300px
        </div>
        <div className="border-2 border-green-500 h-32 w-1/2 flex items-center justify-center">
          50% width
        </div>
        <div className="border-2 border-red-500 min-h-[50px] max-h-[150px] overflow-auto">
          <p>
            This div has <b>min-height: 50px</b> and <b>max-height: 150px</b>.
            If content grows more, it scrolls inside.
          </p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <p>Scroll me if content is more...</p>
        </div>
      </div>
    </div>
  );
}