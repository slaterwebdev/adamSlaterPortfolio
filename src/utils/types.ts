export type GridItem = {
  id: string;
  content?: string;
  url?: string;
  src?: string;
  category?: string;
  employer?: boolean;
};

export type ExperienceItem = {
  yearsServed: string;
  id: string;
  jobTitle: string;
  content: string;
};

export type FormField = {
  name: string;
  type: "text" | "email" | "number" | "textarea";
  placeholder: string;
  rows?: number;
  validate?: (value: string) => string;
};

export type SkillsMapper = {
  title: string;
  items: Array<string>
}