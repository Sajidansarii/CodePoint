import React from "react";

const HtmlAudio = () => {
  return (
    <div className="p-4 sm:p-6 md:p-8 max-w-4xl">
      <h1 className="text-3xl font-semibold mb-4 text-blue-500">HTML &lt;audio&gt; Tag</h1>
      <p className="mb-4">
        The <strong>&lt;audio&gt;</strong> tag is used to embed sound content in
        an HTML document. It allows you to play audio files like music, sound
        effects, or podcasts directly in the browser without additional
        software.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2 text-blue-500">Basic Syntax</h2>
      <pre className="bg-gray-100 p-3 rounded-md overflow-x-auto max-w-full whitespace-pre-wrap mb-3 text-sm">
  <code>
    <span className="text-gray-500">&lt;</span>
    <span className="text-blue-600">audio</span>

    <span className="text-red-500"> src</span>=
    <span className="text-green-600">"song.mp3"</span>

    <span className="text-red-500"> controls</span>

    <span className="text-gray-500">&gt;</span>
    <br/>

    <span className="text-gray-700">
      &nbsp;&nbsp;Your browser does not support the audio element.
    </span>
    <br/>

    <span className="text-gray-500">&lt;/</span>
    <span className="text-blue-600">audio</span>
    <span className="text-gray-500">&gt;</span>
  </code>
</pre>


      <h2 className="text-xl font-semibold mt-6 mb-2 text-blue-500">Common Attributes</h2>
      <ul className="list-[square] list-inside mb-3">
        <li><strong className="text-blue-500">src</strong> – Path to the audio file.</li>
        <li><strong className="text-blue-500">controls</strong> – Displays play, pause, and volume buttons.</li>
        <li><strong className="text-blue-500">autoplay</strong> – Starts playing audio automatically.</li>
        <li><strong className="text-blue-500">loop</strong> – Loops the audio playback.</li>
        <li><strong className="text-blue-500">muted</strong> – Mutes the audio by default.</li>
        <li><strong className="text-blue-500" >preload</strong> – Hints to the browser how to load audio (<code>auto</code>, <code>metadata</code>, or <code>none</code>).</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-3">Example with Multiple Sources</h2>
      <p className="mb-4">
        To ensure maximum browser compatibility, you can include multiple audio
        formats.
      </p>
    <pre className="bg-gray-100 p-3 rounded-md overflow-x-auto max-w-full whitespace-pre-wrap mb-3 text-sm">
  <code>
    <span className="text-gray-500">&lt;</span>
    <span className="text-blue-600">audio</span>
    <span className="text-red-500"> controls</span>
    <span className="text-gray-500">&gt;</span>
    <br/>

    <span className="text-gray-500">&nbsp;&nbsp;&lt;</span>
    <span className="text-blue-600">source</span>
    <span className="text-red-500"> src</span>=
    <span className="text-green-600">"song.mp3"</span>
    <span className="text-red-500"> type</span>=
    <span className="text-green-600">"audio/mpeg"</span>
    <span className="text-gray-500">&gt;</span>
    <br/>

    <span className="text-gray-500">&nbsp;&nbsp;&lt;</span>
    <span className="text-blue-600">source</span>
    <span className="text-red-500"> src</span>=
    <span className="text-green-600">"song.ogg"</span>
    <span className="text-red-500"> type</span>=
    <span className="text-green-600">"audio/ogg"</span>
    <span className="text-gray-500">&gt;</span>
    <br/>

    <span className="text-gray-500">&nbsp;&nbsp;&lt;</span>
    <span className="text-blue-600">source</span>
    <span className="text-red-500"> src</span>=
    <span className="text-green-600">"song.wav"</span>
    <span className="text-red-500"> type</span>=
    <span className="text-green-600">"audio/wav"</span>
    <span className="text-gray-500">&gt;</span>
    <br/>

    <span className="text-gray-700">
      &nbsp;&nbsp;Your browser does not support the audio element.
    </span>
    <br/>

    <span className="text-gray-500">&lt;/</span>
    <span className="text-blue-600">audio</span>
    <span className="text-gray-500">&gt;</span>
  </code>
</pre>
      <h2 className="text-xl font-semibold mt-6 mb-3">Browser Support</h2>
      <p className="mb-3">
        Most modern browsers support MP3, OGG, and WAV formats. MP3 has the
        widest compatibility across all devices.
      </p>

      <div className="bg-yellow-100 p-3 rounded-lg">
        🎵 <strong>Tip:</strong> Always use the <code>controls</code> attribute
        so users can play or pause the audio easily.
      </div>
    </div>
  );
};

export default HtmlAudio;