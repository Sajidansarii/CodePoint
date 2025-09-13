export default function CssFont() {
  return (
    <div className="p-6 max-w-5xl">
      <h1 className="text-3xl font-medium text-blue-500 mb-4">CSS Fonts</h1>
      <p className="mb-4">
        CSS provides a set of <b>font properties</b> to control the size, style, 
        weight, family, and spacing of text.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Example</h2>
      <pre className="bg-gray-200 p-4 rounded-lg overflow-x-auto">
        <code>{`p {
  font-family: "Times New Roman", Times, serif;
  font-size: 20px;
  font-style: italic;
  font-weight: bold;
  font-variant: small-caps;
  line-height: 1.8;
}`}</code>
      </pre>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Demo</h2>
      <div className="space-y-4">
        <p className="font-serif text-xl italic font-bold">This is bold italic serif text</p>
        <p className="font-sans text-lg font-light">This is light sans-serif text</p>
        <p className="font-mono uppercase tracking-wide">This is monospaced text</p>
      </div>
    </div>
  );
}