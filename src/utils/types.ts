export type GridItem = {
  id: string;
  content?: string;
  url?: string;
  src?: string;
  category?: string;
  employer?: boolean
};

export type WorkExperience = {
  yearsServed: string;
  id: string;
  jobTitle: string;
  content: string;
};