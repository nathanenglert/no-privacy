export const dynamic = "force-dynamic";

import { prisma } from "@/lib/prisma";
import { Metadata } from "next";
import { PostUpdate } from "@/components/social/PostUpdate";
import { PostFeed } from "@/components/social/PostFeed";
import PageLayout from "@/components/PageLayout";

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
    <PageLayout>
      <div className="grid grid-cols-6 gap-4">
        <div className="col-span-2"></div>
        <div className="col-span-4">
          <PostUpdate apiUrl="/api" />
          <PostFeed posts={[]} onReact={() => {}} />
        </div>
      </div>
    </PageLayout>
  );
}
