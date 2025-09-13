import React from "react";

const AccessibleCard = () => {
  return (
    <div className="p-6 font-sans">
      <h1 className="text-3xl font-medium text-blue-500 mb-4">Accessible CSS Example</h1>
      <h1 className="text-2xl">CSS Accessibility Styling</h1>
      <p className="mt-5">A website should be designed with accessibility at its core to ensure that all users, including those with disabilities, can access and interact with its content effectively.</p>
      <p className="mt-5">CSS accessibility styling involves using thoughtful and inclusive design techniques to enhance visual clarity, improve navigation, and create a better overall user experience for everyone, including users with disabilities.</p>

      <h1 className="mt-10 text-2xl">CSS Accessibility Styling Technics</h1>
      <p className="mt-2">Here are some tips and technics on how to improve the accessibility of your web site:</p>

      <h1 className="text-2xl mt-10">Provide High Color Contrast</h1>
      <p className="mt-2">Use high contrast between text and background to make content easier to read, especially for people with visual impairments or color blindness.</p>

      <p className="text-2xl mt-10">Color Contrast Example</p>
      <div className="bg-gray-200 rounded-lg p-4 mt-5">
        <pre>
          {`body {
  background-color: #ffffff;
  color: #000000;
}`}
        </pre>
      </div>

      <h1 className="text-2xl mt-10">Provide Good Font, Font Size and Line Height</h1>
      <p className="mt-2">Always choose fonts that are easy to read, and ensure appropriate font size and line height to enhance readability. Use relative units like rem or em for font sizing, so users can adjust text size through their browser settings. This supports better accessibility, especially for users with visual impairments or reading difficulties.</p>

      <h1 className="text-2xl mt-5">Font Example</h1>
      <div className="bg-gray-200 p-4 rounded-lg mt-5">
        <pre>
          {`   body {
          font-family: Arial, sans-serif;
          font-size: 1rem;
          line-height: 1.6;
     }`}
        </pre>
      </div>

      <h1 className="text-2xl mt-10">Have Visible Focus Indicators</h1>
      <p className="mt-3">Always apply the :focus pseudo-class to ensure that interactive elements—such as links, buttons, and input fields—have a visible and distinct focus style. This helps keyboard users navigate the interface more easily and improves accessibility for users who do not use a mouse.</p>
      <p className="mt-3">Using the :focus pseudo-class ensures that keyboard users and screen reader users can clearly identify which element is currently active or selected. This visual feedback is essential for smooth, accessible navigation without a mouse.</p>

      <h1 className="text-2xl mt-10">Example</h1>
      <div className="bg-gray-200 rounded-lg p-4 mt-3">
        <pre>
          {`a:focus, button:focus, input:focus {
  outline: 2px solid orange;
}`}
        </pre>
      </div>

      <h1 className="text-2xl mt-10">Avoid Hiding Focus</h1>
      <p className="mt-4">Never remove the browser’s default focus outline unless you replace it with a clear and visible custom focus style. Removing it entirely can make it difficult or impossible for keyboard users to navigate the interface.</p>
      <div className="bg-gray-200 rounded-lg p-4 mt-5">
        <pre>
          {`button:focus {
  outline: 2px solid orange;
}`}
        </pre>
      </div>

      <h1 className="text-2xl mt-10">Use CSS + Semantic HTML</h1>
      <p className="mt-3">Use CSS for visual styling, and structure your content with semantic HTML elements (such as {'<header>'}, {'<nav>'}, {'<main>'}, {'<section>'}, etc.) instead of using non-semantic elements like {'<div>'} or {'<span>'} for everything. Semantic HTML improves accessibility, SEO, and helps assistive technologies understand the page’s structure.</p>
      <h1 className="text-2xl mt-5">Example</h1>
      <div className="bg-gray-200 rounded-lg p-4 mt-5">
        <pre>
          {`nav {
  background-color: #333333;
  color: white;
}
aside {
  background-color: #333333;
  color: white;
}`}
        </pre>
      </div>

      <h1 className="text-2xl mt-10">Respect User Preferences</h1>
      <p className="mt-2">The CSS prefers-reduced-motion media feature allows you to detect if a user has requested reduced motion, such as minimizing animations or transitions. This helps create a more comfortable experience for users sensitive to motion.</p>
      <p className="mt-5">Many users have motion sensitivity and prefer minimal animations. Use the prefers-reduced-motion media query to adjust or disable animations accordingly.</p>
      <h1 className="text-2xl mt-5">Example</h1>
      <div className="bg-gray-200 rounded-lg p-4 mt-3">
        <pre>
          {`@media (prefers-reduced-motion: reduce) {
  * {
    animation: none !important;
    transition: none !important;
  }
}`}
        </pre>
      </div>

















    </div>
  );
};

export default AccessibleCard;