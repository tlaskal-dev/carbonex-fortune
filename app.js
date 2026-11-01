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
  
  /* 정원 분위기의 저장용 결과 카드 */
  const ctx = canvas.getContext("2d");
  const ink = "#35543c";
  const muted = "#78846a";
  const layout = [];
  let cursor = 175;

  // 글자 너비에 맞게 줄 나누기
  function wrapCardText(text, size, width, bold = false) {
    ctx.font = `${bold ? "700" : "400"} ${size}px sans-serif`;

    const rows = [];

    for (const paragraph of String(text ?? "").split("\n")) {
      let row = "";

      for (const character of paragraph) {
        if (
          row &&
          ctx.measureText(row + character).width > width
        ) {
          rows.push(row);
          row = "";
        }

        row += character;
      }

      rows.push(row);
    }

    return rows;
  }

  // 글의 위치를 먼저 계산
  function addCardText(text, size, options = {}) {
    const {
      bold = false,
      color = ink,
      width = 690,
      gap = 20
    } = options;

    const rows = wrapCardText(text, size, width, bold);
    const lineHeight = size * 1.65;

    layout.push({
      rows,
      size,
      bold,
      color,
      y: cursor,
      lineHeight
    });

    cursor += rows.length * lineHeight + gap;
  }

  addCardText("오늘, 당신에게 도착한 초록운", 22, {
    color: muted,
    gap: 26
  });

  addCardText(current.fortune[0], 40, {
    bold: true,
    gap: 30
  });

  // 총운은 문장별로 구분
  for (const sentence of sentences(current.fortune[1])) {
    addCardText(sentence, 27, {
      gap: 14
    });
  }

  cursor += 12;

  addCardText(
    `오늘의 기운 ${current.fortune[2]} · ${current.fortune[3]}`,
    22,
    {
      color: muted,
      gap: 42
    }
  );

  const missionTop = cursor - 16;
  cursor += 22;

  addCardText("행운을 여는 탄소중립 행동", 22, {
    color: muted,
    gap: 16
  });

  addCardText(current.mission[0], 31, {
    bold: true,
    width: 640,
    gap: 12
  });

  addCardText(current.mission[1], 25, {
    width: 640,
    gap: 28
  });

  addCardText("오늘의 행운 아이템", 22, {
    color: muted,
    gap: 12
  });

  addCardText(current.mission[3], 29, {
    bold: true,
    width: 640,
    gap: 12
  });

  addCardText(current.mission[4], 24, {
    width: 640,
    gap: 18
  });

  const missionBottom = cursor + 12;

  // 내용이 길면 카드 높이도 함께 증가
  const cardHeight = Math.max(
    1200,
    Math.ceil(missionBottom + 250)
  );

  canvas.height = cardHeight;

  // 크림색 종이 배경
  ctx.fillStyle = "#f8f6eb";
  ctx.fillRect(0, 0, canvas.width, cardHeight);

  // 둥근 상자를 그리는 함수
  function roundedCardBox(x, y, width, height, radius) {
    ctx.beginPath();
    ctx.moveTo(x + radius, y);
    ctx.arcTo(x + width, y, x + width, y + height, radius);
    ctx.arcTo(
      x + width,
      y + height,
      x,
      y + height,
      radius
    );
    ctx.arcTo(x, y + height, x, y, radius);
    ctx.arcTo(x, y, x + width, y, radius);
    ctx.closePath();
  }

  // 안쪽 종이 테두리
  ctx.strokeStyle = "#dde3ce";
  ctx.lineWidth = 2;

  roundedCardBox(
    32,
    32,
    836,
    cardHeight - 64,
    30
  );

  ctx.stroke();

  // 위쪽 브랜드
  ctx.textAlign = "left";
  ctx.textBaseline = "alphabetic";
  ctx.fillStyle = ink;
  ctx.font = "700 23px sans-serif";
  ctx.fillText("CARBONEX", 78, 98);

  // 날짜
  ctx.textAlign = "right";
  ctx.fillStyle = muted;
  ctx.font = "21px sans-serif";

  ctx.fillText(
    current.date.replaceAll("-", "."),
    822,
    98
  );

  // 상단 구분선
  ctx.strokeStyle = "#dde3ce";
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(78, 126);
  ctx.lineTo(822, 126);
  ctx.stroke();

  // 미션과 아이템을 담는 연초록 상자
  ctx.fillStyle = "#edf1df";

  roundedCardBox(
    78,
    missionTop,
    744,
    missionBottom - missionTop,
    28
  );

  ctx.fill();

  // 계산한 위치에 글 그리기
  ctx.textAlign = "center";
  ctx.textBaseline = "top";

  for (const block of layout) {
    ctx.fillStyle = block.color;

    ctx.font =
      `${block.bold ? "700" : "400"} ` +
      `${block.size}px sans-serif`;

    block.rows.forEach((row, index) => {
      ctx.fillText(
        row,
        450,
        block.y + index * block.lineHeight
      );
    });
  }

  // 하단의 부드러운 풀밭
  const groundY = cardHeight - 135;

  const ground = ctx.createRadialGradient(
    450,
    groundY,
    15,
    450,
    groundY,
    320
  );

  ground.addColorStop(
    0,
    "rgba(187, 205, 143, 0.45)"
  );

  ground.addColorStop(
    1,
    "rgba(187, 205, 143, 0)"
  );

  ctx.fillStyle = ground;
  ctx.beginPath();

  ctx.ellipse(
    450,
    groundY,
    325,
    35,
    0,
    0,
    Math.PI * 2
  );

  ctx.fill();

  // 작은 잎
  function cardLeaf(x, y, angle, color) {
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(angle);
    ctx.fillStyle = color;
    ctx.beginPath();

    ctx.ellipse(
      0,
      -11,
      7,
      15,
      0,
      0,
      Math.PI * 2
    );

    ctx.fill();
    ctx.restore();
  }

  // 작은 새싹
  function cardSprout(x, y, scale = 1) {
    ctx.save();
    ctx.translate(x, y);
    ctx.scale(scale, scale);

    ctx.strokeStyle = "#8da16c";
    ctx.lineWidth = 3;
    ctx.lineCap = "round";

    ctx.beginPath();
    ctx.moveTo(0, 5);
    ctx.quadraticCurveTo(-3, -12, 0, -28);
    ctx.stroke();

    cardLeaf(-3, -12, -0.8, "#aabd83");
    cardLeaf(3, -22, 0.8, "#8fa76a");

    ctx.restore();
  }

  // 작은 꽃
  function cardFlower(x, y) {
    ctx.strokeStyle = "#96aa79";
    ctx.lineWidth = 2.5;

    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x, y + 26);
    ctx.stroke();

    ctx.fillStyle = "#fffdf4";

    for (let petal = 0; petal < 5; petal++) {
      const angle = petal * Math.PI * 2 / 5;

      ctx.beginPath();

      ctx.ellipse(
        x + Math.cos(angle) * 8,
        y + Math.sin(angle) * 8,
        6,
        7,
        angle,
        0,
        Math.PI * 2
      );

      ctx.fill();
    }

    ctx.fillStyle = "#ddbd69";
    ctx.beginPath();
    ctx.arc(x, y, 5, 0, Math.PI * 2);
    ctx.fill();
  }

  cardSprout(160, groundY - 4);
  cardSprout(735, groundY - 2, 0.85);

  cardFlower(205, groundY - 21);
  cardFlower(690, groundY - 15);

  // 하단 메시지
  ctx.textAlign = "center";
  ctx.textBaseline = "top";
  ctx.fillStyle = ink;
  ctx.font = "23px sans-serif";

  ctx.fillText(
    "오늘의 작은 선택이 내일의 초록이 됩니다.",
    450,
    cardHeight - 190
  );

  // 캠페인 이름
  ctx.fillStyle = muted;
  ctx.font = "19px sans-serif";

  ctx.fillText(
    "경산시 탄소중립 서포터즈 2기 카보넥스",
    450,
    cardHeight - 83
  );

  // 짧은 운세 안내
  ctx.font = "16px sans-serif";

  ctx.fillText(
    "재미로 즐기는 오늘의 운세입니다.",
    450,
    cardHeight - 53
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
/* ==============================
   초록 정원 디자인
   기존 app.js 맨 아래에 추가
============================== */

(() => {
  if (document.body.classList.contains("garden-ui")) return;

  document.body.classList.add("garden-ui");

  const select = s => document.querySelector(s);
  const panel = select("#resultPanel");
  const form = select("#fortuneForm");
  const intro = select(".intro");

  /* 첫 화면 문구 */

  intro.querySelector("h1").innerHTML =
    "오늘, 당신에게<br>도착한 <em>초록운</em>";

  intro.querySelector(":scope > p").innerHTML =
    "나를 위한 작은 행운 하나.<br>" +
    "지구를 위한 다정한 실천 하나.";

  select("#inputPanel > h2").textContent =
    "오늘의 행운을 만나볼까요?";

  select("#inputPanel .step").textContent =
    "작은 초록 정원에 오신 걸 환영해요";

  select(
    '#fortuneForm button[type="submit"]'
  ).innerHTML =
    '오늘의 초록운 뽑기 <span aria-hidden="true">↗</span>';

  /* 입력 화면과 결과 화면 전환 */

  function syncScreen() {
    document.body.classList.toggle(
      "has-result",
      !panel.hidden
    );
  }

  new MutationObserver(syncScreen).observe(panel, {
    attributes: true,
    attributeFilter: ["hidden"]
  });

  syncScreen();

  const back = document.createElement("button");

  back.type = "button";
  back.className = "garden-back";
  back.textContent = "← 처음으로";

  back.onclick = () => select("#reset").click();

  panel.prepend(back);

  /* 세부 운세 영역 구성 */

  const oldDetails = select("#detailFortune");
  const detailList = select("#detailList");
  const detailsBox = document.createElement("div");

  detailsBox.id = "detailFortune";
  detailsBox.className = "fortune-details";

  const detailTitle = document.createElement("h3");

  detailTitle.className = "garden-section-title";
  detailTitle.textContent =
    "하루를 조금 더 들여다보면";

  detailsBox.append(detailTitle, detailList);
  oldDetails.replaceWith(detailsBox);

  /* 각 카테고리를 개별 펼침 카드로 변경 */

  function makeCategoryCards() {
    detailList
      .querySelectorAll(":scope > section")
      .forEach(section => {
        if (section.dataset.gardenReady) return;

        const heading = section.querySelector("h3");
        const paragraph = section.querySelector("p");

        if (!heading || !paragraph) return;

        section.dataset.gardenReady = "true";

        const item = document.createElement("details");
        const summary = document.createElement("summary");

        summary.textContent = heading.textContent;

        item.append(summary, paragraph);
        section.replaceChildren(item);
      });
  }

  new MutationObserver(makeCategoryCards).observe(
    detailList,
    { childList: true }
  );

  makeCategoryCards();

  /* 환경 미션과 아이템을 하나의 카드로 묶기 */

  const mission = select(".missionbox");
  const item = select(".itembox");

  if (mission && item) {
    const ecoCard = document.createElement("section");
    const title = document.createElement("h3");

    ecoCard.className = "garden-eco-card";
    title.className = "garden-section-title";

    title.textContent =
      "🌱 오늘의 행운을 더하는 작은 실천";

    mission.before(ecoCard);
    ecoCard.append(title, mission, item);
  }

  /* 결과 화면 상단 문구 */

  const resultStep = panel.querySelector(".step");

  if (
    resultStep?.firstChild?.nodeType === Node.TEXT_NODE
  ) {
    resultStep.firstChild.textContent =
      "당신에게 도착한 오늘의 운세 ";
  }

  /* 결과 화면을 위에서부터 보여주기 */

  form.addEventListener("submit", () => {
    queueMicrotask(() => {
      if (panel.hidden) return;

      syncScreen();
      makeCategoryCards();

      const title = select("#fortuneTitle");

      title.tabIndex = -1;
      title.focus({ preventScroll: true });

      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  });

  /* 처음으로 돌아가기 */

  select("#reset").addEventListener("click", () => {
    queueMicrotask(() => {
      syncScreen();

      select("#year").focus({
        preventScroll: true
      });

      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  });
})();
/* =================================
   그림책 정원 + 오늘의 초록 씨앗
   app.js 맨 아래에 추가
================================= */

(() => {
  if (document.body.classList.contains("storybook-ui")) return;

  document.body.classList.add("storybook-ui");

  const hero = document.querySelector(".character-hero");
  if (!hero) return;

  /* 첫 화면에 정원 풍경 추가 */

  hero.insertAdjacentHTML(
    "afterbegin",
    `
    <svg
      class="storybook-scene"
      viewBox="0 0 540 370"
      role="img"
      aria-label="꽃과 나무 사이에 태양광 조명, 자전거, 재사용 화분이 있는 작은 정원"
    >
      <defs>
        <linearGradient id="gardenSky" x2="0" y2="1">
          <stop stop-color="#f8f5df"/>
          <stop offset="1" stop-color="#eef0d8"/>
        </linearGradient>

        <linearGradient id="gardenGrass" x2="0" y2="1">
          <stop stop-color="#c8da9a"/>
          <stop offset="1" stop-color="#a9c582"/>
        </linearGradient>

        <filter
          id="gardenPaper"
          x="-5%"
          y="-5%"
          width="110%"
          height="110%"
        >
          <feTurbulence
            type="fractalNoise"
            baseFrequency=".075"
            numOctaves="3"
            seed="5"
            result="noise"
          />
          <feColorMatrix
            in="noise"
            type="saturate"
            values="0"
          />
          <feComponentTransfer>
            <feFuncA type="linear" slope=".11"/>
          </feComponentTransfer>
          <feBlend in="SourceGraphic" mode="multiply"/>
        </filter>

        <clipPath id="gardenFrame">
          <path
            d="M25 32Q260 -10 514 32Q540 140 524 300Q280 373 17 316Q-5 155 25 32Z"
          />
        </clipPath>

        <g id="gardenFlower">
          <path
            d="M0 0Q3 -12 0 -22M1 -10q-12 -10 -12 1Q-5 -5 1 -6"
            fill="#789552"
            stroke="#789552"
            stroke-width="2"
          />

          <g fill="#fff9e4">
            <ellipse cy="-28" rx="4" ry="7"/>
            <ellipse
              cy="-28" rx="4" ry="7"
              transform="rotate(72 0 -22)"
            />
            <ellipse
              cy="-28" rx="4" ry="7"
              transform="rotate(144 0 -22)"
            />
            <ellipse
              cy="-28" rx="4" ry="7"
              transform="rotate(216 0 -22)"
            />
            <ellipse
              cy="-28" rx="4" ry="7"
              transform="rotate(288 0 -22)"
            />
          </g>

          <circle cy="-22" r="4" fill="#dfbd65"/>
        </g>
      </defs>

      <g
        clip-path="url(#gardenFrame)"
        filter="url(#gardenPaper)"
      >
        <!-- 하늘과 햇살 -->

        <path d="M0 0H540V370H0Z" fill="url(#gardenSky)"/>

        <circle
          cx="403" cy="67" r="34"
          fill="#f2d987" opacity=".65"
        />

        <circle
          cx="403" cy="67" r="45"
          fill="#f2d987" opacity=".13"
        />

        <path
          d="M89 80q2 -16 18 -12q6 -23 24 -10q15 -4 19 14q12 -2 16 10Z"
          fill="#fffdf1"
          opacity=".85"
        />

        <path
          d="M291 113q6 -16 19 -10q10 -19 24 -1q16 -3 20 12Z"
          fill="#fffdf1"
          opacity=".8"
        />

        <!-- 뒤쪽 언덕 -->

        <path
          d="M-30 236Q101 150 254 211Q407 144 571 228V370H-30Z"
          fill="#dce5bc"
        />

        <path
          d="M-20 250Q115 198 258 239Q408 190 563 246V370H-20Z"
          fill="#cadba7"
        />

        <!-- 왼쪽 나무 -->

        <path
          d="M62 240Q68 163 61 90L73 87Q69 171 79 245Z"
          fill="#a7895f"
        />

        <path
          d="M69 180L43 146M70 153L93 123"
          fill="none"
          stroke="#a7895f"
          stroke-width="7"
          stroke-linecap="round"
        />

        <path
          d="M12 143Q-1 114 21 94Q9 65 38 56Q50 27 78 44Q112 31 120 64Q145 82 126 105Q144 133 113 149Q96 166 72 152Q37 170 12 143Z"
          fill="#adc58b"
        />

        <path
          d="M21 100Q18 72 43 68Q51 47 75 57Q102 44 107 73Q129 91 107 110Q72 128 44 113Z"
          fill="#c1d49b"
        />

        <path
          d="M31 137q15 9 29 0m19 -67q14 -5 20 6m-65 23q7 7 16 4"
          fill="none"
          stroke="#91ae74"
          stroke-width="3"
          stroke-linecap="round"
          opacity=".6"
        />

        <!-- 오른쪽 나무 -->

        <path
          d="M480 242L486 99L495 99L497 245Z"
          fill="#b0956d"
        />

        <path
          d="M490 163l-21 -25m23 -3l20 -19"
          stroke="#b0956d"
          stroke-width="6"
          stroke-linecap="round"
        />

        <path
          d="M443 131Q426 112 446 93Q437 67 462 59Q476 37 494 56Q521 46 529 72Q552 89 532 112Q541 138 515 149Q484 165 463 143Q449 151 443 131Z"
          fill="#97b67d"
        />

        <path
          d="M452 91Q452 72 471 74Q484 56 500 72Q526 65 526 92Q514 119 486 119Q461 119 452 91Z"
          fill="#b9cf94"
        />

        <!-- 뒤쪽 덤불 -->

        <path
          d="M0 266Q-2 230 23 233Q26 211 49 225Q69 208 86 231Q107 216 117 242Q137 232 144 266Z"
          fill="#9dbb7c"
        />

        <path
          d="M386 258Q393 226 414 237Q421 216 444 229Q464 212 480 236Q507 219 527 245Q547 239 550 269Z"
          fill="#91b176"
        />

        <!-- 잔디와 징검돌 길 -->

        <path
          d="M-10 277Q133 237 273 267Q412 237 550 281V380H-10Z"
          fill="url(#gardenGrass)"
        />

        <path
          d="M270 267Q306 285 291 306Q280 334 356 371H435Q332 321 332 304Q342 280 294 266Z"
          fill="#e7dcb8"
        />

        <g
          fill="#f4ead0"
          stroke="#c5bc99"
          stroke-width="1.3"
        >
          <ellipse
            cx="299" cy="284" rx="14" ry="5"
            transform="rotate(12 299 284)"
          />

          <ellipse
            cx="311" cy="301" rx="17" ry="6"
            transform="rotate(-6 311 301)"
          />

          <ellipse
            cx="313" cy="323" rx="20" ry="7"
            transform="rotate(13 313 323)"
          />

          <ellipse
            cx="342" cy="345" rx="23" ry="8"
            transform="rotate(20 342 345)"
          />
        </g>

        <!-- 태양광 정원 조명 -->

        <g
          stroke-linejoin="round"
          stroke-linecap="round"
        >
          <title>햇빛을 모으는 태양광 조명</title>

          <path
            d="M125 246V149"
            stroke="#7b8e74"
            stroke-width="5"
          />

          <path
            d="M106 134L143 130L151 148L110 153Z"
            fill="#718e98"
            stroke="#526f77"
            stroke-width="2"
          />

          <path
            d="M119 133l4 17m8 -18l5 16m-26 -4l36 -4"
            fill="none"
            stroke="#b3d0c5"
            stroke-width="1.5"
          />

          <path
            d="M125 157h25v24h-25Z"
            fill="#e9d995"
            stroke="#889579"
            stroke-width="2"
          />

          <path
            d="M120 157h35m-28 27h22"
            stroke="#889579"
            stroke-width="3"
          />

          <path
            d="M124 164h25"
            stroke="#fff6c7"
            stroke-width="3"
          />
        </g>

        <!-- 자전거 -->

        <g
          fill="none"
          stroke="#6c8275"
          stroke-width="3"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <title>가까운 거리는 자전거로</title>

          <circle
            cx="397" cy="270" r="21"
            fill="#dbe5bb"
          />

          <circle
            cx="463" cy="270" r="21"
            fill="#dbe5bb"
          />

          <path
            d="M397 270l19 -35l20 35h-39l28 -23l38 23l-14 -44h-12M416 235l-4 -11m-8 0h17"
          />

          <path
            d="M416 235h35M436 270l8 6m-13 -1h13"
            stroke="#bc9270"
          />

          <circle cx="436" cy="270" r="4"/>
        </g>

        <!-- 재사용 용기 화분 -->

        <g
          transform="translate(5 -25)"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <title>버려지는 용기를 다시 쓴 화분</title>

          <path
            d="M41 313l4 31h31l4 -31Z"
            fill="#d5a67f"
            stroke="#ac8865"
            stroke-width="2"
          />

          <path
            d="M40 312h41v6H40Z"
            fill="#e0b994"
          />

          <path
            d="M48 328h27m-25 8h23"
            stroke="#c08e6c"
            stroke-width="2"
          />

          <path
            d="M61 313v-26"
            stroke="#77945b"
            stroke-width="3"
          />

          <path
            d="M61 301Q39 302 45 286Q61 283 61 301M61 295Q63 275 78 282Q82 296 61 295Z"
            fill="#89a86a"
          />

          <path
            d="M60 288Q49 273 60 266Q72 272 60 288Z"
            fill="#a8be7c"
          />
        </g>

        <!-- 꽃과 풀 -->

        <use
          href="#gardenFlower"
          x="33" y="271"
          transform="rotate(-10 33 271)"
        />

        <use
          href="#gardenFlower"
          x="88" y="312"
          transform="scale(.8) translate(22 76)"
        />

        <use
          href="#gardenFlower"
          x="442" y="323"
        />

        <use
          href="#gardenFlower"
          x="493" y="307"
          transform="rotate(12 493 307)"
        />

        <g
          fill="none"
          stroke="#7f9e62"
          stroke-width="2"
          stroke-linecap="round"
        >
          <path
            d="M18 300l-4 -10m5 10l6 -12m-6 12v-15M104 342l-4 -11m4 11l6 -8M369 310l-5 -8m5 8l3 -10M511 345l-5 -12m5 12l7 -13"
          />

          <path
            d="M159 321l-5 -9m5 9l4 -9M218 340l-5 -9m5 9l4 -10"
          />
        </g>

        <g fill="#ddbc6d">
          <circle cx="92" cy="263" r="3"/>
          <circle cx="476" cy="327" r="3"/>
          <circle cx="180" cy="345" r="2.5"/>
        </g>
      </g>
    </svg>
    `
  );

  const caption = hero.querySelector(":scope > span");

  if (caption) {
    caption.textContent =
      "세 친구와 함께, 오늘의 작은 행운을 만나보세요.";
  }

  /* 오늘의 초록 씨앗 */

  const complete = document.querySelector("#complete");
  const celebration = document.querySelector("#celebration");

  if (!complete || !celebration) return;

  const seed = document.createElement("section");
  seed.className = "daily-seed";

  seed.innerHTML = `
    <svg viewBox="0 0 90 90" aria-hidden="true">
      <ellipse
        cx="45" cy="75" rx="29" ry="6"
        fill="#dce5c9"
      />

      <path
        d="M23 58h44l-6 20H29Z"
        fill="#d0aa82"
      />

      <path
        d="M21 55h48v8H21Z"
        fill="#e1bd97"
      />

      <path
        d="M27 55q18 -7 36 0"
        fill="#9e8666"
      />

      <g class="seed-mark">
        <ellipse
          cx="45" cy="50" rx="7" ry="4.5"
          fill="#b19b67"
          transform="rotate(-20 45 50)"
        />
      </g>

      <g class="sprout-mark">
        <path
          d="M45 55V31"
          stroke="#7e9b5d"
          stroke-width="3"
          fill="none"
          stroke-linecap="round"
        />

        <path
          d="M45 43Q23 43 27 26Q44 23 45 43Z"
          fill="#a4bc78"
        />

        <path
          d="M45 36Q44 15 64 19Q69 35 45 36Z"
          fill="#86a866"
        />
      </g>
    </svg>

    <div>
      <small>오늘의 초록 씨앗</small>
      <p class="seed-message"></p>
    </div>
  `;

  complete.before(seed);

  function updateSeed() {
    const grown = !celebration.hidden;

    seed.classList.toggle("grown", grown);

    seed.querySelector(".seed-message").textContent =
      grown
        ? "오늘의 실천으로 초록 하나가 자랐어요."
        : "실천 완료를 누르면 작은 새싹이 피어나요.";
  }

  new MutationObserver(updateSeed).observe(
    celebration,
    {
      attributes: true,
      attributeFilter: ["hidden"]
    }
  );

  updateSeed();
})();
/* 세 친구 발밑의 작은 정원 */
(() => {
  const hero = document.querySelector(".character-hero");
  if (!hero || hero.querySelector(".mini-garden")) return;

  hero.insertAdjacentHTML("afterbegin", `
    <svg
      class="mini-garden"
      viewBox="0 0 540 340"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <radialGradient id="miniGardenGround">
          <stop offset="0%" stop-color="#c4d397" stop-opacity=".65"/>
          <stop offset="70%" stop-color="#dce5bd" stop-opacity=".4"/>
          <stop offset="100%" stop-color="#e7edcf" stop-opacity="0"/>
        </radialGradient>
      </defs>

      <!-- 테두리 없이 부드럽게 퍼지는 풀밭 -->
      <ellipse cx="270" cy="258" rx="238" ry="43"
        fill="url(#miniGardenGround)"/>

      <!-- 낮게 자라는 잎 -->
      <g fill="#a6bb7c" opacity=".8">
        <ellipse cx="70" cy="251" rx="7" ry="17"
          transform="rotate(-38 70 251)"/>
        <ellipse cx="81" cy="247" rx="6" ry="19"
          transform="rotate(20 81 247)"/>
        <ellipse cx="459" cy="252" rx="7" ry="18"
          transform="rotate(-25 459 252)"/>
        <ellipse cx="471" cy="251" rx="6" ry="15"
          transform="rotate(35 471 251)"/>
      </g>

      <!-- 작은 풀 -->
      <g fill="none" stroke="#92a76e" stroke-width="2.5"
        stroke-linecap="round" stroke-linejoin="round">
        <path d="M107 278l-5-10m5 10 5-13"/>
        <path d="M188 285l-4-8m4 8 5-11"/>
        <path d="M345 282l-5-10m5 10 5-13"/>
        <path d="M440 277l-4-9m4 9 5-12"/>
      </g>

      <!-- 왼쪽 작은 꽃 -->
      <g transform="translate(53 236)">
        <path d="M0 0q-3 16 0 29"
          fill="none" stroke="#8fa36c" stroke-width="2.5"/>
        <ellipse cx="-5" cy="16" rx="6" ry="3"
          fill="#a6b980" transform="rotate(30 -5 16)"/>
        <g fill="#fffbed">
          <ellipse cy="-6" rx="4.5" ry="7"/>
          <ellipse cy="-6" rx="4.5" ry="7" transform="rotate(72)"/>
          <ellipse cy="-6" rx="4.5" ry="7" transform="rotate(144)"/>
          <ellipse cy="-6" rx="4.5" ry="7" transform="rotate(216)"/>
          <ellipse cy="-6" rx="4.5" ry="7" transform="rotate(288)"/>
        </g>
        <circle r="4.5" fill="#dfbd64"/>
      </g>

      <!-- 오른쪽 작은 꽃 -->
      <g transform="translate(488 246) scale(.8)">
        <path d="M0 0v26"
          fill="none" stroke="#8fa36c" stroke-width="2.5"/>
        <g fill="#fffbed">
          <ellipse cy="-6" rx="4.5" ry="7"/>
          <ellipse cy="-6" rx="4.5" ry="7" transform="rotate(72)"/>
          <ellipse cy="-6" rx="4.5" ry="7" transform="rotate(144)"/>
          <ellipse cy="-6" rx="4.5" ry="7" transform="rotate(216)"/>
          <ellipse cy="-6" rx="4.5" ry="7" transform="rotate(288)"/>
        </g>
        <circle r="4.5" fill="#dfbd64"/>
      </g>

      <!-- 빈 용기를 다시 쓴 새싹 화분 -->
      <g transform="translate(398 257) rotate(5)">
        <path d="M-13 0h26l-2 27q-11 4-22 0Z"
          fill="#c8b79a" stroke="#aa997d" stroke-width="1.5"/>
        <ellipse cy="0" rx="13" ry="3.5" fill="#99876b"/>
        <path d="M-10 9h20m-19 10h18"
          stroke="#e7dcc5" stroke-width="2"/>
        <path d="M0 0v-19"
          fill="none" stroke="#82975f" stroke-width="2.5"/>
        <path d="M0-10q-16 0-15-13Q-1-24 0-10"
          fill="#a6bc79"/>
        <path d="M0-15q1-15 15-15Q17-16 0-15"
          fill="#8fa96b"/>
      </g>

      <!-- 떨어진 작은 꽃잎 -->
      <g fill="#e6d18d" opacity=".75">
        <ellipse cx="142" cy="281" rx="3" ry="2"
          transform="rotate(-25 142 281)"/>
        <ellipse cx="301" cy="288" rx="3" ry="2"
          transform="rotate(30 301 288)"/>
      </g>
    </svg>
  `);
})();
/* 첫 화면의 불필요한 문구 정리 */
(() => {
  // 상단 캠페인 문구와 소개 링크 삭제
  document.querySelector("header .edition")?.remove();
  document.querySelector("header .aboutlink")?.remove();

  // 캐릭터 아래 안내 문구 삭제
  document.querySelector(".character-hero > span")?.remove();

  // 입력 화면 아래 운세 안내 문구 삭제
  // 개인정보 안내는 그대로 유지
  document.querySelectorAll("#inputPanel .fine").forEach((element) => {
    const text = element.textContent || "";

    if (
      text.includes("재미로 보는 운세") ||
      text.includes("실제 사주") ||
      text.includes("같은 정보라면")
    ) {
      element.remove();
    }
  });

  // 결과 화면 맨 아래에 짧은 안내 추가
  const resultPanel = document.querySelector("#resultPanel");

  if (resultPanel && !document.querySelector("#fortuneDisclaimer")) {
    const disclaimer = document.createElement("p");
    disclaimer.id = "fortuneDisclaimer";
    disclaimer.textContent = "재미로 즐기는 오늘의 운세입니다.";

    Object.assign(disclaimer.style, {
      margin: "24px 0 0",
      color: "#8b947e",
      fontSize: "12px",
      lineHeight: "1.7",
      textAlign: "center"
    });

    resultPanel.appendChild(disclaimer);
  }
})();
/* 결과 카드 새 디자인 */
(() => {
  const saveButton = document.querySelector("#save");
  if (!saveButton) return;

  saveButton.onclick = async () => {
    if (!result) return;

    const current = result;
    openDialog("오늘의 초록운 카드");

    const body = document.querySelector("#dialogBody");
    const loading = document.createElement("p");
    loading.className = "fine";
    loading.textContent = "세 친구가 카드를 준비하고 있어요…";
    body.append(loading);

    try {
      await document.fonts.ready;

      // 첫 화면에서 사용하는 원본 캐릭터 불러오기
      async function loadCharacter(name, fallback) {
        const source =
          document.querySelector(
            `.character-hero img[alt="${name}"]`
          )?.src || new URL(fallback, document.baseURI).href;

        return new Promise(resolve => {
          const image = new Image();
          image.crossOrigin = "anonymous";

          const timer = setTimeout(() => {
            image.onload = image.onerror = null;
            resolve(null);
          }, 8000);

          image.onload = () => {
            clearTimeout(timer);
            resolve(image);
          };

          image.onerror = () => {
            clearTimeout(timer);
            resolve(null);
          };

          image.src = source;
        });
      }

      const characters = await Promise.all([
        loadCharacter("넥시", "assets/nexi.png"),
        loadCharacter("카보", "assets/cabo.png"),
        loadCharacter("리박사", "assets/dr_lee.png")
      ]);

      // 준비 중 다른 창을 열었다면 결과를 덮어쓰지 않기
      if (!loading.isConnected || !modal.open) return;

      const canvas = document.createElement("canvas");
      canvas.width = 900;

      const ctx = canvas.getContext("2d");
      if (!ctx) throw new Error("Canvas unavailable");

      const green = "#35543c";
      const muted = "#7b876d";
      const blocks = [];
      let y = 155;

      /*
       * 단어 단위로 줄을 나누고 줄 길이를 균형 있게 맞춤.
       * 폭보다 긴 단어만 글자 단위로 분리.
       */
      function wrap(text, size, width, bold) {
        ctx.font =
          `${bold ? "700" : "400"} ${size}px sans-serif`;

        const output = [];

        for (const paragraph of String(text ?? "").split("\n")) {
          const words = paragraph.trim().split(/\s+/).filter(Boolean);
          const tokens = [];

          for (const word of words) {
            if (ctx.measureText(word).width <= width) {
              tokens.push(word);
              continue;
            }

            let part = "";
            for (const character of word) {
              if (
                part &&
                ctx.measureText(part + character).width > width
              ) {
                tokens.push(part);
                part = "";
              }
              part += character;
            }
            if (part) tokens.push(part);
          }

          if (!tokens.length) {
            output.push("");
            continue;
          }

          const costs = Array(tokens.length + 1).fill(Infinity);
          const next = [];
          costs[tokens.length] = 0;

          for (let i = tokens.length - 1; i >= 0; i--) {
            let line = "";

            for (let j = i; j < tokens.length; j++) {
              line += (j > i ? " " : "") + tokens[j];
              const measured = ctx.measureText(line).width;
              if (measured > width) break;

              const cost =
                1e9 + (width - measured) ** 2 + costs[j + 1];

              if (cost < costs[i]) {
                costs[i] = cost;
                next[i] = j + 1;
              }
            }
          }

          for (let i = 0; i < tokens.length;) {
            const end = next[i] ?? i + 1;
            output.push(tokens.slice(i, end).join(" "));
            i = end;
          }
        }

        return output;
      }

      function textBlock(text, size, options = {}) {
        const {
          bold = false,
          color = green,
          width = 700,
          x = 450,
          align = "center",
          gap = 18
        } = options;

        const rows = wrap(text, size, width, bold);
        const lineHeight = size * 1.6;

        blocks.push({
          rows, size, bold, color,
          x, align, y, lineHeight
        });

        y += rows.length * lineHeight + gap;
      }

      textBlock("今日ではなく", 1, { gap: 0 });
      blocks.pop();
      y = 155;

      textBlock("今日ではなく", 1, { gap: 0 });
      blocks.pop();
      y = 155;

      textBlock("오늘, 당신에게 도착한 초록운", 22, {
        color: muted,
        gap: 18
      });

      textBlock(current.fortune[0], 39, {
        bold: true,
        gap: 16
      });

      const characterTop = y;
      y += 215;

      for (const sentence of sentences(current.fortune[1])) {
        textBlock(sentence, 26, {
          width: 690,
          gap: 14
        });
      }

      y += 8;
      const chipTop = y;
      y += 79;

      function planPanel(label, title, description, kind) {
        const top = y;
        y += 25;

        textBlock(label, 20, {
          x: 245,
          align: "left",
          width: 535,
          color: muted,
          gap: 10
        });

        textBlock(title, 29, {
          x: 245,
          align: "left",
          width: 535,
          bold: true,
          gap: 12
        });

        for (const sentence of sentences(description || "")) {
          textBlock(sentence, 23, {
            x: 245,
            align: "left",
            width: 535,
            gap: 7
          });
        }

        y += 18;
        const panel = { top, height: y - top, kind };
        y += 18;
        return panel;
      }

      const panels = [
        planPanel(
          "행운을 여는 탄소중립 행동",
          current.mission[0],
          current.mission[1],
          "action"
        ),
        planPanel(
          "오늘의 행운 아이템",
          current.mission[3],
          current.mission[4],
          "item"
        )
      ];

      const footerTop = y + 12;
      canvas.height = Math.ceil(footerTop + 155);

      function box(x, top, width, height, radius, fill, stroke) {
        ctx.beginPath();
        ctx.moveTo(x + radius, top);
        ctx.arcTo(x + width, top, x + width, top + height, radius);
        ctx.arcTo(x + width, top + height, x, top + height, radius);
        ctx.arcTo(x, top + height, x, top, radius);
        ctx.arcTo(x, top, x + width, top, radius);
        ctx.closePath();

        if (fill) {
          ctx.fillStyle = fill;
          ctx.fill();
        }
        if (stroke) {
          ctx.strokeStyle = stroke;
          ctx.lineWidth = 1.5;
          ctx.stroke();
        }
      }

      function print(text, x, top, size, color, bold = false, align = "center") {
        ctx.font = `${bold ? "700" : "400"} ${size}px sans-serif`;
        ctx.fillStyle = color;
        ctx.textAlign = align;
        ctx.textBaseline = "top";
        ctx.fillText(text, x, top);
      }

      function sprout(x, top, scale = 1) {
        ctx.save();
        ctx.translate(x, top);
        ctx.scale(scale, scale);
        ctx.strokeStyle = "#8ba36a";
        ctx.lineWidth = 3;
        ctx.lineCap = "round";

        ctx.beginPath();
        ctx.moveTo(0, 13);
        ctx.quadraticCurveTo(-3, -7, 0, -25);
        ctx.stroke();

        for (const [lx, ly, angle, color] of [
          [-9, -9, -0.75, "#a8bc80"],
          [9, -22, 0.75, "#8fa86a"]
        ]) {
          ctx.save();
          ctx.translate(lx, ly);
          ctx.rotate(angle);
          ctx.fillStyle = color;
          ctx.beginPath();
          ctx.ellipse(0, -7, 7, 15, 0, 0, Math.PI * 2);
          ctx.fill();
          ctx.restore();
        }

        ctx.restore();
      }

      function drawCharacter(image, x, top, width, height) {
        if (!image) return;

        const ratio = Math.min(
          width / image.naturalWidth,
          height / image.naturalHeight
        );
        const w = image.naturalWidth * ratio;
        const h = image.naturalHeight * ratio;

        ctx.drawImage(
          image,
          x + (width - w) / 2,
          top + height - h,
          w,
          h
        );
      }

      // 背景と枠
      ctx.fillStyle = "#f8f6eb";
      ctx.fillRect(0, 0, 900, canvas.height);

      box(30, 30, 840, canvas.height - 60, 28, null, "#d9e2cb");

      print("CARBONEX", 78, 76, 24, green, true, "left");
      print(
        current.date.replaceAll("-", "."),
        822, 78, 21, muted, false, "right"
      );

      ctx.strokeStyle = "#dde3cf";
      ctx.beginPath();
      ctx.moveTo(78, 118);
      ctx.lineTo(822, 118);
      ctx.stroke();

      // 原本キャラクター
      drawCharacter(characters[0], 198, characterTop + 28, 145, 165);
      drawCharacter(characters[1], 335, characterTop, 230, 183);
      drawCharacter(characters[2], 559, characterTop + 25, 145, 166);

      sprout(165, characterTop + 175, 0.65);
      sprout(735, characterTop + 175, 0.65);

      // 今日の気運と色
      box(78, chipTop, 364, 52, 24, "#eaf0da");
      box(458, chipTop, 364, 52, 24, "#eef0df");

      print(
        `오늘의 기운 · ${current.fortune[2]}`,
        260, chipTop + 15, 19, green
      );
      print(
        `행운의 색 · ${current.fortune[3]}`,
        640, chipTop + 15, 19, green
      );

      // 行動とアイテムを別々のパネルに
      for (const panel of panels) {
        box(
          78, panel.top, 744, panel.height, 26,
          panel.kind === "action" ? "#edf2df" : "#fbf7e7",
          panel.kind === "action" ? "#dce6c8" : "#e9dfb9"
        );

        const iconY = panel.top + panel.height / 2;

        if (panel.kind === "action") {
          sprout(162, iconY + 10, 1.65);
        } else {
          print(
            current.mission[2] || "🌿",
            160, iconY - 32, 59, green
          );
        }
      }

      for (const block of blocks) {
        block.rows.forEach((row, index) => {
          print(
            row,
            block.x,
            block.y + index * block.lineHeight,
            block.size,
            block.color,
            block.bold,
            block.align
          );
        });
      }

      // 下部の楕円は置かず、小さな葉だけ
      sprout(104, footerTop + 36, 0.65);
      sprout(796, footerTop + 36, 0.65);

      print(
        "오늘의 작은 선택이 내일의 초록이 됩니다.",
        450, footerTop + 10, 22, green
      );
      print(
        "경산시 탄소중립 서포터즈 2기 카보넥스",
        450, footerTop + 65, 18, muted
      );
      print(
        "재미로 즐기는 오늘의 운세입니다.",
        450, footerTop + 96, 16, muted
      );

      const image = document.createElement("img");
      image.src = canvas.toDataURL("image/png");
      image.alt = "세 캐릭터와 오늘의 운세, 탄소중립 행동이 담긴 결과 카드";

      const download = document.createElement("a");
      download.className = "primary download-card";
      download.textContent = "PNG 이미지 저장 ↓";
      download.download = `오늘의_초록운_${current.date}.png`;
      download.href = image.src;

      const hint = document.createElement("p");
      hint.className = "fine";
      hint.textContent =
        "휴대폰에서는 카드 이미지를 길게 눌러 저장할 수도 있어요.";

      body.replaceChildren(image, download, hint);
    } catch (error) {
      if (loading.isConnected) {
        loading.textContent =
          "카드를 만들지 못했어요. 창을 닫고 다시 시도해 주세요.";
      }
      console.error("결과 카드 생성 오류:", error);
    }
  };
})();