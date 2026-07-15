const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));

const form = document.getElementById("waitlist-form");
const status = document.getElementById("form-status");

if (form && status) {
  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const button = form.querySelector("button[type='submit']");
    const formData = new FormData(form);
    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim().toLowerCase();
    const company = String(formData.get("company") || "").trim();

    status.className = "form-note";

    if (!name || !email) {
      status.textContent = "Please enter your name and email.";
      status.classList.add("error");
      return;
    }

    button.disabled = true;
    button.innerHTML = "Joining…";
    status.textContent = "Adding you to the waitlist…";

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, company, source: "aionehr.com" }),
      });

      const result = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(result.error || "We could not add you right now.");

      form.reset();
      status.textContent = "You’re on the AION waitlist. We’ll be in touch as early access opens.";
      status.classList.add("success");
      button.innerHTML = "You’re on the list ✓";
    } catch (error) {
      status.textContent = error.message || "Something went wrong. Please try again.";
      status.classList.add("error");
      button.disabled = false;
      button.innerHTML = "Join waitlist <span aria-hidden='true'>→</span>";
    }
  });
}
