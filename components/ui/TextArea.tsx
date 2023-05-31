import { cva, VariantProps } from "class-variance-authority";

const textAreaStyles = cva("w-full rounded p-4 pe-12 text-sm shadow-sm text-white bg-gray-800", {
  variants: {
    intent: {
      primary: "border-gray-700",
      secondary: "",
    },
  },
  defaultVariants: {
    intent: "secondary",
  },
});

export interface TextAreaProps extends VariantProps<typeof textAreaStyles> {
  name: string;
  rows?: number;
  columns?: number;
  placeholder?: string;
  defaultValue?: string;
  value?: string;
  onChange?: (value: string) => void;
}

export function TextArea({
  intent,
  name,
  columns = 30,
  rows = 5,
  placeholder,
  defaultValue,
  value,
  onChange,
  ...props
}: TextAreaProps) {
  return (
    <textarea
      name={name}
      cols={columns}
      rows={rows}
      className={textAreaStyles({ intent })}
      placeholder={placeholder}
      defaultValue={defaultValue}
      value={value}
      onChange={(e) => onChange && onChange(e.target.value)}
      {...props}
    />
  );
}
