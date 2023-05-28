import { cva, VariantProps } from "class-variance-authority";

const inputStyles = cva("w-full rounded p-4 pe-12 text-sm shadow-sm text-white bg-gray-800", {
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

export interface InputData extends VariantProps<typeof inputStyles> {
  name: string;
  placeholder?: string | null;
  defaultValue?: string | null;
}

export function Input({ intent, name, placeholder, defaultValue, ...props }: InputData) {
  return (
    <input
      type="text"
      name={name}
      className={inputStyles({ intent })}
      placeholder={placeholder ?? ""}
      defaultValue={defaultValue ?? ""}
      {...props}
    />
  );
}
