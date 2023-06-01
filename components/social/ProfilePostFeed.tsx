import {PostFeed, PostFeedProps} from "./PostFeed"

export interface ProfilePostFeedProps extends PostFeedProps{
  apiUrl: string
}

export default async function ProfilePostFeed({ apiUrl, onReact }: ProfilePostFeedProps) {
  const response = await fetch(`${apiUrl}/users/me/posts`);
  const posts = (await response.json())?.posts || [];

  return <PostFeed posts={posts} onReact={onReact} />;
}