"use client";

import React, { useState } from "react";
import MenuLinks from "./MenuLinks";
import { links } from "./Sidebar";
import clsx from "clsx";
import { Menu } from "lucide-react";

const MenuMobile = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenuOpen = () => setMenuOpen((prev) => !prev);

  return (
    <>
      <button
        className="h-full border-l border-l-zinc-800 px-4 text-zinc-500"
        onClick={toggleMenuOpen}
      >
        <Menu size={30} />
      </button>
      <div
        className={clsx(
          "absolute left-0 right-0  top-[63px] z-[40] overflow-hidden bg-darker",
          menuOpen ? "animate-menu-open" : "hidden animate-menu-close",
        )}
      >
        <MenuLinks links={links} trigger={toggleMenuOpen} />
      </div>
    </>
  );
};

export default MenuMobile;
