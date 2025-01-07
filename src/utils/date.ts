// 날짜 포맷 함수
const formatDateTime = (dateString?: string) => {
  if (!dateString) return "";
  const date = new Date(dateString);
  return `${date.getFullYear().toString().slice(2)}.${(date.getMonth() + 1)
    .toString()
    .padStart(2, "0")}.${date.getDate().toString().padStart(2, "0")} ${
    date.toTimeString().split(" ")[0]
  }`;
};

// 남은 일수 계산 함수
const calculateDaysLeft = (endDateString?: string) => {
  if (!endDateString) return "";
  const now = new Date();
  const endDate = new Date(endDateString);
  const diffTime = endDate.getTime() - now.getTime();

  if (diffTime <= 0) return "기간 종료";

  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  const diffHours = Math.floor(
    (diffTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const diffMinutes = Math.floor((diffTime % (1000 * 60 * 60)) / (1000 * 60));

  if (diffDays > 0) {
    return `${diffDays}일 남음`;
  } else if (diffHours > 0) {
    return `${diffHours}시간 남음`;
  } else if (diffMinutes > 0) {
    return `${diffMinutes}분 남음`;
  } else {
    return "곧 종료";
  }
};

// 날짜 범위 포맷 함수
const formatDateRange = (startDateString?: string, endDateString?: string) => {
  if (!startDateString || !endDateString) return "";

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const day = date.getDate().toString().padStart(2, "0");

    const hours = date.getHours();
    const minutes = date.getMinutes().toString().padStart(2, "0");
    const period = hours >= 12 ? "오후" : "오전";
    const adjustedHours = hours > 12 ? hours - 12 : hours || 12;

    return `${month}.${day}(${period} ${adjustedHours}:${minutes})`;
  };

  return `${formatDate(startDateString)} ~ ${formatDate(endDateString)}`;
};

// 두 날짜 문자열 비교 함수
const compareDates = (date1: string, date2: string): number => {
  const parsedDate1 = new Date(date1).getTime();
  const parsedDate2 = new Date(date2).getTime();

  if (parsedDate1 < parsedDate2) {
    return -1; // date1이 date2보다 이전
  } else if (parsedDate1 > parsedDate2) {
    return 1; // date1이 date2보다 이후
  } else {
    return 0; // 두 날짜가 같음
  }
};

export { formatDateTime, calculateDaysLeft, formatDateRange, compareDates };
