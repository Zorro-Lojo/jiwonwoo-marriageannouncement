/* 이스터에그: 방명록 섹션 왼쪽 위 투명 영역(#eggZone)을 연타하면
   붉은 확인 창이 뜨고, "열어보기" 를 누르면 비밀 초대장 주소로 이동한다.
   설정은 config.js 의 easterEgg. */
(function () {
  'use strict';
  const C = window.CONFIG.easterEgg;
  const $ = id => document.getElementById(id);
  const zone = $('eggZone');
  const modal = $('modalEgg');

  // 문구 (\n 은 줄바꿈)
  const msg = $('eggMsg');
  C.text.split('\n').forEach((line, i) => {
    if (i) msg.appendChild(document.createElement('br'));
    msg.appendChild(document.createTextNode(line));
  });
  $('eggYes').textContent = C.yes;
  $('eggNo').textContent = C.no;

  // 터치 위치 힌트: 작은 흰 눈꽃 (천천히 회전, 누를 때마다 톡 튀는 반응)
  let flake = null;
  if (C.icon) {
    flake = document.createElement('span');
    flake.className = 'egg-flake';
    const img = document.createElement('img');
    img.src = C.icon; img.alt = ''; img.draggable = false;
    img.style.width = img.style.height = (C.iconSize || 14) + 'px';
    flake.appendChild(img);
    zone.appendChild(flake);
  }

  let count = 0, last = 0;
  zone.addEventListener('click', () => {
    if (flake && flake.animate) {
      flake.animate([{ transform: 'scale(1)' }, { transform: 'scale(1.6)' }, { transform: 'scale(1)' }], { duration: 250, easing: 'ease-out' });
    }
    const now = Date.now();
    if (now - last > C.resetMs) count = 0; // 너무 쉬었다 누르면 처음부터
    last = now;
    count++;
    if (count >= C.taps) {
      count = 0;
      modal.classList.add('open');
    }
  });

  $('eggYes').addEventListener('click', () => { location.href = C.url; });
})();
