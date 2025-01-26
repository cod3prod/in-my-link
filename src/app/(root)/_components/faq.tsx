import { motion } from "framer-motion";

export default function FAQ() {
  return (
    <section id="faq" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h3 className="text-4xl font-semibold">자주 묻는 질문</h3>
          <p className="text-gray-600 mt-4">
            인 마이 링크에 대해 궁금한 점을 확인하세요
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
            <h4 className="text-xl font-semibold mb-2">인 마이 링크란?</h4>
            <p className="text-gray-600 text-sm">
              본인의 주요 관심사를 블록으로 추가하여 링크로 공유할 수 있는
              플랫폼입니다
            </p>
          </motion.div>
          <motion.div
            className="bg-primary-100 p-6 rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h4 className="text-xl font-semibold mb-2">왜 만들었나요?</h4>
            <p className="text-gray-600 text-sm">
              지금 구현된 웹앱은 실제 팀 프로젝트에서 얻은 경험을 통해
              포트폴리오 목적으로 재구현되었습니다
            </p>
          </motion.div>
          <motion.div
            className="bg-primary-100 p-6 rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <h4 className="text-xl font-semibold mb-2">무료인가요?</h4>
            <p className="text-gray-600 text-sm">
              무료로 체험하실 수 있지만 이 웹앱은 포트폴리오 목적으로 제작되어
              향후 종료될 수 있습니다
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
