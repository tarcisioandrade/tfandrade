"use client";

import React from "react";
import Link from "next/link";

type Props = {
  links: {
    icon: React.JSX.Element;
    name: string;
    path: string;
  }[];
  trigger?: () => void;
};

const MenuLinks = ({ links, trigger }: Props) => {
  return (
    <ul>
      {links.map((link) => (
        <li
          key={link.path}
          className="last:border-b last:border-b-zinc-800 odd:border-y odd:border-y-zinc-800"
        >
          <Link
            href={link.path}
            className="group block px-8 py-5 transition-all hover:bg-zinc-800/20"
            onClick={trigger}
          >
            <span className="flex items-center gap-3 text-zinc-500 transition-colors group-hover:text-white">
              {link.icon}
              <p className="font-medium">{link.name}</p>
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MenuLinks;
