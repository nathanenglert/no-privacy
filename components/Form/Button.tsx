const colors = {
  primary: "bg-blue-500",
  secondary: "bg-green-500",
  default: "bg-grey-500",
};

export default function Button({
  type = "button",
  color = "default",
  children,
}: {
  type: "submit" | "button" | "reset" | undefined;
  color: "primary" | "secondary" | "default";
  children: React.ReactNode;
}) {
  const colorClass = colors[color];

  return (
    <button
      type={type}
      className={`inline-block rounded-lg px-5 py-3 text-sm font-medium text-white ${colorClass}`}
    >
      {children}
    </button>
  );
}
