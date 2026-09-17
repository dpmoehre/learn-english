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
      ["HR", "人力资源", "You can ask HR about this."],
      ["department", "部门", "Which department are you in?"],
      ["full-time", "全职", "This is a full-time role."],
      ["contractor", "合同工", "He is a contractor on this project."],
      ["part-time", "兼职", "This is a part-time role."]
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
      ["need", "需要", "I need more time."],
      ["handle", "处理", "I can handle this."],
      ["materials", "材料", "I’ll prepare the materials."]
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
      ["invite", "邀请", "I’ll send a calendar invite."],
      ["standup", "站会", "We have a standup at 10."],
      ["takeaway", "会议要点", "What’s the key takeaway?"],
      ["recurring", "周期性的", "It’s a recurring meeting."],
      ["offline", "会下聊", "Let’s take this offline."]
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
      ["help", "帮助", "I need help with this."],
      ["status", "状态", "What’s the status?"],
      ["risk", "风险", "There is one risk."]
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
      ["please", "请", "Could you please confirm?"],
      ["BCC", "密送", "I will BCC myself."],
      ["reply", "回复", "I’ll reply this afternoon."],
      ["thread", "邮件串", "Please keep it in this thread."],
      ["inbox", "收件箱", "I will check my inbox now."]
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
      ["by", "不晚于", "Please send it by 5pm."],
      ["reschedule", "改期", "Can we reschedule the meeting?"],
      ["postpone", "推迟", "We may postpone the launch."],
      ["timeline", "时间线", "What’s the timeline?"],
      ["quarter", "季度", "This is for this quarter."]
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
      ["sorry", "抱歉", "I’m sorry for the delay."],
      ["concern", "顾虑", "I have one concern."],
      ["constructive", "建设性的", "Thanks for the constructive feedback."]
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
      ["let me know", "请告诉我", "Please let me know if you have questions."],
      ["take the lead", "牵头", "I can take the lead on this."],
      ["follow through", "跟到底", "I’ll follow through on this."]
    ]
  },
  {
    id: "collab",
    title: "协作与远程",
    words: [
      ["file", "文件", "I’ll send the file now."],
      ["version", "版本", "This is the latest version."],
      ["comment", "批注", "I left a comment in the doc."],
      ["access", "权限", "I don’t have access yet."],
      ["link", "链接", "I shared the link with you."],
      ["remote", "远程办公", "I work remote on Fridays."],
      ["hybrid", "混合办公", "Our team is hybrid."],
      ["timezone", "时区", "What timezone are you in?"],
      ["unmute", "取消静音", "Could you unmute, please?"],
      ["share screen", "共享屏幕", "I can share my screen."],
      ["async", "异步沟通", "Let’s do this async."],
      ["ping", "提醒一下", "Please ping me when it’s ready."]
    ]
  },
  {
    id: "project",
    title: "项目与客户",
    words: [
      ["project", "项目", "I’m new to this project."],
      ["owner", "负责人", "Who is the owner of this?"],
      ["kickoff", "启动会", "The kickoff is on Monday."],
      ["milestone", "里程碑", "What’s the next milestone?"],
      ["deliverable", "交付物", "What’s the deliverable?"],
      ["scope", "范围", "That’s out of scope."],
      ["align", "对齐", "Let’s align on the plan."],
      ["action item", "行动项", "I have two action items."],
      ["client", "客户", "The client asked for a change."],
      ["issue", "问题", "We found an issue."],
      ["escalate", "升级处理", "Should we escalate this?"],
      ["requirement", "需求", "Could you clarify the requirement?"]
    ]
  },
  {
    id: "abbr",
    title: "外企缩写",
    words: [
      ["FYI", "供参考", "FYI, the meeting moved to 3."],
      ["ASAP", "尽快", "Please send it ASAP."],
      ["PTO", "带薪休假", "I’ll take PTO on Friday."],
      ["KPI", "关键绩效指标", "What’s our KPI for this?"],
      ["OKR", "目标与关键结果", "These are our OKRs this quarter."],
      ["TBD", "待定", "The date is still TBD."],
      ["WIP", "进行中", "This file is still WIP."],
      ["OOO", "不在办公室", "I’m OOO tomorrow."],
      ["SOP", "标准流程", "Please follow the SOP."],
      ["NDA", "保密协议", "Please sign the NDA first."],
      ["POC", "对接人", "I’m the POC for this."],
      ["FTE", "全职编制", "This role is one FTE."],
      ["EOW", "本周末前", "Please send it by EOW."],
      ["PFA", "附件见", "PFA the latest draft."],
      ["FAQ", "常见问题", "Please check the FAQ first."],
      ["MVP", "最小可用版本", "Let’s ship an MVP first."]
    ]
  },
  {
    id: "polite",
    title: "礼貌用语",
    words: [
      ["appreciate", "感谢", "I appreciate your help."],
      ["noted", "知道了", "Noted, I’ll update it."],
      ["sure", "没问题", "Sure, I can do that."],
      ["happy to", "乐意", "I’m happy to help."],
      ["would", "是否可以", "Would you have time tomorrow?"],
      ["could", "能否", "Could you send the file?"],
      ["thanks", "谢谢", "Thanks for the update."],
      ["sorry for", "因为…抱歉", "Sorry for the late reply."],
      ["please advise", "请告知", "Please advise on the next step."],
      ["circle back", "回头再谈", "I’ll circle back this afternoon."],
      ["loop in", "拉进沟通", "Let’s loop in my manager."],
      ["no problem", "没问题", "No problem, I’ll send it."]
    ]
  },
  {
    id: "systems",
    title: "账号与角色",
    words: [
      ["account", "账号", "I don’t have an account yet."],
      ["login", "登录", "I can’t log in to the system."],
      ["permission", "权限", "I need permission to edit this."],
      ["ticket", "工单", "I submitted a ticket."],
      ["VPN", "公司网络", "I need VPN access."],
      ["setup", "开通设置", "IT is still doing the setup."],
      ["lead", "负责人", "She is the project lead."],
      ["director", "总监", "The director will join the call."],
      ["mentor", "导师", "My mentor can help with this."],
      ["buddy", "入职搭档", "My buddy showed me the process."],
      ["report to", "向…汇报", "I report to Alex."],
      ["onboarding", "入职适应", "Onboarding is in the first week."],
      ["helpdesk", "IT 服务台", "I sent a ticket to the helpdesk."],
      ["2FA", "二次验证", "I need help with 2FA."]
    ]
  },
  {
    id: "office",
    title: "办公日程",
    words: [
      ["calendar", "日历", "I put it on my calendar."],
      ["book", "预订", "Can we book a room?"],
      ["conflict", "冲突", "I have a calendar conflict."],
      ["accept", "接受邀请", "I will accept the invite."],
      ["decline", "拒绝邀请", "I have to decline this one."],
      ["tentative", "暂定", "I marked it as tentative."],
      ["overtime", "加班", "I cannot do overtime tonight."],
      ["leave", "请假", "I will take leave on Monday."],
      ["sick leave", "病假", "I’m on sick leave today."],
      ["holiday", "假日", "Friday is a public holiday."],
      ["core hours", "核心在岗时段", "Our core hours are 10 to 4."],
      ["coverage", "顶班／覆盖", "Who can provide coverage?"]
    ]
  },
  {
    id: "docs",
    title: "文档与交接",
    words: [
      ["template", "模板", "Please use this template."],
      ["checklist", "清单", "I made a short checklist."],
      ["handover", "交接", "I’ll send the handover notes."],
      ["playbook", "操作手册", "The playbook is in the folder."],
      ["wiki", "内部文档", "I posted it on the wiki."],
      ["final", "最终版", "This is the final version."],
      ["revise", "修改", "I’ll revise it tonight."],
      ["approve", "批准", "Could you approve this?"],
      ["sign-off", "签字确认", "We need sign-off by Friday."],
      ["highlight", "标出重点", "I highlighted the changes."],
      ["track", "跟踪", "Let’s track the open items."],
      ["archive", "归档", "Please archive the old file."]
    ]
  },
  {
    id: "money",
    title: "报销与差旅",
    words: [
      ["expense", "费用／报销", "I submitted my expenses."],
      ["reimburse", "报销付款", "Can you reimburse this?"],
      ["receipt", "收据", "I kept the receipt."],
      ["invoice", "账单", "Please check the invoice."],
      ["budget", "预算", "Is this in the budget?"],
      ["claim", "提交报销", "I’ll claim it this week."],
      ["travel", "出差", "I have travel next week."],
      ["policy", "政策", "Please follow the travel policy."],
      ["finance", "财务", "I’ll ask finance about this."],
      ["approval", "审批", "It is waiting for approval."],
      ["book a flight", "订机票", "Should I book a flight?"],
      ["per diem", "出差补贴", "What is the per diem?"]
    ]
  },
  {
    id: "talk",
    title: "会议口头禅",
    words: [
      ["high-level", "先讲大图", "I’ll give a high-level update."],
      ["deep dive", "深入讨论", "We can deep dive later."],
      ["touch base", "对一下", "Can we touch base tomorrow?"],
      ["flag", "提出提醒", "I want to flag one risk."],
      ["push back", "礼貌反对", "I need to push back on this."],
      ["buy-in", "认同支持", "We still need their buy-in."],
      ["park it", "先放下", "Let’s park it for now."],
      ["actionable", "可执行的", "Please make it actionable."],
      ["visibility", "可见度", "We need more visibility."],
      ["dependency", "依赖项", "There is one dependency."],
      ["workaround", "权宜之计", "This is only a workaround."],
      ["ownership", "负责到底", "Who has ownership of this?"]
    ]
  },
  {
    id: "moreabbr",
    title: "缩写再补",
    words: [
      ["SME", "业务专家", "Let’s ask the SME."],
      ["DRI", "直接负责人", "Who is the DRI?"],
      ["UAT", "用户验收测试", "UAT starts on Monday."],
      ["QA", "质量检查", "QA found one issue."],
      ["RCA", "根因分析", "I’ll write a short RCA."],
      ["TIA", "先谢谢", "Please review this, TIA."],
      ["SSO", "单点登录", "I can’t use SSO today."],
      ["MFA", "多重验证", "MFA is not working."],
      ["FAQ", "常见问题", "The answer is in the FAQ."],
      ["EOW", "本周末前", "I can finish it by EOW."],
      ["PFA", "附件见", "PFA the meeting notes."],
      ["Q1", "第一季度", "This is a Q1 target."]
    ]
  },
  {
    id: "jobs-jd",
    title: "招聘信息",
    words: [
      ["job posting", "招聘启事", "I found this job posting today."],
      ["JD", "职位描述", "Please read the JD first."],
      ["opening", "空缺职位", "There is one opening in sales."],
      ["apply", "投递申请", "I will apply for this role."],
      ["application", "申请材料", "I submitted my application."],
      ["candidate", "候选人", "They will meet three candidates."],
      ["hiring manager", "用人经理", "The hiring manager will join."],
      ["recruiter", "招聘专员", "The recruiter sent me the JD."],
      ["resume", "简历", "Please update your resume."],
      ["CV", "简历（英式）", "Please send your CV by Friday."],
      ["cover letter", "求职信", "A cover letter is optional."],
      ["requirement", "任职要求", "The JD lists the key requirements."],
      ["must-have", "硬性要求", "Excel is a must-have for this role."],
      ["nice-to-have", "加分项", "Chinese is nice-to-have."],
      ["screening", "初筛", "The screening call is on Monday."],
      ["shortlist", "进入复试名单", "I was shortlisted for round two."],
      ["interview", "面试", "I have an interview tomorrow."],
      ["offer", "录用通知", "I received an offer today."]
    ]
  },
  {
    id: "jobs-level",
    title: "职级头衔",
    words: [
      ["intern", "实习生", "This is an intern role."],
      ["graduate", "应届生", "This is a graduate program."],
      ["trainee", "管培生／见习", "I’m applying for a trainee role."],
      ["junior", "初级", "This is a junior position."],
      ["associate", "专员级", "She is an associate in finance."],
      ["specialist", "专员", "I’m applying for a specialist role."],
      ["coordinator", "协调员", "The coordinator will book the room."],
      ["analyst", "分析师", "He is a business analyst."],
      ["consultant", "顾问", "She works as a consultant."],
      ["senior", "资深", "This is a senior position."],
      ["principal", "资深专家", "He is a principal engineer."],
      ["IC", "个人贡献者", "This role is an IC, not a manager."],
      ["people manager", "带人经理", "She is a people manager."],
      ["senior manager", "高级经理", "Please ask the senior manager."],
      ["VP", "副总裁", "The VP will join the interview."],
      ["Head of", "某部门负责人", "She is Head of Sales."],
      ["C-level", "高管层", "C-level leaders will join."],
      ["grade", "职级", "What’s the grade of this role?"]
    ]
  },
  {
    id: "jobs-admin",
    title: "行政人事财务",
    words: [
      ["administrative assistant", "行政助理", "I’m applying for administrative assistant."],
      ["executive assistant", "高管助理", "The executive assistant supports the director."],
      ["secretary", "秘书", "This is a secretary intern role."],
      ["receptionist", "前台", "The receptionist will meet you first."],
      ["office manager", "办公室主管", "Please ask the office manager."],
      ["HR assistant", "人事助理", "The HR assistant handles onboarding."],
      ["HRBP", "人力资源业务伙伴", "Our HRBP can explain the policy."],
      ["talent acquisition", "人才招聘", "Talent acquisition posted this job."],
      ["campus recruiter", "校园招聘", "The campus recruiter will visit our school."],
      ["compensation", "薪酬福利", "Please ask HR about compensation."],
      ["payroll", "发薪", "Payroll is handled by finance."],
      ["accountant", "会计", "We are hiring an accountant."],
      ["financial analyst", "财务分析师", "The financial analyst checks the numbers."],
      ["accounts payable", "应付账款", "She works in accounts payable."],
      ["auditor", "审计", "The auditor will review the files."],
      ["legal counsel", "法务顾问", "Please loop in legal counsel."],
      ["compliance", "合规", "This needs a compliance check."],
      ["controller", "财务主管", "The controller will approve this."]
    ]
  },
  {
    id: "jobs-sales",
    title: "销售市场客服",
    words: [
      ["sales representative", "销售代表", "We are hiring a sales representative."],
      ["account executive", "客户经理", "She is an account executive."],
      ["account manager", "客户经理／客户管理", "I’m the account manager for this client."],
      ["key account", "大客户", "He manages key accounts."],
      ["business development", "商务拓展", "This is a business development role."],
      ["sales coordinator", "销售协调", "The sales coordinator prepares quotes."],
      ["sales support", "销售支持", "I applied for sales support."],
      ["inside sales", "内勤销售", "This is an inside sales role."],
      ["pre-sales", "售前", "Pre-sales will join the customer call."],
      ["customer success", "客户成功", "Customer success follows after the deal."],
      ["customer service", "客户服务", "Please call customer service."],
      ["marketing specialist", "市场专员", "I’m applying for marketing specialist."],
      ["brand manager", "品牌经理", "The brand manager owns this campaign."],
      ["digital marketing", "数字营销", "This role focuses on digital marketing."],
      ["content specialist", "内容专员", "The content specialist writes the posts."],
      ["PR", "公共关系", "PR will review the announcement."]
    ]
  },
  {
    id: "jobs-ops",
    title: "运营项目供应链",
    words: [
      ["operations assistant", "运营助理", "I’m applying for operations assistant."],
      ["operations specialist", "运营专员", "This is an operations specialist role."],
      ["project coordinator", "项目协调", "The project coordinator tracks action items."],
      ["project manager", "项目经理", "The project manager owns the timeline."],
      ["program manager", "项目群经理", "She is the program manager."],
      ["business operations", "业务运营", "This role sits in business operations."],
      ["process specialist", "流程专员", "He is a process specialist."],
      ["supply chain", "供应链", "We have an opening in supply chain."],
      ["procurement", "采购", "Procurement will review the quote."],
      ["buyer", "采购员", "The buyer will place the order."],
      ["planner", "计划员", "The planner checks the demand."],
      ["logistics coordinator", "物流协调", "The logistics coordinator books the shipment."],
      ["warehouse", "仓库", "This role is based in the warehouse."],
      ["quality engineer", "质量工程师", "QA found one issue. Ask the quality engineer."],
      ["HSE", "健康安全环境", "Please follow the HSE rules."],
      ["EHS", "环境健康安全", "EHS training is on Monday."]
    ]
  },
  {
    id: "jobs-tech",
    title: "技术产品数据",
    words: [
      ["software engineer", "软件工程师", "We are hiring a software engineer."],
      ["developer", "开发工程师", "The developer will fix this bug."],
      ["IT support", "IT 支持", "Please ask IT support for access."],
      ["system administrator", "系统管理员", "The system administrator reset my password."],
      ["product manager", "产品经理", "The product manager wrote the requirement."],
      ["product owner", "产品负责人", "The product owner will join the standup."],
      ["UX designer", "用户体验设计师", "The UX designer will review the flow."],
      ["UI designer", "界面设计师", "Please send it to the UI designer."],
      ["data analyst", "数据分析师", "The data analyst is checking the numbers."],
      ["data scientist", "数据科学家", "This role needs a data scientist."],
      ["business analyst", "业务分析师", "The business analyst will map the process."],
      ["QA engineer", "测试工程师", "The QA engineer found one bug."],
      ["DevOps", "运维开发", "DevOps will help with the release."],
      ["helpdesk", "服务台", "Please open a ticket with the helpdesk."],
      ["implementation consultant", "实施顾问", "This is an implementation consultant role."],
      ["solution architect", "解决方案架构师", "The solution architect will join the call."]
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
  if (typeof activity === "function") activity("单词", `${value === "known" ? "掌握" : "待复习"} · ${en}`);
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
        <button class="btn ghost" type="button" data-speak="${encodeURIComponent(w.en)}" onclick="speakFromButton(this)">▶ 听单词</button>
        <button class="btn ghost" type="button" data-speak="${encodeURIComponent(w.ex)}" onclick="speakFromButton(this)">▶ 听例句</button>
        <button class="btn ghost" type="button" data-speak="${encodeURIComponent(w.en)}" onclick="markVocab(decodeURIComponent(this.dataset.speak), 'again')">还不熟</button>
        <button class="btn olive" type="button" data-speak="${encodeURIComponent(w.en)}" onclick="markVocab(decodeURIComponent(this.dataset.speak), 'known')">我会了</button>
      </div>
    </article>`;
  }).join("") : '<p>没有找到。换个主题，或搜“邮件”“截止”“会议”。</p>';

  status.textContent = `共 ${total} 个词 · 本页 ${items.length} 个 · 已掌握 ${known} · 待复习 ${again}`;
}

document.getElementById("vocabSearch")?.addEventListener("input", renderVocab);
renderVocab();
