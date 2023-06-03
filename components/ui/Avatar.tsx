"use client";

import { cva, VariantProps } from "class-variance-authority";
import * as RadixAvatar from "@radix-ui/react-avatar";

const avatarStyles = cva(
  "rounded-full inline-flex items-center justify-center overflow-hidden select-none",
  {
    variants: {
      size: {
        m: "h-12 w-12",
        xl: "h-28 w-28",
      },
    },
    defaultVariants: {
      size: "m",
    },
  }
);

export interface AvatarProps extends VariantProps<typeof avatarStyles> {
  src: string;
  alt: string;
  fallback: string;
  className?: string;
}

export function Avatar({ size, src, alt, fallback, className }: AvatarProps) {
  return (
    <RadixAvatar.Root className={`${avatarStyles({ size })} ${className}`}>
      <RadixAvatar.Image className="rounded-full h-full w-full object-cover" src={src} alt={alt} />
      <RadixAvatar.Fallback
        className="h-full w-full flex items-center justify-center bg-gray-800 text-gray-400 text-l font-medium"
        delayMs={600}
      >
        {fallback}
      </RadixAvatar.Fallback>
    </RadixAvatar.Root>
  );
}
