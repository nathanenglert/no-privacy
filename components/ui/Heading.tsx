import { cva, VariantProps } from "class-variance-authority";
import React, { FunctionComponent } from "react";

const headingStyles = cva("inline-flex items-center gap-2", {
  variants: {
    level: {
      1: "text-4xl mb-4 text-pink-500",
      2: "text-2xl mb-3 text-white",
      3: "text-xl mb-2 text-white",
      4: "text-l ",
      5: "text-sm mb-1 uppercase text-gray-600 font-bold tracking-wider",
      6: "text-sm",
    },
    intent: {
      primary: "",
      secondary: "",
      danger: "",
    },
  },
  // compoundVariants: [{ level: 4, intent: "secondary", class: "text-gray-600" }],
  defaultVariants: {
    intent: "secondary",
  },
});

export interface HeadingProps extends VariantProps<typeof headingStyles> {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  children: React.ReactNode;
}

type HeadingTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

const Heading: FunctionComponent<HeadingProps> = ({
  level,
  intent,
  children = null,
  ...props
}: HeadingProps) => {
  const Tag = `h${level}` as HeadingTag;
  return (
    <Tag className={headingStyles({ intent, level })} {...props}>
      {children}
    </Tag>
  );
};

export default Heading;
