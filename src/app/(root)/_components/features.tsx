import { motion } from "framer-motion";
import Image from "next/image";
import feat1 from "@/assets/feats/feat_001.webp";
import feat2 from "@/assets/feats/feat_002.webp";
import feat3 from "@/assets/feats/feat_003.webp";

export default function Features() {
  return (
    <section id="features" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h3 className="text-4xl font-semibold">주요 기능</h3>
          <p className="text-gray-600 mt-4">
            당신의 링크 관리를 더 스마트하게 만들어줄 다양한 기능을 소개합니다.
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
            <div className="relative h-96 rounded-lg shadow-lg overflow-hidden">
              <Image
                src={feat1}
                alt="블록 관리 기능"
                layout="fill"
                objectFit="cover"
                className="rounded-lg object-top"
              />
              <motion.div
                className="absolute inset-0 bg-gray-900/60 flex flex-col justify-center items-center p-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
              >
                <motion.h4
                  className="text-xl font-semibold mb-2 text-gray-100"
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8, duration: 0.6, ease: "easeOut" }}
                >
                  공유할 관심사를 체계적으로 관리하세요
                </motion.h4>
                <motion.p
                  className="text-gray-200 text-center"
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1, duration: 0.6, ease: "easeOut" }}
                >
                  중요한 블록을 한곳에 모아 깔끔하게 정리하고 빠르게 접근할 수
                  있습니다
                </motion.p>
              </motion.div>
            </div>
          </motion.div>
          <motion.div
            className="w-full md:w-1/3 px-6 mb-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="relative h-96 rounded-lg shadow-lg overflow-hidden">
              <Image
                src={feat2}
                alt="블록 추가 기능"
                layout="fill"
                objectFit="cover"
                className="rounded-lg object-top"
              />
              <motion.div
                className="absolute inset-0 bg-gray-900/60 flex flex-col justify-center items-center p-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
              >
                <motion.h4
                  className="text-xl font-semibold mb-2 text-gray-100"
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8, duration: 0.6, ease: "easeOut" }}
                >
                  새로운 블록을 추가하세요
                </motion.h4>
                <motion.p
                  className="text-gray-200 text-center"
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1, duration: 0.6, ease: "easeOut" }}
                >
                  유튜브, 이미지, 스케쥴, 텍스트 등 다양한 블록을 추가할 수
                  있습니다
                </motion.p>
              </motion.div>
            </div>
          </motion.div>
          <motion.div
            className="w-full md:w-1/3 px-6 mb-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="relative h-96 rounded-lg shadow-lg overflow-hidden">
              <Image
                src={feat3}
                alt="링크 페이지 디자인 기능"
                layout="fill"
                objectFit="cover"
                className="rounded-lg object-top"
              />
              <motion.div
                className="absolute inset-0 bg-gray-900/60 flex flex-col justify-center items-center p-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
              >
                <motion.h4
                  className="text-xl font-semibold mb-2 text-gray-100"
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8, duration: 0.6, ease: "easeOut" }}
                >
                  나만의 스타일로 꾸미세요
                </motion.h4>
                <motion.p
                  className="text-gray-200 text-center"
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1, duration: 0.6, ease: "easeOut" }}
                >
                  입맛에 맞게 링크 페이지를 디자인하세요.
                </motion.p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
