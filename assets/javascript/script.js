// Validation du formulaire

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    event.stopPropagation();

    const inputs = form.querySelectorAll("input, textarea");
    let isValid = true;

    inputs.forEach((input) => {
      if (!input.value.trim()) {
        isValid = false;
        input.classList.add("is-invalid");
      } else {
        input.classList.remove("is-invalid");
      }
    });

    if (isValid) {
      form.submit();
    }
  });
});

// Bouton retour vers le haut
document.addEventListener("DOMContentLoaded", () => {
  const scrollTopButton = document.createElement("button");
  scrollTopButton.classList.add("scroll-top-button");
  scrollTopButton.style.display = "none";
  document.body.appendChild(scrollTopButton);

  window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
      scrollTopButton.style.display = "block";
    } else {
      scrollTopButton.style.display = "none";
    }
  });

  scrollTopButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});
