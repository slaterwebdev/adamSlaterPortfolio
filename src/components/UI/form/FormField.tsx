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
  };
  const defaultInputClasses =
    "w-full bg-white mb-4 border-b p-2";

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
