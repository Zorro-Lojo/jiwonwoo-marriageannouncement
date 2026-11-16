window.CONFIG = {

  /* ---------- 브라우저 탭 제목 ---------- */
  pageTitle: '서원우 ♥ 박지원 결혼합니다.',

  /* ---------- 커버 ---------- */
  cover: {
    image: 'images/title_text.svg',
    imageAlt: 'and happily ever after',
    names: 'Suh Wonwoo & Park Jiwon',
    date: '2027.01.17'
  },

  /* ---------- 인사말 ---------- */
  invitation: {
    engTitle: 'Marriage Announcement',
    koTitle: '새로운 시작을 알립니다',
    lines: [
      '2019년 겨울 처음 만나, 9년 차',
      '가장 가까운 단짝 친구로 지내온 저희 두 사람이',
      '이제는 평생 같은 편이 되기로 했습니다.',
      '',
      '새로운 한 해가 시작되는 1월,',
      '양가 상의 끝에 화려한 예식 대신\n가족들과 조용히 식사하며 첫걸음을 떼려 합니다.',
      '',
      '종이 청첩장 또한 따로 배포하지 않을 예정입니다.',
      '직접 모시지 못하는 점 너그러이 양해해 주시고,',
      '멀리서 보내주시는 축하의 마음만 감사히 받겠습니다.',
      '',
      '여태까지처럼 유쾌하고 단단하게 잘 살겠습니다.',
      '',
      '-서원우, 박지원 올림-'
    ]
  },

  /* ---------- 신랑 / 신부 / 혼주 ---------- */
  groom: {
    role: 'Groom', name: '서원우', relation: '아들', tel: '010-9934-5644',
    father: { name: '서영석', deceased: false },
    mother: { name: '김경미', deceased: false }
  },
  bride: {
    role: 'Bride', name: '박지원', relation: '딸', tel: '010-5539-6199',
    father: { name: '박찬형', deceased: false },
    mother: { name: '김수지', deceased: true }
  },

  /* ---------- 고인 표시 ---------- */
  deceasedMark: {
    color: '#8290ba'
  },

  /* ---------- 예식 일시 / 캘린더 ---------- */
  wedding: {
    at: '2027-01-17T14:00:00+09:00',
    year: 2027, month: 1, day: 17,
    holidays: [1],
    dateNum: '2027.01.17',
    dateKo: '일요일 오후 2시'
  },

  /* ---------- 갤러리 ---------- */
  gallery: {
    engTitle: 'From 2019',
    koTitle: '함께해 온 일상의 모습들',
    images: [
      'images/gallery/01',
      'images/gallery/02',
      'images/gallery/03',
      'images/gallery/04',
      'images/gallery/05',
      'images/gallery/06',
      'images/gallery/07',
      'images/gallery/08',
      'images/gallery/09'
    ]
  },

  /* ---------- 방명록 ---------- */
  guestbook: {
    engTitle: 'Guestbook',
    koTitle: '방명록',
    lead: '간단한 축하글을 남겨주시면\n전부 소중히 읽고 간직해두겠습니다.\n\n축하해 주시는 한 분 한 분의 마음을\n기쁨과 감사로 기억하겠습니다.\n\n언제나 곁을 지켜 주신 양가 부모님과\n응원해 주시는 모든 분들께 감사드립니다.',
    showCount: 5,
    privateHelp: '저희에게만 비밀스럽게 전달됩니다.',
    publicHelp: '사이트에 이름과 메시지가 표시됩니다.',
    confirmText: '한 번 보내면 삭제하거나 수정할 수 없습니다.\n이대로 보낼까요?',
    doneText: '축하 메시지가 전달되었습니다.',
    storageKey: 'wedding-guestbook-20270117',
    supabase: {
      url: 'https://ixqhjpxrsipjxduhajjs.supabase.co',
      key: 'sb_publishable_i695J4ZqRYJga0q7um_x0g_H61YTy7P'
    }
  },

  /* ---------- 하단 문구 ---------- */
  footer: 'Suh Wonwoo & Park Jiwon · 2027.01.17',

  /* ---------- 첫 터치 화면 / 배경음악 ---------- */
  bgm: {
    src: 'images/bgm_snowgoose.mp3',
    volume: 0.6,          // 0 ~ 1
    introText: 'Touch!'   // 첫 화면 문구
  },

  /* ---------- 이스터에그 (방명록 화면 왼쪽 위 연타) ---------- */
  easterEgg: {
    taps: 20,             // 몇 번 눌러야 뜨는지
    resetMs: 1500,        // 이 시간(ms) 이상 쉬면 횟수 초기화
    url: 'https://jiwonwoo-secretinvitation.vercel.app/',
    text: '붉은 색 초대장 봉투가 날아왔습니다!\n열어볼까요?\n돌이킬 수 없을지도 모릅니다.',
    yes: '열어보기',
    no: '닫기'
  },

  /* ---------- 효과 ---------- */
  effects: {
    snow: true,
    snowImages: [
      { src: 'images/snowflake_01.svg', size: [10, 20], weight: 2 },
      { src: 'images/snowflake_02.svg', size: [10, 20], weight: 2 },
      { src: 'images/snowflake_03.svg', size: [3, 7],   weight: 1 }
    ],
    snowColor: { from: [255, 255, 255], to: [186, 208, 253], steps: 10 },
    snowGap: 56,
    snowDuration: [40, 117],
    reveal: true,
    pageSnap: true,
    // 모바일 화면 넘김 감도: speed(px/ms) 이상 빠르게, distance(px) 이상 밀어야 넘어감. 숫자가 클수록 둔감
    swipe: { speed: 0.5, distance: 40 }
  }
};
