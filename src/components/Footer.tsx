import React from "react";

const Footer = () => {
  return (
    <footer className="h-24 lg:pl-[calc(250px)]">
      <div className="flex h-full items-center justify-center gap-12 px-4 sm:px-12">
        <p className="text-zinc-500">
          © 2023 Code by <strong className="text-white">Me</strong>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
