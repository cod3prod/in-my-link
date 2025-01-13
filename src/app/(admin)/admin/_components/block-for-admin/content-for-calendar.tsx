export default function ContentForCalendar() {
  return (
    <div className="space-y-1">
      <div className="flex items-center gap-2">
        <p className="text-sm font-semibold text-primary">OPEN</p>{" "}
        <span className="text-xs">{1 + "건"}</span>
      </div>
      <div className="flex items-center gap-2">
        <p className="text-sm font-semibold text-blue-500">SOON</p>{" "}
        <span className="text-xs">{2 + "건"}</span>
      </div>
      <div className="flex items-center gap-2">
        <p className="text-sm font-semibold">CLOSED</p>{" "}
        <span className="text-xs">{3 + "건"}</span>
      </div>
    </div>
  );
}
