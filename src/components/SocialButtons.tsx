import React from "react";
import ButtonLink from "./ButtonLink";
import { Social } from "@/interfaces/sanity";
import { Github, Linkedin, Mail } from "lucide-react";

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
    <ButtonLink
      href={social.link}
      key={social._id}
      target="_blank"
      rel="noopener noreferrer"
      className="h-12 w-12 px-0"
    >
      <span className="sr-only">{social.title} Link</span>
      {socialsIcons[social.title].icon}
    </ButtonLink>
  ));
};

export default SocialButtons;
