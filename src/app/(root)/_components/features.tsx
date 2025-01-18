import { motion } from "framer-motion";

export default function Features() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h3 className="text-4xl font-semibold">Our Features</h3>
          <p className="text-gray-600 mt-4">
            Explore the powerful features that make LinkShare the best choice
            for your link management.
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
            <div className="bg-primary-100 p-8 rounded-lg shadow-lg h-full">
              <div className="bg-primary-200 p-6 rounded-full mb-6 w-20 h-20 flex items-center justify-center">
                <div className="bg-gray-200 rounded-full w-12 h-12" />
              </div>
              <h4 className="text-2xl font-semibold mb-2">Organized Links</h4>
              <p className="text-gray-600">
                Keep all your important links neatly organized and easily
                accessible.
              </p>
            </div>
          </motion.div>
          <motion.div
            className="w-full md:w-1/3 px-6 mb-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="bg-primary-100 p-8 rounded-lg shadow-lg h-full">
              <div className="bg-primary-250 p-6 rounded-full mb-6 w-20 h-20 flex items-center justify-center">
                <div className="bg-gray-200 rounded-full w-12 h-12" />
              </div>
              <h4 className="text-2xl font-semibold mb-2">
                Advanced Analytics
              </h4>
              <p className="text-gray-600">
                Gain insights into your link performance with detailed
                analytics.
              </p>
            </div>
          </motion.div>
          <motion.div
            className="w-full md:w-1/3 px-6 mb-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="bg-primary-100 p-8 rounded-lg shadow-lg h-full">
              <div className="bg-primary-300 p-6 rounded-full mb-6 w-20 h-20 flex items-center justify-center">
                <div className="bg-gray-200 rounded-full w-12 h-12" />
              </div>
              <h4 className="text-2xl font-semibold mb-2">
                Customizable Pages
              </h4>
              <p className="text-gray-600">
                Personalize your link pages to match your brand and style.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
