const HTMLEmoji = () => {
  return (
    <div className="p-4 max-w-4xl">
      {/* Title */}
      <h1 className="text-3xl sm:text-4xl font-medium text-blue-500 mb-4 text-center sm:text-left">
        Emoji in HTML
      </h1>

      {/* Intro */}
      <p className="leading-relaxed mb-3">
        Emojis are pictographic characters (like 😊, 🚀, ❤) used to add emotion, clarity, or visual flavor to content. In HTML you can use them directly, via Unicode, or with accessibility support to ensure everyone understands their meaning.
      </p>

      {/* Basic Usage */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-2">Basic Usage</h2>
        <p className="leading-relaxed mb-3">
          You can simply paste emojis into your HTML text. Browsers and devices render the platform’s emoji style.
        </p>
        <pre className="bg-gray-900 p-4 rounded-lg text-green-400 mb-2 overflow-x-auto text-sm">
          <code>{<p>Welcome to CodePoint! 🎉</p>}</code>
        </pre>
        <p className="leading-relaxed mb-3">
          Emojis are Unicode characters. They work in any place where text is allowed.
        </p>
      </section>

      {/* Unicode Code Points */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-2">Using Unicode Code Points</h2>
        <p className="leading-relaxed mb-3">
          Instead of pasting the emoji, you can use its Unicode reference with an HTML numeric entity.
        </p>
        <pre className="bg-gray-900 p-4 rounded-lg text-green-400 mb-2 overflow-x-auto text-sm">
          <code>{'<p>Happy coding! &#x1F600; <!-- grinning face --> </p>'}</code>
        </pre>
        <p className="leading-relaxed mb-3">
          Decimal form also works: <code>&amp;#128512;</code> is the same as <code>&amp;#x1F600;</code>.
        </p>
      </section>

      {/* Accessibility */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-2">Accessibility</h2>
        <p className="leading-relaxed mb-3">
          Screen readers may not interpret emojis consistently. Use <code>aria-label</code> or visually hidden text to clarify meaning when the emoji conveys important information.
        </p>
        <pre className="bg-gray-900 p-4 rounded-lg text-green-400 mb-2 overflow-x-auto text-sm">
          <code>{`<p>
  Success! <span role="img" aria-label="check mark">✅</span>
</p>`}</code>
        </pre>
        <p className="leading-relaxed mb-3">
          If the emoji is purely decorative, you can omit the label or use <code>aria-hidden="true"</code>.
        </p>
      </section>

      {/* Presentation Variations */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-2">Emoji Presentation</h2>
        <p className="leading-relaxed mb-3">
          Some emojis have text vs emoji presentation variants. You can force emoji style using a variation selector:
        </p>
        <pre className="bg-gray-900 p-4 rounded-lg text-green-400 mb-2 overflow-x-auto text-sm">
          <code>{`❤\uFE0F  <!-- heart with emoji presentation -->
# vs
❤\uFE0E  <!-- heart with text presentation -->`}</code>
        </pre>
        <p className="leading-relaxed mb-3">
          Most modern platforms show emoji style by default, but variation selectors give control when needed.
        </p>
      </section>

      {/* Fallback & Cross-Platform */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-2">Fallback & Cross-Platform</h2>
        <p className="leading-relaxed mb-3">
          Emojis render using the device’s emoji font. Appearance may differ across platforms (Windows, macOS, Android). If you need a consistent look, consider using an image or SVG fallback.
        </p>
        <p className="leading-relaxed mb-3">
          Example fallback pattern:
        </p>
        <pre className="bg-gray-900 p-4 rounded-lg text-green-400 mb-2 overflow-x-auto text-sm">
          <code>{`<p>
  <span aria-hidden="true">🔥</span>
  <span className="sr-only">Fire</span>
</p>`}</code>
        </pre>
      </section>

      {/* Common Emoji Examples */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-2">Common Emoji Examples</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 leading-relaxed">
          <div>
            <p className="mb-1"><span role="img" aria-label="thumbs up">👍</span> Thumbs Up</p>
            <code className="block bg-gray-100 p-1 rounded text-sm">{'👍'}</code>
          </div>
          <div>
            <p className="mb-1"><span role="img" aria-label="rocket">🚀</span> Rocket</p>
            <code className="block bg-gray-100 p-1 rounded text-sm">{'🚀'}</code>
          </div>
          <div>
            <p className="mb-1"><span role="img" aria-label="sparkles">✨</span> Sparkles</p>
            <code className="block bg-gray-100 p-1 rounded text-sm">{'✨'}</code>
          </div>
          <div>
            <p className="mb-1"><span role="img" aria-label="warning">⚠</span> Warning</p>
            <code className="block bg-gray-100 p-1 rounded text-sm">{'⚠'}</code>
          </div>
          <div>
            <p className="mb-1"><span role="img" aria-label="heart">❤</span> Heart</p>
            <code className="block bg-gray-100 p-1 rounded text-sm">{'❤'}</code>
          </div>
          <div>
            <p className="mb-1"><span role="img" aria-label="laptop">💻</span> Laptop</p>
            <code className="block bg-gray-100 p-1 rounded text-sm">{'💻'}</code>
          </div>
        </div>
      </section>

      {/* Best Practices */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-2">Best Practices</h2>
        <ul className="list-disc pl-5 space-y-1 leading-relaxed">
          <li>Use emojis to enhance meaning, not replace clear text.</li>
          <li>Provide accessible labels when emoji conveys information.</li>
          <li>Avoid overusing emojis; too many can reduce readability.</li>
          <li>Test appearance on multiple platforms if visual consistency matters.</li>
        </ul>
      </section>

      {/* Quick Recap */}
      <div className="mt-6 p-4 bg-blue-50 rounded-md border border-blue-200">
        <h3 className="text-lg font-semibold text-blue-700 mb-2">Quick Recap:</h3>
        <ul className="list-disc pl-5 space-y-1 leading-relaxed text-sm sm:text-base">
          <li>Emoji are Unicode characters and can be used directly in HTML.</li>
          <li>Use <code>aria-label</code> or hidden text for accessibility if needed.</li>
          <li>Variation selectors control presentation (emoji vs text).</li>
          <li>Appearance varies across platforms; fallback strategies help.</li>
        </ul>
      </div>
    </div>
  );
};

export default HTMLEmoji;