const STORAGE_KEYS = {
  name: 'imignarxName',
  dob: 'imignarxDob',
  language: 'imignarxLanguage',
  onboardedAt: 'imignarxOnboardedAt',
};

const DEFAULT_LANGUAGE = 'English';

const LANGUAGE_OPTIONS = [
  { code: 'English', label: '🇺🇸 English' },
  { code: 'Hindi', label: '🇮🇳 हिन्दी' },
  { code: 'Marathi', label: '🇮🇳 मराठी' },
  { code: 'Spanish', label: '🇪🇸 Español' },
  { code: 'French', label: '🇫🇷 Français' },
];

const TRANSLATIONS = {
  English: {
    index: {
      title: 'ImignarX',
      subtitle: 'Know yourself better, one day at a time.',
      trustLine: 'Your information stays private and helps personalize your daily reflections.',
      nameLabel: 'Name',
      dobLabel: 'Date of Birth',
      languageLabel: 'Preferred Language',
      detectedLanguage: 'Detected Language',
      beginButton: 'Begin',
      feedbackEnterName: 'Please enter your name.',
      feedbackEnterDob: 'Please choose your date of birth.',
      feedbackInvalidDob: 'Please enter a valid past date of birth.',
      feedbackWelcome: 'Welcome, {name}. Today is a good day to choose one practical focus. Let’s continue.',
    },
    focus: {
      title: 'Daily Check-In',
      subtitle: 'A playful question journey for your daily self-discovery.',
      answerPlaceholder: 'Type your answer here...',
      nextButton: 'Next',
      skipButton: 'Skip',
      completeTitle: 'Daily discovery complete',
      mindWeatherLabel: 'Mind Weather',
      archetypeLabel: 'Archetype',
      observationLabel: 'Daily Observation',
      nightCompanionLabel: 'Night Companion',
      continueButton: 'See my mirror',
    },
    mirror: {
      title: 'Your Mirror',
      subtitle: 'A playful daily summary from today’s check-in.',
      mindWeatherLabel: 'Mind Weather',
      archetypeLabel: 'Archetype',
      observationLabel: 'Daily Observation',
      nightCompanionLabel: 'Night Companion',
      notificationsLabel: 'Notifications',
      notificationOn: 'Daily reminders are ON',
      notificationOff: 'Daily reminders are OFF',
      weeklyLabel: 'Weekly report',
      noSession: 'Complete today’s check-in to unlock your mirror summary.',
      startAgainButton: 'Review today again',
    },
  },
  Hindi: {
    index: {
      title: 'इमिग्नरएक्स',
      subtitle: 'हर दिन खुद को मज़ेदार तरीके से समझें।',
      trustLine: 'आपकी जानकारी निजी रहती है और दैनिक झलक को व्यक्तिगत बनाती है।',
      nameLabel: 'नाम',
      dobLabel: 'जन्म तिथि',
      languageLabel: 'पसंदीदा भाषा',
      detectedLanguage: 'पहचानी गई भाषा',
      beginButton: 'शुरू करें',
      feedbackEnterName: 'कृपया अपना नाम दर्ज करें।',
      feedbackEnterDob: 'कृपया जन्म तिथि चुनें।',
      feedbackInvalidDob: 'कृपया एक मान्य अतीत जन्म तिथि दर्ज करें।',
      feedbackWelcome: 'स्वागत है, {name}। आज व्यावहारिक ध्यान चुनने का एक अच्छा दिन है। आगे बढ़ते हैं।',
    },
    focus: {
      title: 'दैनिक चेक-इन',
      subtitle: 'अपने दिन को मज़ेदार सवालों से उजागर करें।',
      answerPlaceholder: 'यहाँ अपना उत्तर लिखें...',
      nextButton: 'आगे',
      skipButton: 'छोड़ें',
      completeTitle: 'दैनिक खोज पूरी हुई',
      mindWeatherLabel: 'माइंड वेदर',
      archetypeLabel: 'आर्केटाइप',
      observationLabel: 'दैनिक अवलोकन',
      nightCompanionLabel: 'नाइट कंपेनियन',
      continueButton: 'मिरर देखें',
    },
    mirror: {
      title: 'आपका मिरर',
      subtitle: 'आज के चेक-इन से एक मज़ेदार सारांश।',
      mindWeatherLabel: 'माइंड वेदर',
      archetypeLabel: 'आर्केटाइप',
      observationLabel: 'दैनिक अवलोकन',
      nightCompanionLabel: 'नाइट कंपेनियन',
      notificationsLabel: 'सूचनाएँ',
      notificationOn: 'दैनिक अनुस्मारक चालू हैं',
      notificationOff: 'दैनिक अनुस्मारक बंद हैं',
      weeklyLabel: 'साप्ताहिक रिपोर्ट',
      noSession: 'अपने मिरर सारांश को अनलॉक करने के लिए आज का चेक-इन पूरा करें।',
      startAgainButton: 'आज फिर देखें',
    },
  },
  Marathi: {
    index: {
      title: 'इमिग्नरएक्स',
      subtitle: 'दररोज स्वतःला मजेशीरपणे ओळखा.',
      trustLine: 'तुमची माहिती खासगी राहते आणि दैनंदिन प्रतिबिंब वैयक्तिक बनवते.',
      nameLabel: 'नाव',
      dobLabel: 'जन्मतारीख',
      languageLabel: 'आवडती भाषा',
      detectedLanguage: 'ओळखलेली भाषा',
      beginButton: 'सुरू करा',
      feedbackEnterName: 'कृपया तुमचे नाव भरा.',
      feedbackEnterDob: 'कृपया जन्मतारीख निवडा.',
      feedbackInvalidDob: 'कृपया वैध भूतकाळातील जन्मतारीख भरा.',
      feedbackWelcome: 'स्वागत आहे, {name}. आज व्यावहारिक लक्ष निवडण्याचा एक चांगला दिवस आहे. पुढे जाऊया.',
    },
    focus: {
      title: 'दैनंदिन चेक-इन',
      subtitle: 'तुमच्या दिवसाची मजेदार प्रश्नांची यात्रा.',
      answerPlaceholder: 'येथे तुमचे उत्तर टाइप करा...',
      nextButton: 'पुढे',
      skipButton: 'वगळा',
      completeTitle: 'दैनंदिन शोध पूर्ण',
      mindWeatherLabel: 'माइंड वेदर',
      archetypeLabel: 'आर्केटाइप',
      observationLabel: 'दैनंदिन निरीक्षण',
      nightCompanionLabel: 'नाइट कंपेनियन',
      continueButton: 'मिरर पहा',
    },
    mirror: {
      title: 'तुमचे मिरर',
      subtitle: 'आजच्या चेक-इनमधून मजेदार दैनंदिन सारांश.',
      mindWeatherLabel: 'माइंड वेदर',
      archetypeLabel: 'आर्केटाइप',
      observationLabel: 'दैनंदिन निरीक्षण',
      nightCompanionLabel: 'नाइट कंपेनियन',
      notificationsLabel: 'सूचना',
      notificationOn: 'दैनिक स्मरणे सुरु आहेत',
      notificationOff: 'दैनिक स्मरणे बंद आहेत',
      weeklyLabel: 'साप्ताहिक अहवाल',
      noSession: 'तुमचा मिरर सारांश उघडण्यासाठी आजचे चेक-इन पूर्ण करा.',
      startAgainButton: 'आता पुन्हा पाहा',
    },
  },
};

function getStoredLanguage() {
  const saved = localStorage.getItem(STORAGE_KEYS.language);
  if (saved && LANGUAGE_OPTIONS.some((item) => item.code === saved)) {
    return saved;
  }
  return detectBrowserLanguage();
}

function detectBrowserLanguage() {
  const navLang = (navigator.language || navigator.userLanguage || 'en').split('-')[0].toLowerCase();
  const map = { en: 'English', hi: 'Hindi', mr: 'Marathi', es: 'Spanish', fr: 'French' };
  return map[navLang] || DEFAULT_LANGUAGE;
}

function setStoredLanguage(language) {
  if (!LANGUAGE_OPTIONS.some((item) => item.code === language)) {
    language = DEFAULT_LANGUAGE;
  }
  localStorage.setItem(STORAGE_KEYS.language, language);
}

function getLanguageLabel(code) {
  return (LANGUAGE_OPTIONS.find((item) => item.code === code) || LANGUAGE_OPTIONS[0]).label;
}

function translate(page, key, vars = {}) {
  const language = getStoredLanguage();
  const pageStrings = TRANSLATIONS[language] && TRANSLATIONS[language][page];
  const fallback = TRANSLATIONS[DEFAULT_LANGUAGE] && TRANSLATIONS[DEFAULT_LANGUAGE][page];
  let value = pageStrings && pageStrings[key] ? pageStrings[key] : fallback && fallback[key] ? fallback[key] : '';
  Object.keys(vars).forEach((placeholder) => {
    value = value.replace(new RegExp(`\{${placeholder}\}`, 'g'), vars[placeholder]);
  });
  return value;
}

function applyTranslations() {
  document.querySelectorAll('[data-translate-page]').forEach((element) => {
    const page = element.dataset.translatePage;
    const key = element.dataset.translateKey;
    const text = translate(page, key);
    if (!text) return;
    if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
      element.placeholder = text;
    } else {
      element.textContent = text;
    }
  });
}

function populateLanguageOptions() {
  const languageSelect = document.getElementById('language');
  if (!languageSelect) {
    return;
  }

  languageSelect.innerHTML = LANGUAGE_OPTIONS.map((option) => {
    return `<option value="${option.code}">${option.label}</option>`;
  }).join('');
}

function initOnboarding() {
  const savedLang = getStoredLanguage();
  populateLanguageOptions();

  const languageSelect = document.getElementById('language');
  if (languageSelect) {
    languageSelect.value = savedLang;
    languageSelect.addEventListener('change', () => {
      setStoredLanguage(languageSelect.value);
      const detected = document.getElementById('detected-language');
      if (detected) {
        detected.textContent = `${translate('index', 'detectedLanguage')}: ${getLanguageLabel(languageSelect.value)}`;
      }
    });
  }

  const detectedElement = document.getElementById('detected-language');
  if (detectedElement) {
    detectedElement.textContent = `${translate('index', 'detectedLanguage')}: ${getLanguageLabel(savedLang)}`;
  }

  applyTranslations();

  const form = document.getElementById('onboard-form');
  const feedback = document.getElementById('feedback');
  if (!form || !feedback) {
    return;
  }

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const nameValue = document.getElementById('name').value.trim();
    const dobValue = document.getElementById('dob').value;
    const languageValue = languageSelect?.value || getStoredLanguage();

    if (!nameValue) {
      feedback.textContent = translate('index', 'feedbackEnterName');
      return;
    }
    if (!dobValue) {
      feedback.textContent = translate('index', 'feedbackEnterDob');
      return;
    }

    const birthDate = new Date(dobValue);
    const now = new Date();
    if (isNaN(birthDate.getTime()) || birthDate >= now) {
      feedback.textContent = translate('index', 'feedbackInvalidDob');
      return;
    }

    localStorage.setItem(STORAGE_KEYS.name, nameValue);
    localStorage.setItem(STORAGE_KEYS.dob, dobValue);
    setStoredLanguage(languageValue);
    localStorage.setItem(STORAGE_KEYS.onboardedAt, new Date().toISOString());

    feedback.innerHTML = translate('index', 'feedbackWelcome', { name: nameValue });

    setTimeout(() => {
      window.location.href = 'focus.html';
    }, 1200);
  });
}

function isIndexPage() {
  return !!document.getElementById('onboard-form');
}

function isFocusPage() {
  return !!document.getElementById('questionCard');
}

function isMirrorPage() {
  return !!document.getElementById('mindWeatherValue');
}

document.addEventListener('DOMContentLoaded', () => {
  const savedName = localStorage.getItem(STORAGE_KEYS.name);
  const savedDob = localStorage.getItem(STORAGE_KEYS.dob);
  const todayDate = new Date().toISOString().slice(0, 10);
  const savedSession = JSON.parse(localStorage.getItem('imignarxDailySessions') || '{}')[todayDate];

  if (isIndexPage()) {
    if (savedName && savedDob && savedSession && savedSession.finished) {
      window.location.href = 'mirror.html';
      return;
    }
    if (savedName && savedDob) {
      window.location.href = 'focus.html';
      return;
    }
    initOnboarding();
    return;
  }

  if (!savedName || !savedDob) {
    window.location.href = 'index.html';
    return;
  }

  applyTranslations();
});
document.addEventListener('DOMContentLoaded', () => {
  const savedName = localStorage.getItem(STORAGE_KEYS.name);
  const savedDob = localStorage.getItem(STORAGE_KEYS.dob);
  const todayDate = new Date().toISOString().slice(0, 10);
  const savedSession = JSON.parse(localStorage.getItem('imignarxDailySessions') || '{}')[todayDate];

  if (isIndexPage()) {
    if (savedName && savedDob && savedSession && savedSession.finished) {
      window.location.href = 'mirror.html';
      return;
    }
    if (savedName && savedDob) {
      window.location.href = 'focus.html';
      return;
    }
    initOnboarding();
    return;
  }

  if (!savedName || !savedDob) {
    window.location.href = 'index.html';
    return;
  }

  applyTranslations();
});
