/* 오늘의 초록운 — app.js 전체 교체 */

/* ─────────────────────────────
   세부 운세 문구
   문구를 수정하려면 이 부분을 바꾸세요.
───────────────────────────── */

Object.assign(detailFortunes, {
  study: {
    label: "📚 학업·성적운",
    texts: [
      "어렵게 느껴졌던 내용이 하나씩 연결되는 날이에요. 새로운 범위를 늘리기보다 헷갈렸던 개념을 다시 보면 작은 성취를 만날 수 있어요.",
      "집중이 잘되는 시간을 먼저 확보해보세요. 오늘의 목표를 하나로 좁히면 예상보다 많은 일을 마칠 수 있어요.",
      "성급하게 답을 고르기보다 문제의 조건을 차분히 살펴보세요. 익숙한 실수를 알아차리는 것이 실력 향상의 열쇠가 될 거예요.",
      "혼자 오래 붙잡고 있던 문제는 다른 설명을 들어보면 실마리가 보여요. 친구와 생각을 나누며 서로의 빈틈을 채워보세요.",
      "공부가 잘 풀리지 않아도 조급해하지 마세요. 잠깐 쉬었다 돌아오면 같은 내용도 새롭게 보일 수 있어요.",
      "정리해둔 메모가 도움이 되는 날이에요. 핵심을 내 말로 설명해보면 어느 부분을 더 공부해야 할지 선명해져요.",
      "눈에 띄는 결과보다 꾸준함이 힘을 발휘하는 하루예요. 어제보다 한 문제 더 이해한 나를 인정해 주세요.",
      "공부할 자리를 조금 정돈하면 마음도 가벼워져요. 남은 노트의 빈 페이지부터 활용해 오늘의 계획을 적어보세요."
    ]
  },

  work: {
    label: "💼 직장운",
    texts: [
      "차분한 진행이 좋은 인상을 남기는 날이에요. 급하게 일을 늘리기보다 맡은 일 하나를 깔끔하게 마무리해보세요.",
      "작은 제안이 대화의 흐름을 바꿀 수 있어요. 떠오른 아이디어를 짧고 구체적으로 전달해보세요.",
      "협업에서 좋은 실마리를 얻을 수 있는 날이에요. 진행 상황을 공유하면 예상하지 못한 도움을 만날 수 있어요.",
      "계획에 없던 일이 생겨도 우선순위를 다시 정하면 괜찮아요. 당장 필요한 일과 나중에 해도 되는 일을 구분해보세요.",
      "꼼꼼함이 빛을 발하는 날이에요. 숫자와 일정, 전달할 내용을 한 번 더 확인해보면 마음이 한결 편해질 거예요.",
      "주변의 속도에 휩쓸리지 않아도 괜찮아요. 내 페이스를 지키며 약속한 일을 해내는 것이 오늘의 강점이에요.",
      "서로의 입장을 살피는 태도가 도움이 돼요. 의견이 다를 때는 목적부터 맞춰보면 대화가 쉬워질 거예요.",
      "바쁘게 시작하기보다 하루의 흐름을 정리해보세요. 필요한 자료를 화면으로 먼저 확인하면 준비도 간결해져요."
    ]
  },

  relationship: {
    label: "💬 대인관계운",
    texts: [
      "먼저 건네는 가벼운 인사가 분위기를 부드럽게 만드는 날이에요. 오랜만에 떠오른 사람에게 안부를 전해보세요.",
      "상대의 말에 바로 답하기보다 끝까지 들어보세요. 생각보다 가까운 곳에서 공통점을 찾을 수 있어요.",
      "작은 오해가 생겨도 마음을 단정하지 마세요. 궁금한 점을 직접 물어보면 대화가 쉽게 풀릴 수 있어요.",
      "편안한 사람과 함께하면 기운을 얻는 날이에요. 특별한 약속보다 짧은 대화와 산책도 충분히 즐거울 거예요.",
      "좋은 마음은 표현할수록 잘 전달돼요. 고마웠던 일을 구체적으로 말해보면 상대에게도 따뜻하게 닿을 거예요.",
      "누군가의 부탁에 무리해서 맞추지 않아도 괜찮아요. 가능한 범위를 다정하게 알려주는 것도 관계를 지키는 방법이에요.",
      "대화 속 작은 관심이 오래 기억될 수 있어요. 상대가 좋아하는 것을 떠올리며 이야기를 시작해보세요.",
      "함께하는 작은 경험이 가까워지는 계기가 될 수 있어요. 가까운 곳을 같이 걸으며 이야기를 나눠보세요."
    ]
  },

  money: {
    label: "🪙 금전운",
    texts: [
      "마음에 드는 것이 보여도 한 번 더 생각하면 만족스러운 선택을 할 수 있어요. 필요와 예산을 함께 살펴보세요.",
      "작은 지출이 눈에 들어오는 날이에요. 최근 소비를 가볍게 돌아보면 나에게 맞는 절약 방법이 보일 수 있어요.",
      "가격만큼 사용 빈도가 중요한 날이에요. 오래 잘 쓸 수 있는지 생각하면 선택의 기준이 분명해질 거예요.",
      "급하게 결정할수록 놓치는 조건이 생길 수 있어요. 결제 전 필요한 정보를 차분히 확인해보세요.",
      "이미 가진 것에서 만족을 발견할 수 있는 날이에요. 새 물건을 고르기 전에 집에 있는 것을 다시 살펴보세요.",
      "남의 소비 기준에 맞출 필요는 없어요. 오늘 나에게 필요한 지출이 무엇인지 먼저 생각해보세요.",
      "계획을 적어두면 마음이 편해지는 날이에요. 큰 목표보다 이번 주에 지킬 수 있는 작은 예산부터 세워보세요.",
      "작은 즐거움을 무리 없이 챙겨보세요. 돈을 많이 쓰지 않아도 충분히 기분 좋은 하루를 만들 수 있어요."
    ]
  },

  health: {
    label: "🌿 건강운",
    texts: [
      "몸과 마음의 속도를 맞춰보면 좋은 날이에요. 일정 사이에 짧게 쉬는 시간을 챙겨보세요.",
      "한 가지 일에 집중하다 보면 몸이 뻐근해질 수 있어요. 오래 앉아 있었다면 자세를 바꾸고 가볍게 움직여보세요.",
      "오늘의 컨디션에 맞춰 계획을 조절해도 괜찮아요. 무리한 목표보다 편안하게 이어갈 수 있는 리듬을 찾아보세요.",
      "바쁜 생각에서 잠시 벗어나 주변을 둘러보세요. 여건이 된다면 가까운 곳을 천천히 걸으며 기분을 환기해보세요.",
      "사소한 생활 습관을 돌아보기 좋은 날이에요. 식사와 휴식 시간을 놓치지 않도록 나를 먼저 챙겨주세요.",
      "화면을 오래 보았다면 눈과 어깨에 잠깐의 휴식을 선물해보세요. 작은 쉼이 하루를 편안하게 만들어줘요.",
      "늦게까지 계획을 채우기보다 잠들기 전 여유를 남겨보세요. 오늘을 차분히 마무리하는 시간을 가져요.",
      "따뜻하고 편안한 시간을 마련해보세요. 나를 쉬게 하는 음악이나 가벼운 취미도 좋은 선택이에요."
    ]
  },

  message: {
    label: "✦ 오늘의 한마디",
    texts: [
      "서두르지 않아도, 당신의 계절은 자라고 있어요.",
      "작은 선택에도 하루를 바꾸는 힘이 있어요.",
      "어제의 속도보다 오늘의 방향을 믿어보세요.",
      "완벽하지 않은 하루에도 좋은 순간은 피어나요.",
      "나에게 다정한 마음을 지구에도 조금 나눠주세요.",
      "조금 덜어내면 더 소중한 것이 보일 거예요.",
      "잠깐 쉬어가는 시간도 당신의 하루예요.",
      "오늘 심은 작은 실천이 내일의 초록이 됩니다."
    ]
  }
});

/* ─────────────────────────────
   화면과 입력
───────────────────────────── */

const $ = selector => document.querySelector(selector);

const year = $("#year");
const month = $("#month");
const day = $("#day");
const hour = $("#hour");
const minute = $("#minute");
const unknown = $("#unknown");

function koreaDate() {
  return new Intl.DateTimeFormat("sv-SE", {
    timeZone: "Asia/Seoul",
    year: "numeric",
    month: "2-digit",
    day: "2-digit"
  }).format(new Date());
}

// 결과 화면의 캐릭터를 제거합니다.
$(".result-character")?.remove();
$(".doctor-note")?.remove();
$(".mission-character")?.remove();

$("#celebration")?.replaceChildren(
  Object.assign(document.createElement("span"), {
    textContent: "오늘의 작은 실천, 멋지게 해냈어요 🌱"
  })
);

$("#fortuneBody").classList.add("sentence-lines");

$("#detailFortune summary").textContent =
  "나의 여섯 가지 운세 펼쳐보기";

$(".introfoot").innerHTML =
  "<span>지구와 나에게, 작은 좋은 일</span>" +
  "<span>매일 새롭게 열리는 초록운</span>";

$(".step").textContent = "나의 하루에 행운 한 조각";

$(".sub").textContent =
  "태어난 날을 알려주면 오늘의 이야기를 들려드릴게요.";

for (let y = Number(koreaDate().slice(0, 4)); y >= 1900; y--) {
  year.add(new Option(y + "년", y));
}

for (let m = 1; m <= 12; m++) {
  month.add(new Option(m + "월", m));
}

for (let h = 0; h < 24; h++) {
  hour.add(new Option(String(h).padStart(2, "0") + "시", h));
}

for (let m = 0; m < 60; m++) {
  minute.add(new Option(String(m).padStart(2, "0") + "분", m));
}

function updateDays() {
  const old = day.value;

  const count =
    year.value && month.value
      ? new Date(Number(year.value), Number(month.value), 0).getDate()
      : 31;

  day.length = 1;

  for (let d = 1; d <= count; d++) {
    day.add(new Option(d + "일", d));
  }

  if (Number(old) <= count) {
    day.value = old;
  }
}

year.onchange = month.onchange = updateDays;
updateDays();

unknown.onchange = () => {
  for (const field of [hour, minute]) {
    field.disabled = unknown.checked;
    field.required = !unknown.checked;

    if (unknown.checked) {
      field.value = "";
    }
  }
};

unknown.onchange();

/* ─────────────────────────────
   운세 선택과 문장별 줄바꿈
───────────────────────────── */

function hash(text) {
  let h = 2166136261;

  for (const character of text) {
    h = Math.imul(h ^ character.charCodeAt(0), 16777619);
  }

  h ^= h >>> 16;
  h = Math.imul(h, 0x85ebca6b);
  h ^= h >>> 13;

  return h >>> 0;
}

function sentences(text) {
  return (
    text.match(/[^.!?。]+[.!?。]?/gu)
      ?.map(sentence => sentence.trim())
      .filter(Boolean) || [text]
  );
}

function showSentences(element, text) {
  const elements = sentences(text).map(sentence => {
    const span = document.createElement("span");
    span.textContent = sentence;
    return span;
  });

  element.replaceChildren(...elements);
}

function getLocal(key) {
  try {
    return localStorage.getItem(key);
  } catch {
    return null;
  }
}

function setLocal(key, value) {
  try {
    localStorage.setItem(key, value);
  } catch {}
}

let result = null;
let viewPromise = Promise.resolve(false);
let completionBusy = false;

function completeKey(current) {
  return "green-mission-" + current.date + "-" + current.mi;
}

async function recordView(current) {
  try {
    return Boolean(
      await window.CampaignDB?.recordView(current.mi)
    );
  } catch {
    return false;
  }
}

function updateCompletion() {
  const done = getLocal(completeKey(result)) === "yes";

  $("#complete").disabled = completionBusy;

  $("#complete").textContent = completionBusy
    ? "실천 기록을 남기는 중…"
    : done
      ? "오늘도 실천했어요 ✓"
      : "오늘의 미션 실천 완료 ✓";

  $("#celebration").hidden = !done;

  $("#completeNote").textContent = done
    ? "완료 표시를 남겼어요. 다시 눌러 통계 저장을 재시도할 수 있어요."
    : "직접 실천한 뒤 눌러주세요. 작은 행동 하나면 충분해요.";
}

$("#fortuneForm").onsubmit = event => {
  event.preventDefault();

  const date = koreaDate();

  const birth = [
    year.value,
    month.value.padStart(2, "0"),
    day.value.padStart(2, "0")
  ].join("-");

  if (!year.value || !month.value || !day.value || birth > date) {
    alert("태어난 날짜를 다시 확인해 주세요.");
    return;
  }

  const seed = [
    birth,
    unknown.checked ? "unknown" : hour.value + ":" + minute.value,
    new FormData(event.target).get("gender"),
    date
  ].join("|");

  const fi = hash(seed) % fortunes.length;

  const links =
    missionLinks[fi] || missions.map((_, index) => index);

  const mi = links[hash(seed + "mission") % links.length];

  result = {
    date,
    fi,
    mi,
    fortune: fortunes[fi],
    mission: missions[mi]
  };

  const fortune = result.fortune;
  const mission = result.mission;

  $("#fortuneTitle").textContent = fortune[0];
  showSentences($("#fortuneBody"), fortune[1]);

  $("#energy").textContent = fortune[2];
  $("#color").textContent = fortune[3];

  $("#missionTitle").textContent = mission[0];
  $("#missionBody").textContent = mission[1];

  $("#itemIcon").textContent = mission[2];
  $("#itemTitle").textContent = mission[3];
  $("#itemBody").textContent = mission[4];

  $("#resultDate").textContent = date.replaceAll("-", ".");

  const details = Object.entries(detailFortunes).map(
    ([key, category]) => {
      const section = document.createElement("section");
      const title = document.createElement("h3");
      const paragraph = document.createElement("p");

      title.textContent = category.label;

      showSentences(
        paragraph,
        category.texts[hash(seed + key) % category.texts.length]
      );

      section.append(title, paragraph);
      return section;
    }
  );

  $("#detailList").replaceChildren(...details);
  $("#detailFortune").open = false;

  $("#notice").textContent = "";
  $("#inputPanel").hidden = true;
  $("#resultPanel").hidden = false;

  completionBusy = false;
  updateCompletion();

  const current = result;
  viewPromise = recordView(current);

  viewPromise.then(saved => {
    if (result === current && !saved) {
      $("#notice").textContent =
        "운세는 정상적으로 열렸어요. 현재 참여 통계는 연결되지 않았거나 저장되지 않았어요.";
    }
  });

  $("#resultPanel").scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
};

$("#reset").onclick = () => {
  $("#inputPanel").hidden = false;
  $("#resultPanel").hidden = true;

  $("#inputPanel").scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
};

/* ─────────────────────────────
   미션 완료 기록
───────────────────────────── */

$("#complete").onclick = async () => {
  if (completionBusy || !result) return;

  const current = result;

  completionBusy = true;
  updateCompletion();

  let saved = false;

  try {
    let viewed = await viewPromise;

    if (!viewed) {
      viewed = await recordView(current);
    }

    if (viewed) {
      saved = Boolean(
        await window.CampaignDB?.recordCompletion(current.mi)
      );
    }
  } catch {}

  setLocal(completeKey(current), "yes");

  if (result !== current) return;

  completionBusy = false;
  updateCompletion();

  $("#completeNote").textContent = saved
    ? "익명 참여 기록에 실천 완료를 저장했어요. 고마워요 🌱"
    : "이 기기에 완료 표시를 남겼어요. 통계 저장은 연결 후 다시 눌러 재시도할 수 있어요.";
};

/* ─────────────────────────────
   카드·공유 대화상자
───────────────────────────── */

const modal = document.createElement("dialog");
modal.className = "green-dialog";

modal.innerHTML = `
  <div class="dialog-head">
    <h2 id="dialogTitle">오늘의 초록운 카드</h2>
    <button
      type="button"
      id="closeDialog"
      aria-label="닫기"
    >✕</button>
  </div>

  <div id="dialogBody"></div>
`;

modal.setAttribute("aria-labelledby", "dialogTitle");
document.body.append(modal);

$("#closeDialog").onclick = () => modal.close();

modal.addEventListener("click", event => {
  if (event.target === modal) {
    modal.close();
  }
});

function openDialog(title) {
  if (modal.open) {
    modal.close();
  }

  $("#dialogTitle").textContent = title;
  $("#dialogBody").replaceChildren();

  modal.showModal();
}

/* ─────────────────────────────
   결과 카드 미리보기·저장
───────────────────────────── */

$("#save").textContent = "결과 카드 보기 ↗";

$("#save").onclick = () => {
  if (!result) return;

  const current = result;

  openDialog("오늘의 초록운 카드");

  const canvas = document.createElement("canvas");
  canvas.width = 900;
  canvas.height = 1200;

  canvas.setAttribute(
    "aria-label",
    "총운과 환경 미션이 담긴 오늘의 초록운 카드"
  );

  const context = canvas.getContext("2d");

  context.fillStyle = "#f6f8e9";
  context.fillRect(0, 0, 900, 1200);

  context.fillStyle = "#ddebc2";
  context.beginPath();
  context.arc(825, 50, 240, 0, Math.PI * 2);
  context.fill();

  context.fillStyle = "#edf0cb";
  context.beginPath();
  context.arc(40, 1110, 180, 0, Math.PI * 2);
  context.fill();

  context.fillStyle = "#244d3a";
  context.textAlign = "center";

  function drawLines(
    text,
    y,
    size = 27,
    maxWidth = 740,
    bold = false
  ) {
    context.font =
      `${bold ? "700 " : ""}${size}px sans-serif`;

    let line = "";
    const lines = [];

    for (const character of text) {
      if (
        context.measureText(line + character).width > maxWidth
      ) {
        lines.push(line);
        line = "";
      }

      line += character;
    }

    if (line) {
      lines.push(line);
    }

    for (const item of lines) {
      context.fillText(item, 450, y);
      y += size * 1.6;
    }

    return y;
  }

  drawLines(
    "CARBONEX · 오늘의 초록운",
    90,
    26,
    740,
    true
  );

  drawLines(
    current.date + "  /  재미로 보는 하루 운세",
    142,
    21
  );

  let y =
    drawLines(current.fortune[0], 240, 40, 760, true) + 25;

  for (const sentence of sentences(current.fortune[1])) {
    y = drawLines(sentence, y, 27) + 10;
  }

  y += 25;

  drawLines(
    "오늘의 기운  " +
      current.fortune[2] +
      "   ·   " +
      current.fortune[3],
    y,
    22
  );

  y = Math.max(610, y + 80);

  drawLines("행운을 여는 탄소중립 행동", y, 22);
  y += 55;

  y =
    drawLines(current.mission[0], y, 32, 740, true) + 10;

  y = drawLines(current.mission[1], y, 25) + 35;

  drawLines(
    "오늘의 행운 아이템 · " + current.mission[3],
    y,
    28,
    740,
    true
  );

  drawLines(
    "오늘의 작은 선택이 내일의 초록이 됩니다.",
    1080,
    22
  );

  drawLines(
    "경산시 탄소중립 서포터즈 2기 카보넥스",
    1140,
    20
  );

  $("#dialogBody").append(canvas);

  const download = document.createElement("a");

  download.className = "primary download-card";
  download.textContent = "PNG 이미지 저장 ↓";
  download.download =
    "오늘의_초록운_" + current.date + ".png";

  const hint = document.createElement("p");
  hint.className = "fine";

  hint.textContent =
    "저장 버튼을 누른 뒤 다운로드 목록을 확인해 주세요. 모바일은 이미지를 길게 눌러 저장할 수도 있어요.";

  try {
    const image = document.createElement("img");

    image.src = canvas.toDataURL("image/png");
    image.alt = "저장용 오늘의 초록운 카드";

    download.href = image.src;

    canvas.replaceWith(image);
    $("#dialogBody").append(download, hint);
  } catch {
    hint.textContent =
      "이 브라우저에서 이미지 저장을 지원하지 않아요. 카드 화면을 캡처해 주세요.";

    $("#dialogBody").append(hint);
  }
};

/* ─────────────────────────────
   링크 공유
───────────────────────────── */

$("#share").onclick = () => {
  openDialog("초록운을 함께 나눠요");

  const local =
    !/^https?:$/.test(location.protocol) ||
    ["localhost", "127.0.0.1", "terminal.local"].includes(
      location.hostname
    );

  const configured =
    window.CARBONEX_CONFIG?.siteUrl?.trim();

  let url = null;

  try {
    const parsed = new URL(
      configured || location.origin + location.pathname
    );

    if (
      /^https?:$/.test(parsed.protocol) &&
      (configured || !local)
    ) {
      parsed.search = "";
      parsed.hash = "";
      url = parsed.href;
    }
  } catch {}

  const note = document.createElement("p");
  note.className = "share-note";

  if (!url) {
    note.textContent =
      "지금은 내 컴퓨터에서 보는 미리보기예요. GitHub Pages에 배포한 사이트에서 다시 누르면 링크를 공유할 수 있어요.";

    $("#dialogBody").append(note);
    return;
  }

  note.textContent =
    "친구도 자신의 오늘 운세를 볼 수 있는 사이트 링크예요. 생년월일이나 개인 결과는 포함하지 않아요.";

  const input = document.createElement("input");

  input.value = url;
  input.readOnly = true;
  input.setAttribute("aria-label", "공유할 사이트 주소");

  const feedback = document.createElement("p");

  feedback.className = "fine";
  feedback.setAttribute("role", "status");

  const copy = document.createElement("button");

  copy.className = "primary";
  copy.textContent = "링크 복사";

  copy.onclick = async () => {
    try {
      await navigator.clipboard.writeText(url);
      feedback.textContent = "링크를 복사했어요!";
    } catch {
      input.focus();
      input.select();

      feedback.textContent =
        "자동 복사가 제한됐어요. 선택된 주소를 Ctrl+C 또는 길게 눌러 복사해 주세요.";
    }
  };

  $("#dialogBody").append(note, input, copy);

  if (navigator.share && window.isSecureContext) {
    const share = document.createElement("button");

    share.className = "secondary-share";
    share.textContent = "휴대폰 공유 메뉴 열기";

    share.onclick = async () => {
      try {
        await navigator.share({
          title: "오늘의 초록운 · 카보넥스",
          text: "오늘의 운세와 작은 초록 실천을 만나보세요 🌿",
          url
        });

        feedback.textContent =
          "공유 메뉴에서 전달을 진행해 주세요.";
      } catch (error) {
        if (error.name !== "AbortError") {
          feedback.textContent =
            "공유 메뉴를 열 수 없어요. 링크 복사를 이용해 주세요.";
        }
      }
    };

    $("#dialogBody").append(share);
  }

  $("#dialogBody").append(feedback);
};