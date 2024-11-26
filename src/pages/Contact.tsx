import { Section, PageTemplate, Form } from "@/components";
import contactHero from "@/assets/heros/contact.jpg";
import { FormField } from "@/hooks/useForm";

const formFields: FormField[] = [
  {
    name: "name",
    type: "text",
    placeholder: "Enter name",
    validate: function (value) {
      return !value.trim() ? `${this.name} is required.` : "";
    },
  },
  {
    name: "email",
    type: "email",
    placeholder: "Enter email",
    validate: function (value) {
      return /^\S+@\S+\.\S+$/.test(value) ? "" : `Valid ${this.name} required.`;
    },
  },
  {
    name: "number",
    type: "number",
    placeholder: "Enter number",
    validate: function (value) {
      return !value.trim() ? `${this.name} is required.` : "";
    },
  },
  {
    name: "message",
    type: "textarea",
    placeholder: "Message",
    rows: 8,
    validate: function (value) {
      return !value.trim() ? `${this.name} is required.` : "";
    },
  },
];

export const Contact = () => (
  <PageTemplate content={{ title: "Get In Touch" }} image={contactHero}>
    <Section
      title="Send me a message"
      sideContent={<Form formFields={formFields} />}
    >
      <p className="text-3xl">
        Whether you wish to discuss new ideas or have a project for me, simply
        fill this form and I'll get back to you soon.
      </p>
    </Section>
  </PageTemplate>
);
