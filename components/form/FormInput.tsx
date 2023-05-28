import { Input, InputData } from "../ui/Input";

export interface FormInputData extends InputData {
  label: string;
}

export default function FormInput({
  intent,
  name,
  label,
  placeholder,
  defaultValue,
  ...props
}: FormInputData) {
  return (
    <div>
      <label htmlFor={name} className="sr-only">
        {label}
      </label>

      <div className="relative">
        <Input
          name={name}
          placeholder={placeholder ?? ""}
          defaultValue={defaultValue ?? ""}
          {...props}
        />
      </div>
    </div>
  );
}
