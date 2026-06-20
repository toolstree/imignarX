let selectedQuestions = [];
let currentQuestionIndex = 0;
let totalScores = createEmptyScores();
let finalResult = null;

function shuffle(array) {
  return [...array].sort(() => Math.random() - 0.5);
}

function startQuiz() {

  document.getElementById("startScreen").classList.add("hidden");
  document.getElementById("quizScreen").classList.remove("hidden");

  selectedQuestions = shuffle(QUESTIONS).slice(0, 7);

  currentQuestionIndex = 0;

  totalScores = createEmptyScores();

  renderQuestion();
}

function renderQuestion() {

  const question = selectedQuestions[currentQuestionIndex];

  const progress =
    ((currentQuestionIndex) / selectedQuestions.length) * 100;

  document.getElementById("progressBar").style.width =
    `${progress}%`;

  document.getElementById("questionText").innerText =
    question.question;

  const optionsContainer =
    document.getElementById("optionsContainer");

  optionsContainer.innerHTML = "";

  question.answers.forEach(answer => {

    const button =
      document.createElement("button");

    button.className = "option";

    button.innerText = answer.text;

    button.onclick = () => {

      addScores(answer.scores, totalScores);

      nextQuestion();
    };

    optionsContainer.appendChild(button);

  });
}

function nextQuestion() {

  currentQuestionIndex++;

  if (
    currentQuestionIndex >= selectedQuestions.length
  ) {

    finishQuiz();

    return;
  }

  renderQuestion();
}

function finishQuiz() {

  document
    .getElementById("quizScreen")
    .classList.add("hidden");

  document
    .getElementById("analysisScreen")
    .classList.remove("hidden");

  setTimeout(() => {

    document
      .getElementById("analysisScreen")
      .classList.add("hidden");

    document
      .getElementById("emailScreen")
      .classList.remove("hidden");

    finalResult =
      calculateResults(totalScores);

  }, 3500);
}

function showResults() {

  document
    .getElementById("emailScreen")
    .classList.add("hidden");

  document
    .getElementById("resultScreen")
    .classList.remove("hidden");

  const archetype =
    getArchetypeData(
      finalResult.archetype
    );

  const offers =
    getFunnelData(
      finalResult.archetype
    );

  document.getElementById(
    "resultTitle"
  ).innerHTML =
    `${archetype.emoji} ${archetype.title}`;

  document.getElementById(
    "confidenceBox"
  ).innerHTML =
    `<h3>Confidence</h3>
     <p>${finalResult.confidence}% Match</p>`;

  document.getElementById(
    "insightBox"
  ).innerHTML =
    `<h3>Insight</h3>
     <p>${archetype.insight}</p>`;

  document.getElementById(
    "strengthBox"
  ).innerHTML =
    `<h3>Strength</h3>
     <p>${archetype.strength}</p>`;

  document.getElementById(
    "superpowerBox"
  ).innerHTML =
    `<h3>Hidden Superpower</h3>
     <p>${archetype.superpower}</p>`;

  document.getElementById(
    "blindspotBox"
  ).innerHTML =
    `<h3>Blind Spot</h3>
     <p>${archetype.blindspot}</p>`;

  document.getElementById(
    "roastBox"
  ).innerHTML =
    `<h3>Roast</h3>
     <p>${archetype.roast}</p>`;

  document.getElementById(
    "challengeBox"
  ).innerHTML =
    `<h3>Today's Challenge</h3>
     <p>${archetype.challenge}</p>`;

  const offersContainer =
    document.getElementById(
      "offersContainer"
    );

  offersContainer.innerHTML = `

    <div class="result-block">

      <h3>
      Resource #1
      </h3>

      <p>
      ${offers.primary.title}
      </p>

      <a
      href="${offers.primary.url}"
      target="_blank"
      class="offer-link">

      Explore

      </a>

    </div>

    <div class="result-block">

      <h3>
      Resource #2
      </h3>

      <p>
      ${offers.secondary.title}
      </p>

      <a
      href="${offers.secondary.url}"
      target="_blank"
      class="offer-link">

      Explore

      </a>

    </div>

  `;
}

if ("serviceWorker" in navigator) {

  window.addEventListener(
    "load",
    () => {

      navigator.serviceWorker.register(
        "service-worker.js"
      );

    }
  );

}
