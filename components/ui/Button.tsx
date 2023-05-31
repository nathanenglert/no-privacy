import { cva, VariantProps } from "class-variance-authority";

const buttonStyles = cva(
  "rounded p-[2px] focus:outline-none focus:ring active:text-opacity-75 text-white",
  {
    variants: {
      fullWidth: {
        true: "w-full",
      },
      intent: {
        primary:
          "bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 disabled:from-pink-300 disabled:via-red-300 disabled:to-yellow-300",
        secondary: "bg-gray-700 disabled:bg-gray-500",
        danger:
          "bg-red-600 text-red-400 hover:text-white disabled:bg-red-400 disabled:text-red-200",
      },
      outline: {
        true: "",
        false: "",
      },
    },
    compoundVariants: [
      { intent: "secondary", outline: true, class: "bg-gray-700 disabled:bg-gray-500" },
      {
        intent: "secondary",
        outline: false,
        class: "bg-gray-800 hover:bg-gray-700 disabled:bg-gray-600",
      },
    ],
    defaultVariants: {
      intent: "secondary",
    },
  }
);

const innerStyles = cva("rounded-sm text-sm font-medium inline-flex items-center gap-2", {
  variants: {
    disabled: {
      true: "bg-gray-600",
      false: "",
    },
    outline: {
      true: "bg-gray-800 hover:bg-transparent",
      false: "",
    },
    size: {
      l: "px-10 py-3",
      m: "px-8 py-3",
      sm: "px-4 py-1",
      xs: "px-2 py-1",
    },
  },
  defaultVariants: {
    outline: true,
    size: "m",
  },
});

export interface ButtonProps extends VariantProps<typeof buttonStyles> {
  disabled?: boolean;
  type?: "button" | "submit" | "reset" | undefined;
  size?: "l" | "m" | "sm" | "xs" | null;
  children: React.ReactNode;
  onClick?: () => void;
}

export function Button({
  disabled = false,
  fullWidth,
  intent,
  outline = true,
  size,
  type = "button",
  onClick,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={buttonStyles({ intent, outline, fullWidth })}
      disabled={disabled}
      onClick={() => onClick && onClick()}
      {...props}
    >
      <span className={innerStyles({ outline: outline && !disabled, size, disabled })}>
        {children}
      </span>
    </button>
  );
}
