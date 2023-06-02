export const dynamic = "force-dynamic";

import { prisma } from "@/lib/prisma";
import { Metadata } from "next";
import { PostUpdate } from "@/components/social/PostUpdate";
import { PostFeed } from "@/components/social/PostFeed";
import PageLayout from "@/components/PageLayout";
import { Avatar } from "@/components/ui/Avatar";
import { getInitials } from "@/utils/string";
import Heading from "@/components/ui/Heading";

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
      <div className="w-full h-[280px] bg-cover bg-center bg-[url('https://images.unsplash.com/photo-1519608487953-e999c86e7455?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80')]"></div>
      <div className="relative -mt-4 px-4 flex shrink-0">
        <Avatar
          size={`xl`}
          src={image || ""}
          alt={name || ""}
          fallback={getInitials(name || "")}
          className="border-solid border-4 border-gray-950"
        />
        <div className="ms-2 mt-6 text-left sm:block">
          <div>
            <h1 className="text-4xl mb-1 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 font-bold inline-flex">
              {name}
            </h1>
          </div>
          <Heading level={3}>Dreamer, thinker, doer.</Heading>
          {/* <span className="text-gray-500">{session.user?.email}</span> */}
        </div>
      </div>
      <div className="mt-8 grid grid-cols-6 gap-4">
        <div className="col-span-2"></div>
        <div className="col-span-4">
          <PostUpdate apiUrl="/api" />
          <PostFeed posts={[]} onReact={() => {}} />
        </div>
      </div>
    </PageLayout>
  );
}
