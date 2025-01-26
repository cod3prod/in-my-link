import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto px-6">
        <motion.div
          className="flex flex-col md:flex-row justify-center items-center"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="flex flex-col items-center w-full max-w-xl md:pl-12">
            <h3 className="text-4xl font-semibold mb-4">IN MY LINK 소개</h3>
            <p className="text-gray-600 mb-6 text-sm">
              인 마이 링크는 스나이퍼 팩토리 Next.js 3기 과정에서 매칭된
              (주)붐코 커뮤니케이션과 함께한 일경험 프로젝트입니다.
              <br />
              이 프로젝트는 소셜 링크 웹페이지의 구현 및 고도화를 목표로
              진행되었으며, 실제 런칭될 서비스를 기반으로 한 실무 경험을 쌓을 수
              있는 기회였습니다.
              <br />
              <br />
              주요 업무로는 CRUD 기능 구현과 Next.js 프레임워크 활용에 중점을
              두었습니다.
              <br />
              <br />
              <strong>CRUD 기능</strong>: 사용자 프로필 생성, 수정, 삭제 및 조회
              기능을 구현하며 백엔드와의 연동을 통해 데이터를 효율적으로
              관리했습니다.
              <br />
              <br />
              <strong>Next.js 활용</strong>: 서버 사이드 렌더링(SSR)과 정적
              사이트 생성(SSG)을 적극 활용해 페이지 로딩 속도를 최적화하고, SEO
              친화적인 웹사이트를 구축했습니다.
              <br />
              <br />
              또한, UI/UX 개선을 위해 사용자 피드백을 반영한 디자인 수정과
              반응형 웹 디자인을 적용했습니다.
              <br />
              프로젝트를 통해 협업 툴 (Git, Slack)을 활용한 팀 협업 역량과
              브랜치 전략을 기반으로 한 프로젝트 관리 능력을 키울 수 있었습니다.
              <br />
              <br />이 프로젝트는 단순히 기술을 익히는 것을 넘어, 실제 서비스
              출시를 목표로 한 실무 경험을 제공함으로써 프론트엔드 개발자로서의
              역량을 한층 더 성장시킬 수 있었던 소중한 경험이었습니다.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
