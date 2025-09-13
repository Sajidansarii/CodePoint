export default function CssFontFamily() {
  return (
    <div className="p-6 max-w-3xl">
      <h1 className="text-3xl font-medium mb-4 text-blue-500">CSS Font Family</h1>
      <p className="mb-4">
        The <code>font-family</code> property defines which font will be used for
        text. You can specify multiple fonts with fallbacks to ensure proper
        rendering across devices.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Example</h2>
      <pre className="bg-gray-200  p-4 rounded-lg overflow-x-auto">
        <code>{`p.serif {
  font-family: "Times New Roman", serif;
}

p.sans {
  font-family: Arial, Helvetica, sans-serif;
}

p.mono {
  font-family: "Courier New", monospace;
}`}</code>
      </pre>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Demo</h2>
      <div className="space-y-2 p-4 border rounded-lg">
        <p className="font-serif">This text is Serif (Times New Roman style).</p>
        <p className="font-sans">This text is Sans-serif (Arial style).</p>
        <p className="font-mono">This text is Monospace (Courier style).</p>
      </div>
    </div>
  );
}