import { useForm } from "@/hooks/useForm";
import { FormFieldType } from "@/utils/types";
import { FormField } from "./FormField";

const SubmitButton = ({ isDisabled }: { isDisabled: boolean }) => (
  <button
    type="submit"
    disabled={isDisabled}
    className={`text-primary hover:text-secondary ${
      isDisabled ? "opacity-50 cursor-not-allowed" : ""
    }`}
  >
    Send Enquiry
  </button>
);

export const Form = ({ formFields }: { formFields: FormFieldType[] }) => {
  const {
    formData,
    errors,
    handleChange,
    handleSubmit,
    isSubmitDisabled,
    successMessage,
  } = useForm(formFields);

  const onSubmit = (data: typeof formData) => {
    console.log("Form submitted:", data);
  };

  return (
    <form
      className="form mx-auto mb-12 sm:mb-24 w-full max-w-[800px] text-black"
      onSubmit={(e) => {
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

      <div className="text-right border-b">
        <SubmitButton isDisabled={isSubmitDisabled} />
      </div>
    </form>
  );
};
