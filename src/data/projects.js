const projects = [
  {
    title: "IN & OUT",
    image: { title: "in-n-out", end: 5, vertical: 0 },
    spec: {
      "Client-side": "react, materializecss",
      "Server-side": "express",
      Database: "mongodb mongoose",
      Viewport: "responsive"
    },
    descriptions: [
      "워라밸이라는 신조어가 등장할 만큼 직원들은 좋은 근무환경에서 일하고 싶어합니다",
      "따라서 요즘 많은 기업들은 '자율출퇴근제도'를 도입하고 있습니다",
      "일반출퇴근모드, 자율출퇴근모드 선택이 가능한 출퇴근 관리시스템을 제작하였습니다",
      "주요기능으로는 출퇴근확인 및 관리와 소켓을 이용한 채팅기능이 있습니다",
      "계정의 권한에 따라 관리자와 직원페이지로 접속되며 직원의 경우 관리자가 설정한 아이피에서만 접속이 가능합니다",
      "채팅의 경우에는 최근글만 보여주고 스크롤의 위치에 따라 이전글 들을 추가로 불러오도록 구현했습니다"
    ],
    demo: "http://13.125.112.232:3400",
    repository: "https://github.com/commitnpush/in-n-out"
  },
  {
    title: "MEMOPAD",
    image: { title: "memopad", end: 4, vertical: 0 },
    spec: {
      "Client-side": "react, materializecss",
      "Server-side": "express",
      Database: "mongodb mongoose",
      Viewport: "responsive"
    },
    descriptions: [
      "Velopert님의 블로그에서 '메모패드' 강의글을 따라가며 제작한 메모장 어플리케이션입니다",
      "주요 기능으로는 회원가입 및 로그인, 글쓰기, 글수정 및 삭제, 글검색 등이 있습니다",
      "글 목록의 경우에는 처음에는 일정 갯수의 글을 로딩하고 스크롤의 위치에 따라 추가적으로 로딩하도록 구현했습니다"
    ],
    demo: "http://13.125.112.232:8080/",
    repository: "https://github.com/commitnpush/memo"
  },
  {
    title: "FAKEBOOK",
    image: { title: "fakebook", end: 2, vertical: 2 },
    spec: {
      "Client-side": "react, bootstrap",
      "Server-side": "spring boot",
      Database: "mysql, jpa",
      Viewport: "desktop"
    },
    descriptions: [
      "React라는 기술을 만든 Facebook의 SNS를 클로닝한 어플리케이션입니다",
      "메인화면만 클로닝하였으며 주요 기능으로는 최근검색어 불러오기, 글 검색, 글 쓰기, 무한스크롤 불러오기 등이 있습니다"
    ],
    repository_client: "https://github.com/commitnpush/fakebook-client",
    repository_server: "https://github.com/commitnpush/fakebook-server"
  },
  {
    title: "TO DO LIST",
    image: { title: "to-do-list", end: 0, vertical: 0 },
    spec: {
      "Client-side": "react",
      Viewport: "responsive"
    },
    descriptions: [
      "Velopert님의 블로그에서 '할일목록 만들기' 강의글을 따라가며 제작한 메모장 어플리케이션입니다",
      "데이터베이스는 연동하지 않아 새로고침시 데이터는 사라지게 됩니다",
      "주요기능으로는 목록 추가 및 삭제, 목록 추가시 글씨색상지정 등이 있습니다"
    ],
    demo: "https://commitnpush.github.io/todo-list/",
    repository: "https://github.com/commitnpush/todo-list"
  },
  {
    title: "MOVIE APP",
    image: { title: "movie-app", end: 0, vertical: 0 },
    spec: {
      "Client-side": "react",
      Viewport: "responsive"
    },
    descriptions: [
      "영화소개 사이트 'yts.am'에서 제공하는 영화API를 이용해 구현한 영화소개 어플리케이션입니다"
    ],
    demo: "https://commitnpush.github.io/movie_app/",
    repository: "https://github.com/commitnpush/movie_app"
  },
  {
    title: "INCREPAS",
    image: { title: "increpas", end: 5, vertical: 3 },
    spec: {
      "Server-side": "spring framework",
      "Client-side": "jsp",
      Database: "mysql mybatis",
      Viewport: "responsive"
    },
    descriptions: [
      "프로그래밍 강사로 재직 당시 제작에 참여한 교육센터 홈페이지 입니다",
      "팀내에서 주요 역할은 게시판 구현, 시험 및 채점시스템 구현, 사이트 유지보수 및 데이터베이스 관리입니다"
    ],
    user_page: "http://www.increpas.com",
    manager_page: "http://lms.increpas.com"
  }
];

export default projects;
