"use client";

import React, { useState } from "react";
import MenuLinks from "./MenuLinks";
import clsx from "clsx";
import { Menu } from "lucide-react";
import OutsideClickHandler from "react-outside-click-handler";

const MenuMobile = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenuOpen = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  return (
    <OutsideClickHandler onOutsideClick={closeMenu} display="contents">
      <button
        className="h-full border-l border-l-zinc-800 px-4 text-zinc-500"
        onClick={toggleMenuOpen}
        type="button"
      >
        <Menu size={30} />
        <span className="sr-only">Toggle Menu</span>
      </button>
      <div
        className={clsx(
          "absolute left-0 right-0  top-[63px] z-[40] overflow-hidden bg-darker",
          menuOpen ? "animate-menu-open" : "hidden animate-menu-close",
        )}
      >
        <MenuLinks trigger={toggleMenuOpen} />
      </div>
    </OutsideClickHandler>
  );
};

export default MenuMobile;
