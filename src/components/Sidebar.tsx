import React from "react";
import LinkWithLocale from "./LinkWithLocale";
import MenuLinks from "./MenuLinks";
import { getProfileData } from "@/services/getProfileData";
import { getLocale } from "next-intl/server";

const Sidebar = async () => {
  const locale = await getLocale();
  const profileData = await getProfileData(locale);

  return (
    <div className="fixed bottom-0 left-0 top-0 z-50 hidden w-[250px] border-r border-r-zinc-800 bg-darker lg:block">
      <header className="flex h-[117px] items-center justify-between">
        <LinkWithLocale href="/" className="group block px-8">
          <p className="text-xl transition-colors group-hover:text-neonGreen">
            {profileData.name}
          </p>
          <span className="text-zinc-500 lg:block">{profileData.role}</span>
        </LinkWithLocale>
      </header>

      <MenuLinks />
    </div>
  );
};

export default Sidebar;
