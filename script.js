// Liste der Erinnerungen
const memories = [
    { text: "When I was dead", image: "bilder/kotz1.jpeg" },
    { text: "Our 'wismar' city tour", image: "bilder/wismar1.jpeg" },
    { text: "Shared Margarita, nom nom", image: "bilder/wismarbar1.jpeg" },
    { text: "Bar with friends in weimar", image: "bilder/wismarrest1.jpeg" },
    { text: "Restaurant with friends", image: "bilder/wismarrest.jpeg" },
    { text: "Our first cuddle", image: "bilder/eliasgeb2.jpeg" },
    { text: "Fancy us achieving our Abitur", image: "bilder/fancy.jpeg" },
    { text: "Our favorite pic", image: "bilder/favpic.jpeg" },
    { text: "Awkward...xD", image: "bilder/eliasgeb1.jpeg" },
    { text: "Away with school stuff!", image: "bilder/fire.jpeg" },
    { text: "2 Cuties bei Bolten", image: "bilder/geb.jpeg" },
    { text: "Help...", image: "bilder/kotz4.jpeg" },
    { text: "The night we got together", image: "bilder/night.jpeg" },
    { text: "Important night!", image: "bilder/night1.jpeg" },
    { text: "Pic u took of me", image: "bilder/rawr.jpeg" },
    { text: "Where you looking?", image: "bilder/wismarbar2.jpeg" },
    { text: "2 drunkies", image: "bilder/wismarbar9.jpeg" },
    { text: "U good?", image: "bilder/wismarbar10.jpeg" },
    { text: "When we went to the toilet and u took ages", image: "bilder/wismartoilet.jpeg" },
    { text: "Discord evening video call!", image: "bilder/discord.jpeg" },
    { text: "Ur wearing my favourite shirt of yours", image: "bilder/car.jpeg" }, 
    { text: "My very first BeReal of you", image: "bilder/1.jpg" },
    { text: "Yes, I need a new camera", image: "bilder/2.jpg" },
    { text: "Our very first meet up", image: "bilder/3.jpg" },
    { text: "Mottowoche?", image: "bilder/4.jpg" },
    { text: "Learning for English", image: "bilder/5.jpg" },
    { text: "Du und eine Fischerboote in der Busfahrt", image: "bilder/6.jpg" },
    { text: "Kino Date", image: "bilder/7.jpg" },
    { text: "Talking for hours outside of school", image: "bilder/8.jpg" },
    { text: "Sophias Birthday", image: "bilder/9.jpg" },
    { text: "Shopping während Mottowoche", image: "bilder/10.jpg" },
    { text: "Spieleabend", image: "bilder/11.jpg" },
    { text: "Study session für Abi", image: "bilder/12.jpg" },
    { text: "Studying at HHU was it?", image: "bilder/13.jpg" },
    { text: "Gyko Bank...", image: "bilder/14.jpg" },
    { text: "Hilfe, was hast du mir angetan!", image: "bilder/15.jpg" },
    { text: "2 cutiepies", image: "bilder/16.jpg" },
    { text: "Nach Abiklausur...", image: "bilder/17.jpg" },
    { text: "Sleepover and Gaming", image: "bilder/18.jpg" },
    { text: "Rolling home after buying some SUSHI", image: "bilder/19.jpg" },
    { text: "Sleepoverrr", image: "bilder/20.jpg" },
    { text: "The start of the puzzle hanging in my room", image: "bilder/21.jpg" },
    { text: "Erstes mal bei mir im Zelt", image: "bilder/22.jpg" },
    { text: "In the car again", image: "bilder/23.jpg" },
    { text: "And again in the car", image: "bilder/24.jpg" },
    { text: "My current background image!", image: "bilder/25.jpg" },
    { text: "Sky walky walky", image: "bilder/26.jpg" },
    { text: "Sky walky walky walky", image: "bilder/27.jpg" },
    { text: "Sky walky in rain under umbrella", image: "bilder/28.jpg" },
    { text: "Shopping for your Abiball Shoes", image: "bilder/29.jpg" },
    { text: "How mean!", image: "bilder/30.jpg" },
    { text: "Holland with friends", image: "bilder/31.jpg" },
    { text: "Mein Chauffeur!", image: "bilder/32.jpg" },
    { text: "Sushi bei dir Zuhause", image: "bilder/33.jpg" },
    { text: "Aaand in the car again", image: "bilder/34.jpg" },
    { text: "Sky walky", image: "bilder/35.jpg" },
    { text: "Du am GTA spielen", image: "bilder/36.jpg" },
    { text: "Swimming at Kaarster See", image: "bilder/37.jpg" },
    { text: "Dog walky", image: "bilder/38.jpg" },
    { text: "I'm the passenger princess again", image: "bilder/39.jpg" },
    { text: "I brought you sunflowers again", image: "bilder/40.jpg" }
];

let currentMemoryIndex = 0;

// Hintergrundmusik: Laden und vorbereiten
const backgroundMusic = document.getElementById("backgroundMusic");
let isMusicPlaying = false; // Flag to track if music is playing

// Funktion: Musik starten
function playMusic() {
    if (!isMusicPlaying) {
        backgroundMusic.play();
        isMusicPlaying = true;
    }
}

// Funktion: Nächste Erinnerung anzeigen
function showNextMemory() {
    playMusic(); // Musik starten

    const memoryText = document.getElementById("memory");
    const memoryImage = document.getElementById("memoryImage");

    if (currentMemoryIndex < memories.length - 1) {
        currentMemoryIndex++;
    } else {
        currentMemoryIndex = 0; // Zurück zum ersten Bild
    }

    const memory = memories[currentMemoryIndex];
    memoryText.innerText = memory.text;
    memoryImage.src = memory.image;
    memoryText.classList.add("visible");
    memoryImage.classList.add("visible");
}

// Funktion: Alle Erinnerungen anzeigen/ausblenden (Toggle)
function toggleAllMemories() {
    playMusic(); // Musik starten

    const allMemoriesDiv = document.getElementById("all-memories");
    const allButton = document.getElementById("allButton");

    if (allMemoriesDiv.innerHTML === "") {
        // Erinnerungen anzeigen
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
        allButton.classList.add("toggled"); // Button bleibt rot
    } else {
        // Erinnerungen ausblenden
        allMemoriesDiv.innerHTML = "";
        allMemoriesDiv.classList.remove("visible");
        allButton.classList.remove("toggled"); // Button zurücksetzen
    }
}