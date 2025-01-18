import { motion } from "framer-motion";

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h3 className="text-4xl font-semibold">How It Works</h3>
          <p className="text-gray-600 mt-4">
            A simple three-step process to get you started with LinkShare.
          </p>
        </motion.div>
        <div className="flex flex-wrap -mx-6">
          <motion.div
            className="w-full md:w-1/3 px-6 mb-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="flex items-center">
              <div className="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center mr-6">
                <span className="text-2xl font-bold">1</span>
              </div>
              <div>
                <h4 className="text-2xl font-semibold">Sign Up</h4>
                <p className="text-gray-600">
                  Create your free account in just a few minutes.
                </p>
              </div>
            </div>
          </motion.div>
          <motion.div
            className="w-full md:w-1/3 px-6 mb-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="flex items-center">
              <div className="bg-primary-450 text-white rounded-full w-16 h-16 flex items-center justify-center mr-6">
                <span className="text-2xl font-bold">2</span>
              </div>
              <div>
                <h4 className="text-2xl font-semibold">Add Your Links</h4>
                <p className="text-gray-600">
                  Start adding all your important links in one place.
                </p>
              </div>
            </div>
          </motion.div>
          <motion.div
            className="w-full md:w-1/3 px-6 mb-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="flex items-center">
              <div className="bg-primary-400 text-white rounded-full w-16 h-16 flex items-center justify-center mr-6">
                <span className="text-2xl font-bold">3</span>
              </div>
              <div>
                <h4 className="text-2xl font-semibold">Share Your Page</h4>
                <p className="text-gray-600">
                  Share your customized link page with the world.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
