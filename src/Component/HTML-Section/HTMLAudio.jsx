import React from "react";

const HtmlAudio = () => {
  return (
    <div className="p-4 sm:p-6 bg-white rounded-lg shadow-md max-w-4xl">
      <h1 className="text-2xl font-bold mb-4">HTML &lt;audio&gt; Tag</h1>
      <p className="mb-4">
        The <strong>&lt;audio&gt;</strong> tag is used to embed sound content in
        an HTML document. It allows you to play audio files like music, sound
        effects, or podcasts directly in the browser without additional
        software.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Basic Syntax</h2>
      <pre className="bg-gray-900 text-green-400 p-3 rounded-lg overflow-x-auto mb-4">
        {`<audio src="song.mp3" controls>
  Your browser does not support the audio element.
</audio>`}
      </pre>

      <h2 className="text-xl font-semibold mt-6 mb-2">Common Attributes</h2>
      <ul className="list-disc ml-6 mb-4">
        <li><strong>src</strong> – Path to the audio file.</li>
        <li><strong>controls</strong> – Displays play, pause, and volume buttons.</li>
        <li><strong>autoplay</strong> – Starts playing audio automatically.</li>
        <li><strong>loop</strong> – Loops the audio playback.</li>
        <li><strong>muted</strong> – Mutes the audio by default.</li>
        <li><strong>preload</strong> – Hints to the browser how to load audio (<code>auto</code>, <code>metadata</code>, or <code>none</code>).</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">Example with Multiple Sources</h2>
      <p className="mb-4">
        To ensure maximum browser compatibility, you can include multiple audio
        formats.
      </p>
      <pre className="bg-gray-900 text-green-400 p-3 rounded-lg overflow-x-auto mb-4">
        {`<audio controls>
  <source src="song.mp3" type="audio/mpeg">
  <source src="song.ogg" type="audio/ogg">
  <source src="song.wav" type="audio/wav">
  Your browser does not support the audio element.
</audio>`}
      </pre>

      <h2 className="text-xl font-semibold mt-6 mb-2">Browser Support</h2>
      <p className="mb-4">
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