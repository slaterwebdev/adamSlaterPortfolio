import { useState } from "react";
import { FormField, useForm } from "@/hooks/useForm";

export const Form = ({ formFields }: { formFields: FormField[] }) => {
  const { formData, errors, handleChange, handleSubmit, isSubmitDisabled } = useForm(formFields);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const defaultInputClasses =
    "w-full bg-white mb-4 border-b p-2 focus:outline-none focus:ring-2 focus:ring-primary";

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
      {formFields.map(({ name, type, placeholder, rows }) => (
        <div key={name} className="mb-4">
          {type === "textarea" ? (
            <textarea
              name={name}
              placeholder={placeholder}
              rows={rows}
              value={formData[name]}
              onChange={handleChange}
              className={`${defaultInputClasses} resize-none`}
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
            <p id={`${name}-error`} className="text-red-500 text-sm">
              {errors[name]}
            </p>
          )}
        </div>
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
