"use client";

import { useState } from "react";

export default function ActiveTab({ active }: { active: 0 | 1 }) {
  const [isToggled, setIsToggled] = useState(active === 1);

  return (
    <div className="flex items-center">
      <button
        onClick={() => setIsToggled(!isToggled)}
        className={`relative h-4 w-8 rounded-full duration-300 ease-in-out ${
          isToggled ? "bg-blue-500" : "bg-gray-300"
        }`}
      >
        <div
          className={`absolute left-1 top-1/2 h-3 w-3 -translate-y-1/2 transform rounded-full bg-white transition-transform duration-300 ease-in-out ${
            isToggled ? "translate-x-3" : "translate-x-0"
          }`}
        />
      </button>
    </div>
  );
}
