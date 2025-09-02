import React from "react";

const CssWebsiteLayout = () => {
  return (
    <div className="font-sans">
      {/* Header */}
      <header className="bg-gray-800 text-white p-6 text-center text-xl font-bold">
        Header
      </header>

      {/* Navbar */}
      <nav className="bg-gray-600 text-white p-4 text-center">
        Navigation Bar
      </nav>

      {/* Content Layout */}
      <div className="flex flex-col md:flex-row">
        {/* Sidebar */}
        <aside className="md:w-1/3 bg-gray-100 p-6 text-gray-700">
          Sidebar
        </aside>

        {/* Main Content */}
        <main className="md:w-2/3 bg-white p-6 text-gray-900">
          Main Content
        </main>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white p-6 text-center mt-4">
        Footer
      </footer>
    </div>
  );
};

export default CssWebsiteLayout;
