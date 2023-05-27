import { MouseEventHandler } from "react";

const colors = {
  primary: "bg-blue-500 text-white",
  secondary: "bg-green-500 text-white",
  default: "bg-gray-50 text-gray-600",
};

export default function Button({
  type = "button",
  color = "default",
  onClick = undefined,
  children,
}: {
  type?: "submit" | "button" | "reset" | undefined;
  color?: "primary" | "secondary" | "default";
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
  children: React.ReactNode;
}) {
  const colorClass = colors[color];

  return (
    <button
      type={type}
      className={`inline-block rounded-lg px-5 py-3 bg-gr text-sm font-medium ${colorClass}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
