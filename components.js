/**
 * components.js — Shared layout + Bilingual (AR/EN) system
 * najarriyadih.com — v2 fixed
 */

/* ═══════════════════════════════════════════
   CONSTANTS
═══════════════════════════════════════════ */
const PHONE  = '566099742';
const WA_NUM = '966566099742';
const DOMAIN = 'najarriyadih.com';

/* ═══════════════════════════════════════════
   TRANSLATIONS
═══════════════════════════════════════════ */
const translations = {
  ar: {
    dir: 'rtl', lang: 'ar',
    langBtnLabel: 'EN',
    langBtnFull: 'English',
    langBtnAria: 'Switch to English',
    siteName: 'مينا فني نجارة',
    pageTitle: 'مينا فني نجارة | أثاث مخصص، مطابخ، أبواب — najarriyadih.com',
    metaDesc: 'نجار الرياض المتخصص — تفصيل أثاث مخصص، تركيب مطابخ، أبواب خشبية، وصيانة بأعلى جودة. خبرة ٢٠ عامًا. اتصل الآن.',
    navHome: 'الرئيسية', navAbout: 'من نحن', navServices: 'خدماتنا',
    navGallery: 'معرض الأعمال', navContact: 'تواصل معنا',
    navCall: 'اتصل الآن', navWa: 'واتساب', navMenuAria: 'القائمة',
    waTooltip: 'راسلنا الآن!', backTopAria: 'للأعلى',
    heroEyebrow: 'موثوق منذ ٢٠٠٤ — الرياض',
    heroTitle1: 'نجارة احترافية',
    heroTitle2: 'في قلب الرياض',
    heroSubtitle: 'نصنع من الخشب تحفًا فنية — أثاث مخصص حسب طلبك، مطابخ فاخرة، أبواب راقية، وخدمات صيانة شاملة. الجودة ليست خيارًا، بل التزام.',
    heroCtaWa: 'تواصل الآن عبر واتساب',
    heroCtaServices: 'اكتشف خدماتنا',
    stat1Num: '+٦٠٠', stat1Label: 'مشروع منجز',
    stat2Num: '٢٠',   stat2Label: 'عامًا من الخبرة',
    stat3Num: '١٠٠٪', stat3Label: 'رضا العملاء',
    aboutSince: 'منذ ٢٠٠٤',
    aboutBadge: 'الأفضل تقييمًا<br/>في الرياض',
    aboutLabel: 'من نحن',
    aboutTitle1: 'حرفة توارثناها',
    aboutTitle2: 'وطوّرناها',
    aboutP1: 'منذ عام ٢٠٠٤، قدّمنا أكثر من ٦٠٠ مشروع نجارة في الرياض وضواحيها. نُحوّل كل قطعة خشب إلى تحفة فنية تُزيّن المنازل والمكاتب. نؤمن بأن كل تفصيلة صغيرة تُحدث فرقًا كبيرًا.',
    aboutP2: 'فريقنا من الحرفيين المهرة يجمع بين الأصالة والحداثة — نستخدم أجود أنواع الأخشاب المستوردة ونوظّف أحدث التقنيات لنقدّم منتجًا يليق بك ويدوم لسنوات.',
    aboutFeat1: 'أخشاب مستوردة بمعايير عالمية عالية الجودة',
    aboutFeat2: 'ضمان شامل على جميع الأعمال المنفّذة',
    aboutFeat3: 'تصاميم مخصصة ١٠٠٪ حسب طلب العميل',
    aboutFeat4: 'فريق ملتزم بالمواعيد وخدمة ما بعد البيع',
    aboutCta: 'تحدث مع فريقنا',
    servicesLabel: 'ماذا نقدّم',
    servicesTitle: 'خدماتنا المتميزة',
    servicesSubtitle: 'من الفكرة إلى التنفيذ — نغطي كل احتياجاتك الخشبية في الرياض',
    svc1Title: 'أثاث مخصص',
    svc1Text: 'نصمّم ونصنع أثاثًا يعكس شخصيتك — من غرف النوم إلى الصالات والمكاتب، كل قطعة تُصنع خصيصًا لك.',
    svc2Title: 'تركيب المطابخ',
    svc2Text: 'مطابخ فاخرة بتصاميم عصرية وكلاسيكية — وحدات تخزين ذكية وتشطيبات راقية تدوم طويلًا.',
    svc3Title: 'أبواب وأعمال خشبية',
    svc3Text: 'أبواب داخلية وخارجية بأحجام وتصاميم متنوعة — نقوش يدوية وتشطيبات احترافية تُضيف هيبةً لمدخلك.',
    svc4Title: 'صيانة وإصلاح',
    svc4Text: 'الأعمال الخشبية تحتاج عناية — نقدم خدمات الإصلاح والتجديد لإعادة الأثاث لرونقه الأول بأسرع وقت.',
    learnMore: 'اعرف أكثر',
    galleryLabel: 'أعمالنا',
    galleryTitle: 'معرض المشاريع',
    gallerySubtitle: 'نماذج منتقاة من أعمالنا المنجزة في الرياض — كل صورة تحكي قصة حرفة',
    gal1Ph: 'غرفة نوم كلاسيكية', gal1Ov: 'غرفة نوم فاخرة — تفصيل مخصص',
    gal2Ph: 'مطبخ عصري',          gal2Ov: 'مطبخ مودرن متكامل',
    gal3Ph: 'باب منقوش',           gal3Ov: 'باب رئيسي بنقوش يدوية',
    gal4Ph: 'وحدة تلفزيون',       gal4Ov: 'وحدة تلفزيون مخصصة',
    gal5Ph: 'مكتبة حائطية',       gal5Ov: 'مكتبة حائطية متكاملة',
    gal6Ph: 'طاولة طعام',          gal6Ov: 'طاولة طعام خشب صلب',
    whyLabel: 'لماذا نحن',
    whyTitle: 'ما يميّز', whyTitleEm: 'نجار الرياض',
    whySubtitle: 'ليس مجرد نجارة — بل تجربة متكاملة تبدأ بالفكرة وتنتهي برضاك',
    whyNum1: '٠١', whyCard1Title: 'جودة عالية',
    whyCard1Text: 'نستخدم أجود أنواع الأخشاب ومواد التشطيب المستوردة. كل منتج يخضع لمراقبة جودة صارمة قبل التسليم.',
    whyNum2: '٠٢', whyCard2Title: 'أسعار مناسبة',
    whyCard2Text: 'الجودة لا تعني الغلاء — نقدم أسعارًا تنافسية شفافة بلا رسوم مخفية مع خيارات تناسب كل ميزانية.',
    whyNum3: '٠٣', whyCard3Title: 'تنفيذ سريع',
    whyCard3Text: 'نلتزم بالمواعيد ونحترم وقتك. نضع جدولًا زمنيًا واضحًا منذ اليوم الأول ونسلّم في الموعد المحدد.',
    whyNum4: '٠٤', whyCard4Title: 'ضمان شامل',
    whyCard4Text: 'نقف خلف كل عمل ننجزه — ضمان كامل على جميع منتجاتنا وخدمة صيانة متابعة لراحة بالك التامة.',
    contactLabel: 'تواصل معنا',
    contactTitle: 'نحن هنا لخدمتك',
    contactSubtitle: 'تواصل معنا اليوم واحصل على استشارة مجانية وعرض سعر فوري',
    contactPhone: 'الهاتف',
    contactWa: 'واتساب', contactWaLink: 'راسلنا على واتساب',
    contactLocation: 'الموقع', contactLocationVal: 'الرياض، المملكة العربية السعودية',
    contactHours: 'ساعات العمل', contactHoursVal: 'السبت – الخميس: ٨ص – ٩م',
    mapTitle: 'موقع نجار الرياض',
    formName: 'الاسم الكامل', formNamePh: 'أدخل اسمك الكريم',
    formPhone: 'رقم الجوال',
    formService: 'الخدمة المطلوبة', formServicePh: 'اختر الخدمة...',
    formDesignConsult: 'استشارة تصميم', formOther: 'أخرى',
    formMessage: 'تفاصيل الطلب', formMessagePh: 'اشرح لنا احتياجاتك بالتفصيل...',
    formSubmit: 'إرسال الرسالة',
    formSending: 'جاري الإرسال...',
    formSuccessMsg: 'تم إرسال رسالتك بنجاح! سنتواصل معك قريبًا.',
    footerTagline: 'نجارة احترافية في الرياض — أثاث، مطابخ، أبواب، وصيانة بأعلى جودة وأفضل الأسعار. خبرة ٢٠ عامًا في خدمتك.',
    footerWaLink: 'راسلنا على واتساب',
    footerQuickLinks: 'روابط سريعة',
    footerServices: 'خدماتنا',
    footerContact: 'تواصل معنا',
    footerHome: 'الرئيسية', footerAbout: 'من نحن',
    footerGallery: 'معرض الأعمال', footerContactLink: 'تواصل معنا',
    footerLocation: 'الرياض، المملكة العربية السعودية',
    footerHours: 'السبت–الخميس: ٨ص–٩م',
    footerRights: 'جميع الحقوق محفوظة.',
    ariaInstagram: 'إنستغرام', ariaSnapchat: 'سناب شات',
    ariaTiktok: 'تيك توك', ariaWhatsapp: 'واتساب',
  },
  en: {
    dir: 'ltr', lang: 'en',
    langBtnLabel: 'عر',
    langBtnFull: 'العربية',
    langBtnAria: 'التبديل إلى العربية',
    siteName: 'Mina carpentry',
    pageTitle: ' – Master Carpenter | Custom Furniture, Kitchens, Doors — najarriyadih.com',
    metaDesc: "Riyadh's specialist carpenter — custom furniture, kitchen installation, wooden doors & full maintenance. 20 years of experience. Call now.",
    navHome: 'Home', navAbout: 'About Us', navServices: 'Services',
    navGallery: 'Portfolio', navContact: 'Contact',
    navCall: 'Call Now', navWa: 'WhatsApp', navMenuAria: 'Menu',
    waTooltip: 'Message us now!', backTopAria: 'Back to top',
    heroEyebrow: 'Trusted Since 2004 — Riyadh',
    heroTitle1: 'Professional Carpentry',
    heroTitle2: 'in the Heart of Riyadh',
    heroSubtitle: 'We craft wood into masterpieces — custom furniture, luxury kitchens, premium doors, and full maintenance services. Quality is a commitment, not an option.',
    heroCtaWa: 'Chat with us on WhatsApp',
    heroCtaServices: 'Explore Our Services',
    stat1Num: '+600',  stat1Label: 'Projects Completed',
    stat2Num: '20',    stat2Label: 'Years of Experience',
    stat3Num: '100%',  stat3Label: 'Client Satisfaction',
    aboutSince: 'Since 2004',
    aboutBadge: 'Top Rated<br/>in Riyadh',
    aboutLabel: 'Who We Are',
    aboutTitle1: 'A Craft We Inherited',
    aboutTitle2: 'and Perfected',
    aboutP1: 'Since 2004, we have delivered more than 600 carpentry projects across Riyadh and its surroundings. We transform every piece of wood into a work of art that beautifies homes and offices. We believe every small detail makes a big difference.',
    aboutP2: 'Our team of skilled craftsmen blends tradition with modernity — we use the finest imported woods and employ the latest techniques to deliver a product worthy of you that lasts for years.',
    aboutFeat1: 'Imported wood meeting international quality standards',
    aboutFeat2: 'Full warranty on all completed work',
    aboutFeat3: '100% custom designs tailored to the client',
    aboutFeat4: 'Punctual team with comprehensive after-sales service',
    aboutCta: 'Talk to Our Team',
    servicesLabel: 'What We Offer',
    servicesTitle: 'Our Premium Services',
    servicesSubtitle: 'From concept to completion — covering all your woodwork needs in Riyadh',
    svc1Title: 'Custom Furniture',
    svc1Text: 'We design and craft furniture that reflects your personality — from bedrooms to living rooms and offices, every piece is made exclusively for you.',
    svc2Title: 'Kitchen Installation',
    svc2Text: 'Luxury kitchens in modern and classic designs — smart storage units and elegant finishes that stand the test of time.',
    svc3Title: 'Doors & Woodwork',
    svc3Text: 'Interior and exterior doors in various sizes and designs — hand carvings and professional finishes that add grandeur to your entrance.',
    svc4Title: 'Maintenance & Repair',
    svc4Text: 'Woodwork needs care — we offer repair and restoration services to bring your furniture back to its former glory as quickly as possible.',
    learnMore: 'Learn More',
    galleryLabel: 'Our Work',
    galleryTitle: 'Project Portfolio',
    gallerySubtitle: 'Selected samples from our completed projects in Riyadh — every picture tells a craft story',
    gal1Ph: 'Classic Bedroom',    gal1Ov: 'Luxury Bedroom — Custom Made',
    gal2Ph: 'Modern Kitchen',     gal2Ov: 'Complete Modern Kitchen',
    gal3Ph: 'Carved Door',        gal3Ov: 'Main Door with Hand Carvings',
    gal4Ph: 'TV Unit',            gal4Ov: 'Custom TV Entertainment Unit',
    gal5Ph: 'Wall Library',       gal5Ov: 'Full Wall-to-Wall Library',
    gal6Ph: 'Dining Table',       gal6Ov: 'Solid Wood Dining Table',
    whyLabel: 'Why Us',
    whyTitle: 'What Sets', whyTitleEm: 'Riyadh Carpenter Apart',
    whySubtitle: 'More than carpentry — a complete experience from idea to your satisfaction',
    whyNum1: '01', whyCard1Title: 'Superior Quality',
    whyCard1Text: "We use the finest woods and imported finishing materials. Every product undergoes strict quality control before delivery.",
    whyNum2: '02', whyCard2Title: 'Competitive Pricing',
    whyCard2Text: "Quality doesn't mean expensive — we offer transparent, competitive prices with no hidden fees and options for every budget.",
    whyNum3: '03', whyCard3Title: 'Fast Turnaround',
    whyCard3Text: 'We respect your time and honor deadlines. We set a clear timeline from day one and deliver on schedule.',
    whyNum4: '04', whyCard4Title: 'Full Warranty',
    whyCard4Text: 'We stand behind every job we do — full warranty on all our products and follow-up maintenance service for your complete peace of mind.',
    contactLabel: 'Contact Us',
    contactTitle: 'We Are Here for You',
    contactSubtitle: 'Reach out today and get a free consultation and instant price quote',
    contactPhone: 'Phone',
    contactWa: 'WhatsApp', contactWaLink: 'Message us on WhatsApp',
    contactLocation: 'Location', contactLocationVal: 'Riyadh, Saudi Arabia',
    contactHours: 'Working Hours', contactHoursVal: 'Sat – Thu: 8 AM – 9 PM',
    mapTitle: 'Riyadh Carpenter Location',
    formName: 'Full Name', formNamePh: 'Enter your full name',
    formPhone: 'Mobile Number',
    formService: 'Service Required', formServicePh: 'Choose a service...',
    formDesignConsult: 'Design Consultation', formOther: 'Other',
    formMessage: 'Request Details', formMessagePh: 'Describe your needs in detail...',
    formSubmit: 'Send Message',
    formSending: 'Sending...',
    formSuccessMsg: 'Your message was sent successfully! We will contact you shortly.',
    footerTagline: 'Professional carpentry in Riyadh — furniture, kitchens, doors, and maintenance at the highest quality and best prices. 20 years at your service.',
    footerWaLink: 'Message us on WhatsApp',
    footerQuickLinks: 'Quick Links',
    footerServices: 'Our Services',
    footerContact: 'Contact',
    footerHome: 'Home', footerAbout: 'About Us',
    footerGallery: 'Portfolio', footerContactLink: 'Contact Us',
    footerLocation: 'Riyadh, Saudi Arabia',
    footerHours: 'Sat–Thu: 8 AM–9 PM',
    footerRights: 'All rights reserved.',
    ariaInstagram: 'Instagram', ariaSnapchat: 'Snapchat',
    ariaTiktok: 'TikTok', ariaWhatsapp: 'WhatsApp',
  }
};

/* ═══════════════════════════════════════════
   STATE
═══════════════════════════════════════════ */
let currentLang = (function () {
  try { return localStorage.getItem('siteLang') || 'ar'; } catch (e) { return 'ar'; }
})();

function t(key) {
  return translations[currentLang][key] || translations['ar'][key] || key;
}

/* ═══════════════════════════════════════════
   RENDER HEADER
═══════════════════════════════════════════ */
function renderHeader(activePage) {
  const links = [
    { id: 'home',     href: 'index.html',          labelKey: 'navHome'    },
    { id: 'about',    href: 'index.html#about',     labelKey: 'navAbout'   },
    { id: 'services', href: 'index.html#services',  labelKey: 'navServices'},
    { id: 'gallery',  href: 'index.html#gallery',   labelKey: 'navGallery' },
    { id: 'contact',  href: 'index.html#contact',   labelKey: 'navContact' },
  ];

  const nav = links.map(l =>
    `<li><a href="${l.href}" class="nav__link${activePage === l.id ? ' active' : ''}" data-i18n="${l.labelKey}">${t(l.labelKey)}</a></li>`
  ).join('');

  document.getElementById('site-header').innerHTML = `
    <nav class="nav container">

      <a href="index.html" class="nav__logo" aria-label="${t('siteName')}">
        <img
          src="/na.png"
          alt="${t('siteName')}"
          class="nav__logo-img"
          onerror="this.style.display='none';this.nextElementSibling.style.display='flex'"
        />
        <span class="nav__logo-mark" style="display:none">ن</span>
        <span class="nav__logo-text">${t('siteName')}</span>
      </a>

      <ul class="nav__menu" id="navMenu" role="navigation" aria-label="${t('navMenuAria')}">
        ${nav}
      </ul>

      <div class="nav__actions">

        <a href="tel:0${PHONE}" class="btn btn--call" data-i18n="navCall">
          <i class="fas fa-phone" style="font-size:.8rem"></i>
          <span>${t('navCall')}</span>
        </a>

        <a href="https://wa.me/${WA_NUM}" class="btn btn--whatsapp" target="_blank" rel="noopener" data-i18n="navWa">
          <i class="fab fa-whatsapp" style="font-size:1rem"></i>
          <span>${t('navWa')}</span>
        </a>

        <div class="lang-switcher" id="langSwitcher">
          <button
            class="lang-switcher__btn"
            id="langBtn"
            type="button"
            aria-haspopup="listbox"
            aria-expanded="false"
            aria-label="${t('langBtnAria')}"
          >
            <span class="lang-switcher__globe" aria-hidden="true">🌐</span>
            <span class="lang-switcher__label" id="langBtnLabel">${t('langBtnLabel')}</span>
            <span class="lang-switcher__arrow" aria-hidden="true">▾</span>
          </button>
          <div class="lang-switcher__dropdown" id="langDropdown" role="listbox" aria-label="Language">
            <button
              class="lang-switcher__option${currentLang === 'ar' ? ' active' : ''}"
              role="option"
              aria-selected="${currentLang === 'ar'}"
              data-lang="ar"
              type="button"
            >
              <span class="lang-flag" aria-hidden="true">🇸🇦</span>
              <span>العربية</span>
              <span class="check" aria-hidden="true">✓</span>
            </button>
            <button
              class="lang-switcher__option${currentLang === 'en' ? ' active' : ''}"
              role="option"
              aria-selected="${currentLang === 'en'}"
              data-lang="en"
              type="button"
            >
              <span class="lang-flag" aria-hidden="true">🇬🇧</span>
              <span>English</span>
              <span class="check" aria-hidden="true">✓</span>
            </button>
          </div>
        </div>

        <button class="nav__hamburger" id="hamburger" type="button" aria-label="${t('navMenuAria')}" aria-expanded="false">
          <span></span><span></span><span></span>
        </button>

      </div>
    </nav>`;
}

/* ═══════════════════════════════════════════
   RENDER FOOTER
═══════════════════════════════════════════ */
function renderFooter() {
  document.getElementById('site-footer').innerHTML = `
    <div class="container">
      <div class="footer__grid">

        <div class="footer__brand">
          <a href="index.html" class="nav__logo" style="display:inline-flex;margin-bottom:.5rem">
            <img
              src="lo.png"
              alt="${t('siteName')}"
              class="nav__logo-img"
              style="height:40px"
              onerror="this.style.display='none';this.nextElementSibling.style.display='flex'"
            />
            <span class="nav__logo-mark" style="display:none;width:36px;height:36px;font-size:1.2rem">ن</span>
            <span class="nav__logo-text" data-i18n="siteName">${t('siteName')}</span>
          </a>
          <p class="footer__tagline" data-i18n="footerTagline">${t('footerTagline')}</p>
          <div class="footer__contact-quick">
            <a href="tel:0${PHONE}"><i class="fas fa-phone"></i> 0${PHONE}</a>
            <a href="https://wa.me/${WA_NUM}" target="_blank" rel="noopener" data-i18n="footerWaLink">
              <i class="fab fa-whatsapp"></i> ${t('footerWaLink')}
            </a>
          </div>
          <div class="footer__social">
            <a href="#" aria-label="${t('ariaInstagram')}"><i class="fab fa-instagram"></i></a>
            <a href="#" aria-label="${t('ariaSnapchat')}"><i class="fab fa-snapchat"></i></a>
            <a href="https://wa.me/${WA_NUM}" target="_blank" rel="noopener" aria-label="${t('ariaWhatsapp')}"><i class="fab fa-whatsapp"></i></a>
            <a href="#" aria-label="${t('ariaTiktok')}"><i class="fab fa-tiktok"></i></a>
          </div>
        </div>

        <div class="footer__links">
          <h4 class="footer__heading" data-i18n="footerQuickLinks">${t('footerQuickLinks')}</h4>
          <ul>
            <li><a href="index.html" data-i18n="footerHome"><i class="fas fa-chevron-left"></i>${t('footerHome')}</a></li>
            <li><a href="index.html#about" data-i18n="footerAbout"><i class="fas fa-chevron-left"></i>${t('footerAbout')}</a></li>
            <li><a href="index.html#gallery" data-i18n="footerGallery"><i class="fas fa-chevron-left"></i>${t('footerGallery')}</a></li>
            <li><a href="index.html#contact" data-i18n="footerContactLink"><i class="fas fa-chevron-left"></i>${t('footerContactLink')}</a></li>
          </ul>
        </div>

        <div class="footer__links">
          <h4 class="footer__heading" data-i18n="footerServices">${t('footerServices')}</h4>
          <ul>
            <li><a href="service-furniture.html" data-i18n="svc1Title"><i class="fas fa-couch"></i>${t('svc1Title')}</a></li>
            <li><a href="service-kitchen.html"   data-i18n="svc2Title"><i class="fas fa-utensils"></i>${t('svc2Title')}</a></li>
            <li><a href="service-doors.html"     data-i18n="svc3Title"><i class="fas fa-door-open"></i>${t('svc3Title')}</a></li>
            <li><a href="service-repair.html"    data-i18n="svc4Title"><i class="fas fa-tools"></i>${t('svc4Title')}</a></li>
          </ul>
        </div>

        <div class="footer__links">
          <h4 class="footer__heading" data-i18n="footerContact">${t('footerContact')}</h4>
          <ul>
            <li><span><i class="fas fa-map-marker-alt"></i><span data-i18n="footerLocation">${t('footerLocation')}</span></span></li>
            <li><span><i class="fas fa-clock"></i><span data-i18n="footerHours">${t('footerHours')}</span></span></li>
            <li><a href="tel:0${PHONE}"><i class="fas fa-phone"></i>0${PHONE}</a></li>
            <li><a href="https://wa.me/${WA_NUM}" target="_blank" rel="noopener"><i class="fab fa-whatsapp"></i><span data-i18n="navWa">${t('navWa')}</span></a></li>
          </ul>
        </div>

      </div>
      <div class="footer__bottom">
        <p>© ${new Date().getFullYear()} <span data-i18n="siteName">${t('siteName')}</span>. <span data-i18n="footerRights">${t('footerRights')}</span></p>
        <p>${DOMAIN}</p>
      </div>
    </div>`;
}

/* ═══════════════════════════════════════════
   RENDER FLOATING ELEMENTS
═══════════════════════════════════════════ */
function renderFloats() {
  /* Remove existing floats to avoid duplication on re-render */
  document.querySelectorAll('.whatsapp-float, .back-to-top').forEach(el => el.remove());

  document.body.insertAdjacentHTML('beforeend', `
    <a href="https://wa.me/${WA_NUM}" class="whatsapp-float" target="_blank" rel="noopener" aria-label="${t('ariaWhatsapp')}">
      <i class="fab fa-whatsapp"></i>
      <span class="whatsapp-float__tooltip" data-i18n="waTooltip">${t('waTooltip')}</span>
    </a>
    <button class="back-to-top" id="backToTop" type="button" aria-label="${t('backTopAria')}">
      <i class="fas fa-chevron-up"></i>
    </button>`);
}

/* ═══════════════════════════════════════════
   APPLY TRANSLATIONS TO DOM
═══════════════════════════════════════════ */
function applyTranslations() {
  const tr = translations[currentLang];

  document.documentElement.lang = tr.lang;
  document.documentElement.dir  = tr.dir;
  document.body.classList.toggle('ltr', tr.dir === 'ltr');

  document.title = tr.pageTitle;
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) metaDesc.setAttribute('content', tr.metaDesc);

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const val = tr[key];
    if (val === undefined) return;
    const attrTarget = el.getAttribute('data-i18n-attr');
    if (attrTarget) {
      el.setAttribute(attrTarget, val);
    } else {
      if (val.includes('<br')) {
        el.innerHTML = val;
      } else {
        el.textContent = val;
      }
    }
  });

  const langBtnLabel = document.getElementById('langBtnLabel');
  if (langBtnLabel) langBtnLabel.textContent = tr.langBtnLabel;
  const langBtn = document.getElementById('langBtn');
  if (langBtn) langBtn.setAttribute('aria-label', tr.langBtnAria);

  document.querySelectorAll('.lang-switcher__option').forEach(opt => {
    const isActive = opt.dataset.lang === currentLang;
    opt.classList.toggle('active', isActive);
    opt.setAttribute('aria-selected', isActive);
  });

  /* Fix footer chevron direction for LTR */
  document.querySelectorAll('.footer__links .fa-chevron-left').forEach(icon => {
    if (tr.dir === 'ltr') {
      icon.classList.replace('fa-chevron-left', 'fa-chevron-right');
    }
  });
}

/* ═══════════════════════════════════════════
   SWITCH LANGUAGE
═══════════════════════════════════════════ */
function switchLanguage(lang) {
  if (lang === currentLang) return;
  currentLang = lang;
  try { localStorage.setItem('siteLang', lang); } catch (e) { /* noop */ }

  document.body.style.opacity = '0';
  document.body.style.transition = 'opacity .2s ease';

  setTimeout(() => {
    const activePage = document.body.dataset.page || 'home';
    renderHeader(activePage);
    renderFooter();
    renderFloats();
    applyTranslations();
    bindHeaderEvents();
    bindLangSwitcher();
    bindBackToTop();
    document.body.style.opacity = '1';
  }, 200);
}

/* ═══════════════════════════════════════════
   LANG SWITCHER EVENTS
═══════════════════════════════════════════ */
let langDropdownOpen = false;

function bindLangSwitcher() {
  const langBtn      = document.getElementById('langBtn');
  const langDropdown = document.getElementById('langDropdown');
  if (!langBtn || !langDropdown) return;

  /* Remove old listeners by cloning */
  const newBtn = langBtn.cloneNode(true);
  langBtn.parentNode.replaceChild(newBtn, langBtn);

  function openDropdown() {
    langDropdownOpen = true;
    langDropdown.classList.add('open');
    newBtn.setAttribute('aria-expanded', 'true');
  }
  function closeDropdown() {
    langDropdownOpen = false;
    langDropdown.classList.remove('open');
    newBtn.setAttribute('aria-expanded', 'false');
  }

  newBtn.addEventListener('click', e => {
    e.stopPropagation();
    langDropdownOpen ? closeDropdown() : openDropdown();
  });

  langDropdown.querySelectorAll('.lang-switcher__option').forEach(opt => {
    opt.addEventListener('click', e => {
      e.stopPropagation();
      switchLanguage(opt.dataset.lang);
      closeDropdown();
    });
  });

  /* Close on outside click */
  const outsideHandler = e => {
    const switcher = document.getElementById('langSwitcher');
    if (switcher && !switcher.contains(e.target)) closeDropdown();
  };
  document.removeEventListener('click', outsideHandler);
  document.addEventListener('click', outsideHandler);

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeDropdown();
  });
}

/* ═══════════════════════════════════════════
   HEADER / HAMBURGER EVENTS
═══════════════════════════════════════════ */
function bindHeaderEvents() {
  const hamburger = document.getElementById('hamburger');
  const navMenu   = document.getElementById('navMenu');
  if (!hamburger || !navMenu) return;

  hamburger.addEventListener('click', () => {
    const open = navMenu.classList.toggle('open');
    hamburger.classList.toggle('open', open);
    hamburger.setAttribute('aria-expanded', open);
    document.body.style.overflow = open ? 'hidden' : '';
  });

  navMenu.querySelectorAll('.nav__link').forEach(l => l.addEventListener('click', () => {
    navMenu.classList.remove('open');
    hamburger.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }));
}

/* ═══════════════════════════════════════════
   BACK TO TOP
═══════════════════════════════════════════ */
function bindBackToTop() {
  const btt = document.getElementById('backToTop');
  if (!btt) return;
  btt.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

/* ═══════════════════════════════════════════
   SHARED INIT
═══════════════════════════════════════════ */
function initShared() {
  bindHeaderEvents();
  bindLangSwitcher();
  bindBackToTop();

  const header = document.getElementById('site-header');

  window.addEventListener('scroll', () => {
    if (header) header.classList.toggle('scrolled', window.scrollY > 60);
    const btt = document.getElementById('backToTop');
    if (btt) btt.classList.toggle('visible', window.scrollY > 400);
  }, { passive: true });

  /* Trigger scroll check on load */
  window.dispatchEvent(new Event('scroll'));

  /* Intersection observer for .reveal */
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

  /* Contact form */
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      const btn  = document.getElementById('submitBtn');
      const span = btn && btn.querySelector('span[data-i18n="formSubmit"]');
      if (btn) btn.disabled = true;
      if (span) span.textContent = translations[currentLang].formSending;

      setTimeout(() => {
        if (btn) btn.disabled = false;
        if (span) span.textContent = translations[currentLang].formSubmit;
        form.reset();
        const s = document.getElementById('formSuccess');
        if (s) { s.style.display = 'flex'; setTimeout(() => s.style.display = 'none', 6000); }
      }, 1500);
    });
  }
}

/* ═══════════════════════════════════════════
   BOOT
═══════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
  const page = document.body.dataset.page || 'home';
  renderHeader(page);
  renderFooter();
  renderFloats();
  applyTranslations();
  initShared();
});