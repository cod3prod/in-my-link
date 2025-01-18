import { motion } from "framer-motion";

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-input-color-bg">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h3 className="text-4xl font-semibold">Testimonials</h3>
          <p className="text-gray-600 mt-4">
            Hear from our satisfied users who have transformed their link sharing experience.
          </p>
        </motion.div>
        <div className="flex flex-wrap -mx-6">
          <motion.div
            className="w-full md:w-1/2 px-6 mb-12"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="bg-primary-100 p-8 rounded-lg shadow-lg">
              <p className="text-gray-700 mb-6">
                &quot;LinkShare has revolutionized the way I manage my online presence. It&apos;s intuitive and highly effective.&quot;
              </p>
              <div className="flex items-center">
                <div className="bg-gray-200 rounded-full w-16 h-16 mr-6" />
                <div>
                  <h5 className="font-semibold text-lg">Alice Johnson</h5>
                  <p className="text-gray-500">CEO, InnovateX</p>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            className="w-full md:w-1/2 px-6 mb-12"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="bg-primary-100 p-8 rounded-lg shadow-lg">
              <p className="text-gray-700 mb-6">
                &quot;A game-changer for our marketing strategy. The analytics feature provides invaluable insights.&quot;
              </p>
              <div className="flex items-center">
                <div className="bg-gray-200 rounded-full w-16 h-16 mr-6" />
                <div>
                  <h5 className="font-semibold text-lg">Michael Lee</h5>
                  <p className="text-gray-500">
                    Marketing Director, HealthPlus Inc.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
