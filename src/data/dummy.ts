export const dummySchedules: Schedule[] = [
    {
      id: 1,
      block_id: 101,
      title: "첫 번째 일정",
      url: "https://example.com/first",
      date_start: "2024-12-08T09:00:00",
      date_end: "2024-12-10T12:00:00", // 과거 (CLOSED)
    },
    {
      id: 2,
      block_id: 102,
      title: "두 번째 일정",
      url: "https://example.com/second",
      date_start: "2025-01-01T10:00:00",
      date_end: "2025-01-12T16:00:00", // 현재 시간 포함 (OPEN)
    },
    {
      id: 3,
      block_id: 103,
      title: "세 번째 일정",
      url: "https://example.com/third",
      date_start: "2025-01-01T10:00:00",
      date_end: "2025-01-15T11:30:00", // 현재 시간 포함 (OPEN)
    },
    {
      id: 4,
      block_id: 104,
      title: "네 번째 일정",
      date_start: "2025-01-20T15:00:00",
      date_end: "2025-01-20T17:00:00", // 미래 (SOON)
    },
    {
      id: 5,
      title: "다섯 번째 일정",
      date_start: "2025-01-25T08:00:00",
      date_end: "2025-01-25T10:00:00", // 미래 (SOON)
    },
  ];
