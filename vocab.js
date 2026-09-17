const VOCAB_LISTS = [
  {
    id: "intro",
    title: "入职认识",
    words: [
      ["team", "团队", "I’m new to the team."],
      ["colleague", "同事", "She is my colleague."],
      ["intern", "实习生", "I’m an intern this year."],
      ["office", "办公室", "I work in the office today."],
      ["introduce", "介绍", "Let me introduce myself."],
      ["join", "加入", "I just joined the company."],
      ["role", "职责 / 角色", "What’s my role on this project?"],
      ["welcome", "欢迎", "Welcome to the team."],
      ["manager", "经理 / 主管", "Please ask your manager."],
      ["HR", "人力资源", "You can ask HR about this."]
    ]
  },
  {
    id: "task",
    title: "接任务",
    words: [
      ["task", "任务", "Which task should I do first?"],
      ["report", "报告", "I need to write a report."],
      ["include", "包含", "What should I include?"],
      ["priority", "优先级", "What’s the priority?"],
      ["urgent", "紧急的", "Is this urgent?"],
      ["assign", "分配", "Who assigned this task?"],
      ["finish", "完成", "I can finish it today."],
      ["support", "支持 / 协助", "I support the team with documents."],
      ["prepare", "准备", "I’ll prepare the materials."],
      ["need", "需要", "I need more time."]
    ]
  },
  {
    id: "meeting",
    title: "开会",
    words: [
      ["meeting", "会议", "We have a short meeting at 3."],
      ["agenda", "会议议程", "Did you see the agenda?"],
      ["minutes", "会议纪要", "I’ll send the minutes later."],
      ["slowly", "慢慢地", "Could you speak more slowly?"],
      ["again", "再一次", "Could you say that again?"],
      ["confirm", "确认", "Just to confirm, is it Friday?"],
      ["mean", "意思是", "Do you mean this Friday?"],
      ["online", "线上的", "It’s an online meeting."],
      ["available", "有空的", "Would you be available tomorrow?"],
      ["invite", "邀请", "I’ll send a calendar invite."]
    ]
  },
  {
    id: "update",
    title: "汇报进度",
    words: [
      ["update", "更新 / 汇报", "Here’s a quick update."],
      ["progress", "进展", "What’s the progress?"],
      ["draft", "草稿", "I finished the first draft."],
      ["check", "核对 / 检查", "I’m checking the numbers."],
      ["data", "数据", "I need help with the data."],
      ["blocker", "卡点 / 阻碍", "The blocker is missing data."],
      ["next step", "下一步", "The next step is to collect feedback."],
      ["on track", "按计划推进", "We’re currently on track."],
      ["delay", "延误", "There is a short delay."],
      ["help", "帮助", "I need help with this."]
    ]
  },
  {
    id: "email",
    title: "写邮件",
    words: [
      ["email", "电子邮件", "I’ll send you an email."],
      ["review", "审阅", "Could you review this report?"],
      ["feedback", "反馈", "Please send your feedback by Friday."],
      ["attach", "添加附件", "I will attach the file."],
      ["attachment", "附件", "Please check the attachment."],
      ["send", "发送", "I’ll send it this afternoon."],
      ["follow up", "跟进", "I’m writing to follow up."],
      ["subject", "邮件主题", "Please write a clear subject."],
      ["CC", "抄送", "I’ll CC my manager."],
      ["please", "请", "Could you please confirm?"]
    ]
  },
  {
    id: "time",
    title: "时间与延期",
    words: [
      ["deadline", "截止时间", "What’s the deadline?"],
      ["today", "今天", "I can send the draft today."],
      ["tomorrow", "明天", "Can we meet tomorrow?"],
      ["Friday", "星期五", "Please reply by Friday."],
      ["EOD", "下班前", "I’ll send it by EOD."],
      ["schedule", "安排 / 日程", "Let’s schedule a short meeting."],
      ["extra", "额外的", "I need one extra day."],
      ["instead", "改为 / 代替", "Would Wednesday work instead?"],
      ["ETA", "预计完成时间", "What’s your ETA?"],
      ["by", "不晚于", "Please send it by 5pm."]
    ]
  },
  {
    id: "feedback",
    title: "反馈沟通",
    words: [
      ["improve", "改进", "What can I improve?"],
      ["example", "例子", "Could you give me an example?"],
      ["clear", "清楚的", "The report is not clear."],
      ["question", "问题", "I have a question."],
      ["try", "尝试", "I’ll try that next time."],
      ["next time", "下次", "I’ll do it better next time."],
      ["1:1", "一对一沟通", "We have a 1:1 on Monday."],
      ["expect", "期待 / 期望", "What do you expect from me?"],
      ["agree", "同意", "I agree with this plan."],
      ["sorry", "抱歉", "I’m sorry for the delay."]
    ]
  },
  {
    id: "actions",
    title: "办公常用动词",
    words: [
      ["share", "分享", "I’ll share the file with you."],
      ["update", "更新", "Please update the sheet."],
      ["confirm", "确认", "Please confirm the time."],
      ["clarify", "说明清楚", "Could you please clarify?"],
      ["prepare", "准备", "I’ll prepare the slides."],
      ["collect", "收集", "I’ll collect the feedback."],
      ["recap", "总结", "Let me quickly recap."],
      ["circulate", "传阅 / 发出", "I’ll circulate the notes."],
      ["reach out", "联系", "Please feel free to reach out."],
      ["let me know", "请告诉我", "Please let me know if you have questions."]
    ]
  }
];

let vocabTheme = "all";
let vocabMarks = {};
try {
  const saved = JSON.parse(localStorage.getItem("vocab-marks") || "{}");
  if (saved && typeof saved === "object") vocabMarks = saved;
} catch {}

function saveVocabMarks() {
  try { localStorage.setItem("vocab-marks", JSON.stringify(vocabMarks)); } catch {}
}

function allVocabItems() {
  return VOCAB_LISTS.flatMap((list) =>
    list.words.map((w) => ({
      theme: list.id,
      themeTitle: list.title,
      en: w[0],
      zh: w[1],
      ex: w[2]
    }))
  );
}

function currentVocabItems() {
  const q = (document.getElementById("vocabSearch")?.value || "").trim().toLowerCase();
  return allVocabItems().filter((w) => {
    const themeOk = vocabTheme === "all" ||
      (vocabTheme === "known" && vocabMarks[w.en] === "known") ||
      (vocabTheme === "again" && vocabMarks[w.en] === "again") ||
      w.theme === vocabTheme;
    const text = `${w.en} ${w.zh} ${w.ex} ${w.themeTitle}`.toLowerCase();
    return themeOk && (!q || text.includes(q));
  });
}

function markVocab(en, value) {
  vocabMarks[en] = value;
  saveVocabMarks();
  if (typeof activity === "function") activity("单词");
  renderVocab();
}

function renderVocab() {
  const tabs = document.getElementById("vocabTabs");
  const box = document.getElementById("vocabList");
  const status = document.getElementById("vocabStatus");
  if (!tabs || !box) return;

  const known = Object.values(vocabMarks).filter((v) => v === "known").length;
  const again = Object.values(vocabMarks).filter((v) => v === "again").length;
  const total = allVocabItems().length;

  const filters = [
    ["all", "全部"],
    ...VOCAB_LISTS.map((l) => [l.id, l.title]),
    ["again", "待复习"],
    ["known", "已掌握"]
  ];
  tabs.innerHTML = filters.map(([id, label]) =>
    `<button class="btn ghost lesson-tab" aria-pressed="${id === vocabTheme}" onclick="vocabTheme='${id}';renderVocab()">${label}</button>`
  ).join("");

  const items = currentVocabItems();
  box.innerHTML = items.length ? items.map((w) => {
    const mark = vocabMarks[w.en];
    return `<article class="card vocab-card">
      <span class="pill">${w.themeTitle}${mark === "known" ? " · 已掌握" : mark === "again" ? " · 待复习" : ""}</span>
      <h3 lang="en">${w.en}</h3>
      <strong>${w.zh}</strong>
      <p class="english" lang="en">${w.ex}</p>
      <div class="toolbar">
        <button class="btn ghost" type="button" onclick="speakEnglish(${JSON.stringify(w.en)})">▶ 听单词</button>
        <button class="btn ghost" type="button" onclick="speakEnglish(${JSON.stringify(w.ex)})">▶ 听例句</button>
        <button class="btn ghost" type="button" onclick="markVocab(${JSON.stringify(w.en)}, 'again')">还不熟</button>
        <button class="btn olive" type="button" onclick="markVocab(${JSON.stringify(w.en)}, 'known')">我会了</button>
      </div>
    </article>`;
  }).join("") : '<p>没有找到。换个主题，或搜“邮件”“截止”“会议”。</p>';

  status.textContent = `共 ${total} 个词 · 本页 ${items.length} 个 · 已掌握 ${known} · 待复习 ${again}`;
}

document.getElementById("vocabSearch")?.addEventListener("input", renderVocab);
renderVocab();
