import { useState } from "react";
import { useForm } from "@/hooks/useForm";
import { FormFieldType } from "@/utils/types";
import { FormField } from "./FormField";

export const Form = ({
  formFields,
}: {
    formFields: FormFieldType[];
}) => {
  const { formData, errors, handleChange, handleSubmit, isSubmitDisabled } =
    useForm(formFields);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const onSubmit = (data: typeof formData) => {
    console.log("Form submitted:", data);
    setSuccessMessage("Submission successful!");
    setTimeout(() => {
      setSuccessMessage(null);
    }, 5000);
  };

  return (
    <form
      className="form mx-auto mb-12 sm:mb-24 w-full sm:w-[800px] text-black"
      onSubmit={(e) => {
        setSuccessMessage(null);
        handleSubmit(e, onSubmit);
      }}
    >
      {formFields.map((field) => (
        <FormField
          key={field.name}
          {...field}
          value={formData[field.name]}
          onChange={handleChange}
          error={errors[field.name]}
        />
      ))}

      {successMessage && (
        <p className="text-green-500 text-sm mb-4">{successMessage}</p>
      )}

      <button
        type="submit"
        disabled={isSubmitDisabled}
        className={`w-full block text-right text-primary underline hover:text-primary-dark focus:outline-none focus:ring-2 focus:ring-primary ${
          isSubmitDisabled ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        Send Enquiry
      </button>
    </form>
  );
};
