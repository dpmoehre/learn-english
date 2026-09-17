const LESSONS = [
 {title:'第一天，认识同事', context:'你刚加入团队，经理请你介绍自己。说清名字、角色和期待即可，不必背一段复杂演讲。还没确定职责时，不要编造工作经历。', rule:'入职（onboarding）通常包括账号、设备和团队介绍。可以向 HR 或经理确认安排、向谁汇报，以及遇到问题找谁。', lines:[['Hi, I’m Lin.','你好，我叫 Lin。','I’m = I am，我是；把 Lin 换成你的名字。'],['I’m new to the team.','我是团队新来的同事。','new to = 刚加入／刚接触'],['I’m happy to be here.','很高兴加入这里。','happy = 高兴的']], question:'经理问你是否会使用内部系统，但你从没用过。你会怎么做？', options:['先说会，之后再想办法。','说明自己第一次用，请同事演示。','不回答，等别人替你做。'],answer:1, why:'诚实说明经验，再提出具体求助，更容易得到帮助。可以说：Could you show me how to use it?（能教我怎么用吗？）', task:'把 Lin 换成你的名字，把三句连起来说。', model:'Hi, I’m Lin. I’m new to the team. I’m happy to be here.'},
 {title:'接任务，先问清楚', context:'经理说“帮忙做一份报告”。先确认产出、截止时间和优先级，避免忙了半天却做错方向。',rule:'直属经理（manager）通常帮你确认任务优先级。收到两项冲突的任务时，说明冲突并请求排序，不要默默承诺全部完成。',lines:[['What should I include?','需要包含哪些内容？','include = 包含'],['When do you need it?','你什么时候需要？','when = 什么时候'],['Which task should I do first?','我应该先做哪项任务？','first = 首先']],question:'两位同事都让你今天交材料，你时间不够，怎么办？',options:['告诉经理两项任务和所需时间，请他确认优先级。','两边都答应，做不完再说。','谁催得凶就先做谁的。'],answer:0,why:'把资源和时间冲突说清楚，让有权决定的人帮助排优先级。',task:'假设要做一份报告，练习问内容和截止时间。',model:'What should I include? When do you need it?'},
 {title:'没听懂，也能开会',context:'线上会议里，同事说得太快。听不懂时及时请求重复，比假装听懂后做错更好。',rule:'agenda 是会议议程；minutes 是会议纪要。会前看议程，会中记下与你有关的行动、负责人和时间，会后确认。',lines:[['Could you say that again, please?','可以请你再说一遍吗？','again = 再一次'],['Could you speak more slowly?','你可以说慢一点吗？','slowly = 慢慢地'],['Do you mean this Friday?','你是说这周五吗？','Do you mean… = 你的意思是……吗？']],question:'你听到 Friday，但没听清是哪周，你应该说？',options:['Yes, yes.','Do you mean this Friday?','不问，按自己理解做。'],answer:1,why:'复述具体信息能消除歧义。跨时区会议还要确认日期、时间和时区。',task:'想象对方说太快：先请他放慢，再确认截止日期。',model:'Could you speak more slowly? Do you mean this Friday?'},
 {title:'汇报进度，不只说 OK',context:'经理问“进展如何？”用三句话说已完成、正在做、下一步。有卡点就说明需要什么支持。',rule:'status update 是进度更新；blocker 是阻碍任务继续的卡点。尽早说明风险，并给出下一步，比只在截止时说来不及更有用。',lines:[['I finished the first draft.','我完成了初稿。','finished = 已完成；draft = 草稿'],['I’m checking the numbers.','我正在核对数字。','I’m …ing = 我正在……'],['I need help with the data.','我需要数据方面的帮助。','need help with = 在某方面需要帮助']],question:'报告等别人提供数据才能继续，你应该怎么汇报？',options:['Everything is fine.','不说，等数据到了再做。','说明已完成部分、缺什么数据，以及需要谁帮助。'],answer:2,why:'具体说明卡点，别人才能帮忙。比如：I need help with the data. 不要把“求助”理解成能力差。',task:'假设初稿已完成，但还缺数据，做一次两句进度汇报。',model:'I finished the first draft. I need help with the data.'},
 {title:'写一封清楚的邮件',context:'你需要 Alex 帮忙审阅报告。正文说明事项、请求和截止日期，发送前检查收件人、链接权限和附件。',rule:'To 是主要收件人；CC 是抄送给需要知情的人；FYI 表示供参考。具体哪些人需要抄送，以团队习惯和事项需要为准。',lines:[['Could you review this report?','你能审阅这份报告吗？','review = 审阅'],['Please send your feedback by Friday.','请在周五前发给我反馈。','feedback = 反馈；by = 不晚于'],['Thank you for your help.','谢谢你的帮助。','简单感谢即可']],question:'邮件说“附件见报告”，点击发送前最需要检查什么？',options:['把所有同事都抄送一遍。','确认附件已添加、版本正确、收件人正确。','多加几个感叹号。'],answer:1,why:'检查附件、收件人和版本可以减少返工。涉及共享链接时，还要核对访问权限。',task:'先说出请求，再去下方邮件工具用英文填写一封草稿。',model:'Hi Alex, could you review this report? Please send your feedback by Friday. Thank you for your help.'},
 {title:'来不及，提前沟通',context:'你发现周二交不出报告。尽早说明情况、提出新时间，并和对方确认；不要等到最后一刻消失。',rule:'deadline 是截止时间，ETA 是预计完成或到达时间。预计时间不是保证；不确定时说明原因和何时再更新。',lines:[['I need one more day.','我还需要一天。','one more = 再多一个'],['Would Wednesday work?','周三可以吗？','work 在这里是“合适／可行”'],['I can send the draft today.','我今天可以发草稿。','can = 可以；提供可行的中间产出']],question:'已经判断无法按时完成，较合适的做法是？',options:['提前解释影响，提议新时间，并确认对方是否接受。','到期后等对方来问。','不核实就承诺今晚一定完成。'],answer:0,why:'新的时间需要双方协调，提出日期不等于对方已经同意。',task:'把新日期改成你想练习的日期，再提出一个今天能做的动作。',model:'I need one more day. Would Wednesday work? I can send the draft today.'},
 {title:'反馈与一对一沟通',context:'经理约你进行 1:1（一对一沟通）。可以准备进度、困难和想请教的问题，也可以确认对工作的期待。',rule:'feedback 是反馈；1:1 是两人定期或临时的沟通。反馈最好围绕具体行为和结果。各团队形式不同，先向经理确认目的和频率。',lines:[['What can I improve?','我可以改进什么？','improve = 改进'],['Could you give me an example?','你能给我一个例子吗？','example = 例子'],['I’ll try that next time.','下次我会试试这个方法。','next time = 下次']],question:'经理说报告“不够清楚”，你可以怎么接？',options:['认为自己不适合工作。','马上反驳，不听原因。','请他给一个例子，并确认修改方向。'],answer:2,why:'把笼统评价转成具体改进动作，才知道下一次怎么做。',task:'模拟收到反馈：问一个具体例子，再说出你的下一步。',model:'Could you give me an example? I’ll try that next time.'}
];
const WORDS = [
 ['HR','人力资源','入职、福利、请假流程等问题，可向 HR 确认。'],
 ['Manager','经理／主管','帮助确认职责、目标和优先级。'],
 ['Onboarding','入职适应流程','可能包含账号开通、培训和认识团队。'],
 ['Buddy','入职搭档','有的团队会安排一位同事带你熟悉流程，不确定时可以先问 buddy。'],
 ['Probation','试用期','入职后一段考察期。时长和评估方式以公司政策为准。'],
 ['Deadline / Due date','截止时间','确认具体日期、时间；跨地区协作时确认时区。'],
 ['EOD / COB','下班前','End of day / close of business。不同时区的“下班前”不一样，最好写成具体时间。'],
 ['ETA','预计完成时间','Estimated time of arrival。说预计时间时，最好同时说明依据和风险。'],
 ['1:1','一对一沟通','可以讨论进度、困难、反馈和发展。'],
 ['Skip-level','越级一对一','和经理的经理沟通。目的因团队而异，可先问自己的经理是否常见。'],
 ['Agenda','会议议程','会前要讨论的主题，帮助你提前准备。'],
 ['Minutes / Action items','会议纪要／行动项','记下决定，以及谁在什么时间前做什么。'],
 ['Owner','负责人','这件事由谁推进、谁给出结果。不确定时直接问：Who is the owner?'],
 ['Stakeholder','相关方','会受影响、或需要知情/拍板的人。更新进度时要想到他们。'],
 ['Align / Alignment','对齐','先确认目标、范围和优先级一致，再分头做，减少返工。'],
 ['Sync / Stand-up','同步会／站会','短会用来对齐进度和卡点，通常每人说已完成、正在做、需要帮助。'],
 ['Kickoff','项目启动会','项目开始时对齐目标、范围、角色和下一步。'],
 ['Scope','范围','这次做和不做的边界。超出范围要先对齐，不要默默全接。'],
 ['Deliverable','交付物','最终要交出去的东西，比如报告、幻灯片或数据表。'],
 ['Blocker','卡点','挡住进度的问题。汇报时说明卡点和你需要谁支持。'],
 ['Bandwidth','可用精力／档期','I have limited bandwidth 表示这周已经很满，需要重新排优先级。'],
 ['Circle back','回头再谈','现在不拍板，稍后带着信息再继续。记得真的跟进。'],
 ['Loop in','拉进沟通','把相关的人加入邮件、群或会议，避免信息不同步。'],
 ['Take the lead','牵头负责','由你协调推进，不代表一个人做完全部工作。'],
 ['Escalate','升级处理','自己无法推进时，按流程找更合适的人或经理帮助，先说明已做的尝试。'],
 ['FYI','供参考','For your information；通常用于告知，仍要看正文是否有请求。'],
 ['ASAP','尽快','As soon as possible；不够具体时，主动确认实际截止时间。'],
 ['TBD','待定','To be determined。日期或人选还没定，要问何时能确定。'],
 ['WIP','进行中','Work in progress。还不是终稿，不要当成最终版本外发。'],
 ['OOO','不在办公室','Out of office。请假或外出时设置自动回复，并写明回来时间和备用联系人。'],
 ['CC / BCC','抄送／密送','CC 让相关人知情；BCC 密送，其他收件人通常看不到。'],
 ['POC','对接人','Point of contact。出问题或要对齐时，先找这个人。'],
 ['SLA','服务时限','Service level agreement。回复或处理的约定时间，多见于支持和供应商协作。'],
 ['SOP','标准流程','Standard operating procedure。按公司已有步骤做，不确定先找文档或同事。'],
 ['NDA','保密协议','Non-disclosure agreement。对外分享信息前，确认是否受保密限制。'],
 ['PTO','带薪休假','Paid time off；是否适用及申请流程以所在公司政策为准。'],
 ['WFH / Hybrid','在家办公／混合办公','WFH 是在家办公；hybrid 是部分在公司、部分远程。先问团队出勤习惯。'],
 ['Async','异步沟通','不要求立刻开会，用文档或消息把事情写清楚，适合跨时区。'],
 ['KPI','关键绩效指标','用来衡量工作目标，入职后可请经理解释团队的具体指标。'],
 ['OKR','目标与关键结果','Objectives and Key Results。先问清你的目标和如何衡量，不要只背缩写。'],
 ['FTE / Headcount','全职编制／人数','FTE 是全职人力；headcount 常指团队编制。招聘和预算时会听到。'],
 ['Vendor','供应商／外包方','外部合作公司。对接前确认谁是内部对接人，以及信息能否外发。'],
 ['All-hands','全员会','公司或部门面向大家的会，通常同步业务进展和重要变化。'],
 ['Town hall','全员问答会','更偏问答。是否必须参加、会不会录像，以团队通知为准。'],
 ['Offsite','外出集中开会','团队离开日常办公室开几天会对齐。先问是否必须到场、费用怎么报。'],
 ['Cadence','固定节奏','weekly cadence 表示每周固定同步，改期要提前说。'],
 ['Recurring meeting','周期会议','日历里重复出现的会。不去也要回复，或请人代听并补笔记。'],
 ['Parking lot','会后另议','先记下来、会后处理，避免把会开飞。'],
 ['Touch base','简单对一下','短同步，不是正式汇报。'],
 ['Flag','提出风险或提醒','I want to flag a risk 是提前说隐患，不是指责。'],
 ['Push back','有礼貌地反对','说明原因和替代方案，不要只说 no。'],
 ['Buy-in','认同／支持','关键人还没同意时，先对齐再开工。'],
 ['Offline','会下单独聊','Let’s take this offline 表示这个细节不占用全员时间。'],
 ['Deep dive','深入讨论','和高 level 相对，会花更长时间看细节。'],
 ['High-level','先讲大图','先说结论和影响，细节放后面或附件。'],
 ['Actionable','可执行的','反馈要能变成下一步，而不是只说“不好”。'],
 ['Dependency','依赖项','你要等别人完成才能继续。汇报时说清等谁、等到什么时候。'],
 ['Workaround','权宜之计','先绕过问题，再修根因。要说明这不是最终方案。'],
 ['Root cause / RCA','根因／根因分析','不只修表面。RCA 是把原因和下一步写清楚。'],
 ['Sign-off','签字确认','对方确认可以按此版本推进。没确认不要当成已批准。'],
 ['Handover / Handoff','交接','换人或请假前，把状态、文件、风险和下一步写清楚。'],
 ['Playbook','操作手册','团队做事的标准步骤，比只靠口头传授更稳。'],
 ['Template','模板','先套模板再改，少从空白页开始。'],
 ['Expense / Reimburse','报销','先看差旅和报销政策，留好发票和事由。'],
 ['Invoice','发票／账单','对外收款或付款凭证。不要和个人报销单混用。'],
 ['Budget','预算','可能超预算时先对齐，不要先花再报。'],
 ['Travel request','出差申请','出发前走申请，不要先订再补。'],
 ['Notice period','离职通知期','离职需提前多久，以合同和当地政策为准。'],
 ['Contractor','合同工／外包同事','合作方式与全职不同。权限和资料外发要先问清楚。'],
 ['Performance review','绩效评估','回顾目标、结果和下一步。周期和表格因公司而异。'],
 ['DRI','直接负责人','Directly Responsible Individual。一件事最终由谁负责。'],
 ['SME','业务专家','Subject matter expert。细节问题找对口的人，不要猜。'],
 ['MVP','最小可用版本','先交付能用的最小范围，再迭代。'],
 ['UAT','用户验收测试','上线前请使用方按真实场景试一遍。'],
 ['QA','质量检查','发布前找问题。你可能要配合复现和验证。'],
 ['PFA','附件见','Please find attached。正文仍要写清附件是什么、请对方做什么。'],
 ['EOW','本周末前','End of week。不同地区周末起点不同，最好写成日期。'],
 ['FAQ','常见问题','先搜 FAQ 或文档，再问已经写过的问题。'],
 ['2FA / MFA / SSO','二次验证／单点登录','登录保护。丢手机或电脑要立刻找 IT。'],
 ['Helpdesk','IT 服务台','账号、电脑、权限问题通常先提单，不要只在群里@一次。'],
 ['Core hours','核心在岗时段','混合办公时，这段时间要能开会或及时回复。'],
 ['Calendar conflict','日程冲突','两个会重叠时，说明冲突，并请改期、录屏或请人代听。'],
 ['JD / Job description','职位描述','招聘启事里对职责和任职要求的说明。投简历前先对照自己是否大致符合，不必每条都完美。'],
 ['Job title','职位名称','如 Sales Coordinator、HR Intern。同一名称在不同公司职责可能差很多，要以 JD 为准。'],
 ['Hiring manager','用人经理','这个岗位的直属上司，通常参加面试并决定录用。'],
 ['Recruiter / TA','招聘／人才获取','HR 里做招聘的同事。TA 是 Talent Acquisition。投递后对方常先做初筛。'],
 ['Reporting line','汇报线','你向谁汇报。JD 里常见 Report to the Sales Manager。'],
 ['Direct report','下属','向你汇报的人。带人经理才有 direct reports。'],
 ['IC / Individual contributor','个人贡献者','自己做事、不带团队。和 people manager（带人经理）相对。'],
 ['Grade / Band / Level','职级','公司内部级别。Junior / Senior 只是大致说法，具体以职级体系为准。'],
 ['Must-have / Nice-to-have','硬性要求／加分项','Must-have 通常要具备；nice-to-have 没有也可以投。'],
 ['Screening','初筛','电话或短视频，确认基本条件和沟通。通过后才进正式面试。'],
 ['Shortlist','进入复试名单','从候选人里筛出进入下一轮的人。'],
 ['Offer / Offer letter','录用通知','书面录用条件，常含职位、薪资、入职日。没收到 offer 前不要默认已被录用。'],
 ['Background check','背景调查','入职前核验学历、工作和身份。按通知准备材料即可。']
];
let lessonIndex = 0, lessonPassed = false;
let completedLessons = [];
try { const value = JSON.parse(localStorage.getItem('beginner-lessons') || '[]'); if(Array.isArray(value)) completedLessons = value.filter(n => Number.isInteger(n) && n >= 0 && n < LESSONS.length); } catch {}
function lessonTabs() {
 document.getElementById('lessonTabs').innerHTML = LESSONS.map((l,i)=>`<button class="btn ghost lesson-tab" aria-pressed="${i===lessonIndex}" onclick="showLesson(${i})">${completedLessons.includes(i)?'✓ ':''}第 ${i+1} 天</button>`).join('');
}
function showLesson(i) {
 lessonIndex=i; lessonPassed=false; lessonTabs(); const l=LESSONS[i];
 document.getElementById('lessonPanel').innerHTML=`<span class="pill">第 ${i+1} / 7 课 · 入门</span><h3>${l.title}</h3><div class="lesson-intro"><strong>遇到这件事</strong><p>${l.context}</p><strong>职场小知识</strong><p>${l.rule}</p></div><h3>听一句，跟读一句</h3><label for="voiceRate">朗读速度</label><select id="voiceRate"><option value="0.7">慢速 · 适合跟读</option><option value="0.9">自然速度</option></select>${typeof speakEngineButtons==="function"?speakEngineButtons():""}<p class="muted">平板请先用「系统朗读」。没声音再点「网络发音」。手机请调大音量。</p>${l.lines.map((line,j)=>`<div class="lesson-line"><p class="english" lang="en">${line[0]}</p><p>${line[1]}</p><p class="muted">${line[2]}</p><button class="btn ghost" onclick="speakEnglish(LESSONS[lessonIndex].lines[${j}][0])">▶ 听第 ${j+1} 句</button></div>`).join('')}<h3>试试看，你会怎么做？</h3><p>${l.question}</p>${l.options.map((o,j)=>`<button class="opt lesson-option" onclick="answerLesson(${j})">${o}</button>`).join('')}<p id="lessonFeedback" role="status"></p><h3>轮到你开口</h3><p>${l.task}</p><details><summary>卡住了？查看参考表达</summary><p class="english" lang="en">${l.model}</p><button class="btn ghost" onclick="speakEnglish(LESSONS[lessonIndex].model)">▶ 听完整示范</button></details><label for="myPractice">也可以先写下来（可选，不保存）</label><textarea id="myPractice" placeholder="先用上面的短句，把名字、日期或任务换成自己的。"></textarea><p class="muted">自查：意思清楚了吗？名字或日期换好了吗？试着不看示范再说一遍。本练习不录音，也不会自动评价发音。</p><button id="finishLesson" class="btn olive" onclick="finishLesson()" disabled>先答对情景题，再完成跟读</button>`;
 document.getElementById('lessonStatus').textContent=`已完成 ${new Set(completedLessons).size} / 7 课。可以随时复习。`;
}
function answerLesson(answer) {
 const l=LESSONS[lessonIndex]; lessonPassed=answer===l.answer;
 const f=document.getElementById('lessonFeedback'); f.className='feedback'; f.textContent=(lessonPassed?'答对了。':'再想一想。')+l.why;
 document.querySelectorAll('.lesson-option').forEach((b,j)=>{ b.classList.toggle('good',j===answer&&lessonPassed); b.classList.toggle('bad',j===answer&&!lessonPassed); });
 const button=document.getElementById('finishLesson'); button.disabled=!lessonPassed; button.textContent=lessonPassed?'我已完成跟读，记下这一课':'先答对情景题，再完成跟读';
}
function finishLesson() {
 if(!lessonPassed)return;
 if(!completedLessons.includes(lessonIndex))completedLessons.push(lessonIndex);
 let saved=true; try{localStorage.setItem('beginner-lessons',JSON.stringify(completedLessons));}catch{saved=false;}
 lessonTabs(); document.getElementById('lessonStatus').textContent=`完成了！已完成 ${completedLessons.length} / 7 课。${saved?'进度已保存在本机。':'浏览器无法保存，进度仅在本次打开期间保留。'}明天继续，也可以选下一课。`;
}
function renderWords(){
 const q=document.getElementById('wordSearch').value.trim().toLowerCase();
 const words=WORDS.filter(w=>w.join(' ').toLowerCase().includes(q));
 const bar=typeof speakEngineButtons==="function"?`<div class="toolbar" style="grid-column:1/-1">${speakEngineButtons()}</div>`:"";
 const cards=words.length?words.map(w=>`<article class="card"><h3>${w[0]}</h3><strong>${w[1]}</strong><p class="muted">${w[2]}</p><button class="btn ghost" type="button" onclick="speakEnglish(${JSON.stringify(w[0])})">▶ 听词</button></article>`).join(""):'<p style="grid-column:1/-1">没有找到。试试“对齐”“请假”“远程”或“OKR”。</p>';
 document.getElementById('wordList').innerHTML=bar+cards;
}
document.getElementById('wordSearch').addEventListener('input',renderWords);
showLesson(0);renderWords();
