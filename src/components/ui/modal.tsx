"use client";

import { useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import "animate.css";
import { twMerge } from "tailwind-merge";

function Modal({
  open,
  children,
  className,
  onClose,
}: {
  open: boolean;
  children: React.ReactNode;
  className?: string;
  onClose: () => void;
}) {
  const dialog = useRef<HTMLDialogElement | null>(null);

  useEffect(() => {
    if (open && dialog.current) {
      dialog.current.showModal();
    } else if (dialog.current) {
      dialog.current.close();
    }
  }, [open]);

  if (!open) return null;

  return createPortal(
    <dialog
      ref={dialog}
      onClose={onClose}
      className={twMerge(
        "fixed inset-0 z-40 flex items-center justify-center backdrop:bg-black/50 animate__animated animate__fadeInUp",
        className
      )}
    >
      <div className="bg-white rounded-lg p-6 w-full max-w-lg">{children}</div>
    </dialog>,
    document.body
  );
}

export default Modal;