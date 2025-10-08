import React from "react";

const CssAuralMedia = () => {
  const data = [
    {Property:'azimuth', Description:'Sets where the sound should come from', Value:'angle, left-side, far-left, left, center-left, center, center-right, right, far-right, right-side, behind, leftwards, rightwards'},
{Property:'cue', Description:'Sets the cue properties in one declaration', Value:'	cue-before, cue-after'},
{Property:'cue-after', Description:'Specifies a sound to be played after speaking an elements content', Value:'none,url'},
{Property:'cue-before', Description:'Specifies a sound to be played before speaking an elements content', Value:'none,url'},
{Property:'elevation', Description:'Sets where the sound should come from', Value:'angle,below,level,above,higher,lower'},
{Property:'pause', Description:'Sets the pause properties in one declaration', Value:'	pause-before,pause-after'},
{Property:'pause-after', Description:'Specifies a pause after speaking an elements content', Value:'time,%'},
{Property:'pause-before', Description:'Specifies a pause before speaking an elements content', Value:'time,%'},
{Property:'pitch', Description:'Specifies the speaking voice', Value:'frequency,x-low,low,medium,high,x-high'},
{Property:'pitch-range', Description:'Specifies the variation in the speaking voice. (Monotone voice or animated voice?)', Value:'number'},
{Property:'play-during', Description:'Specifies a sound to be played while speaking an elements content', Value:"auto,none,url,mix,repeat"},
{Property:'richness', Description:'Specifies the richness of the speaking voice. (Rich voice or thin voice?)', Value:"number"},
{Property:'speak', Description:'Specifies whether content will render aurally', Value:'normal,none,spell-out'},
{Property:'speak-header', Description:'Specifies how to handle table headers. Should the headers be spoken before every cell, or only before a cell with a different header than the previous cell', Value:'always,once'},
{Property:'speak-numeral', Description:'Specifies how to speak numbers', Value:'digits,continuous'},
{Property:'speak-punctuation', Description:'Specifies how to speak punctuation characters', Value:'	none,code'},
{Property:'speech-rate', Description:'Specifies the speed of the speaking', Value:'number,x-slow,slow,medium,fast,x-fast,faster,slower'},
{Property:'stress', Description:'Specifies the "stress" in the speaking voice', Value:'number'},
{Property:'voice-family', Description:'Specifies the voice family of the speaking', Value:'specific-voice,generic-voice'},
{Property:'volume', Description:'Specifies the volume of the speaking', Value:'number,%,silent,x-soft,soft,medium,loud,x-loud'}
  ];
  return (
    <div className="p-8 min-h-screen space-y-6">
      <h1 className="text-3xl font-medium text-blue-500">
        CSS Aural Media
      </h1>
      <p>Aural Media is a CSS media type that was used for speech synthesizers and screen readers. Its purpose was to allow visually impaired users to listen to the website.</p>

      <p> Nowadays, it has been replaced by speech media and ARIA attributes.</p>

      <p>Aural presentation may be implemented through these approaches:</p>
      <ul className="list-[square] list-inside">
        <li>by blind people</li>
        <li>to help users learning to read</li>
        <li>to help users who have reading problems</li>
        <li>for home entertainment</li>
        <li>in the car</li>
        <li>by print-impaired communities</li>
      </ul>

      <p>Aural presentation converts the content of the document into plain text format and provides it to a screen reader — a tool that vocalizes everything displayed on the screen.</p>
      <p>The following illustrates a basic aural style sheet:</p>

        <h2 className="text-xl font-semibold mb-2">Syntax</h2>
        <pre className="bg-gray-200 p-4 rounded text-sm overflow-x-auto text-left">
          <code>
{`@media aural {
  h1 {
    voice-family: male;
    stress: 20;
    richness: 90;
    cue-before: url("ding.wav");
  }
}`}
</code>
        </pre>

      <p>The provided example triggers the speech synthesizer to play an initial sound, followed by reading the headers in a pronounced male voice.</p>
      <p>The aural media type is now deprecated.</p>

        <h2 className="text-xl font-semibold">Example: Aural Media Query</h2>
        <p className="text-gray-700">Below is an example where the aural media type defines a different style for screen readers:</p>
        
        <pre className="bg-gray-200 p-4 rounded text-sm overflow-x-auto text-left">
          <code>
{`@media speech {
  h1 {
    voice-family: female;
    volume: loud;
    pitch: x-high;
    richness: 80;
  }

  p {
    pause-before: 200ms;
    pause-after: 200ms;
  }
}`}
</code>
        </pre>
        <p>The system initiates audio output with a tone signal, followed by vocalizing the header text using a high-fidelity male voice profile.</p>
        <p>The aural media type is obsolete and has been superseded by more effective accessibility tools like ARIA and semantic markup.</p>
        

        <h1 className="text-2xl">CSS Aural Reference</h1>
        <table className="min-w-full border border-gray-300 text-gray-700 text-left text-sm rounded-md">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2 border-b border-gray-300 text-gray-700 font-bold">Property</th>
              <th className="px-4 py-2 border-b border-gray-300 text-gray-700 font-bold">Description</th>
              <th className="px-4 py-2 border-b border-gray-300 text-gray-700 font-bold">Value</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row,index)=>(
              <tr className="cursor-text hover:bg-gray-100">
                <td className="px-4 py-2 border-b border-gray-200">{row.Property}</td>
                <td className="px-4 py-2 border-b border-gray-200">{row.Description}</td>
                <td className="px-4 py-2 border-b border-gray-200">{row.Value}</td>
              </tr>
            ))}
          </tbody>
        </table>

      <div className="bg-white p-6 rounded shadow">
        <h2 className="text-xl font-semibold">📝 Explanation</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2 text-left">
          <li>
            <strong>@media aural</strong> → It applied special styles when the output device was an aural device (speech reader).
          </li>
          <li>
            <strong>voice-family</strong> → It specifies whether a male or female voice will be used.
          </li>
          <li>
            <strong>volume</strong> → It controls the loudness of the voice (soft, medium, loud).
          </li>
          <li>
            <strong>pitch</strong> → It sets the frequency of the sound (low, high, x-high).
          </li>
          <li>
            <strong>cue-before / cue-after</strong> → It plays an audio cue (like a “ding” sound) before or after the content.
          </li>
        </ul>
      </div>
      

      {/* Note */}
      <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4 rounded">
        <p className="text-gray-700">
          The aural media type is now deprecated. In modern web development, using ARIA roles, labels, and screen reader support is considered best practice for accessibility.
        </p>
      </div>
      </div>
  );
};

export default CssAuralMedia;