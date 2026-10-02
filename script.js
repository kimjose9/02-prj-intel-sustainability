const languageSelect = document.getElementById('language-select');
const bootstrapStylesheet = document.getElementById('bootstrap-css');
const timelineCards = document.querySelectorAll('.card-copy');
const subscriptionForm = document.getElementById('subscribe-form');
const formStatus = document.getElementById('form-status');

const arabicText = {
  skipLink: 'انتقل إلى المحتوى الرئيسي',
  mainNavigation: 'التنقل الرئيسي',
  intelHome: 'الصفحة الرئيسية لشركة إنتل',
  intelLogo: 'شعار إنتل',
  navLabel: 'داخل الإشارة / ٠١',
  languageLabel: 'اللغة',
  exploreTimeline: 'استكشف الخط الزمني',
  heroEyebrow: 'أرشيف حي / ١٩٦٨ - ٢٠٢٤',
  heroTitle: 'التقدم يبدأ بالتغيير.',
  heroCopy: 'خط زمني للأشخاص والأنظمة والقرارات التي ساعدت إنتل على بناء مستقبل أكثر مسؤولية.',
  soundNote: 'استكشفوا على مهل. لا يتم تشغيل الصوت تلقائيًا.',
  scrollPrompt: 'مرروا للاستكشاف',
  milestoneCount: '٠٩ محطات',
  pillarsEyebrow: 'نحو مستقبل أكثر استدامة',
  pillarsTitle: 'التقدم في ثلاثة مسارات',
  pillarsIntro: 'يربط عملنا بين العمل المناخي والإدارة المسؤولة للمياه والحد من النفايات.',
  climateTitle: 'العمل المناخي',
  climateCopy: 'خفض الانبعاثات التشغيلية والعمل نحو تحقيق صافي انبعاثات غازات دفيئة صفرية بحلول عام ٢٠٤٠.',
  learnClimate: 'تعرفوا على هدف الحياد الصفري',
  waterTitle: 'الإدارة المسؤولة للمياه',
  waterCopy: 'الحفاظ على المياه وإعادتها إلى الأحواض المحلية ودعم المجتمعات.',
  learnWater: 'تعرفوا على أهدافنا',
  wasteTitle: 'الحد من النفايات',
  wasteCopy: 'الحد من النفايات وزيادة إعادة الاستخدام والتدوير في عملياتنا.',
  learnWaste: 'استكشفوا استراتيجية RISE',
  timelineEyebrow: 'الخط الزمني للاستدامة',
  timelineTitle: 'من الابتكار إلى التأثير',
  timelineHint: 'اختاروا محطة لإبرازها. مرروا أفقيًا لاستكشاف الخط الزمني كاملًا.',
  timelineLabel: 'الخط الزمني للاستدامة في إنتل',
  title1968: 'تأسيس إنتل',
  copy1968: 'غيّر روبرت نويس وغوردون مور اسم شركة NM Electronics إلى Intel Corporation، وأطلقا شركة تقوم على الابتكار والتفكير طويل الأمد.',
  title1971: 'أول معالج دقيق',
  copy1971: 'أطلقت إنتل 4004، أول معالج دقيق تجاري في العالم، وغيّرت بذلك طريقة وصول قدرات الحوسبة إلى الحياة اليومية.',
  title1978: 'المعالج 8086',
  copy1978: 'أصبح 8086 أساس بنية x86، وساعد على إتاحة حوسبة ميسورة التكلفة وأنظمة رقمية قابلة للتوسع.',
  title1985: 'المعالج 386',
  copy1985: 'قدّم معالج 386 من إنتل أداءً بمعمارية 32 بت، مما أتاح حواسيب شخصية أكثر قدرة وتجربة رقمية أغنى.',
  title2006: 'ذروة انبعاثات غازات الدفيئة',
  copy2006: 'سجلت إنتل أعلى انبعاثات تشغيلية سنوية لها، ثم استثمرت في خفض الانبعاثات والطاقة النظيفة وكفاءة التصنيع لعكس هذا الاتجاه.',
  title2020: 'استراتيجية RISE',
  copy2020: 'أطلقت إنتل استراتيجية RISE وأهداف 2030، وحددت مسارًا واضحًا للعمل المناخي والإدارة المسؤولة للمياه والحد من النفايات.',
  title2022: 'صافي انبعاثات صفري بحلول 2040',
  copy2022: 'التزمت إنتل بتحقيق صافي انبعاثات غازات دفيئة صفرية في عملياتها العالمية بحلول عام 2040.',
  title2023: 'الكهرباء المتجددة',
  copy2023: 'حققت إنتل استخدام كهرباء متجددة بنسبة 99٪ حول العالم، مما يقلل الانبعاثات ويدعم تصنيعًا أنظف.',
  title2024: 'قمة الاستدامة',
  copy2024: 'جمعت إنتل الموردين والقادة الحكوميين والشركاء للعمل معًا من أجل مستقبل أكثر استدامة لصناعة أشباه الموصلات.',
  alt1968: 'فريق إنتل أو لحظة تأسيس الشركة',
  alt1971: 'تصميم المعالجات الدقيقة وتصنيعها',
  alt1978: 'تطوير معمارية المعالجات والتقنيات',
  alt1985: 'أجهزة تقنية من إنتل في مصنع أو مختبر',
  alt2006: 'بيئة تصنيع وتحدٍ بيئي',
  alt2020: 'بحث واستراتيجية للأنظمة المستدامة',
  alt2022: 'التزام بالاستدامة ومبادرات بيئية',
  alt2023: 'طاقة متجددة واستثمارات في البنية التحتية',
  alt2024: 'قمة إنتل للاستدامة والتعاون',
  subscribeEyebrow: 'ابقوا على اطلاع',
  subscribeTitle: 'مستجدات الاستدامة تصلكم.',
  subscribeCopy: 'اشتركوا لتلقي أخبار دورية عن جهود إنتل في مجال الاستدامة.',
  emailLabel: 'عنوان البريد الإلكتروني',
  emailHelp: 'أدخلوا عنوان بريد إلكتروني صالحًا. هذا النموذج التجريبي لا يرسل معلوماتكم ولا يخزنها.',
  subscribeButton: 'اشتركوا',
  formStatus: 'شكرًا لكم. هذا النموذج جاهز للربط بخدمة نشرات بريدية؛ لم يُرسل عنوانكم أو يُخزن.',
  footerText: 'استدامة إنتل | نبني معًا مستقبلًا أكثر مسؤولية.',
  backToTop: 'العودة إلى الأعلى',
};

function applyLanguage(language) {
  const isArabic = language === 'ar';
  const direction = isArabic ? 'rtl' : 'ltr';

  document.documentElement.lang = language;
  document.documentElement.dir = direction;
  bootstrapStylesheet.href = isArabic
    ? 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.rtl.min.css'
    : 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css';

  document.querySelectorAll('[data-i18n]').forEach((element) => {
    if (!element.dataset.englishText) {
      element.dataset.englishText = element.textContent.trim();
    }

    element.textContent = isArabic
      ? arabicText[element.dataset.i18n] || element.dataset.englishText
      : element.dataset.englishText;
  });

  document.querySelectorAll('[data-i18n-aria]').forEach((element) => {
    const key = element.dataset.i18nAria;
    if (!element.dataset.englishAria) {
      element.dataset.englishAria = element.getAttribute('aria-label');
    }

    element.setAttribute(
      'aria-label',
      isArabic ? arabicText[key] || element.dataset.englishAria : element.dataset.englishAria,
    );
  });

  document.querySelectorAll('[data-i18n-alt]').forEach((element) => {
    const key = element.dataset.i18nAlt;
    if (!element.dataset.englishAlt) {
      element.dataset.englishAlt = element.alt;
    }

    element.alt = isArabic ? arabicText[key] || element.dataset.englishAlt : element.dataset.englishAlt;
  });

  document.title = isArabic
    ? 'إنتل | الاستدامة عبر العصور'
    : 'Intel | Sustainability Through the Ages';
}

languageSelect.addEventListener('change', () => {
  applyLanguage(languageSelect.value);
  formStatus.textContent = '';
});

timelineCards.forEach((card) => {
  card.addEventListener('click', () => {
    const isExpanded = card.classList.contains('expanded');
    timelineCards.forEach((item) => {
      item.classList.remove('expanded');
      item.setAttribute('aria-pressed', 'false');
    });

    if (!isExpanded) {
      card.classList.add('expanded');
      card.setAttribute('aria-pressed', 'true');
    }
  });
});

subscriptionForm.addEventListener('submit', (event) => {
  event.preventDefault();

  if (!subscriptionForm.reportValidity()) {
    return;
  }

  formStatus.textContent = languageSelect.value === 'ar'
    ? arabicText.formStatus
    : 'Thanks! This demo is ready to connect to a newsletter service; your email was not sent or stored.';
});

subscriptionForm.addEventListener('input', () => {
  formStatus.textContent = '';
});

// Match the visitor's browser language on first load; the selector can change it any time.
if (navigator.language.toLowerCase().startsWith('ar')) {
  languageSelect.value = 'ar';
  applyLanguage('ar');
}
