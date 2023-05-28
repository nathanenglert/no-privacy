import { TextArea, TextAreaProps } from "../ui/TextArea";

export interface FormTextAreaProps extends TextAreaProps {
  label: string;
}

export default function FormInput({
  intent,
  name,
  label,
  columns,
  rows,
  placeholder,
  defaultValue,
  ...props
}: FormTextAreaProps) {
  return (
    <div>
      <label htmlFor={name} className="sr-only">
        {label}
      </label>

      <div className="relative">
        <TextArea
          name={name}
          columns={columns}
          rows={rows}
          placeholder={placeholder ?? ""}
          defaultValue={defaultValue ?? ""}
          {...props}
        />
      </div>
    </div>
  );
}
