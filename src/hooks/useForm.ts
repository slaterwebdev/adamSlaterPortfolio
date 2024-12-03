import { FormFieldType } from "@/utils/types";
import { useState } from "react";

export const useForm = (fields: FormFieldType[]) => {
  const initialState = Object.fromEntries(fields.map(({ name }) => [name, ""]));
  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState(initialState);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const validateField = (name: string, value: string) =>
    fields.find((field) => field.name === name)?.validate?.(value) || "";

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
    setSuccessMessage("Submission successful!");
    setTimeout(() => {
      setSuccessMessage(null);
    }, 5000);
  };

  const isSubmitDisabled =
    Object.values(errors).some((error) => error !== "") ||
    Object.values(formData).some((value) => value.trim() === "");

  return {
    formData,
    errors,
    handleChange,
    handleSubmit,
    isSubmitDisabled,
    successMessage,
  };
};