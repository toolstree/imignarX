let currentQuestionIndex = 0;

let totalScores = createEmptyScores();  

let currentResults = null;

function startQuiz() {

    document
        .getElementById("startScreen")
        .classList.add("hidden");

    document
        .getElementById("quizScreen")
        .classList.remove("hidden");

    currentQuestionIndex = 0;

    totalScores = createEmptyScores();

    showQuestion();

}

function showQuestion() {

    const question =
        QUESTIONS[currentQuestionIndex];

    document
        .getElementById("questionText")
        .innerText =
        question.question;

    const optionsContainer =
        document.getElementById(
            "optionsContainer"
        );

    optionsContainer.innerHTML = "";

    question.answers.forEach(answer => {

        const button =
            document.createElement(
                "button"
            );

        button.className =
            "btn option-btn";

        button.innerText =
            answer.text;

        button.onclick =
            () => answerSelected(answer);

        optionsContainer
            .appendChild(button);

    });

    updateProgress();

}

function answerSelected(answer) {

    totalScores =
        addScores(
            answer.scores,
            totalScores
        );

    currentQuestionIndex++;

    if (
        currentQuestionIndex <
        QUESTIONS.length
    ) {

        showQuestion();

    } else {

        showAnalysis();

    }

}

function updateProgress() {

    const percent =
        (
            currentQuestionIndex /
            QUESTIONS.length
        ) * 100;

    document
        .getElementById("progressBar")
        .style.width =
        percent + "%";

}

function showAnalysis() {

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

    }, 2500);

}

window.submitEmail = async function() {

    const email =
        document
            .getElementById("emailInput")
            .value
            .trim();

    if (
        !email.includes("@")
        ||
        !email.includes(".")
    ) {

        alert(
            "Please enter a valid email."
        );

        return;

    }

    currentResults =
        calculateResults(
            totalScores
        );

    try {

        console.log(
            "Sending to Google Sheets..."
        );

        await fetch(
            APPS_SCRIPT_URL,
            {
                method: "POST",
                body: JSON.stringify({

                    email: email,

                    archetype:
                    currentResults.archetype,

                    confidence:
                    currentResults.confidence,

                    primaryOffer:
                    getFunnelData(
                        currentResults.archetype
                    ).primary.title,

                    secondaryOffer:
                    getFunnelData(
                        currentResults.archetype
                    ).secondary.title

                })

            }
        );

        console.log(
            "Data sent successfully"
        );

    }
    catch(error){

        console.log(
            "Google Sheets Error:",
            error
        );

    }

    renderResults();

};
function renderResults() {
    const result =
        currentResults;

    const archetype =
        getArchetypeData(
            result.archetype
        );

    const funnel =
        getFunnelData(
            result.archetype
        );

    document
        .getElementById("emailScreen")
        .classList.add("hidden");

    document
        .getElementById("resultScreen")
        .classList.remove("hidden");

    document
        .getElementById("resultTitle")
        .innerHTML =
        `${archetype.emoji} ${archetype.title}`;

    document
        .getElementById("confidenceBox")
        .innerHTML =
        `<h3>Confidence</h3>
         <p>${result.confidence}% Match</p>`;

    document
        .getElementById("insightBox")
        .innerHTML =
        `<h3>Core Insight</h3>
         <p>${archetype.insight}</p>`;

    document
        .getElementById("strengthBox")
        .innerHTML =
        `<h3>Strength</h3>
         <p>${archetype.strength}</p>`;

    document
        .getElementById("superpowerBox")
        .innerHTML =
        `<h3>Hidden Superpower</h3>
         <p>${archetype.superpower}</p>`;

    document
        .getElementById("blindspotBox")
        .innerHTML =
        `<h3>Blind Spot</h3>
         <p>${archetype.blindspot}</p>`;

    document
        .getElementById("roastBox")
        .innerHTML =
        `<h3>Personality Roast</h3>
         <p>${archetype.roast}</p>`;

    document
        .getElementById("challengeBox")
        .innerHTML =
        `<h3>Growth Challenge</h3>
         <p>${archetype.challenge}</p>`;

    document
        .getElementById("offersContainer")
        .innerHTML = `

        <div class="offer-card">

            <h3>
                ${funnel.primary.title}
            </h3>

            <br>

            <a
            href="${funnel.primary.url}"
            target="_blank"
            class="btn">

            Explore Resource

            </a>

        </div>

        <br>

        <div class="offer-card">

            <h3>
                ${funnel.secondary.title}
            </h3>

            <br>

            <a
            href="${funnel.secondary.url}"
            target="_blank"
            class="btn">

            Explore Resource

            </a>

        </div>

        `;

}
