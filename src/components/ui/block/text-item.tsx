export default function TextItem({ title }: { title: string }) {
  return (
    <div className="w-full min-h-32 p-4 border rounded-lg bg-gray-50 shadow-sm">
      <p className="text-gray-800 text-base whitespace-pre-wrap break-words">
        {title}
      </p>
    </div>
  );
}
