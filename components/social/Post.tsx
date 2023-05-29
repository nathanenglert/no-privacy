import { Avatar } from "../ui/Avatar";
import { Button } from "../ui/Button";
import Heading from "../ui/Heading";
import { Separator } from "../ui/Separator";

export function Post() {
  return (
    <article className="rounded-xl bg-gray-800 p-4 pb-2 relative">
      <div className="flex items-center gap-4">
        <Avatar
          alt="Claire Mac"
          src="https://images.unsplash.com/photo-1614644147724-2d4785d69962?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80"
          fallback="CM"
        />

        <div>
          <h3 className="text-lg font-medium text-white">Claire Mac</h3>

          <div className="flow-root">
            <time dateTime="2022-10-10 22:45:00" className="block text-xs text-gray-500">
              Oct 10th at 10:45 PM
            </time>
          </div>
        </div>
      </div>

      <div className="mt-4 mb-4 space-y-2">
        <Heading level={`p`}>Went to get donuts today, lol</Heading>
      </div>
      <Separator className={`absolute left-0 right-0`} />
      <div className="space-y-2 ml-[-8px] relative">
        {["👍", "❤️", "😂", "👏", "🤯", "🧐"].map((emoji) => (
          <Button outline={false} size={`xs`}>
            {emoji}
          </Button>
        ))}
      </div>
    </article>
  );
}
