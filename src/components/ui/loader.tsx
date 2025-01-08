import { useEffect, useState } from "react";

export default function Loader() {
  const [colors, setColors] = useState(["bg-primary-450", "bg-primary-400", "bg-primary-350"]);

  useEffect(() => {
    const interval = setInterval(() => {
      setColors((prevColors) => {
        const [first, ...rest] = prevColors;
        return [...rest, first];
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center h-screen bg-black/20">
      <div className="flex space-x-2">
        {colors.map((color, index) => (
          <div
            key={index}
            className={`w-4 h-4 ${color} rounded-full animate-bounce transition-colors duration-1000`}
            style={{ animationDelay: `${index * 0.2}s` }}
          ></div>
        ))}
      </div>
    </div>
  );
}
