import React from "react";

const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white dark:bg-gray-800 dark:text-gray-200 py-4 shadow-md">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Mail
          <span className="text-yellow-300 dark:text-yellow-500">Free</span>. All rights reserved.
        </p>
        <p className="text-xs mt-2">
          Made with ❤️ by Your <a href="https://github.com/abdurrahmanabid" target="_blank" className="text-yellow-300 dark:text-yellow-500">Ab Rahman</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;