export interface Job {
  role: string;
  co: string;
  url: string;
  range: string;
  loc: string;
  bullets: string[];
  skills: string[];
}

export interface Project {
  title: string;
  kind: string;
  year: string;
  description: string;
  tags: string[];
  url: string;
  github?: string;
  image?: string;
}

export type Stack = Record<string, string[]>;
