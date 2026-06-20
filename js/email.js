const APPS_SCRIPT_URL =
"https://script.google.com/macros/s/AKfycbzzSBU6XKEqapGvD2QbZSWpL33kQRllskxR6zXaElxzndm5SfegNA5Ekr1CLWlpsDoe/exec";

const EMAIL_REGEX =
/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function submitEmail() {

    const email =
    document
    .getElementById("emailInput")
    .value
    .trim();

    if (!EMAIL_REGEX.test(email)) {

        alert(
            "Please enter a valid email address."
        );

        return;
    }

    saveEmail(email);
}

async function saveEmail(email){

    try {

        const primaryOffer =
        getFunnelData(
            finalResult.archetype
        ).primary.title;

        const secondaryOffer =
        getFunnelData(
            finalResult.archetype
        ).secondary.title;

        await fetch(
            APPS_SCRIPT_URL,
            {
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({

                    email:email,

                    archetype:
                    finalResult.archetype,

                    confidence:
                    finalResult.confidence,

                    primaryOffer:
                    primaryOffer,

                    secondaryOffer:
                    secondaryOffer

                })
            }
        );

    }
    catch(error){

        console.log(
            "Email Save Error:",
            error
        );

    }

    showResults();
}
