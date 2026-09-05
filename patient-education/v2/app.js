const topics = Array.isArray(window.AION_TOPICS) ? window.AION_TOPICS : [];
const state = { category: "All", query: "" };
const settingsKey = "aionTakehomeV2Settings";

const $ = (id) => document.getElementById(id);
const escapeHtml = (value) => String(value ?? "").replace(/[&<>'"]/g, (char) => ({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"}[char]));

function safeExternalUrl(value) {
  if (!value) return "";
  try {
    const parsed = new URL(value);
    return ["http:", "https:"].includes(parsed.protocol) ? parsed.href : "";
  } catch {
    return "";
  }
}

function loadSettings() {
  try {
    return { practiceName: "Dermatology Practice", physicianName: "Your dermatology team", bookingUrl: "", ...JSON.parse(localStorage.getItem(settingsKey) || "{}") };
  } catch {
    return { practiceName: "Dermatology Practice", physicianName: "Your dermatology team", bookingUrl: "" };
  }
}

function saveSettings(next) {
  localStorage.setItem(settingsKey, JSON.stringify(next));
}

function applyBranding() {
  const settings = loadSettings();
  document.querySelectorAll("[data-practice]").forEach((el) => { el.textContent = settings.practiceName || "Dermatology Practice"; });
  document.querySelectorAll("[data-physician]").forEach((el) => { el.textContent = settings.physicianName || "Your dermatology team"; });
  const booking = $("bookingLink");
  const url = safeExternalUrl(settings.bookingUrl);
  if (booking && url) {
    booking.href = url;
    booking.classList.remove("hidden");
  } else if (booking) {
    booking.removeAttribute("href");
    booking.classList.add("hidden");
  }
}

function categories() {
  return ["All", ...new Set(topics.map((topic) => topic.category))];
}

function renderFilters() {
  const root = $("filters");
  root.innerHTML = categories().map((category) => `<button type="button" class="filter ${category === state.category ? "active" : ""}" data-category="${escapeHtml(category)}">${escapeHtml(category)}</button>`).join("");
  root.querySelectorAll("[data-category]").forEach((button) => button.addEventListener("click", () => {
    state.category = button.dataset.category;
    renderFilters();
    renderTopics();
  }));
}

function filteredTopics() {
  const q = state.query.trim().toLowerCase();
  return topics.filter((topic) => {
    const categoryMatch = state.category === "All" || topic.category === state.category;
    const haystack = `${topic.title} ${topic.summary} ${topic.keywords || ""}`.toLowerCase();
    return categoryMatch && (!q || haystack.includes(q));
  });
}

function renderTopics() {
  const list = filteredTopics();
  const root = $("topicGrid");
  root.innerHTML = list.map((topic) => `
    <a class="topic-card" href="?topic=${encodeURIComponent(topic.slug)}">
      <div class="card-meta">${escapeHtml(topic.category)}</div>
      <h3>${escapeHtml(topic.title)}</h3>
      <p>${escapeHtml(topic.summary)}</p>
      <div class="card-bottom"><span>Open handout →</span><span class="review-pill">2026 review</span></div>
    </a>`).join("");
  $("emptyState").classList.toggle("hidden", list.length > 0);
}

function listHtml(items) {
  return items.map((item) => `<li>${escapeHtml(item)}</li>`).join("");
}

function renderPatient(topic) {
  $("libraryView").classList.add("hidden");
  $("patientView").classList.remove("hidden");
  document.querySelectorAll(".patient-action").forEach((el) => el.classList.remove("hidden"));
  document.title = `${topic.title} | AION Takehome`;
  $("topicCategory").textContent = topic.category;
  $("topicTitle").textContent = topic.title;
  $("topicSummary").textContent = topic.summary;
  $("topicMeaning").textContent = topic.meaning;
  $("topicNotice").innerHTML = listHtml(topic.notice || []);
  $("topicTreatment").innerHTML = listHtml(topic.treatment || []);
  $("topicHome").innerHTML = listHtml(topic.home || []);
  $("topicCall").innerHTML = listHtml(topic.call || []);
  $("reviewLine").textContent = topic.reviewLine || "Clinician review pending";
  $("reviewNote").textContent = topic.reviewNote || "";
  $("sourceLinks").innerHTML = (topic.sources || []).map((source) => {
    const url = safeExternalUrl(source.url);
    return url ? `<a href="${escapeHtml(url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(source.label)} ↗</a>` : "";
  }).join("");
  applyBranding();
}

function initializeLibrary() {
  renderFilters();
  renderTopics();
  $("searchInput").addEventListener("input", (event) => {
    state.query = event.target.value;
    renderTopics();
  });
}

function initializeSettings() {
  applyBranding();
  const dialog = $("practiceDialog");
  $("practiceButton").addEventListener("click", () => {
    const settings = loadSettings();
    $("practiceNameInput").value = settings.practiceName || "";
    $("physicianNameInput").value = settings.physicianName || "";
    $("bookingUrlInput").value = settings.bookingUrl || "";
    dialog.showModal();
  });
  $("practiceForm").addEventListener("submit", (event) => {
    const submitter = event.submitter;
    if (!submitter || submitter.id !== "saveSettings") return;
    event.preventDefault();
    const rawBooking = $("bookingUrlInput").value.trim();
    const bookingUrl = rawBooking ? safeExternalUrl(rawBooking) : "";
    if (rawBooking && !bookingUrl) {
      $("bookingUrlInput").setCustomValidity("Please enter a full http:// or https:// URL.");
      $("bookingUrlInput").reportValidity();
      $("bookingUrlInput").addEventListener("input", () => $("bookingUrlInput").setCustomValidity(""), { once: true });
      return;
    }
    saveSettings({
      practiceName: $("practiceNameInput").value.trim() || "Dermatology Practice",
      physicianName: $("physicianNameInput").value.trim() || "Your dermatology team",
      bookingUrl
    });
    applyBranding();
    dialog.close();
  });
  $("printButton").addEventListener("click", () => window.print());
}

(function init() {
  initializeSettings();
  const slug = new URLSearchParams(window.location.search).get("topic");
  if (slug) {
    const topic = topics.find((item) => item.slug === slug);
    if (topic) return renderPatient(topic);
  }
  initializeLibrary();
})();