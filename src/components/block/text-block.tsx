export default function TextBlock({ title }: { title: string }) {
  return (
    <section className="w-full min-h-32 p-4 rounded-lg shadow-lg bg-white">
      <p className="text-gray-800 text-base whitespace-pre-wrap break-words">
        {title}
      </p>
    </section>
  );
}
