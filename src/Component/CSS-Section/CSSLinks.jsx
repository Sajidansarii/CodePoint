export default function CssLinks() {

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold text-indigo-600 mb-4">CSS Links</h1>
      <p className="mb-4">
        Links in HTML can be styled using CSS pseudo-classes like{" "}
        <code>a:link</code>, <code>a:visited</code>, <code>a:hover</code>, and{" "}
        <code>a:active</code>.
      </p>

      <div className="space-y-4">
        <a
          href="https://www.codepoint.com"
          className="text-blue-600 hover:text-red-500 visited:text-purple-600 active:text-green-600 underline"
        >
          Visit CodePoint
        </a>

        <br />
        <a href="#" className="inline-block bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 no-underline">
          Styled Button Link
        </a>
      </div>
    </div>
  );
}