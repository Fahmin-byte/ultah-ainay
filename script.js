function surprise() {
    document.getElementById("surpriseText").innerHTML =
        "💖 Selamat ulang tahun ke-18, Ainay ✨<br>" +
        "Semoga setiap langkahmu<br>" +
        "selalu dipenuhi hal indah 🌸";
}

function toggleMusic() {
    const musik = document.getElementById("musik");
    musik.paused ? musik.play() : musik.pause();
}