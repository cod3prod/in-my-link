"use client";

import { useAuthForm } from "@/hooks/use-auth-form";

export default function AuthPrompt() {
  const { state, dispatch } = useAuthForm();
  return (
    <div className="mt-4 text-center">
      {state.authForm !== "find-by-email" ? (
        <p
          className="hover:font-bold cursor-pointer title"
          onClick={() =>
            dispatch({
              type: "SET_FORM",
              payload: { authForm: "find-by-email" },
            })
          }
        >
          <span className="text-primary-300 font-bold">비밀번호</span>를
          잊으셨나요?
        </p>
      ) : (
        <p
          className="hover:font-bold cursor-pointer title"
          onClick={() =>
            dispatch({
              type: "SET_FORM",
              payload: { authForm: "log-in" },
            })
          }
        >
          다시{" "}
          <span className="text-primary-300 font-bold">로그인</span>
          {" "}하시겠습니까?
        </p>
      )}
    </div>
  );
}
