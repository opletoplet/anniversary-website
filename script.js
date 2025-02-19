let fotoIndex = 0;
const fotoList = ["foto1.jpg", "foto2.jpg", "foto3.jpg"];
const fotoEl = document.getElementById("foto");

setInterval(() => {
    fotoIndex = (fotoIndex + 1) % fotoList.length;
    fotoEl.src = fotoList[fotoIndex];
}, 3000);

function hitungMundur() {
    const nextAnniv = new Date("2025-12-19");
    const now = new Date();
    const selisih = nextAnniv - now;
    
    const hari = Math.floor(selisih / (1000 * 60 * 60 * 24));
    document.getElementById("countdown").innerText = hari + " hari lagi!";
}

setInterval(hitungMundur, 1000);
hitungMundur();

const musik = document.getElementById("musik");

function toggleMusic() {
    if (musik.paused) {
        musik.play();
    } else {
        musik.pause();
    }
}

function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}
