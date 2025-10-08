import React from "react";

const CssWebSafeFonts = () => {
  const fonts = [
    { name: "Arial", class: "font-sans", style: { fontFamily: "Arial, sans-serif" } },
    { name: "Verdana", class: "font-sans", style: { fontFamily: "Verdana, sans-serif" } },
    { name: "Times New Roman", class: "font-serif", style: { fontFamily: "'Times New Roman', serif" } },
    { name: "Georgia", class: "font-serif", style: { fontFamily: "Georgia, serif" } },
    { name: "Courier New", class: "font-mono", style: { fontFamily: "'Courier New', monospace" } },
    { name: "Tahoma", class: "font-sans", style: { fontFamily: "Tahoma, sans-serif" } },
    { name: "Trebuchet MS", class: "font-sans", style: { fontFamily: "'Trebuchet MS', sans-serif" } },
  ];

  const data = [
    {Fontfamily:'Georgia, serif', Normal:'This is normal text.', bold:'This is normal text.'},
    {Fontfamily:'"Times New Roman", Times, serif', Normal:'This is normal text.', bold:'This is normal text'},
    {Fontfamily:'"Palatino Linotype", Palatino, "Book Antiqua", serif', Normal:'This is normal text.', bold:'This is normal text.'},
  ];

  const data1 = [
    {Fontfamily:'Arial, Helvetica, sans-serif, This is normal text.', Normal:'This is normal text.', bold:'This is normal text.'},
    {Fontfamily:'"Arial Black", Gadget, sans-serif', Normal:'This is normal text.', bold:'This is normal text.'},
    {Fontfamily:'Impact, Charcoal, sans-serif', Normal:'This is normal text.', bold:'This is normal text.'},
    {Fontfamily:'Impact, Charcoal, sans-serif', Normal:'This is normal text.', bold:'This is normal text'},
    {Fontfamily:'Tahoma, Geneva, sans-serif', Normal:'This is normal text.', bold:'This is normal text.'},
    {Fontfamily:'"Trebuchet MS", Helvetica, sans-serif', Normal:'This is normal text.', bold:'This is normal text.'},
    {Fontfamily:'Verdana, Geneva, sans-serif', Normal:'This is normal text.', bold:'This is normal text.'},
  ];

  const data2 = [
    {Fontfamily:'Courier, monospace', Normal:'This is normal text.', bold:'This is normal text.'},
    {Fontfamily:'"Courier New", Courier, monospace', Normal:'This is normal text.', bold:'This is normal text.' },
    {Fontfamily:'"Lucida Console", Monaco, monospace', Normal:'This is normal text.', bold:'This is normal text.'},
  ];

  const data3 = [
    {Fontfamily:'"Comic Sans MS", cursive', Normal:'This is normal text.', bold:'This is normal text.'},
    {Fontfamily:'"Courier New", Courier, monospace', Normal:'This is normal text.', bold:'This is normal text.'},
    {Fontfamily:'"Lucida Console", Monaco, monospace', Normal:'This is normal text.', bold:'This is normal text.'},
  ];


  return (
    <div className="p-6">
      <h2 className="text-3xl font-medium mb-4">CSS Web Safe Fonts</h2>
      <p className="mb-6">
        Web safe fonts are those fonts that are available by default on every operating system and browser. This ensures that the text on a website appears the same to every user. Common web safe fonts include: Arial, Verdana, Times New Roman, Georgia, Courier New, etc.</p>

        <h1 className="text-2xl">Best Web Safe Fonts for HTML and CSS</h1>
        <p className="mb-5">Here are some of the most reliable web safe fonts for use in HTML and CSS:</p>

        <h1 className="text-2xl">Serif Fonts</h1>

        <table className="min-w-full border border-gray-300 text-gray-700 text-sm text-left rounded-md mt-5">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2 border-b border-gray-300 text-gray-700 font-bold">Font-family</th>
              <th className="px-4 py-2 border-b border-gray-300 text-gray-700 font-bold">Normal</th>
              <th className="px-4 py-2 border-b border-gray-300 text-gray-700 font-bold">bold</th>
            </tr>
          </thead>
          <tbody>
           {data.map((row,index)=>(
            <tr className="cursor-text- hover:bg-gray-100">
              <td className="px-4 py-2 border-b border-gray-200">{row.Fontfamily}</td>
              <td className="px-4 py-2 border-b border-gray-200">{row.Normal}</td>
              <td className="px-4 py-2 border-b border-gray-200">{row.bold}</td>
            </tr>
           ))}
          </tbody>
        </table>

        <h1 className="text-2xl mt-10 mb-4">Sans-Serif Fonts</h1>
        <table className="min-w-full border- border-gray-300 text-gray-700 text-sm text-left rounded-md">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2 border-b border-gray-300 text-gray-700 font-bold">Font-Family</th>
              <th className="px-4 py-2 border-b border-gray-300 text-gray-700 font-bold">Normal</th>
              <th className="px-4 py-2 border-b border-gray-300 text-gray-700 font-bold">bold</th>
            </tr>
          </thead>
          <tbody>
          {data1.map((row,index)=>(
            <tr className="cursorr-text hover:bg-gray-100">
              <td className="px-4 py-2 border-b border-gray-200">{row.Fontfamily}</td>
              <td className="px-4 py-2 border-b border-gray-200">{row.Normal}</td>
              <td className="px-4 py-2 border-b border-gray-200">{row.bold}</td>
            </tr>
          ))}
          </tbody>
        </table>

        <h1 className="text-2xl mt-10 mb-4">Monospace Fonts</h1>
        <table className="min-w-full border border-gray-300 text-gray-700 text-sm text-left rounded-md">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2 border-b border-gray-300 text-gray-700 font-bold">Font-Family</th>
              <th className="px-4 py-2 border-b border-gray-300 text-gray-700 font-bold">Normal</th>
              <th className="px-4 py-2 border-b border-gray-300 text-gray-700 font-bold">bold</th>
            </tr>
          </thead>
          <tbody>
          {data2.map((row,index)=>(
            <tr className="cursor-text hover:bg-gray-100">
              <td className="px-4 py-2 border-b border-gray-200">{row.Fontfamily}</td>
              <td className="px-4 py-2 border-b border-gray-200">{row.Normal}</td>
              <td className="px-4 py-2 border-b border-gray-200">{row.bold}</td>
            </tr>
          ))}
          </tbody>
        </table>


         <h1 className="text-2xl mt-10 mb-4"> Cursive Fonts</h1>
        <table className="min-w-full border border-gray-300 text-gray-700 text-sm text-left rounded-md">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2 border-b border-gray-300 text-gray-700 font-bold">Font-Family</th>
              <th className="px-4 py-2 border-b border-gray-300 text-gray-700 font-bold">Normal</th>
              <th className="px-4 py-2 border-b border-gray-300 text-gray-700 font-bold">bold</th>
            </tr>
          </thead>
          <tbody>
          {data3.map((row,index)=>(
            <tr className="cursor-text hover:bg-gray-100">
              <td className="px-4 py-2 border-b border-gray-200">{row.Fontfamily}</td>
              <td className="px-4 py-2 border-b border-gray-200">{row.Normal}</td>
              <td className="px-4 py-2 border-b border-gray-200">{row.bold}</td>
            </tr>
          ))}
          </tbody>
        </table>

      {/* Font Preview Boxes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-20">
        {fonts.map((font, index) => (
          <div
            key={index}
            style={font.style}
            className="p-4 border rounded-lg shadow-sm bg-white"
          >
            <p className="text-lg">This is {font.name} font</p>
            <p className="text-sm text-gray-500">Font-family: {font.style.fontFamily}</p>
          </div>
        ))}
      </div>

      {/* Explanation */}
      <p className="mt-4 text-gray-700">
       In the example above, the {'<p>'} tag uses the Arial font, and "sans-serif" is given as a fallback. If the primary font is not available, the browser will use the fallback font.
      </p>
    </div>
  );
};

export default CssWebSafeFonts;