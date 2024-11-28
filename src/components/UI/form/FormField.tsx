import { FieldProps } from "@/utils/types";

export const FormField = ({
  type,
  name,
  placeholder,
  rows,
  value,
  onChange,
  error,
}: FieldProps) => {
  const inputProps = {
    name,
    placeholder,
    value,
    onChange,
    "aria-invalid": !!error,
    "aria-describedby": `${name}-error`,
  };
  const defaultInputClasses =
    "w-full bg-white mb-4 border-b p-2 focus:outline-none focus:ring-2 focus:ring-primary";

  return (
    <div className="mb-4">
      {type === "textarea" ? (
        <textarea
          {...inputProps}
          rows={rows}
          className={`${defaultInputClasses} resize-none`}
        />
      ) : (
        <input {...inputProps} type={type} className={defaultInputClasses} />
      )}
      {error && (
        <p id={`${name}-error`} className="text-red-500 text-sm">
          {error}
        </p>
      )}
    </div>
  );
};
