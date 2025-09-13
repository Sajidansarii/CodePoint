        const HTMLVideo = () => {
  return (
    <div className="p-4 max-w-3xl">
      {/* Title */}
      <h1 className="text-3xl sm:text-4xl font-medium text-blue-500 mb-4 text-center sm:text-left">
        HTML Video
      </h1>

      {/* Intro */}
      <p className="text-gray-700 mb-4">
        The <code>&lt;video&gt;</code> element embeds video content directly in a web page. It supports controls, multiple sources, captions, and responsive behavior, making it easy to deliver rich media to users.
      </p>

      {/* Basic Syntax */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-2">Basic Syntax</h2>
        <p className="text-gray-700 mb-2">
          A simple video with controls:
        </p>
        <pre className="bg-gray-100 p-3 rounded mb-2 overflow-x-auto text-sm">
          <code>{`<video width="640" controls>
  <source src="movie.mp4" type="video/mp4" />
  <source src="movie.webm" type="video/webm" />
  Your browser does not support the video tag.
</video>`}</code>
        </pre>
        <p className="text-gray-700">
          The browser picks the first supported format. The fallback text shows if video isn’t supported.
        </p>
      </section>

      {/* Attributes */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-2">Common Attributes</h2>
        <ul className="list-disc pl-5 space-y-1 text-gray-700">
          <li><code>controls</code> — Shows native play/pause/volume UI.</li>
          <li><code>autoplay</code> — Starts playback automatically (often muted by browsers).</li>
          <li><code>muted</code> — Mutes the video. Required for autoplay in many browsers.</li>
          <li><code>loop</code> — Restarts video after it ends.</li>
          <li><code>poster</code> — Image shown before the video plays.</li>
          <li><code>width</code> / <code>height</code> — Display size (better to control via CSS for responsiveness).</li>
          <li><code>preload</code> — Hint to browser: <code>auto</code>, <code>metadata</code>, or <code>none</code>.</li>
        </ul>
      </section>

      {/* Captions & Accessibility */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-2">Captions & Accessibility</h2>
        <p className="text-gray-700 mb-2">
          Use <code>&lt;track&gt;</code> to add captions or subtitles. They improve accessibility and comprehension.
        </p>
        <pre className="bg-gray-100 p-3 rounded mb-2 overflow-x-auto text-sm">
          <code>{`<video controls>
  <source src="movie.mp4" type="video/mp4" />
  <track kind="captions" src="captions_en.vtt" srclang="en" label="English" default />
  Your browser does not support the video tag.
</video>`}</code>
        </pre>
        <p className="text-gray-700">
          Provide <code>kind="captions"</code> for speech-to-text or <code>kind="subtitles"</code> for translations. Always include a meaningful <code>title</code> or surrounding context for users relying on assistive tech.
        </p>
      </section>

      {/* Responsive Video */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-2">Responsive Video</h2>
        <p className="text-gray-700 mb-2">
          Wrap the video in a container that preserves aspect ratio so it scales on all devices.
        </p>
        <pre className="bg-gray-100 p-3 rounded mb-2 overflow-x-auto text-sm">
          <code>{`.video-wrapper {
  position: relative;
  padding-top: 56.25%; /* 16:9 */
}
.video-wrapper video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}`}</code>
        </pre>
        <p className="text-gray-700">
          This avoids fixed pixel dimensions and lets the video adapt to width.
        </p>
      </section>

      {/* Advanced Example */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-2">Advanced Example</h2>
        <p className="text-gray-700 mb-2">
          Video with poster, captions, autoplay (muted), loop, and fallback text:
        </p>
        <pre className="bg-gray-100 p-3 rounded mb-2 overflow-x-auto text-sm">
          <code>{`<div class="video-wrapper" style="position:relative; padding-top:56.25%;">
  <video 
    muted 
    autoplay 
    loop 
    controls 
    poster="thumb.jpg" 
    style="position:absolute; top:0; left:0; width:100%; height:100%;"
  >
    <source src="clip.mp4" type="video/mp4" />
    <track kind="captions" src="captions.vtt" srclang="en" label="English" default />
    Sorry, your browser doesn't support embedded videos.
  </video>
</div>`}</code>
        </pre>
      </section>

      {/* Performance Tips */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-2">Performance Tips</h2>
        <ul className="list-disc pl-5 space-y-1 text-gray-700">
          <li>Use optimized video formats (e.g., H.264/MP4, WebM) and encode at reasonable bitrate.</li>
          <li>Provide multiple source formats for broader compatibility.</li>
          <li>Use <code>preload="metadata"</code> if you want minimal initial load.</li>
          <li>Lazy-load large videos or defer loading until user interaction if not critical above the fold.</li>
        </ul>
      </section>

      {/* Common Mistakes */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-2">Common Mistakes</h2>
        <ul className="list-disc pl-5 space-y-1 text-gray-700">
          <li>Omitting <code>controls</code> and leaving users without playback UI.</li>
          <li>Using autoplay with sound (many browsers block it).</li>
          <li>Not providing captions for accessibility.</li>
          <li>Hardcoding fixed width/height without responsive handling.</li>
          <li>Using a single video format that some browsers don’t support.</li>
        </ul>
      </section>

      {/* Quick Recap */}
      <div className="mt-6 p-4 bg-blue-50 rounded-md border border-blue-200">
        <h3 className="text-lg font-semibold text-blue-700 mb-2">Quick Recap:</h3>
        <ul className="list-disc pl-5 space-y-1 text-gray-700 text-sm sm:text-base">
          <li><code>&lt;video&gt;</code> embeds video; use multiple <code>&lt;source&gt;</code> tags.</li>
          <li>Include <code>controls</code>, and for accessibility add <code>&lt;track&gt;</code> captions.</li>
          <li>Use poster images for initial preview.</li>
          <li>Make videos responsive with aspect-ratio wrappers.</li>
          <li>Optimize formats and provide fallbacks.</li>
        </ul>
      </div>
    </div>
  );
};

export default HTMLVideo;