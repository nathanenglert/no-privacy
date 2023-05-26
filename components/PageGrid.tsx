export default function PageGrid({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-8 grid grid-cols-1 gap-8 md:mt-16 md:grid-cols-2 md:gap-12 lg:grid-cols-3">
      {children}
    </div>
  );
}
