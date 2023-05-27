import { cva, VariantProps } from "class-variance-authority";

const buttonStyles = cva(
  "flex items-center justify-center px-4 py-2 rounded font-medium focus:outline-none",
  {
    variants: {
      intent: {
        primary: "bg-blue-500 text-white",
        secondary: "bg-gray-200 text-gray-900",
        danger: "bg-red-500 text-white focus:ring-red-500",
      },
      fullWidth: {
        true: "w-full",
      },
    },
    defaultVariants: {
      intent: "primary",
    },
  }
);

export interface ButtonProps extends VariantProps<typeof buttonStyles> {
  children: React.ReactNode;
  onClick?: () => void;
}

export function Button({ intent, fullWidth, children, ...props }: ButtonProps) {
  return (
    <button type="button" className={buttonStyles({ intent, fullWidth })} {...props}>
      {children}
    </button>
  );
}
