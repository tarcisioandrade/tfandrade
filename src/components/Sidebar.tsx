import React from "react";
import MenuLinks from "./MenuLinks";
import { getProfileData } from "@/services/getProfileData";
import { Code2, FolderGit2, Home, Mail } from "lucide-react";
import Link from "next/link";

const Sidebar = async () => {
  const profileData = await getProfileData();

  return (
    <div className="fixed bottom-0 left-0 top-0 z-50 hidden w-[250px] border-r border-r-zinc-800 bg-darker lg:block">
      <header className="flex h-[117px] items-center justify-between">
        <Link href="/" className="group block px-8">
          <p className="text-xl group-hover:text-green-500 transition-colors">
            {profileData.name}
          </p>
          <span className="text-zinc-500 lg:block">{profileData.role}</span>
        </Link>
      </header>

      <MenuLinks links={links} />
    </div>
  );
};

export const links = [
  {
    icon: <Home size={20} strokeWidth={1.5} />,
    name: "Início",
    path: "/",
  },
  {
    icon: <FolderGit2 size={20} strokeWidth={1.5} />,
    name: "Projetos",
    path: "/project",
  },
  {
    icon: <Code2 size={20} strokeWidth={1.5} />,
    name: "Conhecimentos",
    path: "/skills",
  },
  {
    icon: <Mail size={20} strokeWidth={1.5} />,
    name: "Contato",
    path: "/contact",
  },
];

export default Sidebar;
