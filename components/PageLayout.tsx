export default function PageLayout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">{children}</div>
    </main>
  );
}
