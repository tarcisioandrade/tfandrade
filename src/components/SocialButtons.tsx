import React from "react";
import { Social } from "@/interfaces/sanity";
import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

type Props = {
  socials: Social[];
};

type SocialsIcons = {
  [key: string]: {
    icon: JSX.Element;
  };
};

const socialsIcons: SocialsIcons = {
  Email: {
    icon: <Mail size={20} strokeWidth={1.5} />,
  },
  Github: {
    icon: <Github size={20} strokeWidth={1.5} />,
  },
  Linkedin: {
    icon: <Linkedin size={20} strokeWidth={1.5} />,
  },
};

const SocialButtons = ({ socials }: Props) => {
  return socials.map((social) => (
    <Link
      href={social.link}
      key={social._id}
      className="flex h-12 w-12 items-center justify-center rounded border border-zinc-800 text-zinc-500 transition-all hover:bg-zinc-800/20 hover:text-white"
    >
      {socialsIcons[social.title].icon}
    </Link>
  ));
};

export default SocialButtons;
