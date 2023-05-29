import * as RadixAvatar from "@radix-ui/react-avatar";

export interface AvatarProps {
  src: string;
  alt: string;
  fallback: string;
}

export function Avatar({ src, alt, fallback }: AvatarProps) {
  return (
    <RadixAvatar.Root className="h-12 w-12 rounded-full inline-flex items-center justify-center overflow-hidden select-none">
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
