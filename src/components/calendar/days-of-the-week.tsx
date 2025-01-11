export default function DaysOfTheWeek() {
    const days = ["일", "월", "화", "수", "목", "금", "토"];
    return (
      <div className="grid grid-cols-7 text-center font-medium">
        {days.map((day, index) => (
          <div key={index} className="p-2">
            {day}
          </div>
        ))}
      </div>
    );
  }
  