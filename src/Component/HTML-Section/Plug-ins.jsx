const HTMLPlugins = () => {
  return (
    <div className="p-4 max-w-3xl">
      {/* Title */}
      <h1 className="text-3xl sm:text-4xl font-medium text-blue-500 mb-4">
        Web Plug-ins
      </h1>

      {/* Intro */}
      <p className="text-gray-700 mb-4">
        Plugins (or third-party libraries/widgets) are reusable pieces of code you can plug into your website to add features—like carousels, rich-text editors, analytics, modals, tooltips, and more—without building them from scratch.
      </p>

      {/* Types of Plugins */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-2">
          1. Types of Plugins
        </h2>
        <ul className="list-disc pl-5 space-y-1 text-gray-700">
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
        <h2 className="text-2xl font-semibold text-blue-500 mb-2">
          2. How to Include Plugins
        </h2>

        <h3 className="text-xl font-semibold text-blue-400 mb-1">CDN / Script Tag</h3>
        <p className="text-gray-700 mb-2">
          Many plugins are available via CDN and can be added with a <code>&lt;script&gt;</code> or <code>&lt;link&gt;</code> tag.
        </p>
        <pre className="bg-gray-100 p-3 rounded mb-2 overflow-x-auto text-sm">
          <code>{`<!-- Example: include a carousel plugin -->
<link rel="stylesheet" href="https://cdn.example.com/carousel.css" />
<script src="https://cdn.example.com/carousel.min.js" defer></script>`}</code>
        </pre>

        <h3 className="text-xl font-semibold text-blue-400 mb-1">Package Manager (npm/yarn)</h3>
        <p className="text-gray-700 mb-2">
          For modern projects, install plugins via npm and import them in your JavaScript.
        </p>
        <pre className="bg-gray-100 p-3 rounded mb-2 overflow-x-auto text-sm">
          <code>{`// install
npm install some-plugin

// usage in JS
import SomePlugin from 'some-plugin';
SomePlugin.init();`}</code>
        </pre>

        <h3 className="text-xl font-semibold text-blue-400 mb-1">Inline / Initialization</h3>
        <p className="text-gray-700 mb-2">
          After including, most plugins require initialization:
        </p>
        <pre className="bg-gray-100 p-3 rounded mb-2 overflow-x-auto text-sm">
          <code>{`<!-- HTML -->
<div class="slider">...</div>

<!-- JavaScript (after plugin loaded) -->
<script>
  document.addEventListener('DOMContentLoaded', () => {
    const slider = new Carousel('.slider', {
      autoplay: true,
    });
    slider.init();
  });
</script>`}</code>
        </pre>
      </section>

      {/* Example Plugins */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-2">
          3. Common Plugin Examples
        </h2>
        <ul className="list-disc pl-5 space-y-2 text-gray-700">
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
        <h2 className="text-2xl font-semibold text-blue-500 mb-2">
          4. Dependency & Load Order
        </h2>
        <p className="text-gray-700 mb-2">
          Some plugins depend on others (e.g., old jQuery plugins need jQuery loaded first). Always include dependencies in the correct order and initialize after the DOM and required scripts are ready.
        </p>
        <pre className="bg-gray-100 p-3 rounded mb-2 overflow-x-auto text-sm">
          <code>{`<!-- jQuery plugin example -->
<script src="https://code.jquery.com/jquery.min.js"></script>
<script src="https://cdn.example.com/jquery.plugin.js"></script>
<script>
  $(function() {
    $('.tooltip').plugin();
  });
</script>`}</code>
        </pre>
      </section>

      {/* Performance & Security */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-2">
          5. Performance & Security
        </h2>
        <ul className="list-disc pl-5 space-y-1 text-gray-700">
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
        <h2 className="text-2xl font-semibold text-blue-500 mb-2">
          6. Fallbacks & Graceful Degradation
        </h2>
        <p className="text-gray-700 mb-2">
          If a plugin fails to load, ensure the core functionality still works or provide a simple fallback. Avoid using plugins for critical features without fallback logic.
        </p>
        <pre className="bg-gray-100 p-3 rounded mb-2 overflow-x-auto text-sm">
          <code>{`<!-- Example: tooltips fallback -->
<div class="tooltip" data-text="Info">
  Hover me
</div>
<script>
  if (window.SomeTooltipPlugin) {
    SomeTooltipPlugin.init('.tooltip');
  } else {
    // simple title fallback
    document.querySelectorAll('.tooltip').forEach(el => {
      el.setAttribute('title', el.dataset.text);
    });
  }
</script>`}</code>
        </pre>
      </section>

      {/* Best Practices */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-2">
          7. Best Practices
        </h2>
        <ul className="list-disc pl-5 space-y-1 text-gray-700">
          <li>Audit plugin licenses before using them publicly.</li>
          <li>Keep third-party scripts asynchronous or deferred when possible.</li>
          <li>Avoid excessive plugins; each adds complexity and potential conflicts.</li>
          <li>Isolate plugin styles/namespaces when needed to prevent clashes.</li>
        </ul>
      </section>

      {/* Quick Recap */}
      <div className="mt-6 p-4 bg-blue-50 rounded-md border border-blue-200">
        <h3 className="text-lg font-semibold text-blue-700 mb-2">Quick Recap:</h3>
        <ul className="list-disc pl-5 space-y-1 text-gray-700 text-sm sm:text-base">
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