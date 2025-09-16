import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-8">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} Workout Tracker. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
