import React from "react";

const CssAuralProperties = () => {
  const data = [
    {Property:'azimuth', Description:'Sets where the sound should come from',
       Values:`	angle
left-side
far-left
left
center-left
center
center-right
right
far-right
right-side
behind
leftwards
rightwards`	
    
      },
      {Property:'cue', Description:'Sets the cue properties in one declaration', Values:`cue-before
cue-after`},
{Property:'cue-after', Description:'Specifies a sound to be played after speaking an element"s content', Values:`none
url`},
{Property:'cue-before', Description:'Specifies a sound to be played before speaking an element"s content', Values:`none
url`},
{Property:'elevation', Description:'Sets where the sound should come from', Values:`angle
below
level
above
higher
lower`},
{Property:'pause', Description:'Sets the pause properties in one declaration', Values:`pause-before
pause-after`},
{Property:'pause-after', Description:'Specifies a pause after speaking an element"s content', Values:`time
%`},
{Property:'pause-before', Description:'Specifies a pause before speaking an element"s content', Values:`time
%`},
{Property:'pitch', Description:'Specifies the speaking voice', Values:`frequency
x-low
low
medium
high
x-high`},
{Property:'pitch-range', Description:'Specifies the variation in the speaking voice. (Monotone voice or animated voice?)', Values:'number'},
{Property:'play-during', Description:'Specifies a sound to be played while speaking an element"s content', Values:`auto
none
url
mix
repeat`},
{Property:'richness', Description:'Specifies the richness of the speaking voice. (Rich voice or thin voice?)', Values:'number'},
{Property:'speak', Description:'Specifies whether content will render aurally', Values:`normal
none
spell-out`},
{Property:'speak-header', Description:'Specifies how to handle table headers. Should the headers be spoken before every cell, or only before a cell with a different header than the previous cell', Values:`always
once`},
{Property:'speak-numeral', Description:'Specifies how to speak numbers', Values:`digits
continuous`},
{Property:'speak-punctuation', Description:'Specifies how to speak punctuation characters', Values:`none
code`},
{Property:'speech-rate', Description:'Specifies the speed of the speaking', Values:`number
x-slow
slow
medium
fast
x-fast
faster
slower`},
{Property:'stress', Description:'Specifies the "stress" in the speaking voice', Values:`number`},
{Property:'voice-family', Description:'Specifies the voice family of the speaking', Values:`specific-voice
generic-voice`},
{Property:'volume', Description:'Specifies the volume of the speaking', Values:`number
%
silent
x-soft
soft
medium
loud
x-loud`},

  ];

  return (
    <div className="p-6">
      <h2 className="text-3xl font-medium mb-4 text-blue-500">CSS Aural Properties</h2>
      <p className="mb-6">
       CSS Aural Properties are created for users who rely on screen readers. These properties control how the text is spoken—such as voice pitch, volume, pronunciation, and more.
      </p>
      <p>Aural presentation may be utilized in the following scenarios:</p>
      <ul className="list-[square] list-inside">
        <li>by blind people</li>
        <li>to help users learning to read</li>
        <li>to help users who have reading problems</li>
        <li>for home entertainment</li>
        <li>in the car</li>
        <li>by print-impaired communities</li>
      </ul>

      <p className="mt-5">With aural presentation, the content is converted into plain text and passed to a screen reader that reads the characters out loud.</p>
      <p className="mt-5 mb-5">A practical example of applying Aural CSS</p>
      <pre className="border-2 border-gray-100 p-4 rounded-sm">
        {`@media aural {
  h1, h2, h3, h4 {
    voice-family: male;
    richness: 80;
    cue-before: url("beep.au")
  }
}`}
      </pre>
      <p className="mt-3">The example causes the speech synthesizer to emit a sound and then vocalize the headers using a full male voice.</p>

      <h1 className="text-2xl mt-6">CSS Aural Properties</h1>
      <table className="min-w-full border border-gray-300 text-gray-700 text-sm text-left rounded-md mt-5">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2 border-b border-gray-300 text-gray-700 font-bold">Property</th>
            <th className="px-4 py-2 border-b border-gray-300 text-gray-700 font-bold">Description</th>
            <th className="px-4 py-2 border-b border-gray-300 text-gray-700 font-bold">Values</th>
          </tr>
        </thead>
        <tbody>
       {data.map((row,index)=>(
        <tr className="cursor-text hover:bg-slate-100">
          <td className="px-4 py-2 border-b border-gray-200">{row.Property}</td>
          <td className="px-4 py-2 border-b border-gray-200">{row.Description}</td>
          <td className="px-4 py-2 border-b border-gray-200 whitespace-pre-line">{row.Values}</td>
        </tr>
       ))}
        </tbody>
      </table>






      {/* Explanation */}
      <p className="mt-10 text-gray-700">
       Is example me agar device <b>speech mode</b> support karta hai (like screen reader), 
        to paragraph text ko <b>normal</b> way me read kiya jayega, <b>loud volume</b> aur 
        <b>medium pitch</b> ke sath, aur <b>female voice</b> ka use hoga.  
        Ye accessibility ke liye kaafi useful hai.
      </p>
    </div>
  );
};

export default CssAuralProperties;