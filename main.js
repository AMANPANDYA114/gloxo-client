// const IMG=id=>`https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=900`;
// const $=id=>document.getElementById(id);
// const P=(i,t,s,h,p,l,img,ch,c)=>({i,t,s,h,p,l,img,ch,c});

// /* ===== Page content ===== */
// const PAGES={
// research:P('🔬','Research Solutions','Quantitative data collection through offline, CATI and online methods, plus processing and analysis.','Quantitative Research Solutions','We design and run structured studies that produce statistically reliable data. Based on your objectives, we recommend and execute the method that gives precise, representative and measurable results.',['Representative sampling and quota control','Trained field and CATI teams','Multi-stage quality checks'],3184418,'Our Research Methods',[['🚶','Data Collection Offline','Face-to-face interviews by trained field teams across urban and rural locations.'],['📞','Data Collection CATI','Computer-assisted telephone interviews with supervised, monitored calling.'],['💻','Data Collection Online','Panel sampling for fast, cost-effective reach to your target audience.'],['🖥️','Data Collection CAWI','Survey programming, hosting and live tracking for web-based interviews.'],['📊','Data Processing & Analysis','Cleaning, coding, weighting and cross-tabulation delivered on schedule.'],['🔤','Verbatim Coding','Open-ended responses coded into clear, analysable categories.']]),
// consultancy:P('🧭','Research Consultancy','Insight-led advisory on brand, competition, new products and growth strategy.','Research-Led Business Consultancy','Our consultants combine market intelligence, analytical rigor and sector knowledge to help you understand challenges, evaluate opportunities and make confident decisions.',['Tailored research frameworks','Experienced sector specialists','Clear, actionable recommendations'],3184291,'Consultancy Services',[['🧠','Advisory & Consulting','Strategic guidance to navigate complexity, reduce risk and unlock growth.'],['🏷️','Brand Assessment','Measure brand positioning, awareness, messaging and perception.'],['📈','Competitive Benchmarking','Compare your performance against competitors on key KPIs.'],['💡','New Product Research','Concept testing, pricing studies and market-readiness checks.']]),
// tax:P('🧾','Tax Consulting','Planning, compliance and advisory support for individuals and businesses.','Practical Tax Consulting','Our tax team works closely with you to plan effectively, stay compliant and manage risk, with clear communication at every step.',['Individual and business support','Compliance-first approach','Transparent advice'],574071,'Tax Services',[['🗂️','Tax Planning','Forward-looking strategies built around your finances and goals.'],['✅','Tax Compliance','Timely filings and documentation to meet your obligations.'],['⚙️','Tax Optimization','Lawful strategies aimed at reducing liabilities.'],['🤝','Tax Representation','Support and representation before authorities.'],['🌐','International Tax Consulting','Guidance on cross-border tax matters.'],['🛡️','Tax Risk Management','Identify and manage tax exposures early.']]),
// analytics:P('📈','Analytic Solutions','From data visualization to advanced predictive analytics.','Turn Complex Data Into Clear Decisions','We transform raw datasets into clear intelligence by finding patterns, explaining causes and predicting outcomes.',['Interactive dashboards','Statistical modelling','Decision-ready reporting'],3184339,'Analytics Services',[['🔍','Data Exploration & Visualization','Interactive visuals that reveal patterns and trends.'],['📋','Descriptive Analytics','Understand what happened using structured historical data.'],['🧩','Diagnostic Analytics','Find the root causes and drivers behind performance.'],['🚀','Advanced Analytics','Predict future outcomes and optimize decisions.']]),
// software:P('💻','Software & Website Solutions','Custom software, web and mobile apps, cloud solutions, testing and support.','Software Built Around Your Business','Our developers deliver scalable, secure and user-friendly software that improves efficiency and supports growth.',['Custom-built to your needs','Scalable and secure','Ongoing support'],3184292,'Development Services',[['🛠️','Custom Software','Tailor-made software for your unique workflows.'],['📱','Mobile Applications','Engaging apps for Android and iOS.'],['🌍','Web Applications','Responsive, feature-rich web platforms.'],['☁️','Cloud & Enterprise Apps','Scalable applications for large organizations.'],['🧪','Testing & QA','Thorough testing for flawless performance.'],['🔧','Maintenance & Support','Monitoring, updates and troubleshooting.']]),
// marketing:P('📣','Online Marketing Solutions','SEO, social media, performance ads and content to grow your reach.','Digital Marketing That Delivers','We combine research insight with creative execution to reach the right audience and measure real results.',['Audience-led strategy','Transparent reporting','Multi-channel campaigns'],1181406,'Marketing Services',[['🔎','Search Engine Optimization','Improve visibility and organic traffic.'],['👍','Social Media Marketing','Build communities and brand engagement.'],['🎯','Performance Advertising','Targeted paid campaigns with clear ROI tracking.'],['✍️','Content Marketing','Useful content that attracts and retains customers.'],['✉️','Email Marketing','Campaigns that nurture and convert.'],['📊','Analytics & Reporting','Clear dashboards on what works.']]),
// b2b:P('🏢','Business to Business Panel','Verified professionals and decision-makers for B2B research.','Reach Professionals Who Decide','Our B2B panel includes professionals across industries, seniority levels and functions, recruited and verified for quality.',['Industry and designation-based targeting','Profile verification','Flexible sample sizes'],3184418,'Panel Highlights',[['👔','Senior Decision-Makers','Reach managers, directors and business owners.'],['🏭','Industry Coverage','Panelists across multiple sectors and company sizes.'],['✔️','Verified Profiles','Screening and validation of every respondent.'],['🎯','Targeted Recruitment','Custom recruitment for niche audiences.']]),
// b2c:P('🛍️','Business to Consumer Panel','Engaged consumers for brand, product and advertising research.','Understand Your Consumers','Our consumer panel spans age groups, regions and lifestyles so you can reach the audience that matters to your brand.',['Demographic and behavioral targeting','Quality-controlled responses','Fast turnaround'],3184291,'Panel Highlights',[['🌆','Wide Coverage','Metro, urban and semi-urban respondents.'],['👨‍👩‍👧','Demographic Targeting','Filter by age, gender, income and more.'],['💬','Engaged Members','Regular engagement keeps response quality high.'],['🔒','Quality Controls','Duplicate and fraud checks on every study.']]),
// healthcare:P('🩺','Healthcare Panel','Patients, caregivers and healthcare professionals for medical research.','Healthcare Research You Can Trust','Our healthcare panel supports studies among patients, caregivers and professionals with strict privacy and compliance standards.',['Condition-based targeting','Verified professionals','Privacy-first handling'],3184339,'Panel Highlights',[['🧑‍⚕️','Healthcare Professionals','Doctors, nurses, pharmacists and specialists.'],['❤️','Patients & Caregivers','Respondents by condition and treatment.'],['🎯','Precise Targeting','Reach niche medical audiences.'],['🛡️','Compliance & Privacy','Responsible handling of sensitive data.']]),
// 'esomar-37':P('✅','ESOMAR 37','Transparent answers to the ESOMAR 37 questions for sample buyers.','Transparency for Sample Buyers','The ESOMAR 37 Questions help buyers evaluate online sample providers. We aim to answer them openly so you can assess our panels with confidence.',['Clear panel documentation','Quality and validation processes','Responses available on request'],3184292,'What the Questions Cover',[['🏛️','Company Profile','Who we are and how we operate.'],['🧲','Sample Sources & Recruitment','How panelists join and are engaged.'],['🧪','Sampling & Data Quality','Project management and validation methods.'],['📜','Policies & Compliance','Privacy, consent and ethical standards.']]),
// about:P('','About Us','','A Market Research & Insights Company','Galxoopinion Research is a full-service market research partner delivering high-quality data collection, analytics and actionable insights to businesses across industries.',['Worldwide panel coverage','In-house recruitment and validation','Full research solutions from design to reporting','Responsive project support'],3184339,'What Drives Us',[['🎯','Accuracy','Rigorous methods and quality checks on every project.'],['🔍','Transparency','Clear processes and open communication.'],['🤝','Partnership','We work as an extension of your team.']]),
// industries:P('','Industries We Serve','','Experience Across Sectors','We tailor research programs to the audience, regulations and goals of each sector.',['Sector-specific sampling','Experienced project teams','Custom questionnaires'],3184418,'Sectors We Cover',[['🚗','Automotive','Ownership, usage and brand studies.'],['🏦','Banking & Finance','Customer experience and product research.'],['💊','Healthcare & Pharma','Patient and professional studies.'],['📱','IT & Telecom','Technology adoption and usage research.'],['🍽️','FMCG & Food','Consumer preference and tracking.'],['🎓','Education','Learner and institution research.'],['⚡','Energy & Utilities','Customer and stakeholder studies.'],['🛒','Retail & E-commerce','Shopper behavior and satisfaction.']]),
// services:P('','Our Services','','','','',0,'Everything Under One Roof',null)
// };
// const SV=['research','consultancy','tax','analytics','software','marketing'],PN=['b2b','b2c','healthcare','esomar-37'];

// /* ===== Card helpers ===== */
// const card=(c,h)=>{const t=h?`a href="${h}"`:'div',e=h?'a':'div';return `<${t} class="card"><div class="ic">${c[0]}</div><h3>${c[1]}</h3><p>${c[2]}</p>${h?'<span class="more">Learn more →</span>':''}</${e}>`};
// const gc=n=>n%3==0?'grid3':'grid4';
// const kcards=ks=>`<div class="${gc(ks.length)}" style="text-align:left">${ks.map(k=>card([PAGES[k].i,PAGES[k].t,PAGES[k].s],k+'.html')).join('')}</div>`;
// const grid=a=>`<div class="${gc(a.length)}" style="text-align:left">${a.map(c=>card(c)).join('')}</div>`;

// /* ===== Generic page render ===== */
// const key=document.body.dataset.page||'home',d=PAGES[key];
// if(d&&$('pg')){
//  document.title=d.t+' | Galxoopinion Research';
//  $('pg').innerHTML=`<section class="banner"><div class="wrap"><h1>${d.t}</h1><p class="crumb"><a href="index.html">Home</a> / ${d.t}</p></div></section>
//  ${d.h?`<section><div class="wrap split"><div><span class="tag">${d.t}</span><h2>${d.h}</h2><p class="sub">${d.p}</p><ul class="list">${d.l.map(x=>`<li>${x}</li>`).join('')}</ul><a href="contact.html" class="btn btn-g">Request a Proposal</a></div><img data-img="${d.img}" alt="${d.t}" loading="lazy"></div></section>`:''}
//  <section class="alt"><div class="wrap center"><span class="tag">${d.t}</span><h2>${d.ch}</h2>${d.c?grid(d.c):kcards(SV)}</div></section>`;
// }

// /* ===== Detailed panel pages (B2B, B2C, Healthcare) ===== */
// const QC=['Timezone Validation','Age Validation','Bot Protection','URL Protection','Browser Fingerprinting','Duplicate Detection','GEO-IP Validation','CAPTCHA Security Controls','Gate Survey Screening','Security Question Validation','Screening Question Filters','Open-End Quality Checks','Red Herring Question Controls','Pre-Screening Qualification Filters','Double Opt-In Authentication','Browser Language Check','TOR / Proxy Detection','Cookie Validation'];
// const PD={
// b2b:{h:'Business-to-Business (B2B) Panel',intro:['Galxoopinion Research gives you access to a robust B2B panel of <b>verified business professionals</b> across industries and seniority levels, including decision-makers, influencers and key stakeholders from diverse sectors.','We engage these professionals in structured market research studies, surveys and consultative research programs to deliver reliable, decision-ready intelligence.'],
// boxes:[
// ['Proprietary Recruitment Infrastructure','We recruit and manage our B2B panel through our own Galxoopinion Research panel platforms:',['Era2Opinion','EraRewards'],'These platforms support structured recruitment, profiling, engagement tracking and reward management, keeping panel operations scalable and compliant.'],
// ['Targeted Recruitment Strategy','We use targeted methods to attract professionals who match specific research objectives, including:',['Industry-based targeting','Role and designation-based filtering','Company size and function-specific outreach','Targeted email campaigns and digital advertising','Social media engagement strategies']],
// ['Structured Registration & Double Opt-In','Our free registration process includes:',['Double opt-in email verification','Age and demographic validation','Phone number authentication','CAPTCHA and security question validation'],'This protects authenticity and reduces fraudulent sign-ups.'],
// ['Detailed Profiling & Segmentation','After registering, members complete structured profiling questionnaires covering:',['Job title and function','Industry classification','Company size and structure','Decision-making authority','Professional responsibilities'],'This enables precise segmentation and targeted sampling.'],
// ['Quality Score & Ranking System','Each panelist receives a quality score and ranking based on:',['Profiling completeness','Participation consistency','Engagement behavior','Profile updates'],'Panelists within our quality thresholds are prioritized for research participation.'],
// ['Incentive & Reward Management','Members earn reward points for completing profiling segments and taking part in studies. Rewards are paid once a set threshold is reached, through options such as:',['Bank transfer','UPI (subject to country regulations)','Gift cards'],'This structured incentive system encourages active and reliable engagement.'],
// ['Verification & Validation Protocols','We apply multi-layer authentication to protect panel integrity, including:',['Company email validation','Phone verification','Public profile cross-referencing','External database validation','Behavioral pattern monitoring','Backend quality audit reviews'],'Our quality team manually reviews professional credentials and employment authenticity where applicable.']
// ]},
// b2c:{h:'Business-to-Consumer (B2C) Panel',intro:['Galxoopinion Research provides technology-enabled sampling and verified survey respondents, delivering reliable consumer insights to organizations that need to understand their customers.','Through our panel infrastructure and automated sampling tools, we give on-demand access to profiled respondents, enabling faster, data-driven decisions across product development, brand strategy, customer experience and market expansion.','Our consumer panel lets you target precisely across demographic, behavioral and geographic segments.'],
// boxes:[
// ['Recruitment Framework','Panel members are onboarded through our Galxoopinion Research panel platforms. Our secure registration process includes:',['Double opt-in email verification','Age and demographic validation','Phone number authentication','CAPTCHA and security question controls'],'This structured onboarding ensures authenticity and minimizes fraudulent participation.'],
// ['Advanced Profiling & Segmentation','After registration, members complete detailed profiling questionnaires capturing:',['Demographic attributes','Household and socio-economic indicators','Purchase behaviors','Lifestyle preferences','Product and service usage'],'This enables precise segmentation and targeted sampling for customized research objectives.'],
// ['Quality Score & Ranking System','Each panelist receives a dynamic quality score based on:',['Profile completion level','Participation history','Engagement consistency','Response quality'],'Higher-scoring panelists are prioritized for study invitations.'],
// ['Incentive & Reward Structure','Members earn reward points for completing profiling segments and validated survey participation. Rewards are redeemable once a minimum threshold is reached, through options such as:',['Bank transfer','UPI (subject to country regulations)','Gift cards']]
// ]},
// healthcare:{h:'Healthcare Panel Solutions',intro:['Galxoopinion Research offers a dedicated healthcare research infrastructure designed for complex pharmaceutical and healthcare studies, with customized, compliant and high-precision sampling.','We make sure the <b>right respondent is matched to the right study</b>, delivering high-quality, cost-efficient sampling within optimized timelines. Our approach relies on careful recruitment, transparent engagement practices and ethical compensation, driving stronger participation and more reliable data.'],
// secs:[
// ['Commitment to Respondent Integrity','We place strong emphasis on respondent quality and authenticity in paid medical research. To maintain it, we apply validation technologies and multi-layer quality checks so every healthcare professional and participant is verified, qualified and research-ready.'],
// ['Comprehensive Healthcare Audience Coverage','Our Healthcare Panel covers a broad spectrum of medical and pharmaceutical profiles, including healthcare professionals, key opinion leaders, patients and caregivers, with segmentation by:',['Specialty and therapeutic area','Department and institutional affiliation','Professional designation','Licensing credentials where applicable','Demographic and practice-based criteria'],'Our recruitment teams support precise validation across quantitative, qualitative and hybrid study methods.'],
// ['Audience Types We Reach','',['Doctors and specialists','Nurses and allied health professionals','Pharmacists','Patients by condition and treatment','Caregivers','Healthcare administrators and decision-makers']],
// ['Markets Covered','We run healthcare studies in India and select international markets, and can extend coverage to other regions on request through our network.'],
// ['Privacy & Compliance','We handle respondent data responsibly, obtain clear consent, and follow applicable privacy and research-ethics standards for medical research.']
// ]}
// };
// const ul=a=>a&&a.length?`<ul>${a.map(x=>`<li>${x}</li>`).join('')}</ul>`:'';
// if(d&&PD[key]&&$('pg')){const p=PD[key];
//  $('pg').innerHTML=$('pg').querySelector('.banner').outerHTML+`<section><div class="wrap pd"><div class="pd-head"><h2>${p.h}</h2><a href="contact.html" class="btn btn-g">Check Feasibility Today</a></div>${p.intro.map(x=>`<p class="pd-p">${x}</p>`).join('')}
//  ${p.boxes?`<div class="pd-grid">${p.boxes.map(b=>`<div class="pd-box"><h3>${b[0]}</h3>${b[1]?`<p>${b[1]}</p>`:''}${ul(b[2])}${b[3]?`<p>${b[3]}</p>`:''}</div>`).join('')}<div class="pd-box"${p.boxes.length%2===0?' style="grid-column:1/-1"':''}><h3>Quality &amp; Security Checks</h3><ul class="ticks">${QC.map(x=>`<li>${x}</li>`).join('')}</ul></div></div>`:''}
//  ${(p.secs||[]).map(s=>`<div class="pd-sec"><h3>${s[0]}</h3>${s[1]?`<p>${s[1]}</p>`:''}${ul(s[2])}${s[3]?`<p>${s[3]}</p>`:''}</div>`).join('')}</div></section>`}

// /* ===== Header and footer ===== ssss*/
// const dd=(l,h,i,c='')=>`<div class="dd ${c}"><a href="${h}" class="dd-t">${l} <span>▾</span></a><div class="dd-list">${i}</div></div>`;
// const nav=`<header id="hd"><div class="wrap nav">


// <a href="index.html" class="logo"><i>◎</i>Galxoopinion Research</a>
// <button class="burger" id="bg" aria-label="Menu">☰</button>
// <nav class="menu" id="mn"><button class="close" id="cl" aria-label="Close">✕</button>
// <a href="index.html">Home</a><a href="about.html">About Us</a>
// ${dd('Services','services.html','<a href="services.html">All Services</a>'+SV.map(k=>`<a href="${k}.html">${PAGES[k].i} ${PAGES[k].t}</a>`).join(''))}
// ${dd('Our Panels','#',PN.map(k=>`<a href="${k}.html">${PAGES[k].i} ${PAGES[k].t}</a>`).join(''))}
//  ${dd('Join Our Panels','#',['Galxoopinion Research surveys','EraHealthOpinions','EraRewards'].map((n,i)=>`<a href="${i===0?'https://gloxo-survey.vercel.app/':'#'}" ${i===0?'':'data-nl'}><b>${i+1}</b> ${n}</a>`).join(''),'r')}
// <a href="industries.html">Industries</a><a href="contact.html">Contact</a>
// <a href="contact.html" class="btn btn-p">Enquire Today</a></nav></div></header><div class="ov" id="ov"></div>`;
// const foot=`${key==='home'?`<section style="padding-top:20px"><div class="wrap"><div class="cta-b"><h2>Let's Turn Your Questions Into Insights</h2><p>Tell us about your research needs and get a proposal within 24 hours.</p><a href="contact.html" class="btn btn-p">Enquire Today</a></div></div></section>`:''}
// <footer><div class="wrap"><div class="fg">
// <div><a href="index.html" class="logo" style="margin-bottom:14px"><i>◎</i>Galxoopinion Research</a><p style="font-size:.92rem">A full-service market research company delivering reliable data, analytics and insights.</p></div>
// <div><h5>Company</h5><a href="about.html">About Us</a><a href="industries.html">Industries</a><a href="contact.html">Contact</a></div>
// <div><h5>Services</h5>${SV.map(k=>`<a href="${k}.html">${PAGES[k].t}</a>`).join('')}</div>
// <div><h5>Our Panels</h5>${PN.map(k=>`<a href="${k}.html">${PAGES[k].t}</a>`).join('')}</div></div>
// <div class="copy">© 2026 Galxoopinion Research. All rights reserved.</div></div></footer>`;
// $('hdr').outerHTML=nav;$('ftr').outerHTML=foot;

// /* ===== Menu, dropdowns, FAQ, form ===== */
// const hd=$('hd'),mn=$('mn'),ov=$('ov');
// const f=location.pathname.split('/').pop()||'index.html';
// mn.querySelectorAll(':scope>a[href]').forEach(a=>{if(a.getAttribute('href')===f&&!a.classList.contains('btn'))a.classList.add('act')});
// addEventListener('scroll',()=>hd.classList.toggle('sc',scrollY>40));
// const tg=o=>{mn.classList.toggle('show',o);ov.classList.toggle('show',o);document.body.style.overflow=o?'hidden':''};
// $('bg').onclick=()=>tg(true);$('cl').onclick=()=>tg(false);ov.onclick=()=>tg(false);
// addEventListener('keydown',e=>{if(e.key==='Escape')tg(false)});
// mn.querySelectorAll('a:not(.dd-t):not([data-nl])').forEach(a=>a.addEventListener('click',()=>tg(false)));
// mn.querySelectorAll('[data-nl]').forEach(a=>a.addEventListener('click',e=>e.preventDefault()));
// document.querySelectorAll('.dd-t').forEach(t=>t.addEventListener('click',e=>{
//  if(innerWidth<=768){e.preventDefault();const p=t.parentElement,o=p.classList.contains('open');document.querySelectorAll('.dd').forEach(x=>x.classList.remove('open'));if(!o)p.classList.add('open')}
//  else if(t.getAttribute('href')==='#')e.preventDefault()}));
// document.querySelectorAll('.q button').forEach(b=>b.onclick=()=>{const q=b.parentElement,o=q.classList.contains('open');document.querySelectorAll('.q').forEach(x=>x.classList.remove('open'));if(!o)q.classList.add('open')});
// addEventListener('error',e=>{if(e.target.tagName==='IMG'){e.target.removeAttribute('src');e.target.alt=''}},true);
// document.querySelectorAll('[data-img]').forEach(i=>i.src=IMG(i.dataset.img));
// const fm=$('cf');if(fm)fm.onsubmit=e=>{e.preventDefault();alert('Thank you! Our team will contact you shortly.');fm.reset()};
// const sg=$('svc-grid');if(sg)sg.innerHTML=kcards(SV);
// const pg=$('pn-grid');if(pg)pg.innerHTML=kcards(PN);
// const ch=$('chips');if(ch)ch.innerHTML=PAGES.industries.c.map(c=>`<span>${c[0]} ${c[1]}</span>`).join('');

// /* ===== Hero slider ===== */
// (function(){
//  const slides=[...document.querySelectorAll('.slide')];if(!slides.length)return;
//  slides.forEach(s=>s.style.backgroundImage=`url(${IMG(s.dataset.bg)})`);
//  const dots=$('slDots');let cur=0,timer;
//  const go=i=>{cur=(i+slides.length)%slides.length;slides.forEach((s,k)=>s.classList.toggle('active',k===cur));[...dots.children].forEach((x,k)=>x.classList.toggle('on',k===cur))};
//  const auto=()=>{clearInterval(timer);timer=setInterval(()=>go(cur+1),5500)};
//  slides.forEach((_,i)=>{const b=document.createElement('button');b.setAttribute('aria-label','Slide '+(i+1));b.onclick=()=>{go(i);auto()};dots.appendChild(b)});
//  $('slPrev').onclick=()=>{go(cur-1);auto()};$('slNext').onclick=()=>{go(cur+1);auto()};
//  go(0);auto();
// })();

// /* ===== Counters ===== */
// (function(){
//  const cs=document.querySelectorAll('.counter');if(!cs.length)return;
//  const fmt=n=>Math.floor(n).toLocaleString('en-IN'),reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
//  const set=(el,v)=>{el.textContent=fmt(v)+(el.dataset.suffix||'')};
//  const run=el=>{cancelAnimationFrame(el._r);const t=+el.dataset.target;if(reduce){set(el,t);return}
//   const s=performance.now(),st=n=>{const p=Math.min((n-s)/2000,1);set(el,t*(1-Math.pow(1-p,3)));if(p<1)el._r=requestAnimationFrame(st)};el._r=requestAnimationFrame(st)};
//  const io=new IntersectionObserver(es=>es.forEach(e=>e.isIntersecting?run(e.target):(cancelAnimationFrame(e.target._r),set(e.target,0))),{threshold:.4});
//  cs.forEach(c=>{set(c,0);io.observe(c)});
// })();

// /* ===== Testimonials slider ===== */
// (function(){
//  const track=$('tmTrack');if(!track)return;
//  const view=$('tmView'),box=$('tmDots'),total=track.children.length;let cur=0,timer,pv=3,sx=0;
//  const per=()=>innerWidth<=600?1:innerWidth<=992?2:3,max=()=>total-pv;
//  const go=i=>{cur=i>max()?0:i<0?max():i;track.style.transform=`translateX(-${cur*(100/pv)}%)`;[...box.children].forEach((d,k)=>d.classList.toggle('on',k===cur))};
//  const auto=()=>{clearInterval(timer);timer=setInterval(()=>go(cur+1),4000)};
//  const build=()=>{pv=per();box.innerHTML='';for(let i=0;i<=max();i++){const b=document.createElement('button');b.setAttribute('aria-label','Testimonial '+(i+1));b.onclick=()=>{go(i);auto()};box.appendChild(b)}go(Math.min(cur,max()))};
//  view.addEventListener('mouseenter',()=>clearInterval(timer));view.addEventListener('mouseleave',auto);
//  view.addEventListener('touchstart',e=>{sx=e.touches[0].clientX},{passive:true});
//  view.addEventListener('touchend',e=>{const x=e.changedTouches[0].clientX-sx;if(Math.abs(x)>50){go(x<0?cur+1:cur-1);auto()}});
//  addEventListener('resize',build);build();auto();
// })();


const IMG=id=>`https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=900`;
const $=id=>document.getElementById(id);
const P=(i,t,s,h,p,l,img,ch,c)=>({i,t,s,h,p,l,img,ch,c});

/* ===== Page content ===== */
const PAGES={
research:P('🔬','Research Solutions','Quantitative data collection through offline, CATI and online methods, plus processing and analysis.','Quantitative Research Solutions','We design and run structured studies that produce statistically reliable data. Based on your objectives, we recommend and execute the method that gives precise, representative and measurable results.',['Representative sampling and quota control','Trained field and CATI teams','Multi-stage quality checks'],3184418,'Our Research Methods',[['🚶','Data Collection Offline','Face-to-face interviews by trained field teams across urban and rural locations.'],['📞','Data Collection CATI','Computer-assisted telephone interviews with supervised, monitored calling.'],['💻','Data Collection Online','Panel sampling for fast, cost-effective reach to your target audience.'],['🖥️','Data Collection CAWI','Survey programming, hosting and live tracking for web-based interviews.'],['📊','Data Processing & Analysis','Cleaning, coding, weighting and cross-tabulation delivered on schedule.'],['🔤','Verbatim Coding','Open-ended responses coded into clear, analysable categories.']]),
consultancy:P('🧭','Research Consultancy','Insight-led advisory on brand, competition, new products and growth strategy.','Research-Led Business Consultancy','Our consultants combine market intelligence, analytical rigor and sector knowledge to help you understand challenges, evaluate opportunities and make confident decisions.',['Tailored research frameworks','Experienced sector specialists','Clear, actionable recommendations'],3184291,'Consultancy Services',[['🧠','Advisory & Consulting','Strategic guidance to navigate complexity, reduce risk and unlock growth.'],['🏷️','Brand Assessment','Measure brand positioning, awareness, messaging and perception.'],['📈','Competitive Benchmarking','Compare your performance against competitors on key KPIs.'],['💡','New Product Research','Concept testing, pricing studies and market-readiness checks.']]),
tax:P('🧾','Tax Consulting','Planning, compliance and advisory support for individuals and businesses.','Practical Tax Consulting','Our tax team works closely with you to plan effectively, stay compliant and manage risk, with clear communication at every step.',['Individual and business support','Compliance-first approach','Transparent advice'],574071,'Tax Services',[['🗂️','Tax Planning','Forward-looking strategies built around your finances and goals.'],['✅','Tax Compliance','Timely filings and documentation to meet your obligations.'],['⚙️','Tax Optimization','Lawful strategies aimed at reducing liabilities.'],['🤝','Tax Representation','Support and representation before authorities.'],['🌐','International Tax Consulting','Guidance on cross-border tax matters.'],['🛡️','Tax Risk Management','Identify and manage tax exposures early.']]),
analytics:P('📈','Analytic Solutions','From data visualization to advanced predictive analytics.','Turn Complex Data Into Clear Decisions','We transform raw datasets into clear intelligence by finding patterns, explaining causes and predicting outcomes.',['Interactive dashboards','Statistical modelling','Decision-ready reporting'],3184339,'Analytics Services',[['🔍','Data Exploration & Visualization','Interactive visuals that reveal patterns and trends.'],['📋','Descriptive Analytics','Understand what happened using structured historical data.'],['🧩','Diagnostic Analytics','Find the root causes and drivers behind performance.'],['🚀','Advanced Analytics','Predict future outcomes and optimize decisions.']]),
software:P('💻','Software & Website Solutions','Custom software, web and mobile apps, cloud solutions, testing and support.','Software Built Around Your Business','Our developers deliver scalable, secure and user-friendly software that improves efficiency and supports growth.',['Custom-built to your needs','Scalable and secure','Ongoing support'],3184292,'Development Services',[['🛠️','Custom Software','Tailor-made software for your unique workflows.'],['📱','Mobile Applications','Engaging apps for Android and iOS.'],['🌍','Web Applications','Responsive, feature-rich web platforms.'],['☁️','Cloud & Enterprise Apps','Scalable applications for large organizations.'],['🧪','Testing & QA','Thorough testing for flawless performance.'],['🔧','Maintenance & Support','Monitoring, updates and troubleshooting.']]),
marketing:P('📣','Online Marketing Solutions','SEO, social media, performance ads and content to grow your reach.','Digital Marketing That Delivers','We combine research insight with creative execution to reach the right audience and measure real results.',['Audience-led strategy','Transparent reporting','Multi-channel campaigns'],1181406,'Marketing Services',[['🔎','Search Engine Optimization','Improve visibility and organic traffic.'],['👍','Social Media Marketing','Build communities and brand engagement.'],['🎯','Performance Advertising','Targeted paid campaigns with clear ROI tracking.'],['✍️','Content Marketing','Useful content that attracts and retains customers.'],['✉️','Email Marketing','Campaigns that nurture and convert.'],['📊','Analytics & Reporting','Clear dashboards on what works.']]),
b2b:P('🏢','Business to Business Panel','Verified professionals and decision-makers for B2B research.','Reach Professionals Who Decide','Our B2B panel includes professionals across industries, seniority levels and functions, recruited and verified for quality.',['Industry and designation-based targeting','Profile verification','Flexible sample sizes'],3184418,'Panel Highlights',[['👔','Senior Decision-Makers','Reach managers, directors and business owners.'],['🏭','Industry Coverage','Panelists across multiple sectors and company sizes.'],['✔️','Verified Profiles','Screening and validation of every respondent.'],['🎯','Targeted Recruitment','Custom recruitment for niche audiences.']]),
b2c:P('🛍️','Business to Consumer Panel','Engaged consumers for brand, product and advertising research.','Understand Your Consumers','Our consumer panel spans age groups, regions and lifestyles so you can reach the audience that matters to your brand.',['Demographic and behavioral targeting','Quality-controlled responses','Fast turnaround'],3184291,'Panel Highlights',[['🌆','Wide Coverage','Metro, urban and semi-urban respondents.'],['👨‍👩‍👧','Demographic Targeting','Filter by age, gender, income and more.'],['💬','Engaged Members','Regular engagement keeps response quality high.'],['🔒','Quality Controls','Duplicate and fraud checks on every study.']]),
healthcare:P('🩺','Healthcare Panel','Patients, caregivers and healthcare professionals for medical research.','Healthcare Research You Can Trust','Our healthcare panel supports studies among patients, caregivers and professionals with strict privacy and compliance standards.',['Condition-based targeting','Verified professionals','Privacy-first handling'],3184339,'Panel Highlights',[['🧑‍⚕️','Healthcare Professionals','Doctors, nurses, pharmacists and specialists.'],['❤️','Patients & Caregivers','Respondents by condition and treatment.'],['🎯','Precise Targeting','Reach niche medical audiences.'],['🛡️','Compliance & Privacy','Responsible handling of sensitive data.']]),
'esomar-37':P('✅','ESOMAR 37','Transparent answers to the ESOMAR 37 questions for sample buyers.','Transparency for Sample Buyers','The ESOMAR 37 Questions help buyers evaluate online sample providers. We aim to answer them openly so you can assess our panels with confidence.',['Clear panel documentation','Quality and validation processes','Responses available on request'],3184292,'What the Questions Cover',[['🏛️','Company Profile','Who we are and how we operate.'],['🧲','Sample Sources & Recruitment','How panelists join and are engaged.'],['🧪','Sampling & Data Quality','Project management and validation methods.'],['📜','Policies & Compliance','Privacy, consent and ethical standards.']]),
about:P('','About Us','','A Market Research & Insights Company','Galxoopinion Research is a full-service market research partner delivering high-quality data collection, analytics and actionable insights to businesses across industries.',['Worldwide panel coverage','In-house recruitment and validation','Full research solutions from design to reporting','Responsive project support'],3184339,'What Drives Us',[['🎯','Accuracy','Rigorous methods and quality checks on every project.'],['🔍','Transparency','Clear processes and open communication.'],['🤝','Partnership','We work as an extension of your team.']]),
industries:P('','Industries We Serve','','Experience Across Sectors','We tailor research programs to the audience, regulations and goals of each sector.',['Sector-specific sampling','Experienced project teams','Custom questionnaires'],3184418,'Sectors We Cover',[['🚗','Automotive','Ownership, usage and brand studies.'],['🏦','Banking & Finance','Customer experience and product research.'],['💊','Healthcare & Pharma','Patient and professional studies.'],['📱','IT & Telecom','Technology adoption and usage research.'],['🍽️','FMCG & Food','Consumer preference and tracking.'],['🎓','Education','Learner and institution research.'],['⚡','Energy & Utilities','Customer and stakeholder studies.'],['🛒','Retail & E-commerce','Shopper behavior and satisfaction.']]),
services:P('','Our Services','','','','',0,'Everything Under One Roof',null)
};
const SV=['research','consultancy','tax','analytics','software','marketing'],PN=['b2b','b2c','healthcare','esomar-37'];

/* ===== Card helpers ===== */
const card=(c,h)=>{const t=h?`a href="${h}"`:'div',e=h?'a':'div';return `<${t} class="card"><div class="ic">${c[0]}</div><h3>${c[1]}</h3><p>${c[2]}</p>${h?'<span class="more">Learn more →</span>':''}</${e}>`};
const gc=n=>n%3==0?'grid3':'grid4';
const kcards=ks=>`<div class="${gc(ks.length)}" style="text-align:left">${ks.map(k=>card([PAGES[k].i,PAGES[k].t,PAGES[k].s],k+'.html')).join('')}</div>`;
const grid=a=>`<div class="${gc(a.length)}" style="text-align:left">${a.map(c=>card(c)).join('')}</div>`;

/* ===== Generic page render ===== */
const key=document.body.dataset.page||'home',d=PAGES[key];
if(d&&$('pg')){
 document.title=d.t+' | Galxoopinion Research';
 $('pg').innerHTML=`<section class="banner"><div class="wrap"><h1>${d.t}</h1><p class="crumb"><a href="index.html">Home</a> / ${d.t}</p></div></section>
 ${d.h?`<section><div class="wrap split"><div><span class="tag">${d.t}</span><h2>${d.h}</h2><p class="sub">${d.p}</p><ul class="list">${d.l.map(x=>`<li>${x}</li>`).join('')}</ul><a href="contact.html" class="btn btn-g">Request a Proposal</a></div><img data-img="${d.img}" alt="${d.t}" loading="lazy"></div></section>`:''}
 <section class="alt"><div class="wrap center"><span class="tag">${d.t}</span><h2>${d.ch}</h2>${d.c?grid(d.c):kcards(SV)}</div></section>`;
}

/* ===== Detailed panel pages (B2B, B2C, Healthcare) ===== */
const QC=['Timezone Validation','Age Validation','Bot Protection','URL Protection','Browser Fingerprinting','Duplicate Detection','GEO-IP Validation','CAPTCHA Security Controls','Gate Survey Screening','Security Question Validation','Screening Question Filters','Open-End Quality Checks','Red Herring Question Controls','Pre-Screening Qualification Filters','Double Opt-In Authentication','Browser Language Check','TOR / Proxy Detection','Cookie Validation'];
const PD={
b2b:{h:'Business-to-Business (B2B) Panel',intro:['Galxoopinion Research gives you access to a robust B2B panel of <b>verified business professionals</b> across industries and seniority levels, including decision-makers, influencers and key stakeholders from diverse sectors.','We engage these professionals in structured market research studies, surveys and consultative research programs to deliver reliable, decision-ready intelligence.'],
boxes:[
['Proprietary Recruitment Infrastructure','We recruit and manage our B2B panel through our own Galxoopinion Research panel platforms:',['Era2Opinion','EraRewards'],'These platforms support structured recruitment, profiling, engagement tracking and reward management, keeping panel operations scalable and compliant.'],
['Targeted Recruitment Strategy','We use targeted methods to attract professionals who match specific research objectives, including:',['Industry-based targeting','Role and designation-based filtering','Company size and function-specific outreach','Targeted email campaigns and digital advertising','Social media engagement strategies']],
['Structured Registration & Double Opt-In','Our free registration process includes:',['Double opt-in email verification','Age and demographic validation','Phone number authentication','CAPTCHA and security question validation'],'This protects authenticity and reduces fraudulent sign-ups.'],
['Detailed Profiling & Segmentation','After registering, members complete structured profiling questionnaires covering:',['Job title and function','Industry classification','Company size and structure','Decision-making authority','Professional responsibilities'],'This enables precise segmentation and targeted sampling.'],
['Quality Score & Ranking System','Each panelist receives a quality score and ranking based on:',['Profiling completeness','Participation consistency','Engagement behavior','Profile updates'],'Panelists within our quality thresholds are prioritized for research participation.'],
['Incentive & Reward Management','Members earn reward points for completing profiling segments and taking part in studies. Rewards are paid once a set threshold is reached, through options such as:',['Bank transfer','UPI (subject to country regulations)','Gift cards'],'This structured incentive system encourages active and reliable engagement.'],
['Verification & Validation Protocols','We apply multi-layer authentication to protect panel integrity, including:',['Company email validation','Phone verification','Public profile cross-referencing','External database validation','Behavioral pattern monitoring','Backend quality audit reviews'],'Our quality team manually reviews professional credentials and employment authenticity where applicable.']
]},
b2c:{h:'Business-to-Consumer (B2C) Panel',intro:['Galxoopinion Research provides technology-enabled sampling and verified survey respondents, delivering reliable consumer insights to organizations that need to understand their customers.','Through our panel infrastructure and automated sampling tools, we give on-demand access to profiled respondents, enabling faster, data-driven decisions across product development, brand strategy, customer experience and market expansion.','Our consumer panel lets you target precisely across demographic, behavioral and geographic segments.'],
boxes:[
['Recruitment Framework','Panel members are onboarded through our Galxoopinion Research panel platforms. Our secure registration process includes:',['Double opt-in email verification','Age and demographic validation','Phone number authentication','CAPTCHA and security question controls'],'This structured onboarding ensures authenticity and minimizes fraudulent participation.'],
['Advanced Profiling & Segmentation','After registration, members complete detailed profiling questionnaires capturing:',['Demographic attributes','Household and socio-economic indicators','Purchase behaviors','Lifestyle preferences','Product and service usage'],'This enables precise segmentation and targeted sampling for customized research objectives.'],
['Quality Score & Ranking System','Each panelist receives a dynamic quality score based on:',['Profile completion level','Participation history','Engagement consistency','Response quality'],'Higher-scoring panelists are prioritized for study invitations.'],
['Incentive & Reward Structure','Members earn reward points for completing profiling segments and validated survey participation. Rewards are redeemable once a minimum threshold is reached, through options such as:',['Bank transfer','UPI (subject to country regulations)','Gift cards']]
]},
healthcare:{h:'Healthcare Panel Solutions',intro:['Galxoopinion Research offers a dedicated healthcare research infrastructure designed for complex pharmaceutical and healthcare studies, with customized, compliant and high-precision sampling.','We make sure the <b>right respondent is matched to the right study</b>, delivering high-quality, cost-efficient sampling within optimized timelines. Our approach relies on careful recruitment, transparent engagement practices and ethical compensation, driving stronger participation and more reliable data.'],
secs:[
['Commitment to Respondent Integrity','We place strong emphasis on respondent quality and authenticity in paid medical research. To maintain it, we apply validation technologies and multi-layer quality checks so every healthcare professional and participant is verified, qualified and research-ready.'],
['Comprehensive Healthcare Audience Coverage','Our Healthcare Panel covers a broad spectrum of medical and pharmaceutical profiles, including healthcare professionals, key opinion leaders, patients and caregivers, with segmentation by:',['Specialty and therapeutic area','Department and institutional affiliation','Professional designation','Licensing credentials where applicable','Demographic and practice-based criteria'],'Our recruitment teams support precise validation across quantitative, qualitative and hybrid study methods.'],
['Audience Types We Reach','',['Doctors and specialists','Nurses and allied health professionals','Pharmacists','Patients by condition and treatment','Caregivers','Healthcare administrators and decision-makers']],
['Markets Covered','We run healthcare studies in India and select international markets, and can extend coverage to other regions on request through our network.'],
['Privacy & Compliance','We handle respondent data responsibly, obtain clear consent, and follow applicable privacy and research-ethics standards for medical research.']
]}
};
const ul=a=>a&&a.length?`<ul>${a.map(x=>`<li>${x}</li>`).join('')}</ul>`:'';
if(d&&PD[key]&&$('pg')){const p=PD[key];
 $('pg').innerHTML=$('pg').querySelector('.banner').outerHTML+`<section><div class="wrap pd"><div class="pd-head"><h2>${p.h}</h2><a href="contact.html" class="btn btn-g">Check Feasibility Today</a></div>${p.intro.map(x=>`<p class="pd-p">${x}</p>`).join('')}
 ${p.boxes?`<div class="pd-grid">${p.boxes.map(b=>`<div class="pd-box"><h3>${b[0]}</h3>${b[1]?`<p>${b[1]}</p>`:''}${ul(b[2])}${b[3]?`<p>${b[3]}</p>`:''}</div>`).join('')}<div class="pd-box"${p.boxes.length%2===0?' style="grid-column:1/-1"':''}><h3>Quality &amp; Security Checks</h3><ul class="ticks">${QC.map(x=>`<li>${x}</li>`).join('')}</ul></div></div>`:''}
 ${(p.secs||[]).map(s=>`<div class="pd-sec"><h3>${s[0]}</h3>${s[1]?`<p>${s[1]}</p>`:''}${ul(s[2])}${s[3]?`<p>${s[3]}</p>`:''}</div>`).join('')}</div></section>`}

/* ===== Header and footer ===== */
const dd=(l,h,i,c='')=>`<div class="dd ${c}"><a href="${h}" class="dd-t">${l} <span>▾</span></a><div class="dd-list">${i}</div></div>`;
const nav=`<header id="hd"><div class="wrap nav">
<a href="index.html" class="logo" aria-label="Galxoopinion Research"><img src="reasearchlogo.png" alt="Galxoopinion Research" class="logo-img"></a>
<button class="burger" id="bg" aria-label="Menu">☰</button>
<nav class="menu" id="mn"><button class="close" id="cl" aria-label="Close">✕</button>
<a href="index.html">Home</a><a href="about.html">About Us</a>
${dd('Services','services.html','<a href="services.html">All Services</a>'+SV.map(k=>`<a href="${k}.html">${PAGES[k].i} ${PAGES[k].t}</a>`).join(''))}
${dd('Our Panels','#',PN.map(k=>`<a href="${k}.html">${PAGES[k].i} ${PAGES[k].t}</a>`).join(''))}
 ${dd('Join Our Panels','#',['Galxoopinion Research surveys','EraHealthOpinions','EraRewards'].map((n,i)=>`<a href="${i===0?'https://gloxo-survey.vercel.app/':'#'}" ${i===0?'':'data-nl'}><b>${i+1}</b> ${n}</a>`).join(''),'r')}
<a href="industries.html">Industries</a><a href="contact.html">Contact</a>
<a href="contact.html" class="btn btn-p">Enquire Today</a></nav></div></header><div class="ov" id="ov"></div>`;
const foot=`${key==='home'?`<section style="padding-top:20px"><div class="wrap"><div class="cta-b"><h2>Let's Turn Your Questions Into Insights</h2><p>Tell us about your research needs and get a proposal within 24 hours.</p><a href="contact.html" class="btn btn-p">Enquire Today</a></div></div></section>`:''}
<footer><div class="wrap"><div class="fg">
<div><a href="index.html" class="logo" aria-label="Galxoopinion Research" style="margin-bottom:14px"><img src="reasearchlogo.png" alt="Galxoopinion Research" class="logo-img"></a><p style="font-size:.92rem">A full-service market research company delivering reliable data, analytics and insights.</p></div>
<div><h5>Company</h5><a href="about.html">About Us</a><a href="industries.html">Industries</a><a href="contact.html">Contact</a></div>
<div><h5>Services</h5>${SV.map(k=>`<a href="${k}.html">${PAGES[k].t}</a>`).join('')}</div>
<div><h5>Our Panels</h5>${PN.map(k=>`<a href="${k}.html">${PAGES[k].t}</a>`).join('')}</div></div>
<div class="copy">© 2026 Galxoopinion Research. All rights reserved.</div></div></footer>`;
$('hdr').outerHTML=nav;$('ftr').outerHTML=foot;

/* ===== Menu, dropdowns, FAQ, form ===== */
const hd=$('hd'),mn=$('mn'),ov=$('ov');
const f=location.pathname.split('/').pop()||'index.html';
mn.querySelectorAll(':scope>a[href]').forEach(a=>{if(a.getAttribute('href')===f&&!a.classList.contains('btn'))a.classList.add('act')});
addEventListener('scroll',()=>hd.classList.toggle('sc',scrollY>40));
const tg=o=>{mn.classList.toggle('show',o);ov.classList.toggle('show',o);document.body.style.overflow=o?'hidden':''};
$('bg').onclick=()=>tg(true);$('cl').onclick=()=>tg(false);ov.onclick=()=>tg(false);
addEventListener('keydown',e=>{if(e.key==='Escape')tg(false)});
mn.querySelectorAll('a:not(.dd-t):not([data-nl])').forEach(a=>a.addEventListener('click',()=>tg(false)));
mn.querySelectorAll('[data-nl]').forEach(a=>a.addEventListener('click',e=>e.preventDefault()));
document.querySelectorAll('.dd-t').forEach(t=>t.addEventListener('click',e=>{
 if(innerWidth<=768){e.preventDefault();const p=t.parentElement,o=p.classList.contains('open');document.querySelectorAll('.dd').forEach(x=>x.classList.remove('open'));if(!o)p.classList.add('open')}
 else if(t.getAttribute('href')==='#')e.preventDefault()}));
document.querySelectorAll('.q button').forEach(b=>b.onclick=()=>{const q=b.parentElement,o=q.classList.contains('open');document.querySelectorAll('.q').forEach(x=>x.classList.remove('open'));if(!o)q.classList.add('open')});
addEventListener('error',e=>{if(e.target.tagName==='IMG'){e.target.removeAttribute('src');e.target.alt=''}},true);
document.querySelectorAll('[data-img]').forEach(i=>i.src=IMG(i.dataset.img));
const fm=$('cf');if(fm)fm.onsubmit=e=>{e.preventDefault();alert('Thank you! Our team will contact you shortly.');fm.reset()};
const sg=$('svc-grid');if(sg)sg.innerHTML=kcards(SV);
const pg=$('pn-grid');if(pg)pg.innerHTML=kcards(PN);
const ch=$('chips');if(ch)ch.innerHTML=PAGES.industries.c.map(c=>`<span>${c[0]} ${c[1]}</span>`).join('');

/* ===== Hero slider ===== */
(function(){
 const slides=[...document.querySelectorAll('.slide')];if(!slides.length)return;
 slides.forEach(s=>s.style.backgroundImage=`url(${IMG(s.dataset.bg)})`);
 const dots=$('slDots');let cur=0,timer;
 const go=i=>{cur=(i+slides.length)%slides.length;slides.forEach((s,k)=>s.classList.toggle('active',k===cur));[...dots.children].forEach((x,k)=>x.classList.toggle('on',k===cur))};
 const auto=()=>{clearInterval(timer);timer=setInterval(()=>go(cur+1),5500)};
 slides.forEach((_,i)=>{const b=document.createElement('button');b.setAttribute('aria-label','Slide '+(i+1));b.onclick=()=>{go(i);auto()};dots.appendChild(b)});
 $('slPrev').onclick=()=>{go(cur-1);auto()};$('slNext').onclick=()=>{go(cur+1);auto()};
 go(0);auto();
})();

/* ===== Counters ===== */
(function(){
 const cs=document.querySelectorAll('.counter');if(!cs.length)return;
 const fmt=n=>Math.floor(n).toLocaleString('en-IN'),reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
 const set=(el,v)=>{el.textContent=fmt(v)+(el.dataset.suffix||'')};
 const run=el=>{cancelAnimationFrame(el._r);const t=+el.dataset.target;if(reduce){set(el,t);return}
  const s=performance.now(),st=n=>{const p=Math.min((n-s)/2000,1);set(el,t*(1-Math.pow(1-p,3)));if(p<1)el._r=requestAnimationFrame(st)};el._r=requestAnimationFrame(st)};
 const io=new IntersectionObserver(es=>es.forEach(e=>e.isIntersecting?run(e.target):(cancelAnimationFrame(e.target._r),set(e.target,0))),{threshold:.4});
 cs.forEach(c=>{set(c,0);io.observe(c)});
})();

/* ===== Testimonials slider ===== */
(function(){
 const track=$('tmTrack');if(!track)return;
 const view=$('tmView'),box=$('tmDots'),total=track.children.length;let cur=0,timer,pv=3,sx=0;
 const per=()=>innerWidth<=600?1:innerWidth<=992?2:3,max=()=>total-pv;
 const go=i=>{cur=i>max()?0:i<0?max():i;track.style.transform=`translateX(-${cur*(100/pv)}%)`;[...box.children].forEach((d,k)=>d.classList.toggle('on',k===cur))};
 const auto=()=>{clearInterval(timer);timer=setInterval(()=>go(cur+1),4000)};
 const build=()=>{pv=per();box.innerHTML='';for(let i=0;i<=max();i++){const b=document.createElement('button');b.setAttribute('aria-label','Testimonial '+(i+1));b.onclick=()=>{go(i);auto()};box.appendChild(b)}go(Math.min(cur,max()))};
 view.addEventListener('mouseenter',()=>clearInterval(timer));view.addEventListener('mouseleave',auto);
 view.addEventListener('touchstart',e=>{sx=e.touches[0].clientX},{passive:true});
 view.addEventListener('touchend',e=>{const x=e.changedTouches[0].clientX-sx;if(Math.abs(x)>50){go(x<0?cur+1:cur-1);auto()}});
 addEventListener('resize',build);build();auto();
})();