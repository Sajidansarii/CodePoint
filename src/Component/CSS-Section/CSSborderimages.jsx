import React from "react";

const CSSBorderImage = () => {
  const data = [
    {Property:'border-image', Description:'A shorthand property for setting all the border-image-* properties'},
    {Property:'border-image-source', Description:"Specifies the path to the image to be used as a border"},
    {Property:'border-image-slice', Description:'Specifies how to slice the border image'},
    {Property:'border-image-width', Description:'Specifies the widths of the border image'},
    {Property:'border-image-outset', Description:'Specifies the amount by which the border image area extends beyond the border box'},
    {Property:'border-image-repeat', Description:'Specifies whether the border image should be repeated, rounded or stretched'},
  ]; 
  return (
    <div className="p-6 space-y-8">
      {/* Heading */}
      <h1 className="text-3xl font-medium text-blue-500">CSS Border-Image</h1>
      <p>
       Using the CSS <span className="text-red-400 bg-gray-50 px-1">border-image</span> property, we can style the border with an image instead of a normal color. This property is mainly used along with <span className="text-red-400 bg-gray-50 px-1">border-style</span>, <span className="text-red-400 bg-gray-50 px-1">border-image-source</span>, <span className="text-red-400 bg-gray-50 px-1">border-image-slice</span>, and <span className="text-red-400 bg-gray-50 px-1">border-image-repeat</span>.
      </p>
      <p>This property divides an image into nine regions and positions them accordingly: corners remain fixed, while edges and the center are stretched or repeated based on the settings.</p>
      <p>The <span className="text-red-400 bg-gray-50 px-1">border-image</span> property serves as a shorthand for the following individual properties:</p>
      <ul className="list-[square] list-inside">
        <li><span className="text-red-400 bg-gray-50 px-1">border-image-source</span>- defines the path to the image</li>
        <li><span className="text-red-400 bg-gray-50 px-1">border-image-slice</span>- defines how to slice the image</li>
        <li><span className="text-red-400 bg-gray-50 px-1">border-image-width</span> - defines the width of the image</li>
        <li><span className="text-red-400 bg-gray-50 px-1">border-image-outset</span> defines the amount by which the border image area extends beyond the border box
</li>
        <li><span className="txet-red-400 bg-gray-50 px-1">border-image-repeat</span> - defines how to repeat the image
</li>
      </ul>
      <p>The border property must be set for <span className="text-red-400 bg-gray-50 px-1">border-image</span> to render correctly.</p>

      {/* Example */}
      <div>
        <h2 className="text-2xl mb-3">Example: Border Image</h2>
        <p className="mb-5">
         In the example given below, a PNG image has been used for the border.
        </p>

        <pre className="min-w-fit bg-gray-900 text-green-400 p-3 rounded mt-2 overflow-x-auto">
{`div {
  border: 15px solid transparent;
  border-image-source: url('https://cloudinary-marketing-res.
  cloudinary.com/image/upload/w_1300/q_auto/f_auto/hiking_dog_mountain');
  border-image-slice: 30;
  border-image-repeat: round;
  border-image-width: 15px;
}`}
        </pre>

        {/* Live Demo */}
        <div className="border p-4 bg-gray-100 text-center flex justify-center mt-4">
          <div
            className="w-60 h-32 border-[15px] border-solid [border-image-source:url('https://cloudinary-marketing-res.cloudinary.com/image/upload/w_1300/q_auto/f_auto/hiking_dog_mountain')] [border-image-slice:30] [border-image-width:15px]
            flex items-center justify-center bg-white"
          >
            Border Image Example
          </div>
        </div>
      </div>

       <table className="min-w-full border border-gray-300 text-gray-700 text-left text-sm rounded-md">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2 border-b border-gray-300 text-gray-700 font-bold">Property</th>
              <th className="px-4 py-2 border-b border-gray-300 text-gray-700 font-bold">Description</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row,index)=>(
              <tr className="cursor-text hover:bg-gray-100">
                <td className="px-4 py-2 border-b border-gray-200">{row.Property}</td>
                <td className="px-4 py-2 border-b border-gray-200">{row.Description}</td>
              </tr>
            ))}
          </tbody>
        </table>


      


      {/* Explanation */}
      <div className="border bg-green-100 py-2 px-2">
        <h2 className="text-xl font-semibold text-gray-800 mb-5">Explanation</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>
            <code>border</code> → First, it is necessary to set the border (otherwise the image will not be applied).
          </li>
          <li>
            <code>border-image-source</code> → It defines which image to use for the border.
          </li>
          <li>
            <code>border-image-slice</code> → It defines how many parts the image should be sliced into (usually 30–40).
          </li>
          <li>
            <code>border-image-repeat</code> → It defines how the image should be repeated or stretched (round, stretch, repeat).
          </li>
          <li>
            <code>border-image-width</code> → It sets the width of the image border.
          </li>
        </ul>
      </div>
      
    </div>
  );
};

export default CSSBorderImage;