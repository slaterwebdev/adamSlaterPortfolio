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

export type FormFieldType = {
  name: string;
  type: "text" | "email" | "number" | "textarea";
  placeholder: string;
  rows?: number;
  validate?: (value: string) => string;
};

export type FieldProps = FormFieldType & {
  value: string;
  error?: string;
  onChange: ({
    target: { name, value },
  }: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
};

export type SkillsMapper = {
  title: string;
  type: "list" | "icons";
  content: Array<string>
}