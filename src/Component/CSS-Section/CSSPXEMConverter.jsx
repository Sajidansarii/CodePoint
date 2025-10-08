import React, { useState } from "react";

const PxEmConverter = () => {
  const data = [
    {PX:'5px', em:'0.3125em', percent:'31.25%'},
    {PX:'6px', em:'0.3750em', percent:'37.5%'},
    {PX:'7px', em:'0.4375em', percent:'43.75%'},
    {PX:'8px', em:'0.5000em', percent:'50%'},
    {PX:'9px',  em:'0.5625em', percent:'56.25%'},
    {PX:'10px', em:'0.6250em', percent:'62.5%'},
    {PX:'11px', em:'0.6875em', percent:'68.75%'},
    {PX:'12px', em:'0.7500em', percent:'75%'},
    {PX:'13px', em:'0.8125em', percent:'81.25%'},
    {PX:'14px', em:'0.8750em', percent:'87.5%'},
    {PX:'15px', em:'0.9375em', percent:'93.75%'},
    {PX:'16px', em:'1.0000em', percent:'100%'},
    {PX:'17px', em:'1.0625em', percent:'106.25%'},
    {PX:'18px', em:'1.1250em', percent:'112.5%'},
    {PX:'19px', em:'1.1875em', percent:'118.75%'},
    {PX:'20px', em:'1.2500em', percent:'125%'},
    {PX:'21px', em:'1.3125em', percent:'131.25%'},
    {PX:'22px', em:'1.375em', percent:'137.5%'},
    {PX:'23px', em:'1.4375em', percent:'143.75%'},
    {PX:'24px', em:'1.5em', percent:'150%'},
    {PX:'25px', em:'1.5625em', percent:'156.25%'},
    {PX:'26px', em:'1.625em', percent:'162.5%'},
    {PX:'27px', em:'1.6875em', percent:'168.75%'},
    {PX:'28px', em:'1.75em', percent:'175%'},
    {PX:'29px', em:'1.8125em', percent:'181.25%'},
    {PX:'30px', em:'1.875em', percent:'187.5%'},
  ];



  const [px, setPx] = useState(16);
  const [base, setBase] = useState(16);

  // Formula for conversion
  const emValue = (px / base).toFixed(2);

  return (
    <div className="p-6">
      {/* Title */}
      <h2 className="text-3xl text-blue-500 font-medium mb-6">CSS PX ↔ EM Converter</h2>

      {/* Description */}
      <p className="text-gray-700 mb-6">
       PX (pixels) is a fixed unit, whereas EM is a relative unit.
1em equals the font size of the parent element.
By default, 1em = 16px.
      </p>

      {/* Converter Box */}
      <div className="bg-white shadow-md rounded-lg p-4 mb-6">
        <label className="block mb-2 font-semibold">Enter PX Value:</label>
        <input
          type="number"
          value={px}
          onChange={(e) => setPx(e.target.value)}
          className="w-full border rounded p-2 mb-4"
        />

        <label className="block mb-2 font-semibold">Base Font Size (px):</label>
        <input
          type="number"
          value={base}
          onChange={(e) => setBase(e.target.value)}
          className="w-full border rounded p-2 mb-4"
        />

        <div className="bg-gray-100 p-3 rounded text-center">
          <p className="text-lg">
            <b>{px}px</b> = <b>{emValue}em</b> (base {base}px)
          </p>
        </div>
      </div>

      <h1 className="text-2xl mb-4">Body Font Size</h1>
      <p className="mb-1">Use the table below to choose a body font size in pixels (px) and view its full em and percent equivalents.</p>
      <p>Note: Most browsers use 16px as the default font size.</p>

      <table className="mt-10 min-w-full boredr border-gray-300 text-gray-700 text-sm text-left rounded-md">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2 border-b border-gray-300 text-gray-700 font-bold">PX</th>
            <th className="px-4 py-2 border-b border-gray-300 text-gray-700 font-bold">em</th>
            <th className="px-4 py-2 border-b border-gray-300 text-gray-700 font-bold">percent</th>
          </tr>
        </thead>
        <tbody>
     {data.map((row,index)=>(
      <tr className="cursor-text hover:bg-gray-100">
        <td className="px-4 py-2 border-b border-gray-200">{row.PX}</td>
        <td className="px-4 py-2 border-b border-gray-200">{row.em}</td>
        <td className="px-4 py-2 border-b border-gray-200">{row.em}</td>
      </tr>
     ))}
        </tbody>
      </table>

      <ul className="list-[square] mt-10">
        <li><strong>PX (Pixels)</strong>: A fixed unit. The size stays the same regardless of the parent or screen size.</li>
        <li><strong>EM</strong>: A relative unit. It scales based on the font size of the parent element.</li>
        <li><strong>Percent (%)</strong>: Also a relative unit, based on the parent element’s size—often used for widths and font sizes.</li>
      </ul>

      {/* Explanation */}
      <p className="mt-6 text-gray-700">
        EM units are useful for responsive design because they scale relative to the parent’s font size. PX is fixed and not flexible for responsive layouts.
      </p>
    </div>
  );
};

export default PxEmConverter;