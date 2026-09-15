const keys = document.querySelectorAll(".key");

const noteFrequencies = {
    C: 261.63,
    Db: 277.18,
    D: 293.66,
    Eb: 311.13,
    E: 329.63,
    F: 349.23,
    Gb: 369.99,
    G: 392.0,
    Ab: 415.3,
    A: 440.0,
    Bb: 466.16,
    B: 493.88,
};

const keyboardMap = {
    a: "C",
    w: "Db",
    s: "D",
    e: "Eb",
    d: "E",
    f: "F",
    t: "Gb",
    g: "G",
    y: "Ab",
    h: "A",
    u: "Bb",
    j: "B",
};

let audioContext;

function getAudioContext() {
    if (!audioContext) {
        audioContext = new (window.AudioContext || window.webkitAudioContext)();
    }
    return audioContext;
}

function playNote(note) {
    const frequency = noteFrequencies[note];
    if (!frequency) return;

    const context = getAudioContext();
    const oscillator = context.createOscillator();
    const gainNode = context.createGain();

    oscillator.type = "triangle";
    oscillator.frequency.value = frequency;

    oscillator.connect(gainNode);
    gainNode.connect(context.destination);

    const now = context.currentTime;
    gainNode.gain.setValueAtTime(0.0001, now);
    gainNode.gain.exponentialRampToValueAtTime(0.3, now + 0.01);
    gainNode.gain.exponentialRampToValueAtTime(0.0001, now + 1.2);

    oscillator.start(now);
    oscillator.stop(now + 1.25);
}

function activateKey(key) {
    key.classList.add("active");
    setTimeout(() => key.classList.remove("active"), 150);
}

function triggerNote(key) {
    playNote(key.dataset.note);
    activateKey(key);
}

keys.forEach((key) => key.addEventListener("click", () => triggerNote(key)));

document.addEventListener("keydown", (event) => {
    if (event.repeat) return;
    const note = keyboardMap[event.key.toLowerCase()];
    if (!note) return;
    const key = document.querySelector(`.key[data-note="${note}"]`);
    if (key) triggerNote(key);
});
