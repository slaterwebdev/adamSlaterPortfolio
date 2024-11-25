import { useState } from "react";
import { Section, PageTemplate } from "@/components";
import contactHero from "@/assets/heros/contact.jpg";

type FormField = {
  name: keyof FormData;
  type: "text" | "email" | "number" | "textarea";
  placeholder: string;
  rows?: number;
  validate?: (value: string) => string; // Field-specific validation function
};

type FormData = {
  name: string;
  email: string;
  number: string;
  message: string;
};

export const Form = () => {
  const fields: FormField[] = [
    {
      name: "name",
      type: "text",
      placeholder: "Enter name",
      validate: (value) => (!value.trim() ? "Name is required." : ""),
    },
    {
      name: "email",
      type: "email",
      placeholder: "Enter email",
      validate: (value) =>
        /^\S+@\S+\.\S+$/.test(value) ? "" : "Invalid email address.",
    },
    {
      name: "number",
      type: "number",
      placeholder: "Enter number",
      validate: (value) =>
        /^\d+$/.test(value) ? "" : "Number must be numeric.",
    },
    {
      name: "message",
      type: "textarea",
      placeholder: "Message",
      rows: 8,
      validate: (value) => (!value.trim() ? "Message is required." : ""),
    },
  ];

  const defaultInputClasses =
    "w-full bg-white mb-4 border-b p-2 focus:outline-none focus:ring-2 focus:ring-primary";

  // Generate initial state dynamically from fields
  const initialState = fields.reduce(
    (acc, { name }) => ({ ...acc, [name]: "" }),
    {} as FormData
  );

  const [formData, setFormData] = useState<FormData>(initialState);
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  // Handle input changes and validate
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    // Update form data
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Validate the field dynamically
    const field = fields.find((f) => f.name === name);
    if (field?.validate) {
      const error = field.validate(value);
      setErrors((prev) => ({ ...prev, [name]: error }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate all fields on submit
    const newErrors: Partial<FormData> = {};
    fields.forEach(({ name, validate }) => {
      if (validate) {
        const error = validate(formData[name]);
        if (error) {
          newErrors[name] = error;
        }
      }
    });

    if (Object.keys(newErrors).length) {
      setErrors(newErrors);
      return;
    }

    // On successful submission
    setFormData(initialState); // Reset form
    setSuccessMessage("Form submitted successfully!");
    setTimeout(() => setSuccessMessage(null), 3000); // Clear success message after 3 seconds
  };

  return (
    <form
      className="form mx-auto mb-12 sm:mb-24 w-full sm:w-[800px] text-black"
      onSubmit={handleSubmit}
    >
      {fields.map(({ name, type, placeholder, rows }) => (
        <div key={name} className="mb-4">
          {type === "textarea" ? (
            <textarea
              name={name}
              placeholder={placeholder}
              rows={rows}
              value={formData[name]}
              onChange={handleChange}
              className={`${defaultInputClasses} resize-none`}
              aria-invalid={!!errors[name]}
              aria-describedby={`${name}-error`}
            ></textarea>
          ) : (
            <input
              type={type}
              name={name}
              placeholder={placeholder}
              value={formData[name]}
              onChange={handleChange}
              className={defaultInputClasses}
              aria-invalid={!!errors[name]}
              aria-describedby={`${name}-error`}
            />
          )}
          {errors[name] && (
            <p id={`${name}-error`} className="text-red-500 text-sm">
              {errors[name]}
            </p>
          )}
        </div>
      ))}

      {successMessage && (
        <p className="text-green-500 text-sm">{successMessage}</p>
      )}

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
