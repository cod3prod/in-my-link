import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          className="flex flex-col md:flex-row items-center"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="md:w-1/2 mb-8 md:mb-0">
            <div className="bg-gray-200 rounded-xl w-full h-64 flex items-center justify-center">
              <div className="bg-gray-300 rounded-xl w-48 h-48"></div>
            </div>
          </div>
          <div className="md:w-1/2 md:pl-12">
            <h3 className="text-4xl font-semibold mb-4">About Us</h3>
            <p className="text-gray-600 mb-6">
              LinkShare was founded with the mission to simplify the way you
              share and manage your online presence. Our platform provides a
              seamless experience to curate, organize, and share all your
              important links in one centralized place.
            </p>
            <p className="text-gray-600">
              We believe in empowering individuals and businesses to present
              their best selves online. With our advanced features and
              user-friendly interface, managing your links has never been
              easier.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
