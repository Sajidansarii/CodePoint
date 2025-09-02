import React from "react";

const CssRWDFrameworks = () => {
  return (
    <div className="p-6 space-y-6">
      {/* Title */}
      <h1 className="text-3xl font-bold text-blue-600">
        Responsive Web Design - Frameworks
      </h1>

      {/* Intro */}
      <p className="text-gray-700">
        Responsive Web Design (RWD) frameworks aise pre-built CSS aur JavaScript
        libraries hote hain jo responsive layouts banane ko simple aur fast bana dete hain.
        Inke andar ready-made grid systems, responsive classes aur UI components hote hain
        jo har screen size ke liye automatically adjust ho jaate hain.
      </p>

      {/* Why Frameworks */}
      <h2 className="text-2xl font-semibold">Why Use RWD Frameworks?</h2>
      <ul className="list-disc list-inside space-y-2 text-gray-700">
        <li>Fast aur efficient development.</li>
        <li>Cross-browser compatibility ensure hoti hai.</li>
        <li>Responsive layouts easily ban jate hain.</li>
        <li>Mobile-first design principles follow karte hain.</li>
      </ul>

      {/* Popular Frameworks */}
      <h2 className="text-2xl font-semibold">Popular RWD Frameworks</h2>
      <div className="space-y-4 text-gray-700">
        <p>
          <strong>1. Bootstrap:</strong> Sabse popular framework hai jo grid system aur
          responsive components provide karta hai.
        </p>
        <p>
          <strong>2. Foundation:</strong> Mobile-first responsive framework jo accessibility
          par focus karta hai.
        </p>
        <p>
          <strong>3. Tailwind CSS:</strong> Utility-first CSS framework jo responsive design
          banane ke liye breakpoints aur classes provide karta hai.
        </p>
        <p>
          <strong>4. Bulma:</strong> Lightweight aur modern CSS framework built on Flexbox.
        </p>
      </div>

      {/* Example 1: Bootstrap */}
      <h2 className="text-2xl font-semibold">Example: Bootstrap Grid</h2>
      <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto text-sm">
{`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Bootstrap Example</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <!-- Bootstrap CDN -->
  <link rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css">
</head>
<body>
  <div class="container">
    <div class="row">
      <div class="col-md-6 bg-primary text-white">Column 1</div>
      <div class="col-md-6 bg-success text-white">Column 2</div>
    </div>
  </div>
</body>
</html>`}
      </pre>
      <p className="text-gray-700">
        Yahan <code>col-md-6</code> ka matlab hai ki medium screen aur usse upar par 
        har column screen ke half width lega. Chhoti screen par ye automatically stack ho jaayenge.
      </p>

      {/* Example 2: Tailwind */}
      <h2 className="text-2xl font-semibold">Example: Tailwind CSS Grid</h2>
      <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto text-sm">
{`<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
  <div class="bg-blue-500 text-white p-4">Column 1</div>
  <div class="bg-green-500 text-white p-4">Column 2</div>
</div>`}
      </pre>
      <p className="text-gray-700">
        Tailwind me <code>grid-cols-1</code> chhoti screen par ek column banata hai 
        aur <code>md:grid-cols-2</code> medium screens par usse 2 columns me tod deta hai.
      </p>
    </div>
  );
};

export default CssRWDFrameworks;