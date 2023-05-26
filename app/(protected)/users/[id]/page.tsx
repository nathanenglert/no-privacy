export const dynamic = "force-dynamic";

import { prisma } from "@/lib/prisma";
import { Metadata } from "next";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import TitleLayout from "@/components/TitleLayout";

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
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/api/auth/signin");
  }

  const user = await prisma.user.findUnique({ where: { id: params.id } });
  const { name, bio, image, id } = user ?? {};

  return (
    <TitleLayout name={name || "That One Person"}>
      <img width={300} src={image ?? "/default-avatar.webp"} alt={`${name}'s profile`} />

      <h3>Bio</h3>
      <p>{bio}</p>
    </TitleLayout>
  );
}
