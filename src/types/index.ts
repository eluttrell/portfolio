// Shared type definitions for the portfolio application

export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  link: string;
}

export interface Profile {
  name: string;
  title: string;
  contactEmail: string;
  bio_markdown: string;
}

export interface NavigationLink {
  label: string;
  href: string;
  external: boolean;
}

export interface FooterLink {
  label: string;
  href: string;
  external: boolean;
}

export interface ContentData {
  profile: Profile;
  skills: string[];
  navigation: NavigationLink[];
  footerLinks: FooterLink[];
  projects: Project[];
}
