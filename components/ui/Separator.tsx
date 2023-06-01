"use client";

import * as RadixSeparator from "@radix-ui/react-separator";
import { cva, VariantProps } from "class-variance-authority";

const separatorStyles = cva("bg-gray-950", {
  variants: {
    orientation: {
      horizontal: "w-full h-[1px]",
      vertical: "h-full w-[1px]",
    },
  },
  defaultVariants: {
    orientation: "horizontal",
  },
});

export interface SeparatorProps extends VariantProps<typeof separatorStyles> {
  orientation?: "horizontal" | "vertical";
  className?: string;
}

export function Separator({ className, orientation }: SeparatorProps) {
  return (
    <RadixSeparator.Root
      orientation={orientation}
      className={separatorStyles({ orientation }) + ` ` + className}
    />
  );
}
