export const initialState: AuthFormState = {
  authForm: "log-in",
  email: "",
  password: "",
  disabled: false,
};

export const authFormReducer = (state: AuthFormState, action: AuthFormAction) => {
    switch (action.type) {
        case "SET_FORM":
            return { ...state, authForm: action.payload.authForm };
        case "SET_EMAIL":
            return { ...state, email: action.payload.email };
        case "SET_PASSWORD":
            return { ...state, password: action.payload.password };
        case "SET_DISABLED":
            return { ...state, disabled: action.payload.disabled };
        case "RESET_FORM":
            return { ...state, email: "", password: "", disabled: false };
        default:
            return state;
    }
};