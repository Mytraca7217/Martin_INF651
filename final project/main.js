//Global Variable
let currentUser = sessionStorage.getItem("vaultUser") || "GUEST";

//Default logs
const defaultLogs = 
[
  {
    id: 1,
    title: "Unauthorized access detected",
    date: "2087-03-12",
    body: "Security systems recorded multiple failed login attempts in Sector 3."
  },
  {
    id: 2,
    title: "Water filter replaced",
    date: "2087-03-11",
    body: "Maintenance team replaced primary water filter unit. Quality nominal."
  },
  {
    id: 3,
    title: "Personal note: birthday party",
    date: "2087-03-10",
    body: "Reminder: Overseer birthday celebration scheduled for 1900 hours."
  }
];

let logs = [];

//Session storage for logs
function loadLogs() 
{
  const saved = sessionStorage.getItem("vaultLogs");
  if (saved) {
    try {
      logs = JSON.parse(saved);
      return;
    } catch (e) {
      console.error("Error loading logs, using defaults:", e);
    }
  }
  logs = [...defaultLogs];
}

function saveLogs() 
{
  sessionStorage.setItem("vaultLogs", JSON.stringify(logs));
}

function saveUser() 
{
  sessionStorage.setItem("vaultUser", currentUser);
}

//Print and update functions
function printLine(output, text = "") 
{
  output.textContent += text + "\n";
  output.scrollTop = output.scrollHeight;
}

function updateStatusUser() 
{
  const statusEl = document.getElementById("status-user");
  if (statusEl) {
    statusEl.textContent = `USER: ${currentUser}`;
  }
}

//Home page elements and logic
function initHomePage() 
{
  const homeOutput = document.getElementById("home-output");
  const usernameInput = document.getElementById("username-input");
  const confirmBtn = document.getElementById("username-confirm");

  if (!homeOutput || !usernameInput || !confirmBtn) return;

  printLine(homeOutput, "BOOTING VAULT-TEC TERMINAL...");
  printLine(homeOutput, "SYSTEM ONLINE.");
  printLine(homeOutput, "ENTER USERNAME TO CONTINUE.");

  confirmBtn.addEventListener("click", () => 
 {
    const name = usernameInput.value.trim();
    if (name.length === 0) 
        {
      printLine(homeOutput, "ERROR: USERNAME REQUIRED.");
      return;
        }

    currentUser = name.toUpperCase();
    saveUser();
    updateStatusUser();

    printLine(homeOutput, `WELCOME, ${currentUser}.`);
    printLine(homeOutput, "USE NAVIGATION MENU TO ACCESS OTHER MODULES.");
  });

  usernameInput.addEventListener("keydown", (event) => 
    {
    if (event.key === "Enter") confirmBtn.click();
    });
}

//About page elements and logic
let vaultInfoRevealed = false;
let systemDiagRun = false;

function initAboutPage() 
{
  const out = document.getElementById("about-output");
  const infoBtn = document.getElementById("btn-vault-info");
  const diagBtn = document.getElementById("btn-system-diag");

  if (!out || !infoBtn || !diagBtn) return;

  printLine(out, "VAULT-TEC TERMINAL v1.0");
  printLine(out, "SELECT A FUNCTION:");

  infoBtn.addEventListener("click", () => 
{
    if (vaultInfoRevealed) 
    {
      printLine(out, "VAULT INFO ALREADY DISPLAYED.");
      return;
    }
    vaultInfoRevealed = true;
    printLine(out, "ACCESSING VAULT INFORMATION...");
    printLine(out, "VAULT ID: 101");
    printLine(out, "POPULATION: 132");
    printLine(out, "STATUS: STABLE");
  });

  diagBtn.addEventListener("click", () => 
  {
    if (systemDiagRun) 
    {
      printLine(out, "SYSTEM DIAGNOSTICS ALREADY RUN.");
      return;
    }
    systemDiagRun = true;
    printLine(out, "RUNNING SYSTEM DIAGNOSTICS...");
    printLine(out, "CPU: STABLE");
    printLine(out, "MEMORY: 98% INTEGRITY");
    printLine(out, "SENSORS: NOMINAL");
    printLine(out, "ALL SYSTEMS FUNCTIONAL.");
  });
}

// Logs page elements and logic
function renderLogs() 
{
  const out = document.getElementById("logs-output");
  if (!out) return;

  out.textContent = "";

  if (logs.length === 0) 
  {
    printLine(out, "NO LOGS AVAILABLE.");
    return;
  }

  // Sort newest first by date, then id
  const sorted = [...logs].sort((a, b) => 
  {
    const d = b.date.localeCompare(a.date);
    if (d !== 0) return d;
    return b.id - a.id;
  });

  sorted.forEach(log => 
  {
    printLine(out, `TITLE: ${log.title}`);
    printLine(out, `DATE : ${log.date}`);
    printLine(out, `ENTRY: ${log.body}`);
    printLine(out, "----------------------------------------");
  });
}

function initLogsPage() 
{
  const out = document.getElementById("logs-output");
  const form = document.getElementById("new-log-form");
  const titleInput = document.getElementById("new-log-title");
  const dateInput = document.getElementById("new-log-date");
  const bodyInput = document.getElementById("new-log-body");

  if (!out || !form || !titleInput || !bodyInput) return;

  renderLogs();

  form.addEventListener("submit", (e) => 
  {
    e.preventDefault();

    const title = titleInput.value.trim();
    const body = bodyInput.value.trim();
    let date = dateInput.value;

    if (title === "") 
    {
      alert("TITLE REQUIRED.");
      return;
    }

    if (body.length < 5) 
    {
      alert("LOG ENTRY TOO SHORT.");
      return;
    }

    if (!date) 
    {
      const today = new Date();
      date = today.toISOString().slice(0, 10);
    }

    const newLog = 
    {
      id: Date.now(),
      title,
      date,
      body
    };

    logs.push(newLog);
    saveLogs();
    renderLogs();
    form.reset();
  });
}

// ===== INIT =====
document.addEventListener("DOMContentLoaded", () => 
{
  loadLogs();
  updateStatusUser();

  // Initialize only the page we’re on
  initHomePage();
  initAboutPage();
  initLogsPage();
});

