const HTMLMedia = () => {
  return (
    <div className="p-4 max-w-3xl">
      {/* Title */}
      <h1 className="text-3xl sm:text-4xl font-medium text-blue-500 mb-4">
        Media in HTML
      </h1>

      {/* Intro */}
      <p className="text-gray-700 mb-4">
        HTML supports various types of media like <strong>images</strong>, <strong>audio</strong>, <strong>video</strong>, and <strong>embedded content</strong>. 
        Media elements help create rich, interactive web experiences.
      </p>

      {/* Image */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-2">1. Images</h2>
        <p className="text-gray-700 mb-2">
          Use the <code>&lt;img&gt;</code> tag to display images. Always include the <code>alt</code> attribute for accessibility.
        </p>
        <pre className="bg-gray-100 p-3 rounded mb-2 overflow-x-auto text-sm">
            <code>{'<img src="mountain.jpg" alt="mountain"/>'}</code>
        
        </pre>
        <p className="text-gray-700">
          You can make images responsive with CSS:
        </p>
        <pre className="bg-gray-100 p-3 rounded mb-2 overflow-x-auto text-sm">
{`img {
  max-width: 100%;
  height: auto;
}`}
        </pre>
      </section>

      {/* Audio */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-2">2. Audio</h2>
        <p className="text-gray-700 mb-2">
          The <code>&lt;audio&gt;</code> tag embeds audio content. Use the <code>controls</code> attribute so users can play, pause, or adjust volume.
        </p>
        <pre className="bg-gray-100 p-3 rounded mb-2 overflow-x-auto text-sm">
{`<audio controls>
  <source src="song.mp3" type="audio/mpeg" />
  <source src="song.ogg" type="audio/ogg" />
  Your browser does not support the audio element.
</audio>`}
        </pre>
        <p className="text-gray-700">
          You can provide multiple formats for better browser support.
        </p>
      </section>

      {/* Video */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-2">3. Video</h2>
        <p className="text-gray-700 mb-2">
          The <code>&lt;video&gt;</code> tag embeds video content. Use the <code>controls</code> attribute for playback controls.
        </p>
        <pre className="bg-gray-100 p-3 rounded mb-2 overflow-x-auto text-sm">
{`<video width="400" controls>
  <source src="movie.mp4" type="video/mp4" />
  <source src="movie.webm" type="video/webm" />
  Your browser does not support the video tag.
</video>`}
        </pre>
        <p className="text-gray-700">
          Attributes like <code>autoplay</code>, <code>loop</code>, and <code>muted</code> can control playback behavior.
        </p>
      </section>

      {/* Embed / Iframe */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-2">4. Embedded Media (iframe)</h2>
        <p className="text-gray-700 mb-2">
          Use <code>&lt;iframe&gt;</code> to embed other content like YouTube videos or maps.
        </p>
        <pre className="bg-gray-100 p-3 rounded mb-2 overflow-x-auto text-sm">
{`<iframe 
  width="560" 
  height="315" 
  src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
  title="YouTube video player" 
  frameborder="0" 
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
  allowfullscreen>
</iframe>`}
        </pre>
        <p className="text-gray-700">
          Always respect copyright and use embeds from trusted sources.
        </p>
      </section>

      {/* Responsive Media */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-2">5. Responsive Media</h2>
        <p className="text-gray-700 mb-2">
          To make videos and iframes responsive, wrap them in a container with proportional padding.
        </p>
        <pre className="bg-gray-100 p-3 rounded mb-2 overflow-x-auto text-sm">
{`.video-container {
  position: relative;
  padding-bottom: 56.25%; /* 16:9 aspect ratio */
  height: 0;
}
.video-container iframe,
.video-container video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}`}
        </pre>
      </section>

      {/* Best Practices */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-2">Best Practices</h2>
        <ul className="list-disc pl-5 space-y-1 text-gray-700">
          <li>Always include <code>alt</code> text for images.</li>
          <li>Provide multiple formats for audio/video for better browser compatibility.</li>
          <li>Keep file sizes small for faster loading.</li>
          <li>Use <code>controls</code> to let users control playback.</li>
          <li>Make media responsive for all screen sizes.</li>
          <li>Use captions or transcripts for accessibility.</li>
        </ul>
      </section>

      {/* Quick Recap */}
      <div className="mt-6 p-4 bg-blue-50 rounded-md border border-blue-200">
        <h3 className="text-lg font-semibold text-blue-700 mb-2">Quick Recap:</h3>
        <ul className="list-disc pl-5 space-y-1 text-gray-700 text-sm sm:text-base">
          <li><code>&lt;img&gt;</code> for images, <code>&lt;audio&gt;</code> for sound, <code>&lt;video&gt;</code> for video.</li>
          <li>Use <code>&lt;iframe&gt;</code> to embed external media like YouTube.</li>
          <li>Always make media responsive and accessible.</li>
        </ul>
      </div>
    </div>
  );
};

export default HTMLMedia;