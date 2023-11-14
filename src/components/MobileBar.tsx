import React, { ReactNode } from "react";
import { getProfileData } from "@/services/getProfileData";
import Link from "next/link";

const MobileBar = async ({ children }: { children: ReactNode }) => {
  const profileData = await getProfileData();

  return (
    <header className="fixed bottom-0 left-0 right-0 top-0 z-50 h-16 border-b border-b-zinc-800 bg-darker lg:hidden">
      <div className="flex h-full items-center justify-between lg:static lg:h-[117px]">
        <Link href="/" className="group block px-6 lg:px-8">
          <p className="group-hover:text-neonGreen text-xl transition-colors">
            {profileData.name}
          </p>
        </Link>
        {children}
      </div>
    </header>
  );
};

export default MobileBar;
