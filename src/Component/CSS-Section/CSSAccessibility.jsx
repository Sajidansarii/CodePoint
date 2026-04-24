import React from "react";

const AccessibleCard = () => {
  return (
    <div className="p-6 font-sans max-w-4xl mt-10">
      <h1 className="text-3xl font-medium text-blue-500 mb-4">Accessible CSS Example</h1>
      <h1 className="text-2xl">CSS Accessibility Styling</h1>
      <p className="mt-5">A website should be designed with accessibility at its core to ensure that all users, including those with disabilities, can access and interact with its content effectively.</p>
      <p className="mt-5">CSS accessibility styling involves using thoughtful and inclusive design techniques to enhance visual clarity, improve navigation, and create a better overall user experience for everyone, including users with disabilities.</p>

      <h1 className="mt-10 text-2xl">CSS Accessibility Styling Technics</h1>
      <p className="mt-2">Here are some tips and technics on how to improve the accessibility of your web site:</p>

      <h1 className="text-2xl mt-10">Provide High Color Contrast</h1>
      <p className="mt-2">Use high contrast between text and background to make content easier to read, especially for people with visual impairments or color blindness.</p>

      <p className="text-2xl mt-10">Color Contrast Example</p>
     <pre className="bg-gray-200 p-4 rounded-lg overflow-x-auto max-w-full whitespace-pre-wrap">
  <code>
    <span className="text-blue-500">body</span> <span>{'{'}</span><br />

    <span className="text-red-500">background-color</span>
    <span>: </span>
    <span className="text-green-700">#ffffff</span>
    <span>;</span><br />

    <span className="text-red-500">color</span>
    <span>: </span>
    <span className="text-green-700">#000000</span>
    <span>;</span><br />

    <span>{'}'}</span>
  </code>
</pre>

      <h1 className="text-2xl mt-10">Provide Good Font, Font Size and Line Height</h1>
      <p className="mt-2">Always choose fonts that are easy to read, and ensure appropriate font size and line height to enhance readability. Use relative units like rem or em for font sizing, so users can adjust text size through their browser settings. This supports better accessibility, especially for users with visual impairments or reading difficulties.</p>

      <h1 className="text-2xl mt-5">Font Example</h1>
      <pre className="bg-gray-200 p-4 rounded-lg overflow-x-auto max-w-full whitespace-pre-wrap">
  <code>
    <span className="text-blue-500">body</span> <span>{'{'}</span><br />

    <span className="text-red-500">font-family</span>
    <span>: </span>
    <span className="text-green-700">Arial, sans-serif</span>
    <span>;</span><br />

    <span className="text-red-500">font-size</span>
    <span>: </span>
    <span className="text-green-700">1rem</span>
    <span>;</span><br />

    <span className="text-red-500">line-height</span>
    <span>: </span>
    <span className="text-green-700">1.6</span>
    <span>;</span><br />

    <span>{'}'}</span>
  </code>
</pre>

      <h1 className="text-2xl mt-10">Have Visible Focus Indicators</h1>
      <p className="mt-3">Always apply the :focus pseudo-class to ensure that interactive elements—such as links, buttons, and input fields—have a visible and distinct focus style. This helps keyboard users navigate the interface more easily and improves accessibility for users who do not use a mouse.</p>
      <p className="mt-3">Using the :focus pseudo-class ensures that keyboard users and screen reader users can clearly identify which element is currently active or selected. This visual feedback is essential for smooth, accessible navigation without a mouse.</p>

      <h1 className="text-2xl mt-10">Example</h1>
    <pre className="bg-gray-200 p-4 rounded-lg overflow-x-auto max-w-full whitespace-pre-wrap">
  <code>
    <span className="text-blue-500">a:focus, button:focus, input:focus</span> <span>{'{'}</span><br />

    <span className="text-red-500">outline</span>
    <span>: </span>
    <span className="text-green-700">2px solid orange</span>
    <span>;</span><br />

    <span>{'}'}</span>
  </code>
</pre>

      <h1 className="text-2xl mt-10">Avoid Hiding Focus</h1>
      <p className="mt-4">Never remove the browser’s default focus outline unless you replace it with a clear and visible custom focus style. Removing it entirely can make it difficult or impossible for keyboard users to navigate the interface.</p>
     <pre className="bg-gray-200 p-4 rounded-lg overflow-x-auto max-w-full whitespace-pre-wrap">
  <code>
    <span className="text-blue-500">button:focus</span> <span>{'{'}</span><br />

    <span className="text-red-500">outline</span>
    <span>: </span>
    <span className="text-green-700">2px solid orange</span>
    <span>;</span><br />

    <span>{'}'}</span>
  </code>
</pre>

      <h1 className="text-2xl mt-10">Use CSS + Semantic HTML</h1>
      <p className="mt-3">Use CSS for visual styling, and structure your content with semantic HTML elements (such as {'<header>'}, {'<nav>'}, {'<main>'}, {'<section>'}, etc.) instead of using non-semantic elements like {'<div>'} or {'<span>'} for everything. Semantic HTML improves accessibility, SEO, and helps assistive technologies understand the page’s structure.</p>
      <h1 className="text-2xl mt-5">Example</h1>
      <pre className="bg-gray-200 p-4 rounded-lg overflow-x-auto max-w-full whitespace-pre-wrap">
  <code>
    <span className="text-blue-500">nav</span> <span>{'{'}</span><br />

    <span className="text-red-500">background-color</span>
    <span>: </span>
    <span className="text-green-700">#333333</span>
    <span>;</span><br />

    <span className="text-red-500">color</span>
    <span>: </span>
    <span className="text-green-700">white</span>
    <span>;</span><br />

    <span>{'}'}</span><br /><br />

    <span className="text-blue-500">aside</span> <span>{'{'}</span><br />

    <span className="text-red-500">background-color</span>
    <span>: </span>
    <span className="text-green-700">#333333</span>
    <span>;</span><br />

    <span className="text-red-500">color</span>
    <span>: </span>
    <span className="text-green-700">white</span>
    <span>;</span><br />

    <span>{'}'}</span>
  </code>
</pre>
      <h1 className="text-2xl mt-10">Respect User Preferences</h1>
      <p className="mt-2">The CSS prefers-reduced-motion media feature allows you to detect if a user has requested reduced motion, such as minimizing animations or transitions. This helps create a more comfortable experience for users sensitive to motion.</p>
      <p className="mt-5">Many users have motion sensitivity and prefer minimal animations. Use the prefers-reduced-motion media query to adjust or disable animations accordingly.</p>
      <h1 className="text-2xl mt-5">Example</h1>
     <pre className="bg-gray-200 p-4 rounded-lg overflow-x-auto max-w-full whitespace-pre-wrap">
  <code>
    <span className="text-blue-500">@media (prefers-reduced-motion: reduce)</span> <span>{'{'}</span><br />

    &nbsp;&nbsp;<span className="text-blue-500">*</span> <span>{'{'}</span><br />

    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-500">animation</span>
    <span>: </span>
    <span className="text-green-700">none !important</span>
    <span>;</span><br />

    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-500">transition</span>
    <span>: </span>
    <span className="text-green-700">none !important</span>
    <span>;</span><br />

    &nbsp;&nbsp;<span>{'}'}</span><br />

    <span>{'}'}</span>
  </code>
</pre>
    </div>
  );
};

export default AccessibleCard;