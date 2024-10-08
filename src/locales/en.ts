export default {
  sectionTitles: {
    projects: "Projects",
    skills: "Technologies and Knowledge",
    technologies: "Technologies",
  },
  buttons: {
    seeAll: "See All",
    repository: "Repository",
    back: "Back",
  },
  linksNavigation: {
    projects: "Projects",
    contact: "Contact",
    knowledge: "Knowledge",
    home: "Home",
  },
  contactPage: {
    title: "Let's Chat",
    heroMessage:
      "If you have an opportunity for me, please send me a message or an email to",
    form: {
      name: "Name",
      email: "E-mail",
      message: "Message",
      button: "Send",
      buttonSending: "Sending...",
    },
    toast: {
      success: {
        title: "Message sent",
        message: "Thanks for reaching out! I will reply as soon as possible.",
      },
      error: {
        title: "Message not sent",
        message: "Something happened, please try again.",
      },
    },
  },
  footer: {
    developer: "Code by",
    me: "Me",
  },
  filter: {
    filterButton: "Filter",
    filterAllOption: "All",
  },
} as const;
