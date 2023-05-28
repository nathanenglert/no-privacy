import { cva, VariantProps } from "class-variance-authority";

const buttonStyles = cva(
  "rounded p-[2px] focus:outline-none focus:ring active:text-opacity-75 text-white",
  {
    variants: {
      intent: {
        primary: "bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500",
        secondary: "bg-gray-700 text-gray-800",
        danger: "bg-red-600 text-red-400 hover:text-white",
      },
      fullWidth: {
        true: "w-full",
      },
    },
    defaultVariants: {
      intent: "secondary",
    },
  }
);

export interface ButtonProps extends VariantProps<typeof buttonStyles> {
  type?: "button" | "submit" | "reset" | undefined;
  children: React.ReactNode;
  onClick?: () => void;
}

export function Button({ intent, fullWidth, type = "button", children, ...props }: ButtonProps) {
  return (
    <button type={type} className={buttonStyles({ intent, fullWidth })} {...props}>
      <span className="rounded-sm bg-gray-800 px-8 py-3 text-sm font-medium hover:bg-transparent inline-flex items-center gap-2">
        {children}
      </span>
    </button>
  );
}
