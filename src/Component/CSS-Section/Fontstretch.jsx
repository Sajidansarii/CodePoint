export default function CssFontStretch() {
  return (
    <div className="p-6 max-w-4xl space-y-6 mt-10">
      <h1 className="text-3xl font-medium mb-4 text-blue-500">CSS Font Stretch</h1>
      <p className="mb-4">
        The <code>font-stretch</code> property changes the width of the text.
        It allows text to be <strong>condensed</strong> (narrow) or{" "}
        <strong>expanded</strong> (wide), depending on font support.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Example</h2>
     <pre className="bg-gray-200 p-4 rounded-lg overflow-x-auto max-w-full whitespace-pre-wrap">
  <code>
    <span className="text-blue-600">p.normal</span> <span>{'{'}</span><br />
    &nbsp;&nbsp;<span className="text-red-500">font-stretch</span>: <span className="text-green-700">normal</span>;<br />
    <span>{'}'}</span><br /><br />

    <span className="text-blue-600">p.expanded</span> <span>{'{'}</span><br />
    &nbsp;&nbsp;<span className="text-red-500">font-stretch</span>: <span className="text-green-700">expanded</span>;<br />
    <span>{'}'}</span><br /><br />

    <span className="text-blue-600">p.condensed</span> <span>{'{'}</span><br />
    &nbsp;&nbsp;<span className="text-red-500">font-stretch</span>: <span className="text-green-700">condensed</span>;<br />
    <span>{'}'}</span>
  </code>
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