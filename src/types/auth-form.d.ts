type AuthFormState = {
  authForm: string;
  email: string;
  password: string;
  disabled: boolean;
};

type AuthFormAction =
  | {
      type: "SET_FORM";
      payload: {
        authForm: string;
      };
    }
  | {
      type: "SET_EMAIL";
      payload: {
        email: string;
      };
    }
  | {
      type: "SET_PASSWORD";
      payload: {
        password: string;
      };
    }
  | {
      type: "SET_DISABLED";
      payload: {
        disabled: boolean;
      };
    }
  | {
      type: "RESET_FORM";
    };

type AuthFormContext = {
  state: AuthFormState;
  dispatch: React.Dispatch<ActionFormDispatch>;
};
