/* ── Particles ── */
const particleContainer = document.getElementById("particles");
for (let i = 0; i < 90; i++) {
  const p = document.createElement("div");
  p.className = "particle";
  p.style.left = Math.random() * 100 + "%";
  p.style.top = Math.random() * 100 + "%";
  p.style.setProperty("--dur", 2.5 + Math.random() * 6 + "s");
  p.style.setProperty("--delay", Math.random() * 8 + "s");
  particleContainer.appendChild(p);
}

/* ── State machine ── */
const STATUS_TEXT = {
  idle: "ready.",
  listening: "listening...",
  thinking: "thinking...",
  speaking: "speaking...",
};

let currentState = "idle";
let stateTimer = null;

const orbSystem = document.getElementById("orbSystem");
const statusEl = document.getElementById("status");
const micBtn = document.getElementById("micBtn");

function setState(state) {
  currentState = state;
  orbSystem.dataset.state = state;

  statusEl.className = "status " + (state === "idle" ? "" : state);
  statusEl.textContent = STATUS_TEXT[state];
  micBtn.classList.toggle("active", state === "listening");

  if (stateTimer) clearTimeout(stateTimer);

  /* Demo auto-advance — replace these with real Ollama calls later */
  if (state === "listening") {
    stateTimer = setTimeout(() => setState("thinking"), 3500);
  } else if (state === "thinking") {
    stateTimer = setTimeout(() => setState("speaking"), 2200);
  } else if (state === "speaking") {
    stateTimer = setTimeout(() => setState("idle"), 3800);
  }
}

/* Mic button click */
micBtn.addEventListener("click", () => {
  if (currentState === "idle") {
    setState("listening");
  } else {
    if (stateTimer) clearTimeout(stateTimer);
    setState("idle");
  }
});

/* Space bar shortcut */
document.addEventListener("keydown", (e) => {
  if (e.code === "Space" && e.target === document.body) {
    e.preventDefault();
    micBtn.click();
  }
});
