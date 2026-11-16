/* 첫 터치 화면 + 배경음악
   - 모바일 브라우저는 사용자 터치 전에는 소리 재생을 막으므로,
     처음에 "Touch!" 화면을 띄우고 터치하는 순간 음악을 시작한다.
   - 터치 전까지 html.intro 클래스가 붙어 있어 스크롤과 .reveal 등장이 멈춰 있다.
   - 오른쪽 아래 음표 버튼으로 켜고 끌 수 있다. */
(function () {
  'use strict';
  const C = window.CONFIG.bgm;
  const root = document.documentElement;
  const intro = document.getElementById('intro');
  const btn = document.getElementById('btnBgm');

  document.getElementById('introText').textContent = C.introText;

  // 새로고침 시 이전 스크롤 위치로 돌아가지 않도록
  if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
  root.classList.add('intro');

  const audio = new Audio(C.src);
  audio.loop = true;
  audio.preload = 'auto';
  audio.volume = C.volume;

  let wantOn = true; // 사용자가 버튼으로 끄면 false

  const setBtn = on => {
    btn.classList.toggle('off', !on);
    btn.setAttribute('aria-pressed', String(on));
    btn.setAttribute('aria-label', on ? '배경음악 끄기' : '배경음악 켜기');
  };

  const play = () => {
    const p = audio.play();
    if (p && p.catch) p.catch(() => setBtn(false));
    setBtn(true);
  };

  intro.addEventListener('click', () => {
    if (!intro.isConnected || intro.classList.contains('hide')) return;
    play(); // 터치 이벤트 안에서 바로 호출해야 재생 허용됨
    window.scrollTo(0, 0);
    intro.classList.add('hide');
    root.classList.remove('intro');
    btn.hidden = false;
    setTimeout(() => intro.remove(), 900);
  });

  btn.addEventListener('click', () => {
    wantOn = audio.paused;
    if (wantOn) play(); else { audio.pause(); setBtn(false); }
  });

  // 다른 앱/탭으로 나가면 멈추고, 돌아오면 다시 재생 (끈 상태면 그대로)
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) audio.pause();
    else if (wantOn && !root.classList.contains('intro')) play();
  });
})();
