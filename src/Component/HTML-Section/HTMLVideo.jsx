import React from "react";

const HtmlVideo = () => {
  return (
    <div className="p-4 sm:p-6 bg-white rounded-lg shadow-md max-w-4xl">
      <h1 className="text-2xl font-bold mb-4">HTML &lt;video&gt; Tag</h1>
      <p className="mb-4">
        The <strong>&lt;video&gt;</strong> tag is used to embed video content
        in an HTML document. It allows you to play video files directly in the
        browser without needing external plugins like Flash.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Basic Syntax</h2>
      <pre className="bg-gray-900 text-green-400 p-3 rounded-lg overflow-x-auto mb-4">
        {`<video src="movie.mp4" controls>
  Your browser does not support the video tag.
</video>`}
      </pre>

      <h2 className="text-xl font-semibold mt-6 mb-2">Common Attributes</h2>
      <ul className="list-disc ml-6 mb-4">
        <li><strong>src</strong> – Path to the video file.</li>
        <li><strong>controls</strong> – Adds play, pause, volume, and other controls.</li>
        <li><strong>autoplay</strong> – Starts playing the video automatically.</li>
        <li><strong>loop</strong> – Loops the video playback.</li>
        <li><strong>muted</strong> – Mutes the audio by default.</li>
        <li><strong>poster</strong> – Displays an image before the video starts.</li>
        <li><strong>width</strong> / <strong>height</strong> – Sets the size of the video player.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">Example with Multiple Sources</h2>
      <p className="mb-4">
        You can provide multiple video formats to ensure compatibility across
        browsers.
      </p>
      <pre className="bg-gray-900 text-green-400 p-3 rounded-lg overflow-x-auto mb-4">
        {`<video width="640" height="360" controls poster="thumbnail.jpg">
  <source src="movie.mp4" type="video/mp4">
  <source src="movie.webm" type="video/webm">
  <source src="movie.ogg" type="video/ogg">
  Your browser does not support the video tag.
</video>`}
      </pre>

      <h2 className="text-xl font-semibold mt-6 mb-2">Browser Support</h2>
      <p className="mb-4">
        Most modern browsers support MP4, WebM, and Ogg formats, but MP4 (H.264 codec) has the widest support.
      </p>

      <div className="bg-yellow-100 p-3 rounded-lg">
        ⚡ <strong>Tip:</strong> Always include the <code>controls</code> attribute so users can play/pause videos easily.
      </div>
    </div>
  );
};

export default HtmlVideo;