"use client";

import { useAuthForm } from "@/hooks/use-auth-form";

export default function AuthPrompt() {
  const { state, dispatch } = useAuthForm();
  return (
    <div className="mt-4 text-center font-semibold text-text-999">
      {state.authForm !== "find-by-email" ? (
        <p
          className="cursor-pointer group"
          onClick={() =>
            dispatch({
              type: "SET_FORM",
              payload: { authForm: "find-by-email" },
            })
          }
        >
          <span className="text-primary-450 group-hover:underline group-hover:text-primary-200 transition-all duration-300">
            비밀번호
          </span>{" "}
          를 잊으셨나요?
        </p>
      ) : (
        <p
          className="cursor-pointer group"
          onClick={() =>
            dispatch({
              type: "SET_FORM",
              payload: { authForm: "log-in" },
            })
          }
        >
          다시{" "}
          <span className="text-primary-450 group-hover:underline group-hover:text-primary-200 transition-all duration-300">
            로그인
          </span>{" "}
          하시겠습니까?
        </p>
      )}
    </div>
  );
}
