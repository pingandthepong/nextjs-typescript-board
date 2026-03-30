export default function Thead({ children }: { children: string }) {
  return (
    <th className="h-12 px-6 text-xs font-semibold text-gray-700 uppercase tracking-wider text-left">
      {children}
    </th>
  );
}
