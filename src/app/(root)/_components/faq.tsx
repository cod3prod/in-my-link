import { motion } from "framer-motion";

export default function FAQ() {
  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h3 className="text-4xl font-semibold">Frequently Asked Questions</h3>
          <p className="text-gray-600 mt-4">
            Find answers to the most common questions about LinkShare.
          </p>
        </motion.div>
        <div className="max-w-2xl mx-auto space-y-6">
          <motion.div
            className="bg-primary-100 p-6 rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h4 className="text-2xl font-semibold mb-2">What is LinkShare?</h4>
            <p className="text-gray-600">
              LinkShare is a platform that allows you to organize, manage, and
              share all your important links in one centralized place.
            </p>
          </motion.div>
          <motion.div
            className="bg-primary-100 p-6 rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h4 className="text-2xl font-semibold mb-2">
              How does the free plan work?
            </h4>
            <p className="text-gray-600">
              Our free plan offers unlimited links, basic analytics, and limited
              customization options to help you get started.
            </p>
          </motion.div>
          <motion.div
            className="bg-primary-100 p-6 rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <h4 className="text-2xl font-semibold mb-2">
              Can I upgrade my plan later?
            </h4>
            <p className="text-gray-600">
              Absolutely! You can upgrade to any of our premium plans at any
              time to unlock additional features and benefits.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
