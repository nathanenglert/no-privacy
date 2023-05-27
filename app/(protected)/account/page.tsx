import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { ProfileForm } from "./ProfileForm";
import TitleLayout from "@/components/TitleLayout";

export default async function Account() {
  const session = await getServerSession(authOptions);
  const currentUserEmail = session?.user?.email!;

  if (!currentUserEmail) {
    redirect("/api/auth/signin");
  }

  const user = await prisma.user.findUnique({ where: { email: currentUserEmail } });

  return (
    <TitleLayout name="Account">
      <ProfileForm user={user} />
    </TitleLayout>
  );
}
