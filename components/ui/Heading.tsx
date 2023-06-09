import { cva, VariantProps } from "class-variance-authority";
import React, { FunctionComponent } from "react";

const headingStyles = cva("items-center gap-2", {
  variants: {
    level: {
      1: "text-4xl mb-4 text-pink-500",
      2: "text-2xl mb-3 text-white",
      3: "text-xl mb-2 text-white",
      4: "text-l ",
      5: "text-sm mb-1 uppercase text-gray-600 font-bold tracking-wider",
      6: "text-sm",
      p: "text-white",
    },
    intent: {
      primary: "",
      secondary: "",
      danger: "",
    },
    inline: {
      true: "inline-flex",
      false: "",
    },
  },
  // compoundVariants: [{ level: 4, intent: "secondary", class: "text-gray-600" }],
  defaultVariants: {
    intent: "secondary",
    inline: true,
  },
});

export interface HeadingProps extends VariantProps<typeof headingStyles> {
  level: 1 | 2 | 3 | 4 | 5 | 6 | "p";
  children: React.ReactNode;
}

type HeadingTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

const Heading: FunctionComponent<HeadingProps> = ({
  level,
  intent,
  inline,
  children = null,
  ...props
}: HeadingProps) => {
  const Tag = level === "p" ? "p" : (`h${level}` as HeadingTag);
  return (
    <Tag className={headingStyles({ intent, level, inline })} {...props}>
      {children}
    </Tag>
  );
};

export default Heading;
