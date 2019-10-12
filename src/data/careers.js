const projects = [
  {
    title: 'Mindcafe',
    image: { title: 'mindcafe', end: 1, vertical: 0 },
    spec: {
      'Client-side': 'react',
      'Server-side': 'nextjs(SSR), flask(API Server)',
      Database: 'mysql',
      Viewport: 'responsive'
    },
    descriptions: [
      "어플리케이션 '마인드카페'와 '마인드카페 Pro'를 웹어플리케이션으로 제작하였으며 현재 고도화를 진행하고 있습니다",
      '디자이너, 백엔드 개발자와 협업하였으며 프론트엔드 설계, 개발, 테스트, 배포 및 고도화를 담당하고있습니다',
      '네이버 검색엔진에 사연노출이 상위 요구사항이기 때문에 서버사이드렌더링이 도입 되었습니다',
      '주요 기능으로는 회원, 사연, 포스팃, 공감/추천/신고, 상담사 소개 및 결제 등 입니다'
    ],
    user_page: 'https://www.mindcafe.co.kr'
  },
  {
    title: 'Atommerce',
    image: { title: 'atommerce', end: 1, vertical: 0 },
    spec: {
      'Client-side': 'react, static web',
      Viewport: 'responsive'
    },
    descriptions: [
      '아토머스의 홈페이지이며 서비스 소개가 주요 컨텐츠 입니다',
      '디자이너와 협업하였으며 퍼블리싱, 배포를 당당하고 있습니다',
      '싱글페이지 어플리케이션이며 애니메이션이 포함되어있습니다'
    ],
    user_page: 'http://www.atommerce.com'
  },
  {
    title: 'Mindcafe 관리콘솔',
    image: { title: 'manage', end: 0, vertical: 0 },
    spec: {
      'Client-side': 'jinja(flask), jquery, bootstrap',
      'Server-side': 'flask',
      Database: 'mysql',
      Viewport: 'responsive'
    },
    descriptions: [
      '아토머스의 서비스를 관리할 수 있는 관리용 웹 어플리케이션입니다',
      '백엔드 개발자와 협업하였으며 유지보수, 고도화를 담당하고 있습니다',
      '기존 개발자가 진행하던 프로젝트를 인수인계 받았으며 주요 작업 내용은 구관리콘솔을 신관리콘솔로 기능이관, 통계기능 추가, 정산기능 추가 등이 있습니다',
      '권한에 대한 제약과 비밀유지로 인해 캡쳐이미지는 모자이크 처리 하였습니다'
    ]
  },
  {
    title: 'INCREPAS',
    image: { title: 'increpas', end: 5, vertical: 3 },
    spec: {
      'Server-side': 'spring framework',
      'Client-side': 'jsp',
      Database: 'mysql mybatis',
      Viewport: 'responsive'
    },
    descriptions: [
      '프로그래밍 강사로 재직 당시 제작에 참여한 교육센터 홈페이지 입니다',
      '팀내에서 주요 역할은 게시판 구현, 시험 및 채점시스템 구현, 사이트 유지보수 및 데이터베이스 관리입니다'
    ],
    user_page: 'http://www.increpas.com',
    manager_page: 'http://lms.increpas.com'
  }
];

export default projects;
