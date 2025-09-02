export default function CssFontWeight() {
  return (
    <div className="p-6 max-w-3xl">
      <h1 className="text-3xl font-bold mb-4 text-blue-600">CSS Font Weight</h1>
      <p className="mb-4">
        The <code>font-weight</code> property controls the thickness of the
        characters in text. You can use keywords like <code>normal</code>,{" "}
        <code>bold</code>, or numeric values (100–900).
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Example</h2>
      <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto">
        <code>{`p.normal {
  font-weight: normal;
}

p.bold {
  font-weight: bold;
}

p.light {
  font-weight: 300;
}

p.heavy {
  font-weight: 900;
}`}</code>
      </pre>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Demo</h2>
      <div className="space-y-2 p-4 border rounded-lg">
        <p className="font-normal">This text is normal (400).</p>
        <p className="font-bold">This text is bold (700).</p>
        <p className="font-light">This text is light (300).</p>
        <p className="font-extrabold">This text is extra bold (800).</p>
      </div>
    </div>
  );
}