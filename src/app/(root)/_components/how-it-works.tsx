import { motion } from "framer-motion";

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h3 className="text-4xl font-semibold">이렇게 사용하세요</h3>
          <p className="text-gray-600 mt-4">
            인 마이 링크는 단 3단계로 시작할 수 있습니다
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
              <div className="flex-none bg-primary-450 text-white rounded-full w-16 h-16 flex items-center justify-center mr-6">
                <span className="text-2xl font-bold">1</span>
              </div>
              <div>
                <h4 className="text-2xl font-semibold">회원가입</h4>
                <p className="text-gray-600">
                  간단한 절차로 무료 계정을 만드세요
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
              <div className="flex-none bg-primary-300 text-white rounded-full w-16 h-16 flex items-center justify-center mr-6">
                <span className="text-2xl font-bold">2</span>
              </div>
              <div>
                <h4 className="text-2xl font-semibold">블록 추가</h4>
                <p className="text-gray-600">
                  다양한 블록을 한곳에 모아보세요
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
              <div className="flex-none bg-primary-200 text-white rounded-full w-16 h-16 flex items-center justify-center mr-6">
                <span className="text-2xl font-bold">3</span>
              </div>
              <div>
                <h4 className="text-2xl font-semibold">공유하기</h4>
                <p className="text-gray-600">
                  당신의 링크를 공유하세요
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
