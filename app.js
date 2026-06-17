const form = document.getElementById("onboard-form");
const feedback = document.getElementById("feedback");

// auto-detect language on first launch
const savedLang = localStorage.getItem("imignarxLanguage");
if (!savedLang) {
  const navLang = (navigator.language || navigator.userLanguage || 'en').split('-')[0].toLowerCase();
  const map = { en:'English', hi:'Hindi', mr:'Marathi', gu:'Gujarati', ur:'Urdu', es:'Spanish', fr:'French', de:'German', ja:'Japanese', ko:'Korean', zh:'Chinese', pt:'Portuguese', ru:'Russian', it:'Italian' };
  const mapped = map[navLang] || 'English';
  localStorage.setItem('imignarxLanguage', mapped);
}

const savedName = localStorage.getItem("imignarxName");
const savedDob = localStorage.getItem("imignarxDob");

const savedFocusDate = localStorage.getItem("imignarxLastFocusDate");
const todayDate = new Date().toISOString().slice(0, 10);
if (savedName && savedDob) {
  if (savedFocusDate === todayDate && localStorage.getItem("imignarxFocus")) {
    window.location.href = "mirror.html";
  } else {
    window.location.href = "focus.html";
  }
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const dob = document.getElementById("dob").value;
  const languageEl = document.getElementById("language");
  const language = languageEl && languageEl.value ? languageEl.value : localStorage.getItem('imignarxLanguage') || 'English';

  if (!name) {
    feedback.textContent = "Please enter your name.";
    return;
  }

  if (!dob) {
    feedback.textContent = "Please choose your date of birth.";
    return;
  }


  const birthDate = new Date(dob);
  const today = new Date();

  if (isNaN(birthDate.getTime()) || birthDate >= today) {
    feedback.textContent =
      "Please enter a valid past date of birth.";
    return;
  }

  localStorage.setItem("imignarxName", name);
  localStorage.setItem("imignarxDob", dob);
  if (language) localStorage.setItem("imignarxLanguage", language);
  localStorage.setItem(
    "imignarxOnboardedAt",
    new Date().toISOString()
  );

  feedback.innerHTML = `
    Welcome, ${name}.<br><br>
    Today is a good day to choose one practical focus.<br><br>
    Let's continue.
  `;

  setTimeout(() => {
    window.location.href = "focus.html";
  }, 2000);
});

// Onboarding UI: show detected language and allow toggling manual select
document.addEventListener('DOMContentLoaded', () => {
  const detectedEl = document.getElementById('detected-language');
  const changeBtn = document.getElementById('change-language-btn');
  const langSelect = document.getElementById('language');
  const saved = localStorage.getItem('imignarxLanguage') || 'English';
  if (detectedEl) detectedEl.textContent = `Detected Language: ${saved}`;
  if (langSelect) langSelect.value = saved;
  if (changeBtn && langSelect) {
    changeBtn.addEventListener('click', () => {
      langSelect.style.display = 'block';
      changeBtn.style.display = 'none';
      if (detectedEl) detectedEl.style.display = 'none';
      langSelect.focus();
    });
  }
});