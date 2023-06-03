export default function HeroPageLayout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <div className="absolute top-0 -z-50 w-full h-[400px] bg-cover bg-center bg-[url('https://images.unsplash.com/photo-1560583306-bd304a162229?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2400&q=80')]"></div>
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 pt-40">{children}</div>
    </main>
  );
}
