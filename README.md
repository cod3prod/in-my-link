# 📎 PROJECT :: MUCTS

![thumbnail](https://res.cloudinary.com/dab5xf29a/image/upload/v1738451264/in-my-link_gofaio.png)

## 👀 서비스 소개

- 서비스명: IN MY LINK
- 서비스 설명: 소셜 링크 웹페이지 구현 프로젝트
  - 웅진씽크빅X유데미X스나이퍼팩토리 Next.js 3기
  - 붐코 커뮤니케이션 일경험 매칭
    <br>

## 📅 프로젝트 기간

- **직무 교육** : 2024.09.20 ~ 2024.10.04 (2주)
- **프로젝트 참여** : 2024.10.07 ~ 2024.10.21 (2주)
- **기능 개선** : 2025.01.02 ~ 2025.01.27 (3주)
  <br>

## ⭐ 주요 기능

- **메인 페이지**

  - 사용자에게 강렬한 첫인상을 주는 히어로 섹션, 주요 기능 설명, 추천 사용자 리뷰, 서비스 소개 등의 다양한 섹션 포함
  - `framer-motion`을 활용한 부드럽고 다이나믹한 애니메이션 효과 제공

- **회원가입 / 비밀번호 초기화**

  - 이메일과 비밀번호를 사용한 간편한 회원가입
  - 비밀번호는 안전하게 암호화하여 데이터베이스에 저장
  - 중복된 이메일 주소가 존재하면 가입을 차단
  - 가입 성공 후, 회원 정보 수정이 가능한 콜백 페이지로 리다이렉션
  - 이메일 인증을 통한 회원가입 완료 및 비밀번호 초기화 기능 제공

- **로그인 / 로그아웃**

  - 서비스 이용을 위해 로그인 필수
  - `supabase-js`를 활용하여 세션 관리 및 인증 처리
  - `JWT` 토큰을 이용한 인증 방식 적용
  - 토큰 만료 시, `refresh token`을 통해 자동으로 세션 갱신

- **프로필 관리**

  - `PATCH` 요청을 통해 사용자가 선택한 정보만을 수정 가능
  - 닉네임, 비밀번호, 링크 경로, 프로필 이미지 등 개인 정보 수정 지원
  - 사용자의 정보를 편리하게 수정 및 업데이트

- **블록 생성**

  - 링크, 구분선, 이미지, 일정, 이벤트, 텍스트, 동영상 등의 다양한 블록을 생성하여 웹 페이지에 추가
  - 블록마다 다양한 스타일과 콘텐츠를 손쉽게 구성할 수 있는 기능 제공

- **블록 관리**

  - 탭 버튼을 활용한 블록 순서 변경 및 드래그 앤 드랍으로 순서 재배치 가능
  - 특정 블록을 비활성화하거나 삭제할 수 있는 기능 제공
  - 관리 화면에서 각 블록을 쉽게 활성화/비활성화할 수 있어 유연한 콘텐츠 관리 가능

- **링크 공유**

  - 사용자가 만든 링크를 통해 자신의 페이지나 블록을 외부와 쉽게 공유할 수 있는 기능
  - 각 링크에 해당하는 블록 내용도 공유 가능하여, 콘텐츠 확산을 촉진

- **반응형 디자인 지원**
  - 다양한 화면 크기에서 최적화된 사용자 경험을 제공
  - 모바일, 태블릿, 데스크탑 등 모든 디바이스에서 유연하게 콘텐츠가 적응
  - `Tailwind CSS`를 활용하여 뛰어난 레이아웃 유연성 제공

## 🔨 기술 스택

<table>
  <tr>
    <th>구분</th>
    <th>내용</th>
  </tr>
  <tr>
    <td>사용 언어</td>
    <td>
      <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=TypeScript&logoColor=white"/>
    </td>
  </tr>
  <tr>
    <td>프레임워크 및 라이브러리</td>
    <td>
      <img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=Next.js&logoColor=white"/>
      <img src="https://img.shields.io/badge/TailwindCSS-06B6D4?style=for-the-badge&logo=TailwindCSS&logoColor=white"/>
      <img src="https://img.shields.io/badge/Zustand-000000?style=for-the-badge&logo=Zustand&logoColor=white"/>
      <img src="https://img.shields.io/badge/Framer%20Motion-00C4B3?style=for-the-badge&logo=Framer&logoColor=white"/>
      <img src="https://img.shields.io/badge/Animate.css-000000?style=for-the-badge&logo=Animate.css&logoColor=white"/>
    </td>
  </tr>
    <tr>
    <td>클라우드 서비스</td>
    <td>
      <img src="https://img.shields.io/badge/Cloudinary-2E6DC1?style=for-the-badge&logo=Cloudinary&logoColor=white"/>
    </td>
  </tr>
  <tr>
    <td>데이터베이스 및 인증</td>
    <td>
      <img src="https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=Supabase&logoColor=white"/>
  <tr>
    <td>호스팅</td>
    <td>
      <img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=Vercel&logoColor=white"/>
    </td>
  </tr>
    </td>
  </tr>
  <tr>
    <td>버전 관리</td>
    <td>
      <img src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=Git&logoColor=white"/>
      <img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=GitHub&logoColor=white"/>
    </td>
  </tr>
  <tr>
    <td>협업 도구</td>
    <td>
      <img src="https://img.shields.io/badge/Slack-4A154B?style=for-the-badge&logo=Slack&logoColor=white"/>
      <img src="https://img.shields.io/badge/Notion-000000?style=for-the-badge&logo=Notion&logoColor=white"/>
    </td>
  </tr>
</table>

<br>

## ⚙ 소프트웨어 아키텍처

![소프트웨어 아키텍처](https://res.cloudinary.com/dab5xf29a/image/upload/v1738839605/in-my-link-architecture_oidgzj.png)
<br>

## 🖥 주요 화면 구성

### 메인 페이지 / 인증

![image](https://res.cloudinary.com/dab5xf29a/image/upload/v1738474011/1_bigksg.png)
<br>

### 프로필

![image](https://res.cloudinary.com/dab5xf29a/image/upload/v1738473637/2_x3wnyj.png)
<br>

### 어드민 / 링크

![image](https://res.cloudinary.com/dab5xf29a/image/upload/v1738473645/3_m0ukqv.png)
<br>

### 블록 생성

![image](https://res.cloudinary.com/dab5xf29a/image/upload/v1738473652/4_trnp8e.png)
<br>

## 📂 프로젝트 구조

```
in-my-link/
├── public/                   # 정적 파일
└── src/                      # Next.js 소스 코드
    ├── app/                  # Next.js App Router
    │   ├── (admin)/          # 블록 관련 페이지
    │   ├── (auth)/           # 인증 관련 페이지
    │   ├── (link)/           # 링크 관련 페이지
    │   ├── (profile)/        # 프로필 관련 페이지
    │   ├── (root)/           # 메인 페이지
    │   └── api/              # API 라우트
    ├── assets/               # 에셋 파일
    ├── components/           # 재사용 가능한 UI 컴포넌트
    │   ├── block/            # 블록 컴포넌트
    │   ├── calendar/         # 캘린더 컴포넌트
    │   ├── layout/           # 레이아웃 컴포넌트
    │   ├── profile-card/     # 프로필 카드 컴포넌트
    │   └── ui/               # UI 관련 컴포넌트
    ├── contexts/             # 컨텍스트 관리
    ├── data/                 # 정적 데이터
    ├── enums/                # 열거형 정의
    ├── hooks/                # 커스텀 훅
    ├── libs/                 # 라이브러리
    ├── reducers/             # reducer 로직
    ├── styles/               # 스타일 (CSS)
    ├── types/                # 타입 정의
    ├── utils/                # 유틸리티 함수
    └── zustand/              # Zustand 상태 관리
```

<br>

## ⚙️ **프로젝트 설정**

```bash
# 의존성 설치
npm install

# 로컬 개발 환경
npm run dev
```
