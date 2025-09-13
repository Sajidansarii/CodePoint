export default function CssColors() {
  return (
    <div className="p-6 max-w-3xl">
      <h1 className="text-3xl font-medium mb-4 text-blue-600">CSS Colours</h1>
      <p className="mb-4">
        In CSS, colours can be defined using <strong>names</strong>,{" "}
        <strong>HEX</strong>, <strong>RGB</strong>, <strong>RGBA</strong>,{" "}
        <strong>HSL</strong>, and <strong>HSLA</strong> formats.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Example</h2>
      <pre className="bg-gray-200  p-4 rounded-lg overflow-x-auto">
        <code>{`h1 { color: blue; }
p { color: #ff0000; }
div { color: rgba(0, 128, 0, 0.7); }`}</code>
      </pre>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Demo</h2>
      <div className="space-y-2 p-4 border rounded-lg">
        <p className="text-red-500">This text uses Color Name (red)</p>
        <p style={{ color: "#00ff00" }}>This text uses HEX (#00ff00)</p>
        <p style={{ color: "rgb(0, 0, 255)" }}>This text uses RGB (blue)</p>
        <p style={{ color: "rgba(255, 0, 0, 0.6)" }}>
          This text uses RGBA (semi-transparent red)
        </p>
        <p style={{ color: "hsl(200, 100%, 50%)" }}>
          This text uses HSL (blue)
        </p>
      </div>
    </div>
  );
}