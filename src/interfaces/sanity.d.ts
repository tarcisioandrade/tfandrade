interface SanityBody {
  _createdAt: string;
  _id: string;
  _rev: string;
  _updatedAt: string;
}

interface Image {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
}

interface Curriculum {
  curriculum: string;
}

export interface PageInfo extends SanityBody {
  _type: "pageInfo";
  name: string;
  role: string;
  heroTitle: string;
  intro: string;
  avatarImage: Image;
  curriculum: Curriculum;
  skills: Skill[];
  socials: Social[];
  projects: Project[];
}

export interface Skill extends SanityBody {
  _type: "skill";
  image: Image;
  slug: string;
  title: string;
}

export interface Tag extends SanityBody {
  _type: "tag";
  title: string;
  image: Image | undefined;
  category: TagCategory;
  link: string;
}

export interface Social extends SanityBody {
  _type: "social";
  link: string;
  title: string;
}

export interface Project extends SanityBody {
  _type: "projects";
  projectLink: string;
  projectGithubLink: string;
  projectTitle: string;
  projectImage: Image;
  description: string;
  slug: string;
  tags: Tag[];
}

export interface TagCategory extends SanityBody {
  _type: "tagCategory";
  name: Category;
  title: string;
}

export type Category =
  | "language"
  | "backend"
  | "mobile"
  | "frontend"
  | "others";
