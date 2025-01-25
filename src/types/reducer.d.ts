type LinkFormState = {
  type: BlockType.LINK;
  title: string | null;
  url: string | null;
  image: File | null;
  style: LinkBlockStyleEnum;
};

type LinkFormAction = {
  type: "SET_FORM";
  payload: Partial<LinkFormState>;
};

type ImageFormState = {
  type: BlockType.IMAGE;
  title: string | null;
  url: string | null;
  image: File | null;
};

type ImageFormAction = {
  type: "SET_FORM";
  payload: Partial<ImageFormState>;
};
