const projects = [
  {
    title: 'IN & OUT',
    image: { title: 'in-n-out', end: 5, vertical: 0 },
    spec: {
      'Client-side': 'react, materializecss',
      'Server-side': 'express',
      Database: 'mongodb mongoose',
      Viewport: 'responsive'
    },
    descriptions: [
      '워라밸이라는 신조어가 등장할 만큼 직원들은 좋은 근무환경에서 일하고 싶어합니다',
      "따라서 요즘 많은 기업들은 '자율출퇴근제도'를 도입하고 있습니다",
      '일반출퇴근모드, 자율출퇴근모드 선택이 가능한 출퇴근 관리시스템을 제작하였습니다',
      '주요기능으로는 출퇴근확인 및 관리와 소켓을 이용한 채팅기능이 있습니다',
      '계정의 권한에 따라 관리자와 직원페이지로 접속되며 직원의 경우 관리자가 설정한 아이피에서만 접속이 가능합니다',
      '채팅의 경우에는 최근글만 보여주고 스크롤의 위치에 따라 이전글 들을 추가로 불러오도록 구현했습니다'
    ],
    demo: 'http://13.125.112.232:3400',
    repository: 'https://github.com/commitnpush/in-n-out'
  },
  {
    title: 'MEMOPAD',
    image: { title: 'memopad', end: 4, vertical: 0 },
    spec: {
      'Client-side': 'react, materializecss',
      'Server-side': 'express',
      Database: 'mongodb mongoose',
      Viewport: 'responsive'
    },
    descriptions: [
      "Velopert님의 블로그에서 '메모패드' 강의글을 따라가며 제작한 메모장 어플리케이션입니다",
      '주요 기능으로는 회원가입 및 로그인, 글쓰기, 글수정 및 삭제, 글검색 등이 있습니다',
      '글 목록의 경우에는 처음에는 일정 갯수의 글을 로딩하고 스크롤의 위치에 따라 추가적으로 로딩하도록 구현했습니다'
    ],
    demo: 'http://13.125.112.232:8080/',
    repository: 'https://github.com/commitnpush/memo'
  }
];

export default projects;
