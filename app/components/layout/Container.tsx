export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-7xl w-full mx-auto">
      <section className="px-6 lg:px-8 py-10">{children}</section>
    </div>
  );
}
