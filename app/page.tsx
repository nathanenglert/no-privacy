import AccountWelcome from "@/components/AccountWelcome";

export default function Home() {
  return (
    <>
      <div className="bg-gray-50">
        <div className="mx-auto max-w-screen-2xl px-4 pb-8 sm:px-6 lg:px-8">
          <AccountWelcome />
        </div>
      </div>
      <main className="flex flex-col items-center justify-between p-24"></main>
    </>
  );
}
