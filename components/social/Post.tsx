import { Avatar } from "../ui/Avatar";
import { Button } from "../ui/Button";
import { DateTime } from "../ui/DateTime";
import Heading from "../ui/Heading";
import { Separator } from "../ui/Separator";

export interface PostProps {
  name: string;
  avatar: string;
  publishDate: string;
  content: string;
  onReact?: (reaction: string) => void;
}

function getInitials(fullName: string) {
  return fullName
    .trim()
    .split(/\s+/) // Split the string into an array of words, handling multiple spaces
    .map((name) => name.charAt(0)) // Take the first letter of each word
    .join(""); // Join them into a new string
}

export function Post({ name, avatar, publishDate, content, onReact }: PostProps) {
  return (
    <article className="rounded-xl bg-gray-800 p-4 pb-2 relative">
      <div className="flex items-center gap-4">
        <Avatar alt={name} src={avatar} fallback={getInitials(name)} />

        <div>
          <h3 className="text-lg font-medium text-white">{name}</h3>

          <div className="flow-root">
            <DateTime value={publishDate} className="block text-xs text-gray-500" />
          </div>
        </div>
      </div>

      <div className="mt-4 mb-4 space-y-2">
        <Heading level={`p`}>{content}</Heading>
      </div>
      <Separator className={`absolute left-0 right-0`} />
      <div className="space-y-2 ml-[-8px] relative">
        {["👍", "❤️", "😂", "👏", "🤯", "🧐"].map((emoji) => (
          <Button outline={false} size={`xs`} onClick={() => onReact && onReact(emoji)}>
            {emoji}
          </Button>
        ))}
      </div>
    </article>
  );
}
