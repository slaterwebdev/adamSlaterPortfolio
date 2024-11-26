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
    processFormData: (data: typeof formData) => void
  ) => {
    e.preventDefault();
    processFormData(formData);
    setFormData(initialState);
  };

  const isSubmitDisabled =
    Object.values(errors).some((error) => error !== "") || 
    Object.values(formData).some((value) => value.trim() === "");

  return { formData, errors, handleChange, handleSubmit, isSubmitDisabled };
};
