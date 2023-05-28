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
  rows: number;
  columns: number;
  placeholder?: string | null;
  defaultValue?: string | null;
}

export function TextArea({
  intent,
  name,
  columns,
  rows,
  placeholder,
  defaultValue,
  ...props
}: TextAreaProps) {
  return (
    <textarea
      name={name}
      cols={columns}
      rows={rows}
      className={textAreaStyles({ intent })}
      placeholder={placeholder ?? ""}
      defaultValue={defaultValue ?? ""}
      {...props}
    />
  );
}
