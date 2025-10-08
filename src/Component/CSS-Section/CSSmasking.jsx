import React from "react";

const CssMasking = () => {
  const data= [
    {Value:'mask-image', Description:'It specifies an image for the mask layer for an element. Default value is none.'},
    {Value:'mask-mode', Description:'It specifies whether the mask layer image should be luminance mask or alpha mask. Default value is match-source.'},
    {Value:'mask-composite', Description:'It specifies a compositing operation used on the current mask layer with the below mask layers. Default value is add.'},
    {Value:'mask-clip', Description:'It specifies the area affected by a mask image. Default value is border-box.'},
    {Value:'mask-origin', Description:'It specifies the origin position of a mask layer image. Default value is border- box.'},
    {Value:'mask-position', Description:'It sets the starting position of a mask image relative to the mask position area. Default value is 0% 0%.'},
    {Value:'mask-repeat', Description:'It specifies how a mask image will be repeated. Default value is repeat.'},
    {Value:'mask-size', Description:'It specifies the size of the mask layer image. Default value is auto.'},
    {Value:'initial', Description:'It sets the property to its default value.'},
    {Value:'inherit', Description:'It inherits the property from the parent element.'},
  ];  
  return (
    <div className="p-8 min-h-screen space-y-6">
      {/* Title */}
      <h1 className="text-3xl font-medium text-blue-500">
        CSS Masking
      </h1>

      <p>
       In CSS, the mask shorthand property defines how an image mask is applied to an element, encapsulating detailed behavior through associated longhand properties.
      </p>
      <h1 className="text-2xl">Syntax</h1>
      <pre className="bg-gray-200 p-4 w-[900px] rounded-lg overflow-auto">
        <code>
          {`mask: <mask-image> <mask-mode> <mask-composite> <mask-clip> <mask-origin> <mask-position> <mask-repeat> <mask-size> | initial | inherit;`}
        </code>
      </pre>

      {/* Example 1: Basic Masking with PNG */}
      <div className="bg-white p-6 space-y-4">
        <h2 className="font-semibold text-xl">
          1. Mask Image with Transparent PNG
        </h2>
        <p>
          We can use the mask-image property to treat the transparent parts of a PNG image as a mask.
        </p>

        <pre className="bg-gray-200  p-4 rounded text-sm overflow-x-auto">
{`div {
  mask-image: url('mask-shape.png');
  -webkit-mask-image: url('mask-shape.png'); /* Safari ke liye */
  mask-repeat: no-repeat;
  mask-position: center;
  mask-size: cover;
}`}
        </pre>

          <p>
            Here, if you use a PNG image as a mask (like a star shape), the content will only be visible inside that shape.</p>
        </div>

      {/* Example 2: Gradient Masking */}
      <div className="bg-white p-6  space-y-4">
        <h2 className="font-semibold text-xl">2. Gradient Mask</h2>
        <p>By using a gradient as a mask, we can create smooth fade effects.</p>

        <pre className="bg-gray-200  p-4 rounded text-sm overflow-x-auto">
{`div {
  mask-image: linear-gradient(to right, black, transparent);
  -webkit-mask-image: linear-gradient(to right, black, transparent);
}`}
        </pre>

          <p>
             In this example, the element will appear solid on the left side and become transparent on the right side.
          </p>
       </div>

      {/* Example 3: Mask with SVG */}
      <div className="bg-white p-6 space-y-4">
        <h2 className="font-semibold text-xl">3. Mask with SVG</h2>
        <p>
          We can use an SVG shape as a mask.
        </p>

        <pre className="bg-gray-200  p-4 rounded text-sm overflow-x-auto">
{`div {
  mask-image: url('shape.svg');
  -webkit-mask-image: url('shape.svg');
  mask-repeat: no-repeat;
  mask-position: center;
}`}
        </pre>

          <p>
            If you provide a circle or polygon SVG, the content will be visible only inside that shape.
          </p>
      </div>
       <h1 className="text-2xl">Property Values</h1>
       <table className="min-w-full border border-gray-300 text-sm rounded-md text-left mt-10 ">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2 border-b border-gray-300 text-gray-700 font-bold">Value</th>
            <th className="px-4 py-2 border-b border-gray-300 text-gray-700 font-bold">Description</th>
          </tr>
        </thead>
        <tbody>
         {data.map((row,index)=>(
           <tr className="hover:bg-gray-100 cursor-text">
            <td className="px-4 py-2 border-b">{row.Value}</td>
            <td className="px-4 py-2 border-b">{row.Description}</td>
          </tr>
         ))}
        </tbody>
       </table>






      {/* Example 4: Masking vs Clipping */}
      <div className="bg-white p-6 rounded shadow space-y-4">
        <h2 className="font-semibold text-xl">4. Masking vs Clipping</h2>
        <p className="text-gray-600">
          Masking aur clipping dono similar lagte hain, lekin:
        </p>

        <ul className="list-disc pl-6 text-gray-700">
          <li>
            <strong>Masking</strong> intensity (opacity) ke basis pe visibility
            decide karta hai.
          </li>
          <li>
            <strong>Clipping</strong> sirf shape ke andar content dikhata hai,
            baaki part hide kar deta hai.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CssMasking;