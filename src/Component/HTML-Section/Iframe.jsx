const HTMLIFrame = () => {
  return (
    <div className="p-4 sm:p-6 md:p-8 max-w-4xl">
      {/* Title */}
      <h1 className="text-3xl sm:text-4xl font-medium text-blue-500 mb-4 text-center sm:text-left">
        HTML &lt;iframe&gt; Element
      </h1>

      {/* Intro */}
      <p className="leading-relaxed mb-3">
        The <code>&lt;iframe&gt;</code> tag embeds another HTML page inside the current page. It creates a window to display external content like videos, maps, or other websites.
      </p>

      {/* Basic Syntax */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-2">Basic Syntax</h2>
       <pre className="bg-gray-100 p-3 rounded-md overflow-x-auto max-w-full whitespace-pre-wrap mb-3 text-sm">
  <code>
    <span className="text-gray-500">&lt;</span>
    <span className="text-blue-600">iframe</span>

    <span className="text-red-500"> src</span>=
    <span className="text-green-600">"https://example.com"</span>

    <span className="text-red-500"> title</span>=
    <span className="text-green-600">"Example site"</span>

    <span className="text-gray-500">&gt;</span>

    <span className="text-gray-500">&lt;/</span>
    <span className="text-blue-600">iframe</span>
    <span className="text-gray-500">&gt;</span>
  </code>
</pre>
        <p className="leading-relaxed mb-3">
          <code>src</code> defines the URL to embed. Always include a <code>title</code> for accessibility.
        </p>
      </section>

      {/* Common Attributes */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-2">Common Attributes</h2>
        <ul className="list-disc pl-5 space-y-1 leading-relaxed">
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
        <p className="leading-relaxed mb-3">
          To make an iframe responsive, wrap it in a container that maintains aspect ratio.
        </p>
      <pre className="bg-gray-100 p-3 rounded-md overflow-x-auto max-w-full whitespace-pre-wrap mb-5 text-sm">
  <code>
    <span className="text-gray-500">&lt;</span>
    <span className="text-blue-600">div</span>

    <span className="text-red-500"> style</span>=
    <span className="text-green-600">"position:relative; padding-top:56.25%;"</span>

    <span className="text-gray-500">&gt;</span>
    <br/>

    <span className="text-gray-500">&nbsp;&nbsp;&lt;</span>
    <span className="text-blue-600">iframe</span>
    <br/>

    <span className="text-red-500">&nbsp;&nbsp;&nbsp;&nbsp;src</span>=
    <span className="text-green-600">"https://www.youtube.com/embed/dQw4w9WgXcQ"</span>
    <br/>

    <span className="text-red-500">&nbsp;&nbsp;&nbsp;&nbsp;title</span>=
    <span className="text-green-600">"YouTube video"</span>
    <br/>

    <span className="text-red-500">&nbsp;&nbsp;&nbsp;&nbsp;style</span>=
    <span className="text-green-600">"position:absolute; top:0; left:0; width:100%; height:100%; border:0;"</span>
    <br/>

    <span className="text-red-500">&nbsp;&nbsp;&nbsp;&nbsp;loading</span>=
    <span className="text-green-600">"lazy"</span>
    <br/>

    <span className="text-red-500">&nbsp;&nbsp;&nbsp;&nbsp;allowfullscreen</span>
    <br/>

    <span className="text-gray-500">&nbsp;&nbsp;&gt;&lt;/</span>
    <span className="text-blue-600">iframe</span>
    <span className="text-gray-500">&gt;</span>
    <br/>

    <span className="text-gray-500">&lt;/</span>
    <span className="text-blue-600">div</span>
    <span className="text-gray-500">&gt;</span>
  </code>
</pre>
        <p className="leading-relaxed mt-3">
          The <code>padding-top:56.25%</code> keeps a 16:9 aspect ratio.
        </p>
      </section>

      {/* Security: sandbox */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-2">Security with <code>sandbox</code></h2>
        <p className="leading-relaxed mb-3">
          The <code>sandbox</code> attribute restricts what the embedded content can do. Without values, it applies many restrictions.
        </p>
      <pre className="bg-gray-100 p-3 rounded-md overflow-x-auto max-w-full whitespace-pre-wrap mb-5 text-sm">
  <code>
    <span className="text-gray-500">&lt;</span>
    <span className="text-blue-600">iframe</span>
    <br/>

    <span className="text-red-500">&nbsp;&nbsp;src</span>=
    <span className="text-green-600">"https://example.com"</span>
    <br/>

    <span className="text-red-500">&nbsp;&nbsp;title</span>=
    <span className="text-green-600">"Sandboxed content"</span>
    <br/>

    <span className="text-red-500">&nbsp;&nbsp;sandbox</span>
    <br/>

    <span className="text-gray-500">&gt;&lt;/</span>
    <span className="text-blue-600">iframe</span>
    <span className="text-gray-500">&gt;</span>
  </code>
</pre>
        <p className="leading-relaxed mb-2">
          You can allow specific features:
        </p>
       <pre className="bg-gray-100 p-3 rounded-md overflow-x-auto max-w-full whitespace-pre-wrap mb-5 text-sm">
  <code>
    <span className="text-gray-500">&lt;</span>
    <span className="text-blue-600">iframe</span>
    <br/>

    <span className="text-red-500">&nbsp;&nbsp;src</span>=
    <span className="text-green-600">"https://example.com"</span>
    <br/>

    <span className="text-red-500">&nbsp;&nbsp;title</span>=
    <span className="text-green-600">"Limited"</span>
    <br/>

    <span className="text-red-500">&nbsp;&nbsp;sandbox</span>=
    <span className="text-green-600">"allow-scripts allow-same-origin"</span>
    <br/>

    <span className="text-gray-500">&gt;&lt;/</span>
    <span className="text-blue-600">iframe</span>
    <span className="text-gray-500">&gt;</span>
  </code>
</pre>
        <p className="text-gray-700">
          Common sandbox tokens include <code>allow-scripts</code>, <code>allow-forms</code>, <code>allow-same-origin</code>.
        </p>
      </section>

      {/* Accessibility */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-2">Accessibility Tips</h2>
        <ul className="list-disc pl-5 space-y-1 leading-relaxed">
          <li>Always include a descriptive <code>title</code> attribute.</li>
          <li>Provide fallback content inside the iframe tag for very old browsers:</li>
        </ul>
       <pre className="bg-gray-100 p-3 rounded-md overflow-x-auto max-w-full whitespace-pre-wrap mb-5 text-sm">
  <code>
    <span className="text-gray-500">&lt;</span>
    <span className="text-blue-600">iframe</span>

    <span className="text-red-500"> src</span>=
    <span className="text-green-600">"https://example.com"</span>

    <span className="text-red-500"> title</span>=
    <span className="text-green-600">"Example"</span>

    <span className="text-gray-500">&gt;</span>
    <br/>

    <span className="text-gray-700">
      &nbsp;&nbsp;Your browser does not support iframes.
    </span>
    <br/>

    <span className="text-gray-500">&lt;/</span>
    <span className="text-blue-600">iframe</span>
    <span className="text-gray-500">&gt;</span>
  </code>
</pre>
      </section>

      {/* Common Mistakes */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-2">Common Mistakes</h2>
        <ul className="list-disc pl-5 space-y-1 leading-relaxed">
          <li>Omitting the <code>title</code> (hurts accessibility).</li>
          <li>Embedding untrusted content without sandboxing.</li>
          <li>Hardcoding width/height without responsiveness.</li>
          <li>Not using lazy loading for offscreen iframes.</li>
        </ul>
      </section>

      {/* Example: Embed YouTube */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-2">YouTube Embed Example</h2>
        
          <pre className="bg-gray-100 p-3 rounded-md overflow-x-auto max-w-full whitespace-pre-wrap mb-5 text-sm">
  <code>
    <span className="text-gray-500">&lt;</span>
    <span className="text-blue-600">iframe</span>
    <br/>

    <span className="text-red-500">&nbsp;&nbsp;src</span>=
    <span className="text-green-600">"https://www.youtube.com/embed/https://www.youtube.com</span>
    <br/>
    <span className="text-green-600">&nbsp;&nbsp;/watch?v=kUMe1FH4CHE&</span>
    <br/>
    <span className="text-green-600">&nbsp;&nbsp;list=PLWKjhJtqVAbnSe1qUNMG7AbPmjIG54u88"</span>
    <br/>

    <span className="text-red-500">&nbsp;&nbsp;title</span>=
    <span className="text-green-600">"YouTube video"</span>
    <br/>

    <span className="text-red-500">&nbsp;&nbsp;loading</span>=
    <span className="text-green-600">"lazy"</span>
    <br/>

    <span className="text-red-500">&nbsp;&nbsp;allowFullScreen</span>
    <br/>

    <span className="text-gray-500">&gt;&lt;/</span>
    <span className="text-blue-600">iframe</span>
    <span className="text-gray-500">&gt;</span>
  </code>
</pre>
        
        <p className="leading-relaxed mb-3">
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
        <ul className="list-disc pl-5 space-y-1 leading-relaxed text-sm sm:text-base">
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