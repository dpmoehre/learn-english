// Navigation and local learning history. No analytics leave this browser.
const HISTORY_KEY = "english-learning-history-v1";
let historyData = { days: {}, answers: {}, reviews: {}, lastLesson: 0, counts: {}, seconds: {}, lastActive: 0 };
let storageAvailable = true;
try {
  const saved = JSON.parse(localStorage.getItem(HISTORY_KEY));
  if (saved && saved.days && saved.answers && saved.reviews) {
    historyData = Object.assign(historyData, saved);
  }
} catch {
  storageAvailable = false;
}
if (!historyData.counts) historyData.counts = {};
if (!historyData.seconds) historyData.seconds = {};
if (!historyData.lastActive) historyData.lastActive = 0;

function saveHistory() {
  try {
    localStorage.setItem(HISTORY_KEY, JSON.stringify(historyData));
  } catch {
    storageAvailable = false;
  }
}

function persistHistory() {
  saveHistory();
  renderStats();
}

function activity(kind) {
  const d = localDay();
  if (!historyData.days[d]) historyData.days[d] = {};
  historyData.days[d][kind] = true;
  if (!historyData.counts[d]) historyData.counts[d] = {};
  historyData.counts[d][kind] = (historyData.counts[d][kind] || 0) + 1;
  historyData.lastActive = Date.now();
  persistHistory();
}

function recordAnswer(key, correct) {
  if (!historyData.answers[key]) historyData.answers[key] = { first: correct, latest: correct };
  else historyData.answers[key].latest = correct;
  activity("练习");
}

function countOn(day, kind) {
  return (historyData.counts[day] || {})[kind] || 0;
}

function countAll(kind) {
  return Object.values(historyData.counts).reduce((n, row) => n + (row[kind] || 0), 0);
}

function secondsOn(day) {
  return historyData.seconds[day] || 0;
}

function secondsAll() {
  return Object.values(historyData.seconds).reduce((n, v) => n + (v || 0), 0);
}

function weekKeys() {
  return Array.from({ length: 7 }, (_, i) => dateKey(i - 6));
}

function formatDuration(sec) {
  sec = Math.max(0, Math.floor(sec || 0));
  if (sec < 60) return sec ? `${sec} 秒` : "0 分钟";
  const m = Math.floor(sec / 60);
  if (m < 60) return `${m} 分钟`;
  return `${Math.floor(m / 60)} 小时 ${m % 60} 分钟`;
}

function formatClock(ts) {
  if (!ts) return "还没有记下";
  const d = new Date(ts);
  const mm = String(d.getMonth() + 1);
  const dd = String(d.getDate());
  const hh = String(d.getHours()).padStart(2, "0");
  const mi = String(d.getMinutes()).padStart(2, "0");
  return `${mm}/${dd} ${hh}:${mi}`;
}

function currentStreak() {
  let streak = 0;
  let offset = historyData.days[dateKey(0)] ? 0 : -1;
  while (historyData.days[dateKey(offset)]) {
    streak += 1;
    offset -= 1;
  }
  return streak;
}

function vocabMarkCounts() {
  const marks = (typeof vocabMarks === "object" && vocabMarks) ? vocabMarks : {};
  const values = Object.values(marks);
  return {
    known: values.filter((v) => v === "known").length,
    again: values.filter((v) => v === "again").length,
    total: typeof allVocabItems === "function" ? allVocabItems().length : values.length
  };
}

function examReport() {
  const answers = Object.values(historyData.answers);
  const firstRight = answers.filter((a) => a.first).length;
  const latestRight = answers.filter((a) => a.latest).length;
  const firstRate = answers.length ? firstRight / answers.length : 0;
  const latestRate = answers.length ? latestRight / answers.length : 0;
  const wrong = Object.entries(historyData.answers).filter(([, a]) => !a.latest);
  const completed = new Set(completedLessons).size;
  const cardsKnown = Object.values(historyData.reviews).filter((v) => v === "known").length;
  const cardsAgain = Object.values(historyData.reviews).filter((v) => v === "again").length;
  const cardsTotal = Object.keys(historyData.reviews).length;
  const vocab = vocabMarkCounts();
  const listen = countAll("听读");
  const speakN = countAll("口语");
  const mailN = countAll("邮件");
  const today = dateKey(0);
  const week = weekKeys();
  const todaySec = secondsOn(today);
  const weekSec = week.reduce((n, d) => n + secondsOn(d), 0);
  const totalSec = secondsAll();
  const activeDays = Object.keys(historyData.days).length;
  const streak = currentStreak();
  const vocabNeed = Math.max(20, Math.round((vocab.total || 80) * 0.15));

  const checks = [
    { id: "lesson", name: "入门课程", need: "完成 5 / 7 课", pass: completed >= 5, now: `${completed} / 7`, href: "#beginner", action: "继续上课" },
    { id: "accuracy", name: "答题质量", need: "至少做 5 题，最近正确率 ≥ 70%", pass: answers.length >= 5 && latestRate >= 0.7, now: answers.length ? `${Math.round(latestRate * 100)}% · ${answers.length} 题` : "还没答题", href: "#beginner", action: "去做情景题" },
    { id: "vocab", name: "单词量", need: `掌握 ≥ ${vocabNeed} 个词`, pass: vocab.known >= vocabNeed, now: `${vocab.known} 个`, href: "#vocab", action: "去背单词" },
    { id: "listen", name: "听读量", need: "听读 ≥ 21 次", pass: listen >= 21, now: `${listen} 次`, href: "#beginner", action: "去听一句" },
    { id: "habit", name: "学习习惯", need: "累计 ≥ 3 天，连续 ≥ 2 天", pass: activeDays >= 3 && streak >= 2, now: `累计 ${activeDays} 天 · 连续 ${streak} 天`, href: "#beginner", action: "今天先学 15 分钟" },
    { id: "output", name: "开口或邮件", need: "口语 + 邮件合计 ≥ 2 次", pass: speakN + mailN >= 2, now: `口语 ${speakN} · 邮件 ${mailN}`, href: "#speak", action: "去练口语" },
    { id: "review", name: "错题消化", need: "至少作答 3 题，未消化错题 ≤ 2", pass: answers.length >= 3 && wrong.length <= 2, now: answers.length ? `${wrong.length} 题待复习` : "还没答题", href: "#stats", action: "下滑复习错题" }
  ];

  const timeScore = Math.round(Math.min(40, (Math.min(todaySec, 15 * 60) / (15 * 60)) * 40) + Math.min(40, (Math.min(weekSec, 75 * 60) / (75 * 60)) * 40) + Math.min(20, (Math.min(streak, 5) / 5) * 20));
  const qtyScore = Math.round((completed / 7) * 35 + Math.min(1, vocab.known / Math.max(vocabNeed, 1)) * 25 + Math.min(1, listen / 21) * 20 + Math.min(1, cardsKnown / 12) * 20);
  const qualityScore = answers.length < 3
    ? Math.round(firstRate * 50)
    : Math.round(firstRate * 40 + latestRate * 40 + (wrong.length <= 2 ? 20 : wrong.length <= 5 ? 10 : 0));
  const passed = checks.filter((c) => c.pass).length;
  const coverScore = Math.round((passed / checks.length) * 100);
  const overall = Math.round(timeScore * 0.25 + qtyScore * 0.25 + qualityScore * 0.3 + coverScore * 0.2);

  let grade = "起步中";
  let verdict = "尚未通过";
  if (passed >= 6 && overall >= 80) { grade = "优秀"; verdict = "考核通过"; }
  else if (passed >= 5 && overall >= 70) { grade = "良好"; verdict = "考核通过"; }
  else if (passed >= 4 && overall >= 60) { grade = "合格"; verdict = "考核通过"; }
  else if (overall >= 40) { grade = "需加强"; }

  const fail = checks.find((c) => !c.pass);
  return {
    answers, firstRight, latestRight, firstRate, latestRate, wrong,
    completed, cardsKnown, cardsAgain, cardsTotal, vocab, listen, speakN, mailN,
    today, week, todaySec, weekSec, totalSec, activeDays, streak, vocabNeed,
    checks, passed, timeScore, qtyScore, qualityScore, coverScore, overall, grade, verdict, fail
  };
}

const sections = [...document.querySelectorAll(".wrap > section")];
sections[0].id = "home";
sections[sections.length - 1].id = "planSection";
const routes = { home: ["home"], beginner: ["beginner"], workplace: ["workplace"], vocab: ["vocab"], practice: ["map", "scenes", "cards", "mail", "speak", "quiz", "planSection"], stats: ["stats"] };
const nav = document.querySelector(".nav");
nav.innerHTML = '<a class="brand" href="#home">英语学习台<small>从校园到职场 · 中文带学</small></a><nav aria-label="主导航">' + [["home", "学习首页"], ["beginner", "新人课程"], ["workplace", "外企词典"], ["vocab", "单词表"], ["practice", "练习工具"], ["stats", "学习统计"]].map(([id, label]) => `<a href="#${id}" data-route="${id}">${label}</a>`).join("") + "</nav>";
const statsSection = document.createElement("section");
statsSection.id = "stats";
statsSection.innerHTML = '<span class="pill">MY LEARNING</span><h2>时间、数量、质量，再看考核</h2><p class="muted">统计只保存在当前浏览器。浏览页面不算练习；计时从这次更新后开始，且需要你正在点或滑。旧的课程和答题会保留。</p><div id="statsContent"></div>';
document.querySelector(".wrap").insertBefore(statsSection, document.querySelector("footer"));
const practiceNav = document.createElement("nav");
practiceNav.id = "practiceNav";
practiceNav.setAttribute("aria-label", "练习工具导航");
practiceNav.className = "toolbar";
practiceNav.innerHTML = [["map", "表达骨架"], ["scenes", "场景"], ["cards", "句卡"], ["mail", "邮件"], ["speak", "口语"], ["quiz", "测验"]].map(([id, label]) => `<a class="btn ghost" href="#${id}">${label}</a>`).join("");
document.getElementById("map").prepend(practiceNav);
const dashboard = document.createElement("div");
dashboard.className = "card";
dashboard.id = "homeDashboard";
sections[0].append(dashboard);

function route() {
  const target = location.hash.slice(1) || "home";
  const page = Object.keys(routes).find((key) => key === target || routes[key].includes(target)) || "home";
  document.querySelectorAll(".wrap > section").forEach((s) => { s.hidden = !routes[page].includes(s.id); });
  document.querySelectorAll("[data-route]").forEach((a) => {
    if (a.dataset.route === page) a.setAttribute("aria-current", "page");
    else a.removeAttribute("aria-current");
  });
  if (page === "stats") renderStats();
  if (target !== page && document.getElementById(target)) document.getElementById(target).scrollIntoView();
  else window.scrollTo(0, 0);
}
window.addEventListener("hashchange", route);

function dateKey(offset) {
  const d = new Date();
  d.setDate(d.getDate() + offset);
  return `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;
}

function renderStats() {
  const box = document.getElementById("statsContent");
  const home = document.getElementById("homeDashboard");
  if (!box || !home) return;
  const r = examReport();
  const kindsToday = Object.keys(historyData.days[r.today] || {});
  const maxWeekMin = Math.max(20, ...r.week.map((d) => secondsOn(d) / 60));
  const scoreRows = [
    ["时间", r.timeScore, "今日是否学满、这周是否持续"],
    ["数量", r.qtyScore, "课、词、听读、句卡有没有做够"],
    ["质量", r.qualityScore, "对不对、错题有没有消化"],
    ["覆盖", r.coverScore, "七项考核过了几项"]
  ];

  box.innerHTML = `
    <article class="exam-hero card ${r.verdict === "考核通过" ? "pass" : "fail"}">
      <span class="pill">${r.verdict === "考核通过" ? "EXAM PASS" : "EXAM IN PROGRESS"}</span>
      <p class="exam-verdict">${r.verdict} · ${r.grade}</p>
      <p class="metric" id="statOverall">${r.overall}</p>
      <p>综合分 · 7 项里已通过 ${r.passed} 项</p>
      <p class="muted">${r.fail ? `下一步：${r.fail.need}。现在是 ${r.fail.now}。` : "七项都到了。保持每天听读和开口。"}</p>
      ${r.fail ? `<div class="toolbar"><a class="btn olive" href="${r.fail.href}">${r.fail.action} →</a></div>` : ""}
    </article>

    <h3>整体考核</h3>
    <p class="muted">合格线：通过 4 项且综合分 ≥ 60。良好要 5 项且 ≥ 70。优秀要 6 项且 ≥ 80。</p>
    ${r.checks.map((c) => `
      <article class="exam-row ${c.pass ? "ok" : "no"}">
        <div>
          <strong>${c.name}</strong>
          <p class="muted">标准：${c.need}</p>
        </div>
        <div class="exam-now">
          <b>${c.now}</b>
          <span class="exam-tag">${c.pass ? "通过" : "未过"}</span>
        </div>
      </article>`).join("")}

    <h3>时间</h3>
    <div class="grid g4">
      <article class="card"><span class="muted">今日学习</span><p class="metric" id="statTodayTime">${formatDuration(r.todaySec)}</p></article>
      <article class="card"><span class="muted">近 7 天</span><p class="metric">${formatDuration(r.weekSec)}</p></article>
      <article class="card"><span class="muted">累计时长</span><p class="metric">${formatDuration(r.totalSec)}</p></article>
      <article class="card"><span class="muted">连续学习</span><p class="metric">${r.streak} 天</p></article>
    </div>
    <p class="muted">最近一次学习：${formatClock(historyData.lastActive)}。建议每天 15 分钟。计时只统计你正在用这个页面的时间。</p>
    <div class="time-bars" aria-label="近 7 天学习分钟">
      ${r.week.map((key, i) => {
        const min = secondsOn(key) / 60;
        const h = Math.max(min > 0 ? 8 : 4, Math.round((min / maxWeekMin) * 100));
        const label = i === 6 ? "今天" : key.split("-").slice(1).join("/");
        return `<div class="col ${min > 0 ? "on" : ""}"><i style="height:${h}%"></i><span>${min ? `${Math.round(min)}′` : "0"}</span><small>${label}</small></div>`;
      }).join("")}
    </div>

    <h3>数量</h3>
    <div class="grid g4">
      ${[
        ["完成课程", `${r.completed} / 7`, "课程"],
        ["听读次数", `${r.listen}`, "听读"],
        ["掌握单词", `${r.vocab.known}`, "单词"],
        ["掌握句卡", `${r.cardsKnown}`, "句卡"],
        ["作答题目", `${r.answers.length}`, "练习"],
        ["口语练习", `${r.speakN}`, "口语"],
        ["邮件练习", `${r.mailN}`, "邮件"],
        ["累计学习日", `${r.activeDays}`, ""]
      ].map(([label, value, kind]) => {
        const todayN = kind ? countOn(r.today, kind) : (kindsToday.length ? 1 : 0);
        return `<article class="card"><span class="muted">${label}</span><p class="metric">${value}</p><p class="muted">今日 ${todayN}</p></article>`;
      }).join("")}
    </div>

    <h3>质量</h3>
    <div class="score-line"><span>首次答对</span><progress max="100" value="${Math.round(r.firstRate * 100)}"></progress><b>${r.answers.length ? `${Math.round(r.firstRate * 100)}%` : "暂无"}</b></div>
    <div class="score-line"><span>最近答对</span><progress max="100" value="${Math.round(r.latestRate * 100)}"></progress><b>${r.answers.length ? `${Math.round(r.latestRate * 100)}%` : "暂无"}</b></div>
    <div class="score-line"><span>单词掌握</span><progress max="100" value="${r.vocab.total ? Math.round(r.vocab.known / r.vocab.total * 100) : 0}"></progress><b>${r.vocab.known} / ${r.vocab.total}</b></div>
    <div class="score-line"><span>句卡掌握</span><progress max="100" value="${r.cardsTotal ? Math.round(r.cardsKnown / r.cardsTotal * 100) : 0}"></progress><b>${r.cardsKnown} 掌握 · ${r.cardsAgain} 待复习</b></div>
    ${scoreRows.map(([name, score, tip]) => `<div class="score-line"><span>${name}分</span><progress max="100" value="${score}"></progress><b>${score}</b></div><p class="muted stat-note">${tip}</p>`).join("")}
    <p class="muted">首次答对率不因重试变高。最近答对率会随你改对而上升。</p>

    <h3>需要再练一遍 · ${r.wrong.length} 题</h3>
    ${r.wrong.length ? r.wrong.map(([key]) => {
      const [type, id] = key.split(":");
      return `<button class="opt" onclick="reviewQuestion('${type}',${Number(id)})">${type === "lesson" ? LESSONS[Number(id)].title : QUIZ[Number(id)].q} → 再练习</button>`;
    }).join("") : '<p class="feedback">目前没有待复习错题。完成情景题后，这里会显示需要再练的内容。</p>'}

    <p class="muted">${storageAvailable ? "记录已保存在本机，不跨设备同步。" : "浏览器无法保存记录，本次数据可能在关闭后丢失。"}</p>
  `;

  home.innerHTML = `
    <h3>你的学习旅程</h3>
    <p>考核 <strong>${r.verdict}</strong> · ${r.grade} · ${r.overall} 分 · 已完成 ${r.completed} / 7 课</p>
    <progress max="7" value="${r.completed}" aria-label="课程完成进度"></progress>
    <p class="muted">今日 ${formatDuration(r.todaySec)} · 近 7 天 ${formatDuration(r.weekSec)}</p>
    <div class="toolbar">
      <button class="btn olive" onclick="continueLearning()">继续学习 →</button>
      <a class="btn ghost" href="#vocab">去背单词表</a>
      <a class="btn ghost" href="#stats">查看考核</a>
    </div>
    <p class="muted">${r.fail ? `今天先做：${r.fail.action}。` : "今天的小目标：再听 8 句，开口 1 分钟。"}</p>
  `;
}

function continueLearning() {
  const i = Number.isInteger(historyData.lastLesson) ? historyData.lastLesson : 0;
  showLesson(Math.min(6, Math.max(0, i)));
  location.hash = "beginner";
}

function reviewQuestion(type, id) {
  if (type === "lesson") {
    showLesson(id);
    location.hash = "beginner";
  } else {
    location.hash = "quiz";
    route();
    document.querySelector(`.opt[data-q="${id}"]`).closest(".q").scrollIntoView({ block: "center" });
  }
}

const originalShowLesson = showLesson;
showLesson = function (i) {
  originalShowLesson(i);
  historyData.lastLesson = i;
  persistHistory();
  const controls = document.createElement("div");
  controls.className = "toolbar";
  controls.innerHTML = `<button class="btn ghost" onclick="showLesson(${i - 1});document.getElementById('beginner').scrollIntoView()" ${i === 0 ? "disabled" : ""}>← 上一课</button><span class="muted">${i + 1} / 7 · ${LESSONS[i].title}</span><button class="btn ghost" onclick="showLesson(${i + 1});document.getElementById('beginner').scrollIntoView()" ${i === 6 ? "disabled" : ""}>下一课 →</button>`;
  document.getElementById("lessonPanel").prepend(controls);
};

const originalAnswer = answerLesson;
answerLesson = function (answer) {
  originalAnswer(answer);
  recordAnswer(`lesson:${lessonIndex}`, lessonPassed);
};

const originalFinish = finishLesson;
finishLesson = function () {
  originalFinish();
  if (lessonPassed) {
    activity("课程");
    const b = document.getElementById("finishLesson");
    b.disabled = true;
    b.textContent = "✓ 本课已完成";
  }
};

const originalSpeak = speakEnglish;
speakEnglish = function (text) {
  originalSpeak(text);
  if (text) activity("听读");
};

const originalGrade = gradeQuiz;
gradeQuiz = function () {
  const selected = document.querySelectorAll("#quizBox .picked");
  if (selected.length !== QUIZ.length) {
    document.getElementById("quizResult").textContent = `还有 ${QUIZ.length - selected.length} 题未作答，请完成后交卷。`;
    return;
  }
  originalGrade();
  selected.forEach((b) => recordAnswer(`quiz:${b.dataset.q}`, Number(b.dataset.i) === QUIZ[Number(b.dataset.q)].a));
};

const originalMark = mark;
mark = function (key) {
  originalMark(key);
  if (key === "speak") activity("口语");
  if (key === "mail") activity("邮件");
};

const reviewControls = document.createElement("div");
reviewControls.className = "toolbar";
reviewControls.innerHTML = '<button class="btn ghost" onclick="rateCard(\'again\')">还不熟 · 加入复习</button><button class="btn olive" onclick="rateCard(\'known\')">我会说了</button><span id="cardFeedback" role="status"></span>';
document.getElementById("cards").append(reviewControls);

function rateCard(value) {
  const c = currentCards()[cardIndex];
  historyData.reviews[c.en] = value;
  activity("句卡");
  document.getElementById("cardFeedback").textContent = value === "known" ? "已记为掌握，继续下一张。" : "已加入待复习，再读一次试试。";
  if (value === "known") nextCard();
}

const reviewButton = document.createElement("button");
reviewButton.className = "btn ghost";
reviewButton.textContent = "只练待复习句卡";
let reviewOnly = false;
const originalCurrentCards = currentCards;
currentCards = function () {
  const list = originalCurrentCards();
  if (!reviewOnly) return list;
  const filtered = list.filter((c) => historyData.reviews[c.en] === "again");
  return filtered.length ? filtered : list;
};
reviewButton.onclick = () => {
  reviewOnly = !reviewOnly;
  reviewButton.textContent = reviewOnly ? "退出复习模式" : "只练待复习句卡";
  cardIndex = 0;
  showCard();
  document.getElementById("cardFeedback").textContent = reviewOnly && !originalCurrentCards().some((c) => historyData.reviews[c.en] === "again")
    ? "当前场景没有待复习句卡，先展示全部句卡。"
    : "";
};
reviewControls.prepend(reviewButton);

let lastVisibleTick = Date.now();
let lastInteract = Date.now();
["click", "touchstart", "keydown", "scroll"].forEach((ev) => {
  window.addEventListener(ev, () => { lastInteract = Date.now(); }, { passive: true });
});

function flushStudyTime() {
  const now = Date.now();
  const gap = now - lastVisibleTick;
  lastVisibleTick = now;
  if (document.hidden) return;
  if (now - lastInteract > 120000) return;
  if (gap < 1000 || gap > 120000) return;
  const d = localDay();
  historyData.seconds[d] = (historyData.seconds[d] || 0) + Math.round(gap / 1000);
  historyData.lastActive = now;
  saveHistory();
  const el = document.getElementById("statTodayTime");
  if (el) el.textContent = formatDuration(historyData.seconds[d] || 0);
}

setInterval(flushStudyTime, 20000);
document.addEventListener("visibilitychange", () => {
  if (document.hidden) flushStudyTime();
  else lastVisibleTick = Date.now();
});
window.addEventListener("pagehide", flushStudyTime);

showLesson(Math.min(6, Math.max(0, Number(historyData.lastLesson) || 0)));
renderStats();
route();
