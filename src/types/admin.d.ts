type Schedule = {
  id: number;
  block_id: number;
  // user_id: number;
  title: string;
  url: string;
  date_start: string;
  date_end: string;
};

type Block = {
  id: number;
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
  schedule?: Schedule[];
};

type BlockFormState = {
  id?: number;
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
  schedule?: Schedule[];
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
