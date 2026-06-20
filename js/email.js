const EMAIL_REGEX =
/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function submitEmail() {

  const email =
    document
    .getElementById("emailInput")
    .value
    .trim();

  if (
    !EMAIL_REGEX.test(email)
  ) {

    alert(
      "Please enter a valid email."
    );

    return;
  }

  saveEmail(email);

  showResults();
}
