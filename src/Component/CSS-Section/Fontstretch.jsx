export default function CssFontStretch() {
  return (
    <div className="p-6 max-w-3xl">
      <h1 className="text-3xl font-bold mb-4 text-blue-600">CSS Font Stretch</h1>
      <p className="mb-4">
        The <code>font-stretch</code> property changes the width of the text.
        It allows text to be <strong>condensed</strong> (narrow) or{" "}
        <strong>expanded</strong> (wide), depending on font support.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Example</h2>
      <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto">
        <code>{`p.normal {
  font-stretch: normal;
}

p.expanded {
  font-stretch: expanded;
}

p.condensed {
  font-stretch: condensed;
}`}</code>
      </pre>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Demo</h2>
      <div className="space-y-2 p-4 border rounded-lg">
        <p style={{ fontStretch: "normal" }}>This is normal text.</p>
        <p style={{ fontStretch: "expanded" }}>This is expanded text.</p>
        <p style={{ fontStretch: "condensed" }}>This is condensed text.</p>
      </div>
    </div>
  );
}