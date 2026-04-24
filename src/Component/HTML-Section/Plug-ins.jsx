const HTMLPlugins = () => {
  return (
    <div className="p-4 sm:p-6 md:p-8 max-w-4xl">
      {/* Title */}
      <h1 className="text-3xl font-semibold text-blue-500 mb-3">
        Web Plug-ins
      </h1>

      {/* Intro */}
      <p className="leading-relaxed mb-3">
        Plugins (or third-party libraries/widgets) are reusable pieces of code you can plug into your website to add features—like carousels, rich-text editors, analytics, modals, tooltips, and more—without building them from scratch.
      </p>

      {/* Types of Plugins */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-3">
          1. Types of Plugins
        </h2>
        <ul className="list-[square] list-inside space-y-1 text-gray-700">
          <li>
            <strong>JavaScript plugins:</strong> UI widgets or behavior (e.g., sliders, date pickers).
          </li>
          <li>
            <strong>CSS/Styling plugins:</strong> Frameworks or themes that provide prebuilt styles.
          </li>
          <li>
            <strong>Analytics/tracking:</strong> Google Analytics, Hotjar—collect usage data.
          </li>
          <li>
            <strong>Editor plugins:</strong> Rich-text editors like TinyMCE, Quill, CKEditor.
          </li>
          <li>
            <strong>Build/tooling plugins:</strong> Bundler or framework extensions (e.g., Webpack plugins)—mostly used in development pipelines.
          </li>
        </ul>
      </section>

      {/* Inclusion Methods */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-3">
          2. How to Include Plugins
        </h2>

        <h3 className="text-xl font-semibold text-blue-400 mb-3">CDN / Script Tag</h3>
        <p className="leading-relaxed mb-3">
          Many plugins are available via CDN and can be added with a <code>&lt;script&gt;</code> or <code>&lt;link&gt;</code> tag.
        </p>
      <pre className="bg-gray-100 p-3 rounded-md overflow-x-auto max-w-full whitespace-pre-wrap mb-3 text-sm">
  <code>
    <span className="text-gray-500">&lt;!-- Example: include a carousel plugin --&gt;</span>
    <br/>

    <span className="text-gray-500">&lt;link</span>
    <span className="text-red-500"> rel</span>=
    <span className="text-green-600">"stylesheet"</span>
    <span className="text-red-500"> href</span>=
    <span className="text-green-600">"https://cdn.example.com/carousel.css"</span>
    <span className="text-gray-500"> /&gt;</span>
    <br/>

    <span className="text-gray-500">&lt;script</span>
    <span className="text-red-500"> src</span>=
    <span className="text-green-600">"https://cdn.example.com/carousel.min.js"</span>

    <span className="text-red-500"> defer</span>
    <span className="text-gray-500">&gt;&lt;/script&gt;</span>
  </code>
</pre>

        <h3 className="text-xl font-semibold text-blue-400 mb-3">Package Manager (npm/yarn)</h3>
        <p className="leading-relaxed mb-3">
          For modern projects, install plugins via npm and import them in your JavaScript.
        </p>
       <pre className="bg-gray-100 p-3 rounded-md overflow-x-auto max-w-full whitespace-pre-wrap mb-3 text-sm">
  <code>
    <span className="text-gray-500">// install</span>
    <br/>
    <span className="text-blue-600">npm install some-plugin</span>
    <br/><br/>

    <span className="text-gray-500">// usage in JS</span>
    <br/>

    <span className="text-purple-600">import</span>
    <span className="text-gray-800"> SomePlugin </span>
    <span className="text-purple-600">from</span>
    <span className="text-green-600"> 'some-plugin'</span>;
    <br/>

    <span className="text-blue-600">SomePlugin.init();</span>
  </code>
</pre>

        <h3 className="text-xl font-semibold text-blue-400 mb-3">Inline / Initialization</h3>
        <p className="leading-relaxed mb-3">
          After including, most plugins require initialization:
        </p>
       <pre className="bg-gray-100 p-3 rounded-md overflow-x-auto max-w-full whitespace-pre-wrap mb-3 text-sm">
  <code>
    <span className="text-gray-500">&lt;!-- HTML --&gt;</span>
    <br/>

    <span className="text-gray-500">&lt;div</span>
    <span className="text-red-500"> class</span>=
    <span className="text-green-600">"slider"</span>
    <span className="text-gray-500">&gt;...&lt;/div&gt;</span>

    <br/><br/>

    <span className="text-gray-500">&lt;!-- JavaScript (after plugin loaded) --&gt;</span>
    <br/>

    <span className="text-gray-500">&lt;script&gt;</span>
    <br/>

    <span className="text-purple-600">&nbsp;&nbsp;document.addEventListener</span>
    <span className="text-gray-700">('DOMContentLoaded', () =&gt; </span>
    <br/>

    <span className="text-blue-600">&nbsp;&nbsp;&nbsp;&nbsp;const slider = new Carousel('.slider', </span>
    <br/>

    <span className="text-red-500">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;autoplay</span>:
    <span className="text-green-600"> true</span>,
    <br/>

    <span className="text-blue-600">&nbsp;&nbsp;&nbsp;&nbsp;);</span>
    <br/>

    <span className="text-blue-600">&nbsp;&nbsp;&nbsp;&nbsp;slider.init();</span>
    <br/>

    <span className="text-gray-700">&nbsp;&nbsp;);</span>
    <br/>

    <span className="text-gray-500">&lt;/script&gt;</span>
  </code>
</pre>
      </section>

      {/* Example Plugins */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-3">
          3. Common Plugin Examples
        </h2>
        <ul className="list-[square] list-inside space-y-2 leading-relaxed">
          <li>
            <strong>Carousel / Slider:</strong> Rotate featured content (e.g., Splide, Swiper).
          </li>
          <li>
            <strong>Modal dialogs:</strong> Popup windows for confirmation or info.
          </li>
          <li>
            <strong>Rich text editor:</strong> Editable content areas (TinyMCE, Quill).
          </li>
          <li>
            <strong>Form validation:</strong> Client-side validation helpers.
          </li>
          <li>
            <strong>Analytics:</strong> Tracking page views, events (Google Analytics script).
          </li>
        </ul>
      </section>

      {/* Dependency & Order */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-3">
          4. Dependency & Load Order
        </h2>
        <p className="leading-relaxed mb-3">
          Some plugins depend on others (e.g., old jQuery plugins need jQuery loaded first). Always include dependencies in the correct order and initialize after the DOM and required scripts are ready.
        </p>
       <pre className="bg-gray-100 p-3 rounded-md overflow-x-auto max-w-full whitespace-pre-wrap mb-3 text-sm">
  <code>
    <span className="text-gray-500">&lt;!-- jQuery plugin example --&gt;</span>
    <br/>

    <span className="text-gray-500">&lt;script</span>
    <span className="text-red-500"> src</span>=
    <span className="text-green-600">"https://code.jquery.com/jquery.min.js"</span>
    <span className="text-gray-500">&gt;&lt;/script&gt;</span>
    <br/>

    <span className="text-gray-500">&lt;script</span>
    <span className="text-red-500"> src</span>=
    <span className="text-green-600">"https://cdn.example.com/jquery.plugin.js"</span>
    <span className="text-gray-500">&gt;&lt;/script&gt;</span>
    <br/>

    <span className="text-gray-500">&lt;script&gt;</span>
    <br/>

    <span className="text-blue-600">&nbsp;&nbsp;$</span>
    <span className="text-gray-700">(function() </span>
    <br/>

    <span className="text-purple-600">&nbsp;&nbsp;&nbsp;&nbsp;$('.tooltip')</span>
    <span className="text-blue-600">.plugin();</span>
    <br/>

    <span className="text-gray-700">&nbsp;&nbsp;);</span>
    <br/>

    <span className="text-gray-500">&lt;/script&gt;</span>
  </code>
</pre>
      </section>

      {/* Performance & Security */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-3">
          5. Performance & Security
        </h2>
        <ul className="list-[square] list-inside space-y-1 leading-relaxed">
          <li>
            <strong>Bundle size:</strong> Only include necessary plugins; large ones slow page load.
          </li>
          <li>
            <strong>Lazy load:</strong> Defer noncritical plugins until needed or after initial render.
          </li>
          <li>
            <strong>Trust source:</strong> Use official CDNs or vetted packages to avoid malicious code.
          </li>
          <li>
            <strong>Versioning:</strong> Lock plugin versions to prevent breaking changes; audit updates.
          </li>
          <li>
            <strong>Subresource Integrity (SRI):</strong> When using CDN scripts, include integrity attributes to ensure content hasn’t been tampered with.
          </li>
        </ul>
      </section>

      {/* Fallbacks & Graceful Degradation */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-3">
          6. Fallbacks & Graceful Degradation
        </h2>
        <p className="leading-relaxed mb-3">
          If a plugin fails to load, ensure the core functionality still works or provide a simple fallback. Avoid using plugins for critical features without fallback logic.
        </p>
      <pre className="bg-gray-100 p-3 rounded-md overflow-x-auto max-w-full whitespace-pre-wrap mb-3 text-sm">
  <code>
    <span className="text-gray-500">&lt;!-- Example: tooltips fallback --&gt;</span>
    <br/>

    <span className="text-gray-500">&lt;div</span>
    <span className="text-red-500"> class</span>=
    <span className="text-green-600">"tooltip"</span>
    <span className="text-red-500"> data-text</span>=
    <span className="text-green-600">"Info"</span>
    <span className="text-gray-500">&gt;</span>
    Hover me
    <span className="text-gray-500">&lt;/div&gt;</span>

    <br/><br/>

    <span className="text-gray-500">&lt;script&gt;</span>
    <br/>

    <span className="text-purple-600">&nbsp;&nbsp;if</span>
    <span className="text-gray-700"> (window.SomeTooltipPlugin) {`{`}</span>
    <br/>

    <span className="text-blue-600">&nbsp;&nbsp;&nbsp;&nbsp;SomeTooltipPlugin.init('.tooltip');</span>
    <br/>

    <span className="text-gray-700">&nbsp;&nbsp;{`}`} else {`{`}</span>
    <br/>

    <span className="text-gray-500">&nbsp;&nbsp;&nbsp;&nbsp;// simple title fallback</span>
    <br/>

    <span className="text-blue-600">&nbsp;&nbsp;&nbsp;&nbsp;document.querySelectorAll('.tooltip').forEach(el =&gt; {`{`}</span>
    <br/>

    <span className="text-blue-600">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;el.setAttribute('title', el.dataset.text);</span>
    <br/>

    <span className="text-blue-600">&nbsp;&nbsp;&nbsp;&nbsp;{`}`});</span>
    <br/>

    <span className="text-gray-700">&nbsp;&nbsp;{`}`}</span>
    <br/>

    <span className="text-gray-500">&lt;/script&gt;</span>
  </code>
</pre>
      </section>

      {/* Best Practices */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-3">
          7. Best Practices
        </h2>
        <ul className="list-[square] list-inside space-y-1 leading-relaxed">
          <li>Audit plugin licenses before using them publicly.</li>
          <li>Keep third-party scripts asynchronous or deferred when possible.</li>
          <li>Avoid excessive plugins; each adds complexity and potential conflicts.</li>
          <li>Isolate plugin styles/namespaces when needed to prevent clashes.</li>
        </ul>
      </section>

      {/* Quick Recap */}
      <div className="mt-6 p-4 bg-blue-50 rounded-md border border-blue-200">
        <h3 className="text-lg font-semibold text-blue-700 mb-2">Quick Recap:</h3>
        <ul className="list-[square] list-inside space-y-1 leading-relaxed">
          <li>Plugins add features without building from scratch.</li>
          <li>Include via CDN, npm, or local files, respecting load order.</li>
          <li>Mind performance, security, and fallbacks.</li>
          <li>Use meaningful initialization and prefer minimal dependencies.</li>
        </ul>
      </div>
    </div>
  );
};

export default HTMLPlugins;