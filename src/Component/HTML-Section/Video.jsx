        const HTMLVideo = () => {
  return (
    <div className="p-4 sm:p-6 md:p-8 max-w-4xl">
      {/* Title */}
      <h1 className="text-3xl font-semibold text-blue-500 mb-3">
        HTML Video
      </h1>

      {/* Intro */}
      <p className="leading-relaxed mb-3">
        The <code>&lt;video&gt;</code> element embeds video content directly in a web page. It supports controls, multiple sources, captions, and responsive behavior, making it easy to deliver rich media to users.
      </p>

      {/* Basic Syntax */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-3">Basic Syntax</h2>
        <p className="leading-relaxed mb-3">
          A simple video with controls:
        </p>
        <pre className="bg-gray-100 p-3 rounded-md overflow-x-auto max-w-full whitespace-pre-wrap mb-3 text-sm">
  <code>
    <span className="text-gray-500">&lt;video</span>
    <span className="text-red-500"> width</span>=
    <span className="text-green-600">"640"</span>
    <span className="text-red-500"> controls</span>
    <span className="text-gray-500">&gt;</span>
    <br/>

    <span className="text-gray-500">&nbsp;&nbsp;&lt;source</span>
    <span className="text-red-500"> src</span>=
    <span className="text-green-600">"movie.mp4"</span>
    <span className="text-red-500"> type</span>=
    <span className="text-green-600">"video/mp4"</span>
    <span className="text-gray-500"> /&gt;</span>
    <br/>

    <span className="text-gray-500">&nbsp;&nbsp;&lt;source</span>
    <span className="text-red-500"> src</span>=
    <span className="text-green-600">"movie.webm"</span>
    <span className="text-red-500"> type</span>=
    <span className="text-green-600">"video/webm"</span>
    <span className="text-gray-500"> /&gt;</span>
    <br/>

    <span className="text-gray-700">
      &nbsp;&nbsp;Your browser does not support the video tag.
    </span>
    <br/>

    <span className="text-gray-500">&lt;/video&gt;</span>
  </code>
</pre>
        <p className="leading-relaxed">
          The browser picks the first supported format. The fallback text shows if video isn’t supported.
        </p>
      </section>

      {/* Attributes */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-3">Common Attributes</h2>
        <ul className="list-[square] list-inside space-y-1 leading-relaxed">
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
        <h2 className="text-2xl font-semibold text-blue-500 mb-3">Captions & Accessibility</h2>
        <p className="leading-relaxed mb-3">
          Use <code>&lt;track&gt;</code> to add captions or subtitles. They improve accessibility and comprehension.
        </p>
       <pre className="bg-gray-100 p-3 rounded-md overflow-x-auto max-w-full whitespace-pre-wrap mb-3 text-sm">
  <code>
    <span className="text-gray-500">&lt;video</span>
    <span className="text-red-500"> controls</span>
    <span className="text-gray-500">&gt;</span>
    <br/>

    <span className="text-gray-500">&nbsp;&nbsp;&lt;source</span>
    <span className="text-red-500"> src</span>=
    <span className="text-green-600">"movie.mp4"</span>
    <span className="text-red-500"> type</span>=
    <span className="text-green-600">"video/mp4"</span>
    <span className="text-gray-500"> /&gt;</span>
    <br/>

    <span className="text-gray-500">&nbsp;&nbsp;&lt;track</span>
    <span className="text-red-500"> kind</span>=
    <span className="text-green-600">"captions"</span>
    <span className="text-red-500"> src</span>=
    <span className="text-green-600">"captions_en.vtt"</span>
    <span className="text-red-500"> srclang</span>=
    <span className="text-green-600">"en"</span>
    <span className="text-red-500"> label</span>=
    <span className="text-green-600">"English"</span>
    <span className="text-red-500"> default</span>
    <span className="text-gray-500"> /&gt;</span>
    <br/>

    <span className="text-gray-700">
      &nbsp;&nbsp;Your browser does not support the video tag.
    </span>
    <br/>

    <span className="text-gray-500">&lt;/video&gt;</span>
  </code>
</pre> <p className="leading-relaxed mb-3">
          Provide <code>kind="captions"</code> for speech-to-text or <code>kind="subtitles"</code> for translations. Always include a meaningful <code>title</code> or surrounding context for users relying on assistive tech.
        </p>
      </section>

      {/* Responsive Video */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-3">Responsive Video</h2>
        <p className="leading-relaxed mb-3">
          Wrap the video in a container that preserves aspect ratio so it scales on all devices.
        </p>
       <pre className="bg-gray-100 p-3 rounded-md overflow-x-auto max-w-full whitespace-pre-wrap mb-3 text-sm">
  <code>
    <span className="text-blue-600">.video-wrapper</span> {'{'}
    <br/>
    &nbsp;&nbsp;<span className="text-red-500">position</span>: relative;
    <br/>
    &nbsp;&nbsp;<span className="text-red-500">padding-top</span>: 56.25%; 
    <span className="text-gray-500">/* 16:9 */</span>
    <br/>
    {'}'}
    <br/><br/>

    <span className="text-blue-600">.video-wrapper video</span> {'{'}
    <br/>
    &nbsp;&nbsp;<span className="text-red-500">position</span>: absolute;
    <br/>
    &nbsp;&nbsp;<span className="text-red-500">top</span>: 0;
    <br/>
    &nbsp;&nbsp;<span className="text-red-500">left</span>: 0;
    <br/>
    &nbsp;&nbsp;<span className="text-red-500">width</span>: 100%;
    <br/>
    &nbsp;&nbsp;<span className="text-red-500">height</span>: 100%;
    <br/>
    {'}'}
  </code>
</pre>
        <p className="leading-relaxed mb-3">
          This avoids fixed pixel dimensions and lets the video adapt to width.
        </p>
      </section>

      {/* Advanced Example */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-3">Advanced Example</h2>
        <p className="leading-relaxed mb-3">
          Video with poster, captions, autoplay (muted), loop, and fallback text:
        </p>
      <pre className="bg-gray-100 p-3 rounded-md overflow-x-auto max-w-full whitespace-pre-wrap mb-3 text-sm">
  <code>
    <span className="text-gray-500">&lt;div</span>
    <span className="text-red-500"> class</span>=
    <span className="text-green-600">"video-wrapper"</span>
    <span className="text-red-500"> style</span>=
    <span className="text-green-600">"position:relative; padding-top:56.25%;"</span>
    <span className="text-gray-500">&gt;</span>
    <br/>

    <span className="text-gray-500">&nbsp;&nbsp;&lt;video</span>
    <span className="text-red-500"> muted autoplay loop controls</span>
    <br/>
    &nbsp;&nbsp;&nbsp;&nbsp;
    <span className="text-red-500">poster</span>=
    <span className="text-green-600">"thumb.jpg"</span>
    <br/>
    &nbsp;&nbsp;&nbsp;&nbsp;
    <span className="text-red-500">style</span>=
    <span className="text-green-600">"position:absolute; top:0; left:0; width:100%; height:100%;"</span>
    <span className="text-gray-500">&gt;</span>
    <br/>

    <span className="text-gray-500">&nbsp;&nbsp;&nbsp;&nbsp;&lt;source</span>
    <span className="text-red-500"> src</span>=
    <span className="text-green-600">"clip.mp4"</span>
    <span className="text-red-500"> type</span>=
    <span className="text-green-600">"video/mp4"</span>
    <span className="text-gray-500"> /&gt;</span>
    <br/>

    <span className="text-gray-500">&nbsp;&nbsp;&nbsp;&nbsp;&lt;track</span>
    <span className="text-red-500"> kind</span>=
    <span className="text-green-600">"captions"</span>
    <span className="text-red-500"> src</span>=
    <span className="text-green-600">"captions.vtt"</span>
    <span className="text-red-500"> srclang</span>=
    <span className="text-green-600">"en"</span>
    <span className="text-red-500"> label</span>=
    <span className="text-green-600">"English"</span>
    <span className="text-red-500"> default</span>
    <span className="text-gray-500"> /&gt;</span>
    <br/>

    <span className="text-gray-700">
      &nbsp;&nbsp;&nbsp;&nbsp;Sorry, your browser doesn't support embedded videos.
    </span>
    <br/>

    <span className="text-gray-500">&nbsp;&nbsp;&lt;/video&gt;</span>
    <br/>

    <span className="text-gray-500">&lt;/div&gt;</span>
  </code>
</pre>
      </section>

      {/* Performance Tips */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-3">Performance Tips</h2>
        <ul className="list-[square] list-inside space-y-1 leading-relaxed">
          <li>Use optimized video formats (e.g., H.264/MP4, WebM) and encode at reasonable bitrate.</li>
          <li>Provide multiple source formats for broader compatibility.</li>
          <li>Use <code>preload="metadata"</code> if you want minimal initial load.</li>
          <li>Lazy-load large videos or defer loading until user interaction if not critical above the fold.</li>
        </ul>
      </section>

      {/* Common Mistakes */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-3">Common Mistakes</h2>
        <ul className="list-[square] list-inside space-y-1 leading-relaxed">
          <li>Omitting <code>controls</code> and leaving users without playback UI.</li>
          <li>Using autoplay with sound (many browsers block it).</li>
          <li>Not providing captions for accessibility.</li>
          <li>Hardcoding fixed width/height without responsive handling.</li>
          <li>Using a single video format that some browsers don’t support.</li>
        </ul>
      </section>

      {/* Quick Recap */}
      <div className="mt-6 p-4 bg-blue-50 rounded-md border border-blue-200">
        <h3 className="text-lg font-semibold text-blue-700 mb-3">Quick Recap:</h3>
        <ul className="list-[square] list-inside space-y-1 leading-relaxed text-sm sm:text-base">
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