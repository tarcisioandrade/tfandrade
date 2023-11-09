const supportedLanguages = [
  { id: "pt", isDefault: true, title: "Português" },
  { id: "en", title: "English" },
];

export const localeString = {
  fields: supportedLanguages.map((lang) => ({
    fieldset: lang.isDefault ? null : "translations",
    name: lang.id,
    title: lang.title,
    type: "string",
  })),
  fieldsets: [
    {
      name: "translations",
      options: { collapsible: true },
      title: "Translations",
    },
  ],
  name: "localeString",
  title: "Localized string",

  type: "object",
};

export const localeText = {
  fields: supportedLanguages.map((lang) => ({
    fieldset: lang.isDefault ? null : "translations",
    name: lang.id,
    title: lang.title,
    type: "text",
  })),
  fieldsets: [
    {
      name: "translations",
      options: { collapsible: true },
      title: "Translations",
    },
  ],
  name: "localeText",

  title: "Localized text",

  type: "object",
};
