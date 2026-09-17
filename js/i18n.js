/* ==========================================================================
   I18N — language switching engine
   Default: English (en). Also supports Arabic (ar) and Bangla (bn).
   Add/edit text ONLY inside the `translations` object below.
   Every element in index.html that should change language carries a
   data-i18n="section.key" (or data-i18n-placeholder / data-i18n-aria)
   attribute that maps to a key in this file.
   ========================================================================== */
(function () {
  "use strict";

  var STORAGE_KEY = "arm_lang";
  var SUPPORTED = ["en", "ar", "bn"];

  var translations = {

    /* ======================================================================
       ENGLISH (default / source of truth)
       ====================================================================== */
    en: {
      nav: { home:"Home", about:"About", services:"Services", projects:"Projects", gallery:"Gallery", whyUs:"Why Us", reviews:"Reviews", faq:"FAQ", contact:"Contact", requestQuote:"Request Quote" },
      aria: { openMenu:"Open menu", closeMenu:"Close menu", chatWhatsapp:"Chat on WhatsApp", backToTop:"Back to top", prevImage:"Previous image", nextImage:"Next image", closeDialog:"Close", prevReview:"Previous review", nextReview:"Next review", imageViewer:"Image viewer", brandHome:"Abdur Rob home", chooseLanguage:"Choose language" },
      brand: { tag:"MEP & Interior" },
      hero: {
        label:"MEP & Interior Subcontractor",
        title:"Abdur Rob Miah",
        desc:"Practical experience in electrical, mechanical, plumbing, HVAC, interior development and renovation projects — based in Al Madaya, Jazan, Saudi Arabia.",
        btnQuote:"Request a Quote", btnWhatsapp:"WhatsApp Us", btnCall:"Call Now",
        metaYearsLabel:"Years Experience", metaProjectsLabel:"Completed Projects", metaLocationSub:"Saudi Arabia",
        scroll:"Scroll"
      },
      about: {
        eyebrow:"About", title:"About Abdur Rob",
        p1:"Abdur Rob Miah is an experienced MEP & Interior Specialist with more than 35 years of practical experience in electrical, mechanical, plumbing, HVAC, interior development and renovation work.",
        p2:"He reviews each project based on its requirements, discusses scope, cost and timing with the client, and then handles the work according to the size and nature of the project.",
        p3:"Smaller projects may be handled personally, while larger projects are completed with a suitable team.",
        point1:"Direct client communication", point2:"Clear scope, cost & timing", point3:"Scaled team for larger work", point4:"35+ years of hands-on trade",
        badgeLabel:"Years of Practice"
      },
      stats: { years:"Years Experience", projects:"Completed Projects", mepDesc:"Technical Services", interiorLabel:"Interior", interiorDesc:"Design & Renovation" },
      services: {
        eyebrow:"Services", title:"Our Services",
        desc:"From technical systems to complete interior improvement, every project is planned around the client's requirements.",
        ctaLabel:"Request this service",
        electricalTitle:"Electrical", electricalDesc:"Electrical wiring, lighting, DB installation, generators, CCTV, fire alarm, solar, UPS / IPS and troubleshooting.",
        mechanicalTitle:"Mechanical", mechanicalDesc:"HVAC, AC installation, servicing, maintenance, ventilation, ducting, generator and machine repair.",
        plumbingTitle:"Plumbing", plumbingDesc:"Water supply, sanitary installation, drainage, bathroom plumbing, pipe installation and water tanks.",
        interiorTitle:"Interior & Decoration", interiorDesc:"False ceiling, painting, wall decoration, flooring, kitchen, bathroom, furniture and decorative lighting.",
        renovationTitle:"Renovation", renovationDesc:"Home, apartment, office, shop and restaurant renovation.",
        civilTitle:"Civil & Finishing", civilDesc:"Tiles, waterproofing and related finishing work."
      },
      process: {
        eyebrow:"How It Works", title:"How the Work Starts", desc:"A simple, transparent process from the first message to project handover.",
        step1Title:"Tell Us About Your Project", step1Desc:"Share what you need via WhatsApp, call or the quote form.",
        step2Title:"Review Requirements", step2Desc:"The project scope and site conditions are reviewed carefully.",
        step3Title:"Discuss Cost & Time", step3Desc:"A clear conversation on budget, timeline and materials.",
        step4Title:"Finalize the Work", step4Desc:"Scope and schedule are confirmed before work begins.",
        step5Title:"Execute the Project", step5Desc:"Work is carried out to plan, with regular updates.",
        step6Title:"Complete & Handover", step6Desc:"Final checks are completed and the project is handed over."
      },
      projectsSection: {
        eyebrow:"Portfolio", title:"Selected Projects", desc:"A sample of residential, commercial and technical work completed across Jazan.",
        filterAll:"All", filterResidential:"Residential", filterCommercial:"Commercial", filterInterior:"Interior", filterMep:"MEP", filterRenovation:"Renovation",
        viewProject:"View Project"
      },
      modal: { type:"Type", location:"Location", duration:"Duration", area:"Area" },
      galleryPage: {
        eyebrow:"Gallery", title:"Work in Detail", desc:"A closer look at electrical, mechanical, plumbing, interior and renovation work.",
        filterAll:"All", filterElectrical:"Electrical", filterMechanical:"Mechanical", filterPlumbing:"Plumbing", filterInterior:"Interior", filterRenovation:"Renovation", filterOther:"Other"
      },
      beforeAfter: {
        eyebrow:"Transformation", title:"Before & After", desc:"Drag the divider to compare the transformation on selected renovation projects.",
        before:"Before", after:"After", tabLiving:"Living Space", tabBathroom:"Bathroom"
      },
      whyUs: {
        eyebrow:"Why Us", title:"Why Choose Abdur Rob?", desc:"Decades of hands-on trade experience combined with clear, honest communication.",
        item1Title:"35+ Years of Practical Experience", item1Desc:"Long-standing, hands-on experience across electrical, mechanical and interior trades.",
        item2Title:"500+ Completed Projects", item2Desc:"A proven track record across residential, commercial and industrial work.",
        item3Title:"Direct Client Communication", item3Desc:"You speak directly about your project — no unnecessary layers.",
        item4Title:"Flexible Project Execution", item4Desc:"Work is scaled to fit the size, budget and timeline of each project.",
        item5Title:"Experienced Team for Larger Projects", item5Desc:"A capable team is brought in when a project calls for it.",
        item6Title:"Clear Discussion of Scope, Cost & Time", item6Desc:"Every project starts with an honest conversation before any work begins."
      },
      reviews: { eyebrow:"Reviews", title:"What Clients Say", disclaimer:"Sample reviews shown for demonstration purposes — not yet verified client testimonials." },
      certificate: { eyebrow:"Credentials", title:"Professional Background", desc:"A technical foundation built on formal training and decades of applied field experience.", qualification:"Qualification", institution:"Institution", year:"Year", qualificationVal:"Diploma" },
      quoteCta: { eyebrow:"Get Started", title:"Let's Talk About Your Project", desc:"Tell us what you need. Share a few details about your project and we'll prepare a convenient way to discuss the work with you.", btn1:"Request a Free Quote", btn2:"WhatsApp Us" },
      quoteForm: {
        eyebrow:"Request a Quote", title:"Share Your Project Details", desc:"Fill in the details below, then send it via WhatsApp or Email — you'll review the message before it's sent.",
        labelName:"Full Name", labelPhone:"Phone", labelWhatsapp:"WhatsApp", labelEmail:"Email", labelProjectType:"Project Type", labelLocation:"Project Location", labelService:"Required Service", labelArea:"Project Area / Size", labelBudget:"Estimated Budget", labelStartDate:"Expected Start Date", labelDescription:"Project Description",
        phName:"Your full name", phPhone:"+966 5X XXX XXXX", phWhatsapp:"If different from phone", phEmail:"you@example.com", phProjectType:"Select project type", phLocation:"City / area", phService:"Select a service", phArea:"e.g. 200 m²", phBudget:"Optional", phStartDate:"e.g. Next month", phDescription:"Briefly describe what you need done",
        optResidential:"Residential", optCommercial:"Commercial", optOffice:"Office", optRestaurant:"Restaurant", optShop:"Shop", optHotel:"Hotel", optIndustrial:"Industrial", optOther:"Other",
        svcElectrical:"Electrical", svcMechanical:"Mechanical", svcHVAC:"HVAC", svcPlumbing:"Plumbing", svcInterior:"Interior", svcHomeDecoration:"Home Decoration", svcRenovation:"Renovation", svcCivilWork:"Civil Work", svcGeneratorRepair:"Generator Repair", svcMachineRepair:"Machine Repair", svcCCTV:"CCTV", svcFireAlarm:"Fire Alarm", svcSolar:"Solar", svcUPS:"UPS / IPS", svcMultiple:"Multiple Services",
        btnWhatsapp:"Send via WhatsApp", btnEmail:"Send via Email",
        note:"This form does not submit automatically. It prepares your message — you'll press Send yourself in WhatsApp or your email app."
      },
      contact: {
        eyebrow:"Contact", desc:"MEP & Interior Specialist · Al Madaya, Jazan, Saudi Arabia",
        phoneLabel:"Phone", whatsappLabel:"WhatsApp", emailLabel:"Email", locationLabel:"Location", locationVal:"Al Madaya, Jazan, Saudi Arabia",
        btnCall:"Call", btnWhatsapp:"WhatsApp", btnEmail:"Email",
        cardTitle:"Al Madaya, Jazan", cardDesc:"Saudi Arabia — serving residential, commercial and industrial clients across the Jazan region. Exact address available on request."
      },
      faq: {
        eyebrow:"FAQ", title:"Frequently Asked Questions",
        q1:"What services do you provide?", a1:"Electrical, mechanical, HVAC, plumbing, interior, decoration, renovation, civil work, generator repair, machine repair, CCTV, fire alarm, solar and UPS / IPS.",
        q2:"Do you handle residential and commercial projects?", a2:"Yes. Work is completed across homes, offices, restaurants, shops, hotels and industrial sites.",
        q3:"Do you work on small projects?", a3:"Yes, smaller jobs are welcome and are often handled personally rather than through a full team.",
        q4:"How do you calculate project cost?", a4:"Cost is discussed after reviewing the project scope, materials needed and site conditions — there are no fixed online prices.",
        q5:"Do you provide site visits?", a5:"Yes, a site visit can be arranged to assess the work before finalizing scope and cost.",
        q6:"Can you handle complete MEP and interior work?", a6:"Yes, from technical MEP systems through to full interior finishing, either as separate services or one combined project.",
        q7:"How can I request a quotation?", a7:"Use the quote form on this site to send your details via WhatsApp or email, or contact directly by phone.",
        q8:"How can I contact you quickly?", a8:"WhatsApp and phone are the fastest ways to reach out — both are available at +966 55 008 2140.",
        q9:"Do you provide a team for larger projects?", a9:"Yes, an experienced team is brought in whenever the size or nature of the project requires it.",
        q10:"Which areas do you serve?", a10:"Work is based in Al Madaya, Jazan, and covers surrounding areas across the Jazan region of Saudi Arabia."
      },
      footer: {
        desc:"MEP & Interior Specialist based in Al Madaya, Jazan, Saudi Arabia. 35+ years of practical experience across technical and interior trades.",
        quickLinks:"Quick Links", more:"More", getInTouch:"Get in Touch", copyright:"All rights reserved.", builtNote:"Built by Khaled Bin A. Rob"
      },
      mobileBar: { call:"Call", whatsapp:"WhatsApp", quote:"Quote" }
    },

    /* ======================================================================
       ARABIC (ar) — RTL
       ====================================================================== */
    ar: {
      nav: { home:"الرئيسية", about:"نبذة عنا", services:"الخدمات", projects:"المشاريع", gallery:"معرض الصور", whyUs:"لماذا نحن", reviews:"آراء العملاء", faq:"الأسئلة الشائعة", contact:"تواصل معنا", requestQuote:"اطلب عرض سعر" },
      aria: { openMenu:"فتح القائمة", closeMenu:"إغلاق القائمة", chatWhatsapp:"الدردشة عبر واتساب", backToTop:"العودة إلى الأعلى", prevImage:"الصورة السابقة", nextImage:"الصورة التالية", closeDialog:"إغلاق", prevReview:"المراجعة السابقة", nextReview:"المراجعة التالية", imageViewer:"عارض الصور", brandHome:"الصفحة الرئيسية لعبدالرب", chooseLanguage:"اختر اللغة" },
      brand: { tag:"MEP & Interior" },
      hero: {
        label:"أخصائي الأعمال الكهروميكانيكية والديكور الداخلي",
        title:"عبدالرب ميا",
        desc:"خبرة عملية في أعمال الكهرباء والميكانيكا والسباكة والتكييف وتطوير الديكور الداخلي ومشاريع الترميم — مقرنا في المدية، جازان، المملكة العربية السعودية.",
        btnQuote:"اطلب عرض سعر", btnWhatsapp:"راسلنا عبر واتساب", btnCall:"اتصل الآن",
        metaYearsLabel:"سنوات الخبرة", metaProjectsLabel:"مشروع منجز", metaLocationSub:"المملكة العربية السعودية",
        scroll:"مرر للأسفل"
      },
      about: {
        eyebrow:"نبذة عنا", title:"نبذة عن عبدالرب",
        p1:"عبدالرب ميا أخصائي متمرس في الأعمال الكهروميكانيكية والديكور الداخلي، يمتلك أكثر من 35 عامًا من الخبرة العملية في الكهرباء والميكانيكا والسباكة والتكييف وتطوير الديكور الداخلي وأعمال الترميم.",
        p2:"يقوم بمراجعة كل مشروع بناءً على متطلباته، ويناقش النطاق والتكلفة والتوقيت مع العميل، ثم يتولى تنفيذ العمل وفقًا لحجم المشروع وطبيعته.",
        p3:"قد يتولى المشاريع الصغيرة بنفسه شخصيًا، بينما تُنجز المشاريع الأكبر بمساعدة فريق مناسب.",
        point1:"تواصل مباشر مع العميل", point2:"نطاق وتكلفة وتوقيت واضح", point3:"فريق مناسب للأعمال الكبيرة", point4:"أكثر من 35 عامًا من الخبرة الميدانية",
        badgeLabel:"سنوات من الممارسة"
      },
      stats: { years:"سنوات الخبرة", projects:"مشروع منجز", mepDesc:"خدمات فنية", interiorLabel:"الديكور الداخلي", interiorDesc:"تصميم وترميم" },
      services: {
        eyebrow:"الخدمات", title:"خدماتنا",
        desc:"من الأنظمة الفنية إلى التحسين الكامل للديكور الداخلي، يتم التخطيط لكل مشروع وفقًا لمتطلبات العميل.",
        ctaLabel:"اطلب هذه الخدمة",
        electricalTitle:"الكهرباء", electricalDesc:"تمديدات كهربائية، إضاءة، تركيب لوحات التوزيع، مولدات، كاميرات مراقبة، إنذار حريق، طاقة شمسية، UPS / IPS وإصلاح الأعطال.",
        mechanicalTitle:"الميكانيكا", mechanicalDesc:"تكييف الهواء، تركيب المكيفات، الصيانة، التهوية، مجاري الهواء، وإصلاح المولدات والآلات.",
        plumbingTitle:"السباكة", plumbingDesc:"إمدادات المياه، تركيب الأدوات الصحية، الصرف الصحي، سباكة الحمامات، تركيب الأنابيب وخزانات المياه.",
        interiorTitle:"الديكور الداخلي والتزيين", interiorDesc:"أسقف مستعارة، دهانات، تزيين الجدران، أرضيات، مطابخ، حمامات، أثاث وإضاءة ديكورية.",
        renovationTitle:"الترميم", renovationDesc:"ترميم المنازل والشقق والمكاتب والمحلات والمطاعم.",
        civilTitle:"الأعمال المدنية والتشطيبات", civilDesc:"بلاط، عزل مائي وأعمال التشطيب ذات الصلة."
      },
      process: {
        eyebrow:"كيف نعمل", title:"كيف تبدأ عملية العمل", desc:"عملية بسيطة وشفافة من أول رسالة وحتى تسليم المشروع.",
        step1Title:"أخبرنا عن مشروعك", step1Desc:"شاركنا ما تحتاجه عبر واتساب أو الاتصال أو نموذج طلب عرض السعر.",
        step2Title:"مراجعة المتطلبات", step2Desc:"تتم مراجعة نطاق المشروع وظروف الموقع بعناية.",
        step3Title:"مناقشة التكلفة والوقت", step3Desc:"محادثة واضحة حول الميزانية والجدول الزمني والمواد.",
        step4Title:"تحديد نطاق العمل", step4Desc:"يتم تأكيد النطاق والجدول الزمني قبل بدء العمل.",
        step5Title:"تنفيذ المشروع", step5Desc:"يتم تنفيذ العمل وفق الخطة مع تحديثات منتظمة.",
        step6Title:"الإنجاز والتسليم", step6Desc:"يتم إجراء الفحوصات النهائية وتسليم المشروع."
      },
      projectsSection: {
        eyebrow:"الأعمال", title:"مشاريع مختارة", desc:"نماذج من الأعمال السكنية والتجارية والفنية المنجزة في جميع أنحاء جازان.",
        filterAll:"الكل", filterResidential:"سكني", filterCommercial:"تجاري", filterInterior:"ديكور داخلي", filterMep:"الأعمال الكهروميكانيكية", filterRenovation:"ترميم",
        viewProject:"عرض المشروع"
      },
      modal: { type:"النوع", location:"الموقع", duration:"المدة", area:"المساحة" },
      galleryPage: {
        eyebrow:"معرض الصور", title:"تفاصيل الأعمال", desc:"نظرة أقرب على أعمال الكهرباء والميكانيكا والسباكة والديكور الداخلي والترميم.",
        filterAll:"الكل", filterElectrical:"كهرباء", filterMechanical:"ميكانيكا", filterPlumbing:"سباكة", filterInterior:"ديكور داخلي", filterRenovation:"ترميم", filterOther:"أخرى"
      },
      beforeAfter: {
        eyebrow:"التحول", title:"قبل وبعد", desc:"اسحب الفاصل لمقارنة التحول في مشاريع الترميم المختارة.",
        before:"قبل", after:"بعد", tabLiving:"غرفة المعيشة", tabBathroom:"الحمام"
      },
      whyUs: {
        eyebrow:"لماذا نحن", title:"لماذا تختار عبدالرب؟", desc:"عقود من الخبرة الميدانية العملية إلى جانب تواصل واضح وصادق.",
        item1Title:"أكثر من 35 عامًا من الخبرة العملية", item1Desc:"خبرة عملية طويلة الأمد في مجالات الكهرباء والميكانيكا والديكور الداخلي.",
        item2Title:"أكثر من 500 مشروع منجز", item2Desc:"سجل حافل بالإنجازات في الأعمال السكنية والتجارية والصناعية.",
        item3Title:"تواصل مباشر مع العميل", item3Desc:"تتحدث مباشرة عن مشروعك — دون طبقات وسيطة غير ضرورية.",
        item4Title:"تنفيذ مرن للمشاريع", item4Desc:"يتم تكييف العمل ليناسب حجم وميزانية وجدول كل مشروع.",
        item5Title:"فريق ذو خبرة للمشاريع الكبيرة", item5Desc:"يتم إحضار فريق كفء عند الحاجة إليه في المشروع.",
        item6Title:"مناقشة واضحة للنطاق والتكلفة والوقت", item6Desc:"يبدأ كل مشروع بمحادثة صادقة قبل بدء أي عمل."
      },
      reviews: { eyebrow:"آراء العملاء", title:"ماذا يقول عملاؤنا", disclaimer:"آراء نموذجية معروضة لأغراض العرض التوضيحي — لم يتم التحقق منها بعد كشهادات عملاء فعلية." },
      certificate: { eyebrow:"المؤهلات", title:"الخلفية المهنية", desc:"أساس فني مبني على تدريب رسمي وعقود من الخبرة الميدانية التطبيقية.", qualification:"المؤهل", institution:"المؤسسة", year:"السنة", qualificationVal:"دبلوم" },
      quoteCta: { eyebrow:"ابدأ الآن", title:"لنتحدث عن مشروعك", desc:"أخبرنا بما تحتاجه. شاركنا بعض التفاصيل عن مشروعك وسنجهز طريقة مناسبة لمناقشة العمل معك.", btn1:"اطلب عرض سعر مجاني", btn2:"راسلنا عبر واتساب" },
      quoteForm: {
        eyebrow:"اطلب عرض سعر", title:"شارك تفاصيل مشروعك", desc:"املأ التفاصيل أدناه، ثم أرسلها عبر واتساب أو البريد الإلكتروني — ستقوم بمراجعة الرسالة قبل إرسالها.",
        labelName:"الاسم الكامل", labelPhone:"رقم الهاتف", labelWhatsapp:"واتساب", labelEmail:"البريد الإلكتروني", labelProjectType:"نوع المشروع", labelLocation:"موقع المشروع", labelService:"الخدمة المطلوبة", labelArea:"مساحة / حجم المشروع", labelBudget:"الميزانية التقديرية", labelStartDate:"تاريخ البدء المتوقع", labelDescription:"وصف المشروع",
        phName:"اسمك الكامل", phPhone:"+966 5X XXX XXXX", phWhatsapp:"إن كان مختلفًا عن الهاتف", phEmail:"you@example.com", phProjectType:"اختر نوع المشروع", phLocation:"المدينة / المنطقة", phService:"اختر الخدمة", phArea:"مثال: 200 م²", phBudget:"اختياري", phStartDate:"مثال: الشهر القادم", phDescription:"صف باختصار ما تحتاج إنجازه",
        optResidential:"سكني", optCommercial:"تجاري", optOffice:"مكتب", optRestaurant:"مطعم", optShop:"محل", optHotel:"فندق", optIndustrial:"صناعي", optOther:"أخرى",
        svcElectrical:"الكهرباء", svcMechanical:"الميكانيكا", svcHVAC:"تكييف", svcPlumbing:"السباكة", svcInterior:"الديكور الداخلي", svcHomeDecoration:"ديكور منزلي", svcRenovation:"الترميم", svcCivilWork:"أعمال مدنية", svcGeneratorRepair:"إصلاح المولدات", svcMachineRepair:"إصلاح الآلات", svcCCTV:"كاميرات مراقبة", svcFireAlarm:"إنذار حريق", svcSolar:"طاقة شمسية", svcUPS:"UPS / IPS", svcMultiple:"خدمات متعددة",
        btnWhatsapp:"إرسال عبر واتساب", btnEmail:"إرسال عبر البريد الإلكتروني",
        note:"لا يتم إرسال هذا النموذج تلقائيًا. فهو يجهز رسالتك فقط — ستقوم أنت بالضغط على إرسال في واتساب أو تطبيق البريد الإلكتروني."
      },
      contact: {
        eyebrow:"تواصل معنا", desc:"أخصائي الأعمال الكهروميكانيكية والديكور الداخلي · المدية، جازان، المملكة العربية السعودية",
        phoneLabel:"الهاتف", whatsappLabel:"واتساب", emailLabel:"البريد الإلكتروني", locationLabel:"الموقع", locationVal:"المدية، جازان، المملكة العربية السعودية",
        btnCall:"اتصال", btnWhatsapp:"واتساب", btnEmail:"البريد",
        cardTitle:"المدية، جازان", cardDesc:"المملكة العربية السعودية — نخدم العملاء السكنيين والتجاريين والصناعيين في جميع أنحاء منطقة جازان. العنوان الدقيق متاح عند الطلب."
      },
      faq: {
        eyebrow:"الأسئلة الشائعة", title:"الأسئلة الشائعة",
        q1:"ما الخدمات التي تقدمونها؟", a1:"الكهرباء، الميكانيكا، التكييف، السباكة، الديكور الداخلي، التزيين، الترميم، الأعمال المدنية، إصلاح المولدات، إصلاح الآلات، كاميرات المراقبة، إنذار الحريق، الطاقة الشمسية وUPS / IPS.",
        q2:"هل تتعاملون مع المشاريع السكنية والتجارية؟", a2:"نعم. يتم تنفيذ الأعمال في المنازل والمكاتب والمطاعم والمحلات والفنادق والمواقع الصناعية.",
        q3:"هل تعملون على المشاريع الصغيرة؟", a3:"نعم، الأعمال الصغيرة مرحب بها وغالبًا ما تُنجز شخصيًا بدلاً من الاستعانة بفريق كامل.",
        q4:"كيف تحتسبون تكلفة المشروع؟", a4:"تتم مناقشة التكلفة بعد مراجعة نطاق المشروع والمواد المطلوبة وظروف الموقع — لا توجد أسعار ثابتة عبر الإنترنت.",
        q5:"هل تقدمون زيارات ميدانية؟", a5:"نعم، يمكن ترتيب زيارة ميدانية لتقييم العمل قبل تحديد النطاق والتكلفة النهائية.",
        q6:"هل يمكنكم التعامل مع الأعمال الكهروميكانيكية والديكور الداخلي الكاملة؟", a6:"نعم، من الأنظمة الفنية الكهروميكانيكية إلى التشطيب الداخلي الكامل، سواء كخدمات منفصلة أو كمشروع متكامل واحد.",
        q7:"كيف يمكنني طلب عرض سعر؟", a7:"استخدم نموذج طلب عرض السعر في هذا الموقع لإرسال تفاصيلك عبر واتساب أو البريد الإلكتروني، أو تواصل مباشرة عبر الهاتف.",
        q8:"كيف يمكنني التواصل معكم بسرعة؟", a8:"واتساب والهاتف هما أسرع طريقتين للتواصل — كلاهما متاح على الرقم +966 55 008 2140.",
        q9:"هل توفرون فريقًا للمشاريع الكبيرة؟", a9:"نعم، يتم إحضار فريق ذو خبرة عندما يتطلب حجم أو طبيعة المشروع ذلك.",
        q10:"ما هي المناطق التي تخدمونها؟", a10:"يتمركز العمل في المدية، جازان، ويغطي المناطق المحيطة في جميع أنحاء منطقة جازان بالمملكة العربية السعودية."
      },
      footer: {
        desc:"أخصائي أعمال كهروميكانيكية وديكور داخلي، مقره المدية، جازان، المملكة العربية السعودية. أكثر من 35 عامًا من الخبرة العملية في المجالات الفنية والديكور الداخلي.",
        quickLinks:"روابط سريعة", more:"المزيد", getInTouch:"تواصل معنا", copyright:"جميع الحقوق محفوظة.", builtNote:"بناه خالد بن عبد الرب"
      },
      mobileBar: { call:"اتصال", whatsapp:"واتساب", quote:"عرض سعر" }
    },

    /* ======================================================================
       BANGLA (bn)
       ====================================================================== */
    bn: {
      nav: { home:"হোম", about:"সম্পর্কে", services:"সেবাসমূহ", projects:"প্রজেক্টসমূহ", gallery:"গ্যালারি", whyUs:"কেন আমরা", reviews:"রিভিউ", faq:"সাধারণ জিজ্ঞাসা", contact:"যোগাযোগ", requestQuote:"কোটেশন চান" },
      aria: { openMenu:"মেনু খুলুন", closeMenu:"মেনু বন্ধ করুন", chatWhatsapp:"হোয়াটসঅ্যাপে চ্যাট করুন", backToTop:"উপরে ফিরে যান", prevImage:"পূর্ববর্তী ছবি", nextImage:"পরবর্তী ছবি", closeDialog:"বন্ধ করুন", prevReview:"পূর্ববর্তী রিভিউ", nextReview:"পরবর্তী রিভিউ", imageViewer:"ছবি ভিউয়ার", brandHome:"আব্দুর রব হোম", chooseLanguage:"ভাষা নির্বাচন করুন" },
      brand: { tag:"MEP & Interior" },
      hero: {
        label:"এমইপি ও ইন্টেরিয়র সাবকন্ট্রাক্টর",
        title:"আব্দুর রব মিয়া",
        desc:"বৈদ্যুতিক, মেকানিক্যাল, প্লাম্বিং, এইচভিএসি, ইন্টেরিয়র ডেভেলপমেন্ট ও রেনোভেশন প্রজেক্টে বাস্তব অভিজ্ঞতা — অবস্থান আল মাদায়া, জাজান, সৌদি আরব।",
        btnQuote:"কোটেশনের জন্য অনুরোধ করুন", btnWhatsapp:"হোয়াটসঅ্যাপে যোগাযোগ করুন", btnCall:"এখনই কল করুন",
        metaYearsLabel:"বছরের অভিজ্ঞতা", metaProjectsLabel:"সম্পন্ন প্রজেক্ট", metaLocationSub:"সৌদি আরব",
        scroll:"স্ক্রল করুন"
      },
      about: {
        eyebrow:"পরিচিতি", title:"আব্দুর রব সম্পর্কে",
        p1:"আব্দুর রব মিয়া একজন অভিজ্ঞ এমইপি ও ইন্টেরিয়র সাবকন্ট্রাক্টর, যার বৈদ্যুতিক, মেকানিক্যাল, প্লাম্বিং, এইচভিএসি, ইন্টেরিয়র ডেভেলপমেন্ট ও রেনোভেশন কাজে ৩৫ বছরেরও বেশি বাস্তব অভিজ্ঞতা রয়েছে।",
        p2:"তিনি প্রতিটি প্রজেক্ট তার চাহিদা অনুযায়ী পর্যালোচনা করেন, ক্লায়েন্টের সাথে কাজের পরিধি, খরচ ও সময় নিয়ে আলোচনা করেন এবং প্রজেক্টের আকার ও প্রকৃতি অনুযায়ী কাজ পরিচালনা করেন।",
        p3:"ছোট প্রজেক্ট তিনি নিজে হাতে করতে পারেন, আর বড় প্রজেক্ট একটি উপযুক্ত টিমের মাধ্যমে সম্পন্ন করা হয়।",
        point1:"সরাসরি ক্লায়েন্ট যোগাযোগ", point2:"স্পষ্ট পরিধি, খরচ ও সময়", point3:"বড় কাজের জন্য উপযুক্ত টিম", point4:"৩৫+ বছরের হাতে-কলমে অভিজ্ঞতা",
        badgeLabel:"বছরের অভিজ্ঞতা"
      },
      stats: { years:"বছরের অভিজ্ঞতা", projects:"সম্পন্ন প্রজেক্ট", mepDesc:"টেকনিক্যাল সেবা", interiorLabel:"ইন্টেরিয়র", interiorDesc:"ডিজাইন ও রেনোভেশন" },
      services: {
        eyebrow:"সেবাসমূহ", title:"আমাদের সেবাসমূহ",
        desc:"টেকনিক্যাল সিস্টেম থেকে শুরু করে সম্পূর্ণ ইন্টেরিয়র উন্নয়ন পর্যন্ত, প্রতিটি প্রজেক্ট ক্লায়েন্টের চাহিদা অনুযায়ী পরিকল্পনা করা হয়।",
        ctaLabel:"এই সেবার জন্য অনুরোধ করুন",
        electricalTitle:"ইলেকট্রিক্যাল", electricalDesc:"ইলেকট্রিক্যাল ওয়্যারিং, লাইটিং, ডিবি ইনস্টলেশন, জেনারেটর, সিসিটিভি, ফায়ার অ্যালার্ম, সোলার, ইউপিএস/আইপিএস এবং সমস্যা সমাধান।",
        mechanicalTitle:"মেকানিক্যাল", mechanicalDesc:"এইচভিএসি, এসি ইনস্টলেশন, সার্ভিসিং, মেইনটেনেন্স, ভেন্টিলেশন, ডাক্টিং, জেনারেটর ও মেশিন মেরামত।",
        plumbingTitle:"প্লাম্বিং", plumbingDesc:"পানি সরবরাহ, স্যানিটারি ইনস্টলেশন, ড্রেনেজ, বাথরুম প্লাম্বিং, পাইপ ইনস্টলেশন ও পানির ট্যাংক।",
        interiorTitle:"ইন্টেরিয়র ও ডেকোরেশন", interiorDesc:"ফলস সিলিং, পেইন্টিং, ওয়াল ডেকোরেশন, ফ্লোরিং, কিচেন, বাথরুম, ফার্নিচার ও ডেকোরেটিভ লাইটিং।",
        renovationTitle:"রেনোভেশন", renovationDesc:"বাসা, অ্যাপার্টমেন্ট, অফিস, দোকান ও রেস্টুরেন্ট রেনোভেশন।",
        civilTitle:"সিভিল ও ফিনিশিং", civilDesc:"টাইলস, ওয়াটারপ্রুফিং এবং সংশ্লিষ্ট ফিনিশিং কাজ।"
      },
      process: {
        eyebrow:"কীভাবে কাজ শুরু হয়", title:"কাজ যেভাবে শুরু হয়", desc:"প্রথম মেসেজ থেকে প্রজেক্ট হস্তান্তর পর্যন্ত একটি সহজ ও স্বচ্ছ প্রক্রিয়া।",
        step1Title:"আপনার প্রজেক্ট সম্পর্কে জানান", step1Desc:"হোয়াটসঅ্যাপ, কল অথবা কোটেশন ফর্মের মাধ্যমে আপনার প্রয়োজন জানান।",
        step2Title:"প্রয়োজনীয়তা পর্যালোচনা", step2Desc:"প্রজেক্টের পরিধি ও সাইটের অবস্থা সতর্কতার সাথে পর্যালোচনা করা হয়।",
        step3Title:"খরচ ও সময় নিয়ে আলোচনা", step3Desc:"বাজেট, সময়সূচি ও উপকরণ নিয়ে একটি স্পষ্ট আলোচনা।",
        step4Title:"কাজ চূড়ান্তকরণ", step4Desc:"কাজ শুরুর আগে পরিধি ও সময়সূচি নিশ্চিত করা হয়।",
        step5Title:"প্রজেক্ট বাস্তবায়ন", step5Desc:"পরিকল্পনা অনুযায়ী কাজ সম্পন্ন করা হয়, নিয়মিত আপডেটসহ।",
        step6Title:"সম্পন্ন ও হস্তান্তর", step6Desc:"চূড়ান্ত যাচাই শেষে প্রজেক্ট হস্তান্তর করা হয়।"
      },
      projectsSection: {
        eyebrow:"পোর্টফোলিও", title:"নির্বাচিত প্রজেক্টসমূহ", desc:"জাজান জুড়ে সম্পন্ন আবাসিক, বাণিজ্যিক ও টেকনিক্যাল কাজের কিছু নমুনা।",
        filterAll:"সব", filterResidential:"আবাসিক", filterCommercial:"বাণিজ্যিক", filterInterior:"ইন্টেরিয়র", filterMep:"এমইপি", filterRenovation:"রেনোভেশন",
        viewProject:"প্রজেক্ট দেখুন"
      },
      modal: { type:"ধরন", location:"অবস্থান", duration:"সময়কাল", area:"আয়তন" },
      galleryPage: {
        eyebrow:"গ্যালারি", title:"কাজের বিস্তারিত", desc:"বৈদ্যুতিক, মেকানিক্যাল, প্লাম্বিং, ইন্টেরিয়র ও রেনোভেশন কাজের কাছাকাছি একটি দৃশ্য।",
        filterAll:"সব", filterElectrical:"ইলেকট্রিক্যাল", filterMechanical:"মেকানিক্যাল", filterPlumbing:"প্লাম্বিং", filterInterior:"ইন্টেরিয়র", filterRenovation:"রেনোভেশন", filterOther:"অন্যান্য"
      },
      beforeAfter: {
        eyebrow:"পরিবর্তন", title:"আগে ও পরে", desc:"নির্বাচিত রেনোভেশন প্রজেক্টের পরিবর্তন তুলনা করতে ডিভাইডার টেনে সরান।",
        before:"আগে", after:"পরে", tabLiving:"লিভিং স্পেস", tabBathroom:"বাথরুম"
      },
      whyUs: {
        eyebrow:"কেন আমরা", title:"কেন আব্দুর রবকে বেছে নেবেন?", desc:"কয়েক দশকের হাতে-কলমে অভিজ্ঞতা, সাথে স্পষ্ট ও সৎ যোগাযোগ।",
        item1Title:"৩৫+ বছরের ব্যবহারিক অভিজ্ঞতা", item1Desc:"বৈদ্যুতিক, মেকানিক্যাল ও ইন্টেরিয়র কাজে দীর্ঘমেয়াদী, হাতে-কলমে অভিজ্ঞতা।",
        item2Title:"৫০০+ সম্পন্ন প্রজেক্ট", item2Desc:"আবাসিক, বাণিজ্যিক ও শিল্প খাতে প্রমাণিত সাফল্যের রেকর্ড।",
        item3Title:"সরাসরি ক্লায়েন্ট যোগাযোগ", item3Desc:"আপনার প্রজেক্ট নিয়ে সরাসরি কথা বলুন — কোনো অপ্রয়োজনীয় মধ্যস্থতা ছাড়াই।",
        item4Title:"নমনীয় প্রজেক্ট বাস্তবায়ন", item4Desc:"প্রতিটি প্রজেক্টের আকার, বাজেট ও সময়সূচি অনুযায়ী কাজ সমন্বয় করা হয়।",
        item5Title:"বড় প্রজেক্টের জন্য অভিজ্ঞ টিম", item5Desc:"প্রয়োজন হলে একটি দক্ষ টিম নিয়ে আসা হয়।",
        item6Title:"পরিধি, খরচ ও সময় নিয়ে স্পষ্ট আলোচনা", item6Desc:"কাজ শুরুর আগে প্রতিটি প্রজেক্ট একটি সৎ আলোচনার মাধ্যমে শুরু হয়।"
      },
      reviews: { eyebrow:"রিভিউ", title:"ক্লায়েন্টরা যা বলেন", disclaimer:"নমুনা রিভিউ শুধুমাত্র উদাহরণের জন্য দেখানো হয়েছে — এখনো যাচাইকৃত ক্লায়েন্ট টেস্টিমোনিয়াল নয়।" },
      certificate: { eyebrow:"সার্টিফিকেট", title:"পেশাগত পটভূমি", desc:"প্রাতিষ্ঠানিক প্রশিক্ষণ এবং কয়েক দশকের ফিল্ড অভিজ্ঞতার উপর গড়ে ওঠা একটি টেকনিক্যাল ভিত্তি।", qualification:"যোগ্যতা", institution:"প্রতিষ্ঠান", year:"সাল", qualificationVal:"ডিপ্লোমা" },
      quoteCta: { eyebrow:"শুরু করুন", title:"আপনার প্রজেক্ট নিয়ে কথা বলি", desc:"আপনার প্রয়োজন আমাদের জানান। আপনার প্রজেক্ট সম্পর্কে কিছু তথ্য দিন, আমরা কাজ নিয়ে আলোচনার একটি সুবিধাজনক উপায় তৈরি করব।", btn1:"বিনামূল্যে কোটেশন চান", btn2:"হোয়াটসঅ্যাপে যোগাযোগ করুন" },
      quoteForm: {
        eyebrow:"কোটেশন চান", title:"আপনার প্রজেক্টের বিস্তারিত জানান", desc:"নিচের তথ্য পূরণ করুন, তারপর হোয়াটসঅ্যাপ বা ইমেইলের মাধ্যমে পাঠান — পাঠানোর আগে মেসেজটি আপনি দেখে নিতে পারবেন।",
        labelName:"পূর্ণ নাম", labelPhone:"ফোন নম্বর", labelWhatsapp:"হোয়াটসঅ্যাপ", labelEmail:"ইমেইল", labelProjectType:"প্রজেক্টের ধরন", labelLocation:"প্রজেক্টের অবস্থান", labelService:"প্রয়োজনীয় সেবা", labelArea:"প্রজেক্টের আয়তন/আকার", labelBudget:"আনুমানিক বাজেট", labelStartDate:"প্রত্যাশিত শুরুর তারিখ", labelDescription:"প্রজেক্টের বিবরণ",
        phName:"আপনার পূর্ণ নাম", phPhone:"+966 5X XXX XXXX", phWhatsapp:"ফোন নম্বরের থেকে ভিন্ন হলে", phEmail:"you@example.com", phProjectType:"প্রজেক্টের ধরন বাছাই করুন", phLocation:"শহর/এলাকা", phService:"সেবা বাছাই করুন", phArea:"যেমন ২০০ বর্গমিটার", phBudget:"ঐচ্ছিক", phStartDate:"যেমন আগামী মাস", phDescription:"সংক্ষেপে বর্ণনা করুন আপনি কী কাজ করাতে চান",
        optResidential:"আবাসিক", optCommercial:"বাণিজ্যিক", optOffice:"অফিস", optRestaurant:"রেস্টুরেন্ট", optShop:"দোকান", optHotel:"হোটেল", optIndustrial:"শিল্প", optOther:"অন্যান্য",
        svcElectrical:"ইলেকট্রিক্যাল", svcMechanical:"মেকানিক্যাল", svcHVAC:"এইচভিএসি", svcPlumbing:"প্লাম্বিং", svcInterior:"ইন্টেরিয়র", svcHomeDecoration:"হোম ডেকোরেশন", svcRenovation:"রেনোভেশন", svcCivilWork:"সিভিল ওয়ার্ক", svcGeneratorRepair:"জেনারেটর মেরামত", svcMachineRepair:"মেশিন মেরামত", svcCCTV:"সিসিটিভি", svcFireAlarm:"ফায়ার অ্যালার্ম", svcSolar:"সোলার", svcUPS:"ইউপিএস/আইপিএস", svcMultiple:"একাধিক সেবা",
        btnWhatsapp:"হোয়াটসঅ্যাপে পাঠান", btnEmail:"ইমেইলে পাঠান",
        note:"এই ফর্মটি স্বয়ংক্রিয়ভাবে জমা হয় না। এটি শুধু আপনার মেসেজ তৈরি করে — আপনাকে নিজে হোয়াটসঅ্যাপ বা ইমেইল অ্যাপে গিয়ে পাঠাতে হবে।"
      },
      contact: {
        eyebrow:"যোগাযোগ", desc:"এমইপি ও ইন্টেরিয়র সাবকন্ট্রাক্টর · আল মাদায়া, জাজান, সৌদি আরব",
        phoneLabel:"ফোন", whatsappLabel:"হোয়াটসঅ্যাপ", emailLabel:"ইমেইল", locationLabel:"অবস্থান", locationVal:"আল মাদায়া, জাজান, সৌদি আরব",
        btnCall:"কল করুন", btnWhatsapp:"হোয়াটসঅ্যাপ", btnEmail:"ইমেইল",
        cardTitle:"আল মাদায়া, জাজান", cardDesc:"সৌদি আরব — জাজান অঞ্চল জুড়ে আবাসিক, বাণিজ্যিক ও শিল্প ক্লায়েন্টদের সেবা প্রদান করা হয়। অনুরোধে সঠিক ঠিকানা প্রদান করা হবে।"
      },
      faq: {
        eyebrow:"সাধারণ জিজ্ঞাসা", title:"প্রায়শই জিজ্ঞাসিত প্রশ্ন",
        q1:"আপনারা কী কী সেবা প্রদান করেন?", a1:"ইলেকট্রিক্যাল, মেকানিক্যাল, এইচভিএসি, প্লাম্বিং, ইন্টেরিয়র, ডেকোরেশন, রেনোভেশন, সিভিল ওয়ার্ক, জেনারেটর মেরামত, মেশিন মেরামত, সিসিটিভি, ফায়ার অ্যালার্ম, সোলার এবং ইউপিএস/আইপিএস।",
        q2:"আপনারা কি আবাসিক ও বাণিজ্যিক প্রজেক্ট নিয়ে কাজ করেন?", a2:"হ্যাঁ। বাসা, অফিস, রেস্টুরেন্ট, দোকান, হোটেল ও শিল্প স্থাপনায় কাজ সম্পন্ন করা হয়।",
        q3:"আপনারা কি ছোট প্রজেক্টেও কাজ করেন?", a3:"হ্যাঁ, ছোট কাজও স্বাগত এবং সেগুলো প্রায়ই পুরো টিমের পরিবর্তে ব্যক্তিগতভাবে করা হয়।",
        q4:"আপনারা কীভাবে প্রজেক্টের খরচ হিসাব করেন?", a4:"প্রজেক্টের পরিধি, প্রয়োজনীয় উপকরণ ও সাইটের অবস্থা পর্যালোচনার পর খরচ নিয়ে আলোচনা করা হয় — অনলাইনে কোনো নির্দিষ্ট মূল্য নেই।",
        q5:"আপনারা কি সাইট ভিজিট প্রদান করেন?", a5:"হ্যাঁ, কাজের পরিধি ও খরচ চূড়ান্ত করার আগে মূল্যায়নের জন্য সাইট ভিজিট ব্যবস্থা করা যায়।",
        q6:"আপনারা কি সম্পূর্ণ এমইপি ও ইন্টেরিয়র কাজ করতে পারেন?", a6:"হ্যাঁ, টেকনিক্যাল এমইপি সিস্টেম থেকে সম্পূর্ণ ইন্টেরিয়র ফিনিশিং পর্যন্ত — আলাদা সেবা হিসেবে বা একটি সম্মিলিত প্রজেক্ট হিসেবে।",
        q7:"আমি কীভাবে কোটেশনের জন্য অনুরোধ করতে পারি?", a7:"এই সাইটের কোটেশন ফর্ম ব্যবহার করে হোয়াটসঅ্যাপ বা ইমেইলের মাধ্যমে আপনার তথ্য পাঠান, অথবা সরাসরি ফোনে যোগাযোগ করুন।",
        q8:"আমি কীভাবে দ্রুত আপনাদের সাথে যোগাযোগ করতে পারি?", a8:"হোয়াটসঅ্যাপ ও ফোনই যোগাযোগের দ্রুততম উপায় — উভয়ই পাওয়া যাবে +966 55 008 2140 নম্বরে।",
        q9:"বড় প্রজেক্টের জন্য কি আপনারা টিম প্রদান করেন?", a9:"হ্যাঁ, প্রজেক্টের আকার বা প্রকৃতি অনুযায়ী প্রয়োজন হলে একটি অভিজ্ঞ টিম নিয়ে আসা হয়।",
        q10:"আপনারা কোন কোন এলাকায় সেবা দেন?", a10:"কাজের কেন্দ্র আল মাদায়া, জাজান, এবং সৌদি আরবের জাজান অঞ্চলের আশপাশের এলাকাও কভার করা হয়।"
      },
      footer: {
        desc:"এমইপি ও ইন্টেরিয়র সাবকন্ট্রাক্টর, অবস্থান আল মাদায়া, জাজান, সৌদি আরব। টেকনিক্যাল ও ইন্টেরিয়র কাজে ৩৫+ বছরের বাস্তব অভিজ্ঞতা।",
        quickLinks:"দ্রুত লিংক", more:"আরও", getInTouch:"যোগাযোগ করুন", copyright:"সর্বস্বত্ব সংরক্ষিত।", builtNote:"নির্মাণ করেছেন খালেদ বিন আ: রব"
      },
      mobileBar: { call:"কল", whatsapp:"হোয়াটসঅ্যাপ", quote:"কোটেশন" }
    }
  };

  /* ----------------------------------------------------------------------
     ENGINE
     ---------------------------------------------------------------------- */
  function getPath(obj, path) {
    return path.split(".").reduce(function (o, k) {
      return o && o[k] !== undefined ? o[k] : undefined;
    }, obj);
  }

  function getLang() {
    var saved = null;
    try { saved = localStorage.getItem(STORAGE_KEY); } catch (e) {}
    return SUPPORTED.indexOf(saved) !== -1 ? saved : "en";
  }

  function t(key, lang) {
    lang = lang || getLang();
    var val = getPath(translations[lang], key);
    if (val !== undefined) return val;
    var fallback = getPath(translations.en, key);
    return fallback !== undefined ? fallback : key;
  }

  function applyLang(lang) {
    document.documentElement.setAttribute("lang", lang);
    document.documentElement.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");
    document.body.classList.remove("lang-en", "lang-ar", "lang-bn");
    document.body.classList.add("lang-" + lang);

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var val = t(el.getAttribute("data-i18n"), lang);
      if (val !== undefined) el.textContent = val;
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach(function (el) {
      var val = t(el.getAttribute("data-i18n-placeholder"), lang);
      if (val !== undefined) el.setAttribute("placeholder", val);
    });
    document.querySelectorAll("[data-i18n-aria]").forEach(function (el) {
      var val = t(el.getAttribute("data-i18n-aria"), lang);
      if (val !== undefined) el.setAttribute("aria-label", val);
    });

    document.querySelectorAll(".lang-btn").forEach(function (btn) {
      btn.classList.toggle("active", btn.getAttribute("data-lang") === lang);
    });

    window.dispatchEvent(new CustomEvent("langchange", { detail: { lang: lang } }));
  }

  function setLang(lang) {
    if (SUPPORTED.indexOf(lang) === -1) return;
    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) {}
    applyLang(lang);
  }

  document.querySelectorAll(".lang-btn").forEach(function (btn) {
    btn.addEventListener("click", function () { setLang(btn.getAttribute("data-lang")); });
  });

  window.ARM_i18n = { getLang: getLang, setLang: setLang, t: t, translations: translations };

  /* Apply immediately — this script runs after all static HTML above it
     has been parsed, so data-i18n elements already exist in the DOM. */
  applyLang(getLang());
})();