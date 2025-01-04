import { BlockType } from "@/enums/block-type.enum";

export const initialState: BlockFormState = {
    type: null,
    style: null,
    title: null,
    sub_text_01: null,
    sub_text_02: null,
    url: null,
    img_url: null,
    date_start: null,
    date_end: null,
    created_at: null,
    updated_at: null,
} 

export const blockFormReducer = (state: BlockFormState, action: BlockFormAction) => {
    switch (action.type) {
        case "SET_FORM":
            return { ...state, ...action.payload };
        case "RESET_FORM":
            return initialState;
        default:
            return state;
    }
}