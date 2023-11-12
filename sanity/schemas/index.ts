import { localeString, localeText } from "./locales";
import pageInfo from "./pageInfo";
import project from "./project";
import projectCategory from "./project-category";
import skill from "./skill";
import social from "./social";
import tag from "./tag";
import tagCategory from "./tag-category";

const schemas = [
  pageInfo,
  project,
  skill,
  social,
  tag,
  tagCategory,
  projectCategory,
  localeString,
  localeText,
];

export default schemas;
