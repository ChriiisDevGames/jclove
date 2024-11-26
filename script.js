// Hintergrundmusik abspielen bei erster Interaktion
let isMusicPlaying = false;

function playMusic() {
    const music = document.getElementById("backgroundMusic");
    if (!isMusicPlaying) {
        music.play();
        isMusicPlaying = true;
    }
}

// Erinnerungen-Objektarray
const memories = [
    { text: "When I was dead", image: "bilder/kotz1.jpeg" },
    { text: "Our 'wismar' city tour", image: "bilder/wismar1.jpeg" },
    { text: "Shared Margarita, nom nom", image: "bilder/wismarbar1.jpeg" },
    { text: "Bar with friends in Weimar", image: "bilder/wismarrest1.jpeg" },
    { text: "Restaurant with friends", image: "bilder/wismarrest.jpeg" },
    { text: "Our first cuddle", image: "bilder/eliasgeb2.jpeg" },
    { text: "The day it seriously started", image: "bilder/fancy.jpeg" },
    { text: "Discord night, slay", image: "bilder/favpic.jpeg" },
    { text: "", image: "" },
    { text: "", image: "" },
    { text: "", image: "" },
    { text: "", image: "" },
    { text: "", image: "" },
    { text: "", image: "" },
    { text: "", image: "" },
    { text: "", image: "" },
    { text: "", image: "" },
    { text: "", image: "" },
    { text: "", image: "" },
    { text: "", image: "" },
    { text: "", image: "" },
];

// Funktion zum Anzeigen einer zufälligen Erinnerung
function showRandomMemory() {
    playMusic();

    const randomIndex = Math.floor(Math.random() * memories.length);
    const memory = memories[randomIndex];

    // Text und Bild setzen und Fade-in-Effekt hinzufügen
    const memoryText = document.getElementById("memory");
    const memoryImage = document.getElementById("memoryImage");

    memoryText.classList.remove("visible");
    memoryImage.classList.remove("visible");

    setTimeout(() => {
        memoryText.innerText = memory.text;
        memoryImage.src = memory.image;
        memoryText.classList.add("visible");
        memoryImage.classList.add("visible");
    }, 100);

    // Button-Effekt: Kurz rot leuchten
    const randomButton = document.getElementById("randomButton");
    randomButton.classList.add("clicked");
    setTimeout(() => randomButton.classList.remove("clicked"), 300);
}

// Funktion zum Anzeigen/Verbergen aller Erinnerungen (Toggle)
let showAll = false;
function showAllMemories() {
    playMusic();

    const allMemoriesDiv = document.getElementById("all-memories");
    const allButton = document.getElementById("allButton");

    if (!showAll) {
        memories.forEach((memory) => {
            const memoryParagraph = document.createElement("p");
            const memoryImage = document.createElement("img");
            memoryParagraph.innerText = memory.text;
            memoryImage.src = memory.image;
            memoryImage.style.maxWidth = "100%";
            memoryImage.style.borderRadius = "10px";
            allMemoriesDiv.appendChild(memoryParagraph);
            allMemoriesDiv.appendChild(memoryImage);
        });
        allMemoriesDiv.classList.add("visible");
        allButton.classList.add("toggled");
        allButton.innerText = "Alle Erinnerungen ausblenden";
    } else {
        allMemoriesDiv.innerHTML = "";
        allMemoriesDiv.classList.remove("visible");
        allButton.classList.remove("toggled");
        allButton.innerText = "Alle Erinnerungen anzeigen";
    }

    showAll = !showAll;
}

// Funktion zum Anzeigen des Liebesbriefs
function showLetter() {
    const letter = document.getElementById("letter");
    letter.classList.add("visible");
}

// Automatisch den Liebesbrief nach einer bestimmten Zeit anzeigen
//setTimeout(showLetter, 10000); // Liebesbrief nach 10 Sekunden anzeigen