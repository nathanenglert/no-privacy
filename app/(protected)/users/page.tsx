export const dynamic = "force-dynamic";

import UserCard from "@/components/UserCard";
import { prisma } from "@/lib/prisma";
import { Metadata } from "next";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import PageGrid from "@/components/PageGrid";
import TitleLayout from "@/components/TitleLayout";

export const metadata: Metadata = {
  title: "Protected",
};

export default async function UsersPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/api/auth/signin");
  }

  const users = await prisma.user.findMany();

  return (
    <TitleLayout name="Users">
      <PageGrid>
        {users.map((user) => {
          return <UserCard key={user.id} {...user} />;
        })}
      </PageGrid>
    </TitleLayout>
  );
}
