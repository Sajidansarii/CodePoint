const HTMLColors = () => {
  return (
    <div className="p-4 max-w-3xl">
      {/* Title */}
      <h1 className="text-3xl sm:text-4xl font-medium text-blue-500 mb-4 text-center sm:text-left">
        HTML Colors
      </h1>

      {/* Intro */}
      <p className="text-gray-700 mb-4">
        HTML colors are used to set the foreground (text), background, borders, and other visual elements on a web page. Colors in HTML can be defined using names, HEX codes, RGB, RGBA, HSL, or HSLA values.
      </p>

      {/* Color Names */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-2">
          1. Color Names
        </h2>
        <p className="text-gray-700 mb-2">
          HTML supports 140 standard color names.
        </p>
        <pre className="bg-gray-100 p-3 rounded mb-3 overflow-x-auto text-sm">
          <code>{`<p style="color: red;">Red text</p>
<p style="background-color: lightblue;">Light blue background</p>`}</code>
        </pre>
        <div className="flex flex-wrap gap-2">
          <span className="px-3 py-1 rounded text-white" style={{ backgroundColor: "red" }}>
            red
          </span>
          <span className="px-3 py-1 rounded text-black" style={{ backgroundColor: "lightblue" }}>
            lightblue
          </span>
          <span className="px-3 py-1 rounded text-white" style={{ backgroundColor: "green" }}>
            green
          </span>
        </div>
      </section>

      {/* HEX Colors */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-2">
          2. HEX Colors
        </h2>
        <p className="text-gray-700 mb-2">
          A HEX color is a six-digit code representing red, green, and blue values in hexadecimal (0–9, A–F).
        </p>
        <pre className="bg-gray-100 p-3 rounded mb-3 overflow-x-auto text-sm">
          <code>{`<p style="color: #ff0000;">Red text</p>
<p style="background-color: #00ff00;">Green background</p>`}</code>
        </pre>
        <div className="flex flex-wrap gap-2">
          <span className="px-3 py-1 rounded text-white" style={{ backgroundColor: "#ff0000" }}>
            #ff0000
          </span>
          <span className="px-3 py-1 rounded text-black" style={{ backgroundColor: "#00ff00" }}>
            #00ff00
          </span>
          <span className="px-3 py-1 rounded text-white" style={{ backgroundColor: "#0000ff" }}>
            #0000ff
          </span>
        </div>
      </section>

      {/* RGB & RGBA Colors */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-2">
          3. RGB and RGBA Colors
        </h2>
        <p className="text-gray-700 mb-2">
          RGB defines colors using red, green, and blue values (0–255). RGBA adds an alpha value (0–1) for transparency.
        </p>
        <pre className="bg-gray-100 p-3 rounded mb-3 overflow-x-auto text-sm">
          <code>{`<p style="color: rgb(255, 0, 0);">Red text</p>
<p style="background-color: rgba(0, 255, 0, 0.5);">Semi-transparent green background</p>`}</code>
        </pre>
        <div className="flex flex-wrap gap-2">
          <span className="px-3 py-1 rounded text-white" style={{ backgroundColor: "rgb(255,0,0)" }}>
            rgb(255,0,0)
          </span>
          <span className="px-3 py-1 rounded text-black" style={{ backgroundColor: "rgba(0,255,0,0.5)" }}>
            rgba(0,255,0,0.5)
          </span>
        </div>
      </section>

      {/* HSL & HSLA Colors */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-2">
          4. HSL and HSLA Colors
        </h2>
        <p className="text-gray-700 mb-2">
          HSL stands for Hue (0–360), Saturation (0%–100%), and Lightness (0%–100%). HSLA adds alpha transparency.
        </p>
        <pre className="bg-gray-100 p-3 rounded mb-3 overflow-x-auto text-sm">
          <code>{`<p style="color: hsl(0, 100%, 50%);">Red text</p>
<p style="background-color: hsla(120, 100%, 50%, 0.3);">Semi-transparent green background</p>`}</code>
        </pre>
        <div className="flex flex-wrap gap-2">
          <span className="px-3 py-1 rounded text-white" style={{ backgroundColor: "hsl(0,100%,50%)" }}>
            hsl(0,100%,50%)
          </span>
          <span className="px-3 py-1 rounded text-black" style={{ backgroundColor: "hsla(120,100%,50%,0.3)" }}>
            hsla(120,100%,50%,0.3)
          </span>
        </div>
      </section>

      {/* Accessibility */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-2">Accessibility Tips</h2>
        <ul className="list-disc pl-5 space-y-1 text-gray-700">
          <li>Ensure sufficient contrast between text and background for readability.</li>
          <li>Avoid using color as the only way to convey important information.</li>
          <li>Test colors in both light and dark mode if your site supports it.</li>
        </ul>
      </section>

      {/* Quick Recap */}
      <div className="mt-6 p-4 bg-blue-50 rounded-md border border-blue-200">
        <h3 className="text-lg font-semibold text-blue-700 mb-2">Quick Recap:</h3>
        <ul className="list-disc pl-5 space-y-1 text-gray-700 text-sm sm:text-base">
          <li>Colors can be defined using names, HEX, RGB/RGBA, or HSL/HSLA.</li>
          <li>RGBA and HSLA include transparency.</li>
          <li>Always ensure accessibility with good contrast.</li>
        </ul>
      </div>
    </div>
  );
};

export default HTMLColors;