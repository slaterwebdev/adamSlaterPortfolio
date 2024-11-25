import { useState } from "react";
import { Section, PageTemplate } from "@/components";
import contactHero from "@/assets/heros/contact.jpg";

type FormField = {
  name: keyof FormData;
  type: "text" | "email" | "number" | "textarea";
  placeholder: string;
  rows?: number;
};

type FormData = {
  name: string;
  email: string;
  number: string;
  message: string;
};

export const Form = () => {
  const fields: FormField[] = [
    { name: "name", type: "text", placeholder: "Enter name" },
    { name: "email", type: "email", placeholder: "Enter email" },
    { name: "number", type: "number", placeholder: "Enter number" },
    { name: "message", type: "textarea", placeholder: "Message", rows: 8 },
  ];

  const initialFormData: FormData = {
    name: "",
    email: "",
    number: "",
    message: "",
  };

  const defaultInputClasses =
    "w-full bg-white mb-4 border-b p-2 focus:outline-none focus:ring-2 focus:ring-primary";

  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: value.trim() === "",
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors = Object.entries(formData).reduce((acc, [key, value]) => {
      if (!value.trim()) acc[key as keyof FormData] = `${key} is required.`;
      return acc;
    }, {} as Partial<FormData>);

    if (Object.keys(newErrors).length) {
      setErrors(newErrors);
      return;
    }

    setFormData(initialFormData);
    setErrors({});
  };

  return (
    <form
      className="form mx-auto mb-12 sm:mb-24 w-full sm:w-[800px] text-black"
      onSubmit={handleSubmit}
    >
      {fields.map(({ name, type, placeholder, rows }) => (
        <div key={name}>
          {type === "textarea" ? (
            <textarea
              name={name}
              placeholder={placeholder}
              rows={rows}
              value={formData[name]}
              onChange={handleChange}
              className={defaultInputClasses}
            ></textarea>
          ) : (
            <input
              type={type}
              name={name}
              placeholder={placeholder}
              value={formData[name]}
              onChange={handleChange}
              className={defaultInputClasses}
            />
          )}
          {errors[name] && (
            <p className="text-red-500 text-sm">{`${name.toUpperCase()} is required.`}</p>
          )}
        </div>
      ))}

      <button
        type="submit"
        className="w-full block text-right text-primary underline hover:text-primary-dark focus:outline-none focus:ring-2 focus:ring-primary"
      >
        Send Enquiry
      </button>
    </form>
  );
};

export const Contact = () => (
  <PageTemplate content={{ title: "Get In Touch" }} image={contactHero}>
    <Section title="Send me a message" sideContent={<Form />}>
      <p className="text-3xl">
        Whether you wish to discuss new ideas or have a project for me, simply
        fill this form and I'll get back to you soon.
      </p>
    </Section>
  </PageTemplate>
);
