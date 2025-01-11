"use client";

export default function MonthNavigator({
  currentMonth,
  setCurrentMonth,
  currentYear,
  setCurrentYear,
}: {
  currentMonth: number;
  setCurrentMonth: React.Dispatch<React.SetStateAction<number>>;
  currentYear: number;
  setCurrentYear: React.Dispatch<React.SetStateAction<number>>;
}) {
  const goToPreviousMonth = () => {
    if (currentMonth === 0) {
      setCurrentYear(currentYear - 1);
    }
    setCurrentMonth((prevMonth) => (prevMonth === 0 ? 11 : prevMonth - 1));
  };

  const goToNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentYear(currentYear + 1);
    }
    setCurrentMonth((prevMonth) => (prevMonth === 11 ? 0 : prevMonth + 1));
  };

  const title = `${currentYear}년 ${(currentMonth % 12) + 1}월`;

  return (
    <div className="flex items-center justify-between mb-4">
      <button
        type="button"
        className="p-2 text-gray-700 rounded-full hover:bg-gray-300"
        aria-label="Previous month"
        onClick={goToPreviousMonth}
      >
        &lt;
      </button>
      <p className="text-lg font-bold text-gray-800">{title}</p>
      <button
        type="button"
        className="p-2 text-gray-700 rounded-full hover:bg-gray-300"
        aria-label="Next month"
        onClick={goToNextMonth}
      >
        &gt;
      </button>
    </div>
  );
}
