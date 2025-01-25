import { BlockType } from "@/enums/block-type.enum";

export const initialState: ImageFormState = {
  type: BlockType.IMAGE,
  title: null,
  url: null,
  image: null,
};

export function imageFormReducer(
  state: ImageFormState,
  action: ImageFormAction
): ImageFormState {
  switch (action.type) {
    case "SET_FORM":
      return {
        ...state,
        ...action.payload,
        type: BlockType.IMAGE,
      };

    default:
      return state;
  }
}
