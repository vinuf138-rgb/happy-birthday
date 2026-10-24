const photoButton = document.getElementById("photoButton");
const envelope = document.getElementById("envelope");
const letterPreview = document.getElementById("letterPreview");
const letterModal = document.getElementById("letterModal");
const closeLetter = document.getElementById("closeLetter");
const sparkles = document.getElementById("sparkles");
const birthdayCollage = document.getElementById("birthdayCollage");
const surprise = document.getElementById("surprise");

let opened = false;

function burstParticles() {
  const colors = ["#c4e2e4", "#ffffff", "#e8d9b6", "#8ebfc5", "#d8b7c8"];
  for (let i = 0; i < 46; i++) {
    const particle = document.createElement("span");
    particle.className = "particle";
    particle.style.setProperty("--x", `${42 + Math.random() * 16}%`);
    particle.style.setProperty("--y", `${35 + Math.random() * 25}%`);
    particle.style.setProperty("--dx", `${(Math.random() - 0.5) * 360}px`);
    particle.style.setProperty("--dy", `${(Math.random() - 0.65) * 330}px`);
    particle.style.setProperty("--s", `${3 + Math.random() * 7}px`);
    particle.style.setProperty("--c", colors[Math.floor(Math.random() * colors.length)]);
    particle.style.animationDelay = `${Math.random() * 0.25}s`;
    sparkles.appendChild(particle);
    particle.addEventListener("animationend", () => particle.remove());
  }
}

photoButton.addEventListener("click", () => {
  if (!opened) {
    opened = true;
    surprise.scrollIntoView({ behavior: "smooth", block: "center" });
    window.setTimeout(() => {
      envelope.classList.add("open");
      birthdayCollage.classList.add("visible");
      burstParticles();
    }, 450);
  } else {
    envelope.classList.add("open");
    birthdayCollage.classList.remove("dismissed");
    birthdayCollage.classList.add("visible");
    burstParticles();
    surprise.scrollIntoView({ behavior: "smooth", block: "center" });
  }
});

function showLetter() {
  letterModal.classList.add("visible");
  letterModal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}
function hideLetter() {
  letterModal.classList.remove("visible");
  letterModal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}
letterPreview.addEventListener("click", showLetter);
letterPreview.addEventListener("keydown", (event) => {
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    showLetter();
  }
});
closeLetter.addEventListener("click", hideLetter);
letterModal.addEventListener("click", (event) => {
  if (event.target === letterModal) hideLetter();
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") hideLetter();
});


birthdayCollage.addEventListener("click", (event) => {
  event.stopPropagation();
  birthdayCollage.classList.remove("visible");
  birthdayCollage.classList.add("dismissed");
});
