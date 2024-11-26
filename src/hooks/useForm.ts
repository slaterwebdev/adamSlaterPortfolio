import { useState } from "react";

export type FormField = {
  name: string;
  type: "text" | "email" | "number" | "textarea";
  placeholder: string;
  rows?: number;
  validate?: (value: string) => string;
};

export const useForm = (fields: FormField[]) => {
  const initialState = Object.fromEntries(fields.map(({ name }) => [name, ""]));
  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState(initialState);

  const validateField = (name: string, value: string) => {
    const field = fields.find((field) => field.name === name);
    return field?.validate ? field.validate(value) : "";
  };

  const handleChange = ({
    target: { name, value },
  }: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
  };

  const handleSubmit = (
    e: React.FormEvent,
    callback: (data: typeof formData) => void
  ) => {
    e.preventDefault();

    const newErrors = Object.fromEntries(
      Object.entries(formData).map(([key, value]) => [
        key,
        validateField(key, value),
      ])
    );

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      callback(formData);
      setFormData(initialState);
      setErrors(initialState);
    }
  };

  return { formData, errors, handleChange, handleSubmit };
};
