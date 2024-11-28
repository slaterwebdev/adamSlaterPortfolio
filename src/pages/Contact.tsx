import { Section, PageTemplate, Form } from "@/components";
import contactHero from "@/assets/heros/contact.jpg";
import { FormFieldType } from "@/utils/types";

const formFields: FormFieldType[] = [
  {
    name: "name",
    type: "text",
    placeholder: "Enter name",
    validate: function (value: string) {
      return !value.trim() ? `${this.name} is required.` : "";
    },
  },
  {
    name: "email",
    type: "email",
    placeholder: "Enter email",
    validate: function (value: string) {
      return /^\S+@\S+\.\S+$/.test(value) ? "" : `Valid ${this.name} required.`;
    },
  },
  {
    name: "number",
    type: "number",
    placeholder: "Enter number",
    validate: function (value: string) {
      return !value.trim() ? `${this.name} is required.` : "";
    },
  },
  {
    name: "message",
    type: "textarea",
    placeholder: "Message",
    rows: 8,
    validate: function (value: string) {
      return !value.trim() ? `${this.name} is required.` : "";
    },
  },
];

export const Contact = () => (
  <PageTemplate content={{ title: "Get In Touch" }} image={contactHero}>
    <Section
      title="Send me a message"
      sideContent={<Form formFields={formFields} />}
      contentStyles="text-3xl"
    >
      <p>
        Whether you wish to discuss potential employment, share & collaborate on ideas or have a project for me, simply
        fill in this form and I'll get back to you soon!
      </p>
    </Section>
  </PageTemplate>
);
