const YouTubeTopic = () => {
  return (
    <div className="p-4 sm:p-6 md:p-8 max-w-4xl">
      {/* Title */}
      <h1 className="text-3xl font-semibold text-blue-500 mb-3">
        YouTube Integration on the Web
      </h1>

      {/* Intro */}
      <p className="leading-relaxed mb-3">
        YouTube videos are one of the most common types of embedded media on the web. You can embed single videos, playlists, or use the YouTube IFrame API to control playback programmatically. This page covers basic embedding, privacy-enhanced options, responsiveness, lazy loading, accessibility, and best practices.
      </p>

      {/* Getting Video ID */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-3">1. Getting the YouTube Video ID</h2>
        <p className="leading-relaxed mb-3">
          The video ID is the unique string in the YouTube URL. Examples:
        </p>
        <ul className="list-[square] list-inside space-y-1 leading-relaxed mb-3">
          <li><code>https://www.youtube.com/watch?v=<strong>UB1O30fR-EE</strong></code> → ID is <code>UB1O30fR-EE</code></li>
          <li><code>https://youtu.be/<strong>UB1O30fR-EE</strong></code> → ID is <code>UB1O30fR-EE</code></li>
        </ul>
        <p className="leading-relaxed mb-3">
          You’ll use that ID in the embed URL.
        </p>
      </section>

      {/* Basic Embed */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-3">2. Basic Embed</h2>
        <p className="leading-relaxed mb-3">
          Embed a video using an iframe:
        </p>
      <pre className="bg-gray-100 p-3 rounded-md overflow-x-auto max-w-full whitespace-pre-wrap mb-3 text-sm">
  <code>
    <span className="text-gray-500">&lt;iframe</span>
    <br/>
    &nbsp;&nbsp;<span className="text-red-500">width</span>=<span className="text-green-600">"560"</span>
    <br/>
    &nbsp;&nbsp;<span className="text-red-500">height</span>=<span className="text-green-600">"315"</span>
    <br/>
    &nbsp;&nbsp;<span className="text-red-500">src</span>=<span className="text-green-600">"https://www.youtube.com/embed/UB1O30fR-EE"</span>
    <br/>
    &nbsp;&nbsp;<span className="text-red-500">title</span>=<span className="text-green-600">"YouTube video player"</span>
    <br/>
    &nbsp;&nbsp;<span className="text-red-500">frameborder</span>=<span className="text-green-600">"0"</span>
    <br/>
    &nbsp;&nbsp;<span className="text-red-500">allow</span>=<span className="text-green-600">"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"</span>
    <br/>
    &nbsp;&nbsp;<span className="text-red-500">allowfullscreen</span>
    <br/>
    <span className="text-gray-500">&gt;</span>
    <br/>

    <span className="text-gray-500">&lt;/iframe&gt;</span>
  </code>
</pre>
        <p className="leading-relaxed mb-3">
          Replace <code>UB1O30fR-EE</code> with your desired video ID.
        </p>
      </section>

      {/* Privacy Enhanced */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-3">3. Privacy-Enhanced Mode</h2>
        <p className="leading-relaxed mb-3">
          To reduce tracking unless the user interacts, use the “nocookie” domain:
        </p>
       <pre className="bg-gray-100 p-3 rounded-md overflow-x-auto max-w-full whitespace-pre-wrap mb-3 text-sm">
  <code>
    <span className="text-gray-500">&lt;iframe</span>
    <br/>
    &nbsp;&nbsp;<span className="text-red-500">src</span>=
    <span className="text-green-600">"https://www.youtube-nocookie.com/embed/UB1O30fR-EE"</span>
    <br/>
    &nbsp;&nbsp;<span className="text-red-500">title</span>=
    <span className="text-green-600">"freeCodeCamp HTML Lecture"</span>
    <br/>
    &nbsp;&nbsp;<span className="text-red-500">allowfullscreen</span>
    <br/>
    <span className="text-gray-500">&gt;</span>
    <br/>

    <span className="text-gray-500">&lt;/iframe&gt;</span>
  </code>
</pre>
        <p className="leading-relaxed mb-3">
          This still loads the YouTube player but delays cookie setting until interaction.
        </p>
      </section>

      {/* Responsive Wrapper */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-3">4. Responsive Embed</h2>
        <p className="leading-relaxed mb-3">
          Wrap the iframe to maintain aspect ratio and make it fluid:
        </p>
<pre className="bg-gray-100 p-3 rounded-md overflow-x-auto max-w-full whitespace-pre-wrap mb-3 text-sm">
  <code>
    <span className="text-blue-600">.video-wrapper</span> {'{'}
    <br/>
    &nbsp;&nbsp;<span className="text-red-500">position</span>: relative;
    <br/>
    &nbsp;&nbsp;<span className="text-red-500">padding-top</span>: 56.25%; 
    <span className="text-gray-500">/* 16:9 ratio */</span>
    <br/>
    {'}'}
    <br/><br/>

    <span className="text-blue-600">.video-wrapper iframe</span> {'{'}
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
          This ensures the video scales on any screen without distortion.
        </p>
      </section>

      {/* Lazy Loading & Placeholder */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-3">5. Lazy Loading</h2>
        <p className="leading-relaxed mb-3">
          To improve page performance, delay loading the full iframe until user interaction. Show a thumbnail placeholder first:
        </p>
      <pre className="bg-gray-100 p-3 rounded-md overflow-x-auto max-w-full whitespace-pre-wrap mb-3 text-sm">
  <code>
    <span className="text-gray-500">&lt;!-- HTML --&gt;</span>
    <br/>

    <span className="text-gray-500">&lt;div</span>
    <span className="text-red-500"> class</span>=
    <span className="text-green-600">"video-placeholder"</span>
    <span className="text-red-500"> style</span>=
    <span className="text-green-600">"position:relative; cursor:pointer;"</span>
    <span className="text-gray-500">&gt;</span>
    <br/>

    &nbsp;&nbsp;<span className="text-gray-500">&lt;img</span>
    <span className="text-red-500"> src</span>=
    <span className="text-green-600">"https://img.youtube.com/vi/UB1O30fR-EE/hqdefault.jpg"</span>
    <span className="text-red-500"> alt</span>=
    <span className="text-green-600">"Video thumbnail"</span>
    <span className="text-red-500"> style</span>=
    <span className="text-green-600">"width:100%; display:block;"</span>
    <span className="text-gray-500"> /&gt;</span>
    <br/>

    &nbsp;&nbsp;<span className="text-gray-500">&lt;div</span>
    <span className="text-red-500"> style</span>=
    <span className="text-green-600">"position:absolute; inset:0; display:flex; justify-content:center; align-items:center;"</span>
    <span className="text-gray-500">&gt;</span>
    <br/>

    &nbsp;&nbsp;&nbsp;&nbsp;▶
    <br/>

    &nbsp;&nbsp;<span className="text-gray-500">&lt;/div&gt;</span>
    <br/>

    <span className="text-gray-500">&lt;/div&gt;</span>

    <br/><br/>

    <span className="text-gray-500">&lt;!-- JS --&gt;</span>
    <br/>

    document.<span className="text-blue-600">querySelector</span>
    <span className="text-gray-500">(</span>
    <span className="text-green-600">'.video-placeholder'</span>
    <span className="text-gray-500">)</span>
    .<span className="text-blue-600">addEventListener</span>
    <span className="text-gray-500">(</span>
    <span className="text-green-600">'click'</span>, 
    <span className="text-yellow-600">function</span>() {'{'}
    <br/>

    &nbsp;&nbsp;<span className="text-blue-600">const</span> iframe = 
    document.<span className="text-blue-600">createElement</span>
    <span className="text-gray-500">(</span>
    <span className="text-green-600">'iframe'</span>
    <span className="text-gray-500">);</span>
    <br/>

    &nbsp;&nbsp;iframe.src = 
    <span className="text-green-600">'https://www.youtube-nocookie.com/embed/UB1O30fR-EE?autoplay=1'</span>;
    <br/>

    &nbsp;&nbsp;iframe.title = 
    <span className="text-green-600">'YouTube video player'</span>;
    <br/>

    &nbsp;&nbsp;iframe.allow = 
    <span className="text-green-600">'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'</span>;
    <br/>

    &nbsp;&nbsp;iframe.allowFullscreen = <span className="text-blue-600">true</span>;
    <br/>

    &nbsp;&nbsp;iframe.style.width = <span className="text-green-600">'100%'</span>;
    <br/>

    &nbsp;&nbsp;iframe.style.height = <span className="text-green-600">'100%'</span>;
    <br/>

    &nbsp;&nbsp;<span className="text-purple-600">this</span>.innerHTML = <span className="text-green-600">''</span>;
    <br/>

    &nbsp;&nbsp;<span className="text-purple-600">this</span>.
    <span className="text-blue-600">appendChild</span>(iframe);
    <br/>

    {'});'}
  </code>
</pre>  <p className="leading-relaxed mb-3">
          This avoids loading the heavy iframe until the user is ready to watch.
        </p>
      </section>

      {/* Playlist & Channel Embeds */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-3">6. Playlist Embed</h2>
        <p className="leading-relaxed mb-3">
          Embed an entire playlist by using its ID:
        </p>
      <pre className="bg-gray-100 p-3 rounded-md overflow-x-auto max-w-full whitespace-pre-wrap mb-3 text-sm">
  <code>
    <span className="text-gray-500">&lt;iframe</span>
    <br/>
    &nbsp;&nbsp;<span className="text-red-500">src</span>=
    <span className="text-green-600">
      "https://www.youtube.com/embed?listType=playlist&amp;list=PLWKjhJtqVAbnupwRFO6G0Gnjz8n-3XCTZ"
    </span>
    <br/>
    &nbsp;&nbsp;<span className="text-red-500">title</span>=
    <span className="text-green-600">"YouTube playlist"</span>
    <br/>
    &nbsp;&nbsp;<span className="text-red-500">allowfullscreen</span>
    <br/>
    <span className="text-gray-500">&gt;</span>
    <br/>

    <span className="text-gray-500">&lt;/iframe&gt;</span>
  </code>
</pre>
        <p className="leading-relaxed mb-3">
          Replace the <code>list=</code> value with the actual playlist ID.
        </p>
      </section>

      {/* YouTube IFrame API */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-3">7. YouTube IFrame API</h2>
        <p className="leading-relaxed mb-4">
          For interactive control (play, pause, listen to events), use the YouTube IFrame API:
        </p>
        <p className="leading-relaxed mb-4">
          Example initialization:
        </p>
      <pre className="bg-gray-100 p-3 rounded-md overflow-x-auto max-w-full whitespace-pre-wrap mb-5 text-sm">
  <code>
    <span className="text-gray-500">&lt;div</span>
    <span className="text-red-500"> id</span>=
    <span className="text-green-600">"player"</span>
    <span className="text-gray-500">&gt;&lt;/div&gt;</span>
    <br/><br/>

    <span className="text-gray-500">&lt;script</span>
    <span className="text-red-500"> src</span>=
    <span className="text-green-600">"https://www.youtube.com/iframe_api"</span>
    <span className="text-gray-500">&gt;&lt;/script&gt;</span>
    <br/><br/>

    <span className="text-blue-600">let</span> player;
    <br/>

    <span className="text-blue-600">function</span> 
    <span className="text-purple-600">onYouTubeIframeAPIReady</span>()
    {' {'}
    <br/>

    &nbsp;&nbsp;player = <span className="text-blue-600">new</span> YT.Player
    <span className="text-gray-500">(</span>
    <span className="text-green-600">'player'</span>, {'{'}
    <br/>

    &nbsp;&nbsp;&nbsp;&nbsp;height: <span className="text-green-600">'360'</span>,
    <br/>
    &nbsp;&nbsp;&nbsp;&nbsp;width: <span className="text-green-600">'640'</span>,
    <br/>
    &nbsp;&nbsp;&nbsp;&nbsp;videoId: <span className="text-green-600">'UB1O30fR-EE'</span>,
    <br/>

    &nbsp;&nbsp;&nbsp;&nbsp;events: {'{'}
    <br/>

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;onReady: 
    <span className="text-yellow-600">()</span> =&gt; 
    <span className="text-blue-600">console</span>.log(<span className="text-green-600">'Ready'</span>),
    <br/>

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;onStateChange: 
    <span className="text-yellow-600">(e)</span> =&gt; 
    <span className="text-blue-600">console</span>.log(<span className="text-green-600">'State'</span>, e.data)
    <br/>

    &nbsp;&nbsp;&nbsp;&nbsp;{'}'}
    <br/>

    &nbsp;&nbsp;{'}'});
    <br/>

    {'}'}
  </code>
</pre>
      </section>

      {/* Accessibility & SEO */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-3">8. Accessibility & SEO</h2>
        <ul className="list-[square] list-inside space-y-1 leading-relaxed">
          <li>Always provide a descriptive <code>title</code> on the iframe.</li>
          <li>Include context text before/after the video for users relying on screen readers.</li>
          <li>Lazy loading and captions help performance and inclusivity.</li>
          <li>Use structured data (VideoObject) on the page if embedding important videos for search engines.</li>
        </ul>
      </section>

      {/* Common Mistakes */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-3">Common Mistakes</h2>
        <ul className="list-[square] list-inside space-y-1 leading-relaxed">
          <li>Embedding with fixed pixel sizes without responsive wrapper.</li>
          <li>Forgetting the <code>title</code> attribute (accessibility issue).</li>
          <li>Loading full iframe on page load causing performance hits (skip lazy loading).</li>
          <li>Not using privacy-enhanced domain if concerned about third-party tracking.</li>
        </ul>
      </section>

      {/* Quick Recap */}
      <div className="mt-6 p-4 bg-red-50 rounded-md border border-red-200">
        <h3 className="text-lg font-semibold text-blue-700 mb-3">Quick Recap:</h3>
        <ul className="list-[square] list-inside space-y-1 leading-relaxed text-sm sm:text-base">
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