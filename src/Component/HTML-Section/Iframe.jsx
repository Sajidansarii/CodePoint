const HTMLIFrame = () => {
  return (
    <div className="p-4 max-w-3xl">
      {/* Title */}
      <h1 className="text-3xl sm:text-4xl font-bold text-blue-600 mb-4 text-center sm:text-left">
        HTML &lt;iframe&gt; Element
      </h1>

      {/* Intro */}
      <p className="text-gray-700 mb-4">
        The <code>&lt;iframe&gt;</code> tag embeds another HTML page inside the current page. It creates a window to display external content like videos, maps, or other websites.
      </p>

      {/* Basic Syntax */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-2">Basic Syntax</h2>
        <pre className="bg-gray-100 p-3 rounded mb-2 overflow-x-auto text-sm">
          <code>{'<iframe src="https://example.com" title="Example site"></iframe>'}</code>
        </pre>
        <p className="text-gray-700">
          <code>src</code> defines the URL to embed. Always include a <code>title</code> for accessibility.
        </p>
      </section>

      {/* Common Attributes */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-2">Common Attributes</h2>
        <ul className="list-disc pl-5 space-y-1 text-gray-700">
          <li>
            <code>src</code> — URL of the page to embed.
          </li>
          <li>
            <code>title</code> — Describes the content for screen readers.
          </li>
          <li>
            <code>width</code> / <code>height</code> — Size of the iframe.
          </li>
          <li>
            <code>loading="lazy"</code> — Defers loading until near viewport for performance.
          </li>
          <li>
            <code>frameborder="0"</code> — (Deprecated) historically removed border; use CSS instead.
          </li>
          <li>
            <code>allowfullscreen</code> — Allows embedded content (like video) to go full-screen.
          </li>
        </ul>
      </section>

      {/* Responsive Embed */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-2">Responsive Embed</h2>
        <p className="text-gray-700 mb-2">
          To make an iframe responsive, wrap it in a container that maintains aspect ratio.
        </p>
        <pre className="bg-gray-100 p-3 rounded mb-2 overflow-x-auto text-sm">
          <code>{`<div style="position:relative; padding-top:56.25%;">
  <iframe 
    src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
    title="YouTube video" 
    style="position:absolute; top:0; left:0; width:100%; height:100%; border:0;" 
    loading="lazy"
    allowfullscreen
  ></iframe>
</div>`}</code>
        </pre>
        <p className="text-gray-700">
          The <code>padding-top:56.25%</code> keeps a 16:9 aspect ratio.
        </p>
      </section>

      {/* Security: sandbox */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-2">Security with <code>sandbox</code></h2>
        <p className="text-gray-700 mb-2">
          The <code>sandbox</code> attribute restricts what the embedded content can do. Without values, it applies many restrictions.
        </p>
        <pre className="bg-gray-100 p-3 rounded mb-2 overflow-x-auto text-sm">
          <code>{`<iframe 
  src="https://example.com" 
  title="Sandboxed content" 
  sandbox
></iframe>`}</code>
        </pre>
        <p className="text-gray-700 mb-2">
          You can allow specific features:
        </p>
        <pre className="bg-gray-100 p-3 rounded mb-2 overflow-x-auto text-sm">
          <code>{`<iframe 
  src="https://example.com" 
  title="Limited" 
  sandbox="allow-scripts allow-same-origin"
></iframe>`}</code>
        </pre>
        <p className="text-gray-700">
          Common sandbox tokens include <code>allow-scripts</code>, <code>allow-forms</code>, <code>allow-same-origin</code>.
        </p>
      </section>

      {/* Accessibility */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-2">Accessibility Tips</h2>
        <ul className="list-disc pl-5 space-y-1 text-gray-700">
          <li>Always include a descriptive <code>title</code> attribute.</li>
          <li>Provide fallback content inside the iframe tag for very old browsers:</li>
        </ul>
        <pre className="bg-gray-100 p-3 rounded mb-2 overflow-x-auto text-sm">
          <code>{`<iframe src="https://example.com" title="Example">
  Your browser does not support iframes.
</iframe>`}</code>
        </pre>
      </section>

      {/* Common Mistakes */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-2">Common Mistakes</h2>
        <ul className="list-disc pl-5 space-y-1 text-gray-700">
          <li>Omitting the <code>title</code> (hurts accessibility).</li>
          <li>Embedding untrusted content without sandboxing.</li>
          <li>Hardcoding width/height without responsiveness.</li>
          <li>Not using lazy loading for offscreen iframes.</li>
        </ul>
      </section>

      {/* Example: Embed YouTube */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-2">YouTube Embed Example</h2>
        
            <pre className="bg-gray-100 p-3 rounded mb-2 overflow-x-auto text-sm">
             <code>
            {`<iframe
            src="https://www.youtube.com/embed/https://www.youtube.com
            /watch?v=kUMe1FH4CHE&
            list=PLWKjhJtqVAbnSe1qUNMG7AbPmjIG54u88" 
            title="YouTube video"
            loading="lazy"
            allowFullScreen
            ></iframe>`}
            </code>
            </pre>
        
        <p className="text-gray-700 mb-2">
          A responsive YouTube video:
        </p>
        <div className="relative" style={{ paddingTop: "56.25%" }}>
          <iframe
            src="https://www.youtube.com/embed/https://www.youtube.com/watch?v=kUMe1FH4CHE&list=PLWKjhJtqVAbnSe1qUNMG7AbPmjIG54u88" 
            title="YouTube video"
            style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: 0 }}
            loading="lazy"
            allowFullScreen
          ></iframe>
        </div>
      </section>

      {/* Quick Recap */}
      <div className="mt-6 p-4 bg-blue-50 rounded-md border border-blue-200">
        <h3 className="text-lg font-semibold text-blue-700 mb-2">Quick Recap:</h3>
        <ul className="list-disc pl-5 space-y-1 text-gray-700 text-sm sm:text-base">
          <li><code>&lt;iframe&gt;</code> embeds another webpage inside the current one.</li>
          <li>Always include <code>title</code> for accessibility and use <code>loading="lazy"</code> for performance.</li>
          <li>Use <code>sandbox</code> to restrict embedded content for security.</li>
          <li>Wrap in a responsive container to maintain aspect ratio.</li>
        </ul>
      </div>
    </div>
  );
};

export default HTMLIFrame;