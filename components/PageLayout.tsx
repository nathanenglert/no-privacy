export default function PageLayout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <div className="mx-auto max-w-screen-2xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
        {children}
      </div>
    </main>
  );
}
