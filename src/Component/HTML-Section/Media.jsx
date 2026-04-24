const HTMLMedia = () => {
  return (
    <div className="p-4 sm:p-6 md:p-8 max-w-4xl">
      {/* Title */}
      <h1 className="text-3xl font-semibold text-blue-500 mb-3">
        Media in HTML
      </h1>

      {/* Intro */}
      <p className="leading-relaxed mb-3">
        HTML supports various types of media like <strong>images</strong>, <strong>audio</strong>, <strong>video</strong>, and <strong>embedded content</strong>. 
        Media elements help create rich, interactive web experiences.
      </p>

      {/* Image */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-3">1. Images</h2>
        <p className="leading-relaxed mb-3">
          Use the <code>&lt;img&gt;</code> tag to display images. Always include the <code>alt</code> attribute for accessibility.
        </p>
       <pre className="bg-gray-100 p-3 rounded-md overflow-x-auto max-w-full whitespace-pre-wrap mb-3 text-sm">
  <code>
    <span className="text-gray-500">&lt;img</span>
    <span className="text-red-500"> src</span>=
    <span className="text-green-600">"mountain.jpg"</span>

    <span className="text-red-500"> alt</span>=
    <span className="text-green-600">"mountain"</span>

    <span className="text-gray-500"> /&gt;</span>
  </code>
</pre>

        <p className="leading-relaxed mb-3">
          You can make images responsive with CSS:
        </p>
       <pre className="bg-gray-100 p-3 rounded-md overflow-x-auto max-w-full whitespace-pre-wrap mb-3 text-sm">
  <code>
    <span className="text-blue-600">img</span>
    <span className="text-gray-500"> {`{`}</span>
    <br/>

    <span className="text-red-500">&nbsp;&nbsp;max-width</span>:
    <span className="text-green-600"> 100%</span>
    <span className="text-gray-500">;</span>
    <br/>

    <span className="text-red-500">&nbsp;&nbsp;height</span>:
    <span className="text-green-600"> auto</span>
    <span className="text-gray-500">;</span>
    <br/>

    <span className="text-gray-500">{`}`}</span>
  </code>
</pre>
      </section>

      {/* Audio */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-3">2. Audio</h2>
        <p className="leading-relaxed mb-3">
          The <code>&lt;audio&gt;</code> tag embeds audio content. Use the <code>controls</code> attribute so users can play, pause, or adjust volume.
        </p>
      <pre className="bg-gray-100 p-3 rounded-md overflow-x-auto max-w-full whitespace-pre-wrap mb-3 text-sm">
  <code>
    <span className="text-gray-500">&lt;audio</span>
    <span className="text-red-500"> controls</span>
    <span className="text-gray-500">&gt;</span>
    <br/>

    <span className="text-gray-500">&nbsp;&nbsp;&lt;source</span>
    <span className="text-red-500"> src</span>=
    <span className="text-green-600">"song.mp3"</span>
    <span className="text-red-500"> type</span>=
    <span className="text-green-600">"audio/mpeg"</span>
    <span className="text-gray-500"> /&gt;</span>
    <br/>

    <span className="text-gray-500">&nbsp;&nbsp;&lt;source</span>
    <span className="text-red-500"> src</span>=
    <span className="text-green-600">"song.ogg"</span>
    <span className="text-red-500"> type</span>=
    <span className="text-green-600">"audio/ogg"</span>
    <span className="text-gray-500"> /&gt;</span>
    <br/>

    <span className="text-gray-700">&nbsp;&nbsp;Your browser does not support the audio element.</span>
    <br/>

    <span className="text-gray-500">&lt;/audio&gt;</span>
  </code>
</pre>
        <p className="leading-relaxed">
          You can provide multiple formats for better browser support.
        </p>
      </section>

      {/* Video */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-3">3. Video</h2>
        <p className="leading-relaxed mb-3">
          The <code>&lt;video&gt;</code> tag embeds video content. Use the <code>controls</code> attribute for playback controls.
        </p>
      <pre className="bg-gray-100 p-3 rounded-md overflow-x-auto max-w-full whitespace-pre-wrap mb-3 text-sm">
  <code>
    <span className="text-gray-500">&lt;video</span>
    <span className="text-red-500"> width</span>=
    <span className="text-green-600">"400"</span>
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

    <span className="text-gray-700">&nbsp;&nbsp;Your browser does not support the video tag.</span>
    <br/>

    <span className="text-gray-500">&lt;/video&gt;</span>
  </code>
</pre>
        <p className="leading-relaxed">
          Attributes like <code>autoplay</code>, <code>loop</code>, and <code>muted</code> can control playback behavior.
        </p>
      </section>

      {/* Embed / Iframe */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-3">4. Embedded Media (iframe)</h2>
        <p className="leading-relaxed mb-3">
          Use <code>&lt;iframe&gt;</code> to embed other content like YouTube videos or maps.
        </p>
      <pre className="bg-gray-100 p-3 rounded-md overflow-x-auto max-w-full whitespace-pre-wrap mb-3 text-sm">
  <code>
    <span className="text-gray-500">&lt;iframe</span>
    <span className="text-red-500"> width</span>=
    <span className="text-green-600">"560"</span>

    <span className="text-red-500"> height</span>=
    <span className="text-green-600">"315"</span>

    <span className="text-red-500"> src</span>=
    <span className="text-green-600">
      "https://www.youtube.com/embed/dQw4w9WgXcQ"
    </span>

    <span className="text-red-500"> title</span>=
    <span className="text-green-600">"YouTube video player"</span>

    <span className="text-red-500"> frameborder</span>=
    <span className="text-green-600">"0"</span>

    <span className="text-red-500"> allow</span>=
    <span className="text-green-600">
      "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    </span>

    <span className="text-red-500"> allowfullscreen</span>

    <span className="text-gray-500">&gt;&lt;/iframe&gt;</span>
  </code>
</pre>
        <p className="leading-relaxed">
          Always respect copyright and use embeds from trusted sources.
        </p>
      </section>

      {/* Responsive Media */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-3">5. Responsive Media</h2>
        <p className="leading-relaxed mb-3">
          To make videos and iframes responsive, wrap them in a container with proportional padding.
        </p>
       <pre className="bg-gray-100 p-3 rounded-md overflow-x-auto max-w-full whitespace-pre-wrap mb-3 text-sm">
  <code>
    <span className="text-blue-600">.video-container</span>
    <span className="text-gray-500"> {`{`}</span>
    <br/>

    <span className="text-red-500">&nbsp;&nbsp;position</span>:
    <span className="text-green-600"> relative</span>
    <span className="text-gray-500">;</span>
    <br/>

    <span className="text-red-500">&nbsp;&nbsp;padding-bottom</span>:
    <span className="text-green-600"> 56.25%</span>
    <span className="text-gray-500">; /* 16:9 aspect ratio */</span>
    <br/>

    <span className="text-red-500">&nbsp;&nbsp;height</span>:
    <span className="text-green-600"> 0</span>
    <span className="text-gray-500">;</span>
    <br/>

    <span className="text-gray-500">{`}`}</span>
    <br/><br/>

    <span className="text-blue-600">.video-container iframe</span>,
    <span className="text-blue-600"> .video-container video</span>
    <span className="text-gray-500"> {`{`}</span>
    <br/>

    <span className="text-red-500">&nbsp;&nbsp;position</span>:
    <span className="text-green-600"> absolute</span>
    <span className="text-gray-500">;</span>
    <br/>

    <span className="text-red-500">&nbsp;&nbsp;top</span>:
    <span className="text-green-600"> 0</span>
    <span className="text-gray-500">;</span>
    <br/>

    <span className="text-red-500">&nbsp;&nbsp;left</span>:
    <span className="text-green-600"> 0</span>
    <span className="text-gray-500">;</span>
    <br/>

    <span className="text-red-500">&nbsp;&nbsp;width</span>:
    <span className="text-green-600"> 100%</span>
    <span className="text-gray-500">;</span>
    <br/>

    <span className="text-red-500">&nbsp;&nbsp;height</span>:
    <span className="text-green-600"> 100%</span>
    <span className="text-gray-500">;</span>
    <br/>

    <span className="text-gray-500">{`}`}</span>
  </code>
</pre>
      </section>

      {/* Best Practices */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-3">Best Practices</h2>
        <ul className="list-[square] list-inside space-y-1 leading-relaxed">
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
        <h3 className="text-lg font-semibold text-blue-700 mb-3">Quick Recap:</h3>
        <ul className="list-[square] list-inside space-y-1 leading-relaxed">
          <li><code>&lt;img&gt;</code> for images, <code>&lt;audio&gt;</code> for sound, <code>&lt;video&gt;</code> for video.</li>
          <li>Use <code>&lt;iframe&gt;</code> to embed external media like YouTube.</li>
          <li>Always make media responsive and accessible.</li>
        </ul>
      </div>
    </div>
  );
};

export default HTMLMedia;