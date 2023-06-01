export const dynamic = "force-dynamic";

import { prisma } from "@/lib/prisma";
import { Metadata } from "next";
import TitleLayout from "@/components/TitleLayout";
import { PostUpdate } from "@/components/social/PostUpdate";
import { PostFeed } from "@/components/social/PostFeed";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const user = await prisma.user.findUnique({ where: { id: params.id } });
  return { title: `User profile of ${user?.name}` };
}

interface Props {
  params: {
    id: string;
  };
}

export default async function UserProfilePage({ params }: Props) {
  const user = await prisma.user.findUnique({ where: { id: params.id } });
  const { name, bio, image } = user ?? {};

  return (
    <TitleLayout name={name || "That One Person"}>
      <PostUpdate apiUrl="/api" />
      <PostFeed posts={[]} onReact={() => {}} />
    </TitleLayout>
  );
}
