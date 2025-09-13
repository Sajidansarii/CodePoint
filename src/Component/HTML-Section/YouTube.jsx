const YouTubeTopic = () => {
  return (
    <div className="p-4 max-w-3xl">
      {/* Title */}
      <h1 className="text-3xl sm:text-4xl font-medium text-blue-500 mb-4 text-center sm:text-left">
        YouTube Integration on the Web
      </h1>

      {/* Intro */}
      <p className="text-gray-700 mb-4">
        YouTube videos are one of the most common types of embedded media on the web. You can embed single videos, playlists, or use the YouTube IFrame API to control playback programmatically. This page covers basic embedding, privacy-enhanced options, responsiveness, lazy loading, accessibility, and best practices.
      </p>

      {/* Getting Video ID */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-2">1. Getting the YouTube Video ID</h2>
        <p className="text-gray-700 mb-2">
          The video ID is the unique string in the YouTube URL. Examples:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-700 mb-2">
          <li><code>https://www.youtube.com/watch?v=<strong>UB1O30fR-EE</strong></code> → ID is <code>UB1O30fR-EE</code></li>
          <li><code>https://youtu.be/<strong>UB1O30fR-EE</strong></code> → ID is <code>UB1O30fR-EE</code></li>
        </ul>
        <p className="text-gray-700">
          You’ll use that ID in the embed URL.
        </p>
      </section>

      {/* Basic Embed */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-2">2. Basic Embed</h2>
        <p className="text-gray-700 mb-2">
          Embed a video using an iframe:
        </p>
        <pre className="bg-gray-100 p-3 rounded mb-2 overflow-x-auto text-sm">
          <code>{`<iframe 
  width="560" 
  height="315" 
  src="https://www.youtube.com/embed/UB1O30fR-EE" 
  title="YouTube video player" 
  frameborder="0" 
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
  allowfullscreen>
</iframe>`}</code>
        </pre>
        <p className="text-gray-700">
          Replace <code>UB1O30fR-EE</code> with your desired video ID.
        </p>
      </section>

      {/* Privacy Enhanced */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-2">3. Privacy-Enhanced Mode</h2>
        <p className="text-gray-700 mb-2">
          To reduce tracking unless the user interacts, use the “nocookie” domain:
        </p>
        <pre className="bg-gray-100 p-3 rounded mb-2 overflow-x-auto text-sm">
          <code>{`<iframe 
  src="https://www.youtube-nocookie.com/embed/UB1O30fR-EE" 
  title="freeCodeCamp HTML Lecture" 
  allowfullscreen>
</iframe>`}</code>
        </pre>
        <p className="text-gray-700">
          This still loads the YouTube player but delays cookie setting until interaction.
        </p>
      </section>

      {/* Responsive Wrapper */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-2">4. Responsive Embed</h2>
        <p className="text-gray-700 mb-2">
          Wrap the iframe to maintain aspect ratio and make it fluid:
        </p>
        <pre className="bg-gray-100 p-3 rounded mb-2 overflow-x-auto text-sm">
          <code>{`.video-wrapper {
  position: relative;
  padding-top: 56.25%; /* 16:9 ratio */
}
.video-wrapper iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}`}</code>
        </pre>
        <p className="text-gray-700">
          This ensures the video scales on any screen without distortion.
        </p>
      </section>

      {/* Lazy Loading & Placeholder */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-2">5. Lazy Loading</h2>
        <p className="text-gray-700 mb-2">
          To improve page performance, delay loading the full iframe until user interaction. Show a thumbnail placeholder first:
        </p>
        <pre className="bg-gray-100 p-3 rounded mb-2 overflow-x-auto text-sm">
          <code>{`<!-- HTML -->
<div class="video-placeholder" style="position:relative; cursor:pointer;">
  <img src="https://img.youtube.com/vi/UB1O30fR-EE/hqdefault.jpg" alt="Video thumbnail" style="width:100%; display:block;" />
  <div style="position:absolute; inset:0; display:flex; justify-content:center; align-items:center;">
    ▶
  </div>
</div>

<!-- JS: on click replace with iframe -->
<script>
  document.querySelector('.video-placeholder').addEventListener('click', function() {
    const iframe = document.createElement('iframe');
    iframe.src = 'https://www.youtube-nocookie.com/embed/UB1O30fR-EE?autoplay=1';
    iframe.title = 'YouTube video player';
    iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
    iframe.allowFullscreen = true;
    iframe.style.width = '100%';
    iframe.style.height = '100%';
    this.innerHTML = '';
    this.appendChild(iframe);
  });
</script>`}</code>
        </pre>
        <p className="text-gray-700">
          This avoids loading the heavy iframe until the user is ready to watch.
        </p>
      </section>

      {/* Playlist & Channel Embeds */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-2">6. Playlist Embed</h2>
        <p className="text-gray-700 mb-2">
          Embed an entire playlist by using its ID:
        </p>
        <pre className="bg-gray-100 p-3 rounded mb-2 overflow-x-auto text-sm">
          <code>{`<iframe 
  src="https://www.youtube.com/embed?listType=playlist&list=PLWKjhJtqVAbnupwRFO6G0Gnjz8n-3XCTZ" 
  title="YouTube playlist" 
  allowfullscreen>
</iframe>`}</code>
        </pre>
        <p className="text-gray-700">
          Replace the <code>list=</code> value with the actual playlist ID.
        </p>
      </section>

      {/* YouTube IFrame API */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-2">7. YouTube IFrame API</h2>
        <p className="text-gray-700 mb-2">
          For interactive control (play, pause, listen to events), use the YouTube IFrame API:
        </p>
        <p className="text-gray-700 mb-2">
          Example initialization:
        </p>
        <pre className="bg-gray-100 p-3 rounded mb-2 overflow-x-auto text-sm">
          <code>{`<div id="player"></div>
<script src="https://www.youtube.com/iframe_api"></script>
<script>
  let player;
  function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
      height: '360',
      width: '640',
      videoId: 'UB1O30fR-EE',
      events: {
        onReady: () => console.log('Ready'),
        onStateChange: (e) => console.log('State', e.data)
      }
    });
  }
</script>`}</code>
        </pre>
      </section>

      {/* Accessibility & SEO */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-2">8. Accessibility & SEO</h2>
        <ul className="list-disc pl-5 space-y-1 text-gray-700">
          <li>Always provide a descriptive <code>title</code> on the iframe.</li>
          <li>Include context text before/after the video for users relying on screen readers.</li>
          <li>Lazy loading and captions help performance and inclusivity.</li>
          <li>Use structured data (VideoObject) on the page if embedding important videos for search engines.</li>
        </ul>
      </section>

      {/* Common Mistakes */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-2">Common Mistakes</h2>
        <ul className="list-disc pl-5 space-y-1 text-gray-700">
          <li>Embedding with fixed pixel sizes without responsive wrapper.</li>
          <li>Forgetting the <code>title</code> attribute (accessibility issue).</li>
          <li>Loading full iframe on page load causing performance hits (skip lazy loading).</li>
          <li>Not using privacy-enhanced domain if concerned about third-party tracking.</li>
        </ul>
      </section>

      {/* Quick Recap */}
      <div className="mt-6 p-4 bg-red-50 rounded-md border border-red-200">
        <h3 className="text-lg font-semibold text-blue-700 mb-2">Quick Recap:</h3>
        <ul className="list-disc pl-5 space-y-1 text-gray-700 text-sm sm:text-base">
          <li>Extract the video ID from the YouTube URL.</li>
          <li>Embed via iframe; use <code>youtube-nocookie.com</code> for privacy.</li>
          <li>Wrap for responsive scaling and lazy-load for performance.</li>
          <li>Playlists use <code>list=</code> parameter; advanced control via IFrame API.</li>
          <li>Include titles and context for accessibility.</li>
        </ul>
      </div>
    </div>
  );
};

export default YouTubeTopic;