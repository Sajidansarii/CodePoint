import React from "react";

const HtmlVideo = () => {
  return (
    <div className="p-4 sm:p-6 md:p-8 max-w-4xl">
      <h1 className="text-3xl font-semibold text-blue-500 mb-3">HTML &lt;video&gt; Tag</h1>
      <p className="mb-3">
        The <strong>&lt;video&gt;</strong> tag is used to embed video content
        in an HTML document. It allows you to play video files directly in the
        browser without needing external plugins like Flash.
      </p>

      <h2 className="text-2xl font-semibold mt-5 mb-3">Basic Syntax</h2>
    <pre className="bg-gray-100 p-3 rounded-md overflow-x-auto max-w-full whitespace-pre-wrap mb-3 text-sm">
  <code>
    <span className="text-gray-500">&lt;</span>
    <span className="text-blue-600">video</span>

    <span className="text-red-500"> src</span>=
    <span className="text-green-600">"movie.mp4"</span>

    <span className="text-red-500"> controls</span>

    <span className="text-gray-500">&gt;</span>
    <br/>

    <span className="text-gray-700">
      &nbsp;&nbsp;Your browser does not support the video tag.
    </span>
    <br/>

    <span className="text-gray-500">&lt;/</span>
    <span className="text-blue-600">video</span>
    <span className="text-gray-500">&gt;</span>
  </code>
</pre>

      <h2 className="text-2xl font-semibold mt-5 mb-3">Common Attributes</h2>
      <ul className="list-[square] list-inside mb-3">
        <li><strong className="text-blue-500">src</strong> – Path to the video file.</li>
        <li><strong className="text-blue-500">controls</strong> – Adds play, pause, volume, and other controls.</li>
        <li><strong className="text-blue-500">autoplay</strong> – Starts playing the video automatically.</li>
        <li><strong className="text-blue-500">loop</strong> – Loops the video playback.</li>
        <li><strong className="text-blue-500">muted</strong> – Mutes the audio by default.</li>
        <li><strong className="text-blue-500">poster</strong> – Displays an image before the video starts.</li>
        <li><strong className="text-blue-500">width</strong> / <strong className="text-blue-500">height</strong> – Sets the size of the video player.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-5 mb-3">Example with Multiple Sources</h2>
      <p className="mb-3">
        You can provide multiple video formats to ensure compatibility across
        browsers.
      </p>
    <pre className="bg-gray-100 p-3 rounded-md overflow-x-auto max-w-full whitespace-pre-wrap mb-3 text-sm">
  <code>
    <span className="text-gray-500">&lt;</span>
    <span className="text-blue-600">video</span>

    <span className="text-red-500"> width</span>=
    <span className="text-green-600">"640"</span>

    <span className="text-red-500"> height</span>=
    <span className="text-green-600">"360"</span>

    <span className="text-red-500"> controls</span>

    <span className="text-red-500"> poster</span>=
    <span className="text-green-600">"thumbnail.jpg"</span>

    <span className="text-gray-500">&gt;</span>
    <br/>

    <span className="text-gray-500">&nbsp;&nbsp;&lt;</span>
    <span className="text-blue-600">source</span>

    <span className="text-red-500"> src</span>=
    <span className="text-green-600">"movie.mp4"</span>

    <span className="text-red-500"> type</span>=
    <span className="text-green-600">"video/mp4"</span>

    <span className="text-gray-500">&gt;</span>
    <br/>

    <span className="text-gray-500">&nbsp;&nbsp;&lt;</span>
    <span className="text-blue-600">source</span>

    <span className="text-red-500"> src</span>=
    <span className="text-green-600">"movie.webm"</span>

    <span className="text-red-500"> type</span>=
    <span className="text-green-600">"video/webm"</span>

    <span className="text-gray-500">&gt;</span>
    <br/>

    <span className="text-gray-500">&nbsp;&nbsp;&lt;</span>
    <span className="text-blue-600">source</span>

    <span className="text-red-500"> src</span>=
    <span className="text-green-600">"movie.ogg"</span>

    <span className="text-red-500"> type</span>=
    <span className="text-green-600">"video/ogg"</span>

    <span className="text-gray-500">&gt;</span>
    <br/>

    <span className="text-gray-700">
      &nbsp;&nbsp;Your browser does not support the video tag.
    </span>
    <br/>

    <span className="text-gray-500">&lt;/</span>
    <span className="text-blue-600">video</span>
    <span className="text-gray-500">&gt;</span>
  </code>
</pre>

      <h2 className="text-2xl font-semibold mt-5 mb-3">Browser Support</h2>
      <p className="mb-3">
        Most modern browsers support MP4, WebM, and Ogg formats, but MP4 (H.264 codec) has the widest support.
      </p>

      <div className="bg-yellow-100 p-3 rounded-lg">
        <strong>Tip:</strong> Always include the <code>controls</code> attribute so users can play/pause videos easily.
      </div>
    </div>
  );
};

export default HtmlVideo;