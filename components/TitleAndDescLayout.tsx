import PageLayout from "./PageLayout";

export default function TitleAndDescLayout({
  name,
  description,
  children,
}: {
  name: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <PageLayout>
      <div className="max-w-xl">
        <h2 className="text-3xl font-bold sm:text-4xl">{name}</h2>
        <p className="mt-4 text-gray-800">{description}</p>
      </div>
      {children}
    </PageLayout>
  );
}
