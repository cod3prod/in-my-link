import { motion } from "framer-motion";
import Image from "next/image";

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
          <h3 className="text-4xl font-semibold">사용자 후기</h3>
          <p className="text-gray-600 mt-4">
            IN MY LINK를 경험한 분들의 이야기입니다
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
            <div className="h-52 bg-primary-100 p-8 rounded-lg shadow-lg">
              <p className="text-gray-700 mb-6">
                &quot;IN MY LINK는 정말 편리하고 효율적이에요.&quot;
              </p>
              <div className="relative flex items-center">
                <Image
                  src={"https://api.dicebear.com/7.x/bottts/png?seed=kimjiyeong"}
                  alt="Profile Image 1"
                  width={50}
                  height={50}
                  className="bg-gray-200 object-cover rounded-full mr-6"
                />
                <div>
                  <h5 className="font-semibold text-lg">김지영</h5>
                  <p className="text-gray-500">개발자, 스타트업</p>
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
            <div className="h-52 bg-primary-100 p-8 rounded-lg shadow-lg">
              <p className="text-gray-700 mb-6">
                &quot;마케팅 팀의 필수 도구가 되었어요. 덕분에 더 효과적으로
                전략을 세울 수 있게 됐습니다.&quot;
              </p>
              <div className="flex items-center">
                <Image
                  src={
                    "https://api.dicebear.com/7.x/bottts/png?seed=parkminsoo"
                  }
                  alt="Profile Image 2"
                  width={50}
                  height={50}
                  className="bg-gray-200 object-cover rounded-full mr-6"
                />
                <div>
                  <h5 className="font-semibold text-lg">박민수</h5>
                  <p className="text-gray-500">마케팅 팀, A 기업</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
