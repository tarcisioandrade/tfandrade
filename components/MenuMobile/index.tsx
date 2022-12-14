import Link from "next/link";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import {
  Browsers,
  CaretLeft,
  CaretRight,
  EnvelopeSimple,
  House,
} from "phosphor-react";
import { MenuMobileContainer, MenuMobileContent, MenuButton } from "./styles";

type Props = {
  isOpen: boolean;
  toggle: () => void;
};

const MenuMobile = ({ isOpen, toggle }: Props) => {
  const { pathname } = useRouter();
  const { t } = useTranslation("common");

  return (
    <MenuMobileContainer isOpen={isOpen} className="menuMobile">
      <MenuMobileContent id="menu-mobile" aria-expanded={isOpen} >
        <Link href="/">
          <a
            style={{
              color: pathname === "/" ? "#43C59E" : "#DFE1E5",
            }}
            onClick={toggle}
          >
            <House size={32} weight="fill" />
            {t("home")}
          </a>
        </Link>
        <Link href="/projetos">
          <a
            style={{
              color: pathname === "/projetos" ? "#43C59E" : "#DFE1E5",
            }}
            onClick={toggle}
          >
            <Browsers size={32} weight="fill" />
            {t("projects")}
          </a>
        </Link>

        <Link href="/contato">
          <a
            style={{ color: pathname === "/contato" ? "#43C59E" : "#DFE1E5" }}
            onClick={toggle}
          >
            <EnvelopeSimple size={32} weight="fill" />
            {t("contact")}
          </a>
        </Link>
      </MenuMobileContent>
      <MenuButton onClick={toggle} aria-controls="menu-mobile">
        {isOpen ? (
          <CaretLeft size={20} weight="bold" />
        ) : (
          <CaretRight size={20} weight="bold" />
        )}
      </MenuButton>
    </MenuMobileContainer>
  );
};

export default MenuMobile;
