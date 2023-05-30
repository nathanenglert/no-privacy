import classNames from "classnames";
import { Post } from "./Post";
import Heading from "../ui/Heading";

type Post = {
  id: string;
  name: string;
  avatar: string;
  publishDate: string;
  content: string;
};

export interface PostFeedProps {
  posts: Post[];
  onReact: (postId: string, reaction: string) => void;
}

export function PostFeed({ posts, onReact }: PostFeedProps) {
  if (posts.length === 0) {
    return (
      <div className="text-center">
        <Heading level={`p`}>Nothing here to see.</Heading>
      </div>
    );
  }

  return (
    <ul>
      {posts.map((post, index) => (
        <li key={post.id} className={classNames({ "mt-4": index > 0 })}>
          <Post
            name={post.name}
            avatar={post.avatar}
            publishDate={post.publishDate}
            content={post.content}
            onReact={(reaction) => onReact(post.id, reaction)}
          />
        </li>
      ))}
    </ul>
  );
}
