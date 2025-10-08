import React from "react";

const ImageFilterTutorial = () => {
  const data = [
    {Value:'none', Description:'It specifies no effect. Default value.'},
    {Value:'blur(px)', Description:'It applies blur on image. Larger values apply more blur. Default is 0.'},
    {Value:'brightness(%)', Description:'It adjusts the brightness of image. 0% results in black image. 100% is default and results in original image.'},
    {Value:'contrast(%)', Description:'It adjusts the contrast of image. 0% results in black image. 100% is default and results in original image.'},
    {Value:'grayscale(%)', Description:'It converts the image into grayscale iameg. 0% is default and represents original image. 100% is gray image. Negative values are not allowed.'},
    {Value:'hue-rotate(deg)', Description:'It applies a hue-rotation. The degree specified adjusts the image through the angle in the color circle. 0deg is default and represents original image. 360 deg is maximum value'},
    {Value:'invert(%)', Description:'It inverts the image.0% is default and represents original image. 100% results in complete inversion of image. Negative values are not allowed.'},
    {Value:'opacity(%)', Description:'It controls the transparency of an image. 0% represents completely transparent image. 100% is default and represents original image (no transpareny). Negative values are not allowed.'},
    {Value:'saturate(%)', Description:'It saturates the image. 0% represents un-saturated image. 100% is default and represents original image. Negative values are not allowed.'},
    {Value:'sepia(%)', Description:'It converts the image to sepia. 0% is default and represents original image. 100% results in sepia image. Negative values are not allowed.'},
    {Value:'url()', Description:'It takes the location of an XML file that specifies an SVG filter, and could include an anchor to a specific filter element. Example: filter: url(svg-url#element-id).'},
    {Value:'initial', Description:'It sets the property to its default value.'},
    {Value:'inherit', Description:'It inherits the property from the parent element.'},
  ];
  return (
    <div className="p-6 space-y-8">
      {/* Heading */}
      <h1 className="text-3xl font-medium text-blue-500">CSS Image Filters</h1>
      <p className="text-gray-700">
        The <code className="bg-gray-200 px-1 rounded">filter</code> property in CSS is used to apply 
        visual effects to images like <b>blur</b>, <b>grayscale</b>, <b>brightness</b>, and more.  
        Filters make images more stylish without editing them in Photoshop.
      </p>
      <h1 className="text-2xl">Syntax</h1>
      <pre className="text-green-400 bg-gray-900 rounded-lg p-4 w-[750px]">
        {`filter: none | blur() | brightness() | contrast() | drop-shadow() | grayscale() 
        | hue-rotate() | invert() | opacity() | saturate() | sepia() | url();`}
      </pre>
      <h1 className="text-2xl">Property Values</h1>
      <table className="min-w-full border border-gray-300 rounded-md text-sm text-left">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2 border-b border-gray-300 text-gray-700 font-bold">Value</th>
            <th className="px-4 py-2 border-b border-gray-300 text-gray-700 font-bold">Description</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row,index)=>(
            <tr className="cursor-text hover:bg-gray-100">
              <td className="px-4 py-2 border-b border-gray-200">{row.Value}</td>
              <td className="px-4 py-2 border-b border-gray-200">{row.Description}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Blur Example */}
      <div>
        <h2 className="text-xl font-semibold text-gray-800">1. Blur Filter</h2>
        <img
          src="https://cloudinary-marketing-res.cloudinary.com/image/upload/w_1300/q_auto/f_auto/hiking_dog_mountain"
          alt="Blur Example"
          className="rounded-lg shadow-md"
          style={{ filter: "blur(5px)" }}
        />
        <p className="text-gray-700 mt-2">
          The <code>blur(5px)</code> filter makes the image look blurred by <b>5px</b>.
        </p>
        <pre className="bg-gray-900 text-green-400 p-3 rounded mt-2">
{`img {
  filter: blur(5px);
}`}
        </pre>
      </div>

      {/* Grayscale Example */}
      <div>
        <h2 className="text-xl font-semibold text-gray-800">2. Grayscale Filter</h2>
        <img
          src="https://cloudinary-marketing-res.cloudinary.com/image/upload/w_1300/q_auto/f_auto/hiking_dog_mountain"
          alt="Grayscale Example"
          className="rounded-lg shadow-md"
          style={{ filter: "grayscale(100%)" }}
        />
        <p className="text-gray-700 mt-2">
          The <code>grayscale(100%)</code> filter converts the image into black and white.
        </p>
        <pre className="bg-gray-900 text-green-400 p-3 rounded mt-2">
{`img {
  filter: grayscale(100%);
}`}
        </pre>
      </div>

      {/* Brightness Example */}
      <div>
        <h2 className="text-xl font-semibold text-gray-800">3. Brightness Filter</h2>
        <img
          src="https://cloudinary-marketing-res.cloudinary.com/image/upload/w_1300/q_auto/f_auto/hiking_dog_mountain"
          alt="Brightness Example"
          className="rounded-lg shadow-md"
          style={{ filter: "brightness(150%)" }}
        />
        <p className="text-gray-700 mt-2">
          The <code>brightness(150%)</code> filter increases the brightness of the image by 50%.
        </p>
        <pre className="bg-gray-900 text-green-400 p-3 rounded mt-2">
{`img {
  filter: brightness(150%);
}`}
        </pre>
      </div>

      {/* Contrast Example */}
      <div>
        <h2 className="text-xl font-semibold text-gray-800">4. Contrast Filter</h2>
        <img
          src="https://cloudinary-marketing-res.cloudinary.com/image/upload/w_1300/q_auto/f_auto/hiking_dog_mountain"
          alt="Contrast Example"
          className="rounded-lg shadow-md"
          style={{ filter: "contrast(200%)" }}
        />
        <p className="text-gray-700 mt-2">
          The <code>contrast(200%)</code> filter doubles the difference between dark and light areas.
        </p>
        <pre className="bg-gray-900 text-green-400 p-3 rounded mt-2">
{`img {
  filter: contrast(200%);
}`}
        </pre>
      </div>

      {/* Multiple Filters Example */}
      <div>
        <h2 className="text-xl font-semibold text-gray-800">5. Multiple Filters</h2>
        <img
          src="https://cloudinary-marketing-res.cloudinary.com/image/upload/w_1300/q_auto/f_auto/hiking_dog_mountain"
          alt="Multiple Filters Example"
          className="rounded-lg shadow-md"
          style={{ filter: "grayscale(80%) blur(2px) brightness(120%)" }}
        />
        <p className="text-gray-700 mt-2">
          You can also apply <b>multiple filters together</b> like this example 
          where the image is grayscale, slightly blurred, and brightened.
        </p>
        <pre className="bg-gray-900 text-green-400 p-3 rounded mt-2">
{`img {
  filter: grayscale(80%) blur(2px) brightness(120%);
}`}
        </pre>
      </div>
    </div>
  );
};

export default ImageFilterTutorial;