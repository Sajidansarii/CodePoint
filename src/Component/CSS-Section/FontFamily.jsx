export default function CssFontFamily() {
  return (
    <div className="p-6 max-w-4xl space-y-6 mt-10">
      <h1 className="text-3xl font-medium mb-4 text-blue-500">CSS Font Family</h1>
      <p className="mb-4">
        The <code>font-family</code> property defines which font will be used for
        text. You can specify multiple fonts with fallbacks to ensure proper
        rendering across devices.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Example</h2>
     <pre className="bg-gray-200 p-4 rounded-lg overflow-x-auto max-w-full whitespace-pre-wrap">
  <code>
    <span className="text-blue-600">p.serif</span> <span>{'{'}</span><br />
    &nbsp;&nbsp;<span className="text-red-500">font-family</span>: <span className="text-green-700">"Times New Roman", serif</span>;<br />
    <span>{'}'}</span><br /><br />

    <span className="text-blue-600">p.sans</span> <span>{'{'}</span><br />
    &nbsp;&nbsp;<span className="text-red-500">font-family</span>: <span className="text-green-700">Arial, Helvetica, sans-serif</span>;<br />
    <span>{'}'}</span><br /><br />

    <span className="text-blue-600">p.mono</span> <span>{'{'}</span><br />
    &nbsp;&nbsp;<span className="text-red-500">font-family</span>: <span className="text-green-700">"Courier New", monospace</span>;<br />
    <span>{'}'}</span>
  </code>
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