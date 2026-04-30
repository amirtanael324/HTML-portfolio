var sounds = {};

window.onload = function() {
    sounds.ahHa = new Audio("ah-ha.mp3");
    sounds.backOfTheNet = new Audio("back-of-the-net.mp3");
    sounds.bangOutOfOrder = new Audio("bangoutoforder.mp3");
    sounds.dan = new Audio("dan.mp3");
    sounds.emailOfTheEvening = new Audio("emailoftheevening.mp3");
    sounds.helloPartridge = new Audio("hellopartridge.mp3");
    sounds.iAteScotchEgg = new Audio("iateascotchegg.mp3");
    sounds.imConfused = new Audio("imconfused.mp3");
    sounds.lobotomy = new Audio("lobotomy.mp3");
    sounds.titlecard = new Audio("titlecard.mp3");
    renderPage();
};


const samples = [
    { label: "Ah-ha!",               sound: "ahHa" },
    { label: "Back of the Net",      sound: "backOfTheNet" },
    { label: "Bang Out of Order",    sound: "bangOutOfOrder" },
    { label: "Dan",                  sound: "dan" },
    { label: "Email of the Evening", sound: "emailOfTheEvening" },
    { label: "Hello Partridge",      sound: "helloPartridge" },
    { label: "I Ate Scotch Egg",     sound: "iAteScotchEgg" },
    { label: "I'm Confused",         sound: "imConfused" },
    { label: "Lobotomy",            sound: "lobotomy" },
    { label: "Title Card",          sound: "titlecard" },
];

const PAGE_SIZE = 8;
let currentPage = 0;

function totalPages() {
    return Math.ceil(samples.length / PAGE_SIZE);
}

function renderPage() {
    const grid = document.getElementById("button-grid");
    grid.innerHTML = "";

    const start = currentPage * PAGE_SIZE;
    const pageItems = samples.slice(start, start + PAGE_SIZE);

    pageItems.forEach(function(sample) {
        const btn = document.createElement("button");
        btn.className = "button";
        btn.textContent = sample.label;
        btn.onclick = function() {
            sounds[sample.sound].play();
        };
        grid.appendChild(btn);
    });

    document.getElementById("left-arrow").style.visibility =
        currentPage === 0 ? "hidden" : "visible";
    document.getElementById("right-arrow").style.visibility =
        currentPage === totalPages() - 1 ? "hidden" : "visible";
}

function changePage(direction) {
    currentPage += direction;
    renderPage();
}

function playTextToSpeech() {
    const text = document.getElementById("text-to-speech-input").value;
    if (!text) return;
    const utterance = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(utterance);
}