"use client";

import { FaPlus } from "react-icons/fa";
import Image from "next/image";
import { useState } from "react";

export default function InputImage({
  label,
  setValue,
  required,
}: {
  label: string;
  setValue: (file: File | null) => void;
  required?: boolean;
}) {
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    validateAndSetFile(file);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    validateAndSetFile(file);
  };

  const validateAndSetFile = (file: File | undefined) => {
    if (!file) {
      setValue(null);
      setPreviewUrl(null);
      return;
    }

    const allowedTypes = ["image/jpg", "image/jpeg", "image/png", "image/webp"];
    if (!allowedTypes.includes(file.type)) {
      alert("지원되는 파일 형식은 jpg, jpeg, png, webp입니다.");
      setValue(null);
      setPreviewUrl(null);
      return;
    }

    const maxSize = 5 * 1024 * 1024; // 5MB
    if (file.size > maxSize) {
      alert("파일 크기는 5MB를 초과할 수 없습니다.");
      setValue(null);
      setPreviewUrl(null);
      return;
    }

    const url = URL.createObjectURL(file);
    setPreviewUrl(url);
    setValue(file);
  };

  return (
    <label htmlFor="image-upload" className="flex flex-col cursor-pointer">
      <p className="input-label">
        {label}
        {required && (
          <span className="transform translate-x-1 translate-y-1 inline-block text-primary-300">
            *
          </span>
        )}
      </p>
      <div className="flex items-center">
        <div
          className="w-24 h-24 bg-gray-200 rounded-lg flex items-center justify-center mr-4 overflow-hidden"
          onDragOver={(e) => e.preventDefault()}
          onDrop={handleDrop}
        >
          {previewUrl ? (
            <Image
              src={previewUrl}
              alt="미리보기"
              width={96}
              height={96}
              className="w-full h-full object-cover"
            />
          ) : (
            <FaPlus className="text-gray-500 text-2xl" />
          )}
        </div>
        <div className="supplementary-info text-text-999">
          이미지를 직접 끌어오거나 <br /> 파일을 선택하여 업로드해주세요
        </div>
      </div>
      <input
        id="image-upload"
        type="file"
        accept="image/jpg, image/jpeg, image/png, image/webp"
        className="hidden"
        onChange={handleChange}
      />
    </label>
  );
}
