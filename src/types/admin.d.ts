type Schedule = {
  id: number | null;
  block_id: number | null;
  title: string;
  url: string | null;
  date_start: string;
  date_end: string;
};

type Block = {
  id: number;
  sequence: number;
  type: 1 | 2 | 3 | 4 | 5 | 6 | 7;
  style: number | null;
  title: string | null;
  sub_text_01: string | null;
  sub_text_02: string | null;
  url: string | null;
  img_url: string | null;
  date_start: string | null;
  date_end: string | null;
  created_at: string;
  updated_at: string;
  schedules?: Schedule[];
  active: 0 | 1;
};

type BlockFormState = {
  id?: number;
  sequnce?: number;
  type: BlockType | null;
  style: number | null;
  title: string | null;
  sub_text_01: string | null;
  sub_text_02: string | null;
  url: string | null;
  img_url: string | null;
  date_start: string | null;
  date_end: string | null;
  created_at: string | null;
  updated_at: string | null;
  schedules?: Schedule[];
  active?: 0|1;
};

type BlockFormAction =
  | {
      type: "SET_FORM";
      payload: Partial<BlockFormState>;
    }
  | {
      type: "RESET_FORM";
    };

type BlockFormContext = {
  state: BlockFormState;
  dispatch: React.Dispatch<BlockFormDispatch>;
};

type Profile = {
  id: number;
  user_id: string;
  username: string | null;
  path: string | null;
  profile_img: string | null;
  public_id: string | null; // cloudinary image id
  visitor_count: number;
  updated_at: string;
  created_at: string;
}