const HTMLAudio = () => {
  return (
    <div className="p-4 max-w-3xl">
      {/* Title */}
      <h1 className="text-3xl sm:text-4xl font-medium text-blue-500 mb-4 text-center sm:text-left">
        HTML Audio
      </h1>

      {/* Intro */}
      <p className="text-gray-700 mb-4">
        The <code>&lt;audio&gt;</code> element embeds sound content (music, narration, effects) in a webpage. You can provide multiple source formats, controls, and fallback text to ensure broad compatibility and accessibility.
      </p>

      {/* Basic Syntax */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-2">Basic Usage</h2>
        <p className="text-gray-700 mb-2">
          A simple audio player with controls:
        </p>
        <pre className="bg-gray-100 p-3 rounded overflow-x-auto text-sm mb-2">
          <code>{`<audio controls>
  <source src="audio.mp3" type="audio/mpeg" />
  <source src="audio.ogg" type="audio/ogg" />
  Your browser does not support the audio element.
</audio>`}</code>
        </pre>
        <p className="text-gray-700">
          The browser selects the first supported format; fallback text appears if none are supported.
        </p>
      </section>

      {/* Attributes */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-2">Common Attributes</h2>
        <ul className="list-disc pl-5 space-y-1 text-gray-700">
          <li><code>controls</code> — Displays playback controls (play/pause, volume, etc.).</li>
          <li><code>autoplay</code> — Starts playback automatically (usually requires <code>muted</code> due to browser restrictions).</li>
          <li><code>muted</code> — Mutes audio; often used together with <code>autoplay</code> so browsers allow it.</li>
          <li><code>loop</code> — Repeats audio when it ends.</li>
          <li><code>preload</code> — Hint for loading: <code>auto</code>, <code>metadata</code>, or <code>none</code>.</li>
          <li><code>volume</code> (via JS) — Programmatically control level; not an attribute on tag directly.</li>
        </ul>
      </section>

      {/* Multiple Sources */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-2">Multiple Source Formats</h2>
        <p className="text-gray-700 mb-2">
          Provide different audio formats to support various browsers:
        </p>
        <pre className="bg-gray-100 p-3 rounded overflow-x-auto text-sm mb-2">
          <code>{`<audio controls>
  <source src="track.mp3" type="audio/mpeg" />
  <source src="track.ogg" type="audio/ogg" />
  <p>Your browser does not support audio playback.</p>
</audio>`}</code>
        </pre>
      </section>

      {/* Accessibility */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-2">Accessibility</h2>
        <p className="text-gray-700 mb-2">
          Ensure users with assistive technologies understand what the audio is:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-700">
          <li>Add descriptive text near the player if the content is important.</li>
          <li>If the audio is non-essential or decorative, make that clear in surrounding context.</li>
          <li>Provide transcripts for spoken content so users who can’t hear can still access the information.</li>
        </ul>
      </section>

      {/* Autoplay Considerations */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-2">Autoplay & Browser Policies</h2>
        <p className="text-gray-700 mb-2">
          Modern browsers often block autoplay with sound. To increase the chance autoplay works, combine with <code>muted</code>. Even then, user interaction is usually required for unmuted playback.
        </p>
        <pre className="bg-gray-100 p-3 rounded overflow-x-auto text-sm mb-2">
          <code>{`<audio autoplay muted loop>
  <source src="ambient.mp3" type="audio/mpeg" />
</audio>`}</code>
        </pre>
      </section>

      {/* JavaScript Control Example */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-2">JavaScript Controls</h2>
        <p className="text-gray-700 mb-2">
          You can manipulate audio with JavaScript:
        </p>
        <pre className="bg-gray-100 p-3 rounded overflow-x-auto text-sm mb-2">
          <code>{`const audio = document.getElementById('myAudio');
audio.play(); // start
audio.volume = 0.5; // set volume
audio.pause(); // stop`}</code>
        </pre>
        <p className="text-gray-700">
          Example markup for script:
        </p>
        <pre className="bg-gray-100 p-3 rounded overflow-x-auto text-sm">
          <code>{<audio id="myAudio" src="song.mp3" controls></audio>}</code>
        </pre>
      </section>

      {/* Best Practices */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-2">Best Practices</h2>
        <ul className="list-disc pl-5 space-y-1 text-gray-700">
          <li>Always provide <code>controls</code> unless you have a strong reason not to.</li>
          <li>Offer multiple formats for compatibility.</li>
          <li>Include a transcript when the audio conveys essential information.</li>
          <li>Don’t autoplay with sound; let users initiate playback.</li>
          <li>Optimize file size for performance (compress audio).</li>
        </ul>
      </section>

      {/* Common Mistakes */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-2">Common Mistakes</h2>
        <ul className="list-disc pl-5 space-y-1 text-gray-700">
          <li>Relying on a single format that some browsers don’t support.</li>
          <li>Autoplaying loud audio unexpectedly—frustrates users.</li>
          <li>Not providing fallback content or transcript.</li>
          <li>Omitting <code>controls</code> without alternative controls.</li>
        </ul>
      </section>

      {/* Quick Recap */}
      <div className="mt-6 p-4 bg-blue-50 rounded-md border border-blue-200">
        <h3 className="text-lg font-semibold text-blue-700 mb-2">Quick Recap:</h3>
        <ul className="list-disc pl-5 space-y-1 text-gray-700 text-sm sm:text-base">
          <li><code>&lt;audio&gt;</code> embeds sound; use multiple <code>&lt;source&gt;</code> for compatibility.</li>
          <li>Include <code>controls</code> and provide accessible alternatives like transcripts.</li>
          <li>Avoid autoplay with sound; respect user experience.</li>
          <li>Use JavaScript to programmatically control playback if needed.</li>
        </ul>
      </div>
    </div>
  );
};

export default HTMLAudio;