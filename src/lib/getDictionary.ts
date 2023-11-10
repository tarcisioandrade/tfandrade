import "server-only";

import common from "../../public/locales/en-US/common.json";

export type LanguagesProps = typeof common & {
  [key: string]: any;
};

type Dictionaries = {
  [key: string]: () => Promise<LanguagesProps>;
};

const dictionaries: Dictionaries = {
  "en-US": () =>
    import("../../public/locales/en-US/common.json").then(
      (module) => module.default,
    ),
  "pt-BR": () =>
    import("../../public/locales/pt-BR/common.json").then(
      (module) => module.default,
    ),
};

export const getDictionary = async (locale: string) => dictionaries[locale]();
