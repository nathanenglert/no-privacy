export const dynamic = "force-dynamic";

import { prisma } from "@/lib/prisma";
import { Metadata } from "next";
import { PostUpdate } from "@/components/social/PostUpdate";
import { PostFeed } from "@/components/social/PostFeed";
import HeroPageLayout from "@/components/HeroPageLayout";
import { Avatar } from "@/components/ui/Avatar";
import { getInitials } from "@/utils/string";

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
    <HeroPageLayout>
      <div className="grid grid-cols-10 gap-4">
        <div className="col-span-7 bg-gray-950 bg-opacity-90 rounded">
          <div className="relative flex shrink-0 px-4 py-4">
            <Avatar
              size={`xl`}
              src={image || ""}
              alt={name || ""}
              fallback={getInitials(name || "")}
              className="border-solid border-4 border-gray-950"
            />
            <div className="ms-2 mt-5 text-left sm:block">
              <div>
                <h1 className="text-4xl mb-1 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 inline-flex">
                  {name}
                </h1>
              </div>
              <p className="text-gray-400">St. Louis, MO</p>
              {/* <span className="text-gray-500">{session.user?.email}</span> */}
            </div>
          </div>
          <div className="bg-gray-900 px-4 py-6 rounded">
            <PostUpdate apiUrl="/api" />
            <div className="mt-5">
              <PostFeed
                posts={[
                  {
                    id: "1",
                    name: "Claire Mac",
                    avatar:
                      "https://images.unsplash.com/photo-1614644147724-2d4785d69962?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80",
                    publishDate: "2022-10-10T22:45:22.578Z",
                    content: "Went to get donuts today, lol",
                  },
                  {
                    id: "2",
                    name: "John Doe",
                    avatar:
                      "https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80",
                    publishDate: "2022-10-08T15:23:22.578Z",
                    content: "What is up..?",
                  },
                ]}
              />
            </div>
          </div>
        </div>
        <div className="col-span-3 bg-gray-950 bg-opacity-90 rounded">
          <div className="px-4 py-4 h-[144px]"></div>
          <div className="bg-gray-900 px-4 py-4 rounded h-[500px]"></div>
        </div>
      </div>
    </HeroPageLayout>
  );
}
