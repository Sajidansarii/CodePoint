import React, { useEffect, useRef } from "react";

const HtmlCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    // small demo: draw a rectangle + circle + animated ball
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Hi-DPI (Retina) support
    const ctx = canvas.getContext("2d");
    const ratio = window.devicePixelRatio || 1;
    const cssW = canvas.clientWidth;
    const cssH = canvas.clientHeight;
    canvas.width = Math.floor(cssW * ratio);
    canvas.height = Math.floor(cssH * ratio);
    ctx.scale(ratio, ratio);

    // static drawing
    ctx.fillStyle = "#e6f4ff";
    ctx.fillRect(0, 0, cssW, cssH);

    ctx.fillStyle = "#0369a1";
    ctx.fillRect(20, 20, 120, 80); // rectangle

    ctx.beginPath(); // circle
    ctx.arc(220, 60, 40, 0, Math.PI * 2);
    ctx.fillStyle = "#f97316";
    ctx.fill();
    ctx.closePath();

    // animated ball
    let x = 60;
    let vx = 2;
    const radius = 12;
    let rafId;

    const animate = () => {
      // clear only animated region (or whole canvas)
      ctx.clearRect(0, 120, cssW, 200); // clear lower region for animation
      // background for cleared area
      ctx.fillStyle = "#fff";
      ctx.fillRect(0, 120, cssW, 200);

      // draw ball
      ctx.beginPath();
      ctx.arc(x, 180, radius, 0, Math.PI * 2);
      ctx.fillStyle = "#10b981";
      ctx.fill();
      ctx.closePath();

      x += vx;
      if (x + radius > cssW || x - radius < 0) vx *= -1;
      rafId = requestAnimationFrame(animate);
    };

    rafId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div className="p-4 sm:p-6 bg-white rounded-lg shadow-md max-w-4xl">
      <h1 className="text-3xl font-medium mb-4 text-blue-500">HTML &lt;canvas&gt; — Drawing with JavaScript</h1>

      <p className="mb-4">
        The HTML <code>&lt;canvas&gt;</code> element provides a drawable region for
        bitmap graphics via JavaScript. It's ideal for games, visualizations,
        charts, image processing, and custom UI rendering.
      </p>

      <h2 className="text-xl font-semibold mt-4 mb-2">Basic Syntax</h2>
      <pre className="bg-gray-200 p-3 rounded overflow-x-auto mb-4">
{`<canvas id="myCanvas" width="640" height="360">
  Your browser does not support the HTML canvas tag.
</canvas>`}
      </pre>

      <h2 className="text-xl font-semibold mt-4 mb-2">Get 2D Context</h2>
      <p className="mb-2">Use the rendering context to draw — most common is 2D:</p>
      <pre className="bg-gray-200 p-3 rounded overflow-x-auto mb-4">
{`const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');`}
      </pre>

      <h2 className="text-xl font-semibold mt-4 mb-2">Common Drawing Methods</h2>
      <ul className="list-disc ml-6 mb-4 space-y-1">
        <li><code>ctx.fillStyle</code>, <code>ctx.fillRect(x,y,w,h)</code> — filled rectangle</li>
        <li><code>ctx.strokeStyle</code>, <code>ctx.strokeRect(...)</code>, <code>ctx.stroke()</code> — strokes</li>
        <li><code>ctx.beginPath()</code>, <code>ctx.moveTo()</code>, <code>ctx.lineTo()</code>, <code>ctx.arc()</code></li>
        <li><code>ctx.drawImage(img, x, y)</code> — draw images</li>
        <li><code>ctx.clearRect(x,y,w,h)</code> — clear area</li>
      </ul>

      <h2 className="text-xl font-semibold mt-4 mb-2">Example: Draw Image</h2>
      <pre className="bg-gray-200  p-3 rounded overflow-x-auto mb-4">
{`const img = new Image();
img.onload = () => ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
img.src = 'photo.jpg';`}
      </pre>

      <h2 className="text-xl font-semibold mt-4 mb-2">Hi-DPI (Retina) Support</h2>
      <p className="mb-4">
        Canvas uses pixel dimensions. For sharp rendering on high-DPI displays, scale the internal pixel buffer by <code>window.devicePixelRatio</code> and then use CSS for layout size. (See demo code in this component.)
      </p>

      <h2 className="text-xl font-semibold mt-4 mb-2">Animation Loop</h2>
      <p className="mb-2">
        Use <code>requestAnimationFrame()</code> for smooth animations and cancel it when not needed to save CPU.
      </p>

      <h2 className="text-xl font-semibold mt-4 mb-2">Canvas Events & Interactivity</h2>
      <p className="mb-2">
        Canvas itself receives pointer events (click, mousemove). You must map event coordinates to canvas coordinates, considering CSS size vs internal pixel size.
      </p>

      <h2 className="text-xl font-semibold mt-4 mb-2">Accessibility</h2>
      <ul className="list-disc ml-6 mb-4">
        <li>Provide alternative content between the &lt;canvas&gt; tags for non-supporting or assistive browsers.</li>
        <li>For complex visuals (charts), provide accessible text summaries or an off-screen DOM fallback.</li>
        <li>Use ARIA and visible HTML descriptions where appropriate.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-4 mb-2">Performance Tips</h2>
      <ul className="list-disc ml-6 mb-4">
        <li>Batch draws where possible — reduce state changes.</li>
        <li>Avoid expensive operations inside tight loops (measure & profile).</li>
        <li>Use offscreen canvas / Web Workers for heavy rendering (OffscreenCanvas API).</li>
        <li>Limit canvas size; larger canvases are more expensive to redraw.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-4 mb-2">Security</h2>
      <p className="mb-4">
        When drawing images from other origins, CORS rules apply. Drawing a tainted image will block reading pixel data (e.g., <code>toDataURL()</code>) unless the image server sends proper CORS headers.
      </p>

      <h2 className="text-xl font-semibold mt-4 mb-2">Live Demo</h2>
      <div className="mb-4 border rounded overflow-hidden">
        {/* canvas container: CSS size is used, internal pixel buffer scaled for HiDPI */}
        <div className="w-full" style={{ height: 260 }}>
          <canvas
            ref={canvasRef}
            className="w-full h-full block"
            aria-label="Canvas demo: shapes and animated ball"
          >
            Your browser does not support the HTML canvas element.
          </canvas>
        </div>
      </div>

      <div className="bg-blue-50 p-3 rounded">
         <strong>Recap:</strong> Use &lt;canvas&gt; for bitmap graphics, handle Hi-DPI by scaling, animate with <code>requestAnimationFrame</code>, and always provide accessible alternatives.
      </div>
    </div>
  );
};

export default HtmlCanvas;