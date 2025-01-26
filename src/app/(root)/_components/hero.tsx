import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function Hero() {
  const router = useRouter();

  return (
    <section className="flex h-screen items-center justify-center">
      <motion.div
        className="text-center px-4"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h2 className="text-5xl font-semibold mb-2">IN MY LINK</h2>
        <h3 className="text-2xl font-semibold mb-2">
          링크 관리의 <span className="text-primary animate-pulse">새로운</span>{" "}
          기준
        </h3>
        <p className="text-md text-text-666 mb-8">
          모든 링크를 쉽게 관리하고 공유할 수 있는 플랫폼
        </p>
        <motion.button
          onClick={() => router.push("/auth")}
          className="bg-primary text-white px-8 py-4 rounded-md hover:bg-primary-450 transition-colors cursor-pointer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          지금 시작하기
        </motion.button>
      </motion.div>
    </section>
  );
}
