const STORAGE_KEY = "quiniela-mundialista-v1";
const ADMIN_CODE = "1004";

const defaultState = {
  admin: false,
  players: [
    "Paquito",
    "Saul Lopez",
    "Allendy Monzon",
    "Don Paco",
    "Ingrid de Paz",
    "Estefany Tobar",
    "Willian y Hermano",
    "Francisco Ramirez 1",
    "Francisco Ramirez 2",
    "Francisco Ramirez 3",
    "Francisco Ramirez 4",
    "Francisco Ramirez 5",
    "Diego Cu",
    "Carlos Estrada",
    "Angel Samayoa",
    "Lucia Ramirez",
    "Cassidy Sandoval",
    "Tania Barillas",
    "Manuel Barrera",
    "Elver Mejia",
    "Pablo Cifuentes",
    "Pablo Cu",
    "Irvin Gonzalez",
    "Kenneth Canil",
    "Josue Giron",
    "Carlos Colindres y Edgar Herrera",
    "Hugo Revolorio",
    "Marlon Paniagua",
    "Marco Tulio",
    "Gerson Revolorio",
    "Ignacio Cordoba",
    "Arnoldo Torres",
    "Juan Carlos Cifuentes",
    "Vinicio Garcia",
    "Veronica Ambrosio",
    "Carlos Panificadora",
    "Melany Giron",
    "Carlos Chacon",
    "Edgar Guzman",
    "Beyker Isidro",
  ],
  prizes: [
    { place: "1ER. LUGAR", amount: 1000 },
    { place: "2DO. LUGAR", amount: 500 },
    { place: "3ER. LUGAR", amount: 300 },
  ],
  matches: [
    { id: "m001", group: "Grupo A", date: "2026-06-11", time: "15:00", venue: "Estadio Ciudad de Mexico", home: "Mexico", away: "Sudafrica", homeScore: null, awayScore: null },
    { id: "m002", group: "Grupo A", date: "2026-06-11", time: "22:00", venue: "Estadio Guadalajara", home: "Republica de Corea", away: "Republica Checa", homeScore: null, awayScore: null },
    { id: "m003", group: "Grupo B", date: "2026-06-12", time: "15:00", venue: "Estadio Toronto", home: "Canada", away: "Bosnia y Herzegovina", homeScore: null, awayScore: null },
    { id: "m004", group: "Grupo D", date: "2026-06-12", time: "21:00", venue: "Estadio Los Angeles", home: "Estados Unidos", away: "Paraguay", homeScore: null, awayScore: null },
    { id: "m005", group: "Grupo B", date: "2026-06-13", time: "15:00", venue: "Estadio Bahia de San Francisco", home: "Catar", away: "Suiza", homeScore: null, awayScore: null },
    { id: "m006", group: "Grupo C", date: "2026-06-13", time: "18:00", venue: "Estadio Nueva York Nueva Jersey", home: "Brasil", away: "Marruecos", homeScore: null, awayScore: null },
    { id: "m007", group: "Grupo C", date: "2026-06-13", time: "21:00", venue: "Estadio Boston", home: "Haiti", away: "Escocia", homeScore: null, awayScore: null },
    { id: "m008", group: "Grupo D", date: "2026-06-13", time: "00:00", venue: "Estadio BC Place Vancouver", home: "Australia", away: "Turquia", homeScore: null, awayScore: null },
    { id: "m009", group: "Grupo E", date: "2026-06-14", time: "13:00", venue: "Estadio Houston", home: "Alemania", away: "Curazao", homeScore: null, awayScore: null },
    { id: "m010", group: "Grupo F", date: "2026-06-14", time: "16:00", venue: "Estadio Dallas", home: "Paises Bajos", away: "Japon", homeScore: null, awayScore: null },
    { id: "m011", group: "Grupo E", date: "2026-06-14", time: "19:00", venue: "Estadio Filadelfia", home: "Costa de Marfil", away: "Ecuador", homeScore: null, awayScore: null },
    { id: "m012", group: "Grupo F", date: "2026-06-14", time: "22:00", venue: "Estadio Monterrey", home: "Suecia", away: "Tunez", homeScore: null, awayScore: null },
    { id: "m013", group: "Grupo H", date: "2026-06-15", time: "12:00", venue: "Estadio Atlanta", home: "Espana", away: "Cabo Verde", homeScore: null, awayScore: null },
    { id: "m014", group: "Grupo G", date: "2026-06-15", time: "15:00", venue: "Estadio Seattle", home: "Belgica", away: "Egipto", homeScore: null, awayScore: null },
    { id: "m015", group: "Grupo H", date: "2026-06-15", time: "18:00", venue: "Estadio Miami", home: "Arabia Saudi", away: "Uruguay", homeScore: null, awayScore: null },
    { id: "m016", group: "Grupo G", date: "2026-06-15", time: "21:00", venue: "Estadio Los Angeles", home: "RI de Iran", away: "Nueva Zelanda", homeScore: null, awayScore: null },
    { id: "m017", group: "Grupo I", date: "2026-06-16", time: "15:00", venue: "Estadio Nueva York Nueva Jersey", home: "Francia", away: "Senegal", homeScore: null, awayScore: null },
    { id: "m018", group: "Grupo I", date: "2026-06-16", time: "18:00", venue: "Estadio Boston", home: "Irak", away: "Noruega", homeScore: null, awayScore: null },
    { id: "m019", group: "Grupo J", date: "2026-06-16", time: "21:00", venue: "Estadio Kansas City", home: "Argentina", away: "Argelia", homeScore: null, awayScore: null },
    { id: "m020", group: "Grupo J", date: "2026-06-16", time: "00:00", venue: "Estadio Bahia de San Francisco", home: "Austria", away: "Jordania", homeScore: null, awayScore: null },
    { id: "m021", group: "Grupo K", date: "2026-06-17", time: "13:00", venue: "Estadio Houston", home: "Portugal", away: "RD Congo", homeScore: null, awayScore: null },
    { id: "m022", group: "Grupo L", date: "2026-06-17", time: "16:00", venue: "Estadio Dallas", home: "Inglaterra", away: "Croacia", homeScore: null, awayScore: null },
    { id: "m023", group: "Grupo L", date: "2026-06-17", time: "19:00", venue: "Estadio Toronto", home: "Ghana", away: "Panama", homeScore: null, awayScore: null },
    { id: "m024", group: "Grupo K", date: "2026-06-17", time: "22:00", venue: "Estadio Ciudad de Mexico", home: "Uzbekistan", away: "Colombia", homeScore: null, awayScore: null },
    { id: "m025", group: "Grupo A", date: "2026-06-18", time: "12:00", venue: "Estadio Atlanta", home: "Republica Checa", away: "Sudafrica", homeScore: null, awayScore: null },
    { id: "m026", group: "Grupo B", date: "2026-06-18", time: "15:00", venue: "Estadio Los Angeles", home: "Suiza", away: "Bosnia y Herzegovina", homeScore: null, awayScore: null },
    { id: "m027", group: "Grupo B", date: "2026-06-18", time: "18:00", venue: "Estadio BC Place Vancouver", home: "Canada", away: "Catar", homeScore: null, awayScore: null },
    { id: "m028", group: "Grupo A", date: "2026-06-18", time: "21:00", venue: "Estadio Guadalajara", home: "Mexico", away: "Republica de Corea", homeScore: null, awayScore: null },
    { id: "m029", group: "Grupo D", date: "2026-06-19", time: "15:00", venue: "Estadio Seattle", home: "Estados Unidos", away: "Australia", homeScore: null, awayScore: null },
    { id: "m030", group: "Grupo C", date: "2026-06-19", time: "18:00", venue: "Estadio Boston", home: "Escocia", away: "Marruecos", homeScore: null, awayScore: null },
    { id: "m031", group: "Grupo C", date: "2026-06-19", time: "21:00", venue: "Estadio Filadelfia", home: "Brasil", away: "Haiti", homeScore: null, awayScore: null },
    { id: "m032", group: "Grupo D", date: "2026-06-19", time: "00:00", venue: "Estadio Bahia de San Francisco", home: "Turquia", away: "Paraguay", homeScore: null, awayScore: null },
    { id: "m033", group: "Grupo F", date: "2026-06-20", time: "13:00", venue: "Estadio Houston", home: "Paises Bajos", away: "Suecia", homeScore: null, awayScore: null },
    { id: "m034", group: "Grupo E", date: "2026-06-20", time: "16:00", venue: "Estadio Toronto", home: "Alemania", away: "Costa de Marfil", homeScore: null, awayScore: null },
    { id: "m035", group: "Grupo E", date: "2026-06-20", time: "22:00", venue: "Estadio Kansas City", home: "Ecuador", away: "Curazao", homeScore: null, awayScore: null },
    { id: "m036", group: "Grupo F", date: "2026-06-20", time: "00:00", venue: "Estadio Monterrey", home: "Tunez", away: "Japon", homeScore: null, awayScore: null },
    { id: "m037", group: "Grupo H", date: "2026-06-21", time: "12:00", venue: "Estadio Atlanta", home: "Espana", away: "Arabia Saudi", homeScore: null, awayScore: null },
    { id: "m038", group: "Grupo G", date: "2026-06-21", time: "15:00", venue: "Estadio Los Angeles", home: "Belgica", away: "Iran", homeScore: null, awayScore: null },
    { id: "m039", group: "Grupo H", date: "2026-06-21", time: "18:00", venue: "Estadio Miami", home: "Uruguay", away: "Cabo Verde", homeScore: null, awayScore: null },
    { id: "m040", group: "Grupo G", date: "2026-06-21", time: "21:00", venue: "Estadio BC Place Vancouver", home: "Nueva Zelanda", away: "Egipto", homeScore: null, awayScore: null },
    { id: "m041", group: "Grupo J", date: "2026-06-22", time: "13:00", venue: "Estadio Dallas", home: "Argentina", away: "Austria", homeScore: null, awayScore: null },
    { id: "m042", group: "Grupo I", date: "2026-06-22", time: "17:00", venue: "Estadio Filadelfia", home: "Francia", away: "Irak", homeScore: null, awayScore: null },
    { id: "m043", group: "Grupo I", date: "2026-06-22", time: "20:00", venue: "Estadio Nueva York Nueva Jersey", home: "Noruega", away: "Senegal", homeScore: null, awayScore: null },
    { id: "m044", group: "Grupo J", date: "2026-06-22", time: "23:00", venue: "Estadio Bahia de San Francisco", home: "Jordania", away: "Argelia", homeScore: null, awayScore: null },
    { id: "m045", group: "Grupo K", date: "2026-06-23", time: "13:00", venue: "Estadio Houston", home: "Portugal", away: "Uzbekistan", homeScore: null, awayScore: null },
    { id: "m046", group: "Grupo L", date: "2026-06-23", time: "16:00", venue: "Estadio Boston", home: "Inglaterra", away: "Ghana", homeScore: null, awayScore: null },
    { id: "m047", group: "Grupo L", date: "2026-06-23", time: "19:00", venue: "Estadio Toronto", home: "Panama", away: "Croacia", homeScore: null, awayScore: null },
    { id: "m048", group: "Grupo K", date: "2026-06-23", time: "22:00", venue: "Estadio Guadalajara", home: "Colombia", away: "RD Congo", homeScore: null, awayScore: null },
    { id: "m049", group: "Grupo B", date: "2026-06-24", time: "15:00", venue: "Estadio BC Place Vancouver", home: "Suiza", away: "Canada", homeScore: null, awayScore: null },
    { id: "m050", group: "Grupo B", date: "2026-06-24", time: "15:00", venue: "Estadio Seattle", home: "Bosnia y Herzegovina", away: "Catar", homeScore: null, awayScore: null },
    { id: "m051", group: "Grupo C", date: "2026-06-24", time: "18:00", venue: "Estadio Miami", home: "Escocia", away: "Brasil", homeScore: null, awayScore: null },
    { id: "m052", group: "Grupo C", date: "2026-06-24", time: "18:00", venue: "Estadio Atlanta", home: "Marruecos", away: "Haiti", homeScore: null, awayScore: null },
    { id: "m053", group: "Grupo A", date: "2026-06-24", time: "21:00", venue: "Estadio Ciudad de Mexico", home: "Republica Checa", away: "Mexico", homeScore: null, awayScore: null },
    { id: "m054", group: "Grupo A", date: "2026-06-24", time: "21:00", venue: "Estadio Monterrey", home: "Sudafrica", away: "Republica de Corea", homeScore: null, awayScore: null },
    { id: "m055", group: "Grupo E", date: "2026-06-25", time: "16:00", venue: "Estadio Filadelfia", home: "Curazao", away: "Costa de Marfil", homeScore: null, awayScore: null },
    { id: "m056", group: "Grupo E", date: "2026-06-25", time: "16:00", venue: "Estadio Nueva York Nueva Jersey", home: "Ecuador", away: "Alemania", homeScore: null, awayScore: null },
    { id: "m057", group: "Grupo F", date: "2026-06-25", time: "19:00", venue: "Estadio Dallas", home: "Japon", away: "Suecia", homeScore: null, awayScore: null },
    { id: "m058", group: "Grupo F", date: "2026-06-25", time: "19:00", venue: "Estadio Kansas City", home: "Tunez", away: "Paises Bajos", homeScore: null, awayScore: null },
    { id: "m059", group: "Grupo D", date: "2026-06-25", time: "22:00", venue: "Estadio Los Angeles", home: "Turquia", away: "Estados Unidos", homeScore: null, awayScore: null },
    { id: "m060", group: "Grupo D", date: "2026-06-25", time: "22:00", venue: "Estadio Bahia de San Francisco", home: "Paraguay", away: "Australia", homeScore: null, awayScore: null },
    { id: "m061", group: "Grupo I", date: "2026-06-26", time: "15:00", venue: "Estadio Boston", home: "Noruega", away: "Francia", homeScore: null, awayScore: null },
    { id: "m062", group: "Grupo I", date: "2026-06-26", time: "15:00", venue: "Estadio Toronto", home: "Senegal", away: "Irak", homeScore: null, awayScore: null },
    { id: "m063", group: "Grupo H", date: "2026-06-26", time: "20:00", venue: "Estadio Houston", home: "Cabo Verde", away: "Arabia Saudi", homeScore: null, awayScore: null },
    { id: "m064", group: "Grupo H", date: "2026-06-26", time: "20:00", venue: "Estadio Guadalajara", home: "Uruguay", away: "Espana", homeScore: null, awayScore: null },
    { id: "m065", group: "Grupo G", date: "2026-06-26", time: "23:00", venue: "Estadio Seattle", home: "Egipto", away: "Iran", homeScore: null, awayScore: null },
    { id: "m066", group: "Grupo G", date: "2026-06-26", time: "23:00", venue: "Estadio BC Place Vancouver", home: "Nueva Zelanda", away: "Belgica", homeScore: null, awayScore: null },
    { id: "m067", group: "Grupo L", date: "2026-06-27", time: "17:00", venue: "Estadio Nueva York Nueva Jersey", home: "Panama", away: "Inglaterra", homeScore: null, awayScore: null },
    { id: "m068", group: "Grupo L", date: "2026-06-27", time: "17:00", venue: "Estadio Filadelfia", home: "Croacia", away: "Ghana", homeScore: null, awayScore: null },
    { id: "m069", group: "Grupo K", date: "2026-06-27", time: "19:30", venue: "Estadio Miami", home: "Colombia", away: "Portugal", homeScore: null, awayScore: null },
    { id: "m070", group: "Grupo K", date: "2026-06-27", time: "19:30", venue: "Estadio Atlanta", home: "RD Congo", away: "Uzbekistan", homeScore: null, awayScore: null },
    { id: "m071", group: "Grupo J", date: "2026-06-27", time: "22:00", venue: "Estadio Kansas City", home: "Argelia", away: "Austria", homeScore: null, awayScore: null },
    { id: "m072", group: "Grupo J", date: "2026-06-27", time: "22:00", venue: "Estadio Dallas", home: "Jordania", away: "Argentina", homeScore: null, awayScore: null },
  ],
  predictions: {},
};

const icons = {
  x:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>',
};

const flagCodes = {
  "Mexico": "mx",
  "Sudafrica": "za",
  "Republica de Corea": "kr",
  "Republica Checa": "cz",
  "Canada": "ca",
  "Bosnia y Herzegovina": "ba",
  "Estados Unidos": "us",
  "Paraguay": "py",
  "Catar": "qa",
  "Suiza": "ch",
  "Brasil": "br",
  "Marruecos": "ma",
  "Haiti": "ht",
  "Escocia": "gb-sct",
  "Australia": "au",
  "Turquia": "tr",
  "Alemania": "de",
  "Curazao": "cw",
  "Paises Bajos": "nl",
  "Japon": "jp",
  "Costa de Marfil": "ci",
  "Ecuador": "ec",
  "Suecia": "se",
  "Tunez": "tn",
  "Espana": "es",
  "Cabo Verde": "cv",
  "Belgica": "be",
  "Egipto": "eg",
  "Arabia Saudi": "sa",
  "Uruguay": "uy",
  "RI de Iran": "ir",
  "Iran": "ir",
  "Nueva Zelanda": "nz",
  "Francia": "fr",
  "Senegal": "sn",
  "Irak": "iq",
  "Noruega": "no",
  "Argentina": "ar",
  "Argelia": "dz",
  "Austria": "at",
  "Jordania": "jo",
  "Portugal": "pt",
  "RD Congo": "cd",
  "Inglaterra": "gb-eng",
  "Croacia": "hr",
  "Ghana": "gh",
  "Panama": "pa",
  "Uzbekistan": "uz",
  "Colombia": "co",
};

let state = structuredClone(defaultState);
let activeTab = "ranking";
let firebaseDb = null;
let firebaseRef = null;
let firebaseMode = null;

const els = {
  adminToggle: document.querySelector("#adminToggle"),
  adminDialog: document.querySelector("#adminDialog"),
  adminForm: document.querySelector("#adminForm"),
  adminCode: document.querySelector("#adminCode"),
  adminMessage: document.querySelector("#adminMessage"),
  rankingBody: document.querySelector("#rankingBody"),
  matchesList: document.querySelector("#matchesList"),
  predictionList: document.querySelector("#predictionList"),
  playerSelect: document.querySelector("#playerSelect"),
  dateFilter: document.querySelector("#dateFilter"),
  matchFilter: document.querySelector("#matchFilter"),
  playerList: document.querySelector("#playerList"),
  prizeList: document.querySelector("#prizeList"),
  addMatchBtn: document.querySelector("#addMatchBtn"),
  addPlayerBtn: document.querySelector("#addPlayerBtn"),
  addPrizeBtn: document.querySelector("#addPrizeBtn"),
  matchDialog: document.querySelector("#matchDialog"),
  matchForm: document.querySelector("#matchForm"),
  matchDialogTitle: document.querySelector("#matchDialogTitle"),
  matchId: document.querySelector("#matchId"),
  matchGroup: document.querySelector("#matchGroup"),
  matchDate: document.querySelector("#matchDate"),
  matchTime: document.querySelector("#matchTime"),
  matchVenue: document.querySelector("#matchVenue"),
  matchHome: document.querySelector("#matchHome"),
  matchAway: document.querySelector("#matchAway"),
  matchHomeScore: document.querySelector("#matchHomeScore"),
  matchAwayScore: document.querySelector("#matchAwayScore"),
  summaryMatches: document.querySelector("#summaryMatches"),
  summaryFinished: document.querySelector("#summaryFinished"),
  summaryLeader: document.querySelector("#summaryLeader"),
};

document.querySelectorAll("[data-icon]").forEach((node) => {
  node.innerHTML = icons[node.dataset.icon] || "";
});

document.querySelectorAll(".tab").forEach((tab) => {
  tab.addEventListener("click", () => {
    activeTab = tab.dataset.tab;
    render();
  });
});

els.adminToggle.addEventListener("click", () => {
  if (state.admin) {
    state.admin = false;
    saveState();
    render();
    return;
  }

  els.adminCode.value = "";
  els.adminMessage.textContent = "";
  els.adminDialog.showModal();
  els.adminCode.focus();
});

els.adminForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (els.adminCode.value.trim() !== ADMIN_CODE) {
    els.adminMessage.textContent = "Codigo incorrecto.";
    els.adminCode.select();
    return;
  }

  state.admin = true;
  saveState();
  els.adminDialog.close();
  render();
});

els.addMatchBtn.addEventListener("click", () => openMatchDialog());
els.addPlayerBtn.addEventListener("click", addPlayer);
els.addPrizeBtn.addEventListener("click", addPrize);
els.playerSelect.addEventListener("change", renderPredictions);
els.dateFilter.addEventListener("change", () => {
  renderMatchFilter();
  renderPredictions();
});
els.matchFilter.addEventListener("change", renderPredictions);

els.matchForm.addEventListener("submit", (event) => {
  event.preventDefault();
  saveMatch();
});

function loadState() {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (!stored) return structuredClone(defaultState);

  try {
    const parsed = { ...structuredClone(defaultState), ...JSON.parse(stored) };
    const hasPlaceholderMatches = parsed.matches.length <= 3 && parsed.matches.some((match) => String(match.home).startsWith("Equipo"));
    if (hasPlaceholderMatches) {
      parsed.matches = structuredClone(defaultState.matches);
      parsed.predictions = {};
    }
    return parsed;
  } catch {
    return structuredClone(defaultState);
  }
}

function saveState() {
  const stateToSave = { ...state, admin: false };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(stateToSave));

  if (firebaseRef && firebaseMode === "realtime") {
    firebaseRef.set(stateToSave).catch((error) => {
      console.warn("No se pudo guardar en Firebase Realtime Database.", error);
    });
    return;
  }

  if (firebaseRef && firebaseMode === "firestore") {
    firebaseRef.set(stateToSave).catch((error) => {
      console.warn("No se pudo guardar en Firebase.", error);
    });
    return;
  }

  fetch("/api/state", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(stateToSave),
  }).then((response) => {
    if (!response.ok) throw new Error("Save failed");
  }).catch(() => {
    console.warn("No se pudo guardar en db.json. Se mantuvo copia local en el navegador.");
  });
}

async function loadDatabaseState() {
  if (firebaseRef && firebaseMode === "realtime") {
    try {
      const snapshot = await firebaseRef.once("value");
      if (snapshot.exists()) return normalizeState(snapshot.val());
    } catch (error) {
      console.warn("No se pudo leer Firebase Realtime Database. Se intentara db.json.", error);
    }
  }

  if (firebaseRef && firebaseMode === "firestore") {
    try {
      const snapshot = await firebaseRef.get();
      if (snapshot.exists) return normalizeState(snapshot.data());
    } catch (error) {
      console.warn("No se pudo leer Firebase. Se intentara db.json.", error);
    }
  }

  try {
    const response = await fetch("/api/state");
    if (!response.ok) throw new Error("No database yet");
    return normalizeState(await response.json());
  } catch {
    return normalizeState(loadState());
  }
}

function hasFirebaseConfig(config) {
  return Boolean(config?.apiKey && config?.authDomain && config?.projectId && config?.appId);
}

function initFirebase() {
  const config = window.QUINIELA_FIREBASE_CONFIG;
  if (!window.firebase || !hasFirebaseConfig(config)) return false;

  try {
    const app = window.firebase.apps.length ? window.firebase.app() : window.firebase.initializeApp(config);
    if (config.databaseURL && window.firebase.database) {
      firebaseMode = "realtime";
      firebaseDb = window.firebase.database(app);
      firebaseRef = firebaseDb.ref(window.QUINIELA_FIREBASE_PATH || "quinielas/mundial-2026");
      return true;
    }

    firebaseMode = "firestore";
    firebaseDb = window.firebase.firestore(app);
    const docInfo = window.QUINIELA_FIREBASE_DOC || { collection: "quinielas", id: "mundial-2026" };
    firebaseRef = firebaseDb.collection(docInfo.collection).doc(docInfo.id);
    return true;
  } catch (error) {
    console.warn("Firebase no se pudo iniciar.", error);
    firebaseDb = null;
    firebaseRef = null;
    firebaseMode = null;
    return false;
  }
}

function normalizeState(nextState) {
  const parsed = { ...structuredClone(defaultState), ...nextState, admin: false };
  const hasPlaceholderMatches = parsed.matches.length <= 3 && parsed.matches.some((match) => String(match.home).startsWith("Equipo"));
  if (hasPlaceholderMatches) {
    parsed.matches = structuredClone(defaultState.matches);
    parsed.predictions = {};
  }
  parsed.matches = parsed.matches.map((match) => ({
    ...match,
    homeScore: match.homeScore ?? null,
    awayScore: match.awayScore ?? null,
  }));
  return parsed;
}

async function init() {
  initFirebase();
  state = await loadDatabaseState();
  saveState();
  render();
}

function getNumberOrNull(value) {
  return value === "" || value === null || Number.isNaN(Number(value)) ? null : Number(value);
}

function hasScore(matchOrPrediction) {
  return matchOrPrediction?.homeScore != null && matchOrPrediction?.awayScore != null;
}

function matchWinner(match) {
  if (!hasScore(match)) return null;
  if (match.homeScore > match.awayScore) return "home";
  if (match.homeScore < match.awayScore) return "away";
  return "draw";
}

function scorePrediction(prediction, match) {
  if (!hasScore(prediction)) return 0;
  if (!hasScore(match)) return 0;

  let points = 0;
  const predictedWinner =
    prediction.homeScore > prediction.awayScore ? "home" : prediction.homeScore < prediction.awayScore ? "away" : "draw";
  const actualWinner = matchWinner(match);

  if (prediction.homeScore === match.homeScore && prediction.awayScore === match.awayScore) points += 5;
  if (actualWinner === "draw" && predictedWinner === "draw") points += 1;
  if (actualWinner !== "draw" && predictedWinner === actualWinner) points += 3;

  return points;
}

function getPrediction(player, matchId) {
  return state.predictions[player]?.[matchId] || { homeScore: null, awayScore: null };
}

function setPrediction(player, matchId, side, value) {
  state.predictions[player] ||= {};
  state.predictions[player][matchId] ||= { homeScore: null, awayScore: null };
  state.predictions[player][matchId][side] = getNumberOrNull(value);
  saveState();
  render();
}

function calculateRanking() {
  return state.players
    .map((player, order) => {
      const stats = { player, order, points: 0, exact: 0, winner: 0, draw: 0, miss: 0 };
      state.matches.forEach((match) => {
        if (!hasScore(match)) return;
        const prediction = getPrediction(player, match.id);
        const points = scorePrediction(prediction, match);
        if (!hasScore(prediction)) {
          stats.miss += 1;
          return;
        }
        const predictedWinner =
          prediction.homeScore > prediction.awayScore ? "home" : prediction.homeScore < prediction.awayScore ? "away" : "draw";
        const actualWinner = matchWinner(match);
        stats.points += points;
        if (prediction.homeScore === match.homeScore && prediction.awayScore === match.awayScore) stats.exact += 1;
        if (actualWinner !== "draw" && predictedWinner === actualWinner) stats.winner += 1;
        if (actualWinner === "draw" && predictedWinner === "draw") stats.draw += 1;
        if (points === 0) stats.miss += 1;
      });
      return stats;
    })
    .sort((a, b) => b.points - a.points || b.exact - a.exact || a.order - b.order);
}

function render() {
  document.body.classList.toggle("admin", state.admin);
  els.adminToggle.classList.toggle("is-active", state.admin);
  els.adminToggle.textContent = state.admin ? "Admin activo" : "Modo admin";

  document.querySelectorAll(".tab").forEach((tab) => tab.classList.toggle("is-active", tab.dataset.tab === activeTab));
  document.querySelectorAll(".view").forEach((view) => view.classList.toggle("is-active", view.id === `${activeTab}View`));

  renderSummary();
  renderRanking();
  renderMatches();
  renderPlayers();
  renderPrizes();
  renderPlayerSelect();
  renderDateFilter();
  renderMatchFilter();
  renderPredictions();
}

function renderSummary() {
  const ranking = calculateRanking();
  const finishedMatches = state.matches.filter(hasScore).length;
  els.summaryMatches.textContent = state.matches.length;
  els.summaryFinished.textContent = finishedMatches;
  els.summaryLeader.textContent = finishedMatches > 0 && ranking[0] ? `${ranking[0].player} (${ranking[0].points})` : "-";
}

function renderRanking() {
  els.rankingBody.innerHTML = "";
  calculateRanking().forEach((row, index) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td><span class="rank ${index === 0 ? "rank-1" : ""}">${index + 1}</span></td>
      <td><strong>${escapeHtml(row.player)}</strong></td>
      <td><strong>${row.points}</strong></td>
      <td>${row.exact}</td>
      <td>${row.winner}</td>
      <td>${row.draw}</td>
      <td>${row.miss}</td>
    `;
    els.rankingBody.append(tr);
  });
}

function renderMatches() {
  els.matchesList.innerHTML = "";
  const template = document.querySelector("#matchTemplate");

  state.matches.forEach((match) => {
    const node = template.content.cloneNode(true);
    node.querySelector(".match-group").textContent = match.group || "Grupo";
    node.querySelector(".match-date").textContent = formatMatchSchedule(match);
    node.querySelector(".match-venue").textContent = match.venue || "";
    setFlag(node.querySelector(".home-flag"), match.home);
    setFlag(node.querySelector(".away-flag"), match.away);
    node.querySelector(".home-team").textContent = match.home;
    node.querySelector(".away-team").textContent = match.away;
    node.querySelector(".score").textContent = hasScore(match) ? `${match.homeScore} - ${match.awayScore}` : "Pend.";
    node.querySelector(".edit-match").addEventListener("click", () => openMatchDialog(match));
    node.querySelector(".delete-match").addEventListener("click", () => deleteMatch(match.id));
    els.matchesList.append(node);
  });
}

function renderPlayerSelect() {
  const current = els.playerSelect.value || state.players[0];
  els.playerSelect.innerHTML = state.players.map((player) => `<option value="${escapeHtml(player)}">${escapeHtml(player)}</option>`).join("");
  els.playerSelect.value = state.players.includes(current) ? current : state.players[0] || "";
}

function renderDateFilter() {
  const current = els.dateFilter.value || "all";
  const dates = [...new Set(state.matches.map((match) => match.date).filter(Boolean))].sort();
  els.dateFilter.innerHTML = '<option value="all">Todas</option>';
  dates.forEach((date) => {
    const option = document.createElement("option");
    option.value = date;
    option.textContent = formatDate(date);
    els.dateFilter.append(option);
  });
  els.dateFilter.value = dates.includes(current) ? current : "all";
}

function renderMatchFilter() {
  const current = els.matchFilter.value || "all";
  const date = els.dateFilter.value || "all";
  const matches = state.matches.filter((match) => date === "all" || match.date === date);
  els.matchFilter.innerHTML = '<option value="all">Todos</option>';
  matches.forEach((match) => {
    const option = document.createElement("option");
    option.value = match.id;
    option.textContent = `${match.home} vs ${match.away}`;
    els.matchFilter.append(option);
  });
  els.matchFilter.value = matches.some((match) => match.id === current) ? current : "all";
}

function renderPredictions() {
  const player = els.playerSelect.value || state.players[0];
  const date = els.dateFilter.value || "all";
  const matchId = els.matchFilter.value || "all";
  const visibleMatches = state.matches.filter((match) => {
    const matchesDate = date === "all" || match.date === date;
    const matchesGame = matchId === "all" || match.id === matchId;
    return matchesDate && matchesGame;
  });
  els.predictionList.innerHTML = "";

  if (!player) {
    els.predictionList.innerHTML = '<div class="prediction-row">Agrega integrantes para capturar predicciones.</div>';
    return;
  }

  if (visibleMatches.length === 0) {
    els.predictionList.innerHTML = '<div class="prediction-row">No hay partidos con esos filtros.</div>';
    return;
  }

  visibleMatches.forEach((match) => {
    const prediction = getPrediction(player, match.id);
    const row = document.createElement("div");
    row.className = "prediction-row";
    row.innerHTML = `
      <strong class="prediction-teams">
        <span><img class="flag prediction-home-flag" alt="" />${escapeHtml(match.home)}</span>
        <small>vs</small>
        <span>${escapeHtml(match.away)}<img class="flag prediction-away-flag" alt="" /></span>
      </strong>
      <input ${state.admin ? "" : "disabled"} type="number" min="0" value="${prediction.homeScore ?? ""}" aria-label="Prediccion ${escapeHtml(match.home)}" />
      <input ${state.admin ? "" : "disabled"} type="number" min="0" value="${prediction.awayScore ?? ""}" aria-label="Prediccion ${escapeHtml(match.away)}" />
      <span class="prediction-points">${scorePrediction(prediction, match)} pts</span>
    `;
    setFlag(row.querySelector(".prediction-home-flag"), match.home);
    setFlag(row.querySelector(".prediction-away-flag"), match.away);
    const inputs = row.querySelectorAll("input");
    inputs[0].addEventListener("change", (event) => setPrediction(player, match.id, "homeScore", event.target.value));
    inputs[1].addEventListener("change", (event) => setPrediction(player, match.id, "awayScore", event.target.value));
    els.predictionList.append(row);
  });
}

function renderPlayers() {
  els.playerList.innerHTML = "";
  state.players.forEach((player) => {
    const item = document.createElement("div");
    item.className = "simple-list__item";
    item.innerHTML = `<strong>${escapeHtml(player)}</strong>`;
    if (state.admin) {
      const button = document.createElement("button");
      button.className = "danger";
      button.textContent = "Eliminar";
      button.addEventListener("click", () => deletePlayer(player));
      item.append(button);
    }
    els.playerList.append(item);
  });
}

function renderPrizes() {
  els.prizeList.innerHTML = "";
  state.prizes.forEach((prize, index) => {
    const item = document.createElement("div");
    item.className = "simple-list__item";
    item.innerHTML = `<strong>${escapeHtml(prize.place)}</strong><span>Q ${Number(prize.amount).toLocaleString("es-GT")}</span>`;
    if (state.admin) {
      const button = document.createElement("button");
      button.className = "danger";
      button.textContent = "Eliminar";
      button.addEventListener("click", () => {
        state.prizes.splice(index, 1);
        saveState();
        render();
      });
      item.append(button);
    }
    els.prizeList.append(item);
  });
}

function openMatchDialog(match = null) {
  els.matchDialogTitle.textContent = match ? "Editar partido" : "Agregar partido";
  els.matchId.value = match?.id || "";
  els.matchGroup.value = match?.group || "";
  els.matchDate.value = match?.date || "";
  els.matchTime.value = match?.time || "";
  els.matchVenue.value = match?.venue || "";
  els.matchHome.value = match?.home || "";
  els.matchAway.value = match?.away || "";
  els.matchHomeScore.value = match?.homeScore ?? "";
  els.matchAwayScore.value = match?.awayScore ?? "";
  els.matchDialog.showModal();
}

function saveMatch() {
  const id = els.matchId.value || crypto.randomUUID();
  const match = {
    id,
    group: els.matchGroup.value.trim(),
    date: els.matchDate.value,
    time: els.matchTime.value,
    venue: els.matchVenue.value.trim(),
    home: els.matchHome.value.trim(),
    away: els.matchAway.value.trim(),
    homeScore: getNumberOrNull(els.matchHomeScore.value),
    awayScore: getNumberOrNull(els.matchAwayScore.value),
  };

  const index = state.matches.findIndex((item) => item.id === id);
  if (index >= 0) state.matches[index] = match;
  else state.matches.push(match);

  saveState();
  els.matchDialog.close();
  render();
}

function deleteMatch(id) {
  if (!confirm("¿Eliminar este partido?")) return;
  state.matches = state.matches.filter((match) => match.id !== id);
  Object.values(state.predictions).forEach((playerPredictions) => delete playerPredictions[id]);
  saveState();
  render();
}

function addPlayer() {
  const name = prompt("Nombre del integrante:");
  if (!name?.trim()) return;
  state.players.push(name.trim().toUpperCase());
  saveState();
  render();
}

function deletePlayer(player) {
  if (!confirm(`¿Eliminar a ${player}?`)) return;
  state.players = state.players.filter((item) => item !== player);
  delete state.predictions[player];
  saveState();
  render();
}

function addPrize() {
  const place = prompt("Lugar del premio, ejemplo: 4TO. LUGAR");
  if (!place?.trim()) return;
  const amount = Number(prompt("Monto del premio:") || 0);
  state.prizes.push({ place: place.trim().toUpperCase(), amount });
  saveState();
  render();
}

function exportData() {
  const blob = new Blob([JSON.stringify(state, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "quiniela-mundialista.json";
  link.click();
  URL.revokeObjectURL(url);
}

function importData(event) {
  const file = event.target.files?.[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    try {
      state = { ...structuredClone(defaultState), ...JSON.parse(reader.result) };
      state.admin = false;
      saveState();
      render();
    } catch {
      alert("No se pudo importar el archivo.");
    }
  };
  reader.readAsText(file);
  event.target.value = "";
}

function formatDate(value) {
  return new Intl.DateTimeFormat("es-GT", { day: "2-digit", month: "short", year: "numeric" }).format(new Date(`${value}T00:00:00`));
}

function formatMatchSchedule(match) {
  if (!match.date) return "Sin fecha";
  return match.time ? `${formatDate(match.date)} · ${match.time} ET` : formatDate(match.date);
}

function flagUrl(team) {
  const code = flagCodes[team];
  return code ? `https://flagcdn.com/w80/${code}.png` : "";
}

function setFlag(img, team) {
  const url = flagUrl(team);
  img.src = url;
  img.alt = url ? `Bandera de ${team}` : "";
  img.hidden = !url;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

init();
