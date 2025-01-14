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

const data: Block[] = [
  {
    id: 0,
    sequence: 1,
    type: 2,
    style: null,
    title: "동영상 블록",
    sub_text_01: null,
    sub_text_02: null,
    url: "https://youtu.be/HK4X8ckIJ-4?si=v-wnYRaYb6UbizW7",
    img_url: null,
    date_start: null,
    date_end: null,
    created_at: "2024-10-11T12:26:44.000Z",
    updated_at: "2024-10-11T21:08:52.000Z",
    active: 1,
  },
  {
    id: 1,
    sequence: 2,
    type: 1,
    style: 1,
    title: "구분선 블록",
    sub_text_01: null,
    sub_text_02: null,
    url: null,
    img_url: null,
    date_start: null,
    date_end: null,
    created_at: "2024-10-11T13:21:11.000Z",
    updated_at: "2024-10-11T17:50:36.000Z",
    active: 0,
  },
  {
    id: 2,
    sequence: 3,
    type: 3,
    style: 1,
    title: "링크 블록",
    sub_text_01: null,
    sub_text_02: null,
    url: "https://www.naver.com",
    img_url: "",
    date_start: null,
    date_end: null,
    created_at: "2024-10-11T19:58:46.000Z",
    updated_at: "2024-10-11T19:58:46.000Z",
    active: 1,
  },
  {
    id: 3,
    sequence: 4,
    type: 4,
    style: null,
    title: "이미지 블록",
    sub_text_01: null,
    sub_text_02: null,
    url: "https://www.naver.com",
    img_url: "https://picsum.photos/200/300",
    date_start: null,
    date_end: null,
    created_at: "2024-10-11T19:59:15.000Z",
    updated_at: "2024-10-11T19:59:15.000Z",
    active: 1,
  },
  {
    id: 4,
    sequence: 5,
    type: 5,
    style: null,
    title: "이벤트 블록",
    sub_text_01: "서브 타이틀",
    sub_text_02: "가이드라인",
    url: null,
    img_url: null,
    date_start: "2024-10-01T21:26:44.000Z",
    date_end: "2024-10-31T21:26:44.000Z",
    created_at: "2024-10-11T20:10:44.000Z",
    updated_at: "2024-10-14T19:10:00.000Z",
    active: 0,
  },
  {
    id: 5,
    sequence: 6,
    type: 6,
    style: null,
    title: "텍스트 블록",
    sub_text_01: null,
    sub_text_02: null,
    url: null,
    img_url: null,
    date_start: null,
    date_end: null,
    created_at: "2024-10-11T20:10:44.000Z",
    updated_at: "2024-10-11T20:10:44.000Z",
    active: 1,
  },
  {
    id: 6,
    sequence: 7,
    type: 7,
    style: 1,
    title: null,
    sub_text_01: null,
    sub_text_02: null,
    url: null,
    img_url: null,
    date_start: null,
    date_end: null,
    created_at: "2024-10-11T20:39:15.000Z",
    updated_at: "2024-10-11T20:56:38.000Z",
    active: 1,
    schedules: [
      {
        id: 0,
        block_id: 6,
        title: "첫 번째 일정",
        url: "https://example.com/first",
        date_start: "2024-12-08T09:00:00",
        date_end: "2024-12-10T12:00:00", // 과거 (CLOSED)
      },
      {
        id: 1,
        block_id: 6,
        title: "두 번째 일정",
        url: "https://example.com/second",
        date_start: "2025-01-01T10:00:00",
        date_end: "2025-01-14T20:00:00", // 현재 시간 포함 (OPEN)
      },
      {
        id: 2,
        block_id: 6,
        title: "세 번째 일정",
        url: "https://example.com/third",
        date_start: "2025-01-01T10:00:00",
        date_end: "2025-01-15T11:30:00", // 현재 시간 포함 (OPEN)
      },
      {
        id: 3,
        block_id: 6,
        title: "네 번째 일정",
        date_start: "2025-01-20T15:00:00",
        date_end: "2025-01-20T17:00:00", // 미래 (SOON)
      },
      {
        id: 4,
        block_id: 6,
        title: "다섯 번째 일정",
        date_start: "2025-01-25T08:00:00",
        date_end: "2025-01-25T10:00:00", // 미래 (SOON)
      },
    ],
  },
];

export default data;





// <TextBlock
//   title={`It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
// `}
// />
// <VideoBlock
//   url={"https://www.youtube.com/embed/Rj4qtCz99ME?si=VC45C1bcMJ5NHJmG"}
// />
// <DividerBlock dividerStyle={DividerBlockStyleEnum.POINT} />
// <ImageBlock
//   img_url="https://dummyimage.com/300x200/000/fff"
//   title="test"
//   src="https://picsum.photos/200/300"
// />
// <DividerBlock
//   className="w-full"
//   dividerStyle={DividerBlockStyleEnum.ZIGZAG}
// />
// <LinkBlock
//   style={3}
//   title="test"
//   url="https://picsum.photos/200/300"
//   img_url="https://dummyimage.com/300x200/000/fff"
// />
// <EventBlock
//   date_start="2024-09-12T16:00:00"
//   date_end="2025-01-11T16:00:00"
// />
// <CalendarBlock schedules={schedules} />
