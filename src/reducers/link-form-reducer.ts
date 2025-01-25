import { BlockType } from "@/enums/block-type.enum";
import { LinkBlockStyleEnum } from "@/enums/link-block-style.enum";

export const initialState: LinkFormState = {
  type: BlockType.LINK,
  title: null,
  url: null,
  image: null,
  style: LinkBlockStyleEnum.THUMBNAIL,
};

export function linkFormReducer(
  state: LinkFormState,
  action: LinkFormAction
): LinkFormState {
  switch (action.type) {
    case "SET_FORM":
      return {
        ...state,
        ...action.payload,
        type: BlockType.LINK,
      };

    default:
      return state;
  }
}
