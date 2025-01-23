import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="flex h-screen items-center justify-center bg-white"
    >
      <motion.div
        className="text-center px-4"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h2 className="text-5xl font-semibold mb-4">
          Transform Your Link Sharing
        </h2>
        <p className="text-xl mb-8">
          A seamless platform to manage and share all your important links
          effortlessly.
        </p>
        <motion.button
          className="bg-primary text-white px-8 py-4 rounded-md hover:bg-primary-450 transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Get Started
        </motion.button>
      </motion.div>
    </section>
  );
}
