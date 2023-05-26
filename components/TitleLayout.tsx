import PageLayout from "./PageLayout";

export default function TitleLayout({
  name,
  children,
}: {
  name: string;
  children: React.ReactNode;
}) {
  return (
    <PageLayout>
      <div className="max-w-xl">
        <h2 className="text-3xl font-bold sm:text-4xl">{name}</h2>
      </div>
      {children}
    </PageLayout>
  );
}
